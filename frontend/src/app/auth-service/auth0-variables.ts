import { environment } from './../../environments/environment.prod'
interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'Ml7FJ1zfccBwFH8DroAieEaweUfqKaeG',
  domain: 'cns-ds.auth0.com',
  callbackURL: environment.apiUrl
};
