/**
 * React Mount Helper
 * Provides utilities for mounting React components in Hugo templates
 *
 * The DocComponents global is provided by the IIFE bundle (components.js)
 */
(function () {
  // Wait for DocComponents to be available
  if (typeof DocComponents === "undefined") {
    console.warn("DocComponents not loaded yet");
    return;
  }

  const React = DocComponents.React || window.React;
  const createRoot =
    DocComponents.createRoot || (window.ReactDOM && window.ReactDOM.createRoot);

  // Store for all mounted roots
  const roots = new Map();

  /**
   * Mount a React component to a DOM element
   * @param {string} componentName - Name of the component to mount
   * @param {string|HTMLElement} selector - CSS selector or DOM element
   * @param {object} props - Props to pass to the component
   */
  function mountComponent(componentName, selector, props) {
    props = props || {};
    const element =
      typeof selector === "string"
        ? document.querySelector(selector)
        : selector;

    if (!element) {
      console.warn("Mount target not found:", selector);
      return null;
    }

    const Component = DocComponents[componentName];
    if (!Component) {
      console.warn("Component not found:", componentName);
      console.log("Available components:", Object.keys(DocComponents));
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
  function unmountComponent(selector) {
    const element =
      typeof selector === "string"
        ? document.querySelector(selector)
        : selector;

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
  function autoMount() {
    const elements = document.querySelectorAll("[data-react-component]");

    elements.forEach(function (element) {
      const componentName = element.getAttribute("data-react-component");
      const propsAttr = element.getAttribute("data-react-props");
      const props = propsAttr ? JSON.parse(propsAttr) : {};

      if (componentName) {
        mountComponent(componentName, element, props);
      }
    });
  }

  // Export to window for use in templates
  window.DocComponents = DocComponents;
  window.mountComponent = mountComponent;
  window.unmountComponent = unmountComponent;
  window.autoMount = autoMount;

  // Auto-mount on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", autoMount);
  } else {
    autoMount();
  }
})();
