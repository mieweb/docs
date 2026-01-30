var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod),
      mod.exports
    );
  };
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, "default", { value: mod, enumerable: true })
      : target,
    mod
  )
);

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    (function () {
      function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function () {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              info[0],
              info[1]
            );
          },
        });
      }
      function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable)
          return null;
        maybeIterable =
          (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
          maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
      }
      function warnNoop(publicInstance, callerName) {
        publicInstance =
          ((publicInstance = publicInstance.constructor) &&
            (publicInstance.displayName || publicInstance.name)) ||
          "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] ||
          (console.error(
            "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
            callerName,
            publicInstance
          ),
          (didWarnStateUpdateForUnmountedComponent[warningKey] = true));
      }
      function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function ComponentDummy() {}
      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function noop() {}
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 =
            ("function" === typeof Symbol &&
              Symbol.toStringTag &&
              value[Symbol.toStringTag]) ||
            value.constructor.name ||
            "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE
            ? null
            : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
        }
        if ("object" === typeof type)
          switch (
            ("number" === typeof type.tag &&
              console.error(
                "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
              ),
            type.$$typeof)
          ) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type ||
                ((type = innerType.displayName || innerType.name || ""),
                (type =
                  "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
              return type;
            case REACT_MEMO_TYPE:
              return (
                (innerType = type.displayName || null),
                null !== innerType
                  ? innerType
                  : getComponentNameFromType(type.type) || "Memo"
              );
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {}
          }
        return null;
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if (
          "object" === typeof type &&
          null !== type &&
          type.$$typeof === REACT_LAZY_TYPE
        )
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x) {
          return "<...>";
        }
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown ||
            ((specialPropKeyWarningShown = true),
            console.error(
              "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
              displayName
            ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true,
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] ||
          ((didWarnAboutElementRef[componentName] = true),
          console.error(
            "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
          ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner,
        };
        null !== (void 0 !== refProp ? refProp : null)
          ? Object.defineProperty(type, "ref", {
              enumerable: false,
              get: elementRefGetterWithDeprecationWarning,
            })
          : Object.defineProperty(type, "ref", {
              enumerable: false,
              value: null,
            });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0,
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null,
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack,
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask,
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(
          oldElement.type,
          newKey,
          oldElement.props,
          oldElement._owner,
          oldElement._debugStack,
          oldElement._debugTask
        );
        oldElement._store &&
          (newKey._store.validated = oldElement._store.validated);
        return newKey;
      }
      function validateChildKeys(node) {
        isValidElement3(node)
          ? node._store && (node._store.validated = 1)
          : "object" === typeof node &&
            null !== node &&
            node.$$typeof === REACT_LAZY_TYPE &&
            ("fulfilled" === node._payload.status
              ? isValidElement3(node._payload.value) &&
                node._payload.value._store &&
                (node._payload.value._store.validated = 1)
              : node._store && (node._store.validated = 1));
      }
      function isValidElement3(object) {
        return (
          "object" === typeof object &&
          null !== object &&
          object.$$typeof === REACT_ELEMENT_TYPE
        );
      }
      function escape(key) {
        var escaperLookup = { "=": "=0", ":": "=2" };
        return (
          "$" +
          key.replace(/[=:]/g, function (match) {
            return escaperLookup[match];
          })
        );
      }
      function getElementKey(element, index) {
        return "object" === typeof element &&
          null !== element &&
          null != element.key
          ? (checkKeyStringCoercion(element.key), escape("" + element.key))
          : index.toString(36);
      }
      function resolveThenable(thenable) {
        switch (thenable.status) {
          case "fulfilled":
            return thenable.value;
          case "rejected":
            throw thenable.reason;
          default:
            switch (
              ("string" === typeof thenable.status
                ? thenable.then(noop, noop)
                : ((thenable.status = "pending"),
                  thenable.then(
                    function (fulfilledValue) {
                      "pending" === thenable.status &&
                        ((thenable.status = "fulfilled"),
                        (thenable.value = fulfilledValue));
                    },
                    function (error) {
                      "pending" === thenable.status &&
                        ((thenable.status = "rejected"),
                        (thenable.reason = error));
                    }
                  )),
              thenable.status)
            ) {
              case "fulfilled":
                return thenable.value;
              case "rejected":
                throw thenable.reason;
            }
        }
        throw thenable;
      }
      function mapIntoArray(
        children,
        array,
        escapedPrefix,
        nameSoFar,
        callback
      ) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = false;
        if (null === children) invokeCallback = true;
        else
          switch (type) {
            case "bigint":
            case "string":
            case "number":
              invokeCallback = true;
              break;
            case "object":
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
                  break;
                case REACT_LAZY_TYPE:
                  return (
                    (invokeCallback = children._init),
                    mapIntoArray(
                      invokeCallback(children._payload),
                      array,
                      escapedPrefix,
                      nameSoFar,
                      callback
                    )
                  );
              }
          }
        if (invokeCallback) {
          invokeCallback = children;
          callback = callback(invokeCallback);
          var childKey =
            "" === nameSoFar
              ? "." + getElementKey(invokeCallback, 0)
              : nameSoFar;
          isArrayImpl(callback)
            ? ((escapedPrefix = ""),
              null != childKey &&
                (escapedPrefix =
                  childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),
              mapIntoArray(callback, array, escapedPrefix, "", function (c) {
                return c;
              }))
            : null != callback &&
              (isValidElement3(callback) &&
                (null != callback.key &&
                  ((invokeCallback && invokeCallback.key === callback.key) ||
                    checkKeyStringCoercion(callback.key)),
                (escapedPrefix = cloneAndReplaceKey(
                  callback,
                  escapedPrefix +
                    (null == callback.key ||
                    (invokeCallback && invokeCallback.key === callback.key)
                      ? ""
                      : ("" + callback.key).replace(
                          userProvidedKeyEscapeRegex,
                          "$&/"
                        ) + "/") +
                    childKey
                )),
                "" !== nameSoFar &&
                  null != invokeCallback &&
                  isValidElement3(invokeCallback) &&
                  null == invokeCallback.key &&
                  invokeCallback._store &&
                  !invokeCallback._store.validated &&
                  (escapedPrefix._store.validated = 2),
                (callback = escapedPrefix)),
              array.push(callback));
          return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children))
          for (var i = 0; i < children.length; i++)
            ((nameSoFar = children[i]),
              (type = childKey + getElementKey(nameSoFar, i)),
              (invokeCallback += mapIntoArray(
                nameSoFar,
                array,
                escapedPrefix,
                type,
                callback
              )));
        else if (((i = getIteratorFn(children)), "function" === typeof i))
          for (
            i === children.entries &&
              (didWarnAboutMaps ||
                console.warn(
                  "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
                ),
              (didWarnAboutMaps = true)),
              children = i.call(children),
              i = 0;
            !(nameSoFar = children.next()).done;
          )
            ((nameSoFar = nameSoFar.value),
              (type = childKey + getElementKey(nameSoFar, i++)),
              (invokeCallback += mapIntoArray(
                nameSoFar,
                array,
                escapedPrefix,
                type,
                callback
              )));
        else if ("object" === type) {
          if ("function" === typeof children.then)
            return mapIntoArray(
              resolveThenable(children),
              array,
              escapedPrefix,
              nameSoFar,
              callback
            );
          array = String(children);
          throw Error(
            "Objects are not valid as a React child (found: " +
              ("[object Object]" === array
                ? "object with keys {" + Object.keys(children).join(", ") + "}"
                : array) +
              "). If you meant to render a collection of children, use an array instead."
          );
        }
        return invokeCallback;
      }
      function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [],
          count = 0;
        mapIntoArray(children, result, "", "", function (child) {
          return func.call(context, child, count++);
        });
        return result;
      }
      function lazyInitializer(payload) {
        if (-1 === payload._status) {
          var ioInfo = payload._ioInfo;
          null != ioInfo && (ioInfo.start = ioInfo.end = performance.now());
          ioInfo = payload._result;
          var thenable = ioInfo();
          thenable.then(
            function (moduleObject) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 1;
                payload._result = moduleObject;
                var _ioInfo = payload._ioInfo;
                null != _ioInfo && (_ioInfo.end = performance.now());
                void 0 === thenable.status &&
                  ((thenable.status = "fulfilled"),
                  (thenable.value = moduleObject));
              }
            },
            function (error) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 2;
                payload._result = error;
                var _ioInfo2 = payload._ioInfo;
                null != _ioInfo2 && (_ioInfo2.end = performance.now());
                void 0 === thenable.status &&
                  ((thenable.status = "rejected"), (thenable.reason = error));
              }
            }
          );
          ioInfo = payload._ioInfo;
          if (null != ioInfo) {
            ioInfo.value = thenable;
            var displayName = thenable.displayName;
            "string" === typeof displayName && (ioInfo.name = displayName);
          }
          -1 === payload._status &&
            ((payload._status = 0), (payload._result = thenable));
        }
        if (1 === payload._status)
          return (
            (ioInfo = payload._result),
            void 0 === ioInfo &&
              console.error(
                "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
                ioInfo
              ),
            "default" in ioInfo ||
              console.error(
                "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
                ioInfo
              ),
            ioInfo.default
          );
        throw payload._result;
      }
      function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher &&
          console.error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
          );
        return dispatcher;
      }
      function releaseAsyncTransition() {
        ReactSharedInternals.asyncTransitions--;
      }
      function enqueueTask(task) {
        if (null === enqueueTaskImpl)
          try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module && module[requireString]).call(
              module,
              "timers"
            ).setImmediate;
          } catch (_err) {
            enqueueTaskImpl = function (callback) {
              false === didWarnAboutMessageChannel &&
                ((didWarnAboutMessageChannel = true),
                "undefined" === typeof MessageChannel &&
                  console.error(
                    "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
                  ));
              var channel = new MessageChannel();
              channel.port1.onmessage = callback;
              channel.port2.postMessage(void 0);
            };
          }
        return enqueueTaskImpl(task);
      }
      function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError
          ? new AggregateError(errors)
          : errors[0];
      }
      function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 &&
          console.error(
            "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
          );
        actScopeDepth = prevActScopeDepth;
      }
      function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue)
          if (0 !== queue.length)
            try {
              flushActQueue(queue);
              enqueueTask(function () {
                return recursivelyFlushAsyncActWork(
                  returnValue,
                  resolve,
                  reject
                );
              });
              return;
            } catch (error) {
              ReactSharedInternals.thrownErrors.push(error);
            }
          else ReactSharedInternals.actQueue = null;
        0 < ReactSharedInternals.thrownErrors.length
          ? ((queue = aggregateErrors(ReactSharedInternals.thrownErrors)),
            (ReactSharedInternals.thrownErrors.length = 0),
            reject(queue))
          : resolve(returnValue);
      }
      function flushActQueue(queue) {
        if (!isFlushing) {
          isFlushing = true;
          var i = 0;
          try {
            for (; i < queue.length; i++) {
              var callback = queue[i];
              do {
                ReactSharedInternals.didUsePromise = false;
                var continuation = callback(false);
                if (null !== continuation) {
                  if (ReactSharedInternals.didUsePromise) {
                    queue[i] = callback;
                    queue.splice(0, i);
                    return;
                  }
                  callback = continuation;
                } else break;
              } while (1);
            }
            queue.length = 0;
          } catch (error) {
            (queue.splice(0, i + 1),
              ReactSharedInternals.thrownErrors.push(error));
          } finally {
            isFlushing = false;
          }
        }
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        "function" ===
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
        REACT_PORTAL_TYPE = Symbol.for("react.portal"),
        REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
        REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
        REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
        REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
        REACT_CONTEXT_TYPE = Symbol.for("react.context"),
        REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
        REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
        REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
        REACT_MEMO_TYPE = Symbol.for("react.memo"),
        REACT_LAZY_TYPE = Symbol.for("react.lazy"),
        REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
        MAYBE_ITERATOR_SYMBOL = Symbol.iterator,
        didWarnStateUpdateForUnmountedComponent = {},
        ReactNoopUpdateQueue = {
          isMounted: function () {
            return false;
          },
          enqueueForceUpdate: function (publicInstance) {
            warnNoop(publicInstance, "forceUpdate");
          },
          enqueueReplaceState: function (publicInstance) {
            warnNoop(publicInstance, "replaceState");
          },
          enqueueSetState: function (publicInstance) {
            warnNoop(publicInstance, "setState");
          },
        },
        assign = Object.assign,
        emptyObject = {};
      Object.freeze(emptyObject);
      Component.prototype.isReactComponent = {};
      Component.prototype.setState = function (partialState, callback) {
        if (
          "object" !== typeof partialState &&
          "function" !== typeof partialState &&
          null != partialState
        )
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, partialState, callback, "setState");
      };
      Component.prototype.forceUpdate = function (callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
      };
      var deprecatedAPIs = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).",
        ],
      };
      for (fnName in deprecatedAPIs)
        deprecatedAPIs.hasOwnProperty(fnName) &&
          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      ComponentDummy.prototype = Component.prototype;
      deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
      deprecatedAPIs.constructor = PureComponent;
      assign(deprecatedAPIs, Component.prototype);
      deprecatedAPIs.isPureReactComponent = true;
      var isArrayImpl = Array.isArray,
        REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
        ReactSharedInternals = {
          H: null,
          A: null,
          T: null,
          S: null,
          actQueue: null,
          asyncTransitions: 0,
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false,
          didUsePromise: false,
          thrownErrors: [],
          getCurrentStack: null,
          recentlyCreatedOwnerStacks: 0,
        },
        hasOwnProperty = Object.prototype.hasOwnProperty,
        createTask = console.createTask
          ? console.createTask
          : function () {
              return null;
            };
      deprecatedAPIs = {
        react_stack_bottom_frame: function (callStackForError) {
          return callStackForError();
        },
      };
      var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(
        deprecatedAPIs,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutMaps = false,
        userProvidedKeyEscapeRegex = /\/+/g,
        reportGlobalError =
          "function" === typeof reportError
            ? reportError
            : function (error) {
                if (
                  "object" === typeof window &&
                  "function" === typeof window.ErrorEvent
                ) {
                  var event = new window.ErrorEvent("error", {
                    bubbles: true,
                    cancelable: true,
                    message:
                      "object" === typeof error &&
                      null !== error &&
                      "string" === typeof error.message
                        ? String(error.message)
                        : String(error),
                    error,
                  });
                  if (!window.dispatchEvent(event)) return;
                } else if (
                  "object" === typeof process &&
                  "function" === typeof process.emit
                ) {
                  process.emit("uncaughtException", error);
                  return;
                }
                console.error(error);
              },
        didWarnAboutMessageChannel = false,
        enqueueTaskImpl = null,
        actScopeDepth = 0,
        didWarnNoAwaitAct = false,
        isFlushing = false,
        queueSeveralMicrotasks =
          "function" === typeof queueMicrotask
            ? function (callback) {
                queueMicrotask(function () {
                  return queueMicrotask(callback);
                });
              }
            : enqueueTask;
      deprecatedAPIs = Object.freeze({
        __proto__: null,
        c: function (size) {
          return resolveDispatcher().useMemoCache(size);
        },
      });
      var fnName = {
        map: mapChildren,
        forEach: function (children, forEachFunc, forEachContext) {
          mapChildren(
            children,
            function () {
              forEachFunc.apply(this, arguments);
            },
            forEachContext
          );
        },
        count: function (children) {
          var n = 0;
          mapChildren(children, function () {
            n++;
          });
          return n;
        },
        toArray: function (children) {
          return (
            mapChildren(children, function (child) {
              return child;
            }) || []
          );
        },
        only: function (children) {
          if (!isValidElement3(children))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return children;
        },
      };
      exports.Activity = REACT_ACTIVITY_TYPE;
      exports.Children = fnName;
      exports.Component = Component;
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.Profiler = REACT_PROFILER_TYPE;
      exports.PureComponent = PureComponent;
      exports.StrictMode = REACT_STRICT_MODE_TYPE;
      exports.Suspense = REACT_SUSPENSE_TYPE;
      exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
        ReactSharedInternals;
      exports.__COMPILER_RUNTIME = deprecatedAPIs;
      exports.act = function (callback) {
        var prevActQueue = ReactSharedInternals.actQueue,
          prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = (ReactSharedInternals.actQueue =
            null !== prevActQueue ? prevActQueue : []),
          didAwaitActCall = false;
        try {
          var result = callback();
        } catch (error) {
          ReactSharedInternals.thrownErrors.push(error);
        }
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw (
            popActScope(prevActQueue, prevActScopeDepth),
            (callback = aggregateErrors(ReactSharedInternals.thrownErrors)),
            (ReactSharedInternals.thrownErrors.length = 0),
            callback
          );
        if (
          null !== result &&
          "object" === typeof result &&
          "function" === typeof result.then
        ) {
          var thenable = result;
          queueSeveralMicrotasks(function () {
            didAwaitActCall ||
              didWarnNoAwaitAct ||
              ((didWarnNoAwaitAct = true),
              console.error(
                "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
              ));
          });
          return {
            then: function (resolve, reject) {
              didAwaitActCall = true;
              thenable.then(
                function (returnValue) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  if (0 === prevActScopeDepth) {
                    try {
                      (flushActQueue(queue),
                        enqueueTask(function () {
                          return recursivelyFlushAsyncActWork(
                            returnValue,
                            resolve,
                            reject
                          );
                        }));
                    } catch (error$0) {
                      ReactSharedInternals.thrownErrors.push(error$0);
                    }
                    if (0 < ReactSharedInternals.thrownErrors.length) {
                      var _thrownError = aggregateErrors(
                        ReactSharedInternals.thrownErrors
                      );
                      ReactSharedInternals.thrownErrors.length = 0;
                      reject(_thrownError);
                    }
                  } else resolve(returnValue);
                },
                function (error) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  0 < ReactSharedInternals.thrownErrors.length
                    ? ((error = aggregateErrors(
                        ReactSharedInternals.thrownErrors
                      )),
                      (ReactSharedInternals.thrownErrors.length = 0),
                      reject(error))
                    : reject(error);
                }
              );
            },
          };
        }
        var returnValue$jscomp$0 = result;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth &&
          (flushActQueue(queue),
          0 !== queue.length &&
            queueSeveralMicrotasks(function () {
              didAwaitActCall ||
                didWarnNoAwaitAct ||
                ((didWarnNoAwaitAct = true),
                console.error(
                  "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
                ));
            }),
          (ReactSharedInternals.actQueue = null));
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw (
            (callback = aggregateErrors(ReactSharedInternals.thrownErrors)),
            (ReactSharedInternals.thrownErrors.length = 0),
            callback
          );
        return {
          then: function (resolve, reject) {
            didAwaitActCall = true;
            0 === prevActScopeDepth
              ? ((ReactSharedInternals.actQueue = queue),
                enqueueTask(function () {
                  return recursivelyFlushAsyncActWork(
                    returnValue$jscomp$0,
                    resolve,
                    reject
                  );
                }))
              : resolve(returnValue$jscomp$0);
          },
        };
      };
      exports.cache = function (fn) {
        return function () {
          return fn.apply(null, arguments);
        };
      };
      exports.cacheSignal = function () {
        return null;
      };
      exports.captureOwnerStack = function () {
        var getCurrentStack = ReactSharedInternals.getCurrentStack;
        return null === getCurrentStack ? null : getCurrentStack();
      };
      exports.cloneElement = function (element, config, children) {
        if (null === element || void 0 === element)
          throw Error(
            "The argument must be a React element, but you passed " +
              element +
              "."
          );
        var props = assign({}, element.props),
          key = element.key,
          owner = element._owner;
        if (null != config) {
          var JSCompiler_inline_result;
          a: {
            if (
              hasOwnProperty.call(config, "ref") &&
              (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
                config,
                "ref"
              ).get) &&
              JSCompiler_inline_result.isReactWarning
            ) {
              JSCompiler_inline_result = false;
              break a;
            }
            JSCompiler_inline_result = void 0 !== config.ref;
          }
          JSCompiler_inline_result && (owner = getOwner());
          hasValidKey(config) &&
            (checkKeyStringCoercion(config.key), (key = "" + config.key));
          for (propName in config)
            !hasOwnProperty.call(config, propName) ||
              "key" === propName ||
              "__self" === propName ||
              "__source" === propName ||
              ("ref" === propName && void 0 === config.ref) ||
              (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
          JSCompiler_inline_result = Array(propName);
          for (var i = 0; i < propName; i++)
            JSCompiler_inline_result[i] = arguments[i + 2];
          props.children = JSCompiler_inline_result;
        }
        props = ReactElement(
          element.type,
          key,
          props,
          owner,
          element._debugStack,
          element._debugTask
        );
        for (key = 2; key < arguments.length; key++)
          validateChildKeys(arguments[key]);
        return props;
      };
      exports.createContext = function (defaultValue) {
        defaultValue = {
          $$typeof: REACT_CONTEXT_TYPE,
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
          $$typeof: REACT_CONSUMER_TYPE,
          _context: defaultValue,
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
      };
      exports.createElement = function (type, config, children) {
        for (var i = 2; i < arguments.length; i++)
          validateChildKeys(arguments[i]);
        i = {};
        var key = null;
        if (null != config)
          for (propName in (didWarnAboutOldJSXRuntime ||
            !("__self" in config) ||
            "key" in config ||
            ((didWarnAboutOldJSXRuntime = true),
            console.warn(
              "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
            )),
          hasValidKey(config) &&
            (checkKeyStringCoercion(config.key), (key = "" + config.key)),
          config))
            hasOwnProperty.call(config, propName) &&
              "key" !== propName &&
              "__self" !== propName &&
              "__source" !== propName &&
              (i[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i.children = children;
        else if (1 < childrenLength) {
          for (
            var childArray = Array(childrenLength), _i = 0;
            _i < childrenLength;
            _i++
          )
            childArray[_i] = arguments[_i + 2];
          Object.freeze && Object.freeze(childArray);
          i.children = childArray;
        }
        if (type && type.defaultProps)
          for (propName in ((childrenLength = type.defaultProps),
          childrenLength))
            void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        key &&
          defineKeyPropWarningGetter(
            i,
            "function" === typeof type
              ? type.displayName || type.name || "Unknown"
              : type
          );
        var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return ReactElement(
          type,
          key,
          i,
          getOwner(),
          propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      exports.createRef = function () {
        var refObject = { current: null };
        Object.seal(refObject);
        return refObject;
      };
      exports.forwardRef = function (render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE
          ? console.error(
              "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
            )
          : "function" !== typeof render
            ? console.error(
                "forwardRef requires a render function but was given %s.",
                null === render ? "null" : typeof render
              )
            : 0 !== render.length &&
              2 !== render.length &&
              console.error(
                "forwardRef render functions accept exactly two parameters: props and ref. %s",
                1 === render.length
                  ? "Did you forget to use the ref parameter?"
                  : "Any additional parameter will be undefined."
              );
        null != render &&
          null != render.defaultProps &&
          console.error(
            "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
          );
        var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render },
          ownName;
        Object.defineProperty(elementType, "displayName", {
          enumerable: false,
          configurable: true,
          get: function () {
            return ownName;
          },
          set: function (name) {
            ownName = name;
            render.name ||
              render.displayName ||
              (Object.defineProperty(render, "name", { value: name }),
              (render.displayName = name));
          },
        });
        return elementType;
      };
      exports.isValidElement = isValidElement3;
      exports.lazy = function (ctor) {
        ctor = { _status: -1, _result: ctor };
        var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: ctor,
            _init: lazyInitializer,
          },
          ioInfo = {
            name: "lazy",
            start: -1,
            end: -1,
            value: null,
            owner: null,
            debugStack: Error("react-stack-top-frame"),
            debugTask: console.createTask ? console.createTask("lazy()") : null,
          };
        ctor._ioInfo = ioInfo;
        lazyType._debugInfo = [{ awaited: ioInfo }];
        return lazyType;
      };
      exports.memo = function (type, compare) {
        null == type &&
          console.error(
            "memo: The first argument must be a component. Instead received: %s",
            null === type ? "null" : typeof type
          );
        compare = {
          $$typeof: REACT_MEMO_TYPE,
          type,
          compare: void 0 === compare ? null : compare,
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
          enumerable: false,
          configurable: true,
          get: function () {
            return ownName;
          },
          set: function (name) {
            ownName = name;
            type.name ||
              type.displayName ||
              (Object.defineProperty(type, "name", { value: name }),
              (type.displayName = name));
          },
        });
        return compare;
      };
      exports.startTransition = function (scope) {
        var prevTransition = ReactSharedInternals.T,
          currentTransition = {};
        currentTransition._updatedFibers = /* @__PURE__ */ new Set();
        ReactSharedInternals.T = currentTransition;
        try {
          var returnValue = scope(),
            onStartTransitionFinish = ReactSharedInternals.S;
          null !== onStartTransitionFinish &&
            onStartTransitionFinish(currentTransition, returnValue);
          "object" === typeof returnValue &&
            null !== returnValue &&
            "function" === typeof returnValue.then &&
            (ReactSharedInternals.asyncTransitions++,
            returnValue.then(releaseAsyncTransition, releaseAsyncTransition),
            returnValue.then(noop, reportGlobalError));
        } catch (error) {
          reportGlobalError(error);
        } finally {
          (null === prevTransition &&
            currentTransition._updatedFibers &&
            ((scope = currentTransition._updatedFibers.size),
            currentTransition._updatedFibers.clear(),
            10 < scope &&
              console.warn(
                "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
              )),
            null !== prevTransition &&
              null !== currentTransition.types &&
              (null !== prevTransition.types &&
                prevTransition.types !== currentTransition.types &&
                console.error(
                  "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
                ),
              (prevTransition.types = currentTransition.types)),
            (ReactSharedInternals.T = prevTransition));
        }
      };
      exports.unstable_useCacheRefresh = function () {
        return resolveDispatcher().useCacheRefresh();
      };
      exports.use = function (usable) {
        return resolveDispatcher().use(usable);
      };
      exports.useActionState = function (action, initialState, permalink) {
        return resolveDispatcher().useActionState(
          action,
          initialState,
          permalink
        );
      };
      exports.useCallback = function (callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
      };
      exports.useContext = function (Context) {
        var dispatcher = resolveDispatcher();
        Context.$$typeof === REACT_CONSUMER_TYPE &&
          console.error(
            "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
          );
        return dispatcher.useContext(Context);
      };
      exports.useDebugValue = function (value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
      };
      exports.useDeferredValue = function (value, initialValue) {
        return resolveDispatcher().useDeferredValue(value, initialValue);
      };
      exports.useEffect = function (create, deps) {
        null == create &&
          console.warn(
            "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
          );
        return resolveDispatcher().useEffect(create, deps);
      };
      exports.useEffectEvent = function (callback) {
        return resolveDispatcher().useEffectEvent(callback);
      };
      exports.useId = function () {
        return resolveDispatcher().useId();
      };
      exports.useImperativeHandle = function (ref, create, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create, deps);
      };
      exports.useInsertionEffect = function (create, deps) {
        null == create &&
          console.warn(
            "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
          );
        return resolveDispatcher().useInsertionEffect(create, deps);
      };
      exports.useLayoutEffect = function (create, deps) {
        null == create &&
          console.warn(
            "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
          );
        return resolveDispatcher().useLayoutEffect(create, deps);
      };
      exports.useMemo = function (create, deps) {
        return resolveDispatcher().useMemo(create, deps);
      };
      exports.useOptimistic = function (passthrough, reducer) {
        return resolveDispatcher().useOptimistic(passthrough, reducer);
      };
      exports.useReducer = function (reducer, initialArg, init) {
        return resolveDispatcher().useReducer(reducer, initialArg, init);
      };
      exports.useRef = function (initialValue) {
        return resolveDispatcher().useRef(initialValue);
      };
      exports.useState = function (initialState) {
        return resolveDispatcher().useState(initialState);
      };
      exports.useSyncExternalStore = function (
        subscribe,
        getSnapshot,
        getServerSnapshot
      ) {
        return resolveDispatcher().useSyncExternalStore(
          subscribe,
          getSnapshot,
          getServerSnapshot
        );
      };
      exports.useTransition = function () {
        return resolveDispatcher().useTransition();
      };
      exports.version = "19.2.4";
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        "function" ===
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  },
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  },
});

// node_modules/react-dom/cjs/react-dom.development.js
var require_react_dom_development = __commonJS({
  "node_modules/react-dom/cjs/react-dom.development.js"(exports) {
    "use strict";
    (function () {
      function noop() {}
      function testStringCoercion(value) {
        return "" + value;
      }
      function createPortal$1(children, containerInfo, implementation) {
        var key =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        try {
          testStringCoercion(key);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        JSCompiler_inline_result &&
          (console.error(
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            ("function" === typeof Symbol &&
              Symbol.toStringTag &&
              key[Symbol.toStringTag]) ||
              key.constructor.name ||
              "Object"
          ),
          testStringCoercion(key));
        return {
          $$typeof: REACT_PORTAL_TYPE,
          key: null == key ? null : "" + key,
          children,
          containerInfo,
          implementation,
        };
      }
      function getCrossOriginStringAs(as, input) {
        if ("font" === as) return "";
        if ("string" === typeof input)
          return "use-credentials" === input ? input : "";
      }
      function getValueDescriptorExpectingObjectForWarning(thing) {
        return null === thing
          ? "`null`"
          : void 0 === thing
            ? "`undefined`"
            : "" === thing
              ? "an empty string"
              : 'something with type "' + typeof thing + '"';
      }
      function getValueDescriptorExpectingEnumForWarning(thing) {
        return null === thing
          ? "`null`"
          : void 0 === thing
            ? "`undefined`"
            : "" === thing
              ? "an empty string"
              : "string" === typeof thing
                ? JSON.stringify(thing)
                : "number" === typeof thing
                  ? "`" + thing + "`"
                  : 'something with type "' + typeof thing + '"';
      }
      function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher &&
          console.error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
          );
        return dispatcher;
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        "function" ===
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React12 = require_react(),
        Internals = {
          d: {
            f: noop,
            r: function () {
              throw Error(
                "Invalid form element. requestFormReset must be passed a form that was rendered by React."
              );
            },
            D: noop,
            C: noop,
            L: noop,
            m: noop,
            X: noop,
            S: noop,
            M: noop,
          },
          p: 0,
          findDOMNode: null,
        },
        REACT_PORTAL_TYPE = Symbol.for("react.portal"),
        ReactSharedInternals =
          React12.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      ("function" === typeof Map &&
        null != Map.prototype &&
        "function" === typeof Map.prototype.forEach &&
        "function" === typeof Set &&
        null != Set.prototype &&
        "function" === typeof Set.prototype.clear &&
        "function" === typeof Set.prototype.forEach) ||
        console.error(
          "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
        );
      exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
        Internals;
      exports.createPortal = function (children, container) {
        var key =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (
          !container ||
          (1 !== container.nodeType &&
            9 !== container.nodeType &&
            11 !== container.nodeType)
        )
          throw Error("Target container is not a DOM element.");
        return createPortal$1(children, container, null, key);
      };
      exports.flushSync = function (fn) {
        var previousTransition = ReactSharedInternals.T,
          previousUpdatePriority = Internals.p;
        try {
          if (((ReactSharedInternals.T = null), (Internals.p = 2), fn))
            return fn();
        } finally {
          ((ReactSharedInternals.T = previousTransition),
            (Internals.p = previousUpdatePriority),
            Internals.d.f() &&
              console.error(
                "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
              ));
        }
      };
      exports.preconnect = function (href, options) {
        "string" === typeof href && href
          ? null != options && "object" !== typeof options
            ? console.error(
                "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
                getValueDescriptorExpectingEnumForWarning(options)
              )
            : null != options &&
              "string" !== typeof options.crossOrigin &&
              console.error(
                "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
                getValueDescriptorExpectingObjectForWarning(options.crossOrigin)
              )
          : console.error(
              "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
              getValueDescriptorExpectingObjectForWarning(href)
            );
        "string" === typeof href &&
          (options
            ? ((options = options.crossOrigin),
              (options =
                "string" === typeof options
                  ? "use-credentials" === options
                    ? options
                    : ""
                  : void 0))
            : (options = null),
          Internals.d.C(href, options));
      };
      exports.prefetchDNS = function (href) {
        if ("string" !== typeof href || !href)
          console.error(
            "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
            getValueDescriptorExpectingObjectForWarning(href)
          );
        else if (1 < arguments.length) {
          var options = arguments[1];
          "object" === typeof options && options.hasOwnProperty("crossOrigin")
            ? console.error(
                "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
                getValueDescriptorExpectingEnumForWarning(options)
              )
            : console.error(
                "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
                getValueDescriptorExpectingEnumForWarning(options)
              );
        }
        "string" === typeof href && Internals.d.D(href);
      };
      exports.preinit = function (href, options) {
        "string" === typeof href && href
          ? null == options || "object" !== typeof options
            ? console.error(
                "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
                getValueDescriptorExpectingEnumForWarning(options)
              )
            : "style" !== options.as &&
              "script" !== options.as &&
              console.error(
                'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
                getValueDescriptorExpectingEnumForWarning(options.as)
              )
          : console.error(
              "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
              getValueDescriptorExpectingObjectForWarning(href)
            );
        if (
          "string" === typeof href &&
          options &&
          "string" === typeof options.as
        ) {
          var as = options.as,
            crossOrigin = getCrossOriginStringAs(as, options.crossOrigin),
            integrity =
              "string" === typeof options.integrity
                ? options.integrity
                : void 0,
            fetchPriority =
              "string" === typeof options.fetchPriority
                ? options.fetchPriority
                : void 0;
          "style" === as
            ? Internals.d.S(
                href,
                "string" === typeof options.precedence
                  ? options.precedence
                  : void 0,
                {
                  crossOrigin,
                  integrity,
                  fetchPriority,
                }
              )
            : "script" === as &&
              Internals.d.X(href, {
                crossOrigin,
                integrity,
                fetchPriority,
                nonce:
                  "string" === typeof options.nonce ? options.nonce : void 0,
              });
        }
      };
      exports.preinitModule = function (href, options) {
        var encountered = "";
        ("string" === typeof href && href) ||
          (encountered +=
            " The `href` argument encountered was " +
            getValueDescriptorExpectingObjectForWarning(href) +
            ".");
        void 0 !== options && "object" !== typeof options
          ? (encountered +=
              " The `options` argument encountered was " +
              getValueDescriptorExpectingObjectForWarning(options) +
              ".")
          : options &&
            "as" in options &&
            "script" !== options.as &&
            (encountered +=
              " The `as` option encountered was " +
              getValueDescriptorExpectingEnumForWarning(options.as) +
              ".");
        if (encountered)
          console.error(
            "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
            encountered
          );
        else
          switch (
            ((encountered =
              options && "string" === typeof options.as
                ? options.as
                : "script"),
            encountered)
          ) {
            case "script":
              break;
            default:
              ((encountered =
                getValueDescriptorExpectingEnumForWarning(encountered)),
                console.error(
                  'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
                  encountered,
                  href
                ));
          }
        if ("string" === typeof href)
          if ("object" === typeof options && null !== options) {
            if (null == options.as || "script" === options.as)
              ((encountered = getCrossOriginStringAs(
                options.as,
                options.crossOrigin
              )),
                Internals.d.M(href, {
                  crossOrigin: encountered,
                  integrity:
                    "string" === typeof options.integrity
                      ? options.integrity
                      : void 0,
                  nonce:
                    "string" === typeof options.nonce ? options.nonce : void 0,
                }));
          } else null == options && Internals.d.M(href);
      };
      exports.preload = function (href, options) {
        var encountered = "";
        ("string" === typeof href && href) ||
          (encountered +=
            " The `href` argument encountered was " +
            getValueDescriptorExpectingObjectForWarning(href) +
            ".");
        null == options || "object" !== typeof options
          ? (encountered +=
              " The `options` argument encountered was " +
              getValueDescriptorExpectingObjectForWarning(options) +
              ".")
          : ("string" === typeof options.as && options.as) ||
            (encountered +=
              " The `as` option encountered was " +
              getValueDescriptorExpectingObjectForWarning(options.as) +
              ".");
        encountered &&
          console.error(
            'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
            encountered
          );
        if (
          "string" === typeof href &&
          "object" === typeof options &&
          null !== options &&
          "string" === typeof options.as
        ) {
          encountered = options.as;
          var crossOrigin = getCrossOriginStringAs(
            encountered,
            options.crossOrigin
          );
          Internals.d.L(href, encountered, {
            crossOrigin,
            integrity:
              "string" === typeof options.integrity
                ? options.integrity
                : void 0,
            nonce: "string" === typeof options.nonce ? options.nonce : void 0,
            type: "string" === typeof options.type ? options.type : void 0,
            fetchPriority:
              "string" === typeof options.fetchPriority
                ? options.fetchPriority
                : void 0,
            referrerPolicy:
              "string" === typeof options.referrerPolicy
                ? options.referrerPolicy
                : void 0,
            imageSrcSet:
              "string" === typeof options.imageSrcSet
                ? options.imageSrcSet
                : void 0,
            imageSizes:
              "string" === typeof options.imageSizes
                ? options.imageSizes
                : void 0,
            media: "string" === typeof options.media ? options.media : void 0,
          });
        }
      };
      exports.preloadModule = function (href, options) {
        var encountered = "";
        ("string" === typeof href && href) ||
          (encountered +=
            " The `href` argument encountered was " +
            getValueDescriptorExpectingObjectForWarning(href) +
            ".");
        void 0 !== options && "object" !== typeof options
          ? (encountered +=
              " The `options` argument encountered was " +
              getValueDescriptorExpectingObjectForWarning(options) +
              ".")
          : options &&
            "as" in options &&
            "string" !== typeof options.as &&
            (encountered +=
              " The `as` option encountered was " +
              getValueDescriptorExpectingObjectForWarning(options.as) +
              ".");
        encountered &&
          console.error(
            'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
            encountered
          );
        "string" === typeof href &&
          (options
            ? ((encountered = getCrossOriginStringAs(
                options.as,
                options.crossOrigin
              )),
              Internals.d.m(href, {
                as:
                  "string" === typeof options.as && "script" !== options.as
                    ? options.as
                    : void 0,
                crossOrigin: encountered,
                integrity:
                  "string" === typeof options.integrity
                    ? options.integrity
                    : void 0,
              }))
            : Internals.d.m(href));
      };
      exports.requestFormReset = function (form) {
        Internals.d.r(form);
      };
      exports.unstable_batchedUpdates = function (fn, a) {
        return fn(a);
      };
      exports.useFormState = function (action, initialState, permalink) {
        return resolveDispatcher().useFormState(
          action,
          initialState,
          permalink
        );
      };
      exports.useFormStatus = function () {
        return resolveDispatcher().useHostTransitionStatus();
      };
      exports.version = "19.2.4";
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        "function" ===
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  },
});

// node_modules/react-dom/index.js
var require_react_dom = __commonJS({
  "node_modules/react-dom/index.js"(exports, module) {
    "use strict";
    if (false) {
      checkDCE();
      module.exports = null;
    } else {
      module.exports = require_react_dom_development();
    }
  },
});

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    (function () {
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE
            ? null
            : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
        }
        if ("object" === typeof type)
          switch (
            ("number" === typeof type.tag &&
              console.error(
                "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
              ),
            type.$$typeof)
          ) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type ||
                ((type = innerType.displayName || innerType.name || ""),
                (type =
                  "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
              return type;
            case REACT_MEMO_TYPE:
              return (
                (innerType = type.displayName || null),
                null !== innerType
                  ? innerType
                  : getComponentNameFromType(type.type) || "Memo"
              );
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {}
          }
        return null;
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 =
            ("function" === typeof Symbol &&
              Symbol.toStringTag &&
              value[Symbol.toStringTag]) ||
            value.constructor.name ||
            "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if (
          "object" === typeof type &&
          null !== type &&
          type.$$typeof === REACT_LAZY_TYPE
        )
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x) {
          return "<...>";
        }
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown ||
            ((specialPropKeyWarningShown = true),
            console.error(
              "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
              displayName
            ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true,
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] ||
          ((didWarnAboutElementRef[componentName] = true),
          console.error(
            "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
          ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner,
        };
        null !== (void 0 !== refProp ? refProp : null)
          ? Object.defineProperty(type, "ref", {
              enumerable: false,
              get: elementRefGetterWithDeprecationWarning,
            })
          : Object.defineProperty(type, "ref", {
              enumerable: false,
              value: null,
            });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0,
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null,
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack,
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask,
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function jsxDEVImpl(
        type,
        config,
        maybeKey,
        isStaticChildren,
        debugStack,
        debugTask
      ) {
        var children = config.children;
        if (void 0 !== children)
          if (isStaticChildren)
            if (isArrayImpl(children)) {
              for (
                isStaticChildren = 0;
                isStaticChildren < children.length;
                isStaticChildren++
              )
                validateChildKeys(children[isStaticChildren]);
              Object.freeze && Object.freeze(children);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
          children = getComponentNameFromType(type);
          var keys = Object.keys(config).filter(function (k) {
            return "key" !== k;
          });
          isStaticChildren =
            0 < keys.length
              ? "{key: someKey, " + keys.join(": ..., ") + ": ...}"
              : "{key: someKey}";
          didWarnAboutKeySpread[children + isStaticChildren] ||
            ((keys =
              0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}"),
            console.error(
              'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
              isStaticChildren,
              children,
              keys,
              children
            ),
            (didWarnAboutKeySpread[children + isStaticChildren] = true));
        }
        children = null;
        void 0 !== maybeKey &&
          (checkKeyStringCoercion(maybeKey), (children = "" + maybeKey));
        hasValidKey(config) &&
          (checkKeyStringCoercion(config.key), (children = "" + config.key));
        if ("key" in config) {
          maybeKey = {};
          for (var propName in config)
            "key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children &&
          defineKeyPropWarningGetter(
            maybeKey,
            "function" === typeof type
              ? type.displayName || type.name || "Unknown"
              : type
          );
        return ReactElement(
          type,
          children,
          maybeKey,
          getOwner(),
          debugStack,
          debugTask
        );
      }
      function validateChildKeys(node) {
        isValidElement3(node)
          ? node._store && (node._store.validated = 1)
          : "object" === typeof node &&
            null !== node &&
            node.$$typeof === REACT_LAZY_TYPE &&
            ("fulfilled" === node._payload.status
              ? isValidElement3(node._payload.value) &&
                node._payload.value._store &&
                (node._payload.value._store.validated = 1)
              : node._store && (node._store.validated = 1));
      }
      function isValidElement3(object) {
        return (
          "object" === typeof object &&
          null !== object &&
          object.$$typeof === REACT_ELEMENT_TYPE
        );
      }
      var React12 = require_react(),
        REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
        REACT_PORTAL_TYPE = Symbol.for("react.portal"),
        REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
        REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
        REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
        REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
        REACT_CONTEXT_TYPE = Symbol.for("react.context"),
        REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
        REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
        REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
        REACT_MEMO_TYPE = Symbol.for("react.memo"),
        REACT_LAZY_TYPE = Symbol.for("react.lazy"),
        REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
        REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
        ReactSharedInternals =
          React12.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        hasOwnProperty = Object.prototype.hasOwnProperty,
        isArrayImpl = Array.isArray,
        createTask = console.createTask
          ? console.createTask
          : function () {
              return null;
            };
      React12 = {
        react_stack_bottom_frame: function (callStackForError) {
          return callStackForError();
        },
      };
      var specialPropKeyWarningShown;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = React12.react_stack_bottom_frame.bind(
        React12,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutKeySpread = {};
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.jsx = function (type, config, maybeKey) {
        var trackActualOwner =
          1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          false,
          trackActualOwner
            ? Error("react-stack-top-frame")
            : unknownOwnerDebugStack,
          trackActualOwner
            ? createTask(getTaskName(type))
            : unknownOwnerDebugTask
        );
      };
      exports.jsxs = function (type, config, maybeKey) {
        var trackActualOwner =
          1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          true,
          trackActualOwner
            ? Error("react-stack-top-frame")
            : unknownOwnerDebugStack,
          trackActualOwner
            ? createTask(getTaskName(type))
            : unknownOwnerDebugTask
        );
      };
    })();
  },
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  },
});

// node_modules/@mieweb/ui/dist/chunk-HB7C7NB5.js
var import_react = __toESM(require_react(), 1);
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = (0,
  import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  return prefersReducedMotion;
}

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t,
    f,
    n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), (n += f));
    } else for (f in e) e[f] && (n && (n += " "), (n += f));
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++)
    (e = arguments[f]) && (t = r(e)) && (n && (n += " "), (n += t));
  return n;
}

// node_modules/tailwind-merge/dist/bundle-mjs.mjs
var CLASS_PART_SEPARATOR = "-";
var createClassGroupUtils = (config) => {
  const classMap = createClassMap(config);
  const { conflictingClassGroups, conflictingClassGroupModifiers } = config;
  const getClassGroupId = (className) => {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return (
      getGroupRecursive(classParts, classMap) ||
      getGroupIdForArbitraryProperty(className)
    );
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds,
  };
};
var getGroupRecursive = (classParts, classPartObject) => {
  var _a;
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject
    ? getGroupRecursive(classParts.slice(1), nextClassPartObject)
    : void 0;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return void 0;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return (_a = classPartObject.validators.find(({ validator }) =>
    validator(classRest)
  )) == null
    ? void 0
    : _a.classGroupId;
};
var arbitraryPropertyRegex = /^\[(.+)\]$/;
var getGroupIdForArbitraryProperty = (className) => {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName =
      arbitraryPropertyRegex.exec(className)[1];
    const property =
      arbitraryPropertyClassName == null
        ? void 0
        : arbitraryPropertyClassName.substring(
            0,
            arbitraryPropertyClassName.indexOf(":")
          );
    if (property) {
      return "arbitrary.." + property;
    }
  }
};
var createClassMap = (config) => {
  const { theme, prefix } = config;
  const classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: [],
  };
  const prefixedClassGroupEntries = getPrefixedClassGroupEntries(
    Object.entries(config.classGroups),
    prefix
  );
  prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
};
var processClassesRecursively = (
  classGroup,
  classPartObject,
  classGroupId,
  theme
) => {
  classGroup.forEach((classDefinition) => {
    if (typeof classDefinition === "string") {
      const classPartObjectToEdit =
        classDefinition === ""
          ? classPartObject
          : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(
          classDefinition(theme),
          classPartObject,
          classGroupId,
          theme
        );
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId,
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup2]) => {
      processClassesRecursively(
        classGroup2,
        getPart(classPartObject, key),
        classGroupId,
        theme
      );
    });
  });
};
var getPart = (classPartObject, path) => {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: [],
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
};
var isThemeGetter = (func) => func.isThemeGetter;
var getPrefixedClassGroupEntries = (classGroupEntries, prefix) => {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(([classGroupId, classGroup]) => {
    const prefixedClassGroup = classGroup.map((classDefinition) => {
      if (typeof classDefinition === "string") {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === "object") {
        return Object.fromEntries(
          Object.entries(classDefinition).map(([key, value]) => [
            prefix + key,
            value,
          ])
        );
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
};
var createLruCache = (maxCacheSize) => {
  if (maxCacheSize < 1) {
    return {
      get: () => void 0,
      set: () => {},
    };
  }
  let cacheSize = 0;
  let cache = /* @__PURE__ */ new Map();
  let previousCache = /* @__PURE__ */ new Map();
  const update = (key, value) => {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = /* @__PURE__ */ new Map();
    }
  };
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    },
  };
};
var IMPORTANT_MODIFIER = "!";
var createParseClassName = (config) => {
  const { separator, experimentalParseClassName } = config;
  const isSeparatorSingleCharacter = separator.length === 1;
  const firstSeparatorCharacter = separator[0];
  const separatorLength = separator.length;
  const parseClassName = (className) => {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (
          currentCharacter === firstSeparatorCharacter &&
          (isSeparatorSingleCharacter ||
            className.slice(index, index + separatorLength) === separator)
        ) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      }
    }
    const baseClassNameWithImportantModifier =
      modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier =
      baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    const baseClassName = hasImportantModifier
      ? baseClassNameWithImportantModifier.substring(1)
      : baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition =
      postfixModifierPosition && postfixModifierPosition > modifierStart
        ? postfixModifierPosition - modifierStart
        : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition,
    };
  };
  if (experimentalParseClassName) {
    return (className) =>
      experimentalParseClassName({
        className,
        parseClassName,
      });
  }
  return parseClassName;
};
var sortModifiers = (modifiers) => {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  const sortedModifiers = [];
  let unsortedModifiers = [];
  modifiers.forEach((modifier) => {
    const isArbitraryVariant = modifier[0] === "[";
    if (isArbitraryVariant) {
      sortedModifiers.push(...unsortedModifiers.sort(), modifier);
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push(...unsortedModifiers.sort());
  return sortedModifiers;
};
var createConfigUtils = (config) => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  ...createClassGroupUtils(config),
});
var SPLIT_CLASSES_REGEX = /\s+/;
var mergeClassList = (classList, configUtils) => {
  const { parseClassName, getClassGroupId, getConflictingClassGroupIds } =
    configUtils;
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = "";
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index];
    const {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition,
    } = parseClassName(originalClassName);
    let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    let classGroupId = getClassGroupId(
      hasPostfixModifier
        ? baseClassName.substring(0, maybePostfixModifierPosition)
        : baseClassName
    );
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        result =
          originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        result =
          originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier
      ? variantModifier + IMPORTANT_MODIFIER
      : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.includes(classId)) {
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(
      classGroupId,
      hasPostfixModifier
    );
    for (let i = 0; i < conflictGroups.length; ++i) {
      const group = conflictGroups[i];
      classGroupsInConflict.push(modifierId + group);
    }
    result = originalClassName + (result.length > 0 ? " " + result : result);
  }
  return result;
};
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index < arguments.length) {
    if ((argument = arguments[index++])) {
      if ((resolvedValue = toValue(argument))) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
var toValue = (mix) => {
  if (typeof mix === "string") {
    return mix;
  }
  let resolvedValue;
  let string = "";
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if ((resolvedValue = toValue(mix[k]))) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce(
      (previousConfig, createConfigCurrent) =>
        createConfigCurrent(previousConfig),
      createConfigFirst()
    );
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
var fromTheme = (key) => {
  const themeGetter = (theme) => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
var arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var fractionRegex = /^\d+\/\d+$/;
var stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex =
  /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
var shadowRegex =
  /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var imageRegex =
  /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
var isLength = (value) =>
  isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
var isArbitraryLength = (value) =>
  getIsArbitraryValue(value, "length", isLengthOnly);
var isNumber = (value) => Boolean(value) && !Number.isNaN(Number(value));
var isArbitraryNumber = (value) =>
  getIsArbitraryValue(value, "number", isNumber);
var isInteger = (value) => Boolean(value) && Number.isInteger(Number(value));
var isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
var isArbitraryValue = (value) => arbitraryValueRegex.test(value);
var isTshirtSize = (value) => tshirtUnitRegex.test(value);
var sizeLabels = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
var isArbitrarySize = (value) =>
  getIsArbitraryValue(value, sizeLabels, isNever);
var isArbitraryPosition = (value) =>
  getIsArbitraryValue(value, "position", isNever);
var imageLabels = /* @__PURE__ */ new Set(["image", "url"]);
var isArbitraryImage = (value) =>
  getIsArbitraryValue(value, imageLabels, isImage);
var isArbitraryShadow = (value) => getIsArbitraryValue(value, "", isShadow);
var isAny = () => true;
var getIsArbitraryValue = (value, label, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return typeof label === "string"
        ? result[1] === label
        : label.has(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
var isLengthOnly = (value) =>
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
var isNever = () => false;
var isShadow = (value) => shadowRegex.test(value);
var isImage = (value) => imageRegex.test(value);
var getDefaultConfig = () => {
  const colors = fromTheme("colors");
  const spacing = fromTheme("spacing");
  const blur = fromTheme("blur");
  const brightness = fromTheme("brightness");
  const borderColor = fromTheme("borderColor");
  const borderRadius = fromTheme("borderRadius");
  const borderSpacing = fromTheme("borderSpacing");
  const borderWidth = fromTheme("borderWidth");
  const contrast = fromTheme("contrast");
  const grayscale = fromTheme("grayscale");
  const hueRotate = fromTheme("hueRotate");
  const invert = fromTheme("invert");
  const gap = fromTheme("gap");
  const gradientColorStops = fromTheme("gradientColorStops");
  const gradientColorStopPositions = fromTheme("gradientColorStopPositions");
  const inset = fromTheme("inset");
  const margin = fromTheme("margin");
  const opacity = fromTheme("opacity");
  const padding = fromTheme("padding");
  const saturate = fromTheme("saturate");
  const scale = fromTheme("scale");
  const sepia = fromTheme("sepia");
  const skew = fromTheme("skew");
  const space = fromTheme("space");
  const translate = fromTheme("translate");
  const getOverscroll = () => ["auto", "contain", "none"];
  const getOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const getSpacingWithAutoAndArbitrary = () => [
    "auto",
    isArbitraryValue,
    spacing,
  ];
  const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
  const getLengthWithEmptyAndArbitrary = () => [
    "",
    isLength,
    isArbitraryLength,
  ];
  const getNumberWithAutoAndArbitrary = () => [
    "auto",
    isNumber,
    isArbitraryValue,
  ];
  const getPositions = () => [
    "bottom",
    "center",
    "left",
    "left-bottom",
    "left-top",
    "right",
    "right-bottom",
    "right-top",
    "top",
  ];
  const getLineStyles = () => ["solid", "dashed", "dotted", "double", "none"];
  const getBlendModes = () => [
    "normal",
    "multiply",
    "screen",
    "overlay",
    "darken",
    "lighten",
    "color-dodge",
    "color-burn",
    "hard-light",
    "soft-light",
    "difference",
    "exclusion",
    "hue",
    "saturation",
    "color",
    "luminosity",
  ];
  const getAlign = () => [
    "start",
    "end",
    "center",
    "between",
    "around",
    "evenly",
    "stretch",
  ];
  const getZeroAndEmpty = () => ["", "0", isArbitraryValue];
  const getBreaks = () => [
    "auto",
    "avoid",
    "all",
    "avoid-page",
    "page",
    "left",
    "right",
    "column",
  ];
  const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [isAny],
      spacing: [isLength, isArbitraryLength],
      blur: ["none", "", isTshirtSize, isArbitraryValue],
      brightness: getNumberAndArbitrary(),
      borderColor: [colors],
      borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmptyAndArbitrary(),
      contrast: getNumberAndArbitrary(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumberAndArbitrary(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumberAndArbitrary(),
      scale: getNumberAndArbitrary(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary(),
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [
        {
          aspect: ["auto", "square", "video", isArbitraryValue],
        },
      ],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [
        {
          columns: [isTshirtSize],
        },
      ],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [
        {
          "break-after": getBreaks(),
        },
      ],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [
        {
          "break-before": getBreaks(),
        },
      ],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [
        {
          "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
        },
      ],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [
        {
          "box-decoration": ["slice", "clone"],
        },
      ],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [
        {
          box: ["border", "content"],
        },
      ],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [
        {
          float: ["right", "left", "none", "start", "end"],
        },
      ],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [
        {
          clear: ["left", "right", "both", "none", "start", "end"],
        },
      ],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [
        {
          object: ["contain", "cover", "fill", "none", "scale-down"],
        },
      ],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [
        {
          object: [...getPositions(), isArbitraryValue],
        },
      ],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [
        {
          overflow: getOverflow(),
        },
      ],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [
        {
          "overflow-x": getOverflow(),
        },
      ],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [
        {
          "overflow-y": getOverflow(),
        },
      ],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [
        {
          overscroll: getOverscroll(),
        },
      ],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [
        {
          "overscroll-x": getOverscroll(),
        },
      ],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [
        {
          "overscroll-y": getOverscroll(),
        },
      ],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [
        {
          inset: [inset],
        },
      ],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [
        {
          "inset-x": [inset],
        },
      ],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [
        {
          "inset-y": [inset],
        },
      ],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [
        {
          start: [inset],
        },
      ],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [
        {
          end: [inset],
        },
      ],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [
        {
          top: [inset],
        },
      ],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [
        {
          right: [inset],
        },
      ],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [
        {
          bottom: [inset],
        },
      ],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [
        {
          left: [inset],
        },
      ],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [
        {
          z: ["auto", isInteger, isArbitraryValue],
        },
      ],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [
        {
          basis: getSpacingWithAutoAndArbitrary(),
        },
      ],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [
        {
          flex: ["row", "row-reverse", "col", "col-reverse"],
        },
      ],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [
        {
          flex: ["wrap", "wrap-reverse", "nowrap"],
        },
      ],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [
        {
          flex: ["1", "auto", "initial", "none", isArbitraryValue],
        },
      ],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [
        {
          grow: getZeroAndEmpty(),
        },
      ],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [
        {
          shrink: getZeroAndEmpty(),
        },
      ],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [
        {
          order: ["first", "last", "none", isInteger, isArbitraryValue],
        },
      ],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [
        {
          "grid-cols": [isAny],
        },
      ],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [
        {
          col: [
            "auto",
            {
              span: ["full", isInteger, isArbitraryValue],
            },
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [
        {
          "col-start": getNumberWithAutoAndArbitrary(),
        },
      ],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [
        {
          "col-end": getNumberWithAutoAndArbitrary(),
        },
      ],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [
        {
          "grid-rows": [isAny],
        },
      ],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [
        {
          row: [
            "auto",
            {
              span: [isInteger, isArbitraryValue],
            },
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [
        {
          "row-start": getNumberWithAutoAndArbitrary(),
        },
      ],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [
        {
          "row-end": getNumberWithAutoAndArbitrary(),
        },
      ],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [
        {
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
        },
      ],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [
        {
          "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue],
        },
      ],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [
        {
          "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue],
        },
      ],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [
        {
          gap: [gap],
        },
      ],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [
        {
          "gap-x": [gap],
        },
      ],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [
        {
          "gap-y": [gap],
        },
      ],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [
        {
          justify: ["normal", ...getAlign()],
        },
      ],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [
        {
          "justify-items": ["start", "end", "center", "stretch"],
        },
      ],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [
        {
          "justify-self": ["auto", "start", "end", "center", "stretch"],
        },
      ],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [
        {
          content: ["normal", ...getAlign(), "baseline"],
        },
      ],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [
        {
          items: ["start", "end", "center", "baseline", "stretch"],
        },
      ],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [
        {
          self: ["auto", "start", "end", "center", "stretch", "baseline"],
        },
      ],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [
        {
          "place-content": [...getAlign(), "baseline"],
        },
      ],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [
        {
          "place-items": ["start", "end", "center", "baseline", "stretch"],
        },
      ],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [
        {
          "place-self": ["auto", "start", "end", "center", "stretch"],
        },
      ],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [
        {
          p: [padding],
        },
      ],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [
        {
          px: [padding],
        },
      ],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [
        {
          py: [padding],
        },
      ],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [
        {
          ps: [padding],
        },
      ],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [
        {
          pe: [padding],
        },
      ],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [
        {
          pt: [padding],
        },
      ],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [
        {
          pr: [padding],
        },
      ],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [
        {
          pb: [padding],
        },
      ],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [
        {
          pl: [padding],
        },
      ],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [
        {
          m: [margin],
        },
      ],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [
        {
          mx: [margin],
        },
      ],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [
        {
          my: [margin],
        },
      ],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [
        {
          ms: [margin],
        },
      ],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [
        {
          me: [margin],
        },
      ],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [
        {
          mt: [margin],
        },
      ],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [
        {
          mr: [margin],
        },
      ],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [
        {
          mb: [margin],
        },
      ],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [
        {
          ml: [margin],
        },
      ],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [
        {
          "space-x": [space],
        },
      ],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [
        {
          "space-y": [space],
        },
      ],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [
        {
          w: [
            "auto",
            "min",
            "max",
            "fit",
            "svw",
            "lvw",
            "dvw",
            isArbitraryValue,
            spacing,
          ],
        },
      ],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [
        {
          "min-w": [isArbitraryValue, spacing, "min", "max", "fit"],
        },
      ],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [
        {
          "max-w": [
            isArbitraryValue,
            spacing,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            {
              screen: [isTshirtSize],
            },
            isTshirtSize,
          ],
        },
      ],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [
        {
          h: [
            isArbitraryValue,
            spacing,
            "auto",
            "min",
            "max",
            "fit",
            "svh",
            "lvh",
            "dvh",
          ],
        },
      ],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [
        {
          "min-h": [
            isArbitraryValue,
            spacing,
            "min",
            "max",
            "fit",
            "svh",
            "lvh",
            "dvh",
          ],
        },
      ],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [
        {
          "max-h": [
            isArbitraryValue,
            spacing,
            "min",
            "max",
            "fit",
            "svh",
            "lvh",
            "dvh",
          ],
        },
      ],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [
        {
          size: [isArbitraryValue, spacing, "auto", "min", "max", "fit"],
        },
      ],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [
        {
          text: ["base", isTshirtSize, isArbitraryLength],
        },
      ],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            isArbitraryNumber,
          ],
        },
      ],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [
        {
          font: [isAny],
        },
      ],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [
        {
          "line-clamp": ["none", isNumber, isArbitraryNumber],
        },
      ],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            isLength,
            isArbitraryValue,
          ],
        },
      ],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [
        {
          "list-image": ["none", isArbitraryValue],
        },
      ],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [
        {
          list: ["none", "disc", "decimal", isArbitraryValue],
        },
      ],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [
        {
          list: ["inside", "outside"],
        },
      ],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [
        {
          placeholder: [colors],
        },
      ],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [
        {
          "placeholder-opacity": [opacity],
        },
      ],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [
        {
          text: ["left", "center", "right", "justify", "start", "end"],
        },
      ],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [
        {
          text: [colors],
        },
      ],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [
        {
          "text-opacity": [opacity],
        },
      ],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [
        {
          decoration: [...getLineStyles(), "wavy"],
        },
      ],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [
        {
          decoration: ["auto", "from-font", isLength, isArbitraryLength],
        },
      ],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [
        {
          "underline-offset": ["auto", isLength, isArbitraryValue],
        },
      ],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [
        {
          decoration: [colors],
        },
      ],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [
        {
          text: ["wrap", "nowrap", "balance", "pretty"],
        },
      ],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [
        {
          indent: getSpacingWithArbitrary(),
        },
      ],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [
        {
          break: ["normal", "words", "all", "keep"],
        },
      ],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [
        {
          hyphens: ["none", "manual", "auto"],
        },
      ],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [
        {
          content: ["none", isArbitraryValue],
        },
      ],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [
        {
          bg: ["fixed", "local", "scroll"],
        },
      ],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [
        {
          "bg-clip": ["border", "padding", "content", "text"],
        },
      ],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [
        {
          "bg-opacity": [opacity],
        },
      ],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [
        {
          "bg-origin": ["border", "padding", "content"],
        },
      ],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [
        {
          bg: [...getPositions(), isArbitraryPosition],
        },
      ],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [
        {
          bg: [
            "no-repeat",
            {
              repeat: ["", "x", "y", "round", "space"],
            },
          ],
        },
      ],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [
        {
          bg: ["auto", "cover", "contain", isArbitrarySize],
        },
      ],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [
        {
          bg: [
            "none",
            {
              "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
            },
            isArbitraryImage,
          ],
        },
      ],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [
        {
          bg: [colors],
        },
      ],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [
        {
          from: [gradientColorStopPositions],
        },
      ],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [
        {
          via: [gradientColorStopPositions],
        },
      ],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [
        {
          to: [gradientColorStopPositions],
        },
      ],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [
        {
          from: [gradientColorStops],
        },
      ],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [
        {
          via: [gradientColorStops],
        },
      ],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [
        {
          to: [gradientColorStops],
        },
      ],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [
        {
          rounded: [borderRadius],
        },
      ],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [
        {
          "rounded-s": [borderRadius],
        },
      ],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [
        {
          "rounded-e": [borderRadius],
        },
      ],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [
        {
          "rounded-t": [borderRadius],
        },
      ],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [
        {
          "rounded-r": [borderRadius],
        },
      ],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [
        {
          "rounded-b": [borderRadius],
        },
      ],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [
        {
          "rounded-l": [borderRadius],
        },
      ],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [
        {
          "rounded-ss": [borderRadius],
        },
      ],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [
        {
          "rounded-se": [borderRadius],
        },
      ],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [
        {
          "rounded-ee": [borderRadius],
        },
      ],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [
        {
          "rounded-es": [borderRadius],
        },
      ],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [
        {
          "rounded-tl": [borderRadius],
        },
      ],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [
        {
          "rounded-tr": [borderRadius],
        },
      ],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [
        {
          "rounded-br": [borderRadius],
        },
      ],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [
        {
          "rounded-bl": [borderRadius],
        },
      ],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [
        {
          border: [borderWidth],
        },
      ],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [
        {
          "border-x": [borderWidth],
        },
      ],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [
        {
          "border-y": [borderWidth],
        },
      ],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [
        {
          "border-s": [borderWidth],
        },
      ],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [
        {
          "border-e": [borderWidth],
        },
      ],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [
        {
          "border-t": [borderWidth],
        },
      ],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [
        {
          "border-r": [borderWidth],
        },
      ],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [
        {
          "border-b": [borderWidth],
        },
      ],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [
        {
          "border-l": [borderWidth],
        },
      ],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [
        {
          "border-opacity": [opacity],
        },
      ],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [
        {
          border: [...getLineStyles(), "hidden"],
        },
      ],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [
        {
          "divide-x": [borderWidth],
        },
      ],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [
        {
          "divide-y": [borderWidth],
        },
      ],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [
        {
          "divide-opacity": [opacity],
        },
      ],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [
        {
          divide: getLineStyles(),
        },
      ],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [
        {
          border: [borderColor],
        },
      ],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [
        {
          "border-x": [borderColor],
        },
      ],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [
        {
          "border-y": [borderColor],
        },
      ],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [
        {
          "border-s": [borderColor],
        },
      ],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [
        {
          "border-e": [borderColor],
        },
      ],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [
        {
          "border-t": [borderColor],
        },
      ],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [
        {
          "border-r": [borderColor],
        },
      ],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [
        {
          "border-b": [borderColor],
        },
      ],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [
        {
          "border-l": [borderColor],
        },
      ],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [
        {
          divide: [borderColor],
        },
      ],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [
        {
          outline: ["", ...getLineStyles()],
        },
      ],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [
        {
          "outline-offset": [isLength, isArbitraryValue],
        },
      ],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [
        {
          outline: [isLength, isArbitraryLength],
        },
      ],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [
        {
          outline: [colors],
        },
      ],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [
        {
          ring: getLengthWithEmptyAndArbitrary(),
        },
      ],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [
        {
          ring: [colors],
        },
      ],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [
        {
          "ring-opacity": [opacity],
        },
      ],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [
        {
          "ring-offset": [isLength, isArbitraryLength],
        },
      ],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [
        {
          "ring-offset": [colors],
        },
      ],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [
        {
          shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow],
        },
      ],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [
        {
          shadow: [isAny],
        },
      ],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [
        {
          opacity: [opacity],
        },
      ],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [
        {
          "mix-blend": [...getBlendModes(), "plus-lighter", "plus-darker"],
        },
      ],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [
        {
          "bg-blend": getBlendModes(),
        },
      ],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [
        {
          filter: ["", "none"],
        },
      ],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [
        {
          blur: [blur],
        },
      ],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [
        {
          brightness: [brightness],
        },
      ],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [
        {
          contrast: [contrast],
        },
      ],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [
        {
          "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue],
        },
      ],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [
        {
          grayscale: [grayscale],
        },
      ],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [
        {
          "hue-rotate": [hueRotate],
        },
      ],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [
        {
          invert: [invert],
        },
      ],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [
        {
          saturate: [saturate],
        },
      ],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [
        {
          sepia: [sepia],
        },
      ],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [
        {
          "backdrop-filter": ["", "none"],
        },
      ],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [
        {
          "backdrop-blur": [blur],
        },
      ],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [
        {
          "backdrop-brightness": [brightness],
        },
      ],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [
        {
          "backdrop-contrast": [contrast],
        },
      ],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [
        {
          "backdrop-grayscale": [grayscale],
        },
      ],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [
        {
          "backdrop-hue-rotate": [hueRotate],
        },
      ],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [
        {
          "backdrop-invert": [invert],
        },
      ],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [
        {
          "backdrop-opacity": [opacity],
        },
      ],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [
        {
          "backdrop-saturate": [saturate],
        },
      ],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [
        {
          "backdrop-sepia": [sepia],
        },
      ],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [
        {
          border: ["collapse", "separate"],
        },
      ],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [
        {
          "border-spacing": [borderSpacing],
        },
      ],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [
        {
          "border-spacing-x": [borderSpacing],
        },
      ],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [
        {
          "border-spacing-y": [borderSpacing],
        },
      ],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [
        {
          table: ["auto", "fixed"],
        },
      ],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [
        {
          caption: ["top", "bottom"],
        },
      ],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [
        {
          duration: getNumberAndArbitrary(),
        },
      ],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [
        {
          ease: ["linear", "in", "out", "in-out", isArbitraryValue],
        },
      ],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [
        {
          delay: getNumberAndArbitrary(),
        },
      ],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [
        {
          animate: [
            "none",
            "spin",
            "ping",
            "pulse",
            "bounce",
            isArbitraryValue,
          ],
        },
      ],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [
        {
          transform: ["", "gpu", "none"],
        },
      ],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [
        {
          scale: [scale],
        },
      ],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [
        {
          "scale-x": [scale],
        },
      ],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [
        {
          "scale-y": [scale],
        },
      ],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [
        {
          rotate: [isInteger, isArbitraryValue],
        },
      ],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [
        {
          "translate-x": [translate],
        },
      ],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [
        {
          "translate-y": [translate],
        },
      ],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [
        {
          "skew-x": [skew],
        },
      ],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [
        {
          "skew-y": [skew],
        },
      ],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            isArbitraryValue,
          ],
        },
      ],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [
        {
          accent: ["auto", colors],
        },
      ],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [
        {
          appearance: ["none", "auto"],
        },
      ],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            isArbitraryValue,
          ],
        },
      ],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [
        {
          caret: [colors],
        },
      ],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [
        {
          "pointer-events": ["none", "auto"],
        },
      ],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [
        {
          resize: ["none", "y", "x", ""],
        },
      ],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [
        {
          scroll: ["auto", "smooth"],
        },
      ],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [
        {
          "scroll-m": getSpacingWithArbitrary(),
        },
      ],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [
        {
          "scroll-mx": getSpacingWithArbitrary(),
        },
      ],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [
        {
          "scroll-my": getSpacingWithArbitrary(),
        },
      ],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [
        {
          "scroll-ms": getSpacingWithArbitrary(),
        },
      ],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [
        {
          "scroll-me": getSpacingWithArbitrary(),
        },
      ],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [
        {
          "scroll-mt": getSpacingWithArbitrary(),
        },
      ],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [
        {
          "scroll-mr": getSpacingWithArbitrary(),
        },
      ],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [
        {
          "scroll-mb": getSpacingWithArbitrary(),
        },
      ],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [
        {
          "scroll-ml": getSpacingWithArbitrary(),
        },
      ],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [
        {
          "scroll-p": getSpacingWithArbitrary(),
        },
      ],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [
        {
          "scroll-px": getSpacingWithArbitrary(),
        },
      ],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [
        {
          "scroll-py": getSpacingWithArbitrary(),
        },
      ],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [
        {
          "scroll-ps": getSpacingWithArbitrary(),
        },
      ],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [
        {
          "scroll-pe": getSpacingWithArbitrary(),
        },
      ],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [
        {
          "scroll-pt": getSpacingWithArbitrary(),
        },
      ],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [
        {
          "scroll-pr": getSpacingWithArbitrary(),
        },
      ],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [
        {
          "scroll-pb": getSpacingWithArbitrary(),
        },
      ],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [
        {
          "scroll-pl": getSpacingWithArbitrary(),
        },
      ],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [
        {
          snap: ["start", "end", "center", "align-none"],
        },
      ],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [
        {
          snap: ["normal", "always"],
        },
      ],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [
        {
          snap: ["none", "x", "y", "both"],
        },
      ],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [
        {
          snap: ["mandatory", "proximity"],
        },
      ],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [
        {
          touch: ["auto", "none", "manipulation"],
        },
      ],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [
        {
          "touch-pan": ["x", "left", "right"],
        },
      ],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [
        {
          "touch-pan": ["y", "up", "down"],
        },
      ],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [
        {
          select: ["none", "text", "all", "auto"],
        },
      ],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [
        {
          "will-change": [
            "auto",
            "scroll",
            "contents",
            "transform",
            isArbitraryValue,
          ],
        },
      ],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [
        {
          fill: [colors, "none"],
        },
      ],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [
        {
          stroke: [isLength, isArbitraryLength, isArbitraryNumber],
        },
      ],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [
        {
          stroke: [colors, "none"],
        },
      ],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [
        {
          "forced-color-adjust": ["auto", "none"],
        },
      ],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-s",
        "border-color-e",
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"],
    },
  };
};
var twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);

// node_modules/@mieweb/ui/dist/chunk-F3SOEIN2.js
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// node_modules/@mieweb/ui/dist/chunk-UZUBLXVC.js
var React = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var DEFAULT_OFFSET = 8;
var VIEWPORT_PADDING = 8;
function Tooltip({
  content,
  children,
  placement: preferredPlacement = "top",
  delay = 200,
  disabled = false,
  open: controlledOpen,
  onOpenChange,
  className,
  maxWidth = 250,
  offset = DEFAULT_OFFSET,
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const [position, setPosition] = React.useState(null);
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const showTimeoutRef = React.useRef(null);
  const hideTimeoutRef = React.useRef(null);
  const isHoveringRef = React.useRef(false);
  const wrapperRef = React.useRef(null);
  const tooltipRef = React.useRef(null);
  const tooltipId = React.useId();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isControlled = controlledOpen !== void 0;
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen;
  const setOpen = React.useCallback(
    (value) => {
      if (!isControlled) {
        setUncontrolledOpen(value);
      }
      onOpenChange == null ? void 0 : onOpenChange(value);
    },
    [isControlled, onOpenChange]
  );
  const clearTimeouts = React.useCallback(() => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = null;
    }
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  }, []);
  const calculatePosition = React.useCallback(() => {
    if (!wrapperRef.current || !tooltipRef.current) return;
    const triggerRect = wrapperRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const fitsPlacement = (p) => {
      switch (p) {
        case "top":
          return (
            triggerRect.top - tooltipRect.height - offset >= VIEWPORT_PADDING
          );
        case "bottom":
          return (
            triggerRect.bottom + tooltipRect.height + offset <=
            viewportHeight - VIEWPORT_PADDING
          );
        case "left":
          return (
            triggerRect.left - tooltipRect.width - offset >= VIEWPORT_PADDING
          );
        case "right":
          return (
            triggerRect.right + tooltipRect.width + offset <=
            viewportWidth - VIEWPORT_PADDING
          );
      }
    };
    let actualPlacement = preferredPlacement;
    if (!fitsPlacement(preferredPlacement)) {
      const opposites = {
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left",
      };
      const opposite = opposites[preferredPlacement];
      if (fitsPlacement(opposite)) {
        actualPlacement = opposite;
      } else {
        const perpendicular =
          preferredPlacement === "top" || preferredPlacement === "bottom"
            ? ["right", "left"]
            : ["bottom", "top"];
        for (const p of perpendicular) {
          if (fitsPlacement(p)) {
            actualPlacement = p;
            break;
          }
        }
      }
    }
    let top = 0;
    let left = 0;
    const triggerCenterX = triggerRect.left + triggerRect.width / 2;
    const triggerCenterY = triggerRect.top + triggerRect.height / 2;
    switch (actualPlacement) {
      case "top":
        top = triggerRect.top - tooltipRect.height - offset;
        left = triggerCenterX - tooltipRect.width / 2;
        break;
      case "bottom":
        top = triggerRect.bottom + offset;
        left = triggerCenterX - tooltipRect.width / 2;
        break;
      case "left":
        top = triggerCenterY - tooltipRect.height / 2;
        left = triggerRect.left - tooltipRect.width - offset;
        break;
      case "right":
        top = triggerCenterY - tooltipRect.height / 2;
        left = triggerRect.right + offset;
        break;
    }
    let arrowOffset = 0;
    const idealLeft = left;
    if (left < VIEWPORT_PADDING) {
      left = VIEWPORT_PADDING;
    } else if (left + tooltipRect.width > viewportWidth - VIEWPORT_PADDING) {
      left = viewportWidth - tooltipRect.width - VIEWPORT_PADDING;
    }
    if (actualPlacement === "top" || actualPlacement === "bottom") {
      arrowOffset = idealLeft - left;
    }
    if (top < VIEWPORT_PADDING) {
      top = VIEWPORT_PADDING;
    } else if (top + tooltipRect.height > viewportHeight - VIEWPORT_PADDING) {
      top = viewportHeight - tooltipRect.height - VIEWPORT_PADDING;
    }
    setPosition({ top, left, actualPlacement, arrowOffset });
  }, [preferredPlacement, offset]);
  React.useEffect(() => {
    if (typeof document === "undefined") return;
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    checkDarkMode();
    const observer = new window.MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);
  React.useEffect(() => {
    if (!isOpen) {
      setPosition(null);
      return;
    }
    const rafId = window.requestAnimationFrame(() => {
      calculatePosition();
    });
    const handleUpdate = () => calculatePosition();
    window.addEventListener("scroll", handleUpdate, true);
    window.addEventListener("resize", handleUpdate);
    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleUpdate, true);
      window.removeEventListener("resize", handleUpdate);
    };
  }, [isOpen, calculatePosition]);
  const handleMouseEnter = React.useCallback(() => {
    if (disabled) return;
    isHoveringRef.current = true;
    clearTimeouts();
    showTimeoutRef.current = setTimeout(() => {
      if (isHoveringRef.current) {
        setOpen(true);
      }
    }, delay);
  }, [disabled, delay, setOpen, clearTimeouts]);
  const handleMouseLeave = React.useCallback(() => {
    isHoveringRef.current = false;
    clearTimeouts();
    hideTimeoutRef.current = setTimeout(() => {
      if (!isHoveringRef.current) {
        setOpen(false);
      }
    }, 100);
  }, [setOpen, clearTimeouts]);
  const handleFocus = React.useCallback(() => {
    if (disabled) return;
    clearTimeouts();
    setOpen(true);
  }, [disabled, setOpen, clearTimeouts]);
  const handleBlur = React.useCallback(() => {
    clearTimeouts();
    setOpen(false);
  }, [setOpen, clearTimeouts]);
  React.useEffect(() => {
    return () => {
      clearTimeouts();
    };
  }, [clearTimeouts]);
  const trigger = React.cloneElement(children, {
    onFocus: handleFocus,
    onBlur: handleBlur,
    "aria-describedby": isOpen ? tooltipId : void 0,
  });
  const getArrowStyle = (isDark) => {
    if (!position) return {};
    const { actualPlacement, arrowOffset } = position;
    const baseStyle = {
      position: "absolute",
      width: 0,
      height: 0,
      borderStyle: "solid",
      // Must use content-box for CSS border triangle to work (Tailwind sets border-box globally)
      boxSizing: "content-box",
    };
    const arrowSize = 5;
    const arrowColor = isDark ? "#f5f5f5" : "#171717";
    switch (actualPlacement) {
      case "top":
        return {
          ...baseStyle,
          bottom: -5,
          left: `calc(50% + ${arrowOffset}px)`,
          transform: "translateX(-50%)",
          borderWidth: `${arrowSize}px ${arrowSize}px 0 ${arrowSize}px`,
          borderColor: `${arrowColor} transparent transparent transparent`,
        };
      case "bottom":
        return {
          ...baseStyle,
          top: -5,
          left: `calc(50% + ${arrowOffset}px)`,
          transform: "translateX(-50%)",
          borderWidth: `0 ${arrowSize}px ${arrowSize}px ${arrowSize}px`,
          borderColor: `transparent transparent ${arrowColor} transparent`,
        };
      case "left":
        return {
          ...baseStyle,
          right: -5,
          top: "50%",
          transform: "translateY(-50%)",
          borderWidth: `${arrowSize}px 0 ${arrowSize}px ${arrowSize}px`,
          borderColor: `transparent transparent transparent ${arrowColor}`,
        };
      case "right":
        return {
          ...baseStyle,
          left: -5,
          top: "50%",
          transform: "translateY(-50%)",
          borderWidth: `${arrowSize}px ${arrowSize}px ${arrowSize}px 0`,
          borderColor: `transparent ${arrowColor} transparent transparent`,
        };
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    ref: wrapperRef,
    className: "relative inline-flex",
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    children: [
      trigger,
      isOpen &&
        !disabled &&
        typeof document !== "undefined" &&
        (0, import_react_dom.createPortal)(
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            ref: tooltipRef,
            id: tooltipId,
            role: "tooltip",
            "aria-hidden": !isOpen,
            style: {
              position: "fixed",
              top: (position == null ? void 0 : position.top) ?? -9999,
              left: (position == null ? void 0 : position.left) ?? -9999,
              maxWidth: maxWidth === "none" ? void 0 : maxWidth,
              visibility: position ? "visible" : "hidden",
              // Use inline styles to ensure they work in portals (rendered outside React tree)
              backgroundColor: isDarkMode ? "#f5f5f5" : "#171717",
              // neutral-100 / neutral-900
              color: isDarkMode ? "#171717" : "#ffffff",
              // neutral-900 / white
              fontFamily:
                "var(--mieweb-font-sans, ui-sans-serif, system-ui, sans-serif)",
            },
            className: cn(
              "pointer-events-none z-[9999] px-3 py-1.5 text-xs",
              "rounded-md shadow-md",
              "leading-normal font-semibold",
              !prefersReducedMotion && position && "animate-fade-in",
              className
            ),
            children: [
              content,
              position &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  style: getArrowStyle(isDarkMode),
                  "aria-hidden": "true",
                }),
            ],
          }),
          document.body
        ),
    ],
  });
}
Tooltip.displayName = "Tooltip";

// node_modules/@mieweb/ui/dist/chunk-KJZNEVYM.js
var import_react2 = __toESM(require_react(), 1);
var THEME_STORAGE_KEY = "mieweb-ui-theme";
function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
function getStoredTheme() {
  if (typeof window === "undefined") return "system";
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark" || stored === "system") {
    return stored;
  }
  return "system";
}
function applyTheme(theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.setAttribute("data-theme", theme);
}
function useTheme() {
  const [theme, setThemeState] = (0, import_react2.useState)("system");
  const [resolvedTheme, setResolvedTheme] = (0, import_react2.useState)(
    "light"
  );
  (0, import_react2.useEffect)(() => {
    const stored = getStoredTheme();
    setThemeState(stored);
    const resolved = stored === "system" ? getSystemTheme() : stored;
    setResolvedTheme(resolved);
    applyTheme(resolved);
  }, []);
  (0, import_react2.useEffect)(() => {
    if (theme !== "system") return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      const newTheme = e.matches ? "dark" : "light";
      setResolvedTheme(newTheme);
      applyTheme(newTheme);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);
  const setTheme = (0, import_react2.useCallback)((newTheme) => {
    setThemeState(newTheme);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    const resolved = newTheme === "system" ? getSystemTheme() : newTheme;
    setResolvedTheme(resolved);
    applyTheme(resolved);
  }, []);
  return {
    theme,
    setTheme,
    resolvedTheme,
  };
}

// node_modules/@mieweb/ui/dist/chunk-TA6FVVCM.js
var React2 = __toESM(require_react(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);

// node_modules/class-variance-authority/dist/index.mjs
var falsyToString = (value) =>
  typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
var cx = clsx;
var cva = (base, config) => (props) => {
  var _config_compoundVariants;
  if ((config === null || config === void 0 ? void 0 : config.variants) == null)
    return cx(
      base,
      props === null || props === void 0 ? void 0 : props.class,
      props === null || props === void 0 ? void 0 : props.className
    );
  const { variants, defaultVariants } = config;
  const getVariantClassNames = Object.keys(variants).map((variant) => {
    const variantProp =
      props === null || props === void 0 ? void 0 : props[variant];
    const defaultVariantProp =
      defaultVariants === null || defaultVariants === void 0
        ? void 0
        : defaultVariants[variant];
    if (variantProp === null) return null;
    const variantKey =
      falsyToString(variantProp) || falsyToString(defaultVariantProp);
    return variants[variant][variantKey];
  });
  const propsWithoutUndefined =
    props &&
    Object.entries(props).reduce((acc, param) => {
      let [key, value] = param;
      if (value === void 0) {
        return acc;
      }
      acc[key] = value;
      return acc;
    }, {});
  const getCompoundVariantClassNames =
    config === null || config === void 0
      ? void 0
      : (_config_compoundVariants = config.compoundVariants) === null ||
          _config_compoundVariants === void 0
        ? void 0
        : _config_compoundVariants.reduce((acc, param) => {
            let {
              class: cvClass,
              className: cvClassName,
              ...compoundVariantOptions
            } = param;
            return Object.entries(compoundVariantOptions).every((param2) => {
              let [key, value] = param2;
              return Array.isArray(value)
                ? value.includes(
                    {
                      ...defaultVariants,
                      ...propsWithoutUndefined,
                    }[key]
                  )
                : {
                    ...defaultVariants,
                    ...propsWithoutUndefined,
                  }[key] === value;
            })
              ? [...acc, cvClass, cvClassName]
              : acc;
          }, []);
  return cx(
    base,
    getVariantClassNames,
    getCompoundVariantClassNames,
    props === null || props === void 0 ? void 0 : props.class,
    props === null || props === void 0 ? void 0 : props.className
  );
};

// node_modules/@mieweb/ui/dist/chunk-TA6FVVCM.js
var ThemeProviderContext = React2.createContext(void 0);
function ThemeProvider({ children, defaultTheme: _defaultTheme = "system" }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const value = React2.useMemo(
    () => ({ theme, setTheme, resolvedTheme }),
    [theme, setTheme, resolvedTheme]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    ThemeProviderContext.Provider,
    { value, children }
  );
}
ThemeProvider.displayName = "ThemeProvider";
function useThemeContext() {
  const context = React2.useContext(ThemeProviderContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
}
var themeToggleVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-md border transition-colors",
    "focus:outline-none focus:ring-2 focus:ring-primary-500/40",
  ],
  {
    variants: {
      size: {
        sm: "h-7 w-7",
        md: "h-8 w-8",
        lg: "h-9 w-9",
      },
      variant: {
        default: [
          "border-neutral-300 bg-white text-neutral-600 shadow-sm",
          "hover:bg-neutral-100",
          "dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700",
        ],
        ghost: [
          "border-transparent bg-transparent text-neutral-600",
          "hover:bg-neutral-100",
          "dark:text-neutral-300 dark:hover:bg-neutral-700",
        ],
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);
var themeToggleIconVariants = cva("", {
  variants: {
    size: {
      sm: "h-3.5 w-3.5",
      md: "h-4 w-4",
      lg: "h-5 w-5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
var SunIcon = ({ className }) =>
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2,
    "aria-hidden": "true",
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
    }),
  });
var MoonIcon = ({ className }) =>
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2,
    "aria-hidden": "true",
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
    }),
  });
var SystemIcon = ({ className }) =>
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2,
    "aria-hidden": "true",
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    }),
  });
var ThemeToggle = React2.forwardRef(
  (
    {
      className,
      size,
      variant,
      mode = "two-way",
      showTooltip = true,
      tooltipPlacement = "bottom",
      tooltipDelay = 140,
      lightIcon,
      darkIcon,
      systemIcon,
      ...props
    },
    ref
  ) => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const handleClick = React2.useCallback(() => {
      if (mode === "two-way") {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      } else {
        const nextTheme = {
          light: "dark",
          dark: "system",
          system: "light",
        };
        setTheme(nextTheme[theme]);
      }
    }, [mode, theme, resolvedTheme, setTheme]);
    const getLabel = () => {
      if (mode === "two-way") {
        return resolvedTheme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode";
      }
      const nextThemeLabels = {
        light: "Switch to dark mode",
        dark: "Switch to system theme",
        system: "Switch to light mode",
      };
      return nextThemeLabels[theme];
    };
    const getCurrentIcon = () => {
      if (mode === "three-way" && theme === "system") {
        return (
          systemIcon ||
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SystemIcon, {
            className: themeToggleIconVariants({ size }),
          })
        );
      }
      if (resolvedTheme === "dark") {
        return (
          darkIcon ||
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SunIcon, {
            className: themeToggleIconVariants({ size }),
          })
        );
      }
      return (
        lightIcon ||
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(MoonIcon, {
          className: themeToggleIconVariants({ size }),
        })
      );
    };
    const label = getLabel();
    const button = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", {
      ref,
      type: "button",
      "aria-label": label,
      onClick: handleClick,
      className: cn(themeToggleVariants({ size, variant }), className),
      ...props,
      children: getCurrentIcon(),
    });
    if (showTooltip) {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tooltip, {
        content: label,
        placement: tooltipPlacement,
        delay: tooltipDelay,
        children: button,
      });
    }
    return button;
  }
);
ThemeToggle.displayName = "ThemeToggle";

// node_modules/@mieweb/ui/dist/chunk-T4ME7QCT.js
var import_react3 = __toESM(require_react(), 1);
function useEscapeKey(callback, enabled = true) {
  const handleKeyDown = (0, import_react3.useCallback)(
    (event) => {
      if (event.key === "Escape") {
        callback();
      }
    },
    [callback]
  );
  (0, import_react3.useEffect)(() => {
    if (!enabled) return;
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown, enabled]);
}

// node_modules/@mieweb/ui/dist/chunk-GV5JQBPX.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var spinnerVariants = cva(
  ["animate-spin rounded-full border-2 border-current border-t-transparent"],
  {
    variants: {
      size: {
        xs: "h-3 w-3",
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-12 w-12",
      },
      variant: {
        default: "text-primary-500",
        muted: "text-muted-foreground",
        white: "text-white",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);
function Spinner({ className, size, variant, label = "Loading", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
    role: "status",
    "aria-label": label,
    className: cn(spinnerVariants({ size, variant }), className),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {
      className: "sr-only",
      children: label,
    }),
  });
}
Spinner.displayName = "Spinner";
function SpinnerWithLabel({
  label,
  labelPosition = "bottom",
  size,
  variant,
  className,
  ...props
}) {
  const positionClasses = {
    top: "flex-col-reverse",
    bottom: "flex-col",
    left: "flex-row-reverse",
    right: "flex-row",
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
    role: "status",
    "aria-label": label,
    className: cn(
      "inline-flex items-center justify-center gap-2",
      positionClasses[labelPosition],
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
        className: cn(spinnerVariants({ size, variant })),
        "aria-hidden": "true",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {
        className: "text-muted-foreground text-sm",
        children: label,
      }),
    ],
  });
}
SpinnerWithLabel.displayName = "SpinnerWithLabel";
function FullPageSpinner({ backdrop = true, text, size = "xl", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
    className: cn(
      "fixed inset-0 z-50 flex flex-col items-center justify-center gap-4",
      backdrop && "bg-background/80 backdrop-blur-sm"
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Spinner, { size, ...props }),
      text &&
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", {
          className: "text-muted-foreground text-sm",
          children: text,
        }),
    ],
  });
}
FullPageSpinner.displayName = "FullPageSpinner";

// node_modules/@mieweb/ui/dist/chunk-RCMF6KZA.js
var React3 = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var textVariants = cva("", {
  variants: {
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary-600 dark:text-primary-400",
      destructive: "text-destructive",
      success: "text-success",
      warning: "text-warning",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "base",
    weight: "normal",
    align: "left",
  },
});
var Text = React3.forwardRef(
  (
    {
      className,
      variant,
      size,
      weight,
      align,
      as: Component = "p",
      truncate,
      ...props
    },
    ref
  ) => {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Component, {
      ref,
      className: cn(
        textVariants({ variant, size, weight, align }),
        truncate && "truncate",
        className
      ),
      ...props,
    });
  }
);
Text.displayName = "Text";
var SmallMuted = React3.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, {
    ref,
    variant: "muted",
    size: "sm",
    className,
    ...props,
  })
);
SmallMuted.displayName = "SmallMuted";

// node_modules/@mieweb/ui/dist/chunk-CLNOI5J7.js
var import_react4 = __toESM(require_react(), 1);
function useFocusTrap(enabled = true) {
  const containerRef = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    if (!enabled || !containerRef.current) return;
    const container = containerRef.current;
    const focusableElements = container.querySelectorAll(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length === 0) return;
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    firstElement.focus();
    const handleKeyDown = (event) => {
      if (event.key !== "Tab") return;
      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };
    container.addEventListener("keydown", handleKeyDown);
    return () => container.removeEventListener("keydown", handleKeyDown);
  }, [enabled]);
  return containerRef;
}

// node_modules/@mieweb/ui/dist/chunk-D5IBXXF2.js
var React4 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var modalOverlayVariants = cva(
  [
    "fixed inset-0 z-50",
    "bg-black/50 backdrop-blur-sm",
    "data-[state=open]:animate-in data-[state=open]:fade-in-0",
    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
  ],
  {
    variants: {},
    defaultVariants: {},
  }
);
var modalContentVariants = cva(
  [
    "fixed left-1/2 top-1/2 z-50",
    "-translate-x-1/2 -translate-y-1/2",
    "w-full bg-card text-card-foreground",
    "border border-border rounded-xl shadow-lg",
    "focus:outline-none",
    "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
    "duration-200",
  ],
  {
    variants: {
      size: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        full: "max-w-[calc(100vw-2rem)]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
function Modal({
  open,
  onOpenChange,
  children,
  size,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className,
  id,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
}) {
  const generatedId = React4.useId();
  const modalId = id || generatedId;
  const focusTrapRef = useFocusTrap(open);
  useEscapeKey(() => {
    if (closeOnEscape && open) {
      onOpenChange(false);
    }
  }, open);
  const handleOverlayClick = React4.useCallback(
    (e) => {
      if (closeOnOverlayClick && e.target === e.currentTarget) {
        onOpenChange(false);
      }
    },
    [closeOnOverlayClick, onOpenChange]
  );
  React4.useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [open]);
  if (!open) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ModalContext.Provider, {
    value: { onClose: () => onOpenChange(false), modalId },
    children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
      className: "fixed inset-0 z-50",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
          className: cn(modalOverlayVariants()),
          "data-state": open ? "open" : "closed",
          onClick: handleOverlayClick,
          "aria-hidden": "true",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
          ref: focusTrapRef,
          role: "dialog",
          "aria-modal": "true",
          "aria-label": ariaLabel,
          "aria-labelledby": ariaLabelledBy || `${modalId}-title`,
          "aria-describedby": ariaDescribedBy,
          id: modalId,
          tabIndex: -1,
          "data-state": open ? "open" : "closed",
          className: cn(modalContentVariants({ size }), className),
          children,
        }),
      ],
    }),
  });
}
Modal.displayName = "Modal";
var ModalContext = React4.createContext(void 0);
function useModalContext() {
  const context = React4.useContext(ModalContext);
  if (!context) {
    throw new Error("Modal components must be used within a Modal");
  }
  return context;
}
var ModalHeader = React4.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
    ref,
    className: cn(
      "flex items-center justify-between",
      "border-border border-b px-6 py-4",
      className
    ),
    ...props,
  })
);
ModalHeader.displayName = "ModalHeader";
var ModalTitle = React4.forwardRef(({ className, children, ...props }, ref) => {
  const { modalId } = useModalContext();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", {
    ref,
    id: `${modalId}-title`,
    className: cn(
      "text-lg leading-none font-semibold tracking-tight",
      className
    ),
    ...props,
    children,
  });
});
ModalTitle.displayName = "ModalTitle";
var ModalClose = React4.forwardRef(
  ({ className, children, onClick, ...props }, ref) => {
    const { onClose } = useModalContext();
    const handleClick = React4.useCallback(
      (e) => {
        onClick == null ? void 0 : onClick(e);
        if (!e.defaultPrevented) {
          onClose();
        }
      },
      [onClick, onClose]
    );
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", {
      ref,
      type: "button",
      onClick: handleClick,
      className: cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-lg",
        "text-muted-foreground hover:text-foreground",
        "hover:bg-muted transition-colors",
        "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
        className
      ),
      "aria-label": "Close",
      ...props,
      children:
        children || /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CloseIcon, {}),
    });
  }
);
ModalClose.displayName = "ModalClose";
var ModalBody = React4.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
    ref,
    className: cn("px-6 py-4", className),
    ...props,
  })
);
ModalBody.displayName = "ModalBody";
var ModalFooter = React4.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
    ref,
    className: cn(
      "flex items-center justify-end gap-3",
      "border-border border-t px-6 py-4",
      className
    ),
    ...props,
  })
);
ModalFooter.displayName = "ModalFooter";
function CloseIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M18 6 6 18" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "m6 6 12 12" }),
    ],
  });
}

// node_modules/@mieweb/ui/dist/chunk-NXRLGHEC.js
var React5 = __toESM(require_react(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var inputVariants = cva(
  [
    "w-full px-3 py-2",
    "border border-input rounded-lg",
    "bg-background text-foreground",
    "placeholder:text-muted-foreground",
    "transition-colors duration-200",
    "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      size: {
        sm: "h-8 text-sm",
        md: "h-10 text-base",
        lg: "h-12 text-lg",
      },
      hasError: {
        true: "border-destructive focus:ring-destructive",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      hasError: false,
    },
  }
);
var Input = React5.forwardRef(
  (
    {
      className,
      size,
      hasError,
      error,
      helperText,
      label,
      hideLabel,
      required,
      disabled,
      id,
      "aria-describedby": ariaDescribedBy,
      ...props
    },
    ref
  ) => {
    const generatedId = React5.useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;
    const describedByIds = [
      error ? errorId : null,
      helperText ? helperId : null,
      ariaDescribedBy,
    ]
      .filter(Boolean)
      .join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", {
      className: cn("flex flex-col gap-1.5", disabled && "opacity-50"),
      children: [
        label &&
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("label", {
            htmlFor: inputId,
            className: cn(
              "text-foreground text-sm font-medium",
              hideLabel && "sr-only"
            ),
            children: [
              label,
              required &&
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", {
                  className: "text-destructive ml-1",
                  "aria-hidden": "true",
                  children: "*",
                }),
            ],
          }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("input", {
          id: inputId,
          ref,
          className: cn(
            inputVariants({ size, hasError: hasError || !!error }),
            className
          ),
          "aria-invalid": hasError || !!error,
          "aria-describedby": describedByIds || void 0,
          required,
          disabled,
          ...props,
        }),
        error &&
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", {
            id: errorId,
            className: "text-destructive text-sm",
            role: "alert",
            children: error,
          }),
        helperText &&
          !error &&
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", {
            id: helperId,
            className: "text-muted-foreground text-sm",
            children: helperText,
          }),
      ],
    });
  }
);
Input.displayName = "Input";

// node_modules/@mieweb/ui/dist/chunk-3NJ72QU6.js
var React6 = __toESM(require_react(), 1);
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var badgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "font-medium",
    "rounded-full",
    "transition-colors duration-150",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-primary-100 text-primary-900 dark:bg-primary-900 dark:text-primary-100",
        secondary:
          "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100",
        success:
          "bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100",
        warning:
          "bg-yellow-100 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100",
        danger: "bg-red-100 text-red-900 dark:bg-red-900 dark:text-red-100",
        outline: "border border-current bg-transparent",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-sm",
        lg: "px-3 py-1 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);
var Badge = React6.forwardRef(
  ({ className, variant, size, icon, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", {
      ref,
      className: cn(badgeVariants({ variant, size }), className),
      ...props,
      children: [
        icon &&
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", {
            className: "mr-1 shrink-0",
            children: icon,
          }),
        children,
      ],
    });
  }
);
Badge.displayName = "Badge";

// node_modules/@mieweb/ui/dist/chunk-N5EKL4DH.js
var React7 = __toESM(require_react(), 1);
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var buttonVariants = cva(
  // Base styles
  [
    "inline-flex items-center justify-center gap-2",
    "font-semibold transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.98]",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-primary-800 text-white",
          "hover:bg-primary-700",
          "active:bg-primary-900",
        ],
        secondary: [
          "bg-neutral-200 text-neutral-900",
          "hover:bg-neutral-300",
          "active:bg-neutral-400",
          "dark:bg-neutral-700 dark:text-neutral-100",
          "dark:hover:bg-neutral-600",
          "dark:active:bg-neutral-500",
        ],
        ghost: [
          "bg-transparent text-neutral-600",
          "hover:bg-neutral-100",
          "active:bg-neutral-200",
          "dark:text-neutral-400",
          "dark:hover:bg-neutral-800",
          "dark:active:bg-neutral-700",
        ],
        outline: [
          "border-2 border-primary-800 text-primary-800 bg-transparent",
          "hover:bg-primary-50 hover:text-primary-900",
          "active:bg-primary-100",
          "dark:border-primary-400 dark:text-primary-400",
          "dark:hover:bg-primary-950",
          "dark:active:bg-primary-900",
        ],
        danger: [
          "bg-red-600 text-white",
          "hover:bg-red-700",
          "active:bg-red-800",
        ],
        link: [
          "text-primary-800 underline-offset-4",
          "hover:underline hover:text-primary-900",
          "active:text-primary-950",
          "dark:text-primary-400",
        ],
      },
      size: {
        sm: "h-8 px-3 text-sm rounded-md",
        md: "h-10 px-4 text-base rounded-lg",
        lg: "h-12 px-6 text-lg rounded-xl",
        icon: "h-10 w-10 rounded-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);
var Button = React7.forwardRef(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      leftIcon,
      rightIcon,
      isLoading,
      loadingText,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("button", {
      className: cn(buttonVariants({ variant, size, fullWidth }), className),
      ref,
      disabled: disabled || isLoading,
      "aria-busy": isLoading,
      ...props,
      children: isLoading
        ? /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
            import_jsx_runtime8.Fragment,
            {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  LoadingSpinner,
                  {}
                ),
                loadingText || children,
              ],
            }
          )
        : /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
            import_jsx_runtime8.Fragment,
            {
              children: [
                React7.isValidElement(leftIcon) &&
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", {
                    className: "shrink-0",
                    children: leftIcon,
                  }),
                children,
                React7.isValidElement(rightIcon) &&
                  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", {
                    className: "shrink-0",
                    children: rightIcon,
                  }),
              ],
            }
          ),
    });
  }
);
Button.displayName = "Button";
function LoadingSpinner() {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("svg", {
    className: "h-4 w-4 animate-spin",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("circle", {
        className: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "4",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", {
        className: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
      }),
    ],
  });
}

// node_modules/@mieweb/ui/node_modules/lucide-react/dist/esm/createLucideIcon.js
var import_react6 = __toESM(require_react());

// node_modules/@mieweb/ui/node_modules/lucide-react/dist/esm/shared/src/utils.js
var toKebabCase = (string) =>
  string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var toCamelCase = (string) =>
  string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) =>
    p2 ? p2.toUpperCase() : p1.toLowerCase()
  );
var toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var mergeClasses = (...classes) =>
  classes
    .filter((className, index, array) => {
      return (
        Boolean(className) &&
        className.trim() !== "" &&
        array.indexOf(className) === index
      );
    })
    .join(" ")
    .trim();
var hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};

// node_modules/@mieweb/ui/node_modules/lucide-react/dist/esm/Icon.js
var import_react5 = __toESM(require_react());

// node_modules/@mieweb/ui/node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

// node_modules/@mieweb/ui/node_modules/lucide-react/dist/esm/Icon.js
var Icon = (0, import_react5.forwardRef)(
  (
    {
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode,
      ...rest
    },
    ref
  ) =>
    (0, import_react5.createElement)(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth
          ? (Number(strokeWidth) * 24) / Number(size)
          : strokeWidth,
        className: mergeClasses("lucide", className),
        ...(!children && !hasA11yProp(rest) && { "aria-hidden": "true" }),
        ...rest,
      },
      [
        ...iconNode.map(([tag, attrs]) =>
          (0, import_react5.createElement)(tag, attrs)
        ),
        ...(Array.isArray(children) ? children : [children]),
      ]
    )
);

// node_modules/@mieweb/ui/node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component = (0, import_react6.forwardRef)(
    ({ className, ...props }, ref) =>
      (0, import_react6.createElement)(Icon, {
        ref,
        iconNode,
        className: mergeClasses(
          `lucide-${toKebabCase(toPascalCase(iconName))}`,
          `lucide-${iconName}`,
          className
        ),
        ...props,
      })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};

// node_modules/@mieweb/ui/node_modules/lucide-react/dist/esm/icons/camera.js
var __iconNode = [
  [
    "path",
    {
      d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
      key: "18u6gg",
    },
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
];
var Camera = createLucideIcon("camera", __iconNode);

// node_modules/@mieweb/ui/node_modules/lucide-react/dist/esm/icons/check.js
var __iconNode2 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
var Check = createLucideIcon("check", __iconNode2);

// node_modules/@mieweb/ui/node_modules/lucide-react/dist/esm/icons/circle-alert.js
var __iconNode3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
];
var CircleAlert = createLucideIcon("circle-alert", __iconNode3);

// node_modules/@mieweb/ui/node_modules/lucide-react/dist/esm/icons/circle-check-big.js
var __iconNode4 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
];
var CircleCheckBig = createLucideIcon("circle-check-big", __iconNode4);

// node_modules/@mieweb/ui/node_modules/lucide-react/dist/esm/icons/clock.js
var __iconNode5 = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
];
var Clock = createLucideIcon("clock", __iconNode5);

// node_modules/@mieweb/ui/node_modules/lucide-react/dist/esm/icons/file-text.js
var __iconNode6 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6",
    },
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
];
var FileText = createLucideIcon("file-text", __iconNode6);

// node_modules/@mieweb/ui/node_modules/lucide-react/dist/esm/icons/globe.js
var __iconNode7 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
];
var Globe = createLucideIcon("globe", __iconNode7);

// node_modules/@mieweb/ui/node_modules/lucide-react/dist/esm/icons/image.js
var __iconNode8 = [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn",
    },
  ],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
];
var Image = createLucideIcon("image", __iconNode8);

// node_modules/@mieweb/ui/node_modules/lucide-react/dist/esm/icons/linkedin.js
var __iconNode9 = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
];
var Linkedin = createLucideIcon("linkedin", __iconNode9);

// node_modules/@mieweb/ui/node_modules/lucide-react/dist/esm/icons/mail.js
var __iconNode10 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  [
    "rect",
    { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
  ],
];
var Mail = createLucideIcon("mail", __iconNode10);

// node_modules/@mieweb/ui/node_modules/lucide-react/dist/esm/icons/phone.js
var __iconNode11 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v",
    },
  ],
];
var Phone = createLucideIcon("phone", __iconNode11);

// node_modules/@mieweb/ui/node_modules/lucide-react/dist/esm/icons/refresh-cw.js
var __iconNode12 = [
  [
    "path",
    { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" },
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  [
    "path",
    { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" },
  ],
  ["path", { d: "M8 16H3v5", key: "1cv678" }],
];
var RefreshCw = createLucideIcon("refresh-cw", __iconNode12);

// node_modules/@mieweb/ui/node_modules/lucide-react/dist/esm/icons/scan-line.js
var __iconNode13 = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }],
];
var ScanLine = createLucideIcon("scan-line", __iconNode13);

// node_modules/@mieweb/ui/node_modules/lucide-react/dist/esm/icons/scan.js
var __iconNode14 = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
];
var Scan = createLucideIcon("scan", __iconNode14);

// node_modules/@mieweb/ui/node_modules/lucide-react/dist/esm/icons/trash-2.js
var __iconNode15 = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
];
var Trash2 = createLucideIcon("trash-2", __iconNode15);

// node_modules/@mieweb/ui/node_modules/lucide-react/dist/esm/icons/upload.js
var __iconNode16 = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
];
var Upload = createLucideIcon("upload", __iconNode16);

// node_modules/@mieweb/ui/node_modules/lucide-react/dist/esm/icons/x.js
var __iconNode17 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
];
var X = createLucideIcon("x", __iconNode17);

// node_modules/@mieweb/ui/dist/chunk-CP7NPDQW.js
var import_react7 = __toESM(require_react(), 1);
function useMediaQuery(query) {
  const [matches, setMatches] = (0, import_react7.useState)(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });
  (0, import_react7.useEffect)(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);
    const handler = (event) => {
      setMatches(event.matches);
    };
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, [query]);
  return matches;
}
function useIsMobile() {
  return useMediaQuery("(max-width: 639px)");
}

// node_modules/@mieweb/ui/dist/chunk-B26RIQ5R.js
var React8 = __toESM(require_react(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var alertVariants = cva(
  [
    "relative w-full rounded-lg border p-4",
    "[&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-current",
    "[&>svg+div]:translate-y-[-3px]",
  ],
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border-border",
        info: "bg-primary-50 text-primary-900 border-primary-200 dark:bg-primary-950 dark:text-primary-100 dark:border-primary-800",
        success:
          "bg-green-50 text-green-900 border-green-200 dark:bg-green-950 dark:text-green-100 dark:border-green-800",
        warning:
          "bg-yellow-50 text-yellow-900 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-100 dark:border-yellow-800",
        danger:
          "bg-red-50 text-red-900 border-red-200 dark:bg-red-950 dark:text-red-100 dark:border-red-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
var Alert = React8.forwardRef(
  (
    {
      className,
      variant,
      icon,
      dismissible,
      onDismiss,
      dismissLabel = "Dismiss alert",
      children,
      ...props
    },
    ref
  ) => {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", {
      ref,
      role: "alert",
      className: cn(
        alertVariants({ variant }),
        React8.isValidElement(icon) && "pl-11",
        dismissible && "pr-10",
        className
      ),
      ...props,
      children: [
        React8.isValidElement(icon) && icon,
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children }),
        dismissible &&
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", {
            type: "button",
            onClick: onDismiss,
            className: cn(
              "absolute top-2 right-2 rounded-md p-1",
              "opacity-70 hover:opacity-100",
              "focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
              "transition-opacity"
            ),
            "aria-label": dismissLabel,
            children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(X, {
              size: 16,
              "aria-hidden": "true",
            }),
          }),
      ],
    });
  }
);
Alert.displayName = "Alert";
var AlertTitle = React8.forwardRef(({ className, children, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h5", {
    ref,
    className: cn("mb-1 leading-none font-semibold tracking-tight", className),
    ...props,
    children,
  })
);
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React8.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", {
    ref,
    className: cn("text-sm [&_p]:leading-relaxed", className),
    ...props,
  })
);
AlertDescription.displayName = "AlertDescription";

// node_modules/@mieweb/ui/dist/index.js
var React46 = __toESM(require_react(), 1);
var import_react8 = __toESM(require_react(), 1);
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
import { AgGridReact } from "ag-grid-react";
import { AgGridReact as AgGridReact2 } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
function generateId() {
  return `field_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
function AdditionalFields({
  value,
  onChange,
  title = "Additional Information (Optional)",
  defaultExpanded = false,
  disabled = false,
  namePlaceholder = "Field Name",
  valuePlaceholder = "Field Value",
  addButtonLabel = "Add Additional Information",
  maxEntries = 20,
  className,
  collapsible = true,
}) {
  const [isExpanded, setIsExpanded] = React46.useState(defaultExpanded);
  const contentId = React46.useId();
  const handleNameChange = (id, name) => {
    const updated = value.map((entry) =>
      entry.id === id ? { ...entry, name } : entry
    );
    onChange(updated);
  };
  const handleValueChange = (id, newValue) => {
    const updated = value.map((entry) =>
      entry.id === id ? { ...entry, value: newValue } : entry
    );
    onChange(updated);
  };
  const handleRemove = (id) => {
    onChange(value.filter((entry) => entry.id !== id));
  };
  const handleAdd = () => {
    if (value.length < maxEntries) {
      onChange([
        ...value,
        {
          id: generateId(),
          name: "",
          value: "",
        },
      ]);
      if (!isExpanded) {
        setIsExpanded(true);
      }
    }
  };
  const canAdd = value.length < maxEntries;
  const content = /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    import_jsx_runtime10.Fragment,
    {
      children: [
        value.map((entry) =>
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
            "div",
            {
              className: "mb-3 flex items-start gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                  className: "flex-1",
                  children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                    Input,
                    {
                      value: entry.name,
                      onChange: (e) =>
                        handleNameChange(entry.id, e.target.value),
                      placeholder: namePlaceholder,
                      disabled,
                      "aria-label": "Field name",
                    }
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                  className: "flex-1",
                  children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                    Input,
                    {
                      value: entry.value,
                      onChange: (e) =>
                        handleValueChange(entry.id, e.target.value),
                      placeholder: valuePlaceholder,
                      disabled,
                      "aria-label": "Field value",
                    }
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", {
                  type: "button",
                  onClick: () => handleRemove(entry.id),
                  disabled,
                  className: cn(
                    "shrink-0 rounded-md p-2 transition-colors",
                    "text-red-600 hover:bg-red-50",
                    "disabled:cursor-not-allowed disabled:text-gray-300 disabled:hover:bg-transparent",
                    "dark:text-red-400 dark:hover:bg-red-900/20",
                    "dark:disabled:text-gray-600"
                  ),
                  "aria-label": "Remove field",
                  children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                    "svg",
                    {
                      className: "h-5 w-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                        }
                      ),
                    }
                  ),
                }),
              ],
            },
            entry.id
          )
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("button", {
          type: "button",
          onClick: handleAdd,
          disabled: disabled || !canAdd,
          className: cn(
            "flex w-full items-center justify-start gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
            "text-brand-600 hover:bg-brand-50",
            "disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:bg-transparent",
            "dark:text-brand-400 dark:hover:bg-brand-900/20",
            "dark:disabled:text-gray-600"
          ),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
              className: "h-5 w-5",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 4v16m8-8H4",
              }),
            }),
            addButtonLabel,
          ],
        }),
      ],
    }
  );
  if (!collapsible) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
      className: cn("space-y-3", className),
      children: [
        title &&
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", {
            className: "text-sm font-medium text-gray-700 dark:text-gray-300",
            children: title,
          }),
        content,
      ],
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: cn("", className),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("button", {
        type: "button",
        onClick: () => setIsExpanded(!isExpanded),
        className: cn(
          "flex w-full items-center gap-2 text-left text-sm font-medium",
          "text-gray-700 hover:text-gray-900",
          "dark:text-gray-300 dark:hover:text-gray-100",
          "transition-colors"
        ),
        "aria-expanded": isExpanded,
        "aria-controls": contentId,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
            children: title,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
            className: cn(
              "h-4 w-4 transition-transform duration-200",
              isExpanded ? "rotate-180" : ""
            ),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M5 15l7-7 7 7",
            }),
          }),
          value.length > 0 &&
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
              className:
                "bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300 ml-1 rounded-full px-2 py-0.5 text-xs",
              children: value.length,
            }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
        id: contentId,
        className: cn(
          "overflow-hidden transition-all duration-200",
          isExpanded ? "mt-4 opacity-100" : "max-h-0 opacity-0"
        ),
        hidden: !isExpanded,
        children: content,
      }),
    ],
  });
}
AdditionalFields.displayName = "AdditionalFields";
var addressVariants = cva("", {
  variants: {
    /**
     * Display format:
     * - block: Multi-line display (default)
     * - inline: Single line with comma separation
     * - compact: City, State only
     */
    format: {
      block: "block",
      inline: "inline",
      compact: "inline",
    },
    /**
     * Visual size
     */
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    format: "block",
    size: "md",
  },
});
var DEFAULT_LABELS = {
  street1: "Address Line 1",
  street2: "Address Line 2",
  city: "City",
  state: "State",
  postalCode: "ZIP Code",
  county: "County",
  country: "Country",
};
var DEFAULT_PLACEHOLDERS = {
  street1: "Street address",
  street2: "Apt, suite, building (optional)",
  city: "City",
  state: "ST",
  postalCode: "12345",
  county: "County",
  country: "United States",
};
function AddressForm({
  value,
  onChange,
  disabled = false,
  required = false,
  errors = {},
  id,
  showCountry = true,
  showCounty = false,
  defaultCountry = "US",
  labels = {},
  placeholders = {},
  className,
  googlePlaces,
}) {
  const idPrefix = id || React46.useId();
  const autocompleteRef = React46.useRef(null);
  const inputRef = React46.useRef(null);
  const mergedLabels = { ...DEFAULT_LABELS, ...labels };
  const mergedPlaceholders = { ...DEFAULT_PLACEHOLDERS, ...placeholders };
  const handleChange = (field, fieldValue) => {
    onChange({
      ...value,
      [field]: fieldValue,
    });
  };
  React46.useEffect(() => {
    var _a;
    if (
      !(googlePlaces == null ? void 0 : googlePlaces.enabled) ||
      !inputRef.current
    )
      return;
    if (
      typeof google === "undefined" ||
      !((_a = google.maps) == null ? void 0 : _a.places)
    ) {
      console.warn(
        "Google Maps Places API is not loaded. Autocomplete will not work."
      );
      return;
    }
    const options = {
      types: googlePlaces.types || ["address"],
      fields: ["address_components", "geometry", "formatted_address"],
    };
    if (googlePlaces.componentRestrictions) {
      options.componentRestrictions = googlePlaces.componentRestrictions;
    }
    autocompleteRef.current = new google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
    autocompleteRef.current.addListener("place_changed", () => {
      var _a2, _b, _c;
      const place =
        (_a2 = autocompleteRef.current) == null ? void 0 : _a2.getPlace();
      if (!(place == null ? void 0 : place.address_components)) return;
      const addressData = {};
      let streetNumber = "";
      let route = "";
      for (const component of place.address_components) {
        const type = component.types[0];
        switch (type) {
          case "street_number":
            streetNumber = component.long_name;
            break;
          case "route":
            route = component.long_name;
            break;
          case "locality":
            addressData.city = component.long_name;
            break;
          case "administrative_area_level_1":
            addressData.state = component.short_name;
            break;
          case "administrative_area_level_2":
            addressData.county = component.long_name.replace(" County", "");
            break;
          case "postal_code":
            addressData.postalCode = component.long_name;
            break;
          case "country":
            addressData.country = component.short_name;
            break;
        }
      }
      addressData.street1 = streetNumber ? `${streetNumber} ${route}` : route;
      if ((_b = place.geometry) == null ? void 0 : _b.location) {
        addressData.lat = place.geometry.location.lat();
        addressData.lng = place.geometry.location.lng();
      }
      onChange({
        ...value,
        ...addressData,
      });
      (_c = googlePlaces.onPlaceSelect) == null
        ? void 0
        : _c.call(googlePlaces, place);
    });
    return () => {
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, [googlePlaces == null ? void 0 : googlePlaces.enabled]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: cn("space-y-4", className),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Input, {
        ref: inputRef,
        id: `${idPrefix}-street1`,
        label: mergedLabels.street1,
        placeholder: mergedPlaceholders.street1,
        value: value.street1 || "",
        onChange: (e) => handleChange("street1", e.target.value),
        disabled,
        required,
        hasError: !!errors.street1,
        error: errors.street1,
        autoComplete: "address-line1",
        "data-cy": "input-address-line-1",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Input, {
        id: `${idPrefix}-street2`,
        label: mergedLabels.street2,
        placeholder: mergedPlaceholders.street2,
        value: value.street2 || "",
        onChange: (e) => handleChange("street2", e.target.value),
        disabled,
        hasError: !!errors.street2,
        error: errors.street2,
        autoComplete: "address-line2",
        "data-cy": "input-address-line-2",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className: "grid grid-cols-12 gap-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
            className: "col-span-12 md:col-span-6",
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Input, {
              id: `${idPrefix}-city`,
              label: mergedLabels.city,
              placeholder: mergedPlaceholders.city,
              value: value.city || "",
              onChange: (e) => handleChange("city", e.target.value),
              disabled,
              required,
              hasError: !!errors.city,
              error: errors.city,
              autoComplete: "address-level2",
              "data-cy": "input-city",
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
            className: "col-span-4 md:col-span-3",
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Input, {
              id: `${idPrefix}-state`,
              label: mergedLabels.state,
              placeholder: mergedPlaceholders.state,
              value: value.state || "",
              onChange: (e) =>
                handleChange("state", e.target.value.toUpperCase()),
              disabled,
              required,
              maxLength: 2,
              hasError: !!errors.state,
              error: errors.state,
              autoComplete: "address-level1",
              "data-cy": "input-state",
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
            className: "col-span-8 md:col-span-3",
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Input, {
              id: `${idPrefix}-postalCode`,
              label: mergedLabels.postalCode,
              placeholder: mergedPlaceholders.postalCode,
              value: value.postalCode || "",
              onChange: (e) => handleChange("postalCode", e.target.value),
              disabled,
              required,
              hasError: !!errors.postalCode,
              error: errors.postalCode,
              autoComplete: "postal-code",
              "data-cy": "input-postal-code",
            }),
          }),
        ],
      }),
      (showCounty || showCountry) &&
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
          className: "grid grid-cols-12 gap-4",
          children: [
            showCounty &&
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                className: cn(showCountry ? "col-span-6" : "col-span-12"),
                children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Input, {
                  id: `${idPrefix}-county`,
                  label: mergedLabels.county,
                  placeholder: mergedPlaceholders.county,
                  value: value.county || "",
                  onChange: (e) => handleChange("county", e.target.value),
                  disabled,
                  required,
                  hasError: !!errors.county,
                  error: errors.county,
                  "data-cy": "input-county",
                }),
              }),
            showCountry &&
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                className: cn(showCounty ? "col-span-6" : "col-span-12"),
                children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Input, {
                  id: `${idPrefix}-country`,
                  label: mergedLabels.country,
                  placeholder: mergedPlaceholders.country,
                  value: value.country || defaultCountry,
                  onChange: (e) => handleChange("country", e.target.value),
                  disabled,
                  required: true,
                  hasError: !!errors.country,
                  error: errors.country,
                  autoComplete: "country",
                  "data-cy": "input-country",
                }),
              }),
          ],
        }),
      value.lat !== void 0 &&
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", {
          type: "hidden",
          name: "lat",
          value: value.lat,
        }),
      value.lng !== void 0 &&
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", {
          type: "hidden",
          name: "lng",
          value: value.lng,
        }),
    ],
  });
}
AddressForm.displayName = "AddressForm";
ModuleRegistry.registerModules([AllCommunityModule]);
var agGridVariants = cva("ag-theme-custom w-full", {
  variants: {
    /**
     * Visual variant of the grid
     */
    variant: {
      default: "",
      bordered:
        "[&_.ag-root-wrapper]:border [&_.ag-root-wrapper]:border-border [&_.ag-root-wrapper]:rounded-lg",
      striped: "[&_.ag-row-odd]:bg-muted/50",
      card: "[&_.ag-root-wrapper]:shadow-card [&_.ag-root-wrapper]:rounded-lg [&_.ag-root-wrapper]:border-0",
    },
    /**
     * Size/density of the grid rows
     */
    size: {
      xs: "[&_.ag-row]:h-7 [&_.ag-header-row]:h-7 text-xs [&_.ag-cell]:px-2",
      sm: "[&_.ag-row]:h-8 [&_.ag-header-row]:h-8 text-xs [&_.ag-cell]:px-3",
      md: "[&_.ag-row]:h-10 [&_.ag-header-row]:h-10 text-sm [&_.ag-cell]:px-4",
      lg: "[&_.ag-row]:h-12 [&_.ag-header-row]:h-12 text-base [&_.ag-cell]:px-4",
      xl: "[&_.ag-row]:h-14 [&_.ag-header-row]:h-14 text-base [&_.ag-cell]:px-6",
    },
    /**
     * Brand theme variant
     */
    brand: {
      default: "",
      mieweb: "ag-brand-mieweb",
      bluehive: "ag-brand-bluehive",
      waggleline: "ag-brand-waggleline",
      webchart: "ag-brand-webchart",
      "enterprise-health": "ag-brand-enterprise-health",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    brand: "default",
  },
});
var getDefaultColDef = (sortable, filterable, resizable) => ({
  sortable,
  filter: filterable,
  resizable,
  minWidth: 100,
  flex: 1,
  suppressMovable: false,
  headerClass: "ag-header-cell-custom",
  cellClass: "ag-cell-custom",
});
function AGGridInner(
  {
    className,
    variant,
    size,
    brand,
    height = 400,
    loading = false,
    columnDefs,
    rowData,
    defaultColDef: userDefaultColDef,
    onGridReady,
    onRowClick,
    gridRef,
    rowSelection,
    brandConfig,
    pagination = false,
    resizable = true,
    sortable = true,
    filterable = true,
    noDataMessage = "No data to display",
    loadingMessage = "Loading...",
    ...props
  },
  ref
) {
  const internalRef = React46.useRef(null);
  const gridApiRef = React46.useRef(null);
  const resolvedRef = gridRef || ref || internalRef;
  const handleGridReady = React46.useCallback(
    (event) => {
      gridApiRef.current = event.api;
      onGridReady == null ? void 0 : onGridReady(event);
    },
    [onGridReady]
  );
  const handleRowClicked = React46.useCallback(
    (event) => {
      onRowClick == null ? void 0 : onRowClick(event);
    },
    [onRowClick]
  );
  const mergedDefaultColDef = React46.useMemo(
    () => ({
      ...getDefaultColDef(sortable, filterable, resizable),
      ...userDefaultColDef,
    }),
    [userDefaultColDef, sortable, filterable, resizable]
  );
  const resolvedRowSelection = React46.useMemo(() => {
    if (!rowSelection) return void 0;
    if (typeof rowSelection === "object") {
      return rowSelection;
    }
    if (rowSelection === "multiple") {
      return {
        mode: "multiRow",
        enableClickSelection: true,
      };
    }
    if (rowSelection === "single") {
      return {
        mode: "singleRow",
        enableClickSelection: true,
      };
    }
    return void 0;
  }, [rowSelection]);
  React46.useEffect(() => {
    if (gridApiRef.current) {
      if (loading) {
        gridApiRef.current.showLoadingOverlay();
      } else {
        gridApiRef.current.hideOverlay();
      }
    }
  }, [loading]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
    className: cn(agGridVariants({ variant, size, brand }), className),
    style: {
      height: typeof height === "number" ? `${height}px` : height,
      ...(brandConfig && {
        "--ag-primary-color": brandConfig.colors.primary[600],
        "--ag-font-family": brandConfig.typography.fontFamily.sans.join(", "),
      }),
    },
    "data-brand": brand,
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(AgGridReact, {
      ref: resolvedRef,
      columnDefs,
      rowData,
      defaultColDef: mergedDefaultColDef,
      onGridReady: handleGridReady,
      onRowClicked: handleRowClicked,
      animateRows: true,
      enableBrowserTooltips: true,
      rowSelection: resolvedRowSelection,
      pagination,
      paginationPageSize: pagination ? 50 : void 0,
      paginationPageSizeSelector: pagination ? [25, 50, 100, 200] : void 0,
      noRowsOverlayComponent: () =>
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
          className: "text-muted-foreground py-8 text-center",
          children: noDataMessage,
        }),
      loadingOverlayComponent: () =>
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
          className: "text-muted-foreground py-8 text-center",
          children: loadingMessage,
        }),
      theme: "legacy",
      ...props,
    }),
  });
}
var AGGrid = React46.forwardRef(AGGridInner);
AGGrid.displayName = "AGGrid";
function getNestedValue(obj, path) {
  if (!obj || !path) return void 0;
  const parts = path.split(".");
  let current = obj;
  for (const part of parts) {
    if (current === null || current === void 0) return void 0;
    if (typeof current === "object") {
      current = current[part];
    } else {
      return void 0;
    }
  }
  return current;
}
function getFaviconUrl(domain) {
  if (!domain || typeof domain !== "string") return null;
  const cleanDomain = domain
    .replace(/^https?:\/\//, "")
    .replace(/\/.*$/, "")
    .trim();
  if (!cleanDomain) return null;
  return `https://www.google.com/s2/favicons?domain=${cleanDomain}&sz=64`;
}
function formatPhoneDisplay(phone) {
  if (!phone) return "";
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  if (cleaned.length === 11 && cleaned.startsWith("1")) {
    return `${cleaned[0]}-${cleaned.slice(1, 4)}-${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }
  return phone;
}
function getInitials2(name) {
  if (!name || typeof name !== "string") return "??";
  const parts = name.split(" ").filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
}
function getAvatarColor(name) {
  const colors = [
    "bg-primary-600",
    "bg-green-600",
    "bg-orange-600",
    "bg-secondary-600",
    "bg-pink-600",
    "bg-primary-700",
    "bg-teal-600",
    "bg-amber-600",
  ];
  if (!name || typeof name !== "string") return colors[0];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}
function cellRendererPropsAreEqual(prevProps, nextProps) {
  var _a, _b;
  if (prevProps.value !== nextProps.value) return false;
  if (prevProps.data !== nextProps.data) return false;
  if (
    ((_a = prevProps.node) == null ? void 0 : _a.rowIndex) !==
    ((_b = nextProps.node) == null ? void 0 : _b.rowIndex)
  )
    return false;
  return true;
}
var statusColors = {
  active: {
    label: "Active",
    bgClass: "bg-green-100 dark:bg-green-900/30",
    textClass: "text-green-600 dark:text-green-400",
  },
  inactive: {
    label: "Inactive",
    bgClass: "bg-gray-200 dark:bg-gray-700",
    textClass: "text-gray-600 dark:text-gray-400",
  },
  pending: {
    label: "Pending",
    bgClass: "bg-amber-100 dark:bg-amber-900/30",
    textClass: "text-amber-600 dark:text-amber-400",
  },
  new: {
    label: "New",
    bgClass: "bg-primary-100 dark:bg-primary-900/30",
    textClass: "text-primary-600 dark:text-primary-400",
  },
  verified: {
    label: "Verified",
    bgClass: "bg-green-100 dark:bg-green-900/30",
    textClass: "text-green-600 dark:text-green-400",
  },
  flagged: {
    label: "Flagged",
    bgClass: "bg-red-100 dark:bg-red-900/30",
    textClass: "text-red-600 dark:text-red-400",
  },
};
function AvatarNameRenderer(props) {
  var _a;
  const { data, value } = props;
  if (!data && !value)
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
      className: "text-muted-foreground",
      children: "--",
    });
  const displayName = typeof value === "string" && value ? value : "Unknown";
  const isSystemValue = ["Unknown", "Unassigned", "System"].includes(
    displayName
  );
  const avatarUrl =
    props.avatarField && data
      ? getNestedValue(data, props.avatarField)
      : data == null
        ? void 0
        : data.avatarUrl;
  const domain =
    props.domainField && data
      ? getNestedValue(data, props.domainField)
      : ((_a = data == null ? void 0 : data.company) == null
          ? void 0
          : _a.domain) || (data == null ? void 0 : data.domain);
  const faviconUrl = getFaviconUrl(domain);
  const initials = getInitials2(displayName);
  const imageUrl = avatarUrl || faviconUrl;
  if (isSystemValue) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
      className: "flex items-center gap-2 py-1",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
          className:
            "flex h-7 w-7 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-400 dark:bg-gray-700 dark:text-gray-500",
          children: displayName === "Unassigned" ? "\u2014" : "??",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
          className: "truncate text-gray-400 italic dark:text-gray-500",
          children: displayName,
        }),
      ],
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: "flex items-center gap-2 py-1",
    children: [
      imageUrl
        ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("img", {
            src: imageUrl,
            alt: displayName,
            className:
              "h-7 w-7 rounded-full bg-white object-cover ring-2 ring-white dark:ring-gray-700",
            onError: (e) => {
              const target = e.target;
              target.style.display = "none";
              const sibling = target.nextElementSibling;
              if (sibling) sibling.style.display = "flex";
            },
          })
        : null,
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
        className: cn(
          "flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-white",
          getAvatarColor(displayName)
        ),
        style: { display: imageUrl ? "none" : "flex" },
        children: initials,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
        className: "text-foreground truncate font-medium",
        children: displayName,
      }),
    ],
  });
}
function StatusBadgeRenderer(props) {
  const { value, statusConfig: statusConfig2 = statusColors } = props;
  if (!value)
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
      className: "text-muted-foreground",
      children: "--",
    });
  const normalizedValue = String(value).toLowerCase().replace(/\s+/g, "_");
  const config = statusConfig2[normalizedValue] || {
    label: value,
    bgClass: "bg-gray-200 dark:bg-gray-700",
    textClass: "text-gray-600 dark:text-gray-400",
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
    className: cn(
      "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
      config.bgClass,
      config.textClass
    ),
    children: config.label,
  });
}
function getEngagementScoreColors(score) {
  if (score >= 70)
    return {
      barColor: "bg-green-500",
      textColor: "text-green-600 dark:text-green-400",
    };
  if (score >= 40)
    return {
      barColor: "bg-amber-500",
      textColor: "text-amber-600 dark:text-amber-400",
    };
  if (score >= 20)
    return {
      barColor: "bg-orange-500",
      textColor: "text-orange-600 dark:text-orange-400",
    };
  return {
    barColor: "bg-gray-400",
    textColor: "text-gray-600 dark:text-gray-400",
  };
}
function EngagementScoreRenderer(props) {
  const { value } = props;
  if (value == null)
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
      className: "text-muted-foreground",
      children: "--",
    });
  const score = Number(value);
  const percentage = Math.min(100, Math.max(0, score));
  const { barColor, textColor } = getEngagementScoreColors(score);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: "flex items-center gap-2 py-1",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
        className:
          "h-1.5 w-16 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
          className: cn("h-full rounded-full transition-all", barColor),
          style: { width: `${percentage}%` },
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
        className: cn("text-sm font-medium", textColor),
        children: score,
      }),
    ],
  });
}
function EmailRenderer(props) {
  const { value } = props;
  if (!value)
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
      className: "text-muted-foreground",
      children: "--",
    });
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("a", {
    href: `mailto:${value}`,
    className:
      "text-primary-600 dark:text-primary-400 inline-flex items-center gap-1.5 hover:underline",
    onClick: (e) => e.stopPropagation(),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Mail, {
        className: "h-3 w-3 opacity-60",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
        className: "truncate",
        children: value,
      }),
    ],
  });
}
function PhoneRenderer(props) {
  const { value } = props;
  if (!value)
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
      className: "text-muted-foreground",
      children: "--",
    });
  const displayValue = formatPhoneDisplay(value);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("a", {
    href: `tel:${value}`,
    className:
      "text-foreground hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center gap-1.5",
    onClick: (e) => e.stopPropagation(),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Phone, {
        className: "h-3 w-3 text-green-500 opacity-70",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
        children: displayValue,
      }),
    ],
  });
}
function DomainRenderer(props) {
  const { value } = props;
  if (!value)
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
      className: "text-muted-foreground",
      children: "--",
    });
  const url = value.startsWith("http") ? value : `https://${value}`;
  const displayDomain = value.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    className:
      "text-primary-600 dark:text-primary-400 inline-flex items-center gap-1.5 hover:underline",
    onClick: (e) => e.stopPropagation(),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Globe, {
        className: "h-3 w-3 opacity-60",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
        className: "truncate",
        children: displayDomain,
      }),
    ],
  });
}
function LinkedInRenderer(props) {
  const { value } = props;
  if (!value)
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
      className: "text-muted-foreground",
      children: "--",
    });
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("a", {
    href: value,
    target: "_blank",
    rel: "noopener noreferrer",
    className:
      "inline-flex items-center gap-1.5 text-[#0A66C2] hover:underline",
    onClick: (e) => e.stopPropagation(),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Linkedin, {
        className: "h-4 w-4",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
        className: "truncate text-sm",
        children: "LinkedIn",
      }),
    ],
  });
}
function CurrencyRenderer(props) {
  const { value } = props;
  if (value == null)
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
      className: "text-muted-foreground",
      children: "--",
    });
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
    className: "text-foreground font-medium tabular-nums",
    children: formatted,
  });
}
function NumberRenderer(props) {
  const { value } = props;
  if (value == null)
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
      className: "text-muted-foreground",
      children: "--",
    });
  const formatted = Number(value).toLocaleString();
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
    className: "text-foreground tabular-nums",
    children: formatted,
  });
}
function DateRenderer(props) {
  const { value, format = "medium" } = props;
  if (!value)
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
      className: "text-muted-foreground",
      children: "--",
    });
  const date = value instanceof Date ? value : new Date(value);
  if (isNaN(date.getTime())) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
      className: "text-muted-foreground",
      children: "--",
    });
  }
  if (format === "relative") {
    const now = /* @__PURE__ */ new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1e3 * 60 * 60 * 24));
    let relativeText;
    if (days === 0) {
      relativeText = "Today";
    } else if (days === 1) {
      relativeText = "Yesterday";
    } else if (days < 7) {
      relativeText = `${days} days ago`;
    } else if (days < 30) {
      const weeks = Math.floor(days / 7);
      relativeText = `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    } else if (days < 365) {
      const months = Math.floor(days / 30);
      relativeText = `${months} month${months > 1 ? "s" : ""} ago`;
    } else {
      const years = Math.floor(days / 365);
      relativeText = `${years} year${years > 1 ? "s" : ""} ago`;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
      className: "text-muted-foreground",
      children: relativeText,
    });
  }
  const dateOptions =
    format === "short"
      ? { month: "numeric", day: "numeric" }
      : format === "long"
        ? { month: "long", day: "numeric", year: "numeric" }
        : { month: "short", day: "numeric", year: "numeric" };
  if (format === "datetime") {
    const formatted2 = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
      className: "text-foreground",
      children: formatted2,
    });
  }
  const formatted = date.toLocaleDateString("en-US", dateOptions);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
    className: "text-foreground",
    children: formatted,
  });
}
function BooleanRenderer(props) {
  const { value } = props;
  if (value == null)
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
      className: "text-muted-foreground",
      children: "--",
    });
  const isTrue = Boolean(value);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", {
    className: cn(
      "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
      isTrue
        ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
        : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
    ),
    children: [
      isTrue
        ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(CircleCheckBig, {
            className: "h-3 w-3",
          })
        : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Clock, {
            className: "h-3 w-3",
          }),
      isTrue ? "Yes" : "No",
    ],
  });
}
function CompanyRenderer(props) {
  var _a;
  const { data, value } = props;
  if (!value)
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
      className: "text-muted-foreground",
      children: "--",
    });
  const domain =
    props.domainField && data
      ? getNestedValue(data, props.domainField)
      : ((_a = data == null ? void 0 : data.company) == null
          ? void 0
          : _a.domain) || (data == null ? void 0 : data.domain);
  const faviconUrl = getFaviconUrl(domain);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: "flex items-center gap-2 py-0.5",
    children: [
      faviconUrl
        ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("img", {
            src: faviconUrl,
            alt: value,
            className: "h-5 w-5 rounded bg-white object-contain",
            onError: (e) => {
              const target = e.target;
              target.style.display = "none";
              const sibling = target.nextElementSibling;
              if (sibling) sibling.style.display = "flex";
            },
          })
        : null,
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
        className:
          "bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400 flex h-5 w-5 items-center justify-center rounded text-[9px] font-semibold",
        style: { display: faviconUrl ? "none" : "flex" },
        children: getInitials2(value),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
        className: "truncate font-medium",
        children: value,
      }),
    ],
  });
}
function ProgressRenderer(props) {
  const { value, barColor = "bg-primary-500", max = 100 } = props;
  if (value == null)
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
      className: "text-muted-foreground",
      children: "--",
    });
  const percentage = Math.min(100, Math.max(0, (Number(value) / max) * 100));
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: "flex items-center gap-2 py-1",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
        className:
          "h-2 w-20 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
          className: cn("h-full rounded-full transition-all", barColor),
          style: { width: `${percentage}%` },
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", {
        className: "text-muted-foreground text-xs font-medium",
        children: [Math.round(percentage), "%"],
      }),
    ],
  });
}
function TagsRenderer(props) {
  const { value } = props;
  if (!value || !Array.isArray(value) || value.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
      className: "text-muted-foreground",
      children: "--",
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: "flex flex-wrap gap-1",
    children: [
      value.slice(0, 3).map((tag, index) =>
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "span",
          {
            className:
              "inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400",
            children: tag,
          },
          index
        )
      ),
      value.length > 3 &&
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", {
          className: "text-muted-foreground text-xs",
          children: ["+", value.length - 3],
        }),
    ],
  });
}
var MemoizedAvatarNameRenderer = (0, import_react8.memo)(
  AvatarNameRenderer,
  cellRendererPropsAreEqual
);
var MemoizedStatusBadgeRenderer = (0, import_react8.memo)(
  StatusBadgeRenderer,
  cellRendererPropsAreEqual
);
var MemoizedEngagementScoreRenderer = (0, import_react8.memo)(
  EngagementScoreRenderer,
  cellRendererPropsAreEqual
);
var MemoizedEmailRenderer = (0, import_react8.memo)(
  EmailRenderer,
  cellRendererPropsAreEqual
);
var MemoizedPhoneRenderer = (0, import_react8.memo)(
  PhoneRenderer,
  cellRendererPropsAreEqual
);
var MemoizedLinkedInRenderer = (0, import_react8.memo)(
  LinkedInRenderer,
  cellRendererPropsAreEqual
);
var MemoizedDomainRenderer = (0, import_react8.memo)(
  DomainRenderer,
  cellRendererPropsAreEqual
);
var MemoizedCurrencyRenderer = (0, import_react8.memo)(
  CurrencyRenderer,
  cellRendererPropsAreEqual
);
var MemoizedNumberRenderer = (0, import_react8.memo)(
  NumberRenderer,
  cellRendererPropsAreEqual
);
var MemoizedDateRenderer = (0, import_react8.memo)(
  DateRenderer,
  cellRendererPropsAreEqual
);
var MemoizedBooleanRenderer = (0, import_react8.memo)(
  BooleanRenderer,
  cellRendererPropsAreEqual
);
var MemoizedCompanyRenderer = (0, import_react8.memo)(
  CompanyRenderer,
  cellRendererPropsAreEqual
);
var MemoizedProgressRenderer = (0, import_react8.memo)(
  ProgressRenderer,
  cellRendererPropsAreEqual
);
var MemoizedTagsRenderer = (0, import_react8.memo)(
  TagsRenderer,
  cellRendererPropsAreEqual
);
var statusIconVariants = cva(
  "flex h-5 w-5 items-center justify-center rounded-full",
  {
    variants: {
      status: {
        pending: "bg-neutral-200 dark:bg-neutral-700",
        running: "bg-primary-100 dark:bg-primary-900/50",
        success: "bg-green-100 dark:bg-green-900/50",
        error: "bg-red-100 dark:bg-red-900/50",
        cancelled: "bg-neutral-200 dark:bg-neutral-700",
      },
    },
    defaultVariants: {
      status: "pending",
    },
  }
);
var toolCallVariants = cva(
  ["rounded-lg border", "overflow-hidden", "transition-all duration-200"],
  {
    variants: {
      status: {
        pending:
          "border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800/50",
        running:
          "border-primary-200 bg-primary-50/50 dark:border-primary-800 dark:bg-primary-900/20",
        success:
          "border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-900/20",
        error:
          "border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-900/20",
        cancelled:
          "border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800/50 opacity-60",
      },
      compact: {
        true: "p-2",
        false: "p-3",
      },
    },
    defaultVariants: {
      status: "pending",
      compact: false,
    },
  }
);
var avatarVariants2 = cva(
  "flex shrink-0 items-center justify-center rounded-full",
  {
    variants: {
      role: {
        user: "bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300",
        assistant: "bg-primary-500 text-white dark:bg-primary-600",
        system:
          "bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-400",
        tool: "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300",
      },
      size: {
        sm: "h-6 w-6 text-xs",
        md: "h-8 w-8 text-sm",
        lg: "h-10 w-10 text-base",
      },
    },
    defaultVariants: {
      role: "user",
      size: "md",
    },
  }
);
var messageVariants = cva("flex gap-3", {
  variants: {
    role: {
      user: "flex-row-reverse",
      assistant: "flex-row",
      system: "flex-row justify-center",
      tool: "flex-row",
    },
  },
  defaultVariants: {
    role: "assistant",
  },
});
var bubbleVariants = cva("rounded-2xl px-4 py-2.5 w-fit max-w-[85%]", {
  variants: {
    role: {
      user: "bg-primary-600 text-white dark:bg-primary-500",
      assistant:
        "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white",
      system:
        "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400 text-center text-sm max-w-[95%]",
      tool: "bg-transparent p-0 max-w-full w-full",
    },
  },
  defaultVariants: {
    role: "assistant",
  },
});
function getFileType(mimeType) {
  if (mimeType.startsWith("image/")) return "image";
  if (mimeType.startsWith("video/")) return "video";
  if (mimeType.startsWith("audio/")) return "audio";
  if (
    mimeType.includes("pdf") ||
    mimeType.includes("document") ||
    mimeType.includes("text")
  ) {
    return "document";
  }
  return "file";
}
function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
function validateFile(file, acceptedTypes, maxSize) {
  if (acceptedTypes && acceptedTypes.length > 0) {
    const isAccepted = acceptedTypes.some((type) => {
      if (type.startsWith(".")) {
        return file.name.toLowerCase().endsWith(type.toLowerCase());
      }
      if (type.endsWith("/*")) {
        return file.type.startsWith(type.replace("/*", "/"));
      }
      return file.type === type;
    });
    if (!isAccepted) {
      return { valid: false, error: "File type not supported" };
    }
  }
  if (maxSize && file.size > maxSize) {
    return {
      valid: false,
      error: `File too large (max ${formatFileSize(maxSize)})`,
    };
  }
  return { valid: true };
}
function generateAttachmentId() {
  return `attachment-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function AttachmentPreviewItem({ attachment, onRemove, onRetry, className }) {
  var _a;
  const { file, previewUrl, type, state, progress } = attachment;
  const isImage2 = type === "image";
  const isVideo = type === "video";
  const isUploading = state === "uploading";
  const isFailed = state === "failed";
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: cn(
      "group relative overflow-hidden rounded-lg",
      "bg-neutral-100 dark:bg-neutral-800",
      "border border-neutral-200 dark:border-neutral-700",
      isFailed && "border-red-500",
      className
    ),
    children: [
      (isImage2 || isVideo) && previewUrl
        ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
            className: "relative h-20 w-20",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("img", {
                src: previewUrl,
                alt: file.name,
                className: cn(
                  "h-full w-full object-cover",
                  (isUploading || isFailed) && "opacity-50"
                ),
              }),
              isVideo &&
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                  className:
                    "absolute inset-0 flex items-center justify-center",
                  children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                    "svg",
                    {
                      className: "h-6 w-6 text-white drop-shadow",
                      fill: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                        "path",
                        { d: "M8 5v14l11-7z" }
                      ),
                    }
                  ),
                }),
            ],
          })
        : /* File preview */
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
            className:
              "flex h-20 w-20 flex-col items-center justify-center p-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
                className: "h-8 w-8 text-neutral-400",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                  }
                ),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                className:
                  "mt-1 max-w-full truncate px-1 text-xs text-neutral-500",
                children:
                  (_a = file.name.split(".").pop()) == null
                    ? void 0
                    : _a.toUpperCase(),
              }),
            ],
          }),
      isUploading &&
        progress !== void 0 &&
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
          className:
            "absolute inset-0 flex items-center justify-center bg-black/50",
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
            className: "text-center text-white",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("svg", {
                className: "mx-auto h-6 w-6 animate-spin",
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("circle", {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", {
                className: "mt-1 text-xs",
                children: [progress, "%"],
              }),
            ],
          }),
        }),
      isFailed &&
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
          className:
            "absolute inset-0 flex items-center justify-center bg-black/50",
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
            className: "text-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
                className: "mx-auto h-6 w-6 text-red-400",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                  }
                ),
              }),
              onRetry &&
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", {
                  type: "button",
                  onClick: onRetry,
                  className:
                    "mt-1 text-xs text-white underline hover:no-underline",
                  children: "Retry",
                }),
            ],
          }),
        }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", {
        type: "button",
        onClick: onRemove,
        className: cn(
          "absolute -top-1 -right-1 z-10",
          "rounded-full p-1",
          "bg-neutral-900 text-white",
          "opacity-0 group-hover:opacity-100",
          "focus:ring-primary-500 focus:opacity-100 focus:ring-2 focus:outline-none",
          "transition-opacity"
        ),
        "aria-label": `Remove ${file.name}`,
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
          className: "h-3 w-3",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M6 18L18 6M6 6l12 12",
          }),
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
        className: cn(
          "absolute right-0 bottom-0 left-0",
          "bg-black/70 px-1 py-0.5",
          "opacity-0 group-hover:opacity-100",
          "transition-opacity"
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", {
          className: "truncate text-xs text-white",
          children: file.name,
        }),
      }),
    ],
  });
}
AttachmentPreviewItem.displayName = "AttachmentPreviewItem";
var AttachmentPicker = React46.forwardRef(
  (
    {
      onFilesSelected,
      acceptedTypes = ["image/*", "video/*", ".pdf", ".doc", ".docx"],
      maxFileSize = 25 * 1024 * 1024,
      // 25MB
      maxFiles = 10,
      multiple = true,
      disabled = false,
      onError,
      className,
      children,
    },
    ref
  ) => {
    const inputRef = React46.useRef(null);
    React46.useImperativeHandle(ref, () => inputRef.current);
    const handleClick = () => {
      var _a;
      (_a = inputRef.current) == null ? void 0 : _a.click();
    };
    const handleChange = (event) => {
      const files = Array.from(event.target.files || []);
      if (files.length === 0) return;
      const validFiles = [];
      for (const file of files.slice(0, maxFiles)) {
        const validation = validateFile(file, acceptedTypes, maxFileSize);
        if (validation.valid) {
          validFiles.push(file);
        } else if (onError) {
          onError(`${file.name}: ${validation.error}`);
        }
      }
      if (files.length > maxFiles && onError) {
        onError(`Maximum ${maxFiles} files allowed`);
      }
      if (validFiles.length > 0) {
        onFilesSelected(validFiles);
      }
      event.target.value = "";
    };
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      import_jsx_runtime10.Fragment,
      {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", {
            ref: inputRef,
            type: "file",
            accept: acceptedTypes.join(","),
            multiple,
            onChange: handleChange,
            disabled,
            className: "sr-only",
            "aria-label": "Select files to attach",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", {
            type: "button",
            onClick: handleClick,
            disabled,
            className: cn(
              "inline-flex items-center justify-center",
              "rounded-full p-2",
              "text-neutral-500 hover:text-neutral-700",
              "dark:text-neutral-400 dark:hover:text-neutral-200",
              "hover:bg-neutral-100 dark:hover:bg-neutral-800",
              "focus:ring-primary-500 focus:ring-2 focus:outline-none",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "transition-colors",
              className
            ),
            "aria-label": "Attach files",
            children:
              children ||
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
                className: "h-5 w-5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13",
                  }
                ),
              }),
          }),
        ],
      }
    );
  }
);
AttachmentPicker.displayName = "AttachmentPicker";
function DragDropZone({
  onFilesDropped,
  acceptedTypes,
  maxFileSize,
  maxFiles = 10,
  disabled = false,
  onError,
  children,
  className,
}) {
  const [isDragging, setIsDragging] = React46.useState(false);
  const dragCounterRef = React46.useRef(0);
  const handleDragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (disabled) return;
    dragCounterRef.current++;
    if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  };
  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (disabled) return;
    dragCounterRef.current--;
    if (dragCounterRef.current === 0) {
      setIsDragging(false);
    }
  };
  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (disabled) return;
    setIsDragging(false);
    dragCounterRef.current = 0;
    const files = Array.from(event.dataTransfer.files);
    if (files.length === 0) return;
    const validFiles = [];
    for (const file of files.slice(0, maxFiles)) {
      const validation = validateFile(file, acceptedTypes, maxFileSize);
      if (validation.valid) {
        validFiles.push(file);
      } else if (onError) {
        onError(`${file.name}: ${validation.error}`);
      }
    }
    if (files.length > maxFiles && onError) {
      onError(`Maximum ${maxFiles} files allowed`);
    }
    if (validFiles.length > 0) {
      onFilesDropped(validFiles);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragLeave,
    onDragOver: handleDragOver,
    onDrop: handleDrop,
    className: cn("relative", className),
    children: [
      children,
      isDragging &&
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
          className: cn(
            "absolute inset-0 z-50",
            "flex items-center justify-center",
            "bg-primary-50/90 dark:bg-primary-900/90",
            "border-primary-500 border-2 border-dashed",
            "rounded-lg"
          ),
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
            className: "text-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
                className: "text-primary-500 mx-auto h-12 w-12",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
                  }
                ),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", {
                className:
                  "text-primary-700 dark:text-primary-300 mt-2 text-sm font-medium",
                children: "Drop files here",
              }),
            ],
          }),
        }),
    ],
  });
}
DragDropZone.displayName = "DragDropZone";
function CameraButton({
  onCapture,
  useFrontCamera = false,
  disabled = false,
  className,
}) {
  const inputRef = React46.useRef(null);
  const handleClick = () => {
    var _a;
    (_a = inputRef.current) == null ? void 0 : _a.click();
  };
  const handleChange = (event) => {
    var _a;
    const file = (_a = event.target.files) == null ? void 0 : _a[0];
    if (file) {
      onCapture(file);
    }
    event.target.value = "";
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    import_jsx_runtime10.Fragment,
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", {
          ref: inputRef,
          type: "file",
          accept: "image/*",
          capture: useFrontCamera ? "user" : "environment",
          onChange: handleChange,
          disabled,
          className: "sr-only",
          "aria-label": "Take a photo",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", {
          type: "button",
          onClick: handleClick,
          disabled,
          className: cn(
            "inline-flex items-center justify-center",
            "rounded-full p-2",
            "text-neutral-500 hover:text-neutral-700",
            "dark:text-neutral-400 dark:hover:text-neutral-200",
            "hover:bg-neutral-100 dark:hover:bg-neutral-800",
            "focus:ring-primary-500 focus:ring-2 focus:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "transition-colors",
            className
          ),
          "aria-label": "Take a photo",
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("svg", {
            className: "h-5 w-5",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M15 13a3 3 0 11-6 0 3 3 0 016 0z",
              }),
            ],
          }),
        }),
      ],
    }
  );
}
CameraButton.displayName = "CameraButton";
function CharacterCounter({ current, max, showWarningAt = 0.9, className }) {
  const percentage = current / max;
  const isWarning = percentage >= showWarningAt && percentage < 1;
  const isOver = current > max;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", {
    className: cn(
      "text-xs tabular-nums",
      isOver
        ? "font-medium text-red-500"
        : isWarning
          ? "text-amber-500"
          : "text-neutral-400",
      className
    ),
    "aria-live": "polite",
    "aria-label": `${current} of ${max} characters`,
    children: [current, "/", max],
  });
}
CharacterCounter.displayName = "CharacterCounter";
var sendButtonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full p-3 self-start",
    "transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-primary-500",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-primary-800 text-white",
          "hover:bg-primary-700",
          "active:scale-95",
        ],
        subtle: [
          "bg-transparent text-primary-600",
          "hover:bg-primary-50 dark:hover:bg-primary-900/20",
        ],
      },
      canSend: {
        true: "",
        false: "opacity-50 cursor-not-allowed",
      },
    },
    defaultVariants: {
      variant: "primary",
      canSend: false,
    },
  }
);
var SendButton = React46.forwardRef(
  ({ className, variant, canSend, isLoading, disabled, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", {
      ref,
      type: "submit",
      disabled: disabled || !canSend || isLoading,
      className: cn(sendButtonVariants({ variant, canSend }), className),
      "aria-label": isLoading ? "Sending message" : "Send message",
      ...props,
      children: isLoading
        ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("svg", {
            className: "h-5 w-5 animate-spin",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("circle", {
                className: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "4",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
                className: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z",
              }),
            ],
          })
        : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
            className: "h-5 w-5",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
            }),
          }),
    });
  }
);
SendButton.displayName = "SendButton";
var MessageComposer = React46.forwardRef(
  (
    {
      onSend,
      onTypingStart,
      onTypingStop,
      placeholder = "Type a message...",
      maxLength = 1600,
      showCharacterCount = false,
      disabled = false,
      isSending = false,
      showAttachmentPicker = true,
      showCameraButton = false,
      acceptedFileTypes = ["image/*", "video/*", ".pdf", ".doc", ".docx"],
      maxFileSize = 25 * 1024 * 1024,
      maxAttachments = 10,
      onError,
      autoFocus = false,
      replyTo = null,
      onCancelReply,
      variant = "default",
      className,
    },
    ref
  ) => {
    const textareaRef = React46.useRef(null);
    const [content, setContent] = React46.useState("");
    const [attachments, setAttachments] = React46.useState([]);
    const [isTyping, setIsTyping] = React46.useState(false);
    const typingTimeoutRef = React46.useRef(null);
    React46.useImperativeHandle(ref, () => textareaRef.current);
    React46.useEffect(() => {
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = "auto";
        textarea.style.height = `${Math.min(textarea.scrollHeight, 150)}px`;
      }
    }, [content]);
    React46.useEffect(() => {
      if (content.length > 0 && !isTyping) {
        setIsTyping(true);
        onTypingStart == null ? void 0 : onTypingStart();
      }
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      typingTimeoutRef.current = setTimeout(() => {
        if (isTyping) {
          setIsTyping(false);
          onTypingStop == null ? void 0 : onTypingStop();
        }
      }, 2e3);
      return () => {
        if (typingTimeoutRef.current) {
          clearTimeout(typingTimeoutRef.current);
        }
      };
    }, [content, isTyping, onTypingStart, onTypingStop]);
    React46.useEffect(() => {
      var _a;
      if (autoFocus) {
        (_a = textareaRef.current) == null ? void 0 : _a.focus();
      }
    }, [autoFocus]);
    React46.useEffect(() => {
      var _a;
      if (replyTo) {
        (_a = textareaRef.current) == null ? void 0 : _a.focus();
      }
    }, [replyTo]);
    const canSend =
      (content.trim().length > 0 || attachments.length > 0) &&
      content.length <= maxLength &&
      !disabled &&
      !isSending;
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (!canSend) return;
      const message = {
        content: content.trim(),
        attachments: attachments.map((a) => a.file),
        replyToId: replyTo == null ? void 0 : replyTo.id,
      };
      setContent("");
      setAttachments([]);
      setIsTyping(false);
      onTypingStop == null ? void 0 : onTypingStop();
      try {
        await onSend(message);
      } catch {
        setContent(message.content);
        onError == null ? void 0 : onError("Failed to send message");
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        if (canSend) {
          handleSubmit(event);
        }
      }
    };
    const handleFilesSelected = (files) => {
      const remainingSlots = maxAttachments - attachments.length;
      const filesToAdd = files.slice(0, remainingSlots);
      if (files.length > remainingSlots) {
        onError == null
          ? void 0
          : onError(`Maximum ${maxAttachments} attachments allowed`);
      }
      const newAttachments = filesToAdd.map((file) => {
        const type = getFileType(file.type);
        let previewUrl;
        if (type === "image" || type === "video") {
          previewUrl = URL.createObjectURL(file);
        }
        return {
          id: generateAttachmentId(),
          file,
          previewUrl,
          type,
          state: "pending",
        };
      });
      setAttachments((prev) => [...prev, ...newAttachments]);
    };
    const handleRemoveAttachment = (attachmentId) => {
      setAttachments((prev) => {
        const attachment = prev.find((a) => a.id === attachmentId);
        if (attachment == null ? void 0 : attachment.previewUrl) {
          URL.revokeObjectURL(attachment.previewUrl);
        }
        return prev.filter((a) => a.id !== attachmentId);
      });
    };
    React46.useEffect(() => {
      const currentAttachments = attachments;
      return () => {
        currentAttachments.forEach((a) => {
          if (a.previewUrl) {
            URL.revokeObjectURL(a.previewUrl);
          }
        });
      };
    }, [attachments]);
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(DragDropZone, {
      onFilesDropped: handleFilesSelected,
      acceptedTypes: acceptedFileTypes,
      maxFileSize,
      maxFiles: maxAttachments - attachments.length,
      disabled: disabled || attachments.length >= maxAttachments,
      onError,
      className: cn("w-full", className),
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("form", {
        onSubmit: handleSubmit,
        className: "w-full",
        children: [
          replyTo &&
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
              className: cn(
                "flex items-center gap-2 px-4 py-2",
                "bg-neutral-50 dark:bg-neutral-800/50",
                "border-primary-500 border-l-4"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
                  className: "min-w-0 flex-1",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", {
                      className:
                        "text-primary-600 dark:text-primary-400 text-xs font-medium",
                      children: ["Replying to ", replyTo.senderName],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", {
                      className:
                        "truncate text-sm text-neutral-600 dark:text-neutral-300",
                      children: replyTo.content,
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", {
                  type: "button",
                  onClick: onCancelReply,
                  className: cn(
                    "shrink-0 rounded p-1",
                    "text-neutral-400 hover:text-neutral-600",
                    "dark:text-neutral-500 dark:hover:text-neutral-300",
                    "focus:ring-primary-500 focus:ring-2 focus:outline-none"
                  ),
                  "aria-label": "Cancel reply",
                  children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                    "svg",
                    {
                      className: "h-4 w-4",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M6 18L18 6M6 6l12 12",
                        }
                      ),
                    }
                  ),
                }),
              ],
            }),
          attachments.length > 0 &&
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
              className: cn(
                "flex flex-wrap gap-2 p-3",
                "border-t border-neutral-200 dark:border-neutral-700"
              ),
              children: attachments.map((attachment) =>
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  AttachmentPreviewItem,
                  {
                    attachment,
                    onRemove: () => handleRemoveAttachment(attachment.id),
                  },
                  attachment.id
                )
              ),
            }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
            className: cn(
              "flex items-center gap-2 p-3",
              "bg-white dark:bg-neutral-900",
              variant === "default" &&
                "border-t border-neutral-200 dark:border-neutral-700"
            ),
            children: [
              showAttachmentPicker &&
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  AttachmentPicker,
                  {
                    onFilesSelected: handleFilesSelected,
                    acceptedTypes: acceptedFileTypes,
                    maxFileSize,
                    maxFiles: maxAttachments - attachments.length,
                    disabled: disabled || attachments.length >= maxAttachments,
                    onError,
                  }
                ),
              showCameraButton &&
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(CameraButton, {
                  onCapture: (file) => handleFilesSelected([file]),
                  disabled: disabled || attachments.length >= maxAttachments,
                }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
                className: "relative flex-1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("textarea", {
                    ref: textareaRef,
                    value: content,
                    onChange: (e) => setContent(e.target.value),
                    onKeyDown: handleKeyDown,
                    placeholder,
                    disabled: disabled || isSending,
                    rows: 1,
                    className: cn(
                      "w-full resize-none rounded-2xl px-4 py-2.5",
                      "bg-neutral-100 dark:bg-neutral-800",
                      "text-neutral-900 dark:text-neutral-100",
                      "placeholder:text-neutral-400 dark:placeholder:text-neutral-500",
                      "focus:ring-primary-500 focus:ring-2 focus:outline-none",
                      "disabled:cursor-not-allowed disabled:opacity-50",
                      "transition-colors",
                      "max-h-[150px]"
                    ),
                    "aria-label": "Message",
                    "aria-describedby": showCharacterCount
                      ? "char-count"
                      : void 0,
                  }),
                  showCharacterCount &&
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                      id: "char-count",
                      className: "absolute right-3 bottom-1.5",
                      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                        CharacterCounter,
                        { current: content.length, max: maxLength }
                      ),
                    }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SendButton, {
                canSend,
                isLoading: isSending,
                disabled,
              }),
            ],
          }),
        ],
      }),
    });
  }
);
MessageComposer.displayName = "MessageComposer";
var statusIconVariants2 = cva("inline-flex items-center gap-0.5 text-current", {
  variants: {
    status: {
      sending: "text-neutral-400",
      sent: "text-neutral-500",
      delivered: "text-neutral-600 dark:text-neutral-400",
      read: "text-primary-600 dark:text-primary-400",
      failed: "text-red-500",
    },
  },
  defaultVariants: {
    status: "sent",
  },
});
function MessageStatusIcon({ status, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", {
    className: cn(statusIconVariants2({ status }), className),
    role: "img",
    "aria-label": `Message ${status}`,
    children: [
      status === "sending" &&
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("svg", {
          className: "h-3.5 w-3.5 animate-spin",
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("circle", {
              className: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              strokeWidth: "4",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
              className: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z",
            }),
          ],
        }),
      status === "sent" &&
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
          className: "h-3.5 w-3.5",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: "2",
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M5 13l4 4L19 7",
          }),
        }),
      (status === "delivered" || status === "read") &&
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("svg", {
          className: "h-4 w-4",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: "2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M5 13l4 4L19 7",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 13l4 4L26 7",
              transform: "translate(-5, 0)",
            }),
          ],
        }),
      status === "failed" &&
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
          className: "h-3.5 w-3.5",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: "2",
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
          }),
        }),
    ],
  });
}
function ReadReceiptIndicator({
  receipts,
  maxAvatars = 3,
  size = "xs",
  className,
}) {
  if (receipts.length === 0) return null;
  const visibleReceipts = receipts.slice(0, maxAvatars);
  const remainingCount = receipts.length - maxAvatars;
  const sizeClasses2 = {
    xs: "h-4 w-4 text-[8px]",
    sm: "h-5 w-5 text-[10px]",
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: cn("flex items-center -space-x-1", className),
    "aria-label": `Read by ${receipts.map((r2) => r2.participant.name).join(", ")}`,
    children: [
      visibleReceipts.map((receipt) =>
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "div",
          {
            className: cn(
              "rounded-full ring-2 ring-white dark:ring-neutral-900",
              "bg-primary-800 font-medium text-white",
              "flex items-center justify-center",
              sizeClasses2[size]
            ),
            title: `Read by ${receipt.participant.name}`,
            children: receipt.participant.avatarUrl
              ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("img", {
                  src: receipt.participant.avatarUrl,
                  alt: receipt.participant.name,
                  className: "h-full w-full rounded-full object-cover",
                })
              : receipt.participant.name.charAt(0).toUpperCase(),
          },
          receipt.participant.id
        )
      ),
      remainingCount > 0 &&
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
          className: cn(
            "rounded-full ring-2 ring-white dark:ring-neutral-900",
            "bg-neutral-500 font-medium text-white",
            "flex items-center justify-center",
            sizeClasses2[size]
          ),
          children: ["+", remainingCount],
        }),
    ],
  });
}
function AttachmentPreview({ attachment, onClick, className }) {
  const isImage2 = attachment.type === "image";
  const isVideo = attachment.type === "video";
  if (isImage2 || isVideo) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("button", {
      type: "button",
      onClick,
      className: cn(
        "relative block overflow-hidden rounded-lg",
        "focus:ring-primary-500 focus:ring-2 focus:outline-none",
        "transition-transform hover:scale-[1.02]",
        className
      ),
      "aria-label": `View ${attachment.alt || attachment.filename}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("img", {
          src: attachment.thumbnailUrl || attachment.url,
          alt: attachment.alt || attachment.filename,
          className: "max-h-64 w-auto rounded-lg object-cover",
          loading: "lazy",
        }),
        isVideo &&
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
            className:
              "absolute inset-0 flex items-center justify-center bg-black/30",
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
              className: "rounded-full bg-white/90 p-3",
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
                className: "h-6 w-6 text-neutral-900",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  "path",
                  { d: "M8 5v14l11-7z" }
                ),
              }),
            }),
          }),
        attachment.state === "uploading" &&
          attachment.progress !== void 0 &&
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
            className:
              "absolute inset-0 flex items-center justify-center bg-black/50",
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
              className: "text-center text-white",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("svg", {
                  className: "mx-auto h-8 w-8 animate-spin",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("circle", {
                      className: "opacity-25",
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "currentColor",
                      strokeWidth: "4",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
                      className: "opacity-75",
                      fill: "currentColor",
                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z",
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", {
                  className: "mt-1 text-sm",
                  children: [attachment.progress, "%"],
                }),
              ],
            }),
          }),
        attachment.state === "failed" &&
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
            className:
              "absolute inset-0 flex items-center justify-center bg-black/50",
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
              className: "text-center text-white",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
                  className: "mx-auto h-8 w-8 text-red-400",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                    }
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                  className: "mt-1 text-sm",
                  children: "Upload failed",
                }),
              ],
            }),
          }),
      ],
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("button", {
    type: "button",
    onClick,
    className: cn(
      "flex items-center gap-3 rounded-lg p-3",
      "bg-white/10 hover:bg-white/20",
      "transition-colors",
      "focus:ring-primary-500 focus:ring-2 focus:outline-none",
      className
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
        className: "rounded-lg bg-white/20 p-2",
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
          className: "h-6 w-6",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
          }),
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className: "min-w-0 flex-1 text-left",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", {
            className: "truncate text-sm font-medium",
            children: attachment.filename,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", {
            className: "text-xs opacity-70",
            children: formatFileSize2(attachment.size),
          }),
        ],
      }),
    ],
  });
}
function formatFileSize2(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
var bubbleVariants2 = cva(
  [
    "relative max-w-[85%] sm:max-w-[70%]",
    "rounded-2xl px-4 py-2",
    "transition-all duration-200",
  ],
  {
    variants: {
      variant: {
        outgoing: ["bg-primary-800 text-white", "rounded-br-md", "ml-auto"],
        incoming: [
          "bg-neutral-100 text-neutral-900",
          "dark:bg-neutral-800 dark:text-neutral-100",
          "rounded-bl-md",
          "mr-auto",
        ],
        system: [
          "mx-auto max-w-none",
          "bg-transparent text-neutral-500 dark:text-neutral-400",
          "text-center text-sm",
          "py-1 px-2",
        ],
      },
      status: {
        sending: "opacity-70",
        sent: "",
        delivered: "",
        read: "",
        failed: "ring-2 ring-red-500/50",
      },
    },
    defaultVariants: {
      variant: "incoming",
      status: "sent",
    },
  }
);
function defaultFormatTimestamp(timestamp) {
  const date = typeof timestamp === "string" ? new Date(timestamp) : timestamp;
  return date.toLocaleTimeString(void 0, {
    hour: "numeric",
    minute: "2-digit",
  });
}
var MessageBubble = React46.forwardRef(
  (
    {
      className,
      message,
      showAvatar = false,
      showSenderName = false,
      showTimestamp = true,
      showStatus = true,
      showReadReceipts = true,
      onRetry,
      onAttachmentClick,
      isOutgoing,
      formatTimestamp = defaultFormatTimestamp,
      ...props
    },
    ref
  ) => {
    const isSystem = message.type === "system";
    const variant = isSystem ? "system" : isOutgoing ? "outgoing" : "incoming";
    const hasAttachments =
      message.attachments && message.attachments.length > 0;
    const hasText = message.content && message.content.trim().length > 0;
    const isFailed = message.status === "failed";
    if (isSystem) {
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
        ref,
        className: cn(bubbleVariants2({ variant: "system" }), className),
        role: "status",
        "aria-live": "polite",
        ...props,
        children: message.content,
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
      ref,
      className: cn(
        "group flex items-end gap-2",
        isOutgoing ? "flex-row-reverse" : "flex-row",
        className
      ),
      ...props,
      children: [
        showAvatar &&
          !isOutgoing &&
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
            className: "mb-1 shrink-0",
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
              className: cn(
                "flex h-8 w-8 items-center justify-center rounded-full",
                "bg-primary-800 text-sm font-medium text-white"
              ),
              children: message.sender.avatarUrl
                ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("img", {
                    src: message.sender.avatarUrl,
                    alt: message.sender.name,
                    className: "h-full w-full rounded-full object-cover",
                  })
                : message.sender.name.charAt(0).toUpperCase(),
            }),
          }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
          className: cn(
            "flex flex-col",
            isOutgoing ? "items-end" : "items-start"
          ),
          children: [
            showSenderName &&
              !isOutgoing &&
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                className:
                  "mb-1 px-1 text-xs font-medium text-neutral-500 dark:text-neutral-400",
                children: message.sender.name,
              }),
            message.replyTo &&
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
                className: cn(
                  "mb-1 max-w-full rounded-lg px-3 py-1.5 text-xs",
                  isOutgoing
                    ? "bg-primary-700/50 text-white/80"
                    : "bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300"
                ),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                    className: "font-medium",
                    children: message.replyTo.sender.name,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", {
                    className: "truncate",
                    children: message.replyTo.content,
                  }),
                ],
              }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
              className: cn(
                bubbleVariants2({ variant, status: message.status })
              ),
              role: "article",
              "aria-label": `Message from ${message.sender.name}`,
              children: [
                hasAttachments &&
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                    className: cn("space-y-2", hasText && "mb-2"),
                    children: message.attachments.map((attachment) =>
                      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                        AttachmentPreview,
                        {
                          attachment,
                          onClick: () =>
                            onAttachmentClick == null
                              ? void 0
                              : onAttachmentClick(attachment),
                        },
                        attachment.id
                      )
                    ),
                  }),
                hasText &&
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", {
                    className: "break-words whitespace-pre-wrap",
                    children: message.isDeleted
                      ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                          className: "italic opacity-60",
                          children: "This message was deleted",
                        })
                      : message.content,
                  }),
                message.isEdited &&
                  !message.isDeleted &&
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                    className: "ml-1 text-xs opacity-60",
                    children: "(edited)",
                  }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
              className: cn(
                "mt-1 flex items-center gap-2 px-1",
                isOutgoing ? "flex-row-reverse" : "flex-row"
              ),
              children: [
                showTimestamp &&
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                    className: "text-xs text-neutral-400 dark:text-neutral-500",
                    children: formatTimestamp(message.timestamp),
                  }),
                showStatus &&
                  isOutgoing &&
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                    MessageStatusIcon,
                    { status: message.status }
                  ),
                showReadReceipts &&
                  isOutgoing &&
                  message.readReceipts &&
                  message.readReceipts.length > 0 &&
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                    ReadReceiptIndicator,
                    { receipts: message.readReceipts }
                  ),
                isFailed &&
                  onRetry &&
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("button", {
                    type: "button",
                    onClick: onRetry,
                    className: cn(
                      "flex items-center gap-1 rounded px-2 py-0.5",
                      "text-xs font-medium text-red-500",
                      "hover:bg-red-50 dark:hover:bg-red-900/20",
                      "focus:ring-2 focus:ring-red-500 focus:outline-none"
                    ),
                    "aria-label": "Retry sending message",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
                        className: "h-3 w-3",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                          }
                        ),
                      }),
                      "Retry",
                    ],
                  }),
              ],
            }),
            message.reactions &&
              message.reactions.length > 0 &&
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                className: cn(
                  "-mt-1 flex flex-wrap gap-1",
                  isOutgoing ? "justify-end" : "justify-start"
                ),
                children: message.reactions.map((reaction) =>
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                    "span",
                    {
                      className: cn(
                        "inline-flex items-center gap-1 rounded-full px-2 py-0.5",
                        "bg-neutral-100 text-xs dark:bg-neutral-800",
                        "border border-neutral-200 dark:border-neutral-700"
                      ),
                      title: reaction.participants
                        .map((p) => p.name)
                        .join(", "),
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                          children: reaction.emoji,
                        }),
                        reaction.count > 1 &&
                          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                            "span",
                            {
                              className: "text-neutral-500",
                              children: reaction.count,
                            }
                          ),
                      ],
                    },
                    reaction.emoji
                  )
                ),
              }),
          ],
        }),
        showAvatar &&
          isOutgoing &&
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
            className: "w-8 shrink-0",
          }),
      ],
    });
  }
);
MessageBubble.displayName = "MessageBubble";
function groupMessagesByDate(messages) {
  const groups = /* @__PURE__ */ new Map();
  messages.forEach((message) => {
    const date = new Date(message.timestamp);
    const dateKey = date.toDateString();
    const existing = groups.get(dateKey) || [];
    groups.set(dateKey, [...existing, message]);
  });
  return Array.from(groups.entries()).map(([dateKey, msgs]) => ({
    date: dateKey,
    label: formatDateLabel(new Date(dateKey)),
    messages: msgs,
  }));
}
function formatDateLabel(date) {
  const now = /* @__PURE__ */ new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const messageDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  if (messageDate.getTime() === today.getTime()) {
    return "Today";
  }
  if (messageDate.getTime() === yesterday.getTime()) {
    return "Yesterday";
  }
  if (date.getFullYear() === now.getFullYear()) {
    return date.toLocaleDateString(void 0, {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  }
  return date.toLocaleDateString(void 0, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
function isSameSenderGroup(prev, current, thresholdMinutes = 5) {
  if (!prev) return false;
  if (prev.sender.id !== current.sender.id) return false;
  if (prev.type === "system" || current.type === "system") return false;
  const prevTime = new Date(prev.timestamp).getTime();
  const currentTime = new Date(current.timestamp).getTime();
  const diffMinutes = (currentTime - prevTime) / (1e3 * 60);
  return diffMinutes < thresholdMinutes;
}
function SkeletonMessage({ isOutgoing = false, showAvatar = true, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: cn(
      "flex items-end gap-2",
      isOutgoing ? "flex-row-reverse" : "flex-row",
      className
    ),
    "aria-hidden": "true",
    children: [
      showAvatar &&
        !isOutgoing &&
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
          className:
            "h-8 w-8 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700",
        }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
        className: cn(
          "animate-pulse rounded-2xl",
          isOutgoing
            ? "bg-primary-800/30 rounded-br-md"
            : "rounded-bl-md bg-neutral-200 dark:bg-neutral-700",
          "h-10 w-48"
        ),
      }),
      showAvatar &&
        isOutgoing &&
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
          className: "w-8",
        }),
    ],
  });
}
SkeletonMessage.displayName = "SkeletonMessage";
function TypingIndicator({ typingState, className }) {
  const { participants } = typingState;
  if (participants.length === 0) return null;
  const typingText =
    participants.length === 1
      ? `${participants[0].name} is typing`
      : participants.length === 2
        ? `${participants[0].name} and ${participants[1].name} are typing`
        : `${participants[0].name} and ${participants.length - 1} others are typing`;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: cn("flex items-center gap-2 px-4 py-2", className),
    role: "status",
    "aria-live": "polite",
    "aria-label": typingText,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className:
          "flex items-center gap-1 rounded-2xl rounded-bl-md bg-neutral-200 px-4 py-3 dark:bg-neutral-700",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
            className: "h-2 w-2 animate-bounce rounded-full bg-neutral-500",
            style: { animationDelay: "0ms" },
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
            className: "h-2 w-2 animate-bounce rounded-full bg-neutral-500",
            style: { animationDelay: "150ms" },
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
            className: "h-2 w-2 animate-bounce rounded-full bg-neutral-500",
            style: { animationDelay: "300ms" },
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
        className: "text-xs text-neutral-500 dark:text-neutral-400",
        children: typingText,
      }),
    ],
  });
}
TypingIndicator.displayName = "TypingIndicator";
function DateSeparator({ label, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
    className: cn("flex items-center justify-center py-4", className),
    role: "separator",
    "aria-label": label,
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
      className: cn(
        "rounded-full px-3 py-1 text-xs font-medium",
        "bg-neutral-100 text-neutral-500",
        "dark:bg-neutral-800 dark:text-neutral-400"
      ),
      children: label,
    }),
  });
}
DateSeparator.displayName = "DateSeparator";
function EmptyState({
  title = "No messages yet",
  description = "Start the conversation by sending a message below.",
  icon,
  action,
  className,
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: cn(
      "flex flex-1 flex-col items-center justify-center p-8 text-center",
      className
    ),
    role: "status",
    "aria-label": title,
    children: [
      icon ||
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
          className: "mb-4 rounded-full bg-neutral-100 p-4 dark:bg-neutral-800",
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
            className: "h-12 w-12 text-neutral-400",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 1.5,
              d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
            }),
          }),
        }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", {
        className:
          "mb-2 text-lg font-semibold text-neutral-900 dark:text-neutral-100",
        children: title,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", {
        className:
          "mb-4 max-w-sm text-sm text-neutral-500 dark:text-neutral-400",
        children: description,
      }),
      action,
    ],
  });
}
EmptyState.displayName = "EmptyState";
function LoadMoreButton({ isLoading, onClick, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
    className: cn("flex justify-center py-4", className),
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", {
      type: "button",
      onClick,
      disabled: isLoading,
      className: cn(
        "rounded-full px-4 py-2 text-sm font-medium",
        "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300",
        "hover:bg-neutral-200 dark:hover:bg-neutral-700",
        "focus:ring-primary-500 focus:ring-2 focus:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "transition-colors"
      ),
      "aria-label": isLoading ? "Loading more messages" : "Load more messages",
      children: isLoading
        ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", {
            className: "flex items-center gap-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("svg", {
                className: "h-4 w-4 animate-spin",
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("circle", {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z",
                  }),
                ],
              }),
              "Loading...",
            ],
          })
        : "Load earlier messages",
    }),
  });
}
LoadMoreButton.displayName = "LoadMoreButton";
var MessageList = React46.forwardRef(
  (
    {
      messages,
      currentUser,
      isLoading = false,
      hasMore = false,
      isLoadingMore = false,
      typingState,
      showAvatars = true,
      showSenderNames = false,
      groupByDate = true,
      onLoadMore,
      onRetryMessage,
      onAttachmentClick,
      emptyState,
      formatTimestamp,
      className,
      autoScroll = "onNewMessage",
    },
    ref
  ) => {
    const scrollContainerRef = React46.useRef(null);
    const bottomRef = React46.useRef(null);
    const [isUserScrolled, setIsUserScrolled] = React46.useState(false);
    const prevMessageCountRef = React46.useRef(messages.length);
    React46.useImperativeHandle(ref, () => scrollContainerRef.current);
    const handleScroll = React46.useCallback(() => {
      const container = scrollContainerRef.current;
      if (!container) return;
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isAtBottom = scrollHeight - scrollTop - clientHeight < 100;
      setIsUserScrolled(!isAtBottom);
    }, []);
    React46.useEffect(() => {
      const container = scrollContainerRef.current;
      const bottom = bottomRef.current;
      if (!container || !bottom) return;
      const messageCountChanged =
        messages.length !== prevMessageCountRef.current;
      prevMessageCountRef.current = messages.length;
      if (autoScroll === "always") {
        bottom.scrollIntoView({ behavior: "smooth" });
      } else if (autoScroll === "onNewMessage" && messageCountChanged) {
        const lastMessage = messages[messages.length - 1];
        const isOutgoing =
          (lastMessage == null ? void 0 : lastMessage.sender.id) ===
          currentUser.id;
        if (isOutgoing || !isUserScrolled) {
          bottom.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [messages, currentUser.id, autoScroll, isUserScrolled]);
    React46.useEffect(() => {
      const bottom = bottomRef.current;
      if (bottom && !isLoading) {
        bottom.scrollIntoView();
      }
    }, [isLoading]);
    const messageGroups = groupByDate
      ? groupMessagesByDate(messages)
      : [{ date: "all", label: "", messages }];
    if (isLoading) {
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
        className: cn(
          "flex flex-1 flex-col gap-3 overflow-y-auto p-4",
          className
        ),
        "aria-busy": "true",
        "aria-label": "Loading messages",
        children: Array.from({ length: 8 }).map((_, i) =>
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            SkeletonMessage,
            {
              isOutgoing: i % 3 === 0,
              showAvatar: showAvatars,
            },
            i
          )
        ),
      });
    }
    if (messages.length === 0) {
      return (
        emptyState ||
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(EmptyState, {})
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
      ref: scrollContainerRef,
      className: cn(
        "flex flex-1 flex-col overflow-y-auto",
        "scroll-smooth",
        className
      ),
      onScroll: handleScroll,
      role: "log",
      "aria-label": "Message history",
      "aria-live": "polite",
      children: [
        hasMore &&
          onLoadMore &&
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(LoadMoreButton, {
            isLoading: isLoadingMore,
            onClick: onLoadMore,
          }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
          className: "flex flex-col gap-1 p-4",
          children: messageGroups.map((group) =>
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
              React46.Fragment,
              {
                children: [
                  groupByDate &&
                    group.label &&
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      DateSeparator,
                      { label: group.label }
                    ),
                  group.messages.map((message, index) => {
                    const prevMessage = group.messages[index - 1];
                    const isOutgoing = message.sender.id === currentUser.id;
                    const isSameGroup = isSameSenderGroup(prevMessage, message);
                    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      "div",
                      {
                        className: cn(
                          "transition-opacity duration-200",
                          isSameGroup ? "mt-0.5" : "mt-3",
                          index === 0 && "mt-0"
                        ),
                        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                          MessageBubble,
                          {
                            message,
                            isOutgoing,
                            showAvatar:
                              showAvatars && !isSameGroup && !isOutgoing,
                            showSenderName:
                              showSenderNames && !isSameGroup && !isOutgoing,
                            showTimestamp: !isSameGroup,
                            onRetry:
                              message.status === "failed" && onRetryMessage
                                ? () => onRetryMessage(message.id)
                                : void 0,
                            onAttachmentClick: (attachment) =>
                              onAttachmentClick == null
                                ? void 0
                                : onAttachmentClick(attachment, message),
                            formatTimestamp,
                          }
                        ),
                      },
                      message.id
                    );
                  }),
                ],
              },
              group.date
            )
          ),
        }),
        typingState &&
          typingState.participants.length > 0 &&
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TypingIndicator, {
            typingState,
          }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
          ref: bottomRef,
          className: "h-0",
          "aria-hidden": "true",
        }),
        isUserScrolled &&
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", {
            type: "button",
            onClick: () => {
              var _a;
              (_a = bottomRef.current) == null
                ? void 0
                : _a.scrollIntoView({ behavior: "smooth" });
            },
            className: cn(
              "fixed right-4 bottom-24 z-10",
              "rounded-full p-3 shadow-lg",
              "bg-white dark:bg-neutral-800",
              "border border-neutral-200 dark:border-neutral-700",
              "hover:bg-neutral-50 dark:hover:bg-neutral-700",
              "focus:ring-primary-500 focus:ring-2 focus:outline-none",
              "transition-all"
            ),
            "aria-label": "Scroll to bottom",
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
              className: "h-5 w-5 text-neutral-600 dark:text-neutral-300",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M19 14l-7 7m0 0l-7-7m7 7V3",
              }),
            }),
          }),
      ],
    });
  }
);
MessageList.displayName = "MessageList";
var chatVariants = cva("flex flex-col", {
  variants: {
    variant: {
      default: "bg-white dark:bg-neutral-900",
      embedded: "bg-transparent",
      floating:
        "bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700",
    },
    size: {
      sm: "max-w-sm",
      md: "max-w-lg",
      lg: "max-w-2xl",
      xl: "max-w-4xl",
      full: "w-full",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "full",
  },
});
var isMac =
  typeof window !== "undefined" &&
  typeof window.navigator !== "undefined" &&
  /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
var inputVariants2 = cva(
  "w-full rounded-lg border bg-white px-4 py-3 text-gray-900 transition-colors focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-white",
  {
    variants: {
      state: {
        default:
          "border-gray-300 focus:border-primary-500 focus:ring-primary-500/20 dark:border-gray-600 dark:focus:border-primary-400",
        error: "border-red-500 focus:border-red-500 focus:ring-red-500/20",
        success:
          "border-green-500 focus:border-green-500 focus:ring-green-500/20",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);
var containerVariants = cva("business-hours", {
  variants: {
    variant: {
      default: "",
      card: "rounded-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden",
      compact: "",
      inline: "inline-flex items-center gap-2",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});
var dayRowVariants = cva("flex justify-between items-start gap-4 py-2", {
  variants: {
    isToday: {
      true: "bg-primary-50 dark:bg-primary-900/20 -mx-3 px-3 rounded-md",
      false: "",
    },
  },
  defaultVariants: {
    isToday: false,
  },
});
var CommandPaletteContext = (0, import_react8.createContext)(null);
var isMac2 =
  typeof window !== "undefined" &&
  typeof window.navigator !== "undefined" &&
  /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
var overlayVariants = cva(
  "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
  {
    variants: {
      animate: {
        true: "animate-in fade-in duration-300",
        false: "",
      },
    },
    defaultVariants: {
      animate: true,
    },
  }
);
var cardVariants2 = cva(
  "mx-4 w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl dark:bg-gray-800",
  {
    variants: {
      animate: {
        true: "animate-in slide-in-from-bottom-4 duration-300",
        false: "",
      },
    },
    defaultVariants: {
      animate: true,
    },
  }
);
var badgeVariants2 = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
  {
    variants: {
      status: {
        connected:
          "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
        connecting:
          "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
        disconnected:
          "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
        waiting: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
      },
    },
    defaultVariants: {
      status: "connected",
    },
  }
);
var bannerVariants = cva("fixed z-50 transition-all duration-300 ease-in-out", {
  variants: {
    position: {
      bottom: "bottom-0 left-0 right-0",
      top: "top-0 left-0 right-0",
      "bottom-left": "bottom-4 left-4 max-w-md",
      "bottom-right": "bottom-4 right-4 max-w-md",
    },
    variant: {
      default:
        "bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg",
      minimal: "bg-gray-900 text-white",
      branded: "bg-primary-600 text-white",
    },
  },
  defaultVariants: {
    position: "bottom",
    variant: "default",
  },
});
function DropZone({
  onFilesSelected,
  acceptedFileTypes,
  multiple,
  disabled = false,
  className,
  children,
}) {
  const [isDragging, setIsDragging] = React46.useState(false);
  const inputRef = React46.useRef(null);
  const dropZoneRef = React46.useRef(null);
  const dragCounter = React46.useRef(0);
  const handleDragEnter = React46.useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled) return;
      dragCounter.current++;
      if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
        setIsDragging(true);
      }
    },
    [disabled]
  );
  const handleDragLeave = React46.useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled) return;
      dragCounter.current--;
      if (dragCounter.current === 0) {
        setIsDragging(false);
      }
    },
    [disabled]
  );
  const handleDragOver = React46.useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  const handleDrop = React46.useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled) return;
      setIsDragging(false);
      dragCounter.current = 0;
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        onFilesSelected(e.dataTransfer.files);
      }
    },
    [disabled, onFilesSelected]
  );
  const handleClick = React46.useCallback(() => {
    var _a;
    if (!disabled) {
      (_a = inputRef.current) == null ? void 0 : _a.click();
    }
  }, [disabled]);
  const handleKeyDown = React46.useCallback(
    (e) => {
      var _a;
      if ((e.key === "Enter" || e.key === " ") && !disabled) {
        e.preventDefault();
        (_a = inputRef.current) == null ? void 0 : _a.click();
      }
    },
    [disabled]
  );
  const handleInputChange = React46.useCallback(
    (e) => {
      if (e.target.files && e.target.files.length > 0) {
        onFilesSelected(e.target.files);
        e.target.value = "";
      }
    },
    [onFilesSelected]
  );
  const acceptString = acceptedFileTypes.join(",");
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    ref: dropZoneRef,
    role: "button",
    tabIndex: disabled ? -1 : 0,
    "aria-label": "Drop files here or click to browse",
    "aria-disabled": disabled,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragLeave,
    onDragOver: handleDragOver,
    onDrop: handleDrop,
    className: cn(
      // Base styles
      "relative flex flex-col items-center justify-center",
      "min-h-[200px] w-full p-6",
      "rounded-xl border-2 border-dashed",
      "transition-all duration-200",
      "cursor-pointer",
      // Default state
      "border-neutral-300 bg-neutral-50",
      "dark:border-neutral-600 dark:bg-neutral-800/50",
      // Hover state
      "hover:border-primary-400 hover:bg-primary-50/50",
      "dark:hover:border-primary-500 dark:hover:bg-primary-900/20",
      // Focus state
      "focus-visible:ring-primary-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
      // Dragging state
      isDragging && [
        "border-primary-500 bg-primary-50",
        "dark:border-primary-400 dark:bg-primary-900/30",
        "scale-[1.01]",
      ],
      // Disabled state
      disabled && [
        "cursor-not-allowed opacity-50",
        "hover:border-neutral-300 hover:bg-neutral-50",
        "dark:hover:border-neutral-600 dark:hover:bg-neutral-800/50",
      ],
      className
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", {
        ref: inputRef,
        type: "file",
        accept: acceptString,
        multiple,
        onChange: handleInputChange,
        disabled,
        className: "sr-only",
        "aria-hidden": "true",
        tabIndex: -1,
      }),
      children,
      isDragging &&
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
          className: cn(
            "absolute inset-0 flex items-center justify-center",
            "bg-primary-500/10 rounded-xl",
            "pointer-events-none"
          ),
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
            className:
              "text-primary-600 dark:text-primary-400 text-lg font-medium",
            children: "Drop files here",
          }),
        }),
    ],
  });
}
DropZone.displayName = "DropZone";
function FilePreviewItem({ file, onRemove, disabled }) {
  const isPdf = file.file.type === "application/pdf";
  const isImage2 = file.file.type.startsWith("image/");
  const handleRemove = React46.useCallback(() => {
    onRemove(file.id);
  }, [file.id, onRemove]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    role: "group",
    "aria-label": `File: ${file.file.name}`,
    className: cn(
      "group relative overflow-hidden rounded-lg",
      "border-border bg-card border",
      "focus-within:ring-primary-500 focus-within:ring-2 focus-within:ring-offset-2"
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className:
          "relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800",
        children: [
          isImage2
            ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("img", {
                src: file.previewUrl,
                alt: `Preview of ${file.file.name}`,
                className: "h-full w-full object-cover",
              })
            : isPdf
              ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
                  className:
                    "flex h-full w-full flex-col items-center justify-center gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(FileText, {
                      className: "text-muted-foreground h-12 w-12",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                      className: "text-muted-foreground text-xs",
                      children: "PDF Document",
                    }),
                  ],
                })
              : /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
                  className:
                    "flex h-full w-full flex-col items-center justify-center gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Image, {
                      className: "text-muted-foreground h-12 w-12",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                      className: "text-muted-foreground text-xs",
                      children: "File",
                    }),
                  ],
                }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
            className: cn(
              "absolute inset-0 flex items-center justify-center",
              "bg-black/0 transition-all duration-200",
              "group-hover:bg-black/30",
              disabled && "pointer-events-none"
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, {
              variant: "danger",
              size: "icon",
              onClick: handleRemove,
              disabled,
              className: cn(
                "h-8 w-8 rounded-full",
                "opacity-0 transition-all duration-200",
                "group-hover:opacity-100",
                "focus-visible:opacity-100"
              ),
              "aria-label": `Remove ${file.file.name}`,
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(X, {
                className: "h-4 w-4",
              }),
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
            className: cn(
              "absolute bottom-2 left-2 px-2 py-0.5",
              "rounded-full text-xs font-medium",
              "bg-black/50 text-white",
              "capitalize"
            ),
            children: file.source,
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className: "p-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", {
            className: "text-foreground truncate text-sm font-medium",
            title: file.file.name,
            children: file.file.name,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", {
            className: "text-muted-foreground text-xs",
            children: formatFileSize3(file.file.size),
          }),
        ],
      }),
    ],
  });
}
function formatFileSize3(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}
function FilePreview({ files, onRemove, disabled }) {
  if (files.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
    className: cn(
      "grid gap-4",
      files.length === 1 && "mx-auto max-w-xs grid-cols-1",
      files.length === 2 && "grid-cols-2",
      files.length >= 3 && "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
    ),
    role: "list",
    "aria-label": "Selected files",
    children: files.map((file) =>
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        FilePreviewItem,
        {
          file,
          onRemove,
          disabled,
        },
        file.id
      )
    ),
  });
}
FilePreview.displayName = "FilePreview";
function hasCameraSupport() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}
async function checkCameraPermission() {
  if (!hasCameraSupport()) {
    return "unavailable";
  }
  try {
    if (navigator.permissions) {
      const result = await navigator.permissions.query({
        name: "camera",
      });
      return result.state;
    }
    return "prompt";
  } catch {
    return "prompt";
  }
}
function useCamera({
  facingMode: initialFacingMode = "environment",
  width = 1920,
  height = 1080,
} = {}) {
  const [permission, setPermission] = React46.useState("prompt");
  const [stream, setStream] = React46.useState(null);
  const [isReady, setIsReady] = React46.useState(false);
  const [error, setError] = React46.useState(null);
  const [currentFacingMode, setCurrentFacingMode] =
    React46.useState(initialFacingMode);
  const videoRef = React46.useRef(null);
  const canvasRef = React46.useRef(null);
  React46.useEffect(() => {
    checkCameraPermission().then(setPermission);
  }, []);
  React46.useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [stream]);
  const startCamera = React46.useCallback(async () => {
    if (!hasCameraSupport()) {
      setPermission("unavailable");
      setError(new Error("Camera is not supported on this device"));
      return;
    }
    try {
      setError(null);
      const constraints = {
        video: {
          facingMode: currentFacingMode,
          width: { ideal: width },
          height: { ideal: height },
        },
        audio: false,
      };
      const mediaStream =
        await navigator.mediaDevices.getUserMedia(constraints);
      setStream(mediaStream);
      setPermission("granted");
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        await videoRef.current.play();
        setIsReady(true);
      }
    } catch (err) {
      const error2 = err;
      setError(error2);
      if (
        error2.name === "NotAllowedError" ||
        error2.name === "PermissionDeniedError"
      ) {
        setPermission("denied");
      } else if (
        error2.name === "NotFoundError" ||
        error2.name === "DevicesNotFoundError"
      ) {
        setPermission("unavailable");
      }
    }
  }, [currentFacingMode, width, height]);
  const stopCamera = React46.useCallback(() => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
    setIsReady(false);
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }, [stream]);
  const shouldRestartRef = React46.useRef(false);
  const switchCamera = React46.useCallback(() => {
    const newFacingMode = currentFacingMode === "user" ? "environment" : "user";
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
      setIsReady(false);
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
      shouldRestartRef.current = true;
    }
    setCurrentFacingMode(newFacingMode);
  }, [currentFacingMode, stream]);
  React46.useEffect(() => {
    if (shouldRestartRef.current && !stream) {
      shouldRestartRef.current = false;
      startCamera();
    }
  }, [currentFacingMode, stream, startCamera]);
  const capturePhoto = React46.useCallback(() => {
    if (!videoRef.current || !isReady) {
      return null;
    }
    const video = videoRef.current;
    if (!canvasRef.current) {
      canvasRef.current = document.createElement("canvas");
    }
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d");
    if (!context) {
      return null;
    }
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
    const byteString = atob(dataUrl.split(",")[1]);
    const mimeType = dataUrl.split(",")[0].split(":")[1].split(";")[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([arrayBuffer], { type: mimeType });
    const timestamp = /* @__PURE__ */ new Date()
      .toISOString()
      .replace(/[:.]/g, "-");
    const filename = `capture-${timestamp}.jpg`;
    return new File([blob], filename, { type: "image/jpeg" });
  }, [isReady]);
  return {
    permission,
    stream,
    videoRef,
    isReady,
    error,
    startCamera,
    stopCamera,
    capturePhoto,
    switchCamera,
    currentFacingMode,
  };
}
var DEFAULT_CONFIG = {
  minFocusScore: 15,
  minBrightness: 30,
  maxBrightness: 240,
  minDocumentCoverage: 10,
  maxDocumentCoverage: 95,
  stabilityDuration: 500,
  captureCountdown: 2,
  detectionFps: 5,
  enableAutoCapture: true,
};
var INITIAL_METRICS = {
  focusScore: 0,
  isInFocus: false,
  brightness: 0,
  isBrightnessOk: false,
  boundary: null,
  isDocumentDetected: false,
  documentCoverage: 0,
  isStable: false,
  stabilityDuration: 0,
};
var INITIAL_STATE = {
  isDetecting: false,
  metrics: INITIAL_METRICS,
  isReadyForCapture: false,
  captureCountdown: 0,
  error: null,
};
function calculateLaplacianVariance(imageData) {
  const { data, width, height } = imageData;
  let sum = 0;
  let sumSq = 0;
  let count = 0;
  const step = 4;
  for (let y = step; y < height - step; y += step) {
    for (let x = step; x < width - step; x += step) {
      const getGray = (px, py) => {
        const idx = (py * width + px) * 4;
        return (
          0.299 * data[idx] + 0.587 * data[idx + 1] + 0.114 * data[idx + 2]
        );
      };
      const center = getGray(x, y);
      const neighbors =
        (getGray(x, y - step) +
          getGray(x - step, y) +
          getGray(x + step, y) +
          getGray(x, y + step)) /
        4;
      const laplacian = center - neighbors;
      sum += laplacian;
      sumSq += laplacian * laplacian;
      count++;
    }
  }
  if (count === 0) return 0;
  const mean = sum / count;
  const variance = sumSq / count - mean * mean;
  return Math.abs(variance);
}
function calculateBrightness(imageData) {
  const { data } = imageData;
  let sum = 0;
  let count = 0;
  for (let i = 0; i < data.length; i += 64) {
    sum += 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    count++;
  }
  return count > 0 ? sum / count : 0;
}
function calculateFrameFingerprint(imageData) {
  const { data, width, height } = imageData;
  const gridSize = 8;
  const cellWidth = Math.floor(width / gridSize);
  const cellHeight = Math.floor(height / gridSize);
  const values = [];
  for (let gy = 0; gy < gridSize; gy++) {
    for (let gx = 0; gx < gridSize; gx++) {
      let sum = 0;
      let count = 0;
      const startX = gx * cellWidth;
      const startY = gy * cellHeight;
      for (let y = startY; y < startY + cellHeight; y += 4) {
        for (let x = startX; x < startX + cellWidth; x += 4) {
          const idx = (y * width + x) * 4;
          if (idx < data.length - 2) {
            sum +=
              0.299 * data[idx] + 0.587 * data[idx + 1] + 0.114 * data[idx + 2];
            count++;
          }
        }
      }
      values.push(count > 0 ? sum / count : 0);
    }
  }
  return values;
}
function compareFingerprints(fp1, fp2) {
  if (fp1.length !== fp2.length || fp1.length === 0) return 0;
  let totalDiff = 0;
  for (let i = 0; i < fp1.length; i++) {
    totalDiff += Math.abs(fp1[i] - fp2[i]) / 255;
  }
  const avgDiff = totalDiff / fp1.length;
  return Math.max(0, Math.min(100, (1 - avgDiff * 5) * 100));
}
function useDocumentDetection(videoRef, config = {}, onAutoCapture) {
  const mergedConfig = (0, import_react8.useMemo)(
    () => ({ ...DEFAULT_CONFIG, ...config }),
    // Intentionally depend on individual properties to avoid unnecessary re-renders
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      config.minFocusScore,
      config.minBrightness,
      config.maxBrightness,
      config.minDocumentCoverage,
      config.maxDocumentCoverage,
      config.stabilityDuration,
      config.captureCountdown,
      config.detectionFps,
      config.enableAutoCapture,
    ]
  );
  const [state, setState] = (0, import_react8.useState)(INITIAL_STATE);
  const canvasRef = (0, import_react8.useRef)(null);
  const ctxRef = (0, import_react8.useRef)(null);
  const animationFrameRef = (0, import_react8.useRef)(null);
  const lastFingerprintRef = (0, import_react8.useRef)([]);
  const stabilityStartRef = (0, import_react8.useRef)(null);
  const countdownIntervalRef = (0, import_react8.useRef)(null);
  const isDetectingRef = (0, import_react8.useRef)(false);
  const STABILITY_THRESHOLD = 85;
  (0, import_react8.useEffect)(() => {
    canvasRef.current = document.createElement("canvas");
    ctxRef.current = canvasRef.current.getContext("2d", {
      willReadFrequently: true,
    });
    return () => {
      canvasRef.current = null;
      ctxRef.current = null;
    };
  }, []);
  const processFrame = (0, import_react8.useCallback)(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!video || !canvas || !ctx || !isDetectingRef.current) {
      return;
    }
    if (video.readyState < 2) {
      animationFrameRef.current = requestAnimationFrame(processFrame);
      return;
    }
    const scale = 0.15;
    const width = Math.floor(video.videoWidth * scale);
    const height = Math.floor(video.videoHeight * scale);
    if (width === 0 || height === 0) {
      animationFrameRef.current = requestAnimationFrame(processFrame);
      return;
    }
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(video, 0, 0, width, height);
    const imageData = ctx.getImageData(0, 0, width, height);
    const focusScore = calculateLaplacianVariance(imageData);
    const brightness = calculateBrightness(imageData);
    const fingerprint = calculateFrameFingerprint(imageData);
    const now = Date.now();
    const similarity = compareFingerprints(
      fingerprint,
      lastFingerprintRef.current
    );
    const isSimilarFrame = similarity >= STABILITY_THRESHOLD;
    if (isSimilarFrame && lastFingerprintRef.current.length > 0) {
      if (!stabilityStartRef.current) {
        stabilityStartRef.current = now;
      }
    } else {
      stabilityStartRef.current = now;
    }
    lastFingerprintRef.current = fingerprint;
    const stabilityDuration = stabilityStartRef.current
      ? now - stabilityStartRef.current
      : 0;
    const isStable = stabilityDuration >= mergedConfig.stabilityDuration;
    const isInFocus = focusScore >= mergedConfig.minFocusScore;
    const isBrightnessOk =
      brightness >= mergedConfig.minBrightness &&
      brightness <= mergedConfig.maxBrightness;
    const isDocumentDetected = isInFocus && isBrightnessOk;
    const isReadyForCapture = isInFocus && isBrightnessOk && isStable;
    const metrics = {
      focusScore: Math.round(focusScore),
      isInFocus,
      brightness: Math.round(brightness),
      isBrightnessOk,
      boundary: null,
      // No longer doing boundary detection
      isDocumentDetected,
      documentCoverage: isDocumentDetected ? 50 : 0,
      // Dummy value
      isStable,
      stabilityDuration,
    };
    setState((prev) => ({
      ...prev,
      metrics,
      isReadyForCapture,
    }));
    const frameDelay = 1e3 / mergedConfig.detectionFps;
    setTimeout(() => {
      if (isDetectingRef.current) {
        animationFrameRef.current = requestAnimationFrame(processFrame);
      }
    }, frameDelay);
  }, [videoRef, mergedConfig]);
  (0, import_react8.useEffect)(() => {
    if (
      state.isReadyForCapture &&
      mergedConfig.enableAutoCapture &&
      state.captureCountdown === 0 &&
      !countdownIntervalRef.current
    ) {
      let countdown = mergedConfig.captureCountdown;
      setState((prev) => ({ ...prev, captureCountdown: countdown }));
      countdownIntervalRef.current = setInterval(() => {
        countdown -= 1;
        if (countdown <= 0) {
          if (countdownIntervalRef.current) {
            clearInterval(countdownIntervalRef.current);
            countdownIntervalRef.current = null;
          }
          setState((prev) => ({ ...prev, captureCountdown: 0 }));
          onAutoCapture == null ? void 0 : onAutoCapture();
        } else {
          setState((prev) => ({ ...prev, captureCountdown: countdown }));
        }
      }, 1e3);
    } else if (!state.isReadyForCapture && countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
      countdownIntervalRef.current = null;
      setState((prev) => ({ ...prev, captureCountdown: 0 }));
    }
  }, [
    state.isReadyForCapture,
    mergedConfig.enableAutoCapture,
    mergedConfig.captureCountdown,
    onAutoCapture,
    state.captureCountdown,
  ]);
  (0, import_react8.useEffect)(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
      }
    };
  }, []);
  const startDetection = (0, import_react8.useCallback)(() => {
    isDetectingRef.current = true;
    setState((prev) => ({ ...prev, isDetecting: true, error: null }));
    processFrame();
  }, [processFrame]);
  const stopDetection = (0, import_react8.useCallback)(() => {
    isDetectingRef.current = false;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
      countdownIntervalRef.current = null;
    }
    setState((prev) => ({ ...prev, isDetecting: false }));
  }, []);
  const resetDetection = (0, import_react8.useCallback)(() => {
    stopDetection();
    lastFingerprintRef.current = [];
    stabilityStartRef.current = null;
    setState(INITIAL_STATE);
  }, [stopDetection]);
  return {
    ...state,
    startDetection,
    stopDetection,
    resetDetection,
  };
}
function StatusPill({ label, isOk, value }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: `inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium ${isOk ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"} `,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
        className: `h-2 w-2 rounded-full ${isOk ? "bg-green-400" : "bg-red-400"}`,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
        children: label,
      }),
      value !== void 0 &&
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", {
          className: "opacity-70",
          children: ["(", value, ")"],
        }),
    ],
  });
}
function CountdownDisplay({ seconds }) {
  if (seconds <= 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
    className:
      "pointer-events-none absolute inset-0 flex items-center justify-center",
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
      className: "relative",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
          className:
            "absolute inset-0 animate-ping rounded-full bg-green-500 opacity-25",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
          className:
            "relative flex h-24 w-24 items-center justify-center rounded-full bg-green-500/90",
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
            className: "text-4xl font-bold text-white",
            children: seconds,
          }),
        }),
      ],
    }),
  });
}
function StabilityBar({ stabilityDuration, targetDuration }) {
  const progress = Math.min((stabilityDuration / targetDuration) * 100, 100);
  const isComplete = progress >= 100;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: "w-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className: "mb-1 flex justify-between text-xs text-white/70",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
            children: "Stability",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
            children: isComplete ? "Stable!" : "Hold steady...",
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
        className: "h-1.5 overflow-hidden rounded-full bg-white/20",
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
          className: `h-full transition-all duration-100 ${isComplete ? "bg-green-400" : "bg-yellow-400"}`,
          style: { width: `${progress}%` },
        }),
      }),
    ],
  });
}
function DocumentDetectionOverlay({
  metrics,
  isReadyForCapture,
  captureCountdown,
  videoDimensions: _videoDimensions,
  showDetailedMetrics = false,
}) {
  const {
    focusScore,
    isInFocus,
    brightness,
    isBrightnessOk,
    isDocumentDetected,
    isStable,
    stabilityDuration,
  } = metrics;
  const borderColor = isReadyForCapture
    ? "border-green-500"
    : isDocumentDetected
      ? "border-yellow-400"
      : "border-white/40";
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: "pointer-events-none absolute inset-0",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className: `absolute inset-4 rounded-lg border-4 transition-colors duration-300 ${borderColor}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
            className:
              "absolute -top-1 -left-1 h-6 w-6 rounded-tl border-t-4 border-l-4 border-current",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
            className:
              "absolute -top-1 -right-1 h-6 w-6 rounded-tr border-t-4 border-r-4 border-current",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
            className:
              "absolute -bottom-1 -left-1 h-6 w-6 rounded-bl border-b-4 border-l-4 border-current",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
            className:
              "absolute -right-1 -bottom-1 h-6 w-6 rounded-br border-r-4 border-b-4 border-current",
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(CountdownDisplay, {
        seconds: captureCountdown,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className: "absolute top-3 right-3 left-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
            className: `mb-2 rounded-lg px-4 py-2 text-center backdrop-blur-sm ${isReadyForCapture ? "bg-green-500/80 text-white" : "bg-black/60 text-white"} `,
            children: isReadyForCapture
              ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                  className: "font-medium",
                  children:
                    captureCountdown > 0
                      ? `Capturing in ${captureCountdown}...`
                      : "\u2713 Ready to capture!",
                })
              : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                  children: !isInFocus
                    ? "\u{1F50D} Hold camera steady"
                    : !isBrightnessOk
                      ? brightness < 40
                        ? "\u{1F4A1} Need more light"
                        : "\u{1F4A1} Too bright"
                      : !isStable
                        ? "\u270B Hold steady..."
                        : "\u{1F4C4} Position document in frame",
                }),
          }),
          isDocumentDetected &&
            !isStable &&
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
              className: "px-2",
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                StabilityBar,
                {
                  stabilityDuration,
                  targetDuration: 500,
                }
              ),
            }),
        ],
      }),
      showDetailedMetrics &&
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
          className: "absolute right-3 bottom-3 left-3",
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
            className:
              "flex flex-wrap justify-center gap-2 rounded-lg bg-black/60 p-2 backdrop-blur-sm",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(StatusPill, {
                label: "Focus",
                isOk: isInFocus,
                value: focusScore,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(StatusPill, {
                label: "Brightness",
                isOk: isBrightnessOk,
                value: brightness,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(StatusPill, {
                label: "Stable",
                isOk: isStable,
              }),
            ],
          }),
        }),
    ],
  });
}
function CameraViewfinder({ videoRef, isReady, detectionOverlay }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className:
      "relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-black",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("video", {
        ref: videoRef,
        autoPlay: true,
        playsInline: true,
        muted: true,
        className: cn(
          "h-full w-full object-cover",
          "transition-opacity duration-300",
          isReady ? "opacity-100" : "opacity-0"
        ),
      }),
      !isReady &&
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
          className:
            "absolute inset-0 flex flex-col items-center justify-center gap-3",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Spinner, {
              size: "lg",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
              className: "text-sm text-neutral-400",
              children: "Starting camera...",
            }),
          ],
        }),
      isReady && detectionOverlay,
      isReady &&
        !detectionOverlay &&
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
          className: "pointer-events-none absolute inset-0",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
              className: "absolute inset-8 rounded-lg border-2 border-white/30",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                  className:
                    "absolute -top-0.5 -left-0.5 h-6 w-6 rounded-tl-lg border-t-4 border-l-4 border-white",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                  className:
                    "absolute -top-0.5 -right-0.5 h-6 w-6 rounded-tr-lg border-t-4 border-r-4 border-white",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                  className:
                    "absolute -bottom-0.5 -left-0.5 h-6 w-6 rounded-bl-lg border-b-4 border-l-4 border-white",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                  className:
                    "absolute -right-0.5 -bottom-0.5 h-6 w-6 rounded-br-lg border-r-4 border-b-4 border-white",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
              className: "absolute right-0 bottom-4 left-0 text-center",
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                className:
                  "rounded-full bg-black/50 px-3 py-1 text-sm text-white",
                children: "Position document within the frame",
              }),
            }),
          ],
        }),
    ],
  });
}
function PermissionDeniedMessage({ onRetry }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: "flex flex-col items-center justify-center gap-4 py-8",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Alert, {
        variant: "warning",
        className: "w-full",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(CircleAlert, {
            className: "h-5 w-5",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(AlertTitle, {
            children: "Camera access denied",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(AlertDescription, {
            children:
              "Please allow camera access in your browser settings to use this feature. You may need to refresh the page after changing permissions.",
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className: "flex flex-col gap-2 text-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", {
            className: "text-muted-foreground text-sm",
            children: "To enable camera access:",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("ol", {
            className:
              "text-muted-foreground list-inside list-decimal space-y-1 text-left text-sm",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("li", {
                children:
                  "Click the camera/lock icon in your browser's address bar",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("li", {
                children: "Allow camera access for this site",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("li", {
                children: "Click the button below to try again",
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, {
        onClick: onRetry,
        leftIcon: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(RefreshCw, {
          className: "h-4 w-4",
        }),
        children: "Try again",
      }),
    ],
  });
}
function CameraUnavailableMessage() {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
    className: "flex flex-col items-center justify-center gap-4 py-8",
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Alert, {
      variant: "danger",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(CircleAlert, {
          className: "h-5 w-5",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(AlertTitle, {
          children: "Camera unavailable",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(AlertDescription, {
          children:
            "No camera was detected on this device. Please ensure your camera is connected and not in use by another application.",
        }),
      ],
    }),
  });
}
function PhotoPreview({ previewUrl, onConfirm, onRetake }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: "flex flex-col gap-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
        className:
          "relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-black",
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("img", {
          src: previewUrl,
          alt: "Captured document",
          className: "h-full w-full object-cover",
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className: "flex justify-center gap-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, {
            variant: "secondary",
            onClick: onRetake,
            leftIcon: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(RefreshCw, {
              className: "h-4 w-4",
            }),
            children: "Retake",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, {
            variant: "primary",
            onClick: onConfirm,
            leftIcon: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Check, {
              className: "h-4 w-4",
            }),
            children: "Use this photo",
          }),
        ],
      }),
    ],
  });
}
function WebcamModal({
  open,
  onOpenChange,
  onCapture,
  enableAutoCapture = true,
}) {
  const {
    permission,
    videoRef,
    isReady,
    startCamera,
    stopCamera,
    capturePhoto,
    switchCamera,
    currentFacingMode,
  } = useCamera({
    facingMode: "environment",
    width: 1920,
    height: 1080,
  });
  const [capturedFile, setCapturedFile] = React46.useState(null);
  const [previewUrl, setPreviewUrl] = React46.useState(null);
  const [autoDetectEnabled, setAutoDetectEnabled] =
    React46.useState(enableAutoCapture);
  const [videoDimensions, setVideoDimensions] = React46.useState({
    width: 0,
    height: 0,
  });
  const handleAutoCapture = React46.useCallback(() => {
    const file = capturePhoto();
    if (file) {
      setCapturedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      stopCamera();
    }
  }, [capturePhoto, stopCamera]);
  const detection = useDocumentDetection(
    videoRef,
    {
      enableAutoCapture: autoDetectEnabled,
      minFocusScore: 15,
      // Very forgiving focus threshold
      stabilityDuration: 500,
      // 0.5 seconds of stability
      captureCountdown: 2,
      // 2 second countdown
    },
    handleAutoCapture
  );
  const hasStartedRef = React46.useRef(false);
  React46.useEffect(() => {
    const video = videoRef.current;
    if (video && isReady) {
      const updateDimensions = () => {
        setVideoDimensions({
          width: video.videoWidth,
          height: video.videoHeight,
        });
      };
      updateDimensions();
      video.addEventListener("resize", updateDimensions);
      return () => video.removeEventListener("resize", updateDimensions);
    }
  }, [isReady, videoRef]);
  React46.useEffect(() => {
    if (open && permission !== "denied" && permission !== "unavailable") {
      if (!hasStartedRef.current) {
        hasStartedRef.current = true;
        startCamera();
      }
    } else if (!open) {
      hasStartedRef.current = false;
      stopCamera();
      detection.stopDetection();
      setCapturedFile(null);
      setPreviewUrl((prev) => {
        if (prev) {
          URL.revokeObjectURL(prev);
        }
        return null;
      });
    }
  }, [open, permission]);
  React46.useEffect(() => {
    if (isReady && autoDetectEnabled && !capturedFile) {
      detection.startDetection();
    }
    return () => {
      detection.stopDetection();
    };
  }, [isReady, autoDetectEnabled, capturedFile]);
  const handleCapture = React46.useCallback(() => {
    const file = capturePhoto();
    if (file) {
      setCapturedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      stopCamera();
    }
  }, [capturePhoto, stopCamera]);
  const handleRetake = React46.useCallback(() => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setCapturedFile(null);
    setPreviewUrl(null);
    detection.resetDetection();
    startCamera();
  }, [previewUrl, startCamera, detection]);
  const handleConfirm = React46.useCallback(() => {
    if (capturedFile) {
      onCapture(capturedFile);
      onOpenChange(false);
    }
  }, [capturedFile, onCapture, onOpenChange]);
  const handleClose = React46.useCallback(() => {
    stopCamera();
    detection.stopDetection();
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setCapturedFile(null);
    setPreviewUrl(null);
    onOpenChange(false);
  }, [stopCamera, detection, previewUrl, onOpenChange]);
  const renderContent = () => {
    if (permission === "denied") {
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        PermissionDeniedMessage,
        { onRetry: startCamera }
      );
    }
    if (permission === "unavailable") {
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        CameraUnavailableMessage,
        {}
      );
    }
    if (capturedFile && previewUrl) {
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(PhotoPreview, {
        previewUrl,
        onConfirm: handleConfirm,
        onRetake: handleRetake,
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
      className: "flex flex-col gap-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(CameraViewfinder, {
          videoRef,
          isReady,
          detectionOverlay:
            autoDetectEnabled && isReady
              ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  DocumentDetectionOverlay,
                  {
                    metrics: detection.metrics,
                    isReadyForCapture: detection.isReadyForCapture,
                    captureCountdown: detection.captureCountdown,
                    videoDimensions,
                    showDetailedMetrics: false,
                  }
                )
              : void 0,
        }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
          className: "flex flex-col gap-3",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
              className: "flex items-center justify-center gap-2",
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, {
                variant: autoDetectEnabled ? "primary" : "secondary",
                size: "sm",
                onClick: () => {
                  setAutoDetectEnabled(!autoDetectEnabled);
                  if (!autoDetectEnabled) {
                    detection.startDetection();
                  } else {
                    detection.stopDetection();
                  }
                },
                leftIcon: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  ScanLine,
                  { className: "h-4 w-4" }
                ),
                children: autoDetectEnabled
                  ? "Auto-capture ON"
                  : "Auto-capture OFF",
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
              className: "flex justify-center gap-3",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, {
                  variant: "secondary",
                  size: "icon",
                  onClick: switchCamera,
                  disabled: !isReady,
                  "aria-label": `Switch to ${currentFacingMode === "user" ? "back" : "front"} camera`,
                  children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                    RefreshCw,
                    { className: "h-5 w-5" }
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, {
                  variant: "primary",
                  size: "lg",
                  onClick: handleCapture,
                  disabled: !isReady,
                  leftIcon: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                    Camera,
                    { className: "h-5 w-5" }
                  ),
                  children: autoDetectEnabled ? "Manual Capture" : "Capture",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Modal, {
    open,
    onOpenChange: handleClose,
    size: "lg",
    "aria-label": "Webcam capture",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(ModalHeader, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ModalTitle, {
            children: "Take a Photo",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ModalClose, {}),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ModalBody, {
        children: renderContent(),
      }),
      permission !== "denied" &&
        permission !== "unavailable" &&
        !capturedFile &&
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ModalFooter, {
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, {
            variant: "secondary",
            onClick: handleClose,
            children: "Cancel",
          }),
        }),
    ],
  });
}
WebcamModal.displayName = "WebcamModal";
var DEFAULT_ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/heic",
  "image/webp",
  "application/pdf",
];
var DEFAULT_MAX_FILE_SIZE_MB = 10;
function generateFileId() {
  return `file-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
function validateFile2(file, acceptedTypes, maxSizeMb) {
  if (!acceptedTypes.includes(file.type)) {
    return {
      file,
      type: "type",
      message: `File type "${file.type || "unknown"}" is not supported. Accepted types: ${acceptedTypes.join(", ")}`,
    };
  }
  const maxSizeBytes = maxSizeMb * 1024 * 1024;
  if (file.size > maxSizeBytes) {
    return {
      file,
      type: "size",
      message: `File size (${(file.size / 1024 / 1024).toFixed(2)} MB) exceeds the maximum allowed size of ${maxSizeMb} MB`,
    };
  }
  return null;
}
function createPreviewUrl(file) {
  return URL.createObjectURL(file);
}
function useFileUpload({
  acceptedFileTypes = [...DEFAULT_ACCEPTED_FILE_TYPES],
  maxFileSizeMb = DEFAULT_MAX_FILE_SIZE_MB,
  multiple = false,
  onValidationError,
} = {}) {
  const [files, setFiles] = React46.useState([]);
  React46.useEffect(() => {
    return () => {
      files.forEach((f) => URL.revokeObjectURL(f.previewUrl));
    };
  }, []);
  const addFiles = React46.useCallback(
    (fileList, source = "upload") => {
      const newFiles = [];
      const errors = [];
      Array.from(fileList).forEach((file) => {
        const error = validateFile2(file, acceptedFileTypes, maxFileSizeMb);
        if (error) {
          errors.push(error);
        } else {
          newFiles.push({
            file,
            previewUrl: createPreviewUrl(file),
            source,
            id: generateFileId(),
          });
        }
      });
      if (errors.length > 0) {
        onValidationError == null ? void 0 : onValidationError(errors);
      }
      if (newFiles.length > 0) {
        setFiles((prev) => {
          if (!multiple) {
            prev.forEach((f) => URL.revokeObjectURL(f.previewUrl));
            return newFiles.slice(0, 1);
          }
          return [...prev, ...newFiles];
        });
      }
    },
    [acceptedFileTypes, maxFileSizeMb, multiple, onValidationError]
  );
  const addFile = React46.useCallback(
    (file, source = "upload") => {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      addFiles(dataTransfer.files, source);
    },
    [addFiles]
  );
  const removeFile = React46.useCallback((id) => {
    setFiles((prev) => {
      const fileToRemove = prev.find((f) => f.id === id);
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.previewUrl);
      }
      return prev.filter((f) => f.id !== id);
    });
  }, []);
  const clearFiles = React46.useCallback(() => {
    setFiles((prev) => {
      prev.forEach((f) => URL.revokeObjectURL(f.previewUrl));
      return [];
    });
  }, []);
  const getFiles = React46.useCallback(() => {
    return files.map((f) => f.file);
  }, [files]);
  return {
    files,
    addFiles,
    addFile,
    removeFile,
    clearFiles,
    getFiles,
    hasFiles: files.length > 0,
  };
}
function DocumentScanner({
  onScan,
  onResult,
  multiple = false,
  acceptedFileTypes = [...DEFAULT_ACCEPTED_FILE_TYPES],
  maxFileSizeMb = DEFAULT_MAX_FILE_SIZE_MB,
  disabled = false,
  enableWebcam = true,
  enableCamera = true,
  title = "Scan your document",
  description = "Upload a file, take a photo, or use your webcam",
  className,
  onValidationError,
  onStateChange,
}) {
  const [state, setState] = React46.useState("idle");
  const [error, setError] = React46.useState(null);
  const [isWebcamOpen, setIsWebcamOpen] = React46.useState(false);
  const [validationErrors, setValidationErrors] = React46.useState([]);
  const isMobile = useIsMobile();
  const cameraInputRef = React46.useRef(null);
  const {
    files,
    addFiles,
    addFile,
    removeFile,
    clearFiles,
    getFiles,
    hasFiles,
  } = useFileUpload({
    acceptedFileTypes,
    maxFileSizeMb,
    multiple,
    onValidationError: (errors) => {
      setValidationErrors(errors);
      onValidationError == null ? void 0 : onValidationError(errors);
    },
  });
  React46.useEffect(() => {
    onStateChange == null ? void 0 : onStateChange(state);
  }, [state, onStateChange]);
  React46.useEffect(() => {
    if (hasFiles && state === "idle") {
      setState("preview");
    } else if (!hasFiles && state === "preview") {
      setState("idle");
    }
  }, [hasFiles, state]);
  const handleFilesSelected = React46.useCallback(
    (fileList) => {
      setError(null);
      setValidationErrors([]);
      addFiles(fileList, "upload");
    },
    [addFiles]
  );
  const handleCameraCapture = React46.useCallback(() => {
    var _a;
    (_a = cameraInputRef.current) == null ? void 0 : _a.click();
  }, []);
  const handleCameraInputChange = React46.useCallback(
    (e) => {
      if (e.target.files && e.target.files.length > 0) {
        setError(null);
        setValidationErrors([]);
        addFiles(e.target.files, "camera");
        e.target.value = "";
      }
    },
    [addFiles]
  );
  const handleWebcamCapture = React46.useCallback(
    (file) => {
      setError(null);
      setValidationErrors([]);
      addFile(file, "webcam");
    },
    [addFile]
  );
  const handleScan = React46.useCallback(async () => {
    if (!hasFiles) return;
    try {
      setState("processing");
      setError(null);
      const filesToScan = getFiles();
      const result = await onScan(filesToScan);
      setState("success");
      onResult(result);
      setTimeout(() => {
        clearFiles();
        setState("idle");
      }, 2e3);
    } catch (err) {
      setState("error");
      const errorMessage =
        err instanceof Error
          ? err.message
          : "An error occurred while processing your document. Please try again.";
      setError(errorMessage);
    }
  }, [hasFiles, getFiles, onScan, onResult, clearFiles]);
  const handleRetry = React46.useCallback(() => {
    setState("preview");
    setError(null);
  }, []);
  const handleClearAll = React46.useCallback(() => {
    clearFiles();
    setError(null);
    setValidationErrors([]);
    setState("idle");
  }, [clearFiles]);
  const cameraAcceptString = acceptedFileTypes
    .filter((type) => type.startsWith("image/"))
    .join(",");
  const renderContent = () => {
    if (state === "processing") {
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className: "flex flex-col items-center justify-center gap-4 py-12",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SpinnerWithLabel, {
            size: "xl",
            label: "Analyzing your document...",
            labelPosition: "bottom",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Text, {
            variant: "muted",
            size: "sm",
            className: "max-w-xs text-center",
            children:
              "Our AI is extracting information from your document. This usually takes a few seconds.",
          }),
        ],
      });
    }
    if (state === "success") {
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className: "flex flex-col items-center justify-center gap-4 py-12",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
            className:
              "flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30",
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              CircleCheckBig,
              { className: "h-8 w-8 text-green-600 dark:text-green-400" }
            ),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Text, {
            weight: "semibold",
            size: "lg",
            children: "Document scanned successfully!",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Text, {
            variant: "muted",
            size: "sm",
            children: "The extracted data has been processed.",
          }),
        ],
      });
    }
    if (state === "error") {
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className: "flex flex-col items-center gap-4 py-8",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Alert, {
            variant: "danger",
            className: "w-full",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(CircleAlert, {
                className: "h-5 w-5",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(AlertTitle, {
                children: "Processing failed",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(AlertDescription, {
                children: error,
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
            className: "flex gap-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, {
                variant: "secondary",
                onClick: handleClearAll,
                children: "Start over",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, {
                variant: "primary",
                onClick: handleRetry,
                children: "Try again",
              }),
            ],
          }),
        ],
      });
    }
    if (state === "preview" && hasFiles) {
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className: "flex flex-col gap-6",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(FilePreview, {
            files,
            onRemove: removeFile,
            disabled,
          }),
          validationErrors.length > 0 &&
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Alert, {
              variant: "warning",
              dismissible: true,
              onDismiss: () => setValidationErrors([]),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(CircleAlert, {
                  className: "h-5 w-5",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(AlertTitle, {
                  children: "Some files were not added",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  AlertDescription,
                  {
                    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      "ul",
                      {
                        className: "mt-2 list-inside list-disc space-y-1",
                        children: validationErrors.map((err, index) =>
                          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                            "li",
                            {
                              className: "text-sm",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                                  "strong",
                                  { children: [err.file.name, ":"] }
                                ),
                                " ",
                                err.message,
                              ],
                            },
                            index
                          )
                        ),
                      }
                    ),
                  }
                ),
              ],
            }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
            className: "flex flex-wrap items-center justify-center gap-3",
            children: [
              multiple &&
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  import_jsx_runtime10.Fragment,
                  {
                    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      Button,
                      {
                        variant: "secondary",
                        onClick: () => {
                          const input = document.createElement("input");
                          input.type = "file";
                          input.accept = acceptedFileTypes.join(",");
                          input.multiple = multiple;
                          input.onchange = (e) => {
                            const files2 = e.target.files;
                            if (files2) addFiles(files2, "upload");
                          };
                          input.click();
                        },
                        leftIcon: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                          Upload,
                          { className: "h-4 w-4" }
                        ),
                        disabled,
                        children: "Add more files",
                      }
                    ),
                  }
                ),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, {
                variant: "secondary",
                onClick: handleClearAll,
                leftIcon: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  Trash2,
                  { className: "h-4 w-4" }
                ),
                disabled,
                children: "Clear all",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Button, {
                variant: "primary",
                onClick: handleScan,
                leftIcon: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Scan, {
                  className: "h-4 w-4",
                }),
                disabled,
                children: [
                  "Scan ",
                  files.length > 1 ? `${files.length} documents` : "document",
                ],
              }),
            ],
          }),
        ],
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
      className: "flex flex-col gap-6",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(DropZone, {
          onFilesSelected: handleFilesSelected,
          acceptedFileTypes,
          multiple,
          disabled,
          className: "min-h-[240px]",
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
            className: "flex flex-col items-center gap-4 text-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                className:
                  "bg-primary-100 dark:bg-primary-900/30 flex h-14 w-14 items-center justify-center rounded-full",
                children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  Upload,
                  {
                    className: "text-primary-600 dark:text-primary-400 h-7 w-7",
                  }
                ),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
                className: "space-y-1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Text, {
                    weight: "medium",
                    children: "Drag and drop your files here",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Text, {
                    variant: "muted",
                    size: "sm",
                    children: "or click to browse",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Text, {
                variant: "muted",
                size: "xs",
                className: "max-w-xs",
                children: [
                  "Supported formats: JPEG, PNG, HEIC, WebP, PDF",
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("br", {}),
                  "Max size: ",
                  maxFileSizeMb,
                  " MB",
                ],
              }),
            ],
          }),
        }),
        (enableCamera || enableWebcam) &&
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
            className: "flex flex-col items-center gap-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
                className: "flex w-full max-w-xs items-center gap-3",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                    className: "bg-border h-px flex-1",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Text, {
                    variant: "muted",
                    size: "sm",
                    children: "or",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                    className: "bg-border h-px flex-1",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
                className: "flex flex-wrap justify-center gap-3",
                children: [
                  enableCamera &&
                    isMobile &&
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, {
                      variant: "secondary",
                      onClick: handleCameraCapture,
                      leftIcon: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                        Camera,
                        { className: "h-4 w-4" }
                      ),
                      disabled,
                      children: "Take a photo",
                    }),
                  enableWebcam &&
                    !isMobile &&
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, {
                      variant: "secondary",
                      onClick: () => setIsWebcamOpen(true),
                      leftIcon: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                        Camera,
                        { className: "h-4 w-4" }
                      ),
                      disabled,
                      children: "Use webcam",
                    }),
                ],
              }),
            ],
          }),
        validationErrors.length > 0 &&
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Alert, {
            variant: "warning",
            dismissible: true,
            onDismiss: () => setValidationErrors([]),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(CircleAlert, {
                className: "h-5 w-5",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(AlertTitle, {
                children: "Invalid files",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(AlertDescription, {
                children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("ul", {
                  className: "mt-2 list-inside list-disc space-y-1",
                  children: validationErrors.map((err, index) =>
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                      "li",
                      {
                        className: "text-sm",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                            "strong",
                            { children: [err.file.name, ":"] }
                          ),
                          " ",
                          err.message,
                        ],
                      },
                      index
                    )
                  ),
                }),
              }),
            ],
          }),
      ],
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: cn(
      "border-border bg-card w-full rounded-xl border p-6",
      "shadow-sm",
      className
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className: "mb-6 text-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Text, {
            as: "h2",
            size: "xl",
            weight: "semibold",
            className: "mb-1",
            children: title,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Text, {
            variant: "muted",
            size: "sm",
            children: description,
          }),
        ],
      }),
      renderContent(),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", {
        ref: cameraInputRef,
        type: "file",
        accept: cameraAcceptString,
        capture: "environment",
        onChange: handleCameraInputChange,
        className: "sr-only",
        "aria-hidden": "true",
        tabIndex: -1,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(WebcamModal, {
        open: isWebcamOpen,
        onOpenChange: setIsWebcamOpen,
        onCapture: handleWebcamCapture,
      }),
    ],
  });
}
DocumentScanner.displayName = "DocumentScanner";
var errorPageVariants = cva(
  "flex flex-col items-center justify-center min-h-[60vh] px-4 py-12 text-center",
  {
    variants: {
      size: {
        sm: "min-h-[40vh] py-8",
        md: "min-h-[60vh] py-12",
        lg: "min-h-screen py-16",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
var selectorVariants = cva("relative inline-block text-left", {
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
var buttonVariants2 = cva(
  [
    "inline-flex items-center justify-between gap-2 rounded-lg border transition-colors",
    "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
  ],
  {
    variants: {
      size: {
        sm: "px-2.5 py-1.5 text-sm",
        md: "px-3 py-2 text-sm",
        lg: "px-4 py-2.5 text-base",
      },
      variant: {
        default:
          "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",
        ghost:
          "border-transparent bg-transparent text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800",
        minimal:
          "border-transparent bg-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);
var pageVariants = cva("flex flex-col items-center justify-center", {
  variants: {
    size: {
      sm: "min-h-[200px] py-8",
      md: "min-h-[400px] py-12",
      lg: "min-h-screen py-16",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
var headerVariants = cva(
  [
    "flex items-center gap-3 px-4 py-3",
    "bg-white dark:bg-neutral-900",
    "border-b border-neutral-200 dark:border-neutral-700",
  ],
  {
    variants: {
      size: {
        sm: "py-2",
        md: "py-3",
        lg: "py-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
function getConversationTitle(conversation, participant) {
  if (conversation == null ? void 0 : conversation.name)
    return conversation.name;
  if (participant == null ? void 0 : participant.name) return participant.name;
  if (
    (conversation == null ? void 0 : conversation.participants) &&
    conversation.participants.length > 0
  ) {
    const names = conversation.participants
      .filter((p) => !p.isCurrentUser)
      .map((p) => p.name);
    if (names.length <= 2) return names.join(" & ");
    return `${names[0]} and ${names.length - 1} others`;
  }
  return "Conversation";
}
function getConversationSubtitle(conversation, participant, showOnlineStatus) {
  if (participant) {
    if (showOnlineStatus && participant.isOnline) {
      return "Online";
    }
    if (participant.lastSeen) {
      const lastSeen = new Date(participant.lastSeen);
      return `Last seen ${formatLastSeen(lastSeen)}`;
    }
    if (participant.phoneNumber) {
      return participant.phoneNumber;
    }
  }
  if (
    (conversation == null ? void 0 : conversation.type) === "group" &&
    conversation.participants
  ) {
    return `${conversation.participants.length} participants`;
  }
  return void 0;
}
function formatLastSeen(date) {
  const now = /* @__PURE__ */ new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / (1e3 * 60));
  const diffHours = Math.floor(diffMs / (1e3 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1e3 * 60 * 60 * 24));
  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString();
}
var ConversationHeader = React46.forwardRef(
  (
    {
      className,
      size,
      conversation,
      title,
      subtitle,
      avatarUrl,
      participant,
      showOnlineStatus = true,
      showBackButton = false,
      onBack,
      actions,
      leftContent,
      rightContent,
      ...props
    },
    ref
  ) => {
    const displayTitle =
      title || getConversationTitle(conversation, participant);
    const displaySubtitle =
      subtitle ||
      getConversationSubtitle(conversation, participant, showOnlineStatus);
    const displayAvatar =
      avatarUrl ||
      (conversation == null ? void 0 : conversation.avatarUrl) ||
      (participant == null ? void 0 : participant.avatarUrl);
    const isOnline = participant == null ? void 0 : participant.isOnline;
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("header", {
      ref,
      className: cn(headerVariants({ size }), className),
      ...props,
      children: [
        leftContent ||
          (showBackButton &&
            onBack &&
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", {
              type: "button",
              onClick: onBack,
              className: cn(
                "-ml-2 rounded-full p-2",
                "text-neutral-500 hover:text-neutral-700",
                "dark:text-neutral-400 dark:hover:text-neutral-200",
                "hover:bg-neutral-100 dark:hover:bg-neutral-800",
                "focus:ring-primary-500 focus:ring-2 focus:outline-none",
                "transition-colors"
              ),
              "aria-label": "Go back",
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
                className: "h-5 w-5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 19l-7-7 7-7",
                  }
                ),
              }),
            })),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
          className: "relative shrink-0",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
              className: cn(
                "flex h-10 w-10 items-center justify-center rounded-full",
                "bg-primary-800 font-medium text-white"
              ),
              children: displayAvatar
                ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("img", {
                    src: displayAvatar,
                    alt: displayTitle,
                    className: "h-full w-full rounded-full object-cover",
                  })
                : displayTitle.charAt(0).toUpperCase(),
            }),
            showOnlineStatus &&
              isOnline &&
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                className: cn(
                  "absolute right-0 bottom-0",
                  "h-3 w-3 rounded-full",
                  "bg-green-500 ring-2 ring-white dark:ring-neutral-900"
                ),
                "aria-label": "Online",
              }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
          className: "min-w-0 flex-1",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", {
              className:
                "truncate font-semibold text-neutral-900 dark:text-neutral-100",
              children: displayTitle,
            }),
            displaySubtitle &&
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", {
                className: cn(
                  "truncate text-sm",
                  isOnline
                    ? "text-green-600 dark:text-green-400"
                    : "text-neutral-500 dark:text-neutral-400"
                ),
                children: displaySubtitle,
              }),
          ],
        }),
        rightContent ||
          (actions &&
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
              className: "flex shrink-0 items-center gap-1",
              children: actions,
            })),
      ],
    });
  }
);
ConversationHeader.displayName = "ConversationHeader";
var ConversationListItem = React46.forwardRef(
  ({ className, conversation, isSelected, onSelect, ...props }, ref) => {
    const participant = conversation.participants.find((p) => !p.isCurrentUser);
    const title = getConversationTitle(conversation, participant);
    const avatarUrl =
      conversation.avatarUrl ||
      (participant == null ? void 0 : participant.avatarUrl);
    const lastMessage = conversation.lastMessage;
    const isUnread = conversation.unreadCount > 0;
    const formatTime4 = (timestamp) => {
      const date = new Date(timestamp);
      const now = /* @__PURE__ */ new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const messageDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      );
      if (messageDate.getTime() === today.getTime()) {
        return date.toLocaleTimeString(void 0, {
          hour: "numeric",
          minute: "2-digit",
        });
      }
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      if (messageDate.getTime() === yesterday.getTime()) {
        return "Yesterday";
      }
      return date.toLocaleDateString(void 0, {
        month: "short",
        day: "numeric",
      });
    };
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("button", {
      ref,
      type: "button",
      onClick: () => (onSelect == null ? void 0 : onSelect(conversation)),
      className: cn(
        "flex w-full items-center gap-3 px-4 py-3",
        "text-left transition-colors",
        isSelected
          ? "bg-primary-50 dark:bg-primary-900/20"
          : "hover:bg-neutral-50 dark:hover:bg-neutral-800/50",
        "focus:bg-neutral-50 focus:outline-none dark:focus:bg-neutral-800/50",
        className
      ),
      "aria-current": isSelected ? "true" : void 0,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
          className: "relative shrink-0",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
              className: cn(
                "flex h-12 w-12 items-center justify-center rounded-full",
                "bg-primary-800 font-medium text-white"
              ),
              children: avatarUrl
                ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("img", {
                    src: avatarUrl,
                    alt: title,
                    className: "h-full w-full rounded-full object-cover",
                  })
                : title.charAt(0).toUpperCase(),
            }),
            (participant == null ? void 0 : participant.isOnline) &&
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                className: cn(
                  "absolute right-0 bottom-0",
                  "h-3 w-3 rounded-full",
                  "bg-green-500 ring-2 ring-white dark:ring-neutral-900"
                ),
              }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
          className: "min-w-0 flex-1",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", {
                  className: cn(
                    "truncate text-sm",
                    isUnread
                      ? "font-semibold text-neutral-900 dark:text-neutral-100"
                      : "font-medium text-neutral-700 dark:text-neutral-300"
                  ),
                  children: title,
                }),
                lastMessage &&
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                    className:
                      "shrink-0 text-xs text-neutral-500 dark:text-neutral-400",
                    children: formatTime4(lastMessage.timestamp),
                  }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", {
                  className: cn(
                    "truncate text-sm",
                    isUnread
                      ? "text-neutral-700 dark:text-neutral-300"
                      : "text-neutral-500 dark:text-neutral-400"
                  ),
                  children:
                    (lastMessage == null ? void 0 : lastMessage.content) ||
                    "No messages yet",
                }),
                isUnread &&
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                    className: cn(
                      "flex shrink-0 items-center justify-center",
                      "h-5 min-w-[20px] rounded-full px-1.5",
                      "bg-primary-600 text-xs font-medium text-white"
                    ),
                    children:
                      conversation.unreadCount > 99
                        ? "99+"
                        : conversation.unreadCount,
                  }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
          className: "flex shrink-0 flex-col items-center gap-1",
          children: [
            conversation.isPinned &&
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
                className: "text-primary-500 h-4 w-4",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  "path",
                  {
                    d: "M16 4v8l2 2v2h-6v6l-1 1-1-1v-6H4v-2l2-2V4c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2z",
                  }
                ),
              }),
            conversation.isMuted &&
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("svg", {
                className: "h-4 w-4 text-neutral-400",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2",
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  }
);
ConversationListItem.displayName = "ConversationListItem";
function ConversationListSkeleton({ count = 5, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
    className: cn(
      "divide-y divide-neutral-200 dark:divide-neutral-700",
      className
    ),
    children: Array.from({ length: count }).map((_, i) =>
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
        "div",
        {
          className: "flex items-center gap-3 px-4 py-3",
          "aria-hidden": "true",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
              className:
                "h-12 w-12 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
              className: "flex-1 space-y-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                  className:
                    "h-4 w-32 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                  className:
                    "h-3 w-48 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700",
                }),
              ],
            }),
          ],
        },
        i
      )
    ),
  });
}
ConversationListSkeleton.displayName = "ConversationListSkeleton";
function LightboxModal({ attachment, onClose }) {
  React46.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (attachment) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [attachment, onClose]);
  if (!attachment) return null;
  const isImage2 = attachment.type === "image";
  const isVideo = attachment.type === "video";
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: cn("fixed inset-0 z-50", "flex items-center justify-center"),
    role: "dialog",
    "aria-modal": "true",
    "aria-label": `View ${attachment.filename}`,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", {
        type: "button",
        className: "absolute inset-0 cursor-default bg-black/90",
        onClick: onClose,
        "aria-label": "Close lightbox",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", {
        type: "button",
        onClick: onClose,
        className: cn(
          "absolute top-4 right-4 z-10",
          "rounded-full p-2",
          "bg-white/10 text-white",
          "hover:bg-white/20",
          "focus:ring-2 focus:ring-white focus:outline-none",
          "transition-colors"
        ),
        "aria-label": "Close",
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
          className: "h-6 w-6",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M6 18L18 6M6 6l12 12",
          }),
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className: "relative z-10 max-h-[90vh] max-w-[90vw]",
        children: [
          isImage2 &&
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("img", {
              src: attachment.url,
              alt: attachment.alt || attachment.filename,
              className: "max-h-[90vh] max-w-[90vw] object-contain",
            }),
          isVideo &&
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("video", {
              src: attachment.url,
              controls: true,
              autoPlay: true,
              className: "max-h-[90vh] max-w-[90vw]",
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("track", {
                kind: "captions",
              }),
            }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
        className: "absolute bottom-4 left-1/2 -translate-x-1/2",
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", {
          className: "rounded-full bg-black/50 px-4 py-2 text-sm text-white",
          children: attachment.filename,
        }),
      }),
    ],
  });
}
LightboxModal.displayName = "LightboxModal";
var MessageThread = React46.forwardRef(
  (
    {
      conversation,
      messages,
      currentUser,
      typingState,
      isLoading = false,
      hasMore = false,
      isLoadingMore = false,
      isSending = false,
      eventHandlers = {},
      showHeader = true,
      showBackButton = false,
      onBack,
      headerActions,
      placeholder = "Type a message...",
      maxMessageLength = 1600,
      showCharacterCount = false,
      showAttachmentPicker = true,
      showCameraButton = false,
      acceptedFileTypes,
      maxFileSize,
      maxAttachments,
      showAvatars = true,
      showSenderNames = false,
      groupByDate = true,
      emptyState,
      formatTimestamp,
      onError,
      className,
    },
    ref
  ) => {
    const [lightboxAttachment, setLightboxAttachment] = React46.useState(null);
    const [replyTo, setReplyTo] = React46.useState(null);
    const participant =
      (conversation == null ? void 0 : conversation.type) === "direct"
        ? conversation.participants.find((p) => p.id !== currentUser.id)
        : void 0;
    const handleAttachmentClick = (attachment, message) => {
      var _a;
      if (attachment.type === "image" || attachment.type === "video") {
        setLightboxAttachment(attachment);
      }
      (_a = eventHandlers.onAttachmentClick) == null
        ? void 0
        : _a.call(eventHandlers, attachment, message);
    };
    const handleSendMessage = async (newMessage) => {
      var _a;
      const messageWithReply = {
        ...newMessage,
        replyToId:
          (replyTo == null ? void 0 : replyTo.id) || newMessage.replyToId,
      };
      setReplyTo(null);
      await ((_a = eventHandlers.onSendMessage) == null
        ? void 0
        : _a.call(eventHandlers, messageWithReply));
    };
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
      ref,
      className: cn(
        "flex h-full flex-col",
        "bg-white dark:bg-neutral-900",
        className
      ),
      children: [
        showHeader &&
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ConversationHeader, {
            conversation,
            participant,
            showBackButton,
            onBack,
            actions: headerActions,
          }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(DragDropZone, {
          onFilesDropped: () => {
            onError == null
              ? void 0
              : onError("Drop files on the composer to attach them");
          },
          disabled: !showAttachmentPicker,
          className: "flex-1 overflow-hidden",
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(MessageList, {
            messages,
            currentUser,
            isLoading,
            hasMore,
            isLoadingMore,
            typingState,
            showAvatars,
            showSenderNames,
            groupByDate,
            onLoadMore: eventHandlers.onLoadMore,
            onRetryMessage: eventHandlers.onRetryMessage,
            onAttachmentClick: handleAttachmentClick,
            emptyState,
            formatTimestamp,
            className: "h-full",
          }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(MessageComposer, {
          onSend: handleSendMessage,
          onTypingStart: eventHandlers.onTypingStart,
          onTypingStop: eventHandlers.onTypingStop,
          placeholder,
          maxLength: maxMessageLength,
          showCharacterCount,
          isSending,
          showAttachmentPicker,
          showCameraButton,
          acceptedFileTypes,
          maxFileSize,
          maxAttachments,
          onError,
          replyTo,
          onCancelReply: () => setReplyTo(null),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(LightboxModal, {
          attachment: lightboxAttachment,
          onClose: () => setLightboxAttachment(null),
        }),
      ],
    });
  }
);
MessageThread.displayName = "MessageThread";
function MessagingSplitView({
  conversationList,
  messageThread,
  hasSelectedConversation = false,
  listWidth = 320,
  mobileBreakpoint = "md",
  className,
}) {
  const breakpointClasses = {
    sm: "sm:flex",
    md: "md:flex",
    lg: "lg:flex",
  };
  const hideMobileClasses = {
    sm: hasSelectedConversation ? "hidden sm:block" : "block sm:block",
    md: hasSelectedConversation ? "hidden md:block" : "block md:block",
    lg: hasSelectedConversation ? "hidden lg:block" : "block lg:block",
  };
  const showMobileClasses = {
    sm: hasSelectedConversation ? "block sm:block" : "hidden sm:block",
    md: hasSelectedConversation ? "block md:block" : "hidden md:block",
    lg: hasSelectedConversation ? "block lg:block" : "hidden lg:block",
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: cn(
      "h-full w-full",
      breakpointClasses[mobileBreakpoint],
      className
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
        className: cn(
          "h-full w-full flex-shrink-0",
          "border-r border-neutral-200 dark:border-neutral-700",
          hideMobileClasses[mobileBreakpoint]
        ),
        style: {
          width: typeof listWidth === "number" ? `${listWidth}px` : listWidth,
        },
        children: conversationList,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
        className: cn(
          "h-full min-w-0 flex-1",
          showMobileClasses[mobileBreakpoint]
        ),
        children: messageThread,
      }),
    ],
  });
}
MessagingSplitView.displayName = "MessagingSplitView";
var CARD_BRAND_ICONS = {
  visa: "cc-visa",
  mastercard: "cc-mastercard",
  amex: "cc-amex",
  discover: "cc-discover",
  diners: "cc-diners-club",
  jcb: "cc-jcb",
  unionpay: "credit-card",
  default: "credit-card",
};
function getCardBrandIcon(brand) {
  return CARD_BRAND_ICONS[brand.toLowerCase()] || CARD_BRAND_ICONS.default;
}
function PaymentMethodCard({
  card,
  selectable = false,
  selected = false,
  onSelect,
  onDelete,
  showDelete = false,
  disabled = false,
  className,
}) {
  const handleSelect = () => {
    if (!disabled && selectable && onSelect) {
      onSelect(card.id);
    }
  };
  const handleDelete = (e) => {
    e.stopPropagation();
    if (!disabled && onDelete) {
      onDelete(card.id);
    }
  };
  const expMonth = String(card.expMonth).padStart(2, "0");
  const expYear = String(card.expYear).slice(-2);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: cn(
      "relative flex h-full flex-col justify-between rounded-xl border p-4",
      card.isDefault || selected
        ? "border-brand-500 bg-brand-50 dark:border-brand-400 dark:bg-brand-900/20"
        : "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800",
      selectable && !disabled && "hover:border-brand-400 cursor-pointer",
      disabled && "cursor-not-allowed opacity-50",
      className
    ),
    onClick: handleSelect,
    role: selectable ? "button" : void 0,
    tabIndex: selectable ? 0 : void 0,
    onKeyDown: selectable
      ? (e) => {
          if (e.key === "Enter" || e.key === " ") handleSelect();
        }
      : void 0,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className:
          "flex items-center justify-between border-b border-gray-200 pb-2 dark:border-gray-700",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("i", {
                className: cn(
                  "fab",
                  `fa-${getCardBrandIcon(card.brand)}`,
                  "text-lg"
                ),
                "aria-hidden": "true",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                className:
                  "text-xs font-medium text-gray-600 uppercase dark:text-gray-400",
                children: "Credit Card",
              }),
            ],
          }),
          (card.isDefault || selected) &&
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
              className:
                "text-brand-600 dark:text-brand-400 text-xs font-medium",
              children: "Default",
            }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className: "mt-3 flex items-center justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
            className: "font-mono text-sm text-gray-900 dark:text-gray-100",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                className: "hidden lg:inline",
                children: "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 ",
              }),
              "\u2022\u2022\u2022\u2022 ",
              card.last4,
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
            className: "text-sm text-gray-600 dark:text-gray-400",
            children: [expMonth, "/", expYear],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className:
          "mt-3 flex items-center justify-between border-t border-gray-200 pt-2 dark:border-gray-700",
        children: [
          selectable && !card.isDefault && !selected
            ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("label", {
                className: "flex cursor-pointer items-center gap-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", {
                    type: "radio",
                    name: "default_payment",
                    value: card.id,
                    checked: selected,
                    onChange: handleSelect,
                    disabled,
                    className: "text-brand-600 focus:ring-brand-500",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                    className: "text-xs text-gray-600 dark:text-gray-400",
                    children: "Set as default",
                  }),
                ],
              })
            : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {}),
          showDelete &&
            onDelete &&
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", {
              type: "button",
              onClick: handleDelete,
              disabled,
              className: cn(
                "rounded p-1 text-red-500 transition-colors hover:bg-red-50 hover:text-red-600",
                "dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:text-red-300",
                "disabled:cursor-not-allowed disabled:opacity-50"
              ),
              "aria-label": `Delete card ending in ${card.last4}`,
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                TrashIcon2,
                { className: "h-4 w-4" }
              ),
            }),
        ],
      }),
    ],
  });
}
PaymentMethodCard.displayName = "PaymentMethodCard";
function PaymentMethodBank({
  account,
  selectable = false,
  selected = false,
  onSelect,
  onDelete,
  showDelete = false,
  disabled = false,
  className,
}) {
  const handleSelect = () => {
    if (!disabled && selectable && onSelect) {
      onSelect(account.id);
    }
  };
  const handleDelete = (e) => {
    e.stopPropagation();
    if (!disabled && onDelete) {
      onDelete(account.id);
    }
  };
  const isNew = account.status === "new";
  const isError =
    account.status === "errored" || account.status === "verification_failed";
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: cn(
      "relative flex h-full flex-col justify-between rounded-xl border p-4",
      isNew &&
        "border-yellow-400 bg-yellow-50 dark:border-yellow-600 dark:bg-yellow-900/20",
      isError &&
        "border-red-400 bg-red-50 dark:border-red-600 dark:bg-red-900/20",
      !isNew &&
        !isError &&
        (account.isDefault || selected
          ? "border-brand-500 bg-brand-50 dark:border-brand-400 dark:bg-brand-900/20"
          : "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"),
      selectable && !disabled && "hover:border-brand-400 cursor-pointer",
      disabled && "cursor-not-allowed opacity-50",
      className
    ),
    onClick: handleSelect,
    role: selectable ? "button" : void 0,
    tabIndex: selectable ? 0 : void 0,
    onKeyDown: selectable
      ? (e) => {
          if (e.key === "Enter" || e.key === " ") handleSelect();
        }
      : void 0,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className:
          "flex items-center justify-between border-b border-gray-200 pb-2 dark:border-gray-700",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(BankIcon, {
                className: "h-5 w-5 text-gray-600 dark:text-gray-400",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                className:
                  "text-xs font-medium text-gray-600 uppercase dark:text-gray-400",
                children: "ACH",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [
              isNew &&
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                  className:
                    "text-xs font-medium text-yellow-600 dark:text-yellow-400",
                  children: "Pending Verification",
                }),
              isError &&
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                  className:
                    "text-xs font-medium text-red-600 dark:text-red-400",
                  children: "Verification Failed",
                }),
              !isNew &&
                !isError &&
                (account.isDefault || selected) &&
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                  className:
                    "text-brand-600 dark:text-brand-400 text-xs font-medium",
                  children: "Default",
                }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className: "mt-3 space-y-1",
        children: [
          account.bankName &&
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
              className: "text-sm font-medium text-gray-900 dark:text-gray-100",
              children: account.bankName,
            }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
            className: "font-mono text-sm text-gray-600 dark:text-gray-400",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                className: "hidden lg:inline",
                children: "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 ",
              }),
              "\u2022\u2022\u2022\u2022",
              " ",
              account.last4,
            ],
          }),
          account.accountType &&
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
              className: "text-xs text-gray-500 capitalize dark:text-gray-500",
              children: account.accountType,
            }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className:
          "mt-3 flex items-center justify-between border-t border-gray-200 pt-2 dark:border-gray-700",
        children: [
          selectable && !account.isDefault && !selected
            ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("label", {
                className: "flex cursor-pointer items-center gap-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", {
                    type: "radio",
                    name: "default_payment",
                    value: account.id,
                    checked: selected,
                    onChange: handleSelect,
                    disabled,
                    className: "text-brand-600 focus:ring-brand-500",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                    className: "text-xs text-gray-600 dark:text-gray-400",
                    children: "Set as default",
                  }),
                ],
              })
            : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {}),
          showDelete &&
            onDelete &&
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", {
              type: "button",
              onClick: handleDelete,
              disabled,
              className: cn(
                "rounded p-1 text-red-500 transition-colors hover:bg-red-50 hover:text-red-600",
                "dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:text-red-300",
                "disabled:cursor-not-allowed disabled:opacity-50"
              ),
              "aria-label": `Delete account ending in ${account.last4}`,
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                TrashIcon2,
                { className: "h-4 w-4" }
              ),
            }),
        ],
      }),
    ],
  });
}
PaymentMethodBank.displayName = "PaymentMethodBank";
function PaymentMethodList({
  methods,
  selectedId,
  onSelect,
  onDelete,
  showDelete = false,
  disabled = false,
  emptyMessage = "No payment methods found. Add a credit card or bank account to get started.",
  className,
}) {
  if (methods.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
      className: cn(
        "rounded-lg border border-yellow-300 bg-yellow-50 p-4",
        "dark:border-yellow-700 dark:bg-yellow-900/20",
        className
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className: "flex items-start gap-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(WarningIcon, {
            className:
              "h-5 w-5 flex-shrink-0 text-yellow-600 dark:text-yellow-400",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h4", {
                className: "font-medium text-yellow-800 dark:text-yellow-200",
                children: "No Payment Methods",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", {
                className: "mt-1 text-sm text-yellow-700 dark:text-yellow-300",
                children: emptyMessage,
              }),
            ],
          }),
        ],
      }),
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
    className: cn("grid gap-4 md:grid-cols-2", className),
    children: methods.map((method) =>
      method.type === "card"
        ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            PaymentMethodCard,
            {
              card: method.data,
              selectable: !!onSelect,
              selected: selectedId === method.data.id,
              onSelect,
              onDelete,
              showDelete,
              disabled,
            },
            method.data.id
          )
        : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            PaymentMethodBank,
            {
              account: method.data,
              selectable: !!onSelect,
              selected: selectedId === method.data.id,
              onSelect,
              onDelete,
              showDelete,
              disabled,
            },
            method.data.id
          )
    ),
  });
}
PaymentMethodList.displayName = "PaymentMethodList";
function BankIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.5,
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z",
    }),
  });
}
function TrashIcon2({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.5,
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0",
    }),
  });
}
function WarningIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.5,
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
    }),
  });
}
var providerCardVariants = cva(
  [
    "group relative flex w-full overflow-hidden rounded-xl",
    "bg-card text-card-foreground",
    "border border-border",
    "shadow-card",
    "transition-all duration-200",
    "hover:shadow-md hover:border-primary-200 dark:hover:border-primary-800",
  ],
  {
    variants: {
      variant: {
        compact: "flex-col",
        list: "flex-row items-stretch min-h-[120px]",
        featured: "flex-col p-6",
      },
      interactive: {
        true: "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
        false: "",
      },
    },
    defaultVariants: {
      variant: "compact",
      interactive: true,
    },
  }
);
var logoContainerVariants = cva(
  "flex items-center justify-center bg-muted overflow-hidden shrink-0",
  {
    variants: {
      variant: {
        compact: "h-20 w-full",
        list: "w-28 h-full",
        featured: "h-32 w-full rounded-lg mb-4",
      },
    },
    defaultVariants: {
      variant: "compact",
    },
  }
);
var ProviderLogo = ({ logoURL, name, variant }) => {
  const [hasError, setHasError] = React46.useState(false);
  if (!logoURL || hasError) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
      className: cn(logoContainerVariants({ variant })),
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
        className:
          "bg-primary-100 dark:bg-primary-900 flex h-12 w-12 items-center justify-center rounded-full",
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
          className: "text-primary-600 dark:text-primary-400 text-lg font-bold",
          children: name.charAt(0).toUpperCase(),
        }),
      }),
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
    className: cn(logoContainerVariants({ variant })),
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("img", {
      src: logoURL,
      alt: `${name}'s logo`,
      className: "h-full w-full object-contain p-2",
      onError: () => setHasError(true),
      loading: "lazy",
    }),
  });
};
var DistanceBadge = ({ distance }) => {
  if (distance === void 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", {
    className: "text-muted-foreground inline-flex items-center gap-1 text-xs",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("svg", {
        className: "h-3 w-3",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
          }),
        ],
      }),
      distance.toFixed(1),
      "mi",
    ],
  });
};
var SafeFromWildfiresNotice = () =>
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Tooltip, {
    content:
      "BlueHive has confirmed that this provider is operational and not impacted by the January 2025 wildfires.",
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
      className:
        "bg-success/10 text-success inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
          className: "h-4 w-4",
          fill: "currentColor",
          viewBox: "0 0 20 20",
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
            clipRule: "evenodd",
          }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
          children: "Operational",
        }),
      ],
    }),
  });
var VerifiedBadge = () =>
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Tooltip, {
    content: "This provider's information has been verified",
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", {
      className: "text-success inline-flex items-center gap-1 text-xs",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
          className: "h-3.5 w-3.5",
          fill: "currentColor",
          viewBox: "0 0 20 20",
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
            clipRule: "evenodd",
          }),
        }),
        "Verified",
      ],
    }),
  });
function formatPhoneNumber3(phone) {
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  if (cleaned.length === 11 && cleaned.startsWith("1")) {
    return `(${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }
  return phone;
}
function formatAddressSingleLine2(address) {
  const parts = [address.street1];
  if (address.street2) parts.push(address.street2);
  parts.push(`${address.city}, ${address.state} ${address.postalCode}`);
  return parts.join(", ");
}
var ProviderCard = React46.forwardRef(
  (
    {
      provider,
      variant = "compact",
      interactive = true,
      onClick,
      onPhoneClick,
      showServices = false,
      maxServices = 3,
      renderActions,
      className,
      ...props
    },
    ref
  ) => {
    var _a;
    const handleClick = (e) => {
      if (e.target.closest("[data-phone-link]")) {
        return;
      }
      onClick == null ? void 0 : onClick(provider);
    };
    const handleKeyDown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick == null ? void 0 : onClick(provider);
      }
    };
    const handlePhoneClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (provider.workNumber) {
        onPhoneClick == null
          ? void 0
          : onPhoneClick(provider.workNumber, provider);
      }
    };
    const displayServices =
      showServices &&
      ((_a = provider.services) == null ? void 0 : _a.slice(0, maxServices));
    const remainingServices =
      showServices && provider.services
        ? Math.max(0, provider.services.length - maxServices)
        : 0;
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
      ref,
      className: cn(providerCardVariants({ variant, interactive }), className),
      onClick: interactive ? handleClick : void 0,
      onKeyDown: interactive ? handleKeyDown : void 0,
      tabIndex: interactive ? 0 : void 0,
      role: interactive ? "button" : void 0,
      "aria-label": `View ${provider.name}`,
      "data-testid": "provider-card",
      ...props,
      children: [
        (variant === "compact" || variant === "featured") &&
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ProviderLogo, {
            logoURL: provider.logoURL,
            name: provider.name,
            variant,
          }),
        variant === "list" &&
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ProviderLogo, {
            logoURL: provider.logoURL,
            name: provider.name,
            variant,
          }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
          className: cn(
            "flex flex-1 flex-col",
            variant === "compact" && "p-4",
            variant === "list" && "p-4",
            variant === "featured" && ""
          ),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
              className: "mb-1 flex items-start justify-between gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", {
                  className: cn(
                    "text-primary-600 dark:text-primary-400 line-clamp-2 font-semibold",
                    "group-hover:text-primary-700 dark:group-hover:text-primary-300",
                    "transition-colors",
                    variant === "featured" ? "text-lg" : "text-sm"
                  ),
                  children: provider.name,
                }),
                provider.verified &&
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                    VerifiedBadge,
                    {}
                  ),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", {
              className: cn(
                "text-muted-foreground",
                variant === "featured" ? "text-sm" : "text-xs"
              ),
              children:
                variant === "list"
                  ? formatAddressSingleLine2(provider.address)
                  : /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                      import_jsx_runtime10.Fragment,
                      {
                        children: [
                          provider.address.street1,
                          provider.address.street2 &&
                            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                              import_jsx_runtime10.Fragment,
                              {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                    "br",
                                    {}
                                  ),
                                  provider.address.street2,
                                ],
                              }
                            ),
                          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                            "br",
                            {}
                          ),
                          provider.address.city,
                          ", ",
                          provider.address.state,
                          " ",
                          provider.address.postalCode,
                        ],
                      }
                    ),
            }),
            provider.workNumber &&
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", {
                href: `tel:${provider.workNumber}`,
                "data-phone-link": true,
                onClick: handlePhoneClick,
                className: cn(
                  "text-primary-600 hover:text-primary-700 mt-1",
                  "dark:text-primary-400 dark:hover:text-primary-300",
                  "hover:underline",
                  variant === "featured" ? "text-sm" : "text-xs"
                ),
                children: formatPhoneNumber3(provider.workNumber),
              }),
            displayServices &&
              displayServices.length > 0 &&
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
                className: "mt-3 flex flex-wrap gap-1.5",
                children: [
                  displayServices.map((service) =>
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      Badge,
                      {
                        variant: "default",
                        size: "sm",
                        className: "text-xs capitalize",
                        children: service.name,
                      },
                      service._id
                    )
                  ),
                  remainingServices > 0 &&
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Badge, {
                      variant: "secondary",
                      size: "sm",
                      className: "text-xs",
                      children: ["+", remainingServices, " more"],
                    }),
                ],
              }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
              className: "flex-1",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
              className: "mt-3 flex items-center justify-between",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    provider.safeFromWildfires &&
                      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                        SafeFromWildfiresNotice,
                        {}
                      ),
                    !provider.safeFromWildfires &&
                      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                        DistanceBadge,
                        { distance: provider.distance }
                      ),
                  ],
                }),
                renderActions == null ? void 0 : renderActions(provider),
              ],
            }),
          ],
        }),
      ],
    });
  }
);
ProviderCard.displayName = "ProviderCard";
var ProviderCardSkeleton = ({ variant = "compact" }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: cn(
      "border-border bg-card animate-pulse rounded-xl border",
      variant === "compact" && "flex flex-col",
      variant === "list" && "flex min-h-[120px] flex-row",
      variant === "featured" && "flex flex-col p-6"
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
        className: cn(
          "bg-muted",
          variant === "compact" && "h-20 w-full",
          variant === "list" && "h-full w-28",
          variant === "featured" && "mb-4 h-32 w-full rounded-lg"
        ),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className: cn(
          "flex flex-1 flex-col gap-2",
          variant !== "featured" && "p-4"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
            className: "bg-muted h-4 w-3/4 rounded",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
            className: "bg-muted h-3 w-full rounded",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
            className: "bg-muted h-3 w-2/3 rounded",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
            className: "bg-muted h-3 w-1/3 rounded",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
            className: "flex-1",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
            className: "flex justify-between",
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
              className: "bg-muted h-4 w-16 rounded",
            }),
          }),
        ],
      }),
    ],
  });
};
ProviderCardSkeleton.displayName = "ProviderCardSkeleton";
var actionButtonVariants = cva(
  "flex flex-col items-center justify-center gap-1 py-3 px-2 text-sm font-normal transition-colors",
  {
    variants: {
      variant: {
        default:
          "text-gray-600 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-primary-400 dark:hover:bg-gray-800",
        active:
          "text-primary-600 bg-primary-50 dark:text-primary-400 dark:bg-primary-900/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
var bookButtonVariants = cva(
  "inline-flex items-center gap-2 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      variant: {
        primary:
          "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
        outline:
          "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/20",
      },
    },
    defaultVariants: {
      size: "lg",
      variant: "primary",
    },
  }
);
var headerVariants2 = cva("bg-white dark:bg-gray-900", {
  variants: {
    variant: {
      default: "shadow-sm",
      flat: "",
      elevated: "shadow-md",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
var searchBarVariants = cva("", {
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
    },
    variant: {
      default: "",
      hero: "",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});
var CrosshairsIcon = ({ className }) =>
  /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("svg", {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("circle", {
        cx: "12",
        cy: "12",
        r: "10",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("circle", {
        cx: "12",
        cy: "12",
        r: "3",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("line", {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "6",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("line", {
        x1: "12",
        y1: "18",
        x2: "12",
        y2: "22",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("line", {
        x1: "2",
        y1: "12",
        x2: "6",
        y2: "12",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("line", {
        x1: "18",
        y1: "12",
        x2: "22",
        y2: "12",
      }),
    ],
  });
var SearchIcon3 = ({ className }) =>
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2,
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    }),
  });
var SpinnerIcon4 = ({ className }) =>
  /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("svg", {
    className: cn("animate-spin", className),
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("circle", {
        className: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "4",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
        className: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
      }),
    ],
  });
var CheckIcon3 = ({ className }) =>
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2,
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M5 13l4 4L19 7",
    }),
  });
var WarningIcon2 = ({ className }) =>
  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2,
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    }),
  });
var GeolocationButton = ({ status, onClick, disabled }) => {
  const getIcon = () => {
    switch (status) {
      case "loading":
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SpinnerIcon4, {
          className: "h-4 w-4",
        });
      case "success":
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(CheckIcon3, {
          className: "text-success animate-in zoom-in h-4 w-4",
        });
      case "error":
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(WarningIcon2, {
          className: "text-destructive h-4 w-4",
        });
      default:
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(CrosshairsIcon, {
          className: "h-4 w-4",
        });
    }
  };
  const getTooltip = () => {
    switch (status) {
      case "loading":
        return "Finding your location...";
      case "success":
        return "Location found!";
      case "error":
        return "Unable to get location. Please enter your ZIP code.";
      default:
        return "Click to automatically find your location";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Tooltip, {
    content: getTooltip(),
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, {
      type: "button",
      variant: "ghost",
      size: "icon",
      onClick,
      disabled: disabled || status === "loading",
      className: cn(
        "h-10 w-10 shrink-0",
        status === "success" && "text-success",
        status === "error" && "text-destructive"
      ),
      "aria-label": "Find my location",
      children: getIcon(),
    }),
  });
};
var SearchResultsMessage = ({
  results,
  loading,
  onResultsClick,
  className,
}) => {
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
      className: cn("text-muted-foreground animate-pulse text-sm", className),
      children: "Searching for providers near you...",
    });
  }
  if (!results) return null;
  if (results.count === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
      className: cn("text-muted-foreground text-sm", className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("strong", {
          children: "No providers found",
        }),
        " for ZIP code",
        " ",
        results.postalCode.zipcode,
      ],
    });
  }
  const handleClick = () => {
    onResultsClick == null ? void 0 : onResultsClick();
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onResultsClick == null ? void 0 : onResultsClick();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: cn(
      "cursor-pointer text-sm hover:underline",
      "text-primary-foreground/90 dark:text-primary-foreground",
      className
    ),
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    role: "button",
    tabIndex: 0,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("strong", {
        children: results.count.toLocaleString(),
      }),
      " results in",
      " ",
      results.postalCode.city,
      ", ",
      results.postalCode.state,
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("small", {
        children: [
          "Near ",
          results.postalCode.streetName || results.postalCode.zipcode,
          " ",
          "(within ",
          results.distance,
          " miles) - Click to view",
        ],
      }),
    ],
  });
};
var ProviderSearchBar = React46.forwardRef(
  (
    {
      onSearch,
      onGeolocate,
      geoStatus = "idle",
      providerCount,
      results,
      resultsLoading,
      onResultsClick,
      defaultValue,
      value,
      onValueChange,
      placeholder,
      loading,
      error,
      showResults = true,
      size,
      variant,
      className,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React46.useState(
      defaultValue || ""
    );
    const [validationError, setValidationError] = React46.useState(null);
    const zipValue = value ?? internalValue;
    const handleChange = (e) => {
      const newValue = e.target.value;
      setValidationError(null);
      if (onValueChange) {
        onValueChange(newValue);
      } else {
        setInternalValue(newValue);
      }
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!zipValue) {
        setValidationError("Please enter a ZIP code");
        return;
      }
      const cleanZip = zipValue.replace(/\D/g, "");
      if (cleanZip.length !== 5) {
        setValidationError("Please enter a valid 5-digit ZIP code");
        return;
      }
      setValidationError(null);
      onSearch(cleanZip);
    };
    const handleGeolocate = () => {
      onGeolocate == null ? void 0 : onGeolocate();
    };
    const placeholderText =
      placeholder ||
      (providerCount
        ? `Search our ${providerCount.toLocaleString()} providers by ZIP`
        : "Search providers by ZIP code");
    const displayError = error || validationError;
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
      className: cn("w-full", searchBarVariants({ size, variant }), className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("form", {
          ref,
          onSubmit: handleSubmit,
          className: "w-full",
          role: "search",
          "aria-label": "Provider search",
          ...props,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
              className: cn(
                "bg-background flex items-center gap-1 rounded-lg border",
                "focus-within:ring-primary-500 focus-within:ring-2 focus-within:ring-offset-2",
                displayError && "border-destructive",
                !displayError && "border-input"
              ),
              children: [
                onGeolocate &&
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                    GeolocationButton,
                    {
                      status: geoStatus,
                      onClick: handleGeolocate,
                      disabled: loading,
                    }
                  ),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                  className: "min-w-0 flex-1",
                  children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                    Input,
                    {
                      type: "text",
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                      maxLength: 5,
                      value: zipValue,
                      onChange: handleChange,
                      placeholder: placeholderText,
                      disabled: loading,
                      "aria-label": "ZIP code",
                      "aria-invalid": !!displayError,
                      "aria-describedby": displayError
                        ? "search-error"
                        : void 0,
                      className: cn(
                        "border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0",
                        "w-full",
                        onGeolocate ? "pl-0" : "pl-3"
                      ),
                    }
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, {
                  type: "submit",
                  variant: "ghost",
                  size: "icon",
                  disabled: loading,
                  className: "h-10 w-10 shrink-0",
                  "aria-label": "Search",
                  children: loading
                    ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                        SpinnerIcon4,
                        { className: "h-4 w-4" }
                      )
                    : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                        SearchIcon3,
                        { className: "h-4 w-4" }
                      ),
                }),
              ],
            }),
            displayError &&
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", {
                id: "search-error",
                className: "text-destructive mt-2 text-sm",
                role: "alert",
                children: displayError,
              }),
          ],
        }),
        showResults &&
          (results || resultsLoading) &&
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
            className: "mt-3",
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              SearchResultsMessage,
              {
                results,
                loading: resultsLoading,
                onResultsClick,
              }
            ),
          }),
      ],
    });
  }
);
ProviderSearchBar.displayName = "ProviderSearchBar";
var HeroSearchBar = ({ title, subtitle, className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: cn("text-center", className),
    children: [
      title &&
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h1", {
          className:
            "text-foreground mb-2 text-3xl font-bold md:text-4xl lg:text-5xl",
          children: title,
        }),
      subtitle &&
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", {
          className: "text-muted-foreground mb-6 text-lg md:text-xl",
          children: subtitle,
        }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
        className: "mx-auto max-w-xl",
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          ProviderSearchBar,
          { ...props, variant: "hero" }
        ),
      }),
    ],
  });
};
HeroSearchBar.displayName = "HeroSearchBar";
var containerVariants2 = cva("provider-search-filters", {
  variants: {
    layout: {
      horizontal: "flex flex-wrap items-end gap-3",
      vertical: "flex flex-col gap-3",
      compact: "flex flex-wrap items-center gap-2",
    },
  },
  defaultVariants: {
    layout: "horizontal",
  },
});
var inputVariants3 = cva(
  [
    "flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm",
    "placeholder:text-neutral-500",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-400",
  ],
  {
    variants: {
      hasIcon: {
        true: "pl-10",
        false: "",
      },
    },
    defaultVariants: {
      hasIcon: false,
    },
  }
);
var selectVariants = cva([
  "flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
  "disabled:cursor-not-allowed disabled:opacity-50",
  "dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100",
  "appearance-none bg-no-repeat bg-right pr-8",
  'bg-[url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e")]',
  "bg-[length:1.5em_1.5em]",
  "bg-[right_0.5rem_center]",
]);
var labelVariants = cva([
  "text-sm font-medium text-neutral-700 dark:text-neutral-300",
  "mb-1.5 block",
]);
var fieldGroupVariants = cva("flex-1 min-w-[150px]", {
  variants: {
    size: {
      sm: "min-w-[100px] max-w-[150px]",
      md: "min-w-[150px] max-w-[200px]",
      lg: "min-w-[200px] max-w-[300px]",
      full: "min-w-[200px] flex-grow",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
var accordionVariants = cva(
  "service-accordion divide-y divide-neutral-200 dark:divide-neutral-700",
  {
    variants: {
      variant: {
        default: "",
        bordered:
          "border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden",
        cards: "space-y-3",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
var categoryHeaderVariants = cva(
  [
    "w-full flex items-center justify-between py-4 px-4 text-left",
    "transition-colors",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
  ],
  {
    variants: {
      variant: {
        default: "hover:bg-neutral-50 dark:hover:bg-neutral-800/50",
        bordered: "hover:bg-neutral-50 dark:hover:bg-neutral-800/50",
        cards:
          "bg-white dark:bg-neutral-800 rounded-lg shadow-sm hover:shadow-md border border-neutral-200 dark:border-neutral-700",
      },
      isExpanded: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "cards",
        isExpanded: true,
        className: "rounded-b-none",
      },
    ],
    defaultVariants: {
      variant: "default",
      isExpanded: false,
    },
  }
);
var serviceLinkVariants = cva(
  [
    "flex items-center gap-2 py-2 px-3 rounded-md",
    "text-neutral-700 dark:text-neutral-300",
    "hover:bg-neutral-100 dark:hover:bg-neutral-700/50 hover:text-primary-600 dark:hover:text-primary-400",
    "transition-colors",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
  ],
  {
    variants: {
      size: {
        sm: "text-sm py-1.5",
        md: "text-base py-2",
        lg: "text-lg py-2.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
var serviceBadgeVariants = cva(
  "inline-flex items-center font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400",
        secondary:
          "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
        success:
          "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
        warning:
          "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
        danger: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
        info: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
        outline:
          "border border-gray-300 text-gray-700 bg-transparent dark:border-gray-600 dark:text-gray-300",
        ghost:
          "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
      },
      size: {
        xs: "text-xs px-1.5 py-0.5 rounded",
        sm: "text-xs px-2 py-1 rounded-md",
        md: "text-sm px-2.5 py-1.5 rounded-md",
        lg: "text-sm px-3 py-2 rounded-lg",
        xl: "text-base px-4 py-2.5 rounded-lg",
      },
      interactive: {
        true: "cursor-pointer hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-1",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        interactive: true,
        className:
          "hover:bg-primary-200 dark:hover:bg-primary-900/50 focus:ring-primary-500",
      },
      {
        variant: "secondary",
        interactive: true,
        className:
          "hover:bg-gray-200 dark:hover:bg-gray-700 focus:ring-gray-500",
      },
      {
        variant: "success",
        interactive: true,
        className:
          "hover:bg-green-200 dark:hover:bg-green-900/50 focus:ring-green-500",
      },
      {
        variant: "warning",
        interactive: true,
        className:
          "hover:bg-yellow-200 dark:hover:bg-yellow-900/50 focus:ring-yellow-500",
      },
      {
        variant: "danger",
        interactive: true,
        className:
          "hover:bg-red-200 dark:hover:bg-red-900/50 focus:ring-red-500",
      },
      {
        variant: "info",
        interactive: true,
        className:
          "hover:bg-blue-200 dark:hover:bg-blue-900/50 focus:ring-blue-500",
      },
      {
        variant: "outline",
        interactive: true,
        className:
          "hover:bg-gray-50 dark:hover:bg-gray-800 focus:ring-gray-500",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      interactive: false,
    },
  }
);
function filterServices(groups, query) {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return groups;
  const filtered = [];
  for (const group of groups) {
    const filteredServices = group.services.filter((service) => {
      var _a, _b;
      return (
        service.name.toLowerCase().includes(normalizedQuery) ||
        ((_a = service.code) == null
          ? void 0
          : _a.toLowerCase().includes(normalizedQuery)) ||
        ((_b = service.description) == null
          ? void 0
          : _b.toLowerCase().includes(normalizedQuery))
      );
    });
    const filteredSubGroups = group.subGroups
      ? filterServices(group.subGroups, query)
      : void 0;
    const hasMatches =
      filteredServices.length > 0 ||
      (filteredSubGroups && filteredSubGroups.length > 0);
    if (hasMatches) {
      filtered.push({
        ...group,
        services: filteredServices,
        subGroups:
          filteredSubGroups == null
            ? void 0
            : filteredSubGroups.filter(
                (sg) =>
                  sg.services.length > 0 ||
                  (sg.subGroups && sg.subGroups.length > 0)
              ),
      });
    }
  }
  return filtered;
}
function flattenServices(groups) {
  const services = [];
  const traverse = (group) => {
    var _a;
    services.push(...group.services);
    (_a = group.subGroups) == null ? void 0 : _a.forEach(traverse);
  };
  groups.forEach(traverse);
  return services;
}
function ServicePicker({
  groups,
  selectedIds,
  onSelectionChange,
  showSearch = true,
  searchPlaceholder = "Search by service name, code, category, etc.",
  multiple = true,
  loading = false,
  error,
  emptyMessage = "No Available Services",
  heading = "Available Services",
  hideHeading = false,
  fullWidth = false,
  className,
}) {
  const [searchQuery, setSearchQuery] = React46.useState("");
  const [expandedGroups, setExpandedGroups] = React46.useState(
    /* @__PURE__ */ new Set()
  );
  const filteredGroups = React46.useMemo(
    () => filterServices(groups, searchQuery),
    [groups, searchQuery]
  );
  const searchResults = React46.useMemo(
    () => (searchQuery ? flattenServices(filteredGroups) : []),
    [filteredGroups, searchQuery]
  );
  const isSearching = searchQuery.length > 0;
  const handleServiceToggle = (serviceId) => {
    if (multiple) {
      if (selectedIds.includes(serviceId)) {
        onSelectionChange(selectedIds.filter((id) => id !== serviceId));
      } else {
        onSelectionChange([...selectedIds, serviceId]);
      }
    } else {
      onSelectionChange([serviceId]);
    }
  };
  const toggleGroup = (groupId) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(groupId)) {
        next.delete(groupId);
      } else {
        next.add(groupId);
      }
      return next;
    });
  };
  const hasSelectedInGroup = (group) => {
    var _a;
    const hasDirectSelection = group.services.some((s) =>
      selectedIds.includes(s.id)
    );
    const hasSubSelection =
      ((_a = group.subGroups) == null ? void 0 : _a.some(hasSelectedInGroup)) ??
      false;
    return hasDirectSelection || hasSubSelection;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
    className: cn("flex flex-col", !fullWidth && "lg:max-w-md", className),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className: "p-3",
        children: [
          !hideHeading &&
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", {
              className:
                "mb-3 text-xl font-bold text-gray-900 dark:text-gray-100",
              children: heading,
            }),
          showSearch &&
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
              className: "relative",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                  className:
                    "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                  children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                    SearchIcon5,
                    { className: "h-5 w-5 text-gray-400" }
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Input, {
                  type: "search",
                  value: searchQuery,
                  onChange: (e) => setSearchQuery(e.target.value),
                  placeholder: searchPlaceholder,
                  className: "pl-10",
                  "data-cy": "input-search-services",
                }),
              ],
            }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
        className: "flex-1 overflow-y-auto p-3",
        children: [
          error &&
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
              className:
                "mb-4 rounded-lg bg-red-50 p-4 text-red-700 dark:bg-red-900/20 dark:text-red-400",
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                "strong",
                { children: error }
              ),
            }),
          loading
            ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
                className: "flex items-center gap-2 text-gray-500",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SpinnerIcon5, {
                    className: "h-5 w-5 animate-spin",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                    children: "Loading available services...",
                  }),
                ],
              })
            : isSearching
              ? // Search results - flat list
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("ul", {
                  className: "space-y-1",
                  children:
                    searchResults.length > 0
                      ? searchResults.map((service) =>
                          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                            ServiceItem,
                            {
                              service,
                              selected: selectedIds.includes(service.id),
                              onToggle: () => handleServiceToggle(service.id),
                              multiple,
                            },
                            service.id
                          )
                        )
                      : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("li", {
                          children: /* @__PURE__ */ (0,
                          import_jsx_runtime10.jsx)("div", {
                            className:
                              "rounded-lg bg-yellow-50 p-4 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400",
                            children: /* @__PURE__ */ (0,
                            import_jsx_runtime10.jsx)("strong", {
                              children: emptyMessage,
                            }),
                          }),
                        }),
                })
              : // Grouped list - accordion style
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("ul", {
                  className: "space-y-1",
                  children:
                    filteredGroups.length > 0
                      ? filteredGroups.map((group) =>
                          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                            ServiceGroupItem,
                            {
                              group,
                              selectedIds,
                              expandedGroups,
                              onToggleGroup: toggleGroup,
                              onToggleService: handleServiceToggle,
                              hasSelectedInGroup,
                              multiple,
                            },
                            group.id
                          )
                        )
                      : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("li", {
                          children: /* @__PURE__ */ (0,
                          import_jsx_runtime10.jsx)("div", {
                            className:
                              "rounded-lg bg-yellow-50 p-4 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400",
                            children: /* @__PURE__ */ (0,
                            import_jsx_runtime10.jsx)("strong", {
                              children: emptyMessage,
                            }),
                          }),
                        }),
                }),
        ],
      }),
    ],
  });
}
ServicePicker.displayName = "ServicePicker";
function ServiceGroupItem({
  group,
  selectedIds,
  expandedGroups,
  onToggleGroup,
  onToggleService,
  hasSelectedInGroup,
  multiple,
  depth = 0,
}) {
  var _a;
  const isExpanded = expandedGroups.has(group.id);
  const hasSelection = hasSelectedInGroup(group);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("li", {
    className: "service-group",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("button", {
        type: "button",
        onClick: () => onToggleGroup(group.id),
        className: cn(
          "flex w-full items-center justify-between rounded-lg px-3 py-2",
          "text-left text-sm font-medium",
          "hover:bg-gray-100 dark:hover:bg-gray-800",
          "transition-colors",
          depth > 0 && "ml-4 text-gray-600 dark:text-gray-400"
        ),
        "aria-expanded": isExpanded,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", {
            className: "flex items-center gap-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                children: group.name,
              }),
              hasSelection &&
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                  className: "bg-brand-500 h-2 w-2 rounded-full",
                  "aria-label": "Has selected items",
                }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ChevronIcon2, {
            className: cn(
              "h-5 w-5 transition-transform",
              isExpanded && "rotate-180"
            ),
          }),
        ],
      }),
      isExpanded &&
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("ul", {
          className: "mt-1 space-y-1 pl-4",
          children: [
            group.services.map((service) =>
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                ServiceItem,
                {
                  service,
                  selected: selectedIds.includes(service.id),
                  onToggle: () => onToggleService(service.id),
                  multiple,
                },
                service.id
              )
            ),
            (_a = group.subGroups) == null
              ? void 0
              : _a.map((subGroup) =>
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                    ServiceGroupItem,
                    {
                      group: subGroup,
                      selectedIds,
                      expandedGroups,
                      onToggleGroup,
                      onToggleService,
                      hasSelectedInGroup,
                      multiple,
                      depth: depth + 1,
                    },
                    subGroup.id
                  )
                ),
          ],
        }),
    ],
  });
}
function ServiceItem({ service, selected, onToggle, multiple }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("li", {
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("label", {
      className: cn(
        "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2",
        "hover:bg-gray-100 dark:hover:bg-gray-800",
        "transition-colors",
        service.disabled && "cursor-not-allowed opacity-50"
      ),
      children: [
        multiple
          ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", {
              type: "checkbox",
              checked: selected,
              onChange: onToggle,
              disabled: service.disabled,
              className:
                "text-brand-600 focus:ring-brand-500 h-4 w-4 rounded border-gray-300",
            })
          : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", {
              type: "radio",
              checked: selected,
              onChange: onToggle,
              disabled: service.disabled,
              className:
                "text-brand-600 focus:ring-brand-500 h-4 w-4 border-gray-300",
            }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
          className: "min-w-0 flex-1",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", {
                  className:
                    "text-sm font-medium text-gray-900 dark:text-gray-100",
                  children: service.name,
                }),
                service.code &&
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", {
                    className: "text-xs text-gray-500 dark:text-gray-400",
                    children: ["(", service.code, ")"],
                  }),
              ],
            }),
            service.description &&
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", {
                className: "truncate text-xs text-gray-500 dark:text-gray-400",
                children: service.description,
              }),
          ],
        }),
        service.price !== void 0 &&
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", {
            className: "text-sm font-medium text-gray-700 dark:text-gray-300",
            children: ["$", service.price.toFixed(2)],
          }),
      ],
    }),
  });
}
function SearchIcon5({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2,
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
    }),
  });
}
function SpinnerIcon5({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("svg", {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("circle", {
        className: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "4",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
        className: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
      }),
    ],
  });
}
function ChevronIcon2({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2,
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M19 9l-7 7-7-7",
    }),
  });
}
var SidebarContext = (0, import_react8.createContext)(null);
var footerVariants = cva("", {
  variants: {
    variant: {
      default: "bg-gray-100 dark:bg-gray-900",
      dark: "bg-gray-900 dark:bg-gray-950",
      primary: "bg-primary-600 dark:bg-primary-800",
      white:
        "bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
var headerVariants3 = cva("fixed top-0 left-0 right-0 z-40 transition-colors", {
  variants: {
    variant: {
      primary: "bg-primary-600",
      white:
        "bg-white shadow-sm dark:bg-gray-900 dark:border-b dark:border-gray-800",
      transparent: "bg-transparent",
      glass: "bg-white/80 backdrop-blur-md shadow-sm dark:bg-gray-900/80",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
function TimelineProgress({
  steps,
  currentStep,
  showTimestamps = true,
  className,
}) {
  const visibleSteps = steps.filter((step) => !step.hidden);
  const currentIndex = visibleSteps.findIndex((s) => s.key === currentStep);
  const getStepState = (index) => {
    if (index < currentIndex) return "completed";
    if (index === currentIndex) return "current";
    return "pending";
  };
  const formatTimestamp = (date) => {
    const d = typeof date === "string" ? new Date(date) : date;
    return d.toLocaleDateString(void 0, { month: "short", day: "numeric" });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
    className: cn("flex items-start overflow-x-auto py-4", className),
    role: "progressbar",
    "aria-valuenow": currentIndex + 1,
    "aria-valuemin": 1,
    "aria-valuemax": visibleSteps.length,
    children: visibleSteps.map((step, index) => {
      const state = getStepState(index);
      const isLast = index === visibleSteps.length - 1;
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
        "div",
        {
          className: cn("flex flex-1 flex-col items-center", !isLast && "mr-2"),
          children: [
            showTimestamps &&
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                className: "mb-1 h-5 text-center text-xs text-gray-500",
                children: step.completedAt
                  ? formatTimestamp(step.completedAt)
                  : "\xA0",
              }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
              className: "flex w-full items-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                  className: cn(
                    "h-1 flex-1",
                    index === 0 ? "bg-transparent" : "",
                    state === "completed" || (state === "current" && index > 0)
                      ? "bg-brand-500"
                      : "bg-gray-200 dark:bg-gray-700"
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
                  className: cn(
                    "relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2",
                    state === "completed" &&
                      "border-brand-500 bg-brand-500 text-white",
                    state === "current" &&
                      "border-brand-500 bg-white dark:bg-gray-900",
                    state === "pending" &&
                      "border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-900"
                  ),
                  children: [
                    state === "completed" &&
                      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                        CheckIcon5,
                        { className: "h-3 w-3" }
                      ),
                    state === "current" &&
                      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                        className: "bg-brand-500 h-2 w-2 rounded-full",
                      }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                  className: cn(
                    "h-1 flex-1",
                    isLast ? "bg-transparent" : "",
                    state === "completed"
                      ? "bg-brand-500"
                      : "bg-gray-200 dark:bg-gray-700"
                  ),
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
              className: cn(
                "mt-2 text-center text-xs font-medium capitalize",
                state === "completed" && "text-brand-600 dark:text-brand-400",
                state === "current" && "text-gray-900 dark:text-gray-100",
                state === "pending" && "text-gray-400 dark:text-gray-500"
              ),
              children: step.label,
            }),
          ],
        },
        step.key
      );
    }),
  });
}
TimelineProgress.displayName = "TimelineProgress";
function TimelineEventList({ events, relativeTime = false, className }) {
  const formatTime4 = (date) => {
    const d = typeof date === "string" ? new Date(date) : date;
    if (relativeTime) {
      const now = /* @__PURE__ */ new Date();
      const diffMs = now.getTime() - d.getTime();
      const diffMins = Math.floor(diffMs / 6e4);
      const diffHours = Math.floor(diffMins / 60);
      const diffDays = Math.floor(diffHours / 24);
      if (diffMins < 1) return "Just now";
      if (diffMins < 60) return `${diffMins}m ago`;
      if (diffHours < 24) return `${diffHours}h ago`;
      if (diffDays < 7) return `${diffDays}d ago`;
    }
    return d.toLocaleDateString(void 0, {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };
  const getEventIcon = (type) => {
    switch (type) {
      case "message":
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(MessageIcon, {
          className: "h-4 w-4",
        });
      case "status":
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(StatusIcon, {
          className: "h-4 w-4",
        });
      case "attachment":
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(AttachmentIcon, {
          className: "h-4 w-4",
        });
      case "assignment":
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(UserIcon2, {
          className: "h-4 w-4",
        });
      case "note":
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(NoteIcon, {
          className: "h-4 w-4",
        });
      default:
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(StatusIcon, {
          className: "h-4 w-4",
        });
    }
  };
  const getEventColor = (type) => {
    switch (type) {
      case "message":
        return "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400";
      case "status":
        return "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400";
      case "attachment":
        return "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400";
      case "assignment":
        return "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400";
      case "note":
        return "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
      default:
        return "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
    }
  };
  if (events.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
      className: cn("py-8 text-center text-gray-500", className),
      children: "No activity yet.",
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
    className: cn("space-y-4", className),
    children: events.map((event, index) =>
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
        "div",
        {
          className: "relative flex gap-4",
          children: [
            index < events.length - 1 &&
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
                className:
                  "absolute top-10 left-5 h-full w-px bg-gray-200 dark:bg-gray-700",
              }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
              className: cn(
                "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                getEventColor(event.type)
              ),
              children: getEventIcon(event.type),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
              className: "flex-1 pt-1",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
                  className: "flex items-start justify-between gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h4", {
                          className:
                            "font-medium text-gray-900 dark:text-gray-100",
                          children: event.title,
                        }),
                        event.author &&
                          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", {
                            className:
                              "text-sm text-gray-500 dark:text-gray-400",
                            children: ["by ", event.author],
                          }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("time", {
                      className:
                        "shrink-0 text-xs text-gray-400 dark:text-gray-500",
                      children: formatTime4(event.timestamp),
                    }),
                  ],
                }),
                event.content &&
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", {
                    className: "mt-2 text-sm text-gray-600 dark:text-gray-300",
                    children: event.content,
                  }),
              ],
            }),
          ],
        },
        event.id
      )
    ),
  });
}
TimelineEventList.displayName = "TimelineEventList";
function OrderConfirmation({
  open,
  onClose,
  orderNumber,
  message = "We've received your order! Our team is handling the logistics, ensuring your requested services are matched with qualified provider(s). Confirmation details will arrive in your inbox soon.",
  className,
}) {
  if (!open) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
    className: cn(
      "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
      className
    ),
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "order-confirmation-title",
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
      className:
        "w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-gray-800",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
          className: "mb-6 flex justify-center",
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
            className:
              "flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30",
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
              className: "animate-bounce",
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                PlaneIcon,
                { className: "h-10 w-10 text-green-600 dark:text-green-400" }
              ),
            }),
          }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", {
          id: "order-confirmation-title",
          className:
            "mb-2 text-center text-2xl font-bold text-gray-900 dark:text-gray-100",
          children: "Order Submitted!",
        }),
        orderNumber &&
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", {
            className:
              "mb-4 text-center text-sm text-gray-500 dark:text-gray-400",
            children: ["Order #", orderNumber],
          }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", {
          className: "mb-6 text-center text-gray-600 dark:text-gray-300",
          children: message,
        }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", {
          type: "button",
          onClick: onClose,
          className: cn(
            "w-full rounded-lg px-4 py-3 font-medium",
            "bg-brand-600 hover:bg-brand-700 text-white",
            "dark:bg-brand-500 dark:hover:bg-brand-600",
            "transition-colors"
          ),
          children: "Got It",
        }),
      ],
    }),
  });
}
OrderConfirmation.displayName = "OrderConfirmation";
function CheckIcon5({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 3,
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M4.5 12.75l6 6 9-13.5",
    }),
  });
}
function MessageIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.5,
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z",
    }),
  });
}
function StatusIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.5,
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    }),
  });
}
function AttachmentIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.5,
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13",
    }),
  });
}
function UserIcon2({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.5,
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
    }),
  });
}
function NoteIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.5,
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
    }),
  });
}
function PlaneIcon({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.5,
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5",
    }),
  });
}
var ToastContext = (0, import_react8.createContext)(null);
function isValidUrl(url) {
  if (!url) return true;
  try {
    new URL(url);
    return true;
  } catch {
    try {
      new URL(`https://${url}`);
      return true;
    } catch {
      return false;
    }
  }
}
var WebsiteInput = React46.forwardRef(
  (
    {
      value = "",
      onChange,
      validateOnBlur,
      className,
      onBlur,
      hasError,
      error,
      ...props
    },
    ref
  ) => {
    const [localError, setLocalError] = React46.useState();
    const handleChange = (e) => {
      onChange == null ? void 0 : onChange(e.target.value);
      if (localError) {
        setLocalError(void 0);
      }
    };
    const handleBlur = (e) => {
      onBlur == null ? void 0 : onBlur(e);
      if (validateOnBlur) {
        if (value.length > 0 && !isValidUrl(value)) {
          setLocalError("Please enter a valid URL");
        } else {
          setLocalError(void 0);
        }
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Input, {
      ref,
      type: "url",
      inputMode: "url",
      autoComplete: "url",
      placeholder: "https://example.com",
      value,
      onChange: handleChange,
      onBlur: handleBlur,
      hasError: hasError || !!localError,
      error: error || localError,
      className: cn(className),
      ...props,
    });
  }
);
WebsiteInput.displayName = "WebsiteInput";
var WEBSITE_TYPES = [
  { value: "website", label: "Website" },
  { value: "blog", label: "Blog" },
  { value: "facebook", label: "Facebook" },
  { value: "instagram", label: "Instagram" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "pinterest", label: "Pinterest" },
  { value: "twitter", label: "Twitter/X" },
  { value: "yelp", label: "Yelp" },
  { value: "youtube", label: "YouTube" },
];
function getPlaceholder(type) {
  switch (type) {
    case "facebook":
      return "https://facebook.com/yourpage";
    case "instagram":
      return "https://instagram.com/yourhandle";
    case "linkedin":
      return "https://linkedin.com/in/yourprofile";
    case "pinterest":
      return "https://pinterest.com/yourprofile";
    case "twitter":
      return "https://twitter.com/yourhandle";
    case "yelp":
      return "https://yelp.com/biz/yourbusiness";
    case "youtube":
      return "https://youtube.com/c/yourchannel";
    case "blog":
      return "https://yourblog.com";
    default:
      return "https://example.com";
  }
}
function WebsiteInputGroup({
  value,
  onChange,
  minEntries = 1,
  maxEntries = 10,
  required = false,
  disabled = false,
  validateOnBlur = false,
  label,
  typeLabels,
  className,
}) {
  const websites = React46.useMemo(() => {
    if (value.length >= minEntries) return value;
    const padding = Array(minEntries - value.length)
      .fill(null)
      .map(() => ({ url: "", type: "website" }));
    return [...value, ...padding];
  }, [value, minEntries]);
  const handleUrlChange = (index, url) => {
    const updated = [...websites];
    updated[index] = { ...updated[index], url };
    onChange(updated);
  };
  const handleTypeChange = (index, type) => {
    const updated = [...websites];
    updated[index] = { ...updated[index], type };
    onChange(updated);
  };
  const handleAdd = () => {
    if (websites.length < maxEntries) {
      onChange([...websites, { url: "", type: "website" }]);
    }
  };
  const handleRemove = (index) => {
    if (websites.length > minEntries) {
      onChange(websites.filter((_, i) => i !== index));
    }
  };
  const getTypeLabel = (type) => {
    var _a;
    if (typeLabels == null ? void 0 : typeLabels[type]) return typeLabels[type];
    return (
      ((_a = WEBSITE_TYPES.find((t) => t.value === type)) == null
        ? void 0
        : _a.label) || type
    );
  };
  const canAdd = websites.length < maxEntries;
  const canRemove = websites.length > minEntries;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
    className: cn("space-y-3", className),
    children: websites.map((website, index) =>
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
        "div",
        {
          className: "flex items-start gap-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
              className: "flex-1",
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                WebsiteInput,
                {
                  label: index === 0 ? label : void 0,
                  value: website.url,
                  onChange: (url) => handleUrlChange(index, url),
                  disabled,
                  validateOnBlur,
                  required: required && index === 0,
                  placeholder: getPlaceholder(website.type),
                }
              ),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", {
              className: "w-36 shrink-0",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("label", {
                  className: "sr-only",
                  htmlFor: `website-type-${index}`,
                  children: "URL type",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("select", {
                  id: `website-type-${index}`,
                  value: website.type,
                  onChange: (e) => handleTypeChange(index, e.target.value),
                  disabled,
                  className: cn(
                    "w-full rounded-md border px-3 py-2 text-sm",
                    "border-gray-300 bg-white text-gray-900",
                    "focus:border-brand-500 focus:ring-brand-500/20 focus:ring-2 focus:outline-none",
                    "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500",
                    "dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100",
                    "dark:focus:border-brand-400 dark:focus:ring-brand-400/20",
                    index === 0 && label ? "mt-6" : ""
                  ),
                  children: WEBSITE_TYPES.map((type) =>
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      "option",
                      { value: type.value, children: getTypeLabel(type.value) },
                      type.value
                    )
                  ),
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
              className: cn(
                "flex shrink-0 items-center",
                index === 0 && label ? "mt-6" : ""
              ),
              children:
                index === 0
                  ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", {
                      type: "button",
                      onClick: handleAdd,
                      disabled: disabled || !canAdd,
                      className: cn(
                        "rounded-full p-2 transition-colors",
                        "text-brand-600 hover:bg-brand-50",
                        "disabled:cursor-not-allowed disabled:text-gray-300 disabled:hover:bg-transparent",
                        "dark:text-brand-400 dark:hover:bg-brand-900/20",
                        "dark:disabled:text-gray-600"
                      ),
                      "aria-label": "Add website",
                      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                        "svg",
                        {
                          className: "h-5 w-5",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          children: /* @__PURE__ */ (0,
                          import_jsx_runtime10.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 4v16m8-8H4",
                          }),
                        }
                      ),
                    })
                  : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", {
                      type: "button",
                      onClick: () => handleRemove(index),
                      disabled: disabled || !canRemove,
                      className: cn(
                        "rounded-full p-2 transition-colors",
                        "text-red-600 hover:bg-red-50",
                        "disabled:cursor-not-allowed disabled:text-gray-300 disabled:hover:bg-transparent",
                        "dark:text-red-400 dark:hover:bg-red-900/20",
                        "dark:disabled:text-gray-600"
                      ),
                      "aria-label": "Remove website",
                      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                        "svg",
                        {
                          className: "h-5 w-5",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          children: /* @__PURE__ */ (0,
                          import_jsx_runtime10.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M20 12H4",
                          }),
                        }
                      ),
                    }),
            }),
          ],
        },
        index
      )
    ),
  });
}
WebsiteInputGroup.displayName = "WebsiteInputGroup";

// src/components/Lightbox.tsx
var import_react11 = __toESM(require_react(), 1);

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var import_react10 = __toESM(require_react());

// node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js
var mergeClasses2 = (...classes) =>
  classes
    .filter((className, index, array) => {
      return (
        Boolean(className) &&
        className.trim() !== "" &&
        array.indexOf(className) === index
      );
    })
    .join(" ")
    .trim();

// node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js
var toKebabCase2 = (string) =>
  string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

// node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js
var toCamelCase2 = (string) =>
  string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) =>
    p2 ? p2.toUpperCase() : p1.toLowerCase()
  );

// node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js
var toPascalCase2 = (string) => {
  const camelCase = toCamelCase2(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

// node_modules/lucide-react/dist/esm/Icon.js
var import_react9 = __toESM(require_react());

// node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

// node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js
var hasA11yProp2 = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};

// node_modules/lucide-react/dist/esm/Icon.js
var Icon2 = (0, import_react9.forwardRef)(
  (
    {
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode,
      ...rest
    },
    ref
  ) =>
    (0, import_react9.createElement)(
      "svg",
      {
        ref,
        ...defaultAttributes2,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth
          ? (Number(strokeWidth) * 24) / Number(size)
          : strokeWidth,
        className: mergeClasses2("lucide", className),
        ...(!children && !hasA11yProp2(rest) && { "aria-hidden": "true" }),
        ...rest,
      },
      [
        ...iconNode.map(([tag, attrs]) =>
          (0, import_react9.createElement)(tag, attrs)
        ),
        ...(Array.isArray(children) ? children : [children]),
      ]
    )
);

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon2 = (iconName, iconNode) => {
  const Component = (0, import_react10.forwardRef)(
    ({ className, ...props }, ref) =>
      (0, import_react10.createElement)(Icon2, {
        ref,
        iconNode,
        className: mergeClasses2(
          `lucide-${toKebabCase2(toPascalCase2(iconName))}`,
          `lucide-${iconName}`,
          className
        ),
        ...props,
      })
  );
  Component.displayName = toPascalCase2(iconName);
  return Component;
};

// node_modules/lucide-react/dist/esm/icons/arrow-right.js
var __iconNode18 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
];
var ArrowRight = createLucideIcon2("arrow-right", __iconNode18);

// node_modules/lucide-react/dist/esm/icons/chevron-left.js
var __iconNode19 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
var ChevronLeft = createLucideIcon2("chevron-left", __iconNode19);

// node_modules/lucide-react/dist/esm/icons/chevron-right.js
var __iconNode20 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
var ChevronRight2 = createLucideIcon2("chevron-right", __iconNode20);

// node_modules/lucide-react/dist/esm/icons/file-text.js
var __iconNode21 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6",
    },
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
];
var FileText2 = createLucideIcon2("file-text", __iconNode21);

// node_modules/lucide-react/dist/esm/icons/hash.js
var __iconNode22 = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }],
];
var Hash = createLucideIcon2("hash", __iconNode22);

// node_modules/lucide-react/dist/esm/icons/search.js
var __iconNode23 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
];
var Search = createLucideIcon2("search", __iconNode23);

// node_modules/lucide-react/dist/esm/icons/x.js
var __iconNode24 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
];
var X2 = createLucideIcon2("x", __iconNode24);

// src/components/Lightbox.tsx
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
function Lightbox({
  images,
  initialIndex = 0,
  open,
  onClose,
  showNavigation = true,
  showCounter = true,
  closeOnBackdropClick = true,
  onNavigate,
  className,
}) {
  const [currentIndex, setCurrentIndex] = (0, import_react11.useState)(
    initialIndex
  );
  const [touchStart, setTouchStart] = (0, import_react11.useState)(null);
  const containerRef = (0, import_react11.useRef)(null);
  (0, import_react11.useEffect)(() => {
    if (open) {
      setCurrentIndex(initialIndex);
    }
  }, [open, initialIndex]);
  const currentImage = images[currentIndex];
  const hasNext = currentIndex < images.length - 1;
  const hasPrev = currentIndex > 0;
  const goToNext = (0, import_react11.useCallback)(() => {
    if (hasNext) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      onNavigate == null ? void 0 : onNavigate(newIndex);
    }
  }, [currentIndex, hasNext, onNavigate]);
  const goToPrev = (0, import_react11.useCallback)(() => {
    if (hasPrev) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      onNavigate == null ? void 0 : onNavigate(newIndex);
    }
  }, [currentIndex, hasPrev, onNavigate]);
  const goToIndex = (0, import_react11.useCallback)(
    (index) => {
      if (index >= 0 && index < images.length) {
        setCurrentIndex(index);
        onNavigate == null ? void 0 : onNavigate(index);
      }
    },
    [images.length, onNavigate]
  );
  (0, import_react11.useEffect)(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "Escape":
          e.preventDefault();
          onClose();
          break;
        case "ArrowLeft":
          e.preventDefault();
          goToPrev();
          break;
        case "ArrowRight":
          e.preventDefault();
          goToNext();
          break;
        case "Home":
          e.preventDefault();
          goToIndex(0);
          break;
        case "End":
          e.preventDefault();
          goToIndex(images.length - 1);
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, goToNext, goToPrev, goToIndex, images.length, onClose]);
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    const threshold = 50;
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    setTouchStart(null);
  };
  if (!currentImage) return null;
  const handleOpenChange = (isOpen) => {
    if (!isOpen) {
      onClose();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Modal, {
    open,
    onOpenChange: handleOpenChange,
    size: "full",
    closeOnOverlayClick: closeOnBackdropClick,
    className: cn("lightbox-modal bg-black/95", className),
    children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(ModalBody, {
      className: "relative flex h-full w-full items-center justify-center p-0",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Button, {
          variant: "ghost",
          size: "icon",
          onClick: onClose,
          className:
            "absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20",
          "aria-label": "Close lightbox",
          children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(X2, {
            className: "h-6 w-6",
          }),
        }),
        showNavigation &&
          images.length > 1 &&
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
            import_jsx_runtime11.Fragment,
            {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Button, {
                  variant: "ghost",
                  size: "icon",
                  onClick: goToPrev,
                  disabled: !hasPrev,
                  className:
                    "absolute top-1/2 left-4 z-10 h-12 w-12 -translate-y-1/2 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-30",
                  "aria-label": "Previous image",
                  children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                    ChevronLeft,
                    { className: "h-8 w-8" }
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Button, {
                  variant: "ghost",
                  size: "icon",
                  onClick: goToNext,
                  disabled: !hasNext,
                  className:
                    "absolute top-1/2 right-4 z-10 h-12 w-12 -translate-y-1/2 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-30",
                  "aria-label": "Next image",
                  children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                    ChevronRight2,
                    { className: "h-8 w-8" }
                  ),
                }),
              ],
            }
          ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", {
          ref: containerRef,
          className: "flex h-full w-full items-center justify-center",
          onTouchStart: handleTouchStart,
          onTouchEnd: handleTouchEnd,
          children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("img", {
            src: currentImage.src,
            alt: currentImage.alt || "",
            title: currentImage.title,
            className:
              "max-h-[calc(100vh-8rem)] max-w-[calc(100vw-4rem)] object-contain",
          }),
        }),
        (currentImage.alt || currentImage.title) &&
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", {
            className:
              "absolute bottom-16 left-1/2 -translate-x-1/2 rounded-lg bg-black/50 px-4 py-2 text-center text-sm text-white",
            children: currentImage.title || currentImage.alt,
          }),
        showCounter &&
          images.length > 1 &&
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", {
            className:
              "absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white",
            children: [currentIndex + 1, " of ", images.length],
          }),
      ],
    }),
  });
}

// src/components/SidebarSearch.tsx
var import_react12 = __toESM(require_react(), 1);
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
function SidebarSearch({
  placeholder = "Filter navigation...",
  debounceMs = 150,
  onSearch,
  className,
  showKeyboardHint = true,
}) {
  const [query, setQuery] = (0, import_react12.useState)("");
  const [matchCount, setMatchCount] = (0, import_react12.useState)(0);
  const [isFocused, setIsFocused] = (0, import_react12.useState)(false);
  const inputRef = (0, import_react12.useRef)(null);
  const debounceRef = (0, import_react12.useRef)(null);
  const navItemsRef = (0, import_react12.useRef)([]);
  const originalLinkTextRef = (0, import_react12.useRef)(
    /* @__PURE__ */ new Map()
  );
  (0, import_react12.useEffect)(() => {
    const sidebar = document.getElementById("sidebar");
    if (!sidebar) return;
    const nav = sidebar.querySelector("nav");
    if (!nav) return;
    const items = nav.querySelectorAll("li");
    const navItems = [];
    items.forEach((item) => {
      var _a;
      const link = item.querySelector("a[href]");
      const toggle = item.querySelector(".sidebar-toggle");
      const childNav = item.querySelector(".sidebar-nav-children");
      navItems.push({
        element: item,
        text:
          ((_a = link == null ? void 0 : link.textContent) == null
            ? void 0
            : _a.toLowerCase()) ?? "",
        link,
        originalHidden: item.classList.contains("hidden"),
        originalExpanded:
          (toggle == null ? void 0 : toggle.getAttribute("aria-expanded")) ===
          "true",
        childNav,
        childOriginalHidden:
          (childNav == null ? void 0 : childNav.classList.contains("hidden")) ??
          true,
      });
      if (link && !originalLinkTextRef.current.has(link)) {
        originalLinkTextRef.current.set(link, link.textContent ?? "");
      }
    });
    navItemsRef.current = navItems;
  }, []);
  const highlightText = (0, import_react12.useCallback)((text, searchQuery) => {
    if (!searchQuery) return text;
    const regex = new RegExp(
      `(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "gi"
    );
    return text.replace(
      regex,
      '<mark class="bg-yellow-200 dark:bg-yellow-800 rounded px-0.5">$1</mark>'
    );
  }, []);
  const performSearch = (0, import_react12.useCallback)(
    (searchQuery) => {
      const trimmedQuery = searchQuery.trim().toLowerCase();
      const navItems = navItemsRef.current;
      const originalLinkText = originalLinkTextRef.current;
      if (!trimmedQuery) {
        navItems.forEach((item) => {
          var _a;
          item.element.classList.toggle("hidden", item.originalHidden);
          item.element.classList.remove("sidebar-search-match");
          const toggle = item.element.querySelector(".sidebar-toggle");
          if (toggle) {
            toggle.setAttribute("aria-expanded", String(item.originalExpanded));
            (_a = toggle.querySelector("svg")) == null
              ? void 0
              : _a.classList.toggle("rotate-90", item.originalExpanded);
          }
          if (item.childNav) {
            item.childNav.classList.toggle("hidden", item.childOriginalHidden);
          }
          if (item.link) {
            const origText = originalLinkText.get(item.link);
            if (origText) {
              item.link.textContent = origText;
            }
          }
        });
        setMatchCount(0);
        onSearch == null ? void 0 : onSearch("", 0);
        return;
      }
      let count = 0;
      const matchedItems = /* @__PURE__ */ new Set();
      navItems.forEach((item) => {
        var _a, _b;
        if (item.text.includes(trimmedQuery)) {
          count++;
          matchedItems.add(item.element);
          let parent =
            (_a = item.element.parentElement) == null
              ? void 0
              : _a.closest("li");
          while (parent) {
            matchedItems.add(parent);
            parent =
              (_b = parent.parentElement) == null ? void 0 : _b.closest("li");
          }
          if (item.link) {
            const origText =
              originalLinkText.get(item.link) ?? item.link.textContent ?? "";
            item.link.innerHTML = highlightText(origText, trimmedQuery);
          }
        } else {
          if (item.link) {
            const origText = originalLinkText.get(item.link);
            if (origText) {
              item.link.textContent = origText;
            }
          }
        }
      });
      navItems.forEach((item) => {
        var _a;
        if (matchedItems.has(item.element)) {
          item.element.classList.remove("hidden");
          item.element.classList.add("sidebar-search-match");
          if (item.childNav) {
            item.childNav.classList.remove("hidden");
            const toggle = item.element.querySelector(".sidebar-toggle");
            if (toggle) {
              toggle.setAttribute("aria-expanded", "true");
              (_a = toggle.querySelector("svg")) == null
                ? void 0
                : _a.classList.add("rotate-90");
            }
          }
        } else {
          item.element.classList.add("hidden");
          item.element.classList.remove("sidebar-search-match");
        }
      });
      setMatchCount(count);
      onSearch == null ? void 0 : onSearch(searchQuery, count);
    },
    [highlightText, onSearch]
  );
  const handleInputChange = (0, import_react12.useCallback)(
    (e) => {
      const value = e.target.value;
      setQuery(value);
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      debounceRef.current = setTimeout(() => {
        performSearch(value);
      }, debounceMs);
    },
    [debounceMs, performSearch]
  );
  const handleClear = (0, import_react12.useCallback)(() => {
    var _a;
    setQuery("");
    performSearch("");
    (_a = inputRef.current) == null ? void 0 : _a.focus();
  }, [performSearch]);
  (0, import_react12.useEffect)(() => {
    const handleKeyDown2 = (e) => {
      var _a, _b;
      const target = e.target;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }
      if (e.key === "/") {
        e.preventDefault();
        (_a = inputRef.current) == null ? void 0 : _a.focus();
        (_b = inputRef.current) == null ? void 0 : _b.select();
      }
    };
    document.addEventListener("keydown", handleKeyDown2);
    return () => document.removeEventListener("keydown", handleKeyDown2);
  }, []);
  const handleKeyDown = (0, import_react12.useCallback)(
    (e) => {
      var _a;
      if (e.key === "Escape") {
        if (query) {
          handleClear();
        } else {
          (_a = inputRef.current) == null ? void 0 : _a.blur();
        }
        e.preventDefault();
      }
    },
    [query, handleClear]
  );
  const showKbd = showKeyboardHint && !isFocused && !query;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", {
    className: cn("sidebar-search border-border border-b px-4 py-3", className),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", {
        className: "relative",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Search, {
            className:
              "text-muted-foreground pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2",
            "aria-hidden": "true",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", {
            ref: inputRef,
            type: "text",
            value: query,
            onChange: handleInputChange,
            onKeyDown: handleKeyDown,
            onFocus: () => setIsFocused(true),
            onBlur: () => setIsFocused(false),
            placeholder,
            className:
              "border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-ring w-full rounded-md border py-2 pr-9 pl-9 text-sm transition-colors focus:border-transparent focus:ring-2 focus:outline-none",
            "aria-label": "Filter sidebar navigation",
            autoComplete: "off",
            spellCheck: false,
          }),
          query
            ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Button, {
                variant: "ghost",
                size: "icon",
                onClick: handleClear,
                className:
                  "text-muted-foreground hover:text-foreground absolute top-1/2 right-1 h-7 w-7 -translate-y-1/2",
                "aria-label": "Clear search",
                children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(X2, {
                  className: "h-4 w-4",
                }),
              })
            : showKbd
              ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("kbd", {
                  className:
                    "border-border bg-muted text-muted-foreground pointer-events-none absolute top-1/2 right-2 inline-flex h-5 -translate-y-1/2 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium select-none",
                  "aria-hidden": "true",
                  children: "/",
                })
              : null,
        ],
      }),
      query &&
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
          className: "text-muted-foreground mt-2 text-xs",
          role: "status",
          "aria-live": "polite",
          children:
            matchCount === 0
              ? "No results found"
              : `${matchCount} ${matchCount === 1 ? "result" : "results"} found`,
        }),
    ],
  });
}

// src/components/SearchModal.tsx
var import_react13 = __toESM(require_react(), 1);
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
function SearchModal({
  open,
  onClose,
  searchIndexUrl = "/search.json",
  onSelect,
  placeholder = "Search documentation...",
  className,
}) {
  const [query, setQuery] = (0, import_react13.useState)("");
  const [results, setResults] = (0, import_react13.useState)([]);
  const [isLoading, setIsLoading] = (0, import_react13.useState)(false);
  const [selectedIndex, setSelectedIndex] = (0, import_react13.useState)(0);
  const [searchIndex, setSearchIndex] = (0, import_react13.useState)(null);
  const [lunrIndex, setLunrIndex] = (0, import_react13.useState)(null);
  const inputRef = (0, import_react13.useRef)(null);
  const resultsRef = (0, import_react13.useRef)(null);
  (0, import_react13.useEffect)(() => {
    if (!open || searchIndex) return;
    const loadIndex = async () => {
      try {
        const response = await fetch(searchIndexUrl);
        const data = await response.json();
        setSearchIndex(data);
        if (typeof window !== "undefined" && window.lunr) {
          const lunr = window.lunr;
          const idx = lunr(function () {
            this.ref("id");
            this.field("title", { boost: 10 });
            this.field("content");
            data.forEach((doc) => {
              this.add(doc);
            });
          });
          setLunrIndex(idx);
        }
      } catch (error) {
        console.error("Failed to load search index:", error);
      }
    };
    loadIndex();
  }, [open, searchIndex, searchIndexUrl]);
  (0, import_react13.useEffect)(() => {
    if (open) {
      setTimeout(() => {
        var _a;
        return (_a = inputRef.current) == null ? void 0 : _a.focus();
      }, 100);
      setQuery("");
      setResults([]);
      setSelectedIndex(0);
    }
  }, [open]);
  const performSearch = (0, import_react13.useCallback)(
    (searchQuery) => {
      if (!searchQuery.trim() || !searchIndex) {
        setResults([]);
        return;
      }
      setIsLoading(true);
      const trimmedQuery = searchQuery.toLowerCase().trim();
      try {
        let searchResults;
        if (lunrIndex && typeof lunrIndex.search === "function") {
          const lunrResults = lunrIndex.search(trimmedQuery);
          searchResults = lunrResults
            .slice(0, 10)
            .map((result) => {
              const doc = searchIndex.find((d) => d.id === result.ref);
              return doc ? { ...doc, score: result.score } : null;
            })
            .filter((r2) => r2 !== null);
        } else {
          searchResults = searchIndex
            .filter((doc) => {
              var _a, _b;
              const titleMatch =
                (_a = doc.title) == null
                  ? void 0
                  : _a.toLowerCase().includes(trimmedQuery);
              const contentMatch =
                (_b = doc.content) == null
                  ? void 0
                  : _b.toLowerCase().includes(trimmedQuery);
              return titleMatch || contentMatch;
            })
            .slice(0, 10)
            .map((doc) => ({ ...doc, score: 1 }));
        }
        setResults(searchResults);
        setSelectedIndex(0);
      } catch (error) {
        console.error("Search error:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    },
    [searchIndex, lunrIndex]
  );
  (0, import_react13.useEffect)(() => {
    const timer = setTimeout(() => {
      performSearch(query);
    }, 200);
    return () => clearTimeout(timer);
  }, [query, performSearch]);
  const handleSelect = (0, import_react13.useCallback)(
    (result) => {
      onSelect == null ? void 0 : onSelect(result);
      onClose();
      window.location.href = result.url;
    },
    [onSelect, onClose]
  );
  const handleKeyDown = (0, import_react13.useCallback)(
    (e) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => Math.max(prev - 1, 0));
          break;
        case "Enter":
          e.preventDefault();
          if (results[selectedIndex]) {
            handleSelect(results[selectedIndex]);
          }
          break;
        case "Escape":
          e.preventDefault();
          onClose();
          break;
      }
    },
    [results, selectedIndex, onClose, handleSelect]
  );
  (0, import_react13.useEffect)(() => {
    var _a;
    const selectedElement =
      (_a = resultsRef.current) == null
        ? void 0
        : _a.querySelector(`[data-index="${selectedIndex}"]`);
    selectedElement == null
      ? void 0
      : selectedElement.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);
  const handleOpenChange = (isOpen) => {
    if (!isOpen) {
      onClose();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Modal, {
    open,
    onOpenChange: handleOpenChange,
    size: "lg",
    className: cn("search-modal", className),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ModalHeader, {
        className: "border-border border-b p-0",
        children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", {
          className: "relative",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Search, {
              className:
                "text-muted-foreground absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("input", {
              ref: inputRef,
              type: "text",
              value: query,
              onChange: (e) => setQuery(e.target.value),
              onKeyDown: handleKeyDown,
              placeholder,
              className:
                "w-full border-0 bg-transparent py-4 pr-4 pl-12 text-base focus:ring-0 focus:outline-none",
              "aria-label": "Search documentation",
              autoComplete: "off",
              spellCheck: false,
            }),
            isLoading &&
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Spinner, {
                size: "sm",
                className: "absolute top-1/2 right-4 -translate-y-1/2",
              }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ModalBody, {
        className: "max-h-[60vh] overflow-y-auto p-0",
        children:
          results.length > 0
            ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", {
                ref: resultsRef,
                className: "divide-border divide-y",
                children: results.map((result, index) =>
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                    "button",
                    {
                      "data-index": index,
                      onClick: () => handleSelect(result),
                      className: cn(
                        "hover:bg-muted w-full px-4 py-3 text-left transition-colors focus:outline-none",
                        index === selectedIndex && "bg-muted"
                      ),
                      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                        "div",
                        {
                          className: "flex items-center gap-3",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                              FileText2,
                              {
                                className:
                                  "text-muted-foreground h-4 w-4 flex-shrink-0",
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                              "div",
                              {
                                className: "min-w-0 flex-1",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                                    "div",
                                    {
                                      className:
                                        "text-foreground truncate font-medium",
                                      children: result.title,
                                    }
                                  ),
                                  result.section &&
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime13.jsxs)("div", {
                                      className:
                                        "text-muted-foreground flex items-center gap-1 text-xs",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime13.jsx)(Hash, {
                                          className: "h-3 w-3",
                                        }),
                                        result.section,
                                      ],
                                    }),
                                ],
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                              ArrowRight,
                              {
                                className:
                                  "text-muted-foreground h-4 w-4 flex-shrink-0 opacity-0 group-hover:opacity-100",
                              }
                            ),
                          ],
                        }
                      ),
                    },
                    result.id
                  )
                ),
              })
            : query && !isLoading
              ? /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", {
                  className: "text-muted-foreground p-8 text-center",
                  children: ['No results found for "', query, '"'],
                })
              : !query
                ? /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", {
                    className: "text-muted-foreground p-8 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", {
                        className: "mb-2",
                        children: "Start typing to search",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("p", {
                        className: "text-xs",
                        children: [
                          "Press",
                          " ",
                          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("kbd", {
                            className: "rounded border px-1.5 py-0.5 text-xs",
                            children: "\u2191",
                          }),
                          " ",
                          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("kbd", {
                            className: "rounded border px-1.5 py-0.5 text-xs",
                            children: "\u2193",
                          }),
                          " to navigate,",
                          " ",
                          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("kbd", {
                            className: "rounded border px-1.5 py-0.5 text-xs",
                            children: "Enter",
                          }),
                          " ",
                          "to select",
                        ],
                      }),
                    ],
                  })
                : null,
      }),
    ],
  });
}
export {
  Alert,
  Badge,
  Button,
  Input,
  Lightbox,
  Modal,
  ModalBody,
  ModalClose,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  SearchModal,
  SidebarSearch,
  Spinner,
  ThemeProvider,
  ThemeToggle,
  Tooltip,
  cn,
  useThemeContext,
};
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.development.js:
  (**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils.js:
  (**
   * @license lucide-react v0.562.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.562.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/Icon.js:
  (**
   * @license lucide-react v0.562.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.562.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/camera.js:
  (**
   * @license lucide-react v0.562.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/check.js:
  (**
   * @license lucide-react v0.562.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/circle-alert.js:
  (**
   * @license lucide-react v0.562.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/circle-check-big.js:
  (**
   * @license lucide-react v0.562.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/clock.js:
  (**
   * @license lucide-react v0.562.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/file-text.js:
  (**
   * @license lucide-react v0.562.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/globe.js:
  (**
   * @license lucide-react v0.562.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/image.js:
  (**
   * @license lucide-react v0.562.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/linkedin.js:
  (**
   * @license lucide-react v0.562.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/mail.js:
  (**
   * @license lucide-react v0.562.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/phone.js:
  (**
   * @license lucide-react v0.562.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/refresh-cw.js:
  (**
   * @license lucide-react v0.562.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/scan-line.js:
  (**
   * @license lucide-react v0.562.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/scan.js:
  (**
   * @license lucide-react v0.562.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/trash-2.js:
  (**
   * @license lucide-react v0.562.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/upload.js:
  (**
   * @license lucide-react v0.562.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/x.js:
  (**
   * @license lucide-react v0.562.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.562.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils/mergeClasses.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils/toKebabCase.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils/toCamelCase.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils/toPascalCase.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils/hasA11yProp.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/Icon.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/arrow-right.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-left.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-right.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/file-text.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/hash.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/search.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/x.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=components.js.map
