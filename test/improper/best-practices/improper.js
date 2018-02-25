/* eslint-disable no-unused-vars */
class ForgotGetter {

  set foo(value) {
    this._foo = value;
  }
}

[1, 2, 3].filter(dontForgetToReturn => { /* empty */ });

function inconsistentReturn(condition) {
  if (condition) {
      return true;
  } else {
      return; // eslint-disable-line no-useless-return
  }
}

function inconsistentReturn2(condition) {
  if (condition) {
      return true;
  }
}

const someMethod = () => undefined;
if (Math.random() > 0.5) someMethod();

const switchMissingDefault = Math.random();
switch (switchMissingDefault) {
  case 1: break;
  case 2: break;
}

const usingDots = [1, 2, 3];
usingDots.
  filter(x => x > 1).
  map(x => x + 1);

const squareBracketNotation = {};
const shouldntBeUsed = squareBracketNotation['useDotNotation'];

const noTypeCoercion = Math.random() == 1;
const nullAndUndefinedTheSame = Math.random() === null;

const doSomethingEvenWithInheritedProperties = x => undefined;
for (const key in {}) {
  doSomethingEvenWithInheritedProperties(key);
}

alert('dont use them');

const noEmptyFunction = () => {};

Array.prototype.myOwnMethod = () => undefined;

const noFloatingDecimal = .1;
const noFloatingDecimal2 = 1.;

const dontCoerceNumbersLikeThis = +'5';

function movedButForgotToChangeThis() {
  this.foo = 1;
}

const multiSpaces =  1;

const multiLine = "Line 1 \
Line 2";

class NoNewForSideEffects {}
new NoNewForSideEffects();

function literalThrower() {
  throw 'throw an Error instead';
}

let unusedExpression = 1; // eslint-disable-line prefer-const
unusedExpression + 1;

const noRedundantRadix = parseInt('123', 10);

async function doesntNeedToBeAsync() {
  return true;
}
