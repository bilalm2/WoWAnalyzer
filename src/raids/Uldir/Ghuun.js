import Background from './Images/Backgrounds/Aggramar.jpg';
import Headshot from './Images/Headshots/Aggramar.png';

export default {
  id: 2122,
  name: 'Ghuun',
  background: Background,
  headshot: Headshot,
  icon: 'achievement_nazmir_boss_ghuun',
  fight: {
    //vantusRuneBuffId: 250144,
    // TODO: Add fight specific props
    // e.g. baseDowntime (seconds, percentage, based on (de)buff, etc)
    // e.g. ads
    softMitigationChecks: {
      MassiveSmash: 267412,
    },
  },
};
