import { createTheme } from "@mui/material/styles"

const BaseTheme = {
  font: {
    rubik: {
      title: {
        large: '600 2.5rem /calc(3 / 2.5) "Rubik", sans-serif',
        medium: '600 2rem /calc(2.5 / 2) "Rubik", sans-serif',
      },
      subtitle: {
        large: '400 1.75rem /calc(2 / 1.75) "Rubik", sans-serif',
        medium: '400 1.5rem /calc(1.75 / 1.5) "Rubik", sans-serif',
      },
      paragraph: {
        large: '400 1.2rem /calc(1.5 / 1.25) "Rubik", sans-serif',
        medium: '400 1rem /calc(1.25 / 1) "Rubik", sans-serif',
        small: '400 0.875rem /calc(1 / 0.875) "Rubik", sans-serif',
        minimum: '400 0.75rem /calc(0.875 / 0.75) "Rubik", sans-serif',
        footNote: '400 0.625rem /calc(0.75 / 0.625) "Rubik", sans-serif',
      },
    },
    roboto: {
      title: {
        large: '600 2.5rem /calc(3 / 2.5) "Roboto", sans-serif',
        medium: '600 2rem /calc(2.5 / 2) "Roboto", sans-serif',
      },
      subtitle: {
        large: '400 1.75rem /calc(2 / 1.75) "Roboto", sans-serif',
        medium: '400 1.5rem /calc(1.75 / 1.5) "Roboto", sans-serif',
      },
      paragraph: {
        large: '400 1.2rem /calc(1.5 / 1.25) "Roboto", sans-serif',
        medium: '400 1rem /calc(1.25 / 1) "Roboto", sans-serif',
        small: '400 0.875rem /calc(1 / 0.875) "Roboto", sans-serif',
        minimum: '400 0.75rem /calc(0.875 / 0.75) "Roboto", sans-serif',
        footNote: '400 0.625rem /calc(0.75 / 0.625) "Roboto", sans-serif',
      },
    },
  },
  lineHeight: {
    title: {
      large: `${3/2.5}em`,
      medium: `${2.5/2}em`,
    },
    subtitle: {
      large: `${2.5/1.75}em`,
      medium: `${1.75/1.5}em`,
    },
    paragraph: {
      large: `${1.5/1.25}em`,
      medium: '1.25em',
      small: `${1/0.875}em`,
      minimum: `${0.875/0.75}em`,
      footNote: `${0.75/0.625}em`,
    },
  },
  palette: {
    primary: {
      main: '#82CD1C',
      100: '#F1FCD0',
      200: '#E0FAA3',
      300: '#C5F073',
      400: '#A9E14F',
      500: '#82CD1C',
      600: '#67B014',
      700: '#4F930E',
      800: '#3A7608',
      900: '#2B6205',
      80: '#B3E179CC',
      60: '#B3E1794D',
      40: '#B3E17966',
      20: '#82CD1C33',
      15: '#B3E17929',
      light: '#B3E179',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#5062D3',
      100: '#DDE3FC',
      200: '#BCC7FA',
      300: '#97A6F1',
      400: '#7A8AE4',
      500: '#5062D3',
      600: '#3A49B5',
      700: '#283497',
      800: '#19227A',
      900: '#0F1665',
      80: '#5062D3CC',
      60: '#5062D34D',
      40: '#5062D366',
      contrastText: '#FFFFFF',
    },
    tertiary: {
      main: '#050E1D',
      10: '#050E1D1A',
      30: '#050E1D56',
      100: '#DDE3FC',
      200: '#BCC7FA',
      300: '#97A6F1',
      400: '#7A8AE4',
      500: '#050E1D',
    },
    gray: {
      main: '#000000',
      10: '#FFFFFF1A',
      30: '#21212156',
      70: '#212121B2',
      100: '#FFFFFF',
      200: '#F6F6F6',
      300: '#A3B7C8',
      400: '#EDEFF4',
      500: '#626771',
      600: '#373D4A',
      700: '#212121',
    },
    gradient: {
      green: 'linear-gradient(180deg, #82CD1C 0%, #4F930E 100%)',
      blue: 'linear-gradient(180deg, #5062D3 0%, #283497 100%)',
      dark: 'linear-gradient(202.67deg, #242B39 16.09%, #1F2633 49.11%, #050D1D 85.51%)',
      linear: {
        down: 'linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)',
        transparent: 'linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%)',
        photo: 'linear-gradient(107deg, rgba(0, 0, 0, 0.40) 0%, rgba(99, 169, 4, 0.40) 100%)',
      },
    },
    semantic: {
      default: '#212836',
      success: '#84E268',
      info: '#59A1FF',
      warning: '#FCDF02',
      danger: '#FF5C47',
    },
    error: {
      main: '#FF7D6C',
      light: '#FF9789',
      dark: '#FF5C47',
    },
    warning: {
      main: '#FEEA59',
      light: '#FEEE7A',
      dark: '#FCDF02',
    },
    info: {
      main: '#7AB4FF',
      light: '#95C3FF',
      dark: '#59A1FF',
    },
    success: {
      main: '#9DE886',
      light: '#B1ED9E',
      dark: '#84E268',
    },
    font: {
      white: '#FFFFFF',
      lightWhite: '#FFFFFF80',
      black: '#212121',
    },
    components: {
      chips: {
        white: '#FFFFFF',
        red: '#FF5C47',
        green: '#B3E179',
        purple: '#97A6F1',
        yellow: '#FCDF02',
        blue: '#8AD0E6',
        lilac: '#BC8FE0',
        brown: '#E19E79',
        orange: '#fab247',
        pink: '#ee7591',
      },
    },
  },
  shadows: {
    // eslint-disable-next-line max-len
    smooth: '0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)',
    elevation: {
      small: '0px 0px 6px rgba(0, 0, 0, 0.02), 0px 2px 4px rgba(0, 0, 0, 0.08)',
      medium: '0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.06)',
      large: '0px 0px 4px rgba(0, 0, 0, 0.04), 0px 8px 16px rgba(0, 0, 0, 0.08)',
      solid: '0px 0px 4px rgba(0, 0, 0, 0.3), 0px 8px 16px rgba(0, 0, 0, 0.08)',
    },
    1: '0px 0px 6px rgba(0, 0, 0, 0.02), 0px 2px 4px rgba(0, 0, 0, 0.08)',
  },
  zIndex: {
    drawer: 1000,
  },
  textEllipsis: {
    1: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    2: {
      overflow: 'hidden',
      whiteSpace: 'pre-wrap',
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': '2',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '&::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '&::-webkit-scrollbar-track': {
          width: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '4px',
          backgroundColor: 'rgba(180,180,180,0.2)',
        },
        body: {
          width: '100%',
          height: '100%',
          margin: 0,
          fontSize: '16px',
        },
        html: {
          width: '100%',
          height: '100%',
          fontSize: '16px',
        },
      },
    },


  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 720,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  text: {
    ellipsisOverflow: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
}

export default createTheme(BaseTheme)
