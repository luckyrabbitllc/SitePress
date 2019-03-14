!(function(t) {
  var e = {};
  function n(i) {
    if (e[i]) return e[i].exports;
    var o = (e[i] = { i: i, l: !1, exports: {} });
    return t[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function(t, e, i) {
      n.o(t, e) ||
        Object.defineProperty(t, e, {
          configurable: !1,
          enumerable: !0,
          get: i
        });
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function(t, e, n) {
    n(1), n(4), (t.exports = n(5));
  },
  function(t, e, n) {
    try {
      (window.$ = window.jQuery = n(2)), n(3);
    } catch (t) {}
  },
  function(t, e, n) {
    var i;
    !(function(e, n) {
      "use strict";
      "object" == typeof t && "object" == typeof t.exports
        ? (t.exports = e.document
            ? n(e, !0)
            : function(t) {
                if (!t.document)
                  throw new Error("jQuery requires a window with a document");
                return n(t);
              })
        : n(e);
    })("undefined" != typeof window ? window : this, function(n, o) {
      "use strict";
      var r = [],
        s = n.document,
        a = Object.getPrototypeOf,
        l = r.slice,
        u = r.concat,
        c = r.push,
        f = r.indexOf,
        p = {},
        d = p.toString,
        h = p.hasOwnProperty,
        g = h.toString,
        v = g.call(Object),
        m = {},
        y = function(t) {
          return "function" == typeof t && "number" != typeof t.nodeType;
        },
        b = function(t) {
          return null != t && t === t.window;
        },
        x = { type: !0, src: !0, noModule: !0 };
      function w(t, e, n) {
        var i,
          o = (e = e || s).createElement("script");
        if (((o.text = t), n)) for (i in x) n[i] && (o[i] = n[i]);
        e.head.appendChild(o).parentNode.removeChild(o);
      }
      function T(t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
          ? p[d.call(t)] || "object"
          : typeof t;
      }
      var C = function(t, e) {
          return new C.fn.init(t, e);
        },
        E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      function S(t) {
        var e = !!t && "length" in t && t.length,
          n = T(t);
        return (
          !y(t) &&
          !b(t) &&
          ("array" === n ||
            0 === e ||
            ("number" == typeof e && e > 0 && e - 1 in t))
        );
      }
      (C.fn = C.prototype = {
        jquery: "3.3.1",
        constructor: C,
        length: 0,
        toArray: function() {
          return l.call(this);
        },
        get: function(t) {
          return null == t
            ? l.call(this)
            : t < 0
            ? this[t + this.length]
            : this[t];
        },
        pushStack: function(t) {
          var e = C.merge(this.constructor(), t);
          return (e.prevObject = this), e;
        },
        each: function(t) {
          return C.each(this, t);
        },
        map: function(t) {
          return this.pushStack(
            C.map(this, function(e, n) {
              return t.call(e, n, e);
            })
          );
        },
        slice: function() {
          return this.pushStack(l.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        eq: function(t) {
          var e = this.length,
            n = +t + (t < 0 ? e : 0);
          return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        push: c,
        sort: r.sort,
        splice: r.splice
      }),
        (C.extend = C.fn.extend = function() {
          var t,
            e,
            n,
            i,
            o,
            r,
            s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
          for (
            "boolean" == typeof s && ((u = s), (s = arguments[a] || {}), a++),
              "object" == typeof s || y(s) || (s = {}),
              a === l && ((s = this), a--);
            a < l;
            a++
          )
            if (null != (t = arguments[a]))
              for (e in t)
                (n = s[e]),
                  s !== (i = t[e]) &&
                    (u && i && (C.isPlainObject(i) || (o = Array.isArray(i)))
                      ? (o
                          ? ((o = !1), (r = n && Array.isArray(n) ? n : []))
                          : (r = n && C.isPlainObject(n) ? n : {}),
                        (s[e] = C.extend(u, r, i)))
                      : void 0 !== i && (s[e] = i));
          return s;
        }),
        C.extend({
          expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function(t) {
            throw new Error(t);
          },
          noop: function() {},
          isPlainObject: function(t) {
            var e, n;
            return (
              !(!t || "[object Object]" !== d.call(t)) &&
              (!(e = a(t)) ||
                ("function" ==
                  typeof (n = h.call(e, "constructor") && e.constructor) &&
                  g.call(n) === v))
            );
          },
          isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0;
          },
          globalEval: function(t) {
            w(t);
          },
          each: function(t, e) {
            var n,
              i = 0;
            if (S(t))
              for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
            else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
            return t;
          },
          trim: function(t) {
            return null == t ? "" : (t + "").replace(E, "");
          },
          makeArray: function(t, e) {
            var n = e || [];
            return (
              null != t &&
                (S(Object(t))
                  ? C.merge(n, "string" == typeof t ? [t] : t)
                  : c.call(n, t)),
              n
            );
          },
          inArray: function(t, e, n) {
            return null == e ? -1 : f.call(e, t, n);
          },
          merge: function(t, e) {
            for (var n = +e.length, i = 0, o = t.length; i < n; i++)
              t[o++] = e[i];
            return (t.length = o), t;
          },
          grep: function(t, e, n) {
            for (var i = [], o = 0, r = t.length, s = !n; o < r; o++)
              !e(t[o], o) !== s && i.push(t[o]);
            return i;
          },
          map: function(t, e, n) {
            var i,
              o,
              r = 0,
              s = [];
            if (S(t))
              for (i = t.length; r < i; r++)
                null != (o = e(t[r], r, n)) && s.push(o);
            else for (r in t) null != (o = e(t[r], r, n)) && s.push(o);
            return u.apply([], s);
          },
          guid: 1,
          support: m
        }),
        "function" == typeof Symbol &&
          (C.fn[Symbol.iterator] = r[Symbol.iterator]),
        C.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function(t, e) {
            p["[object " + e + "]"] = e.toLowerCase();
          }
        );
      var $ = (function(t) {
        var e,
          n,
          i,
          o,
          r,
          s,
          a,
          l,
          u,
          c,
          f,
          p,
          d,
          h,
          g,
          v,
          m,
          y,
          b,
          x = "sizzle" + 1 * new Date(),
          w = t.document,
          T = 0,
          C = 0,
          E = st(),
          S = st(),
          $ = st(),
          k = function(t, e) {
            return t === e && (f = !0), 0;
          },
          D = {}.hasOwnProperty,
          N = [],
          A = N.pop,
          j = N.push,
          O = N.push,
          I = N.slice,
          L = function(t, e) {
            for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
            return -1;
          },
          R =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          q = "[\\x20\\t\\r\\n\\f]",
          P = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          H =
            "\\[" +
            q +
            "*(" +
            P +
            ")(?:" +
            q +
            "*([*^$|!~]?=)" +
            q +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            P +
            "))|)" +
            q +
            "*\\]",
          M =
            ":(" +
            P +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            H +
            ")*)|.*)\\)|)",
          W = new RegExp(q + "+", "g"),
          F = new RegExp(
            "^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$",
            "g"
          ),
          B = new RegExp("^" + q + "*," + q + "*"),
          U = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
          _ = new RegExp("=" + q + "*([^\\]'\"]*?)" + q + "*\\]", "g"),
          z = new RegExp(M),
          V = new RegExp("^" + P + "$"),
          Q = {
            ID: new RegExp("^#(" + P + ")"),
            CLASS: new RegExp("^\\.(" + P + ")"),
            TAG: new RegExp("^(" + P + "|[*])"),
            ATTR: new RegExp("^" + H),
            PSEUDO: new RegExp("^" + M),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                q +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                q +
                "*(?:([+-]|)" +
                q +
                "*(\\d+)|))" +
                q +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + R + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                q +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                q +
                "*((?:-\\d)?\\d*)" +
                q +
                "*\\)|)(?=[^-]|$)",
              "i"
            )
          },
          X = /^(?:input|select|textarea|button)$/i,
          G = /^h\d$/i,
          Y = /^[^{]+\{\s*\[native \w/,
          J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          K = /[+~]/,
          Z = new RegExp("\\\\([\\da-f]{1,6}" + q + "?|(" + q + ")|.)", "ig"),
          tt = function(t, e, n) {
            var i = "0x" + e - 65536;
            return i != i || n
              ? e
              : i < 0
              ? String.fromCharCode(i + 65536)
              : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
          },
          et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          nt = function(t, e) {
            return e
              ? "\0" === t
                ? "�"
                : t.slice(0, -1) +
                  "\\" +
                  t.charCodeAt(t.length - 1).toString(16) +
                  " "
              : "\\" + t;
          },
          it = function() {
            p();
          },
          ot = yt(
            function(t) {
              return !0 === t.disabled && ("form" in t || "label" in t);
            },
            { dir: "parentNode", next: "legend" }
          );
        try {
          O.apply((N = I.call(w.childNodes)), w.childNodes),
            N[w.childNodes.length].nodeType;
        } catch (t) {
          O = {
            apply: N.length
              ? function(t, e) {
                  j.apply(t, I.call(e));
                }
              : function(t, e) {
                  for (var n = t.length, i = 0; (t[n++] = e[i++]); );
                  t.length = n - 1;
                }
          };
        }
        function rt(t, e, i, o) {
          var r,
            a,
            u,
            c,
            f,
            h,
            m,
            y = e && e.ownerDocument,
            T = e ? e.nodeType : 9;
          if (
            ((i = i || []),
            "string" != typeof t || !t || (1 !== T && 9 !== T && 11 !== T))
          )
            return i;
          if (
            !o &&
            ((e ? e.ownerDocument || e : w) !== d && p(e), (e = e || d), g)
          ) {
            if (11 !== T && (f = J.exec(t)))
              if ((r = f[1])) {
                if (9 === T) {
                  if (!(u = e.getElementById(r))) return i;
                  if (u.id === r) return i.push(u), i;
                } else if (
                  y &&
                  (u = y.getElementById(r)) &&
                  b(e, u) &&
                  u.id === r
                )
                  return i.push(u), i;
              } else {
                if (f[2]) return O.apply(i, e.getElementsByTagName(t)), i;
                if (
                  (r = f[3]) &&
                  n.getElementsByClassName &&
                  e.getElementsByClassName
                )
                  return O.apply(i, e.getElementsByClassName(r)), i;
              }
            if (n.qsa && !$[t + " "] && (!v || !v.test(t))) {
              if (1 !== T) (y = e), (m = t);
              else if ("object" !== e.nodeName.toLowerCase()) {
                for (
                  (c = e.getAttribute("id"))
                    ? (c = c.replace(et, nt))
                    : e.setAttribute("id", (c = x)),
                    a = (h = s(t)).length;
                  a--;

                )
                  h[a] = "#" + c + " " + mt(h[a]);
                (m = h.join(",")), (y = (K.test(t) && gt(e.parentNode)) || e);
              }
              if (m)
                try {
                  return O.apply(i, y.querySelectorAll(m)), i;
                } catch (t) {
                } finally {
                  c === x && e.removeAttribute("id");
                }
            }
          }
          return l(t.replace(F, "$1"), e, i, o);
        }
        function st() {
          var t = [];
          return function e(n, o) {
            return (
              t.push(n + " ") > i.cacheLength && delete e[t.shift()],
              (e[n + " "] = o)
            );
          };
        }
        function at(t) {
          return (t[x] = !0), t;
        }
        function lt(t) {
          var e = d.createElement("fieldset");
          try {
            return !!t(e);
          } catch (t) {
            return !1;
          } finally {
            e.parentNode && e.parentNode.removeChild(e), (e = null);
          }
        }
        function ut(t, e) {
          for (var n = t.split("|"), o = n.length; o--; )
            i.attrHandle[n[o]] = e;
        }
        function ct(t, e) {
          var n = e && t,
            i =
              n &&
              1 === t.nodeType &&
              1 === e.nodeType &&
              t.sourceIndex - e.sourceIndex;
          if (i) return i;
          if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
          return t ? 1 : -1;
        }
        function ft(t) {
          return function(e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t;
          };
        }
        function pt(t) {
          return function(e) {
            var n = e.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && e.type === t;
          };
        }
        function dt(t) {
          return function(e) {
            return "form" in e
              ? e.parentNode && !1 === e.disabled
                ? "label" in e
                  ? "label" in e.parentNode
                    ? e.parentNode.disabled === t
                    : e.disabled === t
                  : e.isDisabled === t || (e.isDisabled !== !t && ot(e) === t)
                : e.disabled === t
              : "label" in e && e.disabled === t;
          };
        }
        function ht(t) {
          return at(function(e) {
            return (
              (e = +e),
              at(function(n, i) {
                for (var o, r = t([], n.length, e), s = r.length; s--; )
                  n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
              })
            );
          });
        }
        function gt(t) {
          return t && void 0 !== t.getElementsByTagName && t;
        }
        for (e in ((n = rt.support = {}),
        (r = rt.isXML = function(t) {
          var e = t && (t.ownerDocument || t).documentElement;
          return !!e && "HTML" !== e.nodeName;
        }),
        (p = rt.setDocument = function(t) {
          var e,
            o,
            s = t ? t.ownerDocument || t : w;
          return s !== d && 9 === s.nodeType && s.documentElement
            ? ((h = (d = s).documentElement),
              (g = !r(d)),
              w !== d &&
                (o = d.defaultView) &&
                o.top !== o &&
                (o.addEventListener
                  ? o.addEventListener("unload", it, !1)
                  : o.attachEvent && o.attachEvent("onunload", it)),
              (n.attributes = lt(function(t) {
                return (t.className = "i"), !t.getAttribute("className");
              })),
              (n.getElementsByTagName = lt(function(t) {
                return (
                  t.appendChild(d.createComment("")),
                  !t.getElementsByTagName("*").length
                );
              })),
              (n.getElementsByClassName = Y.test(d.getElementsByClassName)),
              (n.getById = lt(function(t) {
                return (
                  (h.appendChild(t).id = x),
                  !d.getElementsByName || !d.getElementsByName(x).length
                );
              })),
              n.getById
                ? ((i.filter.ID = function(t) {
                    var e = t.replace(Z, tt);
                    return function(t) {
                      return t.getAttribute("id") === e;
                    };
                  }),
                  (i.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && g) {
                      var n = e.getElementById(t);
                      return n ? [n] : [];
                    }
                  }))
                : ((i.filter.ID = function(t) {
                    var e = t.replace(Z, tt);
                    return function(t) {
                      var n =
                        void 0 !== t.getAttributeNode &&
                        t.getAttributeNode("id");
                      return n && n.value === e;
                    };
                  }),
                  (i.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && g) {
                      var n,
                        i,
                        o,
                        r = e.getElementById(t);
                      if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === t)
                          return [r];
                        for (o = e.getElementsByName(t), i = 0; (r = o[i++]); )
                          if ((n = r.getAttributeNode("id")) && n.value === t)
                            return [r];
                      }
                      return [];
                    }
                  })),
              (i.find.TAG = n.getElementsByTagName
                ? function(t, e) {
                    return void 0 !== e.getElementsByTagName
                      ? e.getElementsByTagName(t)
                      : n.qsa
                      ? e.querySelectorAll(t)
                      : void 0;
                  }
                : function(t, e) {
                    var n,
                      i = [],
                      o = 0,
                      r = e.getElementsByTagName(t);
                    if ("*" === t) {
                      for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                      return i;
                    }
                    return r;
                  }),
              (i.find.CLASS =
                n.getElementsByClassName &&
                function(t, e) {
                  if (void 0 !== e.getElementsByClassName && g)
                    return e.getElementsByClassName(t);
                }),
              (m = []),
              (v = []),
              (n.qsa = Y.test(d.querySelectorAll)) &&
                (lt(function(t) {
                  (h.appendChild(t).innerHTML =
                    "<a id='" +
                    x +
                    "'></a><select id='" +
                    x +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    t.querySelectorAll("[msallowcapture^='']").length &&
                      v.push("[*^$]=" + q + "*(?:''|\"\")"),
                    t.querySelectorAll("[selected]").length ||
                      v.push("\\[" + q + "*(?:value|" + R + ")"),
                    t.querySelectorAll("[id~=" + x + "-]").length ||
                      v.push("~="),
                    t.querySelectorAll(":checked").length || v.push(":checked"),
                    t.querySelectorAll("a#" + x + "+*").length ||
                      v.push(".#.+[+~]");
                }),
                lt(function(t) {
                  t.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var e = d.createElement("input");
                  e.setAttribute("type", "hidden"),
                    t.appendChild(e).setAttribute("name", "D"),
                    t.querySelectorAll("[name=d]").length &&
                      v.push("name" + q + "*[*^$|!~]?="),
                    2 !== t.querySelectorAll(":enabled").length &&
                      v.push(":enabled", ":disabled"),
                    (h.appendChild(t).disabled = !0),
                    2 !== t.querySelectorAll(":disabled").length &&
                      v.push(":enabled", ":disabled"),
                    t.querySelectorAll("*,:x"),
                    v.push(",.*:");
                })),
              (n.matchesSelector = Y.test(
                (y =
                  h.matches ||
                  h.webkitMatchesSelector ||
                  h.mozMatchesSelector ||
                  h.oMatchesSelector ||
                  h.msMatchesSelector)
              )) &&
                lt(function(t) {
                  (n.disconnectedMatch = y.call(t, "*")),
                    y.call(t, "[s!='']:x"),
                    m.push("!=", M);
                }),
              (v = v.length && new RegExp(v.join("|"))),
              (m = m.length && new RegExp(m.join("|"))),
              (e = Y.test(h.compareDocumentPosition)),
              (b =
                e || Y.test(h.contains)
                  ? function(t, e) {
                      var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                      return (
                        t === i ||
                        !(
                          !i ||
                          1 !== i.nodeType ||
                          !(n.contains
                            ? n.contains(i)
                            : t.compareDocumentPosition &&
                              16 & t.compareDocumentPosition(i))
                        )
                      );
                    }
                  : function(t, e) {
                      if (e)
                        for (; (e = e.parentNode); ) if (e === t) return !0;
                      return !1;
                    }),
              (k = e
                ? function(t, e) {
                    if (t === e) return (f = !0), 0;
                    var i =
                      !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return (
                      i ||
                      (1 &
                        (i =
                          (t.ownerDocument || t) === (e.ownerDocument || e)
                            ? t.compareDocumentPosition(e)
                            : 1) ||
                      (!n.sortDetached && e.compareDocumentPosition(t) === i)
                        ? t === d || (t.ownerDocument === w && b(w, t))
                          ? -1
                          : e === d || (e.ownerDocument === w && b(w, e))
                          ? 1
                          : c
                          ? L(c, t) - L(c, e)
                          : 0
                        : 4 & i
                        ? -1
                        : 1)
                    );
                  }
                : function(t, e) {
                    if (t === e) return (f = !0), 0;
                    var n,
                      i = 0,
                      o = t.parentNode,
                      r = e.parentNode,
                      s = [t],
                      a = [e];
                    if (!o || !r)
                      return t === d
                        ? -1
                        : e === d
                        ? 1
                        : o
                        ? -1
                        : r
                        ? 1
                        : c
                        ? L(c, t) - L(c, e)
                        : 0;
                    if (o === r) return ct(t, e);
                    for (n = t; (n = n.parentNode); ) s.unshift(n);
                    for (n = e; (n = n.parentNode); ) a.unshift(n);
                    for (; s[i] === a[i]; ) i++;
                    return i
                      ? ct(s[i], a[i])
                      : s[i] === w
                      ? -1
                      : a[i] === w
                      ? 1
                      : 0;
                  }),
              d)
            : d;
        }),
        (rt.matches = function(t, e) {
          return rt(t, null, null, e);
        }),
        (rt.matchesSelector = function(t, e) {
          if (
            ((t.ownerDocument || t) !== d && p(t),
            (e = e.replace(_, "='$1']")),
            n.matchesSelector &&
              g &&
              !$[e + " "] &&
              (!m || !m.test(e)) &&
              (!v || !v.test(e)))
          )
            try {
              var i = y.call(t, e);
              if (
                i ||
                n.disconnectedMatch ||
                (t.document && 11 !== t.document.nodeType)
              )
                return i;
            } catch (t) {}
          return rt(e, d, null, [t]).length > 0;
        }),
        (rt.contains = function(t, e) {
          return (t.ownerDocument || t) !== d && p(t), b(t, e);
        }),
        (rt.attr = function(t, e) {
          (t.ownerDocument || t) !== d && p(t);
          var o = i.attrHandle[e.toLowerCase()],
            r =
              o && D.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
          return void 0 !== r
            ? r
            : n.attributes || !g
            ? t.getAttribute(e)
            : (r = t.getAttributeNode(e)) && r.specified
            ? r.value
            : null;
        }),
        (rt.escape = function(t) {
          return (t + "").replace(et, nt);
        }),
        (rt.error = function(t) {
          throw new Error("Syntax error, unrecognized expression: " + t);
        }),
        (rt.uniqueSort = function(t) {
          var e,
            i = [],
            o = 0,
            r = 0;
          if (
            ((f = !n.detectDuplicates),
            (c = !n.sortStable && t.slice(0)),
            t.sort(k),
            f)
          ) {
            for (; (e = t[r++]); ) e === t[r] && (o = i.push(r));
            for (; o--; ) t.splice(i[o], 1);
          }
          return (c = null), t;
        }),
        (o = rt.getText = function(t) {
          var e,
            n = "",
            i = 0,
            r = t.nodeType;
          if (r) {
            if (1 === r || 9 === r || 11 === r) {
              if ("string" == typeof t.textContent) return t.textContent;
              for (t = t.firstChild; t; t = t.nextSibling) n += o(t);
            } else if (3 === r || 4 === r) return t.nodeValue;
          } else for (; (e = t[i++]); ) n += o(e);
          return n;
        }),
        ((i = rt.selectors = {
          cacheLength: 50,
          createPseudo: at,
          match: Q,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" }
          },
          preFilter: {
            ATTR: function(t) {
              return (
                (t[1] = t[1].replace(Z, tt)),
                (t[3] = (t[3] || t[4] || t[5] || "").replace(Z, tt)),
                "~=" === t[2] && (t[3] = " " + t[3] + " "),
                t.slice(0, 4)
              );
            },
            CHILD: function(t) {
              return (
                (t[1] = t[1].toLowerCase()),
                "nth" === t[1].slice(0, 3)
                  ? (t[3] || rt.error(t[0]),
                    (t[4] = +(t[4]
                      ? t[5] + (t[6] || 1)
                      : 2 * ("even" === t[3] || "odd" === t[3]))),
                    (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                  : t[3] && rt.error(t[0]),
                t
              );
            },
            PSEUDO: function(t) {
              var e,
                n = !t[6] && t[2];
              return Q.CHILD.test(t[0])
                ? null
                : (t[3]
                    ? (t[2] = t[4] || t[5] || "")
                    : n &&
                      z.test(n) &&
                      (e = s(n, !0)) &&
                      (e = n.indexOf(")", n.length - e) - n.length) &&
                      ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                  t.slice(0, 3));
            }
          },
          filter: {
            TAG: function(t) {
              var e = t.replace(Z, tt).toLowerCase();
              return "*" === t
                ? function() {
                    return !0;
                  }
                : function(t) {
                    return t.nodeName && t.nodeName.toLowerCase() === e;
                  };
            },
            CLASS: function(t) {
              var e = E[t + " "];
              return (
                e ||
                ((e = new RegExp("(^|" + q + ")" + t + "(" + q + "|$)")) &&
                  E(t, function(t) {
                    return e.test(
                      ("string" == typeof t.className && t.className) ||
                        (void 0 !== t.getAttribute &&
                          t.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function(t, e, n) {
              return function(i) {
                var o = rt.attr(i, t);
                return null == o
                  ? "!=" === e
                  : !e ||
                      ((o += ""),
                      "=" === e
                        ? o === n
                        : "!=" === e
                        ? o !== n
                        : "^=" === e
                        ? n && 0 === o.indexOf(n)
                        : "*=" === e
                        ? n && o.indexOf(n) > -1
                        : "$=" === e
                        ? n && o.slice(-n.length) === n
                        : "~=" === e
                        ? (" " + o.replace(W, " ") + " ").indexOf(n) > -1
                        : "|=" === e &&
                          (o === n || o.slice(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function(t, e, n, i, o) {
              var r = "nth" !== t.slice(0, 3),
                s = "last" !== t.slice(-4),
                a = "of-type" === e;
              return 1 === i && 0 === o
                ? function(t) {
                    return !!t.parentNode;
                  }
                : function(e, n, l) {
                    var u,
                      c,
                      f,
                      p,
                      d,
                      h,
                      g = r !== s ? "nextSibling" : "previousSibling",
                      v = e.parentNode,
                      m = a && e.nodeName.toLowerCase(),
                      y = !l && !a,
                      b = !1;
                    if (v) {
                      if (r) {
                        for (; g; ) {
                          for (p = e; (p = p[g]); )
                            if (
                              a
                                ? p.nodeName.toLowerCase() === m
                                : 1 === p.nodeType
                            )
                              return !1;
                          h = g = "only" === t && !h && "nextSibling";
                        }
                        return !0;
                      }
                      if (((h = [s ? v.firstChild : v.lastChild]), s && y)) {
                        for (
                          b =
                            (d =
                              (u =
                                (c =
                                  (f = (p = v)[x] || (p[x] = {}))[p.uniqueID] ||
                                  (f[p.uniqueID] = {}))[t] || [])[0] === T &&
                              u[1]) && u[2],
                            p = d && v.childNodes[d];
                          (p = (++d && p && p[g]) || (b = d = 0) || h.pop());

                        )
                          if (1 === p.nodeType && ++b && p === e) {
                            c[t] = [T, d, b];
                            break;
                          }
                      } else if (
                        (y &&
                          (b = d =
                            (u =
                              (c =
                                (f = (p = e)[x] || (p[x] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[t] || [])[0] === T &&
                            u[1]),
                        !1 === b)
                      )
                        for (
                          ;
                          (p = (++d && p && p[g]) || (b = d = 0) || h.pop()) &&
                          ((a
                            ? p.nodeName.toLowerCase() !== m
                            : 1 !== p.nodeType) ||
                            !++b ||
                            (y &&
                              ((c =
                                (f = p[x] || (p[x] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[t] = [T, b]),
                            p !== e));

                        );
                      return (b -= o) === i || (b % i == 0 && b / i >= 0);
                    }
                  };
            },
            PSEUDO: function(t, e) {
              var n,
                o =
                  i.pseudos[t] ||
                  i.setFilters[t.toLowerCase()] ||
                  rt.error("unsupported pseudo: " + t);
              return o[x]
                ? o(e)
                : o.length > 1
                ? ((n = [t, t, "", e]),
                  i.setFilters.hasOwnProperty(t.toLowerCase())
                    ? at(function(t, n) {
                        for (var i, r = o(t, e), s = r.length; s--; )
                          t[(i = L(t, r[s]))] = !(n[i] = r[s]);
                      })
                    : function(t) {
                        return o(t, 0, n);
                      })
                : o;
            }
          },
          pseudos: {
            not: at(function(t) {
              var e = [],
                n = [],
                i = a(t.replace(F, "$1"));
              return i[x]
                ? at(function(t, e, n, o) {
                    for (var r, s = i(t, null, o, []), a = t.length; a--; )
                      (r = s[a]) && (t[a] = !(e[a] = r));
                  })
                : function(t, o, r) {
                    return (
                      (e[0] = t), i(e, null, r, n), (e[0] = null), !n.pop()
                    );
                  };
            }),
            has: at(function(t) {
              return function(e) {
                return rt(t, e).length > 0;
              };
            }),
            contains: at(function(t) {
              return (
                (t = t.replace(Z, tt)),
                function(e) {
                  return (e.textContent || e.innerText || o(e)).indexOf(t) > -1;
                }
              );
            }),
            lang: at(function(t) {
              return (
                V.test(t || "") || rt.error("unsupported lang: " + t),
                (t = t.replace(Z, tt).toLowerCase()),
                function(e) {
                  var n;
                  do {
                    if (
                      (n = g
                        ? e.lang
                        : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                      );
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1;
                }
              );
            }),
            target: function(e) {
              var n = t.location && t.location.hash;
              return n && n.slice(1) === e.id;
            },
            root: function(t) {
              return t === h;
            },
            focus: function(t) {
              return (
                t === d.activeElement &&
                (!d.hasFocus || d.hasFocus()) &&
                !!(t.type || t.href || ~t.tabIndex)
              );
            },
            enabled: dt(!1),
            disabled: dt(!0),
            checked: function(t) {
              var e = t.nodeName.toLowerCase();
              return (
                ("input" === e && !!t.checked) ||
                ("option" === e && !!t.selected)
              );
            },
            selected: function(t) {
              return (
                t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
              );
            },
            empty: function(t) {
              for (t = t.firstChild; t; t = t.nextSibling)
                if (t.nodeType < 6) return !1;
              return !0;
            },
            parent: function(t) {
              return !i.pseudos.empty(t);
            },
            header: function(t) {
              return G.test(t.nodeName);
            },
            input: function(t) {
              return X.test(t.nodeName);
            },
            button: function(t) {
              var e = t.nodeName.toLowerCase();
              return ("input" === e && "button" === t.type) || "button" === e;
            },
            text: function(t) {
              var e;
              return (
                "input" === t.nodeName.toLowerCase() &&
                "text" === t.type &&
                (null == (e = t.getAttribute("type")) ||
                  "text" === e.toLowerCase())
              );
            },
            first: ht(function() {
              return [0];
            }),
            last: ht(function(t, e) {
              return [e - 1];
            }),
            eq: ht(function(t, e, n) {
              return [n < 0 ? n + e : n];
            }),
            even: ht(function(t, e) {
              for (var n = 0; n < e; n += 2) t.push(n);
              return t;
            }),
            odd: ht(function(t, e) {
              for (var n = 1; n < e; n += 2) t.push(n);
              return t;
            }),
            lt: ht(function(t, e, n) {
              for (var i = n < 0 ? n + e : n; --i >= 0; ) t.push(i);
              return t;
            }),
            gt: ht(function(t, e, n) {
              for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
              return t;
            })
          }
        }).pseudos.nth = i.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          i.pseudos[e] = ft(e);
        for (e in { submit: !0, reset: !0 }) i.pseudos[e] = pt(e);
        function vt() {}
        function mt(t) {
          for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
          return i;
        }
        function yt(t, e, n) {
          var i = e.dir,
            o = e.next,
            r = o || i,
            s = n && "parentNode" === r,
            a = C++;
          return e.first
            ? function(e, n, o) {
                for (; (e = e[i]); )
                  if (1 === e.nodeType || s) return t(e, n, o);
                return !1;
              }
            : function(e, n, l) {
                var u,
                  c,
                  f,
                  p = [T, a];
                if (l) {
                  for (; (e = e[i]); )
                    if ((1 === e.nodeType || s) && t(e, n, l)) return !0;
                } else
                  for (; (e = e[i]); )
                    if (1 === e.nodeType || s)
                      if (
                        ((c =
                          (f = e[x] || (e[x] = {}))[e.uniqueID] ||
                          (f[e.uniqueID] = {})),
                        o && o === e.nodeName.toLowerCase())
                      )
                        e = e[i] || e;
                      else {
                        if ((u = c[r]) && u[0] === T && u[1] === a)
                          return (p[2] = u[2]);
                        if (((c[r] = p), (p[2] = t(e, n, l)))) return !0;
                      }
                return !1;
              };
        }
        function bt(t) {
          return t.length > 1
            ? function(e, n, i) {
                for (var o = t.length; o--; ) if (!t[o](e, n, i)) return !1;
                return !0;
              }
            : t[0];
        }
        function xt(t, e, n, i, o) {
          for (var r, s = [], a = 0, l = t.length, u = null != e; a < l; a++)
            (r = t[a]) && ((n && !n(r, i, o)) || (s.push(r), u && e.push(a)));
          return s;
        }
        function wt(t, e, n, i, o, r) {
          return (
            i && !i[x] && (i = wt(i)),
            o && !o[x] && (o = wt(o, r)),
            at(function(r, s, a, l) {
              var u,
                c,
                f,
                p = [],
                d = [],
                h = s.length,
                g =
                  r ||
                  (function(t, e, n) {
                    for (var i = 0, o = e.length; i < o; i++) rt(t, e[i], n);
                    return n;
                  })(e || "*", a.nodeType ? [a] : a, []),
                v = !t || (!r && e) ? g : xt(g, p, t, a, l),
                m = n ? (o || (r ? t : h || i) ? [] : s) : v;
              if ((n && n(v, m, a, l), i))
                for (u = xt(m, d), i(u, [], a, l), c = u.length; c--; )
                  (f = u[c]) && (m[d[c]] = !(v[d[c]] = f));
              if (r) {
                if (o || t) {
                  if (o) {
                    for (u = [], c = m.length; c--; )
                      (f = m[c]) && u.push((v[c] = f));
                    o(null, (m = []), u, l);
                  }
                  for (c = m.length; c--; )
                    (f = m[c]) &&
                      (u = o ? L(r, f) : p[c]) > -1 &&
                      (r[u] = !(s[u] = f));
                }
              } else (m = xt(m === s ? m.splice(h, m.length) : m)), o ? o(null, s, m, l) : O.apply(s, m);
            })
          );
        }
        function Tt(t) {
          for (
            var e,
              n,
              o,
              r = t.length,
              s = i.relative[t[0].type],
              a = s || i.relative[" "],
              l = s ? 1 : 0,
              c = yt(
                function(t) {
                  return t === e;
                },
                a,
                !0
              ),
              f = yt(
                function(t) {
                  return L(e, t) > -1;
                },
                a,
                !0
              ),
              p = [
                function(t, n, i) {
                  var o =
                    (!s && (i || n !== u)) ||
                    ((e = n).nodeType ? c(t, n, i) : f(t, n, i));
                  return (e = null), o;
                }
              ];
            l < r;
            l++
          )
            if ((n = i.relative[t[l].type])) p = [yt(bt(p), n)];
            else {
              if ((n = i.filter[t[l].type].apply(null, t[l].matches))[x]) {
                for (o = ++l; o < r && !i.relative[t[o].type]; o++);
                return wt(
                  l > 1 && bt(p),
                  l > 1 &&
                    mt(
                      t
                        .slice(0, l - 1)
                        .concat({ value: " " === t[l - 2].type ? "*" : "" })
                    ).replace(F, "$1"),
                  n,
                  l < o && Tt(t.slice(l, o)),
                  o < r && Tt((t = t.slice(o))),
                  o < r && mt(t)
                );
              }
              p.push(n);
            }
          return bt(p);
        }
        return (
          (vt.prototype = i.filters = i.pseudos),
          (i.setFilters = new vt()),
          (s = rt.tokenize = function(t, e) {
            var n,
              o,
              r,
              s,
              a,
              l,
              u,
              c = S[t + " "];
            if (c) return e ? 0 : c.slice(0);
            for (a = t, l = [], u = i.preFilter; a; ) {
              for (s in ((n && !(o = B.exec(a))) ||
                (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
              (n = !1),
              (o = U.exec(a)) &&
                ((n = o.shift()),
                r.push({ value: n, type: o[0].replace(F, " ") }),
                (a = a.slice(n.length))),
              i.filter))
                !(o = Q[s].exec(a)) ||
                  (u[s] && !(o = u[s](o))) ||
                  ((n = o.shift()),
                  r.push({ value: n, type: s, matches: o }),
                  (a = a.slice(n.length)));
              if (!n) break;
            }
            return e ? a.length : a ? rt.error(t) : S(t, l).slice(0);
          }),
          (a = rt.compile = function(t, e) {
            var n,
              o = [],
              r = [],
              a = $[t + " "];
            if (!a) {
              for (e || (e = s(t)), n = e.length; n--; )
                (a = Tt(e[n]))[x] ? o.push(a) : r.push(a);
              (a = $(
                t,
                (function(t, e) {
                  var n = e.length > 0,
                    o = t.length > 0,
                    r = function(r, s, a, l, c) {
                      var f,
                        h,
                        v,
                        m = 0,
                        y = "0",
                        b = r && [],
                        x = [],
                        w = u,
                        C = r || (o && i.find.TAG("*", c)),
                        E = (T += null == w ? 1 : Math.random() || 0.1),
                        S = C.length;
                      for (
                        c && (u = s === d || s || c);
                        y !== S && null != (f = C[y]);
                        y++
                      ) {
                        if (o && f) {
                          for (
                            h = 0,
                              s || f.ownerDocument === d || (p(f), (a = !g));
                            (v = t[h++]);

                          )
                            if (v(f, s || d, a)) {
                              l.push(f);
                              break;
                            }
                          c && (T = E);
                        }
                        n && ((f = !v && f) && m--, r && b.push(f));
                      }
                      if (((m += y), n && y !== m)) {
                        for (h = 0; (v = e[h++]); ) v(b, x, s, a);
                        if (r) {
                          if (m > 0)
                            for (; y--; ) b[y] || x[y] || (x[y] = A.call(l));
                          x = xt(x);
                        }
                        O.apply(l, x),
                          c &&
                            !r &&
                            x.length > 0 &&
                            m + e.length > 1 &&
                            rt.uniqueSort(l);
                      }
                      return c && ((T = E), (u = w)), b;
                    };
                  return n ? at(r) : r;
                })(r, o)
              )).selector = t;
            }
            return a;
          }),
          (l = rt.select = function(t, e, n, o) {
            var r,
              l,
              u,
              c,
              f,
              p = "function" == typeof t && t,
              d = !o && s((t = p.selector || t));
            if (((n = n || []), 1 === d.length)) {
              if (
                (l = d[0] = d[0].slice(0)).length > 2 &&
                "ID" === (u = l[0]).type &&
                9 === e.nodeType &&
                g &&
                i.relative[l[1].type]
              ) {
                if (!(e = (i.find.ID(u.matches[0].replace(Z, tt), e) || [])[0]))
                  return n;
                p && (e = e.parentNode), (t = t.slice(l.shift().value.length));
              }
              for (
                r = Q.needsContext.test(t) ? 0 : l.length;
                r-- && ((u = l[r]), !i.relative[(c = u.type)]);

              )
                if (
                  (f = i.find[c]) &&
                  (o = f(
                    u.matches[0].replace(Z, tt),
                    (K.test(l[0].type) && gt(e.parentNode)) || e
                  ))
                ) {
                  if ((l.splice(r, 1), !(t = o.length && mt(l))))
                    return O.apply(n, o), n;
                  break;
                }
            }
            return (
              (p || a(t, d))(
                o,
                e,
                !g,
                n,
                !e || (K.test(t) && gt(e.parentNode)) || e
              ),
              n
            );
          }),
          (n.sortStable =
            x
              .split("")
              .sort(k)
              .join("") === x),
          (n.detectDuplicates = !!f),
          p(),
          (n.sortDetached = lt(function(t) {
            return 1 & t.compareDocumentPosition(d.createElement("fieldset"));
          })),
          lt(function(t) {
            return (
              (t.innerHTML = "<a href='#'></a>"),
              "#" === t.firstChild.getAttribute("href")
            );
          }) ||
            ut("type|href|height|width", function(t, e, n) {
              if (!n)
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
            }),
          (n.attributes &&
            lt(function(t) {
              return (
                (t.innerHTML = "<input/>"),
                t.firstChild.setAttribute("value", ""),
                "" === t.firstChild.getAttribute("value")
              );
            })) ||
            ut("value", function(t, e, n) {
              if (!n && "input" === t.nodeName.toLowerCase())
                return t.defaultValue;
            }),
          lt(function(t) {
            return null == t.getAttribute("disabled");
          }) ||
            ut(R, function(t, e, n) {
              var i;
              if (!n)
                return !0 === t[e]
                  ? e.toLowerCase()
                  : (i = t.getAttributeNode(e)) && i.specified
                  ? i.value
                  : null;
            }),
          rt
        );
      })(n);
      (C.find = $),
        (C.expr = $.selectors),
        (C.expr[":"] = C.expr.pseudos),
        (C.uniqueSort = C.unique = $.uniqueSort),
        (C.text = $.getText),
        (C.isXMLDoc = $.isXML),
        (C.contains = $.contains),
        (C.escapeSelector = $.escape);
      var k = function(t, e, n) {
          for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
              if (o && C(t).is(n)) break;
              i.push(t);
            }
          return i;
        },
        D = function(t, e) {
          for (var n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t);
          return n;
        },
        N = C.expr.match.needsContext;
      function A(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      }
      var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function O(t, e, n) {
        return y(e)
          ? C.grep(t, function(t, i) {
              return !!e.call(t, i, t) !== n;
            })
          : e.nodeType
          ? C.grep(t, function(t) {
              return (t === e) !== n;
            })
          : "string" != typeof e
          ? C.grep(t, function(t) {
              return f.call(e, t) > -1 !== n;
            })
          : C.filter(e, t, n);
      }
      (C.filter = function(t, e, n) {
        var i = e[0];
        return (
          n && (t = ":not(" + t + ")"),
          1 === e.length && 1 === i.nodeType
            ? C.find.matchesSelector(i, t)
              ? [i]
              : []
            : C.find.matches(
                t,
                C.grep(e, function(t) {
                  return 1 === t.nodeType;
                })
              )
        );
      }),
        C.fn.extend({
          find: function(t) {
            var e,
              n,
              i = this.length,
              o = this;
            if ("string" != typeof t)
              return this.pushStack(
                C(t).filter(function() {
                  for (e = 0; e < i; e++) if (C.contains(o[e], this)) return !0;
                })
              );
            for (n = this.pushStack([]), e = 0; e < i; e++) C.find(t, o[e], n);
            return i > 1 ? C.uniqueSort(n) : n;
          },
          filter: function(t) {
            return this.pushStack(O(this, t || [], !1));
          },
          not: function(t) {
            return this.pushStack(O(this, t || [], !0));
          },
          is: function(t) {
            return !!O(
              this,
              "string" == typeof t && N.test(t) ? C(t) : t || [],
              !1
            ).length;
          }
        });
      var I,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((C.fn.init = function(t, e, n) {
        var i, o;
        if (!t) return this;
        if (((n = n || I), "string" == typeof t)) {
          if (
            !(i =
              "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
                ? [null, t, null]
                : L.exec(t)) ||
            (!i[1] && e)
          )
            return !e || e.jquery
              ? (e || n).find(t)
              : this.constructor(e).find(t);
          if (i[1]) {
            if (
              ((e = e instanceof C ? e[0] : e),
              C.merge(
                this,
                C.parseHTML(
                  i[1],
                  e && e.nodeType ? e.ownerDocument || e : s,
                  !0
                )
              ),
              j.test(i[1]) && C.isPlainObject(e))
            )
              for (i in e) y(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
            return this;
          }
          return (
            (o = s.getElementById(i[2])) && ((this[0] = o), (this.length = 1)),
            this
          );
        }
        return t.nodeType
          ? ((this[0] = t), (this.length = 1), this)
          : y(t)
          ? void 0 !== n.ready
            ? n.ready(t)
            : t(C)
          : C.makeArray(t, this);
      }).prototype = C.fn),
        (I = C(s));
      var R = /^(?:parents|prev(?:Until|All))/,
        q = { children: !0, contents: !0, next: !0, prev: !0 };
      function P(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; );
        return t;
      }
      C.fn.extend({
        has: function(t) {
          var e = C(t, this),
            n = e.length;
          return this.filter(function() {
            for (var t = 0; t < n; t++) if (C.contains(this, e[t])) return !0;
          });
        },
        closest: function(t, e) {
          var n,
            i = 0,
            o = this.length,
            r = [],
            s = "string" != typeof t && C(t);
          if (!N.test(t))
            for (; i < o; i++)
              for (n = this[i]; n && n !== e; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s
                    ? s.index(n) > -1
                    : 1 === n.nodeType && C.find.matchesSelector(n, t))
                ) {
                  r.push(n);
                  break;
                }
          return this.pushStack(r.length > 1 ? C.uniqueSort(r) : r);
        },
        index: function(t) {
          return t
            ? "string" == typeof t
              ? f.call(C(t), this[0])
              : f.call(this, t.jquery ? t[0] : t)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function(t, e) {
          return this.pushStack(C.uniqueSort(C.merge(this.get(), C(t, e))));
        },
        addBack: function(t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          );
        }
      }),
        C.each(
          {
            parent: function(t) {
              var e = t.parentNode;
              return e && 11 !== e.nodeType ? e : null;
            },
            parents: function(t) {
              return k(t, "parentNode");
            },
            parentsUntil: function(t, e, n) {
              return k(t, "parentNode", n);
            },
            next: function(t) {
              return P(t, "nextSibling");
            },
            prev: function(t) {
              return P(t, "previousSibling");
            },
            nextAll: function(t) {
              return k(t, "nextSibling");
            },
            prevAll: function(t) {
              return k(t, "previousSibling");
            },
            nextUntil: function(t, e, n) {
              return k(t, "nextSibling", n);
            },
            prevUntil: function(t, e, n) {
              return k(t, "previousSibling", n);
            },
            siblings: function(t) {
              return D((t.parentNode || {}).firstChild, t);
            },
            children: function(t) {
              return D(t.firstChild);
            },
            contents: function(t) {
              return A(t, "iframe")
                ? t.contentDocument
                : (A(t, "template") && (t = t.content || t),
                  C.merge([], t.childNodes));
            }
          },
          function(t, e) {
            C.fn[t] = function(n, i) {
              var o = C.map(this, e, n);
              return (
                "Until" !== t.slice(-5) && (i = n),
                i && "string" == typeof i && (o = C.filter(i, o)),
                this.length > 1 &&
                  (q[t] || C.uniqueSort(o), R.test(t) && o.reverse()),
                this.pushStack(o)
              );
            };
          }
        );
      var H = /[^\x20\t\r\n\f]+/g;
      function M(t) {
        return t;
      }
      function W(t) {
        throw t;
      }
      function F(t, e, n, i) {
        var o;
        try {
          t && y((o = t.promise))
            ? o
                .call(t)
                .done(e)
                .fail(n)
            : t && y((o = t.then))
            ? o.call(t, e, n)
            : e.apply(void 0, [t].slice(i));
        } catch (t) {
          n.apply(void 0, [t]);
        }
      }
      (C.Callbacks = function(t) {
        t =
          "string" == typeof t
            ? (function(t) {
                var e = {};
                return (
                  C.each(t.match(H) || [], function(t, n) {
                    e[n] = !0;
                  }),
                  e
                );
              })(t)
            : C.extend({}, t);
        var e,
          n,
          i,
          o,
          r = [],
          s = [],
          a = -1,
          l = function() {
            for (o = o || t.once, i = e = !0; s.length; a = -1)
              for (n = s.shift(); ++a < r.length; )
                !1 === r[a].apply(n[0], n[1]) &&
                  t.stopOnFalse &&
                  ((a = r.length), (n = !1));
            t.memory || (n = !1), (e = !1), o && (r = n ? [] : "");
          },
          u = {
            add: function() {
              return (
                r &&
                  (n && !e && ((a = r.length - 1), s.push(n)),
                  (function e(n) {
                    C.each(n, function(n, i) {
                      y(i)
                        ? (t.unique && u.has(i)) || r.push(i)
                        : i && i.length && "string" !== T(i) && e(i);
                    });
                  })(arguments),
                  n && !e && l()),
                this
              );
            },
            remove: function() {
              return (
                C.each(arguments, function(t, e) {
                  for (var n; (n = C.inArray(e, r, n)) > -1; )
                    r.splice(n, 1), n <= a && a--;
                }),
                this
              );
            },
            has: function(t) {
              return t ? C.inArray(t, r) > -1 : r.length > 0;
            },
            empty: function() {
              return r && (r = []), this;
            },
            disable: function() {
              return (o = s = []), (r = n = ""), this;
            },
            disabled: function() {
              return !r;
            },
            lock: function() {
              return (o = s = []), n || e || (r = n = ""), this;
            },
            locked: function() {
              return !!o;
            },
            fireWith: function(t, n) {
              return (
                o ||
                  ((n = [t, (n = n || []).slice ? n.slice() : n]),
                  s.push(n),
                  e || l()),
                this
              );
            },
            fire: function() {
              return u.fireWith(this, arguments), this;
            },
            fired: function() {
              return !!i;
            }
          };
        return u;
      }),
        C.extend({
          Deferred: function(t) {
            var e = [
                [
                  "notify",
                  "progress",
                  C.Callbacks("memory"),
                  C.Callbacks("memory"),
                  2
                ],
                [
                  "resolve",
                  "done",
                  C.Callbacks("once memory"),
                  C.Callbacks("once memory"),
                  0,
                  "resolved"
                ],
                [
                  "reject",
                  "fail",
                  C.Callbacks("once memory"),
                  C.Callbacks("once memory"),
                  1,
                  "rejected"
                ]
              ],
              i = "pending",
              o = {
                state: function() {
                  return i;
                },
                always: function() {
                  return r.done(arguments).fail(arguments), this;
                },
                catch: function(t) {
                  return o.then(null, t);
                },
                pipe: function() {
                  var t = arguments;
                  return C.Deferred(function(n) {
                    C.each(e, function(e, i) {
                      var o = y(t[i[4]]) && t[i[4]];
                      r[i[1]](function() {
                        var t = o && o.apply(this, arguments);
                        t && y(t.promise)
                          ? t
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[i[0] + "With"](this, o ? [t] : arguments);
                      });
                    }),
                      (t = null);
                  }).promise();
                },
                then: function(t, i, o) {
                  var r = 0;
                  function s(t, e, i, o) {
                    return function() {
                      var a = this,
                        l = arguments,
                        u = function() {
                          var n, u;
                          if (!(t < r)) {
                            if ((n = i.apply(a, l)) === e.promise())
                              throw new TypeError("Thenable self-resolution");
                            (u =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              y(u)
                                ? o
                                  ? u.call(n, s(r, e, M, o), s(r, e, W, o))
                                  : (r++,
                                    u.call(
                                      n,
                                      s(r, e, M, o),
                                      s(r, e, W, o),
                                      s(r, e, M, e.notifyWith)
                                    ))
                                : (i !== M && ((a = void 0), (l = [n])),
                                  (o || e.resolveWith)(a, l));
                          }
                        },
                        c = o
                          ? u
                          : function() {
                              try {
                                u();
                              } catch (n) {
                                C.Deferred.exceptionHook &&
                                  C.Deferred.exceptionHook(n, c.stackTrace),
                                  t + 1 >= r &&
                                    (i !== W && ((a = void 0), (l = [n])),
                                    e.rejectWith(a, l));
                              }
                            };
                      t
                        ? c()
                        : (C.Deferred.getStackHook &&
                            (c.stackTrace = C.Deferred.getStackHook()),
                          n.setTimeout(c));
                    };
                  }
                  return C.Deferred(function(n) {
                    e[0][3].add(s(0, n, y(o) ? o : M, n.notifyWith)),
                      e[1][3].add(s(0, n, y(t) ? t : M)),
                      e[2][3].add(s(0, n, y(i) ? i : W));
                  }).promise();
                },
                promise: function(t) {
                  return null != t ? C.extend(t, o) : o;
                }
              },
              r = {};
            return (
              C.each(e, function(t, n) {
                var s = n[2],
                  a = n[5];
                (o[n[1]] = s.add),
                  a &&
                    s.add(
                      function() {
                        i = a;
                      },
                      e[3 - t][2].disable,
                      e[3 - t][3].disable,
                      e[0][2].lock,
                      e[0][3].lock
                    ),
                  s.add(n[3].fire),
                  (r[n[0]] = function() {
                    return (
                      r[n[0] + "With"](this === r ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (r[n[0] + "With"] = s.fireWith);
              }),
              o.promise(r),
              t && t.call(r, r),
              r
            );
          },
          when: function(t) {
            var e = arguments.length,
              n = e,
              i = Array(n),
              o = l.call(arguments),
              r = C.Deferred(),
              s = function(t) {
                return function(n) {
                  (i[t] = this),
                    (o[t] = arguments.length > 1 ? l.call(arguments) : n),
                    --e || r.resolveWith(i, o);
                };
              };
            if (
              e <= 1 &&
              (F(t, r.done(s(n)).resolve, r.reject, !e),
              "pending" === r.state() || y(o[n] && o[n].then))
            )
              return r.then();
            for (; n--; ) F(o[n], s(n), r.reject);
            return r.promise();
          }
        });
      var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (C.Deferred.exceptionHook = function(t, e) {
        n.console &&
          n.console.warn &&
          t &&
          B.test(t.name) &&
          n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
      }),
        (C.readyException = function(t) {
          n.setTimeout(function() {
            throw t;
          });
        });
      var U = C.Deferred();
      function _() {
        s.removeEventListener("DOMContentLoaded", _),
          n.removeEventListener("load", _),
          C.ready();
      }
      (C.fn.ready = function(t) {
        return (
          U.then(t).catch(function(t) {
            C.readyException(t);
          }),
          this
        );
      }),
        C.extend({
          isReady: !1,
          readyWait: 1,
          ready: function(t) {
            (!0 === t ? --C.readyWait : C.isReady) ||
              ((C.isReady = !0),
              (!0 !== t && --C.readyWait > 0) || U.resolveWith(s, [C]));
          }
        }),
        (C.ready.then = U.then),
        "complete" === s.readyState ||
        ("loading" !== s.readyState && !s.documentElement.doScroll)
          ? n.setTimeout(C.ready)
          : (s.addEventListener("DOMContentLoaded", _),
            n.addEventListener("load", _));
      var z = function(t, e, n, i, o, r, s) {
          var a = 0,
            l = t.length,
            u = null == n;
          if ("object" === T(n))
            for (a in ((o = !0), n)) z(t, e, a, n[a], !0, r, s);
          else if (
            void 0 !== i &&
            ((o = !0),
            y(i) || (s = !0),
            u &&
              (s
                ? (e.call(t, i), (e = null))
                : ((u = e),
                  (e = function(t, e, n) {
                    return u.call(C(t), n);
                  }))),
            e)
          )
            for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
          return o ? t : u ? e.call(t) : l ? e(t[0], n) : r;
        },
        V = /^-ms-/,
        Q = /-([a-z])/g;
      function X(t, e) {
        return e.toUpperCase();
      }
      function G(t) {
        return t.replace(V, "ms-").replace(Q, X);
      }
      var Y = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
      };
      function J() {
        this.expando = C.expando + J.uid++;
      }
      (J.uid = 1),
        (J.prototype = {
          cache: function(t) {
            var e = t[this.expando];
            return (
              e ||
                ((e = {}),
                Y(t) &&
                  (t.nodeType
                    ? (t[this.expando] = e)
                    : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0
                      }))),
              e
            );
          },
          set: function(t, e, n) {
            var i,
              o = this.cache(t);
            if ("string" == typeof e) o[G(e)] = n;
            else for (i in e) o[G(i)] = e[i];
            return o;
          },
          get: function(t, e) {
            return void 0 === e
              ? this.cache(t)
              : t[this.expando] && t[this.expando][G(e)];
          },
          access: function(t, e, n) {
            return void 0 === e || (e && "string" == typeof e && void 0 === n)
              ? this.get(t, e)
              : (this.set(t, e, n), void 0 !== n ? n : e);
          },
          remove: function(t, e) {
            var n,
              i = t[this.expando];
            if (void 0 !== i) {
              if (void 0 !== e) {
                n = (e = Array.isArray(e)
                  ? e.map(G)
                  : (e = G(e)) in i
                  ? [e]
                  : e.match(H) || []).length;
                for (; n--; ) delete i[e[n]];
              }
              (void 0 === e || C.isEmptyObject(i)) &&
                (t.nodeType
                  ? (t[this.expando] = void 0)
                  : delete t[this.expando]);
            }
          },
          hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !C.isEmptyObject(e);
          }
        });
      var K = new J(),
        Z = new J(),
        tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        et = /[A-Z]/g;
      function nt(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
          if (
            ((i = "data-" + e.replace(et, "-$&").toLowerCase()),
            "string" == typeof (n = t.getAttribute(i)))
          ) {
            try {
              n = (function(t) {
                return (
                  "true" === t ||
                  ("false" !== t &&
                    ("null" === t
                      ? null
                      : t === +t + ""
                      ? +t
                      : tt.test(t)
                      ? JSON.parse(t)
                      : t))
                );
              })(n);
            } catch (t) {}
            Z.set(t, e, n);
          } else n = void 0;
        return n;
      }
      C.extend({
        hasData: function(t) {
          return Z.hasData(t) || K.hasData(t);
        },
        data: function(t, e, n) {
          return Z.access(t, e, n);
        },
        removeData: function(t, e) {
          Z.remove(t, e);
        },
        _data: function(t, e, n) {
          return K.access(t, e, n);
        },
        _removeData: function(t, e) {
          K.remove(t, e);
        }
      }),
        C.fn.extend({
          data: function(t, e) {
            var n,
              i,
              o,
              r = this[0],
              s = r && r.attributes;
            if (void 0 === t) {
              if (
                this.length &&
                ((o = Z.get(r)), 1 === r.nodeType && !K.get(r, "hasDataAttrs"))
              ) {
                for (n = s.length; n--; )
                  s[n] &&
                    0 === (i = s[n].name).indexOf("data-") &&
                    ((i = G(i.slice(5))), nt(r, i, o[i]));
                K.set(r, "hasDataAttrs", !0);
              }
              return o;
            }
            return "object" == typeof t
              ? this.each(function() {
                  Z.set(this, t);
                })
              : z(
                  this,
                  function(e) {
                    var n;
                    if (r && void 0 === e)
                      return void 0 !== (n = Z.get(r, t))
                        ? n
                        : void 0 !== (n = nt(r, t))
                        ? n
                        : void 0;
                    this.each(function() {
                      Z.set(this, t, e);
                    });
                  },
                  null,
                  e,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function(t) {
            return this.each(function() {
              Z.remove(this, t);
            });
          }
        }),
        C.extend({
          queue: function(t, e, n) {
            var i;
            if (t)
              return (
                (e = (e || "fx") + "queue"),
                (i = K.get(t, e)),
                n &&
                  (!i || Array.isArray(n)
                    ? (i = K.access(t, e, C.makeArray(n)))
                    : i.push(n)),
                i || []
              );
          },
          dequeue: function(t, e) {
            e = e || "fx";
            var n = C.queue(t, e),
              i = n.length,
              o = n.shift(),
              r = C._queueHooks(t, e);
            "inprogress" === o && ((o = n.shift()), i--),
              o &&
                ("fx" === e && n.unshift("inprogress"),
                delete r.stop,
                o.call(
                  t,
                  function() {
                    C.dequeue(t, e);
                  },
                  r
                )),
              !i && r && r.empty.fire();
          },
          _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return (
              K.get(t, n) ||
              K.access(t, n, {
                empty: C.Callbacks("once memory").add(function() {
                  K.remove(t, [e + "queue", n]);
                })
              })
            );
          }
        }),
        C.fn.extend({
          queue: function(t, e) {
            var n = 2;
            return (
              "string" != typeof t && ((e = t), (t = "fx"), n--),
              arguments.length < n
                ? C.queue(this[0], t)
                : void 0 === e
                ? this
                : this.each(function() {
                    var n = C.queue(this, t, e);
                    C._queueHooks(this, t),
                      "fx" === t && "inprogress" !== n[0] && C.dequeue(this, t);
                  })
            );
          },
          dequeue: function(t) {
            return this.each(function() {
              C.dequeue(this, t);
            });
          },
          clearQueue: function(t) {
            return this.queue(t || "fx", []);
          },
          promise: function(t, e) {
            var n,
              i = 1,
              o = C.Deferred(),
              r = this,
              s = this.length,
              a = function() {
                --i || o.resolveWith(r, [r]);
              };
            for (
              "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
              s--;

            )
              (n = K.get(r[s], t + "queueHooks")) &&
                n.empty &&
                (i++, n.empty.add(a));
            return a(), o.promise(e);
          }
        });
      var it = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ot = new RegExp("^(?:([+-])=|)(" + it + ")([a-z%]*)$", "i"),
        rt = ["Top", "Right", "Bottom", "Left"],
        st = function(t, e) {
          return (
            "none" === (t = e || t).style.display ||
            ("" === t.style.display &&
              C.contains(t.ownerDocument, t) &&
              "none" === C.css(t, "display"))
          );
        },
        at = function(t, e, n, i) {
          var o,
            r,
            s = {};
          for (r in e) (s[r] = t.style[r]), (t.style[r] = e[r]);
          for (r in ((o = n.apply(t, i || [])), e)) t.style[r] = s[r];
          return o;
        };
      function lt(t, e, n, i) {
        var o,
          r,
          s = 20,
          a = i
            ? function() {
                return i.cur();
              }
            : function() {
                return C.css(t, e, "");
              },
          l = a(),
          u = (n && n[3]) || (C.cssNumber[e] ? "" : "px"),
          c = (C.cssNumber[e] || ("px" !== u && +l)) && ot.exec(C.css(t, e));
        if (c && c[3] !== u) {
          for (l /= 2, u = u || c[3], c = +l || 1; s--; )
            C.style(t, e, c + u),
              (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0),
              (c /= r);
          (c *= 2), C.style(t, e, c + u), (n = n || []);
        }
        return (
          n &&
            ((c = +c || +l || 0),
            (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
            i && ((i.unit = u), (i.start = c), (i.end = o))),
          o
        );
      }
      var ut = {};
      function ct(t) {
        var e,
          n = t.ownerDocument,
          i = t.nodeName,
          o = ut[i];
        return (
          o ||
          ((e = n.body.appendChild(n.createElement(i))),
          (o = C.css(e, "display")),
          e.parentNode.removeChild(e),
          "none" === o && (o = "block"),
          (ut[i] = o),
          o)
        );
      }
      function ft(t, e) {
        for (var n, i, o = [], r = 0, s = t.length; r < s; r++)
          (i = t[r]).style &&
            ((n = i.style.display),
            e
              ? ("none" === n &&
                  ((o[r] = K.get(i, "display") || null),
                  o[r] || (i.style.display = "")),
                "" === i.style.display && st(i) && (o[r] = ct(i)))
              : "none" !== n && ((o[r] = "none"), K.set(i, "display", n)));
        for (r = 0; r < s; r++) null != o[r] && (t[r].style.display = o[r]);
        return t;
      }
      C.fn.extend({
        show: function() {
          return ft(this, !0);
        },
        hide: function() {
          return ft(this);
        },
        toggle: function(t) {
          return "boolean" == typeof t
            ? t
              ? this.show()
              : this.hide()
            : this.each(function() {
                st(this) ? C(this).show() : C(this).hide();
              });
        }
      });
      var pt = /^(?:checkbox|radio)$/i,
        dt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ht = /^$|^module$|\/(?:java|ecma)script/i,
        gt = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
      function vt(t, e) {
        var n;
        return (
          (n =
            void 0 !== t.getElementsByTagName
              ? t.getElementsByTagName(e || "*")
              : void 0 !== t.querySelectorAll
              ? t.querySelectorAll(e || "*")
              : []),
          void 0 === e || (e && A(t, e)) ? C.merge([t], n) : n
        );
      }
      function mt(t, e) {
        for (var n = 0, i = t.length; n < i; n++)
          K.set(t[n], "globalEval", !e || K.get(e[n], "globalEval"));
      }
      (gt.optgroup = gt.option),
        (gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead),
        (gt.th = gt.td);
      var yt,
        bt,
        xt = /<|&#?\w+;/;
      function wt(t, e, n, i, o) {
        for (
          var r,
            s,
            a,
            l,
            u,
            c,
            f = e.createDocumentFragment(),
            p = [],
            d = 0,
            h = t.length;
          d < h;
          d++
        )
          if ((r = t[d]) || 0 === r)
            if ("object" === T(r)) C.merge(p, r.nodeType ? [r] : r);
            else if (xt.test(r)) {
              for (
                s = s || f.appendChild(e.createElement("div")),
                  a = (dt.exec(r) || ["", ""])[1].toLowerCase(),
                  l = gt[a] || gt._default,
                  s.innerHTML = l[1] + C.htmlPrefilter(r) + l[2],
                  c = l[0];
                c--;

              )
                s = s.lastChild;
              C.merge(p, s.childNodes), ((s = f.firstChild).textContent = "");
            } else p.push(e.createTextNode(r));
        for (f.textContent = "", d = 0; (r = p[d++]); )
          if (i && C.inArray(r, i) > -1) o && o.push(r);
          else if (
            ((u = C.contains(r.ownerDocument, r)),
            (s = vt(f.appendChild(r), "script")),
            u && mt(s),
            n)
          )
            for (c = 0; (r = s[c++]); ) ht.test(r.type || "") && n.push(r);
        return f;
      }
      (yt = s.createDocumentFragment().appendChild(s.createElement("div"))),
        (bt = s.createElement("input")).setAttribute("type", "radio"),
        bt.setAttribute("checked", "checked"),
        bt.setAttribute("name", "t"),
        yt.appendChild(bt),
        (m.checkClone = yt.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (yt.innerHTML = "<textarea>x</textarea>"),
        (m.noCloneChecked = !!yt.cloneNode(!0).lastChild.defaultValue);
      var Tt = s.documentElement,
        Ct = /^key/,
        Et = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        St = /^([^.]*)(?:\.(.+)|)/;
      function $t() {
        return !0;
      }
      function kt() {
        return !1;
      }
      function Dt() {
        try {
          return s.activeElement;
        } catch (t) {}
      }
      function Nt(t, e, n, i, o, r) {
        var s, a;
        if ("object" == typeof e) {
          for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), e))
            Nt(t, a, n, i, e[a], r);
          return t;
        }
        if (
          (null == i && null == o
            ? ((o = n), (i = n = void 0))
            : null == o &&
              ("string" == typeof n
                ? ((o = i), (i = void 0))
                : ((o = i), (i = n), (n = void 0))),
          !1 === o)
        )
          o = kt;
        else if (!o) return t;
        return (
          1 === r &&
            ((s = o),
            ((o = function(t) {
              return C().off(t), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = C.guid++))),
          t.each(function() {
            C.event.add(this, e, o, i, n);
          })
        );
      }
      (C.event = {
        global: {},
        add: function(t, e, n, i, o) {
          var r,
            s,
            a,
            l,
            u,
            c,
            f,
            p,
            d,
            h,
            g,
            v = K.get(t);
          if (v)
            for (
              n.handler && ((n = (r = n).handler), (o = r.selector)),
                o && C.find.matchesSelector(Tt, o),
                n.guid || (n.guid = C.guid++),
                (l = v.events) || (l = v.events = {}),
                (s = v.handle) ||
                  (s = v.handle = function(e) {
                    return void 0 !== C && C.event.triggered !== e.type
                      ? C.event.dispatch.apply(t, arguments)
                      : void 0;
                  }),
                u = (e = (e || "").match(H) || [""]).length;
              u--;

            )
              (d = g = (a = St.exec(e[u]) || [])[1]),
                (h = (a[2] || "").split(".").sort()),
                d &&
                  ((f = C.event.special[d] || {}),
                  (d = (o ? f.delegateType : f.bindType) || d),
                  (f = C.event.special[d] || {}),
                  (c = C.extend(
                    {
                      type: d,
                      origType: g,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: o,
                      needsContext: o && C.expr.match.needsContext.test(o),
                      namespace: h.join(".")
                    },
                    r
                  )),
                  (p = l[d]) ||
                    (((p = l[d] = []).delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(t, i, h, s)) ||
                      (t.addEventListener && t.addEventListener(d, s))),
                  f.add &&
                    (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                  o ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                  (C.event.global[d] = !0));
        },
        remove: function(t, e, n, i, o) {
          var r,
            s,
            a,
            l,
            u,
            c,
            f,
            p,
            d,
            h,
            g,
            v = K.hasData(t) && K.get(t);
          if (v && (l = v.events)) {
            for (u = (e = (e || "").match(H) || [""]).length; u--; )
              if (
                ((d = g = (a = St.exec(e[u]) || [])[1]),
                (h = (a[2] || "").split(".").sort()),
                d)
              ) {
                for (
                  f = C.event.special[d] || {},
                    p = l[(d = (i ? f.delegateType : f.bindType) || d)] || [],
                    a =
                      a[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    s = r = p.length;
                  r--;

                )
                  (c = p[r]),
                    (!o && g !== c.origType) ||
                      (n && n.guid !== c.guid) ||
                      (a && !a.test(c.namespace)) ||
                      (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                      (p.splice(r, 1),
                      c.selector && p.delegateCount--,
                      f.remove && f.remove.call(t, c));
                s &&
                  !p.length &&
                  ((f.teardown && !1 !== f.teardown.call(t, h, v.handle)) ||
                    C.removeEvent(t, d, v.handle),
                  delete l[d]);
              } else for (d in l) C.event.remove(t, d + e[u], n, i, !0);
            C.isEmptyObject(l) && K.remove(t, "handle events");
          }
        },
        dispatch: function(t) {
          var e,
            n,
            i,
            o,
            r,
            s,
            a = C.event.fix(t),
            l = new Array(arguments.length),
            u = (K.get(this, "events") || {})[a.type] || [],
            c = C.event.special[a.type] || {};
          for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
          if (
            ((a.delegateTarget = this),
            !c.preDispatch || !1 !== c.preDispatch.call(this, a))
          ) {
            for (
              s = C.event.handlers.call(this, a, u), e = 0;
              (o = s[e++]) && !a.isPropagationStopped();

            )
              for (
                a.currentTarget = o.elem, n = 0;
                (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();

              )
                (a.rnamespace && !a.rnamespace.test(r.namespace)) ||
                  ((a.handleObj = r),
                  (a.data = r.data),
                  void 0 !==
                    (i = (
                      (C.event.special[r.origType] || {}).handle || r.handler
                    ).apply(o.elem, l)) &&
                    !1 === (a.result = i) &&
                    (a.preventDefault(), a.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, a), a.result;
          }
        },
        handlers: function(t, e) {
          var n,
            i,
            o,
            r,
            s,
            a = [],
            l = e.delegateCount,
            u = t.target;
          if (l && u.nodeType && !("click" === t.type && t.button >= 1))
            for (; u !== this; u = u.parentNode || this)
              if (
                1 === u.nodeType &&
                ("click" !== t.type || !0 !== u.disabled)
              ) {
                for (r = [], s = {}, n = 0; n < l; n++)
                  void 0 === s[(o = (i = e[n]).selector + " ")] &&
                    (s[o] = i.needsContext
                      ? C(o, this).index(u) > -1
                      : C.find(o, this, null, [u]).length),
                    s[o] && r.push(i);
                r.length && a.push({ elem: u, handlers: r });
              }
          return (
            (u = this),
            l < e.length && a.push({ elem: u, handlers: e.slice(l) }),
            a
          );
        },
        addProp: function(t, e) {
          Object.defineProperty(C.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: y(e)
              ? function() {
                  if (this.originalEvent) return e(this.originalEvent);
                }
              : function() {
                  if (this.originalEvent) return this.originalEvent[t];
                },
            set: function(e) {
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e
              });
            }
          });
        },
        fix: function(t) {
          return t[C.expando] ? t : new C.Event(t);
        },
        special: {
          load: { noBubble: !0 },
          focus: {
            trigger: function() {
              if (this !== Dt() && this.focus) return this.focus(), !1;
            },
            delegateType: "focusin"
          },
          blur: {
            trigger: function() {
              if (this === Dt() && this.blur) return this.blur(), !1;
            },
            delegateType: "focusout"
          },
          click: {
            trigger: function() {
              if ("checkbox" === this.type && this.click && A(this, "input"))
                return this.click(), !1;
            },
            _default: function(t) {
              return A(t.target, "a");
            }
          },
          beforeunload: {
            postDispatch: function(t) {
              void 0 !== t.result &&
                t.originalEvent &&
                (t.originalEvent.returnValue = t.result);
            }
          }
        }
      }),
        (C.removeEvent = function(t, e, n) {
          t.removeEventListener && t.removeEventListener(e, n);
        }),
        (C.Event = function(t, e) {
          if (!(this instanceof C.Event)) return new C.Event(t, e);
          t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented && !1 === t.returnValue)
                  ? $t
                  : kt),
              (this.target =
                t.target && 3 === t.target.nodeType
                  ? t.target.parentNode
                  : t.target),
              (this.currentTarget = t.currentTarget),
              (this.relatedTarget = t.relatedTarget))
            : (this.type = t),
            e && C.extend(this, e),
            (this.timeStamp = (t && t.timeStamp) || Date.now()),
            (this[C.expando] = !0);
        }),
        (C.Event.prototype = {
          constructor: C.Event,
          isDefaultPrevented: kt,
          isPropagationStopped: kt,
          isImmediatePropagationStopped: kt,
          isSimulated: !1,
          preventDefault: function() {
            var t = this.originalEvent;
            (this.isDefaultPrevented = $t),
              t && !this.isSimulated && t.preventDefault();
          },
          stopPropagation: function() {
            var t = this.originalEvent;
            (this.isPropagationStopped = $t),
              t && !this.isSimulated && t.stopPropagation();
          },
          stopImmediatePropagation: function() {
            var t = this.originalEvent;
            (this.isImmediatePropagationStopped = $t),
              t && !this.isSimulated && t.stopImmediatePropagation(),
              this.stopPropagation();
          }
        }),
        C.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(t) {
              var e = t.button;
              return null == t.which && Ct.test(t.type)
                ? null != t.charCode
                  ? t.charCode
                  : t.keyCode
                : !t.which && void 0 !== e && Et.test(t.type)
                ? 1 & e
                  ? 1
                  : 2 & e
                  ? 3
                  : 4 & e
                  ? 2
                  : 0
                : t.which;
            }
          },
          C.event.addProp
        ),
        C.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
          },
          function(t, e) {
            C.event.special[t] = {
              delegateType: e,
              bindType: e,
              handle: function(t) {
                var n,
                  i = t.relatedTarget,
                  o = t.handleObj;
                return (
                  (i && (i === this || C.contains(this, i))) ||
                    ((t.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (t.type = e)),
                  n
                );
              }
            };
          }
        ),
        C.fn.extend({
          on: function(t, e, n, i) {
            return Nt(this, t, e, n, i);
          },
          one: function(t, e, n, i) {
            return Nt(this, t, e, n, i, 1);
          },
          off: function(t, e, n) {
            var i, o;
            if (t && t.preventDefault && t.handleObj)
              return (
                (i = t.handleObj),
                C(t.delegateTarget).off(
                  i.namespace ? i.origType + "." + i.namespace : i.origType,
                  i.selector,
                  i.handler
                ),
                this
              );
            if ("object" == typeof t) {
              for (o in t) this.off(o, e, t[o]);
              return this;
            }
            return (
              (!1 !== e && "function" != typeof e) || ((n = e), (e = void 0)),
              !1 === n && (n = kt),
              this.each(function() {
                C.event.remove(this, t, n, e);
              })
            );
          }
        });
      var At = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        jt = /<script|<style|<link/i,
        Ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
        It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Lt(t, e) {
        return (
          (A(t, "table") &&
            A(11 !== e.nodeType ? e : e.firstChild, "tr") &&
            C(t).children("tbody")[0]) ||
          t
        );
      }
      function Rt(t) {
        return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
      }
      function qt(t) {
        return (
          "true/" === (t.type || "").slice(0, 5)
            ? (t.type = t.type.slice(5))
            : t.removeAttribute("type"),
          t
        );
      }
      function Pt(t, e) {
        var n, i, o, r, s, a, l, u;
        if (1 === e.nodeType) {
          if (
            K.hasData(t) &&
            ((r = K.access(t)), (s = K.set(e, r)), (u = r.events))
          )
            for (o in (delete s.handle, (s.events = {}), u))
              for (n = 0, i = u[o].length; n < i; n++)
                C.event.add(e, o, u[o][n]);
          Z.hasData(t) &&
            ((a = Z.access(t)), (l = C.extend({}, a)), Z.set(e, l));
        }
      }
      function Ht(t, e, n, i) {
        e = u.apply([], e);
        var o,
          r,
          s,
          a,
          l,
          c,
          f = 0,
          p = t.length,
          d = p - 1,
          h = e[0],
          g = y(h);
        if (g || (p > 1 && "string" == typeof h && !m.checkClone && Ot.test(h)))
          return t.each(function(o) {
            var r = t.eq(o);
            g && (e[0] = h.call(this, o, r.html())), Ht(r, e, n, i);
          });
        if (
          p &&
          ((r = (o = wt(e, t[0].ownerDocument, !1, t, i)).firstChild),
          1 === o.childNodes.length && (o = r),
          r || i)
        ) {
          for (a = (s = C.map(vt(o, "script"), Rt)).length; f < p; f++)
            (l = o),
              f !== d &&
                ((l = C.clone(l, !0, !0)), a && C.merge(s, vt(l, "script"))),
              n.call(t[f], l, f);
          if (a)
            for (
              c = s[s.length - 1].ownerDocument, C.map(s, qt), f = 0;
              f < a;
              f++
            )
              (l = s[f]),
                ht.test(l.type || "") &&
                  !K.access(l, "globalEval") &&
                  C.contains(c, l) &&
                  (l.src && "module" !== (l.type || "").toLowerCase()
                    ? C._evalUrl && C._evalUrl(l.src)
                    : w(l.textContent.replace(It, ""), c, l));
        }
        return t;
      }
      function Mt(t, e, n) {
        for (var i, o = e ? C.filter(e, t) : t, r = 0; null != (i = o[r]); r++)
          n || 1 !== i.nodeType || C.cleanData(vt(i)),
            i.parentNode &&
              (n && C.contains(i.ownerDocument, i) && mt(vt(i, "script")),
              i.parentNode.removeChild(i));
        return t;
      }
      C.extend({
        htmlPrefilter: function(t) {
          return t.replace(At, "<$1></$2>");
        },
        clone: function(t, e, n) {
          var i,
            o,
            r,
            s,
            a,
            l,
            u,
            c = t.cloneNode(!0),
            f = C.contains(t.ownerDocument, t);
          if (
            !(
              m.noCloneChecked ||
              (1 !== t.nodeType && 11 !== t.nodeType) ||
              C.isXMLDoc(t)
            )
          )
            for (s = vt(c), i = 0, o = (r = vt(t)).length; i < o; i++)
              (a = r[i]),
                (l = s[i]),
                void 0,
                "input" === (u = l.nodeName.toLowerCase()) && pt.test(a.type)
                  ? (l.checked = a.checked)
                  : ("input" !== u && "textarea" !== u) ||
                    (l.defaultValue = a.defaultValue);
          if (e)
            if (n)
              for (
                r = r || vt(t), s = s || vt(c), i = 0, o = r.length;
                i < o;
                i++
              )
                Pt(r[i], s[i]);
            else Pt(t, c);
          return (
            (s = vt(c, "script")).length > 0 && mt(s, !f && vt(t, "script")), c
          );
        },
        cleanData: function(t) {
          for (
            var e, n, i, o = C.event.special, r = 0;
            void 0 !== (n = t[r]);
            r++
          )
            if (Y(n)) {
              if ((e = n[K.expando])) {
                if (e.events)
                  for (i in e.events)
                    o[i] ? C.event.remove(n, i) : C.removeEvent(n, i, e.handle);
                n[K.expando] = void 0;
              }
              n[Z.expando] && (n[Z.expando] = void 0);
            }
        }
      }),
        C.fn.extend({
          detach: function(t) {
            return Mt(this, t, !0);
          },
          remove: function(t) {
            return Mt(this, t);
          },
          text: function(t) {
            return z(
              this,
              function(t) {
                return void 0 === t
                  ? C.text(this)
                  : this.empty().each(function() {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = t);
                    });
              },
              null,
              t,
              arguments.length
            );
          },
          append: function() {
            return Ht(this, arguments, function(t) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Lt(this, t).appendChild(t);
            });
          },
          prepend: function() {
            return Ht(this, arguments, function(t) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var e = Lt(this, t);
                e.insertBefore(t, e.firstChild);
              }
            });
          },
          before: function() {
            return Ht(this, arguments, function(t) {
              this.parentNode && this.parentNode.insertBefore(t, this);
            });
          },
          after: function() {
            return Ht(this, arguments, function(t) {
              this.parentNode &&
                this.parentNode.insertBefore(t, this.nextSibling);
            });
          },
          empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++)
              1 === t.nodeType &&
                (C.cleanData(vt(t, !1)), (t.textContent = ""));
            return this;
          },
          clone: function(t, e) {
            return (
              (t = null != t && t),
              (e = null == e ? t : e),
              this.map(function() {
                return C.clone(this, t, e);
              })
            );
          },
          html: function(t) {
            return z(
              this,
              function(t) {
                var e = this[0] || {},
                  n = 0,
                  i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if (
                  "string" == typeof t &&
                  !jt.test(t) &&
                  !gt[(dt.exec(t) || ["", ""])[1].toLowerCase()]
                ) {
                  t = C.htmlPrefilter(t);
                  try {
                    for (; n < i; n++)
                      1 === (e = this[n] || {}).nodeType &&
                        (C.cleanData(vt(e, !1)), (e.innerHTML = t));
                    e = 0;
                  } catch (t) {}
                }
                e && this.empty().append(t);
              },
              null,
              t,
              arguments.length
            );
          },
          replaceWith: function() {
            var t = [];
            return Ht(
              this,
              arguments,
              function(e) {
                var n = this.parentNode;
                C.inArray(this, t) < 0 &&
                  (C.cleanData(vt(this)), n && n.replaceChild(e, this));
              },
              t
            );
          }
        }),
        C.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
          },
          function(t, e) {
            C.fn[t] = function(t) {
              for (
                var n, i = [], o = C(t), r = o.length - 1, s = 0;
                s <= r;
                s++
              )
                (n = s === r ? this : this.clone(!0)),
                  C(o[s])[e](n),
                  c.apply(i, n.get());
              return this.pushStack(i);
            };
          }
        );
      var Wt = new RegExp("^(" + it + ")(?!px)[a-z%]+$", "i"),
        Ft = function(t) {
          var e = t.ownerDocument.defaultView;
          return (e && e.opener) || (e = n), e.getComputedStyle(t);
        },
        Bt = new RegExp(rt.join("|"), "i");
      function Ut(t, e, n) {
        var i,
          o,
          r,
          s,
          a = t.style;
        return (
          (n = n || Ft(t)) &&
            ("" !== (s = n.getPropertyValue(e) || n[e]) ||
              C.contains(t.ownerDocument, t) ||
              (s = C.style(t, e)),
            !m.pixelBoxStyles() &&
              Wt.test(s) &&
              Bt.test(e) &&
              ((i = a.width),
              (o = a.minWidth),
              (r = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = s),
              (s = n.width),
              (a.width = i),
              (a.minWidth = o),
              (a.maxWidth = r))),
          void 0 !== s ? s + "" : s
        );
      }
      function _t(t, e) {
        return {
          get: function() {
            if (!t()) return (this.get = e).apply(this, arguments);
            delete this.get;
          }
        };
      }
      !(function() {
        function t() {
          if (c) {
            (u.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (c.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              Tt.appendChild(u).appendChild(c);
            var t = n.getComputedStyle(c);
            (i = "1%" !== t.top),
              (l = 12 === e(t.marginLeft)),
              (c.style.right = "60%"),
              (a = 36 === e(t.right)),
              (o = 36 === e(t.width)),
              (c.style.position = "absolute"),
              (r = 36 === c.offsetWidth || "absolute"),
              Tt.removeChild(u),
              (c = null);
          }
        }
        function e(t) {
          return Math.round(parseFloat(t));
        }
        var i,
          o,
          r,
          a,
          l,
          u = s.createElement("div"),
          c = s.createElement("div");
        c.style &&
          ((c.style.backgroundClip = "content-box"),
          (c.cloneNode(!0).style.backgroundClip = ""),
          (m.clearCloneStyle = "content-box" === c.style.backgroundClip),
          C.extend(m, {
            boxSizingReliable: function() {
              return t(), o;
            },
            pixelBoxStyles: function() {
              return t(), a;
            },
            pixelPosition: function() {
              return t(), i;
            },
            reliableMarginLeft: function() {
              return t(), l;
            },
            scrollboxSize: function() {
              return t(), r;
            }
          }));
      })();
      var zt = /^(none|table(?!-c[ea]).+)/,
        Vt = /^--/,
        Qt = { position: "absolute", visibility: "hidden", display: "block" },
        Xt = { letterSpacing: "0", fontWeight: "400" },
        Gt = ["Webkit", "Moz", "ms"],
        Yt = s.createElement("div").style;
      function Jt(t) {
        var e = C.cssProps[t];
        return (
          e ||
            (e = C.cssProps[t] =
              (function(t) {
                if (t in Yt) return t;
                for (
                  var e = t[0].toUpperCase() + t.slice(1), n = Gt.length;
                  n--;

                )
                  if ((t = Gt[n] + e) in Yt) return t;
              })(t) || t),
          e
        );
      }
      function Kt(t, e, n) {
        var i = ot.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
      }
      function Zt(t, e, n, i, o, r) {
        var s = "width" === e ? 1 : 0,
          a = 0,
          l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
          "margin" === n && (l += C.css(t, n + rt[s], !0, o)),
            i
              ? ("content" === n && (l -= C.css(t, "padding" + rt[s], !0, o)),
                "margin" !== n &&
                  (l -= C.css(t, "border" + rt[s] + "Width", !0, o)))
              : ((l += C.css(t, "padding" + rt[s], !0, o)),
                "padding" !== n
                  ? (l += C.css(t, "border" + rt[s] + "Width", !0, o))
                  : (a += C.css(t, "border" + rt[s] + "Width", !0, o)));
        return (
          !i &&
            r >= 0 &&
            (l += Math.max(
              0,
              Math.ceil(
                t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - 0.5
              )
            )),
          l
        );
      }
      function te(t, e, n) {
        var i = Ft(t),
          o = Ut(t, e, i),
          r = "border-box" === C.css(t, "boxSizing", !1, i),
          s = r;
        if (Wt.test(o)) {
          if (!n) return o;
          o = "auto";
        }
        return (
          (s = s && (m.boxSizingReliable() || o === t.style[e])),
          ("auto" === o ||
            (!parseFloat(o) && "inline" === C.css(t, "display", !1, i))) &&
            ((o = t["offset" + e[0].toUpperCase() + e.slice(1)]), (s = !0)),
          (o = parseFloat(o) || 0) +
            Zt(t, e, n || (r ? "border" : "content"), s, i, o) +
            "px"
        );
      }
      function ee(t, e, n, i, o) {
        return new ee.prototype.init(t, e, n, i, o);
      }
      C.extend({
        cssHooks: {
          opacity: {
            get: function(t, e) {
              if (e) {
                var n = Ut(t, "opacity");
                return "" === n ? "1" : n;
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {},
        style: function(t, e, n, i) {
          if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
            var o,
              r,
              s,
              a = G(e),
              l = Vt.test(e),
              u = t.style;
            if (
              (l || (e = Jt(a)),
              (s = C.cssHooks[e] || C.cssHooks[a]),
              void 0 === n)
            )
              return s && "get" in s && void 0 !== (o = s.get(t, !1, i))
                ? o
                : u[e];
            "string" === (r = typeof n) &&
              (o = ot.exec(n)) &&
              o[1] &&
              ((n = lt(t, e, o)), (r = "number")),
              null != n &&
                n == n &&
                ("number" === r &&
                  (n += (o && o[3]) || (C.cssNumber[a] ? "" : "px")),
                m.clearCloneStyle ||
                  "" !== n ||
                  0 !== e.indexOf("background") ||
                  (u[e] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(t, n, i))) ||
                  (l ? u.setProperty(e, n) : (u[e] = n)));
          }
        },
        css: function(t, e, n, i) {
          var o,
            r,
            s,
            a = G(e);
          return (
            Vt.test(e) || (e = Jt(a)),
            (s = C.cssHooks[e] || C.cssHooks[a]) &&
              "get" in s &&
              (o = s.get(t, !0, n)),
            void 0 === o && (o = Ut(t, e, i)),
            "normal" === o && e in Xt && (o = Xt[e]),
            "" === n || n
              ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o)
              : o
          );
        }
      }),
        C.each(["height", "width"], function(t, e) {
          C.cssHooks[e] = {
            get: function(t, n, i) {
              if (n)
                return !zt.test(C.css(t, "display")) ||
                  (t.getClientRects().length && t.getBoundingClientRect().width)
                  ? te(t, e, i)
                  : at(t, Qt, function() {
                      return te(t, e, i);
                    });
            },
            set: function(t, n, i) {
              var o,
                r = Ft(t),
                s = "border-box" === C.css(t, "boxSizing", !1, r),
                a = i && Zt(t, e, i, s, r);
              return (
                s &&
                  m.scrollboxSize() === r.position &&
                  (a -= Math.ceil(
                    t["offset" + e[0].toUpperCase() + e.slice(1)] -
                      parseFloat(r[e]) -
                      Zt(t, e, "border", !1, r) -
                      0.5
                  )),
                a &&
                  (o = ot.exec(n)) &&
                  "px" !== (o[3] || "px") &&
                  ((t.style[e] = n), (n = C.css(t, e))),
                Kt(0, n, a)
              );
            }
          };
        }),
        (C.cssHooks.marginLeft = _t(m.reliableMarginLeft, function(t, e) {
          if (e)
            return (
              (parseFloat(Ut(t, "marginLeft")) ||
                t.getBoundingClientRect().left -
                  at(t, { marginLeft: 0 }, function() {
                    return t.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        C.each({ margin: "", padding: "", border: "Width" }, function(t, e) {
          (C.cssHooks[t + e] = {
            expand: function(n) {
              for (
                var i = 0,
                  o = {},
                  r = "string" == typeof n ? n.split(" ") : [n];
                i < 4;
                i++
              )
                o[t + rt[i] + e] = r[i] || r[i - 2] || r[0];
              return o;
            }
          }),
            "margin" !== t && (C.cssHooks[t + e].set = Kt);
        }),
        C.fn.extend({
          css: function(t, e) {
            return z(
              this,
              function(t, e, n) {
                var i,
                  o,
                  r = {},
                  s = 0;
                if (Array.isArray(e)) {
                  for (i = Ft(t), o = e.length; s < o; s++)
                    r[e[s]] = C.css(t, e[s], !1, i);
                  return r;
                }
                return void 0 !== n ? C.style(t, e, n) : C.css(t, e);
              },
              t,
              e,
              arguments.length > 1
            );
          }
        }),
        (C.Tween = ee),
        (ee.prototype = {
          constructor: ee,
          init: function(t, e, n, i, o, r) {
            (this.elem = t),
              (this.prop = n),
              (this.easing = o || C.easing._default),
              (this.options = e),
              (this.start = this.now = this.cur()),
              (this.end = i),
              (this.unit = r || (C.cssNumber[n] ? "" : "px"));
          },
          cur: function() {
            var t = ee.propHooks[this.prop];
            return t && t.get ? t.get(this) : ee.propHooks._default.get(this);
          },
          run: function(t) {
            var e,
              n = ee.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = e = C.easing[this.easing](
                    t,
                    this.options.duration * t,
                    0,
                    1,
                    this.options.duration
                  ))
                : (this.pos = e = t),
              (this.now = (this.end - this.start) * e + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : ee.propHooks._default.set(this),
              this
            );
          }
        }),
        (ee.prototype.init.prototype = ee.prototype),
        (ee.propHooks = {
          _default: {
            get: function(t) {
              var e;
              return 1 !== t.elem.nodeType ||
                (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                ? t.elem[t.prop]
                : (e = C.css(t.elem, t.prop, "")) && "auto" !== e
                ? e
                : 0;
            },
            set: function(t) {
              C.fx.step[t.prop]
                ? C.fx.step[t.prop](t)
                : 1 !== t.elem.nodeType ||
                  (null == t.elem.style[C.cssProps[t.prop]] &&
                    !C.cssHooks[t.prop])
                ? (t.elem[t.prop] = t.now)
                : C.style(t.elem, t.prop, t.now + t.unit);
            }
          }
        }),
        (ee.propHooks.scrollTop = ee.propHooks.scrollLeft = {
          set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
          }
        }),
        (C.easing = {
          linear: function(t) {
            return t;
          },
          swing: function(t) {
            return 0.5 - Math.cos(t * Math.PI) / 2;
          },
          _default: "swing"
        }),
        (C.fx = ee.prototype.init),
        (C.fx.step = {});
      var ne,
        ie,
        oe = /^(?:toggle|show|hide)$/,
        re = /queueHooks$/;
      function se() {
        ie &&
          (!1 === s.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(se)
            : n.setTimeout(se, C.fx.interval),
          C.fx.tick());
      }
      function ae() {
        return (
          n.setTimeout(function() {
            ne = void 0;
          }),
          (ne = Date.now())
        );
      }
      function le(t, e) {
        var n,
          i = 0,
          o = { height: t };
        for (e = e ? 1 : 0; i < 4; i += 2 - e)
          o["margin" + (n = rt[i])] = o["padding" + n] = t;
        return e && (o.opacity = o.width = t), o;
      }
      function ue(t, e, n) {
        for (
          var i,
            o = (ce.tweeners[e] || []).concat(ce.tweeners["*"]),
            r = 0,
            s = o.length;
          r < s;
          r++
        )
          if ((i = o[r].call(n, e, t))) return i;
      }
      function ce(t, e, n) {
        var i,
          o,
          r = 0,
          s = ce.prefilters.length,
          a = C.Deferred().always(function() {
            delete l.elem;
          }),
          l = function() {
            if (o) return !1;
            for (
              var e = ne || ae(),
                n = Math.max(0, u.startTime + u.duration - e),
                i = 1 - (n / u.duration || 0),
                r = 0,
                s = u.tweens.length;
              r < s;
              r++
            )
              u.tweens[r].run(i);
            return (
              a.notifyWith(t, [u, i, n]),
              i < 1 && s
                ? n
                : (s || a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u]), !1)
            );
          },
          u = a.promise({
            elem: t,
            props: C.extend({}, e),
            opts: C.extend(
              !0,
              { specialEasing: {}, easing: C.easing._default },
              n
            ),
            originalProperties: e,
            originalOptions: n,
            startTime: ne || ae(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
              var i = C.Tween(
                t,
                u.opts,
                e,
                n,
                u.opts.specialEasing[e] || u.opts.easing
              );
              return u.tweens.push(i), i;
            },
            stop: function(e) {
              var n = 0,
                i = e ? u.tweens.length : 0;
              if (o) return this;
              for (o = !0; n < i; n++) u.tweens[n].run(1);
              return (
                e
                  ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e]))
                  : a.rejectWith(t, [u, e]),
                this
              );
            }
          }),
          c = u.props;
        for (
          !(function(t, e) {
            var n, i, o, r, s;
            for (n in t)
              if (
                ((o = e[(i = G(n))]),
                (r = t[n]),
                Array.isArray(r) && ((o = r[1]), (r = t[n] = r[0])),
                n !== i && ((t[i] = r), delete t[n]),
                (s = C.cssHooks[i]) && ("expand" in s))
              )
                for (n in ((r = s.expand(r)), delete t[i], r))
                  (n in t) || ((t[n] = r[n]), (e[n] = o));
              else e[i] = o;
          })(c, u.opts.specialEasing);
          r < s;
          r++
        )
          if ((i = ce.prefilters[r].call(u, t, c, u.opts)))
            return (
              y(i.stop) &&
                (C._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)),
              i
            );
        return (
          C.map(c, ue, u),
          y(u.opts.start) && u.opts.start.call(t, u),
          u
            .progress(u.opts.progress)
            .done(u.opts.done, u.opts.complete)
            .fail(u.opts.fail)
            .always(u.opts.always),
          C.fx.timer(C.extend(l, { elem: t, anim: u, queue: u.opts.queue })),
          u
        );
      }
      (C.Animation = C.extend(ce, {
        tweeners: {
          "*": [
            function(t, e) {
              var n = this.createTween(t, e);
              return lt(n.elem, t, ot.exec(e), n), n;
            }
          ]
        },
        tweener: function(t, e) {
          y(t) ? ((e = t), (t = ["*"])) : (t = t.match(H));
          for (var n, i = 0, o = t.length; i < o; i++)
            (n = t[i]),
              (ce.tweeners[n] = ce.tweeners[n] || []),
              ce.tweeners[n].unshift(e);
        },
        prefilters: [
          function(t, e, n) {
            var i,
              o,
              r,
              s,
              a,
              l,
              u,
              c,
              f = "width" in e || "height" in e,
              p = this,
              d = {},
              h = t.style,
              g = t.nodeType && st(t),
              v = K.get(t, "fxshow");
            for (i in (n.queue ||
              (null == (s = C._queueHooks(t, "fx")).unqueued &&
                ((s.unqueued = 0),
                (a = s.empty.fire),
                (s.empty.fire = function() {
                  s.unqueued || a();
                })),
              s.unqueued++,
              p.always(function() {
                p.always(function() {
                  s.unqueued--, C.queue(t, "fx").length || s.empty.fire();
                });
              })),
            e))
              if (((o = e[i]), oe.test(o))) {
                if (
                  (delete e[i],
                  (r = r || "toggle" === o),
                  o === (g ? "hide" : "show"))
                ) {
                  if ("show" !== o || !v || void 0 === v[i]) continue;
                  g = !0;
                }
                d[i] = (v && v[i]) || C.style(t, i);
              }
            if ((l = !C.isEmptyObject(e)) || !C.isEmptyObject(d))
              for (i in (f &&
                1 === t.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (u = v && v.display) && (u = K.get(t, "display")),
                "none" === (c = C.css(t, "display")) &&
                  (u
                    ? (c = u)
                    : (ft([t], !0),
                      (u = t.style.display || u),
                      (c = C.css(t, "display")),
                      ft([t]))),
                ("inline" === c || ("inline-block" === c && null != u)) &&
                  "none" === C.css(t, "float") &&
                  (l ||
                    (p.done(function() {
                      h.display = u;
                    }),
                    null == u &&
                      ((c = h.display), (u = "none" === c ? "" : c))),
                  (h.display = "inline-block"))),
              n.overflow &&
                ((h.overflow = "hidden"),
                p.always(function() {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (l = !1),
              d))
                l ||
                  (v
                    ? "hidden" in v && (g = v.hidden)
                    : (v = K.access(t, "fxshow", { display: u })),
                  r && (v.hidden = !g),
                  g && ft([t], !0),
                  p.done(function() {
                    for (i in (g || ft([t]), K.remove(t, "fxshow"), d))
                      C.style(t, i, d[i]);
                  })),
                  (l = ue(g ? v[i] : 0, i, p)),
                  i in v ||
                    ((v[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
          }
        ],
        prefilter: function(t, e) {
          e ? ce.prefilters.unshift(t) : ce.prefilters.push(t);
        }
      })),
        (C.speed = function(t, e, n) {
          var i =
            t && "object" == typeof t
              ? C.extend({}, t)
              : {
                  complete: n || (!n && e) || (y(t) && t),
                  duration: t,
                  easing: (n && e) || (e && !y(e) && e)
                };
          return (
            C.fx.off
              ? (i.duration = 0)
              : "number" != typeof i.duration &&
                (i.duration in C.fx.speeds
                  ? (i.duration = C.fx.speeds[i.duration])
                  : (i.duration = C.fx.speeds._default)),
            (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
            (i.old = i.complete),
            (i.complete = function() {
              y(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue);
            }),
            i
          );
        }),
        C.fn.extend({
          fadeTo: function(t, e, n, i) {
            return this.filter(st)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: e }, t, n, i);
          },
          animate: function(t, e, n, i) {
            var o = C.isEmptyObject(t),
              r = C.speed(e, n, i),
              s = function() {
                var e = ce(this, C.extend({}, t), r);
                (o || K.get(this, "finish")) && e.stop(!0);
              };
            return (
              (s.finish = s),
              o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
            );
          },
          stop: function(t, e, n) {
            var i = function(t) {
              var e = t.stop;
              delete t.stop, e(n);
            };
            return (
              "string" != typeof t && ((n = e), (e = t), (t = void 0)),
              e && !1 !== t && this.queue(t || "fx", []),
              this.each(function() {
                var e = !0,
                  o = null != t && t + "queueHooks",
                  r = C.timers,
                  s = K.get(this);
                if (o) s[o] && s[o].stop && i(s[o]);
                else for (o in s) s[o] && s[o].stop && re.test(o) && i(s[o]);
                for (o = r.length; o--; )
                  r[o].elem !== this ||
                    (null != t && r[o].queue !== t) ||
                    (r[o].anim.stop(n), (e = !1), r.splice(o, 1));
                (!e && n) || C.dequeue(this, t);
              })
            );
          },
          finish: function(t) {
            return (
              !1 !== t && (t = t || "fx"),
              this.each(function() {
                var e,
                  n = K.get(this),
                  i = n[t + "queue"],
                  o = n[t + "queueHooks"],
                  r = C.timers,
                  s = i ? i.length : 0;
                for (
                  n.finish = !0,
                    C.queue(this, t, []),
                    o && o.stop && o.stop.call(this, !0),
                    e = r.length;
                  e--;

                )
                  r[e].elem === this &&
                    r[e].queue === t &&
                    (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < s; e++)
                  i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish;
              })
            );
          }
        }),
        C.each(["toggle", "show", "hide"], function(t, e) {
          var n = C.fn[e];
          C.fn[e] = function(t, i, o) {
            return null == t || "boolean" == typeof t
              ? n.apply(this, arguments)
              : this.animate(le(e, !0), t, i, o);
          };
        }),
        C.each(
          {
            slideDown: le("show"),
            slideUp: le("hide"),
            slideToggle: le("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" }
          },
          function(t, e) {
            C.fn[t] = function(t, n, i) {
              return this.animate(e, t, n, i);
            };
          }
        ),
        (C.timers = []),
        (C.fx.tick = function() {
          var t,
            e = 0,
            n = C.timers;
          for (ne = Date.now(); e < n.length; e++)
            (t = n[e])() || n[e] !== t || n.splice(e--, 1);
          n.length || C.fx.stop(), (ne = void 0);
        }),
        (C.fx.timer = function(t) {
          C.timers.push(t), C.fx.start();
        }),
        (C.fx.interval = 13),
        (C.fx.start = function() {
          ie || ((ie = !0), se());
        }),
        (C.fx.stop = function() {
          ie = null;
        }),
        (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (C.fn.delay = function(t, e) {
          return (
            (t = (C.fx && C.fx.speeds[t]) || t),
            (e = e || "fx"),
            this.queue(e, function(e, i) {
              var o = n.setTimeout(e, t);
              i.stop = function() {
                n.clearTimeout(o);
              };
            })
          );
        }),
        (function() {
          var t = s.createElement("input"),
            e = s
              .createElement("select")
              .appendChild(s.createElement("option"));
          (t.type = "checkbox"),
            (m.checkOn = "" !== t.value),
            (m.optSelected = e.selected),
            ((t = s.createElement("input")).value = "t"),
            (t.type = "radio"),
            (m.radioValue = "t" === t.value);
        })();
      var fe,
        pe = C.expr.attrHandle;
      C.fn.extend({
        attr: function(t, e) {
          return z(this, C.attr, t, e, arguments.length > 1);
        },
        removeAttr: function(t) {
          return this.each(function() {
            C.removeAttr(this, t);
          });
        }
      }),
        C.extend({
          attr: function(t, e, n) {
            var i,
              o,
              r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
              return void 0 === t.getAttribute
                ? C.prop(t, e, n)
                : ((1 === r && C.isXMLDoc(t)) ||
                    (o =
                      C.attrHooks[e.toLowerCase()] ||
                      (C.expr.match.bool.test(e) ? fe : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void C.removeAttr(t, e)
                      : o && "set" in o && void 0 !== (i = o.set(t, n, e))
                      ? i
                      : (t.setAttribute(e, n + ""), n)
                    : o && "get" in o && null !== (i = o.get(t, e))
                    ? i
                    : null == (i = C.find.attr(t, e))
                    ? void 0
                    : i);
          },
          attrHooks: {
            type: {
              set: function(t, e) {
                if (!m.radioValue && "radio" === e && A(t, "input")) {
                  var n = t.value;
                  return t.setAttribute("type", e), n && (t.value = n), e;
                }
              }
            }
          },
          removeAttr: function(t, e) {
            var n,
              i = 0,
              o = e && e.match(H);
            if (o && 1 === t.nodeType)
              for (; (n = o[i++]); ) t.removeAttribute(n);
          }
        }),
        (fe = {
          set: function(t, e, n) {
            return !1 === e ? C.removeAttr(t, n) : t.setAttribute(n, n), n;
          }
        }),
        C.each(C.expr.match.bool.source.match(/\w+/g), function(t, e) {
          var n = pe[e] || C.find.attr;
          pe[e] = function(t, e, i) {
            var o,
              r,
              s = e.toLowerCase();
            return (
              i ||
                ((r = pe[s]),
                (pe[s] = o),
                (o = null != n(t, e, i) ? s : null),
                (pe[s] = r)),
              o
            );
          };
        });
      var de = /^(?:input|select|textarea|button)$/i,
        he = /^(?:a|area)$/i;
      function ge(t) {
        return (t.match(H) || []).join(" ");
      }
      function ve(t) {
        return (t.getAttribute && t.getAttribute("class")) || "";
      }
      function me(t) {
        return Array.isArray(t)
          ? t
          : ("string" == typeof t && t.match(H)) || [];
      }
      C.fn.extend({
        prop: function(t, e) {
          return z(this, C.prop, t, e, arguments.length > 1);
        },
        removeProp: function(t) {
          return this.each(function() {
            delete this[C.propFix[t] || t];
          });
        }
      }),
        C.extend({
          prop: function(t, e, n) {
            var i,
              o,
              r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
              return (
                (1 === r && C.isXMLDoc(t)) ||
                  ((e = C.propFix[e] || e), (o = C.propHooks[e])),
                void 0 !== n
                  ? o && "set" in o && void 0 !== (i = o.set(t, n, e))
                    ? i
                    : (t[e] = n)
                  : o && "get" in o && null !== (i = o.get(t, e))
                  ? i
                  : t[e]
              );
          },
          propHooks: {
            tabIndex: {
              get: function(t) {
                var e = C.find.attr(t, "tabindex");
                return e
                  ? parseInt(e, 10)
                  : de.test(t.nodeName) || (he.test(t.nodeName) && t.href)
                  ? 0
                  : -1;
              }
            }
          },
          propFix: { for: "htmlFor", class: "className" }
        }),
        m.optSelected ||
          (C.propHooks.selected = {
            get: function(t) {
              var e = t.parentNode;
              return e && e.parentNode && e.parentNode.selectedIndex, null;
            },
            set: function(t) {
              var e = t.parentNode;
              e &&
                (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
            }
          }),
        C.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable"
          ],
          function() {
            C.propFix[this.toLowerCase()] = this;
          }
        ),
        C.fn.extend({
          addClass: function(t) {
            var e,
              n,
              i,
              o,
              r,
              s,
              a,
              l = 0;
            if (y(t))
              return this.each(function(e) {
                C(this).addClass(t.call(this, e, ve(this)));
              });
            if ((e = me(t)).length)
              for (; (n = this[l++]); )
                if (
                  ((o = ve(n)), (i = 1 === n.nodeType && " " + ge(o) + " "))
                ) {
                  for (s = 0; (r = e[s++]); )
                    i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                  o !== (a = ge(i)) && n.setAttribute("class", a);
                }
            return this;
          },
          removeClass: function(t) {
            var e,
              n,
              i,
              o,
              r,
              s,
              a,
              l = 0;
            if (y(t))
              return this.each(function(e) {
                C(this).removeClass(t.call(this, e, ve(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((e = me(t)).length)
              for (; (n = this[l++]); )
                if (
                  ((o = ve(n)), (i = 1 === n.nodeType && " " + ge(o) + " "))
                ) {
                  for (s = 0; (r = e[s++]); )
                    for (; i.indexOf(" " + r + " ") > -1; )
                      i = i.replace(" " + r + " ", " ");
                  o !== (a = ge(i)) && n.setAttribute("class", a);
                }
            return this;
          },
          toggleClass: function(t, e) {
            var n = typeof t,
              i = "string" === n || Array.isArray(t);
            return "boolean" == typeof e && i
              ? e
                ? this.addClass(t)
                : this.removeClass(t)
              : y(t)
              ? this.each(function(n) {
                  C(this).toggleClass(t.call(this, n, ve(this), e), e);
                })
              : this.each(function() {
                  var e, o, r, s;
                  if (i)
                    for (o = 0, r = C(this), s = me(t); (e = s[o++]); )
                      r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                  else
                    (void 0 !== t && "boolean" !== n) ||
                      ((e = ve(this)) && K.set(this, "__className__", e),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          e || !1 === t
                            ? ""
                            : K.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function(t) {
            var e,
              n,
              i = 0;
            for (e = " " + t + " "; (n = this[i++]); )
              if (1 === n.nodeType && (" " + ge(ve(n)) + " ").indexOf(e) > -1)
                return !0;
            return !1;
          }
        });
      var ye = /\r/g;
      C.fn.extend({
        val: function(t) {
          var e,
            n,
            i,
            o = this[0];
          return arguments.length
            ? ((i = y(t)),
              this.each(function(n) {
                var o;
                1 === this.nodeType &&
                  (null == (o = i ? t.call(this, n, C(this).val()) : t)
                    ? (o = "")
                    : "number" == typeof o
                    ? (o += "")
                    : Array.isArray(o) &&
                      (o = C.map(o, function(t) {
                        return null == t ? "" : t + "";
                      })),
                  ((e =
                    C.valHooks[this.type] ||
                    C.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in e &&
                    void 0 !== e.set(this, o, "value")) ||
                    (this.value = o));
              }))
            : o
            ? (e =
                C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) &&
              "get" in e &&
              void 0 !== (n = e.get(o, "value"))
              ? n
              : "string" == typeof (n = o.value)
              ? n.replace(ye, "")
              : null == n
              ? ""
              : n
            : void 0;
        }
      }),
        C.extend({
          valHooks: {
            option: {
              get: function(t) {
                var e = C.find.attr(t, "value");
                return null != e ? e : ge(C.text(t));
              }
            },
            select: {
              get: function(t) {
                var e,
                  n,
                  i,
                  o = t.options,
                  r = t.selectedIndex,
                  s = "select-one" === t.type,
                  a = s ? null : [],
                  l = s ? r + 1 : o.length;
                for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                  if (
                    ((n = o[i]).selected || i === r) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
                  ) {
                    if (((e = C(n).val()), s)) return e;
                    a.push(e);
                  }
                return a;
              },
              set: function(t, e) {
                for (
                  var n, i, o = t.options, r = C.makeArray(e), s = o.length;
                  s--;

                )
                  ((i = o[s]).selected =
                    C.inArray(C.valHooks.option.get(i), r) > -1) && (n = !0);
                return n || (t.selectedIndex = -1), r;
              }
            }
          }
        }),
        C.each(["radio", "checkbox"], function() {
          (C.valHooks[this] = {
            set: function(t, e) {
              if (Array.isArray(e))
                return (t.checked = C.inArray(C(t).val(), e) > -1);
            }
          }),
            m.checkOn ||
              (C.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value;
              });
        }),
        (m.focusin = "onfocusin" in n);
      var be = /^(?:focusinfocus|focusoutblur)$/,
        xe = function(t) {
          t.stopPropagation();
        };
      C.extend(C.event, {
        trigger: function(t, e, i, o) {
          var r,
            a,
            l,
            u,
            c,
            f,
            p,
            d,
            g = [i || s],
            v = h.call(t, "type") ? t.type : t,
            m = h.call(t, "namespace") ? t.namespace.split(".") : [];
          if (
            ((a = d = l = i = i || s),
            3 !== i.nodeType &&
              8 !== i.nodeType &&
              !be.test(v + C.event.triggered) &&
              (v.indexOf(".") > -1 &&
                ((v = (m = v.split(".")).shift()), m.sort()),
              (c = v.indexOf(":") < 0 && "on" + v),
              ((t = t[C.expando]
                ? t
                : new C.Event(v, "object" == typeof t && t)).isTrigger = o
                ? 2
                : 3),
              (t.namespace = m.join(".")),
              (t.rnamespace = t.namespace
                ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (t.result = void 0),
              t.target || (t.target = i),
              (e = null == e ? [t] : C.makeArray(e, [t])),
              (p = C.event.special[v] || {}),
              o || !p.trigger || !1 !== p.trigger.apply(i, e)))
          ) {
            if (!o && !p.noBubble && !b(i)) {
              for (
                u = p.delegateType || v, be.test(u + v) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                g.push(a), (l = a);
              l === (i.ownerDocument || s) &&
                g.push(l.defaultView || l.parentWindow || n);
            }
            for (r = 0; (a = g[r++]) && !t.isPropagationStopped(); )
              (d = a),
                (t.type = r > 1 ? u : p.bindType || v),
                (f =
                  (K.get(a, "events") || {})[t.type] && K.get(a, "handle")) &&
                  f.apply(a, e),
                (f = c && a[c]) &&
                  f.apply &&
                  Y(a) &&
                  ((t.result = f.apply(a, e)),
                  !1 === t.result && t.preventDefault());
            return (
              (t.type = v),
              o ||
                t.isDefaultPrevented() ||
                (p._default && !1 !== p._default.apply(g.pop(), e)) ||
                !Y(i) ||
                (c &&
                  y(i[v]) &&
                  !b(i) &&
                  ((l = i[c]) && (i[c] = null),
                  (C.event.triggered = v),
                  t.isPropagationStopped() && d.addEventListener(v, xe),
                  i[v](),
                  t.isPropagationStopped() && d.removeEventListener(v, xe),
                  (C.event.triggered = void 0),
                  l && (i[c] = l))),
              t.result
            );
          }
        },
        simulate: function(t, e, n) {
          var i = C.extend(new C.Event(), n, { type: t, isSimulated: !0 });
          C.event.trigger(i, null, e);
        }
      }),
        C.fn.extend({
          trigger: function(t, e) {
            return this.each(function() {
              C.event.trigger(t, e, this);
            });
          },
          triggerHandler: function(t, e) {
            var n = this[0];
            if (n) return C.event.trigger(t, e, n, !0);
          }
        }),
        m.focusin ||
          C.each({ focus: "focusin", blur: "focusout" }, function(t, e) {
            var n = function(t) {
              C.event.simulate(e, t.target, C.event.fix(t));
            };
            C.event.special[e] = {
              setup: function() {
                var i = this.ownerDocument || this,
                  o = K.access(i, e);
                o || i.addEventListener(t, n, !0), K.access(i, e, (o || 0) + 1);
              },
              teardown: function() {
                var i = this.ownerDocument || this,
                  o = K.access(i, e) - 1;
                o
                  ? K.access(i, e, o)
                  : (i.removeEventListener(t, n, !0), K.remove(i, e));
              }
            };
          });
      var we = n.location,
        Te = Date.now(),
        Ce = /\?/;
      C.parseXML = function(t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
          e = new n.DOMParser().parseFromString(t, "text/xml");
        } catch (t) {
          e = void 0;
        }
        return (
          (e && !e.getElementsByTagName("parsererror").length) ||
            C.error("Invalid XML: " + t),
          e
        );
      };
      var Ee = /\[\]$/,
        Se = /\r?\n/g,
        $e = /^(?:submit|button|image|reset|file)$/i,
        ke = /^(?:input|select|textarea|keygen)/i;
      function De(t, e, n, i) {
        var o;
        if (Array.isArray(e))
          C.each(e, function(e, o) {
            n || Ee.test(t)
              ? i(t, o)
              : De(
                  t + "[" + ("object" == typeof o && null != o ? e : "") + "]",
                  o,
                  n,
                  i
                );
          });
        else if (n || "object" !== T(e)) i(t, e);
        else for (o in e) De(t + "[" + o + "]", e[o], n, i);
      }
      (C.param = function(t, e) {
        var n,
          i = [],
          o = function(t, e) {
            var n = y(e) ? e() : e;
            i[i.length] =
              encodeURIComponent(t) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (Array.isArray(t) || (t.jquery && !C.isPlainObject(t)))
          C.each(t, function() {
            o(this.name, this.value);
          });
        else for (n in t) De(n, t[n], e, o);
        return i.join("&");
      }),
        C.fn.extend({
          serialize: function() {
            return C.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var t = C.prop(this, "elements");
              return t ? C.makeArray(t) : this;
            })
              .filter(function() {
                var t = this.type;
                return (
                  this.name &&
                  !C(this).is(":disabled") &&
                  ke.test(this.nodeName) &&
                  !$e.test(t) &&
                  (this.checked || !pt.test(t))
                );
              })
              .map(function(t, e) {
                var n = C(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? C.map(n, function(t) {
                      return { name: e.name, value: t.replace(Se, "\r\n") };
                    })
                  : { name: e.name, value: n.replace(Se, "\r\n") };
              })
              .get();
          }
        });
      var Ne = /%20/g,
        Ae = /#.*$/,
        je = /([?&])_=[^&]*/,
        Oe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ie = /^(?:GET|HEAD)$/,
        Le = /^\/\//,
        Re = {},
        qe = {},
        Pe = "*/".concat("*"),
        He = s.createElement("a");
      function Me(t) {
        return function(e, n) {
          "string" != typeof e && ((n = e), (e = "*"));
          var i,
            o = 0,
            r = e.toLowerCase().match(H) || [];
          if (y(n))
            for (; (i = r[o++]); )
              "+" === i[0]
                ? ((i = i.slice(1) || "*"), (t[i] = t[i] || []).unshift(n))
                : (t[i] = t[i] || []).push(n);
        };
      }
      function We(t, e, n, i) {
        var o = {},
          r = t === qe;
        function s(a) {
          var l;
          return (
            (o[a] = !0),
            C.each(t[a] || [], function(t, a) {
              var u = a(e, n, i);
              return "string" != typeof u || r || o[u]
                ? r
                  ? !(l = u)
                  : void 0
                : (e.dataTypes.unshift(u), s(u), !1);
            }),
            l
          );
        }
        return s(e.dataTypes[0]) || (!o["*"] && s("*"));
      }
      function Fe(t, e) {
        var n,
          i,
          o = C.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
        return i && C.extend(!0, t, i), t;
      }
      (He.href = we.href),
        C.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: we.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              we.protocol
            ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Pe,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": C.parseXML
            },
            flatOptions: { url: !0, context: !0 }
          },
          ajaxSetup: function(t, e) {
            return e ? Fe(Fe(t, C.ajaxSettings), e) : Fe(C.ajaxSettings, t);
          },
          ajaxPrefilter: Me(Re),
          ajaxTransport: Me(qe),
          ajax: function(t, e) {
            "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
            var i,
              o,
              r,
              a,
              l,
              u,
              c,
              f,
              p,
              d,
              h = C.ajaxSetup({}, e),
              g = h.context || h,
              v = h.context && (g.nodeType || g.jquery) ? C(g) : C.event,
              m = C.Deferred(),
              y = C.Callbacks("once memory"),
              b = h.statusCode || {},
              x = {},
              w = {},
              T = "canceled",
              E = {
                readyState: 0,
                getResponseHeader: function(t) {
                  var e;
                  if (c) {
                    if (!a)
                      for (a = {}; (e = Oe.exec(r)); )
                        a[e[1].toLowerCase()] = e[2];
                    e = a[t.toLowerCase()];
                  }
                  return null == e ? null : e;
                },
                getAllResponseHeaders: function() {
                  return c ? r : null;
                },
                setRequestHeader: function(t, e) {
                  return (
                    null == c &&
                      ((t = w[t.toLowerCase()] = w[t.toLowerCase()] || t),
                      (x[t] = e)),
                    this
                  );
                },
                overrideMimeType: function(t) {
                  return null == c && (h.mimeType = t), this;
                },
                statusCode: function(t) {
                  var e;
                  if (t)
                    if (c) E.always(t[E.status]);
                    else for (e in t) b[e] = [b[e], t[e]];
                  return this;
                },
                abort: function(t) {
                  var e = t || T;
                  return i && i.abort(e), S(0, e), this;
                }
              };
            if (
              (m.promise(E),
              (h.url = ((t || h.url || we.href) + "").replace(
                Le,
                we.protocol + "//"
              )),
              (h.type = e.method || e.type || h.method || h.type),
              (h.dataTypes = (h.dataType || "*").toLowerCase().match(H) || [
                ""
              ]),
              null == h.crossDomain)
            ) {
              u = s.createElement("a");
              try {
                (u.href = h.url),
                  (u.href = u.href),
                  (h.crossDomain =
                    He.protocol + "//" + He.host != u.protocol + "//" + u.host);
              } catch (t) {
                h.crossDomain = !0;
              }
            }
            if (
              (h.data &&
                h.processData &&
                "string" != typeof h.data &&
                (h.data = C.param(h.data, h.traditional)),
              We(Re, h, e, E),
              c)
            )
              return E;
            for (p in ((f = C.event && h.global) &&
              0 == C.active++ &&
              C.event.trigger("ajaxStart"),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !Ie.test(h.type)),
            (o = h.url.replace(Ae, "")),
            h.hasContent
              ? h.data &&
                h.processData &&
                0 ===
                  (h.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (h.data = h.data.replace(Ne, "+"))
              : ((d = h.url.slice(o.length)),
                h.data &&
                  (h.processData || "string" == typeof h.data) &&
                  ((o += (Ce.test(o) ? "&" : "?") + h.data), delete h.data),
                !1 === h.cache &&
                  ((o = o.replace(je, "$1")),
                  (d = (Ce.test(o) ? "&" : "?") + "_=" + Te++ + d)),
                (h.url = o + d)),
            h.ifModified &&
              (C.lastModified[o] &&
                E.setRequestHeader("If-Modified-Since", C.lastModified[o]),
              C.etag[o] && E.setRequestHeader("If-None-Match", C.etag[o])),
            ((h.data && h.hasContent && !1 !== h.contentType) ||
              e.contentType) &&
              E.setRequestHeader("Content-Type", h.contentType),
            E.setRequestHeader(
              "Accept",
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] +
                    ("*" !== h.dataTypes[0] ? ", " + Pe + "; q=0.01" : "")
                : h.accepts["*"]
            ),
            h.headers))
              E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
              return E.abort();
            if (
              ((T = "abort"),
              y.add(h.complete),
              E.done(h.success),
              E.fail(h.error),
              (i = We(qe, h, e, E)))
            ) {
              if (((E.readyState = 1), f && v.trigger("ajaxSend", [E, h]), c))
                return E;
              h.async &&
                h.timeout > 0 &&
                (l = n.setTimeout(function() {
                  E.abort("timeout");
                }, h.timeout));
              try {
                (c = !1), i.send(x, S);
              } catch (t) {
                if (c) throw t;
                S(-1, t);
              }
            } else S(-1, "No Transport");
            function S(t, e, s, a) {
              var u,
                p,
                d,
                x,
                w,
                T = e;
              c ||
                ((c = !0),
                l && n.clearTimeout(l),
                (i = void 0),
                (r = a || ""),
                (E.readyState = t > 0 ? 4 : 0),
                (u = (t >= 200 && t < 300) || 304 === t),
                s &&
                  (x = (function(t, e, n) {
                    for (
                      var i, o, r, s, a = t.contents, l = t.dataTypes;
                      "*" === l[0];

                    )
                      l.shift(),
                        void 0 === i &&
                          (i =
                            t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i)
                      for (o in a)
                        if (a[o] && a[o].test(i)) {
                          l.unshift(o);
                          break;
                        }
                    if (l[0] in n) r = l[0];
                    else {
                      for (o in n) {
                        if (!l[0] || t.converters[o + " " + l[0]]) {
                          r = o;
                          break;
                        }
                        s || (s = o);
                      }
                      r = r || s;
                    }
                    if (r) return r !== l[0] && l.unshift(r), n[r];
                  })(h, E, s)),
                (x = (function(t, e, n, i) {
                  var o,
                    r,
                    s,
                    a,
                    l,
                    u = {},
                    c = t.dataTypes.slice();
                  if (c[1])
                    for (s in t.converters)
                      u[s.toLowerCase()] = t.converters[s];
                  for (r = c.shift(); r; )
                    if (
                      (t.responseFields[r] && (n[t.responseFields[r]] = e),
                      !l &&
                        i &&
                        t.dataFilter &&
                        (e = t.dataFilter(e, t.dataType)),
                      (l = r),
                      (r = c.shift()))
                    )
                      if ("*" === r) r = l;
                      else if ("*" !== l && l !== r) {
                        if (!(s = u[l + " " + r] || u["* " + r]))
                          for (o in u)
                            if (
                              (a = o.split(" "))[1] === r &&
                              (s = u[l + " " + a[0]] || u["* " + a[0]])
                            ) {
                              !0 === s
                                ? (s = u[o])
                                : !0 !== u[o] && ((r = a[0]), c.unshift(a[1]));
                              break;
                            }
                        if (!0 !== s)
                          if (s && t.throws) e = s(e);
                          else
                            try {
                              e = s(e);
                            } catch (t) {
                              return {
                                state: "parsererror",
                                error: s
                                  ? t
                                  : "No conversion from " + l + " to " + r
                              };
                            }
                      }
                  return { state: "success", data: e };
                })(h, x, E, u)),
                u
                  ? (h.ifModified &&
                      ((w = E.getResponseHeader("Last-Modified")) &&
                        (C.lastModified[o] = w),
                      (w = E.getResponseHeader("etag")) && (C.etag[o] = w)),
                    204 === t || "HEAD" === h.type
                      ? (T = "nocontent")
                      : 304 === t
                      ? (T = "notmodified")
                      : ((T = x.state), (p = x.data), (u = !(d = x.error))))
                  : ((d = T), (!t && T) || ((T = "error"), t < 0 && (t = 0))),
                (E.status = t),
                (E.statusText = (e || T) + ""),
                u ? m.resolveWith(g, [p, T, E]) : m.rejectWith(g, [E, T, d]),
                E.statusCode(b),
                (b = void 0),
                f &&
                  v.trigger(u ? "ajaxSuccess" : "ajaxError", [E, h, u ? p : d]),
                y.fireWith(g, [E, T]),
                f &&
                  (v.trigger("ajaxComplete", [E, h]),
                  --C.active || C.event.trigger("ajaxStop")));
            }
            return E;
          },
          getJSON: function(t, e, n) {
            return C.get(t, e, n, "json");
          },
          getScript: function(t, e) {
            return C.get(t, void 0, e, "script");
          }
        }),
        C.each(["get", "post"], function(t, e) {
          C[e] = function(t, n, i, o) {
            return (
              y(n) && ((o = o || i), (i = n), (n = void 0)),
              C.ajax(
                C.extend(
                  { url: t, type: e, dataType: o, data: n, success: i },
                  C.isPlainObject(t) && t
                )
              )
            );
          };
        }),
        (C._evalUrl = function(t) {
          return C.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
          });
        }),
        C.fn.extend({
          wrapAll: function(t) {
            var e;
            return (
              this[0] &&
                (y(t) && (t = t.call(this[0])),
                (e = C(t, this[0].ownerDocument)
                  .eq(0)
                  .clone(!0)),
                this[0].parentNode && e.insertBefore(this[0]),
                e
                  .map(function() {
                    for (var t = this; t.firstElementChild; )
                      t = t.firstElementChild;
                    return t;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function(t) {
            return y(t)
              ? this.each(function(e) {
                  C(this).wrapInner(t.call(this, e));
                })
              : this.each(function() {
                  var e = C(this),
                    n = e.contents();
                  n.length ? n.wrapAll(t) : e.append(t);
                });
          },
          wrap: function(t) {
            var e = y(t);
            return this.each(function(n) {
              C(this).wrapAll(e ? t.call(this, n) : t);
            });
          },
          unwrap: function(t) {
            return (
              this.parent(t)
                .not("body")
                .each(function() {
                  C(this).replaceWith(this.childNodes);
                }),
              this
            );
          }
        }),
        (C.expr.pseudos.hidden = function(t) {
          return !C.expr.pseudos.visible(t);
        }),
        (C.expr.pseudos.visible = function(t) {
          return !!(
            t.offsetWidth ||
            t.offsetHeight ||
            t.getClientRects().length
          );
        }),
        (C.ajaxSettings.xhr = function() {
          try {
            return new n.XMLHttpRequest();
          } catch (t) {}
        });
      var Be = { 0: 200, 1223: 204 },
        Ue = C.ajaxSettings.xhr();
      (m.cors = !!Ue && "withCredentials" in Ue),
        (m.ajax = Ue = !!Ue),
        C.ajaxTransport(function(t) {
          var e, i;
          if (m.cors || (Ue && !t.crossDomain))
            return {
              send: function(o, r) {
                var s,
                  a = t.xhr();
                if (
                  (a.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (s in t.xhrFields) a[s] = t.xhrFields[s];
                for (s in (t.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  o["X-Requested-With"] ||
                  (o["X-Requested-With"] = "XMLHttpRequest"),
                o))
                  a.setRequestHeader(s, o[s]);
                (e = function(t) {
                  return function() {
                    e &&
                      ((e = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                      "abort" === t
                        ? a.abort()
                        : "error" === t
                        ? "number" != typeof a.status
                          ? r(0, "error")
                          : r(a.status, a.statusText)
                        : r(
                            Be[a.status] || a.status,
                            a.statusText,
                            "text" !== (a.responseType || "text") ||
                              "string" != typeof a.responseText
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders()
                          ));
                  };
                }),
                  (a.onload = e()),
                  (i = a.onerror = a.ontimeout = e("error")),
                  void 0 !== a.onabort
                    ? (a.onabort = i)
                    : (a.onreadystatechange = function() {
                        4 === a.readyState &&
                          n.setTimeout(function() {
                            e && i();
                          });
                      }),
                  (e = e("abort"));
                try {
                  a.send((t.hasContent && t.data) || null);
                } catch (t) {
                  if (e) throw t;
                }
              },
              abort: function() {
                e && e();
              }
            };
        }),
        C.ajaxPrefilter(function(t) {
          t.crossDomain && (t.contents.script = !1);
        }),
        C.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function(t) {
              return C.globalEval(t), t;
            }
          }
        }),
        C.ajaxPrefilter("script", function(t) {
          void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = "GET");
        }),
        C.ajaxTransport("script", function(t) {
          var e, n;
          if (t.crossDomain)
            return {
              send: function(i, o) {
                (e = C("<script>")
                  .prop({ charset: t.scriptCharset, src: t.url })
                  .on(
                    "load error",
                    (n = function(t) {
                      e.remove(),
                        (n = null),
                        t && o("error" === t.type ? 404 : 200, t.type);
                    })
                  )),
                  s.head.appendChild(e[0]);
              },
              abort: function() {
                n && n();
              }
            };
        });
      var _e,
        ze = [],
        Ve = /(=)\?(?=&|$)|\?\?/;
      C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var t = ze.pop() || C.expando + "_" + Te++;
          return (this[t] = !0), t;
        }
      }),
        C.ajaxPrefilter("json jsonp", function(t, e, i) {
          var o,
            r,
            s,
            a =
              !1 !== t.jsonp &&
              (Ve.test(t.url)
                ? "url"
                : "string" == typeof t.data &&
                  0 ===
                    (t.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Ve.test(t.data) &&
                  "data");
          if (a || "jsonp" === t.dataTypes[0])
            return (
              (o = t.jsonpCallback = y(t.jsonpCallback)
                ? t.jsonpCallback()
                : t.jsonpCallback),
              a
                ? (t[a] = t[a].replace(Ve, "$1" + o))
                : !1 !== t.jsonp &&
                  (t.url += (Ce.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
              (t.converters["script json"] = function() {
                return s || C.error(o + " was not called"), s[0];
              }),
              (t.dataTypes[0] = "json"),
              (r = n[o]),
              (n[o] = function() {
                s = arguments;
              }),
              i.always(function() {
                void 0 === r ? C(n).removeProp(o) : (n[o] = r),
                  t[o] && ((t.jsonpCallback = e.jsonpCallback), ze.push(o)),
                  s && y(r) && r(s[0]),
                  (s = r = void 0);
              }),
              "script"
            );
        }),
        (m.createHTMLDocument = (((_e = s.implementation.createHTMLDocument("")
          .body).innerHTML = "<form></form><form></form>"),
        2 === _e.childNodes.length)),
        (C.parseHTML = function(t, e, n) {
          return "string" != typeof t
            ? []
            : ("boolean" == typeof e && ((n = e), (e = !1)),
              e ||
                (m.createHTMLDocument
                  ? (((i = (e = s.implementation.createHTMLDocument(
                      ""
                    )).createElement("base")).href = s.location.href),
                    e.head.appendChild(i))
                  : (e = s)),
              (o = j.exec(t)),
              (r = !n && []),
              o
                ? [e.createElement(o[1])]
                : ((o = wt([t], e, r)),
                  r && r.length && C(r).remove(),
                  C.merge([], o.childNodes)));
          var i, o, r;
        }),
        (C.fn.load = function(t, e, n) {
          var i,
            o,
            r,
            s = this,
            a = t.indexOf(" ");
          return (
            a > -1 && ((i = ge(t.slice(a))), (t = t.slice(0, a))),
            y(e)
              ? ((n = e), (e = void 0))
              : e && "object" == typeof e && (o = "POST"),
            s.length > 0 &&
              C.ajax({ url: t, type: o || "GET", dataType: "html", data: e })
                .done(function(t) {
                  (r = arguments),
                    s.html(
                      i
                        ? C("<div>")
                            .append(C.parseHTML(t))
                            .find(i)
                        : t
                    );
                })
                .always(
                  n &&
                    function(t, e) {
                      s.each(function() {
                        n.apply(this, r || [t.responseText, e, t]);
                      });
                    }
                ),
            this
          );
        }),
        C.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend"
          ],
          function(t, e) {
            C.fn[e] = function(t) {
              return this.on(e, t);
            };
          }
        ),
        (C.expr.pseudos.animated = function(t) {
          return C.grep(C.timers, function(e) {
            return t === e.elem;
          }).length;
        }),
        (C.offset = {
          setOffset: function(t, e, n) {
            var i,
              o,
              r,
              s,
              a,
              l,
              u = C.css(t, "position"),
              c = C(t),
              f = {};
            "static" === u && (t.style.position = "relative"),
              (a = c.offset()),
              (r = C.css(t, "top")),
              (l = C.css(t, "left")),
              ("absolute" === u || "fixed" === u) &&
              (r + l).indexOf("auto") > -1
                ? ((s = (i = c.position()).top), (o = i.left))
                : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
              y(e) && (e = e.call(t, n, C.extend({}, a))),
              null != e.top && (f.top = e.top - a.top + s),
              null != e.left && (f.left = e.left - a.left + o),
              "using" in e ? e.using.call(t, f) : c.css(f);
          }
        }),
        C.fn.extend({
          offset: function(t) {
            if (arguments.length)
              return void 0 === t
                ? this
                : this.each(function(e) {
                    C.offset.setOffset(this, t, e);
                  });
            var e,
              n,
              i = this[0];
            return i
              ? i.getClientRects().length
                ? ((e = i.getBoundingClientRect()),
                  (n = i.ownerDocument.defaultView),
                  { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function() {
            if (this[0]) {
              var t,
                e,
                n,
                i = this[0],
                o = { top: 0, left: 0 };
              if ("fixed" === C.css(i, "position"))
                e = i.getBoundingClientRect();
              else {
                for (
                  e = this.offset(),
                    n = i.ownerDocument,
                    t = i.offsetParent || n.documentElement;
                  t &&
                  (t === n.body || t === n.documentElement) &&
                  "static" === C.css(t, "position");

                )
                  t = t.parentNode;
                t &&
                  t !== i &&
                  1 === t.nodeType &&
                  (((o = C(t).offset()).top += C.css(t, "borderTopWidth", !0)),
                  (o.left += C.css(t, "borderLeftWidth", !0)));
              }
              return {
                top: e.top - o.top - C.css(i, "marginTop", !0),
                left: e.left - o.left - C.css(i, "marginLeft", !0)
              };
            }
          },
          offsetParent: function() {
            return this.map(function() {
              for (
                var t = this.offsetParent;
                t && "static" === C.css(t, "position");

              )
                t = t.offsetParent;
              return t || Tt;
            });
          }
        }),
        C.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function(t, e) {
            var n = "pageYOffset" === e;
            C.fn[t] = function(i) {
              return z(
                this,
                function(t, i, o) {
                  var r;
                  if (
                    (b(t) ? (r = t) : 9 === t.nodeType && (r = t.defaultView),
                    void 0 === o)
                  )
                    return r ? r[e] : t[i];
                  r
                    ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset)
                    : (t[i] = o);
                },
                t,
                i,
                arguments.length
              );
            };
          }
        ),
        C.each(["top", "left"], function(t, e) {
          C.cssHooks[e] = _t(m.pixelPosition, function(t, n) {
            if (n)
              return (n = Ut(t, e)), Wt.test(n) ? C(t).position()[e] + "px" : n;
          });
        }),
        C.each({ Height: "height", Width: "width" }, function(t, e) {
          C.each(
            { padding: "inner" + t, content: e, "": "outer" + t },
            function(n, i) {
              C.fn[i] = function(o, r) {
                var s = arguments.length && (n || "boolean" != typeof o),
                  a = n || (!0 === o || !0 === r ? "margin" : "border");
                return z(
                  this,
                  function(e, n, o) {
                    var r;
                    return b(e)
                      ? 0 === i.indexOf("outer")
                        ? e["inner" + t]
                        : e.document.documentElement["client" + t]
                      : 9 === e.nodeType
                      ? ((r = e.documentElement),
                        Math.max(
                          e.body["scroll" + t],
                          r["scroll" + t],
                          e.body["offset" + t],
                          r["offset" + t],
                          r["client" + t]
                        ))
                      : void 0 === o
                      ? C.css(e, n, a)
                      : C.style(e, n, o, a);
                  },
                  e,
                  s ? o : void 0,
                  s
                );
              };
            }
          );
        }),
        C.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function(t, e) {
            C.fn[e] = function(t, n) {
              return arguments.length > 0
                ? this.on(e, null, t, n)
                : this.trigger(e);
            };
          }
        ),
        C.fn.extend({
          hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t);
          }
        }),
        C.fn.extend({
          bind: function(t, e, n) {
            return this.on(t, null, e, n);
          },
          unbind: function(t, e) {
            return this.off(t, null, e);
          },
          delegate: function(t, e, n, i) {
            return this.on(e, t, n, i);
          },
          undelegate: function(t, e, n) {
            return 1 === arguments.length
              ? this.off(t, "**")
              : this.off(e, t || "**", n);
          }
        }),
        (C.proxy = function(t, e) {
          var n, i, o;
          if (("string" == typeof e && ((n = t[e]), (e = t), (t = n)), y(t)))
            return (
              (i = l.call(arguments, 2)),
              ((o = function() {
                return t.apply(e || this, i.concat(l.call(arguments)));
              }).guid = t.guid = t.guid || C.guid++),
              o
            );
        }),
        (C.holdReady = function(t) {
          t ? C.readyWait++ : C.ready(!0);
        }),
        (C.isArray = Array.isArray),
        (C.parseJSON = JSON.parse),
        (C.nodeName = A),
        (C.isFunction = y),
        (C.isWindow = b),
        (C.camelCase = G),
        (C.type = T),
        (C.now = Date.now),
        (C.isNumeric = function(t) {
          var e = C.type(t);
          return (
            ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
          );
        }),
        void 0 ===
          (i = function() {
            return C;
          }.apply(e, [])) || (t.exports = i);
      var Qe = n.jQuery,
        Xe = n.$;
      return (
        (C.noConflict = function(t) {
          return (
            n.$ === C && (n.$ = Xe), t && n.jQuery === C && (n.jQuery = Qe), C
          );
        }),
        o || (n.jQuery = n.$ = C),
        C
      );
    });
  },
  function(t, e) {
    if ("undefined" == typeof jQuery)
      throw new Error("Bootstrap's JavaScript requires jQuery");
    !(function(t) {
      "use strict";
      var e = t.fn.jquery.split(" ")[0].split(".");
      if (
        (e[0] < 2 && e[1] < 9) ||
        (1 == e[0] && 9 == e[1] && e[2] < 1) ||
        e[0] > 3
      )
        throw new Error(
          "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4"
        );
    })(jQuery),
      (function(t) {
        "use strict";
        (t.fn.emulateTransitionEnd = function(e) {
          var n = !1,
            i = this;
          t(this).one("bsTransitionEnd", function() {
            n = !0;
          });
          return (
            setTimeout(function() {
              n || t(i).trigger(t.support.transition.end);
            }, e),
            this
          );
        }),
          t(function() {
            (t.support.transition = (function() {
              var t = document.createElement("bootstrap"),
                e = {
                  WebkitTransition: "webkitTransitionEnd",
                  MozTransition: "transitionend",
                  OTransition: "oTransitionEnd otransitionend",
                  transition: "transitionend"
                };
              for (var n in e) if (void 0 !== t.style[n]) return { end: e[n] };
              return !1;
            })()),
              t.support.transition &&
                (t.event.special.bsTransitionEnd = {
                  bindType: t.support.transition.end,
                  delegateType: t.support.transition.end,
                  handle: function(e) {
                    if (t(e.target).is(this))
                      return e.handleObj.handler.apply(this, arguments);
                  }
                });
          });
      })(jQuery),
      (function(t) {
        "use strict";
        var e = '[data-dismiss="alert"]',
          n = function(n) {
            t(n).on("click", e, this.close);
          };
        (n.VERSION = "3.3.7"),
          (n.TRANSITION_DURATION = 150),
          (n.prototype.close = function(e) {
            var i = t(this),
              o = i.attr("data-target");
            o || (o = (o = i.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, ""));
            var r = t("#" === o ? [] : o);
            function s() {
              r.detach()
                .trigger("closed.bs.alert")
                .remove();
            }
            e && e.preventDefault(),
              r.length || (r = i.closest(".alert")),
              r.trigger((e = t.Event("close.bs.alert"))),
              e.isDefaultPrevented() ||
                (r.removeClass("in"),
                t.support.transition && r.hasClass("fade")
                  ? r
                      .one("bsTransitionEnd", s)
                      .emulateTransitionEnd(n.TRANSITION_DURATION)
                  : s());
          });
        var i = t.fn.alert;
        (t.fn.alert = function(e) {
          return this.each(function() {
            var i = t(this),
              o = i.data("bs.alert");
            o || i.data("bs.alert", (o = new n(this))),
              "string" == typeof e && o[e].call(i);
          });
        }),
          (t.fn.alert.Constructor = n),
          (t.fn.alert.noConflict = function() {
            return (t.fn.alert = i), this;
          }),
          t(document).on("click.bs.alert.data-api", e, n.prototype.close);
      })(jQuery),
      (function(t) {
        "use strict";
        var e = function(n, i) {
          (this.$element = t(n)),
            (this.options = t.extend({}, e.DEFAULTS, i)),
            (this.isLoading = !1);
        };
        function n(n) {
          return this.each(function() {
            var i = t(this),
              o = i.data("bs.button"),
              r = "object" == typeof n && n;
            o || i.data("bs.button", (o = new e(this, r))),
              "toggle" == n ? o.toggle() : n && o.setState(n);
          });
        }
        (e.VERSION = "3.3.7"),
          (e.DEFAULTS = { loadingText: "loading..." }),
          (e.prototype.setState = function(e) {
            var n = "disabled",
              i = this.$element,
              o = i.is("input") ? "val" : "html",
              r = i.data();
            (e += "Text"),
              null == r.resetText && i.data("resetText", i[o]()),
              setTimeout(
                t.proxy(function() {
                  i[o](null == r[e] ? this.options[e] : r[e]),
                    "loadingText" == e
                      ? ((this.isLoading = !0),
                        i
                          .addClass(n)
                          .attr(n, n)
                          .prop(n, !0))
                      : this.isLoading &&
                        ((this.isLoading = !1),
                        i
                          .removeClass(n)
                          .removeAttr(n)
                          .prop(n, !1));
                }, this),
                0
              );
          }),
          (e.prototype.toggle = function() {
            var t = !0,
              e = this.$element.closest('[data-toggle="buttons"]');
            if (e.length) {
              var n = this.$element.find("input");
              "radio" == n.prop("type")
                ? (n.prop("checked") && (t = !1),
                  e.find(".active").removeClass("active"),
                  this.$element.addClass("active"))
                : "checkbox" == n.prop("type") &&
                  (n.prop("checked") !== this.$element.hasClass("active") &&
                    (t = !1),
                  this.$element.toggleClass("active")),
                n.prop("checked", this.$element.hasClass("active")),
                t && n.trigger("change");
            } else
              this.$element.attr(
                "aria-pressed",
                !this.$element.hasClass("active")
              ),
                this.$element.toggleClass("active");
          });
        var i = t.fn.button;
        (t.fn.button = n),
          (t.fn.button.Constructor = e),
          (t.fn.button.noConflict = function() {
            return (t.fn.button = i), this;
          }),
          t(document)
            .on("click.bs.button.data-api", '[data-toggle^="button"]', function(
              e
            ) {
              var i = t(e.target).closest(".btn");
              n.call(i, "toggle"),
                t(e.target).is('input[type="radio"], input[type="checkbox"]') ||
                  (e.preventDefault(),
                  i.is("input,button")
                    ? i.trigger("focus")
                    : i
                        .find("input:visible,button:visible")
                        .first()
                        .trigger("focus"));
            })
            .on(
              "focus.bs.button.data-api blur.bs.button.data-api",
              '[data-toggle^="button"]',
              function(e) {
                t(e.target)
                  .closest(".btn")
                  .toggleClass("focus", /^focus(in)?$/.test(e.type));
              }
            );
      })(jQuery),
      (function(t) {
        "use strict";
        var e = function(e, n) {
          (this.$element = t(e)),
            (this.$indicators = this.$element.find(".carousel-indicators")),
            (this.options = n),
            (this.paused = null),
            (this.sliding = null),
            (this.interval = null),
            (this.$active = null),
            (this.$items = null),
            this.options.keyboard &&
              this.$element.on(
                "keydown.bs.carousel",
                t.proxy(this.keydown, this)
              ),
            "hover" == this.options.pause &&
              !("ontouchstart" in document.documentElement) &&
              this.$element
                .on("mouseenter.bs.carousel", t.proxy(this.pause, this))
                .on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
        };
        function n(n) {
          return this.each(function() {
            var i = t(this),
              o = i.data("bs.carousel"),
              r = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n),
              s = "string" == typeof n ? n : r.slide;
            o || i.data("bs.carousel", (o = new e(this, r))),
              "number" == typeof n
                ? o.to(n)
                : s
                ? o[s]()
                : r.interval && o.pause().cycle();
          });
        }
        (e.VERSION = "3.3.7"),
          (e.TRANSITION_DURATION = 600),
          (e.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
          }),
          (e.prototype.keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName)) {
              switch (t.which) {
                case 37:
                  this.prev();
                  break;
                case 39:
                  this.next();
                  break;
                default:
                  return;
              }
              t.preventDefault();
            }
          }),
          (e.prototype.cycle = function(e) {
            return (
              e || (this.paused = !1),
              this.interval && clearInterval(this.interval),
              this.options.interval &&
                !this.paused &&
                (this.interval = setInterval(
                  t.proxy(this.next, this),
                  this.options.interval
                )),
              this
            );
          }),
          (e.prototype.getItemIndex = function(t) {
            return (
              (this.$items = t.parent().children(".item")),
              this.$items.index(t || this.$active)
            );
          }),
          (e.prototype.getItemForDirection = function(t, e) {
            var n = this.getItemIndex(e);
            if (
              (("prev" == t && 0 === n) ||
                ("next" == t && n == this.$items.length - 1)) &&
              !this.options.wrap
            )
              return e;
            var i = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
            return this.$items.eq(i);
          }),
          (e.prototype.to = function(t) {
            var e = this,
              n = this.getItemIndex(
                (this.$active = this.$element.find(".item.active"))
              );
            if (!(t > this.$items.length - 1 || t < 0))
              return this.sliding
                ? this.$element.one("slid.bs.carousel", function() {
                    e.to(t);
                  })
                : n == t
                ? this.pause().cycle()
                : this.slide(t > n ? "next" : "prev", this.$items.eq(t));
          }),
          (e.prototype.pause = function(e) {
            return (
              e || (this.paused = !0),
              this.$element.find(".next, .prev").length &&
                t.support.transition &&
                (this.$element.trigger(t.support.transition.end),
                this.cycle(!0)),
              (this.interval = clearInterval(this.interval)),
              this
            );
          }),
          (e.prototype.next = function() {
            if (!this.sliding) return this.slide("next");
          }),
          (e.prototype.prev = function() {
            if (!this.sliding) return this.slide("prev");
          }),
          (e.prototype.slide = function(n, i) {
            var o = this.$element.find(".item.active"),
              r = i || this.getItemForDirection(n, o),
              s = this.interval,
              a = "next" == n ? "left" : "right",
              l = this;
            if (r.hasClass("active")) return (this.sliding = !1);
            var u = r[0],
              c = t.Event("slide.bs.carousel", {
                relatedTarget: u,
                direction: a
              });
            if ((this.$element.trigger(c), !c.isDefaultPrevented())) {
              if (
                ((this.sliding = !0),
                s && this.pause(),
                this.$indicators.length)
              ) {
                this.$indicators.find(".active").removeClass("active");
                var f = t(this.$indicators.children()[this.getItemIndex(r)]);
                f && f.addClass("active");
              }
              var p = t.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: a
              });
              return (
                t.support.transition && this.$element.hasClass("slide")
                  ? (r.addClass(n),
                    r[0].offsetWidth,
                    o.addClass(a),
                    r.addClass(a),
                    o
                      .one("bsTransitionEnd", function() {
                        r.removeClass([n, a].join(" ")).addClass("active"),
                          o.removeClass(["active", a].join(" ")),
                          (l.sliding = !1),
                          setTimeout(function() {
                            l.$element.trigger(p);
                          }, 0);
                      })
                      .emulateTransitionEnd(e.TRANSITION_DURATION))
                  : (o.removeClass("active"),
                    r.addClass("active"),
                    (this.sliding = !1),
                    this.$element.trigger(p)),
                s && this.cycle(),
                this
              );
            }
          });
        var i = t.fn.carousel;
        (t.fn.carousel = n),
          (t.fn.carousel.Constructor = e),
          (t.fn.carousel.noConflict = function() {
            return (t.fn.carousel = i), this;
          });
        var o = function(e) {
          var i,
            o = t(this),
            r = t(
              o.attr("data-target") ||
                ((i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""))
            );
          if (r.hasClass("carousel")) {
            var s = t.extend({}, r.data(), o.data()),
              a = o.attr("data-slide-to");
            a && (s.interval = !1),
              n.call(r, s),
              a && r.data("bs.carousel").to(a),
              e.preventDefault();
          }
        };
        t(document)
          .on("click.bs.carousel.data-api", "[data-slide]", o)
          .on("click.bs.carousel.data-api", "[data-slide-to]", o),
          t(window).on("load", function() {
            t('[data-ride="carousel"]').each(function() {
              var e = t(this);
              n.call(e, e.data());
            });
          });
      })(jQuery),
      (function(t) {
        "use strict";
        var e = function(n, i) {
          (this.$element = t(n)),
            (this.options = t.extend({}, e.DEFAULTS, i)),
            (this.$trigger = t(
              '[data-toggle="collapse"][href="#' +
                n.id +
                '"],[data-toggle="collapse"][data-target="#' +
                n.id +
                '"]'
            )),
            (this.transitioning = null),
            this.options.parent
              ? (this.$parent = this.getParent())
              : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
            this.options.toggle && this.toggle();
        };
        function n(e) {
          var n,
            i =
              e.attr("data-target") ||
              ((n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
          return t(i);
        }
        function i(n) {
          return this.each(function() {
            var i = t(this),
              o = i.data("bs.collapse"),
              r = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n);
            !o && r.toggle && /show|hide/.test(n) && (r.toggle = !1),
              o || i.data("bs.collapse", (o = new e(this, r))),
              "string" == typeof n && o[n]();
          });
        }
        (e.VERSION = "3.3.7"),
          (e.TRANSITION_DURATION = 350),
          (e.DEFAULTS = { toggle: !0 }),
          (e.prototype.dimension = function() {
            return this.$element.hasClass("width") ? "width" : "height";
          }),
          (e.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
              var n,
                o =
                  this.$parent &&
                  this.$parent.children(".panel").children(".in, .collapsing");
              if (
                !(
                  o &&
                  o.length &&
                  (n = o.data("bs.collapse")) &&
                  n.transitioning
                )
              ) {
                var r = t.Event("show.bs.collapse");
                if ((this.$element.trigger(r), !r.isDefaultPrevented())) {
                  o &&
                    o.length &&
                    (i.call(o, "hide"), n || o.data("bs.collapse", null));
                  var s = this.dimension();
                  this.$element
                    .removeClass("collapse")
                    .addClass("collapsing")
                    [s](0)
                    .attr("aria-expanded", !0),
                    this.$trigger
                      .removeClass("collapsed")
                      .attr("aria-expanded", !0),
                    (this.transitioning = 1);
                  var a = function() {
                    this.$element
                      .removeClass("collapsing")
                      .addClass("collapse in")
                      [s](""),
                      (this.transitioning = 0),
                      this.$element.trigger("shown.bs.collapse");
                  };
                  if (!t.support.transition) return a.call(this);
                  var l = t.camelCase(["scroll", s].join("-"));
                  this.$element
                    .one("bsTransitionEnd", t.proxy(a, this))
                    .emulateTransitionEnd(e.TRANSITION_DURATION)
                    [s](this.$element[0][l]);
                }
              }
            }
          }),
          (e.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
              var n = t.Event("hide.bs.collapse");
              if ((this.$element.trigger(n), !n.isDefaultPrevented())) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight,
                  this.$element
                    .addClass("collapsing")
                    .removeClass("collapse in")
                    .attr("aria-expanded", !1),
                  this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                  (this.transitioning = 1);
                var o = function() {
                  (this.transitioning = 0),
                    this.$element
                      .removeClass("collapsing")
                      .addClass("collapse")
                      .trigger("hidden.bs.collapse");
                };
                if (!t.support.transition) return o.call(this);
                this.$element[i](0)
                  .one("bsTransitionEnd", t.proxy(o, this))
                  .emulateTransitionEnd(e.TRANSITION_DURATION);
              }
            }
          }),
          (e.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]();
          }),
          (e.prototype.getParent = function() {
            return t(this.options.parent)
              .find(
                '[data-toggle="collapse"][data-parent="' +
                  this.options.parent +
                  '"]'
              )
              .each(
                t.proxy(function(e, i) {
                  var o = t(i);
                  this.addAriaAndCollapsedClass(n(o), o);
                }, this)
              )
              .end();
          }),
          (e.prototype.addAriaAndCollapsedClass = function(t, e) {
            var n = t.hasClass("in");
            t.attr("aria-expanded", n),
              e.toggleClass("collapsed", !n).attr("aria-expanded", n);
          });
        var o = t.fn.collapse;
        (t.fn.collapse = i),
          (t.fn.collapse.Constructor = e),
          (t.fn.collapse.noConflict = function() {
            return (t.fn.collapse = o), this;
          }),
          t(document).on(
            "click.bs.collapse.data-api",
            '[data-toggle="collapse"]',
            function(e) {
              var o = t(this);
              o.attr("data-target") || e.preventDefault();
              var r = n(o),
                s = r.data("bs.collapse") ? "toggle" : o.data();
              i.call(r, s);
            }
          );
      })(jQuery),
      (function(t) {
        "use strict";
        var e = ".dropdown-backdrop",
          n = '[data-toggle="dropdown"]',
          i = function(e) {
            t(e).on("click.bs.dropdown", this.toggle);
          };
        function o(e) {
          var n = e.attr("data-target");
          n ||
            (n =
              (n = e.attr("href")) &&
              /#[A-Za-z]/.test(n) &&
              n.replace(/.*(?=#[^\s]*$)/, ""));
          var i = n && t(n);
          return i && i.length ? i : e.parent();
        }
        function r(i) {
          (i && 3 === i.which) ||
            (t(e).remove(),
            t(n).each(function() {
              var e = t(this),
                n = o(e),
                r = { relatedTarget: this };
              n.hasClass("open") &&
                ((i &&
                  "click" == i.type &&
                  /input|textarea/i.test(i.target.tagName) &&
                  t.contains(n[0], i.target)) ||
                  (n.trigger((i = t.Event("hide.bs.dropdown", r))),
                  i.isDefaultPrevented() ||
                    (e.attr("aria-expanded", "false"),
                    n
                      .removeClass("open")
                      .trigger(t.Event("hidden.bs.dropdown", r)))));
            }));
        }
        (i.VERSION = "3.3.7"),
          (i.prototype.toggle = function(e) {
            var n = t(this);
            if (!n.is(".disabled, :disabled")) {
              var i = o(n),
                s = i.hasClass("open");
              if ((r(), !s)) {
                "ontouchstart" in document.documentElement &&
                  !i.closest(".navbar-nav").length &&
                  t(document.createElement("div"))
                    .addClass("dropdown-backdrop")
                    .insertAfter(t(this))
                    .on("click", r);
                var a = { relatedTarget: this };
                if (
                  (i.trigger((e = t.Event("show.bs.dropdown", a))),
                  e.isDefaultPrevented())
                )
                  return;
                n.trigger("focus").attr("aria-expanded", "true"),
                  i
                    .toggleClass("open")
                    .trigger(t.Event("shown.bs.dropdown", a));
              }
              return !1;
            }
          }),
          (i.prototype.keydown = function(e) {
            if (
              /(38|40|27|32)/.test(e.which) &&
              !/input|textarea/i.test(e.target.tagName)
            ) {
              var i = t(this);
              if (
                (e.preventDefault(),
                e.stopPropagation(),
                !i.is(".disabled, :disabled"))
              ) {
                var r = o(i),
                  s = r.hasClass("open");
                if ((!s && 27 != e.which) || (s && 27 == e.which))
                  return (
                    27 == e.which && r.find(n).trigger("focus"),
                    i.trigger("click")
                  );
                var a = r.find(".dropdown-menu li:not(.disabled):visible a");
                if (a.length) {
                  var l = a.index(e.target);
                  38 == e.which && l > 0 && l--,
                    40 == e.which && l < a.length - 1 && l++,
                    ~l || (l = 0),
                    a.eq(l).trigger("focus");
                }
              }
            }
          });
        var s = t.fn.dropdown;
        (t.fn.dropdown = function(e) {
          return this.each(function() {
            var n = t(this),
              o = n.data("bs.dropdown");
            o || n.data("bs.dropdown", (o = new i(this))),
              "string" == typeof e && o[e].call(n);
          });
        }),
          (t.fn.dropdown.Constructor = i),
          (t.fn.dropdown.noConflict = function() {
            return (t.fn.dropdown = s), this;
          }),
          t(document)
            .on("click.bs.dropdown.data-api", r)
            .on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
              t.stopPropagation();
            })
            .on("click.bs.dropdown.data-api", n, i.prototype.toggle)
            .on("keydown.bs.dropdown.data-api", n, i.prototype.keydown)
            .on(
              "keydown.bs.dropdown.data-api",
              ".dropdown-menu",
              i.prototype.keydown
            );
      })(jQuery),
      (function(t) {
        "use strict";
        var e = function(e, n) {
          (this.options = n),
            (this.$body = t(document.body)),
            (this.$element = t(e)),
            (this.$dialog = this.$element.find(".modal-dialog")),
            (this.$backdrop = null),
            (this.isShown = null),
            (this.originalBodyPad = null),
            (this.scrollbarWidth = 0),
            (this.ignoreBackdropClick = !1),
            this.options.remote &&
              this.$element.find(".modal-content").load(
                this.options.remote,
                t.proxy(function() {
                  this.$element.trigger("loaded.bs.modal");
                }, this)
              );
        };
        function n(n, i) {
          return this.each(function() {
            var o = t(this),
              r = o.data("bs.modal"),
              s = t.extend({}, e.DEFAULTS, o.data(), "object" == typeof n && n);
            r || o.data("bs.modal", (r = new e(this, s))),
              "string" == typeof n ? r[n](i) : s.show && r.show(i);
          });
        }
        (e.VERSION = "3.3.7"),
          (e.TRANSITION_DURATION = 300),
          (e.BACKDROP_TRANSITION_DURATION = 150),
          (e.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
          (e.prototype.toggle = function(t) {
            return this.isShown ? this.hide() : this.show(t);
          }),
          (e.prototype.show = function(n) {
            var i = this,
              o = t.Event("show.bs.modal", { relatedTarget: n });
            this.$element.trigger(o),
              this.isShown ||
                o.isDefaultPrevented() ||
                ((this.isShown = !0),
                this.checkScrollbar(),
                this.setScrollbar(),
                this.$body.addClass("modal-open"),
                this.escape(),
                this.resize(),
                this.$element.on(
                  "click.dismiss.bs.modal",
                  '[data-dismiss="modal"]',
                  t.proxy(this.hide, this)
                ),
                this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                  i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                    t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0);
                  });
                }),
                this.backdrop(function() {
                  var o = t.support.transition && i.$element.hasClass("fade");
                  i.$element.parent().length || i.$element.appendTo(i.$body),
                    i.$element.show().scrollTop(0),
                    i.adjustDialog(),
                    o && i.$element[0].offsetWidth,
                    i.$element.addClass("in"),
                    i.enforceFocus();
                  var r = t.Event("shown.bs.modal", { relatedTarget: n });
                  o
                    ? i.$dialog
                        .one("bsTransitionEnd", function() {
                          i.$element.trigger("focus").trigger(r);
                        })
                        .emulateTransitionEnd(e.TRANSITION_DURATION)
                    : i.$element.trigger("focus").trigger(r);
                }));
          }),
          (e.prototype.hide = function(n) {
            n && n.preventDefault(),
              (n = t.Event("hide.bs.modal")),
              this.$element.trigger(n),
              this.isShown &&
                !n.isDefaultPrevented() &&
                ((this.isShown = !1),
                this.escape(),
                this.resize(),
                t(document).off("focusin.bs.modal"),
                this.$element
                  .removeClass("in")
                  .off("click.dismiss.bs.modal")
                  .off("mouseup.dismiss.bs.modal"),
                this.$dialog.off("mousedown.dismiss.bs.modal"),
                t.support.transition && this.$element.hasClass("fade")
                  ? this.$element
                      .one("bsTransitionEnd", t.proxy(this.hideModal, this))
                      .emulateTransitionEnd(e.TRANSITION_DURATION)
                  : this.hideModal());
          }),
          (e.prototype.enforceFocus = function() {
            t(document)
              .off("focusin.bs.modal")
              .on(
                "focusin.bs.modal",
                t.proxy(function(t) {
                  document === t.target ||
                    this.$element[0] === t.target ||
                    this.$element.has(t.target).length ||
                    this.$element.trigger("focus");
                }, this)
              );
          }),
          (e.prototype.escape = function() {
            this.isShown && this.options.keyboard
              ? this.$element.on(
                  "keydown.dismiss.bs.modal",
                  t.proxy(function(t) {
                    27 == t.which && this.hide();
                  }, this)
                )
              : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
          }),
          (e.prototype.resize = function() {
            this.isShown
              ? t(window).on(
                  "resize.bs.modal",
                  t.proxy(this.handleUpdate, this)
                )
              : t(window).off("resize.bs.modal");
          }),
          (e.prototype.hideModal = function() {
            var t = this;
            this.$element.hide(),
              this.backdrop(function() {
                t.$body.removeClass("modal-open"),
                  t.resetAdjustments(),
                  t.resetScrollbar(),
                  t.$element.trigger("hidden.bs.modal");
              });
          }),
          (e.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
          }),
          (e.prototype.backdrop = function(n) {
            var i = this,
              o = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
              var r = t.support.transition && o;
              if (
                ((this.$backdrop = t(document.createElement("div"))
                  .addClass("modal-backdrop " + o)
                  .appendTo(this.$body)),
                this.$element.on(
                  "click.dismiss.bs.modal",
                  t.proxy(function(t) {
                    this.ignoreBackdropClick
                      ? (this.ignoreBackdropClick = !1)
                      : t.target === t.currentTarget &&
                        ("static" == this.options.backdrop
                          ? this.$element[0].focus()
                          : this.hide());
                  }, this)
                ),
                r && this.$backdrop[0].offsetWidth,
                this.$backdrop.addClass("in"),
                !n)
              )
                return;
              r
                ? this.$backdrop
                    .one("bsTransitionEnd", n)
                    .emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION)
                : n();
            } else if (!this.isShown && this.$backdrop) {
              this.$backdrop.removeClass("in");
              var s = function() {
                i.removeBackdrop(), n && n();
              };
              t.support.transition && this.$element.hasClass("fade")
                ? this.$backdrop
                    .one("bsTransitionEnd", s)
                    .emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION)
                : s();
            } else n && n();
          }),
          (e.prototype.handleUpdate = function() {
            this.adjustDialog();
          }),
          (e.prototype.adjustDialog = function() {
            var t =
              this.$element[0].scrollHeight >
              document.documentElement.clientHeight;
            this.$element.css({
              paddingLeft:
                !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
              paddingRight:
                this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
            });
          }),
          (e.prototype.resetAdjustments = function() {
            this.$element.css({ paddingLeft: "", paddingRight: "" });
          }),
          (e.prototype.checkScrollbar = function() {
            var t = window.innerWidth;
            if (!t) {
              var e = document.documentElement.getBoundingClientRect();
              t = e.right - Math.abs(e.left);
            }
            (this.bodyIsOverflowing = document.body.clientWidth < t),
              (this.scrollbarWidth = this.measureScrollbar());
          }),
          (e.prototype.setScrollbar = function() {
            var t = parseInt(this.$body.css("padding-right") || 0, 10);
            (this.originalBodyPad = document.body.style.paddingRight || ""),
              this.bodyIsOverflowing &&
                this.$body.css("padding-right", t + this.scrollbarWidth);
          }),
          (e.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", this.originalBodyPad);
          }),
          (e.prototype.measureScrollbar = function() {
            var t = document.createElement("div");
            (t.className = "modal-scrollbar-measure"), this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e;
          });
        var i = t.fn.modal;
        (t.fn.modal = n),
          (t.fn.modal.Constructor = e),
          (t.fn.modal.noConflict = function() {
            return (t.fn.modal = i), this;
          }),
          t(document).on(
            "click.bs.modal.data-api",
            '[data-toggle="modal"]',
            function(e) {
              var i = t(this),
                o = i.attr("href"),
                r = t(
                  i.attr("data-target") ||
                    (o && o.replace(/.*(?=#[^\s]+$)/, ""))
                ),
                s = r.data("bs.modal")
                  ? "toggle"
                  : t.extend({ remote: !/#/.test(o) && o }, r.data(), i.data());
              i.is("a") && e.preventDefault(),
                r.one("show.bs.modal", function(t) {
                  t.isDefaultPrevented() ||
                    r.one("hidden.bs.modal", function() {
                      i.is(":visible") && i.trigger("focus");
                    });
                }),
                n.call(r, s, this);
            }
          );
      })(jQuery),
      (function(t) {
        "use strict";
        var e = function(t, e) {
          (this.type = null),
            (this.options = null),
            (this.enabled = null),
            (this.timeout = null),
            (this.hoverState = null),
            (this.$element = null),
            (this.inState = null),
            this.init("tooltip", t, e);
        };
        (e.VERSION = "3.3.7"),
          (e.TRANSITION_DURATION = 150),
          (e.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template:
              '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: { selector: "body", padding: 0 }
          }),
          (e.prototype.init = function(e, n, i) {
            if (
              ((this.enabled = !0),
              (this.type = e),
              (this.$element = t(n)),
              (this.options = this.getOptions(i)),
              (this.$viewport =
                this.options.viewport &&
                t(
                  t.isFunction(this.options.viewport)
                    ? this.options.viewport.call(this, this.$element)
                    : this.options.viewport.selector || this.options.viewport
                )),
              (this.inState = { click: !1, hover: !1, focus: !1 }),
              this.$element[0] instanceof document.constructor &&
                !this.options.selector)
            )
              throw new Error(
                "`selector` option must be specified when initializing " +
                  this.type +
                  " on the window.document object!"
              );
            for (var o = this.options.trigger.split(" "), r = o.length; r--; ) {
              var s = o[r];
              if ("click" == s)
                this.$element.on(
                  "click." + this.type,
                  this.options.selector,
                  t.proxy(this.toggle, this)
                );
              else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                  l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(
                  a + "." + this.type,
                  this.options.selector,
                  t.proxy(this.enter, this)
                ),
                  this.$element.on(
                    l + "." + this.type,
                    this.options.selector,
                    t.proxy(this.leave, this)
                  );
              }
            }
            this.options.selector
              ? (this._options = t.extend({}, this.options, {
                  trigger: "manual",
                  selector: ""
                }))
              : this.fixTitle();
          }),
          (e.prototype.getDefaults = function() {
            return e.DEFAULTS;
          }),
          (e.prototype.getOptions = function(e) {
            return (
              (e = t.extend({}, this.getDefaults(), this.$element.data(), e))
                .delay &&
                "number" == typeof e.delay &&
                (e.delay = { show: e.delay, hide: e.delay }),
              e
            );
          }),
          (e.prototype.getDelegateOptions = function() {
            var e = {},
              n = this.getDefaults();
            return (
              this._options &&
                t.each(this._options, function(t, i) {
                  n[t] != i && (e[t] = i);
                }),
              e
            );
          }),
          (e.prototype.enter = function(e) {
            var n =
              e instanceof this.constructor
                ? e
                : t(e.currentTarget).data("bs." + this.type);
            if (
              (n ||
                ((n = new this.constructor(
                  e.currentTarget,
                  this.getDelegateOptions()
                )),
                t(e.currentTarget).data("bs." + this.type, n)),
              e instanceof t.Event &&
                (n.inState["focusin" == e.type ? "focus" : "hover"] = !0),
              n.tip().hasClass("in") || "in" == n.hoverState)
            )
              n.hoverState = "in";
            else {
              if (
                (clearTimeout(n.timeout),
                (n.hoverState = "in"),
                !n.options.delay || !n.options.delay.show)
              )
                return n.show();
              n.timeout = setTimeout(function() {
                "in" == n.hoverState && n.show();
              }, n.options.delay.show);
            }
          }),
          (e.prototype.isInStateTrue = function() {
            for (var t in this.inState) if (this.inState[t]) return !0;
            return !1;
          }),
          (e.prototype.leave = function(e) {
            var n =
              e instanceof this.constructor
                ? e
                : t(e.currentTarget).data("bs." + this.type);
            if (
              (n ||
                ((n = new this.constructor(
                  e.currentTarget,
                  this.getDelegateOptions()
                )),
                t(e.currentTarget).data("bs." + this.type, n)),
              e instanceof t.Event &&
                (n.inState["focusout" == e.type ? "focus" : "hover"] = !1),
              !n.isInStateTrue())
            ) {
              if (
                (clearTimeout(n.timeout),
                (n.hoverState = "out"),
                !n.options.delay || !n.options.delay.hide)
              )
                return n.hide();
              n.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide();
              }, n.options.delay.hide);
            }
          }),
          (e.prototype.show = function() {
            var n = t.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
              this.$element.trigger(n);
              var i = t.contains(
                this.$element[0].ownerDocument.documentElement,
                this.$element[0]
              );
              if (n.isDefaultPrevented() || !i) return;
              var o = this,
                r = this.tip(),
                s = this.getUID(this.type);
              this.setContent(),
                r.attr("id", s),
                this.$element.attr("aria-describedby", s),
                this.options.animation && r.addClass("fade");
              var a =
                  "function" == typeof this.options.placement
                    ? this.options.placement.call(this, r[0], this.$element[0])
                    : this.options.placement,
                l = /\s?auto?\s?/i,
                u = l.test(a);
              u && (a = a.replace(l, "") || "top"),
                r
                  .detach()
                  .css({ top: 0, left: 0, display: "block" })
                  .addClass(a)
                  .data("bs." + this.type, this),
                this.options.container
                  ? r.appendTo(this.options.container)
                  : r.insertAfter(this.$element),
                this.$element.trigger("inserted.bs." + this.type);
              var c = this.getPosition(),
                f = r[0].offsetWidth,
                p = r[0].offsetHeight;
              if (u) {
                var d = a,
                  h = this.getPosition(this.$viewport);
                (a =
                  "bottom" == a && c.bottom + p > h.bottom
                    ? "top"
                    : "top" == a && c.top - p < h.top
                    ? "bottom"
                    : "right" == a && c.right + f > h.width
                    ? "left"
                    : "left" == a && c.left - f < h.left
                    ? "right"
                    : a),
                  r.removeClass(d).addClass(a);
              }
              var g = this.getCalculatedOffset(a, c, f, p);
              this.applyPlacement(g, a);
              var v = function() {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type),
                  (o.hoverState = null),
                  "out" == t && o.leave(o);
              };
              t.support.transition && this.$tip.hasClass("fade")
                ? r
                    .one("bsTransitionEnd", v)
                    .emulateTransitionEnd(e.TRANSITION_DURATION)
                : v();
            }
          }),
          (e.prototype.applyPlacement = function(e, n) {
            var i = this.tip(),
              o = i[0].offsetWidth,
              r = i[0].offsetHeight,
              s = parseInt(i.css("margin-top"), 10),
              a = parseInt(i.css("margin-left"), 10);
            isNaN(s) && (s = 0),
              isNaN(a) && (a = 0),
              (e.top += s),
              (e.left += a),
              t.offset.setOffset(
                i[0],
                t.extend(
                  {
                    using: function(t) {
                      i.css({
                        top: Math.round(t.top),
                        left: Math.round(t.left)
                      });
                    }
                  },
                  e
                ),
                0
              ),
              i.addClass("in");
            var l = i[0].offsetWidth,
              u = i[0].offsetHeight;
            "top" == n && u != r && (e.top = e.top + r - u);
            var c = this.getViewportAdjustedDelta(n, e, l, u);
            c.left ? (e.left += c.left) : (e.top += c.top);
            var f = /top|bottom/.test(n),
              p = f ? 2 * c.left - o + l : 2 * c.top - r + u,
              d = f ? "offsetWidth" : "offsetHeight";
            i.offset(e), this.replaceArrow(p, i[0][d], f);
          }),
          (e.prototype.replaceArrow = function(t, e, n) {
            this.arrow()
              .css(n ? "left" : "top", 50 * (1 - t / e) + "%")
              .css(n ? "top" : "left", "");
          }),
          (e.prototype.setContent = function() {
            var t = this.tip(),
              e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
              t.removeClass("fade in top bottom left right");
          }),
          (e.prototype.hide = function(n) {
            var i = this,
              o = t(this.$tip),
              r = t.Event("hide.bs." + this.type);
            function s() {
              "in" != i.hoverState && o.detach(),
                i.$element &&
                  i.$element
                    .removeAttr("aria-describedby")
                    .trigger("hidden.bs." + i.type),
                n && n();
            }
            if ((this.$element.trigger(r), !r.isDefaultPrevented()))
              return (
                o.removeClass("in"),
                t.support.transition && o.hasClass("fade")
                  ? o
                      .one("bsTransitionEnd", s)
                      .emulateTransitionEnd(e.TRANSITION_DURATION)
                  : s(),
                (this.hoverState = null),
                this
              );
          }),
          (e.prototype.fixTitle = function() {
            var t = this.$element;
            (t.attr("title") ||
              "string" != typeof t.attr("data-original-title")) &&
              t
                .attr("data-original-title", t.attr("title") || "")
                .attr("title", "");
          }),
          (e.prototype.hasContent = function() {
            return this.getTitle();
          }),
          (e.prototype.getPosition = function(e) {
            var n = (e = e || this.$element)[0],
              i = "BODY" == n.tagName,
              o = n.getBoundingClientRect();
            null == o.width &&
              (o = t.extend({}, o, {
                width: o.right - o.left,
                height: o.bottom - o.top
              }));
            var r = window.SVGElement && n instanceof window.SVGElement,
              s = i ? { top: 0, left: 0 } : r ? null : e.offset(),
              a = {
                scroll: i
                  ? document.documentElement.scrollTop ||
                    document.body.scrollTop
                  : e.scrollTop()
              },
              l = i
                ? { width: t(window).width(), height: t(window).height() }
                : null;
            return t.extend({}, o, a, l, s);
          }),
          (e.prototype.getCalculatedOffset = function(t, e, n, i) {
            return "bottom" == t
              ? { top: e.top + e.height, left: e.left + e.width / 2 - n / 2 }
              : "top" == t
              ? { top: e.top - i, left: e.left + e.width / 2 - n / 2 }
              : "left" == t
              ? { top: e.top + e.height / 2 - i / 2, left: e.left - n }
              : { top: e.top + e.height / 2 - i / 2, left: e.left + e.width };
          }),
          (e.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
            var o = { top: 0, left: 0 };
            if (!this.$viewport) return o;
            var r =
                (this.options.viewport && this.options.viewport.padding) || 0,
              s = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
              var a = e.top - r - s.scroll,
                l = e.top + r - s.scroll + i;
              a < s.top
                ? (o.top = s.top - a)
                : l > s.top + s.height && (o.top = s.top + s.height - l);
            } else {
              var u = e.left - r,
                c = e.left + r + n;
              u < s.left
                ? (o.left = s.left - u)
                : c > s.right && (o.left = s.left + s.width - c);
            }
            return o;
          }),
          (e.prototype.getTitle = function() {
            var t = this.$element,
              e = this.options;
            return (
              t.attr("data-original-title") ||
              ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
            );
          }),
          (e.prototype.getUID = function(t) {
            do {
              t += ~~(1e6 * Math.random());
            } while (document.getElementById(t));
            return t;
          }),
          (e.prototype.tip = function() {
            if (
              !this.$tip &&
              ((this.$tip = t(this.options.template)), 1 != this.$tip.length)
            )
              throw new Error(
                this.type +
                  " `template` option must consist of exactly 1 top-level element!"
              );
            return this.$tip;
          }),
          (e.prototype.arrow = function() {
            return (this.$arrow =
              this.$arrow || this.tip().find(".tooltip-arrow"));
          }),
          (e.prototype.enable = function() {
            this.enabled = !0;
          }),
          (e.prototype.disable = function() {
            this.enabled = !1;
          }),
          (e.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled;
          }),
          (e.prototype.toggle = function(e) {
            var n = this;
            e &&
              ((n = t(e.currentTarget).data("bs." + this.type)) ||
                ((n = new this.constructor(
                  e.currentTarget,
                  this.getDelegateOptions()
                )),
                t(e.currentTarget).data("bs." + this.type, n))),
              e
                ? ((n.inState.click = !n.inState.click),
                  n.isInStateTrue() ? n.enter(n) : n.leave(n))
                : n.tip().hasClass("in")
                ? n.leave(n)
                : n.enter(n);
          }),
          (e.prototype.destroy = function() {
            var t = this;
            clearTimeout(this.timeout),
              this.hide(function() {
                t.$element.off("." + t.type).removeData("bs." + t.type),
                  t.$tip && t.$tip.detach(),
                  (t.$tip = null),
                  (t.$arrow = null),
                  (t.$viewport = null),
                  (t.$element = null);
              });
          });
        var n = t.fn.tooltip;
        (t.fn.tooltip = function(n) {
          return this.each(function() {
            var i = t(this),
              o = i.data("bs.tooltip"),
              r = "object" == typeof n && n;
            (!o && /destroy|hide/.test(n)) ||
              (o || i.data("bs.tooltip", (o = new e(this, r))),
              "string" == typeof n && o[n]());
          });
        }),
          (t.fn.tooltip.Constructor = e),
          (t.fn.tooltip.noConflict = function() {
            return (t.fn.tooltip = n), this;
          });
      })(jQuery),
      (function(t) {
        "use strict";
        var e = function(t, e) {
          this.init("popover", t, e);
        };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        (e.VERSION = "3.3.7"),
          (e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template:
              '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
          })),
          (e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)),
          (e.prototype.constructor = e),
          (e.prototype.getDefaults = function() {
            return e.DEFAULTS;
          }),
          (e.prototype.setContent = function() {
            var t = this.tip(),
              e = this.getTitle(),
              n = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e),
              t
                .find(".popover-content")
                .children()
                .detach()
                .end()
                [
                  this.options.html
                    ? "string" == typeof n
                      ? "html"
                      : "append"
                    : "text"
                ](n),
              t.removeClass("fade top bottom left right in"),
              t.find(".popover-title").html() ||
                t.find(".popover-title").hide();
          }),
          (e.prototype.hasContent = function() {
            return this.getTitle() || this.getContent();
          }),
          (e.prototype.getContent = function() {
            var t = this.$element,
              e = this.options;
            return (
              t.attr("data-content") ||
              ("function" == typeof e.content
                ? e.content.call(t[0])
                : e.content)
            );
          }),
          (e.prototype.arrow = function() {
            return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
          });
        var n = t.fn.popover;
        (t.fn.popover = function(n) {
          return this.each(function() {
            var i = t(this),
              o = i.data("bs.popover"),
              r = "object" == typeof n && n;
            (!o && /destroy|hide/.test(n)) ||
              (o || i.data("bs.popover", (o = new e(this, r))),
              "string" == typeof n && o[n]());
          });
        }),
          (t.fn.popover.Constructor = e),
          (t.fn.popover.noConflict = function() {
            return (t.fn.popover = n), this;
          });
      })(jQuery),
      (function(t) {
        "use strict";
        function e(n, i) {
          (this.$body = t(document.body)),
            (this.$scrollElement = t(n).is(document.body) ? t(window) : t(n)),
            (this.options = t.extend({}, e.DEFAULTS, i)),
            (this.selector = (this.options.target || "") + " .nav li > a"),
            (this.offsets = []),
            (this.targets = []),
            (this.activeTarget = null),
            (this.scrollHeight = 0),
            this.$scrollElement.on(
              "scroll.bs.scrollspy",
              t.proxy(this.process, this)
            ),
            this.refresh(),
            this.process();
        }
        function n(n) {
          return this.each(function() {
            var i = t(this),
              o = i.data("bs.scrollspy"),
              r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", (o = new e(this, r))),
              "string" == typeof n && o[n]();
          });
        }
        (e.VERSION = "3.3.7"),
          (e.DEFAULTS = { offset: 10 }),
          (e.prototype.getScrollHeight = function() {
            return (
              this.$scrollElement[0].scrollHeight ||
              Math.max(
                this.$body[0].scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (e.prototype.refresh = function() {
            var e = this,
              n = "offset",
              i = 0;
            (this.offsets = []),
              (this.targets = []),
              (this.scrollHeight = this.getScrollHeight()),
              t.isWindow(this.$scrollElement[0]) ||
                ((n = "position"), (i = this.$scrollElement.scrollTop())),
              this.$body
                .find(this.selector)
                .map(function() {
                  var e = t(this),
                    o = e.data("target") || e.attr("href"),
                    r = /^#./.test(o) && t(o);
                  return (
                    (r &&
                      r.length &&
                      r.is(":visible") && [[r[n]().top + i, o]]) ||
                    null
                  );
                })
                .sort(function(t, e) {
                  return t[0] - e[0];
                })
                .each(function() {
                  e.offsets.push(this[0]), e.targets.push(this[1]);
                });
          }),
          (e.prototype.process = function() {
            var t,
              e = this.$scrollElement.scrollTop() + this.options.offset,
              n = this.getScrollHeight(),
              i = this.options.offset + n - this.$scrollElement.height(),
              o = this.offsets,
              r = this.targets,
              s = this.activeTarget;
            if ((this.scrollHeight != n && this.refresh(), e >= i))
              return s != (t = r[r.length - 1]) && this.activate(t);
            if (s && e < o[0]) return (this.activeTarget = null), this.clear();
            for (t = o.length; t--; )
              s != r[t] &&
                e >= o[t] &&
                (void 0 === o[t + 1] || e < o[t + 1]) &&
                this.activate(r[t]);
          }),
          (e.prototype.activate = function(e) {
            (this.activeTarget = e), this.clear();
            var n =
                this.selector +
                '[data-target="' +
                e +
                '"],' +
                this.selector +
                '[href="' +
                e +
                '"]',
              i = t(n)
                .parents("li")
                .addClass("active");
            i.parent(".dropdown-menu").length &&
              (i = i.closest("li.dropdown").addClass("active")),
              i.trigger("activate.bs.scrollspy");
          }),
          (e.prototype.clear = function() {
            t(this.selector)
              .parentsUntil(this.options.target, ".active")
              .removeClass("active");
          });
        var i = t.fn.scrollspy;
        (t.fn.scrollspy = n),
          (t.fn.scrollspy.Constructor = e),
          (t.fn.scrollspy.noConflict = function() {
            return (t.fn.scrollspy = i), this;
          }),
          t(window).on("load.bs.scrollspy.data-api", function() {
            t('[data-spy="scroll"]').each(function() {
              var e = t(this);
              n.call(e, e.data());
            });
          });
      })(jQuery),
      (function(t) {
        "use strict";
        var e = function(e) {
          this.element = t(e);
        };
        function n(n) {
          return this.each(function() {
            var i = t(this),
              o = i.data("bs.tab");
            o || i.data("bs.tab", (o = new e(this))),
              "string" == typeof n && o[n]();
          });
        }
        (e.VERSION = "3.3.7"),
          (e.TRANSITION_DURATION = 150),
          (e.prototype.show = function() {
            var e = this.element,
              n = e.closest("ul:not(.dropdown-menu)"),
              i = e.data("target");
            if (
              (i ||
                (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")),
              !e.parent("li").hasClass("active"))
            ) {
              var o = n.find(".active:last a"),
                r = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
                s = t.Event("show.bs.tab", { relatedTarget: o[0] });
              if (
                (o.trigger(r),
                e.trigger(s),
                !s.isDefaultPrevented() && !r.isDefaultPrevented())
              ) {
                var a = t(i);
                this.activate(e.closest("li"), n),
                  this.activate(a, a.parent(), function() {
                    o.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }),
                      e.trigger({ type: "shown.bs.tab", relatedTarget: o[0] });
                  });
              }
            }
          }),
          (e.prototype.activate = function(n, i, o) {
            var r = i.find("> .active"),
              s =
                o &&
                t.support.transition &&
                ((r.length && r.hasClass("fade")) ||
                  !!i.find("> .fade").length);
            function a() {
              r
                .removeClass("active")
                .find("> .dropdown-menu > .active")
                .removeClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !1),
                n
                  .addClass("active")
                  .find('[data-toggle="tab"]')
                  .attr("aria-expanded", !0),
                s
                  ? (n[0].offsetWidth, n.addClass("in"))
                  : n.removeClass("fade"),
                n.parent(".dropdown-menu").length &&
                  n
                    .closest("li.dropdown")
                    .addClass("active")
                    .end()
                    .find('[data-toggle="tab"]')
                    .attr("aria-expanded", !0),
                o && o();
            }
            r.length && s
              ? r
                  .one("bsTransitionEnd", a)
                  .emulateTransitionEnd(e.TRANSITION_DURATION)
              : a(),
              r.removeClass("in");
          });
        var i = t.fn.tab;
        (t.fn.tab = n),
          (t.fn.tab.Constructor = e),
          (t.fn.tab.noConflict = function() {
            return (t.fn.tab = i), this;
          });
        var o = function(e) {
          e.preventDefault(), n.call(t(this), "show");
        };
        t(document)
          .on("click.bs.tab.data-api", '[data-toggle="tab"]', o)
          .on("click.bs.tab.data-api", '[data-toggle="pill"]', o);
      })(jQuery),
      (function(t) {
        "use strict";
        var e = function(n, i) {
          (this.options = t.extend({}, e.DEFAULTS, i)),
            (this.$target = t(this.options.target)
              .on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this))
              .on(
                "click.bs.affix.data-api",
                t.proxy(this.checkPositionWithEventLoop, this)
              )),
            (this.$element = t(n)),
            (this.affixed = null),
            (this.unpin = null),
            (this.pinnedOffset = null),
            this.checkPosition();
        };
        function n(n) {
          return this.each(function() {
            var i = t(this),
              o = i.data("bs.affix"),
              r = "object" == typeof n && n;
            o || i.data("bs.affix", (o = new e(this, r))),
              "string" == typeof n && o[n]();
          });
        }
        (e.VERSION = "3.3.7"),
          (e.RESET = "affix affix-top affix-bottom"),
          (e.DEFAULTS = { offset: 0, target: window }),
          (e.prototype.getState = function(t, e, n, i) {
            var o = this.$target.scrollTop(),
              r = this.$element.offset(),
              s = this.$target.height();
            if (null != n && "top" == this.affixed) return o < n && "top";
            if ("bottom" == this.affixed)
              return null != n
                ? !(o + this.unpin <= r.top) && "bottom"
                : !(o + s <= t - i) && "bottom";
            var a = null == this.affixed,
              l = a ? o : r.top;
            return null != n && o <= n
              ? "top"
              : null != i && l + (a ? s : e) >= t - i && "bottom";
          }),
          (e.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(e.RESET).addClass("affix");
            var t = this.$target.scrollTop(),
              n = this.$element.offset();
            return (this.pinnedOffset = n.top - t);
          }),
          (e.prototype.checkPositionWithEventLoop = function() {
            setTimeout(t.proxy(this.checkPosition, this), 1);
          }),
          (e.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
              var n = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                r = i.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
              "object" != typeof i && (r = o = i),
                "function" == typeof o && (o = i.top(this.$element)),
                "function" == typeof r && (r = i.bottom(this.$element));
              var a = this.getState(s, n, o, r);
              if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                  u = t.Event(l + ".bs.affix");
                if ((this.$element.trigger(u), u.isDefaultPrevented())) return;
                (this.affixed = a),
                  (this.unpin = "bottom" == a ? this.getPinnedOffset() : null),
                  this.$element
                    .removeClass(e.RESET)
                    .addClass(l)
                    .trigger(l.replace("affix", "affixed") + ".bs.affix");
              }
              "bottom" == a && this.$element.offset({ top: s - n - r });
            }
          });
        var i = t.fn.affix;
        (t.fn.affix = n),
          (t.fn.affix.Constructor = e),
          (t.fn.affix.noConflict = function() {
            return (t.fn.affix = i), this;
          }),
          t(window).on("load", function() {
            t('[data-spy="affix"]').each(function() {
              var e = t(this),
                i = e.data();
              (i.offset = i.offset || {}),
                null != i.offsetBottom && (i.offset.bottom = i.offsetBottom),
                null != i.offsetTop && (i.offset.top = i.offsetTop),
                n.call(e, i);
            });
          });
      })(jQuery);
  },
  function(t, e) {},
  function(t, e) {}
]);
