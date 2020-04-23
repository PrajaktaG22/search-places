// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  environmentName: 'development',
  firebase : {
    apiKey: "your api key",
    authDomain: "angular-assignment-90ba4.firebaseapp.com",
    databaseURL: "https://angular-assignment-90ba4.firebaseio.com",
    projectId: "angular-assignment-90ba4",
    storageBucket: "angular-assignment-90ba4.appspot.com",
    messagingSenderId: "999250164889",
    appId: "1:999250164889:web:f583f8b60d7bf703154c08",
    measurementId: "G-PFQCY4P7ML"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
