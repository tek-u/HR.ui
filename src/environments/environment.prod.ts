export const environment = {
  production: true,
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

