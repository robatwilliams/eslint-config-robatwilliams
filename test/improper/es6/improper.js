/* eslint-disable no-unused-vars, no-empty-function */
const unnecessaryButOk = x => { return x; };
const unnecessary2ButOk = x => { return { a: x }; };

const unnecessary3 = (x) => x;

const badlySpaced = x=> x;
const badlySpaced2 = x =>x;

function *badlySpacedGenerator() {}

const isItAComparisonOrALambda = a => Math.random() ? 2 : 3;

class UselessConstructor {

  constructor() {}
} // eslint-disable-line padded-blocks

var dontUseVar = 1;

const foo = 1;
const shorthand = { foo: foo };

const acceptsCallback = callback => callback(); // use arrow or named function, not anonymous function
acceptsCallback(function () {});  // eslint-disable-line func-names

let preferConst = 1;

function preferRestOverArguments() {
  const x = arguments[0];
}

const preferSpreadOverApply = [1, 2, 3];
Math.max.apply(Math, preferSpreadOverApply);

const toBeSpread = [1, 2, 3];
const callWithSpread = () => true;
callWithSpread(... toBeSpread);
const { notRest1, notRest2, ... theRest } = {};

const hardToDebugSymbol = Symbol();

const useInCurly = 'hello';
const spacedCurly = `curly ${ useInCurly}`;

function* delegateTo() {}

function* yieldDelegateSpacing() {
  yield *delegateTo();
}
