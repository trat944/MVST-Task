/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  // otras variables de entorno aquí...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}