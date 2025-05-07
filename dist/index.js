import * as ve from "react";
import je, { useRef as ke, useEffect as ye } from "react";
import { createPortal as Ie } from "react-dom";
function Me(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ne = { exports: {} }, ee = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var me;
function $e() {
  if (me) return ee;
  me = 1;
  var t = Symbol.for("react.transitional.element"), R = Symbol.for("react.fragment");
  function b(l, f, s) {
    var v = null;
    if (s !== void 0 && (v = "" + s), f.key !== void 0 && (v = "" + f.key), "key" in f) {
      s = {};
      for (var d in f)
        d !== "key" && (s[d] = f[d]);
    } else s = f;
    return f = s.ref, {
      $$typeof: t,
      type: l,
      key: v,
      ref: f !== void 0 ? f : null,
      props: s
    };
  }
  return ee.Fragment = R, ee.jsx = b, ee.jsxs = b, ee;
}
var re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be;
function Ye() {
  return be || (be = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case w:
          return "Fragment";
        case Y:
          return "Profiler";
        case k:
          return "StrictMode";
        case o:
          return "Suspense";
        case W:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case $:
            return "Portal";
          case j:
            return (e.displayName || "Context") + ".Provider";
          case U:
            return (e._context.displayName || "Context") + ".Consumer";
          case A:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case V:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function R(e) {
      return "" + e;
    }
    function b(e) {
      try {
        R(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var a = r.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          i
        ), R(e);
      }
    }
    function l(e) {
      if (e === w) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === V)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function f() {
      var e = F.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function v(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, r) {
      function a() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function P() {
      var e = t(this.type);
      return q[e] || (q[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function O(e, r, a, i, c, p, y, m) {
      return a = p.ref, e = {
        $$typeof: C,
        type: e,
        key: r,
        props: p,
        _owner: c
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: P
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: y
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: m
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function h(e, r, a, i, c, p, y, m) {
      var u = r.children;
      if (u !== void 0)
        if (i)
          if (K(u)) {
            for (i = 0; i < u.length; i++)
              g(u[i]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(u);
      if (B.call(r, "key")) {
        u = t(e);
        var E = Object.keys(r).filter(function(I) {
          return I !== "key";
        });
        i = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", X[u + i] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          u,
          E,
          u
        ), X[u + i] = !0);
      }
      if (u = null, a !== void 0 && (b(a), u = "" + a), v(r) && (b(r.key), u = "" + r.key), "key" in r) {
        a = {};
        for (var T in r)
          T !== "key" && (a[T] = r[T]);
      } else a = r;
      return u && d(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), O(
        e,
        u,
        p,
        c,
        f(),
        a,
        y,
        m
      );
    }
    function g(e) {
      typeof e == "object" && e !== null && e.$$typeof === C && e._store && (e._store.validated = 1);
    }
    var x = je, C = Symbol.for("react.transitional.element"), $ = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), U = Symbol.for("react.consumer"), j = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), F = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, K = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var J, q = {}, D = x["react-stack-bottom-frame"].bind(
      x,
      s
    )(), z = N(l(s)), X = {};
    re.Fragment = w, re.jsx = function(e, r, a, i, c) {
      var p = 1e4 > F.recentlyCreatedOwnerStacks++;
      return h(
        e,
        r,
        a,
        !1,
        i,
        c,
        p ? Error("react-stack-top-frame") : D,
        p ? N(l(e)) : z
      );
    }, re.jsxs = function(e, r, a, i, c) {
      var p = 1e4 > F.recentlyCreatedOwnerStacks++;
      return h(
        e,
        r,
        a,
        !0,
        i,
        c,
        p ? Error("react-stack-top-frame") : D,
        p ? N(l(e)) : z
      );
    };
  }()), re;
}
var Ee;
function qe() {
  return Ee || (Ee = 1, process.env.NODE_ENV === "production" ? ne.exports = $e() : ne.exports = Ye()), ne.exports;
}
var G = qe(), oe = { exports: {} }, ae = { exports: {} }, _ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function Ne() {
  if (Te) return _;
  Te = 1;
  var t = typeof Symbol == "function" && Symbol.for, R = t ? Symbol.for("react.element") : 60103, b = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, f = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, v = t ? Symbol.for("react.provider") : 60109, d = t ? Symbol.for("react.context") : 60110, P = t ? Symbol.for("react.async_mode") : 60111, O = t ? Symbol.for("react.concurrent_mode") : 60111, h = t ? Symbol.for("react.forward_ref") : 60112, g = t ? Symbol.for("react.suspense") : 60113, x = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, $ = t ? Symbol.for("react.lazy") : 60116, w = t ? Symbol.for("react.block") : 60121, k = t ? Symbol.for("react.fundamental") : 60117, Y = t ? Symbol.for("react.responder") : 60118, U = t ? Symbol.for("react.scope") : 60119;
  function j(o) {
    if (typeof o == "object" && o !== null) {
      var W = o.$$typeof;
      switch (W) {
        case R:
          switch (o = o.type, o) {
            case P:
            case O:
            case l:
            case s:
            case f:
            case g:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case d:
                case h:
                case $:
                case C:
                case v:
                  return o;
                default:
                  return W;
              }
          }
        case b:
          return W;
      }
    }
  }
  function A(o) {
    return j(o) === O;
  }
  return _.AsyncMode = P, _.ConcurrentMode = O, _.ContextConsumer = d, _.ContextProvider = v, _.Element = R, _.ForwardRef = h, _.Fragment = l, _.Lazy = $, _.Memo = C, _.Portal = b, _.Profiler = s, _.StrictMode = f, _.Suspense = g, _.isAsyncMode = function(o) {
    return A(o) || j(o) === P;
  }, _.isConcurrentMode = A, _.isContextConsumer = function(o) {
    return j(o) === d;
  }, _.isContextProvider = function(o) {
    return j(o) === v;
  }, _.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === R;
  }, _.isForwardRef = function(o) {
    return j(o) === h;
  }, _.isFragment = function(o) {
    return j(o) === l;
  }, _.isLazy = function(o) {
    return j(o) === $;
  }, _.isMemo = function(o) {
    return j(o) === C;
  }, _.isPortal = function(o) {
    return j(o) === b;
  }, _.isProfiler = function(o) {
    return j(o) === s;
  }, _.isStrictMode = function(o) {
    return j(o) === f;
  }, _.isSuspense = function(o) {
    return j(o) === g;
  }, _.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === l || o === O || o === s || o === f || o === g || o === x || typeof o == "object" && o !== null && (o.$$typeof === $ || o.$$typeof === C || o.$$typeof === v || o.$$typeof === d || o.$$typeof === h || o.$$typeof === k || o.$$typeof === Y || o.$$typeof === U || o.$$typeof === w);
  }, _.typeOf = j, _;
}
var S = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var he;
function De() {
  return he || (he = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, R = t ? Symbol.for("react.element") : 60103, b = t ? Symbol.for("react.portal") : 60106, l = t ? Symbol.for("react.fragment") : 60107, f = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114, v = t ? Symbol.for("react.provider") : 60109, d = t ? Symbol.for("react.context") : 60110, P = t ? Symbol.for("react.async_mode") : 60111, O = t ? Symbol.for("react.concurrent_mode") : 60111, h = t ? Symbol.for("react.forward_ref") : 60112, g = t ? Symbol.for("react.suspense") : 60113, x = t ? Symbol.for("react.suspense_list") : 60120, C = t ? Symbol.for("react.memo") : 60115, $ = t ? Symbol.for("react.lazy") : 60116, w = t ? Symbol.for("react.block") : 60121, k = t ? Symbol.for("react.fundamental") : 60117, Y = t ? Symbol.for("react.responder") : 60118, U = t ? Symbol.for("react.scope") : 60119;
    function j(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === l || n === O || n === s || n === f || n === g || n === x || typeof n == "object" && n !== null && (n.$$typeof === $ || n.$$typeof === C || n.$$typeof === v || n.$$typeof === d || n.$$typeof === h || n.$$typeof === k || n.$$typeof === Y || n.$$typeof === U || n.$$typeof === w);
    }
    function A(n) {
      if (typeof n == "object" && n !== null) {
        var L = n.$$typeof;
        switch (L) {
          case R:
            var te = n.type;
            switch (te) {
              case P:
              case O:
              case l:
              case s:
              case f:
              case g:
                return te;
              default:
                var pe = te && te.$$typeof;
                switch (pe) {
                  case d:
                  case h:
                  case $:
                  case C:
                  case v:
                    return pe;
                  default:
                    return L;
                }
            }
          case b:
            return L;
        }
      }
    }
    var o = P, W = O, H = d, V = v, Z = R, Q = h, F = l, B = $, K = C, N = b, J = s, q = f, D = g, z = !1;
    function X(n) {
      return z || (z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(n) || A(n) === P;
    }
    function e(n) {
      return A(n) === O;
    }
    function r(n) {
      return A(n) === d;
    }
    function a(n) {
      return A(n) === v;
    }
    function i(n) {
      return typeof n == "object" && n !== null && n.$$typeof === R;
    }
    function c(n) {
      return A(n) === h;
    }
    function p(n) {
      return A(n) === l;
    }
    function y(n) {
      return A(n) === $;
    }
    function m(n) {
      return A(n) === C;
    }
    function u(n) {
      return A(n) === b;
    }
    function E(n) {
      return A(n) === s;
    }
    function T(n) {
      return A(n) === f;
    }
    function I(n) {
      return A(n) === g;
    }
    S.AsyncMode = o, S.ConcurrentMode = W, S.ContextConsumer = H, S.ContextProvider = V, S.Element = Z, S.ForwardRef = Q, S.Fragment = F, S.Lazy = B, S.Memo = K, S.Portal = N, S.Profiler = J, S.StrictMode = q, S.Suspense = D, S.isAsyncMode = X, S.isConcurrentMode = e, S.isContextConsumer = r, S.isContextProvider = a, S.isElement = i, S.isForwardRef = c, S.isFragment = p, S.isLazy = y, S.isMemo = m, S.isPortal = u, S.isProfiler = E, S.isStrictMode = T, S.isSuspense = I, S.isValidElementType = j, S.typeOf = A;
  }()), S;
}
var Re;
function Ce() {
  return Re || (Re = 1, process.env.NODE_ENV === "production" ? ae.exports = Ne() : ae.exports = De()), ae.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ie, ge;
function Le() {
  if (ge) return ie;
  ge = 1;
  var t = Object.getOwnPropertySymbols, R = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
  function l(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function f() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var v = {}, d = 0; d < 10; d++)
        v["_" + String.fromCharCode(d)] = d;
      var P = Object.getOwnPropertyNames(v).map(function(h) {
        return v[h];
      });
      if (P.join("") !== "0123456789")
        return !1;
      var O = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        O[h] = h;
      }), Object.keys(Object.assign({}, O)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ie = f() ? Object.assign : function(s, v) {
    for (var d, P = l(s), O, h = 1; h < arguments.length; h++) {
      d = Object(arguments[h]);
      for (var g in d)
        R.call(d, g) && (P[g] = d[g]);
      if (t) {
        O = t(d);
        for (var x = 0; x < O.length; x++)
          b.call(d, O[x]) && (P[O[x]] = d[O[x]]);
      }
    }
    return P;
  }, ie;
}
var se, _e;
function de() {
  if (_e) return se;
  _e = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return se = t, se;
}
var ce, Se;
function Ae() {
  return Se || (Se = 1, ce = Function.call.bind(Object.prototype.hasOwnProperty)), ce;
}
var ue, Oe;
function We() {
  if (Oe) return ue;
  Oe = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var R = /* @__PURE__ */ de(), b = {}, l = /* @__PURE__ */ Ae();
    t = function(s) {
      var v = "Warning: " + s;
      typeof console < "u" && console.error(v);
      try {
        throw new Error(v);
      } catch {
      }
    };
  }
  function f(s, v, d, P, O) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in s)
        if (l(s, h)) {
          var g;
          try {
            if (typeof s[h] != "function") {
              var x = Error(
                (P || "React class") + ": " + d + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw x.name = "Invariant Violation", x;
            }
            g = s[h](v, h, P, d, null, R);
          } catch ($) {
            g = $;
          }
          if (g && !(g instanceof Error) && t(
            (P || "React class") + ": type specification of " + d + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in b)) {
            b[g.message] = !0;
            var C = O ? O() : "";
            t(
              "Failed " + d + " type: " + g.message + (C ?? "")
            );
          }
        }
    }
  }
  return f.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (b = {});
  }, ue = f, ue;
}
var fe, Pe;
function Fe() {
  if (Pe) return fe;
  Pe = 1;
  var t = Ce(), R = Le(), b = /* @__PURE__ */ de(), l = /* @__PURE__ */ Ae(), f = /* @__PURE__ */ We(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(d) {
    var P = "Warning: " + d;
    typeof console < "u" && console.error(P);
    try {
      throw new Error(P);
    } catch {
    }
  });
  function v() {
    return null;
  }
  return fe = function(d, P) {
    var O = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function g(e) {
      var r = e && (O && e[O] || e[h]);
      if (typeof r == "function")
        return r;
    }
    var x = "<<anonymous>>", C = {
      array: Y("array"),
      bigint: Y("bigint"),
      bool: Y("boolean"),
      func: Y("function"),
      number: Y("number"),
      object: Y("object"),
      string: Y("string"),
      symbol: Y("symbol"),
      any: U(),
      arrayOf: j,
      element: A(),
      elementType: o(),
      instanceOf: W,
      node: Q(),
      objectOf: V,
      oneOf: H,
      oneOfType: Z,
      shape: B,
      exact: K
    };
    function $(e, r) {
      return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
    }
    function w(e, r) {
      this.message = e, this.data = r && typeof r == "object" ? r : {}, this.stack = "";
    }
    w.prototype = Error.prototype;
    function k(e) {
      if (process.env.NODE_ENV !== "production")
        var r = {}, a = 0;
      function i(p, y, m, u, E, T, I) {
        if (u = u || x, T = T || m, I !== b) {
          if (P) {
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var L = u + ":" + m;
            !r[L] && // Avoid spamming the console because they are often not actionable except for lib authors
            a < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + T + "` prop on `" + u + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), r[L] = !0, a++);
          }
        }
        return y[m] == null ? p ? y[m] === null ? new w("The " + E + " `" + T + "` is marked as required " + ("in `" + u + "`, but its value is `null`.")) : new w("The " + E + " `" + T + "` is marked as required in " + ("`" + u + "`, but its value is `undefined`.")) : null : e(y, m, u, E, T);
      }
      var c = i.bind(null, !1);
      return c.isRequired = i.bind(null, !0), c;
    }
    function Y(e) {
      function r(a, i, c, p, y, m) {
        var u = a[i], E = q(u);
        if (E !== e) {
          var T = D(u);
          return new w(
            "Invalid " + p + " `" + y + "` of type " + ("`" + T + "` supplied to `" + c + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return k(r);
    }
    function U() {
      return k(v);
    }
    function j(e) {
      function r(a, i, c, p, y) {
        if (typeof e != "function")
          return new w("Property `" + y + "` of component `" + c + "` has invalid PropType notation inside arrayOf.");
        var m = a[i];
        if (!Array.isArray(m)) {
          var u = q(m);
          return new w("Invalid " + p + " `" + y + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected an array."));
        }
        for (var E = 0; E < m.length; E++) {
          var T = e(m, E, c, p, y + "[" + E + "]", b);
          if (T instanceof Error)
            return T;
        }
        return null;
      }
      return k(r);
    }
    function A() {
      function e(r, a, i, c, p) {
        var y = r[a];
        if (!d(y)) {
          var m = q(y);
          return new w("Invalid " + c + " `" + p + "` of type " + ("`" + m + "` supplied to `" + i + "`, expected a single ReactElement."));
        }
        return null;
      }
      return k(e);
    }
    function o() {
      function e(r, a, i, c, p) {
        var y = r[a];
        if (!t.isValidElementType(y)) {
          var m = q(y);
          return new w("Invalid " + c + " `" + p + "` of type " + ("`" + m + "` supplied to `" + i + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return k(e);
    }
    function W(e) {
      function r(a, i, c, p, y) {
        if (!(a[i] instanceof e)) {
          var m = e.name || x, u = X(a[i]);
          return new w("Invalid " + p + " `" + y + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected ") + ("instance of `" + m + "`."));
        }
        return null;
      }
      return k(r);
    }
    function H(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), v;
      function r(a, i, c, p, y) {
        for (var m = a[i], u = 0; u < e.length; u++)
          if ($(m, e[u]))
            return null;
        var E = JSON.stringify(e, function(I, n) {
          var L = D(n);
          return L === "symbol" ? String(n) : n;
        });
        return new w("Invalid " + p + " `" + y + "` of value `" + String(m) + "` " + ("supplied to `" + c + "`, expected one of " + E + "."));
      }
      return k(r);
    }
    function V(e) {
      function r(a, i, c, p, y) {
        if (typeof e != "function")
          return new w("Property `" + y + "` of component `" + c + "` has invalid PropType notation inside objectOf.");
        var m = a[i], u = q(m);
        if (u !== "object")
          return new w("Invalid " + p + " `" + y + "` of type " + ("`" + u + "` supplied to `" + c + "`, expected an object."));
        for (var E in m)
          if (l(m, E)) {
            var T = e(m, E, c, p, y + "." + E, b);
            if (T instanceof Error)
              return T;
          }
        return null;
      }
      return k(r);
    }
    function Z(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), v;
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        if (typeof a != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + z(a) + " at index " + r + "."
          ), v;
      }
      function i(c, p, y, m, u) {
        for (var E = [], T = 0; T < e.length; T++) {
          var I = e[T], n = I(c, p, y, m, u, b);
          if (n == null)
            return null;
          n.data && l(n.data, "expectedType") && E.push(n.data.expectedType);
        }
        var L = E.length > 0 ? ", expected one of type [" + E.join(", ") + "]" : "";
        return new w("Invalid " + m + " `" + u + "` supplied to " + ("`" + y + "`" + L + "."));
      }
      return k(i);
    }
    function Q() {
      function e(r, a, i, c, p) {
        return N(r[a]) ? null : new w("Invalid " + c + " `" + p + "` supplied to " + ("`" + i + "`, expected a ReactNode."));
      }
      return k(e);
    }
    function F(e, r, a, i, c) {
      return new w(
        (e || "React class") + ": " + r + " type `" + a + "." + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + c + "`."
      );
    }
    function B(e) {
      function r(a, i, c, p, y) {
        var m = a[i], u = q(m);
        if (u !== "object")
          return new w("Invalid " + p + " `" + y + "` of type `" + u + "` " + ("supplied to `" + c + "`, expected `object`."));
        for (var E in e) {
          var T = e[E];
          if (typeof T != "function")
            return F(c, p, y, E, D(T));
          var I = T(m, E, c, p, y + "." + E, b);
          if (I)
            return I;
        }
        return null;
      }
      return k(r);
    }
    function K(e) {
      function r(a, i, c, p, y) {
        var m = a[i], u = q(m);
        if (u !== "object")
          return new w("Invalid " + p + " `" + y + "` of type `" + u + "` " + ("supplied to `" + c + "`, expected `object`."));
        var E = R({}, a[i], e);
        for (var T in E) {
          var I = e[T];
          if (l(e, T) && typeof I != "function")
            return F(c, p, y, T, D(I));
          if (!I)
            return new w(
              "Invalid " + p + " `" + y + "` key `" + T + "` supplied to `" + c + "`.\nBad object: " + JSON.stringify(a[i], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var n = I(m, T, c, p, y + "." + T, b);
          if (n)
            return n;
        }
        return null;
      }
      return k(r);
    }
    function N(e) {
      switch (typeof e) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !e;
        case "object":
          if (Array.isArray(e))
            return e.every(N);
          if (e === null || d(e))
            return !0;
          var r = g(e);
          if (r) {
            var a = r.call(e), i;
            if (r !== e.entries) {
              for (; !(i = a.next()).done; )
                if (!N(i.value))
                  return !1;
            } else
              for (; !(i = a.next()).done; ) {
                var c = i.value;
                if (c && !N(c[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function J(e, r) {
      return e === "symbol" ? !0 : r ? r["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && r instanceof Symbol : !1;
    }
    function q(e) {
      var r = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : J(r, e) ? "symbol" : r;
    }
    function D(e) {
      if (typeof e > "u" || e === null)
        return "" + e;
      var r = q(e);
      if (r === "object") {
        if (e instanceof Date)
          return "date";
        if (e instanceof RegExp)
          return "regexp";
      }
      return r;
    }
    function z(e) {
      var r = D(e);
      switch (r) {
        case "array":
        case "object":
          return "an " + r;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + r;
        default:
          return r;
      }
    }
    function X(e) {
      return !e.constructor || !e.constructor.name ? x : e.constructor.name;
    }
    return C.checkPropTypes = f, C.resetWarningCache = f.resetWarningCache, C.PropTypes = C, C;
  }, fe;
}
var le, we;
function Ue() {
  if (we) return le;
  we = 1;
  var t = /* @__PURE__ */ de();
  function R() {
  }
  function b() {
  }
  return b.resetWarningCache = R, le = function() {
    function l(v, d, P, O, h, g) {
      if (g !== t) {
        var x = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw x.name = "Invariant Violation", x;
      }
    }
    l.isRequired = l;
    function f() {
      return l;
    }
    var s = {
      array: l,
      bigint: l,
      bool: l,
      func: l,
      number: l,
      object: l,
      string: l,
      symbol: l,
      any: l,
      arrayOf: f,
      element: l,
      elementType: l,
      instanceOf: f,
      node: l,
      objectOf: f,
      oneOf: f,
      oneOfType: f,
      shape: f,
      exact: f,
      checkPropTypes: b,
      resetWarningCache: R
    };
    return s.PropTypes = s, s;
  }, le;
}
var xe;
function ze() {
  if (xe) return oe.exports;
  if (xe = 1, process.env.NODE_ENV !== "production") {
    var t = Ce(), R = !0;
    oe.exports = /* @__PURE__ */ Fe()(t.isElement, R);
  } else
    oe.exports = /* @__PURE__ */ Ue()();
  return oe.exports;
}
var Ve = /* @__PURE__ */ ze();
const M = /* @__PURE__ */ Me(Ve);
function Be({ options: t, ...R }) {
  const b = ["wh-select", className].filter(Boolean).join(" ");
  return /* @__PURE__ */ G.jsx("select", { className: b, ...R, children: t.map(({ label: l, value: f }) => /* @__PURE__ */ G.jsx("option", { value: f, children: l }, f)) });
}
Be.propTypes = {
  options: M.arrayOf(
    M.shape({
      label: M.string.isRequired,
      value: M.string.isRequired
    })
  ).isRequired
};
function Je({ className: t, ...R }) {
  const b = ["wh-date-input", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ G.jsx("input", { type: "date", className: b, ...R });
}
Je.propTypes = {
  className: M.string,
  id: M.string,
  name: M.string,
  required: M.bool,
  min: M.string,
  max: M.string,
  onChange: M.func,
  value: M.string
};
const Xe = (t) => /* @__PURE__ */ ve.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...t }, /* @__PURE__ */ ve.createElement("path", { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" }));
function Ge({ isOpen: t, onClose: R, labelledBy: b, children: l }) {
  const f = ke(null), s = document.getElementById("modal");
  return ye(() => {
    const v = f.current;
    v && (t && !v.open ? v.showModal() : !t && v.open && v.close());
  }, [t]), ye(() => {
    const v = f.current;
    if (!v) return;
    const d = (P) => {
      P.preventDefault(), R();
    };
    return v.addEventListener("cancel", d), () => {
      v.removeEventListener("cancel", d);
    };
  }, [R]), s ? Ie(
    /* @__PURE__ */ G.jsxs(
      "dialog",
      {
        className: "wh-modal",
        ref: f,
        ...b ? { "aria-labelledby": b } : { "aria-label": "Dialog" },
        children: [
          /* @__PURE__ */ G.jsx(
            "button",
            {
              type: "button",
              onClick: R,
              "aria-label": "Close modal",
              className: "wh-modal-close",
              children: /* @__PURE__ */ G.jsx(Xe, {})
            }
          ),
          l
        ]
      }
    ),
    s
  ) : null;
}
Ge.propTypes = {
  isOpen: M.bool.isRequired,
  onClose: M.func.isRequired,
  labelledBy: M.string,
  children: M.node.isRequired
};
export {
  Je as DateInput,
  Ge as Modal,
  Be as SelectInput
};
