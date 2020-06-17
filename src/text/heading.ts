import { ThemeTextDefinition } from '..';

export const heading: ThemeTextDefinition = {
  fontFamily: 'goudy-old-style, Times New Roman, serif',
  fontFallback: 'Times New Roman, serif',

  weight: {
    regular: 400,
    bold: 700,
  },

  // Metrics: font-size, line-height, letter-spacing
  metrics: {
    // Mobile
    mobile: {
      xxs: {
        size: '2rem',

        lineHeight: {
          compact: '2.5rem',
          normal: '2.5rem',
          spacious: '2.5rem',
        },

        letterSpacing: '0',
      },

      xs: {
        size: '2.25rem',

        lineHeight: {
          compact: '2.5rem',
          normal: '2.5rem',
          spacious: '2.5rem',
        },

        letterSpacing: '0',
      },

      s: {
        size: '2.5rem',

        lineHeight: {
          compact: '2.5rem',
          normal: '2.5rem',
          spacious: '2.5rem',
        },

        letterSpacing: '0',
      },

      m: {
        size: '2.875rem',

        lineHeight: {
          compact: '3rem',
          normal: '3rem',
          spacious: '3rem',
        },

        letterSpacing: '-0.00125em',
      },

      l: {
        size: '3.25rem',

        lineHeight: {
          compact: '3.5rem',
          normal: '3.5rem',
          spacious: '3.5rem',
        },

        letterSpacing: '-0.0025em',
      },

      xl: {
        size: '4rem',

        lineHeight: {
          compact: '4rem',
          normal: '4rem',
          spacious: '4rem',
        },

        letterSpacing: '-0.005em',
      },

      xxl: {
        size: '4.5rem',

        lineHeight: {
          compact: '4.5rem',
          normal: '4.5rem',
          spacious: '4.5rem',
        },

        letterSpacing: '-0.0075em',
      },
    },

    // Tablet
    tablet: {
      xxs: {
        size: '2.125rem',

        lineHeight: {
          compact: '2.5rem',
          normal: '2.5rem',
          spacious: '2.5rem',
        },

        letterSpacing: '0',
      },

      xs: {
        size: '2.375rem',

        lineHeight: {
          compact: '2.5rem',
          normal: '2.5rem',
          spacious: '2.5rem',
        },

        letterSpacing: '0',
      },

      s: {
        size: '2.75rem',

        lineHeight: {
          compact: '3rem',
          normal: '3rem',
          spacious: '3rem',
        },

        letterSpacing: '-0.00125em',
      },

      m: {
        size: '3rem',

        lineHeight: {
          compact: '3rem',
          normal: '3rem',
          spacious: '3rem',
        },

        letterSpacing: '-0.0025em',
      },

      l: {
        size: '3.375rem',

        lineHeight: {
          compact: '3.5rem',
          normal: '3.5rem',
          spacious: '3.5rem',
        },

        letterSpacing: '-0.005em',
      },

      xl: {
        size: '4.25rem',

        lineHeight: {
          compact: '4.5rem',
          normal: '4.5rem',
          spacious: '4.5rem',
        },

        letterSpacing: '-0.0075em',
      },

      xxl: {
        size: '4.875rem',

        lineHeight: {
          compact: '5rem',
          normal: '5rem',
          spacious: '5rem',
        },

        letterSpacing: '-0.01em',
      },
    },

    // Laptop and above
    laptop: {
      xxs: {
        size: '2.25rem',

        lineHeight: {
          compact: '2.5rem',
          normal: '2.5rem',
          spacious: '2.5rem',
        },

        letterSpacing: '0',
      },

      xs: {
        size: '2.5rem',

        lineHeight: {
          compact: '3rem',
          normal: '3rem',
          spacious: '3rem',
        },

        letterSpacing: '-0.00125em',
      },

      s: {
        size: '2.875rem',

        lineHeight: {
          compact: '3rem',
          normal: '3rem',
          spacious: '3rem',
        },

        letterSpacing: '-0.0025em',
      },

      m: {
        size: '3.25rem',

        lineHeight: {
          compact: '3.5rem',
          normal: '3.5rem',
          spacious: '3.5rem',
        },

        letterSpacing: '-0.005em',
      },

      l: {
        size: '4rem',

        lineHeight: {
          compact: '4.5rem',
          normal: '4.5rem',
          spacious: '4.5rem',
        },

        letterSpacing: '-0.0075em',
      },

      xl: {
        size: '5.125rem',

        lineHeight: {
          compact: '5.5rem',
          normal: '5.5rem',
          spacious: '5.5rem',
        },

        letterSpacing: '-0.01em',
      },

      xxl: {
        size: '5.75rem',

        lineHeight: {
          compact: '5.5rem',
          normal: '5.5rem',
          spacious: '5.5rem',
        },

        letterSpacing: '-0.0125em',
      },
    },
  },
};
