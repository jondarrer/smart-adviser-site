export default {
  breakpoints: [23.438, 40, 64, 90].map((n) => n + 'em'),
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  radii: {
    service: '4px',
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  colors: {
    text: '#293132',
    background: '#fff',
    primary: '#001561',
    primaryhover: '#0025AD',
    secondary: '#950952',
    highlight: '#47c1bf',
    muted: '#e6e6e6',
    gray: '#f6e8ea',
    accent: '#A39200', //'#BC9A5A',
    accenthover: '#B7A200', //'#BC9A5A',
    darken: '#00044c',
    error: '#f00',
    mildmute: '#f8f8f8',
    modes: {
      dark: {
        text: '#fff',
        background: '#293132',
        primary: '#3d5494',
        secondary: '#950952',
        highlight: '#b7ecec',
        muted: '#e6e6e6',
      },
    },
  },
  links: {
    nav: {
      color: 'background',
      '&:hover': {
        color: 'background',
      },
      '&:focus': {
        color: 'background',
      },
    },
    navmenuopen: {
      color: 'primary',
      '&:hover': {
        color: 'primary',
      },
      '&:focus': {
        color: 'primary',
      },
    },
    navcta: {
      bg: 'background',
      color: 'primary',
    },
    navatc: {
      bg: 'background',
      color: 'primary',
    },
  },
  sizes: {
    container: 1100,
  },
  forms: {
    input: {
      bg: 'mildmute',
    },
    textarea: {
      bg: 'mildmute',
    },
  },
  buttons: {
    primary: {
      bg: 'primary',
      boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transitionDuration: '0.2s',
      transitionProperty: 'color, background-color',
      '&:hover': {
        bg: 'primaryhover',
      },
    },
    secondary: {
      bg: 'accent',
      boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transitionDuration: '0.2s',
      transitionProperty: 'color, background-color',
      '&:hover': {
        bg: 'accenthover',
      },
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
    ul: {
      listStyleType: 'none',
      padding: 0,
    },
    li: {
      padding: 1,
    },
  },
};
