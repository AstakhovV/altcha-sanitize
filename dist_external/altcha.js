const Cs = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Cs);
const Is = 1, Os = 4, qs = 8, Rs = 16, Ds = 1, Ls = 2, dr = "[", Bn = "[!", jn = "]", rt = {}, Me = Symbol(), Ps = "http://www.w3.org/1999/xhtml", oi = !1;
function Un(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Hn = Array.isArray, ks = Array.prototype.indexOf, Ms = Array.from, Gt = Object.keys, gt = Object.defineProperty, Uu = Object.getOwnPropertyDescriptor, Bs = Object.getOwnPropertyDescriptors, js = Object.prototype, Us = Array.prototype, Fn = Object.getPrototypeOf, li = Object.isExtensible;
const it = () => {
};
function Vn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Hs(e, t, i = !1) {
  return e === void 0 ? i ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const Ke = 2, $n = 4, Qt = 8, br = 16, yu = 32, Vu = 64, zt = 128, He = 256, Wt = 512, Be = 1024, ou = 2048, $u = 4096, nt = 8192, Kt = 16384, Fs = 32768, hr = 65536, Vs = 1 << 19, Gn = 1 << 20, rr = 1 << 21, ht = Symbol("$state"), zn = Symbol("legacy props"), $s = Symbol("");
function Gs(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function zs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ws(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Zs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Xs() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Js(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ys() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Qs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ks() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function e0(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let pe = !1;
function tt(e) {
  pe = e;
}
let he;
function Su(e) {
  if (e === null)
    throw e0(), rt;
  return he = e;
}
function at() {
  return Su(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Iu(he)
  );
}
function Se(e) {
  if (pe) {
    if (/* @__PURE__ */ Iu(he) !== null)
      throw e0(), rt;
    he = e;
  }
}
function ec() {
  for (var e = 0, t = he; ; ) {
    if (t.nodeType === 8) {
      var i = (
        /** @type {Comment} */
        t.data
      );
      if (i === jn) {
        if (e === 0) return t;
        e -= 1;
      } else (i === dr || i === Bn) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Iu(t)
    );
    t.remove(), t = n;
  }
}
let uc = !1;
function _u(e) {
  if (typeof e != "object" || e === null || ht in e)
    return e;
  const t = Fn(e);
  if (t !== js && t !== Us)
    return e;
  var i = /* @__PURE__ */ new Map(), n = Hn(e), o = /* @__PURE__ */ de(0), s = oe, l = (d) => {
    var h = oe;
    lu(s);
    var a = d();
    return lu(h), a;
  };
  return n && i.set("length", /* @__PURE__ */ de(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(d, h, a) {
        (!("value" in a) || a.configurable === !1 || a.enumerable === !1 || a.writable === !1) && Ys();
        var c = i.get(h);
        return c === void 0 ? (c = l(() => /* @__PURE__ */ de(a.value)), i.set(h, c)) : V(
          c,
          l(() => _u(a.value))
        ), !0;
      },
      deleteProperty(d, h) {
        var a = i.get(h);
        if (a === void 0)
          h in d && (i.set(
            h,
            l(() => /* @__PURE__ */ de(Me))
          ), m0(o));
        else {
          if (n && typeof h == "string") {
            var c = (
              /** @type {Source<number>} */
              i.get("length")
            ), b = Number(h);
            Number.isInteger(b) && b < c.v && V(c, b);
          }
          V(a, Me), m0(o);
        }
        return !0;
      },
      get(d, h, a) {
        if (h === ht)
          return e;
        var c = i.get(h), b = h in d;
        if (c === void 0 && (!b || Uu(d, h)?.writable) && (c = l(() => /* @__PURE__ */ de(_u(b ? d[h] : Me))), i.set(h, c)), c !== void 0) {
          var u = N(c);
          return u === Me ? void 0 : u;
        }
        return Reflect.get(d, h, a);
      },
      getOwnPropertyDescriptor(d, h) {
        var a = Reflect.getOwnPropertyDescriptor(d, h);
        if (a && "value" in a) {
          var c = i.get(h);
          c && (a.value = N(c));
        } else if (a === void 0) {
          var b = i.get(h), u = b?.v;
          if (b !== void 0 && u !== Me)
            return {
              enumerable: !0,
              configurable: !0,
              value: u,
              writable: !0
            };
        }
        return a;
      },
      has(d, h) {
        if (h === ht)
          return !0;
        var a = i.get(h), c = a !== void 0 && a.v !== Me || Reflect.has(d, h);
        if (a !== void 0 || le !== null && (!c || Uu(d, h)?.writable)) {
          a === void 0 && (a = l(() => /* @__PURE__ */ de(c ? _u(d[h]) : Me)), i.set(h, a));
          var b = N(a);
          if (b === Me)
            return !1;
        }
        return c;
      },
      set(d, h, a, c) {
        var b = i.get(h), u = h in d;
        if (n && h === "length")
          for (var r = a; r < /** @type {Source<number>} */
          b.v; r += 1) {
            var g = i.get(r + "");
            g !== void 0 ? V(g, Me) : r in d && (g = l(() => /* @__PURE__ */ de(Me)), i.set(r + "", g));
          }
        b === void 0 ? (!u || Uu(d, h)?.writable) && (b = l(() => /* @__PURE__ */ de(void 0)), V(
          b,
          l(() => _u(a))
        ), i.set(h, b)) : (u = b.v !== Me, V(
          b,
          l(() => _u(a))
        ));
        var x = Reflect.getOwnPropertyDescriptor(d, h);
        if (x?.set && x.set.call(c, a), !u) {
          if (n && typeof h == "string") {
            var m = (
              /** @type {Source<number>} */
              i.get("length")
            ), f = Number(h);
            Number.isInteger(f) && f >= m.v && V(m, f + 1);
          }
          m0(o);
        }
        return !0;
      },
      ownKeys(d) {
        N(o);
        var h = Reflect.ownKeys(d).filter((b) => {
          var u = i.get(b);
          return u === void 0 || u.v !== Me;
        });
        for (var [a, c] of i)
          c.v !== Me && !(a in d) && h.push(a);
        return h;
      },
      setPrototypeOf() {
        Qs();
      }
    }
  );
}
function m0(e, t = 1) {
  V(e, e.v + t);
}
var fi, Wn, Zn, Xn;
function ir() {
  if (fi === void 0) {
    fi = window, Wn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, i = Text.prototype;
    Zn = Uu(t, "firstChild").get, Xn = Uu(t, "nextSibling").get, li(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), li(i) && (i.__t = void 0);
  }
}
function u0(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function $e(e) {
  return Zn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Iu(e) {
  return Xn.call(e);
}
function Te(e, t) {
  if (!pe)
    return /* @__PURE__ */ $e(e);
  var i = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ $e(he)
  );
  return i === null && (i = he.appendChild(u0())), Su(i), i;
}
function ft(e, t) {
  if (!pe) {
    var i = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ $e(
        /** @type {Node} */
        e
      )
    );
    return i instanceof Comment && i.data === "" ? /* @__PURE__ */ Iu(i) : i;
  }
  return he;
}
function Ne(e, t = 1, i = !1) {
  let n = pe ? he : e;
  for (var o; t--; )
    o = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ Iu(n);
  if (!pe)
    return n;
  var s = n?.nodeType;
  if (i && s !== 3) {
    var l = u0();
    return n === null ? o?.after(l) : n.before(l), Su(l), l;
  }
  return Su(n), /** @type {TemplateNode} */
  n;
}
function tc(e) {
  e.textContent = "";
}
function Jn(e) {
  return e === this.v;
}
function Yn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function pr(e) {
  return !Yn(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function t0(e) {
  var t = Ke | ou, i = oe !== null && (oe.f & Ke) !== 0 ? (
    /** @type {Derived} */
    oe
  ) : null;
  return le === null || i !== null && (i.f & He) !== 0 ? t |= He : le.f |= Gn, {
    ctx: Re,
    deps: null,
    effects: null,
    equals: Jn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: i ?? le
  };
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  const t = /* @__PURE__ */ t0(e);
  return la(t), t;
}
// @__NO_SIDE_EFFECTS__
function rc(e) {
  const t = /* @__PURE__ */ t0(e);
  return t.equals = pr, t;
}
function Qn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var i = 0; i < t.length; i += 1)
      Tu(
        /** @type {Effect} */
        t[i]
      );
  }
}
function ic(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Ke) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Kn(e) {
  var t, i = le;
  Nu(ic(e));
  try {
    Qn(e), t = ha(e);
  } finally {
    Nu(i);
  }
  return t;
}
function ea(e) {
  var t = Kn(e), i = (Au || (e.f & He) !== 0) && e.deps !== null ? $u : Be;
  eu(e, i), e.equals(t) || (e.v = t, e.wv = da());
}
function nc(e) {
  le === null && oe === null && Ws(), oe !== null && (oe.f & He) !== 0 && le === null && zs(), xt && Gs();
}
function ac(e, t) {
  var i = t.last;
  i === null ? t.last = t.first = e : (i.next = e, e.prev = i, t.last = e);
}
function Gu(e, t, i, n = !0) {
  var o = le, s = {
    ctx: Re,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | ou,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: o,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (i)
    try {
      xr(s), s.f |= Fs;
    } catch (h) {
      throw Tu(s), h;
    }
  else t !== null && i0(s);
  var l = i && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (Gn | zt)) === 0;
  if (!l && n && (o !== null && ac(s, o), oe !== null && (oe.f & Ke) !== 0)) {
    var d = (
      /** @type {Derived} */
      oe
    );
    (d.effects ??= []).push(s);
  }
  return s;
}
function gr(e) {
  const t = Gu(Qt, null, !1);
  return eu(t, Be), t.teardown = e, t;
}
function nr(e) {
  nc();
  var t = le !== null && (le.f & yu) !== 0 && Re !== null && !Re.m;
  if (t) {
    var i = (
      /** @type {ComponentContext} */
      Re
    );
    (i.e ??= []).push({
      fn: e,
      effect: le,
      reaction: oe
    });
  } else {
    var n = mr(e);
    return n;
  }
}
function sc(e) {
  const t = Gu(Vu, e, !0);
  return () => {
    Tu(t);
  };
}
function cc(e) {
  const t = Gu(Vu, e, !0);
  return (i = {}) => new Promise((n) => {
    i.outro ? sr(t, () => {
      Tu(t), n(void 0);
    }) : (Tu(t), n(void 0));
  });
}
function mr(e) {
  return Gu($n, e, !1);
}
function vr(e) {
  return Gu(Qt, e, !0);
}
function au(e, t = [], i = t0) {
  const n = t.map(i);
  return ua(() => e(...n.map(N)));
}
function ua(e, t = 0) {
  return Gu(Qt | br | t, e, !0);
}
function ar(e, t = !0) {
  return Gu(Qt | yu, e, !0, t);
}
function ta(e) {
  var t = e.teardown;
  if (t !== null) {
    const i = xt, n = oe;
    bi(!0), lu(null);
    try {
      t.call(null);
    } finally {
      bi(i), lu(n);
    }
  }
}
function ra(e, t = !1) {
  var i = e.first;
  for (e.first = e.last = null; i !== null; ) {
    var n = i.next;
    (i.f & Vu) !== 0 ? i.parent = null : Tu(i, t), i = n;
  }
}
function oc(e) {
  for (var t = e.first; t !== null; ) {
    var i = t.next;
    (t.f & yu) === 0 && Tu(t), t = i;
  }
}
function Tu(e, t = !0) {
  var i = !1;
  (t || (e.f & Vs) !== 0) && e.nodes_start !== null && (ia(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), i = !0), ra(e, t && !i), Yt(e, 0), eu(e, Kt);
  var n = e.transitions;
  if (n !== null)
    for (const s of n)
      s.stop();
  ta(e);
  var o = e.parent;
  o !== null && o.first !== null && na(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function ia(e, t) {
  for (; e !== null; ) {
    var i = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Iu(e)
    );
    e.remove(), e = i;
  }
}
function na(e) {
  var t = e.parent, i = e.prev, n = e.next;
  i !== null && (i.next = n), n !== null && (n.prev = i), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = i));
}
function sr(e, t) {
  var i = [];
  aa(e, i, !0), lc(i, () => {
    Tu(e), t && t();
  });
}
function lc(e, t) {
  var i = e.length;
  if (i > 0) {
    var n = () => --i || t();
    for (var o of e)
      o.out(n);
  } else
    t();
}
function aa(e, t, i) {
  if ((e.f & nt) === 0) {
    if (e.f ^= nt, e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || i) && t.push(l);
    for (var n = e.first; n !== null; ) {
      var o = n.next, s = (n.f & hr) !== 0 || (n.f & yu) !== 0;
      aa(n, t, s ? i : !1), n = o;
    }
  }
}
function di(e) {
  sa(e, !0);
}
function sa(e, t) {
  if ((e.f & nt) !== 0) {
    e.f ^= nt, (e.f & Be) === 0 && (e.f ^= Be), wt(e) && (eu(e, ou), i0(e));
    for (var i = e.first; i !== null; ) {
      var n = i.next, o = (i.f & hr) !== 0 || (i.f & yu) !== 0;
      sa(i, o ? t : !1), i = n;
    }
    if (e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || t) && s.in();
  }
}
const fc = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let mt = [], vt = [];
function ca() {
  var e = mt;
  mt = [], Vn(e);
}
function oa() {
  var e = vt;
  vt = [], Vn(e);
}
function yr(e) {
  mt.length === 0 && queueMicrotask(ca), mt.push(e);
}
function dc(e) {
  vt.length === 0 && fc(oa), vt.push(e);
}
function bc() {
  mt.length > 0 && ca(), vt.length > 0 && oa();
}
let Ht = !1, Zt = !1, Xt = null, Hu = !1, xt = !1;
function bi(e) {
  xt = e;
}
let pt = [];
let oe = null, su = !1;
function lu(e) {
  oe = e;
}
let le = null;
function Nu(e) {
  le = e;
}
let vu = null;
function la(e) {
  oe !== null && oe.f & rr && (vu === null ? vu = [e] : vu.push(e));
}
let qe = null, Ue = 0, Ve = null;
function hc(e) {
  Ve = e;
}
let fa = 1, Jt = 0, Au = !1;
function da() {
  return ++fa;
}
function wt(e) {
  var t = e.f;
  if ((t & ou) !== 0)
    return !0;
  if ((t & $u) !== 0) {
    var i = e.deps, n = (t & He) !== 0;
    if (i !== null) {
      var o, s, l = (t & Wt) !== 0, d = n && le !== null && !Au, h = i.length;
      if (l || d) {
        var a = (
          /** @type {Derived} */
          e
        ), c = a.parent;
        for (o = 0; o < h; o++)
          s = i[o], (l || !s?.reactions?.includes(a)) && (s.reactions ??= []).push(a);
        l && (a.f ^= Wt), d && c !== null && (c.f & He) === 0 && (a.f ^= He);
      }
      for (o = 0; o < h; o++)
        if (s = i[o], wt(
          /** @type {Derived} */
          s
        ) && ea(
          /** @type {Derived} */
          s
        ), s.wv > e.wv)
          return !0;
    }
    (!n || le !== null && !Au) && eu(e, Be);
  }
  return !1;
}
function pc(e, t) {
  for (var i = t; i !== null; ) {
    if ((i.f & zt) !== 0)
      try {
        i.fn(e);
        return;
      } catch {
        i.f ^= zt;
      }
    i = i.parent;
  }
  throw Ht = !1, e;
}
function hi(e) {
  return (e.f & Kt) === 0 && (e.parent === null || (e.parent.f & zt) === 0);
}
function r0(e, t, i, n) {
  if (Ht) {
    if (i === null && (Ht = !1), hi(t))
      throw e;
    return;
  }
  if (i !== null && (Ht = !0), pc(e, t), hi(t))
    throw e;
}
function ba(e, t, i = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var o = 0; o < n.length; o++) {
      var s = n[o];
      vu?.includes(e) || ((s.f & Ke) !== 0 ? ba(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (i ? eu(s, ou) : (s.f & Be) !== 0 && eu(s, $u), i0(
        /** @type {Effect} */
        s
      )));
    }
}
function ha(e) {
  var t = qe, i = Ue, n = Ve, o = oe, s = Au, l = vu, d = Re, h = su, a = e.f;
  qe = /** @type {null | Value[]} */
  null, Ue = 0, Ve = null, Au = (a & He) !== 0 && (su || !Hu || oe === null), oe = (a & (yu | Vu)) === 0 ? e : null, vu = null, pi(e.ctx), su = !1, Jt++, e.f |= rr;
  try {
    var c = (
      /** @type {Function} */
      (0, e.fn)()
    ), b = e.deps;
    if (qe !== null) {
      var u;
      if (Yt(e, Ue), b !== null && Ue > 0)
        for (b.length = Ue + qe.length, u = 0; u < qe.length; u++)
          b[Ue + u] = qe[u];
      else
        e.deps = b = qe;
      if (!Au)
        for (u = Ue; u < b.length; u++)
          (b[u].reactions ??= []).push(e);
    } else b !== null && Ue < b.length && (Yt(e, Ue), b.length = Ue);
    if (xa() && Ve !== null && !su && b !== null && (e.f & (Ke | $u | ou)) === 0)
      for (u = 0; u < /** @type {Source[]} */
      Ve.length; u++)
        ba(
          Ve[u],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Jt++, Ve !== null && (n === null ? n = Ve : n.push(.../** @type {Source[]} */
    Ve))), c;
  } finally {
    qe = t, Ue = i, Ve = n, oe = o, Au = s, vu = l, pi(d), su = h, e.f ^= rr;
  }
}
function gc(e, t) {
  let i = t.reactions;
  if (i !== null) {
    var n = ks.call(i, e);
    if (n !== -1) {
      var o = i.length - 1;
      o === 0 ? i = t.reactions = null : (i[n] = i[o], i.pop());
    }
  }
  i === null && (t.f & Ke) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (qe === null || !qe.includes(t)) && (eu(t, $u), (t.f & (He | Wt)) === 0 && (t.f ^= Wt), Qn(
    /** @type {Derived} **/
    t
  ), Yt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Yt(e, t) {
  var i = e.deps;
  if (i !== null)
    for (var n = t; n < i.length; n++)
      gc(e, i[n]);
}
function xr(e) {
  var t = e.f;
  if ((t & Kt) === 0) {
    eu(e, Be);
    var i = le, n = Re, o = Hu;
    le = e, Hu = !0;
    try {
      (t & br) !== 0 ? oc(e) : ra(e), ta(e);
      var s = ha(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = fa;
      var l = e.deps, d;
      oi && uc && e.f & ou;
    } catch (h) {
      r0(h, e, i, n || e.ctx);
    } finally {
      Hu = o, le = i;
    }
  }
}
function mc() {
  try {
    Zs();
  } catch (e) {
    if (Xt !== null)
      r0(e, Xt, null);
    else
      throw e;
  }
}
function pa() {
  var e = Hu;
  try {
    var t = 0;
    for (Hu = !0; pt.length > 0; ) {
      t++ > 1e3 && mc();
      var i = pt, n = i.length;
      pt = [];
      for (var o = 0; o < n; o++) {
        var s = yc(i[o]);
        vc(s);
      }
      yt.clear();
    }
  } finally {
    Zt = !1, Hu = e, Xt = null;
  }
}
function vc(e) {
  var t = e.length;
  if (t !== 0)
    for (var i = 0; i < t; i++) {
      var n = e[i];
      if ((n.f & (Kt | nt)) === 0)
        try {
          wt(n) && (xr(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? na(n) : n.fn = null));
        } catch (o) {
          r0(o, n, null, n.ctx);
        }
    }
}
function i0(e) {
  Zt || (Zt = !0, queueMicrotask(pa));
  for (var t = Xt = e; t.parent !== null; ) {
    t = t.parent;
    var i = t.f;
    if ((i & (Vu | yu)) !== 0) {
      if ((i & Be) === 0) return;
      t.f ^= Be;
    }
  }
  pt.push(t);
}
function yc(e) {
  for (var t = [], i = e; i !== null; ) {
    var n = i.f, o = (n & (yu | Vu)) !== 0, s = o && (n & Be) !== 0;
    if (!s && (n & nt) === 0) {
      if ((n & $n) !== 0)
        t.push(i);
      else if (o)
        i.f ^= Be;
      else
        try {
          wt(i) && xr(i);
        } catch (h) {
          r0(h, i, null, i.ctx);
        }
      var l = i.first;
      if (l !== null) {
        i = l;
        continue;
      }
    }
    var d = i.parent;
    for (i = i.next; i === null && d !== null; )
      i = d.next, d = d.parent;
  }
  return t;
}
function K(e) {
  for (var t; ; ) {
    if (bc(), pt.length === 0)
      return (
        /** @type {T} */
        t
      );
    Zt = !0, pa();
  }
}
async function v0() {
  await Promise.resolve(), K();
}
function N(e) {
  var t = e.f, i = (t & Ke) !== 0;
  if (oe !== null && !su) {
    if (!vu?.includes(e)) {
      var n = oe.deps;
      e.rv < Jt && (e.rv = Jt, qe === null && n !== null && n[Ue] === e ? Ue++ : qe === null ? qe = [e] : (!Au || !qe.includes(e)) && qe.push(e));
    }
  } else if (i && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), s = o.parent;
    s !== null && (s.f & He) === 0 && (o.f ^= He);
  }
  return i && (o = /** @type {Derived} */
  e, wt(o) && ea(o)), xt && yt.has(e) ? yt.get(e) : e.v;
}
function Fu(e) {
  var t = su;
  try {
    return su = !0, e();
  } finally {
    su = t;
  }
}
const xc = -7169;
function eu(e, t) {
  e.f = e.f & xc | t;
}
const yt = /* @__PURE__ */ new Map();
function ga(e, t) {
  var i = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Jn,
    rv: 0,
    wv: 0
  };
  return i;
}
// @__NO_SIDE_EFFECTS__
function de(e, t) {
  const i = ga(e);
  return la(i), i;
}
// @__NO_SIDE_EFFECTS__
function wr(e, t = !1) {
  const i = ga(e);
  return t || (i.equals = pr), i;
}
function V(e, t, i = !1) {
  oe !== null && !su && xa() && (oe.f & (Ke | br)) !== 0 && !vu?.includes(e) && Ks();
  let n = i ? _u(t) : t;
  return wc(e, n);
}
function wc(e, t) {
  if (!e.equals(t)) {
    var i = e.v;
    xt ? yt.set(e, t) : yt.set(e, i), e.v = t, (e.f & Ke) !== 0 && ((e.f & ou) !== 0 && Kn(
      /** @type {Derived} */
      e
    ), eu(e, (e.f & He) === 0 ? Be : $u)), e.wv = da(), ma(e, ou), le !== null && (le.f & Be) !== 0 && (le.f & (yu | Vu)) === 0 && (Ve === null ? hc([e]) : Ve.push(e));
  }
  return t;
}
function ma(e, t) {
  var i = e.reactions;
  if (i !== null)
    for (var n = i.length, o = 0; o < n; o++) {
      var s = i[o], l = s.f;
      (l & ou) === 0 && (eu(s, t), (l & (Be | He)) !== 0 && ((l & Ke) !== 0 ? ma(
        /** @type {Derived} */
        s,
        $u
      ) : i0(
        /** @type {Effect} */
        s
      )));
    }
}
let Re = null;
function pi(e) {
  Re = e;
}
function va(e, t = !1, i) {
  var n = Re = {
    p: Re,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  gr(() => {
    n.d = !0;
  });
}
function ya(e) {
  const t = Re;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const l = t.e;
    if (l !== null) {
      var i = le, n = oe;
      t.e = null;
      try {
        for (var o = 0; o < l.length; o++) {
          var s = l[o];
          Nu(s.effect), lu(s.reaction), mr(s.fn);
        }
      } finally {
        Nu(i), lu(n);
      }
    }
    Re = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function xa() {
  return !0;
}
const Ec = ["touchstart", "touchmove"];
function _c(e) {
  return Ec.includes(e);
}
function Ac(e, t) {
  if (t) {
    const i = document.body;
    e.autofocus = !0, yr(() => {
      document.activeElement === i && e.focus();
    });
  }
}
let gi = !1;
function wa() {
  gi || (gi = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Ea(e) {
  var t = oe, i = le;
  lu(null), Nu(null);
  try {
    return e();
  } finally {
    lu(t), Nu(i);
  }
}
function Sc(e, t, i, n = i) {
  e.addEventListener(t, () => Ea(i));
  const o = e.__on_r;
  o ? e.__on_r = () => {
    o(), n(!0);
  } : e.__on_r = () => n(!0), wa();
}
const _a = /* @__PURE__ */ new Set(), cr = /* @__PURE__ */ new Set();
function Tc(e, t, i, n = {}) {
  function o(s) {
    if (n.capture || bt.call(t, s), !s.cancelBubble)
      return Ea(() => i?.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? yr(() => {
    t.addEventListener(e, o, n);
  }) : t.addEventListener(e, o, n), o;
}
function wu(e, t, i, n, o) {
  var s = { capture: n, passive: o }, l = Tc(e, t, i, s);
  (t === document.body || t === window || t === document) && gr(() => {
    t.removeEventListener(e, l, s);
  });
}
function Nc(e) {
  for (var t = 0; t < e.length; t++)
    _a.add(e[t]);
  for (var i of cr)
    i(e);
}
function bt(e) {
  var t = this, i = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, o = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    o[0] || e.target
  ), l = 0, d = e.__root;
  if (d) {
    var h = o.indexOf(d);
    if (h !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var a = o.indexOf(t);
    if (a === -1)
      return;
    h <= a && (l = h);
  }
  if (s = /** @type {Element} */
  o[l] || e.target, s !== t) {
    gt(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || i;
      }
    });
    var c = oe, b = le;
    lu(null), Nu(null);
    try {
      for (var u, r = []; s !== null; ) {
        var g = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var x = s["__" + n];
          if (x != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s))
            if (Hn(x)) {
              var [m, ...f] = x;
              m.apply(s, [e, ...f]);
            } else
              x.call(s, e);
        } catch (y) {
          u ? r.push(y) : u = y;
        }
        if (e.cancelBubble || g === t || g === null)
          break;
        s = g;
      }
      if (u) {
        for (let y of r)
          queueMicrotask(() => {
            throw y;
          });
        throw u;
      }
    } finally {
      e.__root = t, delete e.currentTarget, lu(c), Nu(b);
    }
  }
}
function Er(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function cu(e, t) {
  var i = (
    /** @type {Effect} */
    le
  );
  i.nodes_start === null && (i.nodes_start = e, i.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function uu(e, t) {
  var i = (t & Ds) !== 0, n = (t & Ls) !== 0, o, s = !e.startsWith("<!>");
  return () => {
    if (pe)
      return cu(he, null), he;
    o === void 0 && (o = Er(s ? e : "<!>" + e), i || (o = /** @type {Node} */
    /* @__PURE__ */ $e(o)));
    var l = (
      /** @type {TemplateNode} */
      n || Wn ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (i) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ $e(l)
      ), h = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      cu(d, h);
    } else
      cu(l, l);
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function n0(e, t, i = "svg") {
  var n = !e.startsWith("<!>"), o = `<${i}>${n ? e : "<!>" + e}</${i}>`, s;
  return () => {
    if (pe)
      return cu(he, null), he;
    if (!s) {
      var l = (
        /** @type {DocumentFragment} */
        Er(o)
      ), d = (
        /** @type {Element} */
        /* @__PURE__ */ $e(l)
      );
      s = /** @type {Element} */
      /* @__PURE__ */ $e(d);
    }
    var h = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    return cu(h, h), h;
  };
}
function It() {
  if (pe)
    return cu(he, null), he;
  var e = document.createDocumentFragment(), t = document.createComment(""), i = u0();
  return e.append(t, i), cu(t, i), e;
}
function xe(e, t) {
  if (pe) {
    le.nodes_end = he, at();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Cc(e, t) {
  var i = t == null ? "" : typeof t == "object" ? t + "" : t;
  i !== (e.__t ??= e.nodeValue) && (e.__t = i, e.nodeValue = i + "");
}
function Aa(e, t) {
  return Sa(e, t);
}
function Ic(e, t) {
  ir(), t.intro = t.intro ?? !1;
  const i = t.target, n = pe, o = he;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ $e(i)
    ); s && (s.nodeType !== 8 || /** @type {Comment} */
    s.data !== dr); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ Iu(s);
    if (!s)
      throw rt;
    tt(!0), Su(
      /** @type {Comment} */
      s
    ), at();
    const l = Sa(e, { ...t, anchor: s });
    if (he === null || he.nodeType !== 8 || /** @type {Comment} */
    he.data !== jn)
      throw e0(), rt;
    return tt(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l === rt)
      return t.recover === !1 && Xs(), ir(), tc(i), tt(!1), Aa(e, t);
    throw l;
  } finally {
    tt(n), Su(o);
  }
}
const et = /* @__PURE__ */ new Map();
function Sa(e, { target: t, anchor: i, props: n = {}, events: o, context: s, intro: l = !0 }) {
  ir();
  var d = /* @__PURE__ */ new Set(), h = (b) => {
    for (var u = 0; u < b.length; u++) {
      var r = b[u];
      if (!d.has(r)) {
        d.add(r);
        var g = _c(r);
        t.addEventListener(r, bt, { passive: g });
        var x = et.get(r);
        x === void 0 ? (document.addEventListener(r, bt, { passive: g }), et.set(r, 1)) : et.set(r, x + 1);
      }
    }
  };
  h(Ms(_a)), cr.add(h);
  var a = void 0, c = cc(() => {
    var b = i ?? t.appendChild(u0());
    return ar(() => {
      if (s) {
        va({});
        var u = (
          /** @type {ComponentContext} */
          Re
        );
        u.c = s;
      }
      o && (n.$$events = o), pe && cu(
        /** @type {TemplateNode} */
        b,
        null
      ), a = e(b, n) || {}, pe && (le.nodes_end = he), s && ya();
    }), () => {
      for (var u of d) {
        t.removeEventListener(u, bt);
        var r = (
          /** @type {number} */
          et.get(u)
        );
        --r === 0 ? (document.removeEventListener(u, bt), et.delete(u)) : et.set(u, r);
      }
      cr.delete(h), b !== i && b.parentNode?.removeChild(b);
    };
  });
  return or.set(a, c), a;
}
let or = /* @__PURE__ */ new WeakMap();
function Oc(e, t) {
  const i = or.get(e);
  return i ? (or.delete(e), i(t)) : Promise.resolve();
}
function Ce(e, t, [i, n] = [0, 0]) {
  pe && i === 0 && at();
  var o = e, s = null, l = null, d = Me, h = i > 0 ? hr : 0, a = !1;
  const c = (u, r = !0) => {
    a = !0, b(r, u);
  }, b = (u, r) => {
    if (d === (d = u)) return;
    let g = !1;
    if (pe && n !== -1) {
      if (i === 0) {
        const m = (
          /** @type {Comment} */
          o.data
        );
        m === dr ? n = 0 : m === Bn ? n = 1 / 0 : (n = parseInt(m.substring(1)), n !== n && (n = d ? 1 / 0 : -1));
      }
      const x = n > i;
      !!d === x && (o = ec(), Su(o), tt(!1), g = !0, n = -1);
    }
    d ? (s ? di(s) : r && (s = ar(() => r(o))), l && sr(l, () => {
      l = null;
    })) : (l ? di(l) : r && (l = ar(() => r(o, [i + 1, n]))), s && sr(s, () => {
      s = null;
    })), g && tt(!0);
  };
  ua(() => {
    a = !1, t(c), a || b(null, null);
  }, h), pe && (o = he);
}
function ku(e, t, i = !1, n = !1, o = !1) {
  var s = e, l = "";
  au(() => {
    var d = (
      /** @type {Effect} */
      le
    );
    if (l === (l = t() ?? "")) {
      pe && at();
      return;
    }
    if (d.nodes_start !== null && (ia(
      d.nodes_start,
      /** @type {TemplateNode} */
      d.nodes_end
    ), d.nodes_start = d.nodes_end = null), l !== "") {
      if (pe) {
        he.data;
        for (var h = at(), a = h; h !== null && (h.nodeType !== 8 || /** @type {Comment} */
        h.data !== ""); )
          a = h, h = /** @type {TemplateNode} */
          /* @__PURE__ */ Iu(h);
        if (h === null)
          throw e0(), rt;
        cu(he, a), s = Su(h);
        return;
      }
      var c = l + "";
      i ? c = `<svg>${c}</svg>` : n && (c = `<math>${c}</math>`);
      var b = Er(c);
      if ((i || n) && (b = /** @type {Element} */
      /* @__PURE__ */ $e(b)), cu(
        /** @type {TemplateNode} */
        /* @__PURE__ */ $e(b),
        /** @type {TemplateNode} */
        b.lastChild
      ), i || n)
        for (; /* @__PURE__ */ $e(b); )
          s.before(
            /** @type {Node} */
            /* @__PURE__ */ $e(b)
          );
      else
        s.before(b);
    }
  });
}
function qc(e, t, i, n, o) {
  pe && at();
  var s = t.$$slots?.[i], l = !1;
  s === !0 && (s = t.children, l = !0), s === void 0 || s(e, l ? () => n : n);
}
const mi = [...` 	
\r\f \v\uFEFF`];
function Rc(e, t, i) {
  var n = "" + e;
  if (i) {
    for (var o in i)
      if (i[o])
        n = n ? n + " " + o : o;
      else if (n.length)
        for (var s = o.length, l = 0; (l = n.indexOf(o, l)) >= 0; ) {
          var d = l + s;
          (l === 0 || mi.includes(n[l - 1])) && (d === n.length || mi.includes(n[d])) ? n = (l === 0 ? "" : n.substring(0, l)) + n.substring(d + 1) : l = d;
        }
  }
  return n === "" ? null : n;
}
function Dc(e, t, i, n, o, s) {
  var l = e.__className;
  if (pe || l !== i || l === void 0) {
    var d = Rc(i, n, s);
    (!pe || d !== e.getAttribute("class")) && (d == null ? e.removeAttribute("class") : e.className = d), e.__className = i;
  } else if (s && o !== s)
    for (var h in s) {
      var a = !!s[h];
      (o == null || a !== !!o[h]) && e.classList.toggle(h, a);
    }
  return s;
}
const Lc = Symbol("is custom element"), Pc = Symbol("is html");
function vi(e) {
  if (pe) {
    var t = !1, i = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          ce(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          ce(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = i, dc(i), wa();
  }
}
function kc(e, t) {
  var i = Ta(e);
  i.value === (i.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function ce(e, t, i, n) {
  var o = Ta(e);
  pe && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = i) && (t === "loading" && (e[$s] = i), i == null ? e.removeAttribute(t) : typeof i != "string" && Mc(e).includes(t) ? e[t] = i : e.setAttribute(t, i));
}
function Ta(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Lc]: e.nodeName.includes("-"),
      [Pc]: e.namespaceURI === Ps
    }
  );
}
var yi = /* @__PURE__ */ new Map();
function Mc(e) {
  var t = yi.get(e.nodeName);
  if (t) return t;
  yi.set(e.nodeName, t = []);
  for (var i, n = e, o = Element.prototype; o !== n; ) {
    i = Bs(n);
    for (var s in i)
      i[s].set && t.push(s);
    n = Fn(n);
  }
  return t;
}
function Bc(e, t, i = t) {
  Sc(e, "change", (n) => {
    var o = n ? e.defaultChecked : e.checked;
    i(o);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (pe && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  Fu(t) == null) && i(e.checked), vr(() => {
    var n = t();
    e.checked = !!n;
  });
}
function xi(e, t) {
  return e === t || e?.[ht] === t;
}
function Ot(e = {}, t, i, n) {
  return mr(() => {
    var o, s;
    return vr(() => {
      o = s, s = [], Fu(() => {
        e !== i(...s) && (t(e, ...s), o && xi(i(...o), e) && t(null, ...o));
      });
    }), () => {
      yr(() => {
        s && xi(i(...s), e) && t(null, ...s);
      });
    };
  }), e;
}
function Na(e) {
  Re === null && Un(), nr(() => {
    const t = Fu(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function jc(e) {
  Re === null && Un(), Na(() => () => Fu(e));
}
function Ca(e, t, i) {
  if (e == null)
    return t(void 0), it;
  const n = Fu(
    () => e.subscribe(
      t,
      // @ts-expect-error
      i
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const ut = [];
function Uc(e, t = it) {
  let i = null;
  const n = /* @__PURE__ */ new Set();
  function o(d) {
    if (Yn(e, d) && (e = d, i)) {
      const h = !ut.length;
      for (const a of n)
        a[1](), ut.push(a, e);
      if (h) {
        for (let a = 0; a < ut.length; a += 2)
          ut[a][0](ut[a + 1]);
        ut.length = 0;
      }
    }
  }
  function s(d) {
    o(d(
      /** @type {T} */
      e
    ));
  }
  function l(d, h = it) {
    const a = [d, h];
    return n.add(a), n.size === 1 && (i = t(o, s) || it), d(
      /** @type {T} */
      e
    ), () => {
      n.delete(a), n.size === 0 && i && (i(), i = null);
    };
  }
  return { set: o, update: s, subscribe: l };
}
function Ft(e) {
  let t;
  return Ca(e, (i) => t = i)(), t;
}
let qt = !1, lr = Symbol();
function Hc(e, t, i) {
  const n = i[t] ??= {
    store: null,
    source: /* @__PURE__ */ wr(void 0),
    unsubscribe: it
  };
  if (n.store !== e && !(lr in i))
    if (n.unsubscribe(), n.store = e ?? null, e == null)
      n.source.v = void 0, n.unsubscribe = it;
    else {
      var o = !0;
      n.unsubscribe = Ca(e, (s) => {
        o ? n.source.v = s : V(n.source, s);
      }), o = !1;
    }
  return e && lr in i ? Ft(e) : N(n.source);
}
function Fc() {
  const e = {};
  function t() {
    gr(() => {
      for (var i in e)
        e[i].unsubscribe();
      gt(e, lr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Vc(e) {
  var t = qt;
  try {
    return qt = !1, [e(), qt];
  } finally {
    qt = t;
  }
}
function wi(e) {
  return e.ctx?.d ?? !1;
}
function te(e, t, i, n) {
  var o = (i & Is) !== 0, s = !0, l = (i & qs) !== 0, d = (i & Rs) !== 0, h = !1, a;
  l ? [a, h] = Vc(() => (
    /** @type {V} */
    e[t]
  )) : a = /** @type {V} */
  e[t];
  var c = ht in e || zn in e, b = l && (Uu(e, t)?.set ?? (c && t in e && ((p) => e[t] = p))) || void 0, u = (
    /** @type {V} */
    n
  ), r = !0, g = !1, x = () => (g = !0, r && (r = !1, d ? u = Fu(
    /** @type {() => V} */
    n
  ) : u = /** @type {V} */
  n), u);
  a === void 0 && n !== void 0 && (b && s && Js(), a = x(), b && b(a));
  var m;
  if (m = () => {
    var p = (
      /** @type {V} */
      e[t]
    );
    return p === void 0 ? x() : (r = !0, g = !1, p);
  }, (i & Os) === 0)
    return m;
  if (b) {
    var f = e.$$legacy;
    return function(p, _) {
      return arguments.length > 0 ? ((!_ || f || h) && b(_ ? m() : p), p) : m();
    };
  }
  var y = !1, w = /* @__PURE__ */ wr(a), A = /* @__PURE__ */ t0(() => {
    var p = m(), _ = N(w);
    return y ? (y = !1, _) : w.v = p;
  });
  return l && N(A), o || (A.equals = pr), function(p, _) {
    if (arguments.length > 0) {
      const S = _ ? N(A) : l ? _u(p) : p;
      if (!A.equals(S)) {
        if (y = !0, V(w, S), g && u !== void 0 && (u = S), wi(A))
          return p;
        Fu(() => N(A));
      }
      return p;
    }
    return wi(A) ? A.v : N(A);
  };
}
function $c(e) {
  return new Gc(e);
}
class Gc {
  /** @type {any} */
  #u;
  /** @type {Record<string, any>} */
  #e;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    var i = /* @__PURE__ */ new Map(), n = (s, l) => {
      var d = /* @__PURE__ */ wr(l);
      return i.set(s, d), d;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, l) {
          return N(i.get(l) ?? n(l, Reflect.get(s, l)));
        },
        has(s, l) {
          return l === zn ? !0 : (N(i.get(l) ?? n(l, Reflect.get(s, l))), Reflect.has(s, l));
        },
        set(s, l, d) {
          return V(i.get(l) ?? n(l, d), d), Reflect.set(s, l, d);
        }
      }
    );
    this.#e = (t.hydrate ? Ic : Aa)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && K(), this.#u = o.$$events;
    for (const s of Object.keys(this.#e))
      s === "$set" || s === "$destroy" || s === "$on" || gt(this, s, {
        get() {
          return this.#e[s];
        },
        /** @param {any} value */
        set(l) {
          this.#e[s] = l;
        },
        enumerable: !0
      });
    this.#e.$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(o, s);
    }, this.#e.$destroy = () => {
      Oc(this.#e);
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    this.#e.$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, i) {
    this.#u[t] = this.#u[t] || [];
    const n = (...o) => i.call(this, ...o);
    return this.#u[t].push(n), () => {
      this.#u[t] = this.#u[t].filter(
        /** @param {any} fn */
        (o) => o !== n
      );
    };
  }
  $destroy() {
    this.#e.$destroy();
  }
}
let Ia;
typeof HTMLElement == "function" && (Ia = class extends HTMLElement {
  /** The Svelte component constructor */
  $$ctor;
  /** Slots */
  $$s;
  /** @type {any} The Svelte component instance */
  $$c;
  /** Whether or not the custom element is connected */
  $$cn = !1;
  /** @type {Record<string, any>} Component props data */
  $$d = {};
  /** `true` if currently in the process of reflecting component props back to attributes */
  $$r = !1;
  /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
  $$p_d = {};
  /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
  $$l = {};
  /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
  $$l_u = /* @__PURE__ */ new Map();
  /** @type {any} The managed render effect for reflecting attributes */
  $$me;
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, i) {
    super(), this.$$ctor = e, this.$$s = t, i && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, t, i) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const n = this.$$c.$on(e, t);
      this.$$l_u.set(t, n);
    }
    super.addEventListener(e, t, i);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, t, i) {
    if (super.removeEventListener(e, t, i), this.$$c) {
      const n = this.$$l_u.get(t);
      n && (n(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(n) {
        return (o) => {
          const s = document.createElement("slot");
          n !== "default" && (s.name = n), xe(o, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, i = zc(this);
      for (const n of this.$$s)
        n in i && (n === "default" && !this.$$d.children ? (this.$$d.children = e(n), t.default = !0) : t[n] = e(n));
      for (const n of this.attributes) {
        const o = this.$$g_p(n.name);
        o in this.$$d || (this.$$d[o] = Vt(o, n.value, this.$$p_d, "toProp"));
      }
      for (const n in this.$$p_d)
        !(n in this.$$d) && this[n] !== void 0 && (this.$$d[n] = this[n], delete this[n]);
      this.$$c = $c({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = sc(() => {
        vr(() => {
          this.$$r = !0;
          for (const n of Gt(this.$$c)) {
            if (!this.$$p_d[n]?.reflect) continue;
            this.$$d[n] = this.$$c[n];
            const o = Vt(
              n,
              this.$$d[n],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[n].attribute || n) : this.setAttribute(this.$$p_d[n].attribute || n, o);
          }
          this.$$r = !1;
        });
      });
      for (const n in this.$$l)
        for (const o of this.$$l[n]) {
          const s = this.$$c.$on(n, o);
          this.$$l_u.set(o, s);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(e, t, i) {
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Vt(e, i, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return Gt(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Vt(e, t, i, n) {
  const o = i[e]?.type;
  if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !i[e])
    return t;
  if (n === "toAttribute")
    switch (o) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (o) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function zc(e) {
  const t = {};
  return e.childNodes.forEach((i) => {
    t[
      /** @type {Element} node */
      i.slot || "default"
    ] = !0;
  }), t;
}
function Wc(e, t, i, n, o, s) {
  let l = class extends Ia {
    constructor() {
      super(e, i, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Gt(t).map(
        (d) => (t[d].attribute || d).toLowerCase()
      );
    }
  };
  return Gt(t).forEach((d) => {
    gt(l.prototype, d, {
      get() {
        return this.$$c && d in this.$$c ? this.$$c[d] : this.$$d[d];
      },
      set(h) {
        h = Vt(d, h, t), this.$$d[d] = h;
        var a = this.$$c;
        if (a) {
          var c = Uu(a, d)?.get;
          c ? a[d] = h : a.$set({ [d]: h });
        }
      }
    });
  }), n.forEach((d) => {
    gt(l.prototype, d, {
      get() {
        return this.$$c?.[d];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
function Zc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Xc(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var i = function n() {
      var o = !1;
      try {
        o = this instanceof n;
      } catch {
      }
      return o ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    i.prototype = t.prototype;
  } else i = {};
  return Object.defineProperty(i, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(i, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), i;
}
var We = {}, Ze = {}, y0 = {}, Xe = {}, Rt = {}, Ei;
function Jc() {
  return Ei || (Ei = 1, Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.default = new Uint16Array(
    // prettier-ignore
    'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function(e) {
      return e.charCodeAt(0);
    })
  )), Rt;
}
var Dt = {}, _i;
function Yc() {
  return _i || (_i = 1, Object.defineProperty(Dt, "__esModule", { value: !0 }), Dt.default = new Uint16Array(
    // prettier-ignore
    "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function(e) {
      return e.charCodeAt(0);
    })
  )), Dt;
}
var x0 = {}, Ai;
function Si() {
  return Ai || (Ai = 1, function(e) {
    var t;
    Object.defineProperty(e, "__esModule", { value: !0 }), e.replaceCodePoint = e.fromCodePoint = void 0;
    var i = /* @__PURE__ */ new Map([
      [0, 65533],
      // C1 Unicode control character reference replacements
      [128, 8364],
      [130, 8218],
      [131, 402],
      [132, 8222],
      [133, 8230],
      [134, 8224],
      [135, 8225],
      [136, 710],
      [137, 8240],
      [138, 352],
      [139, 8249],
      [140, 338],
      [142, 381],
      [145, 8216],
      [146, 8217],
      [147, 8220],
      [148, 8221],
      [149, 8226],
      [150, 8211],
      [151, 8212],
      [152, 732],
      [153, 8482],
      [154, 353],
      [155, 8250],
      [156, 339],
      [158, 382],
      [159, 376]
    ]);
    e.fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
    (t = String.fromCodePoint) !== null && t !== void 0 ? t : function(s) {
      var l = "";
      return s > 65535 && (s -= 65536, l += String.fromCharCode(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023), l += String.fromCharCode(s), l;
    };
    function n(s) {
      var l;
      return s >= 55296 && s <= 57343 || s > 1114111 ? 65533 : (l = i.get(s)) !== null && l !== void 0 ? l : s;
    }
    e.replaceCodePoint = n;
    function o(s) {
      return (0, e.fromCodePoint)(n(s));
    }
    e.default = o;
  }(x0)), x0;
}
var Ti;
function Oa() {
  return Ti || (Ti = 1, function(e) {
    var t = Xe && Xe.__createBinding || (Object.create ? function(E, T, I, P) {
      P === void 0 && (P = I);
      var O = Object.getOwnPropertyDescriptor(T, I);
      (!O || ("get" in O ? !T.__esModule : O.writable || O.configurable)) && (O = { enumerable: !0, get: function() {
        return T[I];
      } }), Object.defineProperty(E, P, O);
    } : function(E, T, I, P) {
      P === void 0 && (P = I), E[P] = T[I];
    }), i = Xe && Xe.__setModuleDefault || (Object.create ? function(E, T) {
      Object.defineProperty(E, "default", { enumerable: !0, value: T });
    } : function(E, T) {
      E.default = T;
    }), n = Xe && Xe.__importStar || function(E) {
      if (E && E.__esModule) return E;
      var T = {};
      if (E != null) for (var I in E) I !== "default" && Object.prototype.hasOwnProperty.call(E, I) && t(T, E, I);
      return i(T, E), T;
    }, o = Xe && Xe.__importDefault || function(E) {
      return E && E.__esModule ? E : { default: E };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.decodeXML = e.decodeHTMLStrict = e.decodeHTMLAttribute = e.decodeHTML = e.determineBranch = e.EntityDecoder = e.DecodingMode = e.BinTrieFlags = e.fromCodePoint = e.replaceCodePoint = e.decodeCodePoint = e.xmlDecodeTree = e.htmlDecodeTree = void 0;
    var s = o(/* @__PURE__ */ Jc());
    e.htmlDecodeTree = s.default;
    var l = o(/* @__PURE__ */ Yc());
    e.xmlDecodeTree = l.default;
    var d = n(/* @__PURE__ */ Si());
    e.decodeCodePoint = d.default;
    var h = /* @__PURE__ */ Si();
    Object.defineProperty(e, "replaceCodePoint", { enumerable: !0, get: function() {
      return h.replaceCodePoint;
    } }), Object.defineProperty(e, "fromCodePoint", { enumerable: !0, get: function() {
      return h.fromCodePoint;
    } });
    var a;
    (function(E) {
      E[E.NUM = 35] = "NUM", E[E.SEMI = 59] = "SEMI", E[E.EQUALS = 61] = "EQUALS", E[E.ZERO = 48] = "ZERO", E[E.NINE = 57] = "NINE", E[E.LOWER_A = 97] = "LOWER_A", E[E.LOWER_F = 102] = "LOWER_F", E[E.LOWER_X = 120] = "LOWER_X", E[E.LOWER_Z = 122] = "LOWER_Z", E[E.UPPER_A = 65] = "UPPER_A", E[E.UPPER_F = 70] = "UPPER_F", E[E.UPPER_Z = 90] = "UPPER_Z";
    })(a || (a = {}));
    var c = 32, b;
    (function(E) {
      E[E.VALUE_LENGTH = 49152] = "VALUE_LENGTH", E[E.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", E[E.JUMP_TABLE = 127] = "JUMP_TABLE";
    })(b = e.BinTrieFlags || (e.BinTrieFlags = {}));
    function u(E) {
      return E >= a.ZERO && E <= a.NINE;
    }
    function r(E) {
      return E >= a.UPPER_A && E <= a.UPPER_F || E >= a.LOWER_A && E <= a.LOWER_F;
    }
    function g(E) {
      return E >= a.UPPER_A && E <= a.UPPER_Z || E >= a.LOWER_A && E <= a.LOWER_Z || u(E);
    }
    function x(E) {
      return E === a.EQUALS || g(E);
    }
    var m;
    (function(E) {
      E[E.EntityStart = 0] = "EntityStart", E[E.NumericStart = 1] = "NumericStart", E[E.NumericDecimal = 2] = "NumericDecimal", E[E.NumericHex = 3] = "NumericHex", E[E.NamedEntity = 4] = "NamedEntity";
    })(m || (m = {}));
    var f;
    (function(E) {
      E[E.Legacy = 0] = "Legacy", E[E.Strict = 1] = "Strict", E[E.Attribute = 2] = "Attribute";
    })(f = e.DecodingMode || (e.DecodingMode = {}));
    var y = (
      /** @class */
      function() {
        function E(T, I, P) {
          this.decodeTree = T, this.emitCodePoint = I, this.errors = P, this.state = m.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = f.Strict;
        }
        return E.prototype.startEntity = function(T) {
          this.decodeMode = T, this.state = m.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
        }, E.prototype.write = function(T, I) {
          switch (this.state) {
            case m.EntityStart:
              return T.charCodeAt(I) === a.NUM ? (this.state = m.NumericStart, this.consumed += 1, this.stateNumericStart(T, I + 1)) : (this.state = m.NamedEntity, this.stateNamedEntity(T, I));
            case m.NumericStart:
              return this.stateNumericStart(T, I);
            case m.NumericDecimal:
              return this.stateNumericDecimal(T, I);
            case m.NumericHex:
              return this.stateNumericHex(T, I);
            case m.NamedEntity:
              return this.stateNamedEntity(T, I);
          }
        }, E.prototype.stateNumericStart = function(T, I) {
          return I >= T.length ? -1 : (T.charCodeAt(I) | c) === a.LOWER_X ? (this.state = m.NumericHex, this.consumed += 1, this.stateNumericHex(T, I + 1)) : (this.state = m.NumericDecimal, this.stateNumericDecimal(T, I));
        }, E.prototype.addToNumericResult = function(T, I, P, O) {
          if (I !== P) {
            var j = P - I;
            this.result = this.result * Math.pow(O, j) + parseInt(T.substr(I, j), O), this.consumed += j;
          }
        }, E.prototype.stateNumericHex = function(T, I) {
          for (var P = I; I < T.length; ) {
            var O = T.charCodeAt(I);
            if (u(O) || r(O))
              I += 1;
            else
              return this.addToNumericResult(T, P, I, 16), this.emitNumericEntity(O, 3);
          }
          return this.addToNumericResult(T, P, I, 16), -1;
        }, E.prototype.stateNumericDecimal = function(T, I) {
          for (var P = I; I < T.length; ) {
            var O = T.charCodeAt(I);
            if (u(O))
              I += 1;
            else
              return this.addToNumericResult(T, P, I, 10), this.emitNumericEntity(O, 2);
          }
          return this.addToNumericResult(T, P, I, 10), -1;
        }, E.prototype.emitNumericEntity = function(T, I) {
          var P;
          if (this.consumed <= I)
            return (P = this.errors) === null || P === void 0 || P.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
          if (T === a.SEMI)
            this.consumed += 1;
          else if (this.decodeMode === f.Strict)
            return 0;
          return this.emitCodePoint((0, d.replaceCodePoint)(this.result), this.consumed), this.errors && (T !== a.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
        }, E.prototype.stateNamedEntity = function(T, I) {
          for (var P = this.decodeTree, O = P[this.treeIndex], j = (O & b.VALUE_LENGTH) >> 14; I < T.length; I++, this.excess++) {
            var F = T.charCodeAt(I);
            if (this.treeIndex = A(P, O, this.treeIndex + Math.max(1, j), F), this.treeIndex < 0)
              return this.result === 0 || // If we are parsing an attribute
              this.decodeMode === f.Attribute && // We shouldn't have consumed any characters after the entity,
              (j === 0 || // And there should be no invalid characters.
              x(F)) ? 0 : this.emitNotTerminatedNamedEntity();
            if (O = P[this.treeIndex], j = (O & b.VALUE_LENGTH) >> 14, j !== 0) {
              if (F === a.SEMI)
                return this.emitNamedEntityData(this.treeIndex, j, this.consumed + this.excess);
              this.decodeMode !== f.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
            }
          }
          return -1;
        }, E.prototype.emitNotTerminatedNamedEntity = function() {
          var T, I = this, P = I.result, O = I.decodeTree, j = (O[P] & b.VALUE_LENGTH) >> 14;
          return this.emitNamedEntityData(P, j, this.consumed), (T = this.errors) === null || T === void 0 || T.missingSemicolonAfterCharacterReference(), this.consumed;
        }, E.prototype.emitNamedEntityData = function(T, I, P) {
          var O = this.decodeTree;
          return this.emitCodePoint(I === 1 ? O[T] & ~b.VALUE_LENGTH : O[T + 1], P), I === 3 && this.emitCodePoint(O[T + 2], P), P;
        }, E.prototype.end = function() {
          var T;
          switch (this.state) {
            case m.NamedEntity:
              return this.result !== 0 && (this.decodeMode !== f.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
            // Otherwise, emit a numeric entity if we have one.
            case m.NumericDecimal:
              return this.emitNumericEntity(0, 2);
            case m.NumericHex:
              return this.emitNumericEntity(0, 3);
            case m.NumericStart:
              return (T = this.errors) === null || T === void 0 || T.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
            case m.EntityStart:
              return 0;
          }
        }, E;
      }()
    );
    e.EntityDecoder = y;
    function w(E) {
      var T = "", I = new y(E, function(P) {
        return T += (0, d.fromCodePoint)(P);
      });
      return function(O, j) {
        for (var F = 0, G = 0; (G = O.indexOf("&", G)) >= 0; ) {
          T += O.slice(F, G), I.startEntity(j);
          var Z = I.write(
            O,
            // Skip the "&"
            G + 1
          );
          if (Z < 0) {
            F = G + I.end();
            break;
          }
          F = G + Z, G = Z === 0 ? F + 1 : F;
        }
        var W = T + O.slice(F);
        return T = "", W;
      };
    }
    function A(E, T, I, P) {
      var O = (T & b.BRANCH_LENGTH) >> 7, j = T & b.JUMP_TABLE;
      if (O === 0)
        return j !== 0 && P === j ? I : -1;
      if (j) {
        var F = P - j;
        return F < 0 || F >= O ? -1 : E[I + F] - 1;
      }
      for (var G = I, Z = G + O - 1; G <= Z; ) {
        var W = G + Z >>> 1, ve = E[W];
        if (ve < P)
          G = W + 1;
        else if (ve > P)
          Z = W - 1;
        else
          return E[W + O];
      }
      return -1;
    }
    e.determineBranch = A;
    var p = w(s.default), _ = w(l.default);
    function S(E, T) {
      return T === void 0 && (T = f.Legacy), p(E, T);
    }
    e.decodeHTML = S;
    function C(E) {
      return p(E, f.Attribute);
    }
    e.decodeHTMLAttribute = C;
    function R(E) {
      return p(E, f.Strict);
    }
    e.decodeHTMLStrict = R;
    function D(E) {
      return _(E, f.Strict);
    }
    e.decodeXML = D;
  }(Xe)), Xe;
}
var Ni;
function qa() {
  return Ni || (Ni = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.QuoteType = void 0;
    var t = /* @__PURE__ */ Oa(), i;
    (function(u) {
      u[u.Tab = 9] = "Tab", u[u.NewLine = 10] = "NewLine", u[u.FormFeed = 12] = "FormFeed", u[u.CarriageReturn = 13] = "CarriageReturn", u[u.Space = 32] = "Space", u[u.ExclamationMark = 33] = "ExclamationMark", u[u.Number = 35] = "Number", u[u.Amp = 38] = "Amp", u[u.SingleQuote = 39] = "SingleQuote", u[u.DoubleQuote = 34] = "DoubleQuote", u[u.Dash = 45] = "Dash", u[u.Slash = 47] = "Slash", u[u.Zero = 48] = "Zero", u[u.Nine = 57] = "Nine", u[u.Semi = 59] = "Semi", u[u.Lt = 60] = "Lt", u[u.Eq = 61] = "Eq", u[u.Gt = 62] = "Gt", u[u.Questionmark = 63] = "Questionmark", u[u.UpperA = 65] = "UpperA", u[u.LowerA = 97] = "LowerA", u[u.UpperF = 70] = "UpperF", u[u.LowerF = 102] = "LowerF", u[u.UpperZ = 90] = "UpperZ", u[u.LowerZ = 122] = "LowerZ", u[u.LowerX = 120] = "LowerX", u[u.OpeningSquareBracket = 91] = "OpeningSquareBracket";
    })(i || (i = {}));
    var n;
    (function(u) {
      u[u.Text = 1] = "Text", u[u.BeforeTagName = 2] = "BeforeTagName", u[u.InTagName = 3] = "InTagName", u[u.InSelfClosingTag = 4] = "InSelfClosingTag", u[u.BeforeClosingTagName = 5] = "BeforeClosingTagName", u[u.InClosingTagName = 6] = "InClosingTagName", u[u.AfterClosingTagName = 7] = "AfterClosingTagName", u[u.BeforeAttributeName = 8] = "BeforeAttributeName", u[u.InAttributeName = 9] = "InAttributeName", u[u.AfterAttributeName = 10] = "AfterAttributeName", u[u.BeforeAttributeValue = 11] = "BeforeAttributeValue", u[u.InAttributeValueDq = 12] = "InAttributeValueDq", u[u.InAttributeValueSq = 13] = "InAttributeValueSq", u[u.InAttributeValueNq = 14] = "InAttributeValueNq", u[u.BeforeDeclaration = 15] = "BeforeDeclaration", u[u.InDeclaration = 16] = "InDeclaration", u[u.InProcessingInstruction = 17] = "InProcessingInstruction", u[u.BeforeComment = 18] = "BeforeComment", u[u.CDATASequence = 19] = "CDATASequence", u[u.InSpecialComment = 20] = "InSpecialComment", u[u.InCommentLike = 21] = "InCommentLike", u[u.BeforeSpecialS = 22] = "BeforeSpecialS", u[u.SpecialStartSequence = 23] = "SpecialStartSequence", u[u.InSpecialTag = 24] = "InSpecialTag", u[u.BeforeEntity = 25] = "BeforeEntity", u[u.BeforeNumericEntity = 26] = "BeforeNumericEntity", u[u.InNamedEntity = 27] = "InNamedEntity", u[u.InNumericEntity = 28] = "InNumericEntity", u[u.InHexEntity = 29] = "InHexEntity";
    })(n || (n = {}));
    function o(u) {
      return u === i.Space || u === i.NewLine || u === i.Tab || u === i.FormFeed || u === i.CarriageReturn;
    }
    function s(u) {
      return u === i.Slash || u === i.Gt || o(u);
    }
    function l(u) {
      return u >= i.Zero && u <= i.Nine;
    }
    function d(u) {
      return u >= i.LowerA && u <= i.LowerZ || u >= i.UpperA && u <= i.UpperZ;
    }
    function h(u) {
      return u >= i.UpperA && u <= i.UpperF || u >= i.LowerA && u <= i.LowerF;
    }
    var a;
    (function(u) {
      u[u.NoValue = 0] = "NoValue", u[u.Unquoted = 1] = "Unquoted", u[u.Single = 2] = "Single", u[u.Double = 3] = "Double";
    })(a = e.QuoteType || (e.QuoteType = {}));
    var c = {
      Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
      CdataEnd: new Uint8Array([93, 93, 62]),
      CommentEnd: new Uint8Array([45, 45, 62]),
      ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
      StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
      TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101])
      // `</title`
    }, b = (
      /** @class */
      function() {
        function u(r, g) {
          var x = r.xmlMode, m = x === void 0 ? !1 : x, f = r.decodeEntities, y = f === void 0 ? !0 : f;
          this.cbs = g, this.state = n.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = n.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.trieIndex = 0, this.trieCurrent = 0, this.entityResult = 0, this.entityExcess = 0, this.xmlMode = m, this.decodeEntities = y, this.entityTrie = m ? t.xmlDecodeTree : t.htmlDecodeTree;
        }
        return u.prototype.reset = function() {
          this.state = n.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = n.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0;
        }, u.prototype.write = function(r) {
          this.offset += this.buffer.length, this.buffer = r, this.parse();
        }, u.prototype.end = function() {
          this.running && this.finish();
        }, u.prototype.pause = function() {
          this.running = !1;
        }, u.prototype.resume = function() {
          this.running = !0, this.index < this.buffer.length + this.offset && this.parse();
        }, u.prototype.getIndex = function() {
          return this.index;
        }, u.prototype.getSectionStart = function() {
          return this.sectionStart;
        }, u.prototype.stateText = function(r) {
          r === i.Lt || !this.decodeEntities && this.fastForwardTo(i.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = n.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && r === i.Amp && (this.state = n.BeforeEntity);
        }, u.prototype.stateSpecialStartSequence = function(r) {
          var g = this.sequenceIndex === this.currentSequence.length, x = g ? (
            // If we are at the end of the sequence, make sure the tag name has ended
            s(r)
          ) : (
            // Otherwise, do a case-insensitive comparison
            (r | 32) === this.currentSequence[this.sequenceIndex]
          );
          if (!x)
            this.isSpecial = !1;
          else if (!g) {
            this.sequenceIndex++;
            return;
          }
          this.sequenceIndex = 0, this.state = n.InTagName, this.stateInTagName(r);
        }, u.prototype.stateInSpecialTag = function(r) {
          if (this.sequenceIndex === this.currentSequence.length) {
            if (r === i.Gt || o(r)) {
              var g = this.index - this.currentSequence.length;
              if (this.sectionStart < g) {
                var x = this.index;
                this.index = g, this.cbs.ontext(this.sectionStart, g), this.index = x;
              }
              this.isSpecial = !1, this.sectionStart = g + 2, this.stateInClosingTagName(r);
              return;
            }
            this.sequenceIndex = 0;
          }
          (r | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === c.TitleEnd ? this.decodeEntities && r === i.Amp && (this.state = n.BeforeEntity) : this.fastForwardTo(i.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(r === i.Lt);
        }, u.prototype.stateCDATASequence = function(r) {
          r === c.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === c.Cdata.length && (this.state = n.InCommentLike, this.currentSequence = c.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = n.InDeclaration, this.stateInDeclaration(r));
        }, u.prototype.fastForwardTo = function(r) {
          for (; ++this.index < this.buffer.length + this.offset; )
            if (this.buffer.charCodeAt(this.index - this.offset) === r)
              return !0;
          return this.index = this.buffer.length + this.offset - 1, !1;
        }, u.prototype.stateInCommentLike = function(r) {
          r === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === c.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = n.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : r !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
        }, u.prototype.isTagStartChar = function(r) {
          return this.xmlMode ? !s(r) : d(r);
        }, u.prototype.startSpecial = function(r, g) {
          this.isSpecial = !0, this.currentSequence = r, this.sequenceIndex = g, this.state = n.SpecialStartSequence;
        }, u.prototype.stateBeforeTagName = function(r) {
          if (r === i.ExclamationMark)
            this.state = n.BeforeDeclaration, this.sectionStart = this.index + 1;
          else if (r === i.Questionmark)
            this.state = n.InProcessingInstruction, this.sectionStart = this.index + 1;
          else if (this.isTagStartChar(r)) {
            var g = r | 32;
            this.sectionStart = this.index, !this.xmlMode && g === c.TitleEnd[2] ? this.startSpecial(c.TitleEnd, 3) : this.state = !this.xmlMode && g === c.ScriptEnd[2] ? n.BeforeSpecialS : n.InTagName;
          } else r === i.Slash ? this.state = n.BeforeClosingTagName : (this.state = n.Text, this.stateText(r));
        }, u.prototype.stateInTagName = function(r) {
          s(r) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = n.BeforeAttributeName, this.stateBeforeAttributeName(r));
        }, u.prototype.stateBeforeClosingTagName = function(r) {
          o(r) || (r === i.Gt ? this.state = n.Text : (this.state = this.isTagStartChar(r) ? n.InClosingTagName : n.InSpecialComment, this.sectionStart = this.index));
        }, u.prototype.stateInClosingTagName = function(r) {
          (r === i.Gt || o(r)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = n.AfterClosingTagName, this.stateAfterClosingTagName(r));
        }, u.prototype.stateAfterClosingTagName = function(r) {
          (r === i.Gt || this.fastForwardTo(i.Gt)) && (this.state = n.Text, this.baseState = n.Text, this.sectionStart = this.index + 1);
        }, u.prototype.stateBeforeAttributeName = function(r) {
          r === i.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = n.InSpecialTag, this.sequenceIndex = 0) : this.state = n.Text, this.baseState = this.state, this.sectionStart = this.index + 1) : r === i.Slash ? this.state = n.InSelfClosingTag : o(r) || (this.state = n.InAttributeName, this.sectionStart = this.index);
        }, u.prototype.stateInSelfClosingTag = function(r) {
          r === i.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = n.Text, this.baseState = n.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : o(r) || (this.state = n.BeforeAttributeName, this.stateBeforeAttributeName(r));
        }, u.prototype.stateInAttributeName = function(r) {
          (r === i.Eq || s(r)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = -1, this.state = n.AfterAttributeName, this.stateAfterAttributeName(r));
        }, u.prototype.stateAfterAttributeName = function(r) {
          r === i.Eq ? this.state = n.BeforeAttributeValue : r === i.Slash || r === i.Gt ? (this.cbs.onattribend(a.NoValue, this.index), this.state = n.BeforeAttributeName, this.stateBeforeAttributeName(r)) : o(r) || (this.cbs.onattribend(a.NoValue, this.index), this.state = n.InAttributeName, this.sectionStart = this.index);
        }, u.prototype.stateBeforeAttributeValue = function(r) {
          r === i.DoubleQuote ? (this.state = n.InAttributeValueDq, this.sectionStart = this.index + 1) : r === i.SingleQuote ? (this.state = n.InAttributeValueSq, this.sectionStart = this.index + 1) : o(r) || (this.sectionStart = this.index, this.state = n.InAttributeValueNq, this.stateInAttributeValueNoQuotes(r));
        }, u.prototype.handleInAttributeValue = function(r, g) {
          r === g || !this.decodeEntities && this.fastForwardTo(g) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(g === i.DoubleQuote ? a.Double : a.Single, this.index), this.state = n.BeforeAttributeName) : this.decodeEntities && r === i.Amp && (this.baseState = this.state, this.state = n.BeforeEntity);
        }, u.prototype.stateInAttributeValueDoubleQuotes = function(r) {
          this.handleInAttributeValue(r, i.DoubleQuote);
        }, u.prototype.stateInAttributeValueSingleQuotes = function(r) {
          this.handleInAttributeValue(r, i.SingleQuote);
        }, u.prototype.stateInAttributeValueNoQuotes = function(r) {
          o(r) || r === i.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(a.Unquoted, this.index), this.state = n.BeforeAttributeName, this.stateBeforeAttributeName(r)) : this.decodeEntities && r === i.Amp && (this.baseState = this.state, this.state = n.BeforeEntity);
        }, u.prototype.stateBeforeDeclaration = function(r) {
          r === i.OpeningSquareBracket ? (this.state = n.CDATASequence, this.sequenceIndex = 0) : this.state = r === i.Dash ? n.BeforeComment : n.InDeclaration;
        }, u.prototype.stateInDeclaration = function(r) {
          (r === i.Gt || this.fastForwardTo(i.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = n.Text, this.sectionStart = this.index + 1);
        }, u.prototype.stateInProcessingInstruction = function(r) {
          (r === i.Gt || this.fastForwardTo(i.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = n.Text, this.sectionStart = this.index + 1);
        }, u.prototype.stateBeforeComment = function(r) {
          r === i.Dash ? (this.state = n.InCommentLike, this.currentSequence = c.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = n.InDeclaration;
        }, u.prototype.stateInSpecialComment = function(r) {
          (r === i.Gt || this.fastForwardTo(i.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = n.Text, this.sectionStart = this.index + 1);
        }, u.prototype.stateBeforeSpecialS = function(r) {
          var g = r | 32;
          g === c.ScriptEnd[3] ? this.startSpecial(c.ScriptEnd, 4) : g === c.StyleEnd[3] ? this.startSpecial(c.StyleEnd, 4) : (this.state = n.InTagName, this.stateInTagName(r));
        }, u.prototype.stateBeforeEntity = function(r) {
          this.entityExcess = 1, this.entityResult = 0, r === i.Number ? this.state = n.BeforeNumericEntity : r === i.Amp || (this.trieIndex = 0, this.trieCurrent = this.entityTrie[0], this.state = n.InNamedEntity, this.stateInNamedEntity(r));
        }, u.prototype.stateInNamedEntity = function(r) {
          if (this.entityExcess += 1, this.trieIndex = (0, t.determineBranch)(this.entityTrie, this.trieCurrent, this.trieIndex + 1, r), this.trieIndex < 0) {
            this.emitNamedEntity(), this.index--;
            return;
          }
          this.trieCurrent = this.entityTrie[this.trieIndex];
          var g = this.trieCurrent & t.BinTrieFlags.VALUE_LENGTH;
          if (g) {
            var x = (g >> 14) - 1;
            if (!this.allowLegacyEntity() && r !== i.Semi)
              this.trieIndex += x;
            else {
              var m = this.index - this.entityExcess + 1;
              m > this.sectionStart && this.emitPartial(this.sectionStart, m), this.entityResult = this.trieIndex, this.trieIndex += x, this.entityExcess = 0, this.sectionStart = this.index + 1, x === 0 && this.emitNamedEntity();
            }
          }
        }, u.prototype.emitNamedEntity = function() {
          if (this.state = this.baseState, this.entityResult !== 0) {
            var r = (this.entityTrie[this.entityResult] & t.BinTrieFlags.VALUE_LENGTH) >> 14;
            switch (r) {
              case 1: {
                this.emitCodePoint(this.entityTrie[this.entityResult] & ~t.BinTrieFlags.VALUE_LENGTH);
                break;
              }
              case 2: {
                this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
                break;
              }
              case 3:
                this.emitCodePoint(this.entityTrie[this.entityResult + 1]), this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
            }
          }
        }, u.prototype.stateBeforeNumericEntity = function(r) {
          (r | 32) === i.LowerX ? (this.entityExcess++, this.state = n.InHexEntity) : (this.state = n.InNumericEntity, this.stateInNumericEntity(r));
        }, u.prototype.emitNumericEntity = function(r) {
          var g = this.index - this.entityExcess - 1, x = g + 2 + +(this.state === n.InHexEntity);
          x !== this.index && (g > this.sectionStart && this.emitPartial(this.sectionStart, g), this.sectionStart = this.index + Number(r), this.emitCodePoint((0, t.replaceCodePoint)(this.entityResult))), this.state = this.baseState;
        }, u.prototype.stateInNumericEntity = function(r) {
          r === i.Semi ? this.emitNumericEntity(!0) : l(r) ? (this.entityResult = this.entityResult * 10 + (r - i.Zero), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state = this.baseState, this.index--);
        }, u.prototype.stateInHexEntity = function(r) {
          r === i.Semi ? this.emitNumericEntity(!0) : l(r) ? (this.entityResult = this.entityResult * 16 + (r - i.Zero), this.entityExcess++) : h(r) ? (this.entityResult = this.entityResult * 16 + ((r | 32) - i.LowerA + 10), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state = this.baseState, this.index--);
        }, u.prototype.allowLegacyEntity = function() {
          return !this.xmlMode && (this.baseState === n.Text || this.baseState === n.InSpecialTag);
        }, u.prototype.cleanup = function() {
          this.running && this.sectionStart !== this.index && (this.state === n.Text || this.state === n.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === n.InAttributeValueDq || this.state === n.InAttributeValueSq || this.state === n.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
        }, u.prototype.shouldContinue = function() {
          return this.index < this.buffer.length + this.offset && this.running;
        }, u.prototype.parse = function() {
          for (; this.shouldContinue(); ) {
            var r = this.buffer.charCodeAt(this.index - this.offset);
            switch (this.state) {
              case n.Text: {
                this.stateText(r);
                break;
              }
              case n.SpecialStartSequence: {
                this.stateSpecialStartSequence(r);
                break;
              }
              case n.InSpecialTag: {
                this.stateInSpecialTag(r);
                break;
              }
              case n.CDATASequence: {
                this.stateCDATASequence(r);
                break;
              }
              case n.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(r);
                break;
              }
              case n.InAttributeName: {
                this.stateInAttributeName(r);
                break;
              }
              case n.InCommentLike: {
                this.stateInCommentLike(r);
                break;
              }
              case n.InSpecialComment: {
                this.stateInSpecialComment(r);
                break;
              }
              case n.BeforeAttributeName: {
                this.stateBeforeAttributeName(r);
                break;
              }
              case n.InTagName: {
                this.stateInTagName(r);
                break;
              }
              case n.InClosingTagName: {
                this.stateInClosingTagName(r);
                break;
              }
              case n.BeforeTagName: {
                this.stateBeforeTagName(r);
                break;
              }
              case n.AfterAttributeName: {
                this.stateAfterAttributeName(r);
                break;
              }
              case n.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(r);
                break;
              }
              case n.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(r);
                break;
              }
              case n.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(r);
                break;
              }
              case n.AfterClosingTagName: {
                this.stateAfterClosingTagName(r);
                break;
              }
              case n.BeforeSpecialS: {
                this.stateBeforeSpecialS(r);
                break;
              }
              case n.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(r);
                break;
              }
              case n.InSelfClosingTag: {
                this.stateInSelfClosingTag(r);
                break;
              }
              case n.InDeclaration: {
                this.stateInDeclaration(r);
                break;
              }
              case n.BeforeDeclaration: {
                this.stateBeforeDeclaration(r);
                break;
              }
              case n.BeforeComment: {
                this.stateBeforeComment(r);
                break;
              }
              case n.InProcessingInstruction: {
                this.stateInProcessingInstruction(r);
                break;
              }
              case n.InNamedEntity: {
                this.stateInNamedEntity(r);
                break;
              }
              case n.BeforeEntity: {
                this.stateBeforeEntity(r);
                break;
              }
              case n.InHexEntity: {
                this.stateInHexEntity(r);
                break;
              }
              case n.InNumericEntity: {
                this.stateInNumericEntity(r);
                break;
              }
              default:
                this.stateBeforeNumericEntity(r);
            }
            this.index++;
          }
          this.cleanup();
        }, u.prototype.finish = function() {
          this.state === n.InNamedEntity && this.emitNamedEntity(), this.sectionStart < this.index && this.handleTrailingData(), this.cbs.onend();
        }, u.prototype.handleTrailingData = function() {
          var r = this.buffer.length + this.offset;
          this.state === n.InCommentLike ? this.currentSequence === c.CdataEnd ? this.cbs.oncdata(this.sectionStart, r, 0) : this.cbs.oncomment(this.sectionStart, r, 0) : this.state === n.InNumericEntity && this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state === n.InHexEntity && this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state === n.InTagName || this.state === n.BeforeAttributeName || this.state === n.BeforeAttributeValue || this.state === n.AfterAttributeName || this.state === n.InAttributeName || this.state === n.InAttributeValueSq || this.state === n.InAttributeValueDq || this.state === n.InAttributeValueNq || this.state === n.InClosingTagName || this.cbs.ontext(this.sectionStart, r);
        }, u.prototype.emitPartial = function(r, g) {
          this.baseState !== n.Text && this.baseState !== n.InSpecialTag ? this.cbs.onattribdata(r, g) : this.cbs.ontext(r, g);
        }, u.prototype.emitCodePoint = function(r) {
          this.baseState !== n.Text && this.baseState !== n.InSpecialTag ? this.cbs.onattribentity(r) : this.cbs.ontextentity(r);
        }, u;
      }()
    );
    e.default = b;
  }(y0)), y0;
}
var Ci;
function Ii() {
  if (Ci) return Ze;
  Ci = 1;
  var e = Ze && Ze.__createBinding || (Object.create ? function(m, f, y, w) {
    w === void 0 && (w = y);
    var A = Object.getOwnPropertyDescriptor(f, y);
    (!A || ("get" in A ? !f.__esModule : A.writable || A.configurable)) && (A = { enumerable: !0, get: function() {
      return f[y];
    } }), Object.defineProperty(m, w, A);
  } : function(m, f, y, w) {
    w === void 0 && (w = y), m[w] = f[y];
  }), t = Ze && Ze.__setModuleDefault || (Object.create ? function(m, f) {
    Object.defineProperty(m, "default", { enumerable: !0, value: f });
  } : function(m, f) {
    m.default = f;
  }), i = Ze && Ze.__importStar || function(m) {
    if (m && m.__esModule) return m;
    var f = {};
    if (m != null) for (var y in m) y !== "default" && Object.prototype.hasOwnProperty.call(m, y) && e(f, m, y);
    return t(f, m), f;
  };
  Object.defineProperty(Ze, "__esModule", { value: !0 }), Ze.Parser = void 0;
  var n = i(/* @__PURE__ */ qa()), o = /* @__PURE__ */ Oa(), s = /* @__PURE__ */ new Set([
    "input",
    "option",
    "optgroup",
    "select",
    "button",
    "datalist",
    "textarea"
  ]), l = /* @__PURE__ */ new Set(["p"]), d = /* @__PURE__ */ new Set(["thead", "tbody"]), h = /* @__PURE__ */ new Set(["dd", "dt"]), a = /* @__PURE__ */ new Set(["rt", "rp"]), c = /* @__PURE__ */ new Map([
    ["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])],
    ["th", /* @__PURE__ */ new Set(["th"])],
    ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])],
    ["body", /* @__PURE__ */ new Set(["head", "link", "script"])],
    ["li", /* @__PURE__ */ new Set(["li"])],
    ["p", l],
    ["h1", l],
    ["h2", l],
    ["h3", l],
    ["h4", l],
    ["h5", l],
    ["h6", l],
    ["select", s],
    ["input", s],
    ["output", s],
    ["button", s],
    ["datalist", s],
    ["textarea", s],
    ["option", /* @__PURE__ */ new Set(["option"])],
    ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])],
    ["dd", h],
    ["dt", h],
    ["address", l],
    ["article", l],
    ["aside", l],
    ["blockquote", l],
    ["details", l],
    ["div", l],
    ["dl", l],
    ["fieldset", l],
    ["figcaption", l],
    ["figure", l],
    ["footer", l],
    ["form", l],
    ["header", l],
    ["hr", l],
    ["main", l],
    ["nav", l],
    ["ol", l],
    ["pre", l],
    ["section", l],
    ["table", l],
    ["ul", l],
    ["rt", a],
    ["rp", a],
    ["tbody", d],
    ["tfoot", d]
  ]), b = /* @__PURE__ */ new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ]), u = /* @__PURE__ */ new Set(["math", "svg"]), r = /* @__PURE__ */ new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignobject",
    "desc",
    "title"
  ]), g = /\s|\//, x = (
    /** @class */
    function() {
      function m(f, y) {
        y === void 0 && (y = {});
        var w, A, p, _, S;
        this.options = y, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.foreignContext = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = f ?? {}, this.lowerCaseTagNames = (w = y.lowerCaseTags) !== null && w !== void 0 ? w : !y.xmlMode, this.lowerCaseAttributeNames = (A = y.lowerCaseAttributeNames) !== null && A !== void 0 ? A : !y.xmlMode, this.tokenizer = new ((p = y.Tokenizer) !== null && p !== void 0 ? p : n.default)(this.options, this), (S = (_ = this.cbs).onparserinit) === null || S === void 0 || S.call(_, this);
      }
      return m.prototype.ontext = function(f, y) {
        var w, A, p = this.getSlice(f, y);
        this.endIndex = y - 1, (A = (w = this.cbs).ontext) === null || A === void 0 || A.call(w, p), this.startIndex = y;
      }, m.prototype.ontextentity = function(f) {
        var y, w, A = this.tokenizer.getSectionStart();
        this.endIndex = A - 1, (w = (y = this.cbs).ontext) === null || w === void 0 || w.call(y, (0, o.fromCodePoint)(f)), this.startIndex = A;
      }, m.prototype.isVoidElement = function(f) {
        return !this.options.xmlMode && b.has(f);
      }, m.prototype.onopentagname = function(f, y) {
        this.endIndex = y;
        var w = this.getSlice(f, y);
        this.lowerCaseTagNames && (w = w.toLowerCase()), this.emitOpenTag(w);
      }, m.prototype.emitOpenTag = function(f) {
        var y, w, A, p;
        this.openTagStart = this.startIndex, this.tagname = f;
        var _ = !this.options.xmlMode && c.get(f);
        if (_)
          for (; this.stack.length > 0 && _.has(this.stack[this.stack.length - 1]); ) {
            var S = this.stack.pop();
            (w = (y = this.cbs).onclosetag) === null || w === void 0 || w.call(y, S, !0);
          }
        this.isVoidElement(f) || (this.stack.push(f), u.has(f) ? this.foreignContext.push(!0) : r.has(f) && this.foreignContext.push(!1)), (p = (A = this.cbs).onopentagname) === null || p === void 0 || p.call(A, f), this.cbs.onopentag && (this.attribs = {});
      }, m.prototype.endOpenTag = function(f) {
        var y, w;
        this.startIndex = this.openTagStart, this.attribs && ((w = (y = this.cbs).onopentag) === null || w === void 0 || w.call(y, this.tagname, this.attribs, f), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = "";
      }, m.prototype.onopentagend = function(f) {
        this.endIndex = f, this.endOpenTag(!1), this.startIndex = f + 1;
      }, m.prototype.onclosetag = function(f, y) {
        var w, A, p, _, S, C;
        this.endIndex = y;
        var R = this.getSlice(f, y);
        if (this.lowerCaseTagNames && (R = R.toLowerCase()), (u.has(R) || r.has(R)) && this.foreignContext.pop(), this.isVoidElement(R))
          !this.options.xmlMode && R === "br" && ((A = (w = this.cbs).onopentagname) === null || A === void 0 || A.call(w, "br"), (_ = (p = this.cbs).onopentag) === null || _ === void 0 || _.call(p, "br", {}, !0), (C = (S = this.cbs).onclosetag) === null || C === void 0 || C.call(S, "br", !1));
        else {
          var D = this.stack.lastIndexOf(R);
          if (D !== -1)
            if (this.cbs.onclosetag)
              for (var E = this.stack.length - D; E--; )
                this.cbs.onclosetag(this.stack.pop(), E !== 0);
            else
              this.stack.length = D;
          else !this.options.xmlMode && R === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
        }
        this.startIndex = y + 1;
      }, m.prototype.onselfclosingtag = function(f) {
        this.endIndex = f, this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1] ? (this.closeCurrentTag(!1), this.startIndex = f + 1) : this.onopentagend(f);
      }, m.prototype.closeCurrentTag = function(f) {
        var y, w, A = this.tagname;
        this.endOpenTag(f), this.stack[this.stack.length - 1] === A && ((w = (y = this.cbs).onclosetag) === null || w === void 0 || w.call(y, A, !f), this.stack.pop());
      }, m.prototype.onattribname = function(f, y) {
        this.startIndex = f;
        var w = this.getSlice(f, y);
        this.attribname = this.lowerCaseAttributeNames ? w.toLowerCase() : w;
      }, m.prototype.onattribdata = function(f, y) {
        this.attribvalue += this.getSlice(f, y);
      }, m.prototype.onattribentity = function(f) {
        this.attribvalue += (0, o.fromCodePoint)(f);
      }, m.prototype.onattribend = function(f, y) {
        var w, A;
        this.endIndex = y, (A = (w = this.cbs).onattribute) === null || A === void 0 || A.call(w, this.attribname, this.attribvalue, f === n.QuoteType.Double ? '"' : f === n.QuoteType.Single ? "'" : f === n.QuoteType.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = "";
      }, m.prototype.getInstructionName = function(f) {
        var y = f.search(g), w = y < 0 ? f : f.substr(0, y);
        return this.lowerCaseTagNames && (w = w.toLowerCase()), w;
      }, m.prototype.ondeclaration = function(f, y) {
        this.endIndex = y;
        var w = this.getSlice(f, y);
        if (this.cbs.onprocessinginstruction) {
          var A = this.getInstructionName(w);
          this.cbs.onprocessinginstruction("!".concat(A), "!".concat(w));
        }
        this.startIndex = y + 1;
      }, m.prototype.onprocessinginstruction = function(f, y) {
        this.endIndex = y;
        var w = this.getSlice(f, y);
        if (this.cbs.onprocessinginstruction) {
          var A = this.getInstructionName(w);
          this.cbs.onprocessinginstruction("?".concat(A), "?".concat(w));
        }
        this.startIndex = y + 1;
      }, m.prototype.oncomment = function(f, y, w) {
        var A, p, _, S;
        this.endIndex = y, (p = (A = this.cbs).oncomment) === null || p === void 0 || p.call(A, this.getSlice(f, y - w)), (S = (_ = this.cbs).oncommentend) === null || S === void 0 || S.call(_), this.startIndex = y + 1;
      }, m.prototype.oncdata = function(f, y, w) {
        var A, p, _, S, C, R, D, E, T, I;
        this.endIndex = y;
        var P = this.getSlice(f, y - w);
        this.options.xmlMode || this.options.recognizeCDATA ? ((p = (A = this.cbs).oncdatastart) === null || p === void 0 || p.call(A), (S = (_ = this.cbs).ontext) === null || S === void 0 || S.call(_, P), (R = (C = this.cbs).oncdataend) === null || R === void 0 || R.call(C)) : ((E = (D = this.cbs).oncomment) === null || E === void 0 || E.call(D, "[CDATA[".concat(P, "]]")), (I = (T = this.cbs).oncommentend) === null || I === void 0 || I.call(T)), this.startIndex = y + 1;
      }, m.prototype.onend = function() {
        var f, y;
        if (this.cbs.onclosetag) {
          this.endIndex = this.startIndex;
          for (var w = this.stack.length; w > 0; this.cbs.onclosetag(this.stack[--w], !0))
            ;
        }
        (y = (f = this.cbs).onend) === null || y === void 0 || y.call(f);
      }, m.prototype.reset = function() {
        var f, y, w, A;
        (y = (f = this.cbs).onreset) === null || y === void 0 || y.call(f), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (A = (w = this.cbs).onparserinit) === null || A === void 0 || A.call(w, this), this.buffers.length = 0, this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1;
      }, m.prototype.parseComplete = function(f) {
        this.reset(), this.end(f);
      }, m.prototype.getSlice = function(f, y) {
        for (; f - this.bufferOffset >= this.buffers[0].length; )
          this.shiftBuffer();
        for (var w = this.buffers[0].slice(f - this.bufferOffset, y - this.bufferOffset); y - this.bufferOffset > this.buffers[0].length; )
          this.shiftBuffer(), w += this.buffers[0].slice(0, y - this.bufferOffset);
        return w;
      }, m.prototype.shiftBuffer = function() {
        this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift();
      }, m.prototype.write = function(f) {
        var y, w;
        if (this.ended) {
          (w = (y = this.cbs).onerror) === null || w === void 0 || w.call(y, new Error(".write() after done!"));
          return;
        }
        this.buffers.push(f), this.tokenizer.running && (this.tokenizer.write(f), this.writeIndex++);
      }, m.prototype.end = function(f) {
        var y, w;
        if (this.ended) {
          (w = (y = this.cbs).onerror) === null || w === void 0 || w.call(y, new Error(".end() after done!"));
          return;
        }
        f && this.write(f), this.ended = !0, this.tokenizer.end();
      }, m.prototype.pause = function() {
        this.tokenizer.pause();
      }, m.prototype.resume = function() {
        for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length; )
          this.tokenizer.write(this.buffers[this.writeIndex++]);
        this.ended && this.tokenizer.end();
      }, m.prototype.parseChunk = function(f) {
        this.write(f);
      }, m.prototype.done = function(f) {
        this.end(f);
      }, m;
    }()
  );
  return Ze.Parser = x, Ze;
}
var Mu = {}, w0 = {}, Oi;
function Et() {
  return Oi || (Oi = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Doctype = e.CDATA = e.Tag = e.Style = e.Script = e.Comment = e.Directive = e.Text = e.Root = e.isTag = e.ElementType = void 0;
    var t;
    (function(n) {
      n.Root = "root", n.Text = "text", n.Directive = "directive", n.Comment = "comment", n.Script = "script", n.Style = "style", n.Tag = "tag", n.CDATA = "cdata", n.Doctype = "doctype";
    })(t = e.ElementType || (e.ElementType = {}));
    function i(n) {
      return n.type === t.Tag || n.type === t.Script || n.type === t.Style;
    }
    e.isTag = i, e.Root = t.Root, e.Text = t.Text, e.Directive = t.Directive, e.Comment = t.Comment, e.Script = t.Script, e.Style = t.Style, e.Tag = t.Tag, e.CDATA = t.CDATA, e.Doctype = t.Doctype;
  }(w0)), w0;
}
var X = {}, qi;
function Ri() {
  if (qi) return X;
  qi = 1;
  var e = X && X.__extends || /* @__PURE__ */ function() {
    var p = function(_, S) {
      return p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(C, R) {
        C.__proto__ = R;
      } || function(C, R) {
        for (var D in R) Object.prototype.hasOwnProperty.call(R, D) && (C[D] = R[D]);
      }, p(_, S);
    };
    return function(_, S) {
      if (typeof S != "function" && S !== null)
        throw new TypeError("Class extends value " + String(S) + " is not a constructor or null");
      p(_, S);
      function C() {
        this.constructor = _;
      }
      _.prototype = S === null ? Object.create(S) : (C.prototype = S.prototype, new C());
    };
  }(), t = X && X.__assign || function() {
    return t = Object.assign || function(p) {
      for (var _, S = 1, C = arguments.length; S < C; S++) {
        _ = arguments[S];
        for (var R in _) Object.prototype.hasOwnProperty.call(_, R) && (p[R] = _[R]);
      }
      return p;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(X, "__esModule", { value: !0 }), X.cloneNode = X.hasChildren = X.isDocument = X.isDirective = X.isComment = X.isText = X.isCDATA = X.isTag = X.Element = X.Document = X.CDATA = X.NodeWithChildren = X.ProcessingInstruction = X.Comment = X.Text = X.DataNode = X.Node = void 0;
  var i = /* @__PURE__ */ Et(), n = (
    /** @class */
    function() {
      function p() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
      }
      return Object.defineProperty(p.prototype, "parentNode", {
        // Read-write aliases for properties
        /**
         * Same as {@link parent}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.parent;
        },
        set: function(_) {
          this.parent = _;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(p.prototype, "previousSibling", {
        /**
         * Same as {@link prev}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.prev;
        },
        set: function(_) {
          this.prev = _;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(p.prototype, "nextSibling", {
        /**
         * Same as {@link next}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.next;
        },
        set: function(_) {
          this.next = _;
        },
        enumerable: !1,
        configurable: !0
      }), p.prototype.cloneNode = function(_) {
        return _ === void 0 && (_ = !1), w(this, _);
      }, p;
    }()
  );
  X.Node = n;
  var o = (
    /** @class */
    function(p) {
      e(_, p);
      function _(S) {
        var C = p.call(this) || this;
        return C.data = S, C;
      }
      return Object.defineProperty(_.prototype, "nodeValue", {
        /**
         * Same as {@link data}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.data;
        },
        set: function(S) {
          this.data = S;
        },
        enumerable: !1,
        configurable: !0
      }), _;
    }(n)
  );
  X.DataNode = o;
  var s = (
    /** @class */
    function(p) {
      e(_, p);
      function _() {
        var S = p !== null && p.apply(this, arguments) || this;
        return S.type = i.ElementType.Text, S;
      }
      return Object.defineProperty(_.prototype, "nodeType", {
        get: function() {
          return 3;
        },
        enumerable: !1,
        configurable: !0
      }), _;
    }(o)
  );
  X.Text = s;
  var l = (
    /** @class */
    function(p) {
      e(_, p);
      function _() {
        var S = p !== null && p.apply(this, arguments) || this;
        return S.type = i.ElementType.Comment, S;
      }
      return Object.defineProperty(_.prototype, "nodeType", {
        get: function() {
          return 8;
        },
        enumerable: !1,
        configurable: !0
      }), _;
    }(o)
  );
  X.Comment = l;
  var d = (
    /** @class */
    function(p) {
      e(_, p);
      function _(S, C) {
        var R = p.call(this, C) || this;
        return R.name = S, R.type = i.ElementType.Directive, R;
      }
      return Object.defineProperty(_.prototype, "nodeType", {
        get: function() {
          return 1;
        },
        enumerable: !1,
        configurable: !0
      }), _;
    }(o)
  );
  X.ProcessingInstruction = d;
  var h = (
    /** @class */
    function(p) {
      e(_, p);
      function _(S) {
        var C = p.call(this) || this;
        return C.children = S, C;
      }
      return Object.defineProperty(_.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */
        get: function() {
          var S;
          return (S = this.children[0]) !== null && S !== void 0 ? S : null;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(_.prototype, "lastChild", {
        /** Last child of the node. */
        get: function() {
          return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(_.prototype, "childNodes", {
        /**
         * Same as {@link children}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.children;
        },
        set: function(S) {
          this.children = S;
        },
        enumerable: !1,
        configurable: !0
      }), _;
    }(n)
  );
  X.NodeWithChildren = h;
  var a = (
    /** @class */
    function(p) {
      e(_, p);
      function _() {
        var S = p !== null && p.apply(this, arguments) || this;
        return S.type = i.ElementType.CDATA, S;
      }
      return Object.defineProperty(_.prototype, "nodeType", {
        get: function() {
          return 4;
        },
        enumerable: !1,
        configurable: !0
      }), _;
    }(h)
  );
  X.CDATA = a;
  var c = (
    /** @class */
    function(p) {
      e(_, p);
      function _() {
        var S = p !== null && p.apply(this, arguments) || this;
        return S.type = i.ElementType.Root, S;
      }
      return Object.defineProperty(_.prototype, "nodeType", {
        get: function() {
          return 9;
        },
        enumerable: !1,
        configurable: !0
      }), _;
    }(h)
  );
  X.Document = c;
  var b = (
    /** @class */
    function(p) {
      e(_, p);
      function _(S, C, R, D) {
        R === void 0 && (R = []), D === void 0 && (D = S === "script" ? i.ElementType.Script : S === "style" ? i.ElementType.Style : i.ElementType.Tag);
        var E = p.call(this, R) || this;
        return E.name = S, E.attribs = C, E.type = D, E;
      }
      return Object.defineProperty(_.prototype, "nodeType", {
        get: function() {
          return 1;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(_.prototype, "tagName", {
        // DOM Level 1 aliases
        /**
         * Same as {@link name}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.name;
        },
        set: function(S) {
          this.name = S;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(_.prototype, "attributes", {
        get: function() {
          var S = this;
          return Object.keys(this.attribs).map(function(C) {
            var R, D;
            return {
              name: C,
              value: S.attribs[C],
              namespace: (R = S["x-attribsNamespace"]) === null || R === void 0 ? void 0 : R[C],
              prefix: (D = S["x-attribsPrefix"]) === null || D === void 0 ? void 0 : D[C]
            };
          });
        },
        enumerable: !1,
        configurable: !0
      }), _;
    }(h)
  );
  X.Element = b;
  function u(p) {
    return (0, i.isTag)(p);
  }
  X.isTag = u;
  function r(p) {
    return p.type === i.ElementType.CDATA;
  }
  X.isCDATA = r;
  function g(p) {
    return p.type === i.ElementType.Text;
  }
  X.isText = g;
  function x(p) {
    return p.type === i.ElementType.Comment;
  }
  X.isComment = x;
  function m(p) {
    return p.type === i.ElementType.Directive;
  }
  X.isDirective = m;
  function f(p) {
    return p.type === i.ElementType.Root;
  }
  X.isDocument = f;
  function y(p) {
    return Object.prototype.hasOwnProperty.call(p, "children");
  }
  X.hasChildren = y;
  function w(p, _) {
    _ === void 0 && (_ = !1);
    var S;
    if (g(p))
      S = new s(p.data);
    else if (x(p))
      S = new l(p.data);
    else if (u(p)) {
      var C = _ ? A(p.children) : [], R = new b(p.name, t({}, p.attribs), C);
      C.forEach(function(I) {
        return I.parent = R;
      }), p.namespace != null && (R.namespace = p.namespace), p["x-attribsNamespace"] && (R["x-attribsNamespace"] = t({}, p["x-attribsNamespace"])), p["x-attribsPrefix"] && (R["x-attribsPrefix"] = t({}, p["x-attribsPrefix"])), S = R;
    } else if (r(p)) {
      var C = _ ? A(p.children) : [], D = new a(C);
      C.forEach(function(P) {
        return P.parent = D;
      }), S = D;
    } else if (f(p)) {
      var C = _ ? A(p.children) : [], E = new c(C);
      C.forEach(function(P) {
        return P.parent = E;
      }), p["x-mode"] && (E["x-mode"] = p["x-mode"]), S = E;
    } else if (m(p)) {
      var T = new d(p.name, p.data);
      p["x-name"] != null && (T["x-name"] = p["x-name"], T["x-publicId"] = p["x-publicId"], T["x-systemId"] = p["x-systemId"]), S = T;
    } else
      throw new Error("Not implemented yet: ".concat(p.type));
    return S.startIndex = p.startIndex, S.endIndex = p.endIndex, p.sourceCodeLocation != null && (S.sourceCodeLocation = p.sourceCodeLocation), S;
  }
  X.cloneNode = w;
  function A(p) {
    for (var _ = p.map(function(C) {
      return w(C, !0);
    }), S = 1; S < _.length; S++)
      _[S].prev = _[S - 1], _[S - 1].next = _[S];
    return _;
  }
  return X;
}
var Di;
function Cu() {
  return Di || (Di = 1, function(e) {
    var t = Mu && Mu.__createBinding || (Object.create ? function(d, h, a, c) {
      c === void 0 && (c = a);
      var b = Object.getOwnPropertyDescriptor(h, a);
      (!b || ("get" in b ? !h.__esModule : b.writable || b.configurable)) && (b = { enumerable: !0, get: function() {
        return h[a];
      } }), Object.defineProperty(d, c, b);
    } : function(d, h, a, c) {
      c === void 0 && (c = a), d[c] = h[a];
    }), i = Mu && Mu.__exportStar || function(d, h) {
      for (var a in d) a !== "default" && !Object.prototype.hasOwnProperty.call(h, a) && t(h, d, a);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.DomHandler = void 0;
    var n = /* @__PURE__ */ Et(), o = /* @__PURE__ */ Ri();
    i(/* @__PURE__ */ Ri(), e);
    var s = {
      withStartIndices: !1,
      withEndIndices: !1,
      xmlMode: !1
    }, l = (
      /** @class */
      function() {
        function d(h, a, c) {
          this.dom = [], this.root = new o.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof a == "function" && (c = a, a = s), typeof h == "object" && (a = h, h = void 0), this.callback = h ?? null, this.options = a ?? s, this.elementCB = c ?? null;
        }
        return d.prototype.onparserinit = function(h) {
          this.parser = h;
        }, d.prototype.onreset = function() {
          this.dom = [], this.root = new o.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
        }, d.prototype.onend = function() {
          this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
        }, d.prototype.onerror = function(h) {
          this.handleCallback(h);
        }, d.prototype.onclosetag = function() {
          this.lastNode = null;
          var h = this.tagStack.pop();
          this.options.withEndIndices && (h.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(h);
        }, d.prototype.onopentag = function(h, a) {
          var c = this.options.xmlMode ? n.ElementType.Tag : void 0, b = new o.Element(h, a, void 0, c);
          this.addNode(b), this.tagStack.push(b);
        }, d.prototype.ontext = function(h) {
          var a = this.lastNode;
          if (a && a.type === n.ElementType.Text)
            a.data += h, this.options.withEndIndices && (a.endIndex = this.parser.endIndex);
          else {
            var c = new o.Text(h);
            this.addNode(c), this.lastNode = c;
          }
        }, d.prototype.oncomment = function(h) {
          if (this.lastNode && this.lastNode.type === n.ElementType.Comment) {
            this.lastNode.data += h;
            return;
          }
          var a = new o.Comment(h);
          this.addNode(a), this.lastNode = a;
        }, d.prototype.oncommentend = function() {
          this.lastNode = null;
        }, d.prototype.oncdatastart = function() {
          var h = new o.Text(""), a = new o.CDATA([h]);
          this.addNode(a), h.parent = a, this.lastNode = h;
        }, d.prototype.oncdataend = function() {
          this.lastNode = null;
        }, d.prototype.onprocessinginstruction = function(h, a) {
          var c = new o.ProcessingInstruction(h, a);
          this.addNode(c);
        }, d.prototype.handleCallback = function(h) {
          if (typeof this.callback == "function")
            this.callback(h, this.dom);
          else if (h)
            throw h;
        }, d.prototype.addNode = function(h) {
          var a = this.tagStack[this.tagStack.length - 1], c = a.children[a.children.length - 1];
          this.options.withStartIndices && (h.startIndex = this.parser.startIndex), this.options.withEndIndices && (h.endIndex = this.parser.endIndex), a.children.push(h), c && (h.prev = c, c.next = h), h.parent = a, this.lastNode = null;
        }, d;
      }()
    );
    e.DomHandler = l, e.default = l;
  }(Mu)), Mu;
}
var Bu = {}, nu = {}, ke = {}, E0 = {}, Je = {}, Lt = {}, Li;
function Qc() {
  return Li || (Li = 1, Object.defineProperty(Lt, "__esModule", { value: !0 }), Lt.default = new Uint16Array(
    // prettier-ignore
    'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function(e) {
      return e.charCodeAt(0);
    })
  )), Lt;
}
var Pt = {}, Pi;
function Kc() {
  return Pi || (Pi = 1, Object.defineProperty(Pt, "__esModule", { value: !0 }), Pt.default = new Uint16Array(
    // prettier-ignore
    "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function(e) {
      return e.charCodeAt(0);
    })
  )), Pt;
}
var _0 = {}, ki;
function Mi() {
  return ki || (ki = 1, function(e) {
    var t;
    Object.defineProperty(e, "__esModule", { value: !0 }), e.replaceCodePoint = e.fromCodePoint = void 0;
    var i = /* @__PURE__ */ new Map([
      [0, 65533],
      // C1 Unicode control character reference replacements
      [128, 8364],
      [130, 8218],
      [131, 402],
      [132, 8222],
      [133, 8230],
      [134, 8224],
      [135, 8225],
      [136, 710],
      [137, 8240],
      [138, 352],
      [139, 8249],
      [140, 338],
      [142, 381],
      [145, 8216],
      [146, 8217],
      [147, 8220],
      [148, 8221],
      [149, 8226],
      [150, 8211],
      [151, 8212],
      [152, 732],
      [153, 8482],
      [154, 353],
      [155, 8250],
      [156, 339],
      [158, 382],
      [159, 376]
    ]);
    e.fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
    (t = String.fromCodePoint) !== null && t !== void 0 ? t : function(s) {
      var l = "";
      return s > 65535 && (s -= 65536, l += String.fromCharCode(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023), l += String.fromCharCode(s), l;
    };
    function n(s) {
      var l;
      return s >= 55296 && s <= 57343 || s > 1114111 ? 65533 : (l = i.get(s)) !== null && l !== void 0 ? l : s;
    }
    e.replaceCodePoint = n;
    function o(s) {
      return (0, e.fromCodePoint)(n(s));
    }
    e.default = o;
  }(_0)), _0;
}
var Bi;
function ji() {
  return Bi || (Bi = 1, function(e) {
    var t = Je && Je.__createBinding || (Object.create ? function(E, T, I, P) {
      P === void 0 && (P = I);
      var O = Object.getOwnPropertyDescriptor(T, I);
      (!O || ("get" in O ? !T.__esModule : O.writable || O.configurable)) && (O = { enumerable: !0, get: function() {
        return T[I];
      } }), Object.defineProperty(E, P, O);
    } : function(E, T, I, P) {
      P === void 0 && (P = I), E[P] = T[I];
    }), i = Je && Je.__setModuleDefault || (Object.create ? function(E, T) {
      Object.defineProperty(E, "default", { enumerable: !0, value: T });
    } : function(E, T) {
      E.default = T;
    }), n = Je && Je.__importStar || function(E) {
      if (E && E.__esModule) return E;
      var T = {};
      if (E != null) for (var I in E) I !== "default" && Object.prototype.hasOwnProperty.call(E, I) && t(T, E, I);
      return i(T, E), T;
    }, o = Je && Je.__importDefault || function(E) {
      return E && E.__esModule ? E : { default: E };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.decodeXML = e.decodeHTMLStrict = e.decodeHTMLAttribute = e.decodeHTML = e.determineBranch = e.EntityDecoder = e.DecodingMode = e.BinTrieFlags = e.fromCodePoint = e.replaceCodePoint = e.decodeCodePoint = e.xmlDecodeTree = e.htmlDecodeTree = void 0;
    var s = o(/* @__PURE__ */ Qc());
    e.htmlDecodeTree = s.default;
    var l = o(/* @__PURE__ */ Kc());
    e.xmlDecodeTree = l.default;
    var d = n(/* @__PURE__ */ Mi());
    e.decodeCodePoint = d.default;
    var h = /* @__PURE__ */ Mi();
    Object.defineProperty(e, "replaceCodePoint", { enumerable: !0, get: function() {
      return h.replaceCodePoint;
    } }), Object.defineProperty(e, "fromCodePoint", { enumerable: !0, get: function() {
      return h.fromCodePoint;
    } });
    var a;
    (function(E) {
      E[E.NUM = 35] = "NUM", E[E.SEMI = 59] = "SEMI", E[E.EQUALS = 61] = "EQUALS", E[E.ZERO = 48] = "ZERO", E[E.NINE = 57] = "NINE", E[E.LOWER_A = 97] = "LOWER_A", E[E.LOWER_F = 102] = "LOWER_F", E[E.LOWER_X = 120] = "LOWER_X", E[E.LOWER_Z = 122] = "LOWER_Z", E[E.UPPER_A = 65] = "UPPER_A", E[E.UPPER_F = 70] = "UPPER_F", E[E.UPPER_Z = 90] = "UPPER_Z";
    })(a || (a = {}));
    var c = 32, b;
    (function(E) {
      E[E.VALUE_LENGTH = 49152] = "VALUE_LENGTH", E[E.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", E[E.JUMP_TABLE = 127] = "JUMP_TABLE";
    })(b = e.BinTrieFlags || (e.BinTrieFlags = {}));
    function u(E) {
      return E >= a.ZERO && E <= a.NINE;
    }
    function r(E) {
      return E >= a.UPPER_A && E <= a.UPPER_F || E >= a.LOWER_A && E <= a.LOWER_F;
    }
    function g(E) {
      return E >= a.UPPER_A && E <= a.UPPER_Z || E >= a.LOWER_A && E <= a.LOWER_Z || u(E);
    }
    function x(E) {
      return E === a.EQUALS || g(E);
    }
    var m;
    (function(E) {
      E[E.EntityStart = 0] = "EntityStart", E[E.NumericStart = 1] = "NumericStart", E[E.NumericDecimal = 2] = "NumericDecimal", E[E.NumericHex = 3] = "NumericHex", E[E.NamedEntity = 4] = "NamedEntity";
    })(m || (m = {}));
    var f;
    (function(E) {
      E[E.Legacy = 0] = "Legacy", E[E.Strict = 1] = "Strict", E[E.Attribute = 2] = "Attribute";
    })(f = e.DecodingMode || (e.DecodingMode = {}));
    var y = (
      /** @class */
      function() {
        function E(T, I, P) {
          this.decodeTree = T, this.emitCodePoint = I, this.errors = P, this.state = m.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = f.Strict;
        }
        return E.prototype.startEntity = function(T) {
          this.decodeMode = T, this.state = m.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
        }, E.prototype.write = function(T, I) {
          switch (this.state) {
            case m.EntityStart:
              return T.charCodeAt(I) === a.NUM ? (this.state = m.NumericStart, this.consumed += 1, this.stateNumericStart(T, I + 1)) : (this.state = m.NamedEntity, this.stateNamedEntity(T, I));
            case m.NumericStart:
              return this.stateNumericStart(T, I);
            case m.NumericDecimal:
              return this.stateNumericDecimal(T, I);
            case m.NumericHex:
              return this.stateNumericHex(T, I);
            case m.NamedEntity:
              return this.stateNamedEntity(T, I);
          }
        }, E.prototype.stateNumericStart = function(T, I) {
          return I >= T.length ? -1 : (T.charCodeAt(I) | c) === a.LOWER_X ? (this.state = m.NumericHex, this.consumed += 1, this.stateNumericHex(T, I + 1)) : (this.state = m.NumericDecimal, this.stateNumericDecimal(T, I));
        }, E.prototype.addToNumericResult = function(T, I, P, O) {
          if (I !== P) {
            var j = P - I;
            this.result = this.result * Math.pow(O, j) + parseInt(T.substr(I, j), O), this.consumed += j;
          }
        }, E.prototype.stateNumericHex = function(T, I) {
          for (var P = I; I < T.length; ) {
            var O = T.charCodeAt(I);
            if (u(O) || r(O))
              I += 1;
            else
              return this.addToNumericResult(T, P, I, 16), this.emitNumericEntity(O, 3);
          }
          return this.addToNumericResult(T, P, I, 16), -1;
        }, E.prototype.stateNumericDecimal = function(T, I) {
          for (var P = I; I < T.length; ) {
            var O = T.charCodeAt(I);
            if (u(O))
              I += 1;
            else
              return this.addToNumericResult(T, P, I, 10), this.emitNumericEntity(O, 2);
          }
          return this.addToNumericResult(T, P, I, 10), -1;
        }, E.prototype.emitNumericEntity = function(T, I) {
          var P;
          if (this.consumed <= I)
            return (P = this.errors) === null || P === void 0 || P.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
          if (T === a.SEMI)
            this.consumed += 1;
          else if (this.decodeMode === f.Strict)
            return 0;
          return this.emitCodePoint((0, d.replaceCodePoint)(this.result), this.consumed), this.errors && (T !== a.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
        }, E.prototype.stateNamedEntity = function(T, I) {
          for (var P = this.decodeTree, O = P[this.treeIndex], j = (O & b.VALUE_LENGTH) >> 14; I < T.length; I++, this.excess++) {
            var F = T.charCodeAt(I);
            if (this.treeIndex = A(P, O, this.treeIndex + Math.max(1, j), F), this.treeIndex < 0)
              return this.result === 0 || // If we are parsing an attribute
              this.decodeMode === f.Attribute && // We shouldn't have consumed any characters after the entity,
              (j === 0 || // And there should be no invalid characters.
              x(F)) ? 0 : this.emitNotTerminatedNamedEntity();
            if (O = P[this.treeIndex], j = (O & b.VALUE_LENGTH) >> 14, j !== 0) {
              if (F === a.SEMI)
                return this.emitNamedEntityData(this.treeIndex, j, this.consumed + this.excess);
              this.decodeMode !== f.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
            }
          }
          return -1;
        }, E.prototype.emitNotTerminatedNamedEntity = function() {
          var T, I = this, P = I.result, O = I.decodeTree, j = (O[P] & b.VALUE_LENGTH) >> 14;
          return this.emitNamedEntityData(P, j, this.consumed), (T = this.errors) === null || T === void 0 || T.missingSemicolonAfterCharacterReference(), this.consumed;
        }, E.prototype.emitNamedEntityData = function(T, I, P) {
          var O = this.decodeTree;
          return this.emitCodePoint(I === 1 ? O[T] & ~b.VALUE_LENGTH : O[T + 1], P), I === 3 && this.emitCodePoint(O[T + 2], P), P;
        }, E.prototype.end = function() {
          var T;
          switch (this.state) {
            case m.NamedEntity:
              return this.result !== 0 && (this.decodeMode !== f.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
            // Otherwise, emit a numeric entity if we have one.
            case m.NumericDecimal:
              return this.emitNumericEntity(0, 2);
            case m.NumericHex:
              return this.emitNumericEntity(0, 3);
            case m.NumericStart:
              return (T = this.errors) === null || T === void 0 || T.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
            case m.EntityStart:
              return 0;
          }
        }, E;
      }()
    );
    e.EntityDecoder = y;
    function w(E) {
      var T = "", I = new y(E, function(P) {
        return T += (0, d.fromCodePoint)(P);
      });
      return function(O, j) {
        for (var F = 0, G = 0; (G = O.indexOf("&", G)) >= 0; ) {
          T += O.slice(F, G), I.startEntity(j);
          var Z = I.write(
            O,
            // Skip the "&"
            G + 1
          );
          if (Z < 0) {
            F = G + I.end();
            break;
          }
          F = G + Z, G = Z === 0 ? F + 1 : F;
        }
        var W = T + O.slice(F);
        return T = "", W;
      };
    }
    function A(E, T, I, P) {
      var O = (T & b.BRANCH_LENGTH) >> 7, j = T & b.JUMP_TABLE;
      if (O === 0)
        return j !== 0 && P === j ? I : -1;
      if (j) {
        var F = P - j;
        return F < 0 || F >= O ? -1 : E[I + F] - 1;
      }
      for (var G = I, Z = G + O - 1; G <= Z; ) {
        var W = G + Z >>> 1, ve = E[W];
        if (ve < P)
          G = W + 1;
        else if (ve > P)
          Z = W - 1;
        else
          return E[W + O];
      }
      return -1;
    }
    e.determineBranch = A;
    var p = w(s.default), _ = w(l.default);
    function S(E, T) {
      return T === void 0 && (T = f.Legacy), p(E, T);
    }
    e.decodeHTML = S;
    function C(E) {
      return p(E, f.Attribute);
    }
    e.decodeHTMLAttribute = C;
    function R(E) {
      return p(E, f.Strict);
    }
    e.decodeHTMLStrict = R;
    function D(E) {
      return _(E, f.Strict);
    }
    e.decodeXML = D;
  }(Je)), Je;
}
var hu = {}, kt = {}, Ui;
function eo() {
  if (Ui) return kt;
  Ui = 1, Object.defineProperty(kt, "__esModule", { value: !0 });
  function e(t) {
    for (var i = 1; i < t.length; i++)
      t[i][0] += t[i - 1][0] + 1;
    return t;
  }
  return kt.default = new Map(/* @__PURE__ */ e([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(/* @__PURE__ */ e([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(/* @__PURE__ */ e([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(/* @__PURE__ */ e([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]])), kt;
}
var A0 = {}, Hi;
function fr() {
  return Hi || (Hi = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.escapeText = e.escapeAttribute = e.escapeUTF8 = e.escape = e.encodeXML = e.getCodePoint = e.xmlReplacer = void 0, e.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
    var t = /* @__PURE__ */ new Map([
      [34, "&quot;"],
      [38, "&amp;"],
      [39, "&apos;"],
      [60, "&lt;"],
      [62, "&gt;"]
    ]);
    e.getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    String.prototype.codePointAt != null ? function(o, s) {
      return o.codePointAt(s);
    } : (
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      function(o, s) {
        return (o.charCodeAt(s) & 64512) === 55296 ? (o.charCodeAt(s) - 55296) * 1024 + o.charCodeAt(s + 1) - 56320 + 65536 : o.charCodeAt(s);
      }
    );
    function i(o) {
      for (var s = "", l = 0, d; (d = e.xmlReplacer.exec(o)) !== null; ) {
        var h = d.index, a = o.charCodeAt(h), c = t.get(a);
        c !== void 0 ? (s += o.substring(l, h) + c, l = h + 1) : (s += "".concat(o.substring(l, h), "&#x").concat((0, e.getCodePoint)(o, h).toString(16), ";"), l = e.xmlReplacer.lastIndex += +((a & 64512) === 55296));
      }
      return s + o.substr(l);
    }
    e.encodeXML = i, e.escape = i;
    function n(o, s) {
      return function(d) {
        for (var h, a = 0, c = ""; h = o.exec(d); )
          a !== h.index && (c += d.substring(a, h.index)), c += s.get(h[0].charCodeAt(0)), a = h.index + 1;
        return c + d.substring(a);
      };
    }
    e.escapeUTF8 = n(/[&<>'"]/g, t), e.escapeAttribute = n(/["&\u00A0]/g, /* @__PURE__ */ new Map([
      [34, "&quot;"],
      [38, "&amp;"],
      [160, "&nbsp;"]
    ])), e.escapeText = n(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
      [38, "&amp;"],
      [60, "&lt;"],
      [62, "&gt;"],
      [160, "&nbsp;"]
    ]));
  }(A0)), A0;
}
var Fi;
function Vi() {
  if (Fi) return hu;
  Fi = 1;
  var e = hu && hu.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(hu, "__esModule", { value: !0 }), hu.encodeNonAsciiHTML = hu.encodeHTML = void 0;
  var t = e(/* @__PURE__ */ eo()), i = /* @__PURE__ */ fr(), n = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
  function o(d) {
    return l(n, d);
  }
  hu.encodeHTML = o;
  function s(d) {
    return l(i.xmlReplacer, d);
  }
  hu.encodeNonAsciiHTML = s;
  function l(d, h) {
    for (var a = "", c = 0, b; (b = d.exec(h)) !== null; ) {
      var u = b.index;
      a += h.substring(c, u);
      var r = h.charCodeAt(u), g = t.default.get(r);
      if (typeof g == "object") {
        if (u + 1 < h.length) {
          var x = h.charCodeAt(u + 1), m = typeof g.n == "number" ? g.n === x ? g.o : void 0 : g.n.get(x);
          if (m !== void 0) {
            a += m, c = d.lastIndex += 1;
            continue;
          }
        }
        g = g.v;
      }
      if (g !== void 0)
        a += g, c = u + 1;
      else {
        var f = (0, i.getCodePoint)(h, u);
        a += "&#x".concat(f.toString(16), ";"), c = d.lastIndex += +(f !== r);
      }
    }
    return a + h.substr(c);
  }
  return hu;
}
var $i;
function uo() {
  return $i || ($i = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.decodeXMLStrict = e.decodeHTML5Strict = e.decodeHTML4Strict = e.decodeHTML5 = e.decodeHTML4 = e.decodeHTMLAttribute = e.decodeHTMLStrict = e.decodeHTML = e.decodeXML = e.DecodingMode = e.EntityDecoder = e.encodeHTML5 = e.encodeHTML4 = e.encodeNonAsciiHTML = e.encodeHTML = e.escapeText = e.escapeAttribute = e.escapeUTF8 = e.escape = e.encodeXML = e.encode = e.decodeStrict = e.decode = e.EncodingMode = e.EntityLevel = void 0;
    var t = /* @__PURE__ */ ji(), i = /* @__PURE__ */ Vi(), n = /* @__PURE__ */ fr(), o;
    (function(u) {
      u[u.XML = 0] = "XML", u[u.HTML = 1] = "HTML";
    })(o = e.EntityLevel || (e.EntityLevel = {}));
    var s;
    (function(u) {
      u[u.UTF8 = 0] = "UTF8", u[u.ASCII = 1] = "ASCII", u[u.Extensive = 2] = "Extensive", u[u.Attribute = 3] = "Attribute", u[u.Text = 4] = "Text";
    })(s = e.EncodingMode || (e.EncodingMode = {}));
    function l(u, r) {
      r === void 0 && (r = o.XML);
      var g = typeof r == "number" ? r : r.level;
      if (g === o.HTML) {
        var x = typeof r == "object" ? r.mode : void 0;
        return (0, t.decodeHTML)(u, x);
      }
      return (0, t.decodeXML)(u);
    }
    e.decode = l;
    function d(u, r) {
      var g;
      r === void 0 && (r = o.XML);
      var x = typeof r == "number" ? { level: r } : r;
      return (g = x.mode) !== null && g !== void 0 || (x.mode = t.DecodingMode.Strict), l(u, x);
    }
    e.decodeStrict = d;
    function h(u, r) {
      r === void 0 && (r = o.XML);
      var g = typeof r == "number" ? { level: r } : r;
      return g.mode === s.UTF8 ? (0, n.escapeUTF8)(u) : g.mode === s.Attribute ? (0, n.escapeAttribute)(u) : g.mode === s.Text ? (0, n.escapeText)(u) : g.level === o.HTML ? g.mode === s.ASCII ? (0, i.encodeNonAsciiHTML)(u) : (0, i.encodeHTML)(u) : (0, n.encodeXML)(u);
    }
    e.encode = h;
    var a = /* @__PURE__ */ fr();
    Object.defineProperty(e, "encodeXML", { enumerable: !0, get: function() {
      return a.encodeXML;
    } }), Object.defineProperty(e, "escape", { enumerable: !0, get: function() {
      return a.escape;
    } }), Object.defineProperty(e, "escapeUTF8", { enumerable: !0, get: function() {
      return a.escapeUTF8;
    } }), Object.defineProperty(e, "escapeAttribute", { enumerable: !0, get: function() {
      return a.escapeAttribute;
    } }), Object.defineProperty(e, "escapeText", { enumerable: !0, get: function() {
      return a.escapeText;
    } });
    var c = /* @__PURE__ */ Vi();
    Object.defineProperty(e, "encodeHTML", { enumerable: !0, get: function() {
      return c.encodeHTML;
    } }), Object.defineProperty(e, "encodeNonAsciiHTML", { enumerable: !0, get: function() {
      return c.encodeNonAsciiHTML;
    } }), Object.defineProperty(e, "encodeHTML4", { enumerable: !0, get: function() {
      return c.encodeHTML;
    } }), Object.defineProperty(e, "encodeHTML5", { enumerable: !0, get: function() {
      return c.encodeHTML;
    } });
    var b = /* @__PURE__ */ ji();
    Object.defineProperty(e, "EntityDecoder", { enumerable: !0, get: function() {
      return b.EntityDecoder;
    } }), Object.defineProperty(e, "DecodingMode", { enumerable: !0, get: function() {
      return b.DecodingMode;
    } }), Object.defineProperty(e, "decodeXML", { enumerable: !0, get: function() {
      return b.decodeXML;
    } }), Object.defineProperty(e, "decodeHTML", { enumerable: !0, get: function() {
      return b.decodeHTML;
    } }), Object.defineProperty(e, "decodeHTMLStrict", { enumerable: !0, get: function() {
      return b.decodeHTMLStrict;
    } }), Object.defineProperty(e, "decodeHTMLAttribute", { enumerable: !0, get: function() {
      return b.decodeHTMLAttribute;
    } }), Object.defineProperty(e, "decodeHTML4", { enumerable: !0, get: function() {
      return b.decodeHTML;
    } }), Object.defineProperty(e, "decodeHTML5", { enumerable: !0, get: function() {
      return b.decodeHTML;
    } }), Object.defineProperty(e, "decodeHTML4Strict", { enumerable: !0, get: function() {
      return b.decodeHTMLStrict;
    } }), Object.defineProperty(e, "decodeHTML5Strict", { enumerable: !0, get: function() {
      return b.decodeHTMLStrict;
    } }), Object.defineProperty(e, "decodeXMLStrict", { enumerable: !0, get: function() {
      return b.decodeXML;
    } });
  }(E0)), E0;
}
var ju = {}, Gi;
function to() {
  return Gi || (Gi = 1, Object.defineProperty(ju, "__esModule", { value: !0 }), ju.attributeNames = ju.elementNames = void 0, ju.elementNames = new Map([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "textPath"
  ].map(function(e) {
    return [e.toLowerCase(), e];
  })), ju.attributeNames = new Map([
    "definitionURL",
    "attributeName",
    "attributeType",
    "baseFrequency",
    "baseProfile",
    "calcMode",
    "clipPathUnits",
    "diffuseConstant",
    "edgeMode",
    "filterUnits",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "kernelMatrix",
    "kernelUnitLength",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "limitingConeAngle",
    "markerHeight",
    "markerUnits",
    "markerWidth",
    "maskContentUnits",
    "maskUnits",
    "numOctaves",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "refX",
    "refY",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "specularConstant",
    "specularExponent",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stitchTiles",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textLength",
    "viewBox",
    "viewTarget",
    "xChannelSelector",
    "yChannelSelector",
    "zoomAndPan"
  ].map(function(e) {
    return [e.toLowerCase(), e];
  }))), ju;
}
var zi;
function ro() {
  if (zi) return ke;
  zi = 1;
  var e = ke && ke.__assign || function() {
    return e = Object.assign || function(A) {
      for (var p, _ = 1, S = arguments.length; _ < S; _++) {
        p = arguments[_];
        for (var C in p) Object.prototype.hasOwnProperty.call(p, C) && (A[C] = p[C]);
      }
      return A;
    }, e.apply(this, arguments);
  }, t = ke && ke.__createBinding || (Object.create ? function(A, p, _, S) {
    S === void 0 && (S = _);
    var C = Object.getOwnPropertyDescriptor(p, _);
    (!C || ("get" in C ? !p.__esModule : C.writable || C.configurable)) && (C = { enumerable: !0, get: function() {
      return p[_];
    } }), Object.defineProperty(A, S, C);
  } : function(A, p, _, S) {
    S === void 0 && (S = _), A[S] = p[_];
  }), i = ke && ke.__setModuleDefault || (Object.create ? function(A, p) {
    Object.defineProperty(A, "default", { enumerable: !0, value: p });
  } : function(A, p) {
    A.default = p;
  }), n = ke && ke.__importStar || function(A) {
    if (A && A.__esModule) return A;
    var p = {};
    if (A != null) for (var _ in A) _ !== "default" && Object.prototype.hasOwnProperty.call(A, _) && t(p, A, _);
    return i(p, A), p;
  };
  Object.defineProperty(ke, "__esModule", { value: !0 }), ke.render = void 0;
  var o = n(/* @__PURE__ */ Et()), s = /* @__PURE__ */ uo(), l = /* @__PURE__ */ to(), d = /* @__PURE__ */ new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript"
  ]);
  function h(A) {
    return A.replace(/"/g, "&quot;");
  }
  function a(A, p) {
    var _;
    if (A) {
      var S = ((_ = p.encodeEntities) !== null && _ !== void 0 ? _ : p.decodeEntities) === !1 ? h : p.xmlMode || p.encodeEntities !== "utf8" ? s.encodeXML : s.escapeAttribute;
      return Object.keys(A).map(function(C) {
        var R, D, E = (R = A[C]) !== null && R !== void 0 ? R : "";
        return p.xmlMode === "foreign" && (C = (D = l.attributeNames.get(C)) !== null && D !== void 0 ? D : C), !p.emptyAttrs && !p.xmlMode && E === "" ? C : "".concat(C, '="').concat(S(E), '"');
      }).join(" ");
    }
  }
  var c = /* @__PURE__ */ new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ]);
  function b(A, p) {
    p === void 0 && (p = {});
    for (var _ = ("length" in A) ? A : [A], S = "", C = 0; C < _.length; C++)
      S += u(_[C], p);
    return S;
  }
  ke.render = b, ke.default = b;
  function u(A, p) {
    switch (A.type) {
      case o.Root:
        return b(A.children, p);
      // @ts-expect-error We don't use `Doctype` yet
      case o.Doctype:
      case o.Directive:
        return m(A);
      case o.Comment:
        return w(A);
      case o.CDATA:
        return y(A);
      case o.Script:
      case o.Style:
      case o.Tag:
        return x(A, p);
      case o.Text:
        return f(A, p);
    }
  }
  var r = /* @__PURE__ */ new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title"
  ]), g = /* @__PURE__ */ new Set(["svg", "math"]);
  function x(A, p) {
    var _;
    p.xmlMode === "foreign" && (A.name = (_ = l.elementNames.get(A.name)) !== null && _ !== void 0 ? _ : A.name, A.parent && r.has(A.parent.name) && (p = e(e({}, p), { xmlMode: !1 }))), !p.xmlMode && g.has(A.name) && (p = e(e({}, p), { xmlMode: "foreign" }));
    var S = "<".concat(A.name), C = a(A.attribs, p);
    return C && (S += " ".concat(C)), A.children.length === 0 && (p.xmlMode ? (
      // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
      p.selfClosingTags !== !1
    ) : (
      // User explicitly asked for self-closing tags, even in HTML mode
      p.selfClosingTags && c.has(A.name)
    )) ? (p.xmlMode || (S += " "), S += "/>") : (S += ">", A.children.length > 0 && (S += b(A.children, p)), (p.xmlMode || !c.has(A.name)) && (S += "</".concat(A.name, ">"))), S;
  }
  function m(A) {
    return "<".concat(A.data, ">");
  }
  function f(A, p) {
    var _, S = A.data || "";
    return ((_ = p.encodeEntities) !== null && _ !== void 0 ? _ : p.decodeEntities) !== !1 && !(!p.xmlMode && A.parent && d.has(A.parent.name)) && (S = p.xmlMode || p.encodeEntities !== "utf8" ? (0, s.encodeXML)(S) : (0, s.escapeText)(S)), S;
  }
  function y(A) {
    return "<![CDATA[".concat(A.children[0].data, "]]>");
  }
  function w(A) {
    return "<!--".concat(A.data, "-->");
  }
  return ke;
}
var Wi;
function Ra() {
  if (Wi) return nu;
  Wi = 1;
  var e = nu && nu.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(nu, "__esModule", { value: !0 }), nu.getOuterHTML = o, nu.getInnerHTML = s, nu.getText = l, nu.textContent = d, nu.innerText = h;
  var t = /* @__PURE__ */ Cu(), i = e(/* @__PURE__ */ ro()), n = /* @__PURE__ */ Et();
  function o(a, c) {
    return (0, i.default)(a, c);
  }
  function s(a, c) {
    return (0, t.hasChildren)(a) ? a.children.map(function(b) {
      return o(b, c);
    }).join("") : "";
  }
  function l(a) {
    return Array.isArray(a) ? a.map(l).join("") : (0, t.isTag)(a) ? a.name === "br" ? `
` : l(a.children) : (0, t.isCDATA)(a) ? l(a.children) : (0, t.isText)(a) ? a.data : "";
  }
  function d(a) {
    return Array.isArray(a) ? a.map(d).join("") : (0, t.hasChildren)(a) && !(0, t.isComment)(a) ? d(a.children) : (0, t.isText)(a) ? a.data : "";
  }
  function h(a) {
    return Array.isArray(a) ? a.map(h).join("") : (0, t.hasChildren)(a) && (a.type === n.ElementType.Tag || (0, t.isCDATA)(a)) ? h(a.children) : (0, t.isText)(a) ? a.data : "";
  }
  return nu;
}
var Ye = {}, Zi;
function io() {
  if (Zi) return Ye;
  Zi = 1, Object.defineProperty(Ye, "__esModule", { value: !0 }), Ye.getChildren = t, Ye.getParent = i, Ye.getSiblings = n, Ye.getAttributeValue = o, Ye.hasAttrib = s, Ye.getName = l, Ye.nextElementSibling = d, Ye.prevElementSibling = h;
  var e = /* @__PURE__ */ Cu();
  function t(a) {
    return (0, e.hasChildren)(a) ? a.children : [];
  }
  function i(a) {
    return a.parent || null;
  }
  function n(a) {
    var c, b, u = i(a);
    if (u != null)
      return t(u);
    for (var r = [a], g = a.prev, x = a.next; g != null; )
      r.unshift(g), c = g, g = c.prev;
    for (; x != null; )
      r.push(x), b = x, x = b.next;
    return r;
  }
  function o(a, c) {
    var b;
    return (b = a.attribs) === null || b === void 0 ? void 0 : b[c];
  }
  function s(a, c) {
    return a.attribs != null && Object.prototype.hasOwnProperty.call(a.attribs, c) && a.attribs[c] != null;
  }
  function l(a) {
    return a.name;
  }
  function d(a) {
    for (var c, b = a.next; b !== null && !(0, e.isTag)(b); )
      c = b, b = c.next;
    return b;
  }
  function h(a) {
    for (var c, b = a.prev; b !== null && !(0, e.isTag)(b); )
      c = b, b = c.prev;
    return b;
  }
  return Ye;
}
var pu = {}, Xi;
function no() {
  if (Xi) return pu;
  Xi = 1, Object.defineProperty(pu, "__esModule", { value: !0 }), pu.removeElement = e, pu.replaceElement = t, pu.appendChild = i, pu.append = n, pu.prependChild = o, pu.prepend = s;
  function e(l) {
    if (l.prev && (l.prev.next = l.next), l.next && (l.next.prev = l.prev), l.parent) {
      var d = l.parent.children, h = d.lastIndexOf(l);
      h >= 0 && d.splice(h, 1);
    }
    l.next = null, l.prev = null, l.parent = null;
  }
  function t(l, d) {
    var h = d.prev = l.prev;
    h && (h.next = d);
    var a = d.next = l.next;
    a && (a.prev = d);
    var c = d.parent = l.parent;
    if (c) {
      var b = c.children;
      b[b.lastIndexOf(l)] = d, l.parent = null;
    }
  }
  function i(l, d) {
    if (e(d), d.next = null, d.parent = l, l.children.push(d) > 1) {
      var h = l.children[l.children.length - 2];
      h.next = d, d.prev = h;
    } else
      d.prev = null;
  }
  function n(l, d) {
    e(d);
    var h = l.parent, a = l.next;
    if (d.next = a, d.prev = l, l.next = d, d.parent = h, a) {
      if (a.prev = d, h) {
        var c = h.children;
        c.splice(c.lastIndexOf(a), 0, d);
      }
    } else h && h.children.push(d);
  }
  function o(l, d) {
    if (e(d), d.parent = l, d.prev = null, l.children.unshift(d) !== 1) {
      var h = l.children[1];
      h.prev = d, d.next = h;
    } else
      d.next = null;
  }
  function s(l, d) {
    e(d);
    var h = l.parent;
    if (h) {
      var a = h.children;
      a.splice(a.indexOf(l), 0, d);
    }
    l.prev && (l.prev.next = d), d.parent = h, d.prev = l.prev, d.next = l, l.prev = d;
  }
  return pu;
}
var gu = {}, Ji;
function Da() {
  if (Ji) return gu;
  Ji = 1, Object.defineProperty(gu, "__esModule", { value: !0 }), gu.filter = t, gu.find = i, gu.findOneChild = n, gu.findOne = o, gu.existsOne = s, gu.findAll = l;
  var e = /* @__PURE__ */ Cu();
  function t(d, h, a, c) {
    return a === void 0 && (a = !0), c === void 0 && (c = 1 / 0), i(d, Array.isArray(h) ? h : [h], a, c);
  }
  function i(d, h, a, c) {
    for (var b = [], u = [Array.isArray(h) ? h : [h]], r = [0]; ; ) {
      if (r[0] >= u[0].length) {
        if (r.length === 1)
          return b;
        u.shift(), r.shift();
        continue;
      }
      var g = u[0][r[0]++];
      if (d(g) && (b.push(g), --c <= 0))
        return b;
      a && (0, e.hasChildren)(g) && g.children.length > 0 && (r.unshift(0), u.unshift(g.children));
    }
  }
  function n(d, h) {
    return h.find(d);
  }
  function o(d, h, a) {
    a === void 0 && (a = !0);
    for (var c = Array.isArray(h) ? h : [h], b = 0; b < c.length; b++) {
      var u = c[b];
      if ((0, e.isTag)(u) && d(u))
        return u;
      if (a && (0, e.hasChildren)(u) && u.children.length > 0) {
        var r = o(d, u.children, !0);
        if (r)
          return r;
      }
    }
    return null;
  }
  function s(d, h) {
    return (Array.isArray(h) ? h : [h]).some(function(a) {
      return (0, e.isTag)(a) && d(a) || (0, e.hasChildren)(a) && s(d, a.children);
    });
  }
  function l(d, h) {
    for (var a = [], c = [Array.isArray(h) ? h : [h]], b = [0]; ; ) {
      if (b[0] >= c[0].length) {
        if (c.length === 1)
          return a;
        c.shift(), b.shift();
        continue;
      }
      var u = c[0][b[0]++];
      (0, e.isTag)(u) && d(u) && a.push(u), (0, e.hasChildren)(u) && u.children.length > 0 && (b.unshift(0), c.unshift(u.children));
    }
  }
  return gu;
}
var mu = {}, Yi;
function La() {
  if (Yi) return mu;
  Yi = 1, Object.defineProperty(mu, "__esModule", { value: !0 }), mu.testElement = l, mu.getElements = d, mu.getElementById = h, mu.getElementsByTagName = a, mu.getElementsByClassName = c, mu.getElementsByTagType = b;
  var e = /* @__PURE__ */ Cu(), t = /* @__PURE__ */ Da(), i = {
    tag_name: function(u) {
      return typeof u == "function" ? function(r) {
        return (0, e.isTag)(r) && u(r.name);
      } : u === "*" ? e.isTag : function(r) {
        return (0, e.isTag)(r) && r.name === u;
      };
    },
    tag_type: function(u) {
      return typeof u == "function" ? function(r) {
        return u(r.type);
      } : function(r) {
        return r.type === u;
      };
    },
    tag_contains: function(u) {
      return typeof u == "function" ? function(r) {
        return (0, e.isText)(r) && u(r.data);
      } : function(r) {
        return (0, e.isText)(r) && r.data === u;
      };
    }
  };
  function n(u, r) {
    return typeof r == "function" ? function(g) {
      return (0, e.isTag)(g) && r(g.attribs[u]);
    } : function(g) {
      return (0, e.isTag)(g) && g.attribs[u] === r;
    };
  }
  function o(u, r) {
    return function(g) {
      return u(g) || r(g);
    };
  }
  function s(u) {
    var r = Object.keys(u).map(function(g) {
      var x = u[g];
      return Object.prototype.hasOwnProperty.call(i, g) ? i[g](x) : n(g, x);
    });
    return r.length === 0 ? null : r.reduce(o);
  }
  function l(u, r) {
    var g = s(u);
    return g ? g(r) : !0;
  }
  function d(u, r, g, x) {
    x === void 0 && (x = 1 / 0);
    var m = s(u);
    return m ? (0, t.filter)(m, r, g, x) : [];
  }
  function h(u, r, g) {
    return g === void 0 && (g = !0), Array.isArray(r) || (r = [r]), (0, t.findOne)(n("id", u), r, g);
  }
  function a(u, r, g, x) {
    return g === void 0 && (g = !0), x === void 0 && (x = 1 / 0), (0, t.filter)(i.tag_name(u), r, g, x);
  }
  function c(u, r, g, x) {
    return g === void 0 && (g = !0), x === void 0 && (x = 1 / 0), (0, t.filter)(n("class", u), r, g, x);
  }
  function b(u, r, g, x) {
    return g === void 0 && (g = !0), x === void 0 && (x = 1 / 0), (0, t.filter)(i.tag_type(u), r, g, x);
  }
  return mu;
}
var Eu = {}, Qi;
function ao() {
  if (Qi) return Eu;
  Qi = 1, Object.defineProperty(Eu, "__esModule", { value: !0 }), Eu.DocumentPosition = void 0, Eu.removeSubsets = t, Eu.compareDocumentPosition = n, Eu.uniqueSort = o;
  var e = /* @__PURE__ */ Cu();
  function t(s) {
    for (var l = s.length; --l >= 0; ) {
      var d = s[l];
      if (l > 0 && s.lastIndexOf(d, l - 1) >= 0) {
        s.splice(l, 1);
        continue;
      }
      for (var h = d.parent; h; h = h.parent)
        if (s.includes(h)) {
          s.splice(l, 1);
          break;
        }
    }
    return s;
  }
  var i;
  (function(s) {
    s[s.DISCONNECTED = 1] = "DISCONNECTED", s[s.PRECEDING = 2] = "PRECEDING", s[s.FOLLOWING = 4] = "FOLLOWING", s[s.CONTAINS = 8] = "CONTAINS", s[s.CONTAINED_BY = 16] = "CONTAINED_BY";
  })(i || (Eu.DocumentPosition = i = {}));
  function n(s, l) {
    var d = [], h = [];
    if (s === l)
      return 0;
    for (var a = (0, e.hasChildren)(s) ? s : s.parent; a; )
      d.unshift(a), a = a.parent;
    for (a = (0, e.hasChildren)(l) ? l : l.parent; a; )
      h.unshift(a), a = a.parent;
    for (var c = Math.min(d.length, h.length), b = 0; b < c && d[b] === h[b]; )
      b++;
    if (b === 0)
      return i.DISCONNECTED;
    var u = d[b - 1], r = u.children, g = d[b], x = h[b];
    return r.indexOf(g) > r.indexOf(x) ? u === l ? i.FOLLOWING | i.CONTAINED_BY : i.FOLLOWING : u === s ? i.PRECEDING | i.CONTAINS : i.PRECEDING;
  }
  function o(s) {
    return s = s.filter(function(l, d, h) {
      return !h.includes(l, d + 1);
    }), s.sort(function(l, d) {
      var h = n(l, d);
      return h & i.PRECEDING ? -1 : h & i.FOLLOWING ? 1 : 0;
    }), s;
  }
  return Eu;
}
var Mt = {}, Ki;
function so() {
  if (Ki) return Mt;
  Ki = 1, Object.defineProperty(Mt, "__esModule", { value: !0 }), Mt.getFeed = i;
  var e = /* @__PURE__ */ Ra(), t = /* @__PURE__ */ La();
  function i(u) {
    var r = h(b, u);
    return r ? r.name === "feed" ? n(r) : o(r) : null;
  }
  function n(u) {
    var r, g = u.children, x = {
      type: "atom",
      items: (0, t.getElementsByTagName)("entry", g).map(function(y) {
        var w, A = y.children, p = { media: d(A) };
        c(p, "id", "id", A), c(p, "title", "title", A);
        var _ = (w = h("link", A)) === null || w === void 0 ? void 0 : w.attribs.href;
        _ && (p.link = _);
        var S = a("summary", A) || a("content", A);
        S && (p.description = S);
        var C = a("updated", A);
        return C && (p.pubDate = new Date(C)), p;
      })
    };
    c(x, "id", "id", g), c(x, "title", "title", g);
    var m = (r = h("link", g)) === null || r === void 0 ? void 0 : r.attribs.href;
    m && (x.link = m), c(x, "description", "subtitle", g);
    var f = a("updated", g);
    return f && (x.updated = new Date(f)), c(x, "author", "email", g, !0), x;
  }
  function o(u) {
    var r, g, x = (g = (r = h("channel", u.children)) === null || r === void 0 ? void 0 : r.children) !== null && g !== void 0 ? g : [], m = {
      type: u.name.substr(0, 3),
      id: "",
      items: (0, t.getElementsByTagName)("item", u.children).map(function(y) {
        var w = y.children, A = { media: d(w) };
        c(A, "id", "guid", w), c(A, "title", "title", w), c(A, "link", "link", w), c(A, "description", "description", w);
        var p = a("pubDate", w) || a("dc:date", w);
        return p && (A.pubDate = new Date(p)), A;
      })
    };
    c(m, "title", "title", x), c(m, "link", "link", x), c(m, "description", "description", x);
    var f = a("lastBuildDate", x);
    return f && (m.updated = new Date(f)), c(m, "author", "managingEditor", x, !0), m;
  }
  var s = ["url", "type", "lang"], l = [
    "fileSize",
    "bitrate",
    "framerate",
    "samplingrate",
    "channels",
    "duration",
    "height",
    "width"
  ];
  function d(u) {
    return (0, t.getElementsByTagName)("media:content", u).map(function(r) {
      for (var g = r.attribs, x = {
        medium: g.medium,
        isDefault: !!g.isDefault
      }, m = 0, f = s; m < f.length; m++) {
        var y = f[m];
        g[y] && (x[y] = g[y]);
      }
      for (var w = 0, A = l; w < A.length; w++) {
        var y = A[w];
        g[y] && (x[y] = parseInt(g[y], 10));
      }
      return g.expression && (x.expression = g.expression), x;
    });
  }
  function h(u, r) {
    return (0, t.getElementsByTagName)(u, r, !0, 1)[0];
  }
  function a(u, r, g) {
    return g === void 0 && (g = !1), (0, e.textContent)((0, t.getElementsByTagName)(u, r, g, 1)).trim();
  }
  function c(u, r, g, x, m) {
    m === void 0 && (m = !1);
    var f = a(g, x, m);
    f && (u[r] = f);
  }
  function b(u) {
    return u === "rss" || u === "feed" || u === "rdf:RDF";
  }
  return Mt;
}
var en;
function S0() {
  return en || (en = 1, function(e) {
    var t = Bu && Bu.__createBinding || (Object.create ? function(o, s, l, d) {
      d === void 0 && (d = l);
      var h = Object.getOwnPropertyDescriptor(s, l);
      (!h || ("get" in h ? !s.__esModule : h.writable || h.configurable)) && (h = { enumerable: !0, get: function() {
        return s[l];
      } }), Object.defineProperty(o, d, h);
    } : function(o, s, l, d) {
      d === void 0 && (d = l), o[d] = s[l];
    }), i = Bu && Bu.__exportStar || function(o, s) {
      for (var l in o) l !== "default" && !Object.prototype.hasOwnProperty.call(s, l) && t(s, o, l);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.hasChildren = e.isDocument = e.isComment = e.isText = e.isCDATA = e.isTag = void 0, i(/* @__PURE__ */ Ra(), e), i(/* @__PURE__ */ io(), e), i(/* @__PURE__ */ no(), e), i(/* @__PURE__ */ Da(), e), i(/* @__PURE__ */ La(), e), i(/* @__PURE__ */ ao(), e), i(/* @__PURE__ */ so(), e);
    var n = /* @__PURE__ */ Cu();
    Object.defineProperty(e, "isTag", { enumerable: !0, get: function() {
      return n.isTag;
    } }), Object.defineProperty(e, "isCDATA", { enumerable: !0, get: function() {
      return n.isCDATA;
    } }), Object.defineProperty(e, "isText", { enumerable: !0, get: function() {
      return n.isText;
    } }), Object.defineProperty(e, "isComment", { enumerable: !0, get: function() {
      return n.isComment;
    } }), Object.defineProperty(e, "isDocument", { enumerable: !0, get: function() {
      return n.isDocument;
    } }), Object.defineProperty(e, "hasChildren", { enumerable: !0, get: function() {
      return n.hasChildren;
    } });
  }(Bu)), Bu;
}
var un;
function co() {
  return un || (un = 1, function(e) {
    var t = We && We.__createBinding || (Object.create ? function(f, y, w, A) {
      A === void 0 && (A = w);
      var p = Object.getOwnPropertyDescriptor(y, w);
      (!p || ("get" in p ? !y.__esModule : p.writable || p.configurable)) && (p = { enumerable: !0, get: function() {
        return y[w];
      } }), Object.defineProperty(f, A, p);
    } : function(f, y, w, A) {
      A === void 0 && (A = w), f[A] = y[w];
    }), i = We && We.__setModuleDefault || (Object.create ? function(f, y) {
      Object.defineProperty(f, "default", { enumerable: !0, value: y });
    } : function(f, y) {
      f.default = y;
    }), n = We && We.__importStar || function(f) {
      if (f && f.__esModule) return f;
      var y = {};
      if (f != null) for (var w in f) w !== "default" && Object.prototype.hasOwnProperty.call(f, w) && t(y, f, w);
      return i(y, f), y;
    }, o = We && We.__importDefault || function(f) {
      return f && f.__esModule ? f : { default: f };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.DomUtils = e.parseFeed = e.getFeed = e.ElementType = e.Tokenizer = e.createDomStream = e.parseDOM = e.parseDocument = e.DefaultHandler = e.DomHandler = e.Parser = void 0;
    var s = /* @__PURE__ */ Ii(), l = /* @__PURE__ */ Ii();
    Object.defineProperty(e, "Parser", { enumerable: !0, get: function() {
      return l.Parser;
    } });
    var d = /* @__PURE__ */ Cu(), h = /* @__PURE__ */ Cu();
    Object.defineProperty(e, "DomHandler", { enumerable: !0, get: function() {
      return h.DomHandler;
    } }), Object.defineProperty(e, "DefaultHandler", { enumerable: !0, get: function() {
      return h.DomHandler;
    } });
    function a(f, y) {
      var w = new d.DomHandler(void 0, y);
      return new s.Parser(w, y).end(f), w.root;
    }
    e.parseDocument = a;
    function c(f, y) {
      return a(f, y).children;
    }
    e.parseDOM = c;
    function b(f, y, w) {
      var A = new d.DomHandler(f, y, w);
      return new s.Parser(A, y);
    }
    e.createDomStream = b;
    var u = /* @__PURE__ */ qa();
    Object.defineProperty(e, "Tokenizer", { enumerable: !0, get: function() {
      return o(u).default;
    } }), e.ElementType = n(/* @__PURE__ */ Et());
    var r = /* @__PURE__ */ S0(), g = /* @__PURE__ */ S0();
    Object.defineProperty(e, "getFeed", { enumerable: !0, get: function() {
      return g.getFeed;
    } });
    var x = { xmlMode: !0 };
    function m(f, y) {
      return y === void 0 && (y = x), (0, r.getFeed)(c(f, y));
    }
    e.parseFeed = m, e.DomUtils = n(/* @__PURE__ */ S0());
  }(We)), We;
}
var T0, tn;
function oo() {
  return tn || (tn = 1, T0 = (e) => {
    if (typeof e != "string")
      throw new TypeError("Expected a string");
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }), T0;
}
var Bt = {}, rn;
function lo() {
  if (rn) return Bt;
  rn = 1, Object.defineProperty(Bt, "__esModule", { value: !0 });
  /*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */
  function e(i) {
    return Object.prototype.toString.call(i) === "[object Object]";
  }
  function t(i) {
    var n, o;
    return e(i) === !1 ? !1 : (n = i.constructor, n === void 0 ? !0 : (o = n.prototype, !(e(o) === !1 || o.hasOwnProperty("isPrototypeOf") === !1)));
  }
  return Bt.isPlainObject = t, Bt;
}
var N0, nn;
function fo() {
  if (nn) return N0;
  nn = 1;
  var e = function(y) {
    return t(y) && !i(y);
  };
  function t(f) {
    return !!f && typeof f == "object";
  }
  function i(f) {
    var y = Object.prototype.toString.call(f);
    return y === "[object RegExp]" || y === "[object Date]" || s(f);
  }
  var n = typeof Symbol == "function" && Symbol.for, o = n ? Symbol.for("react.element") : 60103;
  function s(f) {
    return f.$$typeof === o;
  }
  function l(f) {
    return Array.isArray(f) ? [] : {};
  }
  function d(f, y) {
    return y.clone !== !1 && y.isMergeableObject(f) ? x(l(f), f, y) : f;
  }
  function h(f, y, w) {
    return f.concat(y).map(function(A) {
      return d(A, w);
    });
  }
  function a(f, y) {
    if (!y.customMerge)
      return x;
    var w = y.customMerge(f);
    return typeof w == "function" ? w : x;
  }
  function c(f) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(f).filter(function(y) {
      return Object.propertyIsEnumerable.call(f, y);
    }) : [];
  }
  function b(f) {
    return Object.keys(f).concat(c(f));
  }
  function u(f, y) {
    try {
      return y in f;
    } catch {
      return !1;
    }
  }
  function r(f, y) {
    return u(f, y) && !(Object.hasOwnProperty.call(f, y) && Object.propertyIsEnumerable.call(f, y));
  }
  function g(f, y, w) {
    var A = {};
    return w.isMergeableObject(f) && b(f).forEach(function(p) {
      A[p] = d(f[p], w);
    }), b(y).forEach(function(p) {
      r(f, p) || (u(f, p) && w.isMergeableObject(y[p]) ? A[p] = a(p, w)(f[p], y[p], w) : A[p] = d(y[p], w));
    }), A;
  }
  function x(f, y, w) {
    w = w || {}, w.arrayMerge = w.arrayMerge || h, w.isMergeableObject = w.isMergeableObject || e, w.cloneUnlessOtherwiseSpecified = d;
    var A = Array.isArray(y), p = Array.isArray(f), _ = A === p;
    return _ ? A ? w.arrayMerge(f, y, w) : g(f, y, w) : d(y, w);
  }
  x.all = function(y, w) {
    if (!Array.isArray(y))
      throw new Error("first argument should be an array");
    return y.reduce(function(A, p) {
      return x(A, p, w);
    }, {});
  };
  var m = x;
  return N0 = m, N0;
}
var $t = { exports: {} }, bo = $t.exports, an;
function ho() {
  return an || (an = 1, function(e) {
    (function(t, i) {
      e.exports ? e.exports = i() : t.parseSrcset = i();
    })(bo, function() {
      return function(t) {
        function i(A) {
          return A === " " || // space
          A === "	" || // horizontal tab
          A === `
` || // new line
          A === "\f" || // form feed
          A === "\r";
        }
        function n(A) {
          var p, _ = A.exec(t.substring(m));
          if (_)
            return p = _[0], m += p.length, p;
        }
        for (var o = t.length, s = /^[ \t\n\r\u000c]+/, l = /^[, \t\n\r\u000c]+/, d = /^[^ \t\n\r\u000c]+/, h = /[,]+$/, a = /^\d+$/, c = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, b, u, r, g, x, m = 0, f = []; ; ) {
          if (n(l), m >= o)
            return f;
          b = n(d), u = [], b.slice(-1) === "," ? (b = b.replace(h, ""), w()) : y();
        }
        function y() {
          for (n(s), r = "", g = "in descriptor"; ; ) {
            if (x = t.charAt(m), g === "in descriptor")
              if (i(x))
                r && (u.push(r), r = "", g = "after descriptor");
              else if (x === ",") {
                m += 1, r && u.push(r), w();
                return;
              } else if (x === "(")
                r = r + x, g = "in parens";
              else if (x === "") {
                r && u.push(r), w();
                return;
              } else
                r = r + x;
            else if (g === "in parens")
              if (x === ")")
                r = r + x, g = "in descriptor";
              else if (x === "") {
                u.push(r), w();
                return;
              } else
                r = r + x;
            else if (g === "after descriptor" && !i(x))
              if (x === "") {
                w();
                return;
              } else
                g = "in descriptor", m -= 1;
            m += 1;
          }
        }
        function w() {
          var A = !1, p, _, S, C, R = {}, D, E, T, I, P;
          for (C = 0; C < u.length; C++)
            D = u[C], E = D[D.length - 1], T = D.substring(0, D.length - 1), I = parseInt(T, 10), P = parseFloat(T), a.test(T) && E === "w" ? ((p || _) && (A = !0), I === 0 ? A = !0 : p = I) : c.test(T) && E === "x" ? ((p || _ || S) && (A = !0), P < 0 ? A = !0 : _ = P) : a.test(T) && E === "h" ? ((S || _) && (A = !0), I === 0 ? A = !0 : S = I) : A = !0;
          A ? console && console.log && console.log("Invalid srcset descriptor found in '" + t + "' at '" + D + "'.") : (R.url = b, p && (R.w = p), _ && (R.d = _), S && (R.h = S), f.push(R));
        }
      };
    });
  }($t)), $t.exports;
}
var jt = { exports: {} }, sn;
function po() {
  if (sn) return jt.exports;
  sn = 1;
  var e = String, t = function() {
    return { isColorSupported: !1, reset: e, bold: e, dim: e, italic: e, underline: e, inverse: e, hidden: e, strikethrough: e, black: e, red: e, green: e, yellow: e, blue: e, magenta: e, cyan: e, white: e, gray: e, bgBlack: e, bgRed: e, bgGreen: e, bgYellow: e, bgBlue: e, bgMagenta: e, bgCyan: e, bgWhite: e, blackBright: e, redBright: e, greenBright: e, yellowBright: e, blueBright: e, magentaBright: e, cyanBright: e, whiteBright: e, bgBlackBright: e, bgRedBright: e, bgGreenBright: e, bgYellowBright: e, bgBlueBright: e, bgMagentaBright: e, bgCyanBright: e, bgWhiteBright: e };
  };
  return jt.exports = t(), jt.exports.createColors = t, jt.exports;
}
const go = {}, mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: go
}, Symbol.toStringTag, { value: "Module" })), Qe = /* @__PURE__ */ Xc(mo);
var C0, cn;
function _r() {
  if (cn) return C0;
  cn = 1;
  let e = /* @__PURE__ */ po(), t = Qe;
  class i extends Error {
    constructor(o, s, l, d, h, a) {
      super(o), this.name = "CssSyntaxError", this.reason = o, h && (this.file = h), d && (this.source = d), a && (this.plugin = a), typeof s < "u" && typeof l < "u" && (typeof s == "number" ? (this.line = s, this.column = l) : (this.line = s.line, this.column = s.column, this.endLine = l.line, this.endColumn = l.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, i);
    }
    setMessage() {
      this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
    }
    showSourceCode(o) {
      if (!this.source) return "";
      let s = this.source;
      o == null && (o = e.isColorSupported);
      let l = (r) => r, d = (r) => r, h = (r) => r;
      if (o) {
        let { bold: r, gray: g, red: x } = e.createColors(!0);
        d = (m) => r(x(m)), l = (m) => g(m), t && (h = (m) => t(m));
      }
      let a = s.split(/\r?\n/), c = Math.max(this.line - 3, 0), b = Math.min(this.line + 2, a.length), u = String(b).length;
      return a.slice(c, b).map((r, g) => {
        let x = c + 1 + g, m = " " + (" " + x).slice(-u) + " | ";
        if (x === this.line) {
          if (r.length > 160) {
            let y = 20, w = Math.max(0, this.column - y), A = Math.max(
              this.column + y,
              this.endColumn + y
            ), p = r.slice(w, A), _ = l(m.replace(/\d/g, " ")) + r.slice(0, Math.min(this.column - 1, y - 1)).replace(/[^\t]/g, " ");
            return d(">") + l(m) + h(p) + `
 ` + _ + d("^");
          }
          let f = l(m.replace(/\d/g, " ")) + r.slice(0, this.column - 1).replace(/[^\t]/g, " ");
          return d(">") + l(m) + h(r) + `
 ` + f + d("^");
        }
        return " " + l(m) + h(r);
      }).join(`
`);
    }
    toString() {
      let o = this.showSourceCode();
      return o && (o = `

` + o + `
`), this.name + ": " + this.message + o;
    }
  }
  return C0 = i, i.default = i, C0;
}
var I0, on;
function Pa() {
  if (on) return I0;
  on = 1;
  const e = {
    after: `
`,
    beforeClose: `
`,
    beforeComment: `
`,
    beforeDecl: `
`,
    beforeOpen: " ",
    beforeRule: `
`,
    colon: ": ",
    commentLeft: " ",
    commentRight: " ",
    emptyBody: "",
    indent: "    ",
    semicolon: !1
  };
  function t(n) {
    return n[0].toUpperCase() + n.slice(1);
  }
  class i {
    constructor(o) {
      this.builder = o;
    }
    atrule(o, s) {
      let l = "@" + o.name, d = o.params ? this.rawValue(o, "params") : "";
      if (typeof o.raws.afterName < "u" ? l += o.raws.afterName : d && (l += " "), o.nodes)
        this.block(o, l + d);
      else {
        let h = (o.raws.between || "") + (s ? ";" : "");
        this.builder(l + d + h, o);
      }
    }
    beforeAfter(o, s) {
      let l;
      o.type === "decl" ? l = this.raw(o, null, "beforeDecl") : o.type === "comment" ? l = this.raw(o, null, "beforeComment") : s === "before" ? l = this.raw(o, null, "beforeRule") : l = this.raw(o, null, "beforeClose");
      let d = o.parent, h = 0;
      for (; d && d.type !== "root"; )
        h += 1, d = d.parent;
      if (l.includes(`
`)) {
        let a = this.raw(o, null, "indent");
        if (a.length)
          for (let c = 0; c < h; c++) l += a;
      }
      return l;
    }
    block(o, s) {
      let l = this.raw(o, "between", "beforeOpen");
      this.builder(s + l + "{", o, "start");
      let d;
      o.nodes && o.nodes.length ? (this.body(o), d = this.raw(o, "after")) : d = this.raw(o, "after", "emptyBody"), d && this.builder(d), this.builder("}", o, "end");
    }
    body(o) {
      let s = o.nodes.length - 1;
      for (; s > 0 && o.nodes[s].type === "comment"; )
        s -= 1;
      let l = this.raw(o, "semicolon");
      for (let d = 0; d < o.nodes.length; d++) {
        let h = o.nodes[d], a = this.raw(h, "before");
        a && this.builder(a), this.stringify(h, s !== d || l);
      }
    }
    comment(o) {
      let s = this.raw(o, "left", "commentLeft"), l = this.raw(o, "right", "commentRight");
      this.builder("/*" + s + o.text + l + "*/", o);
    }
    decl(o, s) {
      let l = this.raw(o, "between", "colon"), d = o.prop + l + this.rawValue(o, "value");
      o.important && (d += o.raws.important || " !important"), s && (d += ";"), this.builder(d, o);
    }
    document(o) {
      this.body(o);
    }
    raw(o, s, l) {
      let d;
      if (l || (l = s), s && (d = o.raws[s], typeof d < "u"))
        return d;
      let h = o.parent;
      if (l === "before" && (!h || h.type === "root" && h.first === o || h && h.type === "document"))
        return "";
      if (!h) return e[l];
      let a = o.root();
      if (a.rawCache || (a.rawCache = {}), typeof a.rawCache[l] < "u")
        return a.rawCache[l];
      if (l === "before" || l === "after")
        return this.beforeAfter(o, l);
      {
        let c = "raw" + t(l);
        this[c] ? d = this[c](a, o) : a.walk((b) => {
          if (d = b.raws[s], typeof d < "u") return !1;
        });
      }
      return typeof d > "u" && (d = e[l]), a.rawCache[l] = d, d;
    }
    rawBeforeClose(o) {
      let s;
      return o.walk((l) => {
        if (l.nodes && l.nodes.length > 0 && typeof l.raws.after < "u")
          return s = l.raws.after, s.includes(`
`) && (s = s.replace(/[^\n]+$/, "")), !1;
      }), s && (s = s.replace(/\S/g, "")), s;
    }
    rawBeforeComment(o, s) {
      let l;
      return o.walkComments((d) => {
        if (typeof d.raws.before < "u")
          return l = d.raws.before, l.includes(`
`) && (l = l.replace(/[^\n]+$/, "")), !1;
      }), typeof l > "u" ? l = this.raw(s, null, "beforeDecl") : l && (l = l.replace(/\S/g, "")), l;
    }
    rawBeforeDecl(o, s) {
      let l;
      return o.walkDecls((d) => {
        if (typeof d.raws.before < "u")
          return l = d.raws.before, l.includes(`
`) && (l = l.replace(/[^\n]+$/, "")), !1;
      }), typeof l > "u" ? l = this.raw(s, null, "beforeRule") : l && (l = l.replace(/\S/g, "")), l;
    }
    rawBeforeOpen(o) {
      let s;
      return o.walk((l) => {
        if (l.type !== "decl" && (s = l.raws.between, typeof s < "u"))
          return !1;
      }), s;
    }
    rawBeforeRule(o) {
      let s;
      return o.walk((l) => {
        if (l.nodes && (l.parent !== o || o.first !== l) && typeof l.raws.before < "u")
          return s = l.raws.before, s.includes(`
`) && (s = s.replace(/[^\n]+$/, "")), !1;
      }), s && (s = s.replace(/\S/g, "")), s;
    }
    rawColon(o) {
      let s;
      return o.walkDecls((l) => {
        if (typeof l.raws.between < "u")
          return s = l.raws.between.replace(/[^\s:]/g, ""), !1;
      }), s;
    }
    rawEmptyBody(o) {
      let s;
      return o.walk((l) => {
        if (l.nodes && l.nodes.length === 0 && (s = l.raws.after, typeof s < "u"))
          return !1;
      }), s;
    }
    rawIndent(o) {
      if (o.raws.indent) return o.raws.indent;
      let s;
      return o.walk((l) => {
        let d = l.parent;
        if (d && d !== o && d.parent && d.parent === o && typeof l.raws.before < "u") {
          let h = l.raws.before.split(`
`);
          return s = h[h.length - 1], s = s.replace(/\S/g, ""), !1;
        }
      }), s;
    }
    rawSemicolon(o) {
      let s;
      return o.walk((l) => {
        if (l.nodes && l.nodes.length && l.last.type === "decl" && (s = l.raws.semicolon, typeof s < "u"))
          return !1;
      }), s;
    }
    rawValue(o, s) {
      let l = o[s], d = o.raws[s];
      return d && d.value === l ? d.raw : l;
    }
    root(o) {
      this.body(o), o.raws.after && this.builder(o.raws.after);
    }
    rule(o) {
      this.block(o, this.rawValue(o, "selector")), o.raws.ownSemicolon && this.builder(o.raws.ownSemicolon, o, "end");
    }
    stringify(o, s) {
      if (!this[o.type])
        throw new Error(
          "Unknown AST node type " + o.type + ". Maybe you need to change PostCSS stringifier."
        );
      this[o.type](o, s);
    }
  }
  return I0 = i, i.default = i, I0;
}
var O0, ln;
function a0() {
  if (ln) return O0;
  ln = 1;
  let e = Pa();
  function t(i, n) {
    new e(n).stringify(i);
  }
  return O0 = t, t.default = t, O0;
}
var Ut = {}, fn;
function Ar() {
  return fn || (fn = 1, Ut.isClean = Symbol("isClean"), Ut.my = Symbol("my")), Ut;
}
var q0, dn;
function s0() {
  if (dn) return q0;
  dn = 1;
  let e = _r(), t = Pa(), i = a0(), { isClean: n, my: o } = Ar();
  function s(h, a) {
    let c = new h.constructor();
    for (let b in h) {
      if (!Object.prototype.hasOwnProperty.call(h, b) || b === "proxyCache") continue;
      let u = h[b], r = typeof u;
      b === "parent" && r === "object" ? a && (c[b] = a) : b === "source" ? c[b] = u : Array.isArray(u) ? c[b] = u.map((g) => s(g, c)) : (r === "object" && u !== null && (u = s(u)), c[b] = u);
    }
    return c;
  }
  function l(h, a) {
    if (a && typeof a.offset < "u")
      return a.offset;
    let c = 1, b = 1, u = 0;
    for (let r = 0; r < h.length; r++) {
      if (b === a.line && c === a.column) {
        u = r;
        break;
      }
      h[r] === `
` ? (c = 1, b += 1) : c += 1;
    }
    return u;
  }
  class d {
    get proxyOf() {
      return this;
    }
    constructor(a = {}) {
      this.raws = {}, this[n] = !1, this[o] = !0;
      for (let c in a)
        if (c === "nodes") {
          this.nodes = [];
          for (let b of a[c])
            typeof b.clone == "function" ? this.append(b.clone()) : this.append(b);
        } else
          this[c] = a[c];
    }
    addToError(a) {
      if (a.postcssNode = this, a.stack && this.source && /\n\s{4}at /.test(a.stack)) {
        let c = this.source;
        a.stack = a.stack.replace(
          /\n\s{4}at /,
          `$&${c.input.from}:${c.start.line}:${c.start.column}$&`
        );
      }
      return a;
    }
    after(a) {
      return this.parent.insertAfter(this, a), this;
    }
    assign(a = {}) {
      for (let c in a)
        this[c] = a[c];
      return this;
    }
    before(a) {
      return this.parent.insertBefore(this, a), this;
    }
    cleanRaws(a) {
      delete this.raws.before, delete this.raws.after, a || delete this.raws.between;
    }
    clone(a = {}) {
      let c = s(this);
      for (let b in a)
        c[b] = a[b];
      return c;
    }
    cloneAfter(a = {}) {
      let c = this.clone(a);
      return this.parent.insertAfter(this, c), c;
    }
    cloneBefore(a = {}) {
      let c = this.clone(a);
      return this.parent.insertBefore(this, c), c;
    }
    error(a, c = {}) {
      if (this.source) {
        let { end: b, start: u } = this.rangeBy(c);
        return this.source.input.error(
          a,
          { column: u.column, line: u.line },
          { column: b.column, line: b.line },
          c
        );
      }
      return new e(a);
    }
    getProxyProcessor() {
      return {
        get(a, c) {
          return c === "proxyOf" ? a : c === "root" ? () => a.root().toProxy() : a[c];
        },
        set(a, c, b) {
          return a[c] === b || (a[c] = b, (c === "prop" || c === "value" || c === "name" || c === "params" || c === "important" || /* c8 ignore next */
          c === "text") && a.markDirty()), !0;
        }
      };
    }
    /* c8 ignore next 3 */
    markClean() {
      this[n] = !0;
    }
    markDirty() {
      if (this[n]) {
        this[n] = !1;
        let a = this;
        for (; a = a.parent; )
          a[n] = !1;
      }
    }
    next() {
      if (!this.parent) return;
      let a = this.parent.index(this);
      return this.parent.nodes[a + 1];
    }
    positionBy(a = {}) {
      let c = this.source.start;
      if (a.index)
        c = this.positionInside(a.index);
      else if (a.word) {
        let b = "document" in this.source.input ? this.source.input.document : this.source.input.css, r = b.slice(
          l(b, this.source.start),
          l(b, this.source.end)
        ).indexOf(a.word);
        r !== -1 && (c = this.positionInside(r));
      }
      return c;
    }
    positionInside(a) {
      let c = this.source.start.column, b = this.source.start.line, u = "document" in this.source.input ? this.source.input.document : this.source.input.css, r = l(u, this.source.start), g = r + a;
      for (let x = r; x < g; x++)
        u[x] === `
` ? (c = 1, b += 1) : c += 1;
      return { column: c, line: b, offset: g };
    }
    prev() {
      if (!this.parent) return;
      let a = this.parent.index(this);
      return this.parent.nodes[a - 1];
    }
    rangeBy(a = {}) {
      let c = "document" in this.source.input ? this.source.input.document : this.source.input.css, b = {
        column: this.source.start.column,
        line: this.source.start.line,
        offset: l(c, this.source.start)
      }, u = this.source.end ? {
        column: this.source.end.column + 1,
        line: this.source.end.line,
        offset: typeof this.source.end.offset == "number" ? (
          // `source.end.offset` is exclusive, so we don't need to add 1
          this.source.end.offset
        ) : (
          // Since line/column in this.source.end is inclusive,
          // the `sourceOffset(... , this.source.end)` returns an inclusive offset.
          // So, we add 1 to convert it to exclusive.
          l(c, this.source.end) + 1
        )
      } : {
        column: b.column + 1,
        line: b.line,
        offset: b.offset + 1
      };
      if (a.word) {
        let g = c.slice(
          l(c, this.source.start),
          l(c, this.source.end)
        ).indexOf(a.word);
        g !== -1 && (b = this.positionInside(g), u = this.positionInside(g + a.word.length));
      } else
        a.start ? b = {
          column: a.start.column,
          line: a.start.line,
          offset: l(c, a.start)
        } : a.index && (b = this.positionInside(a.index)), a.end ? u = {
          column: a.end.column,
          line: a.end.line,
          offset: l(c, a.end)
        } : typeof a.endIndex == "number" ? u = this.positionInside(a.endIndex) : a.index && (u = this.positionInside(a.index + 1));
      return (u.line < b.line || u.line === b.line && u.column <= b.column) && (u = {
        column: b.column + 1,
        line: b.line,
        offset: b.offset + 1
      }), { end: u, start: b };
    }
    raw(a, c) {
      return new t().raw(this, a, c);
    }
    remove() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }
    replaceWith(...a) {
      if (this.parent) {
        let c = this, b = !1;
        for (let u of a)
          u === this ? b = !0 : b ? (this.parent.insertAfter(c, u), c = u) : this.parent.insertBefore(c, u);
        b || this.remove();
      }
      return this;
    }
    root() {
      let a = this;
      for (; a.parent && a.parent.type !== "document"; )
        a = a.parent;
      return a;
    }
    toJSON(a, c) {
      let b = {}, u = c == null;
      c = c || /* @__PURE__ */ new Map();
      let r = 0;
      for (let g in this) {
        if (!Object.prototype.hasOwnProperty.call(this, g) || g === "parent" || g === "proxyCache") continue;
        let x = this[g];
        if (Array.isArray(x))
          b[g] = x.map((m) => typeof m == "object" && m.toJSON ? m.toJSON(null, c) : m);
        else if (typeof x == "object" && x.toJSON)
          b[g] = x.toJSON(null, c);
        else if (g === "source") {
          if (x == null) continue;
          let m = c.get(x.input);
          m == null && (m = r, c.set(x.input, r), r++), b[g] = {
            end: x.end,
            inputId: m,
            start: x.start
          };
        } else
          b[g] = x;
      }
      return u && (b.inputs = [...c.keys()].map((g) => g.toJSON())), b;
    }
    toProxy() {
      return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
    }
    toString(a = i) {
      a.stringify && (a = a.stringify);
      let c = "";
      return a(this, (b) => {
        c += b;
      }), c;
    }
    warn(a, c, b = {}) {
      let u = { node: this };
      for (let r in b) u[r] = b[r];
      return a.warn(c, u);
    }
  }
  return q0 = d, d.default = d, q0;
}
var R0, bn;
function c0() {
  if (bn) return R0;
  bn = 1;
  let e = s0();
  class t extends e {
    constructor(n) {
      super(n), this.type = "comment";
    }
  }
  return R0 = t, t.default = t, R0;
}
var D0, hn;
function o0() {
  if (hn) return D0;
  hn = 1;
  let e = s0();
  class t extends e {
    get variable() {
      return this.prop.startsWith("--") || this.prop[0] === "$";
    }
    constructor(n) {
      n && typeof n.value < "u" && typeof n.value != "string" && (n = { ...n, value: String(n.value) }), super(n), this.type = "decl";
    }
  }
  return D0 = t, t.default = t, D0;
}
var L0, pn;
function zu() {
  if (pn) return L0;
  pn = 1;
  let e = c0(), t = o0(), i = s0(), { isClean: n, my: o } = Ar(), s, l, d, h;
  function a(u) {
    return u.map((r) => (r.nodes && (r.nodes = a(r.nodes)), delete r.source, r));
  }
  function c(u) {
    if (u[n] = !1, u.proxyOf.nodes)
      for (let r of u.proxyOf.nodes)
        c(r);
  }
  class b extends i {
    get first() {
      if (this.proxyOf.nodes)
        return this.proxyOf.nodes[0];
    }
    get last() {
      if (this.proxyOf.nodes)
        return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
    append(...r) {
      for (let g of r) {
        let x = this.normalize(g, this.last);
        for (let m of x) this.proxyOf.nodes.push(m);
      }
      return this.markDirty(), this;
    }
    cleanRaws(r) {
      if (super.cleanRaws(r), this.nodes)
        for (let g of this.nodes) g.cleanRaws(r);
    }
    each(r) {
      if (!this.proxyOf.nodes) return;
      let g = this.getIterator(), x, m;
      for (; this.indexes[g] < this.proxyOf.nodes.length && (x = this.indexes[g], m = r(this.proxyOf.nodes[x], x), m !== !1); )
        this.indexes[g] += 1;
      return delete this.indexes[g], m;
    }
    every(r) {
      return this.nodes.every(r);
    }
    getIterator() {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
      let r = this.lastEach;
      return this.indexes[r] = 0, r;
    }
    getProxyProcessor() {
      return {
        get(r, g) {
          return g === "proxyOf" ? r : r[g] ? g === "each" || typeof g == "string" && g.startsWith("walk") ? (...x) => r[g](
            ...x.map((m) => typeof m == "function" ? (f, y) => m(f.toProxy(), y) : m)
          ) : g === "every" || g === "some" ? (x) => r[g](
            (m, ...f) => x(m.toProxy(), ...f)
          ) : g === "root" ? () => r.root().toProxy() : g === "nodes" ? r.nodes.map((x) => x.toProxy()) : g === "first" || g === "last" ? r[g].toProxy() : r[g] : r[g];
        },
        set(r, g, x) {
          return r[g] === x || (r[g] = x, (g === "name" || g === "params" || g === "selector") && r.markDirty()), !0;
        }
      };
    }
    index(r) {
      return typeof r == "number" ? r : (r.proxyOf && (r = r.proxyOf), this.proxyOf.nodes.indexOf(r));
    }
    insertAfter(r, g) {
      let x = this.index(r), m = this.normalize(g, this.proxyOf.nodes[x]).reverse();
      x = this.index(r);
      for (let y of m) this.proxyOf.nodes.splice(x + 1, 0, y);
      let f;
      for (let y in this.indexes)
        f = this.indexes[y], x < f && (this.indexes[y] = f + m.length);
      return this.markDirty(), this;
    }
    insertBefore(r, g) {
      let x = this.index(r), m = x === 0 ? "prepend" : !1, f = this.normalize(
        g,
        this.proxyOf.nodes[x],
        m
      ).reverse();
      x = this.index(r);
      for (let w of f) this.proxyOf.nodes.splice(x, 0, w);
      let y;
      for (let w in this.indexes)
        y = this.indexes[w], x <= y && (this.indexes[w] = y + f.length);
      return this.markDirty(), this;
    }
    normalize(r, g) {
      if (typeof r == "string")
        r = a(l(r).nodes);
      else if (typeof r > "u")
        r = [];
      else if (Array.isArray(r)) {
        r = r.slice(0);
        for (let m of r)
          m.parent && m.parent.removeChild(m, "ignore");
      } else if (r.type === "root" && this.type !== "document") {
        r = r.nodes.slice(0);
        for (let m of r)
          m.parent && m.parent.removeChild(m, "ignore");
      } else if (r.type)
        r = [r];
      else if (r.prop) {
        if (typeof r.value > "u")
          throw new Error("Value field is missed in node creation");
        typeof r.value != "string" && (r.value = String(r.value)), r = [new t(r)];
      } else if (r.selector || r.selectors)
        r = [new h(r)];
      else if (r.name)
        r = [new s(r)];
      else if (r.text)
        r = [new e(r)];
      else
        throw new Error("Unknown node type in node creation");
      return r.map((m) => (m[o] || b.rebuild(m), m = m.proxyOf, m.parent && m.parent.removeChild(m), m[n] && c(m), m.raws || (m.raws = {}), typeof m.raws.before > "u" && g && typeof g.raws.before < "u" && (m.raws.before = g.raws.before.replace(/\S/g, "")), m.parent = this.proxyOf, m));
    }
    prepend(...r) {
      r = r.reverse();
      for (let g of r) {
        let x = this.normalize(g, this.first, "prepend").reverse();
        for (let m of x) this.proxyOf.nodes.unshift(m);
        for (let m in this.indexes)
          this.indexes[m] = this.indexes[m] + x.length;
      }
      return this.markDirty(), this;
    }
    push(r) {
      return r.parent = this, this.proxyOf.nodes.push(r), this;
    }
    removeAll() {
      for (let r of this.proxyOf.nodes) r.parent = void 0;
      return this.proxyOf.nodes = [], this.markDirty(), this;
    }
    removeChild(r) {
      r = this.index(r), this.proxyOf.nodes[r].parent = void 0, this.proxyOf.nodes.splice(r, 1);
      let g;
      for (let x in this.indexes)
        g = this.indexes[x], g >= r && (this.indexes[x] = g - 1);
      return this.markDirty(), this;
    }
    replaceValues(r, g, x) {
      return x || (x = g, g = {}), this.walkDecls((m) => {
        g.props && !g.props.includes(m.prop) || g.fast && !m.value.includes(g.fast) || (m.value = m.value.replace(r, x));
      }), this.markDirty(), this;
    }
    some(r) {
      return this.nodes.some(r);
    }
    walk(r) {
      return this.each((g, x) => {
        let m;
        try {
          m = r(g, x);
        } catch (f) {
          throw g.addToError(f);
        }
        return m !== !1 && g.walk && (m = g.walk(r)), m;
      });
    }
    walkAtRules(r, g) {
      return g ? r instanceof RegExp ? this.walk((x, m) => {
        if (x.type === "atrule" && r.test(x.name))
          return g(x, m);
      }) : this.walk((x, m) => {
        if (x.type === "atrule" && x.name === r)
          return g(x, m);
      }) : (g = r, this.walk((x, m) => {
        if (x.type === "atrule")
          return g(x, m);
      }));
    }
    walkComments(r) {
      return this.walk((g, x) => {
        if (g.type === "comment")
          return r(g, x);
      });
    }
    walkDecls(r, g) {
      return g ? r instanceof RegExp ? this.walk((x, m) => {
        if (x.type === "decl" && r.test(x.prop))
          return g(x, m);
      }) : this.walk((x, m) => {
        if (x.type === "decl" && x.prop === r)
          return g(x, m);
      }) : (g = r, this.walk((x, m) => {
        if (x.type === "decl")
          return g(x, m);
      }));
    }
    walkRules(r, g) {
      return g ? r instanceof RegExp ? this.walk((x, m) => {
        if (x.type === "rule" && r.test(x.selector))
          return g(x, m);
      }) : this.walk((x, m) => {
        if (x.type === "rule" && x.selector === r)
          return g(x, m);
      }) : (g = r, this.walk((x, m) => {
        if (x.type === "rule")
          return g(x, m);
      }));
    }
  }
  return b.registerParse = (u) => {
    l = u;
  }, b.registerRule = (u) => {
    h = u;
  }, b.registerAtRule = (u) => {
    s = u;
  }, b.registerRoot = (u) => {
    d = u;
  }, L0 = b, b.default = b, b.rebuild = (u) => {
    u.type === "atrule" ? Object.setPrototypeOf(u, s.prototype) : u.type === "rule" ? Object.setPrototypeOf(u, h.prototype) : u.type === "decl" ? Object.setPrototypeOf(u, t.prototype) : u.type === "comment" ? Object.setPrototypeOf(u, e.prototype) : u.type === "root" && Object.setPrototypeOf(u, d.prototype), u[o] = !0, u.nodes && u.nodes.forEach((r) => {
      b.rebuild(r);
    });
  }, L0;
}
var P0, gn;
function Sr() {
  if (gn) return P0;
  gn = 1;
  let e = zu();
  class t extends e {
    constructor(n) {
      super(n), this.type = "atrule";
    }
    append(...n) {
      return this.proxyOf.nodes || (this.nodes = []), super.append(...n);
    }
    prepend(...n) {
      return this.proxyOf.nodes || (this.nodes = []), super.prepend(...n);
    }
  }
  return P0 = t, t.default = t, e.registerAtRule(t), P0;
}
var k0, mn;
function Tr() {
  if (mn) return k0;
  mn = 1;
  let e = zu(), t, i;
  class n extends e {
    constructor(s) {
      super({ type: "document", ...s }), this.nodes || (this.nodes = []);
    }
    toResult(s = {}) {
      return new t(new i(), this, s).stringify();
    }
  }
  return n.registerLazyResult = (o) => {
    t = o;
  }, n.registerProcessor = (o) => {
    i = o;
  }, k0 = n, n.default = n, k0;
}
var M0, vn;
function vo() {
  if (vn) return M0;
  vn = 1;
  let e = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
  return M0 = { nanoid: (n = 21) => {
    let o = "", s = n | 0;
    for (; s--; )
      o += e[Math.random() * 64 | 0];
    return o;
  }, customAlphabet: (n, o = 21) => (s = o) => {
    let l = "", d = s | 0;
    for (; d--; )
      l += n[Math.random() * n.length | 0];
    return l;
  } }, M0;
}
var B0, yn;
function ka() {
  if (yn) return B0;
  yn = 1;
  let { existsSync: e, readFileSync: t } = Qe, { dirname: i, join: n } = Qe, { SourceMapConsumer: o, SourceMapGenerator: s } = Qe;
  function l(h) {
    return Buffer ? Buffer.from(h, "base64").toString() : window.atob(h);
  }
  class d {
    constructor(a, c) {
      if (c.map === !1) return;
      this.loadAnnotation(a), this.inline = this.startWith(this.annotation, "data:");
      let b = c.map ? c.map.prev : void 0, u = this.loadMap(c.from, b);
      !this.mapFile && c.from && (this.mapFile = c.from), this.mapFile && (this.root = i(this.mapFile)), u && (this.text = u);
    }
    consumer() {
      return this.consumerCache || (this.consumerCache = new o(this.text)), this.consumerCache;
    }
    decodeInline(a) {
      let c = /^data:application\/json;charset=utf-?8;base64,/, b = /^data:application\/json;base64,/, u = /^data:application\/json;charset=utf-?8,/, r = /^data:application\/json,/, g = a.match(u) || a.match(r);
      if (g)
        return decodeURIComponent(a.substr(g[0].length));
      let x = a.match(c) || a.match(b);
      if (x)
        return l(a.substr(x[0].length));
      let m = a.match(/data:application\/json;([^,]+),/)[1];
      throw new Error("Unsupported source map encoding " + m);
    }
    getAnnotationURL(a) {
      return a.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
    }
    isMap(a) {
      return typeof a != "object" ? !1 : typeof a.mappings == "string" || typeof a._mappings == "string" || Array.isArray(a.sections);
    }
    loadAnnotation(a) {
      let c = a.match(/\/\*\s*# sourceMappingURL=/g);
      if (!c) return;
      let b = a.lastIndexOf(c.pop()), u = a.indexOf("*/", b);
      b > -1 && u > -1 && (this.annotation = this.getAnnotationURL(a.substring(b, u)));
    }
    loadFile(a) {
      if (this.root = i(a), e(a))
        return this.mapFile = a, t(a, "utf-8").toString().trim();
    }
    loadMap(a, c) {
      if (c === !1) return !1;
      if (c) {
        if (typeof c == "string")
          return c;
        if (typeof c == "function") {
          let b = c(a);
          if (b) {
            let u = this.loadFile(b);
            if (!u)
              throw new Error(
                "Unable to load previous source map: " + b.toString()
              );
            return u;
          }
        } else {
          if (c instanceof o)
            return s.fromSourceMap(c).toString();
          if (c instanceof s)
            return c.toString();
          if (this.isMap(c))
            return JSON.stringify(c);
          throw new Error(
            "Unsupported previous source map format: " + c.toString()
          );
        }
      } else {
        if (this.inline)
          return this.decodeInline(this.annotation);
        if (this.annotation) {
          let b = this.annotation;
          return a && (b = n(i(a), b)), this.loadFile(b);
        }
      }
    }
    startWith(a, c) {
      return a ? a.substr(0, c.length) === c : !1;
    }
    withContent() {
      return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
    }
  }
  return B0 = d, d.default = d, B0;
}
var j0, xn;
function l0() {
  if (xn) return j0;
  xn = 1;
  let { nanoid: e } = /* @__PURE__ */ vo(), { isAbsolute: t, resolve: i } = Qe, { SourceMapConsumer: n, SourceMapGenerator: o } = Qe, { fileURLToPath: s, pathToFileURL: l } = Qe, d = _r(), h = ka(), a = Qe, c = Symbol("lineToIndexCache"), b = !!(n && o), u = !!(i && t);
  function r(x) {
    if (x[c]) return x[c];
    let m = x.css.split(`
`), f = new Array(m.length), y = 0;
    for (let w = 0, A = m.length; w < A; w++)
      f[w] = y, y += m[w].length + 1;
    return x[c] = f, f;
  }
  class g {
    get from() {
      return this.file || this.id;
    }
    constructor(m, f = {}) {
      if (m === null || typeof m > "u" || typeof m == "object" && !m.toString)
        throw new Error(`PostCSS received ${m} instead of CSS string`);
      if (this.css = m.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, this.document = this.css, f.document && (this.document = f.document.toString()), f.from && (!u || /^\w+:\/\//.test(f.from) || t(f.from) ? this.file = f.from : this.file = i(f.from)), u && b) {
        let y = new h(this.css, f);
        if (y.text) {
          this.map = y;
          let w = y.consumer().file;
          !this.file && w && (this.file = this.mapResolve(w));
        }
      }
      this.file || (this.id = "<input css " + e(6) + ">"), this.map && (this.map.file = this.from);
    }
    error(m, f, y, w = {}) {
      let A, p, _, S, C;
      if (f && typeof f == "object") {
        let D = f, E = y;
        if (typeof D.offset == "number") {
          S = D.offset;
          let T = this.fromOffset(S);
          f = T.line, y = T.col;
        } else
          f = D.line, y = D.column, S = this.fromLineAndColumn(f, y);
        if (typeof E.offset == "number") {
          _ = E.offset;
          let T = this.fromOffset(_);
          p = T.line, A = T.col;
        } else
          p = E.line, A = E.column, _ = this.fromLineAndColumn(E.line, E.column);
      } else if (y)
        S = this.fromLineAndColumn(f, y);
      else {
        S = f;
        let D = this.fromOffset(S);
        f = D.line, y = D.col;
      }
      let R = this.origin(f, y, p, A);
      return R ? C = new d(
        m,
        R.endLine === void 0 ? R.line : { column: R.column, line: R.line },
        R.endLine === void 0 ? R.column : { column: R.endColumn, line: R.endLine },
        R.source,
        R.file,
        w.plugin
      ) : C = new d(
        m,
        p === void 0 ? f : { column: y, line: f },
        p === void 0 ? y : { column: A, line: p },
        this.css,
        this.file,
        w.plugin
      ), C.input = { column: y, endColumn: A, endLine: p, endOffset: _, line: f, offset: S, source: this.css }, this.file && (l && (C.input.url = l(this.file).toString()), C.input.file = this.file), C;
    }
    fromLineAndColumn(m, f) {
      return r(this)[m - 1] + f - 1;
    }
    fromOffset(m) {
      let f = r(this), y = f[f.length - 1], w = 0;
      if (m >= y)
        w = f.length - 1;
      else {
        let A = f.length - 2, p;
        for (; w < A; )
          if (p = w + (A - w >> 1), m < f[p])
            A = p - 1;
          else if (m >= f[p + 1])
            w = p + 1;
          else {
            w = p;
            break;
          }
      }
      return {
        col: m - f[w] + 1,
        line: w + 1
      };
    }
    mapResolve(m) {
      return /^\w+:\/\//.test(m) ? m : i(this.map.consumer().sourceRoot || this.map.root || ".", m);
    }
    origin(m, f, y, w) {
      if (!this.map) return !1;
      let A = this.map.consumer(), p = A.originalPositionFor({ column: f, line: m });
      if (!p.source) return !1;
      let _;
      typeof y == "number" && (_ = A.originalPositionFor({ column: w, line: y }));
      let S;
      t(p.source) ? S = l(p.source) : S = new URL(
        p.source,
        this.map.consumer().sourceRoot || l(this.map.mapFile)
      );
      let C = {
        column: p.column,
        endColumn: _ && _.column,
        endLine: _ && _.line,
        line: p.line,
        url: S.toString()
      };
      if (S.protocol === "file:")
        if (s)
          C.file = s(S);
        else
          throw new Error("file: protocol is not available in this PostCSS build");
      let R = A.sourceContentFor(p.source);
      return R && (C.source = R), C;
    }
    toJSON() {
      let m = {};
      for (let f of ["hasBOM", "css", "file", "id"])
        this[f] != null && (m[f] = this[f]);
      return this.map && (m.map = { ...this.map }, m.map.consumerCache && (m.map.consumerCache = void 0)), m;
    }
  }
  return j0 = g, g.default = g, a && a.registerInput && a.registerInput(g), j0;
}
var U0, wn;
function _t() {
  if (wn) return U0;
  wn = 1;
  let e = zu(), t, i;
  class n extends e {
    constructor(s) {
      super(s), this.type = "root", this.nodes || (this.nodes = []);
    }
    normalize(s, l, d) {
      let h = super.normalize(s);
      if (l) {
        if (d === "prepend")
          this.nodes.length > 1 ? l.raws.before = this.nodes[1].raws.before : delete l.raws.before;
        else if (this.first !== l)
          for (let a of h)
            a.raws.before = l.raws.before;
      }
      return h;
    }
    removeChild(s, l) {
      let d = this.index(s);
      return !l && d === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[d].raws.before), super.removeChild(s);
    }
    toResult(s = {}) {
      return new t(new i(), this, s).stringify();
    }
  }
  return n.registerLazyResult = (o) => {
    t = o;
  }, n.registerProcessor = (o) => {
    i = o;
  }, U0 = n, n.default = n, e.registerRoot(n), U0;
}
var H0, En;
function Ma() {
  if (En) return H0;
  En = 1;
  let e = {
    comma(t) {
      return e.split(t, [","], !0);
    },
    space(t) {
      let i = [" ", `
`, "	"];
      return e.split(t, i);
    },
    split(t, i, n) {
      let o = [], s = "", l = !1, d = 0, h = !1, a = "", c = !1;
      for (let b of t)
        c ? c = !1 : b === "\\" ? c = !0 : h ? b === a && (h = !1) : b === '"' || b === "'" ? (h = !0, a = b) : b === "(" ? d += 1 : b === ")" ? d > 0 && (d -= 1) : d === 0 && i.includes(b) && (l = !0), l ? (s !== "" && o.push(s.trim()), s = "", l = !1) : s += b;
      return (n || s !== "") && o.push(s.trim()), o;
    }
  };
  return H0 = e, e.default = e, H0;
}
var F0, _n;
function Nr() {
  if (_n) return F0;
  _n = 1;
  let e = zu(), t = Ma();
  class i extends e {
    get selectors() {
      return t.comma(this.selector);
    }
    set selectors(o) {
      let s = this.selector ? this.selector.match(/,\s*/) : null, l = s ? s[0] : "," + this.raw("between", "beforeOpen");
      this.selector = o.join(l);
    }
    constructor(o) {
      super(o), this.type = "rule", this.nodes || (this.nodes = []);
    }
  }
  return F0 = i, i.default = i, e.registerRule(i), F0;
}
var V0, An;
function yo() {
  if (An) return V0;
  An = 1;
  let e = Sr(), t = c0(), i = o0(), n = l0(), o = ka(), s = _t(), l = Nr();
  function d(h, a) {
    if (Array.isArray(h)) return h.map((u) => d(u));
    let { inputs: c, ...b } = h;
    if (c) {
      a = [];
      for (let u of c) {
        let r = { ...u, __proto__: n.prototype };
        r.map && (r.map = {
          ...r.map,
          __proto__: o.prototype
        }), a.push(r);
      }
    }
    if (b.nodes && (b.nodes = h.nodes.map((u) => d(u, a))), b.source) {
      let { inputId: u, ...r } = b.source;
      b.source = r, u != null && (b.source.input = a[u]);
    }
    if (b.type === "root")
      return new s(b);
    if (b.type === "decl")
      return new i(b);
    if (b.type === "rule")
      return new l(b);
    if (b.type === "comment")
      return new t(b);
    if (b.type === "atrule")
      return new e(b);
    throw new Error("Unknown node type: " + h.type);
  }
  return V0 = d, d.default = d, V0;
}
var $0, Sn;
function Ba() {
  if (Sn) return $0;
  Sn = 1;
  let { dirname: e, relative: t, resolve: i, sep: n } = Qe, { SourceMapConsumer: o, SourceMapGenerator: s } = Qe, { pathToFileURL: l } = Qe, d = l0(), h = !!(o && s), a = !!(e && i && t && n);
  class c {
    constructor(u, r, g, x) {
      this.stringify = u, this.mapOpts = g.map || {}, this.root = r, this.opts = g, this.css = x, this.originalCSS = x, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
    }
    addAnnotation() {
      let u;
      this.isInline() ? u = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? u = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? u = this.mapOpts.annotation(this.opts.to, this.root) : u = this.outputFile() + ".map";
      let r = `
`;
      this.css.includes(`\r
`) && (r = `\r
`), this.css += r + "/*# sourceMappingURL=" + u + " */";
    }
    applyPrevMaps() {
      for (let u of this.previous()) {
        let r = this.toUrl(this.path(u.file)), g = u.root || e(u.file), x;
        this.mapOpts.sourcesContent === !1 ? (x = new o(u.text), x.sourcesContent && (x.sourcesContent = null)) : x = u.consumer(), this.map.applySourceMap(x, r, this.toUrl(this.path(g)));
      }
    }
    clearAnnotation() {
      if (this.mapOpts.annotation !== !1)
        if (this.root) {
          let u;
          for (let r = this.root.nodes.length - 1; r >= 0; r--)
            u = this.root.nodes[r], u.type === "comment" && u.text.startsWith("# sourceMappingURL=") && this.root.removeChild(r);
        } else this.css && (this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, ""));
    }
    generate() {
      if (this.clearAnnotation(), a && h && this.isMap())
        return this.generateMap();
      {
        let u = "";
        return this.stringify(this.root, (r) => {
          u += r;
        }), [u];
      }
    }
    generateMap() {
      if (this.root)
        this.generateString();
      else if (this.previous().length === 1) {
        let u = this.previous()[0].consumer();
        u.file = this.outputFile(), this.map = s.fromSourceMap(u, {
          ignoreInvalidMapping: !0
        });
      } else
        this.map = new s({
          file: this.outputFile(),
          ignoreInvalidMapping: !0
        }), this.map.addMapping({
          generated: { column: 0, line: 1 },
          original: { column: 0, line: 1 },
          source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
        });
      return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
    }
    generateString() {
      this.css = "", this.map = new s({
        file: this.outputFile(),
        ignoreInvalidMapping: !0
      });
      let u = 1, r = 1, g = "<no source>", x = {
        generated: { column: 0, line: 0 },
        original: { column: 0, line: 0 },
        source: ""
      }, m, f;
      this.stringify(this.root, (y, w, A) => {
        if (this.css += y, w && A !== "end" && (x.generated.line = u, x.generated.column = r - 1, w.source && w.source.start ? (x.source = this.sourcePath(w), x.original.line = w.source.start.line, x.original.column = w.source.start.column - 1, this.map.addMapping(x)) : (x.source = g, x.original.line = 1, x.original.column = 0, this.map.addMapping(x))), f = y.match(/\n/g), f ? (u += f.length, m = y.lastIndexOf(`
`), r = y.length - m) : r += y.length, w && A !== "start") {
          let p = w.parent || { raws: {} };
          (!(w.type === "decl" || w.type === "atrule" && !w.nodes) || w !== p.last || p.raws.semicolon) && (w.source && w.source.end ? (x.source = this.sourcePath(w), x.original.line = w.source.end.line, x.original.column = w.source.end.column - 1, x.generated.line = u, x.generated.column = r - 2, this.map.addMapping(x)) : (x.source = g, x.original.line = 1, x.original.column = 0, x.generated.line = u, x.generated.column = r - 1, this.map.addMapping(x)));
        }
      });
    }
    isAnnotation() {
      return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some((u) => u.annotation) : !0;
    }
    isInline() {
      if (typeof this.mapOpts.inline < "u")
        return this.mapOpts.inline;
      let u = this.mapOpts.annotation;
      return typeof u < "u" && u !== !0 ? !1 : this.previous().length ? this.previous().some((r) => r.inline) : !0;
    }
    isMap() {
      return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
    }
    isSourcesContent() {
      return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((u) => u.withContent()) : !0;
    }
    outputFile() {
      return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
    }
    path(u) {
      if (this.mapOpts.absolute || u.charCodeAt(0) === 60 || /^\w+:\/\//.test(u)) return u;
      let r = this.memoizedPaths.get(u);
      if (r) return r;
      let g = this.opts.to ? e(this.opts.to) : ".";
      typeof this.mapOpts.annotation == "string" && (g = e(i(g, this.mapOpts.annotation)));
      let x = t(g, u);
      return this.memoizedPaths.set(u, x), x;
    }
    previous() {
      if (!this.previousMaps)
        if (this.previousMaps = [], this.root)
          this.root.walk((u) => {
            if (u.source && u.source.input.map) {
              let r = u.source.input.map;
              this.previousMaps.includes(r) || this.previousMaps.push(r);
            }
          });
        else {
          let u = new d(this.originalCSS, this.opts);
          u.map && this.previousMaps.push(u.map);
        }
      return this.previousMaps;
    }
    setSourcesContent() {
      let u = {};
      if (this.root)
        this.root.walk((r) => {
          if (r.source) {
            let g = r.source.input.from;
            if (g && !u[g]) {
              u[g] = !0;
              let x = this.usesFileUrls ? this.toFileUrl(g) : this.toUrl(this.path(g));
              this.map.setSourceContent(x, r.source.input.css);
            }
          }
        });
      else if (this.css) {
        let r = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
        this.map.setSourceContent(r, this.css);
      }
    }
    sourcePath(u) {
      return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(u.source.input.from) : this.toUrl(this.path(u.source.input.from));
    }
    toBase64(u) {
      return Buffer ? Buffer.from(u).toString("base64") : window.btoa(unescape(encodeURIComponent(u)));
    }
    toFileUrl(u) {
      let r = this.memoizedFileURLs.get(u);
      if (r) return r;
      if (l) {
        let g = l(u).toString();
        return this.memoizedFileURLs.set(u, g), g;
      } else
        throw new Error(
          "`map.absolute` option is not available in this PostCSS build"
        );
    }
    toUrl(u) {
      let r = this.memoizedURLs.get(u);
      if (r) return r;
      n === "\\" && (u = u.replace(/\\/g, "/"));
      let g = encodeURI(u).replace(/[#?]/g, encodeURIComponent);
      return this.memoizedURLs.set(u, g), g;
    }
  }
  return $0 = c, $0;
}
var G0, Tn;
function xo() {
  if (Tn) return G0;
  Tn = 1;
  const e = 39, t = 34, i = 92, n = 47, o = 10, s = 32, l = 12, d = 9, h = 13, a = 91, c = 93, b = 40, u = 41, r = 123, g = 125, x = 59, m = 42, f = 58, y = 64, w = /[\t\n\f\r "#'()/;[\\\]{}]/g, A = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, p = /.[\r\n"'(/\\]/, _ = /[\da-f]/i;
  return G0 = function(C, R = {}) {
    let D = C.css.valueOf(), E = R.ignoreErrors, T, I, P, O, j, F, G, Z, W, ve, Ge = D.length, z = 0, je = [], tu = [];
    function Wu() {
      return z;
    }
    function De(L) {
      throw C.error("Unclosed " + L, z);
    }
    function Zu() {
      return tu.length === 0 && z >= Ge;
    }
    function Ou(L) {
      if (tu.length) return tu.pop();
      if (z >= Ge) return;
      let k = L ? L.ignoreUnclosed : !1;
      switch (T = D.charCodeAt(z), T) {
        case o:
        case s:
        case d:
        case h:
        case l: {
          O = z;
          do
            O += 1, T = D.charCodeAt(O);
          while (T === s || T === o || T === d || T === h || T === l);
          F = ["space", D.slice(z, O)], z = O - 1;
          break;
        }
        case a:
        case c:
        case r:
        case g:
        case f:
        case x:
        case u: {
          let M = String.fromCharCode(T);
          F = [M, M, z];
          break;
        }
        case b: {
          if (ve = je.length ? je.pop()[1] : "", W = D.charCodeAt(z + 1), ve === "url" && W !== e && W !== t && W !== s && W !== o && W !== d && W !== l && W !== h) {
            O = z;
            do {
              if (G = !1, O = D.indexOf(")", O + 1), O === -1)
                if (E || k) {
                  O = z;
                  break;
                } else
                  De("bracket");
              for (Z = O; D.charCodeAt(Z - 1) === i; )
                Z -= 1, G = !G;
            } while (G);
            F = ["brackets", D.slice(z, O + 1), z, O], z = O;
          } else
            O = D.indexOf(")", z + 1), I = D.slice(z, O + 1), O === -1 || p.test(I) ? F = ["(", "(", z] : (F = ["brackets", I, z, O], z = O);
          break;
        }
        case e:
        case t: {
          j = T === e ? "'" : '"', O = z;
          do {
            if (G = !1, O = D.indexOf(j, O + 1), O === -1)
              if (E || k) {
                O = z + 1;
                break;
              } else
                De("string");
            for (Z = O; D.charCodeAt(Z - 1) === i; )
              Z -= 1, G = !G;
          } while (G);
          F = ["string", D.slice(z, O + 1), z, O], z = O;
          break;
        }
        case y: {
          w.lastIndex = z + 1, w.test(D), w.lastIndex === 0 ? O = D.length - 1 : O = w.lastIndex - 2, F = ["at-word", D.slice(z, O + 1), z, O], z = O;
          break;
        }
        case i: {
          for (O = z, P = !0; D.charCodeAt(O + 1) === i; )
            O += 1, P = !P;
          if (T = D.charCodeAt(O + 1), P && T !== n && T !== s && T !== o && T !== d && T !== h && T !== l && (O += 1, _.test(D.charAt(O)))) {
            for (; _.test(D.charAt(O + 1)); )
              O += 1;
            D.charCodeAt(O + 1) === s && (O += 1);
          }
          F = ["word", D.slice(z, O + 1), z, O], z = O;
          break;
        }
        default: {
          T === n && D.charCodeAt(z + 1) === m ? (O = D.indexOf("*/", z + 2) + 1, O === 0 && (E || k ? O = D.length : De("comment")), F = ["comment", D.slice(z, O + 1), z, O], z = O) : (A.lastIndex = z + 1, A.test(D), A.lastIndex === 0 ? O = D.length - 1 : O = A.lastIndex - 2, F = ["word", D.slice(z, O + 1), z, O], je.push(F), z = O);
          break;
        }
      }
      return z++, F;
    }
    function fu(L) {
      tu.push(L);
    }
    return {
      back: fu,
      endOfFile: Zu,
      nextToken: Ou,
      position: Wu
    };
  }, G0;
}
var z0, Nn;
function wo() {
  if (Nn) return z0;
  Nn = 1;
  let e = Sr(), t = c0(), i = o0(), n = _t(), o = Nr(), s = xo();
  const l = {
    empty: !0,
    space: !0
  };
  function d(a) {
    for (let c = a.length - 1; c >= 0; c--) {
      let b = a[c], u = b[3] || b[2];
      if (u) return u;
    }
  }
  class h {
    constructor(c) {
      this.input = c, this.root = new n(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: c, start: { column: 1, line: 1, offset: 0 } };
    }
    atrule(c) {
      let b = new e();
      b.name = c[1].slice(1), b.name === "" && this.unnamedAtrule(b, c), this.init(b, c[2]);
      let u, r, g, x = !1, m = !1, f = [], y = [];
      for (; !this.tokenizer.endOfFile(); ) {
        if (c = this.tokenizer.nextToken(), u = c[0], u === "(" || u === "[" ? y.push(u === "(" ? ")" : "]") : u === "{" && y.length > 0 ? y.push("}") : u === y[y.length - 1] && y.pop(), y.length === 0)
          if (u === ";") {
            b.source.end = this.getPosition(c[2]), b.source.end.offset++, this.semicolon = !0;
            break;
          } else if (u === "{") {
            m = !0;
            break;
          } else if (u === "}") {
            if (f.length > 0) {
              for (g = f.length - 1, r = f[g]; r && r[0] === "space"; )
                r = f[--g];
              r && (b.source.end = this.getPosition(r[3] || r[2]), b.source.end.offset++);
            }
            this.end(c);
            break;
          } else
            f.push(c);
        else
          f.push(c);
        if (this.tokenizer.endOfFile()) {
          x = !0;
          break;
        }
      }
      b.raws.between = this.spacesAndCommentsFromEnd(f), f.length ? (b.raws.afterName = this.spacesAndCommentsFromStart(f), this.raw(b, "params", f), x && (c = f[f.length - 1], b.source.end = this.getPosition(c[3] || c[2]), b.source.end.offset++, this.spaces = b.raws.between, b.raws.between = "")) : (b.raws.afterName = "", b.params = ""), m && (b.nodes = [], this.current = b);
    }
    checkMissedSemicolon(c) {
      let b = this.colon(c);
      if (b === !1) return;
      let u = 0, r;
      for (let g = b - 1; g >= 0 && (r = c[g], !(r[0] !== "space" && (u += 1, u === 2))); g--)
        ;
      throw this.input.error(
        "Missed semicolon",
        r[0] === "word" ? r[3] + 1 : r[2]
      );
    }
    colon(c) {
      let b = 0, u, r, g;
      for (let [x, m] of c.entries()) {
        if (r = m, g = r[0], g === "(" && (b += 1), g === ")" && (b -= 1), b === 0 && g === ":")
          if (!u)
            this.doubleColon(r);
          else {
            if (u[0] === "word" && u[1] === "progid")
              continue;
            return x;
          }
        u = r;
      }
      return !1;
    }
    comment(c) {
      let b = new t();
      this.init(b, c[2]), b.source.end = this.getPosition(c[3] || c[2]), b.source.end.offset++;
      let u = c[1].slice(2, -2);
      if (/^\s*$/.test(u))
        b.text = "", b.raws.left = u, b.raws.right = "";
      else {
        let r = u.match(/^(\s*)([^]*\S)(\s*)$/);
        b.text = r[2], b.raws.left = r[1], b.raws.right = r[3];
      }
    }
    createTokenizer() {
      this.tokenizer = s(this.input);
    }
    decl(c, b) {
      let u = new i();
      this.init(u, c[0][2]);
      let r = c[c.length - 1];
      for (r[0] === ";" && (this.semicolon = !0, c.pop()), u.source.end = this.getPosition(
        r[3] || r[2] || d(c)
      ), u.source.end.offset++; c[0][0] !== "word"; )
        c.length === 1 && this.unknownWord(c), u.raws.before += c.shift()[1];
      for (u.source.start = this.getPosition(c[0][2]), u.prop = ""; c.length; ) {
        let y = c[0][0];
        if (y === ":" || y === "space" || y === "comment")
          break;
        u.prop += c.shift()[1];
      }
      u.raws.between = "";
      let g;
      for (; c.length; )
        if (g = c.shift(), g[0] === ":") {
          u.raws.between += g[1];
          break;
        } else
          g[0] === "word" && /\w/.test(g[1]) && this.unknownWord([g]), u.raws.between += g[1];
      (u.prop[0] === "_" || u.prop[0] === "*") && (u.raws.before += u.prop[0], u.prop = u.prop.slice(1));
      let x = [], m;
      for (; c.length && (m = c[0][0], !(m !== "space" && m !== "comment")); )
        x.push(c.shift());
      this.precheckMissedSemicolon(c);
      for (let y = c.length - 1; y >= 0; y--) {
        if (g = c[y], g[1].toLowerCase() === "!important") {
          u.important = !0;
          let w = this.stringFrom(c, y);
          w = this.spacesFromEnd(c) + w, w !== " !important" && (u.raws.important = w);
          break;
        } else if (g[1].toLowerCase() === "important") {
          let w = c.slice(0), A = "";
          for (let p = y; p > 0; p--) {
            let _ = w[p][0];
            if (A.trim().startsWith("!") && _ !== "space")
              break;
            A = w.pop()[1] + A;
          }
          A.trim().startsWith("!") && (u.important = !0, u.raws.important = A, c = w);
        }
        if (g[0] !== "space" && g[0] !== "comment")
          break;
      }
      c.some((y) => y[0] !== "space" && y[0] !== "comment") && (u.raws.between += x.map((y) => y[1]).join(""), x = []), this.raw(u, "value", x.concat(c), b), u.value.includes(":") && !b && this.checkMissedSemicolon(c);
    }
    doubleColon(c) {
      throw this.input.error(
        "Double colon",
        { offset: c[2] },
        { offset: c[2] + c[1].length }
      );
    }
    emptyRule(c) {
      let b = new o();
      this.init(b, c[2]), b.selector = "", b.raws.between = "", this.current = b;
    }
    end(c) {
      this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(c[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(c);
    }
    endFile() {
      this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
    }
    freeSemicolon(c) {
      if (this.spaces += c[1], this.current.nodes) {
        let b = this.current.nodes[this.current.nodes.length - 1];
        b && b.type === "rule" && !b.raws.ownSemicolon && (b.raws.ownSemicolon = this.spaces, this.spaces = "", b.source.end = this.getPosition(c[2]), b.source.end.offset += b.raws.ownSemicolon.length);
      }
    }
    // Helpers
    getPosition(c) {
      let b = this.input.fromOffset(c);
      return {
        column: b.col,
        line: b.line,
        offset: c
      };
    }
    init(c, b) {
      this.current.push(c), c.source = {
        input: this.input,
        start: this.getPosition(b)
      }, c.raws.before = this.spaces, this.spaces = "", c.type !== "comment" && (this.semicolon = !1);
    }
    other(c) {
      let b = !1, u = null, r = !1, g = null, x = [], m = c[1].startsWith("--"), f = [], y = c;
      for (; y; ) {
        if (u = y[0], f.push(y), u === "(" || u === "[")
          g || (g = y), x.push(u === "(" ? ")" : "]");
        else if (m && r && u === "{")
          g || (g = y), x.push("}");
        else if (x.length === 0)
          if (u === ";")
            if (r) {
              this.decl(f, m);
              return;
            } else
              break;
          else if (u === "{") {
            this.rule(f);
            return;
          } else if (u === "}") {
            this.tokenizer.back(f.pop()), b = !0;
            break;
          } else u === ":" && (r = !0);
        else u === x[x.length - 1] && (x.pop(), x.length === 0 && (g = null));
        y = this.tokenizer.nextToken();
      }
      if (this.tokenizer.endOfFile() && (b = !0), x.length > 0 && this.unclosedBracket(g), b && r) {
        if (!m)
          for (; f.length && (y = f[f.length - 1][0], !(y !== "space" && y !== "comment")); )
            this.tokenizer.back(f.pop());
        this.decl(f, m);
      } else
        this.unknownWord(f);
    }
    parse() {
      let c;
      for (; !this.tokenizer.endOfFile(); )
        switch (c = this.tokenizer.nextToken(), c[0]) {
          case "space":
            this.spaces += c[1];
            break;
          case ";":
            this.freeSemicolon(c);
            break;
          case "}":
            this.end(c);
            break;
          case "comment":
            this.comment(c);
            break;
          case "at-word":
            this.atrule(c);
            break;
          case "{":
            this.emptyRule(c);
            break;
          default:
            this.other(c);
            break;
        }
      this.endFile();
    }
    precheckMissedSemicolon() {
    }
    raw(c, b, u, r) {
      let g, x, m = u.length, f = "", y = !0, w, A;
      for (let p = 0; p < m; p += 1)
        g = u[p], x = g[0], x === "space" && p === m - 1 && !r ? y = !1 : x === "comment" ? (A = u[p - 1] ? u[p - 1][0] : "empty", w = u[p + 1] ? u[p + 1][0] : "empty", !l[A] && !l[w] ? f.slice(-1) === "," ? y = !1 : f += g[1] : y = !1) : f += g[1];
      if (!y) {
        let p = u.reduce((_, S) => _ + S[1], "");
        c.raws[b] = { raw: p, value: f };
      }
      c[b] = f;
    }
    rule(c) {
      c.pop();
      let b = new o();
      this.init(b, c[0][2]), b.raws.between = this.spacesAndCommentsFromEnd(c), this.raw(b, "selector", c), this.current = b;
    }
    spacesAndCommentsFromEnd(c) {
      let b, u = "";
      for (; c.length && (b = c[c.length - 1][0], !(b !== "space" && b !== "comment")); )
        u = c.pop()[1] + u;
      return u;
    }
    // Errors
    spacesAndCommentsFromStart(c) {
      let b, u = "";
      for (; c.length && (b = c[0][0], !(b !== "space" && b !== "comment")); )
        u += c.shift()[1];
      return u;
    }
    spacesFromEnd(c) {
      let b, u = "";
      for (; c.length && (b = c[c.length - 1][0], b === "space"); )
        u = c.pop()[1] + u;
      return u;
    }
    stringFrom(c, b) {
      let u = "";
      for (let r = b; r < c.length; r++)
        u += c[r][1];
      return c.splice(b, c.length - b), u;
    }
    unclosedBlock() {
      let c = this.current.source.start;
      throw this.input.error("Unclosed block", c.line, c.column);
    }
    unclosedBracket(c) {
      throw this.input.error(
        "Unclosed bracket",
        { offset: c[2] },
        { offset: c[2] + 1 }
      );
    }
    unexpectedClose(c) {
      throw this.input.error(
        "Unexpected }",
        { offset: c[2] },
        { offset: c[2] + 1 }
      );
    }
    unknownWord(c) {
      throw this.input.error(
        "Unknown word " + c[0][1],
        { offset: c[0][2] },
        { offset: c[0][2] + c[0][1].length }
      );
    }
    unnamedAtrule(c, b) {
      throw this.input.error(
        "At-rule without name",
        { offset: b[2] },
        { offset: b[2] + b[1].length }
      );
    }
  }
  return z0 = h, z0;
}
var W0, Cn;
function Cr() {
  if (Cn) return W0;
  Cn = 1;
  let e = zu(), t = l0(), i = wo();
  function n(o, s) {
    let l = new t(o, s), d = new i(l);
    try {
      d.parse();
    } catch (h) {
      throw process.env.NODE_ENV !== "production" && h.name === "CssSyntaxError" && s && s.from && (/\.scss$/i.test(s.from) ? h.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(s.from) ? h.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(s.from) && (h.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), h;
    }
    return d.root;
  }
  return W0 = n, n.default = n, e.registerParse(n), W0;
}
var Z0, In;
function ja() {
  if (In) return Z0;
  In = 1;
  class e {
    constructor(i, n = {}) {
      if (this.type = "warning", this.text = i, n.node && n.node.source) {
        let o = n.node.rangeBy(n);
        this.line = o.start.line, this.column = o.start.column, this.endLine = o.end.line, this.endColumn = o.end.column;
      }
      for (let o in n) this[o] = n[o];
    }
    toString() {
      return this.node ? this.node.error(this.text, {
        index: this.index,
        plugin: this.plugin,
        word: this.word
      }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
    }
  }
  return Z0 = e, e.default = e, Z0;
}
var X0, On;
function Ir() {
  if (On) return X0;
  On = 1;
  let e = ja();
  class t {
    get content() {
      return this.css;
    }
    constructor(n, o, s) {
      this.processor = n, this.messages = [], this.root = o, this.opts = s, this.css = "", this.map = void 0;
    }
    toString() {
      return this.css;
    }
    warn(n, o = {}) {
      o.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (o.plugin = this.lastPlugin.postcssPlugin);
      let s = new e(n, o);
      return this.messages.push(s), s;
    }
    warnings() {
      return this.messages.filter((n) => n.type === "warning");
    }
  }
  return X0 = t, t.default = t, X0;
}
var J0, qn;
function Ua() {
  if (qn) return J0;
  qn = 1;
  let e = {};
  return J0 = function(i) {
    e[i] || (e[i] = !0, typeof console < "u" && console.warn && console.warn(i));
  }, J0;
}
var Y0, Rn;
function Ha() {
  if (Rn) return Y0;
  Rn = 1;
  let e = zu(), t = Tr(), i = Ba(), n = Cr(), o = Ir(), s = _t(), l = a0(), { isClean: d, my: h } = Ar(), a = Ua();
  const c = {
    atrule: "AtRule",
    comment: "Comment",
    decl: "Declaration",
    document: "Document",
    root: "Root",
    rule: "Rule"
  }, b = {
    AtRule: !0,
    AtRuleExit: !0,
    Comment: !0,
    CommentExit: !0,
    Declaration: !0,
    DeclarationExit: !0,
    Document: !0,
    DocumentExit: !0,
    Once: !0,
    OnceExit: !0,
    postcssPlugin: !0,
    prepare: !0,
    Root: !0,
    RootExit: !0,
    Rule: !0,
    RuleExit: !0
  }, u = {
    Once: !0,
    postcssPlugin: !0,
    prepare: !0
  }, r = 0;
  function g(A) {
    return typeof A == "object" && typeof A.then == "function";
  }
  function x(A) {
    let p = !1, _ = c[A.type];
    return A.type === "decl" ? p = A.prop.toLowerCase() : A.type === "atrule" && (p = A.name.toLowerCase()), p && A.append ? [
      _,
      _ + "-" + p,
      r,
      _ + "Exit",
      _ + "Exit-" + p
    ] : p ? [_, _ + "-" + p, _ + "Exit", _ + "Exit-" + p] : A.append ? [_, r, _ + "Exit"] : [_, _ + "Exit"];
  }
  function m(A) {
    let p;
    return A.type === "document" ? p = ["Document", r, "DocumentExit"] : A.type === "root" ? p = ["Root", r, "RootExit"] : p = x(A), {
      eventIndex: 0,
      events: p,
      iterator: 0,
      node: A,
      visitorIndex: 0,
      visitors: []
    };
  }
  function f(A) {
    return A[d] = !1, A.nodes && A.nodes.forEach((p) => f(p)), A;
  }
  let y = {};
  class w {
    get content() {
      return this.stringify().content;
    }
    get css() {
      return this.stringify().css;
    }
    get map() {
      return this.stringify().map;
    }
    get messages() {
      return this.sync().messages;
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      return this.sync().root;
    }
    get [Symbol.toStringTag]() {
      return "LazyResult";
    }
    constructor(p, _, S) {
      this.stringified = !1, this.processed = !1;
      let C;
      if (typeof _ == "object" && _ !== null && (_.type === "root" || _.type === "document"))
        C = f(_);
      else if (_ instanceof w || _ instanceof o)
        C = f(_.root), _.map && (typeof S.map > "u" && (S.map = {}), S.map.inline || (S.map.inline = !1), S.map.prev = _.map);
      else {
        let R = n;
        S.syntax && (R = S.syntax.parse), S.parser && (R = S.parser), R.parse && (R = R.parse);
        try {
          C = R(_, S);
        } catch (D) {
          this.processed = !0, this.error = D;
        }
        C && !C[h] && e.rebuild(C);
      }
      this.result = new o(p, C, S), this.helpers = { ...y, postcss: y, result: this.result }, this.plugins = this.processor.plugins.map((R) => typeof R == "object" && R.prepare ? { ...R, ...R.prepare(this.result) } : R);
    }
    async() {
      return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
    }
    catch(p) {
      return this.async().catch(p);
    }
    finally(p) {
      return this.async().then(p, p);
    }
    getAsyncError() {
      throw new Error("Use process(css).then(cb) to work with async plugins");
    }
    handleError(p, _) {
      let S = this.result.lastPlugin;
      try {
        if (_ && _.addToError(p), this.error = p, p.name === "CssSyntaxError" && !p.plugin)
          p.plugin = S.postcssPlugin, p.setMessage();
        else if (S.postcssVersion && process.env.NODE_ENV !== "production") {
          let C = S.postcssPlugin, R = S.postcssVersion, D = this.result.processor.version, E = R.split("."), T = D.split(".");
          (E[0] !== T[0] || parseInt(E[1]) > parseInt(T[1])) && console.error(
            "Unknown error from PostCSS plugin. Your current PostCSS version is " + D + ", but " + C + " uses " + R + ". Perhaps this is the source of the error below."
          );
        }
      } catch (C) {
        console && console.error && console.error(C);
      }
      return p;
    }
    prepareVisitors() {
      this.listeners = {};
      let p = (_, S, C) => {
        this.listeners[S] || (this.listeners[S] = []), this.listeners[S].push([_, C]);
      };
      for (let _ of this.plugins)
        if (typeof _ == "object")
          for (let S in _) {
            if (!b[S] && /^[A-Z]/.test(S))
              throw new Error(
                `Unknown event ${S} in ${_.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
              );
            if (!u[S])
              if (typeof _[S] == "object")
                for (let C in _[S])
                  C === "*" ? p(_, S, _[S][C]) : p(
                    _,
                    S + "-" + C.toLowerCase(),
                    _[S][C]
                  );
              else typeof _[S] == "function" && p(_, S, _[S]);
          }
      this.hasListener = Object.keys(this.listeners).length > 0;
    }
    async runAsync() {
      this.plugin = 0;
      for (let p = 0; p < this.plugins.length; p++) {
        let _ = this.plugins[p], S = this.runOnRoot(_);
        if (g(S))
          try {
            await S;
          } catch (C) {
            throw this.handleError(C);
          }
      }
      if (this.prepareVisitors(), this.hasListener) {
        let p = this.result.root;
        for (; !p[d]; ) {
          p[d] = !0;
          let _ = [m(p)];
          for (; _.length > 0; ) {
            let S = this.visitTick(_);
            if (g(S))
              try {
                await S;
              } catch (C) {
                let R = _[_.length - 1].node;
                throw this.handleError(C, R);
              }
          }
        }
        if (this.listeners.OnceExit)
          for (let [_, S] of this.listeners.OnceExit) {
            this.result.lastPlugin = _;
            try {
              if (p.type === "document") {
                let C = p.nodes.map(
                  (R) => S(R, this.helpers)
                );
                await Promise.all(C);
              } else
                await S(p, this.helpers);
            } catch (C) {
              throw this.handleError(C);
            }
          }
      }
      return this.processed = !0, this.stringify();
    }
    runOnRoot(p) {
      this.result.lastPlugin = p;
      try {
        if (typeof p == "object" && p.Once) {
          if (this.result.root.type === "document") {
            let _ = this.result.root.nodes.map(
              (S) => p.Once(S, this.helpers)
            );
            return g(_[0]) ? Promise.all(_) : _;
          }
          return p.Once(this.result.root, this.helpers);
        } else if (typeof p == "function")
          return p(this.result.root, this.result);
      } catch (_) {
        throw this.handleError(_);
      }
    }
    stringify() {
      if (this.error) throw this.error;
      if (this.stringified) return this.result;
      this.stringified = !0, this.sync();
      let p = this.result.opts, _ = l;
      p.syntax && (_ = p.syntax.stringify), p.stringifier && (_ = p.stringifier), _.stringify && (_ = _.stringify);
      let C = new i(_, this.result.root, this.result.opts).generate();
      return this.result.css = C[0], this.result.map = C[1], this.result;
    }
    sync() {
      if (this.error) throw this.error;
      if (this.processed) return this.result;
      if (this.processed = !0, this.processing)
        throw this.getAsyncError();
      for (let p of this.plugins) {
        let _ = this.runOnRoot(p);
        if (g(_))
          throw this.getAsyncError();
      }
      if (this.prepareVisitors(), this.hasListener) {
        let p = this.result.root;
        for (; !p[d]; )
          p[d] = !0, this.walkSync(p);
        if (this.listeners.OnceExit)
          if (p.type === "document")
            for (let _ of p.nodes)
              this.visitSync(this.listeners.OnceExit, _);
          else
            this.visitSync(this.listeners.OnceExit, p);
      }
      return this.result;
    }
    then(p, _) {
      return process.env.NODE_ENV !== "production" && ("from" in this.opts || a(
        "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
      )), this.async().then(p, _);
    }
    toString() {
      return this.css;
    }
    visitSync(p, _) {
      for (let [S, C] of p) {
        this.result.lastPlugin = S;
        let R;
        try {
          R = C(_, this.helpers);
        } catch (D) {
          throw this.handleError(D, _.proxyOf);
        }
        if (_.type !== "root" && _.type !== "document" && !_.parent)
          return !0;
        if (g(R))
          throw this.getAsyncError();
      }
    }
    visitTick(p) {
      let _ = p[p.length - 1], { node: S, visitors: C } = _;
      if (S.type !== "root" && S.type !== "document" && !S.parent) {
        p.pop();
        return;
      }
      if (C.length > 0 && _.visitorIndex < C.length) {
        let [D, E] = C[_.visitorIndex];
        _.visitorIndex += 1, _.visitorIndex === C.length && (_.visitors = [], _.visitorIndex = 0), this.result.lastPlugin = D;
        try {
          return E(S.toProxy(), this.helpers);
        } catch (T) {
          throw this.handleError(T, S);
        }
      }
      if (_.iterator !== 0) {
        let D = _.iterator, E;
        for (; E = S.nodes[S.indexes[D]]; )
          if (S.indexes[D] += 1, !E[d]) {
            E[d] = !0, p.push(m(E));
            return;
          }
        _.iterator = 0, delete S.indexes[D];
      }
      let R = _.events;
      for (; _.eventIndex < R.length; ) {
        let D = R[_.eventIndex];
        if (_.eventIndex += 1, D === r) {
          S.nodes && S.nodes.length && (S[d] = !0, _.iterator = S.getIterator());
          return;
        } else if (this.listeners[D]) {
          _.visitors = this.listeners[D];
          return;
        }
      }
      p.pop();
    }
    walkSync(p) {
      p[d] = !0;
      let _ = x(p);
      for (let S of _)
        if (S === r)
          p.nodes && p.each((C) => {
            C[d] || this.walkSync(C);
          });
        else {
          let C = this.listeners[S];
          if (C && this.visitSync(C, p.toProxy()))
            return;
        }
    }
    warnings() {
      return this.sync().warnings();
    }
  }
  return w.registerPostcss = (A) => {
    y = A;
  }, Y0 = w, w.default = w, s.registerLazyResult(w), t.registerLazyResult(w), Y0;
}
var Q0, Dn;
function Eo() {
  if (Dn) return Q0;
  Dn = 1;
  let e = Ba(), t = Cr();
  const i = Ir();
  let n = a0(), o = Ua();
  class s {
    get content() {
      return this.result.css;
    }
    get css() {
      return this.result.css;
    }
    get map() {
      return this.result.map;
    }
    get messages() {
      return [];
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      if (this._root)
        return this._root;
      let d, h = t;
      try {
        d = h(this._css, this._opts);
      } catch (a) {
        this.error = a;
      }
      if (this.error)
        throw this.error;
      return this._root = d, d;
    }
    get [Symbol.toStringTag]() {
      return "NoWorkResult";
    }
    constructor(d, h, a) {
      h = h.toString(), this.stringified = !1, this._processor = d, this._css = h, this._opts = a, this._map = void 0;
      let c, b = n;
      this.result = new i(this._processor, c, this._opts), this.result.css = h;
      let u = this;
      Object.defineProperty(this.result, "root", {
        get() {
          return u.root;
        }
      });
      let r = new e(b, c, this._opts, h);
      if (r.isMap()) {
        let [g, x] = r.generate();
        g && (this.result.css = g), x && (this.result.map = x);
      } else
        r.clearAnnotation(), this.result.css = r.css;
    }
    async() {
      return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
    }
    catch(d) {
      return this.async().catch(d);
    }
    finally(d) {
      return this.async().then(d, d);
    }
    sync() {
      if (this.error) throw this.error;
      return this.result;
    }
    then(d, h) {
      return process.env.NODE_ENV !== "production" && ("from" in this._opts || o(
        "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
      )), this.async().then(d, h);
    }
    toString() {
      return this._css;
    }
    warnings() {
      return [];
    }
  }
  return Q0 = s, s.default = s, Q0;
}
var K0, Ln;
function _o() {
  if (Ln) return K0;
  Ln = 1;
  let e = Tr(), t = Ha(), i = Eo(), n = _t();
  class o {
    constructor(l = []) {
      this.version = "8.5.6", this.plugins = this.normalize(l);
    }
    normalize(l) {
      let d = [];
      for (let h of l)
        if (h.postcss === !0 ? h = h() : h.postcss && (h = h.postcss), typeof h == "object" && Array.isArray(h.plugins))
          d = d.concat(h.plugins);
        else if (typeof h == "object" && h.postcssPlugin)
          d.push(h);
        else if (typeof h == "function")
          d.push(h);
        else if (typeof h == "object" && (h.parse || h.stringify)) {
          if (process.env.NODE_ENV !== "production")
            throw new Error(
              "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
            );
        } else
          throw new Error(h + " is not a PostCSS plugin");
      return d;
    }
    process(l, d = {}) {
      return !this.plugins.length && !d.parser && !d.stringifier && !d.syntax ? new i(this, l, d) : new t(this, l, d);
    }
    use(l) {
      return this.plugins = this.plugins.concat(this.normalize([l])), this;
    }
  }
  return K0 = o, o.default = o, n.registerProcessor(o), e.registerProcessor(o), K0;
}
var er, Pn;
function Ao() {
  if (Pn) return er;
  Pn = 1;
  let e = Sr(), t = c0(), i = zu(), n = _r(), o = o0(), s = Tr(), l = yo(), d = l0(), h = Ha(), a = Ma(), c = s0(), b = Cr(), u = _o(), r = Ir(), g = _t(), x = Nr(), m = a0(), f = ja();
  function y(...w) {
    return w.length === 1 && Array.isArray(w[0]) && (w = w[0]), new u(w);
  }
  return y.plugin = function(A, p) {
    let _ = !1;
    function S(...R) {
      console && console.warn && !_ && (_ = !0, console.warn(
        A + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
      ), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(
        A + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
      ));
      let D = p(...R);
      return D.postcssPlugin = A, D.postcssVersion = new u().version, D;
    }
    let C;
    return Object.defineProperty(S, "postcss", {
      get() {
        return C || (C = S()), C;
      }
    }), S.process = function(R, D, E) {
      return y([S(E)]).process(R, D);
    }, S;
  }, y.stringify = m, y.parse = b, y.fromJSON = l, y.list = a, y.comment = (w) => new t(w), y.atRule = (w) => new e(w), y.decl = (w) => new o(w), y.rule = (w) => new x(w), y.root = (w) => new g(w), y.document = (w) => new s(w), y.CssSyntaxError = n, y.Declaration = o, y.Container = i, y.Processor = u, y.Document = s, y.Comment = t, y.Warning = f, y.AtRule = e, y.Result = r, y.Input = d, y.Rule = x, y.Root = g, y.Node = c, h.registerPostcss(y), er = y, y.default = y, er;
}
var ur, kn;
function So() {
  if (kn) return ur;
  kn = 1;
  const e = /* @__PURE__ */ co(), t = oo(), { isPlainObject: i } = lo(), n = fo(), o = ho(), { parse: s } = Ao(), l = [
    "img",
    "audio",
    "video",
    "picture",
    "svg",
    "object",
    "map",
    "iframe",
    "embed"
  ], d = ["script", "style"];
  function h(m, f) {
    m && Object.keys(m).forEach(function(y) {
      f(m[y], y);
    });
  }
  function a(m, f) {
    return {}.hasOwnProperty.call(m, f);
  }
  function c(m, f) {
    const y = [];
    return h(m, function(w) {
      f(w) && y.push(w);
    }), y;
  }
  function b(m) {
    for (const f in m)
      if (a(m, f))
        return !1;
    return !0;
  }
  function u(m) {
    return m.map(function(f) {
      if (!f.url)
        throw new Error("URL missing");
      return f.url + (f.w ? ` ${f.w}w` : "") + (f.h ? ` ${f.h}h` : "") + (f.d ? ` ${f.d}x` : "");
    }).join(", ");
  }
  ur = g;
  const r = /^[^\0\t\n\f\r /<=>]+$/;
  function g(m, f, y) {
    if (m == null)
      return "";
    typeof m == "number" && (m = m.toString());
    let w = "", A = "";
    function p(L, k) {
      const M = this;
      this.tag = L, this.attribs = k || {}, this.tagPosition = w.length, this.text = "", this.openingTagLength = 0, this.mediaChildren = [], this.updateParentNodeText = function() {
        if (j.length) {
          const $ = j[j.length - 1];
          $.text += M.text;
        }
      }, this.updateParentNodeMediaChildren = function() {
        j.length && l.includes(this.tag) && j[j.length - 1].mediaChildren.push(this.tag);
      };
    }
    f = Object.assign({}, g.defaults, f), f.parser = Object.assign({}, x, f.parser);
    const _ = function(L) {
      return f.allowedTags === !1 || (f.allowedTags || []).indexOf(L) > -1;
    };
    d.forEach(function(L) {
      _(L) && !f.allowVulnerableTags && console.warn(`

⚠️ Your \`allowedTags\` option includes, \`${L}\`, which is inherently
vulnerable to XSS attacks. Please remove it from \`allowedTags\`.
Or, to disable this warning, add the \`allowVulnerableTags\` option
and ensure you are accounting for this risk.

`);
    });
    const S = f.nonTextTags || [
      "script",
      "style",
      "textarea",
      "option"
    ];
    let C, R;
    f.allowedAttributes && (C = {}, R = {}, h(f.allowedAttributes, function(L, k) {
      C[k] = [];
      const M = [];
      L.forEach(function($) {
        typeof $ == "string" && $.indexOf("*") >= 0 ? M.push(t($).replace(/\\\*/g, ".*")) : C[k].push($);
      }), M.length && (R[k] = new RegExp("^(" + M.join("|") + ")$"));
    }));
    const D = {}, E = {}, T = {};
    h(f.allowedClasses, function(L, k) {
      if (C && (a(C, k) || (C[k] = []), C[k].push("class")), D[k] = L, Array.isArray(L)) {
        const M = [];
        D[k] = [], T[k] = [], L.forEach(function($) {
          typeof $ == "string" && $.indexOf("*") >= 0 ? M.push(t($).replace(/\\\*/g, ".*")) : $ instanceof RegExp ? T[k].push($) : D[k].push($);
        }), M.length && (E[k] = new RegExp("^(" + M.join("|") + ")$"));
      }
    });
    const I = {};
    let P;
    h(f.transformTags, function(L, k) {
      let M;
      typeof L == "function" ? M = L : typeof L == "string" && (M = g.simpleTransform(L)), k === "*" ? P = M : I[k] = M;
    });
    let O, j, F, G, Z, W, ve = !1;
    z();
    const Ge = new e.Parser({
      onopentag: function(L, k) {
        if (f.onOpenTag && f.onOpenTag(L, k), f.enforceHtmlBoundary && L === "html" && z(), Z) {
          W++;
          return;
        }
        const M = new p(L, k);
        j.push(M);
        let $ = !1;
        const ge = !!M.text;
        let ee;
        if (a(I, L) && (ee = I[L](L, k), M.attribs = k = ee.attribs, ee.text !== void 0 && (M.innerText = ee.text), L !== ee.tagName && (M.name = L = ee.tagName, G[O] = ee.tagName)), P && (ee = P(L, k), M.attribs = k = ee.attribs, L !== ee.tagName && (M.name = L = ee.tagName, G[O] = ee.tagName)), (!_(L) || f.disallowedTagsMode === "recursiveEscape" && !b(F) || f.nestingLimit != null && O >= f.nestingLimit) && ($ = !0, F[O] = !0, (f.disallowedTagsMode === "discard" || f.disallowedTagsMode === "completelyDiscard") && S.indexOf(L) !== -1 && (Z = !0, W = 1)), O++, $) {
          if (f.disallowedTagsMode === "discard" || f.disallowedTagsMode === "completelyDiscard") {
            if (M.innerText && !ge) {
              const ue = je(M.innerText);
              f.textFilter ? w += f.textFilter(ue, L) : w += ue, ve = !0;
            }
            return;
          }
          A = w, w = "";
        }
        w += "<" + L, L === "script" && (f.allowedScriptHostnames || f.allowedScriptDomains) && (M.innerText = ""), $ && (f.disallowedTagsMode === "escape" || f.disallowedTagsMode === "recursiveEscape") && f.preserveEscapedAttributes ? h(k, function(ue, Y) {
          w += " " + Y + '="' + je(ue || "", !0) + '"';
        }) : (!C || a(C, L) || C["*"]) && h(k, function(ue, Y) {
          if (!r.test(Y)) {
            delete M.attribs[Y];
            return;
          }
          if (ue === "" && !f.allowedEmptyAttributes.includes(Y) && (f.nonBooleanAttributes.includes(Y) || f.nonBooleanAttributes.includes("*"))) {
            delete M.attribs[Y];
            return;
          }
          let _e = !1;
          if (!C || a(C, L) && C[L].indexOf(Y) !== -1 || C["*"] && C["*"].indexOf(Y) !== -1 || a(R, L) && R[L].test(Y) || R["*"] && R["*"].test(Y))
            _e = !0;
          else if (C && C[L]) {
            for (const re of C[L])
              if (i(re) && re.name && re.name === Y) {
                _e = !0;
                let Q = "";
                if (re.multiple === !0) {
                  const ie = ue.split(" ");
                  for (const Oe of ie)
                    re.values.indexOf(Oe) !== -1 && (Q === "" ? Q = Oe : Q += " " + Oe);
                } else re.values.indexOf(ue) >= 0 && (Q = ue);
                ue = Q;
              }
          }
          if (_e) {
            if (f.allowedSchemesAppliedToAttributes.indexOf(Y) !== -1 && tu(L, ue)) {
              delete M.attribs[Y];
              return;
            }
            if (L === "script" && Y === "src") {
              let re = !0;
              try {
                const Q = Wu(ue);
                if (f.allowedScriptHostnames || f.allowedScriptDomains) {
                  const ie = (f.allowedScriptHostnames || []).find(function(we) {
                    return we === Q.url.hostname;
                  }), Oe = (f.allowedScriptDomains || []).find(function(we) {
                    return Q.url.hostname === we || Q.url.hostname.endsWith(`.${we}`);
                  });
                  re = ie || Oe;
                }
              } catch {
                re = !1;
              }
              if (!re) {
                delete M.attribs[Y];
                return;
              }
            }
            if (L === "iframe" && Y === "src") {
              let re = !0;
              try {
                const Q = Wu(ue);
                if (Q.isRelativeUrl)
                  re = a(f, "allowIframeRelativeUrls") ? f.allowIframeRelativeUrls : !f.allowedIframeHostnames && !f.allowedIframeDomains;
                else if (f.allowedIframeHostnames || f.allowedIframeDomains) {
                  const ie = (f.allowedIframeHostnames || []).find(function(we) {
                    return we === Q.url.hostname;
                  }), Oe = (f.allowedIframeDomains || []).find(function(we) {
                    return Q.url.hostname === we || Q.url.hostname.endsWith(`.${we}`);
                  });
                  re = ie || Oe;
                }
              } catch {
                re = !1;
              }
              if (!re) {
                delete M.attribs[Y];
                return;
              }
            }
            if (Y === "srcset")
              try {
                let re = o(ue);
                if (re.forEach(function(Q) {
                  tu("srcset", Q.url) && (Q.evil = !0);
                }), re = c(re, function(Q) {
                  return !Q.evil;
                }), re.length)
                  ue = u(c(re, function(Q) {
                    return !Q.evil;
                  })), M.attribs[Y] = ue;
                else {
                  delete M.attribs[Y];
                  return;
                }
              } catch {
                delete M.attribs[Y];
                return;
              }
            if (Y === "class") {
              const re = D[L], Q = D["*"], ie = E[L], Oe = T[L], we = T["*"], Fe = E["*"], ye = [
                ie,
                Fe
              ].concat(Oe, we).filter(function(du) {
                return du;
              });
              if (re && Q ? ue = fu(ue, n(re, Q), ye) : ue = fu(ue, re || Q, ye), !ue.length) {
                delete M.attribs[Y];
                return;
              }
            }
            if (Y === "style") {
              if (f.parseStyleAttributes)
                try {
                  const re = s(L + " {" + ue + "}", { map: !1 }), Q = De(re, f.allowedStyles);
                  if (ue = Zu(Q), ue.length === 0) {
                    delete M.attribs[Y];
                    return;
                  }
                } catch {
                  typeof window < "u" && console.warn('Failed to parse "' + L + " {" + ue + `}", If you're running this in a browser, we recommend to disable style parsing: options.parseStyleAttributes: false, since this only works in a node environment due to a postcss dependency, More info: https://github.com/apostrophecms/sanitize-html/issues/547`), delete M.attribs[Y];
                  return;
                }
              else if (f.allowedStyles)
                throw new Error("allowedStyles option cannot be used together with parseStyleAttributes: false.");
            }
            w += " " + Y, ue && ue.length ? w += '="' + je(ue, !0) + '"' : f.allowedEmptyAttributes.includes(Y) && (w += '=""');
          } else
            delete M.attribs[Y];
        }), f.selfClosing.indexOf(L) !== -1 ? w += " />" : (w += ">", M.innerText && !ge && !f.textFilter && (w += je(M.innerText), ve = !0)), $ && (w = A + je(w), A = ""), M.openingTagLength = w.length - M.tagPosition;
      },
      ontext: function(L) {
        if (Z)
          return;
        const k = j[j.length - 1];
        let M;
        if (k && (M = k.tag, L = k.innerText !== void 0 ? k.innerText : L), f.disallowedTagsMode === "completelyDiscard" && !_(M))
          L = "";
        else if ((f.disallowedTagsMode === "discard" || f.disallowedTagsMode === "completelyDiscard") && (M === "script" || M === "style"))
          w += L;
        else if (!ve) {
          const $ = je(L, !1);
          f.textFilter ? w += f.textFilter($, M) : w += $;
        }
        if (j.length) {
          const $ = j[j.length - 1];
          $.text += L;
        }
      },
      onclosetag: function(L, k) {
        if (f.onCloseTag && f.onCloseTag(L, k), Z)
          if (W--, !W)
            Z = !1;
          else
            return;
        const M = j.pop();
        if (!M)
          return;
        if (M.tag !== L) {
          j.push(M);
          return;
        }
        Z = f.enforceHtmlBoundary ? L === "html" : !1, O--;
        const $ = F[O];
        if ($) {
          if (delete F[O], f.disallowedTagsMode === "discard" || f.disallowedTagsMode === "completelyDiscard") {
            M.updateParentNodeText();
            return;
          }
          A = w, w = "";
        }
        if (G[O] && (L = G[O], delete G[O]), f.exclusiveFilter) {
          const ge = f.exclusiveFilter(M);
          if (ge === "excludeTag") {
            $ && (w = A, A = ""), w = w.substring(0, M.tagPosition) + w.substring(M.tagPosition + M.openingTagLength);
            return;
          } else if (ge) {
            w = w.substring(0, M.tagPosition);
            return;
          }
        }
        if (M.updateParentNodeMediaChildren(), M.updateParentNodeText(), // Already output />
        f.selfClosing.indexOf(L) !== -1 || // Escaped tag, closing tag is implied
        k && !_(L) && ["escape", "recursiveEscape"].indexOf(f.disallowedTagsMode) >= 0) {
          $ && (w = A, A = "");
          return;
        }
        w += "</" + L + ">", $ && (w = A + je(w), A = ""), ve = !1;
      }
    }, f.parser);
    return Ge.write(m), Ge.end(), w;
    function z() {
      w = "", O = 0, j = [], F = {}, G = {}, Z = !1, W = 0;
    }
    function je(L, k) {
      return typeof L != "string" && (L = L + ""), f.parser.decodeEntities && (L = L.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), k && (L = L.replace(/"/g, "&quot;"))), L = L.replace(/&(?![a-zA-Z0-9#]{1,20};)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), k && (L = L.replace(/"/g, "&quot;")), L;
    }
    function tu(L, k) {
      for (k = k.replace(/[\x00-\x20]+/g, ""); ; ) {
        const ge = k.indexOf("<!--");
        if (ge === -1)
          break;
        const ee = k.indexOf("-->", ge + 4);
        if (ee === -1)
          break;
        k = k.substring(0, ge) + k.substring(ee + 3);
      }
      const M = k.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);
      if (!M)
        return k.match(/^[/\\]{2}/) ? !f.allowProtocolRelative : !1;
      const $ = M[1].toLowerCase();
      return a(f.allowedSchemesByTag, L) ? f.allowedSchemesByTag[L].indexOf($) === -1 : !f.allowedSchemes || f.allowedSchemes.indexOf($) === -1;
    }
    function Wu(L) {
      if (L = L.replace(/^(\w+:)?\s*[\\/]\s*[\\/]/, "$1//"), L.startsWith("relative:"))
        throw new Error("relative: exploit attempt");
      let k = "relative://relative-site";
      for (let ge = 0; ge < 100; ge++)
        k += `/${ge}`;
      const M = new URL(L, k);
      return {
        isRelativeUrl: M && M.hostname === "relative-site" && M.protocol === "relative:",
        url: M
      };
    }
    function De(L, k) {
      if (!k)
        return L;
      const M = L.nodes[0];
      let $;
      return k[M.selector] && k["*"] ? $ = n(
        k[M.selector],
        k["*"]
      ) : $ = k[M.selector] || k["*"], $ && (L.nodes[0].nodes = M.nodes.reduce(Ou($), [])), L;
    }
    function Zu(L) {
      return L.nodes[0].nodes.reduce(function(k, M) {
        return k.push(
          `${M.prop}:${M.value}${M.important ? " !important" : ""}`
        ), k;
      }, []).join(";");
    }
    function Ou(L) {
      return function(k, M) {
        return a(L, M.prop) && L[M.prop].some(function(ge) {
          return ge.test(M.value);
        }) && k.push(M), k;
      };
    }
    function fu(L, k, M) {
      return k ? (L = L.split(/\s+/), L.filter(function($) {
        return k.indexOf($) !== -1 || M.some(function(ge) {
          return ge.test($);
        });
      }).join(" ")) : L;
    }
  }
  const x = {
    decodeEntities: !0
  };
  return g.defaults = {
    allowedTags: [
      // Sections derived from MDN element categories and limited to the more
      // benign categories.
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element
      // Content sectioning
      "address",
      "article",
      "aside",
      "footer",
      "header",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "hgroup",
      "main",
      "nav",
      "section",
      // Text content
      "blockquote",
      "dd",
      "div",
      "dl",
      "dt",
      "figcaption",
      "figure",
      "hr",
      "li",
      "menu",
      "ol",
      "p",
      "pre",
      "ul",
      // Inline text semantics
      "a",
      "abbr",
      "b",
      "bdi",
      "bdo",
      "br",
      "cite",
      "code",
      "data",
      "dfn",
      "em",
      "i",
      "kbd",
      "mark",
      "q",
      "rb",
      "rp",
      "rt",
      "rtc",
      "ruby",
      "s",
      "samp",
      "small",
      "span",
      "strong",
      "sub",
      "sup",
      "time",
      "u",
      "var",
      "wbr",
      // Table content
      "caption",
      "col",
      "colgroup",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "tr"
    ],
    // Tags that cannot be boolean
    nonBooleanAttributes: [
      "abbr",
      "accept",
      "accept-charset",
      "accesskey",
      "action",
      "allow",
      "alt",
      "as",
      "autocapitalize",
      "autocomplete",
      "blocking",
      "charset",
      "cite",
      "class",
      "color",
      "cols",
      "colspan",
      "content",
      "contenteditable",
      "coords",
      "crossorigin",
      "data",
      "datetime",
      "decoding",
      "dir",
      "dirname",
      "download",
      "draggable",
      "enctype",
      "enterkeyhint",
      "fetchpriority",
      "for",
      "form",
      "formaction",
      "formenctype",
      "formmethod",
      "formtarget",
      "headers",
      "height",
      "hidden",
      "high",
      "href",
      "hreflang",
      "http-equiv",
      "id",
      "imagesizes",
      "imagesrcset",
      "inputmode",
      "integrity",
      "is",
      "itemid",
      "itemprop",
      "itemref",
      "itemtype",
      "kind",
      "label",
      "lang",
      "list",
      "loading",
      "low",
      "max",
      "maxlength",
      "media",
      "method",
      "min",
      "minlength",
      "name",
      "nonce",
      "optimum",
      "pattern",
      "ping",
      "placeholder",
      "popover",
      "popovertarget",
      "popovertargetaction",
      "poster",
      "preload",
      "referrerpolicy",
      "rel",
      "rows",
      "rowspan",
      "sandbox",
      "scope",
      "shape",
      "size",
      "sizes",
      "slot",
      "span",
      "spellcheck",
      "src",
      "srcdoc",
      "srclang",
      "srcset",
      "start",
      "step",
      "style",
      "tabindex",
      "target",
      "title",
      "translate",
      "type",
      "usemap",
      "value",
      "width",
      "wrap",
      // Event handlers
      "onauxclick",
      "onafterprint",
      "onbeforematch",
      "onbeforeprint",
      "onbeforeunload",
      "onbeforetoggle",
      "onblur",
      "oncancel",
      "oncanplay",
      "oncanplaythrough",
      "onchange",
      "onclick",
      "onclose",
      "oncontextlost",
      "oncontextmenu",
      "oncontextrestored",
      "oncopy",
      "oncuechange",
      "oncut",
      "ondblclick",
      "ondrag",
      "ondragend",
      "ondragenter",
      "ondragleave",
      "ondragover",
      "ondragstart",
      "ondrop",
      "ondurationchange",
      "onemptied",
      "onended",
      "onerror",
      "onfocus",
      "onformdata",
      "onhashchange",
      "oninput",
      "oninvalid",
      "onkeydown",
      "onkeypress",
      "onkeyup",
      "onlanguagechange",
      "onload",
      "onloadeddata",
      "onloadedmetadata",
      "onloadstart",
      "onmessage",
      "onmessageerror",
      "onmousedown",
      "onmouseenter",
      "onmouseleave",
      "onmousemove",
      "onmouseout",
      "onmouseover",
      "onmouseup",
      "onoffline",
      "ononline",
      "onpagehide",
      "onpageshow",
      "onpaste",
      "onpause",
      "onplay",
      "onplaying",
      "onpopstate",
      "onprogress",
      "onratechange",
      "onreset",
      "onresize",
      "onrejectionhandled",
      "onscroll",
      "onscrollend",
      "onsecuritypolicyviolation",
      "onseeked",
      "onseeking",
      "onselect",
      "onslotchange",
      "onstalled",
      "onstorage",
      "onsubmit",
      "onsuspend",
      "ontimeupdate",
      "ontoggle",
      "onunhandledrejection",
      "onunload",
      "onvolumechange",
      "onwaiting",
      "onwheel"
    ],
    disallowedTagsMode: "discard",
    allowedAttributes: {
      a: ["href", "name", "target"],
      // We don't currently allow img itself by default, but
      // these attributes would make sense if we did.
      img: ["src", "srcset", "alt", "title", "width", "height", "loading"]
    },
    allowedEmptyAttributes: [
      "alt"
    ],
    // Lots of these won't come up by default because we don't allow them
    selfClosing: ["img", "br", "hr", "area", "base", "basefont", "input", "link", "meta"],
    // URL schemes we permit
    allowedSchemes: ["http", "https", "ftp", "mailto", "tel"],
    allowedSchemesByTag: {},
    allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
    allowProtocolRelative: !0,
    enforceHtmlBoundary: !1,
    parseStyleAttributes: !0,
    preserveEscapedAttributes: !1
  }, g.simpleTransform = function(m, f, y) {
    return y = y === void 0 ? !0 : y, f = f || {}, function(w, A) {
      let p;
      if (y)
        for (p in f)
          A[p] = f[p];
      else
        A = f;
      return {
        tagName: m,
        attribs: A
      };
    };
  }, ur;
}
var To = /* @__PURE__ */ So();
const No = /* @__PURE__ */ Zc(To), Fa = new TextEncoder();
function Co(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Io(e, t = "SHA-256", i = 1e5) {
  const n = Date.now().toString(16);
  e || (e = Math.round(Math.random() * i));
  const o = await Va(n, e, t);
  return {
    algorithm: t,
    challenge: o,
    salt: n,
    signature: ""
  };
}
async function Va(e, t, i) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Co(
    await crypto.subtle.digest(
      i.toUpperCase(),
      Fa.encode(e + t)
    )
  );
}
function Oo(e, t, i = "SHA-256", n = 1e6, o = 0) {
  const s = new AbortController(), l = Date.now();
  return {
    promise: (async () => {
      for (let h = o; h <= n; h += 1) {
        if (s.signal.aborted)
          return null;
        if (await Va(t, h, i) === e)
          return {
            number: h,
            took: Date.now() - l
          };
      }
      return null;
    })(),
    controller: s
  };
}
function Mn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function qo(e) {
  const t = atob(e), i = new Uint8Array(t.length);
  for (let n = 0; n < t.length; n++)
    i[n] = t.charCodeAt(n);
  return i;
}
function Ro(e, t = 12) {
  const i = new Uint8Array(t);
  for (let n = 0; n < t; n++)
    i[n] = e % 256, e = Math.floor(e / 256);
  return i;
}
async function Do(e, t = "", i = 1e6, n = 0) {
  const o = "AES-GCM", s = new AbortController(), l = Date.now(), d = async () => {
    for (let c = n; c <= i; c += 1) {
      if (s.signal.aborted || !h || !a)
        return null;
      try {
        const b = await crypto.subtle.decrypt(
          {
            name: o,
            iv: Ro(c)
          },
          h,
          a
        );
        if (b)
          return {
            clearText: new TextDecoder().decode(b),
            took: Date.now() - l
          };
      } catch {
      }
    }
    return null;
  };
  let h = null, a = null;
  try {
    a = qo(e);
    const c = await crypto.subtle.digest(
      "SHA-256",
      Fa.encode(t)
    );
    h = await crypto.subtle.importKey(
      "raw",
      c,
      o,
      !1,
      ["decrypt"]
    );
  } catch {
    return {
      promise: Promise.reject(),
      controller: s
    };
  }
  return {
    promise: d(),
    controller: s
  };
}
var J = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(J || {}), Ie = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(Ie || {});
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => Ft(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(Ft(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(Ft(globalThis.altchaI18n.store));
  },
  store: Uc({})
};
const Lo = {
  ariaLinkLabel: "Visit Altcha.org",
  enterCode: "Enter code",
  enterCodeAria: "Enter code you hear. Press Space to play audio.",
  error: "Verification failed. Try again later.",
  expired: "Verification expired. Try again.",
  footer: 'Protected by <a href="https://altcha.org/" target="_blank" aria-label="Visit Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Get an audio challenge",
  label: "I'm not a robot",
  loading: "Loading...",
  reload: "Reload",
  verify: "Verify",
  verificationRequired: "Verification required!",
  verified: "Verified",
  verifying: "Verifying...",
  waitAlert: "Verifying... please wait."
};
globalThis.altchaI18n.set("en", Lo);
const tr = (e, t) => {
  let i = /* @__PURE__ */ rc(() => Hs(t?.(), 24));
  var n = Bo();
  au(() => {
    ce(n, "width", N(i)), ce(n, "height", N(i));
  }), xe(e, n);
};
function Po(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function ko(e, t) {
  e.preventDefault(), t();
}
function Mo(e, t, i, n, o, s, l, d) {
  [
    J.UNVERIFIED,
    J.ERROR,
    J.EXPIRED,
    J.CODE
  ].includes(N(t)) ? i() !== !1 && N(n)?.reportValidity() === !1 ? V(o, !1) : s() ? l() : d() : V(o, !0);
}
var Bo = /* @__PURE__ */ n0('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="altcha-spinner"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor"></path></svg>'), jo = /* @__PURE__ */ uu('<input type="hidden">'), Uo = /* @__PURE__ */ uu('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), Ho = /* @__PURE__ */ n0('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), Fo = /* @__PURE__ */ n0('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), Vo = /* @__PURE__ */ n0('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), $o = /* @__PURE__ */ uu('<button type="button" class="altcha-code-challenge-audio"><!></button>'), Go = /* @__PURE__ */ uu("<audio hidden autoplay><source></audio>"), zo = /* @__PURE__ */ uu('<div class="altcha-code-challenge" role="dialog"><div class="altcha-code-challenge-arrow"></div> <form data-code-challenge-form="1"><img class="altcha-code-challenge-image" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input" required> <div class="altcha-code-challenge-buttons"><div class="altcha-code-challenge-buttons-left"><!> <button type="button" class="altcha-code-challenge-reload"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify"><!> </button></div> <!></form></div>'), Wo = /* @__PURE__ */ uu("<div><!></div>"), Zo = /* @__PURE__ */ uu("<div><!></div>"), Xo = /* @__PURE__ */ uu('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), Jo = /* @__PURE__ */ uu('<div class="altcha-footer"><div><!></div></div>'), Yo = /* @__PURE__ */ uu('<div class="altcha-anchor-arrow"></div>'), Qo = /* @__PURE__ */ uu('<!> <div class="altcha"><div class="altcha-main"><div><!> <input type="checkbox"></div> <label class="altcha-label"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
function Ko(e, t) {
  va(t, !0);
  const [i, n] = Fc(), o = () => Hc(je, "$altchaI18nStore", i);
  let s = te(t, "auto", 7, void 0), l = te(t, "blockspam", 7, void 0), d = te(t, "challengeurl", 7, void 0), h = te(t, "challengejson", 7, void 0), a = te(t, "credentials", 7, void 0), c = te(t, "customfetch", 7, void 0), b = te(t, "debug", 7, !1), u = te(t, "delay", 7, 0), r = te(t, "disableautofocus", 7, !1), g = te(t, "refetchonexpire", 7, !0), x = te(t, "disablerefetchonexpire", 23, () => !g()), m = te(t, "expire", 7, void 0), f = te(t, "floating", 7, void 0), y = te(t, "floatinganchor", 7, void 0), w = te(t, "floatingoffset", 7, void 0), A = te(t, "floatingpersist", 7, !1), p = te(t, "hidefooter", 7, !1), _ = te(t, "hidelogo", 7, !1), S = te(t, "id", 7, void 0), C = te(t, "language", 7, void 0), R = te(t, "name", 7, "altcha"), D = te(t, "maxnumber", 7, 1e6), E = te(t, "mockerror", 7, !1), T = te(t, "obfuscated", 7, void 0), I = te(t, "overlay", 7, void 0), P = te(t, "overlaycontent", 7, void 0), O = te(t, "plugins", 7, void 0), j = te(t, "sentinel", 7, void 0), F = te(t, "spamfilter", 7, !1), G = te(t, "strings", 7, void 0), Z = te(t, "test", 7, !1), W = te(t, "verifyurl", 7, void 0), ve = te(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), Ge = te(t, "workerurl", 7, void 0);
  const { altchaI18n: z } = globalThis, je = z.store, tu = ["SHA-256", "SHA-384", "SHA-512"], Wu = "https://altcha.org/", De = (v, q) => {
    t.$$host.dispatchEvent(new CustomEvent(v, { detail: q }));
  }, Zu = document.documentElement.lang?.split("-")?.[0], Ou = /* @__PURE__ */ dt(() => d() && new URL(d(), location.origin).host.endsWith(".altcha.org") && !!d()?.includes("apiKey=ckey_")), fu = /* @__PURE__ */ dt(() => h() ? Fr(h()) : void 0), L = /* @__PURE__ */ dt(() => G() ? Fr(G()) : {}), k = /* @__PURE__ */ dt(() => ({
    ...qr(o()),
    ...N(L)
  })), M = /* @__PURE__ */ dt(() => `${S() || R()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let $ = /* @__PURE__ */ de(null), ge = /* @__PURE__ */ de(!1), ee = /* @__PURE__ */ de(null), ae = /* @__PURE__ */ de(_u(J.UNVERIFIED)), be = /* @__PURE__ */ de(void 0), ue = /* @__PURE__ */ de(null), Y = /* @__PURE__ */ de(null), _e = /* @__PURE__ */ de(null), re = /* @__PURE__ */ de(null), Q = /* @__PURE__ */ de(null), ie = /* @__PURE__ */ de(null), Oe = /* @__PURE__ */ de(null), we = /* @__PURE__ */ de(null), Fe = null, ye = /* @__PURE__ */ de(null), du = /* @__PURE__ */ de(!1), xu = [], f0 = /* @__PURE__ */ de(!1), ru = /* @__PURE__ */ de(null);
  function qu(v) {
    return No(v);
  }
  nr(() => {
    ts(N(we));
  }), nr(() => {
    rs(N(ae));
  }), jc(() => {
    $a(), V(Oe, null), N(ie) && (N(ie).removeEventListener("submit", Mr), N(ie).removeEventListener("reset", Br), N(ie).removeEventListener("focusin", kr), V(ie, null)), Fe && (clearTimeout(Fe), Fe = null), document.removeEventListener("click", Lr), document.removeEventListener("scroll", Pr), window.removeEventListener("resize", Hr);
  }), Na(() => {
    se("mounted", "2.2.4"), se("workers", ve()), Za(), se("plugins", xu.length ? xu.map((v) => v.constructor.pluginName).join(", ") : "none"), Z() && se("using test mode"), m() && b0(m()), s() !== void 0 && se("auto", s()), f() !== void 0 && zr(f()), V(ie, N(be)?.closest("form"), !0), N(ie) && (N(ie).addEventListener("submit", Mr, { capture: !0 }), N(ie).addEventListener("reset", Br), (s() === "onfocus" || A() === "focus") && N(ie).addEventListener("focusin", kr)), I() && Wr(!0), s() === "onload" && (T() ? st() : bu()), N(Ou) && (p() || _()) && se("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      De("load");
    });
  });
  function At(v, q) {
    return btoa(JSON.stringify({
      algorithm: v.algorithm,
      challenge: v.challenge,
      number: q.number,
      salt: v.salt,
      signature: v.signature,
      test: Z() ? !0 : void 0,
      took: q.took
    }));
  }
  function $a() {
    for (const v of xu)
      v.destroy();
  }
  function Or() {
    d() && !x() && N(ae) === J.VERIFIED ? bu() : Ru(J.EXPIRED, N(k).expired);
  }
  async function Ga() {
    if (E())
      throw se("mocking error"), new Error("Mocked error.");
    if (N(fu))
      return se("using provided json data"), Vr(N(fu).salt), N(fu);
    if (Z())
      return se("generating test challenge", { test: Z() }), Io(typeof Z() != "boolean" ? +Z() : void 0);
    {
      if (!d() && N(ie)) {
        const U = N(ie).getAttribute("action");
        U?.includes("/form/") && d(U + "/altcha");
      }
      if (!d())
        throw new Error("Attribute challengeurl not set.");
      se("fetching challenge from", d());
      const v = {
        credentials: typeof a() == "boolean" ? "include" : a(),
        headers: F() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, q = await d0()(d(), v);
      if (!q || !(q instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (q.status !== 200)
        throw new Error(`Server responded with ${q.status}.`);
      const B = q.headers.get("X-Altcha-Config"), H = await q.json();
      if (Vr(H.salt), B)
        try {
          const U = JSON.parse(B);
          U && typeof U == "object" && (U.verifyurl && !U.verifyurl.startsWith("fn:") && (U.verifyurl = Dr(U.verifyurl)), Jr(U));
        } catch (U) {
          se("unable to configure from X-Altcha-Config", U);
        }
      return H;
    }
  }
  function za(v) {
    const q = N(ie)?.querySelector(typeof v == "string" ? `input[name="${v}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return q?.value?.slice(q.value.indexOf("@")) || void 0;
  }
  function d0() {
    let v = fetch;
    if (c())
      if (se("using customfetch"), typeof c() == "string") {
        if (v = globalThis[c()] || null, !v)
          throw new Error(`Custom fetch function not found: ${c()}`);
      } else
        v = c();
    return v;
  }
  function qr(v, q = [
    C() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const B = Object.keys(v).map((U) => U.toLowerCase()), H = q.reduce(
      (U, ne) => (ne = ne.toLowerCase(), U || (v[ne] ? ne : null) || B.find((fe) => ne.split("-")[0] === fe.split("-")[0]) || null),
      null
    );
    return v[H || "en"];
  }
  function Wa() {
    return F() === "ipAddress" ? {
      blockedCountries: void 0,
      classifier: void 0,
      disableRules: void 0,
      email: !1,
      expectedCountries: void 0,
      expectedLanguages: void 0,
      fields: !1,
      ipAddress: void 0,
      text: void 0,
      timeZone: void 0
    } : typeof F() == "object" ? F() : {
      blockedCountries: void 0,
      classifier: void 0,
      disableRules: void 0,
      email: void 0,
      expectedCountries: void 0,
      expectedLanguages: void 0,
      fields: void 0,
      ipAddress: void 0,
      text: void 0,
      timeZone: void 0
    };
  }
  function Rr(v) {
    return [
      ...N(ie)?.querySelectorAll(v?.length ? v.map((B) => `input[name="${B}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])') || []
    ].reduce(
      (B, H) => {
        const U = H.name, ne = H.value;
        return U && ne && (B[U] = /\n/.test(ne) ? ne.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : ne), B;
      },
      {}
    );
  }
  function Dr(v, q) {
    const B = new URL(d() || location.origin), H = new URL(v, B);
    if (H.search || (H.search = B.search), q)
      for (const U in q)
        q[U] !== void 0 && q[U] !== null && H.searchParams.set(U, q[U]);
    return H.toString();
  }
  function Za() {
    const v = O() !== void 0 ? O().split(",") : void 0;
    for (const q of globalThis.altchaPlugins)
      (!v || v.includes(q.pluginName)) && xu.push(new q({
        el: N(be),
        clarify: st,
        dispatch: De,
        getConfiguration: Yr,
        getFloatingAnchor: Qr,
        getState: Kr,
        log: se,
        reset: Ru,
        solve: Xr,
        setState: iu,
        setFloatingAnchor: ei,
        verify: bu
      }));
  }
  function se(...v) {
    (b() || v.some((q) => q instanceof Error)) && console[v[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${R()}]`, ...v);
  }
  function Xa() {
    V(ye, Ie.PAUSED, !0);
  }
  function Ja(v) {
    V(ye, Ie.ERROR, !0);
  }
  function Ya() {
    V(ye, Ie.READY, !0);
  }
  function Qa() {
    V(ye, Ie.LOADING, !0);
  }
  function Ka() {
    V(ye, Ie.PLAYING, !0);
  }
  function es() {
    V(ye, Ie.PAUSED, !0);
  }
  function us(v) {
    if (v.preventDefault(), v.stopPropagation(), N(ee)) {
      const q = new FormData(v.target), B = String(q.get("code"));
      if (W()?.startsWith("fn:")) {
        const H = W().replace(/^fn:/, "");
        if (se(`calling ${H} function instead of verifyurl`), !(H in globalThis))
          throw new Error(`Global function "${H}" is undefined.`);
        return globalThis[H]({
          challenge: N(ee).challenge,
          code: B,
          solution: N(ee).solution
        });
      }
      V(du, !0), $r(At(N(ee).challenge, N(ee).solution), B).then(({ reason: H, verified: U }) => {
        U ? (V(ee, null), iu(J.VERIFIED), se("verified"), v0().then(() => {
          N(re)?.focus(), De("verified", { payload: N(ru) }), s() === "onsubmit" ? Gr(N(Oe)) : I() && ct();
        })) : (Ru(), V(we, H || "Verification failed", !0));
      }).catch((H) => {
        V(ee, null), iu(J.ERROR, H), se("sentinel verification failed:", H);
      }).finally(() => {
        V(du, !1);
      });
    }
  }
  function Lr(v) {
    const q = v.target;
    f() && q && !N(be).contains(q) && (N(ae) === J.VERIFIED && A() === !1 || N(ae) === J.VERIFIED && A() === "focus" && !N(ie)?.matches(":focus-within") || s() === "off" && N(ae) === J.UNVERIFIED) && ct();
  }
  function Pr() {
    f() && N(ae) !== J.UNVERIFIED && ot();
  }
  function ts(v) {
    for (const q of xu)
      typeof q.onErrorChange == "function" && q.onErrorChange(N(we));
  }
  function kr(v) {
    N(ae) === J.UNVERIFIED ? bu() : f() && A() === "focus" && N(ae) === J.VERIFIED && St();
  }
  function Mr(v) {
    v.target?.hasAttribute("data-code-challenge-form") || (V(Oe, v.submitter, !0), N(ie) && s() === "onsubmit" ? (N(Oe)?.blur(), N(ae) === J.UNVERIFIED ? (v.preventDefault(), v.stopPropagation(), bu().then(() => {
      Gr(N(Oe));
    })) : N(ae) !== J.VERIFIED && (v.preventDefault(), v.stopPropagation(), N(ae) === J.VERIFYING && jr())) : N(ie) && f() && s() === "off" && N(ae) === J.UNVERIFIED && (v.preventDefault(), v.stopPropagation(), St()));
  }
  function Br() {
    Ru();
  }
  function jr() {
    N(ae) === J.VERIFYING && N(k).waitAlert && alert(N(k).waitAlert);
  }
  function Ur() {
    N(Y) ? N(Y).paused ? (N(Y).currentTime = 0, N(Y).play()) : N(Y).pause() : (V(f0, !0), requestAnimationFrame(() => {
      N(Y)?.play();
    }));
  }
  function rs(v) {
    for (const q of xu)
      typeof q.onStateChange == "function" && q.onStateChange(N(ae));
    f() && N(ae) !== J.UNVERIFIED && requestAnimationFrame(() => {
      ot();
    }), V(ge, N(ae) === J.VERIFIED), I() && N(_e) && (N(ae) !== J.UNVERIFIED ? St() : ct());
  }
  function Hr() {
    f() && ot();
  }
  function Fr(v) {
    return JSON.parse(v);
  }
  function Vr(v) {
    const q = new URLSearchParams(v.split("?")?.[1]), B = q.get("expires") || q.get("expire");
    if (B) {
      const H = new Date(+B * 1e3), U = isNaN(H.getTime()) ? 0 : H.getTime() - Date.now();
      U > 0 && b0(U);
    } else Fe && (clearTimeout(Fe), Fe = null);
  }
  async function is(v) {
    if (!W())
      throw new Error("Attribute verifyurl not set.");
    se("requesting server verification from", W());
    const q = { payload: v };
    if (F() !== !1) {
      const {
        blockedCountries: U,
        classifier: ne,
        disableRules: fe,
        email: Ee,
        expectedLanguages: me,
        expectedCountries: Le,
        fields: Pe,
        ipAddress: Lu,
        text: Ju,
        timeZone: Pu
      } = Wa();
      q.blockedCountries = U, q.classifier = ne, q.disableRules = fe, q.email = Ee === !1 ? void 0 : za(Ee), q.expectedCountries = Le, q.expectedLanguages = me || (Zu ? [Zu] : void 0), q.fields = Pe === !1 ? void 0 : Rr(Pe), q.ipAddress = Lu === !1 ? void 0 : Lu || "auto", q.text = Ju, q.timeZone = Pu === !1 ? void 0 : Pu || Mn();
    }
    const B = await d0()(W(), {
      body: JSON.stringify(q),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!B || !(B instanceof Response))
      throw new Error("Custom fetch function did not return a response.");
    if (B.status !== 200)
      throw new Error(`Server responded with ${B.status}.`);
    const H = await B.json();
    if (H?.payload && V(ru, H.payload, !0), De("serververification", H), l() && H.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function $r(v, q) {
    if (!W())
      throw new Error("Attribute verifyurl not set.");
    se("requesting sentinel verification from", W());
    const B = { code: q, payload: v };
    j() && (B.fields = j().fields ? Rr() : void 0, B.timeZone = j().timeZone ? Mn() : void 0);
    const H = await d0()(W(), {
      body: JSON.stringify(B),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!H || !(H instanceof Response))
      throw new Error("Fetch function did not return a response.");
    if (H.status !== 200)
      throw new Error(`Server responded with ${H.status}.`);
    const U = await H.json();
    return U?.payload && V(ru, U.payload, !0), De("sentinelverification", U), U;
  }
  function Gr(v) {
    N(ie) && "requestSubmit" in N(ie) ? N(ie).requestSubmit(v) : N(ie)?.reportValidity() && (v ? v.click() : N(ie).submit());
  }
  function b0(v) {
    se("expire", v), Fe && (clearTimeout(Fe), Fe = null), v < 1 ? Or() : Fe = setTimeout(Or, v);
  }
  function zr(v) {
    se("floating", v), f() !== v && (N(be).style.left = "", N(be).style.top = ""), f(v === !0 || v === "" ? "auto" : v === !1 || v === "false" ? void 0 : f()), f() ? (s() || s("onsubmit"), document.addEventListener("scroll", Pr), document.addEventListener("click", Lr), window.addEventListener("resize", Hr)) : s() === "onsubmit" && s(void 0);
  }
  function Wr(v) {
    if (se("overlay", v), I(v), v) {
      if (s() || s("onsubmit"), N(_e) && N(be).parentElement && N(_e).replaceWith(N(be).parentElement), N(be)?.parentElement?.parentElement) {
        V(_e, document.createElement("div"), !0), N(be).parentElement.parentElement.appendChild(N(_e));
        const q = document.createElement("div"), B = document.createElement("button");
        B.type = "button", B.innerHTML = "&times;", B.addEventListener("click", (H) => {
          H.preventDefault(), Ru();
        }), N(_e).classList.add("altcha-overlay-backdrop"), B.classList.add("altcha-overlay-close-button"), q.classList.add("altcha-overlay"), N(_e).append(q), q.append(B), P() && q.append(...document.querySelectorAll(P())), q.append(N(be).parentElement);
      }
    } else N(_e) && N(be).parentElement && (N(_e).replaceWith(N(be).parentElement), N(be).style.display = "block");
  }
  function Zr(v) {
    if (!v.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (v.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!tu.includes(v.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${tu.join(", ")}`);
    if (!v.challenge || v.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!v.salt || v.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function Xr(v) {
    let q = null, B = null;
    if ("Worker" in window) {
      try {
        q = ns(v, v.maxNumber || v.maxnumber || D()), V($, q.controller, !0), B = await q.promise;
      } catch (H) {
        se(H);
      } finally {
        V($, null);
      }
      if (B === null || B?.number !== void 0 || "obfuscated" in v)
        return { data: v, solution: B };
    }
    if ("obfuscated" in v) {
      const H = await Do(v.obfuscated, v.key, v.maxNumber || v.maxnumber);
      return { data: v, solution: await H.promise };
    }
    q = Oo(v.challenge, v.salt, v.algorithm, v.maxNumber || v.maxnumber || D()), V($, q.controller, !0);
    try {
      B = await q.promise;
    } catch (H) {
      se(H);
    } finally {
      V($, null);
    }
    return { data: v, solution: B };
  }
  function ns(v, q = typeof Z() == "number" ? Z() : v.maxNumber || v.maxnumber || D(), B = Math.ceil(ve())) {
    const H = new AbortController(), U = [];
    B = Math.min(16, q, Math.max(1, B));
    for (let Ee = 0; Ee < B; Ee++)
      U.push(altchaCreateWorker(Ge()));
    const ne = Math.ceil(q / B);
    return { promise: (async () => {
      const Ee = await Promise.all(U.map((me, Le) => {
        const Pe = Le * ne;
        return H.signal.addEventListener("abort", () => {
          me.postMessage({ type: "abort" });
        }), new Promise((Lu) => {
          me.addEventListener("message", (Ju) => {
            if (Ju.data)
              for (const Pu of U)
                Pu !== me && Pu.postMessage({ type: "abort" });
            Lu(Ju.data);
          }), me.postMessage({
            payload: v,
            max: Pe + ne,
            start: Pe,
            type: "work"
          });
        });
      }));
      for (const me of U)
        me.terminate();
      return Ee.find((me) => !!me) || null;
    })(), controller: H };
  }
  async function st() {
    if (!T()) {
      iu(J.ERROR);
      return;
    }
    const v = xu.find((q) => q.constructor.pluginName === "obfuscation");
    if (!v || !("clarify" in v)) {
      iu(J.ERROR), se("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in v && typeof v.clarify == "function")
      return v.clarify();
  }
  function Jr(v) {
    v.obfuscated !== void 0 && T(v.obfuscated), v.auto !== void 0 && (s(v.auto), s() === "onload" && (T() ? st() : bu())), v.blockspam !== void 0 && l(!!v.blockspam), v.customfetch !== void 0 && c(v.customfetch), v.floatinganchor !== void 0 && y(v.floatinganchor), v.delay !== void 0 && u(v.delay), v.floatingoffset !== void 0 && w(v.floatingoffset), v.floating !== void 0 && zr(v.floating), v.expire !== void 0 && (b0(v.expire), m(v.expire)), v.challenge && (h(typeof v.challenge == "string" ? v.challenge : JSON.stringify(v.challenge)), Zr(N(fu))), v.challengeurl !== void 0 && d(v.challengeurl), v.debug !== void 0 && b(!!v.debug), v.hidefooter !== void 0 && p(!!v.hidefooter), v.hidelogo !== void 0 && _(!!v.hidelogo), v.language !== void 0 && G(qr(o(), [v.language])), v.maxnumber !== void 0 && D(+v.maxnumber), v.mockerror !== void 0 && E(!!v.mockerror), v.name !== void 0 && R(v.name), v.overlaycontent !== void 0 && P(v.overlaycontent), v.overlay !== void 0 && Wr(v.overlay), v.refetchonexpire !== void 0 && x(!v.refetchonexpire), v.disablerefetchonexpire !== void 0 && x(!v.disablerefetchonexpire), v.sentinel !== void 0 && typeof v.sentinel == "object" && j(v.sentinel), v.spamfilter !== void 0 && F(typeof v.spamfilter == "object" ? v.spamfilter : !!v.spamfilter), v.strings && G(typeof v.strings == "string" ? v.strings : JSON.stringify(v.strings)), v.test !== void 0 && Z(typeof v.test == "number" ? v.test : !!v.test), v.verifyurl !== void 0 && W(v.verifyurl), v.workers !== void 0 && ve(+v.workers), v.workerurl !== void 0 && Ge(v.workerurl);
  }
  function Yr() {
    return {
      auto: s(),
      blockspam: l(),
      challengeurl: d(),
      debug: b(),
      delay: u(),
      disableautofocus: r(),
      disablerefetchonexpire: x(),
      expire: m(),
      floating: f(),
      floatinganchor: y(),
      floatingoffset: w(),
      hidefooter: p(),
      hidelogo: _(),
      name: R(),
      maxnumber: D(),
      mockerror: E(),
      obfuscated: T(),
      overlay: I(),
      refetchonexpire: !x(),
      spamfilter: F(),
      strings: N(k),
      test: Z(),
      verifyurl: W(),
      workers: ve(),
      workerurl: Ge()
    };
  }
  function Qr() {
    return N(Q);
  }
  function as(v) {
    return xu.find((q) => q.constructor.pluginName === v);
  }
  function Kr() {
    return N(ae);
  }
  function ct() {
    N(be).style.display = "none", I() && N(_e) && (N(_e).style.display = "none");
  }
  function ot(v = 20) {
    if (N(be))
      if (N(Q) || V(Q, (y() ? document.querySelector(y()) : N(ie)?.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || N(ie), !0), N(Q)) {
        const q = parseInt(w(), 10) || 12, B = N(Q).getBoundingClientRect(), H = N(be).getBoundingClientRect(), U = document.documentElement.clientHeight, ne = document.documentElement.clientWidth, fe = f() === "auto" ? B.bottom + H.height + q + v > U : f() === "top", Ee = Math.max(v, Math.min(ne - v - H.width, B.left + B.width / 2 - H.width / 2));
        if (fe ? N(be).style.top = `${B.top - (H.height + q)}px` : N(be).style.top = `${B.bottom + q}px`, N(be).style.left = `${Ee}px`, N(be).setAttribute("data-floating", fe ? "top" : "bottom"), N(ue)) {
          const me = N(ue).getBoundingClientRect();
          N(ue).style.left = B.left - Ee + B.width / 2 - me.width / 2 + "px";
        }
      } else
        se("unable to find floating anchor element");
  }
  function Ru(v = J.UNVERIFIED, q = null) {
    N($) && (N($).abort(), V($, null)), V(ge, !1), V(ru, null), V(ee, null), V(f0, !1), V(ye, null), iu(v, q);
  }
  function ei(v) {
    V(Q, v, !0);
  }
  function iu(v, q = null) {
    V(ae, v, !0), V(we, q, !0), De("statechange", {
      payload: N(ru),
      state: N(ae)
    });
  }
  function St() {
    N(be).style.display = "block", f() && ot(), I() && N(_e) && (N(_e).style.display = "flex");
  }
  async function bu() {
    return Ru(J.VERIFYING), await new Promise((v) => setTimeout(v, u() || 0)), Ga().then((v) => (Zr(v), se("challenge", v), Xr(v))).then(({ data: v, solution: q }) => {
      if (se("solution", q), !q || v && "challenge" in v && !("clearText" in q)) {
        if (q?.number !== void 0 && "challenge" in v)
          if (W() && "codeChallenge" in v)
            ["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(document.activeElement?.tagName || "") && r() === !1 && document.activeElement.blur(), V(ee, { challenge: v, solution: q }, !0);
          else {
            if (W() && j() !== void 0)
              return $r(At(v, q));
            if (W())
              return is(At(v, q));
            V(ru, At(v, q), !0), se("payload", N(ru));
          }
        else if (N(ae) !== J.EXPIRED)
          throw se("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
      }
    }).then(() => {
      N(ee) ? (iu(J.CODE), v0().then(() => {
        De("code", { codeChallenge: N(ee) });
      })) : N(ru) && (iu(J.VERIFIED), se("verified"), v0().then(() => {
        De("verified", { payload: N(ru) }), I() && ct();
      }));
    }).catch((v) => {
      se(v), iu(J.ERROR, v.message);
    });
  }
  var ui = Qo(), ti = ft(ui);
  qc(ti, t, "default", {});
  var Xu = Ne(ti, 2), h0 = Te(Xu), Tt = Te(h0);
  let ri;
  var ii = Te(Tt);
  {
    var ss = (v) => {
      tr(v);
    };
    Ce(ii, (v) => {
      N(ae) === J.VERIFYING && v(ss);
    });
  }
  var Du = Ne(ii, 2);
  vi(Du), Du.__change = [
    Mo,
    ae,
    F,
    ie,
    ge,
    T,
    st,
    bu
  ], Ot(Du, (v) => V(re, v), () => N(re)), Se(Tt);
  var Nt = Ne(Tt, 2), cs = Te(Nt);
  {
    var os = (v) => {
      var q = It(), B = ft(q);
      ku(B, () => qu(N(k).verified)), xe(v, q);
    }, ls = (v, q) => {
      {
        var B = (U) => {
          var ne = It(), fe = ft(ne);
          ku(fe, () => qu(N(k).verifying)), xe(U, ne);
        }, H = (U, ne) => {
          {
            var fe = (me) => {
              var Le = It(), Pe = ft(Le);
              ku(Pe, () => qu(N(k).verificationRequired)), xe(me, Le);
            }, Ee = (me) => {
              var Le = It(), Pe = ft(Le);
              ku(Pe, () => qu(N(k).label)), xe(me, Le);
            };
            Ce(
              U,
              (me) => {
                N(ae) === J.CODE ? me(fe) : me(Ee, !1);
              },
              ne
            );
          }
        };
        Ce(
          v,
          (U) => {
            N(ae) === J.VERIFYING ? U(B) : U(H, !1);
          },
          q
        );
      }
    };
    Ce(cs, (v) => {
      N(ae) === J.VERIFIED ? v(os) : v(ls, !1);
    });
  }
  Se(Nt);
  var ni = Ne(Nt, 2);
  {
    var fs = (v) => {
      var q = jo();
      vi(q), au(() => {
        ce(q, "name", R()), kc(q, N(ru));
      }), xe(v, q);
    };
    Ce(ni, (v) => {
      N(ae) === J.VERIFIED && v(fs);
    });
  }
  var ai = Ne(ni, 2);
  {
    var ds = (v) => {
      var q = Uo(), B = Te(q);
      ce(B, "href", Wu), Se(q), au(() => ce(B, "aria-label", N(k).ariaLinkLabel)), xe(v, q);
    };
    Ce(ai, (v) => {
      (_() !== !0 || N(Ou)) && v(ds);
    });
  }
  var bs = Ne(ai, 2);
  {
    var hs = (v) => {
      var q = zo(), B = Ne(Te(q), 2), H = Te(B), U = Ne(H, 2);
      Ac(U, !r()), U.__keydown = [
        Po,
        Ur
      ];
      var ne = Ne(U, 2), fe = Te(ne), Ee = Te(fe);
      {
        var me = (ze) => {
          var Ae = $o();
          Ae.__click = Ur;
          var Ct = Te(Ae);
          {
            var lt = (Yu) => {
              tr(Yu, () => 20);
            }, Es = (Yu, _s) => {
              {
                var As = (Qu) => {
                  var p0 = Ho();
                  xe(Qu, p0);
                }, Ss = (Qu, p0) => {
                  {
                    var Ts = (Ku) => {
                      var g0 = Fo();
                      xe(Ku, g0);
                    }, Ns = (Ku) => {
                      var g0 = Vo();
                      xe(Ku, g0);
                    };
                    Ce(
                      Qu,
                      (Ku) => {
                        N(ye) === Ie.PLAYING ? Ku(Ts) : Ku(Ns, !1);
                      },
                      p0
                    );
                  }
                };
                Ce(
                  Yu,
                  (Qu) => {
                    N(ye) === Ie.ERROR ? Qu(As) : Qu(Ss, !1);
                  },
                  _s
                );
              }
            };
            Ce(Ct, (Yu) => {
              N(ye) === Ie.LOADING ? Yu(lt) : Yu(Es, !1);
            });
          }
          Se(Ae), au(() => {
            ce(Ae, "title", N(k).getAudioChallenge), Ae.disabled = N(ye) === Ie.LOADING || N(ye) === Ie.ERROR || N(du), ce(Ae, "aria-label", N(ye) === Ie.LOADING ? N(k).loading : N(k).getAudioChallenge);
          }), xe(ze, Ae);
        };
        Ce(Ee, (ze) => {
          N(ee).challenge.codeChallenge.audio && ze(me);
        });
      }
      var Le = Ne(Ee, 2);
      Le.__click = [ko, bu], Se(fe);
      var Pe = Ne(fe, 2), Lu = Te(Pe);
      {
        var Ju = (ze) => {
          tr(ze, () => 16);
        };
        Ce(Lu, (ze) => {
          N(du) && ze(Ju);
        });
      }
      var Pu = Ne(Lu);
      Se(Pe), Se(ne);
      var xs = Ne(ne, 2);
      {
        var ws = (ze) => {
          var Ae = Go(), Ct = Te(Ae);
          Se(Ae), Ot(Ae, (lt) => V(Y, lt), () => N(Y)), au((lt) => ce(Ct, "src", lt), [
            () => Dr(N(ee).challenge.codeChallenge.audio, { language: C() })
          ]), wu("loadstart", Ae, Qa), wu("canplay", Ae, Ya), wu("pause", Ae, es), wu("playing", Ae, Ka), wu("ended", Ae, Xa), wu("error", Ct, Ja), xe(ze, Ae);
        };
        Ce(xs, (ze) => {
          N(ee).challenge.codeChallenge.audio && N(f0) && ze(ws);
        });
      }
      Se(B), Se(q), au(() => {
        ce(q, "aria-label", N(k).verificationRequired), ce(H, "src", N(ee).challenge.codeChallenge.image), ce(U, "minlength", N(ee).challenge.codeChallenge.length || 1), ce(U, "maxlength", N(ee).challenge.codeChallenge.length), ce(U, "placeholder", N(k).enterCode), ce(U, "aria-label", N(ye) === Ie.LOADING ? N(k).loading : N(ye) === Ie.PLAYING ? "" : N(k).enterCodeAria), ce(U, "aria-live", N(ye) ? "assertive" : "polite"), ce(U, "aria-busy", N(ye) === Ie.LOADING), U.disabled = N(du), ce(Le, "aria-label", N(k).reload), ce(Le, "title", N(k).reload), Le.disabled = N(du), Pe.disabled = N(du), ce(Pe, "aria-label", N(k).verify), Cc(Pu, ` ${N(k).verify ?? ""}`);
      }), wu("submit", B, us, !0), xe(v, q);
    };
    Ce(bs, (v) => {
      N(ee)?.challenge.codeChallenge && v(hs);
    });
  }
  Se(h0);
  var si = Ne(h0, 2);
  {
    var ps = (v) => {
      var q = Xo(), B = Ne(Te(q), 2);
      {
        var H = (ne) => {
          var fe = Wo(), Ee = Te(fe);
          ku(Ee, () => qu(N(k).expired)), Se(fe), au(() => ce(fe, "title", N(we))), xe(ne, fe);
        }, U = (ne) => {
          var fe = Zo(), Ee = Te(fe);
          ku(Ee, () => qu(N(k).error)), Se(fe), au(() => ce(fe, "title", N(we))), xe(ne, fe);
        };
        Ce(B, (ne) => {
          N(ae) === J.EXPIRED ? ne(H) : ne(U, !1);
        });
      }
      Se(q), xe(v, q);
    };
    Ce(si, (v) => {
      (N(we) || N(ae) === J.EXPIRED) && v(ps);
    });
  }
  var ci = Ne(si, 2);
  {
    var gs = (v) => {
      var q = Jo(), B = Te(q), H = Te(B);
      ku(H, () => qu(N(k).footer)), Se(B), Se(q), xe(v, q);
    };
    Ce(ci, (v) => {
      N(k).footer && (p() !== !0 || N(Ou)) && v(gs);
    });
  }
  var ms = Ne(ci, 2);
  {
    var vs = (v) => {
      var q = Yo();
      Ot(q, (B) => V(ue, B), () => N(ue)), xe(v, q);
    };
    Ce(ms, (v) => {
      f() && v(vs);
    });
  }
  Se(Xu), Ot(Xu, (v) => V(be, v), () => N(be)), au(
    (v) => {
      ce(Xu, "data-state", N(ae)), ce(Xu, "data-floating", f()), ce(Xu, "data-overlay", I()), ri = Dc(Tt, 1, "altcha-checkbox", null, ri, v), ce(Du, "id", N(M)), Du.required = s() !== "onsubmit" && (!f() || s() !== "off"), ce(Nt, "for", N(M));
    },
    [
      () => ({
        "altcha-checkbox-verifying": N(ae) === J.VERIFYING
      })
    ]
  ), wu("invalid", Du, jr), Bc(Du, () => N(ge), (v) => V(ge, v)), xe(e, ui);
  var ys = ya({
    clarify: st,
    configure: Jr,
    getConfiguration: Yr,
    getFloatingAnchor: Qr,
    getPlugin: as,
    getState: Kr,
    hide: ct,
    repositionFloating: ot,
    reset: Ru,
    setFloatingAnchor: ei,
    setState: iu,
    show: St,
    verify: bu,
    get auto() {
      return s();
    },
    set auto(v = void 0) {
      s(v), K();
    },
    get blockspam() {
      return l();
    },
    set blockspam(v = void 0) {
      l(v), K();
    },
    get challengeurl() {
      return d();
    },
    set challengeurl(v = void 0) {
      d(v), K();
    },
    get challengejson() {
      return h();
    },
    set challengejson(v = void 0) {
      h(v), K();
    },
    get credentials() {
      return a();
    },
    set credentials(v = void 0) {
      a(v), K();
    },
    get customfetch() {
      return c();
    },
    set customfetch(v = void 0) {
      c(v), K();
    },
    get debug() {
      return b();
    },
    set debug(v = !1) {
      b(v), K();
    },
    get delay() {
      return u();
    },
    set delay(v = 0) {
      u(v), K();
    },
    get disableautofocus() {
      return r();
    },
    set disableautofocus(v = !1) {
      r(v), K();
    },
    get refetchonexpire() {
      return g();
    },
    set refetchonexpire(v = !0) {
      g(v), K();
    },
    get disablerefetchonexpire() {
      return x();
    },
    set disablerefetchonexpire(v = !g) {
      x(v), K();
    },
    get expire() {
      return m();
    },
    set expire(v = void 0) {
      m(v), K();
    },
    get floating() {
      return f();
    },
    set floating(v = void 0) {
      f(v), K();
    },
    get floatinganchor() {
      return y();
    },
    set floatinganchor(v = void 0) {
      y(v), K();
    },
    get floatingoffset() {
      return w();
    },
    set floatingoffset(v = void 0) {
      w(v), K();
    },
    get floatingpersist() {
      return A();
    },
    set floatingpersist(v = !1) {
      A(v), K();
    },
    get hidefooter() {
      return p();
    },
    set hidefooter(v = !1) {
      p(v), K();
    },
    get hidelogo() {
      return _();
    },
    set hidelogo(v = !1) {
      _(v), K();
    },
    get id() {
      return S();
    },
    set id(v = void 0) {
      S(v), K();
    },
    get language() {
      return C();
    },
    set language(v = void 0) {
      C(v), K();
    },
    get name() {
      return R();
    },
    set name(v = "altcha") {
      R(v), K();
    },
    get maxnumber() {
      return D();
    },
    set maxnumber(v = 1e6) {
      D(v), K();
    },
    get mockerror() {
      return E();
    },
    set mockerror(v = !1) {
      E(v), K();
    },
    get obfuscated() {
      return T();
    },
    set obfuscated(v = void 0) {
      T(v), K();
    },
    get overlay() {
      return I();
    },
    set overlay(v = void 0) {
      I(v), K();
    },
    get overlaycontent() {
      return P();
    },
    set overlaycontent(v = void 0) {
      P(v), K();
    },
    get plugins() {
      return O();
    },
    set plugins(v = void 0) {
      O(v), K();
    },
    get sentinel() {
      return j();
    },
    set sentinel(v = void 0) {
      j(v), K();
    },
    get spamfilter() {
      return F();
    },
    set spamfilter(v = !1) {
      F(v), K();
    },
    get strings() {
      return G();
    },
    set strings(v = void 0) {
      G(v), K();
    },
    get test() {
      return Z();
    },
    set test(v = !1) {
      Z(v), K();
    },
    get verifyurl() {
      return W();
    },
    set verifyurl(v = void 0) {
      W(v), K();
    },
    get workers() {
      return ve();
    },
    set workers(v = Math.min(16, navigator.hardwareConcurrency || 8)) {
      ve(v), K();
    },
    get workerurl() {
      return Ge();
    },
    set workerurl(v = void 0) {
      Ge(v), K();
    }
  });
  return n(), ys;
}
Nc(["change", "keydown", "click"]);
customElements.define("altcha-widget", Wc(
  Ko,
  {
    blockspam: { type: "Boolean" },
    debug: { type: "Boolean" },
    delay: { type: "Number" },
    disableautofocus: { type: "Boolean" },
    disablerefetchonexpire: { type: "Boolean" },
    expire: { type: "Number" },
    floatingoffset: { type: "Number" },
    hidefooter: { type: "Boolean" },
    hidelogo: { type: "Boolean" },
    maxnumber: { type: "Number" },
    mockerror: { type: "Boolean" },
    refetchonexpire: { type: "Boolean" },
    test: { type: "Boolean" },
    workers: { type: "Number" },
    auto: {},
    challengeurl: {},
    challengejson: {},
    credentials: {},
    customfetch: {},
    floating: {},
    floatinganchor: {},
    floatingpersist: {},
    id: {},
    language: {},
    name: {},
    obfuscated: {},
    overlay: {},
    overlaycontent: {},
    plugins: {},
    sentinel: {},
    spamfilter: {},
    strings: {},
    verifyurl: {},
    workerurl: {}
  },
  ["default"],
  [
    "clarify",
    "configure",
    "getConfiguration",
    "getFloatingAnchor",
    "getPlugin",
    "getState",
    "hide",
    "repositionFloating",
    "reset",
    "setFloatingAnchor",
    "setState",
    "show",
    "verify"
  ],
  !1
));
globalThis.altchaCreateWorker = (e) => new Worker(new URL(e || "./worker.js", import.meta.url));
export {
  Ko as Altcha
};
