import React from 'react';
import SPELLS from 'common/SPELLS';
import SpellIcon from 'common/SpellIcon';
import SpellLink from 'common/SpellLink';
import Combatants from 'Parser/Core/Modules/Combatants';
import Analyzer from 'Parser/Core/Analyzer';
import getDamageBonus from 'Parser/Mage/Shared/Modules/GetDamageBonus';

const DAMAGE_BONUS_PER_BOLT = 0.15;

/**
 * Frost Mage Tier21 2set
 * Each successive ice bolt of a cast of Flurry deals 15% more damage.
 */
class Tier21_2set extends Analyzer {
  static dependencies = {
    combatants: Combatants,
  }

  // To deal with back to back casts at high haste we reset bolt count on cast, but every bolt beyond the 3rd gets 1x bonus.
  // This happens to be the same way the actual game handles things.
  damage = 0;
  iceBolt = 0; // current bolt count, indexes from 0

  on_initialized() {
	   this.active = this.combatants.selected.hasBuff(SPELLS.FROST_MAGE_T21_2SET_BONUS_BUFF.id);
  }

  on_byPlayer_damage(event) {
    if(event.ability.guid !== SPELLS.FLURRY_DAMAGE.id) {
      return;
    }

    const bonusMult = this.iceBolt <= 2 ? this.iceBolt : 1;
    this.damage += getDamageBonus(event, bonusMult * DAMAGE_BONUS_PER_BOLT);

    this.iceBolt += 1;
  }

  on_byPlayer_cast(event) {
    if (event.ability.guid !== SPELLS.FLURRY.id) {
      return;
    }

    this.iceBolt = 0;
  }

  item() {
    return {
      id: SPELLS.FROST_MAGE_T21_2SET_BONUS_BUFF.id,
      icon: <SpellIcon id={SPELLS.FROST_MAGE_T21_2SET_BONUS_BUFF.id} />,
      title: <SpellLink id={SPELLS.FROST_MAGE_T21_2SET_BONUS_BUFF.id} />,
      result: this.owner.formatItemDamageDone(this.damage),
    };
  }
}

export default Tier21_2set;
