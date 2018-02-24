/* eslint-disable no-unused-vars */


const name = 'Robat';

function foo() {
  const name = 'shadowing';
}

const NaN = 1;

let pointlessInit = undefined;  // eslint-disable-line prefer-const

const definedFirst = definedSecond;
const definedSecond = true;

new NotHoisted();
class NotHoisted {}

function eventHandler() {
  const target = event.target;
}

undeclaredFunction();

/* eslint-enable no-unused-vars */
function unusedParamAfterLastUsed(a, b, unused) {
  const ab = a + b; // eslint-disable-line no-unused-vars
}
unusedParamAfterLastUsed(1, 2, 3);
/* eslint-disable no-unused-vars */
