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
  primaryColor: colors.green500,
  secondaryColor: colors.yellow500,
  alternativeColor: colors.red500,

  /* status colors */
  errorColor: colors.red500,
  successColor: colors.green500,
  notifColor: colors.green500,
  neutralColor: colors.grey200,

  /* link colors */
  linkColor: colors.blue500,
  linkActiveColor: colors.blue600,
  linkVisitedColor: colors.indigo500,

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
