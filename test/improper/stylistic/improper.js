/* eslint-disable no-unused-vars */
const missingSemi = 1

function noSpacing() {return 1; }

const diffWontBeNice = [
  1,
  2
];

const unnecessaryDangle = [1, 2,];  // eslint-disable-line comma-spacing

const commaSpacing = [1 , 2];
const commaSpacing2 = [1,2];

const commaAtStart = [
  1
  , 2,
];

const typoInName = function typpoInName() { /* empty */ };  // eslint-disable-line func-style

function badIndent() {
    const four = 4;
	const tab = 't';
}

const noSpacing2 = { foo:true };
const unwantedSpacing = { foo : true };

if (!Math.random()) {
  // swap them instead
} else {
  // empty
}

const noSpacing3 = {foo: true};

const lineBreaksAfterOperator = 1
  + 2;

const doubleQuotes = "hello";

if (Math.random()){
  // empty
}

//no space at start
