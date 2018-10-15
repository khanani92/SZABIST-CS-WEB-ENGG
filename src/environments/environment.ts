// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyDxssx4YjVIZzOmZr4JGhbcLvAIIQC3OfI",
    authDomain: "szabist-sample.firebaseapp.com",
    databaseURL: "https://szabist-sample.firebaseio.com",
    projectId: "szabist-sample",
    storageBucket: "szabist-sample.appspot.com",
    messagingSenderId: "182023835812"
  }
};
