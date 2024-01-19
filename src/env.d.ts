/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEV_URL_CITIES: string;
  readonly VITE_PROD_URL_CITIES: string;
  readonly VITE_DEV_URL_NEIGHBORHOOD: string;
  readonly VITE_PROD_URL_NEIGHBORHOOD: string;
  readonly VITE_URL_NEIGHBORHOODS: string;
  readonly VITE_USERNAME: string;
  readonly VITE_PASSWORD: string;
  readonly VITE_URL_SIDDONS_NEIGHBORHOOD_LIST: string;
  readonly VITE_ACTION_KEY: string;
  readonly VITE_PASSWORD_NEIGHBORHOOD: string;
  readonly VITE_USERNAME_NEIGHBORHOOD: string;
  readonly VITE_URL_DEV_SIDDONS_NEIGHBORHOOD_LIST: string;
  readonly VITE_URL_PROD_SIDDONS_NEIGHBORHOOD_LIST: string;
  readonly VITE_DEV_URL_NEIGHBORHOODS: string;
  readonly VITE__DEV_USERNAME: string;
  readonly VITE_DEV_PASSWORD: string;
  readonly VITE_BASEMENT_URL: string;

  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
