module.exports = {
  extends: ['plugin:vuejs-accessibility/recommended'],
  rules: {
    'vuejs-accessibility/label-has-for': ['error', {
      required: {
        every: ['id'],
      },
    }]
  },
};
