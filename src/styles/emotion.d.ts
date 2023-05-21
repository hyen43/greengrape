import '@emotion/react';
import theme from './theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      action: string;
      spray: string;
      error: string;
      success: string;
      black: string;
      white: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
    };
    font: {
      size: {
        xxxlg: string;
        xxlg: string;
        xlg: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
        xxs: string;
      };
      weight: {
        900: string;
        700: string;
        600: string;
        500: string;
        400: string;
      };
    };
    mq: {
      laptop: string;
      tablet: string;
      mobile: string;
    };
  }
}
