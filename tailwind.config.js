// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        none: 'none'
      }
    }
  },
  variants: {
    extend: {
      // Enable the ! important modifier for these utilities
      opacity: ['important'],
      animation: ['important'],
      transitionProperty: ['important']
    }
  }
};
