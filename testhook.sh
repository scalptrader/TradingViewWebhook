#!/bin/bash
#
# Filename: test.sh
# Description: This script posts the contents of a file to an
#     incoming webhook URL, simplifying the debugging process.
#
# Syntax:
# % test.sh <filename>
#
TESTFILE=$1
WEBHOOKURL=$2

curl -d @$TESTFILE -H 'Content-Type: application/json' $WEBHOOKURL
