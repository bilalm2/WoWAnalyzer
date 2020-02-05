import Analyzer from 'parser/core/Analyzer';
import ITEMS from 'common/ITEMS';
import { calculateSecondaryStatDefault } from 'common/stats';
import SPELLS from 'common/SPELLS';
import StatTracker from 'parser/shared/modules/StatTracker';
import Statistic from 'interface/statistics/Statistic';
import STATISTIC_CATEGORY from 'interface/others/STATISTIC_CATEGORY';
import ItemLink from 'common/ItemLink';
import UptimeIcon from 'interface/icons/Uptime';
import { formatPercentage, formatNumber } from 'common/format';
import HasteIcon from 'interface/icons/Haste';
import React from 'react';

const MAX_UPTIME_PER_PROC = 15000;

class VoidTwistedTitanshard extends Analyzer {
  static dependencies = {
    statTracker: StatTracker,
  };

  critRating = null;
  procs = 0;

  constructor(...args) {
    super(...args);
    this._item = this.selectedCombatant.getTrinket(ITEMS.VOID_TWISTED_TITANSHARD.id);
    this.active = !!this._item;
    console.log(this._item);

    if (this.active) {
      this.critRating = calculateSecondaryStatDefault(445, 589, this._item.itemLevel);
      this.statTracker.add(SPELLS.VOID_SHROUD.id, {
        crit: this.critRating,
      });
    }
  }

  get uptime() {
    return this.selectedCombatant.getBuffUptime(SPELLS.VOID_SHROUD.id) / this.owner.fightDuration;
  }

  get effectiveness() {
    return this.selectedCombatant.getBuffUptime(SPELLS.VOID_SHROUD.id) / (this.procs * MAX_UPTIME_PER_PROC);
  }

  get averageCritRating() {
    return this.critRating * this.uptime;
  }

  on_toPlayer_applybuff(event) {
    const spellId = event.ability.guid;
    if (spellId !== SPELLS.VOID_SHROUD.id) {
      return;
    }
    this.procs += 1;
  }

  statistic() {
    return (
      <Statistic
        category={STATISTIC_CATEGORY.ITEMS}
        size="flexible"
        tooltip={(
          <> :) </>
        )}
      >
        <div className="pad">
          <label><ItemLink id={ITEMS.VOID_TWISTED_TITANSHARD.id} details={this._item} /></label>

          <div className="value">
            <UptimeIcon /> {formatPercentage(this.uptime, 0)}% <small>uptime</small><br />
            <UptimeIcon /> {formatPercentage(this.effectiveness, 0)}% <small>effectiveness</small><br />
            <HasteIcon /> {formatNumber(this.averageCritRating)} <small>average Crit gained</small><br />
          </div>
        </div>
      </Statistic>
    );
  }

}

export default VoidTwistedTitanshard;
