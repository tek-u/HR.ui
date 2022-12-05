// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //- Test/Local
  hr:    'https://localhost:44349/api/hr/'

  //- Prod
  // hr:    'https://localhost:44349/api/hr/',
}

export abstract class Api {
  public static url = environment.hr
  public static VER = 'version'
  public static GET_U = 'getAllUsers'
  public static GET_Ubid = 'getUserById'
  public static NEW_U = 'createUser'
  public static UPD_U = 'updateUser'
  public static DEL_U = 'deleteUser'
}


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
