export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: '"Playfair Display", Georgia, serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  colors: {
    text: '#121212',
    background: '#EFF1F3',
    primary: '#02B4FF',
    secondary: '#001746',
    accent: '#FF9731',
    muted: '#aaa',
    highlight: '#47c1bf',
    gray: '#dfe3e8',
    darken: '#00044c',
    modes: {
      dark: {
        text: '#3e4155',
        background: '#000639',
        primary: '#9c6ade',
        secondary: '#b4e1fa',
        highlight: '#b7ecec',
        muted: '#e6e6e6',
      },
    },
  },
  buttons: {
    primary: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      color: 'white',
      bg: 'primary',
    },
    secondary: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      color: 'white',
      bg: 'secondary',
    },
    accent: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      color: 'white',
      bg: 'accent',
    },
  },
  links: {
    nav: {
      fontFamily: 'heading',
      fontSize: 'inherit',
      fontWeight: 'inherit',
    },
  },
  text: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    ul: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    li: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
};
