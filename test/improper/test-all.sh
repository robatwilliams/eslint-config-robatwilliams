#!/bin/bash
scriptPath=$(dirname "$0")

function test {
  echo "TEST: $1"
  sh $scriptPath/test.sh $1
}

test strict-mode/ && \
test variables/
