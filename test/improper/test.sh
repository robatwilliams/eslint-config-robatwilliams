#!/bin/bash

# Remove padding spaces from output, as they'll vary based on longest error message
lintOutput="$(\
  ./node_modules/.bin/eslint --config index.json --no-color test/improper/ \
  | sed 's/^  //' \
  | tr --squeeze-repeats ' ' \
)"

# grep: find present expected errors, then use those to find any missing expected ones
# -f with single dash makes grep read from stdin (the output of the previous grep)
echo "$lintOutput" \
  | grep -oxFf test/improper/expected-errors.txt \
  | grep -vxFf - test/improper/expected-errors.txt
missingExpected=$?

[ "$missingExpected" -eq 0 ] && echo "^^^^^ Missing expected errors ^^^^^"

# Ignore everything except the error lines
echo "$lintOutput" \
  | grep '^[0-9]' \
  | head -n -1 \
  | grep -vxFf test/improper/expected-errors.txt
presentUnexpected=$?

[ "$presentUnexpected" -eq 0 ] && echo "^^^^^ Unexpected errors ^^^^^"

exit $((2 - $missingExpected - $presentUnexpected))
