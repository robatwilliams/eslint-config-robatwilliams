/* eslint-disable no-unused-vars */
const name = 'Robat';

hoisted();
function hoisted() { /* empty */ }

/* eslint-enable no-unused-vars */
const allProps = { omit: 1, a: 1, b: 1 };
const { omit, ...someProps } = allProps;
const usingSomeProps = someProps; // eslint-disable-line no-unused-vars
/* eslint-disable no-unused-vars */

const acceptsCallback = callback => callback();
acceptsCallback(function namedCallbackToDocumentWhatItDoes() { /* empty */ });

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

class GetterWithoutSetterIsOk {

  get foo() {
    return 1;
  }

}

const snakeApiResponse = {
  user_name: 'camelcase rule no problem',  // eslint-disable-line camelcase
};
const userName = snakeApiResponse['user_name'];

const emptyFunctionOkIfExplained = () => {
  // reason
};

const fallThroughNeedsComment = () => undefined;
switch (Math.random()) {
  case 0: // falls through
  case 1:
    fallThroughNeedsComment();
  // no default
}

const coercingBooleansIsOk = !!'name';

setTimeout(function magicNumbersAreOftenOk() { /* empty */ }, 1000);

const multiSpaces = 1;  // comment
const multiSpaces2 = 2; // comment

const multiLineUsingTemplate = `one
two`;

const takeThing = x => undefined;
class Thing {}
takeThing(new Thing());

function throwLiteralIsOkInPromise() {
  return Promise.resolve()
    .then(() => { throw 200; });
}

const voidIsUsefulForIgnoringReturnValues = () => true;
const funcWeWantToHideReturnValueFrom = () => undefined;
funcWeWantToHideReturnValueFrom(void voidIsUsefulForIgnoringReturnValues());

// TODO [JIRA-123] todos tagged with an issue are ok, use a script outside of ESLint to check these

Promise.reject({ a: 'It is ok to reject with something other than an Error' });

(function iife() {
  // no-op
})();

const array1 = [];
const array2 = [1];
const array3 = [1, 2, 3];
const array4 = [
  1,
  2,
];
const array5 = [
  { foo: 1 },
  { bar: 2 },
];
const array6 = [
  {
    foo: 1,
  }, {
    bar: 2,
  },
];
const array7 = [
  {
    foo: 1,
  },  // not ideal
  {
    bar: 2,
  },
];

const DOESNT_HAVE_TO_BE_CAMEL_CASE = true;

const danglingComma = [
  1,
  2,
];
const noDanglingComma = [1, 2];

if (Math.random()) {
  // empty
} else if (Math.random()) {
  // empty
} else {
  // empty
}

const singleLineObjectNewlineOk = {
  foo: true,
};

const thinkYourselfAboutPropertyOrder = {
  name: 'First Name',
  field: 'firstName',
  cellTemplate: '',
};

let lambdaAssignIsOk = true;
const assignLambda = () => lambdaAssignIsOk = true;

const singleElementMultilineArray = [
  'long string, or expecting to add more things later',
];

const functionTakingAFewParams = (a, b, c, d) => true;
functionTakingAFewParams(123,
  'longstring',
  'long.property.access',
  'calling.some.long.method()');
functionTakingAFewParams(
  123,
  'longstring',
  'long.property.access',
  'calling.some.long.method()'
);

const ternariesMultiline = Math.random()
  ? 'something long'
  : 'something else long';

const reactComp = () => {
  return <div>braces because I know I'm going to add more than just immediate return later</div>;
};

const someBool = true;
const arrowsArentThatConfusing = () => someBool ? 10 : 20;
const arrowsCanSometimesBeConfusing = a => a > 100 ? 'foo' : 'bar';

class ReactComponent {

  // handleClick = e => this.value = e.target.value;  // needs class properties syntax

  render() {
    return <div onClick={this.handleClick}></div>;
  }

}
