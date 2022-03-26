// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const urlStarWarsAPI = 'https://swapi.dev/api';

export const environment = {
  production: false,
  base: urlStarWarsAPI,
  films:`${urlStarWarsAPI}/films`,
  people:`${urlStarWarsAPI}/people`,
  planets:`${urlStarWarsAPI}/planets`,
  species:`${urlStarWarsAPI}/species`,
  starships:`${urlStarWarsAPI}/starships`,
  vehicles:`${urlStarWarsAPI}/vehicle`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.