#!/usr/bin/env bash

RULESNAME='jo-custom-ts-rules'

echo "$1"
if [ -z "$1" ]
  then
    echo "Please enter a destination path as a parameter"
    exit 1
fi

npm run build

if [ ! -d $RULESNAME ]
then
echo "Folder dist doesn't exist"
exit 1
fi

# cmd vm -f dist $RULES_NAME
cp -avr $RULESNAME $1

echo "Now include the rules into the tslint.json file"
cat ./tslint.json
