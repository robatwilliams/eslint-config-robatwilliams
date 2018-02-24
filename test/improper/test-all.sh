#!/bin/bash
scriptPath=$(dirname "$0")

function test {
  echo "TEST: $1"
  sh $scriptPath/test.sh $1
}

test es6/ && \
test strict-mode/ && \
test stylistic/ && \
test variables/
