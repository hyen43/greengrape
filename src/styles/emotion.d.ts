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
        xxlg: string;
        xlg: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
        xxs: string;
      };
      weight: {
        600: string;
        400: string;
      };
    };
  }
}
