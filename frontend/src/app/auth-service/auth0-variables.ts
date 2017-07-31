interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  /* clientID: 'Ml7FJ1zfccBwFH8DroAieEaweUfqKaeG', */

  // from demo app 'Ml7FJ1zfccBwFH8DroAieEaweUfqKaeG'
  clientID: 'Ml7FJ1zfccBwFH8DroAieEaweUfqKaeG',
  domain: 'cns-ds.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
