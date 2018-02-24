/* eslint-disable no-unused-vars */
const name = 'Robat';

hoisted();
function hoisted() {}

/* eslint-enable no-unused-vars */
const allProps = { omit: 1, a: 1, b: 1 };
const { omit, ...someProps } = allProps;
const usingSomeProps = someProps; // eslint-disable-line no-unused-vars
/* eslint-disable no-unused-vars */
