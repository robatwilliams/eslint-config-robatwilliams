/* eslint-disable no-unused-vars */
const unnecessary = x => { return x; };
const unnecessary2 = x => { return { a: x }; };

const unnecessary3 = (x) => x;

const badlySpaced = x=> x;
const badlySpaced2 = x =>x;

class Base {}
class ForgotSuperCall extends Base {

  constructor() {
    this.foo = 1;
  }
}

function *badlySpacedGenerator() {}

class CantReassign {}
CantReassign = 1;

const isItAComparisonOrALambda = a => Math.random() ? 2 : 3;

const cantReassign = 1;
cantReassign = 2;

class SameNameMembers {
  bar() { }
  get bar() { return true; }
}

const noNewSymbol = new Symbol('noNewSymbol');

class Base2 {}
class SuperFirst extends Base2 {

  constructor() {
    this.foo = 1;
    super();
  }
}

class UselessConstructor {

  constructor() {}
}

var dontUseVar = 1;

const foo = 1;
const shorthand = { foo: foo };

const acceptsCallback = cb => cb();
acceptsCallback(function () {});

let preferConst = 1;

function preferRestOverArguments() {
  const x = arguments[0];
}

const preferSpreadOverApply = [1, 2, 3];
Math.max.apply(Math, preferSpreadOverApply);

function* generatorWithoutYield() {
  return true;
}

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
