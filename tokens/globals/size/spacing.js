const { range } = require("lodash");

module.exports = {
  size: {
    spacing: {
      ...range(3).reduce((acc, name) => {
        return Object.assign({}, acc, { [name]: { value: name / 16.0 } });
      }, {}),
      ...range(4, 17, 2).reduce((acc, name) => {
        return Object.assign({}, acc, { [name]: { value: name / 16.0 } });
      }, {}),
      ...range(20, 49, 4).reduce((acc, name) => {
        return Object.assign({}, acc, { [name]: { value: name / 16.0 } });
      }, {}),
      ...[56, 64].reduce((acc, name) => {
        return Object.assign({}, acc, { [name]: { value: name / 16.0 } });
      }, {}),
      ...range(80, 256, 16).reduce((acc, name) => {
        return Object.assign({}, acc, { [name]: { value: name / 16.0 } });
      }, {}),
      ...[288, 320, 384].reduce((acc, name) => {
        return Object.assign({}, acc, { [name]: { value: name / 16.0 } });
      }, {}),
    },
  },
};
