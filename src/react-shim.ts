/**
 * React Shim
 *
 * Bundles React and ReactDOM together and exposes them globally.
 * This ensures a single React instance is used throughout the app.
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import * as jsxRuntime from "react/jsx-runtime";

// Export everything for the global
export { React, ReactDOM, createRoot, jsxRuntime };

// Also assign to window for external access
if (typeof window !== "undefined") {
  (window as any).React = React;
  (window as any).ReactDOM = ReactDOM;
  (window as any).ReactDOMClient = { createRoot };
  (window as any).jsxRuntime = jsxRuntime;
}
