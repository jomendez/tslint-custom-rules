# tslint-custom-rules


Set of TSLint custom rules, includes unit testing.

Clone the project in your computer, then run `npm install` to install all the dependencies.

Find the tests files in `./test` folder (the `.spec`), change the rues on the `/src` folder, and then run `npm test` to check everything is as expected.

Notes: 
The test wont work if you have Nodejs 11.11.0 version installed
https://github.com/facebook/jest/issues/8069
to fix the issue you should downgrade to 11.10.1 (you can use nvm)

After your rule is ready you can compile it using `npm run build`, and use the results in the `jo-custom-ts-rules` folder.

To use these rules in you VS Code project run the following command:

`./scripts/build-copy-rules.sh <path_to_your_project>`

This will build the project and create a folder `jo-custom-ts-rules` with the rules in the root of your project, then you need to copy the rules displayed in your console in you `tslint.json` .

You can turn an specific rule off by set it to false

```json
{
  "rulesDirectory": [
    "./jo-custom-ts-rules"
  ],
  "rules": {
    "no-debugger": true,
    "no-focused-test": true,
    "no-consolelog": true,
    "no-untyped-public-signature": true,
    "no-empty-method": true,
    "no-complex-logic-ngoninit": true,
    "no-subscribe-without-unsubscribe": true,
    "no-commented-code": true
  }
}

```

## Rules:
 - no-debugger: prevents leave debugger statements in the code
 - no-focused-test: prevent fdescribe() fit()
 - no-consolelog: prevent leave console.log() statement in the code
 - no-untyped-public-signature: prevent untyped methods and untyped method's parameters 
 - no-empty-method: prevent leave empty methods in the code
 - no-complex-logic-ngoninit: prevent having complex logic in onNgInit() method
 - no-subscribe-without-unsubscribe: prevent subscribe without add the subscription to the unsubscribe array.
