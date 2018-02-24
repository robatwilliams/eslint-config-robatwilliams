#!/bin/bash
scriptPath=$(dirname "$0")

subDir="$scriptPath/$1"

# Remove padding spaces from output, as they'll vary based on longest error message
lintOutput="$(\
  ./node_modules/.bin/eslint --config index.json --no-color $subDir/ \
  | sed 's/^  *//' \
  | tr --squeeze-repeats ' ' \
)"

# grep: find present expected errors, then use those to find any missing expected ones
# -f with single dash makes grep read from stdin (the output of the previous grep)
echo "$lintOutput" \
  | grep -oxFf $subDir/expected-errors.txt \
  | grep -vxFf - $subDir/expected-errors.txt
missingExpected=$?

[ "$missingExpected" -eq 0 ] && echo "^^^^^ Missing expected errors ^^^^^"

# Ignore everything except the error lines
echo "$lintOutput" \
  | grep '^[0-9]' \
  | grep -v 'warnings potentially fixable with the' \
  | grep -vxFf $subDir/expected-errors.txt
presentUnexpected=$?

[ "$presentUnexpected" -eq 0 ] && echo "^^^^^ Unexpected errors ^^^^^"

exit $((2 - $missingExpected - $presentUnexpected))
