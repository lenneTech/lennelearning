#!/bin/bash
set -e

if [ -z "$1" ]
  then
    echo "No old name supplied"
    exit 1
fi

if [ -z "$2" ]
  then
    echo "No new name supplied"
    exit 1
fi

OLD_NAME=$1
NEW_NAME=$1

rm -rf node_modules

sed -i "" "s/"$OLD_NAME"/"$NEW_NAME"/g" *
