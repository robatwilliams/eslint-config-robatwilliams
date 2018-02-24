/* eslint-disable no-unused-vars */
const name = 'Robat';

hoisted();
function hoisted() {}

/* eslint-enable no-unused-vars */
const allProps = { omit: 1, a: 1, b: 1 };
const { omit, ...someProps } = allProps;
const usingSomeProps = someProps; // eslint-disable-line no-unused-vars
/* eslint-disable no-unused-vars */

const acceptsCallback = cb => cb();
acceptsCallback(function namedCallbackToDocumentWhatItDoes() {});

const world = 'world';
const doesntNeedTemplateLiteral = 'Hello, ' + world;

const supriousThrower = () => undefined;
try {
  supriousThrower();
} catch (error) {
  // ignore spurious error
}

const parensMakeItClearer = (1 + 2) + 3;
const parensHelpWithComplicatedCondition = (Math.random > 0.5) ? 1 : 0;
