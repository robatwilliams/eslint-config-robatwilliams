#!/bin/bash

# grep: find present expected errors, then use those to find any missing expected ones
./node_modules/.bin/eslint --config index.json --no-color test/improper/ \
  | grep -oxFf test/improper/expected-errors.txt \
  | grep -vxFf - test/improper/expected-errors.txt

if [ "$?" -eq 0 ]; then
  echo -e "^^^ Missing expected errors ^^^"
  exit 1
fi
