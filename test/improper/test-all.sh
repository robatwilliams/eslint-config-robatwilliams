#!/bin/bash
scriptPath=$(dirname "$0")

function test {
  echo "TEST: $1"
  sh $scriptPath/test.sh $1
}

test best-practices/ && \
test es6/ && \
test possible-errors/ && \
test strict-mode/ && \
test stylistic/ && \
test variables/ && \
test plugins/import/static-analysis/ && \
test plugins/import/style-guide/
