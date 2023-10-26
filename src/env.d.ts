/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEV_URL_CITIES: string;
  readonly VITE_PROD_URL_CITIES: string;
  readonly VITE_DEV_URL_NEIGHBORHOOD: string;
  readonly VITE_PROD_URL_NEIGHBORHOOD: string;

  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
