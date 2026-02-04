/**
 * React Global Shim for esbuild
 *
 * This file is injected by esbuild to redirect React imports
 * to the globally loaded React bundle (ReactBundle).
 */

// Get React from the global ReactBundle (loaded via react.js)
const React = globalThis.ReactBundle?.React || globalThis.React;
const ReactDOM = globalThis.ReactBundle?.ReactDOM || globalThis.ReactDOM;
const createRoot =
  globalThis.ReactBundle?.createRoot || globalThis.ReactDOMClient?.createRoot;
const jsxRuntime = globalThis.ReactBundle?.jsxRuntime || globalThis.jsxRuntime;

// Export for esbuild to use when resolving imports
export {
  React as "react",
  ReactDOM as "react-dom",
  createRoot as "react-dom/client",
  jsxRuntime as "react/jsx-runtime",
  jsxRuntime as "react/jsx-dev-runtime",
};
