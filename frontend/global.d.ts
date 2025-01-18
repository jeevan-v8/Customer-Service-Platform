// src/global.d.ts
declare global {
  interface Window {
    Intercom: any;  // This tells TypeScript that `window.Intercom` exists
  }
}

export {};  // Make this file a module