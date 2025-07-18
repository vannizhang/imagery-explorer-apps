const colors = require('tailwindcss/colors')

/**
 * suppress the warning of deprecated colors.
 * @see https://github.com/tailwindlabs/tailwindcss/issues/4690#issuecomment-1046087220
 */
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
  content: [ 
    './src/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}' 
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      custom: {
        'light-blue': {
          DEFAULT: 'rgb(191,238,254)',
          90: 'var(--custom-light-blue-90)',
          80: 'var(--custom-light-blue-80)',
          70: 'var(--custom-light-blue-70)',
          60: 'var(--custom-light-blue-60)',
          50: 'var(--custom-light-blue-50)',
          40: 'var(--custom-light-blue-40)',
          30: 'var(--custom-light-blue-30)',
          25: 'var(--custom-light-blue-25)',
          20: 'var(--custom-light-blue-20)',
          10: 'var(--custom-light-blue-10)',
          5: 'var(--custom-light-blue-5)',
          0: 'var(--custom-light-blue-0)'
        },
        'background': {
          DEFAULT: 'rgb(0,35,47)',
          95: 'var(--custom-background-95)',
          90: 'var(--custom-background-90)',
          85: 'var(--custom-background-85)',
          80: 'var(--custom-background-80)',
          70: 'var(--custom-background-70)',
          60: 'var(--custom-background-60)',
          50: 'var(--custom-background-50)',
          40: 'var(--custom-background-40)',
          30: 'var(--custom-background-30)',
          20: 'var(--custom-background-20)',
          10: 'var(--custom-background-10)',
          5: 'var(--custom-background-5)',
          0: 'var(--custom-background-0)'
        },
        'calendar': {
          border: {
            DEFAULT: '#1C3D48',
            // 'cloudy': '#678A97',
            'available': '#678A97',
            'selected': '#C2EEFE',
          },
          background: {
            DEFAULT: '#03232F',
            // 'cloudy': '#03232F',
            'available': '#678A97',
            'selected': '#C2EEFE',
          }
        }
      },
      'calcite': {
        green: {
          60: `var(--calcite-color-green-060)`,
          70: `var(--calcite-color-green-070)`
        }
      }, 
    },
    extend: {
      spacing: {
        'bottom-panel-height': '236px',
        'app-header-size': '40px',
        'map-ui-top-position': '15px',
        'map-action-button-group-top-position': '56px',
        // 'search-widget-top-position': '50px',
        'cloud-slider-height': '80px',
        'space-between-main-secondary-selectors': 'var(--space-between-main-secondary-selectors)',
        'analysis-tool-container-width': '255px',
        // 'search-widget-width': '270px',
        'map-action-button-size': '32px',
        "landcover-explorer-time-slider-width": '400px',
      },
      dropShadow: {
        'custom-light-blue': '0px 0px 4px rgba(191,238,254, 1)',
        'custom-light-blue-90': '0px 0px 4px rgba(191,238,254, .9)',
        'custom-light-blue-50': '1px 1px 4px rgba(191,238,254, .5)',
      },
      screens: {
        'bottom-panel-content-min-width': '1540px',
        '2xl': '1620px',
        '3xl': '1920px'
      },
      gridTemplateColumns: {
        "save-option-list": "200px 1fr",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
