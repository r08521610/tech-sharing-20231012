/// <reference types="vite/client" />

interface ImportMetaEnv {
  [key: string]: string;
}
  
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
  
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}