#!/bin/bash
scriptPath=$(dirname "$0")

function test {
  sh $scriptPath/test.sh $1
}

test variables/
