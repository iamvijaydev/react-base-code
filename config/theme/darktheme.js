import colors from './colors';
import fonts from './fonts';
import zindex from './zindex';
import media from './media';

const darktheme = {

  /* make all colors avaliable */
  colors,

  /* human readable, meaningful, z-index values */
  zindex,

  /* media rules */
  media,

  /* dark theme */
  backgroudColor: colors.black,
  textColor: colors.white,

  /* for UI elements */
  primaryColor: colors.green,
  secondaryColor: colors.yellow,
  alternativeColor: colors.red,

  /* status colors */
  errorColor: colors.red,
  successColor: colors.green,
  notifColor: colors.green,
  neutralColor: colors.gray200,

  /* link colors */
  linkColor: colors.red,
  linkActiveColor: colors.yellow,
  linkVisitedColor: colors.green,

  /* theme specific fonts */
  primaryFont: fonts.sans,
  secondaryFont: fonts.serif,
  alternativeFont: fonts.mono,

  /* font weights */
  bold: fonts.bold,
  medium: fonts.medium,
  light: fonts.light,
};

export { darktheme as default };
