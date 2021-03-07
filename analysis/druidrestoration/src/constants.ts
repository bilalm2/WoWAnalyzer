import SPELLS from 'common/SPELLS';

export const ABILITIES_AFFECTED_BY_HEALING_INCREASES = [
  SPELLS.REJUVENATION.id,
  SPELLS.REGROWTH.id,
  SPELLS.WILD_GROWTH.id,
  SPELLS.REJUVENATION_GERMINATION.id,
  SPELLS.CULTIVATION.id,
  SPELLS.TRANQUILITY_HEAL.id,
  SPELLS.EFFLORESCENCE_HEAL.id,
  SPELLS.CENARION_WARD_HEAL.id,
  SPELLS.LIFEBLOOM_HOT_HEAL.id,
  SPELLS.LIFEBLOOM_DTL_HOT_HEAL.id,
  SPELLS.LIFEBLOOM_BLOOM_HEAL.id,
  SPELLS.SWIFTMEND.id,
  SPELLS.RENEWAL_TALENT.id,
  SPELLS.SPRING_BLOSSOMS.id,
  // The following spells don't double dip in healing increases.
  SPELLS.LEECH.id,
  //TODO - blazyb double check if any non resto druid spells scales with healing increases.
];

export const ABILITIES_AFFECTED_BY_HEALING_INCREASES_SPELL_OBJECTS = [
  SPELLS.REJUVENATION,
  SPELLS.REGROWTH,
  SPELLS.WILD_GROWTH,
  SPELLS.REJUVENATION_GERMINATION,
  SPELLS.CULTIVATION,
  SPELLS.TRANQUILITY_HEAL,
  SPELLS.EFFLORESCENCE_HEAL,
  SPELLS.CENARION_WARD_HEAL,
  SPELLS.LIFEBLOOM_HOT_HEAL,
  SPELLS.LIFEBLOOM_DTL_HOT_HEAL,
  SPELLS.LIFEBLOOM_BLOOM_HEAL,
  SPELLS.SWIFTMEND,
  SPELLS.RENEWAL_TALENT,
  SPELLS.SPRING_BLOSSOMS,
  // The following spells don't double dip in healing increases.
  SPELLS.LEECH,
  //TODO - blazyb double check if any non resto druid spells scales with healing increases.
];

export const HOTS_AFFECTED_BY_ESSENCE_OF_GHANIR = [
  SPELLS.REJUVENATION,
  SPELLS.WILD_GROWTH,
  SPELLS.REJUVENATION_GERMINATION,
  SPELLS.CULTIVATION,
  SPELLS.CENARION_WARD_HEAL,
  SPELLS.LIFEBLOOM_HOT_HEAL,
  SPELLS.LIFEBLOOM_DTL_HOT_HEAL,
  // Make sure to check that event.tick is true, because regrowth/tranq uses the same id for the heal and the HoT part
  SPELLS.REGROWTH,
  SPELLS.TRANQUILITY_HEAL,
];

export const RANK_ONE_FLASH_OF_CLARITY = 0.2;
