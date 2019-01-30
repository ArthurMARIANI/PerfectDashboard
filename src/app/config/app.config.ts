import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export interface IAppConfig {
  routes: { heroes: string, error404: string };
  endpoints: { heroes: string };
  votesLimit: number;
  topHeroesLimit: number;
  snackBarDuration: number;
  repositoryURL: string;
}

export const AppConfig: IAppConfig = {
  routes: {
    heroes: 'heroes',
    error404: '404'
  },
  endpoints: {
    heroes: 'https://nodejs-example-app.herokuapp.com/heroes'
  },
  votesLimit: 3,
  topHeroesLimit: 4,
  snackBarDuration: 3000,
  repositoryURL: 'https://github.com/Ismaestro/angular5-example-app'
};
