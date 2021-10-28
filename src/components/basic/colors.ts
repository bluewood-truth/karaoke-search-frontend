import isDarkMode from 'utils/isDarkMode';

const mainColor = [
  '#ffffff',
  '#F3F4F7',
  '#B7BFCD',
  '#8795AB',
  '#4B586C',
  '#2A313C',
];

const mainColorDark = [
  '#2A313C',
  '#4B586C',
  '#8795AB',
  '#B7BFCD',
  '#F3F4F7',
  '#ffffff',
];

export const getMainColor = () => {
  return isDarkMode() ? mainColorDark : mainColor;
};

export const accentColor = {
  red: '#EC1F44',
};
