/**
 * React Mount Helper
 * Provides utilities for mounting React components in Hugo templates
 */
import React from "react";
import { createRoot } from "react-dom/client";
import * as Components from "./components.js";

// Store for all mounted roots
const roots = new Map();

/**
 * Mount a React component to a DOM element
 * @param {string} componentName - Name of the component to mount
 * @param {string|HTMLElement} selector - CSS selector or DOM element
 * @param {object} props - Props to pass to the component
 */
export function mountComponent(componentName, selector, props = {}) {
  const element =
    typeof selector === "string" ? document.querySelector(selector) : selector;

  if (!element) {
    console.warn(`Mount target not found: ${selector}`);
    return null;
  }

  const Component = Components[componentName];
  if (!Component) {
    console.warn(`Component not found: ${componentName}`);
    return null;
  }

  // Clean up existing root if any
  if (roots.has(element)) {
    roots.get(element).unmount();
  }

  const root = createRoot(element);
  root.render(React.createElement(Component, props));
  roots.set(element, root);

  return root;
}

/**
 * Unmount a React component from a DOM element
 */
export function unmountComponent(selector) {
  const element =
    typeof selector === "string" ? document.querySelector(selector) : selector;

  if (element && roots.has(element)) {
    roots.get(element).unmount();
    roots.delete(element);
    return true;
  }
  return false;
}

/**
 * Auto-mount components based on data attributes
 * Looks for elements with data-react-component attribute
 */
export function autoMount() {
  const elements = document.querySelectorAll("[data-react-component]");

  elements.forEach((element) => {
    const componentName = element.getAttribute("data-react-component");
    const propsAttr = element.getAttribute("data-react-props");
    const props = propsAttr ? JSON.parse(propsAttr) : {};

    if (componentName) {
      mountComponent(componentName, element, props);
    }
  });
}

// Export components for direct access
export { Components };

// Auto-mount on DOM ready
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", autoMount);
  } else {
    autoMount();
  }
}
