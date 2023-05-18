const colors = {
  primary: '#51E14E',
  secondary: '#E0EFE0',
  action: '#7BB9FA',
  spray: '#FFFACD',
  error: '#F34E4E',
  success: '#0084FF',
  black: '#000000',
  white: '#FFFFFF',
  gray100: '#FCFCFC',
  gray200: '#F8F8F8',
  gray300: '#C4C4C4',
  gray400: '#555555',
  gray500: '#222222',
};

const font = {
  size: {
    xxlg: '32px',
    xlg: '26px',
    lg: '22px',
    md: '20px',
    sm: '16px',
    xs: '13px',
    xxs: '9px',
  },
  weight: {
    600: '600',
    400: '400',
  },
};

const mq = {
  laptop: '@media only screen and (max-width: 1024px)',
  tablet: '@media only screen and (max-width: 768px)',
  mobile: '@media only screen and (max-width: 480px)',
};

const theme = {
  colors,
  font,
  mq,
};

export default theme;
