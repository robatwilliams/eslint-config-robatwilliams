/* eslint-disable no-unused-vars */
const name = 'Robat';

hoisted();
function hoisted() { /* empty */ }

/* eslint-enable no-unused-vars */
const allProps = { omit: 1, a: 1, b: 1 };
const { omit, ...someProps } = allProps;
const usingSomeProps = someProps; // eslint-disable-line no-unused-vars
/* eslint-disable no-unused-vars */

const acceptsCallback = cb => cb();
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
  user_name: 'camelcase rule no problem'
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
