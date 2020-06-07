#!/bin/bash
set -e

if [ -z "$2" ]
  then
    echo "No new name supplied"
    exit 1
fi

NEW_NAME=$1

rm -rf node_modules

sed -i "" "s/angular-website-template/"$NEW_NAME"/g" *

sed -i "" "s/AngularWebsiteTemplate/"$NEW_NAME"/g" *
