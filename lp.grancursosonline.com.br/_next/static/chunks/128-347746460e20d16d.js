(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [128], {
        63: (e, t, n) => {
            "use strict";
            var r = n(7260);
            n.o(r, "useRouter") && n.d(t, {
                useRouter: function() {
                    return r.useRouter
                }
            })
        },
        1397: (e, t, n) => {
            "use strict";
            n.d(t, {
                a: () => u,
                b: () => b,
                c: () => h,
                e: () => d,
                f: () => a,
                h: () => w,
                i: () => y,
                k: () => s,
                m: () => S,
                n: () => o,
                q: () => m,
                r: () => v,
                s: () => E,
                t: () => g,
                u: () => c,
                v: () => p,
                w: () => f,
                x: () => function e() {
                    let t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                        n = ["__proto__", "constructor", "prototype"];
                    for (let r = 1; r < arguments.length; r += 1) {
                        let i = r < 0 || arguments.length <= r ? void 0 : arguments[r];
                        if (null != i && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(i instanceof HTMLElement) : !i || 1 !== i.nodeType && 11 !== i.nodeType)) {
                            let r = Object.keys(Object(i)).filter(e => 0 > n.indexOf(e));
                            for (let n = 0, o = r.length; n < o; n += 1) {
                                let o = r[n],
                                    a = Object.getOwnPropertyDescriptor(i, o);
                                void 0 !== a && a.enumerable && (l(t[o]) && l(i[o]) ? i[o].__swiper__ ? t[o] = i[o] : e(t[o], i[o]) : !l(t[o]) && l(i[o]) ? (t[o] = {}, i[o].__swiper__ ? t[o] = i[o] : e(t[o], i[o])) : t[o] = i[o])
                            }
                        }
                    }
                    return t
                },
                y: () => i
            });
            var r = n(7310);

            function i(e) {
                Object.keys(e).forEach(t => {
                    try {
                        e[t] = null
                    } catch (e) {}
                    try {
                        delete e[t]
                    } catch (e) {}
                })
            }

            function o(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            }

            function a() {
                return Date.now()
            }

            function s(e, t) {
                let n, i, o;
                void 0 === t && (t = "x");
                let a = (0, r.a)(),
                    s = function(e) {
                        let t, n = (0, r.a)();
                        return n.getComputedStyle && (t = n.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
                    }(e);
                return a.WebKitCSSMatrix ? ((i = s.transform || s.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(e => e.replace(",", ".")).join(", ")), o = new a.WebKitCSSMatrix("none" === i ? "" : i)) : n = (o = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = a.WebKitCSSMatrix ? o.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = a.WebKitCSSMatrix ? o.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0
            }

            function l(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function u(e, t, n) {
                e.style.setProperty(t, n)
            }

            function c(e) {
                let t, {
                        swiper: n,
                        targetPosition: i,
                        side: o
                    } = e,
                    a = (0, r.a)(),
                    s = -n.translate,
                    l = null,
                    u = n.params.speed;
                n.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(n.cssModeFrameID);
                let c = i > s ? "next" : "prev",
                    d = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
                    f = () => {
                        t = new Date().getTime(), null === l && (l = t);
                        let e = s + (.5 - Math.cos(Math.max(Math.min((t - l) / u, 1), 0) * Math.PI) / 2) * (i - s);
                        if (d(e, i) && (e = i), n.wrapperEl.scrollTo({
                                [o]: e
                            }), d(e, i)) {
                            n.wrapperEl.style.overflow = "hidden", n.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                                n.wrapperEl.style.overflow = "", n.wrapperEl.scrollTo({
                                    [o]: e
                                })
                            }), a.cancelAnimationFrame(n.cssModeFrameID);
                            return
                        }
                        n.cssModeFrameID = a.requestAnimationFrame(f)
                    };
                f()
            }

            function d(e, t) {
                void 0 === t && (t = "");
                let n = (0, r.a)(),
                    i = [...e.children];
                return (n.HTMLSlotElement && e instanceof HTMLSlotElement && i.push(...e.assignedElements()), t) ? i.filter(e => e.matches(t)) : i
            }

            function f(e, t) {
                let n = (0, r.a)(),
                    i = t.contains(e);
                return !i && n.HTMLSlotElement && t instanceof HTMLSlotElement && ((i = [...t.assignedElements()].includes(e)) || (i = function(e, t) {
                    let n = [t];
                    for (; n.length > 0;) {
                        let t = n.shift();
                        if (e === t) return !0;
                        n.push(...t.children, ...t.shadowRoot ? t.shadowRoot.children : [], ...t.assignedElements ? t.assignedElements() : [])
                    }
                }(e, t))), i
            }

            function p(e) {
                try {
                    console.warn(e);
                    return
                } catch (e) {}
            }

            function h(e, t) {
                var n;
                void 0 === t && (t = []);
                let r = document.createElement(e);
                return r.classList.add(...Array.isArray(t) ? t : (void 0 === (n = t) && (n = ""), n.trim().split(" ").filter(e => !!e.trim()))), r
            }

            function g(e, t) {
                let n = [];
                for (; e.previousElementSibling;) {
                    let r = e.previousElementSibling;
                    t ? r.matches(t) && n.push(r) : n.push(r), e = r
                }
                return n
            }

            function v(e, t) {
                let n = [];
                for (; e.nextElementSibling;) {
                    let r = e.nextElementSibling;
                    t ? r.matches(t) && n.push(r) : n.push(r), e = r
                }
                return n
            }

            function m(e, t) {
                return (0, r.a)().getComputedStyle(e, null).getPropertyValue(t)
            }

            function y(e) {
                let t, n = e;
                if (n) {
                    for (t = 0; null !== (n = n.previousSibling);) 1 === n.nodeType && (t += 1);
                    return t
                }
            }

            function b(e, t) {
                let n = [],
                    r = e.parentElement;
                for (; r;) t ? r.matches(t) && n.push(r) : n.push(r), r = r.parentElement;
                return n
            }

            function w(e, t, n) {
                let i = (0, r.a)();
                return n ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
            }

            function S(e) {
                return (Array.isArray(e) ? e : [e]).filter(e => !!e)
            }

            function E(e, t) {
                void 0 === t && (t = ""), "undefined" != typeof trustedTypes ? e.innerHTML = trustedTypes.createPolicy("html", {
                    createHTML: e => e
                }).createHTML(t) : e.innerHTML = t
            }
        },
        1402: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                default: function() {
                    return m
                },
                handleClientScriptLoad: function() {
                    return h
                },
                initScriptLoader: function() {
                    return g
                }
            });
            let r = n(8140),
                i = n(9417),
                o = n(5155),
                a = r._(n(7650)),
                s = i._(n(2115)),
                l = n(2073),
                u = n(4681),
                c = n(4853),
                d = new Map,
                f = new Set,
                p = e => {
                    let {
                        src: t,
                        id: n,
                        onLoad: r = () => {},
                        onReady: i = null,
                        dangerouslySetInnerHTML: o,
                        children: s = "",
                        strategy: l = "afterInteractive",
                        onError: c,
                        stylesheets: p
                    } = e, h = n || t;
                    if (h && f.has(h)) return;
                    if (d.has(t)) {
                        f.add(h), d.get(t).then(r, c);
                        return
                    }
                    let g = () => {
                            i && i(), f.add(h)
                        },
                        v = document.createElement("script"),
                        m = new Promise((e, t) => {
                            v.addEventListener("load", function(t) {
                                e(), r && r.call(this, t), g()
                            }), v.addEventListener("error", function(e) {
                                t(e)
                            })
                        }).catch(function(e) {
                            c && c(e)
                        });
                    o ? (v.innerHTML = o.__html || "", g()) : s ? (v.textContent = "string" == typeof s ? s : Array.isArray(s) ? s.join("") : "", g()) : t && (v.src = t, d.set(t, m)), (0, u.setAttributesFromProps)(v, e), "worker" === l && v.setAttribute("type", "text/partytown"), v.setAttribute("data-nscript", l), p && (e => {
                        if (a.default.preinit) return e.forEach(e => {
                            a.default.preinit(e, {
                                as: "style"
                            })
                        }); {
                            let t = document.head;
                            e.forEach(e => {
                                let n = document.createElement("link");
                                n.type = "text/css", n.rel = "stylesheet", n.href = e, t.appendChild(n)
                            })
                        }
                    })(p), document.body.appendChild(v)
                };

            function h(e) {
                let {
                    strategy: t = "afterInteractive"
                } = e;
                "lazyOnload" === t ? window.addEventListener("load", () => {
                    (0, c.requestIdleCallback)(() => p(e))
                }) : p(e)
            }

            function g(e) {
                e.forEach(h), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
                    let t = e.id || e.getAttribute("src");
                    f.add(t)
                })
            }

            function v(e) {
                let {
                    id: t,
                    src: n = "",
                    onLoad: r = () => {},
                    onReady: i = null,
                    strategy: u = "afterInteractive",
                    onError: d,
                    stylesheets: h,
                    ...g
                } = e, {
                    updateScripts: v,
                    scripts: m,
                    getIsSsr: y,
                    appDir: b,
                    nonce: w
                } = (0, s.useContext)(l.HeadManagerContext);
                w = g.nonce || w;
                let S = (0, s.useRef)(!1);
                (0, s.useEffect)(() => {
                    let e = t || n;
                    S.current || (i && e && f.has(e) && i(), S.current = !0)
                }, [i, t, n]);
                let E = (0, s.useRef)(!1);
                if ((0, s.useEffect)(() => {
                        if (!E.current) {
                            if ("afterInteractive" === u) p(e);
                            else "lazyOnload" === u && ("complete" === document.readyState ? (0, c.requestIdleCallback)(() => p(e)) : window.addEventListener("load", () => {
                                (0, c.requestIdleCallback)(() => p(e))
                            }));
                            E.current = !0
                        }
                    }, [e, u]), ("beforeInteractive" === u || "worker" === u) && (v ? (m[u] = (m[u] || []).concat([{
                        id: t,
                        src: n,
                        onLoad: r,
                        onReady: i,
                        onError: d,
                        ...g,
                        nonce: w
                    }]), v(m)) : y && y() ? f.add(t || n) : y && !y() && p({ ...e,
                        nonce: w
                    })), b) {
                    if (h && h.forEach(e => {
                            a.default.preinit(e, {
                                as: "style"
                            })
                        }), "beforeInteractive" === u)
                        if (!n) return g.dangerouslySetInnerHTML && (g.children = g.dangerouslySetInnerHTML.__html, delete g.dangerouslySetInnerHTML), (0, o.jsx)("script", {
                            nonce: w,
                            dangerouslySetInnerHTML: {
                                __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, { ...g,
                                    id: t
                                }]) + ")"
                            }
                        });
                        else return a.default.preload(n, g.integrity ? {
                            as: "script",
                            integrity: g.integrity,
                            nonce: w,
                            crossOrigin: g.crossOrigin
                        } : {
                            as: "script",
                            nonce: w,
                            crossOrigin: g.crossOrigin
                        }), (0, o.jsx)("script", {
                            nonce: w,
                            dangerouslySetInnerHTML: {
                                __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([n, { ...g,
                                    id: t
                                }]) + ")"
                            }
                        });
                    "afterInteractive" === u && n && a.default.preload(n, g.integrity ? {
                        as: "script",
                        integrity: g.integrity,
                        nonce: w,
                        crossOrigin: g.crossOrigin
                    } : {
                        as: "script",
                        nonce: w,
                        crossOrigin: g.crossOrigin
                    })
                }
                return null
            }
            Object.defineProperty(v, "__nextScript", {
                value: !0
            });
            let m = v;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        4054: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                bindSnapshot: function() {
                    return a
                },
                createAsyncLocalStorage: function() {
                    return o
                },
                createSnapshot: function() {
                    return s
                }
            });
            let n = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
                value: "E504",
                enumerable: !1,
                configurable: !0
            });
            class r {
                disable() {
                    throw n
                }
                getStore() {}
                run() {
                    throw n
                }
                exit() {
                    throw n
                }
                enterWith() {
                    throw n
                }
                static bind(e) {
                    return e
                }
            }
            let i = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;

            function o() {
                return i ? new i : new r
            }

            function a(e) {
                return i ? i.bind(e) : r.bind(e)
            }

            function s() {
                return i ? i.snapshot() : function(e, ...t) {
                    return e(...t)
                }
            }
        },
        4062: () => {},
        4437: (e, t, n) => {
            "use strict";

            function r(e) {
                let {
                    reason: t,
                    children: n
                } = e;
                return n
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BailoutToCSR", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n(4553)
        },
        4551: (e, t, n) => {
            "use strict";
            let r, i, o;
            n.d(t, {
                RC: () => V,
                qr: () => G
            });
            var a = n(2115),
                s = n(7310),
                l = n(1397);

            function u() {
                return r || (r = function() {
                    let e = (0, s.a)(),
                        t = (0, s.g)();
                    return {
                        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                    }
                }()), r
            }

            function c(e) {
                return void 0 === e && (e = {}), i || (i = function(e) {
                    let {
                        userAgent: t
                    } = void 0 === e ? {} : e, n = u(), r = (0, s.a)(), i = r.navigator.platform, o = t || r.navigator.userAgent, a = {
                        ios: !1,
                        android: !1
                    }, l = r.screen.width, c = r.screen.height, d = o.match(/(Android);?[\s\/]+([\d.]+)?/), f = o.match(/(iPad).*OS\s([\d_]+)/), p = o.match(/(iPod)(.*OS\s([\d_]+))?/), h = !f && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/), g = "MacIntel" === i;
                    return !f && g && n.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${c}`) >= 0 && ((f = o.match(/(Version)\/([\d.]+)/)) || (f = [0, 1, "13_0_0"]), g = !1), d && "Win32" !== i && (a.os = "android", a.android = !0), (f || h || p) && (a.os = "ios", a.ios = !0), a
                }(e)), i
            }

            function d() {
                return o || (o = function() {
                    let e = (0, s.a)(),
                        t = c(),
                        n = !1;

                    function r() {
                        let t = e.navigator.userAgent.toLowerCase();
                        return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                    }
                    if (r()) {
                        let t = String(e.navigator.userAgent);
                        if (t.includes("Version/")) {
                            let [e, r] = t.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
                            n = e < 16 || 16 === e && r < 2
                        }
                    }
                    let i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
                        o = r(),
                        a = o || i && t.ios;
                    return {
                        isSafari: n || o,
                        needPerspectiveFix: n,
                        need3dFix: a,
                        isWebView: i
                    }
                }()), o
            }
            let f = (e, t, n) => {
                    t && !e.classList.contains(n) ? e.classList.add(n) : !t && e.classList.contains(n) && e.classList.remove(n)
                },
                p = (e, t, n) => {
                    t && !e.classList.contains(n) ? e.classList.add(n) : !t && e.classList.contains(n) && e.classList.remove(n)
                },
                h = (e, t) => {
                    if (!e || e.destroyed || !e.params) return;
                    let n = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
                    if (n) {
                        let t = n.querySelector(`.${e.params.lazyPreloaderClass}`);
                        !t && e.isElement && (n.shadowRoot ? t = n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
                            n.shadowRoot && (t = n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)) && t.remove()
                        })), t && t.remove()
                    }
                },
                g = (e, t) => {
                    if (!e.slides[t]) return;
                    let n = e.slides[t].querySelector('[loading="lazy"]');
                    n && n.removeAttribute("loading")
                },
                v = e => {
                    if (!e || e.destroyed || !e.params) return;
                    let t = e.params.lazyPreloadPrevNext,
                        n = e.slides.length;
                    if (!n || !t || t < 0) return;
                    t = Math.min(t, n);
                    let r = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                        i = e.activeIndex;
                    if (e.params.grid && e.params.grid.rows > 1) {
                        let n = [i - t];
                        n.push(...Array.from({
                            length: t
                        }).map((e, t) => i + r + t)), e.slides.forEach((t, r) => {
                            n.includes(t.column) && g(e, r)
                        });
                        return
                    }
                    let o = i + r - 1;
                    if (e.params.rewind || e.params.loop)
                        for (let r = i - t; r <= o + t; r += 1) {
                            let t = (r % n + n) % n;
                            (t < i || t > o) && g(e, t)
                        } else
                            for (let r = Math.max(i - t, 0); r <= Math.min(o + t, n - 1); r += 1) r !== i && (r > o || r < i) && g(e, r)
                };

            function m(e) {
                let {
                    swiper: t,
                    runCallbacks: n,
                    direction: r,
                    step: i
                } = e, {
                    activeIndex: o,
                    previousIndex: a
                } = t, s = r;
                s || (s = o > a ? "next" : o < a ? "prev" : "reset"), t.emit(`transition${i}`), n && "reset" === s ? t.emit(`slideResetTransition${i}`) : n && o !== a && (t.emit(`slideChangeTransition${i}`), "next" === s ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`))
            }

            function y(e, t, n) {
                let r = (0, s.a)(),
                    {
                        params: i
                    } = e,
                    o = i.edgeSwipeDetection,
                    a = i.edgeSwipeThreshold;
                return !o || !(n <= a) && !(n >= r.innerWidth - a) || "prevent" === o && (t.preventDefault(), !0)
            }

            function b(e) {
                let t = (0, s.g)(),
                    n = e;
                n.originalEvent && (n = n.originalEvent);
                let r = this.touchEventsData;
                if ("pointerdown" === n.type) {
                    if (null !== r.pointerId && r.pointerId !== n.pointerId) return;
                    r.pointerId = n.pointerId
                } else "touchstart" === n.type && 1 === n.targetTouches.length && (r.touchId = n.targetTouches[0].identifier);
                if ("touchstart" === n.type) return void y(this, n, n.targetTouches[0].pageX);
                let {
                    params: i,
                    touches: o,
                    enabled: a
                } = this;
                if (!a || !i.simulateTouch && "mouse" === n.pointerType || this.animating && i.preventInteractionOnTransition) return;
                !this.animating && i.cssMode && i.loop && this.loopFix();
                let u = n.target;
                if ("wrapper" === i.touchEventsTarget && !(0, l.w)(u, this.wrapperEl) || "which" in n && 3 === n.which || "button" in n && n.button > 0 || r.isTouched && r.isMoved) return;
                let c = !!i.noSwipingClass && "" !== i.noSwipingClass,
                    d = n.composedPath ? n.composedPath() : n.path;
                c && n.target && n.target.shadowRoot && d && (u = d[0]);
                let f = i.noSwipingSelector ? i.noSwipingSelector : `.${i.noSwipingClass}`,
                    p = !!(n.target && n.target.shadowRoot);
                if (i.noSwiping && (p ? function(e, t) {
                        return void 0 === t && (t = this),
                            function t(n) {
                                if (!n || n === (0, s.g)() || n === (0, s.a)()) return null;
                                n.assignedSlot && (n = n.assignedSlot);
                                let r = n.closest(e);
                                return r || n.getRootNode ? r || t(n.getRootNode().host) : null
                            }(t)
                    }(f, u) : u.closest(f))) {
                    this.allowClick = !0;
                    return
                }
                if (i.swipeHandler && !u.closest(i.swipeHandler)) return;
                o.currentX = n.pageX, o.currentY = n.pageY;
                let h = o.currentX,
                    g = o.currentY;
                if (!y(this, n, h)) return;
                Object.assign(r, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), o.startX = h, o.startY = g, r.touchStartTime = (0, l.f)(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, i.threshold > 0 && (r.allowThresholdMove = !1);
                let v = !0;
                u.matches(r.focusableElements) && (v = !1, "SELECT" === u.nodeName && (r.isTouched = !1)), t.activeElement && t.activeElement.matches(r.focusableElements) && t.activeElement !== u && ("mouse" === n.pointerType || "mouse" !== n.pointerType && !u.matches(r.focusableElements)) && t.activeElement.blur();
                let m = v && this.allowTouchMove && i.touchStartPreventDefault;
                (i.touchStartForcePreventDefault || m) && !u.isContentEditable && n.preventDefault(), i.freeMode && i.freeMode.enabled && this.freeMode && this.animating && !i.cssMode && this.freeMode.onTouchStart(), this.emit("touchStart", n)
            }

            function w(e) {
                let t, n, r = (0, s.g)(),
                    i = this.touchEventsData,
                    {
                        params: o,
                        touches: a,
                        rtlTranslate: u,
                        enabled: c
                    } = this;
                if (!c || !o.simulateTouch && "mouse" === e.pointerType) return;
                let d = e;
                if (d.originalEvent && (d = d.originalEvent), "pointermove" === d.type && (null !== i.touchId || d.pointerId !== i.pointerId)) return;
                if ("touchmove" === d.type) {
                    if (!(t = [...d.changedTouches].find(e => e.identifier === i.touchId)) || t.identifier !== i.touchId) return
                } else t = d;
                if (!i.isTouched) {
                    i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", d);
                    return
                }
                let f = t.pageX,
                    p = t.pageY;
                if (d.preventedByNestedSwiper) {
                    a.startX = f, a.startY = p;
                    return
                }
                if (!this.allowTouchMove) {
                    d.target.matches(i.focusableElements) || (this.allowClick = !1), i.isTouched && (Object.assign(a, {
                        startX: f,
                        startY: p,
                        currentX: f,
                        currentY: p
                    }), i.touchStartTime = (0, l.f)());
                    return
                }
                if (o.touchReleaseOnEdges && !o.loop) {
                    if (this.isVertical()) {
                        if (p < a.startY && this.translate <= this.maxTranslate() || p > a.startY && this.translate >= this.minTranslate()) {
                            i.isTouched = !1, i.isMoved = !1;
                            return
                        }
                    } else if (u && (f > a.startX && -this.translate <= this.maxTranslate() || f < a.startX && -this.translate >= this.minTranslate())) return;
                    else if (!u && (f < a.startX && this.translate <= this.maxTranslate() || f > a.startX && this.translate >= this.minTranslate())) return
                }
                if (r.activeElement && r.activeElement.matches(i.focusableElements) && r.activeElement !== d.target && "mouse" !== d.pointerType && r.activeElement.blur(), r.activeElement && d.target === r.activeElement && d.target.matches(i.focusableElements)) {
                    i.isMoved = !0, this.allowClick = !1;
                    return
                }
                i.allowTouchCallbacks && this.emit("touchMove", d), a.previousX = a.currentX, a.previousY = a.currentY, a.currentX = f, a.currentY = p;
                let h = a.currentX - a.startX,
                    g = a.currentY - a.startY;
                if (this.params.threshold && Math.sqrt(h ** 2 + g ** 2) < this.params.threshold) return;
                if (void 0 === i.isScrolling) {
                    let e;
                    this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : h * h + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(h)) / Math.PI, i.isScrolling = this.isHorizontal() ? e > o.touchAngle : 90 - e > o.touchAngle)
                }
                if (i.isScrolling && this.emit("touchMoveOpposite", d), void 0 === i.startMoving && (a.currentX !== a.startX || a.currentY !== a.startY) && (i.startMoving = !0), i.isScrolling || "touchmove" === d.type && i.preventTouchMoveFromPointerMove) {
                    i.isTouched = !1;
                    return
                }
                if (!i.startMoving) return;
                this.allowClick = !1, !o.cssMode && d.cancelable && d.preventDefault(), o.touchMoveStopPropagation && !o.nested && d.stopPropagation();
                let v = this.isHorizontal() ? h : g,
                    m = this.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY;
                o.oneWayMovement && (v = Math.abs(v) * (u ? 1 : -1), m = Math.abs(m) * (u ? 1 : -1)), a.diff = v, v *= o.touchRatio, u && (v = -v, m = -m);
                let y = this.touchesDirection;
                this.swipeDirection = v > 0 ? "prev" : "next", this.touchesDirection = m > 0 ? "prev" : "next";
                let b = this.params.loop && !o.cssMode,
                    w = "next" === this.touchesDirection && this.allowSlideNext || "prev" === this.touchesDirection && this.allowSlidePrev;
                if (!i.isMoved) {
                    if (b && w && this.loopFix({
                            direction: this.swipeDirection
                        }), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating) {
                        let e = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0,
                            detail: {
                                bySwiperTouchMove: !0
                            }
                        });
                        this.wrapperEl.dispatchEvent(e)
                    }
                    i.allowMomentumBounce = !1, o.grabCursor && (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) && this.setGrabCursor(!0), this.emit("sliderFirstMove", d)
                }
                if (new Date().getTime(), !1 !== o._loopSwapReset && i.isMoved && i.allowThresholdMove && y !== this.touchesDirection && b && w && Math.abs(v) >= 1) {
                    Object.assign(a, {
                        startX: f,
                        startY: p,
                        currentX: f,
                        currentY: p,
                        startTranslate: i.currentTranslate
                    }), i.loopSwapReset = !0, i.startTranslate = i.currentTranslate;
                    return
                }
                this.emit("sliderMove", d), i.isMoved = !0, i.currentTranslate = v + i.startTranslate;
                let S = !0,
                    E = o.resistanceRatio;
                if (o.touchReleaseOnEdges && (E = 0), v > 0 ? (b && w && !n && i.allowThresholdMove && i.currentTranslate > (o.centeredSlides ? this.minTranslate() - this.slidesSizesGrid[this.activeIndex + 1] - ("auto" !== o.slidesPerView && this.slides.length - o.slidesPerView >= 2 ? this.slidesSizesGrid[this.activeIndex + 1] + this.params.spaceBetween : 0) - this.params.spaceBetween : this.minTranslate()) && this.loopFix({
                        direction: "prev",
                        setTranslate: !0,
                        activeSlideIndex: 0
                    }), i.currentTranslate > this.minTranslate() && (S = !1, o.resistance && (i.currentTranslate = this.minTranslate() - 1 + (-this.minTranslate() + i.startTranslate + v) ** E))) : v < 0 && (b && w && !n && i.allowThresholdMove && i.currentTranslate < (o.centeredSlides ? this.maxTranslate() + this.slidesSizesGrid[this.slidesSizesGrid.length - 1] + this.params.spaceBetween + ("auto" !== o.slidesPerView && this.slides.length - o.slidesPerView >= 2 ? this.slidesSizesGrid[this.slidesSizesGrid.length - 1] + this.params.spaceBetween : 0) : this.maxTranslate()) && this.loopFix({
                        direction: "next",
                        setTranslate: !0,
                        activeSlideIndex: this.slides.length - ("auto" === o.slidesPerView ? this.slidesPerViewDynamic() : Math.ceil(parseFloat(o.slidesPerView, 10)))
                    }), i.currentTranslate < this.maxTranslate() && (S = !1, o.resistance && (i.currentTranslate = this.maxTranslate() + 1 - (this.maxTranslate() - i.startTranslate - v) ** E))), S && (d.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), this.allowSlidePrev || this.allowSlideNext || (i.currentTranslate = i.startTranslate), o.threshold > 0)
                    if (Math.abs(v) > o.threshold || i.allowThresholdMove) {
                        if (!i.allowThresholdMove) {
                            i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY;
                            return
                        }
                    } else {
                        i.currentTranslate = i.startTranslate;
                        return
                    }
                o.followFinger && !o.cssMode && ((o.freeMode && o.freeMode.enabled && this.freeMode || o.watchSlidesProgress) && (this.updateActiveIndex(), this.updateSlidesClasses()), o.freeMode && o.freeMode.enabled && this.freeMode && this.freeMode.onTouchMove(), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
            }

            function S(e) {
                let t, n, r = this,
                    i = r.touchEventsData,
                    o = e;
                if (o.originalEvent && (o = o.originalEvent), "touchend" === o.type || "touchcancel" === o.type) {
                    if (!(t = [...o.changedTouches].find(e => e.identifier === i.touchId)) || t.identifier !== i.touchId) return
                } else {
                    if (null !== i.touchId || o.pointerId !== i.pointerId) return;
                    t = o
                }
                if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(o.type) && !(["pointercancel", "contextmenu"].includes(o.type) && (r.browser.isSafari || r.browser.isWebView))) return;
                i.pointerId = null, i.touchId = null;
                let {
                    params: a,
                    touches: s,
                    rtlTranslate: u,
                    slidesGrid: c,
                    enabled: d
                } = r;
                if (!d || !a.simulateTouch && "mouse" === o.pointerType) return;
                if (i.allowTouchCallbacks && r.emit("touchEnd", o), i.allowTouchCallbacks = !1, !i.isTouched) {
                    i.isMoved && a.grabCursor && r.setGrabCursor(!1), i.isMoved = !1, i.startMoving = !1;
                    return
                }
                a.grabCursor && i.isMoved && i.isTouched && (!0 === r.allowSlideNext || !0 === r.allowSlidePrev) && r.setGrabCursor(!1);
                let f = (0, l.f)(),
                    p = f - i.touchStartTime;
                if (r.allowClick) {
                    let e = o.path || o.composedPath && o.composedPath();
                    r.updateClickedSlide(e && e[0] || o.target, e), r.emit("tap click", o), p < 300 && f - i.lastClickTime < 300 && r.emit("doubleTap doubleClick", o)
                }
                if (i.lastClickTime = (0, l.f)(), (0, l.n)(() => {
                        r.destroyed || (r.allowClick = !0)
                    }), !i.isTouched || !i.isMoved || !r.swipeDirection || 0 === s.diff && !i.loopSwapReset || i.currentTranslate === i.startTranslate && !i.loopSwapReset) {
                    i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
                    return
                }
                if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, n = a.followFinger ? u ? r.translate : -r.translate : -i.currentTranslate, a.cssMode) return;
                if (a.freeMode && a.freeMode.enabled) return void r.freeMode.onTouchEnd({
                    currentPos: n
                });
                let h = n >= -r.maxTranslate() && !r.params.loop,
                    g = 0,
                    v = r.slidesSizesGrid[0];
                for (let e = 0; e < c.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
                    let t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                    void 0 !== c[e + t] ? (h || n >= c[e] && n < c[e + t]) && (g = e, v = c[e + t] - c[e]) : (h || n >= c[e]) && (g = e, v = c[c.length - 1] - c[c.length - 2])
                }
                let m = null,
                    y = null;
                a.rewind && (r.isBeginning ? y = a.virtual && a.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1 : r.isEnd && (m = 0));
                let b = (n - c[g]) / v,
                    w = g < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                if (p > a.longSwipesMs) {
                    if (!a.longSwipes) return void r.slideTo(r.activeIndex);
                    "next" === r.swipeDirection && (b >= a.longSwipesRatio ? r.slideTo(a.rewind && r.isEnd ? m : g + w) : r.slideTo(g)), "prev" === r.swipeDirection && (b > 1 - a.longSwipesRatio ? r.slideTo(g + w) : null !== y && b < 0 && Math.abs(b) > a.longSwipesRatio ? r.slideTo(y) : r.slideTo(g))
                } else {
                    if (!a.shortSwipes) return void r.slideTo(r.activeIndex);
                    r.navigation && (o.target === r.navigation.nextEl || o.target === r.navigation.prevEl) ? o.target === r.navigation.nextEl ? r.slideTo(g + w) : r.slideTo(g) : ("next" === r.swipeDirection && r.slideTo(null !== m ? m : g + w), "prev" === r.swipeDirection && r.slideTo(null !== y ? y : g))
                }
            }

            function E() {
                let e = this,
                    {
                        params: t,
                        el: n
                    } = e;
                if (n && 0 === n.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                let {
                    allowSlideNext: r,
                    allowSlidePrev: i,
                    snapGrid: o
                } = e, a = e.virtual && e.params.virtual.enabled;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
                let s = a && t.loop;
                "auto" !== t.slidesPerView && !(t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || s ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
                }, 500)), e.allowSlidePrev = i, e.allowSlideNext = r, e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow()
            }

            function x(e) {
                this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }

            function T() {
                let {
                    wrapperEl: e,
                    rtlTranslate: t,
                    enabled: n
                } = this;
                if (!n) return;
                this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = -e.scrollLeft : this.translate = -e.scrollTop, 0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
                let r = this.maxTranslate() - this.minTranslate();
                (0 === r ? 0 : (this.translate - this.minTranslate()) / r) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
            }

            function k(e) {
                h(this, e.target), !this.params.cssMode && ("auto" === this.params.slidesPerView || this.params.autoHeight) && this.update()
            }

            function P() {
                !this.documentTouchHandlerProceeded && (this.documentTouchHandlerProceeded = !0, this.params.touchReleaseOnEdges && (this.el.style.touchAction = "auto"))
            }
            let C = (e, t) => {
                    let n = (0, s.g)(),
                        {
                            params: r,
                            el: i,
                            wrapperEl: o,
                            device: a
                        } = e,
                        l = !!r.nested,
                        u = "on" === t ? "addEventListener" : "removeEventListener";
                    i && "string" != typeof i && (n[u]("touchstart", e.onDocumentTouchStart, {
                        passive: !1,
                        capture: l
                    }), i[u]("touchstart", e.onTouchStart, {
                        passive: !1
                    }), i[u]("pointerdown", e.onTouchStart, {
                        passive: !1
                    }), n[u]("touchmove", e.onTouchMove, {
                        passive: !1,
                        capture: l
                    }), n[u]("pointermove", e.onTouchMove, {
                        passive: !1,
                        capture: l
                    }), n[u]("touchend", e.onTouchEnd, {
                        passive: !0
                    }), n[u]("pointerup", e.onTouchEnd, {
                        passive: !0
                    }), n[u]("pointercancel", e.onTouchEnd, {
                        passive: !0
                    }), n[u]("touchcancel", e.onTouchEnd, {
                        passive: !0
                    }), n[u]("pointerout", e.onTouchEnd, {
                        passive: !0
                    }), n[u]("pointerleave", e.onTouchEnd, {
                        passive: !0
                    }), n[u]("contextmenu", e.onTouchEnd, {
                        passive: !0
                    }), (r.preventClicks || r.preventClicksPropagation) && i[u]("click", e.onClick, !0), r.cssMode && o[u]("scroll", e.onScroll), r.updateOnWindowResize ? e[t](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", E, !0) : e[t]("observerUpdate", E, !0), i[u]("load", e.onLoad, {
                        capture: !0
                    }))
                },
                _ = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var I = {
                init: !0,
                direction: "horizontal",
                oneWayMovement: !1,
                swiperElementNodeName: "SWIPER-CONTAINER",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                eventsPrefix: "swiper",
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 5,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                loop: !1,
                loopAddBlankSlides: !0,
                loopAdditionalSlides: 0,
                loopPreventsSliding: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-blank",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideFullyVisibleClass: "swiper-slide-fully-visible",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                lazyPreloaderClass: "swiper-lazy-preloader",
                lazyPreloadPrevNext: 0,
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };
            let A = {
                    eventsEmitter: {
                        on(e, t, n) {
                            let r = this;
                            if (!r.eventsListeners || r.destroyed || "function" != typeof t) return r;
                            let i = n ? "unshift" : "push";
                            return e.split(" ").forEach(e => {
                                r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][i](t)
                            }), r
                        },
                        once(e, t, n) {
                            let r = this;
                            if (!r.eventsListeners || r.destroyed || "function" != typeof t) return r;

                            function i() {
                                r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
                                for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                                t.apply(r, o)
                            }
                            return i.__emitterProxy = t, r.on(e, i, n)
                        },
                        onAny(e, t) {
                            return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e), this
                        },
                        offAny(e) {
                            if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                            let t = this.eventsAnyListeners.indexOf(e);
                            return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
                        },
                        off(e, t) {
                            let n = this;
                            return n.eventsListeners && !n.destroyed && n.eventsListeners && e.split(" ").forEach(e => {
                                void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach((r, i) => {
                                    (r === t || r.__emitterProxy && r.__emitterProxy === t) && n.eventsListeners[e].splice(i, 1)
                                })
                            }), n
                        },
                        emit() {
                            let e, t, n, r = this;
                            if (!r.eventsListeners || r.destroyed || !r.eventsListeners) return r;
                            for (var i = arguments.length, o = Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                            return "string" == typeof o[0] || Array.isArray(o[0]) ? (e = o[0], t = o.slice(1, o.length), n = r) : (e = o[0].events, t = o[0].data, n = o[0].context || r), t.unshift(n), (Array.isArray(e) ? e : e.split(" ")).forEach(e => {
                                r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach(r => {
                                    r.apply(n, [e, ...t])
                                }), r.eventsListeners && r.eventsListeners[e] && r.eventsListeners[e].forEach(e => {
                                    e.apply(n, t)
                                })
                            }), r
                        }
                    },
                    update: {
                        updateSize: function() {
                            let e, t, n = this.el;
                            e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : n.clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : n.clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt((0, l.q)(n, "padding-left") || 0, 10) - parseInt((0, l.q)(n, "padding-right") || 0, 10), t = t - parseInt((0, l.q)(n, "padding-top") || 0, 10) - parseInt((0, l.q)(n, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(this, {
                                width: e,
                                height: t,
                                size: this.isHorizontal() ? e : t
                            }))
                        },
                        updateSlides: function() {
                            let e, t = this;

                            function n(e, n) {
                                return parseFloat(e.getPropertyValue(t.getDirectionLabel(n)) || 0)
                            }
                            let r = t.params,
                                {
                                    wrapperEl: i,
                                    slidesEl: o,
                                    size: a,
                                    rtlTranslate: s,
                                    wrongRTL: u
                                } = t,
                                c = t.virtual && r.virtual.enabled,
                                d = c ? t.virtual.slides.length : t.slides.length,
                                f = (0, l.e)(o, `.${t.params.slideClass}, swiper-slide`),
                                p = c ? t.virtual.slides.length : f.length,
                                h = [],
                                g = [],
                                v = [],
                                m = r.slidesOffsetBefore;
                            "function" == typeof m && (m = r.slidesOffsetBefore.call(t));
                            let y = r.slidesOffsetAfter;
                            "function" == typeof y && (y = r.slidesOffsetAfter.call(t));
                            let b = t.snapGrid.length,
                                w = t.slidesGrid.length,
                                S = r.spaceBetween,
                                E = -m,
                                x = 0,
                                T = 0;
                            if (void 0 === a) return;
                            "string" == typeof S && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * a : "string" == typeof S && (S = parseFloat(S)), t.virtualSize = -S, f.forEach(e => {
                                s ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                            }), r.centeredSlides && r.cssMode && ((0, l.a)(i, "--swiper-centered-offset-before", ""), (0, l.a)(i, "--swiper-centered-offset-after", ""));
                            let k = r.grid && r.grid.rows > 1 && t.grid;
                            k ? t.grid.initSlides(f) : t.grid && t.grid.unsetSlides();
                            let P = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter(e => void 0 !== r.breakpoints[e].slidesPerView).length > 0;
                            for (let i = 0; i < p; i += 1) {
                                let o;
                                if (e = 0, f[i] && (o = f[i]), k && t.grid.updateSlide(i, o, f), !f[i] || "none" !== (0, l.q)(o, "display")) {
                                    if ("auto" === r.slidesPerView) {
                                        P && (f[i].style[t.getDirectionLabel("width")] = "");
                                        let a = getComputedStyle(o),
                                            s = o.style.transform,
                                            u = o.style.webkitTransform;
                                        if (s && (o.style.transform = "none"), u && (o.style.webkitTransform = "none"), r.roundLengths) e = t.isHorizontal() ? (0, l.h)(o, "width", !0) : (0, l.h)(o, "height", !0);
                                        else {
                                            let t = n(a, "width"),
                                                r = n(a, "padding-left"),
                                                i = n(a, "padding-right"),
                                                s = n(a, "margin-left"),
                                                l = n(a, "margin-right"),
                                                u = a.getPropertyValue("box-sizing");
                                            if (u && "border-box" === u) e = t + s + l;
                                            else {
                                                let {
                                                    clientWidth: n,
                                                    offsetWidth: a
                                                } = o;
                                                e = t + r + i + s + l + (a - n)
                                            }
                                        }
                                        s && (o.style.transform = s), u && (o.style.webkitTransform = u), r.roundLengths && (e = Math.floor(e))
                                    } else e = (a - (r.slidesPerView - 1) * S) / r.slidesPerView, r.roundLengths && (e = Math.floor(e)), f[i] && (f[i].style[t.getDirectionLabel("width")] = `${e}px`);
                                    f[i] && (f[i].swiperSlideSize = e), v.push(e), r.centeredSlides ? (E = E + e / 2 + x / 2 + S, 0 === x && 0 !== i && (E = E - a / 2 - S), 0 === i && (E = E - a / 2 - S), .001 > Math.abs(E) && (E = 0), r.roundLengths && (E = Math.floor(E)), T % r.slidesPerGroup == 0 && h.push(E), g.push(E)) : (r.roundLengths && (E = Math.floor(E)), (T - Math.min(t.params.slidesPerGroupSkip, T)) % t.params.slidesPerGroup == 0 && h.push(E), g.push(E), E = E + e + S), t.virtualSize += e + S, x = e, T += 1
                                }
                            }
                            if (t.virtualSize = Math.max(t.virtualSize, a) + y, s && u && ("slide" === r.effect || "coverflow" === r.effect) && (i.style.width = `${t.virtualSize+S}px`), r.setWrapperSize && (i.style[t.getDirectionLabel("width")] = `${t.virtualSize+S}px`), k && t.grid.updateWrapperSize(e, h), !r.centeredSlides) {
                                let e = [];
                                for (let n = 0; n < h.length; n += 1) {
                                    let i = h[n];
                                    r.roundLengths && (i = Math.floor(i)), h[n] <= t.virtualSize - a && e.push(i)
                                }
                                h = e, Math.floor(t.virtualSize - a) - Math.floor(h[h.length - 1]) > 1 && h.push(t.virtualSize - a)
                            }
                            if (c && r.loop) {
                                let e = v[0] + S;
                                if (r.slidesPerGroup > 1) {
                                    let n = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / r.slidesPerGroup),
                                        i = e * r.slidesPerGroup;
                                    for (let e = 0; e < n; e += 1) h.push(h[h.length - 1] + i)
                                }
                                for (let n = 0; n < t.virtual.slidesBefore + t.virtual.slidesAfter; n += 1) 1 === r.slidesPerGroup && h.push(h[h.length - 1] + e), g.push(g[g.length - 1] + e), t.virtualSize += e
                            }
                            if (0 === h.length && (h = [0]), 0 !== S) {
                                let e = t.isHorizontal() && s ? "marginLeft" : t.getDirectionLabel("marginRight");
                                f.filter((e, t) => !r.cssMode || !!r.loop || t !== f.length - 1).forEach(t => {
                                    t.style[e] = `${S}px`
                                })
                            }
                            if (r.centeredSlides && r.centeredSlidesBounds) {
                                let e = 0;
                                v.forEach(t => {
                                    e += t + (S || 0)
                                });
                                let t = (e -= S) > a ? e - a : 0;
                                h = h.map(e => e <= 0 ? -m : e > t ? t + y : e)
                            }
                            if (r.centerInsufficientSlides) {
                                let e = 0;
                                v.forEach(t => {
                                    e += t + (S || 0)
                                }), e -= S;
                                let t = (r.slidesOffsetBefore || 0) + (r.slidesOffsetAfter || 0);
                                if (e + t < a) {
                                    let n = (a - e - t) / 2;
                                    h.forEach((e, t) => {
                                        h[t] = e - n
                                    }), g.forEach((e, t) => {
                                        g[t] = e + n
                                    })
                                }
                            }
                            if (Object.assign(t, {
                                    slides: f,
                                    snapGrid: h,
                                    slidesGrid: g,
                                    slidesSizesGrid: v
                                }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
                                (0, l.a)(i, "--swiper-centered-offset-before", `${-h[0]}px`), (0, l.a)(i, "--swiper-centered-offset-after", `${t.size/2-v[v.length-1]/2}px`);
                                let e = -t.snapGrid[0],
                                    n = -t.slidesGrid[0];
                                t.snapGrid = t.snapGrid.map(t => t + e), t.slidesGrid = t.slidesGrid.map(e => e + n)
                            }
                            if (p !== d && t.emit("slidesLengthChange"), h.length !== b && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), g.length !== w && t.emit("slidesGridLengthChange"), r.watchSlidesProgress && t.updateSlidesOffset(), t.emit("slidesUpdated"), !c && !r.cssMode && ("slide" === r.effect || "fade" === r.effect)) {
                                let e = `${r.containerModifierClass}backface-hidden`,
                                    n = t.el.classList.contains(e);
                                p <= r.maxBackfaceHiddenSlides ? n || t.el.classList.add(e) : n && t.el.classList.remove(e)
                            }
                        },
                        updateAutoHeight: function(e) {
                            let t, n = this,
                                r = [],
                                i = n.virtual && n.params.virtual.enabled,
                                o = 0;
                            "number" == typeof e ? n.setTransition(e) : !0 === e && n.setTransition(n.params.speed);
                            let a = e => i ? n.slides[n.getSlideIndexByData(e)] : n.slides[e];
                            if ("auto" !== n.params.slidesPerView && n.params.slidesPerView > 1)
                                if (n.params.centeredSlides)(n.visibleSlides || []).forEach(e => {
                                    r.push(e)
                                });
                                else
                                    for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
                                        let e = n.activeIndex + t;
                                        if (e > n.slides.length && !i) break;
                                        r.push(a(e))
                                    } else r.push(a(n.activeIndex));
                            for (t = 0; t < r.length; t += 1)
                                if (void 0 !== r[t]) {
                                    let e = r[t].offsetHeight;
                                    o = e > o ? e : o
                                }(o || 0 === o) && (n.wrapperEl.style.height = `${o}px`)
                        },
                        updateSlidesOffset: function() {
                            let e = this.slides,
                                t = this.isElement ? this.isHorizontal() ? this.wrapperEl.offsetLeft : this.wrapperEl.offsetTop : 0;
                            for (let n = 0; n < e.length; n += 1) e[n].swiperSlideOffset = (this.isHorizontal() ? e[n].offsetLeft : e[n].offsetTop) - t - this.cssOverflowAdjustment()
                        },
                        updateSlidesProgress: function(e) {
                            void 0 === e && (e = this && this.translate || 0);
                            let t = this.params,
                                {
                                    slides: n,
                                    rtlTranslate: r,
                                    snapGrid: i
                                } = this;
                            if (0 === n.length) return;
                            void 0 === n[0].swiperSlideOffset && this.updateSlidesOffset();
                            let o = -e;
                            r && (o = e), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                            let a = t.spaceBetween;
                            "string" == typeof a && a.indexOf("%") >= 0 ? a = parseFloat(a.replace("%", "")) / 100 * this.size : "string" == typeof a && (a = parseFloat(a));
                            for (let e = 0; e < n.length; e += 1) {
                                let s = n[e],
                                    l = s.swiperSlideOffset;
                                t.cssMode && t.centeredSlides && (l -= n[0].swiperSlideOffset);
                                let u = (o + (t.centeredSlides ? this.minTranslate() : 0) - l) / (s.swiperSlideSize + a),
                                    c = (o - i[0] + (t.centeredSlides ? this.minTranslate() : 0) - l) / (s.swiperSlideSize + a),
                                    d = -(o - l),
                                    p = d + this.slidesSizesGrid[e],
                                    h = d >= 0 && d <= this.size - this.slidesSizesGrid[e],
                                    g = d >= 0 && d < this.size - 1 || p > 1 && p <= this.size || d <= 0 && p >= this.size;
                                g && (this.visibleSlides.push(s), this.visibleSlidesIndexes.push(e)), f(s, g, t.slideVisibleClass), f(s, h, t.slideFullyVisibleClass), s.progress = r ? -u : u, s.originalProgress = r ? -c : c
                            }
                        },
                        updateProgress: function(e) {
                            if (void 0 === e) {
                                let t = this.rtlTranslate ? -1 : 1;
                                e = this && this.translate && this.translate * t || 0
                            }
                            let t = this.params,
                                n = this.maxTranslate() - this.minTranslate(),
                                {
                                    progress: r,
                                    isBeginning: i,
                                    isEnd: o,
                                    progressLoop: a
                                } = this,
                                s = i,
                                l = o;
                            if (0 === n) r = 0, i = !0, o = !0;
                            else {
                                r = (e - this.minTranslate()) / n;
                                let t = 1 > Math.abs(e - this.minTranslate()),
                                    a = 1 > Math.abs(e - this.maxTranslate());
                                i = t || r <= 0, o = a || r >= 1, t && (r = 0), a && (r = 1)
                            }
                            if (t.loop) {
                                let t = this.getSlideIndexByData(0),
                                    n = this.getSlideIndexByData(this.slides.length - 1),
                                    r = this.slidesGrid[t],
                                    i = this.slidesGrid[n],
                                    o = this.slidesGrid[this.slidesGrid.length - 1],
                                    s = Math.abs(e);
                                (a = s >= r ? (s - r) / o : (s + o - i) / o) > 1 && (a -= 1)
                            }
                            Object.assign(this, {
                                progress: r,
                                progressLoop: a,
                                isBeginning: i,
                                isEnd: o
                            }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && this.updateSlidesProgress(e), i && !s && this.emit("reachBeginning toEdge"), o && !l && this.emit("reachEnd toEdge"), (s && !i || l && !o) && this.emit("fromEdge"), this.emit("progress", r)
                        },
                        updateSlidesClasses: function() {
                            let e, t, n, {
                                    slides: r,
                                    params: i,
                                    slidesEl: o,
                                    activeIndex: a
                                } = this,
                                s = this.virtual && i.virtual.enabled,
                                u = this.grid && i.grid && i.grid.rows > 1,
                                c = e => (0, l.e)(o, `.${i.slideClass}${e}, swiper-slide${e}`)[0];
                            if (s)
                                if (i.loop) {
                                    let t = a - this.virtual.slidesBefore;
                                    t < 0 && (t = this.virtual.slides.length + t), t >= this.virtual.slides.length && (t -= this.virtual.slides.length), e = c(`[data-swiper-slide-index="${t}"]`)
                                } else e = c(`[data-swiper-slide-index="${a}"]`);
                            else u ? (e = r.find(e => e.column === a), n = r.find(e => e.column === a + 1), t = r.find(e => e.column === a - 1)) : e = r[a];
                            e && !u && (n = (0, l.r)(e, `.${i.slideClass}, swiper-slide`)[0], i.loop && !n && (n = r[0]), t = (0, l.t)(e, `.${i.slideClass}, swiper-slide`)[0], i.loop), r.forEach(r => {
                                p(r, r === e, i.slideActiveClass), p(r, r === n, i.slideNextClass), p(r, r === t, i.slidePrevClass)
                            }), this.emitSlidesClasses()
                        },
                        updateActiveIndex: function(e) {
                            let t, n, r = this,
                                i = r.rtlTranslate ? r.translate : -r.translate,
                                {
                                    snapGrid: o,
                                    params: a,
                                    activeIndex: s,
                                    realIndex: l,
                                    snapIndex: u
                                } = r,
                                c = e,
                                d = e => {
                                    let t = e - r.virtual.slidesBefore;
                                    return t < 0 && (t = r.virtual.slides.length + t), t >= r.virtual.slides.length && (t -= r.virtual.slides.length), t
                                };
                            if (void 0 === c && (c = function(e) {
                                    let t, {
                                            slidesGrid: n,
                                            params: r
                                        } = e,
                                        i = e.rtlTranslate ? e.translate : -e.translate;
                                    for (let e = 0; e < n.length; e += 1) void 0 !== n[e + 1] ? i >= n[e] && i < n[e + 1] - (n[e + 1] - n[e]) / 2 ? t = e : i >= n[e] && i < n[e + 1] && (t = e + 1) : i >= n[e] && (t = e);
                                    return r.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0), t
                                }(r)), o.indexOf(i) >= 0) t = o.indexOf(i);
                            else {
                                let e = Math.min(a.slidesPerGroupSkip, c);
                                t = e + Math.floor((c - e) / a.slidesPerGroup)
                            }
                            if (t >= o.length && (t = o.length - 1), c === s && !r.params.loop) {
                                t !== u && (r.snapIndex = t, r.emit("snapIndexChange"));
                                return
                            }
                            if (c === s && r.params.loop && r.virtual && r.params.virtual.enabled) {
                                r.realIndex = d(c);
                                return
                            }
                            let f = r.grid && a.grid && a.grid.rows > 1;
                            if (r.virtual && a.virtual.enabled && a.loop) n = d(c);
                            else if (f) {
                                let e = r.slides.find(e => e.column === c),
                                    t = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                                Number.isNaN(t) && (t = Math.max(r.slides.indexOf(e), 0)), n = Math.floor(t / a.grid.rows)
                            } else if (r.slides[c]) {
                                let e = r.slides[c].getAttribute("data-swiper-slide-index");
                                n = e ? parseInt(e, 10) : c
                            } else n = c;
                            Object.assign(r, {
                                previousSnapIndex: u,
                                snapIndex: t,
                                previousRealIndex: l,
                                realIndex: n,
                                previousIndex: s,
                                activeIndex: c
                            }), r.initialized && v(r), r.emit("activeIndexChange"), r.emit("snapIndexChange"), (r.initialized || r.params.runCallbacksOnInit) && (l !== n && r.emit("realIndexChange"), r.emit("slideChange"))
                        },
                        updateClickedSlide: function(e, t) {
                            let n, r = this.params,
                                i = e.closest(`.${r.slideClass}, swiper-slide`);
                            !i && this.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(e => {
                                !i && e.matches && e.matches(`.${r.slideClass}, swiper-slide`) && (i = e)
                            });
                            let o = !1;
                            if (i) {
                                for (let e = 0; e < this.slides.length; e += 1)
                                    if (this.slides[e] === i) {
                                        o = !0, n = e;
                                        break
                                    }
                            }
                            if (i && o) this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : this.clickedIndex = n;
                            else {
                                this.clickedSlide = void 0, this.clickedIndex = void 0;
                                return
                            }
                            r.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(e) {
                            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                            let {
                                params: t,
                                rtlTranslate: n,
                                translate: r,
                                wrapperEl: i
                            } = this;
                            if (t.virtualTranslate) return n ? -r : r;
                            if (t.cssMode) return r;
                            let o = (0, l.k)(i, e);
                            return o += this.cssOverflowAdjustment(), n && (o = -o), o || 0
                        },
                        setTranslate: function(e, t) {
                            let {
                                rtlTranslate: n,
                                params: r,
                                wrapperEl: i,
                                progress: o
                            } = this, a = 0, s = 0;
                            this.isHorizontal() ? a = n ? -e : e : s = e, r.roundLengths && (a = Math.floor(a), s = Math.floor(s)), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? a : s, r.cssMode ? i[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -a : -s : r.virtualTranslate || (this.isHorizontal() ? a -= this.cssOverflowAdjustment() : s -= this.cssOverflowAdjustment(), i.style.transform = `translate3d(${a}px, ${s}px, 0px)`);
                            let l = this.maxTranslate() - this.minTranslate();
                            (0 === l ? 0 : (e - this.minTranslate()) / l) !== o && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(e, t, n, r, i) {
                            let o;
                            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), void 0 === r && (r = !0);
                            let a = this,
                                {
                                    params: s,
                                    wrapperEl: u
                                } = a;
                            if (a.animating && s.preventInteractionOnTransition) return !1;
                            let c = a.minTranslate(),
                                d = a.maxTranslate();
                            if (o = r && e > c ? c : r && e < d ? d : e, a.updateProgress(o), s.cssMode) {
                                let e = a.isHorizontal();
                                if (0 === t) u[e ? "scrollLeft" : "scrollTop"] = -o;
                                else {
                                    if (!a.support.smoothScroll) return (0, l.u)({
                                        swiper: a,
                                        targetPosition: -o,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    u.scrollTo({
                                        [e ? "left" : "top"]: -o,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === t ? (a.setTransition(0), a.setTranslate(o), n && (a.emit("beforeTransitionStart", t, i), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(o), n && (a.emit("beforeTransitionStart", t, i), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                                a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, a.animating = !1, n && a.emit("transitionEnd"))
                            }), a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(e, t) {
                            this.params.cssMode || (this.wrapperEl.style.transitionDuration = `${e}ms`, this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), this.emit("setTransition", e, t)
                        },
                        transitionStart: function(e, t) {
                            void 0 === e && (e = !0);
                            let {
                                params: n
                            } = this;
                            n.cssMode || (n.autoHeight && this.updateAutoHeight(), m({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e, t) {
                            void 0 === e && (e = !0);
                            let {
                                params: n
                            } = this;
                            this.animating = !1, n.cssMode || (this.setTransition(0), m({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function(e, t, n, r, i) {
                            let o;
                            void 0 === e && (e = 0), void 0 === n && (n = !0), "string" == typeof e && (e = parseInt(e, 10));
                            let a = this,
                                s = e;
                            s < 0 && (s = 0);
                            let {
                                params: u,
                                snapGrid: c,
                                slidesGrid: f,
                                previousIndex: p,
                                activeIndex: h,
                                rtlTranslate: g,
                                wrapperEl: v,
                                enabled: m
                            } = a;
                            if (!m && !r && !i || a.destroyed || a.animating && u.preventInteractionOnTransition) return !1;
                            void 0 === t && (t = a.params.speed);
                            let y = Math.min(a.params.slidesPerGroupSkip, s),
                                b = y + Math.floor((s - y) / a.params.slidesPerGroup);
                            b >= c.length && (b = c.length - 1);
                            let w = -c[b];
                            if (u.normalizeSlideIndex)
                                for (let e = 0; e < f.length; e += 1) {
                                    let t = -Math.floor(100 * w),
                                        n = Math.floor(100 * f[e]),
                                        r = Math.floor(100 * f[e + 1]);
                                    void 0 !== f[e + 1] ? t >= n && t < r - (r - n) / 2 ? s = e : t >= n && t < r && (s = e + 1) : t >= n && (s = e)
                                }
                            if (a.initialized && s !== h && (!a.allowSlideNext && (g ? w > a.translate && w > a.minTranslate() : w < a.translate && w < a.minTranslate()) || !a.allowSlidePrev && w > a.translate && w > a.maxTranslate() && (h || 0) !== s)) return !1;
                            s !== (p || 0) && n && a.emit("beforeSlideChangeStart"), a.updateProgress(w), o = s > h ? "next" : s < h ? "prev" : "reset";
                            let S = a.virtual && a.params.virtual.enabled;
                            if (!(S && i) && (g && -w === a.translate || !g && w === a.translate)) return a.updateActiveIndex(s), u.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== u.effect && a.setTranslate(w), "reset" !== o && (a.transitionStart(n, o), a.transitionEnd(n, o)), !1;
                            if (u.cssMode) {
                                let e = a.isHorizontal(),
                                    n = g ? w : -w;
                                if (0 === t) S && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), S && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0 ? (a._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                                    v[e ? "scrollLeft" : "scrollTop"] = n
                                })) : v[e ? "scrollLeft" : "scrollTop"] = n, S && requestAnimationFrame(() => {
                                    a.wrapperEl.style.scrollSnapType = "", a._immediateVirtual = !1
                                });
                                else {
                                    if (!a.support.smoothScroll) return (0, l.u)({
                                        swiper: a,
                                        targetPosition: n,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    v.scrollTo({
                                        [e ? "left" : "top"]: n,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            let E = d().isSafari;
                            return S && !i && E && a.isElement && a.virtual.update(!1, !1, s), a.setTransition(t), a.setTranslate(w), a.updateActiveIndex(s), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, r), a.transitionStart(n, o), 0 === t ? a.transitionEnd(n, o) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
                                a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(n, o))
                            }), a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd)), !0
                        },
                        slideToLoop: function(e, t, n, r) {
                            void 0 === e && (e = 0), void 0 === n && (n = !0), "string" == typeof e && (e = parseInt(e, 10));
                            let i = this;
                            if (i.destroyed) return;
                            void 0 === t && (t = i.params.speed);
                            let o = i.grid && i.params.grid && i.params.grid.rows > 1,
                                a = e;
                            if (i.params.loop)
                                if (i.virtual && i.params.virtual.enabled) a += i.virtual.slidesBefore;
                                else {
                                    let e;
                                    if (o) {
                                        let t = a * i.params.grid.rows;
                                        e = i.slides.find(e => +e.getAttribute("data-swiper-slide-index") === t).column
                                    } else e = i.getSlideIndexByData(a);
                                    let t = o ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
                                        {
                                            centeredSlides: n
                                        } = i.params,
                                        s = i.params.slidesPerView;
                                    "auto" === s ? s = i.slidesPerViewDynamic() : (s = Math.ceil(parseFloat(i.params.slidesPerView, 10)), n && s % 2 == 0 && (s += 1));
                                    let l = t - e < s;
                                    if (n && (l = l || e < Math.ceil(s / 2)), r && n && "auto" !== i.params.slidesPerView && !o && (l = !1), l) {
                                        let r = n ? e < i.activeIndex ? "prev" : "next" : e - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                                        i.loopFix({
                                            direction: r,
                                            slideTo: !0,
                                            activeSlideIndex: "next" === r ? e + 1 : e - t + 1,
                                            slideRealIndex: "next" === r ? i.realIndex : void 0
                                        })
                                    }
                                    if (o) {
                                        let e = a * i.params.grid.rows;
                                        a = i.slides.find(t => +t.getAttribute("data-swiper-slide-index") === e).column
                                    } else a = i.getSlideIndexByData(a)
                                }
                            return requestAnimationFrame(() => {
                                i.slideTo(a, t, n, r)
                            }), i
                        },
                        slideNext: function(e, t, n) {
                            void 0 === t && (t = !0);
                            let r = this,
                                {
                                    enabled: i,
                                    params: o,
                                    animating: a
                                } = r;
                            if (!i || r.destroyed) return r;
                            void 0 === e && (e = r.params.speed);
                            let s = o.slidesPerGroup;
                            "auto" === o.slidesPerView && 1 === o.slidesPerGroup && o.slidesPerGroupAuto && (s = Math.max(r.slidesPerViewDynamic("current", !0), 1));
                            let l = r.activeIndex < o.slidesPerGroupSkip ? 1 : s,
                                u = r.virtual && o.virtual.enabled;
                            if (o.loop) {
                                if (a && !u && o.loopPreventsSliding) return !1;
                                if (r.loopFix({
                                        direction: "next"
                                    }), r._clientLeft = r.wrapperEl.clientLeft, r.activeIndex === r.slides.length - 1 && o.cssMode) return requestAnimationFrame(() => {
                                    r.slideTo(r.activeIndex + l, e, t, n)
                                }), !0
                            }
                            return o.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + l, e, t, n)
                        },
                        slidePrev: function(e, t, n) {
                            void 0 === t && (t = !0);
                            let r = this,
                                {
                                    params: i,
                                    snapGrid: o,
                                    slidesGrid: a,
                                    rtlTranslate: s,
                                    enabled: l,
                                    animating: u
                                } = r;
                            if (!l || r.destroyed) return r;
                            void 0 === e && (e = r.params.speed);
                            let c = r.virtual && i.virtual.enabled;
                            if (i.loop) {
                                if (u && !c && i.loopPreventsSliding) return !1;
                                r.loopFix({
                                    direction: "prev"
                                }), r._clientLeft = r.wrapperEl.clientLeft
                            }

                            function d(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            let f = d(s ? r.translate : -r.translate),
                                p = o.map(e => d(e)),
                                h = i.freeMode && i.freeMode.enabled,
                                g = o[p.indexOf(f) - 1];
                            if (void 0 === g && (i.cssMode || h)) {
                                let e;
                                o.forEach((t, n) => {
                                    f >= t && (e = n)
                                }), void 0 !== e && (g = h ? o[e] : o[e > 0 ? e - 1 : e])
                            }
                            let v = 0;
                            if (void 0 !== g && ((v = a.indexOf(g)) < 0 && (v = r.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (v = Math.max(v = v - r.slidesPerViewDynamic("previous", !0) + 1, 0))), i.rewind && r.isBeginning) {
                                let i = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
                                return r.slideTo(i, e, t, n)
                            }
                            return i.loop && 0 === r.activeIndex && i.cssMode ? (requestAnimationFrame(() => {
                                r.slideTo(v, e, t, n)
                            }), !0) : r.slideTo(v, e, t, n)
                        },
                        slideReset: function(e, t, n) {
                            if (void 0 === t && (t = !0), !this.destroyed) return void 0 === e && (e = this.params.speed), this.slideTo(this.activeIndex, e, t, n)
                        },
                        slideToClosest: function(e, t, n, r) {
                            if (void 0 === t && (t = !0), void 0 === r && (r = .5), this.destroyed) return;
                            void 0 === e && (e = this.params.speed);
                            let i = this.activeIndex,
                                o = Math.min(this.params.slidesPerGroupSkip, i),
                                a = o + Math.floor((i - o) / this.params.slidesPerGroup),
                                s = this.rtlTranslate ? this.translate : -this.translate;
                            if (s >= this.snapGrid[a]) {
                                let e = this.snapGrid[a];
                                s - e > (this.snapGrid[a + 1] - e) * r && (i += this.params.slidesPerGroup)
                            } else {
                                let e = this.snapGrid[a - 1];
                                s - e <= (this.snapGrid[a] - e) * r && (i -= this.params.slidesPerGroup)
                            }
                            return i = Math.min(i = Math.max(i, 0), this.slidesGrid.length - 1), this.slideTo(i, e, t, n)
                        },
                        slideToClickedSlide: function() {
                            let e, t = this;
                            if (t.destroyed) return;
                            let {
                                params: n,
                                slidesEl: r
                            } = t, i = "auto" === n.slidesPerView ? t.slidesPerViewDynamic() : n.slidesPerView, o = t.getSlideIndexWhenGrid(t.clickedIndex), a = t.isElement ? "swiper-slide" : `.${n.slideClass}`, s = t.grid && t.params.grid && t.params.grid.rows > 1;
                            if (n.loop) {
                                if (t.animating) return;
                                e = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), n.centeredSlides ? t.slideToLoop(e) : o > (s ? (t.slides.length - i) / 2 - (t.params.grid.rows - 1) : t.slides.length - i) ? (t.loopFix(), o = t.getSlideIndex((0, l.e)(r, `${a}[data-swiper-slide-index="${e}"]`)[0]), (0, l.n)(() => {
                                    t.slideTo(o)
                                })) : t.slideTo(o)
                            } else t.slideTo(o)
                        }
                    },
                    loop: {
                        loopCreate: function(e, t) {
                            let n = this,
                                {
                                    params: r,
                                    slidesEl: i
                                } = n;
                            if (!r.loop || n.virtual && n.params.virtual.enabled) return;
                            let o = n.grid && r.grid && r.grid.rows > 1;
                            r.loopAddBlankSlides && (r.slidesPerGroup > 1 || o) && (() => {
                                let e = (0, l.e)(i, `.${r.slideBlankClass}`);
                                e.forEach(e => {
                                    e.remove()
                                }), e.length > 0 && (n.recalcSlides(), n.updateSlides())
                            })();
                            let a = r.slidesPerGroup * (o ? r.grid.rows : 1),
                                s = n.slides.length % a != 0,
                                u = o && n.slides.length % r.grid.rows != 0,
                                c = e => {
                                    for (let t = 0; t < e; t += 1) {
                                        let e = n.isElement ? (0, l.c)("swiper-slide", [r.slideBlankClass]) : (0, l.c)("div", [r.slideClass, r.slideBlankClass]);
                                        n.slidesEl.append(e)
                                    }
                                };
                            s ? r.loopAddBlankSlides ? (c(a - n.slides.length % a), n.recalcSlides(), n.updateSlides()) : (0, l.v)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)") : u && (r.loopAddBlankSlides ? (c(r.grid.rows - n.slides.length % r.grid.rows), n.recalcSlides(), n.updateSlides()) : (0, l.v)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)")), (0, l.e)(i, `.${r.slideClass}, swiper-slide`).forEach((e, t) => {
                                e.setAttribute("data-swiper-slide-index", t)
                            }), n.loopFix({
                                slideRealIndex: e,
                                direction: r.centeredSlides ? void 0 : "next",
                                initial: t
                            })
                        },
                        loopFix: function(e) {
                            let {
                                slideRealIndex: t,
                                slideTo: n = !0,
                                direction: r,
                                setTranslate: i,
                                activeSlideIndex: o,
                                initial: a,
                                byController: s,
                                byMousewheel: u
                            } = void 0 === e ? {} : e, c = this;
                            if (!c.params.loop) return;
                            c.emit("beforeLoopFix");
                            let {
                                slides: d,
                                allowSlidePrev: f,
                                allowSlideNext: p,
                                slidesEl: h,
                                params: g
                            } = c, {
                                centeredSlides: v,
                                initialSlide: m
                            } = g;
                            if (c.allowSlidePrev = !0, c.allowSlideNext = !0, c.virtual && g.virtual.enabled) {
                                n && (g.centeredSlides || 0 !== c.snapIndex ? g.centeredSlides && c.snapIndex < g.slidesPerView ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0) : c.snapIndex === c.snapGrid.length - 1 && c.slideTo(c.virtual.slidesBefore, 0, !1, !0) : c.slideTo(c.virtual.slides.length, 0, !1, !0)), c.allowSlidePrev = f, c.allowSlideNext = p, c.emit("loopFix");
                                return
                            }
                            let y = g.slidesPerView;
                            "auto" === y ? y = c.slidesPerViewDynamic() : (y = Math.ceil(parseFloat(g.slidesPerView, 10)), v && y % 2 == 0 && (y += 1));
                            let b = g.slidesPerGroupAuto ? y : g.slidesPerGroup,
                                w = v ? Math.max(b, Math.ceil(y / 2)) : b;
                            w % b != 0 && (w += b - w % b), c.loopedSlides = w += g.loopAdditionalSlides;
                            let S = c.grid && g.grid && g.grid.rows > 1;
                            d.length < y + w || "cards" === c.params.effect && d.length < y + 2 * w ? (0, l.v)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : S && "row" === g.grid.fill && (0, l.v)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                            let E = [],
                                x = [],
                                T = S ? Math.ceil(d.length / g.grid.rows) : d.length,
                                k = a && T - m < y && !v,
                                P = k ? m : c.activeIndex;
                            void 0 === o ? o = c.getSlideIndex(d.find(e => e.classList.contains(g.slideActiveClass))) : P = o;
                            let C = "next" === r || !r,
                                _ = "prev" === r || !r,
                                I = 0,
                                A = 0,
                                O = (S ? d[o].column : o) + (v && void 0 === i ? -y / 2 + .5 : 0);
                            if (O < w) {
                                I = Math.max(w - O, b);
                                for (let e = 0; e < w - O; e += 1) {
                                    let t = e - Math.floor(e / T) * T;
                                    if (S) {
                                        let e = T - t - 1;
                                        for (let t = d.length - 1; t >= 0; t -= 1) d[t].column === e && E.push(t)
                                    } else E.push(T - t - 1)
                                }
                            } else if (O + y > T - w) {
                                A = Math.max(O - (T - 2 * w), b), k && (A = Math.max(A, y - T + m + 1));
                                for (let e = 0; e < A; e += 1) {
                                    let t = e - Math.floor(e / T) * T;
                                    S ? d.forEach((e, n) => {
                                        e.column === t && x.push(n)
                                    }) : x.push(t)
                                }
                            }
                            if (c.__preventObserver__ = !0, requestAnimationFrame(() => {
                                    c.__preventObserver__ = !1
                                }), "cards" === c.params.effect && d.length < y + 2 * w && (x.includes(o) && x.splice(x.indexOf(o), 1), E.includes(o) && E.splice(E.indexOf(o), 1)), _ && E.forEach(e => {
                                    d[e].swiperLoopMoveDOM = !0, h.prepend(d[e]), d[e].swiperLoopMoveDOM = !1
                                }), C && x.forEach(e => {
                                    d[e].swiperLoopMoveDOM = !0, h.append(d[e]), d[e].swiperLoopMoveDOM = !1
                                }), c.recalcSlides(), "auto" === g.slidesPerView ? c.updateSlides() : S && (E.length > 0 && _ || x.length > 0 && C) && c.slides.forEach((e, t) => {
                                    c.grid.updateSlide(t, e, c.slides)
                                }), g.watchSlidesProgress && c.updateSlidesOffset(), n) {
                                if (E.length > 0 && _) {
                                    if (void 0 === t) {
                                        let e = c.slidesGrid[P],
                                            t = c.slidesGrid[P + I] - e;
                                        u ? c.setTranslate(c.translate - t) : (c.slideTo(P + Math.ceil(I), 0, !1, !0), i && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - t, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - t))
                                    } else if (i) {
                                        let e = S ? E.length / g.grid.rows : E.length;
                                        c.slideTo(c.activeIndex + e, 0, !1, !0), c.touchEventsData.currentTranslate = c.translate
                                    }
                                } else if (x.length > 0 && C)
                                    if (void 0 === t) {
                                        let e = c.slidesGrid[P],
                                            t = c.slidesGrid[P - A] - e;
                                        u ? c.setTranslate(c.translate - t) : (c.slideTo(P - A, 0, !1, !0), i && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - t, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - t))
                                    } else {
                                        let e = S ? x.length / g.grid.rows : x.length;
                                        c.slideTo(c.activeIndex - e, 0, !1, !0)
                                    }
                            }
                            if (c.allowSlidePrev = f, c.allowSlideNext = p, c.controller && c.controller.control && !s) {
                                let e = {
                                    slideRealIndex: t,
                                    direction: r,
                                    setTranslate: i,
                                    activeSlideIndex: o,
                                    byController: !0
                                };
                                Array.isArray(c.controller.control) ? c.controller.control.forEach(t => {
                                    !t.destroyed && t.params.loop && t.loopFix({ ...e,
                                        slideTo: t.params.slidesPerView === g.slidesPerView && n
                                    })
                                }) : c.controller.control instanceof c.constructor && c.controller.control.params.loop && c.controller.control.loopFix({ ...e,
                                    slideTo: c.controller.control.params.slidesPerView === g.slidesPerView && n
                                })
                            }
                            c.emit("loopFix")
                        },
                        loopDestroy: function() {
                            let {
                                params: e,
                                slidesEl: t
                            } = this;
                            if (!e.loop || !t || this.virtual && this.params.virtual.enabled) return;
                            this.recalcSlides();
                            let n = [];
                            this.slides.forEach(e => {
                                n[void 0 === e.swiperSlideIndex ? +e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex] = e
                            }), this.slides.forEach(e => {
                                e.removeAttribute("data-swiper-slide-index")
                            }), n.forEach(e => {
                                t.append(e)
                            }), this.recalcSlides(), this.slideTo(this.realIndex, 0)
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(e) {
                            let t = this;
                            if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            let n = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            t.isElement && (t.__preventObserver__ = !0), n.style.cursor = "move", n.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
                                t.__preventObserver__ = !1
                            })
                        },
                        unsetGrabCursor: function() {
                            let e = this;
                            e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
                                e.__preventObserver__ = !1
                            }))
                        }
                    },
                    events: {
                        attachEvents: function() {
                            let {
                                params: e
                            } = this;
                            this.onTouchStart = b.bind(this), this.onTouchMove = w.bind(this), this.onTouchEnd = S.bind(this), this.onDocumentTouchStart = P.bind(this), e.cssMode && (this.onScroll = T.bind(this)), this.onClick = x.bind(this), this.onLoad = k.bind(this), C(this, "on")
                        },
                        detachEvents: function() {
                            C(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            let e = this,
                                {
                                    realIndex: t,
                                    initialized: n,
                                    params: r,
                                    el: i
                                } = e,
                                o = r.breakpoints;
                            if (!o || o && 0 === Object.keys(o).length) return;
                            let a = (0, s.g)(),
                                u = "window" !== r.breakpointsBase && r.breakpointsBase ? "container" : r.breakpointsBase,
                                c = ["window", "container"].includes(r.breakpointsBase) || !r.breakpointsBase ? e.el : a.querySelector(r.breakpointsBase),
                                d = e.getBreakpoint(o, u, c);
                            if (!d || e.currentBreakpoint === d) return;
                            let f = (d in o ? o[d] : void 0) || e.originalParams,
                                p = _(e, r),
                                h = _(e, f),
                                g = e.params.grabCursor,
                                v = f.grabCursor,
                                m = r.enabled;
                            p && !h ? (i.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`), e.emitContainerClasses()) : !p && h && (i.classList.add(`${r.containerModifierClass}grid`), (f.grid.fill && "column" === f.grid.fill || !f.grid.fill && "column" === r.grid.fill) && i.classList.add(`${r.containerModifierClass}grid-column`), e.emitContainerClasses()), g && !v ? e.unsetGrabCursor() : !g && v && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach(t => {
                                if (void 0 === f[t]) return;
                                let n = r[t] && r[t].enabled,
                                    i = f[t] && f[t].enabled;
                                n && !i && e[t].disable(), !n && i && e[t].enable()
                            });
                            let y = f.direction && f.direction !== r.direction,
                                b = r.loop && (f.slidesPerView !== r.slidesPerView || y),
                                w = r.loop;
                            y && n && e.changeDirection(), (0, l.x)(e.params, f);
                            let S = e.params.enabled,
                                E = e.params.loop;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), m && !S ? e.disable() : !m && S && e.enable(), e.currentBreakpoint = d, e.emit("_beforeBreakpoint", f), n && (b ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !w && E ? (e.loopCreate(t), e.updateSlides()) : w && !E && e.loopDestroy()), e.emit("breakpoint", f)
                        },
                        getBreakpoint: function(e, t, n) {
                            if (void 0 === t && (t = "window"), !e || "container" === t && !n) return;
                            let r = !1,
                                i = (0, s.a)(),
                                o = "window" === t ? i.innerHeight : n.clientHeight,
                                a = Object.keys(e).map(e => "string" == typeof e && 0 === e.indexOf("@") ? {
                                    value: o * parseFloat(e.substr(1)),
                                    point: e
                                } : {
                                    value: e,
                                    point: e
                                });
                            a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                            for (let e = 0; e < a.length; e += 1) {
                                let {
                                    point: o,
                                    value: s
                                } = a[e];
                                "window" === t ? i.matchMedia(`(min-width: ${s}px)`).matches && (r = o) : s <= n.clientWidth && (r = o)
                            }
                            return r || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            let {
                                isLocked: e,
                                params: t
                            } = this, {
                                slidesOffsetBefore: n
                            } = t;
                            if (n) {
                                let e = this.slides.length - 1,
                                    t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * n;
                                this.isLocked = this.size > t
                            } else this.isLocked = 1 === this.snapGrid.length;
                            !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked), !0 === t.allowSlidePrev && (this.allowSlidePrev = !this.isLocked), e && e !== this.isLocked && (this.isEnd = !1), e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            let {
                                classNames: e,
                                params: t,
                                rtl: n,
                                el: r,
                                device: i
                            } = this, o = function(e, t) {
                                let n = [];
                                return e.forEach(e => {
                                    "object" == typeof e ? Object.keys(e).forEach(r => {
                                        e[r] && n.push(t + r)
                                    }) : "string" == typeof e && n.push(t + e)
                                }), n
                            }(["initialized", t.direction, {
                                "free-mode": this.params.freeMode && t.freeMode.enabled
                            }, {
                                autoheight: t.autoHeight
                            }, {
                                rtl: n
                            }, {
                                grid: t.grid && t.grid.rows > 1
                            }, {
                                "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                            }, {
                                android: i.android
                            }, {
                                ios: i.ios
                            }, {
                                "css-mode": t.cssMode
                            }, {
                                centered: t.cssMode && t.centeredSlides
                            }, {
                                "watch-progress": t.watchSlidesProgress
                            }], t.containerModifierClass);
                            e.push(...o), r.classList.add(...e), this.emitContainerClasses()
                        },
                        removeClasses: function() {
                            let {
                                el: e,
                                classNames: t
                            } = this;
                            e && "string" != typeof e && (e.classList.remove(...t), this.emitContainerClasses())
                        }
                    }
                },
                O = {};
            class M {
                constructor() {
                    let e, t;
                    for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    1 === r.length && r[0].constructor && "Object" === Object.prototype.toString.call(r[0]).slice(8, -1) ? t = r[0] : [e, t] = r, t || (t = {}), t = (0, l.x)({}, t), e && !t.el && (t.el = e);
                    let o = (0, s.g)();
                    if (t.el && "string" == typeof t.el && o.querySelectorAll(t.el).length > 1) {
                        let e = [];
                        return o.querySelectorAll(t.el).forEach(n => {
                            let r = (0, l.x)({}, t, {
                                el: n
                            });
                            e.push(new M(r))
                        }), e
                    }
                    let a = this;
                    a.__swiper__ = !0, a.support = u(), a.device = c({
                        userAgent: t.userAgent
                    }), a.browser = d(), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [...a.__modules__], t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
                    let f = {};
                    a.modules.forEach(e => {
                        e({
                            params: t,
                            swiper: a,
                            extendParams: function(e, t) {
                                return function(n) {
                                    void 0 === n && (n = {});
                                    let r = Object.keys(n)[0],
                                        i = n[r];
                                    return "object" != typeof i || null === i ? void(0, l.x)(t, n) : (!0 === e[r] && (e[r] = {
                                        enabled: !0
                                    }), "navigation" === r && e[r] && e[r].enabled && !e[r].prevEl && !e[r].nextEl && (e[r].auto = !0), ["pagination", "scrollbar"].indexOf(r) >= 0 && e[r] && e[r].enabled && !e[r].el && (e[r].auto = !0), r in e && "enabled" in i) ? void("object" == typeof e[r] && !("enabled" in e[r]) && (e[r].enabled = !0), !e[r] && (e[r] = {
                                        enabled: !1
                                    }), (0, l.x)(t, n)) : void(0, l.x)(t, n)
                                }
                            }(t, f),
                            on: a.on.bind(a),
                            once: a.once.bind(a),
                            off: a.off.bind(a),
                            emit: a.emit.bind(a)
                        })
                    });
                    let p = (0, l.x)({}, I, f);
                    return a.params = (0, l.x)({}, p, O, t), a.originalParams = (0, l.x)({}, a.params), a.passedParams = (0, l.x)({}, t), a.params && a.params.on && Object.keys(a.params.on).forEach(e => {
                        a.on(e, a.params.on[e])
                    }), a.params && a.params.onAny && a.onAny(a.params.onAny), Object.assign(a, {
                        enabled: a.params.enabled,
                        el: e,
                        classNames: [],
                        slides: [],
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === a.params.direction,
                        isVertical: () => "vertical" === a.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        cssOverflowAdjustment() {
                            return 8388608 * Math.trunc(this.translate / 8388608)
                        },
                        allowSlideNext: a.params.allowSlideNext,
                        allowSlidePrev: a.params.allowSlidePrev,
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: a.params.focusableElements,
                            lastClickTime: 0,
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            startMoving: void 0,
                            pointerId: null,
                            touchId: null
                        },
                        allowClick: !0,
                        allowTouchMove: a.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), a.emit("_swiper"), a.params.init && a.init(), a
                }
                getDirectionLabel(e) {
                    return this.isHorizontal() ? e : ({
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    })[e]
                }
                getSlideIndex(e) {
                    let {
                        slidesEl: t,
                        params: n
                    } = this, r = (0, l.e)(t, `.${n.slideClass}, swiper-slide`), i = (0, l.i)(r[0]);
                    return (0, l.i)(e) - i
                }
                getSlideIndexByData(e) {
                    return this.getSlideIndex(this.slides.find(t => +t.getAttribute("data-swiper-slide-index") === e))
                }
                getSlideIndexWhenGrid(e) {
                    return this.grid && this.params.grid && this.params.grid.rows > 1 && ("column" === this.params.grid.fill ? e = Math.floor(e / this.params.grid.rows) : "row" === this.params.grid.fill && (e %= Math.ceil(this.slides.length / this.params.grid.rows))), e
                }
                recalcSlides() {
                    let {
                        slidesEl: e,
                        params: t
                    } = this;
                    this.slides = (0, l.e)(e, `.${t.slideClass}, swiper-slide`)
                }
                enable() {
                    this.enabled || (this.enabled = !0, this.params.grabCursor && this.setGrabCursor(), this.emit("enable"))
                }
                disable() {
                    this.enabled && (this.enabled = !1, this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"))
                }
                setProgress(e, t) {
                    e = Math.min(Math.max(e, 0), 1);
                    let n = this.minTranslate(),
                        r = (this.maxTranslate() - n) * e + n;
                    this.translateTo(r, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
                }
                emitContainerClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    let t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
                }
                emitSlidesClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = [];
                    e.slides.forEach(n => {
                        let r = e.getSlideClasses(n);
                        t.push({
                            slideEl: n,
                            classNames: r
                        }), e.emit("_slideClass", n, r)
                    }), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    let {
                        params: n,
                        slides: r,
                        slidesGrid: i,
                        slidesSizesGrid: o,
                        size: a,
                        activeIndex: s
                    } = this, l = 1;
                    if ("number" == typeof n.slidesPerView) return n.slidesPerView;
                    if (n.centeredSlides) {
                        let e, t = r[s] ? Math.ceil(r[s].swiperSlideSize) : 0;
                        for (let n = s + 1; n < r.length; n += 1) r[n] && !e && (t += Math.ceil(r[n].swiperSlideSize), l += 1, t > a && (e = !0));
                        for (let n = s - 1; n >= 0; n -= 1) r[n] && !e && (t += r[n].swiperSlideSize, l += 1, t > a && (e = !0))
                    } else if ("current" === e)
                        for (let e = s + 1; e < r.length; e += 1)(t ? i[e] + o[e] - i[s] < a : i[e] - i[s] < a) && (l += 1);
                    else
                        for (let e = s - 1; e >= 0; e -= 1) i[s] - i[e] < a && (l += 1);
                    return l
                }
                update() {
                    let e, t = this;
                    if (!t || t.destroyed) return;
                    let {
                        snapGrid: n,
                        params: r
                    } = t;

                    function i() {
                        let e = Math.min(Math.max(t.rtlTranslate ? -1 * t.translate : t.translate, t.maxTranslate()), t.minTranslate());
                        t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses()
                    }
                    if (r.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
                            e.complete && h(t, e)
                        }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), r.freeMode && r.freeMode.enabled && !r.cssMode) i(), r.autoHeight && t.updateAutoHeight();
                    else {
                        if (("auto" === r.slidesPerView || r.slidesPerView > 1) && t.isEnd && !r.centeredSlides) {
                            let n = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
                            e = t.slideTo(n.length - 1, 0, !1, !0)
                        } else e = t.slideTo(t.activeIndex, 0, !1, !0);
                        e || i()
                    }
                    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update")
                }
                changeDirection(e, t) {
                    void 0 === t && (t = !0);
                    let n = this.params.direction;
                    return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || (this.el.classList.remove(`${this.params.containerModifierClass}${n}`), this.el.classList.add(`${this.params.containerModifierClass}${e}`), this.emitContainerClasses(), this.params.direction = e, this.slides.forEach(t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    }), this.emit("changeDirection"), t && this.update()), this
                }
                changeLanguageDirection(e) {
                    (!this.rtl || "rtl" !== e) && (this.rtl || "ltr" !== e) && (this.rtl = "rtl" === e, this.rtlTranslate = "horizontal" === this.params.direction && this.rtl, this.rtl ? (this.el.classList.add(`${this.params.containerModifierClass}rtl`), this.el.dir = "rtl") : (this.el.classList.remove(`${this.params.containerModifierClass}rtl`), this.el.dir = "ltr"), this.update())
                }
                mount(e) {
                    let t = this;
                    if (t.mounted) return !0;
                    let n = e || t.params.el;
                    if ("string" == typeof n && (n = document.querySelector(n)), !n) return !1;
                    n.swiper = t, n.parentNode && n.parentNode.host && n.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
                    let r = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,
                        i = n && n.shadowRoot && n.shadowRoot.querySelector ? n.shadowRoot.querySelector(r()) : (0, l.e)(n, r())[0];
                    return !i && t.params.createElements && (i = (0, l.c)("div", t.params.wrapperClass), n.append(i), (0, l.e)(n, `.${t.params.slideClass}`).forEach(e => {
                        i.append(e)
                    })), Object.assign(t, {
                        el: n,
                        wrapperEl: i,
                        slidesEl: t.isElement && !n.parentNode.host.slideSlots ? n.parentNode.host : i,
                        hostEl: t.isElement ? n.parentNode.host : n,
                        mounted: !0,
                        rtl: "rtl" === n.dir.toLowerCase() || "rtl" === (0, l.q)(n, "direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === n.dir.toLowerCase() || "rtl" === (0, l.q)(n, "direction")),
                        wrongRTL: "-webkit-box" === (0, l.q)(i, "display")
                    }), !0
                }
                init(e) {
                    let t = this;
                    if (t.initialized || !1 === t.mount(e)) return t;
                    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(void 0, !0), t.attachEvents();
                    let n = [...t.el.querySelectorAll('[loading="lazy"]')];
                    return t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach(e => {
                        e.complete ? h(t, e) : e.addEventListener("load", e => {
                            h(t, e.target)
                        })
                    }), v(t), t.initialized = !0, v(t), t.emit("init"), t.emit("afterInit"), t
                }
                destroy(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    let n = this,
                        {
                            params: r,
                            el: i,
                            wrapperEl: o,
                            slides: a
                        } = n;
                    return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), r.loop && n.loopDestroy(), t && (n.removeClasses(), i && "string" != typeof i && i.removeAttribute("style"), o && o.removeAttribute("style"), a && a.length && a.forEach(e => {
                        e.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                    })), n.emit("destroy"), Object.keys(n.eventsListeners).forEach(e => {
                        n.off(e)
                    }), !1 !== e && (n.el && "string" != typeof n.el && (n.el.swiper = null), (0, l.y)(n)), n.destroyed = !0), null
                }
                static extendDefaults(e) {
                    (0, l.x)(O, e)
                }
                static get extendedDefaults() {
                    return O
                }
                static get defaults() {
                    return I
                }
                static installModule(e) {
                    M.prototype.__modules__ || (M.prototype.__modules__ = []);
                    let t = M.prototype.__modules__;
                    "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? e.forEach(e => M.installModule(e)) : M.installModule(e), M
                }
            }
            Object.keys(A).forEach(e => {
                Object.keys(A[e]).forEach(t => {
                    M.prototype[t] = A[e][t]
                })
            }), M.use([function(e) {
                let {
                    swiper: t,
                    on: n,
                    emit: r
                } = e, i = (0, s.a)(), o = null, a = null, l = () => {
                    t && !t.destroyed && t.initialized && (r("beforeResize"), r("resize"))
                }, u = () => {
                    t && !t.destroyed && t.initialized && r("orientationchange")
                };
                n("init", () => {
                    if (t.params.resizeObserver && void 0 !== i.ResizeObserver) return void(t && !t.destroyed && t.initialized && (o = new ResizeObserver(e => {
                        a = i.requestAnimationFrame(() => {
                            let {
                                width: n,
                                height: r
                            } = t, i = n, o = r;
                            e.forEach(e => {
                                let {
                                    contentBoxSize: n,
                                    contentRect: r,
                                    target: a
                                } = e;
                                a && a !== t.el || (i = r ? r.width : (n[0] || n).inlineSize, o = r ? r.height : (n[0] || n).blockSize)
                            }), (i !== n || o !== r) && l()
                        })
                    })).observe(t.el));
                    i.addEventListener("resize", l), i.addEventListener("orientationchange", u)
                }), n("destroy", () => {
                    a && i.cancelAnimationFrame(a), o && o.unobserve && t.el && (o.unobserve(t.el), o = null), i.removeEventListener("resize", l), i.removeEventListener("orientationchange", u)
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: r,
                    emit: i
                } = e, o = [], a = (0, s.a)(), u = function(e, n) {
                    void 0 === n && (n = {});
                    let r = new(a.MutationObserver || a.WebkitMutationObserver)(e => {
                        if (t.__preventObserver__) return;
                        if (1 === e.length) return void i("observerUpdate", e[0]);
                        let n = function() {
                            i("observerUpdate", e[0])
                        };
                        a.requestAnimationFrame ? a.requestAnimationFrame(n) : a.setTimeout(n, 0)
                    });
                    r.observe(e, {
                        attributes: void 0 === n.attributes || n.attributes,
                        childList: t.isElement || (void 0 === n.childList || n).childList,
                        characterData: void 0 === n.characterData || n.characterData
                    }), o.push(r)
                };
                n({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), r("init", () => {
                    if (t.params.observer) {
                        if (t.params.observeParents) {
                            let e = (0, l.b)(t.hostEl);
                            for (let t = 0; t < e.length; t += 1) u(e[t])
                        }
                        u(t.hostEl, {
                            childList: t.params.observeSlideChildren
                        }), u(t.wrapperEl, {
                            attributes: !1
                        })
                    }
                }), r("destroy", () => {
                    o.forEach(e => {
                        e.disconnect()
                    }), o.splice(0, o.length)
                })
            }]);
            let L = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

            function R(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
            }

            function N(e, t) {
                let n = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter(e => 0 > n.indexOf(e)).forEach(n => {
                    void 0 === e[n] ? e[n] = t[n] : R(t[n]) && R(e[n]) && Object.keys(t[n]).length > 0 ? t[n].__swiper__ ? e[n] = t[n] : N(e[n], t[n]) : e[n] = t[n]
                })
            }

            function j(e) {
                return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
            }

            function D(e) {
                return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
            }

            function F(e) {
                return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
            }

            function z(e) {
                void 0 === e && (e = "");
                let t = e.split(" ").map(e => e.trim()).filter(e => !!e),
                    n = [];
                return t.forEach(e => {
                    0 > n.indexOf(e) && n.push(e)
                }), n.join(" ")
            }

            function q() {
                return (q = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function U(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }

            function $(e, t) {
                return "undefined" == typeof window ? (0, a.useEffect)(e, t) : (0, a.useLayoutEffect)(e, t)
            }
            let B = (0, a.createContext)(null),
                H = (0, a.createContext)(null),
                V = (0, a.forwardRef)(function(e, t) {
                    var n;
                    let {
                        className: r,
                        tag: i = "div",
                        wrapperTag: o = "div",
                        children: s,
                        onSwiper: u,
                        ...c
                    } = void 0 === e ? {} : e, d = !1, [f, p] = (0, a.useState)("swiper"), [h, g] = (0, a.useState)(null), [v, m] = (0, a.useState)(!1), y = (0, a.useRef)(!1), b = (0, a.useRef)(null), w = (0, a.useRef)(null), S = (0, a.useRef)(null), E = (0, a.useRef)(null), x = (0, a.useRef)(null), T = (0, a.useRef)(null), k = (0, a.useRef)(null), P = (0, a.useRef)(null), {
                        params: C,
                        passedParams: _,
                        rest: A,
                        events: O
                    } = function(e, t) {
                        void 0 === e && (e = {}), void 0 === t && (t = !0);
                        let n = {
                                on: {}
                            },
                            r = {},
                            i = {};
                        N(n, I), n._emitClasses = !0, n.init = !1;
                        let o = {},
                            a = L.map(e => e.replace(/_/, ""));
                        return Object.keys(Object.assign({}, e)).forEach(s => {
                            void 0 !== e[s] && (a.indexOf(s) >= 0 ? R(e[s]) ? (n[s] = {}, i[s] = {}, N(n[s], e[s]), N(i[s], e[s])) : (n[s] = e[s], i[s] = e[s]) : 0 === s.search(/on[A-Z]/) && "function" == typeof e[s] ? t ? r[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s] : n.on[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s] : o[s] = e[s])
                        }), ["navigation", "pagination", "scrollbar"].forEach(e => {
                            !0 === n[e] && (n[e] = {}), !1 === n[e] && delete n[e]
                        }), {
                            params: n,
                            passedParams: i,
                            rest: o,
                            events: r
                        }
                    }(c), {
                        slides: B,
                        slots: V
                    } = function(e) {
                        let t = [],
                            n = {
                                "container-start": [],
                                "container-end": [],
                                "wrapper-start": [],
                                "wrapper-end": []
                            };
                        return a.Children.toArray(e).forEach(e => {
                            if (U(e)) t.push(e);
                            else if (e.props && e.props.slot && n[e.props.slot]) n[e.props.slot].push(e);
                            else if (e.props && e.props.children) {
                                let r = function e(t) {
                                    let n = [];
                                    return a.Children.toArray(t).forEach(t => {
                                        U(t) ? n.push(t) : t.props && t.props.children && e(t.props.children).forEach(e => n.push(e))
                                    }), n
                                }(e.props.children);
                                r.length > 0 ? r.forEach(e => t.push(e)) : n["container-end"].push(e)
                            } else n["container-end"].push(e)
                        }), {
                            slides: t,
                            slots: n
                        }
                    }(s), G = () => {
                        m(!v)
                    };
                    Object.assign(C.on, {
                        _containerClasses(e, t) {
                            p(t)
                        }
                    });
                    let W = () => {
                        Object.assign(C.on, O), d = !0;
                        let e = { ...C
                        };
                        if (delete e.wrapperClass, w.current = new M(e), w.current.virtual && w.current.params.virtual.enabled) {
                            w.current.virtual.slides = B;
                            let e = {
                                cache: !1,
                                slides: B,
                                renderExternal: g,
                                renderExternalUpdate: !1
                            };
                            N(w.current.params.virtual, e), N(w.current.originalParams.virtual, e)
                        }
                    };
                    return b.current || W(), w.current && w.current.on("_beforeBreakpoint", G), (0, a.useEffect)(() => () => {
                        w.current && w.current.off("_beforeBreakpoint", G)
                    }), (0, a.useEffect)(() => {
                        !y.current && w.current && (w.current.emitSlidesClasses(), y.current = !0)
                    }), $(() => {
                        if (t && (t.current = b.current), b.current) return w.current.destroyed && W(), ! function(e, t) {
                            let {
                                el: n,
                                nextEl: r,
                                prevEl: i,
                                paginationEl: o,
                                scrollbarEl: a,
                                swiper: s
                            } = e;
                            j(t) && r && i && (s.params.navigation.nextEl = r, s.originalParams.navigation.nextEl = r, s.params.navigation.prevEl = i, s.originalParams.navigation.prevEl = i), D(t) && o && (s.params.pagination.el = o, s.originalParams.pagination.el = o), F(t) && a && (s.params.scrollbar.el = a, s.originalParams.scrollbar.el = a), s.init(n)
                        }({
                            el: b.current,
                            nextEl: x.current,
                            prevEl: T.current,
                            paginationEl: k.current,
                            scrollbarEl: P.current,
                            swiper: w.current
                        }, C), u && !w.current.destroyed && u(w.current), () => {
                            w.current && !w.current.destroyed && w.current.destroy(!0, !1)
                        }
                    }, []), $(() => {
                        !d && O && w.current && Object.keys(O).forEach(e => {
                            w.current.on(e, O[e])
                        });
                        let e = function(e, t, n, r, i) {
                            let o = [];
                            if (!t) return o;
                            let a = e => {
                                0 > o.indexOf(e) && o.push(e)
                            };
                            if (n && r) {
                                let e = r.map(i),
                                    t = n.map(i);
                                e.join("") !== t.join("") && a("children"), r.length !== n.length && a("children")
                            }
                            return L.filter(e => "_" === e[0]).map(e => e.replace(/_/, "")).forEach(n => {
                                if (n in e && n in t)
                                    if (R(e[n]) && R(t[n])) {
                                        let r = Object.keys(e[n]),
                                            i = Object.keys(t[n]);
                                        r.length !== i.length ? a(n) : (r.forEach(r => {
                                            e[n][r] !== t[n][r] && a(n)
                                        }), i.forEach(r => {
                                            e[n][r] !== t[n][r] && a(n)
                                        }))
                                    } else e[n] !== t[n] && a(n)
                            }), o
                        }(_, S.current, B, E.current, e => e.key);
                        return S.current = _, E.current = B, e.length && w.current && !w.current.destroyed && function(e) {
                            let t, n, r, i, o, a, s, u, {
                                    swiper: c,
                                    slides: d,
                                    passedParams: f,
                                    changedParams: p,
                                    nextEl: h,
                                    prevEl: g,
                                    scrollbarEl: v,
                                    paginationEl: m
                                } = e,
                                y = p.filter(e => "children" !== e && "direction" !== e && "wrapperClass" !== e),
                                {
                                    params: b,
                                    pagination: w,
                                    navigation: S,
                                    scrollbar: E,
                                    virtual: x,
                                    thumbs: T
                                } = c;
                            p.includes("thumbs") && f.thumbs && f.thumbs.swiper && !f.thumbs.swiper.destroyed && b.thumbs && (!b.thumbs.swiper || b.thumbs.swiper.destroyed) && (t = !0), p.includes("controller") && f.controller && f.controller.control && b.controller && !b.controller.control && (n = !0), p.includes("pagination") && f.pagination && (f.pagination.el || m) && (b.pagination || !1 === b.pagination) && w && !w.el && (r = !0), p.includes("scrollbar") && f.scrollbar && (f.scrollbar.el || v) && (b.scrollbar || !1 === b.scrollbar) && E && !E.el && (i = !0), p.includes("navigation") && f.navigation && (f.navigation.prevEl || g) && (f.navigation.nextEl || h) && (b.navigation || !1 === b.navigation) && S && !S.prevEl && !S.nextEl && (o = !0);
                            let k = e => {
                                c[e] && (c[e].destroy(), "navigation" === e ? (c.isElement && (c[e].prevEl.remove(), c[e].nextEl.remove()), b[e].prevEl = void 0, b[e].nextEl = void 0, c[e].prevEl = void 0, c[e].nextEl = void 0) : (c.isElement && c[e].el.remove(), b[e].el = void 0, c[e].el = void 0))
                            };
                            p.includes("loop") && c.isElement && (b.loop && !f.loop ? a = !0 : !b.loop && f.loop ? s = !0 : u = !0), y.forEach(e => {
                                if (R(b[e]) && R(f[e])) Object.assign(b[e], f[e]), ("navigation" === e || "pagination" === e || "scrollbar" === e) && "enabled" in f[e] && !f[e].enabled && k(e);
                                else {
                                    let t = f[e];
                                    (!0 === t || !1 === t) && ("navigation" === e || "pagination" === e || "scrollbar" === e) ? !1 === t && k(e): b[e] = f[e]
                                }
                            }), y.includes("controller") && !n && c.controller && c.controller.control && b.controller && b.controller.control && (c.controller.control = b.controller.control), p.includes("children") && d && x && b.virtual.enabled ? (x.slides = d, x.update(!0)) : p.includes("virtual") && x && b.virtual.enabled && (d && (x.slides = d), x.update(!0)), p.includes("children") && d && b.loop && (u = !0), t && T.init() && T.update(!0), n && (c.controller.control = b.controller.control), r && (c.isElement && (!m || "string" == typeof m) && ((m = document.createElement("div")).classList.add("swiper-pagination"), m.part.add("pagination"), c.el.appendChild(m)), m && (b.pagination.el = m), w.init(), w.render(), w.update()), i && (c.isElement && (!v || "string" == typeof v) && ((v = document.createElement("div")).classList.add("swiper-scrollbar"), v.part.add("scrollbar"), c.el.appendChild(v)), v && (b.scrollbar.el = v), E.init(), E.updateSize(), E.setTranslate()), o && (c.isElement && (h && "string" != typeof h || ((h = document.createElement("div")).classList.add("swiper-button-next"), (0, l.s)(h, c.hostEl.constructor.nextButtonSvg), h.part.add("button-next"), c.el.appendChild(h)), g && "string" != typeof g || ((g = document.createElement("div")).classList.add("swiper-button-prev"), (0, l.s)(g, c.hostEl.constructor.prevButtonSvg), g.part.add("button-prev"), c.el.appendChild(g))), h && (b.navigation.nextEl = h), g && (b.navigation.prevEl = g), S.init(), S.update()), p.includes("allowSlideNext") && (c.allowSlideNext = f.allowSlideNext), p.includes("allowSlidePrev") && (c.allowSlidePrev = f.allowSlidePrev), p.includes("direction") && c.changeDirection(f.direction, !1), (a || u) && c.loopDestroy(), (s || u) && c.loopCreate(), c.update()
                        }({
                            swiper: w.current,
                            slides: B,
                            passedParams: _,
                            changedParams: e,
                            nextEl: x.current,
                            prevEl: T.current,
                            scrollbarEl: P.current,
                            paginationEl: k.current
                        }), () => {
                            O && w.current && Object.keys(O).forEach(e => {
                                w.current.off(e, O[e])
                            })
                        }
                    }), $(() => {
                        var e;
                        (e = w.current) && !e.destroyed && e.params.virtual && (!e.params.virtual || e.params.virtual.enabled) && (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.emit("_virtualUpdated"), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
                    }, [h]), a.createElement(i, q({
                        ref: b,
                        className: z(`${f}${r?` ${r}`:""}`)
                    }, A), a.createElement(H.Provider, {
                        value: w.current
                    }, V["container-start"], a.createElement(o, {
                        className: (void 0 === (n = C.wrapperClass) && (n = ""), n) ? n.includes("swiper-wrapper") ? n : `swiper-wrapper ${n}` : "swiper-wrapper"
                    }, V["wrapper-start"], C.virtual ? function(e, t, n) {
                        if (!n) return null;
                        let r = e => {
                                let n = e;
                                return e < 0 ? n = t.length + e : n >= t.length && (n -= t.length), n
                            },
                            i = e.isHorizontal() ? {
                                [e.rtlTranslate ? "right" : "left"]: `${n.offset}px`
                            } : {
                                top: `${n.offset}px`
                            },
                            {
                                from: o,
                                to: s
                            } = n,
                            l = e.params.loop ? -t.length : 0,
                            u = e.params.loop ? 2 * t.length : t.length,
                            c = [];
                        for (let e = l; e < u; e += 1) e >= o && e <= s && c.push(t[r(e)]);
                        return c.map((t, n) => a.cloneElement(t, {
                            swiper: e,
                            style: i,
                            key: t.props.virtualIndex || t.key || `slide-${n}`
                        }))
                    }(w.current, B, h) : B.map((e, t) => a.cloneElement(e, {
                        swiper: w.current,
                        swiperSlideIndex: t
                    })), V["wrapper-end"]), j(C) && a.createElement(a.Fragment, null, a.createElement("div", {
                        ref: T,
                        className: "swiper-button-prev"
                    }), a.createElement("div", {
                        ref: x,
                        className: "swiper-button-next"
                    })), F(C) && a.createElement("div", {
                        ref: P,
                        className: "swiper-scrollbar"
                    }), D(C) && a.createElement("div", {
                        ref: k,
                        className: "swiper-pagination"
                    }), V["container-end"]))
                });
            V.displayName = "Swiper";
            let G = (0, a.forwardRef)(function(e, t) {
                let {
                    tag: n = "div",
                    children: r,
                    className: i = "",
                    swiper: o,
                    zoom: s,
                    lazy: l,
                    virtualIndex: u,
                    swiperSlideIndex: c,
                    ...d
                } = void 0 === e ? {} : e, f = (0, a.useRef)(null), [p, h] = (0, a.useState)("swiper-slide"), [g, v] = (0, a.useState)(!1);

                function m(e, t, n) {
                    t === f.current && h(n)
                }
                $(() => {
                    if (void 0 !== c && (f.current.swiperSlideIndex = c), t && (t.current = f.current), f.current && o) {
                        if (o.destroyed) {
                            "swiper-slide" !== p && h("swiper-slide");
                            return
                        }
                        return o.on("_slideClass", m), () => {
                            o && o.off("_slideClass", m)
                        }
                    }
                }), $(() => {
                    o && f.current && !o.destroyed && h(o.getSlideClasses(f.current))
                }, [o]);
                let y = {
                        isActive: p.indexOf("swiper-slide-active") >= 0,
                        isVisible: p.indexOf("swiper-slide-visible") >= 0,
                        isPrev: p.indexOf("swiper-slide-prev") >= 0,
                        isNext: p.indexOf("swiper-slide-next") >= 0
                    },
                    b = () => "function" == typeof r ? r(y) : r;
                return a.createElement(n, q({
                    ref: f,
                    className: z(`${p}${i?` ${i}`:""}`),
                    "data-swiper-slide-index": u,
                    onLoad: () => {
                        v(!0)
                    }
                }, d), s && a.createElement(B.Provider, {
                    value: y
                }, a.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof s ? s : void 0
                }, b(), l && !g && a.createElement("div", {
                    className: "swiper-lazy-preloader"
                }))), !s && a.createElement(B.Provider, {
                    value: y
                }, b(), l && !g && a.createElement("div", {
                    className: "swiper-lazy-preloader"
                })))
            });
            G.displayName = "SwiperSlide"
        },
        4853: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                cancelIdleCallback: function() {
                    return r
                },
                requestIdleCallback: function() {
                    return n
                }
            });
            let n = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
                    let t = Date.now();
                    return self.setTimeout(function() {
                        e({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - t))
                            }
                        })
                    }, 1)
                },
                r = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
                    return clearTimeout(e)
                };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        5946: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => k
            });
            var r = n(2115);
            let i = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
                o = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
                a = /\.(m3u8)($|\?)/i,
                s = /\.(mpd)($|\?)/i,
                l = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,
                u = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,
                c = /vimeo\.com\/(?!progressive_redirect).+/,
                d = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,
                f = /open\.spotify\.com\/(\w+)\/(\w+)/i,
                p = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+|(videos?\/|\?video=)\d+)($|\?)/,
                h = /tiktok\.com\/(?:player\/v1\/|share\/video\/|@[^/]+\/video\/)([0-9]+)/,
                g = (e, t) => {
                    if (Array.isArray(e)) {
                        for (let n of e)
                            if ("string" == typeof n && g(n, t) || g(n.src, t)) return !0;
                        return !1
                    }
                    return t(e)
                },
                v = {
                    html: e => g(e, e => i.test(e) || o.test(e)),
                    hls: e => g(e, e => a.test(e)),
                    dash: e => g(e, e => s.test(e)),
                    mux: e => l.test(e),
                    youtube: e => u.test(e),
                    vimeo: e => c.test(e) && !o.test(e) && !a.test(e),
                    wistia: e => d.test(e),
                    spotify: e => f.test(e),
                    twitch: e => p.test(e),
                    tiktok: e => h.test(e)
                },
                m = r.forwardRef((e, t) => {
                    let n = i.test(`${e.src}`) ? "audio" : "video";
                    return r.createElement(n, { ...e,
                        ref: t
                    }, e.children)
                }),
                y = [{
                    key: "hls",
                    name: "hls.js",
                    canPlay: v.hls,
                    canEnablePIP: () => !0,
                    player: (0, r.lazy)(() => Promise.all([n.e(910), n.e(842), n.e(262)]).then(n.bind(n, 5136)))
                }, {
                    key: "dash",
                    name: "dash.js",
                    canPlay: v.dash,
                    canEnablePIP: () => !0,
                    player: (0, r.lazy)(() => Promise.all([n.e(842), n.e(395)]).then(n.bind(n, 6521)))
                }, {
                    key: "mux",
                    name: "Mux",
                    canPlay: v.mux,
                    canEnablePIP: () => !0,
                    player: (0, r.lazy)(() => Promise.all([n.e(910), n.e(842), n.e(723)]).then(n.bind(n, 4946)))
                }, {
                    key: "youtube",
                    name: "YouTube",
                    canPlay: v.youtube,
                    player: (0, r.lazy)(() => n.e(446).then(n.bind(n, 6697)))
                }, {
                    key: "vimeo",
                    name: "Vimeo",
                    canPlay: v.vimeo,
                    player: (0, r.lazy)(() => n.e(173).then(n.bind(n, 1748)))
                }, {
                    key: "wistia",
                    name: "Wistia",
                    canPlay: v.wistia,
                    canEnablePIP: () => !0,
                    player: (0, r.lazy)(() => n.e(959).then(n.bind(n, 8554)))
                }, {
                    key: "spotify",
                    name: "Spotify",
                    canPlay: v.spotify,
                    canEnablePIP: () => !1,
                    player: (0, r.lazy)(() => n.e(771).then(n.bind(n, 5466)))
                }, {
                    key: "twitch",
                    name: "Twitch",
                    canPlay: v.twitch,
                    canEnablePIP: () => !1,
                    player: (0, r.lazy)(() => n.e(42).then(n.bind(n, 1846)))
                }, {
                    key: "tiktok",
                    name: "TikTok",
                    canPlay: v.tiktok,
                    canEnablePIP: () => !1,
                    player: (0, r.lazy)(() => n.e(85).then(n.bind(n, 5500)))
                }, {
                    key: "html",
                    name: "html",
                    canPlay: v.html,
                    canEnablePIP: () => !0,
                    player: m
                }],
                b = {
                    width: "320px",
                    height: "180px",
                    volume: 1,
                    playbackRate: 1,
                    previewTabIndex: 0,
                    previewAriaLabel: "",
                    oEmbedUrl: "https://noembed.com/embed?url={url}"
                },
                w = r.forwardRef((e, t) => {
                    let {
                        playing: n,
                        pip: i
                    } = e, o = e.activePlayer, a = (0, r.useRef)(null), s = (0, r.useRef)(!0);
                    if ((0, r.useEffect)(() => {
                            var t, r;
                            a.current && (a.current.paused && !0 === n && a.current.play(), a.current.paused || !1 !== n || a.current.pause(), a.current.playbackRate = null != (t = e.playbackRate) ? t : 1, a.current.volume = null != (r = e.volume) ? r : 1)
                        }), (0, r.useEffect)(() => {
                            var e, t, n, r, o;
                            if (a.current && globalThis.document) {
                                if (i && !document.pictureInPictureElement) try {
                                    null == (t = (e = a.current).requestPictureInPicture) || t.call(e)
                                } catch (e) {}
                                if (!i && document.pictureInPictureElement) try {
                                    null == (r = (n = a.current).exitPictureInPicture) || r.call(n), null == (o = document.exitPictureInPicture) || o.call(document)
                                } catch (e) {}
                            }
                        }, [i]), !o) return null;
                    let l = {},
                        u = ["onReady", "onStart"];
                    for (let t in e) t.startsWith("on") && !u.includes(t) && (l[t] = e[t]);
                    return r.createElement(o, { ...l,
                        style: e.style,
                        className: e.className,
                        slot: e.slot,
                        ref: (0, r.useCallback)(e => {
                            a.current = e, "function" == typeof t ? t(e) : null !== t && (t.current = e)
                        }, [t]),
                        src: e.src,
                        crossOrigin: e.crossOrigin,
                        preload: e.preload,
                        controls: e.controls,
                        muted: e.muted,
                        autoPlay: e.autoPlay,
                        loop: e.loop,
                        playsInline: e.playsInline,
                        disableRemotePlayback: e.disableRemotePlayback,
                        config: e.config,
                        onLoadStart: t => {
                            var n, r;
                            s.current = !0, null == (n = e.onReady) || n.call(e), null == (r = e.onLoadStart) || r.call(e, t)
                        },
                        onPlay: t => {
                            var n, r;
                            s.current && (s.current = !1, null == (n = e.onStart) || n.call(e, t)), null == (r = e.onPlay) || r.call(e, t)
                        }
                    }, e.children)
                });
            w.displayName = "Player";
            let S = (0, r.lazy)(() => n.e(353).then(n.bind(n, 4213))),
                E = [],
                x = ({
                    children: e
                }) => e,
                T = y[y.length - 1];
            var k = ((e, t) => {
                let n = r.forwardRef((n, i) => {
                    let o = { ...b,
                            ...n
                        },
                        {
                            src: a,
                            slot: s,
                            className: l,
                            style: u,
                            width: c,
                            height: d,
                            fallback: f,
                            wrapper: p
                        } = o,
                        [h, g] = (0, r.useState)(!!o.light);
                    (0, r.useEffect)(() => {
                        o.light ? g(!0) : g(!1)
                    }, [o.light]);
                    let v = e => {
                            var t;
                            g(!1), null == (t = o.onClickPreview) || t.call(o, e)
                        },
                        m = null == p ? x : p,
                        y = !1 === f ? x : r.Suspense;
                    return r.createElement(m, {
                        slot: s,
                        className: l,
                        style: {
                            width: c,
                            height: d,
                            ...u
                        }
                    }, r.createElement(y, {
                        fallback: f
                    }, h ? (e => {
                        if (!e) return null;
                        let {
                            light: t,
                            playIcon: n,
                            previewTabIndex: i,
                            oEmbedUrl: a,
                            previewAriaLabel: s
                        } = o;
                        return r.createElement(S, {
                            src: e,
                            light: t,
                            playIcon: n,
                            previewTabIndex: i,
                            previewAriaLabel: s,
                            oEmbedUrl: a,
                            onClickPreview: v
                        })
                    })(a) : (n => {
                        var a, u;
                        let c = (n => {
                            for (let t of [...E, ...e])
                                if (n && t.canPlay(n)) return t;
                            return t || null
                        })(n);
                        if (!c) return null;
                        let {
                            style: d,
                            width: f,
                            height: p,
                            wrapper: h
                        } = o, g = null == (a = o.config) ? void 0 : a[c.key];
                        return r.createElement(w, { ...o,
                            ref: i,
                            activePlayer: null != (u = c.player) ? u : c,
                            slot: h ? void 0 : s,
                            className: h ? void 0 : l,
                            style: h ? {
                                display: "block",
                                width: "100%",
                                height: "100%"
                            } : {
                                display: "block",
                                width: f,
                                height: p,
                                ...d
                            },
                            config: g
                        })
                    })(a)))
                });
                return n.displayName = "ReactPlayer", n.addCustomPlayer = e => {
                    E.push(e)
                }, n.removeCustomPlayers = () => {
                    E.length = 0
                }, n.canPlay = t => {
                    if (t) {
                        for (let n of [...E, ...e])
                            if (n.canPlay(t)) return !0
                    }
                    return !1
                }, n.canEnablePIP = t => {
                    var n;
                    if (t) {
                        for (let r of [...E, ...e])
                            if (r.canPlay(t) && (null == (n = r.canEnablePIP) ? void 0 : n.call(r))) return !0
                    }
                    return !1
                }, n
            })(y, T)
        },
        6552: (e, t, n) => {
            "use strict";

            function r(e) {
                let {
                    moduleIds: t
                } = e;
                return null
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "PreloadChunks", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n(5155), n(7650), n(8567), n(7278)
        },
        6629: (e, t, n) => {
            "use strict";
            n.d(t, {
                xA: () => a,
                dK: () => o
            }), n(7310);
            var r = n(1397);

            function i(e) {
                return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`
            }

            function o(e) {
                let t, {
                        swiper: n,
                        extendParams: o,
                        on: a,
                        emit: s
                    } = e,
                    l = "swiper-pagination";
                o({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: `${l}-bullet`,
                        bulletActiveClass: `${l}-bullet-active`,
                        modifierClass: `${l}-`,
                        currentClass: `${l}-current`,
                        totalClass: `${l}-total`,
                        hiddenClass: `${l}-hidden`,
                        progressbarFillClass: `${l}-progressbar-fill`,
                        progressbarOppositeClass: `${l}-progressbar-opposite`,
                        clickableClass: `${l}-clickable`,
                        lockClass: `${l}-lock`,
                        horizontalClass: `${l}-horizontal`,
                        verticalClass: `${l}-vertical`,
                        paginationDisabledClass: `${l}-disabled`
                    }
                }), n.pagination = {
                    el: null,
                    bullets: []
                };
                let u = 0;

                function c() {
                    return !n.params.pagination.el || !n.pagination.el || Array.isArray(n.pagination.el) && 0 === n.pagination.el.length
                }

                function d(e, t) {
                    let {
                        bulletActiveClass: r
                    } = n.params.pagination;
                    e && (e = e[`${"prev"===t?"previous":"next"}ElementSibling`]) && (e.classList.add(`${r}-${t}`), (e = e[`${"prev"===t?"previous":"next"}ElementSibling`]) && e.classList.add(`${r}-${t}-${t}`))
                }

                function f(e) {
                    let t = e.target.closest(i(n.params.pagination.bulletClass));
                    if (!t) return;
                    e.preventDefault();
                    let o = (0, r.i)(t) * n.params.slidesPerGroup;
                    if (n.params.loop) {
                        var a, s, l;
                        if (n.realIndex === o) return;
                        let e = (a = n.realIndex, s = o, (a %= l = n.slides.length, (s %= l) === a + 1) ? "next" : s === a - 1 ? "previous" : void 0);
                        "next" === e ? n.slideNext() : "previous" === e ? n.slidePrev() : n.slideToLoop(o)
                    } else n.slideTo(o)
                }

                function p() {
                    let e, o, a = n.rtl,
                        l = n.params.pagination;
                    if (c()) return;
                    let f = n.pagination.el;
                    f = (0, r.m)(f);
                    let p = n.virtual && n.params.virtual.enabled ? n.virtual.slides.length : n.slides.length,
                        h = n.params.loop ? Math.ceil(p / n.params.slidesPerGroup) : n.snapGrid.length;
                    if (n.params.loop ? (o = n.previousRealIndex || 0, e = n.params.slidesPerGroup > 1 ? Math.floor(n.realIndex / n.params.slidesPerGroup) : n.realIndex) : void 0 !== n.snapIndex ? (e = n.snapIndex, o = n.previousSnapIndex) : (o = n.previousIndex || 0, e = n.activeIndex || 0), "bullets" === l.type && n.pagination.bullets && n.pagination.bullets.length > 0) {
                        let i, s, c, p = n.pagination.bullets;
                        if (l.dynamicBullets && (t = (0, r.h)(p[0], n.isHorizontal() ? "width" : "height", !0), f.forEach(e => {
                                e.style[n.isHorizontal() ? "width" : "height"] = `${t*(l.dynamicMainBullets+4)}px`
                            }), l.dynamicMainBullets > 1 && void 0 !== o && ((u += e - (o || 0)) > l.dynamicMainBullets - 1 ? u = l.dynamicMainBullets - 1 : u < 0 && (u = 0)), c = ((s = (i = Math.max(e - u, 0)) + (Math.min(p.length, l.dynamicMainBullets) - 1)) + i) / 2), p.forEach(e => {
                                let t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${l.bulletActiveClass}${e}`)].map(e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                                e.classList.remove(...t)
                            }), f.length > 1) p.forEach(t => {
                            let o = (0, r.i)(t);
                            o === e ? t.classList.add(...l.bulletActiveClass.split(" ")) : n.isElement && t.setAttribute("part", "bullet"), l.dynamicBullets && (o >= i && o <= s && t.classList.add(...`${l.bulletActiveClass}-main`.split(" ")), o === i && d(t, "prev"), o === s && d(t, "next"))
                        });
                        else {
                            let t = p[e];
                            if (t && t.classList.add(...l.bulletActiveClass.split(" ")), n.isElement && p.forEach((t, n) => {
                                    t.setAttribute("part", n === e ? "bullet-active" : "bullet")
                                }), l.dynamicBullets) {
                                let e = p[i],
                                    t = p[s];
                                for (let e = i; e <= s; e += 1) p[e] && p[e].classList.add(...`${l.bulletActiveClass}-main`.split(" "));
                                d(e, "prev"), d(t, "next")
                            }
                        }
                        if (l.dynamicBullets) {
                            let e = Math.min(p.length, l.dynamicMainBullets + 4),
                                r = (t * e - t) / 2 - c * t,
                                i = a ? "right" : "left";
                            p.forEach(e => {
                                e.style[n.isHorizontal() ? i : "top"] = `${r}px`
                            })
                        }
                    }
                    f.forEach((t, o) => {
                        if ("fraction" === l.type && (t.querySelectorAll(i(l.currentClass)).forEach(t => {
                                t.textContent = l.formatFractionCurrent(e + 1)
                            }), t.querySelectorAll(i(l.totalClass)).forEach(e => {
                                e.textContent = l.formatFractionTotal(h)
                            })), "progressbar" === l.type) {
                            let r;
                            r = l.progressbarOpposite ? n.isHorizontal() ? "vertical" : "horizontal" : n.isHorizontal() ? "horizontal" : "vertical";
                            let o = (e + 1) / h,
                                a = 1,
                                s = 1;
                            "horizontal" === r ? a = o : s = o, t.querySelectorAll(i(l.progressbarFillClass)).forEach(e => {
                                e.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${s})`, e.style.transitionDuration = `${n.params.speed}ms`
                            })
                        }
                        "custom" === l.type && l.renderCustom ? ((0, r.s)(t, l.renderCustom(n, e + 1, h)), 0 === o && s("paginationRender", t)) : (0 === o && s("paginationRender", t), s("paginationUpdate", t)), n.params.watchOverflow && n.enabled && t.classList[n.isLocked ? "add" : "remove"](l.lockClass)
                    })
                }

                function h() {
                    let e = n.params.pagination;
                    if (c()) return;
                    let t = n.virtual && n.params.virtual.enabled ? n.virtual.slides.length : n.grid && n.params.grid.rows > 1 ? n.slides.length / Math.ceil(n.params.grid.rows) : n.slides.length,
                        o = n.pagination.el;
                    o = (0, r.m)(o);
                    let a = "";
                    if ("bullets" === e.type) {
                        let r = n.params.loop ? Math.ceil(t / n.params.slidesPerGroup) : n.snapGrid.length;
                        n.params.freeMode && n.params.freeMode.enabled && r > t && (r = t);
                        for (let t = 0; t < r; t += 1) e.renderBullet ? a += e.renderBullet.call(n, t, e.bulletClass) : a += `<${e.bulletElement} ${n.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
                    }
                    "fraction" === e.type && (a = e.renderFraction ? e.renderFraction.call(n, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (a = e.renderProgressbar ? e.renderProgressbar.call(n, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), n.pagination.bullets = [], o.forEach(t => {
                        "custom" !== e.type && (0, r.s)(t, a || ""), "bullets" === e.type && n.pagination.bullets.push(...t.querySelectorAll(i(e.bulletClass)))
                    }), "custom" !== e.type && s("paginationRender", o[0])
                }

                function g() {
                    var e, t, i;
                    let o;
                    n.params.pagination = (e = n.originalParams.pagination, t = n.params.pagination, i = {
                        el: "swiper-pagination"
                    }, n.params.createElements && Object.keys(i).forEach(o => {
                        if (!t[o] && !0 === t.auto) {
                            let a = (0, r.e)(n.el, `.${i[o]}`)[0];
                            a || ((a = (0, r.c)("div", i[o])).className = i[o], n.el.append(a)), t[o] = a, e[o] = a
                        }
                    }), t);
                    let a = n.params.pagination;
                    a.el && ("string" == typeof a.el && n.isElement && (o = n.el.querySelector(a.el)), o || "string" != typeof a.el || (o = [...document.querySelectorAll(a.el)]), o || (o = a.el), o && 0 !== o.length && (n.params.uniqueNavElements && "string" == typeof a.el && Array.isArray(o) && o.length > 1 && (o = [...n.el.querySelectorAll(a.el)]).length > 1 && (o = o.find(e => (0, r.b)(e, ".swiper")[0] === n.el)), Array.isArray(o) && 1 === o.length && (o = o[0]), Object.assign(n.pagination, {
                        el: o
                    }), (o = (0, r.m)(o)).forEach(e => {
                        "bullets" === a.type && a.clickable && e.classList.add(...(a.clickableClass || "").split(" ")), e.classList.add(a.modifierClass + a.type), e.classList.add(n.isHorizontal() ? a.horizontalClass : a.verticalClass), "bullets" === a.type && a.dynamicBullets && (e.classList.add(`${a.modifierClass}${a.type}-dynamic`), u = 0, a.dynamicMainBullets < 1 && (a.dynamicMainBullets = 1)), "progressbar" === a.type && a.progressbarOpposite && e.classList.add(a.progressbarOppositeClass), a.clickable && e.addEventListener("click", f), n.enabled || e.classList.add(a.lockClass)
                    })))
                }

                function v() {
                    let e = n.params.pagination;
                    if (c()) return;
                    let t = n.pagination.el;
                    t && (t = (0, r.m)(t)).forEach(t => {
                        t.classList.remove(e.hiddenClass), t.classList.remove(e.modifierClass + e.type), t.classList.remove(n.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (t.classList.remove(...(e.clickableClass || "").split(" ")), t.removeEventListener("click", f))
                    }), n.pagination.bullets && n.pagination.bullets.forEach(t => t.classList.remove(...e.bulletActiveClass.split(" ")))
                }
                a("changeDirection", () => {
                    if (!n.pagination || !n.pagination.el) return;
                    let e = n.params.pagination,
                        {
                            el: t
                        } = n.pagination;
                    (t = (0, r.m)(t)).forEach(t => {
                        t.classList.remove(e.horizontalClass, e.verticalClass), t.classList.add(n.isHorizontal() ? e.horizontalClass : e.verticalClass)
                    })
                }), a("init", () => {
                    !1 === n.params.pagination.enabled ? m() : (g(), h(), p())
                }), a("activeIndexChange", () => {
                    void 0 === n.snapIndex && p()
                }), a("snapIndexChange", () => {
                    p()
                }), a("snapGridLengthChange", () => {
                    h(), p()
                }), a("destroy", () => {
                    v()
                }), a("enable disable", () => {
                    let {
                        el: e
                    } = n.pagination;
                    e && (e = (0, r.m)(e)).forEach(e => e.classList[n.enabled ? "remove" : "add"](n.params.pagination.lockClass))
                }), a("lock unlock", () => {
                    p()
                }), a("click", (e, t) => {
                    let i = t.target,
                        o = (0, r.m)(n.pagination.el);
                    if (n.params.pagination.el && n.params.pagination.hideOnClick && o && o.length > 0 && !i.classList.contains(n.params.pagination.bulletClass)) {
                        if (n.navigation && (n.navigation.nextEl && i === n.navigation.nextEl || n.navigation.prevEl && i === n.navigation.prevEl)) return;
                        !0 === o[0].classList.contains(n.params.pagination.hiddenClass) ? s("paginationShow") : s("paginationHide"), o.forEach(e => e.classList.toggle(n.params.pagination.hiddenClass))
                    }
                });
                let m = () => {
                    n.el.classList.add(n.params.pagination.paginationDisabledClass);
                    let {
                        el: e
                    } = n.pagination;
                    e && (e = (0, r.m)(e)).forEach(e => e.classList.add(n.params.pagination.paginationDisabledClass)), v()
                };
                Object.assign(n.pagination, {
                    enable: () => {
                        n.el.classList.remove(n.params.pagination.paginationDisabledClass);
                        let {
                            el: e
                        } = n.pagination;
                        e && (e = (0, r.m)(e)).forEach(e => e.classList.remove(n.params.pagination.paginationDisabledClass)), g(), h(), p()
                    },
                    disable: m,
                    render: h,
                    update: p,
                    init: g,
                    destroy: v
                })
            }

            function a(e) {
                let t, n, r, i, {
                    swiper: o,
                    extendParams: a,
                    on: s
                } = e;
                a({
                    grid: {
                        rows: 1,
                        fill: "column"
                    }
                });
                let l = () => {
                    let e = o.params.spaceBetween;
                    return "string" == typeof e && e.indexOf("%") >= 0 ? e = parseFloat(e.replace("%", "")) / 100 * o.size : "string" == typeof e && (e = parseFloat(e)), e
                };
                s("init", () => {
                    i = o.params.grid && o.params.grid.rows > 1
                }), s("update", () => {
                    let {
                        params: e,
                        el: t
                    } = o, n = e.grid && e.grid.rows > 1;
                    i && !n ? (t.classList.remove(`${e.containerModifierClass}grid`, `${e.containerModifierClass}grid-column`), r = 1, o.emitContainerClasses()) : !i && n && (t.classList.add(`${e.containerModifierClass}grid`), "column" === e.grid.fill && t.classList.add(`${e.containerModifierClass}grid-column`), o.emitContainerClasses()), i = n
                }), o.grid = {
                    initSlides: e => {
                        let {
                            slidesPerView: i
                        } = o.params, {
                            rows: a,
                            fill: s
                        } = o.params.grid, l = o.virtual && o.params.virtual.enabled ? o.virtual.slides.length : e.length;
                        r = Math.floor(l / a), t = Math.floor(l / a) === l / a ? l : Math.ceil(l / a) * a, "auto" !== i && "row" === s && (t = Math.max(t, i * a)), n = t / a
                    },
                    unsetSlides: () => {
                        o.slides && o.slides.forEach(e => {
                            e.swiperSlideGridSet && (e.style.height = "", e.style[o.getDirectionLabel("margin-top")] = "")
                        })
                    },
                    updateSlide: (e, i, a) => {
                        let s, u, c, {
                                slidesPerGroup: d
                            } = o.params,
                            f = l(),
                            {
                                rows: p,
                                fill: h
                            } = o.params.grid,
                            g = o.virtual && o.params.virtual.enabled ? o.virtual.slides.length : a.length;
                        if ("row" === h && d > 1) {
                            let n = Math.floor(e / (d * p)),
                                r = e - p * d * n,
                                o = 0 === n ? d : Math.min(Math.ceil((g - n * p * d) / p), d);
                            c = Math.floor(r / o), s = (u = r - c * o + n * d) + c * t / p, i.style.order = s
                        } else "column" === h ? (u = Math.floor(e / p), c = e - u * p, (u > r || u === r && c === p - 1) && (c += 1) >= p && (c = 0, u += 1)) : (c = Math.floor(e / n), u = e - c * n);
                        i.row = c, i.column = u, i.style.height = `calc((100% - ${(p-1)*f}px) / ${p})`, i.style[o.getDirectionLabel("margin-top")] = 0 !== c ? f && `${f}px` : "", i.swiperSlideGridSet = !0
                    },
                    updateWrapperSize: (e, n) => {
                        let {
                            centeredSlides: r,
                            roundLengths: i
                        } = o.params, a = l(), {
                            rows: s
                        } = o.params.grid;
                        if (o.virtualSize = (e + a) * t, o.virtualSize = Math.ceil(o.virtualSize / s) - a, o.params.cssMode || (o.wrapperEl.style[o.getDirectionLabel("width")] = `${o.virtualSize+a}px`), r) {
                            let e = [];
                            for (let t = 0; t < n.length; t += 1) {
                                let r = n[t];
                                i && (r = Math.floor(r)), n[t] < o.virtualSize + n[0] && e.push(r)
                            }
                            n.splice(0, n.length), n.push(...e)
                        }
                    }
                }
            }
        },
        6908: () => {},
        7310: (e, t, n) => {
            "use strict";

            function r(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function i(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {});
                let n = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter(e => 0 > n.indexOf(e)).forEach(n => {
                    void 0 === e[n] ? e[n] = t[n] : r(t[n]) && r(e[n]) && Object.keys(t[n]).length > 0 && i(e[n], t[n])
                })
            }
            n.d(t, {
                a: () => l,
                g: () => a
            });
            let o = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function a() {
                let e = "undefined" != typeof document ? document : {};
                return i(e, o), e
            }
            let s = {
                document: o,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" != typeof setTimeout && clearTimeout(e)
                }
            };

            function l() {
                let e = "undefined" != typeof window ? window : {};
                return i(e, s), e
            }
        },
        7445: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let {
                    html: t,
                    height: n = null,
                    width: o = null,
                    children: a,
                    dataNtpc: s = ""
                } = e;
                return (0, i.useEffect)(() => {
                    s && performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-".concat(s)
                        }
                    })
                }, [s]), (0, r.jsxs)(r.Fragment, {
                    children: [a, t ? (0, r.jsx)("div", {
                        style: {
                            height: null != n ? "".concat(n, "px") : "auto",
                            width: null != o ? "".concat(o, "px") : "auto"
                        },
                        "data-ntpc": s,
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }) : null]
                })
            };
            let r = n(5155),
                i = n(2115)
        },
        7828: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "workAsyncStorageInstance", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = (0, n(4054).createAsyncLocalStorage)()
        },
        8068: () => {},
        8111: (e, t, n) => {
            "use strict";
            let r;
            n.d(t, {
                IP: () => ie,
                F6: () => it,
                Ts: () => ir,
                u4: () => ii
            });
            var i, o, a, s, l, u, c, d, f, p, h, g = function(e, t) {
                return (g = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                })(e, t)
            };

            function v(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                g(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var m = function() {
                return (m = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function y(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
                return n
            }

            function b(e, t, n, r) {
                return new(n || (n = Promise))(function(i, o) {
                    function a(e) {
                        try {
                            l(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            l(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    l((r = r.apply(e, t || [])).next())
                })
            }

            function w(e, t) {
                var n, r, i, o = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    },
                    a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function s(s) {
                    return function(l) {
                        var u = [s, l];
                        if (n) throw TypeError("Generator is already executing.");
                        for (; a && (a = 0, u[0] && (o = 0)), o;) try {
                            if (n = 1, r && (i = 2 & u[0] ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, u[1])).done) return i;
                            switch (r = 0, i && (u = [2 & u[0], i.value]), u[0]) {
                                case 0:
                                case 1:
                                    i = u;
                                    break;
                                case 4:
                                    return o.label++, {
                                        value: u[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++, r = u[1], u = [0];
                                    continue;
                                case 7:
                                    u = o.ops.pop(), o.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                                        o.label = u[1];
                                        break
                                    }
                                    if (6 === u[0] && o.label < i[1]) {
                                        o.label = i[1], i = u;
                                        break
                                    }
                                    if (i && o.label < i[2]) {
                                        o.label = i[2], o.ops.push(u);
                                        break
                                    }
                                    i[2] && o.ops.pop(), o.trys.pop();
                                    continue
                            }
                            u = t.call(e, o)
                        } catch (e) {
                            u = [6, e], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & u[0]) throw u[1];
                        return {
                            value: u[0] ? u[1] : void 0,
                            done: !0
                        }
                    }
                }
            }

            function S(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function E(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, i, o = n.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = o.next()).done;) a.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return a
            }

            function x(e, t, n) {
                if (n || 2 == arguments.length)
                    for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                return e.concat(r || Array.prototype.slice.call(t))
            }
            Object.create;
            Object.create, "function" == typeof SuppressedError && SuppressedError, ! function(e) {
                e[e.None = 0] = "None", e[e.Error = 1] = "Error", e[e.Warn = 2] = "Warn", e[e.Verbose = 3] = "Verbose", e[e.Debug = 4] = "Debug"
            }(i || (i = {}));
            var T = function(e) {
                    return void 0 === e && (e = 0), (Error().stack || "").split("\n").slice(2 + e).map(function(e) {
                        return e.trim()
                    })
                },
                k = function(e) {
                    return function() {
                        var t = m({}, e.config);
                        return {
                            logger: t.loggerProvider,
                            logLevel: t.logLevel
                        }
                    }
                },
                P = function(e, t) {
                    var n, r;
                    t = (t = t.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "");
                    try {
                        for (var i = S(t.split(".")), o = i.next(); !o.done; o = i.next()) {
                            var a = o.value;
                            if (!(a in e)) return;
                            e = e[a]
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (r = i.return) && r.call(i)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return e
                },
                C = function(e, t) {
                    return function() {
                        var n, r, i = {};
                        try {
                            for (var o = S(t), a = o.next(); !a.done; a = o.next()) {
                                var s = a.value;
                                i[s] = P(e, s)
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                a && !a.done && (r = o.return) && r.call(o)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return i
                    }
                },
                _ = function(e, t, n, r, o) {
                    return void 0 === o && (o = null),
                        function() {
                            for (var a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
                            var l = n(),
                                u = l.logger,
                                c = l.logLevel;
                            if (c && c < i.Debug || !c || !u) return e.apply(o, a);
                            var d = {
                                type: "invoke public method",
                                name: t,
                                args: a,
                                stacktrace: T(1),
                                time: {
                                    start: new Date().toISOString()
                                },
                                states: {}
                            };
                            r && d.states && (d.states.before = r());
                            var f = e.apply(o, a);
                            return f && f.promise ? f.promise.then(function() {
                                r && d.states && (d.states.after = r()), d.time && (d.time.end = new Date().toISOString()), u.debug(JSON.stringify(d, null, 2))
                            }) : (r && d.states && (d.states.after = r()), d.time && (d.time.end = new Date().toISOString()), u.debug(JSON.stringify(d, null, 2))), f
                        }
                },
                I = function(e) {
                    return {
                        promise: e || Promise.resolve()
                    }
                },
                A = function() {
                    function e(e, t) {
                        this.key = "AMP_remote_config_".concat(e.substring(0, 10)), this.logger = t
                    }
                    return e.prototype.fetchConfig = function() {
                        var e = null,
                            t = {
                                remoteConfig: null,
                                lastFetch: new Date
                            };
                        try {
                            e = localStorage.getItem(this.key)
                        } catch (e) {
                            return this.logger.debug("Remote config localstorage failed to access: ", e), Promise.resolve(t)
                        }
                        if (null === e) return this.logger.debug("Remote config localstorage gets null because the key does not exist"), Promise.resolve(t);
                        try {
                            var n = JSON.parse(e);
                            return this.logger.debug("Remote config localstorage parsed successfully: ".concat(JSON.stringify(n))), Promise.resolve({
                                remoteConfig: n.remoteConfig,
                                lastFetch: new Date(n.lastFetch)
                            })
                        } catch (e) {
                            return this.logger.debug("Remote config localstorage failed to parse: ", e), localStorage.removeItem(this.key), Promise.resolve(t)
                        }
                    }, e.prototype.setConfig = function(e) {
                        try {
                            return localStorage.setItem(this.key, JSON.stringify(e)), this.logger.debug("Remote config localstorage set successfully."), Promise.resolve(!0)
                        } catch (e) {
                            this.logger.debug("Remote config localstorage failed to set: ", e)
                        }
                        return Promise.resolve(!1)
                    }, e
                }(),
                O = function() {
                    var e = "ampIntegrationContext";
                    return "undefined" != typeof globalThis && void 0 !== globalThis[e] ? globalThis[e] : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof self ? self : void 0 !== n.g ? n.g : void 0
                },
                M = x([], E(Array(256).keys()), !1).map(function(e) {
                    return e.toString(16).padStart(2, "0")
                }),
                L = function(e) {
                    var t, n = O();
                    if (!(null == (t = null == n ? void 0 : n.crypto) ? void 0 : t.getRandomValues)) return e ? (e ^ 16 * Math.random() >> e / 4).toString(16) : (String(1e7) + String(-1e3) + String(-4e3) + String(-8e3) + String(-1e11)).replace(/[018]/g, L);
                    var r = n.crypto.getRandomValues(new Uint8Array(16));
                    return r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, x([], E(r.entries()), !1).map(function(e) {
                        var t = E(e, 2),
                            n = t[0],
                            r = t[1];
                        return [4, 6, 8, 10].includes(n) ? "-".concat(M[r]) : M[r]
                    }).join("")
                },
                R = function() {
                    function e(e, t, n, r) {
                        void 0 === n && (n = "US"), this.callbackInfos = [], this.lastSuccessfulFetch = null, this.fetchPromise = null, this.apiKey = e, this.serverUrl = r || ("US" === n ? "https://sr-client-cfg.amplitude.com/config" : "https://sr-client-cfg.eu.amplitude.com/config"), this.logger = t, this.storage = new A(e, t)
                    }
                    return e.prototype.subscribe = function(e, t, n) {
                        var r = L(),
                            i = {
                                id: r,
                                key: e,
                                deliveryMode: t,
                                callback: n
                            };
                        return this.callbackInfos.push(i), "all" === t ? this.subscribeAll(i) : this.subscribeWaitForRemote(i, t.timeout), r
                    }, e.prototype.unsubscribe = function(e) {
                        var t = this.callbackInfos.findIndex(function(t) {
                            return t.id === e
                        });
                        return -1 === t ? (this.logger.debug("Remote config client unsubscribe failed because callback with id ".concat(e, " doesn't exist.")), !1) : (this.callbackInfos.splice(t, 1), this.logger.debug("Remote config client unsubscribe succeeded removing callback with id ".concat(e, ".")), !0)
                    }, e.prototype.updateConfigs = function() {
                        return b(this, void 0, void 0, function() {
                            var e, t = this;
                            return w(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (this.lastSuccessfulFetch && Date.now() - this.lastSuccessfulFetch < 3e5) return this.logger.debug("Remote config client skipping updateConfigs: Too recent"), [2];
                                        return [4, this.getOrCreateFetchPromise()];
                                    case 1:
                                        return e = n.sent(), this.storage.setConfig(e), this.callbackInfos.forEach(function(n) {
                                            t.sendCallback(n, e, "remote")
                                        }), [2]
                                }
                            })
                        })
                    }, e.prototype.getOrCreateFetchPromise = function() {
                        var e = this;
                        return this.fetchPromise || (this.fetchPromise = this.fetch().then(function(t) {
                            return null !== t.remoteConfig && (e.lastSuccessfulFetch = Date.now()), t
                        }).finally(function() {
                            e.fetchPromise = null
                        })), this.fetchPromise
                    }, e.prototype.subscribeAll = function(e) {
                        return b(this, void 0, void 0, function() {
                            var t, n, r, i = this;
                            return w(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return t = this.getOrCreateFetchPromise().then(function(t) {
                                            i.logger.debug("Remote config client subscription all mode fetched from remote: ".concat(JSON.stringify(t))), i.sendCallback(e, t, "remote"), i.storage.setConfig(t)
                                        }), n = this.storage.fetchConfig().then(function(e) {
                                            return e
                                        }), [4, Promise.race([t, n])];
                                    case 1:
                                        return void 0 !== (r = o.sent()) && (this.logger.debug("Remote config client subscription all mode fetched from cache: ".concat(JSON.stringify(r))), null !== r.remoteConfig ? this.sendCallback(e, r, "cache") : this.logger.debug("Remote config client skips sending callback because cache is empty (first time user).")), [4, t];
                                    case 2:
                                        return o.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype.subscribeWaitForRemote = function(e, t) {
                        return b(this, void 0, void 0, function() {
                            var n, r;
                            return w(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        n = new Promise(function(e, n) {
                                            setTimeout(function() {
                                                n("Timeout exceeded")
                                            }, t)
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 5]), [4, Promise.race([this.getOrCreateFetchPromise(), n])];
                                    case 2:
                                        return r = i.sent(), this.logger.debug("Remote config client subscription wait for remote mode returns from remote."), this.sendCallback(e, r, "remote"), this.storage.setConfig(r), [3, 5];
                                    case 3:
                                        return i.sent(), this.logger.debug("Remote config client subscription wait for remote mode exceeded timeout. Try to fetch from cache."), [4, this.storage.fetchConfig()];
                                    case 4:
                                        return null !== (r = i.sent()).remoteConfig ? (this.logger.debug("Remote config client subscription wait for remote mode returns a cached copy."), this.sendCallback(e, r, "cache")) : (this.logger.debug("Remote config client subscription wait for remote mode failed to fetch cache."), this.sendCallback(e, r, "remote")), [3, 5];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.sendCallback = function(e, t, n) {
                        var r;
                        e.lastCallback = new Date, r = e.key ? e.key.split(".").reduce(function(e, t) {
                            return null === e ? e : t in e ? e[t] : null
                        }, t.remoteConfig) : t.remoteConfig, e.callback(r, n, t.lastFetch)
                    }, e.prototype.fetch = function(e, t) {
                        return void 0 === e && (e = 3), void 0 === t && (t = 1e3), b(this, void 0, void 0, function() {
                            var n, r, i, o, a, s, l = this;
                            return w(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        n = t / e, r = {
                                            remoteConfig: null,
                                            lastFetch: new Date
                                        }, i = function(r) {
                                            var i, a, s, u, c;
                                            return w(this, function(d) {
                                                switch (d.label) {
                                                    case 0:
                                                        i = new AbortController, a = setTimeout(function() {
                                                            return i.abort()
                                                        }, t), d.label = 1;
                                                    case 1:
                                                        return d.trys.push([1, 7, 8, 9]), [4, fetch(o.getUrlParams(), {
                                                            method: "GET",
                                                            headers: {
                                                                Accept: "*/*"
                                                            },
                                                            signal: i.signal
                                                        })];
                                                    case 2:
                                                        if ((s = d.sent()).ok) return [3, 4];
                                                        return [4, s.text()];
                                                    case 3:
                                                        return u = d.sent(), o.logger.debug("Remote config client fetch with retry time ".concat(e, " failed with ").concat(s.status, ": ").concat(u)), [3, 6];
                                                    case 4:
                                                        return [4, s.json()];
                                                    case 5:
                                                        return [2, {
                                                            value: {
                                                                remoteConfig: d.sent(),
                                                                lastFetch: new Date
                                                            }
                                                        }];
                                                    case 6:
                                                        return [3, 9];
                                                    case 7:
                                                        return (c = d.sent()) instanceof Error && "AbortError" === c.name ? o.logger.debug("Remote config client fetch with retry time ".concat(e, " timed out after ").concat(t, "ms")) : o.logger.debug("Remote config client fetch with retry time ".concat(e, " is rejected because: "), c), [3, 9];
                                                    case 8:
                                                        return clearTimeout(a), [7];
                                                    case 9:
                                                        if (!(r < e - 1)) return [3, 11];
                                                        return [4, new Promise(function(e) {
                                                            return setTimeout(e, l.getJitterDelay(n))
                                                        })];
                                                    case 10:
                                                        d.sent(), d.label = 11;
                                                    case 11:
                                                        return [2]
                                                }
                                            })
                                        }, o = this, a = 0, u.label = 1;
                                    case 1:
                                        if (!(a < e)) return [3, 4];
                                        return [5, i(a)];
                                    case 2:
                                        if ("object" == typeof(s = u.sent())) return [2, s.value];
                                        u.label = 3;
                                    case 3:
                                        return a++, [3, 1];
                                    case 4:
                                        return [2, r]
                                }
                            })
                        })
                    }, e.prototype.getJitterDelay = function(e) {
                        return Math.floor(Math.random() * e)
                    }, e.prototype.getUrlParams = function() {
                        var t = encodeURIComponent(this.apiKey),
                            n = new URLSearchParams;
                        return n.append("config_group", e.CONFIG_GROUP), "".concat(this.serverUrl, "/").concat(t, "?").concat(n.toString())
                    }, e.CONFIG_GROUP = "browser", e
                }(),
                N = {
                    TAGS: "tags",
                    COUNTERS: "counters",
                    HISTOGRAMS: "histograms",
                    EVENTS: "events",
                    INTERNAL: "internal"
                },
                j = {
                    LAST_FLUSH_TIMESTAMP: "last_flush_timestamp"
                },
                D = function() {
                    function e(e, t) {
                        this.dbPromise = null, this.logger = t, this.dbName = "AMP_diagnostics_".concat(e.substring(0, 10))
                    }
                    return e.isSupported = function() {
                        var e;
                        return (null == (e = O()) ? void 0 : e.indexedDB) !== void 0
                    }, e.prototype.getDB = function() {
                        return b(this, void 0, void 0, function() {
                            return w(this, function(e) {
                                return this.dbPromise || (this.dbPromise = this.openDB()), [2, this.dbPromise]
                            })
                        })
                    }, e.prototype.openDB = function() {
                        var e = this;
                        return new Promise(function(t, n) {
                            var r = indexedDB.open(e.dbName, 1);
                            r.onerror = function() {
                                e.dbPromise = null, n(Error("Failed to open IndexedDB"))
                            }, r.onsuccess = function() {
                                var n = r.result;
                                n.onclose = function() {
                                    e.dbPromise = null, e.logger.debug("DiagnosticsStorage: DB connection closed.")
                                }, n.onerror = function(t) {
                                    e.logger.debug("DiagnosticsStorage: A global database error occurred.", t), n.close()
                                }, t(n)
                            }, r.onupgradeneeded = function(t) {
                                var n = t.target.result;
                                e.createTables(n)
                            }
                        })
                    }, e.prototype.createTables = function(e) {
                        e.objectStoreNames.contains(N.TAGS) || e.createObjectStore(N.TAGS, {
                            keyPath: "key"
                        }), e.objectStoreNames.contains(N.COUNTERS) || e.createObjectStore(N.COUNTERS, {
                            keyPath: "key"
                        }), e.objectStoreNames.contains(N.HISTOGRAMS) || e.createObjectStore(N.HISTOGRAMS, {
                            keyPath: "key"
                        }), e.objectStoreNames.contains(N.EVENTS) || e.createObjectStore(N.EVENTS, {
                            keyPath: "id",
                            autoIncrement: !0
                        }).createIndex("time_idx", "time", {
                            unique: !1
                        }), e.objectStoreNames.contains(N.INTERNAL) || e.createObjectStore(N.INTERNAL, {
                            keyPath: "key"
                        })
                    }, e.prototype.setTags = function(e) {
                        return b(this, void 0, void 0, function() {
                            var t, n, r, i = this;
                            return w(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (o.trys.push([0, 2, , 3]), 0 === Object.entries(e).length) return [2];
                                        return [4, this.getDB()];
                                    case 1:
                                        return n = (t = o.sent().transaction([N.TAGS], "readwrite")).objectStore(N.TAGS), [2, new Promise(function(r) {
                                            var o = Object.entries(e);
                                            t.oncomplete = function() {
                                                r()
                                            }, t.onabort = function(e) {
                                                i.logger.debug("DiagnosticsStorage: Failed to set tags", e), r()
                                            }, o.forEach(function(e) {
                                                var t = E(e, 2),
                                                    r = t[0],
                                                    o = t[1];
                                                n.put({
                                                    key: r,
                                                    value: o
                                                }).onerror = function(e) {
                                                    i.logger.debug("DiagnosticsStorage: Failed to set tag", r, o, e)
                                                }
                                            })
                                        })];
                                    case 2:
                                        return r = o.sent(), this.logger.debug("DiagnosticsStorage: Failed to set tags", r), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.incrementCounters = function(e) {
                        return b(this, void 0, void 0, function() {
                            var t, n, r, i = this;
                            return w(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (o.trys.push([0, 2, , 3]), 0 === Object.entries(e).length) return [2];
                                        return [4, this.getDB()];
                                    case 1:
                                        return n = (t = o.sent().transaction([N.COUNTERS], "readwrite")).objectStore(N.COUNTERS), [2, new Promise(function(r) {
                                            var o = Object.entries(e);
                                            t.oncomplete = function() {
                                                r()
                                            }, t.onabort = function(e) {
                                                i.logger.debug("DiagnosticsStorage: Failed to increment counters", e), r()
                                            }, o.forEach(function(e) {
                                                var t = E(e, 2),
                                                    r = t[0],
                                                    o = t[1],
                                                    a = n.get(r);
                                                a.onsuccess = function() {
                                                    var e = a.result,
                                                        t = e ? e.value : 0;
                                                    n.put({
                                                        key: r,
                                                        value: t + o
                                                    }).onerror = function(e) {
                                                        i.logger.debug("DiagnosticsStorage: Failed to update counter", r, e)
                                                    }
                                                }, a.onerror = function(e) {
                                                    i.logger.debug("DiagnosticsStorage: Failed to read existing counter", r, e)
                                                }
                                            })
                                        })];
                                    case 2:
                                        return r = o.sent(), this.logger.debug("DiagnosticsStorage: Failed to increment counters", r), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.setHistogramStats = function(e) {
                        return b(this, void 0, void 0, function() {
                            var t, n, r, i = this;
                            return w(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (o.trys.push([0, 2, , 3]), 0 === Object.entries(e).length) return [2];
                                        return [4, this.getDB()];
                                    case 1:
                                        return n = (t = o.sent().transaction([N.HISTOGRAMS], "readwrite")).objectStore(N.HISTOGRAMS), [2, new Promise(function(r) {
                                            var o = Object.entries(e);
                                            t.oncomplete = function() {
                                                r()
                                            }, t.onabort = function(e) {
                                                i.logger.debug("DiagnosticsStorage: Failed to set histogram stats", e), r()
                                            }, o.forEach(function(e) {
                                                var t = E(e, 2),
                                                    r = t[0],
                                                    o = t[1],
                                                    a = n.get(r);
                                                a.onsuccess = function() {
                                                    var e, t = a.result;
                                                    e = t ? {
                                                        key: r,
                                                        count: t.count + o.count,
                                                        min: Math.min(t.min, o.min),
                                                        max: Math.max(t.max, o.max),
                                                        sum: t.sum + o.sum
                                                    } : {
                                                        key: r,
                                                        count: o.count,
                                                        min: o.min,
                                                        max: o.max,
                                                        sum: o.sum
                                                    }, n.put(e).onerror = function(e) {
                                                        i.logger.debug("DiagnosticsStorage: Failed to set histogram stats", r, e)
                                                    }
                                                }, a.onerror = function(e) {
                                                    i.logger.debug("DiagnosticsStorage: Failed to read existing histogram stats", r, e)
                                                }
                                            })
                                        })];
                                    case 2:
                                        return r = o.sent(), this.logger.debug("DiagnosticsStorage: Failed to set histogram stats", r), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.addEventRecords = function(e) {
                        return b(this, void 0, void 0, function() {
                            var t, n, r, i = this;
                            return w(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (o.trys.push([0, 2, , 3]), 0 === e.length) return [2];
                                        return [4, this.getDB()];
                                    case 1:
                                        return n = (t = o.sent().transaction([N.EVENTS], "readwrite")).objectStore(N.EVENTS), [2, new Promise(function(r) {
                                            t.oncomplete = function() {
                                                r()
                                            }, t.onabort = function(e) {
                                                i.logger.debug("DiagnosticsStorage: Failed to add event records", e), r()
                                            };
                                            var o = n.count();
                                            o.onsuccess = function() {
                                                var t = Math.max(0, 10 - o.result);
                                                t < e.length && i.logger.debug("DiagnosticsStorage: Only added ".concat(t, " of ").concat(e.length, " events due to storage limit")), e.slice(0, t).forEach(function(e) {
                                                    n.add(e).onerror = function(e) {
                                                        i.logger.debug("DiagnosticsStorage: Failed to add event record", e)
                                                    }
                                                })
                                            }, o.onerror = function(e) {
                                                i.logger.debug("DiagnosticsStorage: Failed to count existing events", e)
                                            }
                                        })];
                                    case 2:
                                        return r = o.sent(), this.logger.debug("DiagnosticsStorage: Failed to add event records", r), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.setInternal = function(e, t) {
                        return b(this, void 0, void 0, function() {
                            var n, r, i;
                            return w(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return o.trys.push([0, 2, , 3]), [4, this.getDB()];
                                    case 1:
                                        return r = (n = o.sent().transaction([N.INTERNAL], "readwrite")).objectStore(N.INTERNAL), [2, new Promise(function(i, o) {
                                            n.onabort = function() {
                                                return o(Error("Failed to set internal value"))
                                            };
                                            var a = r.put({
                                                key: e,
                                                value: t
                                            });
                                            a.onsuccess = function() {
                                                return i()
                                            }, a.onerror = function() {
                                                return o(Error("Failed to set internal value"))
                                            }
                                        })];
                                    case 2:
                                        return i = o.sent(), this.logger.debug("DiagnosticsStorage: Failed to set internal value", i), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.getInternal = function(e) {
                        return b(this, void 0, void 0, function() {
                            var t, n, r;
                            return w(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, this.getDB()];
                                    case 1:
                                        return n = (t = i.sent().transaction([N.INTERNAL], "readonly")).objectStore(N.INTERNAL), [2, new Promise(function(r, i) {
                                            t.onabort = function() {
                                                return i(Error("Failed to get internal value"))
                                            };
                                            var o = n.get(e);
                                            o.onsuccess = function() {
                                                return r(o.result)
                                            }, o.onerror = function() {
                                                return i(Error("Failed to get internal value"))
                                            }
                                        })];
                                    case 2:
                                        return r = i.sent(), this.logger.debug("DiagnosticsStorage: Failed to get internal value", r), [2, void 0];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.getLastFlushTimestamp = function() {
                        return b(this, void 0, void 0, function() {
                            var e, t;
                            return w(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, this.getInternal(j.LAST_FLUSH_TIMESTAMP)];
                                    case 1:
                                        return [2, (e = n.sent()) ? parseInt(e.value, 10) : void 0];
                                    case 2:
                                        return t = n.sent(), this.logger.debug("DiagnosticsStorage: Failed to get last flush timestamp", t), [2, void 0];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.setLastFlushTimestamp = function(e) {
                        return b(this, void 0, void 0, function() {
                            var t;
                            return w(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, this.setInternal(j.LAST_FLUSH_TIMESTAMP, e.toString())];
                                    case 1:
                                        return n.sent(), [3, 3];
                                    case 2:
                                        return t = n.sent(), this.logger.debug("DiagnosticsStorage: Failed to set last flush timestamp", t), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.clearTable = function(e, t) {
                        return new Promise(function(n, r) {
                            var i = e.objectStore(t).clear();
                            i.onsuccess = function() {
                                return n()
                            }, i.onerror = function() {
                                return r(Error("Failed to clear table ".concat(t)))
                            }
                        })
                    }, e.prototype.getAllAndClear = function() {
                        return b(this, void 0, void 0, function() {
                            var e, t, n, r, i, o, a;
                            return w(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return s.trys.push([0, 4, , 5]), [4, this.getDB()];
                                    case 1:
                                        return e = s.sent().transaction([N.TAGS, N.COUNTERS, N.HISTOGRAMS, N.EVENTS], "readwrite"), [4, Promise.all([this.getAllFromStore(e, N.TAGS), this.getAllFromStore(e, N.COUNTERS), this.getAllFromStore(e, N.HISTOGRAMS), this.getAllFromStore(e, N.EVENTS)])];
                                    case 2:
                                        return n = (t = E.apply(void 0, [s.sent(), 4]))[0], r = t[1], i = t[2], o = t[3], [4, Promise.all([this.clearTable(e, N.COUNTERS), this.clearTable(e, N.HISTOGRAMS), this.clearTable(e, N.EVENTS)])];
                                    case 3:
                                        return s.sent(), [2, {
                                            tags: n,
                                            counters: r,
                                            histogramStats: i,
                                            events: o
                                        }];
                                    case 4:
                                        return a = s.sent(), this.logger.debug("DiagnosticsStorage: Failed to get all and clear data", a), [2, {
                                            tags: [],
                                            counters: [],
                                            histogramStats: [],
                                            events: []
                                        }];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.getAllFromStore = function(e, t) {
                        return new Promise(function(n, r) {
                            var i = e.objectStore(t).getAll();
                            i.onsuccess = function() {
                                return n(i.result)
                            }, i.onerror = function() {
                                return r(Error("Failed to get all from ".concat(t)))
                            }
                        })
                    }, e
                }(),
                F = function(e) {
                    var t = 0;
                    if (0 === e.length) return t;
                    for (var n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n) | 0;
                    return t
                },
                z = function(e, t) {
                    return 31 * Math.abs(F(e.toString())) % 1e5 / 1e5 < t
                },
                q = function() {
                    var e = O();
                    return null == e ? void 0 : e.__AMPLITUDE_SCRIPT_URL__
                },
                U = function(e) {
                    var t = O();
                    if (t && "function" == typeof t.addEventListener) {
                        var n = function(t) {
                            e.recordEvent("sdk.error.uncaught", m({
                                type: t.type,
                                message: t.message,
                                filename: t.filename,
                                error_name: t.errorName,
                                stack: t.stack
                            }, t.metadata))
                        };
                        t.addEventListener("error", function(e) {
                            var t = e.error instanceof Error ? e.error : void 0,
                                r = null == t ? void 0 : t.stack,
                                i = $({
                                    filename: e.filename,
                                    stack: r
                                });
                            i && n({
                                type: "error",
                                message: e.message,
                                stack: r,
                                filename: e.filename,
                                errorName: null == t ? void 0 : t.name,
                                metadata: {
                                    colno: e.colno,
                                    lineno: e.lineno,
                                    isTrusted: e.isTrusted,
                                    matchReason: i
                                }
                            })
                        }, !0), t.addEventListener("unhandledrejection", function(e) {
                            var t, r = e.reason instanceof Error ? e.reason : void 0,
                                i = null == r ? void 0 : r.stack,
                                o = B(i),
                                a = $({
                                    filename: o,
                                    stack: i
                                });
                            a && n({
                                type: "unhandledrejection",
                                message: null != (t = null == r ? void 0 : r.message) ? t : H(e.reason),
                                stack: i,
                                filename: o,
                                errorName: null == r ? void 0 : r.name,
                                metadata: {
                                    isTrusted: e.isTrusted,
                                    matchReason: a
                                }
                            })
                        }, !0)
                    }
                },
                $ = function(e) {
                    var t = q();
                    if (t) {
                        if (e.filename && e.filename.includes(t)) return "filename";
                        if (e.stack && e.stack.includes(t)) return "stack"
                    }
                },
                B = function(e) {
                    if (e) {
                        var t = e.match(/(https?:\/\/\S+?)(?=[)\s]|$)/);
                        return t ? t[1] : void 0
                    }
                },
                H = function(e) {
                    if ("string" == typeof e) return e;
                    try {
                        return JSON.stringify(e)
                    } catch (e) {
                        return "[object Object]"
                    }
                },
                V = function() {
                    function e(e, t, n, r) {
                        void 0 === n && (n = "US"), this.inMemoryTags = {}, this.inMemoryCounters = {}, this.inMemoryHistograms = {}, this.inMemoryEvents = [], this.saveTimer = null, this.flushTimer = null, this.apiKey = e, this.logger = t, this.serverUrl = "US" === n ? "https://diagnostics.prod.us-west-2.amplitude.com/v1/capture" : "https://diagnostics.prod.eu-central-1.amplitude.com/v1/capture", this.logger.debug("DiagnosticsClient: Initializing with options", JSON.stringify(r, null, 2)), this.config = m({
                            enabled: !0,
                            sampleRate: 0
                        }, r), this.startTimestamp = Date.now(), this.shouldTrack = z(this.startTimestamp, this.config.sampleRate) && this.config.enabled, D.isSupported() ? this.storage = new D(e, t) : this.logger.debug("DiagnosticsClient: IndexedDB is not supported"), this.initializeFlushInterval(), this.shouldTrack && (this.increment("sdk.diagnostics.sampled.in.and.enabled"), U(this))
                    }
                    return e.prototype.isStorageAndTrackEnabled = function() {
                        return !!this.storage && !!this.shouldTrack
                    }, e.prototype.setTag = function(e, t) {
                        if (this.isStorageAndTrackEnabled()) {
                            if (Object.keys(this.inMemoryTags).length >= 1e4) return void this.logger.debug("DiagnosticsClient: Early return setTags as reaching memory limit");
                            this.inMemoryTags[e] = t, this.startTimersIfNeeded()
                        }
                    }, e.prototype.increment = function(e, t) {
                        if (void 0 === t && (t = 1), this.isStorageAndTrackEnabled()) {
                            if (Object.keys(this.inMemoryCounters).length >= 1e4) return void this.logger.debug("DiagnosticsClient: Early return increment as reaching memory limit");
                            this.inMemoryCounters[e] = (this.inMemoryCounters[e] || 0) + t, this.startTimersIfNeeded()
                        }
                    }, e.prototype.recordHistogram = function(e, t) {
                        if (this.isStorageAndTrackEnabled()) {
                            if (Object.keys(this.inMemoryHistograms).length >= 1e4) return void this.logger.debug("DiagnosticsClient: Early return recordHistogram as reaching memory limit");
                            var n = this.inMemoryHistograms[e];
                            n ? (n.count += 1, n.min = Math.min(n.min, t), n.max = Math.max(n.max, t), n.sum += t) : this.inMemoryHistograms[e] = {
                                count: 1,
                                min: t,
                                max: t,
                                sum: t
                            }, this.startTimersIfNeeded()
                        }
                    }, e.prototype.recordEvent = function(e, t) {
                        if (this.isStorageAndTrackEnabled()) {
                            if (this.inMemoryEvents.length >= 10) return void this.logger.debug("DiagnosticsClient: Early return recordEvent as reaching memory limit");
                            this.inMemoryEvents.push({
                                event_name: e,
                                time: Date.now(),
                                event_properties: t
                            }), this.startTimersIfNeeded()
                        }
                    }, e.prototype.startTimersIfNeeded = function() {
                        var e = this;
                        this.saveTimer || (this.saveTimer = setTimeout(function() {
                            e.saveAllDataToStorage().catch(function(t) {
                                e.logger.debug("DiagnosticsClient: Failed to save all data to storage", t)
                            }).finally(function() {
                                e.saveTimer = null
                            })
                        }, 1e3)), this.flushTimer || (this.flushTimer = setTimeout(function() {
                            e._flush().catch(function(t) {
                                e.logger.debug("DiagnosticsClient: Failed to flush", t)
                            }).finally(function() {
                                e.flushTimer = null
                            })
                        }, 3e5))
                    }, e.prototype.saveAllDataToStorage = function() {
                        return b(this, void 0, void 0, function() {
                            var e, t, n, r;
                            return w(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (!this.storage) return [2];
                                        return e = m({}, this.inMemoryTags), t = m({}, this.inMemoryCounters), n = m({}, this.inMemoryHistograms), r = x([], E(this.inMemoryEvents), !1), this.inMemoryEvents = [], this.inMemoryTags = {}, this.inMemoryCounters = {}, this.inMemoryHistograms = {}, [4, Promise.all([this.storage.setTags(e), this.storage.incrementCounters(t), this.storage.setHistogramStats(n), this.storage.addEventRecords(r)])];
                                    case 1:
                                        return i.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype._flush = function() {
                        return b(this, void 0, void 0, function() {
                            var e, t, n, r, i, o, a, s, l, u;
                            return w(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        if (!this.storage) return [2];
                                        return [4, this.saveAllDataToStorage()];
                                    case 1:
                                        return c.sent(), this.saveTimer = null, this.flushTimer = null, [4, this.storage.getAllAndClear()];
                                    case 2:
                                        if (t = (e = c.sent()).tags, n = e.counters, r = e.histogramStats, i = e.events, this.storage.setLastFlushTimestamp(Date.now()), o = {}, t.forEach(function(e) {
                                                o[e.key] = e.value
                                            }), a = {}, n.forEach(function(e) {
                                                a[e.key] = e.value
                                            }), s = {}, r.forEach(function(e) {
                                                s[e.key] = {
                                                    count: e.count,
                                                    min: e.min,
                                                    max: e.max,
                                                    avg: Math.round(e.sum / e.count * 100) / 100
                                                }
                                            }), l = i.map(function(e) {
                                                return {
                                                    event_name: e.event_name,
                                                    time: e.time,
                                                    event_properties: e.event_properties
                                                }
                                            }), 0 === Object.keys(a).length && 0 === Object.keys(s).length && 0 === l.length) return [2];
                                        return u = {
                                            tags: o,
                                            histogram: s,
                                            counters: a,
                                            events: l
                                        }, this.fetch(u), [2]
                                }
                            })
                        })
                    }, e.prototype.fetch = function(e) {
                        return b(this, void 0, void 0, function() {
                            var t;
                            return w(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (n.trys.push([0, 2, , 3]), !O()) throw Error("DiagnosticsClient: Fetch is not supported");
                                        return [4, fetch(this.serverUrl, {
                                            method: "POST",
                                            headers: {
                                                "X-ApiKey": this.apiKey,
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify(e)
                                        })];
                                    case 1:
                                        if (!n.sent().ok) return this.logger.debug("DiagnosticsClient: Failed to send diagnostics data."), [2];
                                        return this.logger.debug("DiagnosticsClient: Successfully sent diagnostics data"), [3, 3];
                                    case 2:
                                        return t = n.sent(), this.logger.debug("DiagnosticsClient: Failed to send diagnostics data. ", t), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.initializeFlushInterval = function() {
                        return b(this, void 0, void 0, function() {
                            var e, t, n;
                            return w(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (!this.storage) return [2];
                                        return e = Date.now(), [4, this.storage.getLastFlushTimestamp()];
                                    case 1:
                                        if (-1 === (t = r.sent() || -1)) return this.storage.setLastFlushTimestamp(e), this._setFlushTimer(3e5), [2];
                                        return (n = e - t) >= 3e5 ? this._flush() : this._setFlushTimer(3e5 - n), [2]
                                }
                            })
                        })
                    }, e.prototype._setFlushTimer = function(e) {
                        var t = this;
                        this.flushTimer = setTimeout(function() {
                            t._flush().catch(function(e) {
                                t.logger.debug("DiagnosticsClient: Failed to flush", e)
                            }).finally(function() {
                                t.flushTimer = null
                            })
                        }, e)
                    }, e.prototype._setSampleRate = function(e) {
                        this.logger.debug("DiagnosticsClient: Setting sample rate to", e), this.config.sampleRate = e, this.shouldTrack = z(this.startTimestamp, this.config.sampleRate) && this.config.enabled, this.logger.debug("DiagnosticsClient: Should track is", this.shouldTrack)
                    }, e
                }(),
                G = function() {
                    var e, t = O();
                    return (null == (e = null == t ? void 0 : t.location) ? void 0 : e.search) ? t.location.search.substring(1).split("&").filter(Boolean).reduce(function(e, t) {
                        var n = t.split("=", 2),
                            r = W(n[0]),
                            i = W(n[1]);
                        return i && (e[r] = i), e
                    }, {}) : {}
                },
                W = function(e) {
                    void 0 === e && (e = "");
                    try {
                        return decodeURIComponent(e)
                    } catch (e) {
                        return ""
                    }
                },
                Y = function() {
                    function e() {}
                    return e.prototype.getApplicationContext = function() {
                        return {
                            versionName: this.versionName,
                            language: J(),
                            platform: "Web",
                            os: void 0,
                            deviceModel: void 0
                        }
                    }, e
                }(),
                J = function() {
                    return "undefined" != typeof navigator && (navigator.languages && navigator.languages[0] || navigator.language) || ""
                },
                K = function() {
                    function e() {
                        this.queue = []
                    }
                    return e.prototype.logEvent = function(e) {
                        this.receiver ? this.receiver(e) : this.queue.length < 512 && this.queue.push(e)
                    }, e.prototype.setEventReceiver = function(e) {
                        this.receiver = e, this.queue.length > 0 && (this.queue.forEach(function(t) {
                            e(t)
                        }), this.queue = [])
                    }, e
                }(),
                X = function() {
                    return (X = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }).apply(this, arguments)
                };

            function Q(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function Z(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, i, o = n.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = o.next()).done;) a.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return a
            }
            "function" == typeof SuppressedError && SuppressedError;
            var ee = function(e, t) {
                var n, r, i = typeof e;
                if (i !== typeof t) return !1;
                try {
                    for (var o = Q(["string", "number", "boolean", "undefined"]), a = o.next(); !a.done; a = o.next())
                        if (a.value === i) return e === t
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        a && !a.done && (r = o.return) && r.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
                if (null == e && null == t) return !0;
                if (null == e || null == t || e.length !== t.length) return !1;
                var s = Array.isArray(e),
                    l = Array.isArray(t);
                if (s !== l) return !1;
                if (s && l) {
                    for (var u = 0; u < e.length; u++)
                        if (!ee(e[u], t[u])) return !1
                } else {
                    if (!ee(Object.keys(e).sort(), Object.keys(t).sort())) return !1;
                    var c = !0;
                    return Object.keys(e).forEach(function(n) {
                        ee(e[n], t[n]) || (c = !1)
                    }), c
                }
                return !0
            };
            Object.entries || (Object.entries = function(e) {
                for (var t = Object.keys(e), n = t.length, r = Array(n); n--;) r[n] = [t[n], e[t[n]]];
                return r
            });
            var et = function() {
                    function e() {
                        this.identity = {
                            userProperties: {}
                        }, this.listeners = new Set
                    }
                    return e.prototype.editIdentity = function() {
                        var e = this,
                            t = X({}, this.identity.userProperties),
                            n = X(X({}, this.identity), {
                                userProperties: t
                            });
                        return {
                            setUserId: function(e) {
                                return n.userId = e, this
                            },
                            setDeviceId: function(e) {
                                return n.deviceId = e, this
                            },
                            setUserProperties: function(e) {
                                return n.userProperties = e, this
                            },
                            setOptOut: function(e) {
                                return n.optOut = e, this
                            },
                            updateUserProperties: function(e) {
                                var t, r, i, o, a, s, l = n.userProperties || {};
                                try {
                                    for (var u = Q(Object.entries(e)), c = u.next(); !c.done; c = u.next()) {
                                        var d = Z(c.value, 2),
                                            f = d[0],
                                            p = d[1];
                                        switch (f) {
                                            case "$set":
                                                try {
                                                    for (var h = (i = void 0, Q(Object.entries(p))), g = h.next(); !g.done; g = h.next()) {
                                                        var v = Z(g.value, 2),
                                                            m = v[0],
                                                            y = v[1];
                                                        l[m] = y
                                                    }
                                                } catch (e) {
                                                    i = {
                                                        error: e
                                                    }
                                                } finally {
                                                    try {
                                                        g && !g.done && (o = h.return) && o.call(h)
                                                    } finally {
                                                        if (i) throw i.error
                                                    }
                                                }
                                                break;
                                            case "$unset":
                                                try {
                                                    for (var b = (a = void 0, Q(Object.keys(p))), w = b.next(); !w.done; w = b.next()) {
                                                        var m = w.value;
                                                        delete l[m]
                                                    }
                                                } catch (e) {
                                                    a = {
                                                        error: e
                                                    }
                                                } finally {
                                                    try {
                                                        w && !w.done && (s = b.return) && s.call(b)
                                                    } finally {
                                                        if (a) throw a.error
                                                    }
                                                }
                                                break;
                                            case "$clearAll":
                                                l = {}
                                        }
                                    }
                                } catch (e) {
                                    t = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        c && !c.done && (r = u.return) && r.call(u)
                                    } finally {
                                        if (t) throw t.error
                                    }
                                }
                                return n.userProperties = l, this
                            },
                            commit: function() {
                                return e.setIdentity(n), this
                            }
                        }
                    }, e.prototype.getIdentity = function() {
                        return X({}, this.identity)
                    }, e.prototype.setIdentity = function(e) {
                        var t = X({}, this.identity);
                        this.identity = X({}, e), ee(t, this.identity) || this.listeners.forEach(function(t) {
                            t(e)
                        })
                    }, e.prototype.addIdentityListener = function(e) {
                        this.listeners.add(e)
                    }, e.prototype.removeIdentityListener = function(e) {
                        this.listeners.delete(e)
                    }, e
                }(),
                en = "undefined" != typeof globalThis ? globalThis : void 0 !== n.g ? n.g : self,
                er = function() {
                    function e() {
                        this.identityStore = new et, this.eventBridge = new K, this.applicationContextProvider = new Y
                    }
                    return e.getInstance = function(t) {
                        return en.analyticsConnectorInstances || (en.analyticsConnectorInstances = {}), en.analyticsConnectorInstances[t] || (en.analyticsConnectorInstances[t] = new e), en.analyticsConnectorInstances[t]
                    }, e
                }(),
                ei = "".concat("AMP", "_unsent"),
                eo = "$default_instance",
                ea = "https://api2.amplitude.com/2/httpapi",
                es = "dclid",
                el = "fbclid",
                eu = "gbraid",
                ec = "gclid",
                ed = "ko_click_id",
                ef = "li_fat_id",
                ep = "msclkid",
                eh = "rdt_cid",
                eg = "ttclid",
                ev = "twclid",
                em = "wbraid",
                ey = {
                    utm_campaign: void 0,
                    utm_content: void 0,
                    utm_id: void 0,
                    utm_medium: void 0,
                    utm_source: void 0,
                    utm_term: void 0,
                    referrer: void 0,
                    referring_domain: void 0,
                    dclid: void 0,
                    gbraid: void 0,
                    gclid: void 0,
                    fbclid: void 0,
                    ko_click_id: void 0,
                    li_fat_id: void 0,
                    msclkid: void 0,
                    rdt_cid: void 0,
                    ttclid: void 0,
                    twclid: void 0,
                    wbraid: void 0
                },
                eb = ["access-control-allow-origin", "access-control-allow-credentials", "access-control-expose-headers", "access-control-max-age", "access-control-allow-methods", "access-control-allow-headers", "accept-patch", "accept-ranges", "age", "allow", "alt-svc", "cache-control", "connection", "content-disposition", "content-encoding", "content-language", "content-length", "content-location", "content-md5", "content-range", "content-type", "date", "delta-base", "etag", "expires", "im", "last-modified", "link", "location", "permanent", "p3p", "pragma", "proxy-authenticate", "public-key-pins", "retry-after", "server", "status", "strict-transport-security", "trailer", "transfer-encoding", "tk", "upgrade", "vary", "via", "warning", "www-authenticate", "x-b3-traceid", "x-frame-options"],
                ew = ["authorization", "cookie", "set-cookie"],
                eS = function(e) {
                    return void 0 === e && (e = eo), er.getInstance(e)
                },
                eE = function(e, t) {
                    eS(t).identityStore.editIdentity().setUserId(e).commit()
                },
                ex = function(e, t) {
                    eS(t).identityStore.editIdentity().setDeviceId(e).commit()
                };
            ! function(e) {
                e.Unknown = "unknown", e.Skipped = "skipped", e.Success = "success", e.RateLimit = "rate_limit", e.PayloadTooLarge = "payload_too_large", e.Invalid = "invalid", e.Failed = "failed", e.Timeout = "Timeout", e.SystemError = "SystemError"
            }(o || (o = {}));
            var eT = function(e, t) {
                    var n = Math.max(t, 1);
                    return e.reduce(function(e, t, r) {
                        var i = Math.floor(r / n);
                        return e[i] || (e[i] = []), e[i].push(t), e
                    }, [])
                },
                ek = function(e, t, n) {
                    return void 0 === t && (t = 0), void 0 === n && (n = o.Unknown), {
                        event: e,
                        code: t,
                        message: n
                    }
                },
                eP = "Amplitude Logger ",
                eC = function() {
                    function e() {
                        this.logLevel = i.None
                    }
                    return e.prototype.disable = function() {
                        this.logLevel = i.None
                    }, e.prototype.enable = function(e) {
                        void 0 === e && (e = i.Warn), this.logLevel = e
                    }, e.prototype.log = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this.logLevel < i.Verbose || console.log("".concat(eP, "[Log]: ").concat(e.join(" ")))
                    }, e.prototype.warn = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this.logLevel < i.Warn || console.warn("".concat(eP, "[Warn]: ").concat(e.join(" ")))
                    }, e.prototype.error = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this.logLevel < i.Error || console.error("".concat(eP, "[Error]: ").concat(e.join(" ")))
                    }, e.prototype.debug = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this.logLevel < i.Debug || console.log("".concat(eP, "[Debug]: ").concat(e.join(" ")))
                    }, e
                }(),
                e_ = function() {
                    return {
                        flushMaxRetries: 12,
                        flushQueueSize: 200,
                        flushIntervalMillis: 1e4,
                        instanceName: eo,
                        logLevel: i.Warn,
                        loggerProvider: new eC,
                        offline: !1,
                        optOut: !1,
                        serverUrl: ea,
                        serverZone: "US",
                        useBatch: !1
                    }
                },
                eI = function() {
                    function e(e) {
                        this._optOut = !1;
                        var t, n, r, i, o = e_();
                        this.apiKey = e.apiKey, this.flushIntervalMillis = null != (t = e.flushIntervalMillis) ? t : o.flushIntervalMillis, this.flushMaxRetries = e.flushMaxRetries || o.flushMaxRetries, this.flushQueueSize = e.flushQueueSize || o.flushQueueSize, this.instanceName = e.instanceName || o.instanceName, this.loggerProvider = e.loggerProvider || o.loggerProvider, this.logLevel = null != (n = e.logLevel) ? n : o.logLevel, this.minIdLength = e.minIdLength, this.plan = e.plan, this.ingestionMetadata = e.ingestionMetadata, this.offline = void 0 !== e.offline ? e.offline : o.offline, this.optOut = null != (r = e.optOut) ? r : o.optOut, this.serverUrl = e.serverUrl, this.serverZone = e.serverZone || o.serverZone, this.storageProvider = e.storageProvider, this.transportProvider = e.transportProvider, this.useBatch = null != (i = e.useBatch) ? i : o.useBatch, this.loggerProvider.enable(this.logLevel);
                        var a = eA(e.serverUrl, e.serverZone, e.useBatch);
                        this.serverZone = a.serverZone, this.serverUrl = a.serverUrl
                    }
                    return Object.defineProperty(e.prototype, "optOut", {
                        get: function() {
                            return this._optOut
                        },
                        set: function(e) {
                            this._optOut = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e
                }(),
                eA = function(e, t, n) {
                    if (void 0 === e && (e = ""), void 0 === t && (t = e_().serverZone), void 0 === n && (n = e_().useBatch), e) return {
                        serverUrl: e,
                        serverZone: void 0
                    };
                    var r, i = ["US", "EU"].includes(t) ? t : e_().serverZone;
                    return {
                        serverZone: i,
                        serverUrl: (r = n, "EU" === i ? r ? "https://api.eu.amplitude.com/batch" : "https://api.eu.amplitude.com/2/httpapi" : r ? "https://api2.amplitude.com/batch" : ea)
                    }
                },
                eO = function() {
                    function e() {
                        this.sdk = {
                            metrics: {
                                histogram: {}
                            }
                        }
                    }
                    return e.prototype.recordHistogram = function(e, t) {
                        this.sdk.metrics.histogram[e] = t
                    }, e
                }();

            function eM(e) {
                return e >= 200 && e < 300
            }

            function eL(e) {
                var t = "";
                try {
                    "body" in e && (t = JSON.stringify(e.body, null, 2))
                } catch (e) {}
                return t
            }
            var eR = function() {
                    function e(e) {
                        this.name = "amplitude", this.type = "destination", this.retryTimeout = 1e3, this.throttleTimeout = 3e4, this.storageKey = "", this.scheduleId = null, this.scheduledTimeout = 0, this.flushId = null, this.queue = [], this.diagnosticsClient = null == e ? void 0 : e.diagnosticsClient
                    }
                    return e.prototype.setup = function(e) {
                        var t;
                        return b(this, void 0, void 0, function() {
                            var n, r = this;
                            return w(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.config = e, this.storageKey = "".concat(ei, "_").concat(this.config.apiKey.substring(0, 10)), [4, null == (t = this.config.storageProvider) ? void 0 : t.get(this.storageKey)];
                                    case 1:
                                        return (n = i.sent()) && n.length > 0 && Promise.all(n.map(function(e) {
                                            return r.execute(e)
                                        })).catch(), [2, Promise.resolve(void 0)]
                                }
                            })
                        })
                    }, e.prototype.execute = function(e) {
                        var t = this;
                        return e.insert_id || (e.insert_id = L()), new Promise(function(n) {
                            t.queue.push({
                                event: e,
                                attempts: 0,
                                callback: function(e) {
                                    return n(e)
                                },
                                timeout: 0
                            }), t.schedule(t.config.flushIntervalMillis), t.saveEvents()
                        })
                    }, e.prototype.removeEventsExceedFlushMaxRetries = function(e) {
                        var t = this;
                        return e.filter(function(e) {
                            return e.attempts += 1, e.attempts < t.config.flushMaxRetries || (t.fulfillRequest([e], 500, "Event rejected due to exceeded retry count"), !1)
                        })
                    }, e.prototype.scheduleEvents = function(e) {
                        var t = this;
                        e.forEach(function(e) {
                            t.schedule(0 === e.timeout ? t.config.flushIntervalMillis : e.timeout)
                        })
                    }, e.prototype.schedule = function(e) {
                        var t = this;
                        if (!this.config.offline && (null === this.scheduleId || this.scheduleId && e > this.scheduledTimeout)) {
                            this.scheduleId && clearTimeout(this.scheduleId), this.scheduledTimeout = e, this.scheduleId = setTimeout(function() {
                                t.queue = t.queue.map(function(e) {
                                    return e.timeout = 0, e
                                }), t.flush(!0)
                            }, e);
                            return
                        }
                    }, e.prototype.resetSchedule = function() {
                        this.scheduleId = null, this.scheduledTimeout = 0
                    }, e.prototype.flush = function(e) {
                        return void 0 === e && (e = !1), b(this, void 0, void 0, function() {
                            var t, n, r = this;
                            return w(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.config.offline) return this.resetSchedule(), this.config.loggerProvider.debug("Skipping flush while offline."), [2];
                                        if (this.flushId) return this.resetSchedule(), this.config.loggerProvider.debug("Skipping flush because previous flush has not resolved."), [2];
                                        return this.flushId = this.scheduleId, this.resetSchedule(), t = [], n = [], this.queue.forEach(function(e) {
                                            return 0 === e.timeout ? t.push(e) : n.push(e)
                                        }), [4, eT(t, this.config.flushQueueSize).reduce(function(t, n) {
                                            return b(r, void 0, void 0, function() {
                                                return w(this, function(r) {
                                                    switch (r.label) {
                                                        case 0:
                                                            return [4, t];
                                                        case 1:
                                                            return r.sent(), [4, this.send(n, e)];
                                                        case 2:
                                                            return [2, r.sent()]
                                                    }
                                                })
                                            })
                                        }, Promise.resolve())];
                                    case 1:
                                        return i.sent(), this.flushId = null, this.scheduleEvents(this.queue), [2]
                                }
                            })
                        })
                    }, e.prototype.send = function(e, t) {
                        var n;
                        return void 0 === t && (t = !0), b(this, void 0, void 0, function() {
                            var r, i, a, s;
                            return w(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        if (!this.config.apiKey) return [2, this.fulfillRequest(e, 400, "Event rejected due to missing API key")];
                                        r = {
                                            api_key: this.config.apiKey,
                                            events: e.map(function(e) {
                                                var t = e.event;
                                                return t.extra, y(t, ["extra"])
                                            }),
                                            options: {
                                                min_id_length: this.config.minIdLength
                                            },
                                            client_upload_time: new Date().toISOString(),
                                            request_metadata: this.config.requestMetadata
                                        }, this.config.requestMetadata = new eO, l.label = 1;
                                    case 1:
                                        return l.trys.push([1, 3, , 4]), i = eA(this.config.serverUrl, this.config.serverZone, this.config.useBatch).serverUrl, [4, this.config.transportProvider.send(i, r)];
                                    case 2:
                                        if (null === (a = l.sent())) return this.fulfillRequest(e, 0, "Unexpected error occurred"), [2];
                                        if (!t) return "body" in a ? this.fulfillRequest(e, a.statusCode, "".concat(a.status, ": ").concat(eL(a))) : this.fulfillRequest(e, a.statusCode, a.status), [2];
                                        return this.handleResponse(a, e), [3, 4];
                                    case 3:
                                        var u;
                                        return s = (u = l.sent()) instanceof Error ? u.message : String(u), this.config.loggerProvider.error(s), null == (n = this.diagnosticsClient) || n.recordEvent("analytics.events.unsuccessful.from.catch.error", {
                                            events: e.map(function(e) {
                                                return e.event.event_type
                                            }),
                                            message: s,
                                            stack_trace: T()
                                        }), this.handleResponse({
                                            status: o.Failed,
                                            statusCode: 0
                                        }, e), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.handleResponse = function(e, t) {
                        eM(e.statusCode) || null == (n = this.diagnosticsClient) || n.recordEvent("analytics.events.unsuccessful", {
                            events: t.map(function(e) {
                                return e.event.event_type
                            }),
                            code: e.statusCode,
                            status: e.status,
                            body: eL(e),
                            stack_trace: T()
                        });
                        var n, r = e.status;
                        switch (r) {
                            case o.Success:
                                this.handleSuccessResponse(e, t);
                                break;
                            case o.Invalid:
                                this.handleInvalidResponse(e, t);
                                break;
                            case o.PayloadTooLarge:
                                this.handlePayloadTooLargeResponse(e, t);
                                break;
                            case o.RateLimit:
                                this.handleRateLimitResponse(e, t);
                                break;
                            default:
                                this.config.loggerProvider.warn("{code: 0, error: \"Status '".concat(r, "' provided for ").concat(t.length, ' events"}')), this.handleOtherResponse(t)
                        }
                    }, e.prototype.handleSuccessResponse = function(e, t) {
                        this.fulfillRequest(t, e.statusCode, "Event tracked successfully")
                    }, e.prototype.handleInvalidResponse = function(e, t) {
                        var n = this;
                        if (e.body.missingField || e.body.error.startsWith("Invalid API key")) return void this.fulfillRequest(t, e.statusCode, e.body.error);
                        var r = new Set(x(x(x(x([], E(Object.values(e.body.eventsWithInvalidFields)), !1), E(Object.values(e.body.eventsWithMissingFields)), !1), E(Object.values(e.body.eventsWithInvalidIdLengths)), !1), E(e.body.silencedEvents), !1).flat()),
                            i = t.filter(function(t, i) {
                                return !r.has(i) || void n.fulfillRequest([t], e.statusCode, e.body.error)
                            });
                        i.length > 0 && this.config.loggerProvider.warn(eL(e));
                        var o = this.removeEventsExceedFlushMaxRetries(i);
                        this.scheduleEvents(o)
                    }, e.prototype.handlePayloadTooLargeResponse = function(e, t) {
                        if (1 === t.length) return void this.fulfillRequest(t, e.statusCode, e.body.error);
                        this.config.loggerProvider.warn(eL(e)), this.config.flushQueueSize /= 2;
                        var n = this.removeEventsExceedFlushMaxRetries(t);
                        this.scheduleEvents(n)
                    }, e.prototype.handleRateLimitResponse = function(e, t) {
                        var n = this,
                            r = Object.keys(e.body.exceededDailyQuotaUsers),
                            i = Object.keys(e.body.exceededDailyQuotaDevices),
                            o = e.body.throttledEvents,
                            a = new Set(r),
                            s = new Set(i),
                            l = new Set(o),
                            u = t.filter(function(t, r) {
                                return t.event.user_id && a.has(t.event.user_id) || t.event.device_id && s.has(t.event.device_id) ? void n.fulfillRequest([t], e.statusCode, e.body.error) : (l.has(r) && (t.timeout = n.throttleTimeout), !0)
                            });
                        u.length > 0 && this.config.loggerProvider.warn(eL(e));
                        var c = this.removeEventsExceedFlushMaxRetries(u);
                        this.scheduleEvents(c)
                    }, e.prototype.handleOtherResponse = function(e) {
                        var t = this,
                            n = e.map(function(e) {
                                return e.timeout = e.attempts * t.retryTimeout, e
                            }),
                            r = this.removeEventsExceedFlushMaxRetries(n);
                        this.scheduleEvents(r)
                    }, e.prototype.fulfillRequest = function(e, t, n) {
                        var r, i, o;
                        eM(t) ? null == (o = this.diagnosticsClient) || o.increment("analytics.events.sent", e.length) : (null == (r = this.diagnosticsClient) || r.increment("analytics.events.dropped", e.length), null == (i = this.diagnosticsClient) || i.recordEvent("analytics.events.dropped", {
                            events: e.map(function(e) {
                                return e.event.event_type
                            }),
                            code: t,
                            message: n,
                            stack_trace: T()
                        })), this.removeEvents(e), e.forEach(function(e) {
                            return e.callback(ek(e.event, t, n))
                        })
                    }, e.prototype.saveEvents = function() {
                        if (this.config.storageProvider) {
                            var e = this.queue.map(function(e) {
                                return e.event
                            });
                            this.config.storageProvider.set(this.storageKey, e)
                        }
                    }, e.prototype.removeEvents = function(e) {
                        this.queue = this.queue.filter(function(t) {
                            return !e.some(function(e) {
                                return e.event.insert_id === t.event.insert_id
                            })
                        }), this.saveEvents()
                    }, e
                }(),
                eN = function() {
                    function e() {
                        this.name = "identity", this.type = "before", this.identityStore = eS().identityStore
                    }
                    return e.prototype.execute = function(e) {
                        return b(this, void 0, void 0, function() {
                            var t;
                            return w(this, function(n) {
                                return (t = e.user_properties) && this.identityStore.editIdentity().updateUserProperties(t).commit(), [2, e]
                            })
                        })
                    }, e.prototype.setup = function(e) {
                        return b(this, void 0, void 0, function() {
                            return w(this, function(t) {
                                return e.instanceName && (this.identityStore = eS(e.instanceName).identityStore), [2]
                            })
                        })
                    }, e
                }(),
                ej = function(e) {
                    if (Object.keys(e).length > 1e3) return !1;
                    for (var t in e) {
                        var n = e[t];
                        if (!eD(t, n)) return !1
                    }
                    return !0
                },
                eD = function(e, t) {
                    var n, r;
                    if ("string" != typeof e) return !1;
                    if (Array.isArray(t)) {
                        var i = !0;
                        try {
                            for (var o = S(t), a = o.next(); !a.done; a = o.next()) {
                                var s = a.value;
                                if (Array.isArray(s)) return !1;
                                if ("object" == typeof s) i = i && ej(s);
                                else if (!["number", "string"].includes(typeof s)) return !1;
                                if (!i) return !1
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                a && !a.done && (r = o.return) && r.call(o)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                    } else if (null == t) return !1;
                    else if ("object" == typeof t) return ej(t);
                    else if (!["number", "string", "boolean"].includes(typeof t)) return !1;
                    return !0
                },
                eF = function() {
                    function e() {
                        this._propertySet = new Set, this._properties = {}
                    }
                    return e.prototype.getUserProperties = function() {
                        return m({}, this._properties)
                    }, e.prototype.set = function(e, t) {
                        return this._safeSet(a.SET, e, t), this
                    }, e.prototype.setOnce = function(e, t) {
                        return this._safeSet(a.SET_ONCE, e, t), this
                    }, e.prototype.append = function(e, t) {
                        return this._safeSet(a.APPEND, e, t), this
                    }, e.prototype.prepend = function(e, t) {
                        return this._safeSet(a.PREPEND, e, t), this
                    }, e.prototype.postInsert = function(e, t) {
                        return this._safeSet(a.POSTINSERT, e, t), this
                    }, e.prototype.preInsert = function(e, t) {
                        return this._safeSet(a.PREINSERT, e, t), this
                    }, e.prototype.remove = function(e, t) {
                        return this._safeSet(a.REMOVE, e, t), this
                    }, e.prototype.add = function(e, t) {
                        return this._safeSet(a.ADD, e, t), this
                    }, e.prototype.unset = function(e) {
                        return this._safeSet(a.UNSET, e, "-"), this
                    }, e.prototype.clearAll = function() {
                        return this._properties = {}, this._properties[a.CLEAR_ALL] = "-", this
                    }, e.prototype._safeSet = function(e, t, n) {
                        if (this._validate(e, t, n)) {
                            var r = this._properties[e];
                            return void 0 === r && (r = {}, this._properties[e] = r), r[t] = n, this._propertySet.add(t), !0
                        }
                        return !1
                    }, e.prototype._validate = function(e, t, n) {
                        return !(void 0 !== this._properties[a.CLEAR_ALL] || this._propertySet.has(t)) && (e === a.ADD ? "number" == typeof n : e === a.UNSET || e === a.REMOVE || eD(t, n))
                    }, e
                }();
            ! function(e) {
                e.SET = "$set", e.SET_ONCE = "$setOnce", e.ADD = "$add", e.APPEND = "$append", e.PREPEND = "$prepend", e.REMOVE = "$remove", e.PREINSERT = "$preInsert", e.POSTINSERT = "$postInsert", e.UNSET = "$unset", e.CLEAR_ALL = "$clearAll"
            }(a || (a = {}));
            var ez = [a.CLEAR_ALL, a.UNSET, a.SET, a.SET_ONCE, a.ADD, a.APPEND, a.PREPEND, a.PREINSERT, a.POSTINSERT, a.REMOVE];
            ! function(e) {
                e.SET = "$set", e.SET_ONCE = "$setOnce", e.ADD = "$add", e.APPEND = "$append", e.PREPEND = "$prepend", e.REMOVE = "$remove", e.PREINSERT = "$preInsert", e.POSTINSERT = "$postInsert", e.UNSET = "$unset", e.CLEAR_ALL = "$clearAll"
            }(s || (s = {})),
            function(e) {
                e.IDENTIFY = "$identify", e.GROUP_IDENTIFY = "$groupidentify", e.REVENUE = "revenue_amount"
            }(l || (l = {}));
            var eq = function(e, t) {
                    return m(m({}, t), {
                        event_type: l.IDENTIFY,
                        user_properties: e.getUserProperties()
                    })
                },
                eU = function(e, t, n, r) {
                    var i;
                    return m(m({}, r), {
                        event_type: l.GROUP_IDENTIFY,
                        group_properties: n.getUserProperties(),
                        groups: ((i = {})[e] = t, i)
                    })
                },
                e$ = function(e, t, n) {
                    var r, i = new eF;
                    return i.set(e, t), m(m({}, n), {
                        event_type: l.IDENTIFY,
                        user_properties: i.getUserProperties(),
                        groups: ((r = {})[e] = t, r)
                    })
                },
                eB = function() {
                    function e() {
                        this.productId = "", this.quantity = 1, this.price = 0
                    }
                    return e.prototype.setProductId = function(e) {
                        return this.productId = e, this
                    }, e.prototype.setQuantity = function(e) {
                        return e > 0 && (this.quantity = e), this
                    }, e.prototype.setPrice = function(e) {
                        return this.price = e, this
                    }, e.prototype.setRevenueType = function(e) {
                        return this.revenueType = e, this
                    }, e.prototype.setCurrency = function(e) {
                        return this.currency = e, this
                    }, e.prototype.setRevenue = function(e) {
                        return this.revenue = e, this
                    }, e.prototype.setReceipt = function(e) {
                        return this.receipt = e, this
                    }, e.prototype.setReceiptSig = function(e) {
                        return this.receiptSig = e, this
                    }, e.prototype.setEventProperties = function(e) {
                        return ej(e) && (this.properties = e), this
                    }, e.prototype.getEventProperties = function() {
                        var e = this.properties ? m({}, this.properties) : {};
                        return e[u.REVENUE_PRODUCT_ID] = this.productId, e[u.REVENUE_QUANTITY] = this.quantity, e[u.REVENUE_PRICE] = this.price, e[u.REVENUE_TYPE] = this.revenueType, e[u.REVENUE_CURRENCY] = this.currency, e[u.REVENUE] = this.revenue, e[u.RECEIPT] = this.receipt, e[u.RECEIPT_SIG] = this.receiptSig, e
                    }, e
                }();
            ! function(e) {
                e.REVENUE_PRODUCT_ID = "$productId", e.REVENUE_QUANTITY = "$quantity", e.REVENUE_PRICE = "$price", e.REVENUE_TYPE = "$revenueType", e.REVENUE_CURRENCY = "$currency", e.REVENUE = "$revenue", e.RECEIPT = "$receipt", e.RECEIPT_SIG = "$receiptSig"
            }(u || (u = {}));
            var eH = function(e, t) {
                    return void 0 === t && (t = Date.now()), Date.now() - t > e
                },
                eV = function() {
                    function e(e) {
                        this.client = e, this.queue = [], this.applying = !1, this.plugins = []
                    }
                    return e.prototype.register = function(e, t) {
                        var n, r;
                        return b(this, void 0, void 0, function() {
                            return w(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.plugins.some(function(t) {
                                                return t.name === e.name
                                            })) return this.loggerProvider.warn("Plugin with name ".concat(e.name, " already exists, skipping registration")), [2];
                                        return void 0 === e.name && (e.name = L(), this.loggerProvider.warn("Plugin name is undefined. \n      Generating a random UUID for plugin name: ".concat(e.name, ". \n      Set a name for the plugin to prevent it from being added multiple times."))), e.type = null != (n = e.type) ? n : "enrichment", [4, null == (r = e.setup) ? void 0 : r.call(e, t, this.client)];
                                    case 1:
                                        return i.sent(), this.plugins.push(e), [2]
                                }
                            })
                        })
                    }, e.prototype.deregister = function(e, t) {
                        var n;
                        return b(this, void 0, void 0, function() {
                            var r, i;
                            return w(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (-1 === (r = this.plugins.findIndex(function(t) {
                                                return t.name === e
                                            }))) return t.loggerProvider.warn("Plugin with name ".concat(e, " does not exist, skipping deregistration")), [2];
                                        return i = this.plugins[r], this.plugins.splice(r, 1), [4, null == (n = i.teardown) ? void 0 : n.call(i)];
                                    case 1:
                                        return o.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype.reset = function(e) {
                        this.applying = !1, this.plugins.map(function(e) {
                            var t;
                            return null == (t = e.teardown) ? void 0 : t.call(e)
                        }), this.plugins = [], this.client = e
                    }, e.prototype.push = function(e) {
                        var t = this;
                        return new Promise(function(n) {
                            t.queue.push([e, n]), t.scheduleApply(0)
                        })
                    }, e.prototype.scheduleApply = function(e) {
                        var t = this;
                        this.applying || (this.applying = !0, setTimeout(function() {
                            t.apply(t.queue.shift()).then(function() {
                                t.applying = !1, t.queue.length > 0 && t.scheduleApply(0)
                            })
                        }, e))
                    }, e.prototype.apply = function(e) {
                        return b(this, void 0, void 0, function() {
                            var t, n, r, i, o, a, s, l, u, c, d, f, p, h, g;
                            return w(this, function(v) {
                                switch (v.label) {
                                    case 0:
                                        if (!e) return [2];
                                        t = E(e, 1)[0], n = E(e, 2)[1], this.loggerProvider.log("Timeline.apply: Initial event", t), r = this.plugins.filter(function(e) {
                                            return "before" === e.type
                                        }), v.label = 1;
                                    case 1:
                                        v.trys.push([1, 6, 7, 8]), o = (i = S(r)).next(), v.label = 2;
                                    case 2:
                                        if (o.done) return [3, 5];
                                        if (!(a = o.value).execute) return [3, 4];
                                        return [4, a.execute(m({}, t))];
                                    case 3:
                                        if (null === (s = v.sent())) return this.loggerProvider.log("Timeline.apply: Event filtered out by before plugin '".concat(String(a.name), "', event: ").concat(JSON.stringify(t))), n({
                                            event: t,
                                            code: 0,
                                            message: ""
                                        }), [2];
                                        t = s, this.loggerProvider.log("Timeline.apply: Event after before plugin '".concat(String(a.name), "', event: ").concat(JSON.stringify(t))), v.label = 4;
                                    case 4:
                                        return o = i.next(), [3, 2];
                                    case 5:
                                        return [3, 8];
                                    case 6:
                                        return f = {
                                            error: v.sent()
                                        }, [3, 8];
                                    case 7:
                                        try {
                                            o && !o.done && (p = i.return) && p.call(i)
                                        } finally {
                                            if (f) throw f.error
                                        }
                                        return [7];
                                    case 8:
                                        l = this.plugins.filter(function(e) {
                                            return "enrichment" === e.type || void 0 === e.type
                                        }), v.label = 9;
                                    case 9:
                                        v.trys.push([9, 14, 15, 16]), c = (u = S(l)).next(), v.label = 10;
                                    case 10:
                                        if (c.done) return [3, 13];
                                        if (!(a = c.value).execute) return [3, 12];
                                        return [4, a.execute(m({}, t))];
                                    case 11:
                                        if (null === (s = v.sent())) return this.loggerProvider.log("Timeline.apply: Event filtered out by enrichment plugin '".concat(String(a.name), "', event: ").concat(JSON.stringify(t))), n({
                                            event: t,
                                            code: 0,
                                            message: ""
                                        }), [2];
                                        t = s, this.loggerProvider.log("Timeline.apply: Event after enrichment plugin '".concat(String(a.name), "', event: ").concat(JSON.stringify(t))), v.label = 12;
                                    case 12:
                                        return c = u.next(), [3, 10];
                                    case 13:
                                        return [3, 16];
                                    case 14:
                                        return h = {
                                            error: v.sent()
                                        }, [3, 16];
                                    case 15:
                                        try {
                                            c && !c.done && (g = u.return) && g.call(u)
                                        } finally {
                                            if (h) throw h.error
                                        }
                                        return [7];
                                    case 16:
                                        return d = this.plugins.filter(function(e) {
                                            return "destination" === e.type
                                        }), this.loggerProvider.log("Timeline.apply: Final event before destinations, event: ".concat(JSON.stringify(t))), Promise.all(d.map(function(e) {
                                            var n = m({}, t);
                                            return e.execute(n).catch(function(e) {
                                                return ek(n, 0, String(e))
                                            })
                                        })).then(function(e) {
                                            var r = E(e, 1)[0] || ek(t, 100, "Event not tracked, no destination plugins on the instance");
                                            n(r)
                                        }), [2]
                                }
                            })
                        })
                    }, e.prototype.flush = function() {
                        return b(this, void 0, void 0, function() {
                            var e, t = this;
                            return w(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return e = this.queue, this.queue = [], [4, Promise.all(e.map(function(e) {
                                            return t.apply(e)
                                        }))];
                                    case 1:
                                        return n.sent(), [4, Promise.all(this.plugins.filter(function(e) {
                                            return "destination" === e.type
                                        }).map(function(e) {
                                            return e.flush && e.flush()
                                        }))];
                                    case 2:
                                        return n.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype.onIdentityChanged = function(e) {
                        this.plugins.forEach(function(t) {
                            var n;
                            null == (n = t.onIdentityChanged) || n.call(t, e)
                        })
                    }, e.prototype.onSessionIdChanged = function(e) {
                        this.plugins.forEach(function(t) {
                            var n;
                            null == (n = t.onSessionIdChanged) || n.call(t, e)
                        })
                    }, e.prototype.onOptOutChanged = function(e) {
                        this.plugins.forEach(function(t) {
                            var n;
                            null == (n = t.onOptOutChanged) || n.call(t, e)
                        })
                    }, e.prototype.onReset = function() {
                        this.plugins.forEach(function(e) {
                            var t;
                            null == (t = e.onReset) || t.call(e)
                        })
                    }, e
                }(),
                eG = function() {
                    function e(e) {
                        void 0 === e && (e = "$default"), this.initializing = !1, this.isReady = !1, this.q = [], this.dispatchQ = [], this.logEvent = this.track.bind(this), this.timeline = new eV(this), this.name = e
                    }
                    return e.prototype._init = function(e) {
                        return b(this, void 0, void 0, function() {
                            return w(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.config = e, this.timeline.reset(this), this.timeline.loggerProvider = this.config.loggerProvider, [4, this.runQueuedFunctions("q")];
                                    case 1:
                                        return t.sent(), this.isReady = !0, [2]
                                }
                            })
                        })
                    }, e.prototype.runQueuedFunctions = function(e) {
                        return b(this, void 0, void 0, function() {
                            var t, n, r, i, o, a;
                            return w(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        t = this[e], this[e] = [], s.label = 1;
                                    case 1:
                                        s.trys.push([1, 8, 9, 10]), r = (n = S(t)).next(), s.label = 2;
                                    case 2:
                                        if (r.done) return [3, 7];
                                        if (!((i = (0, r.value)()) && "promise" in i)) return [3, 4];
                                        return [4, i.promise];
                                    case 3:
                                        return s.sent(), [3, 6];
                                    case 4:
                                        return [4, i];
                                    case 5:
                                        s.sent(), s.label = 6;
                                    case 6:
                                        return r = n.next(), [3, 2];
                                    case 7:
                                        return [3, 10];
                                    case 8:
                                        return o = {
                                            error: s.sent()
                                        }, [3, 10];
                                    case 9:
                                        try {
                                            r && !r.done && (a = n.return) && a.call(n)
                                        } finally {
                                            if (o) throw o.error
                                        }
                                        return [7];
                                    case 10:
                                        if (!this[e].length) return [3, 12];
                                        return [4, this.runQueuedFunctions(e)];
                                    case 11:
                                        s.sent(), s.label = 12;
                                    case 12:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.track = function(e, t, n) {
                        var r = m(m(m({}, "string" == typeof e ? {
                            event_type: e
                        } : e), n), t && {
                            event_properties: t
                        });
                        return I(this.dispatch(r))
                    }, e.prototype.identify = function(e, t) {
                        var n = eq(e, t);
                        return I(this.dispatch(n))
                    }, e.prototype.groupIdentify = function(e, t, n, r) {
                        var i = eU(e, t, n, r);
                        return I(this.dispatch(i))
                    }, e.prototype.setGroup = function(e, t, n) {
                        var r = e$(e, t, n);
                        return I(this.dispatch(r))
                    }, e.prototype.revenue = function(e, t) {
                        var n = m(m({}, t), {
                            event_type: l.REVENUE,
                            event_properties: e.getEventProperties()
                        });
                        return I(this.dispatch(n))
                    }, e.prototype.add = function(e) {
                        return this.isReady ? this._addPlugin(e) : (this.q.push(this._addPlugin.bind(this, e)), I())
                    }, e.prototype._addPlugin = function(e) {
                        return I(this.timeline.register(e, this.config))
                    }, e.prototype.remove = function(e) {
                        return this.isReady ? this._removePlugin(e) : (this.q.push(this._removePlugin.bind(this, e)), I())
                    }, e.prototype._removePlugin = function(e) {
                        return I(this.timeline.deregister(e, this.config))
                    }, e.prototype.dispatchWithCallback = function(e, t) {
                        if (!this.isReady) return t(ek(e, 0, "Client not initialized"));
                        this.process(e).then(t)
                    }, e.prototype.dispatch = function(e) {
                        return b(this, void 0, void 0, function() {
                            var t = this;
                            return w(this, function(n) {
                                return this.isReady ? [2, this.process(e)] : [2, new Promise(function(n) {
                                    t.dispatchQ.push(t.dispatchWithCallback.bind(t, e, n))
                                })]
                            })
                        })
                    }, e.prototype.getOperationAppliedUserProperties = function(e) {
                        var t = {};
                        if (void 0 === e) return t;
                        var n = {};
                        return Object.keys(e).forEach(function(t) {
                            Object.values(s).includes(t) || (n[t] = e[t])
                        }), ez.forEach(function(n) {
                            if (Object.keys(e).includes(n)) {
                                var r = e[n];
                                switch (n) {
                                    case s.CLEAR_ALL:
                                        Object.keys(t).forEach(function(e) {
                                            delete t[e]
                                        });
                                        break;
                                    case s.UNSET:
                                        Object.keys(r).forEach(function(e) {
                                            delete t[e]
                                        });
                                        break;
                                    case s.SET:
                                        Object.assign(t, r)
                                }
                            }
                        }), Object.assign(t, n), t
                    }, e.prototype.process = function(e) {
                        return b(this, void 0, void 0, function() {
                            var t, n, r;
                            return w(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (i.trys.push([0, 2, , 3]), this.config.optOut) return [2, ek(e, 0, "Event skipped due to optOut config")];
                                        return e.event_type === l.IDENTIFY && (t = this.getOperationAppliedUserProperties(e.user_properties), this.timeline.onIdentityChanged({
                                            userProperties: t
                                        })), [4, this.timeline.push(e)];
                                    case 1:
                                        return 200 === (n = i.sent()).code ? this.config.loggerProvider.log(n.message) : 100 === n.code ? this.config.loggerProvider.warn(n.message) : this.config.loggerProvider.error(n.message), [2, n];
                                    case 2:
                                        return r = String(i.sent()), this.config.loggerProvider.error(r), [2, n = ek(e, 0, r)];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.setOptOut = function(e) {
                        if (!this.isReady) return void this.q.push(this._setOptOut.bind(this, !!e));
                        this._setOptOut(e)
                    }, e.prototype._setOptOut = function(e) {
                        this.config.optOut !== e && (this.timeline.onOptOutChanged(e), this.config.optOut = !!e)
                    }, e.prototype.flush = function() {
                        return I(this.timeline.flush())
                    }, e.prototype.plugin = function(e) {
                        var t = this.timeline.plugins.find(function(t) {
                            return t.name === e
                        });
                        return void 0 === t ? void this.config.loggerProvider.debug("Cannot find plugin with name ".concat(e)) : t
                    }, e.prototype.plugins = function(e) {
                        return this.timeline.plugins.filter(function(t) {
                            return t instanceof e
                        })
                    }, e
                }(),
                eW = function(e, t) {
                    return "boolean" == typeof e ? e : (null == e ? void 0 : e[t]) !== !1
                },
                eY = function(e) {
                    return eW(e, "attribution")
                },
                eJ = function(e) {
                    return eW(e, "pageViews")
                },
                eK = function(e) {
                    return eW(e, "sessions")
                },
                eX = function(e) {
                    return "boolean" == typeof e ? e : "object" == typeof e && (!0 === e.networkTracking || "object" == typeof e.networkTracking)
                },
                eQ = function(e) {
                    return "boolean" == typeof e ? e : "object" == typeof e && (!0 === e.elementInteractions || "object" == typeof e.elementInteractions)
                },
                eZ = function(e) {
                    return "boolean" == typeof e ? e : "object" == typeof e && (!0 === e.frustrationInteractions || "object" == typeof e.frustrationInteractions)
                },
                e0 = function(e) {
                    if (eQ(e.autocapture) && "object" == typeof e.autocapture && "object" == typeof e.autocapture.elementInteractions) return e.autocapture.elementInteractions
                },
                e1 = function(e) {
                    if (eZ(e.autocapture) && "object" == typeof e.autocapture && "object" == typeof e.autocapture.frustrationInteractions) return e.autocapture.frustrationInteractions
                },
                e2 = function(e) {
                    var t;
                    if (eX(e.autocapture)) {
                        var n = void 0;
                        return "object" == typeof e.autocapture && "object" == typeof e.autocapture.networkTracking ? n = e.autocapture.networkTracking : e.networkTrackingOptions && (n = e.networkTrackingOptions), m(m({}, n), {
                            captureRules: null == (t = null == n ? void 0 : n.captureRules) ? void 0 : t.map(function(t) {
                                var n, r, i;
                                if ((null == (n = t.urls) ? void 0 : n.length) && (null == (r = t.hosts) ? void 0 : r.length)) {
                                    var o = JSON.stringify(t.hosts),
                                        a = JSON.stringify(t.urls);
                                    return null == (i = e.loggerProvider) || i.warn("Found network capture rule with both urls='".concat(a, "' and hosts='").concat(o, "' set. ") + "Definition of urls takes precedence over hosts, so ignoring hosts."), m(m({}, t), {
                                        hosts: void 0
                                    })
                                }
                                return t
                            })
                        })
                    }
                },
                e4 = function(e) {
                    var t, n = function() {
                            return !1
                        },
                        r = void 0,
                        i = e.pageCounter;
                    return eJ(e.defaultTracking) && (n = void 0, t = void 0, e.defaultTracking && "object" == typeof e.defaultTracking && e.defaultTracking.pageViews && "object" == typeof e.defaultTracking.pageViews && ("trackOn" in e.defaultTracking.pageViews && (n = e.defaultTracking.pageViews.trackOn), "trackHistoryChanges" in e.defaultTracking.pageViews && (r = e.defaultTracking.pageViews.trackHistoryChanges), "eventType" in e.defaultTracking.pageViews && e.defaultTracking.pageViews.eventType && (t = e.defaultTracking.pageViews.eventType))), {
                        trackOn: n,
                        trackHistoryChanges: r,
                        eventType: t,
                        pageCounter: i
                    }
                },
                e3 = function(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n],
                            i = r.name,
                            o = r.args,
                            a = r.resolve,
                            s = e && e[i];
                        if ("function" == typeof s) {
                            var l = s.apply(e, o);
                            "function" == typeof a && a(null == l ? void 0 : l.promise)
                        }
                    }
                    return e
                },
                e5 = function(e) {
                    return e && void 0 !== e._q
                },
                e6 = function() {
                    if ("undefined" == typeof navigator) return "";
                    var e, t, n, r, i = navigator.userLanguage;
                    return null != (r = null != (n = null != (t = null == (e = navigator.languages) ? void 0 : e[0]) ? t : navigator.language) ? n : i) ? r : ""
                },
                e7 = "2.32.1",
                e8 = "amplitude-ts",
                e9 = function() {
                    function e() {
                        this.name = "@amplitude/plugin-context-browser", this.type = "before", this.library = "".concat(e8, "/").concat(e7), "undefined" != typeof navigator && (this.userAgent = navigator.userAgent)
                    }
                    return e.prototype.setup = function(e) {
                        return this.config = e, Promise.resolve(void 0)
                    }, e.prototype.execute = function(e) {
                        var t, n;
                        return b(this, void 0, void 0, function() {
                            var r, i, o;
                            return w(this, function(a) {
                                return r = new Date().getTime(), i = null != (t = this.config.lastEventId) ? t : -1, o = null != (n = e.event_id) ? n : i + 1, this.config.lastEventId = o, e.time || (this.config.lastEventTime = r), [2, m(m(m(m(m(m(m(m({
                                    user_id: this.config.userId,
                                    device_id: this.config.deviceId,
                                    session_id: this.config.sessionId,
                                    time: r
                                }, this.config.appVersion && {
                                    app_version: this.config.appVersion
                                }), this.config.trackingOptions.platform && {
                                    platform: "Web"
                                }), this.config.trackingOptions.language && {
                                    language: e6()
                                }), this.config.trackingOptions.ipAddress && {
                                    ip: "$remote"
                                }), {
                                    insert_id: L(),
                                    partner_id: this.config.partnerId,
                                    plan: this.config.plan
                                }), this.config.ingestionMetadata && {
                                    ingestion_metadata: {
                                        source_name: this.config.ingestionMetadata.sourceName,
                                        source_version: this.config.ingestionMetadata.sourceVersion
                                    }
                                }), e), {
                                    event_id: o,
                                    library: this.library,
                                    user_agent: this.userAgent
                                })]
                            })
                        })
                    }, e
                }(),
                te = function() {
                    function e() {
                        this.memoryStorage = new Map
                    }
                    return e.prototype.isEnabled = function() {
                        return b(this, void 0, void 0, function() {
                            return w(this, function(e) {
                                return [2, !0]
                            })
                        })
                    }, e.prototype.get = function(e) {
                        return b(this, void 0, void 0, function() {
                            return w(this, function(t) {
                                return [2, this.memoryStorage.get(e)]
                            })
                        })
                    }, e.prototype.getRaw = function(e) {
                        return b(this, void 0, void 0, function() {
                            var t;
                            return w(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.get(e)];
                                    case 1:
                                        return [2, (t = n.sent()) ? JSON.stringify(t) : void 0]
                                }
                            })
                        })
                    }, e.prototype.set = function(e, t) {
                        return b(this, void 0, void 0, function() {
                            return w(this, function(n) {
                                return this.memoryStorage.set(e, t), [2]
                            })
                        })
                    }, e.prototype.remove = function(e) {
                        return b(this, void 0, void 0, function() {
                            return w(this, function(t) {
                                return this.memoryStorage.delete(e), [2]
                            })
                        })
                    }, e.prototype.reset = function() {
                        return b(this, void 0, void 0, function() {
                            return w(this, function(e) {
                                return this.memoryStorage.clear(), [2]
                            })
                        })
                    }, e
                }(),
                tt = function(e, t, n) {
                    return void 0 === t && (t = ""), void 0 === n && (n = 10), ["AMP", t, e.substring(0, n)].filter(Boolean).join("_")
                },
                tn = function() {
                    function e(e) {
                        this.options = m({}, e)
                    }
                    return e.prototype.isEnabled = function() {
                        return b(this, void 0, void 0, function() {
                            var t, n;
                            return w(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (!O()) return [2, !1];
                                        e.testValue = String(Date.now()), t = new e(this.options), n = "AMP_TEST", r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 4, 5, 7]), [4, t.set(n, e.testValue)];
                                    case 2:
                                        return r.sent(), [4, t.get(n)];
                                    case 3:
                                        return [2, r.sent() === e.testValue];
                                    case 4:
                                        return r.sent(), [2, !1];
                                    case 5:
                                        return [4, t.remove(n)];
                                    case 6:
                                        return r.sent(), [7];
                                    case 7:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.get = function(e) {
                        var t;
                        return b(this, void 0, void 0, function() {
                            var n, r;
                            return w(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.getRaw(e)];
                                    case 1:
                                        if (!(n = i.sent())) return [2, void 0];
                                        try {
                                            if (r = null != (t = tr(n)) ? t : ti(n), void 0 === r) return console.error("Amplitude Logger [Error]: Failed to decode cookie value for key: ".concat(e, ", value: ").concat(n)), [2, void 0];
                                            return [2, JSON.parse(r)]
                                        } catch (t) {
                                            return console.error("Amplitude Logger [Error]: Failed to parse cookie value for key: ".concat(e, ", value: ").concat(n)), [2, void 0]
                                        }
                                }
                            })
                        })
                    }, e.prototype.getRaw = function(e) {
                        var t, n;
                        return b(this, void 0, void 0, function() {
                            var r, i;
                            return w(this, function(o) {
                                return (i = (null != (n = null == (t = null == (r = O()) ? void 0 : r.document) ? void 0 : t.cookie.split("; ")) ? n : []).find(function(t) {
                                    return 0 === t.indexOf(e + "=")
                                })) ? [2, i.substring(e.length + 1)] : [2, void 0]
                            })
                        })
                    }, e.prototype.set = function(e, t) {
                        var n;
                        return b(this, void 0, void 0, function() {
                            var r, i, o, a, s, l, u;
                            return w(this, function(c) {
                                try {
                                    r = null != (n = this.options.expirationDays) ? n : 0, i = null !== t ? r : -1, o = void 0, i && ((a = new Date).setTime(a.getTime() + 24 * i * 36e5), o = a), s = "".concat(e, "=").concat(btoa(encodeURIComponent(JSON.stringify(t)))), o && (s += "; expires=".concat(o.toUTCString())), s += "; path=/", this.options.domain && (s += "; domain=".concat(this.options.domain)), this.options.secure && (s += "; Secure"), this.options.sameSite && (s += "; SameSite=".concat(this.options.sameSite)), (l = O()) && (l.document.cookie = s)
                                } catch (t) {
                                    u = t instanceof Error ? t.message : String(t), console.error("Amplitude Logger [Error]: Failed to set cookie for key: ".concat(e, ". Error: ").concat(u))
                                }
                                return [2]
                            })
                        })
                    }, e.prototype.remove = function(e) {
                        return b(this, void 0, void 0, function() {
                            return w(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.set(e, null)];
                                    case 1:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype.reset = function() {
                        return b(this, void 0, void 0, function() {
                            return w(this, function(e) {
                                return [2]
                            })
                        })
                    }, e
                }(),
                tr = function(e) {
                    try {
                        return decodeURIComponent(atob(e))
                    } catch (e) {
                        return
                    }
                },
                ti = function(e) {
                    try {
                        return decodeURIComponent(atob(decodeURIComponent(e)))
                    } catch (e) {
                        return
                    }
                },
                to = function() {
                    function e() {}
                    return e.prototype.send = function(e, t) {
                        return Promise.resolve(null)
                    }, e.prototype.buildResponse = function(e) {
                        if ("object" != typeof e) return null;
                        var t, n, r, i, a, s, l, u, c, d, f, p, h, g, v, m, y, b, w, S, E, x, T = e.code || 0,
                            k = this.buildStatus(T);
                        switch (k) {
                            case o.Success:
                                return {
                                    status: k,
                                    statusCode: T,
                                    body: {
                                        eventsIngested: null != (t = e.events_ingested) ? t : 0,
                                        payloadSizeBytes: null != (n = e.payload_size_bytes) ? n : 0,
                                        serverUploadTime: null != (r = e.server_upload_time) ? r : 0
                                    }
                                };
                            case o.Invalid:
                                return {
                                    status: k,
                                    statusCode: T,
                                    body: {
                                        error: null != (i = e.error) ? i : "",
                                        missingField: null != (a = e.missing_field) ? a : "",
                                        eventsWithInvalidFields: null != (s = e.events_with_invalid_fields) ? s : {},
                                        eventsWithMissingFields: null != (l = e.events_with_missing_fields) ? l : {},
                                        eventsWithInvalidIdLengths: null != (u = e.events_with_invalid_id_lengths) ? u : {},
                                        epsThreshold: null != (c = e.eps_threshold) ? c : 0,
                                        exceededDailyQuotaDevices: null != (d = e.exceeded_daily_quota_devices) ? d : {},
                                        silencedDevices: null != (f = e.silenced_devices) ? f : [],
                                        silencedEvents: null != (p = e.silenced_events) ? p : [],
                                        throttledDevices: null != (h = e.throttled_devices) ? h : {},
                                        throttledEvents: null != (g = e.throttled_events) ? g : []
                                    }
                                };
                            case o.PayloadTooLarge:
                                return {
                                    status: k,
                                    statusCode: T,
                                    body: {
                                        error: null != (v = e.error) ? v : ""
                                    }
                                };
                            case o.RateLimit:
                                return {
                                    status: k,
                                    statusCode: T,
                                    body: {
                                        error: null != (m = e.error) ? m : "",
                                        epsThreshold: null != (y = e.eps_threshold) ? y : 0,
                                        throttledDevices: null != (b = e.throttled_devices) ? b : {},
                                        throttledUsers: null != (w = e.throttled_users) ? w : {},
                                        exceededDailyQuotaDevices: null != (S = e.exceeded_daily_quota_devices) ? S : {},
                                        exceededDailyQuotaUsers: null != (E = e.exceeded_daily_quota_users) ? E : {},
                                        throttledEvents: null != (x = e.throttled_events) ? x : []
                                    }
                                };
                            case o.Timeout:
                            default:
                                return {
                                    status: k,
                                    statusCode: T
                                }
                        }
                    }, e.prototype.buildStatus = function(e) {
                        return eM(e) ? o.Success : 429 === e ? o.RateLimit : 413 === e ? o.PayloadTooLarge : 408 === e ? o.Timeout : e >= 400 && e < 500 ? o.Invalid : e >= 500 ? o.Failed : o.Unknown
                    }, e
                }(),
                ta = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return v(t, e), t.prototype.send = function(e, t) {
                        return b(this, void 0, void 0, function() {
                            var n, r;
                            return w(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if ("undefined" == typeof fetch) throw Error("FetchTransport is not supported");
                                        return [4, fetch(e, {
                                            headers: {
                                                "Content-Type": "application/json",
                                                Accept: "*/*"
                                            },
                                            body: JSON.stringify(t),
                                            method: "POST"
                                        })];
                                    case 1:
                                        return [4, (n = i.sent()).text()];
                                    case 2:
                                        r = i.sent();
                                        try {
                                            return [2, this.buildResponse(JSON.parse(r))]
                                        } catch (e) {
                                            return [2, this.buildResponse({
                                                code: n.status
                                            })]
                                        }
                                }
                            })
                        })
                    }, t
                }(to),
                ts = function() {
                    function e(e) {
                        this.storage = e
                    }
                    return e.prototype.isEnabled = function() {
                        return b(this, void 0, void 0, function() {
                            var t, n, r;
                            return w(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (!this.storage) return [2, !1];
                                        t = String(Date.now()), n = new e(this.storage), r = "AMP_TEST", i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 4, 5, 7]), [4, n.set(r, t)];
                                    case 2:
                                        return i.sent(), [4, n.get(r)];
                                    case 3:
                                        return [2, i.sent() === t];
                                    case 4:
                                        return i.sent(), [2, !1];
                                    case 5:
                                        return [4, n.remove(r)];
                                    case 6:
                                        return i.sent(), [7];
                                    case 7:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.get = function(e) {
                        return b(this, void 0, void 0, function() {
                            var t;
                            return w(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, this.getRaw(e)];
                                    case 1:
                                        if (!(t = n.sent())) return [2, void 0];
                                        return [2, JSON.parse(t)];
                                    case 2:
                                        return n.sent(), console.error("[Amplitude] Error: Could not get value from storage"), [2, void 0];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.getRaw = function(e) {
                        var t;
                        return b(this, void 0, void 0, function() {
                            return w(this, function(n) {
                                return [2, (null == (t = this.storage) ? void 0 : t.getItem(e)) || void 0]
                            })
                        })
                    }, e.prototype.set = function(e, t) {
                        var n;
                        return b(this, void 0, void 0, function() {
                            return w(this, function(r) {
                                try {
                                    null == (n = this.storage) || n.setItem(e, JSON.stringify(t))
                                } catch (e) {}
                                return [2]
                            })
                        })
                    }, e.prototype.remove = function(e) {
                        var t;
                        return b(this, void 0, void 0, function() {
                            return w(this, function(n) {
                                try {
                                    null == (t = this.storage) || t.removeItem(e)
                                } catch (e) {}
                                return [2]
                            })
                        })
                    }, e.prototype.reset = function() {
                        var e;
                        return b(this, void 0, void 0, function() {
                            return w(this, function(t) {
                                try {
                                    null == (e = this.storage) || e.clear()
                                } catch (e) {}
                                return [2]
                            })
                        })
                    }, e
                }(),
                tl = function(e) {
                    function t(t) {
                        var n, r, i, o = this;
                        try {
                            i = null == (n = O()) ? void 0 : n.localStorage
                        } catch (e) {
                            null == (r = null == t ? void 0 : t.loggerProvider) || r.debug("Failed to access localStorage. error=".concat(JSON.stringify(e))), i = void 0
                        }
                        return (o = e.call(this, i) || this).loggerProvider = null == t ? void 0 : t.loggerProvider, o
                    }
                    return v(t, e), t.prototype.set = function(t, n) {
                        var r;
                        return b(this, void 0, void 0, function() {
                            var i;
                            return w(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (!(Array.isArray(n) && n.length > 1e3)) return [3, 2];
                                        return i = n.length - 1e3, [4, e.prototype.set.call(this, t, n.slice(0, 1e3))];
                                    case 1:
                                        return o.sent(), null == (r = this.loggerProvider) || r.error("Failed to save ".concat(i, " events because the queue length exceeded ").concat(1e3, ".")), [3, 4];
                                    case 2:
                                        return [4, e.prototype.set.call(this, t, n)];
                                    case 3:
                                        o.sent(), o.label = 4;
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }(ts),
                tu = function(e) {
                    function t() {
                        var t;
                        return e.call(this, null == (t = O()) ? void 0 : t.sessionStorage) || this
                    }
                    return v(t, e), t
                }(ts),
                tc = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            done: 4
                        }, t
                    }
                    return v(t, e), t.prototype.send = function(e, t) {
                        return b(this, void 0, void 0, function() {
                            var n = this;
                            return w(this, function(r) {
                                return [2, new Promise(function(r, i) {
                                    "undefined" == typeof XMLHttpRequest && i(Error("XHRTransport is not supported."));
                                    var o = new XMLHttpRequest;
                                    o.open("POST", e, !0), o.onreadystatechange = function() {
                                        if (o.readyState === n.state.done) {
                                            var e = o.responseText;
                                            try {
                                                r(n.buildResponse(JSON.parse(e)))
                                            } catch (e) {
                                                r(n.buildResponse({
                                                    code: o.status
                                                }))
                                            }
                                        }
                                    }, o.setRequestHeader("Content-Type", "application/json"), o.setRequestHeader("Accept", "*/*"), o.send(JSON.stringify(t))
                                })]
                            })
                        })
                    }, t
                }(to),
                td = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return v(t, e), t.prototype.send = function(e, t) {
                        return b(this, void 0, void 0, function() {
                            var n = this;
                            return w(this, function(r) {
                                return [2, new Promise(function(r, i) {
                                    var o = O();
                                    if (!(null == o ? void 0 : o.navigator.sendBeacon)) throw Error("SendBeaconTransport is not supported");
                                    try {
                                        var a = JSON.stringify(t);
                                        if (o.navigator.sendBeacon(e, JSON.stringify(t))) return r(n.buildResponse({
                                            code: 200,
                                            events_ingested: t.events.length,
                                            payload_size_bytes: a.length,
                                            server_upload_time: Date.now()
                                        }));
                                        return r(n.buildResponse({
                                            code: 500
                                        }))
                                    } catch (e) {
                                        i(e)
                                    }
                                })]
                            })
                        })
                    }, t
                }(to),
                tf = function(e) {
                    var t = parseInt(e, 32);
                    if (!isNaN(t)) return t
                },
                tp = function(e) {
                    if (atob && escape && e) try {
                        return decodeURIComponent(escape(atob(e)))
                    } catch (e) {
                        return
                    }
                },
                th = "[Amplitude]",
                tg = "".concat(th, " Form Started"),
                tv = "".concat(th, " Form Submitted"),
                tm = "".concat(th, " File Downloaded"),
                ty = "session_start",
                tb = "session_end",
                tw = "".concat(th, " File Extension"),
                tS = "".concat(th, " File Name"),
                tE = "".concat(th, " Link ID"),
                tx = "".concat(th, " Link Text"),
                tT = "".concat(th, " Link URL"),
                tk = "".concat(th, " Form ID"),
                tP = "".concat(th, " Form Name"),
                tC = "".concat(th, " Form Destination"),
                t_ = "cookie",
                tI = function(e) {
                    function t(t, n, r, o, a, s, l, u, c, d, f, p, h, g, v, m, y, b, w, S, E, x, T, k, P, C, _, I, A, O, M, L, R, N, j, D, F, z, q, U) {
                        void 0 === r && (r = new te), void 0 === o && (o = {
                            domain: "",
                            expiration: 365,
                            sameSite: "Lax",
                            secure: !1,
                            upgrade: !0
                        }), void 0 === u && (u = 1e3), void 0 === c && (c = 5), void 0 === d && (d = 30), void 0 === f && (f = t_), void 0 === m && (m = new eC), void 0 === y && (y = i.Warn), void 0 === w && (w = !1), void 0 === S && (S = !1), void 0 === T && (T = ""), void 0 === k && (k = "US"), void 0 === C && (C = 18e5), void 0 === _ && (_ = new tl({
                            loggerProvider: m
                        })), void 0 === I && (I = {
                            ipAddress: !0,
                            language: !0,
                            platform: !0
                        }), void 0 === A && (A = "fetch"), void 0 === O && (O = !1), void 0 === M && (M = !0), void 0 === F && (F = !0), void 0 === z && (z = 0);
                        var $ = e.call(this, {
                            apiKey: t,
                            storageProvider: _,
                            transportProvider: tO(A)
                        }) || this;
                        return $.apiKey = t, $.appVersion = n, $.cookieOptions = o, $.defaultTracking = a, $.autocapture = s, $.flushIntervalMillis = u, $.flushMaxRetries = c, $.flushQueueSize = d, $.identityStorage = f, $.ingestionMetadata = p, $.instanceName = h, $.loggerProvider = m, $.logLevel = y, $.minIdLength = b, $.offline = w, $.partnerId = E, $.plan = x, $.serverUrl = T, $.serverZone = k, $.sessionTimeout = C, $.storageProvider = _, $.trackingOptions = I, $.transport = A, $.useBatch = O, $.fetchRemoteConfig = M, $.networkTrackingOptions = j, $.identify = D, $.enableDiagnostics = F, $.diagnosticsSampleRate = z, $.diagnosticsClient = q, $.remoteConfig = U, $.version = e7, $._optOut = !1, $._cookieStorage = r, $.deviceId = l, $.lastEventId = g, $.lastEventTime = v, $.optOut = S, $.sessionId = P, $.pageCounter = R, $.userId = L, $.debugLogsEnabled = N, $.loggerProvider.enable(N ? i.Debug : $.logLevel), $.networkTrackingOptions = j, $.identify = D, $.enableDiagnostics = F, $.diagnosticsSampleRate = z, $.diagnosticsClient = q, M && ($.remoteConfig || ($.remoteConfig = {
                            fetchRemoteConfig: M
                        }), $.remoteConfig.fetchRemoteConfig || ($.remoteConfig.fetchRemoteConfig = M)), $
                    }
                    return v(t, e), Object.defineProperty(t.prototype, "cookieStorage", {
                        get: function() {
                            return this._cookieStorage
                        },
                        set: function(e) {
                            this._cookieStorage !== e && (this._cookieStorage = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "deviceId", {
                        get: function() {
                            return this._deviceId
                        },
                        set: function(e) {
                            this._deviceId !== e && (this._deviceId = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "userId", {
                        get: function() {
                            return this._userId
                        },
                        set: function(e) {
                            this._userId !== e && (this._userId = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "sessionId", {
                        get: function() {
                            return this._sessionId
                        },
                        set: function(e) {
                            this._sessionId !== e && (this._sessionId = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "optOut", {
                        get: function() {
                            return this._optOut
                        },
                        set: function(e) {
                            this._optOut !== e && (this._optOut = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "lastEventTime", {
                        get: function() {
                            return this._lastEventTime
                        },
                        set: function(e) {
                            this._lastEventTime !== e && (this._lastEventTime = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "lastEventId", {
                        get: function() {
                            return this._lastEventId
                        },
                        set: function(e) {
                            this._lastEventId !== e && (this._lastEventId = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "pageCounter", {
                        get: function() {
                            return this._pageCounter
                        },
                        set: function(e) {
                            this._pageCounter !== e && (this._pageCounter = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "debugLogsEnabled", {
                        set: function(e) {
                            this._debugLogsEnabled !== e && (this._debugLogsEnabled = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.updateStorage = function() {
                        var e = {
                            deviceId: this._deviceId,
                            userId: this._userId,
                            sessionId: this._sessionId,
                            optOut: this._optOut,
                            lastEventTime: this._lastEventTime,
                            lastEventId: this._lastEventId,
                            pageCounter: this._pageCounter,
                            debugLogsEnabled: this._debugLogsEnabled
                        };
                        this.cookieStorage.set(tt(this.apiKey), e)
                    }, t
                }(eI),
                tA = function(e, t) {
                    switch (void 0 === e && (e = t_), void 0 === t && (t = {}), e) {
                        case "localStorage":
                            return new tl;
                        case "sessionStorage":
                            return new tu;
                        case "none":
                            return new te;
                        default:
                            return new tn(m(m({}, t), {
                                expirationDays: t.expiration
                            }))
                    }
                },
                tO = function(e) {
                    return "xhr" === e ? new tc : "beacon" === e ? new td : new ta
                },
                tM = "data-amp-mask",
                tL = "*****",
                tR = /\b(?:\d[ -]*?){13,16}\b/,
                tN = /(\d{3}-?\d{2}-?\d{4})/g,
                tj = /[^\s@]+@[^\s@.]+\.[^\s@]+/g,
                tD = function(e, t) {
                    if (void 0 === t && (t = []), "string" != typeof e) return "";
                    var n, r, i = e;
                    i = (i = (i = i.replace(tR, tL)).replace(tN, tL)).replace(tj, tL);
                    try {
                        for (var o = S(t), a = o.next(); !a.done; a = o.next()) {
                            var s = a.value;
                            try {
                                i = i.replace(s, tL)
                            } catch (e) {}
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (r = o.return) && r.call(o)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return i
                },
                tF = function(e) {
                    if ("undefined" == typeof document || !document.title) return "";
                    var t = document.querySelector("title");
                    return t && t.hasAttribute(tM) ? tL : e ? e(document.title) : document.title
                },
                tz = function() {
                    function e() {}
                    return e.prototype.parse = function() {
                        return b(this, void 0, void 0, function() {
                            return w(this, function(e) {
                                return [2, m(m(m(m({}, ey), this.getUtmParam()), this.getReferrer()), this.getClickIds())]
                            })
                        })
                    }, e.prototype.getUtmParam = function() {
                        var e = G();
                        return {
                            utm_campaign: e.utm_campaign,
                            utm_content: e.utm_content,
                            utm_id: e.utm_id,
                            utm_medium: e.utm_medium,
                            utm_source: e.utm_source,
                            utm_term: e.utm_term
                        }
                    }, e.prototype.getReferrer = function() {
                        var e, t, n = {
                            referrer: void 0,
                            referring_domain: void 0
                        };
                        try {
                            n.referrer = document.referrer || void 0, n.referring_domain = null != (t = null == (e = n.referrer) ? void 0 : e.split("/")[2]) ? t : void 0
                        } catch (e) {}
                        return n
                    }, e.prototype.getClickIds = function() {
                        var e, t = G();
                        return (e = {})[es] = t[es], e[el] = t[el], e[eu] = t[eu], e[ec] = t[ec], e[ed] = t[ed], e[ef] = t[ef], e[ep] = t[ep], e[eh] = t[eh], e[eg] = t[eg], e[ev] = t[ev], e[em] = t[em], e
                    }, e
                }(),
                tq = function(e) {
                    var t = {};
                    for (var n in e) {
                        var r = e[n];
                        r && (t[n] = r)
                    }
                    return t
                },
                tU = function(e) {
                    void 0 === e && (e = {});
                    var t, n, r = O(),
                        i = void 0,
                        o = !1,
                        a = e.trackOn,
                        s = e.trackHistoryChanges,
                        l = e.eventType,
                        u = void 0 === l ? "[Amplitude] Page Viewed" : l,
                        c = function(e) {
                            var t = e;
                            try {
                                t = decodeURI(e)
                            } catch (e) {
                                null == i || i.error("Malformed URI sequence: ", e)
                            }
                            return t
                        },
                        d = function() {
                            return b(void 0, void 0, void 0, function() {
                                var e, t, n;
                                return w(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return e = c("undefined" != typeof location && location.href || ""), n = {
                                                event_type: u
                                            }, t = [{}], [4, t$()];
                                        case 1:
                                            return [2, (n.event_properties = m.apply(void 0, [m.apply(void 0, t.concat([r.sent()])), {
                                                "[Amplitude] Page Domain": "undefined" != typeof location && location.hostname || "",
                                                "[Amplitude] Page Location": e,
                                                "[Amplitude] Page Path": "undefined" != typeof location && c(location.pathname) || "",
                                                "[Amplitude] Page Title": tF(tD),
                                                "[Amplitude] Page URL": e.split("?")[0]
                                            }]), n)]
                                    }
                                })
                            })
                        },
                        f = function() {
                            return void 0 === a || "function" == typeof a && a()
                        },
                        p = "undefined" != typeof location ? location.href : null,
                        h = function() {
                            return b(void 0, void 0, void 0, function() {
                                var e, n, r, o;
                                return w(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (n = tH(s, e = location.href, p || "") && f(), p = e, !n) return [3, 4];
                                            if (null == i || i.log("Tracking page view event"), null != t) return [3, 1];
                                            return [3, 3];
                                        case 1:
                                            return o = (r = t).track, [4, d()];
                                        case 2:
                                            o.apply(r, [a.sent()]), a.label = 3;
                                        case 3:
                                            a.label = 4;
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        },
                        g = function() {
                            h()
                        };
                    return {
                        name: "@amplitude/plugin-page-view-tracking-browser",
                        type: "enrichment",
                        setup: function(e, a) {
                            return b(void 0, void 0, void 0, function() {
                                var s, l;
                                return w(this, function(u) {
                                    switch (u.label) {
                                        case 0:
                                            if (t = a, n = e, (i = e.loggerProvider).log("Installing @amplitude/plugin-page-view-tracking-browser"), o = !0, r && (r.addEventListener("popstate", g), r.history.pushState = new Proxy(r.history.pushState, {
                                                    apply: function(e, t, n) {
                                                        var r = E(n, 3),
                                                            i = r[0],
                                                            a = r[1],
                                                            s = r[2];
                                                        e.apply(t, [i, a, s]), o && h()
                                                    }
                                                })), !f()) return [3, 2];
                                            return i.log("Tracking page view event"), l = (s = t).track, [4, d()];
                                        case 1:
                                            l.apply(s, [u.sent()]), u.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        },
                        execute: function(e) {
                            return b(void 0, void 0, void 0, function() {
                                var t;
                                return w(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (!("attribution" === a && tB(e))) return [3, 2];
                                            return null == i || i.log("Enriching campaign event to page view event with campaign parameters"), [4, d()];
                                        case 1:
                                            e.event_type = (t = r.sent()).event_type, e.event_properties = m(m({}, e.event_properties), t.event_properties), r.label = 2;
                                        case 2:
                                            return n && e.event_type === u && (n.pageCounter = n.pageCounter ? n.pageCounter + 1 : 1, e.event_properties = m(m({}, e.event_properties), {
                                                "[Amplitude] Page Counter": n.pageCounter
                                            })), [2, e]
                                    }
                                })
                            })
                        },
                        teardown: function() {
                            return b(void 0, void 0, void 0, function() {
                                return w(this, function(e) {
                                    return r && (r.removeEventListener("popstate", g), o = !1), [2]
                                })
                            })
                        }
                    }
                },
                t$ = function() {
                    return b(void 0, void 0, void 0, function() {
                        var e;
                        return w(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return e = tq, [4, new tz().parse()];
                                case 1:
                                    return [2, e.apply(void 0, [t.sent()])]
                            }
                        })
                    })
                },
                tB = function(e) {
                    if ("$identify" === e.event_type && e.user_properties) {
                        var t = e.user_properties,
                            n = t[s.SET] || {},
                            r = t[s.UNSET] || {},
                            i = x(x([], E(Object.keys(n)), !1), E(Object.keys(r)), !1);
                        return Object.keys(ey).every(function(e) {
                            return i.includes(e)
                        })
                    }
                    return !1
                },
                tH = function(e, t, n) {
                    if ("pathOnly" !== e) return t !== n;
                    if ("" == n) return !0;
                    var r = new URL(t),
                        i = new URL(n);
                    return r.origin + r.pathname !== i.origin + i.pathname
                },
                tV = function() {
                    var e, t = [],
                        n = function(e, n, r) {
                            e.addEventListener(n, r), t.push({
                                element: e,
                                type: n,
                                handler: r
                            })
                        },
                        r = function() {
                            t.forEach(function(e) {
                                var t = e.element,
                                    n = e.type,
                                    r = e.handler;
                                null == t || t.removeEventListener(n, r)
                            }), t = []
                        };
                    return {
                        name: "@amplitude/plugin-form-interaction-tracking-browser",
                        type: "enrichment",
                        setup: function(t, r) {
                            return b(void 0, void 0, void 0, function() {
                                var i, o;
                                return w(this, function(a) {
                                    return i = function() {
                                        if (!r) return void t.loggerProvider.warn("Form interaction tracking requires a later version of @amplitude/analytics-browser. Form interaction events are not tracked.");
                                        if ("undefined" != typeof document) {
                                            var i = function(e) {
                                                var t = !1;
                                                n(e, "change", function() {
                                                    var n, i = tW(e);
                                                    t || r.track(tg, ((n = {})[tk] = tG(e.id), n[tP] = tG(e.name), n[tC] = i, n)), t = !0
                                                }), n(e, "submit", function() {
                                                    var n, i, o = tW(e);
                                                    t || r.track(tg, ((n = {})[tk] = tG(e.id), n[tP] = tG(e.name), n[tC] = o, n)), r.track(tv, ((i = {})[tk] = tG(e.id), i[tP] = tG(e.name), i[tC] = o, i)), t = !1
                                                })
                                            };
                                            Array.from(document.getElementsByTagName("form")).forEach(i), "undefined" != typeof MutationObserver && (e = new MutationObserver(function(e) {
                                                e.forEach(function(e) {
                                                    e.addedNodes.forEach(function(e) {
                                                        "FORM" === e.nodeName && i(e), "querySelectorAll" in e && "function" == typeof e.querySelectorAll && Array.from(e.querySelectorAll("form")).map(i)
                                                    })
                                                })
                                            })).observe(document.body, {
                                                subtree: !0,
                                                childList: !0
                                            })
                                        }
                                    }, "complete" === document.readyState ? i() : (o = O()) ? o.addEventListener("load", i) : t.loggerProvider.debug("Form interaction tracking is not installed because global is undefined."), [2]
                                })
                            })
                        },
                        execute: function(e) {
                            return b(void 0, void 0, void 0, function() {
                                return w(this, function(t) {
                                    return [2, e]
                                })
                            })
                        },
                        teardown: function() {
                            return b(void 0, void 0, void 0, function() {
                                return w(this, function(t) {
                                    return null == e || e.disconnect(), r(), [2]
                                })
                            })
                        }
                    }
                },
                tG = function(e) {
                    if ("string" == typeof e) return e
                },
                tW = function(e) {
                    var t = e.getAttribute("action");
                    try {
                        t = new URL(encodeURI(null != t ? t : ""), window.location.href).href
                    } catch (e) {}
                    return t
                },
                tY = function() {
                    var e, t = [],
                        n = function(e, n, r) {
                            e.addEventListener(n, r), t.push({
                                element: e,
                                type: n,
                                handler: r
                            })
                        },
                        r = function() {
                            t.forEach(function(e) {
                                var t = e.element,
                                    n = e.type,
                                    r = e.handler;
                                null == t || t.removeEventListener(n, r)
                            }), t = []
                        };
                    return {
                        name: "@amplitude/plugin-file-download-tracking-browser",
                        type: "enrichment",
                        setup: function(t, r) {
                            return b(void 0, void 0, void 0, function() {
                                var i, o;
                                return w(this, function(a) {
                                    return i = function() {
                                        if (!r) return void t.loggerProvider.warn("File download tracking requires a later version of @amplitude/analytics-browser. File download events are not tracked.");
                                        if ("undefined" != typeof document) {
                                            var i = function(e) {
                                                    try {
                                                        t = new URL(e.href, window.location.href)
                                                    } catch (e) {
                                                        return
                                                    }
                                                    var t, i = o.exec(t.href),
                                                        a = null == i ? void 0 : i[1];
                                                    a && n(e, "click", function() {
                                                        var n;
                                                        a && r.track(tm, ((n = {})[tw] = a, n[tS] = t.pathname, n[tE] = e.id, n[tx] = e.text, n[tT] = e.href, n))
                                                    })
                                                },
                                                o = /\.(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma)(\?.+)?$/;
                                            Array.from(document.getElementsByTagName("a")).forEach(i), "undefined" != typeof MutationObserver && (e = new MutationObserver(function(e) {
                                                e.forEach(function(e) {
                                                    e.addedNodes.forEach(function(e) {
                                                        "A" === e.nodeName && i(e), "querySelectorAll" in e && "function" == typeof e.querySelectorAll && Array.from(e.querySelectorAll("a")).map(i)
                                                    })
                                                })
                                            })).observe(document.body, {
                                                subtree: !0,
                                                childList: !0
                                            })
                                        }
                                    }, "complete" === document.readyState ? i() : (o = O()) ? o.addEventListener("load", i) : t.loggerProvider.debug("File download tracking is not installed because global is undefined."), [2]
                                })
                            })
                        },
                        execute: function(e) {
                            return b(void 0, void 0, void 0, function() {
                                return w(this, function(t) {
                                    return [2, e]
                                })
                            })
                        },
                        teardown: function() {
                            return b(void 0, void 0, void 0, function() {
                                return w(this, function(t) {
                                    return null == e || e.disconnect(), r(), [2]
                                })
                            })
                        }
                    }
                },
                tJ = !1,
                tK = function(e) {
                    tJ || void 0 !== e.defaultTracking || (e.loggerProvider.warn("`options.defaultTracking` is set to undefined. This implicitly configures your Amplitude instance to track Page Views, Sessions, File Downloads, and Form Interactions. You can suppress this warning by explicitly setting a value to `options.defaultTracking`. The value must either be a boolean, to enable and disable all default events, or an object, for advanced configuration. For example:\n\namplitude.init(<YOUR_API_KEY>, {\n  defaultTracking: true,\n});\n\nVisit https://www.docs.developers.amplitude.com/data/sdks/browser-2/#tracking-default-events for more details."), tJ = !0)
                },
                tX = function() {
                    var e = O(),
                        t = [],
                        n = function(n, r) {
                            (null == e ? void 0 : e.addEventListener) && (null == e || e.addEventListener(n, r), t.push({
                                type: n,
                                handler: r
                            }))
                        },
                        r = function() {
                            t.forEach(function(t) {
                                var n = t.type,
                                    r = t.handler;
                                null == e || e.removeEventListener(n, r)
                            }), t = []
                        };
                    return {
                        name: "@amplitude/plugin-network-checker-browser",
                        type: "before",
                        setup: function(e, t) {
                            return b(void 0, void 0, void 0, function() {
                                return w(this, function(r) {
                                    return "undefined" == typeof navigator ? (e.loggerProvider.debug("Network connectivity checker plugin is disabled because navigator is not available."), e.offline = !1) : (e.offline = !navigator.onLine, n("online", function() {
                                        e.loggerProvider.debug("Network connectivity changed to online."), e.offline = !1, setTimeout(function() {
                                            t.flush()
                                        }, e.flushIntervalMillis)
                                    }), n("offline", function() {
                                        e.loggerProvider.debug("Network connectivity changed to offline."), e.offline = !0
                                    })), [2]
                                })
                            })
                        },
                        teardown: function() {
                            return b(void 0, void 0, void 0, function() {
                                return w(this, function(e) {
                                    return r(), [2]
                                })
                            })
                        }
                    }
                };

            function tQ(e, t, n) {
                var r, i, o = [];
                try {
                    for (var a = S(null != t ? t : []), s = a.next(); !s.done; s = a.next()) {
                        var l = s.value;
                        try {
                            o.push(new RegExp(l))
                        } catch (e) {
                            n.loggerProvider.warn("Invalid regex pattern: ".concat(l), e)
                        }
                    }
                } catch (e) {
                    r = {
                        error: e
                    }
                } finally {
                    try {
                        s && !s.done && (i = a.return) && i.call(a)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return e.concat(o)
            }
            var tZ = ["a", "button", "input", "select", "textarea", "label", "video", "audio", '[contenteditable="true" i]', "[data-amp-default-track]", ".amp-default-track"],
                t0 = "data-amp-track-",
                t1 = ["div", "span", "h1", "h2", "h3", "h4", "h5", "h6"];

            function t2(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function t4(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function t3(e, t, n) {
                return t && t4(e.prototype, t), n && t4(e, n), e
            }
            var t5 = function() {
                    return "function" == typeof Symbol
                },
                t6 = function(e) {
                    return t5() && !!Symbol[e]
                },
                t7 = function(e) {
                    return t6(e) ? Symbol[e] : "@@" + e
                };
            t5() && !t6("observable") && (Symbol.observable = Symbol("observable"));
            var t8 = t7("iterator"),
                t9 = t7("observable"),
                ne = t7("species");

            function nt(e, t) {
                var n = e[t];
                if (null != n) {
                    if ("function" != typeof n) throw TypeError(n + " is not a function");
                    return n
                }
            }

            function nn(e) {
                var t = e.constructor;
                return void 0 !== t && null === (t = t[ne]) && (t = void 0), void 0 !== t ? t : nd
            }

            function nr(e) {
                nr.log ? nr.log(e) : setTimeout(function() {
                    throw e
                })
            }

            function ni(e) {
                Promise.resolve().then(function() {
                    try {
                        e()
                    } catch (e) {
                        nr(e)
                    }
                })
            }

            function no(e) {
                var t = e._cleanup;
                if (void 0 !== t && (e._cleanup = void 0, t)) try {
                    if ("function" == typeof t) t();
                    else {
                        var n = nt(t, "unsubscribe");
                        n && n.call(t)
                    }
                } catch (e) {
                    nr(e)
                }
            }

            function na(e) {
                e._observer = void 0, e._queue = void 0, e._state = "closed"
            }

            function ns(e, t, n) {
                e._state = "running";
                var r = e._observer;
                try {
                    var i = nt(r, t);
                    switch (t) {
                        case "next":
                            i && i.call(r, n);
                            break;
                        case "error":
                            if (na(e), i) i.call(r, n);
                            else throw n;
                            break;
                        case "complete":
                            na(e), i && i.call(r)
                    }
                } catch (e) {
                    nr(e)
                }
                "closed" === e._state ? no(e) : "running" === e._state && (e._state = "ready")
            }

            function nl(e, t, n) {
                if ("closed" !== e._state) {
                    if ("buffering" === e._state) return void e._queue.push({
                        type: t,
                        value: n
                    });
                    if ("ready" !== e._state) {
                        e._state = "buffering", e._queue = [{
                            type: t,
                            value: n
                        }], ni(function() {
                            var t = e._queue;
                            if (t) {
                                e._queue = void 0, e._state = "ready";
                                for (var n = 0; n < t.length && (ns(e, t[n].type, t[n].value), "closed" !== e._state); ++n);
                            }
                        });
                        return
                    }
                    ns(e, t, n)
                }
            }
            var nu = function() {
                    function e(e, t) {
                        this._cleanup = void 0, this._observer = e, this._queue = void 0, this._state = "initializing";
                        var n = new nc(this);
                        try {
                            this._cleanup = t.call(void 0, n)
                        } catch (e) {
                            n.error(e)
                        }
                        "initializing" === this._state && (this._state = "ready")
                    }
                    return e.prototype.unsubscribe = function() {
                        "closed" !== this._state && (na(this), no(this))
                    }, t3(e, [{
                        key: "closed",
                        get: function() {
                            return "closed" === this._state
                        }
                    }]), e
                }(),
                nc = function() {
                    function e(e) {
                        this._subscription = e
                    }
                    var t = e.prototype;
                    return t.next = function(e) {
                        nl(this._subscription, "next", e)
                    }, t.error = function(e) {
                        nl(this._subscription, "error", e)
                    }, t.complete = function() {
                        nl(this._subscription, "complete")
                    }, t3(e, [{
                        key: "closed",
                        get: function() {
                            return "closed" === this._subscription._state
                        }
                    }]), e
                }(),
                nd = function() {
                    function e(t) {
                        if (!(this instanceof e)) throw TypeError("Observable cannot be called as a function");
                        if ("function" != typeof t) throw TypeError("Observable initializer must be a function");
                        this._subscriber = t
                    }
                    var t = e.prototype;
                    return t.subscribe = function(e) {
                        return ("object" != typeof e || null === e) && (e = {
                            next: e,
                            error: arguments[1],
                            complete: arguments[2]
                        }), new nu(e, this._subscriber)
                    }, t.forEach = function(e) {
                        var t = this;
                        return new Promise(function(n, r) {
                            if ("function" != typeof e) return void r(TypeError(e + " is not a function"));

                            function i() {
                                o.unsubscribe(), n()
                            }
                            var o = t.subscribe({
                                next: function(t) {
                                    try {
                                        e(t, i)
                                    } catch (e) {
                                        r(e), o.unsubscribe()
                                    }
                                },
                                error: r,
                                complete: n
                            })
                        })
                    }, t.map = function(e) {
                        var t = this;
                        if ("function" != typeof e) throw TypeError(e + " is not a function");
                        return new(nn(this))(function(n) {
                            return t.subscribe({
                                next: function(t) {
                                    try {
                                        t = e(t)
                                    } catch (e) {
                                        return n.error(e)
                                    }
                                    n.next(t)
                                },
                                error: function(e) {
                                    n.error(e)
                                },
                                complete: function() {
                                    n.complete()
                                }
                            })
                        })
                    }, t.filter = function(e) {
                        var t = this;
                        if ("function" != typeof e) throw TypeError(e + " is not a function");
                        return new(nn(this))(function(n) {
                            return t.subscribe({
                                next: function(t) {
                                    try {
                                        if (!e(t)) return
                                    } catch (e) {
                                        return n.error(e)
                                    }
                                    n.next(t)
                                },
                                error: function(e) {
                                    n.error(e)
                                },
                                complete: function() {
                                    n.complete()
                                }
                            })
                        })
                    }, t.reduce = function(e) {
                        var t = this;
                        if ("function" != typeof e) throw TypeError(e + " is not a function");
                        var n = nn(this),
                            r = arguments.length > 1,
                            i = !1,
                            o = arguments[1],
                            a = o;
                        return new n(function(n) {
                            return t.subscribe({
                                next: function(t) {
                                    var o = !i;
                                    if (i = !0, !o || r) try {
                                        a = e(a, t)
                                    } catch (e) {
                                        return n.error(e)
                                    } else a = t
                                },
                                error: function(e) {
                                    n.error(e)
                                },
                                complete: function() {
                                    if (!i && !r) return n.error(TypeError("Cannot reduce an empty sequence"));
                                    n.next(a), n.complete()
                                }
                            })
                        })
                    }, t.concat = function() {
                        for (var e = this, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        var i = nn(this);
                        return new i(function(t) {
                            var r, o = 0;
                            return ! function e(a) {
                                    r = a.subscribe({
                                        next: function(e) {
                                            t.next(e)
                                        },
                                        error: function(e) {
                                            t.error(e)
                                        },
                                        complete: function() {
                                            o === n.length ? (r = void 0, t.complete()) : e(i.from(n[o++]))
                                        }
                                    })
                                }(e),
                                function() {
                                    r && (r.unsubscribe(), r = void 0)
                                }
                        })
                    }, t.flatMap = function(e) {
                        var t = this;
                        if ("function" != typeof e) throw TypeError(e + " is not a function");
                        var n = nn(this);
                        return new n(function(r) {
                            var i = [],
                                o = t.subscribe({
                                    next: function(t) {
                                        if (e) try {
                                            t = e(t)
                                        } catch (e) {
                                            return r.error(e)
                                        }
                                        var o = n.from(t).subscribe({
                                            next: function(e) {
                                                r.next(e)
                                            },
                                            error: function(e) {
                                                r.error(e)
                                            },
                                            complete: function() {
                                                var e = i.indexOf(o);
                                                e >= 0 && i.splice(e, 1), a()
                                            }
                                        });
                                        i.push(o)
                                    },
                                    error: function(e) {
                                        r.error(e)
                                    },
                                    complete: function() {
                                        a()
                                    }
                                });

                            function a() {
                                o.closed && 0 === i.length && r.complete()
                            }
                            return function() {
                                i.forEach(function(e) {
                                    return e.unsubscribe()
                                }), o.unsubscribe()
                            }
                        })
                    }, t[t9] = function() {
                        return this
                    }, e.from = function(t) {
                        var n = "function" == typeof this ? this : e;
                        if (null == t) throw TypeError(t + " is not an object");
                        var r = nt(t, t9);
                        if (r) {
                            var i = r.call(t);
                            if (Object(i) !== i) throw TypeError(i + " is not an object");
                            return i instanceof nd && i.constructor === n ? i : new n(function(e) {
                                return i.subscribe(e)
                            })
                        }
                        if (t6("iterator") && (r = nt(t, t8))) return new n(function(e) {
                            ni(function() {
                                if (!e.closed) {
                                    for (var n, i = function(e, t) {
                                            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                            if (n) return (n = n.call(e)).next.bind(n);
                                            if (Array.isArray(e) || (n = function(e, t) {
                                                    if (e) {
                                                        if ("string" == typeof e) return t2(e, void 0);
                                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                                                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return t2(e, t)
                                                    }
                                                }(e))) {
                                                n && (e = n);
                                                var r = 0;
                                                return function() {
                                                    return r >= e.length ? {
                                                        done: !0
                                                    } : {
                                                        done: !1,
                                                        value: e[r++]
                                                    }
                                                }
                                            }
                                            throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                        }(r.call(t)); !(n = i()).done;) {
                                        var o = n.value;
                                        if (e.next(o), e.closed) return
                                    }
                                    e.complete()
                                }
                            })
                        });
                        if (Array.isArray(t)) return new n(function(e) {
                            ni(function() {
                                if (!e.closed) {
                                    for (var n = 0; n < t.length; ++n)
                                        if (e.next(t[n]), e.closed) return;
                                    e.complete()
                                }
                            })
                        });
                        throw TypeError(t + " is not observable")
                    }, e.of = function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return new("function" == typeof this ? this : e)(function(e) {
                            ni(function() {
                                if (!e.closed) {
                                    for (var t = 0; t < n.length; ++t)
                                        if (e.next(n[t]), e.closed) return;
                                    e.complete()
                                }
                            })
                        })
                    }, t3(e, null, [{
                        key: ne,
                        get: function() {
                            return this
                        }
                    }]), e
                }();

            function nf(e, t) {
                return new nd(function(n) {
                    e.subscribe({
                        next: function(e) {
                            t(e).then(function(e) {
                                return n.next(e)
                            }).catch(function(e) {
                                return n.error(e)
                            })
                        },
                        error: function(e) {
                            n.error(e)
                        },
                        complete: function() {
                            n.complete()
                        }
                    })
                })
            }

            function np(e, t) {
                return new nd(function(n) {
                    var r = !1,
                        i = new Set,
                        o = function() {
                            var e, t;
                            r = !0;
                            try {
                                for (var n = S(i), o = n.next(); !o.done; o = n.next()) {
                                    var a = o.value;
                                    try {
                                        a.unsubscribe()
                                    } catch (e) {}
                                }
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    o && !o.done && (t = n.return) && t.call(n)
                                } finally {
                                    if (e) throw e.error
                                }
                            }
                            i.clear()
                        },
                        a = function(e) {
                            var t = e.subscribe({
                                next: function(e) {
                                    r || n.next(e)
                                },
                                error: function(e) {
                                    r || (r = !0, n.error(e), o())
                                },
                                complete: function() {
                                    i.delete(t), r || 0 !== i.size || (n.complete(), o(), r = !0)
                                }
                            });
                            i.add(t)
                        };
                    return a(e), a(t), o
                })
            }

            function nh(e) {
                var t = new Set,
                    n = null;

                function r() {
                    null == n || n.unsubscribe(), n = null, t.clear()
                }
                return new nd(function(i) {
                    return t.add(i), null === n && (n = e.subscribe({
                            next: function(e) {
                                try {
                                    for (var n, r, i, o = S(t), a = o.next(); !a.done; a = o.next()) {
                                        var s = a.value;
                                        null == (i = s.next) || i.call(s, e)
                                    }
                                } catch (e) {
                                    n = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        a && !a.done && (r = o.return) && r.call(o)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                            },
                            error: function(e) {
                                try {
                                    for (var n, i, o, a = S(t), s = a.next(); !s.done; s = a.next()) {
                                        var l = s.value;
                                        null == (o = l.error) || o.call(l, e)
                                    }
                                } catch (e) {
                                    n = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        s && !s.done && (i = a.return) && i.call(a)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                                r()
                            },
                            complete: function() {
                                try {
                                    for (var e, n, i, o = S(t), a = o.next(); !a.done; a = o.next()) {
                                        var s = a.value;
                                        null == (i = s.complete) || i.call(s)
                                    }
                                } catch (t) {
                                    e = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        a && !a.done && (n = o.return) && n.call(o)
                                    } finally {
                                        if (e) throw e.error
                                    }
                                }
                                r()
                            }
                        })),
                        function() {
                            t.delete(i), 0 === t.size && n && (n.unsubscribe(), n = null)
                        }
                })
            }
            t5() && Object.defineProperty(nd, Symbol("extensions"), {
                value: {
                    symbol: t9,
                    hostReportError: nr
                },
                configurable: !0
            });
            var ng = "1.18.1",
                nv = "[Amplitude] Element Clicked",
                nm = "[Amplitude] Element Tag",
                ny = "[Amplitude] Element Text",
                nb = "[Amplitude] Page URL",
                nw = "https://app.amplitude.com",
                nS = {
                    US: nw,
                    EU: "https://app.eu.amplitude.com",
                    STAGING: "https://apps.stag2.amplitude.com"
                },
                nE = "data-amp-mask-attributes",
                nx = function(e, t) {
                    return !t || !t.length || t.some(function(t) {
                        return "string" == typeof t ? e === t : e.match(t)
                    })
                },
                nT = function(e, t) {
                    var n = e;
                    try {
                        n = decodeURI(e)
                    } catch (e) {
                        null == t || t.error("Malformed URI sequence: ", e)
                    }
                    return n
                },
                nk = ["input", "select", "textarea"],
                nP = function(e, t) {
                    var n, r = null == (n = null == window ? void 0 : window.getComputedStyle) ? void 0 : n.call(window, e);
                    return (null == r ? void 0 : r.getPropertyValue("cursor")) === "pointer" && "click" === t
                },
                nC = function(e, t, n) {
                    return void 0 === n && (n = !1),
                        function(r, i) {
                            var o, a, s = e.pageUrlAllowlist,
                                l = e.pageUrlExcludelist,
                                u = e.shouldTrackEventResolver,
                                c = null == (a = null == (o = null == i ? void 0 : i.tagName) ? void 0 : o.toLowerCase) ? void 0 : a.call(o);
                            if (!c) return !1;
                            if (u) return u(r, i);
                            if (!nx(window.location.href, s) || l && l.length > 0 && nx(window.location.href, l)) return !1;
                            var d = String(null == i ? void 0 : i.getAttribute("type")) || "";
                            if ("string" == typeof d) switch (d.toLowerCase()) {
                                case "hidden":
                                case "password":
                                    return !1
                            }
                            var f = nP(i, r);
                            if (n && f) return !0;
                            if (t && !t.some(function(e) {
                                    var t;
                                    return !!(null == (t = null == i ? void 0 : i.matches) ? void 0 : t.call(i, e))
                                })) return !1;
                            switch (c) {
                                case "input":
                                case "select":
                                case "textarea":
                                    return "change" === r || "click" === r;
                                default:
                                    if (f) return !0;
                                    return "click" === r
                            }
                        }
                },
                n_ = function(e) {
                    var t, n, r, i = null == (n = null == (t = null == e ? void 0 : e.tagName) ? void 0 : t.toLowerCase) ? void 0 : n.call(t),
                        o = e instanceof HTMLElement && (null == (r = e.getAttribute("contenteditable")) ? void 0 : r.toLowerCase()) === "true";
                    return !nk.includes(i) && !o
                },
                nI = function(e) {
                    return Object.keys(e).reduce(function(t, n) {
                        var r = e[n];
                        return null != r && ("object" != typeof r || 0 !== Object.keys(r).length) && ("string" != typeof r || 0 !== r.trim().length) && (t[n] = r), t
                    }, {})
                },
                nA = function(e, t) {
                    return e ? t.some(function(t) {
                        var n;
                        return null == (n = null == e ? void 0 : e.matches) ? void 0 : n.call(e, t)
                    }) ? e : nA(null == e ? void 0 : e.parentElement, t) : null
                },
                nO = function(e) {
                    return null !== e.event.target && !!e.closestTrackedAncestor
                },
                nM = new Set(["id", "class", "style", "value", "onclick", "onchange", "oninput", "onblur", "onsubmit", "onfocus", "onkeydown", "onkeyup", "onkeypress", "data-reactid", "data-react-checksum", "data-reactroot", nE, tM]),
                nL = ["type"],
                nR = ["svg", "path", "g"],
                nN = ["password", "hidden"],
                nj = function(e, t) {
                    try {
                        if ("DOM_ELEMENT" === e.sourceType) {
                            var n = document.documentElement;
                            if (e.scope && t && (n = t.closest(e.scope)), n && e.selector) return n.querySelector(e.selector);
                            return n
                        }
                    } catch (e) {}
                },
                nD = function(e, t, n) {
                    e.forEach(function(e) {
                        if ("string" != typeof e && "ATTACH_EVENT_PROPERTY" === e.actionType) {
                            var r = n.extractDataFromDataSource(e.dataSource, t.closestTrackedAncestor);
                            t.targetElementProperties[e.destinationKey] = r
                        }
                    })
                },
                nF = function(e, t) {
                    var n, r, i, o = this;
                    this.replaceSensitiveString = function(e) {
                        return tD(e, o.additionalMaskTextPatterns)
                    }, this.getHierarchy = function(e) {
                        var t, n, r, i, a = performance.now(),
                            s = [];
                        if (!e) return [];
                        for (var l = function(e) {
                                var t = [];
                                if (!e) return t;
                                t.push(e);
                                for (var n = e.parentElement; n && "HTML" !== n.tagName;) t.push(n), n = n.parentElement;
                                return t
                            }(e), u = new Map, c = l.length - 1; c >= 0; c--) {
                            var d = l[c];
                            if (d) {
                                var f, p = (f = d.getAttribute(nE)) ? f.split(",").map(function(e) {
                                        return e.trim()
                                    }).filter(function(e) {
                                        return e.length > 0 && "id" !== e && "class" !== e
                                    }) : [],
                                    h = new Set(x(x([], E(c === l.length - 1 ? [] : null != (r = u.get(l[c + 1])) ? r : new Set), !1), E(p), !1));
                                u.set(d, h)
                            }
                        }
                        s = l.map(function(e) {
                            var t;
                            return function(e, t) {
                                if (null === e) return null;
                                var n, r, i, o, a, s, l = String(e.tagName).toLowerCase(),
                                    u = {
                                        tag: l
                                    },
                                    c = Array.from(null != (o = null == (i = e.parentElement) ? void 0 : i.children) ? o : []);
                                c.length && (u.index = c.indexOf(e), u.indexOfType = c.filter(function(t) {
                                    return t.tagName === e.tagName
                                }).indexOf(e));
                                var d = null == (s = null == (a = e.previousElementSibling) ? void 0 : a.tagName) ? void 0 : s.toLowerCase();
                                d && (u.prevSib = String(d));
                                var f = e.getAttribute("id");
                                f && (u.id = String(f));
                                var p = Array.from(e.classList);
                                p.length && (u.classes = p);
                                var h = {},
                                    g = Array.from(e.attributes).filter(function(e) {
                                        return !nM.has(e.name)
                                    }),
                                    v = !n_(e);
                                if (!nN.includes(String(e.getAttribute("type"))) && !nR.includes(l)) try {
                                    for (var m = S(g), y = m.next(); !y.done; y = m.next()) {
                                        var b = y.value;
                                        if (!v || nL.includes(b.name)) {
                                            if (t.has(b.name)) {
                                                h[b.name] = tL;
                                                continue
                                            }
                                            h[b.name] = String(b.value).substring(0, 128)
                                        }
                                    }
                                } catch (e) {
                                    n = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        y && !y.done && (r = m.return) && r.call(m)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                                return Object.keys(h).length && (u.attrs = h), u
                            }(e, null != (t = u.get(e)) ? t : new Set)
                        });
                        var g = function(e) {
                            (null == e ? void 0 : e.attrs) && Object.entries(e.attrs).forEach(function(t) {
                                var n = E(t, 2),
                                    r = n[0],
                                    i = n[1];
                                e.attrs && (e.attrs[r] = o.replaceSensitiveString(i))
                            })
                        };
                        try {
                            for (var v = S(s), m = v.next(); !m.done; m = v.next()) {
                                var y = m.value;
                                g(y)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                m && !m.done && (n = v.return) && n.call(v)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        var b = performance.now();
                        return null == (i = o.diagnosticsClient) || i.recordHistogram("autocapturePlugin.getHierarchy", b - a), s
                    }, this.getNearestLabel = function(e) {
                        var t, n = e.parentElement;
                        if (!n) return "";
                        try {
                            t = n.querySelector(":scope>span,h1,h2,h3,h4,h5,h6")
                        } catch (e) {
                            t = null
                        }
                        return t ? o.getText(t) : o.getNearestLabel(n)
                    }, this.getEventProperties = function(e, t, n) {
                        var r, i, a, s, l = null == (a = null == (i = null == t ? void 0 : t.tagName) ? void 0 : i.toLowerCase) ? void 0 : a.call(i),
                            u = "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
                                left: null,
                                top: null
                            },
                            c = o.getHierarchy(t),
                            d = null == (s = c[0]) ? void 0 : s.attrs,
                            f = o.getNearestLabel(t),
                            p = Object.entries(null != d ? d : {}).reduce(function(e, t) {
                                var r = E(t, 2),
                                    i = r[0],
                                    o = r[1];
                                if (i.startsWith(n)) {
                                    var a = i.replace(n, "");
                                    a && (e[a] = o || "")
                                }
                                return e
                            }, {}),
                            h = ((r = {})["[Amplitude] Element Hierarchy"] = c, r[nm] = l, r[ny] = o.getText(t), r["[Amplitude] Element Position Left"] = null == u.left ? null : Math.round(u.left), r["[Amplitude] Element Position Top"] = null == u.top ? null : Math.round(u.top), r["[Amplitude] Element Attributes"] = p, r["[Amplitude] Element Parent Label"] = f, r[nb] = nT(window.location.href.split("?")[0]), r["[Amplitude] Page Title"] = tF(o.replaceSensitiveString), r["[Amplitude] Viewport Height"] = window.innerHeight, r["[Amplitude] Viewport Width"] = window.innerWidth, r);
                        if (h["[Amplitude] Element ID"] = t.getAttribute("id") || "", h["[Amplitude] Element Class"] = t.getAttribute("class"), h["[Amplitude] Element Aria Label"] = null == d ? void 0 : d["aria-label"], "a" === l && "click" === e && t instanceof HTMLAnchorElement) {
                            var g = t.href.substring(0, 128);
                            h["[Amplitude] Element Href"] = o.replaceSensitiveString(g)
                        }
                        return nI(h)
                    }, this.addAdditionalEventProperties = function(e, t, n, r, i) {
                        void 0 === i && (i = !1);
                        var a = {
                            event: e,
                            timestamp: Date.now(),
                            type: t
                        };
                        if (("click" === a.type || "change" === a.type) && null !== a.event.target) {
                            if (i && nP(a.event.target, a.type)) return a.closestTrackedAncestor = a.event.target, a.targetElementProperties = o.getEventProperties(a.type, a.closestTrackedAncestor, r), a;
                            var s = nA(a.event.target, n);
                            s && (a.closestTrackedAncestor = s, a.targetElementProperties = o.getEventProperties(a.type, s, r))
                        }
                        return a
                    }, this.extractDataFromDataSource = function(e, t) {
                        if ("DOM_ELEMENT" === e.sourceType) {
                            var n = nj(e, t);
                            if (n) {
                                if ("TEXT" === e.elementExtractType) return o.getText(n);
                                if ("ATTRIBUTE" === e.elementExtractType && e.attribute) return n.getAttribute(e.attribute)
                            }
                        }
                    }, this.getText = function(e) {
                        if (null !== e.closest("[".concat(tM, "]"))) return tL;
                        var t = "";
                        if (e.querySelector("[".concat(tM, "], [contenteditable]"))) {
                            var n = e.cloneNode(!0);
                            n.querySelectorAll("[".concat(tM, "], [contenteditable]")).forEach(function(e) {
                                e.innerText = tL
                            }), t = n.innerText || ""
                        } else t = e.innerText || "";
                        return o.replaceSensitiveString(t.substring(0, 255)).replace(/\s+/g, " ").trim()
                    }, this.getEventTagProps = function(e) {
                        if (!e) return {};
                        var t, n, r, i = null == (r = null == (n = null == e ? void 0 : e.tagName) ? void 0 : n.toLowerCase) ? void 0 : r.call(n);
                        return nI(((t = {})[nm] = i, t[ny] = o.getText(e), t[nb] = window.location.href.split("?")[0], t))
                    }, this.diagnosticsClient = null == t ? void 0 : t.diagnosticsClient;
                    var a = null != (i = e.maskTextRegex) ? i : [],
                        s = [];
                    try {
                        for (var l = S(a), u = l.next(); !u.done; u = l.next()) {
                            var c = u.value;
                            if (s.length >= 25) break;
                            if (c instanceof RegExp) s.push(c);
                            else if ("pattern" in c && "string" == typeof c.pattern) try {
                                s.push(RegExp(c.pattern, "i"))
                            } catch (e) {}
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            u && !u.done && (r = l.return) && r.call(l)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    this.additionalMaskTextPatterns = s
                },
                nz = function() {
                    function e(e) {
                        var t = (void 0 === e ? {} : e).origin,
                            n = this;
                        this.endpoint = nw, this.requestCallbacks = {}, this.onSelect = function(e) {
                            n.notify({
                                action: "element-selected",
                                data: e
                            })
                        }, this.onTrack = function(e, t) {
                            "selector-mode-changed" === e ? n.notify({
                                action: "track-selector-mode-changed",
                                data: t
                            }) : "selector-moved" === e && n.notify({
                                action: "track-selector-moved",
                                data: t
                            })
                        }, this.endpoint = void 0 === t ? nw : t
                    }
                    return e.prototype.notify = function(e) {
                        var t, n, r, i;
                        null == (n = null == (t = this.logger) ? void 0 : t.debug) || n.call(t, "Message sent: ", JSON.stringify(e)), null == (i = null == (r = window.opener) ? void 0 : r.postMessage) || i.call(r, e, this.endpoint)
                    }, e.prototype.sendRequest = function(e, t, n) {
                        var r = this;
                        void 0 === n && (n = {
                            timeout: 15e3
                        });
                        var i = "".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9)),
                            o = {
                                id: i,
                                action: e,
                                args: t
                            };
                        return new Promise(function(t, a) {
                            r.requestCallbacks[i] = {
                                resolve: t,
                                reject: a
                            }, r.notify(o), (null == n ? void 0 : n.timeout) > 0 && setTimeout(function() {
                                a(Error("".concat(e, " timed out (id: ").concat(i, ")"))), delete r.requestCallbacks[i]
                            }, n.timeout)
                        })
                    }, e.prototype.handleResponse = function(e) {
                        var t;
                        if (!this.requestCallbacks[e.id]) {
                            null == (t = this.logger) || t.warn("No callback found for request id: ".concat(e.id));
                            return
                        }
                        this.requestCallbacks[e.id].resolve(e.responseData), delete this.requestCallbacks[e.id]
                    }, e.prototype.setup = function(e) {
                        var t = this,
                            n = void 0 === e ? {
                                dataExtractor: new nF({})
                            } : e,
                            r = n.logger,
                            i = n.endpoint,
                            o = n.isElementSelectable,
                            a = n.cssSelectorAllowlist,
                            s = n.actionClickAllowlist,
                            l = n.dataExtractor;
                        this.logger = r, i && this.endpoint === nw && (this.endpoint = i);
                        var u = null;
                        window.addEventListener("message", function(e) {
                            if (null == (r = null == (n = t.logger) ? void 0 : n.debug) || r.call(n, "Message received: ", JSON.stringify(e)), t.endpoint === e.origin) {
                                var n, r, i, c, d, f = null == e ? void 0 : e.data,
                                    p = null == f ? void 0 : f.action;
                                if (p)
                                    if ("id" in f) null == (c = null == (i = t.logger) ? void 0 : i.debug) || c.call(i, "Received Response to previous request: ", JSON.stringify(e)), t.handleResponse(f);
                                    else if ("ping" === p) t.notify({
                                    action: "pong"
                                });
                                else if ("initialize-visual-tagging-selector" === p) {
                                    var h, g = null == f ? void 0 : f.data;
                                    (h = "https://cdn.amplitude.com/libs/visual-tagging-selector-1.0.0-alpha.js.gz", new Promise(function(e, t) {
                                        var n;
                                        try {
                                            var r = document.createElement("script");
                                            r.type = "text/javascript", r.async = !0, r.src = h, r.addEventListener("load", function() {
                                                e({
                                                    status: !0
                                                })
                                            }, {
                                                once: !0
                                            }), r.addEventListener("error", function() {
                                                t({
                                                    status: !1,
                                                    message: "Failed to load the script ".concat(h)
                                                })
                                            }), null == (n = document.head) || n.appendChild(r)
                                        } catch (e) {
                                            t(e)
                                        }
                                    })).then(function() {
                                        var e;
                                        u = null == (e = null == window ? void 0 : window.amplitudeVisualTaggingSelector) ? void 0 : e.call(window, {
                                            getEventTagProps: l.getEventTagProps,
                                            isElementSelectable: function(e) {
                                                return !o || o((null == g ? void 0 : g.actionType) || "click", e)
                                            },
                                            onTrack: t.onTrack,
                                            onSelect: t.onSelect,
                                            visualHighlightClass: "amp-visual-tagging-selector-highlight",
                                            messenger: t,
                                            cssSelectorAllowlist: a,
                                            actionClickAllowlist: s,
                                            extractDataFromDataSource: l.extractDataFromDataSource,
                                            dataExtractor: l,
                                            diagnostics: {
                                                autocapture: {
                                                    version: ng
                                                }
                                            }
                                        }), t.notify({
                                            action: "selector-loaded"
                                        })
                                    }).catch(function() {
                                        var e;
                                        null == (e = t.logger) || e.warn("Failed to initialize visual tagging selector")
                                    })
                                } else "close-visual-tagging-selector" === p && (null == (d = null == u ? void 0 : u.close) || d.call(u))
                            }
                        }), this.notify({
                            action: "page-loaded"
                        })
                    }, e
                }(),
                nq = function() {
                    return new nd(function(e) {
                        var t = new MutationObserver(function(t) {
                            e.next(t)
                        });
                        return document.body && t.observe(document.body, {
                                childList: !0,
                                attributes: !0,
                                characterData: !0,
                                subtree: !0
                            }),
                            function() {
                                return t.disconnect()
                            }
                    })
                },
                nU = function(e) {
                    return void 0 === e && (e = "click"), new nd(function(t) {
                        var n, r = function(e) {
                            t.next(e)
                        };
                        return null == (n = O()) || n.document.addEventListener(e, r, {
                                capture: !0
                            }),
                            function() {
                                var t;
                                null == (t = O()) || t.document.removeEventListener(e, r, {
                                    capture: !0
                                })
                            }
                    })
                },
                n$ = function(e, t) {
                    try {
                        if ("[Amplitude] Element Text" === t.subprop_key) return "is" === t.subprop_op && t.subprop_value.includes(e.targetElementProperties["[Amplitude] Element Text"]);
                        if ("[Amplitude] Element Hierarchy" === t.subprop_key) return "autotrack css match" === t.subprop_op && !!e.closestTrackedAncestor.closest(t.subprop_value.toString())
                    } catch (e) {
                        console.error("Error matching event to filter", e)
                    }
                    return !1
                },
                nB = {
                    "[Amplitude] Element Clicked": "click",
                    "[Amplitude] Element Changed": "change"
                },
                nH = function(e) {
                    var t, n, r, i, o = Object.values(nB).reduce(function(e, t) {
                        return e[t] = new Set, e
                    }, {});
                    if (!e) return o;
                    try {
                        for (var a = S(e), s = a.next(); !s.done; s = a.next()) {
                            var l = s.value;
                            try {
                                try {
                                    for (var u = (r = void 0, S(l.definition)), c = u.next(); !c.done; c = u.next()) {
                                        var d = nB[c.value.event_type];
                                        d && o[d].add(l.id)
                                    }
                                } catch (e) {
                                    r = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        c && !c.done && (i = u.return) && i.call(u)
                                    } finally {
                                        if (r) throw r.error
                                    }
                                }
                            } catch (e) {
                                console.warn("Skipping Labeled Event due to malformed definition", null == l ? void 0 : l.id, e)
                            }
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            s && !s.done && (n = a.return) && n.call(a)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return o
                },
                nV = function(e) {
                    var t, n, r, i, o = new Map;
                    try {
                        for (var a = S(e), s = a.next(); !s.done; s = a.next()) {
                            var l = s.value;
                            try {
                                for (var u = (r = void 0, S(l.conditions)), c = u.next(); !c.done; c = u.next()) {
                                    var d = c.value;
                                    if ("LABELED_EVENT" === d.type) {
                                        var f = d.match.eventId,
                                            p = o.get(f);
                                        p || (p = [], o.set(f, p)), p.push(l)
                                    }
                                }
                            } catch (e) {
                                r = {
                                    error: e
                                }
                            } finally {
                                try {
                                    c && !c.done && (i = u.return) && i.call(u)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            s && !s.done && (n = a.return) && n.call(a)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return o
                },
                nG = function(e, t) {
                    var n, r, i, o, a = new Set;
                    try {
                        for (var s = S(e), l = s.next(); !l.done; l = s.next()) {
                            var u = l.value,
                                c = t.get(u.id);
                            if (c) try {
                                for (var d = (i = void 0, S(c)), f = d.next(); !f.done; f = d.next()) {
                                    var p = f.value;
                                    a.add(p)
                                }
                            } catch (e) {
                                i = {
                                    error: e
                                }
                            } finally {
                                try {
                                    f && !f.done && (o = d.return) && o.call(d)
                                } finally {
                                    if (i) throw i.error
                                }
                            }
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            l && !l.done && (r = s.return) && r.call(s)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return Array.from(a)
                },
                nW = function() {
                    function e(e, t, n, r) {
                        this.groupedLabeledEvents = e, this.labeledEventToTriggerMap = t, this.dataExtractor = n, this.options = r
                    }
                    return e.prototype.evaluate = function(e) {
                        var t, n, r = this.options.pageActions;
                        if (!r) return e;
                        var i = nG(Array.from(this.groupedLabeledEvents[e.type]).map(function(e) {
                            return r.labeledEvents[e]
                        }).filter(function(t) {
                            return t.definition.some(function(t) {
                                return nB[t.event_type] === e.type && t.filters.every(function(t) {
                                    return n$(e, t)
                                })
                            })
                        }), this.labeledEventToTriggerMap);
                        try {
                            for (var o = S(i), a = o.next(); !a.done; a = o.next()) {
                                var s = a.value;
                                nD(s.actions, e, this.dataExtractor)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                a && !a.done && (n = o.return) && n.call(o)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return e
                    }, e.prototype.update = function(e, t, n) {
                        this.groupedLabeledEvents = e, this.labeledEventToTriggerMap = t, this.options = n
                    }, e
                }();
            ! function(e) {
                e.ClickObservable = "clickObservable", e.ChangeObservable = "changeObservable", e.NavigateObservable = "navigateObservable", e.MutationObservable = "mutationObservable"
            }(c || (c = {}));
            var nY = function(e, t) {
                    void 0 === e && (e = {}), null == t || t.diagnosticsClient.setTag("plugin.autocapture.version", ng);
                    var n, r, i, o, a, s, l, u, d = e.dataAttributePrefix,
                        f = void 0 === d ? t0 : d,
                        p = e.visualTaggingOptions,
                        h = void 0 === p ? {
                            enabled: !0,
                            messenger: new nz
                        } : p;
                    e.cssSelectorAllowlist = null != (n = e.cssSelectorAllowlist) ? n : tZ, e.actionClickAllowlist = null != (r = e.actionClickAllowlist) ? r : t1, e.debounceTime = null != (i = e.debounceTime) ? i : 0, e.pageUrlExcludelist = null == (o = e.pageUrlExcludelist) ? void 0 : o.reduce(function(e, t) {
                        if ("string" == typeof t && e.push(t), t instanceof RegExp && e.push(t), "object" == typeof t && null !== t && "pattern" in t) try {
                            e.push(new RegExp(t.pattern))
                        } catch (e) {
                            console.warn("Invalid regex pattern: ".concat(t.pattern), e)
                        }
                        return e
                    }, []);
                    var g = "@amplitude/plugin-autocapture-browser",
                        v = [],
                        y = new nF(e, t),
                        T = function() {
                            var t, n, r = nh(nU().map(function(t) {
                                    return y.addAdditionalEventProperties(t, "click", e.cssSelectorAllowlist, f)
                                })),
                                i = nh(new nd(function(t) {
                                    var n, r = function(n) {
                                        var r = y.addAdditionalEventProperties(n, "change", e.cssSelectorAllowlist, f);
                                        t.next(r)
                                    };
                                    return null == (n = O()) || n.document.addEventListener("change", r, {
                                            capture: !0
                                        }),
                                        function() {
                                            var e;
                                            return null == (e = O()) ? void 0 : e.document.removeEventListener("change", r)
                                        }
                                }));
                            window.navigation && (n = nh(new nd(function(t) {
                                var n = function(n) {
                                    var r = y.addAdditionalEventProperties(n, "navigate", e.cssSelectorAllowlist, f);
                                    t.next(r)
                                };
                                return window.navigation.addEventListener("navigate", n),
                                    function() {
                                        window.navigation.removeEventListener("navigate", n)
                                    }
                            })));
                            var o = nh(nq().map(function(t) {
                                return y.addAdditionalEventProperties(t, "mutation", e.cssSelectorAllowlist, f)
                            }));
                            return (t = {})[c.ChangeObservable] = i, t[c.ClickObservable] = r, t[c.MutationObservable] = o, t[c.NavigateObservable] = n, t
                        },
                        k = nH(Object.values(null != (s = null == (a = e.pageActions) ? void 0 : a.labeledEvents) ? s : {})),
                        P = nV(null != (u = null == (l = e.pageActions) ? void 0 : l.triggers) ? u : []),
                        C = new nW(k, P, y, e),
                        _ = function(t) {
                            var n, r;
                            t && (e.pageActions = m(m({}, e.pageActions), t), k = nH(Object.values(null != (n = e.pageActions.labeledEvents) ? n : {})), P = nV(null != (r = e.pageActions.triggers) ? r : []), C.update(k, P, e))
                        };
                    return {
                        name: g,
                        type: "enrichment",
                        setup: function(t, n) {
                            return b(void 0, void 0, void 0, function() {
                                var r, i, o, a, s, l, u, c, d, p;
                                return w(this, function(b) {
                                    var w, S, k, P, I, A, O, M, L, R, N, j, D, F, z, q, U, $, B, H, V, G, W, Y, J, K;
                                    return "undefined" == typeof document ? [2] : (t.fetchRemoteConfig && (t.remoteConfigClient ? t.remoteConfigClient.subscribe("analyticsSDK.pageActions", "all", function(e) {
                                        _(e)
                                    }) : t.loggerProvider.debug("Remote config client is not provided, skipping remote config fetch")), r = nC(e, e.cssSelectorAllowlist), i = nC(e, e.actionClickAllowlist), S = (w = {
                                        allObservables: o = T(),
                                        amplitude: n,
                                        shouldTrackEvent: r,
                                        evaluateTriggers: C.evaluate.bind(C)
                                    }).amplitude, k = w.allObservables, P = w.shouldTrackEvent, I = w.evaluateTriggers, a = k.clickObservable.filter(nO).filter(function(e) {
                                        return P("click", e.closestTrackedAncestor)
                                    }).map(function(e) {
                                        return I(e)
                                    }).subscribe(function(e) {
                                        null == S || S.track(nv, e.targetElementProperties)
                                    }), v.push(a), O = (A = {
                                        allObservables: o,
                                        getEventProperties: function() {
                                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                            return y.getEventProperties.apply(y, x(x([], E(e), !1), [f], !1))
                                        },
                                        amplitude: n,
                                        shouldTrackEvent: r,
                                        evaluateTriggers: C.evaluate.bind(C)
                                    }).amplitude, M = A.allObservables, L = A.getEventProperties, R = A.shouldTrackEvent, N = A.evaluateTriggers, s = M.changeObservable.filter(nO).filter(function(e) {
                                        return R("change", e.closestTrackedAncestor)
                                    }).map(function(e) {
                                        return N(e)
                                    }).subscribe(function(e) {
                                        null == O || O.track("[Amplitude] Element Changed", L("change", e.closestTrackedAncestor))
                                    }), v.push(s), D = (j = {
                                        allObservables: o,
                                        options: e,
                                        getEventProperties: function() {
                                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                            return y.getEventProperties.apply(y, x(x([], E(e), !1), [f], !1))
                                        },
                                        amplitude: n,
                                        shouldTrackEvent: r,
                                        shouldTrackActionClick: i
                                    }).amplitude, F = j.allObservables, z = j.options, q = j.getEventProperties, U = j.shouldTrackEvent, $ = j.shouldTrackActionClick, B = F.clickObservable, H = F.mutationObservable, V = F.navigateObservable, G = B.filter(function(e) {
                                        return !U("click", e.closestTrackedAncestor)
                                    }).map(function(e) {
                                        var t = nA(e.event.target, z.actionClickAllowlist);
                                        return e.closestTrackedAncestor = t, null !== e.closestTrackedAncestor && (e.targetElementProperties = q(e.type, e.closestTrackedAncestor)), e
                                    }).filter(nO).filter(function(e) {
                                        return $("click", e.closestTrackedAncestor)
                                    }), W = V ? np(H, V) : H, Y = np(G, W), J = null, K = null, (l = nf(Y, function(e) {
                                        if (J && (clearTimeout(J), J = null), "click" === e.type) K = e, J = setTimeout(function() {
                                            J = null, K = null
                                        }, 500);
                                        else if (K) {
                                            var t = K;
                                            return K = null, Promise.resolve(t)
                                        }
                                        return Promise.resolve(null)
                                    }).subscribe(function(e) {
                                        e && (null == D || D.track(nv, q("click", e.closestTrackedAncestor)))
                                    })) && v.push(l), null == (d = null == t ? void 0 : t.loggerProvider) || d.log("".concat(g, " has been successfully added.")), window.opener && h.enabled && (u = e.cssSelectorAllowlist, c = e.actionClickAllowlist, null == (p = h.messenger) || p.setup(m(m({
                                        dataExtractor: y,
                                        logger: null == t ? void 0 : t.loggerProvider
                                    }, (null == t ? void 0 : t.serverZone) && {
                                        endpoint: nS[t.serverZone]
                                    }), {
                                        isElementSelectable: nC(e, x(x([], E(u), !1), E(c), !1)),
                                        cssSelectorAllowlist: u,
                                        actionClickAllowlist: c
                                    }))), [2])
                                })
                            })
                        },
                        execute: function(e) {
                            return b(void 0, void 0, void 0, function() {
                                return w(this, function(t) {
                                    return [2, e]
                                })
                            })
                        },
                        teardown: function() {
                            return b(void 0, void 0, void 0, function() {
                                var e, t, n, r;
                                return w(this, function(i) {
                                    try {
                                        for (t = (e = S(v)).next(); !t.done; t = e.next()) t.value.unsubscribe()
                                    } catch (e) {
                                        n = {
                                            error: e
                                        }
                                    } finally {
                                        try {
                                            t && !t.done && (r = e.return) && r.call(e)
                                        } finally {
                                            if (n) throw n.error
                                        }
                                    }
                                    return [2]
                                })
                            })
                        }
                    }
                },
                nJ = x(['input[type="button"]', 'input[type="submit"]', 'input[type="reset"]', 'input[type="image"]', 'input[type="file"]'], E(["a", "button", '[role="button"]', '[role="link"]', '[role="menuitem"]', '[role="menuitemcheckbox"]', '[role="menuitemradio"]', '[role="option"]', '[role="tab"]', '[role="treeitem"]', '[contenteditable="true" i]']), !1),
                nK = ["*"],
                nX = ["mutation", "navigate"];

            function nQ(e, t) {
                var n, r, i, o, a = t.event,
                    s = a.clientX,
                    l = a.clientY;
                e.yMin = Math.min(null != (n = e.yMin) ? n : l, l), e.yMax = Math.max(null != (r = e.yMax) ? r : l, l), e.xMin = Math.min(null != (i = e.xMin) ? i : s, s), e.xMax = Math.max(null != (o = e.xMax) ? o : s, s), e.isOutOfBounds = e.yMax - e.yMin > 50 || e.xMax - e.xMin > 50
            }

            function nZ(e) {
                if (0 === e.length) return null;
                var t = e[0],
                    n = e[e.length - 1];
                return {
                    rageClickEvent: m({
                        "[Amplitude] Begin Time": new Date(t.timestamp).toISOString(),
                        "[Amplitude] End Time": new Date(n.timestamp).toISOString(),
                        "[Amplitude] Duration": n.timestamp - t.timestamp,
                        "[Amplitude] Clicks": e.map(function(e) {
                            return {
                                X: e.event.clientX,
                                Y: e.event.clientY,
                                Time: e.timestamp
                            }
                        }),
                        "[Amplitude] Click Count": e.length
                    }, t.targetElementProperties),
                    time: t.timestamp
                }
            }
            var n0 = function(e) {
                void 0 === e && (e = {});
                var t, n, r, i, o, a = "@amplitude/plugin-frustration-browser",
                    s = [],
                    l = null != (n = null == (t = e.rageClicks) ? void 0 : t.cssSelectorAllowlist) ? n : nK,
                    u = null != (i = null == (r = e.deadClicks) ? void 0 : r.cssSelectorAllowlist) ? i : nJ,
                    d = null != (o = e.dataAttributePrefix) ? o : t0,
                    f = new nF(e),
                    p = x([], E(new Set(x(x([], E(l), !1), E(u), !1))), !1),
                    h = function() {
                        var e, t, n = nh(nU("pointerdown").map(function(e) {
                                return f.addAdditionalEventProperties(e, "click", p, d, !0)
                            })),
                            r = nh(nq().map(function(e) {
                                return f.addAdditionalEventProperties(e, "mutation", p, d)
                            }));
                        return window.navigation && (t = nh(new nd(function(e) {
                            var t = function(t) {
                                e.next(m(m({}, t), {
                                    type: "navigate"
                                }))
                            };
                            return window.navigation.addEventListener("navigate", t),
                                function() {
                                    window.navigation.removeEventListener("navigate", t)
                                }
                        }).map(function(e) {
                            return f.addAdditionalEventProperties(e, "navigate", p, d)
                        }))), (e = {})[c.ClickObservable] = n, e[c.MutationObservable] = r, e[c.NavigateObservable] = t, e
                    };
                return {
                    name: a,
                    type: "enrichment",
                    setup: function(t, n) {
                        return b(void 0, void 0, void 0, function() {
                            var r, i, o, c, p, g;
                            return w(this, function(v) {
                                var y, S, E, x, T, k, P, C, _, I, A, O;
                                return "undefined" == typeof document ? [2] : (r = nC(e, l), i = nC(e, u), c = function(e) {
                                    var t = this,
                                        n = e.amplitude,
                                        r = e.allObservables,
                                        i = e.shouldTrackRageClick,
                                        o = r.clickObservable,
                                        a = [],
                                        s = {},
                                        l = null;
                                    return nf(o.filter(function(e) {
                                        return i("click", e.closestTrackedAncestor)
                                    }), function(e) {
                                        return b(t, void 0, void 0, function() {
                                            var t;
                                            return w(this, function(n) {
                                                var r, i, o, u;
                                                return (nQ(s, e), t = null, 0 === a.length || (r = a).length > 0 && r[r.length - 1].closestTrackedAncestor !== e.closestTrackedAncestor || (o = Math.max(0, (i = a).length - 4 + 1), u = i[o], e.timestamp - u.timestamp >= 1e3) || s.isOutOfBounds) ? (l && (t = nZ(a)), a = [], s = {}, e && (nQ(s, e), a.push(e))) : a.push(e), (l && (clearTimeout(l.timerId), l.resolve(t), l = null), a.length >= 4) ? [2, new Promise(function(e) {
                                                    l = {
                                                        resolve: e,
                                                        timerId: setTimeout(function() {
                                                            e(nZ(a))
                                                        }, 1e3)
                                                    }
                                                })] : [2, null]
                                            })
                                        })
                                    }).subscribe(function(e) {
                                        null !== e && n.track("[Amplitude] Rage Click", e.rageClickEvent, {
                                            time: e.time
                                        })
                                    })
                                }({
                                    allObservables: o = h(),
                                    amplitude: n,
                                    shouldTrackRageClick: r
                                }), s.push(c), S = (y = {
                                    amplitude: n,
                                    allObservables: o,
                                    getEventProperties: function(e, t) {
                                        return f.getEventProperties(e, t, d)
                                    },
                                    shouldTrackDeadClick: i
                                }).amplitude, E = y.allObservables, x = y.getEventProperties, T = y.shouldTrackDeadClick, k = E.clickObservable, P = E.mutationObservable, C = E.navigateObservable, _ = k.filter(function(e) {
                                    return nO(e) && T("click", e.closestTrackedAncestor) && e.event.target instanceof Element && null === e.event.target.closest('a[target="_blank"]')
                                }), I = C ? np(P, C) : P, A = np(_, I), O = null, p = nf(A, function(e) {
                                    if (O && nX.includes(e.type)) clearTimeout(O), O = null;
                                    else if ("click" === e.type) return O ? Promise.resolve(null) : new Promise(function(t) {
                                        O = setTimeout(function() {
                                            t(e), O = null
                                        }, 3e3)
                                    });
                                    return Promise.resolve(null)
                                }).subscribe(function(e) {
                                    if (e) {
                                        var t = {
                                            "[Amplitude] X": e.event.clientX,
                                            "[Amplitude] Y": e.event.clientY
                                        };
                                        S.track("[Amplitude] Dead Click", m(m({}, x("click", e.closestTrackedAncestor)), t), {
                                            time: e.timestamp
                                        })
                                    }
                                }), s.push(p), null == (g = null == t ? void 0 : t.loggerProvider) || g.log("".concat(a, " has been successfully added.")), [2])
                            })
                        })
                    },
                    execute: function(e) {
                        return b(void 0, void 0, void 0, function() {
                            return w(this, function(t) {
                                return [2, e]
                            })
                        })
                    },
                    teardown: function() {
                        return b(void 0, void 0, void 0, function() {
                            var e, t, n, r;
                            return w(this, function(i) {
                                try {
                                    for (t = (e = S(s)).next(); !t.done; t = e.next()) t.value.unsubscribe()
                                } catch (e) {
                                    n = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        t && !t.done && (r = e.return) && r.call(e)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                                return [2]
                            })
                        })
                    }
                }
            };

            function n1(e, t, n) {
                e && function e(t) {
                    var n, r, i = t.json,
                        o = t.targetObject,
                        a = t.allowlist,
                        s = t.excludelist,
                        l = t.ancestors,
                        u = t.parentObject,
                        c = t.targetKey;
                    o || (o = i);
                    var d = Object.keys(o);
                    try {
                        for (var f = S(d), p = f.next(); !p.done; p = f.next()) {
                            var h, g = p.value,
                                v = x(x([], E(l), !1), [g], !1);
                            (h = o[g], "string" == typeof h || "number" == typeof h || "boolean" == typeof h || null == h) ? (!n4(v, a) || n4(v, s)) && delete o[g]: e({
                                json: i,
                                targetObject: o[g],
                                allowlist: a,
                                excludelist: s,
                                ancestors: v,
                                parentObject: o,
                                targetKey: g
                            })
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            p && !p.done && (r = f.return) && r.call(f)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    0 === Object.keys(o).length && u && c && delete u[c]
                }({
                    json: e,
                    allowlist: t.map(n2),
                    excludelist: n.map(n2),
                    ancestors: []
                })
            }

            function n2(e) {
                return e.startsWith("/") && (e = e.slice(1)), e.split("/").map(function(e) {
                    return e.replace(/~0/g, "~").replace(/~1/g, "/")
                })
            }

            function n4(e, t) {
                return t.some(function(t) {
                    return function e(t, n, r, i) {
                        if (void 0 === r && (r = 0), void 0 === i && (i = 0), i === n.length) return r === t.length;
                        if (r === t.length) {
                            for (; i < n.length && "**" === n[i];) i++;
                            return i === n.length
                        }
                        var o = n[i];
                        if ("**" === o) {
                            if (i + 1 === n.length) return !0;
                            for (var a = r; a <= t.length; a++)
                                if (e(t, n, a, i + 1)) return !0;
                            return !1
                        }
                        return ("*" === o || o === t[r]) && e(t, n, r + 1, i + 1)
                    }(e, t)
                })
            }
            var n3 = function() {
                    function e(e) {
                        this.request = e
                    }
                    return e.prototype.headers = function(e) {
                        void 0 === e && (e = []);
                        var t, n, r = this.request.headers,
                            i = {};
                        if (Array.isArray(r)) r.forEach(function(e) {
                            var t = E(e, 2),
                                n = t[0],
                                r = t[1];
                            i[n] = r
                        });
                        else if (r instanceof Headers) r.forEach(function(e, t) {
                            i[t] = e
                        });
                        else if ("object" == typeof r && null !== r) try {
                            for (var o = S(Object.entries(r)), a = o.next(); !a.done; a = o.next()) {
                                var s = E(a.value, 2),
                                    l = s[0],
                                    u = s[1];
                                i[l] = u
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                a && !a.done && (n = o.return) && n.call(o)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return rt(i, {
                            allow: e
                        })
                    }, Object.defineProperty(e.prototype, "bodySize", {
                        get: function() {
                            if ("number" == typeof this._bodySize) return this._bodySize;
                            var e = O();
                            if (null == e ? void 0 : e.TextEncoder) {
                                var t = this.request.body;
                                return this._bodySize = n6(t, 100), this._bodySize
                            }
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "method", {
                        get: function() {
                            return this.request.method
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "body", {
                        get: function() {
                            return "string" == typeof this.request.body ? this.request.body : null
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.json = function(e, t) {
                        return void 0 === e && (e = []), void 0 === t && (t = []), b(this, void 0, void 0, function() {
                            return w(this, function(n) {
                                return 0 === e.length ? [2, null] : [2, n9(this.body, e, t)]
                            })
                        })
                    }, e
                }(),
                n5 = function() {
                    function e(e, t) {
                        this.bodyRaw = e, this.requestHeaders = t
                    }
                    return e.prototype.headers = function(e) {
                        return void 0 === e && (e = []), rt(this.requestHeaders, {
                            allow: e
                        })
                    }, Object.defineProperty(e.prototype, "bodySize", {
                        get: function() {
                            return n6(this.bodyRaw, 100)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "body", {
                        get: function() {
                            return "string" == typeof this.bodyRaw ? this.bodyRaw : null
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.json = function(e, t) {
                        return void 0 === e && (e = []), void 0 === t && (t = []), b(this, void 0, void 0, function() {
                            return w(this, function(n) {
                                return 0 === e.length ? [2, null] : [2, n9(this.body, e, t)]
                            })
                        })
                    }, e
                }();

            function n6(e, t) {
                var n, r, i, o, a = O(),
                    s = null == a ? void 0 : a.TextEncoder;
                if (s) {
                    if ("string" == typeof e) o = e, i = new s().encode(o).length;
                    else if (e instanceof Blob) i = (o = e).size;
                    else if (e instanceof URLSearchParams) o = e, i = new s().encode(o.toString()).length;
                    else if (ArrayBuffer.isView(e)) i = (o = e).byteLength;
                    else if (e instanceof ArrayBuffer) i = (o = e).byteLength;
                    else if (e instanceof FormData) {
                        var l = 0,
                            u = 0;
                        try {
                            for (var c = S(e.entries()), d = c.next(); !d.done; d = c.next()) {
                                var f = E(d.value, 2),
                                    p = f[0],
                                    h = f[1];
                                if (l += p.length, "string" == typeof h) l += new s().encode(h).length;
                                else {
                                    if (!(h instanceof Blob)) return;
                                    l += h.size
                                }
                                if (++u >= t) return
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                d && !d.done && (r = c.return) && r.call(c)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        i = l
                    } else if (e instanceof ReadableStream) {
                        o = e;
                        return
                    }
                    return i
                }
            }
            var n7 = function() {
                    function e(e) {
                        this.response = e
                    }
                    return e.prototype.headers = function(e) {
                        var t;
                        if (void 0 === e && (e = []), this.response.headers instanceof Headers) {
                            var n = this.response.headers,
                                r = {};
                            return null == (t = null == n ? void 0 : n.forEach) || t.call(n, function(e, t) {
                                r[t] = e
                            }), rt(r, {
                                allow: e
                            })
                        }
                    }, Object.defineProperty(e.prototype, "bodySize", {
                        get: function() {
                            if (void 0 !== this._bodySize) return this._bodySize;
                            var e, t, n = null == (t = null == (e = this.response.headers) ? void 0 : e.get) ? void 0 : t.call(e, "content-length"),
                                r = n ? parseInt(n, 10) : void 0;
                            return this._bodySize = r, r
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "status", {
                        get: function() {
                            return this.response.status
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.text = function() {
                        return b(this, void 0, void 0, function() {
                            return w(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        this.clonedResponse || (this.clonedResponse = this.response.clone()), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, Promise.race([this.clonedResponse.text(), new Promise(function(e) {
                                            return setTimeout(function() {
                                                return e(null)
                                            }, 500)
                                        })])];
                                    case 2:
                                        return [2, e.sent()];
                                    case 3:
                                        return e.sent(), [2, null];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.json = function(e, t) {
                        return void 0 === e && (e = []), void 0 === t && (t = []), b(this, void 0, void 0, function() {
                            return w(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (0 === e.length) return [2, null];
                                        return [4, this.text()];
                                    case 1:
                                        return [2, n9(n.sent(), e, t)]
                                }
                            })
                        })
                    }, e
                }(),
                n8 = function() {
                    function e(e, t, n, r) {
                        this.statusCode = e, this.headersString = t, this.size = n, this.getJson = r
                    }
                    return Object.defineProperty(e.prototype, "bodySize", {
                        get: function() {
                            return this.size
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "status", {
                        get: function() {
                            return this.statusCode
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.headers = function(e) {
                        if (void 0 === e && (e = []), !this.headersString) return {};
                        var t, n, r = {},
                            i = this.headersString.split("\r\n");
                        try {
                            for (var o = S(i), a = o.next(); !a.done; a = o.next()) {
                                var s = a.value,
                                    l = E(s.split(": "), 2),
                                    u = l[0],
                                    c = l[1];
                                u && c && (r[u] = c)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                a && !a.done && (n = o.return) && n.call(o)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return rt(r, {
                            allow: e
                        })
                    }, e.prototype.json = function(e, t) {
                        return void 0 === e && (e = []), void 0 === t && (t = []), b(this, void 0, void 0, function() {
                            var n;
                            return w(this, function(r) {
                                return 0 === e.length ? [2, null] : (n = this.getJson()) ? (n1(n, e, t), [2, n]) : [2, null]
                            })
                        })
                    }, e
                }();

            function n9(e, t, n) {
                if (!e) return null;
                try {
                    var r = JSON.parse(e);
                    return n1(r, t, n), r
                } catch (e) {
                    return null
                }
            }! function(e) {
                e.REDACT = "redact", e.REMOVE = "remove"
            }(d || (d = {}));
            var re = "[REDACTED]",
                rt = function(e, t) {
                    var n, r, i = t.allow,
                        o = void 0 === i ? [] : i,
                        a = t.strategy,
                        s = void 0 === a ? d.REMOVE : a,
                        l = x([], E(ew), !1),
                        u = {};
                    try {
                        for (var c = S(Object.keys(e)), f = c.next(); !f.done; f = c.next()) {
                            var p = f.value;
                            ! function(t) {
                                var n = t.toLowerCase();
                                l.find(function(e) {
                                    return e.toLowerCase() === n
                                }) ? s === d.REDACT && (u[t] = re) : o.find(function(e) {
                                    return e.toLowerCase() === n
                                }) ? u[t] = e[t] : s === d.REDACT && (u[t] = re)
                            }(p)
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            f && !f.done && (r = c.return) && r.call(c)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return u
                },
                rn = function() {
                    function e(e, t, n, r, i, o, a, s, l, u, c) {
                        void 0 === a && (a = 0), this.type = e, this.method = t, this.timestamp = n, this.startTime = r, this.url = i, this.requestWrapper = o, this.status = a, this.duration = s, this.responseWrapper = l, this.error = u, this.endTime = c
                    }
                    return e.prototype.toSerializable = function() {
                        var e, t, n, r;
                        return Object.fromEntries(Object.entries({
                            type: this.type,
                            method: this.method,
                            url: this.url,
                            timestamp: this.timestamp,
                            status: this.status,
                            duration: this.duration,
                            error: this.error,
                            startTime: this.startTime,
                            endTime: this.endTime,
                            requestHeaders: null == (e = this.requestWrapper) ? void 0 : e.headers(x([], E(eb), !1)),
                            requestBodySize: null == (t = this.requestWrapper) ? void 0 : t.bodySize,
                            responseHeaders: null == (n = this.responseWrapper) ? void 0 : n.headers(x([], E(eb), !1)),
                            responseBodySize: null == (r = this.responseWrapper) ? void 0 : r.bodySize
                        }).filter(function(e) {
                            var t = E(e, 2);
                            return void 0 !== (t[0], t[1])
                        }))
                    }, e
                }(),
                rr = function(e, t) {
                    void 0 === t && (t = L()), this.callback = e, this.id = t
                },
                ri = new(function() {
                    function e(t) {
                        this.eventCallbacks = new Map, this.isObserving = !1, this.logger = t;
                        var n = O();
                        e.isSupported() && (this.globalScope = n)
                    }
                    return e.isSupported = function() {
                        var e = O();
                        return !!e && !!e.fetch
                    }, e.prototype.subscribe = function(e, t) {
                        var n, r, i, o, a, s, l, u, c, d;
                        if (this.logger || (this.logger = t), this.eventCallbacks.set(e.id, e), !this.isObserving) {
                            var f = null == (i = null == (r = null == (n = this.globalScope) ? void 0 : n.XMLHttpRequest) ? void 0 : r.prototype) ? void 0 : i.open,
                                p = null == (s = null == (a = null == (o = this.globalScope) ? void 0 : o.XMLHttpRequest) ? void 0 : a.prototype) ? void 0 : s.send,
                                h = null == (c = null == (u = null == (l = this.globalScope) ? void 0 : l.XMLHttpRequest) ? void 0 : u.prototype) ? void 0 : c.setRequestHeader;
                            f && p && h && this.observeXhr(f, p, h);
                            var g = null == (d = this.globalScope) ? void 0 : d.fetch;
                            g && this.observeFetch(g), this.isObserving = !0
                        }
                    }, e.prototype.unsubscribe = function(e) {
                        this.eventCallbacks.delete(e.id)
                    }, e.prototype.triggerEventCallbacks = function(e) {
                        var t = this;
                        this.eventCallbacks.forEach(function(n) {
                            var r;
                            try {
                                n.callback(e)
                            } catch (e) {
                                null == (r = t.logger) || r.debug("an unexpected error occurred while triggering event callbacks", e)
                            }
                        })
                    }, e.prototype.handleNetworkRequestEvent = function(e, t, n, r, i, o, a) {
                        if (void 0 !== o && void 0 !== a) {
                            var s, l, u, c, d = "GET";
                            if ("object" == typeof t && null !== t && "url" in t && "method" in t ? (l = t.url, d = t.method) : l = null == (s = null == t ? void 0 : t.toString) ? void 0 : s.call(t), l) try {
                                var f = new URL(l);
                                l = "".concat(f.protocol, "//").concat(f.host).concat(f.pathname).concat(f.search).concat(f.hash)
                            } catch (e) {}
                            d = (null == n ? void 0 : n.method) || d, r && (u = r.status), i && (c = {
                                name: i.name || "UnknownError",
                                message: i.message || "An unknown error occurred"
                            }, u = 0);
                            var p = Math.floor(performance.now() - a),
                                h = Math.floor(o + p),
                                g = new rn(e, d, o, o, l, n, u, p, r, c, h);
                            this.triggerEventCallbacks(g)
                        }
                    }, e.prototype.getTimestamps = function() {
                        var e, t;
                        return {
                            startTime: null == (e = Date.now) ? void 0 : e.call(Date),
                            durationStart: null == (t = null == performance ? void 0 : performance.now) ? void 0 : t.call(performance)
                        }
                    }, e.prototype.observeFetch = function(e) {
                        var t = this;
                        this.globalScope && e && (this.globalScope.fetch = function(n, r) {
                            return b(t, void 0, void 0, function() {
                                var t, i, o, a, s;
                                return w(this, function(l) {
                                    switch (l.label) {
                                        case 0:
                                            try {
                                                t = this.getTimestamps()
                                            } catch (e) {
                                                null == (a = this.logger) || a.debug("an unexpected error occurred while retrieving timestamps", e)
                                            }
                                            l.label = 1;
                                        case 1:
                                            return l.trys.push([1, 3, , 4]), [4, e(n, r)];
                                        case 2:
                                            return i = l.sent(), [3, 4];
                                        case 3:
                                            return o = l.sent(), [3, 4];
                                        case 4:
                                            try {
                                                this.handleNetworkRequestEvent("fetch", n, r ? new n3(r) : void 0, i ? new n7(i) : void 0, o, null == t ? void 0 : t.startTime, null == t ? void 0 : t.durationStart)
                                            } catch (e) {
                                                null == (s = this.logger) || s.debug("an unexpected error occurred while handling fetch", e)
                                            }
                                            if (i) return [2, i];
                                            throw o
                                    }
                                })
                            })
                        })
                    }, e.createXhrJsonParser = function(e, t) {
                        return function() {
                            var n, r;
                            try {
                                if ("json" === e.responseType) {
                                    if (null == (n = t.globalScope) ? void 0 : n.structuredClone) return t.globalScope.structuredClone(e.response)
                                } else if (["text", ""].includes(e.responseType)) return JSON.parse(e.responseText)
                            } catch (n) {
                                n instanceof Error && "InvalidStateError" === n.name && (null == (r = t.logger) || r.error("unexpected error when retrieving responseText. responseType='".concat(e.responseType, "'")))
                            }
                            return null
                        }
                    }, e.prototype.observeXhr = function(t, n, r) {
                        if (this.globalScope && t && n) {
                            var i = this.globalScope.XMLHttpRequest.prototype,
                                o = this;
                            i.open = function() {
                                for (var e, n, r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                                var a = E(r, 2),
                                    s = a[0],
                                    l = a[1];
                                try {
                                    this.$$AmplitudeAnalyticsEvent = m({
                                        method: s,
                                        url: null == (e = null == l ? void 0 : l.toString) ? void 0 : e.call(l),
                                        headers: {}
                                    }, o.getTimestamps())
                                } catch (e) {
                                    null == (n = o.logger) || n.error("an unexpected error occurred while calling xhr open", e)
                                }
                                return t.apply(this, r)
                            }, i.send = function() {
                                for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                var i = this,
                                    a = e.createXhrJsonParser(this, o),
                                    s = t[0],
                                    l = i.$$AmplitudeAnalyticsEvent;
                                return i.addEventListener("loadend", function() {
                                    var e;
                                    try {
                                        var t = i.getAllResponseHeaders(),
                                            n = i.getResponseHeader("content-length"),
                                            r = new n8(i.status, t, n ? parseInt(n, 10) : void 0, a),
                                            u = i.$$AmplitudeAnalyticsEvent.headers,
                                            c = new n5(s, u);
                                        l.status = i.status, o.handleNetworkRequestEvent("xhr", {
                                            url: l.url,
                                            method: l.method
                                        }, c, r, void 0, l.startTime, l.durationStart)
                                    } catch (t) {
                                        null == (e = o.logger) || e.error("an unexpected error occurred while handling xhr send", t)
                                    }
                                }), n.apply(i, t)
                            }, i.setRequestHeader = function(e, t) {
                                var n;
                                try {
                                    this.$$AmplitudeAnalyticsEvent.headers[e] = t
                                } catch (e) {
                                    null == (n = o.logger) || n.error("an unexpected error occurred while calling xhr setRequestHeader", e)
                                }
                                r.apply(this, [e, t])
                            }
                        }
                    }, e
                }()),
                ro = "[Amplitude] Network Request",
                ra = "500-599";

            function rs(e, t) {
                return RegExp("^" + t.replace(/[-[\]{}()+?.,\\^$|#\s]/g, "\\$&").replace(/\*/g, ".*") + "$").test(e)
            }

            function rl(e, t) {
                var n, r, i = t.split(",");
                try {
                    for (var o = S(i), a = o.next(); !a.done; a = o.next()) {
                        var s = a.value,
                            l = E(s.split("-").map(Number), 2),
                            u = l[0],
                            c = l[1];
                        if (e === u && void 0 === c || e >= u && e <= c) return !0
                    }
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        a && !a.done && (r = o.return) && r.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return !1
            }

            function ru(e) {
                var t;
                if (e) try {
                    var n = null == (t = O()) ? void 0 : t.location.href,
                        r = new URL(e, n),
                        i = r.searchParams.toString(),
                        o = r.hash.replace("#", ""),
                        a = r.href,
                        s = r.host;
                    r.hash = "", r.search = "";
                    var l = r.href;
                    return {
                        query: i,
                        fragment: o,
                        href: a,
                        hrefWithoutQueryOrHash: l,
                        host: s
                    }
                } catch (e) {
                    return
                }
            }

            function rc(e) {
                return "object" != typeof e || null === e ? e ? x([], E(eb), !1) : void 0 : 0 !== e.length ? e : void 0
            }

            function rd(e) {
                var t, n;
                return !(null == (t = null == e ? void 0 : e.allowlist) ? void 0 : t.length) && !(null == (n = null == e ? void 0 : e.blocklist) ? void 0 : n.length)
            }(f || (f = {})).NetworkObservable = "networkObservable";
            var rf = function(e) {
                void 0 === e && (e = {});
                var t, n = "@amplitude/plugin-network-capture-browser",
                    r = function() {
                        var e, n = new nd(function(e) {
                            var n = new rr(function(t) {
                                var n = {
                                    event: t,
                                    timestamp: Date.now(),
                                    type: "network"
                                };
                                e.next(n)
                            });
                            return ri.subscribe(n, t),
                                function() {
                                    ri.unsubscribe(n)
                                }
                        });
                        return (e = {})[f.NetworkObservable] = n, e
                    };
                return {
                    name: n,
                    type: "enrichment",
                    setup: function(i, o) {
                        return b(void 0, void 0, void 0, function() {
                            var a;
                            return w(this, function(s) {
                                var l, u, c, d, f;
                                return "undefined" == typeof document ? [2] : (a = r(), t = null == i ? void 0 : i.loggerProvider, u = (l = {
                                    allObservables: a,
                                    networkTrackingOptions: e,
                                    amplitude: o,
                                    loggerProvider: t
                                }).allObservables, c = l.networkTrackingOptions, d = l.amplitude, f = l.loggerProvider, p = u.networkObservable.filter(function(e) {
                                    return function(e, t) {
                                        void 0 === t && (t = {});
                                        var n, r, i = ru(e.url);
                                        if (!i) return !1;
                                        var o = i.host;
                                        return !(!1 !== t.ignoreAmplitudeRequests && (rs(o, "*.amplitude.com") || rs(o, "amplitude.com")) || (null == (n = t.ignoreHosts) ? void 0 : n.find(function(e) {
                                            return rs(o, e)
                                        }))) && (!!t.captureRules || void 0 === e.status || !!rl(e.status, ra)) && (!t.captureRules || (x([], E(t.captureRules), !1).reverse().find(function(t) {
                                            if (r = function(e, t, n, r, i) {
                                                    if ((!e.hosts || e.hosts.find(function(e) {
                                                            return rs(t, e)
                                                        })) && (!r || !e.urls || nx(r, e.urls)) && (!i || !e.methods || e.methods.find(function(e) {
                                                            return i.toLowerCase() === e.toLowerCase() || "*" === e
                                                        }))) return (!n && 0 !== n || !!rl(n, e.statusCodeRange || ra)) && !0
                                                }(t, o, e.status, e.url, e.method)) {
                                                var n = rc(t.responseHeaders);
                                                if (e.responseWrapper && n) {
                                                    var i = e.responseWrapper.headers(n);
                                                    i && (e.responseHeaders = i)
                                                }
                                                var a = rc(t.requestHeaders);
                                                if (e.requestWrapper && a) {
                                                    var s = e.requestWrapper.headers(a);
                                                    s && (e.requestHeaders = s)
                                                }
                                                e.responseWrapper && t.responseBody && !rd(t.responseBody) && (e.responseBodyJson = e.responseWrapper.json(t.responseBody.allowlist, t.responseBody.blocklist)), e.requestWrapper && t.requestBody && !rd(t.requestBody) && (e.requestBodyJson = e.requestWrapper.json(t.requestBody.allowlist, t.requestBody.blocklist))
                                            }
                                            return void 0 !== r
                                        }), !!r)) && !(e.requestWrapper && function(e, t) {
                                            if (e.includes("amplitude.com")) try {
                                                var n = t.body;
                                                if ("string" != typeof n) return !1;
                                                if (JSON.parse(n).events.find(function(e) {
                                                        return e.event_type === ro
                                                    })) return !0
                                            } catch (e) {}
                                            return !1
                                        }(o, e.requestWrapper))
                                    }(e.event, c)
                                }).subscribe(function(e) {
                                    var t, n, r, i = e.event,
                                        o = ru(i.url);
                                    if (o) {
                                        var a = null == (n = i.responseWrapper) ? void 0 : n.bodySize,
                                            s = null == (r = i.requestWrapper) ? void 0 : r.bodySize;
                                        ! function(e, t, n, r) {
                                            b(this, void 0, void 0, function() {
                                                var i, o, a;
                                                return w(this, function(s) {
                                                    switch (s.label) {
                                                        case 0:
                                                            if (!(t.requestBodyJson || t.responseBodyJson)) return [3, 2];
                                                            return [4, Promise.all([t.requestBodyJson, t.responseBodyJson])];
                                                        case 1:
                                                            if (o = (i = E.apply(void 0, [s.sent(), 2]))[0], a = i[1], o) try {
                                                                e["[Amplitude] Request Body"] = JSON.stringify(o)
                                                            } catch (e) {
                                                                null == r || r.debug("Failed to stringify request body", e)
                                                            }
                                                            if (a) try {
                                                                e["[Amplitude] Response Body"] = JSON.stringify(a)
                                                            } catch (e) {
                                                                null == r || r.debug("Failed to stringify response body")
                                                            }
                                                            s.label = 2;
                                                        case 2:
                                                            return null == n || n.track(ro, e), [2]
                                                    }
                                                })
                                            })
                                        }(((t = {})["[Amplitude] URL"] = o.hrefWithoutQueryOrHash, t["[Amplitude] URL Query"] = o.query, t["[Amplitude] URL Fragment"] = o.fragment, t["[Amplitude] Request Method"] = i.method, t["[Amplitude] Status Code"] = i.status, t["[Amplitude] Start Time"] = i.startTime, t["[Amplitude] Completion Time"] = i.endTime, t["[Amplitude] Duration"] = i.duration, t["[Amplitude] Request Body Size"] = s, t["[Amplitude] Response Body Size"] = a, t["[Amplitude] Request Type"] = i.type, t["[Amplitude] Request Headers"] = i.requestHeaders, t["[Amplitude] Response Headers"] = i.responseHeaders, t), i, d, f)
                                    }
                                }), null == t || t.log("".concat(n, " has been successfully added.")), [2])
                            })
                        })
                    },
                    execute: function(e) {
                        return b(void 0, void 0, void 0, function() {
                            return w(this, function(t) {
                                return [2, e]
                            })
                        })
                    },
                    teardown: function() {
                        return b(void 0, void 0, void 0, function() {
                            return w(this, function(e) {
                                return p.unsubscribe(), [2]
                            })
                        })
                    }
                }
            };
            let rp = -1,
                rh = e => {
                    addEventListener("pageshow", t => {
                        t.persisted && (rp = t.timeStamp, e(t))
                    }, !0)
                },
                rg = (e, t, n, r) => {
                    let i, o;
                    return a => {
                        t.value >= 0 && (a || r) && ((o = t.value - (i ? ? 0)) || void 0 === i) && (i = t.value, t.delta = o, t.rating = ((e, t) => e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good")(t.value, n), e(t))
                    }
                },
                rv = e => {
                    requestAnimationFrame(() => requestAnimationFrame(() => e()))
                },
                rm = () => {
                    let e = performance.getEntriesByType("navigation")[0];
                    if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e
                },
                ry = () => {
                    let e = rm();
                    return e ? .activationStart ? ? 0
                },
                rb = (e, t = -1) => {
                    let n = rm(),
                        r = "navigate";
                    return rp >= 0 ? r = "back-forward-cache" : n && (document.prerendering || ry() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
                        name: e,
                        value: t,
                        rating: "good",
                        delta: 0,
                        entries: [],
                        id: `v5-${Date.now()}-${Math.floor(0x82f79cd8fff*Math.random())+1e12}`,
                        navigationType: r
                    }
                },
                rw = new WeakMap;

            function rS(e, t) {
                return rw.get(e) || rw.set(e, new t), rw.get(e)
            }
            class rE {
                t;
                i = 0;
                o = [];
                h(e) {
                    if (e.hadRecentInput) return;
                    let t = this.o[0],
                        n = this.o.at(-1);
                    this.i && t && n && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (this.i += e.value, this.o.push(e)) : (this.i = e.value, this.o = [e]), this.t ? .(e)
                }
            }
            let rx = (e, t, n = {}) => {
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                            let r = new PerformanceObserver(e => {
                                Promise.resolve().then(() => {
                                    t(e.getEntries())
                                })
                            });
                            return r.observe({
                                type: e,
                                buffered: !0,
                                ...n
                            }), r
                        }
                    } catch {}
                },
                rT = e => {
                    let t = !1;
                    return () => {
                        t || (e(), t = !0)
                    }
                },
                rk = -1,
                rP = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
                rC = e => {
                    "hidden" === document.visibilityState && rk > -1 && (rk = "visibilitychange" === e.type ? e.timeStamp : 0, rI())
                },
                r_ = () => {
                    addEventListener("visibilitychange", rC, !0), addEventListener("prerenderingchange", rC, !0)
                },
                rI = () => {
                    removeEventListener("visibilitychange", rC, !0), removeEventListener("prerenderingchange", rC, !0)
                },
                rA = () => {
                    if (rk < 0) {
                        let e = ry();
                        rk = (document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").filter(t => "hidden" === t.name && t.startTime > e)[0] ? .startTime) ? ? rP(), r_(), rh(() => {
                            setTimeout(() => {
                                rk = rP(), r_()
                            })
                        })
                    }
                    return {
                        get firstHiddenTime() {
                            return rk
                        }
                    }
                },
                rO = e => {
                    document.prerendering ? addEventListener("prerenderingchange", () => e(), !0) : e()
                },
                rM = [1800, 3e3],
                rL = (e, t = {}) => {
                    rO(() => {
                        let n = rA(),
                            r, i = rb("FCP"),
                            o = rx("paint", e => {
                                for (let t of e) "first-contentful-paint" === t.name && (o.disconnect(), t.startTime < n.firstHiddenTime && (i.value = Math.max(t.startTime - ry(), 0), i.entries.push(t), r(!0)))
                            });
                        o && (r = rg(e, i, rM, t.reportAllChanges), rh(n => {
                            r = rg(e, i = rb("FCP"), rM, t.reportAllChanges), rv(() => {
                                i.value = performance.now() - n.timeStamp, r(!0)
                            })
                        }))
                    })
                },
                rR = [.1, .25],
                rN = 0,
                rj = 1 / 0,
                rD = 0,
                rF = e => {
                    for (let t of e) t.interactionId && (rj = Math.min(rj, t.interactionId), rN = (rD = Math.max(rD, t.interactionId)) ? (rD - rj) / 7 + 1 : 0)
                },
                rz = () => r ? rN : performance.interactionCount ? ? 0,
                rq = 0;
            class rU {
                u = [];
                l = new Map;
                m;
                p;
                v() {
                    rq = rz(), this.u.length = 0, this.l.clear()
                }
                P() {
                    let e = Math.min(this.u.length - 1, Math.floor((rz() - rq) / 50));
                    return this.u[e]
                }
                h(e) {
                    if (this.m ? .(e), !e.interactionId && "first-input" !== e.entryType) return;
                    let t = this.u.at(-1),
                        n = this.l.get(e.interactionId);
                    if (n || this.u.length < 10 || e.duration > t.T) {
                        if (n ? e.duration > n.T ? (n.entries = [e], n.T = e.duration) : e.duration === n.T && e.startTime === n.entries[0].startTime && n.entries.push(e) : (n = {
                                id: e.interactionId,
                                entries: [e],
                                T: e.duration
                            }, this.l.set(n.id, n), this.u.push(n)), this.u.sort((e, t) => t.T - e.T), this.u.length > 10)
                            for (let e of this.u.splice(10)) this.l.delete(e.id);
                        this.p ? .(n)
                    }
                }
            }
            let r$ = e => {
                    let t = globalThis.requestIdleCallback || setTimeout;
                    "hidden" === document.visibilityState ? e() : (t(e = rT(e)), document.addEventListener("visibilitychange", e, {
                        once: !0
                    }))
                },
                rB = [200, 500];
            class rH {
                m;
                h(e) {
                    this.m ? .(e)
                }
            }
            let rV = [2500, 4e3],
                rG = [800, 1800],
                rW = e => {
                    document.prerendering ? rO(() => rW(e)) : "complete" !== document.readyState ? addEventListener("load", () => rW(e), !0) : setTimeout(e)
                };

            function rY(e) {
                var t, n;
                return {
                    value: e.value,
                    rating: e.rating,
                    delta: e.delta,
                    navigationType: e.navigationType,
                    id: e.id,
                    timestamp: Math.floor((n = (null == (t = e.entries[0]) ? void 0 : t.startTime) || 0, performance.timeOrigin + n)),
                    navigationStart: Math.floor(performance.timeOrigin)
                }
            }
            var rJ = function() {
                    var e = null,
                        t = O(),
                        n = null == t ? void 0 : t.document,
                        i = null == t ? void 0 : t.location;
                    return {
                        name: "web-vitals-browser",
                        type: "enrichment",
                        setup: function(t, o) {
                            return b(void 0, void 0, void 0, function() {
                                var a, s;
                                return w(this, function(l) {
                                    return void 0 === n || (a = nT((null == i ? void 0 : i.href) || "", t.loggerProvider), s = {
                                        "[Amplitude] Page Domain": (null == i ? void 0 : i.hostname) || "",
                                        "[Amplitude] Page Location": a,
                                        "[Amplitude] Page Path": nT((null == i ? void 0 : i.pathname) || "", t.loggerProvider),
                                        "[Amplitude] Page Title": "undefined" != typeof document && document.title || "",
                                        "[Amplitude] Page URL": nT(a.split("?")[0], t.loggerProvider)
                                    }, ((e, t = {}) => {
                                        rO(() => {
                                            let n = rA(),
                                                r, i = rb("LCP"),
                                                o = rS(t, rH),
                                                a = e => {
                                                    for (let a of (t.reportAllChanges || (e = e.slice(-1)), e)) o.h(a), a.startTime < n.firstHiddenTime && (i.value = Math.max(a.startTime - ry(), 0), i.entries = [a], r())
                                                },
                                                s = rx("largest-contentful-paint", a);
                                            if (s) {
                                                r = rg(e, i, rV, t.reportAllChanges);
                                                let n = rT(() => {
                                                    a(s.takeRecords()), s.disconnect(), r(!0)
                                                });
                                                for (let e of ["keydown", "click", "visibilitychange"]) addEventListener(e, () => r$(n), {
                                                    capture: !0,
                                                    once: !0
                                                });
                                                rh(n => {
                                                    r = rg(e, i = rb("LCP"), rV, t.reportAllChanges), rv(() => {
                                                        i.value = performance.now() - n.timeStamp, r(!0)
                                                    })
                                                })
                                            }
                                        })
                                    })(function(e) {
                                        s["[Amplitude] LCP"] = rY(e)
                                    }), rL(function(e) {
                                        s["[Amplitude] FCP"] = rY(e)
                                    }), ((e, t = {}) => {
                                        globalThis.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype && rO(() => {
                                            "interactionCount" in performance || r || (r = rx("event", rF, {
                                                type: "event",
                                                buffered: !0,
                                                durationThreshold: 0
                                            }));
                                            let n, i = rb("INP"),
                                                o = rS(t, rU),
                                                a = e => {
                                                    r$(() => {
                                                        for (let t of e) o.h(t);
                                                        let t = o.P();
                                                        t && t.T !== i.value && (i.value = t.T, i.entries = t.entries, n())
                                                    })
                                                },
                                                s = rx("event", a, {
                                                    durationThreshold: t.durationThreshold ? ? 40
                                                });
                                            n = rg(e, i, rB, t.reportAllChanges), s && (s.observe({
                                                type: "first-input",
                                                buffered: !0
                                            }), document.addEventListener("visibilitychange", () => {
                                                "hidden" === document.visibilityState && (a(s.takeRecords()), n(!0))
                                            }), rh(() => {
                                                o.v(), n = rg(e, i = rb("INP"), rB, t.reportAllChanges)
                                            }))
                                        })
                                    })(function(e) {
                                        s["[Amplitude] INP"] = rY(e)
                                    }), ((e, t = {}) => {
                                        rL(rT(() => {
                                            let n, r = rb("CLS", 0),
                                                i = rS(t, rE),
                                                o = e => {
                                                    for (let t of e) i.h(t);
                                                    i.i > r.value && (r.value = i.i, r.entries = i.o, n())
                                                },
                                                a = rx("layout-shift", o);
                                            a && (n = rg(e, r, rR, t.reportAllChanges), document.addEventListener("visibilitychange", () => {
                                                "hidden" === document.visibilityState && (o(a.takeRecords()), n(!0))
                                            }), rh(() => {
                                                i.i = 0, n = rg(e, r = rb("CLS", 0), rR, t.reportAllChanges), rv(() => n())
                                            }), setTimeout(n))
                                        }))
                                    })(function(e) {
                                        s["[Amplitude] CLS"] = rY(e)
                                    }), ((e, t = {}) => {
                                        let n = rb("TTFB"),
                                            r = rg(e, n, rG, t.reportAllChanges);
                                        rW(() => {
                                            let i = rm();
                                            i && (n.value = Math.max(i.responseStart - ry(), 0), n.entries = [i], r(!0), rh(() => {
                                                (r = rg(e, n = rb("TTFB", 0), rG, t.reportAllChanges))(!0)
                                            }))
                                        })
                                    })(function(e) {
                                        s["[Amplitude] TTFB"] = rY(e)
                                    }), e = function() {
                                        "hidden" === n.visibilityState && e && (o.track("[Amplitude] Web Vitals", s), n.removeEventListener("visibilitychange", e), e = null)
                                    }, n.addEventListener("visibilitychange", e)), [2]
                                })
                            })
                        },
                        execute: function(e) {
                            return b(void 0, void 0, void 0, function() {
                                return w(this, function(t) {
                                    return [2, e]
                                })
                            })
                        },
                        teardown: function() {
                            return b(void 0, void 0, void 0, function() {
                                return w(this, function(t) {
                                    return e && (null == n || n.removeEventListener("visibilitychange", e)), [2]
                                })
                            })
                        }
                    }
                },
                rK = function(e, t, n) {
                    return void 0 === t && (t = ""), void 0 === n && (n = 10), ["AMP", t, e.substring(0, n)].filter(Boolean).join("_")
                },
                rX = function(e) {
                    var t = e.split(".");
                    return t.length <= 2 ? e : t.slice(t.length - 2, t.length).join(".")
                },
                rQ = function(e, t, n, r, i) {
                    void 0 === i && (i = !0), e.referrer;
                    var o = e.referring_domain,
                        a = y(e, ["referrer", "referring_domain"]),
                        s = t || {},
                        l = (s.referrer, s.referring_domain),
                        u = y(s, ["referrer", "referring_domain"]);
                    if (rZ(n.excludeReferrers, e.referring_domain)) return r.debug("This is not a new campaign because ".concat(e.referring_domain, " is in the exclude referrer list.")), !1;
                    if (!i && Object.values(e).every(function(e) {
                            return !e
                        }) && t) return r.debug("This is not a new campaign because this is a direct traffic in the same session."), !1;
                    var c = JSON.stringify(a) !== JSON.stringify(u),
                        d = rX(o || "") !== rX(l || ""),
                        f = !t || c || d;
                    return f ? r.debug("This is a new campaign. An $identify event will be sent.") : r.debug("This is not a new campaign because it's the same as the previous one."), f
                },
                rZ = function(e, t) {
                    return void 0 === e && (e = []), void 0 === t && (t = ""), e.some(function(e) {
                        return e instanceof RegExp ? e.test(t) : e === t
                    })
                },
                r0 = function(e) {
                    var t = e;
                    return t ? (t.startsWith(".") && (t = t.substring(1)), [new RegExp("".concat(t.replace(".", "\\."), "$"))]) : []
                },
                r1 = function() {
                    function e(e, t) {
                        var n;
                        this.shouldTrackNewCampaign = !1, this.options = m({
                            initialEmptyValue: "EMPTY",
                            resetSessionOnNewCampaign: !1,
                            excludeReferrers: r0(null == (n = t.cookieOptions) ? void 0 : n.domain)
                        }, e), this.storage = t.cookieStorage, this.storageKey = rK(t.apiKey, "MKTG"), this.webExpStorageKey = rK(t.apiKey, "MKTG_ORIGINAL"), this.currentCampaign = ey, this.sessionTimeout = t.sessionTimeout, this.lastEventTime = t.lastEventTime, this.logger = t.loggerProvider, t.loggerProvider.log("Installing web attribution tracking.")
                    }
                    return e.prototype.init = function() {
                        return b(this, void 0, void 0, function() {
                            var e, t;
                            return w(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.fetchCampaign()];
                                    case 1:
                                        if (t = E.apply(void 0, [n.sent(), 2]), this.currentCampaign = t[0], this.previousCampaign = t[1], e = !this.lastEventTime || eH(this.sessionTimeout, this.lastEventTime), !rQ(this.currentCampaign, this.previousCampaign, this.options, this.logger, e)) return [3, 3];
                                        return this.shouldTrackNewCampaign = !0, [4, this.storage.set(this.storageKey, this.currentCampaign)];
                                    case 2:
                                        n.sent(), n.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.fetchCampaign = function() {
                        return b(this, void 0, void 0, function() {
                            var e;
                            return w(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.storage.get(this.webExpStorageKey)];
                                    case 1:
                                        if (!(e = t.sent())) return [3, 3];
                                        return [4, this.storage.remove(this.webExpStorageKey)];
                                    case 2:
                                        t.sent(), t.label = 3;
                                    case 3:
                                        return [4, Promise.all([e || new tz().parse(), this.storage.get(this.storageKey)])];
                                    case 4:
                                        return [2, t.sent()]
                                }
                            })
                        })
                    }, e.prototype.generateCampaignEvent = function(e) {
                        this.shouldTrackNewCampaign = !1;
                        var t, n, r = (t = this.currentCampaign, n = this.options, eq(Object.entries(m(m({}, ey), t)).reduce(function(e, t) {
                            var r, i = E(t, 2),
                                o = i[0],
                                a = i[1];
                            return (e.setOnce("initial_".concat(o), null != (r = null != a ? a : n.initialEmptyValue) ? r : "EMPTY"), a) ? e.set(o, a) : e.unset(o)
                        }, new eF)));
                        return e && (r.event_id = e), r
                    }, e.prototype.shouldSetSessionIdOnNewCampaign = function() {
                        return this.shouldTrackNewCampaign && !!this.options.resetSessionOnNewCampaign
                    }, e
                }(),
                r2 = "AMP_CURRENT_PAGE",
                r4 = "AMP_PREVIOUS_PAGE",
                r3 = "AMP_URL_INFO";
            ! function(e) {
                e.Direct = "direct", e.Internal = "internal", e.External = "external"
            }(h || (h = {}));
            var r5 = new Set([l.IDENTIFY, l.GROUP_IDENTIFY, l.REVENUE]),
                r6 = function() {
                    var e = O(),
                        t = void 0,
                        n = !1,
                        r = void 0,
                        i = !1,
                        o = !1,
                        a = function(e) {
                            var t;
                            try {
                                var n = nT(e, r);
                                t = new URL(n).hostname
                            } catch (e) {
                                null == r || r.error("Could not parse URL: ", e)
                            }
                            return t
                        },
                        s = function(e) {
                            var t = "undefined" != typeof location && location.hostname || "";
                            switch (e ? a(e) : void 0) {
                                case void 0:
                                    return h.Direct;
                                case t:
                                    return h.Internal;
                                default:
                                    return h.External
                            }
                        },
                        l = function() {
                            b(void 0, void 0, void 0, function() {
                                var e, r, i, o, a;
                                return w(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (!(t && n)) return [3, 3];
                                            return [4, t.get(r3)];
                                        case 1:
                                            return e = s.sent(), r = nT("undefined" != typeof location && location.href || ""), i = (null == e ? void 0 : e[r2]) || "", o = void 0, o = r === i ? (null == e ? void 0 : e[r4]) || "" : i || document.referrer || "", [4, t.set(r3, ((a = {})[r2] = r, a[r4] = o, a))];
                                        case 2:
                                            s.sent(), s.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        };
                    return {
                        name: "@amplitude/plugin-page-url-enrichment-browser",
                        type: "enrichment",
                        setup: function(a, s) {
                            return b(void 0, void 0, void 0, function() {
                                return w(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if ((r = a.loggerProvider).log("Installing @amplitude/plugin-page-url-enrichment-browser"), o = !0, !e) return [3, 2];
                                            return [4, (t = new ts(e.sessionStorage)).isEnabled()];
                                        case 1:
                                            n = s.sent(), e.addEventListener("popstate", l), i || (e.history.pushState = new Proxy(e.history.pushState, {
                                                apply: function(e, t, n) {
                                                    var r = E(n, 3),
                                                        i = r[0],
                                                        a = r[1],
                                                        s = r[2];
                                                    e.apply(t, [i, a, s]), o && l()
                                                }
                                            }), e.history.replaceState = new Proxy(e.history.replaceState, {
                                                apply: function(e, t, n) {
                                                    var r = E(n, 3),
                                                        i = r[0],
                                                        a = r[1],
                                                        s = r[2];
                                                    e.apply(t, [i, a, s]), o && l()
                                                }
                                            }), i = !0), s.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        },
                        execute: function(e) {
                            return b(void 0, void 0, void 0, function() {
                                var r, i, o, a, l;
                                return w(this, function(u) {
                                    switch (u.label) {
                                        case 0:
                                            if (r = nT("undefined" != typeof location && location.href || ""), !(t && n)) return [3, 5];
                                            return [4, t.get(r3)];
                                        case 1:
                                            if (null == (i = u.sent()) ? void 0 : i[r2]) return [3, 3];
                                            return [4, t.set(r3, ((l = {})[r2] = r, l[r4] = document.referrer || "", l))];
                                        case 2:
                                            u.sent(), u.label = 3;
                                        case 3:
                                            return [4, t.get(r3)];
                                        case 4:
                                            if (o = u.sent(), a = "", o && (a = o[r4] || ""), r5.has(e.event_type)) return [2, e];
                                            e.event_properties = m(m({}, e.event_properties || {}), {
                                                "[Amplitude] Page Domain": r7(e, "[Amplitude] Page Domain", "undefined" != typeof location && location.hostname || ""),
                                                "[Amplitude] Page Location": r7(e, "[Amplitude] Page Location", r),
                                                "[Amplitude] Page Path": r7(e, "[Amplitude] Page Path", "undefined" != typeof location && nT(location.pathname) || ""),
                                                "[Amplitude] Page Title": r7(e, "[Amplitude] Page Title", tF(tD)),
                                                "[Amplitude] Page URL": r7(e, "[Amplitude] Page URL", r.split("?")[0]),
                                                "[Amplitude] Previous Page Location": a,
                                                "[Amplitude] Previous Page Type": s(a)
                                            }), u.label = 5;
                                        case 5:
                                            return [2, e]
                                    }
                                })
                            })
                        },
                        teardown: function() {
                            return b(void 0, void 0, void 0, function() {
                                return w(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (e && (e.removeEventListener("popstate", l), o = !1), !(t && n)) return [3, 2];
                                            return [4, t.set(r3, {})];
                                        case 1:
                                            r.sent(), r.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        }
                    }
                };

            function r7(e, t, n) {
                return (e.event_properties || (e.event_properties = {}), void 0 === e.event_properties[t]) ? n : e.event_properties[t]
            }
            var r8 = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._diagnosticsSampleRate = 0, t
                }
                return v(t, e), t.prototype.init = function(e, t, n) {
                    var r, i;
                    return void 0 === e && (e = ""), arguments.length > 2 ? (r = t, i = n) : "string" == typeof t ? (r = t, i = void 0) : (r = null == t ? void 0 : t.userId, i = t), I(this._init(m(m({}, i), {
                        userId: r,
                        apiKey: e
                    })))
                }, t.prototype._init = function(t) {
                    var n, r, i, o, a;
                    return b(this, void 0, void 0, function() {
                        var s, l, u, c, d, f, p, h, g = this;
                        return w(this, function(v) {
                            var T, k, P, C, _;
                            switch (v.label) {
                                case 0:
                                    if (this.initializing) return [2];
                                    return this.initializing = !0, [4, (T = t.apiKey, k = t, P = this, void 0 === k && (k = {}), b(void 0, void 0, void 0, function() {
                                        var e, t, n, r, i, o, a, s, l, u, c, d, f, p, h, g, v, y, S, x, C, _, I, A, O, M, R, N, j, D, F, z, q, U, $, B, H, V, W, Y, J, K, X, Q, Z;
                                        return w(this, function(ee) {
                                            var et, en, er;
                                            switch (ee.label) {
                                                case 0:
                                                    if (e = k.identityStorage || t_, C = {}, e === t_) return [3, 1];
                                                    return n = "", [3, 5];
                                                case 1:
                                                    if (null == (I = null == (_ = k.cookieOptions) ? void 0 : _.domain)) return [3, 2];
                                                    return r = I, [3, 4];
                                                case 2:
                                                    return [4, b(void 0, void 0, void 0, function() {
                                                        var e, t, n, r, i, o;
                                                        return w(this, function(a) {
                                                            switch (a.label) {
                                                                case 0:
                                                                    return [4, new tn().isEnabled()];
                                                                case 1:
                                                                    if (!a.sent() || "undefined" == typeof location || !location.hostname) return [2, ""];
                                                                    for (e = (null != et ? et : location.hostname).split("."), t = [], n = "AMP_TLDTEST", r = e.length - 2; r >= 0; --r) t.push(e.slice(r).join("."));
                                                                    r = 0, a.label = 2;
                                                                case 2:
                                                                    if (!(r < t.length)) return [3, 7];
                                                                    return [4, (o = new tn({
                                                                        domain: "." + (i = t[r])
                                                                    })).set(n, 1)];
                                                                case 3:
                                                                    return a.sent(), [4, o.get(n)];
                                                                case 4:
                                                                    if (!a.sent()) return [3, 6];
                                                                    return [4, o.remove(n)];
                                                                case 5:
                                                                    return a.sent(), [2, "." + i];
                                                                case 6:
                                                                    return r++, [3, 2];
                                                                case 7:
                                                                    return [2, ""]
                                                            }
                                                        })
                                                    })];
                                                case 3:
                                                    r = ee.sent(), ee.label = 4;
                                                case 4:
                                                    n = r, ee.label = 5;
                                                case 5:
                                                    return t = m.apply(void 0, [(C.domain = n, C.expiration = 365, C.sameSite = "Lax", C.secure = !1, C.upgrade = !0, C), k.cookieOptions]), [4, (en = i = tA(k.identityStorage, t), void 0 === (er = null == (O = null == (A = k.cookieOptions) ? void 0 : A.upgrade) || O) && (er = !0), b(void 0, void 0, void 0, function() {
                                                        var e, t, n, r, i, o, a, s, l;
                                                        return w(this, function(u) {
                                                            switch (u.label) {
                                                                case 0:
                                                                    return e = "".concat("amp", "_").concat(T.substring(0, 6)), [4, en.getRaw(e)];
                                                                case 1:
                                                                    if (!(t = u.sent())) return [2, {
                                                                        optOut: !1
                                                                    }];
                                                                    if (!er) return [3, 3];
                                                                    return [4, en.remove(e)];
                                                                case 2:
                                                                    u.sent(), u.label = 3;
                                                                case 3:
                                                                    return r = (n = E(t.split("."), 6))[0], i = n[1], o = n[2], a = n[3], s = n[4], l = n[5], [2, {
                                                                        deviceId: r,
                                                                        userId: tp(i),
                                                                        sessionId: tf(a),
                                                                        lastEventId: tf(l),
                                                                        lastEventTime: tf(s),
                                                                        optOut: !!o
                                                                    }]
                                                            }
                                                        })
                                                    }))];
                                                case 6:
                                                    return o = ee.sent(), [4, i.get(tt(T))];
                                                case 7:
                                                    return a = ee.sent(), u = !(l = (s = G()).ampTimestamp ? Number(s.ampTimestamp) : void 0) || Date.now() < l, c = null != (D = null != (j = null != (N = null != (M = k.deviceId) ? M : u ? null != (R = s.ampDeviceId) ? R : s.deviceId : void 0) ? N : null == a ? void 0 : a.deviceId) ? j : o.deviceId) ? D : L(), d = null != (F = null == a ? void 0 : a.lastEventId) ? F : o.lastEventId, f = null != (z = null == a ? void 0 : a.lastEventTime) ? z : o.lastEventTime, p = null != (U = null != (q = k.optOut) ? q : null == a ? void 0 : a.optOut) ? U : o.optOut, h = null != ($ = null == a ? void 0 : a.sessionId) ? $ : o.sessionId, g = null != (H = null != (B = k.userId) ? B : null == a ? void 0 : a.userId) ? H : o.userId, P.previousSessionDeviceId = null != (V = null == a ? void 0 : a.deviceId) ? V : o.deviceId, P.previousSessionUserId = null != (W = null == a ? void 0 : a.userId) ? W : o.userId, v = {
                                                        ipAddress: null == (J = null == (Y = k.trackingOptions) ? void 0 : Y.ipAddress) || J,
                                                        language: null == (X = null == (K = k.trackingOptions) ? void 0 : K.language) || X,
                                                        platform: null == (Z = null == (Q = k.trackingOptions) ? void 0 : Q.platform) || Z
                                                    }, y = null == a ? void 0 : a.pageCounter, S = null == a ? void 0 : a.debugLogsEnabled, void 0 !== k.autocapture && (k.defaultTracking = k.autocapture), [4, (x = new tI(T, k.appVersion, i, t, k.defaultTracking, k.autocapture, c, k.flushIntervalMillis, k.flushMaxRetries, k.flushQueueSize, e, k.ingestionMetadata, k.instanceName, d, f, k.loggerProvider, k.logLevel, k.minIdLength, k.offline, p, k.partnerId, k.plan, k.serverUrl, k.serverZone, h, k.sessionTimeout, k.storageProvider, v, k.transport, k.useBatch, k.fetchRemoteConfig, g, y, S, k.networkTrackingOptions, k.identify, k.enableDiagnostics, P._diagnosticsSampleRate, void 0, k.remoteConfig)).storageProvider.isEnabled()];
                                                case 8:
                                                    return ee.sent() || (x.loggerProvider.warn("Storage provider ".concat(x.storageProvider.constructor.name, " is not enabled. Falling back to MemoryStorage.")), x.storageProvider = new te), [2, x]
                                            }
                                        })
                                    }))];
                                case 1:
                                    if (!(null == (n = (s = v.sent()).remoteConfig) ? void 0 : n.fetchRemoteConfig)) return [3, 4];
                                    return l = new R(s.apiKey, s.loggerProvider, s.serverZone, null == (r = s.remoteConfig) ? void 0 : r.serverUrl), [4, new Promise(function(e) {
                                        null == l || l.subscribe("configs.analyticsSDK.browserSDK", "all", function(t, n, r) {
                                            s.loggerProvider.debug("Remote configuration received:", JSON.stringify({
                                                remoteConfig: t,
                                                source: n,
                                                lastFetch: r
                                            }, null, 2)), t && function(e, t) {
                                                if (e) {
                                                    ! function e(t) {
                                                        if ("object" == typeof t && null !== t && !Array.isArray(t)) {
                                                            var n, r, i, o, a, s, l, u, c, d, f, p = Object.keys(t);
                                                            try {
                                                                for (var h = S(p), g = h.next(); !g.done; g = h.next()) {
                                                                    var v = g.value;
                                                                    try {
                                                                        var m = t[v];
                                                                        "boolean" == typeof(null == m ? void 0 : m.enabled) && (m.enabled ? (delete m.enabled, 0 === Object.keys(m).length && (t[v] = !0)) : t[v] = !1), e(m)
                                                                    } catch (e) {}
                                                                }
                                                            } catch (e) {
                                                                n = {
                                                                    error: e
                                                                }
                                                            } finally {
                                                                try {
                                                                    g && !g.done && (r = h.return) && r.call(h)
                                                                } finally {
                                                                    if (n) throw n.error
                                                                }
                                                            }
                                                            try {
                                                                if (null == (c = null == (u = null == (l = t.autocapture) ? void 0 : l.networkTracking) ? void 0 : u.captureRules) ? void 0 : c.length) try {
                                                                    for (var y = S(t.autocapture.networkTracking.captureRules), b = y.next(); !b.done; b = y.next()) {
                                                                        var w = b.value;
                                                                        try {
                                                                            for (var T = (a = void 0, S(["responseHeaders", "requestHeaders"])), k = T.next(); !k.done; k = T.next()) {
                                                                                var P = k.value,
                                                                                    C = null != (d = w[P]) ? d : {},
                                                                                    _ = C.captureSafeHeaders,
                                                                                    I = C.allowlist;
                                                                                if (_ || I) {
                                                                                    if (void 0 !== I && !Array.isArray(I)) {
                                                                                        delete w[P];
                                                                                        continue
                                                                                    }
                                                                                    w[P] = x(x([], E(_ ? eb : []), !1), E(null != I ? I : []), !1)
                                                                                }
                                                                            }
                                                                        } catch (e) {
                                                                            a = {
                                                                                error: e
                                                                            }
                                                                        } finally {
                                                                            try {
                                                                                k && !k.done && (s = T.return) && s.call(T)
                                                                            } finally {
                                                                                if (a) throw a.error
                                                                            }
                                                                        }
                                                                    }
                                                                } catch (e) {
                                                                    i = {
                                                                        error: e
                                                                    }
                                                                } finally {
                                                                    try {
                                                                        b && !b.done && (o = y.return) && o.call(y)
                                                                    } finally {
                                                                        if (i) throw i.error
                                                                    }
                                                                }
                                                            } catch (e) {}
                                                            var A = null == (f = t.autocapture) ? void 0 : f.frustrationInteractions;
                                                            A && (A.rageClick && (A.rageClicks = A.rageClick, delete A.rageClick), A.deadClick && (A.deadClicks = A.deadClick, delete A.deadClick))
                                                        }
                                                    }(e);
                                                    try {
                                                        var n, r, i, o, a, s, l;
                                                        if (t.loggerProvider.debug("Update browser config with remote configuration:", JSON.stringify(e)), e && "autocapture" in e) {
                                                            if ("boolean" == typeof e.autocapture && (t.autocapture = e.autocapture), "object" == typeof e.autocapture && null !== e.autocapture) {
                                                                var u = m({}, e.autocapture);
                                                                if (void 0 === t.autocapture && (t.autocapture = e.autocapture), "object" == typeof e.autocapture.elementInteractions && null !== e.autocapture.elementInteractions && (null == (i = e.autocapture.elementInteractions.pageUrlAllowlistRegex) ? void 0 : i.length)) {
                                                                    u.elementInteractions = m({}, e.autocapture.elementInteractions);
                                                                    var c = u.elementInteractions,
                                                                        d = null != (o = c.pageUrlAllowlist) ? o : [],
                                                                        f = e.autocapture.elementInteractions.pageUrlAllowlistRegex;
                                                                    c.pageUrlAllowlist = tQ(d, f, t), delete c.pageUrlAllowlistRegex
                                                                }
                                                                if ("object" == typeof e.autocapture.networkTracking && null !== e.autocapture.networkTracking && (null == (a = e.autocapture.networkTracking.captureRules) ? void 0 : a.length)) {
                                                                    u.networkTracking = m({}, e.autocapture.networkTracking);
                                                                    var p = null != (s = u.networkTracking.captureRules) ? s : [];
                                                                    try {
                                                                        for (var h = S(p), g = h.next(); !g.done; g = h.next()) {
                                                                            var v = g.value;
                                                                            v.urls = tQ(null != (l = v.urls) ? l : [], v.urlsRegex, t), delete v.urlsRegex
                                                                        }
                                                                    } catch (e) {
                                                                        n = {
                                                                            error: e
                                                                        }
                                                                    } finally {
                                                                        try {
                                                                            g && !g.done && (r = h.return) && r.call(h)
                                                                        } finally {
                                                                            if (n) throw n.error
                                                                        }
                                                                    }
                                                                }
                                                                "boolean" == typeof t.autocapture && (t.autocapture = m({
                                                                    attribution: t.autocapture,
                                                                    fileDownloads: t.autocapture,
                                                                    formInteractions: t.autocapture,
                                                                    pageViews: t.autocapture,
                                                                    sessions: t.autocapture,
                                                                    elementInteractions: t.autocapture,
                                                                    webVitals: t.autocapture,
                                                                    frustrationInteractions: t.autocapture
                                                                }, u)), "object" == typeof t.autocapture && (t.autocapture = m(m({}, t.autocapture), u))
                                                            }
                                                            t.defaultTracking = t.autocapture
                                                        }
                                                        t.loggerProvider.debug("Browser config after remote config update:", JSON.stringify(t))
                                                    } catch (e) {
                                                        t.loggerProvider.error("Failed to apply remote configuration because of error: ", e)
                                                    }
                                                }
                                            }(t, s), e()
                                        })
                                    })];
                                case 2:
                                    return v.sent(), [4, new Promise(function(e) {
                                        null == l || l.subscribe("configs.diagnostics.browserSDK", "all", function(t, n, r) {
                                            if (s.loggerProvider.debug("Diagnostics remote configuration received:", JSON.stringify({
                                                    remoteConfig: t,
                                                    source: n,
                                                    lastFetch: r
                                                }, null, 2)), t) {
                                                var i = t.sampleRate;
                                                "number" != typeof i || isNaN(i) || (s.diagnosticsSampleRate = i);
                                                var o = t.enabled;
                                                "boolean" == typeof o && (s.enableDiagnostics = o)
                                            }
                                            e()
                                        })
                                    })];
                                case 3:
                                    v.sent(), v.label = 4;
                                case 4:
                                    return (u = new V(s.apiKey, s.loggerProvider, s.serverZone, {
                                        enabled: s.enableDiagnostics,
                                        sampleRate: s.diagnosticsSampleRate
                                    })).setTag("library", "".concat(e8, "/").concat(e7)), u.setTag("user_agent", navigator.userAgent), [4, e.prototype._init.call(this, s)];
                                case 5:
                                    if (v.sent(), this.logBrowserOptions(s), this.config.diagnosticsClient = u, this.config.remoteConfigClient = l, !eY(this.config.defaultTracking)) return [3, 7];
                                    return c = eY((C = this.config).defaultTracking) && C.defaultTracking && "object" == typeof C.defaultTracking && C.defaultTracking.attribution && "object" == typeof C.defaultTracking.attribution ? m({}, C.defaultTracking.attribution) : {}, this.webAttribution = new r1(c, this.config), [4, this.webAttribution.init()];
                                case 6:
                                    v.sent(), v.label = 7;
                                case 7:
                                    if (p = !(!(f = (d = G()).ampTimestamp ? Number(d.ampTimestamp) : void 0) || Date.now() < f) || Number.isNaN(Number(d.ampSessionId)) ? void 0 : Number(d.ampSessionId), this.setSessionId(null != (a = null != (o = null != (i = t.sessionId) ? i : p) ? o : this.config.sessionId) ? a : Date.now()), (h = eS(t.instanceName)).identityStore.setIdentity({
                                            userId: this.config.userId,
                                            deviceId: this.config.deviceId
                                        }), null === this.config.offline) return [3, 9];
                                    return [4, this.add(tX()).promise];
                                case 8:
                                    v.sent(), v.label = 9;
                                case 9:
                                    return [4, this.add(new eR({
                                        diagnosticsClient: u
                                    })).promise];
                                case 10:
                                    return v.sent(), [4, this.add(new e9).promise];
                                case 11:
                                    return v.sent(), [4, this.add(new eN).promise];
                                case 12:
                                    if (v.sent(), tK(this.config), !eW(this.config.defaultTracking, "fileDownloads")) return [3, 14];
                                    return this.config.loggerProvider.debug("Adding file download tracking plugin"), [4, this.add(tY()).promise];
                                case 13:
                                    v.sent(), v.label = 14;
                                case 14:
                                    if (!eW(this.config.defaultTracking, "formInteractions")) return [3, 16];
                                    return this.config.loggerProvider.debug("Adding form interaction plugin"), [4, this.add(tV()).promise];
                                case 15:
                                    v.sent(), v.label = 16;
                                case 16:
                                    if (!eJ(this.config.defaultTracking)) return [3, 18];
                                    return this.config.loggerProvider.debug("Adding page view tracking plugin"), [4, this.add(tU(e4(this.config))).promise];
                                case 17:
                                    v.sent(), v.label = 18;
                                case 18:
                                    if (!eQ(this.config.autocapture)) return [3, 20];
                                    return this.config.loggerProvider.debug("Adding user interactions plugin (autocapture plugin)"), [4, this.add(nY(e0(this.config), {
                                        diagnosticsClient: u
                                    })).promise];
                                case 19:
                                    v.sent(), v.label = 20;
                                case 20:
                                    if (!eZ(this.config.autocapture)) return [3, 22];
                                    return this.config.loggerProvider.debug("Adding frustration interactions plugin"), [4, this.add(n0(e1(this.config))).promise];
                                case 21:
                                    v.sent(), v.label = 22;
                                case 22:
                                    if (!eX(this.config.autocapture)) return [3, 24];
                                    return this.config.loggerProvider.debug("Adding network tracking plugin"), [4, this.add(rf(e2(this.config))).promise];
                                case 23:
                                    v.sent(), v.label = 24;
                                case 24:
                                    if (!("boolean" == typeof(_ = this.config.autocapture) ? _ : "object" == typeof _ && !0 === _.webVitals)) return [3, 26];
                                    return this.config.loggerProvider.debug("Adding web vitals plugin"), [4, this.add(rJ()).promise];
                                case 25:
                                    v.sent(), v.label = 26;
                                case 26:
                                    if (!eW(this.config.autocapture, "pageUrlEnrichment")) return [3, 28];
                                    return this.config.loggerProvider.debug("Adding referrer page url plugin"), [4, this.add(r6()).promise];
                                case 27:
                                    v.sent(), v.label = 28;
                                case 28:
                                    return this.initializing = !1, [4, this.runQueuedFunctions("dispatchQ")];
                                case 29:
                                    return v.sent(), h.eventBridge.setEventReceiver(function(e) {
                                        var t = e.eventProperties || {},
                                            n = t.time,
                                            r = y(t, ["time"]);
                                        g.track(e.eventType, r, "number" == typeof n ? {
                                            time: n
                                        } : void 0)
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.getUserId = function() {
                    var e;
                    return null == (e = this.config) ? void 0 : e.userId
                }, t.prototype.setUserId = function(e) {
                    if (!this.config) return void this.q.push(this.setUserId.bind(this, e));
                    this.config.loggerProvider.debug("function setUserId: ", e), (e !== this.config.userId || void 0 === e) && (this.config.userId = e, this.timeline.onIdentityChanged({
                        userId: e
                    }), eE(e, this.config.instanceName))
                }, t.prototype.getDeviceId = function() {
                    var e;
                    return null == (e = this.config) ? void 0 : e.deviceId
                }, t.prototype.setDeviceId = function(e) {
                    if (!this.config) return void this.q.push(this.setDeviceId.bind(this, e));
                    this.config.loggerProvider.debug("function setDeviceId: ", e), e !== this.config.deviceId && (this.config.deviceId = e, this.timeline.onIdentityChanged({
                        deviceId: e
                    }), ex(e, this.config.instanceName))
                }, t.prototype.reset = function() {
                    this.setDeviceId(L()), this.setUserId(void 0), this.timeline.onReset()
                }, t.prototype.getIdentity = function() {
                    var e, t;
                    return {
                        deviceId: null == (e = this.config) ? void 0 : e.deviceId,
                        userId: null == (t = this.config) ? void 0 : t.userId,
                        userProperties: this.userProperties
                    }
                }, t.prototype.getOptOut = function() {
                    var e;
                    return null == (e = this.config) ? void 0 : e.optOut
                }, t.prototype.getSessionId = function() {
                    var e;
                    return null == (e = this.config) ? void 0 : e.sessionId
                }, t.prototype.setSessionId = function(e) {
                    var t, n = [];
                    if (!this.config) return this.q.push(this.setSessionId.bind(this, e)), I(Promise.resolve());
                    if (e === this.config.sessionId) return I(Promise.resolve());
                    this.config.loggerProvider.debug("function setSessionId: ", e);
                    var r = this.getSessionId();
                    r !== e && this.timeline.onSessionIdChanged(e);
                    var i = this.config.lastEventTime,
                        o = null != (t = this.config.lastEventId) ? t : -1;
                    this.config.sessionId = e, this.config.lastEventTime = void 0, this.config.pageCounter = 0, eK(this.config.defaultTracking) && (r && i && n.push(this.track(tb, void 0, {
                        device_id: this.previousSessionDeviceId,
                        event_id: ++o,
                        session_id: r,
                        time: i + 1,
                        user_id: this.previousSessionUserId
                    }).promise), this.config.lastEventTime = this.config.sessionId);
                    var a = this.trackCampaignEventIfNeeded(++o, n);
                    return this.config.identify && n.push(this.track(eq(this.config.identify)).promise), eK(this.config.defaultTracking) && n.push(this.track(ty, void 0, {
                        event_id: a ? ++o : o,
                        session_id: this.config.sessionId,
                        time: this.config.lastEventTime
                    }).promise), this.previousSessionDeviceId = this.config.deviceId, this.previousSessionUserId = this.config.userId, I(Promise.all(n))
                }, t.prototype.extendSession = function() {
                    if (!this.config) return void this.q.push(this.extendSession.bind(this));
                    this.config.lastEventTime = Date.now()
                }, t.prototype.setTransport = function(e) {
                    if (!this.config) return void this.q.push(this.setTransport.bind(this, e));
                    this.config.transportProvider = tO(e)
                }, t.prototype.identify = function(t, n) {
                    if (e5(t)) {
                        var r = t._q;
                        t._q = [], t = e3(new eF, r)
                    }
                    return (null == n ? void 0 : n.user_id) && this.setUserId(n.user_id), (null == n ? void 0 : n.device_id) && this.setDeviceId(n.device_id), e.prototype.identify.call(this, t, n)
                }, t.prototype.groupIdentify = function(t, n, r, i) {
                    if (e5(r)) {
                        var o = r._q;
                        r._q = [], r = e3(new eF, o)
                    }
                    return e.prototype.groupIdentify.call(this, t, n, r, i)
                }, t.prototype.revenue = function(t, n) {
                    if (e5(t)) {
                        var r = t._q;
                        t._q = [], t = e3(new eB, r)
                    }
                    return e.prototype.revenue.call(this, t, n)
                }, t.prototype.trackCampaignEventIfNeeded = function(e, t) {
                    if (!this.webAttribution || !this.webAttribution.shouldTrackNewCampaign) return !1;
                    var n = this.webAttribution.generateCampaignEvent(e);
                    return t ? t.push(this.track(n).promise) : this.track(n), this.config.loggerProvider.log("Tracking attribution."), !0
                }, t.prototype.process = function(t) {
                    return b(this, void 0, void 0, function() {
                        var n, r, i;
                        return w(this, function(o) {
                            return n = Date.now(), r = eH(this.config.sessionTimeout, this.config.lastEventTime), i = this.webAttribution && this.webAttribution.shouldSetSessionIdOnNewCampaign(), t.event_type !== ty && t.event_type !== tb && (!t.session_id || t.session_id === this.getSessionId()) && (r || i ? (this.setSessionId(n), i && this.config.loggerProvider.log("Created a new session for new campaign.")) : r || this.trackCampaignEventIfNeeded()), t.event_type === l.IDENTIFY && t.user_properties && (this.userProperties = this.getOperationAppliedUserProperties(t.user_properties)), [2, e.prototype.process.call(this, t)]
                        })
                    })
                }, t.prototype.logBrowserOptions = function(e) {
                    try {
                        var t = m(m({}, e), {
                            apiKey: e.apiKey.substring(0, 10) + "********"
                        });
                        this.config.loggerProvider.debug("Initialized Amplitude with BrowserConfig:", JSON.stringify(t))
                    } catch (e) {
                        this.config.loggerProvider.error("Error logging browser config", e)
                    }
                }, t.prototype._setDiagnosticsSampleRate = function(e) {
                    if (!(e > 1) && !(e < 0) && !this.config) {
                        this._diagnosticsSampleRate = e;
                        return
                    }
                }, t
            }(eG);
            let r9 = function() {
                var e = new r8;
                return {
                    init: _(e.init.bind(e), "init", k(e), C(e, ["config"])),
                    add: _(e.add.bind(e), "add", k(e), C(e, ["config.apiKey", "timeline.plugins"])),
                    remove: _(e.remove.bind(e), "remove", k(e), C(e, ["config.apiKey", "timeline.plugins"])),
                    track: _(e.track.bind(e), "track", k(e), C(e, ["config.apiKey", "timeline.queue.length"])),
                    logEvent: _(e.logEvent.bind(e), "logEvent", k(e), C(e, ["config.apiKey", "timeline.queue.length"])),
                    identify: _(e.identify.bind(e), "identify", k(e), C(e, ["config.apiKey", "timeline.queue.length"])),
                    groupIdentify: _(e.groupIdentify.bind(e), "groupIdentify", k(e), C(e, ["config.apiKey", "timeline.queue.length"])),
                    setGroup: _(e.setGroup.bind(e), "setGroup", k(e), C(e, ["config.apiKey", "timeline.queue.length"])),
                    revenue: _(e.revenue.bind(e), "revenue", k(e), C(e, ["config.apiKey", "timeline.queue.length"])),
                    flush: _(e.flush.bind(e), "flush", k(e), C(e, ["config.apiKey", "timeline.queue.length"])),
                    getUserId: _(e.getUserId.bind(e), "getUserId", k(e), C(e, ["config", "config.userId"])),
                    setUserId: _(e.setUserId.bind(e), "setUserId", k(e), C(e, ["config", "config.userId"])),
                    getDeviceId: _(e.getDeviceId.bind(e), "getDeviceId", k(e), C(e, ["config", "config.deviceId"])),
                    setDeviceId: _(e.setDeviceId.bind(e), "setDeviceId", k(e), C(e, ["config", "config.deviceId"])),
                    reset: _(e.reset.bind(e), "reset", k(e), C(e, ["config", "config.userId", "config.deviceId"])),
                    getSessionId: _(e.getSessionId.bind(e), "getSessionId", k(e), C(e, ["config"])),
                    setSessionId: _(e.setSessionId.bind(e), "setSessionId", k(e), C(e, ["config"])),
                    extendSession: _(e.extendSession.bind(e), "extendSession", k(e), C(e, ["config"])),
                    setOptOut: _(e.setOptOut.bind(e), "setOptOut", k(e), C(e, ["config"])),
                    setTransport: _(e.setTransport.bind(e), "setTransport", k(e), C(e, ["config"])),
                    getIdentity: _(e.getIdentity.bind(e), "getIdentity", k(e), C(e, ["config"])),
                    getOptOut: _(e.getOptOut.bind(e), "getOptOut", k(e), C(e, ["config"])),
                    _setDiagnosticsSampleRate: _(e._setDiagnosticsSampleRate.bind(e), "_setDiagnosticsSampleRate", k(e), C(e, ["config"]))
                }
            }();
            r9.add, r9.extendSession, r9.flush;
            var ie = r9.getDeviceId,
                it = (r9.getIdentity, r9.getOptOut, r9.getSessionId, r9.getUserId),
                ir = (r9.groupIdentify, r9.identify, r9.init),
                ii = (r9.logEvent, r9.remove, r9.reset, r9.revenue, r9.setDeviceId, r9.setGroup, r9.setOptOut, r9.setSessionId, r9.setTransport, r9.setUserId, r9.track);
            r9._setDiagnosticsSampleRate
        },
        8202: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGTMEvent = void 0, t.GoogleTagManager = function(e) {
                let {
                    gtmId: t,
                    gtmScriptUrl: n = "https://www.googletagmanager.com/gtm.js",
                    dataLayerName: s = "dataLayer",
                    auth: l,
                    preview: u,
                    dataLayer: c,
                    nonce: d
                } = e;
                a = s;
                let f = "dataLayer" !== s ? "&l=".concat(s) : "";
                return (0, i.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-gtm"
                        }
                    })
                }, []), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(o.default, {
                        id: "_next-gtm-init",
                        dangerouslySetInnerHTML: {
                            __html: "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(c ? "w[l].push(".concat(JSON.stringify(c), ")") : "", "\n      })(window,'").concat(s, "');")
                        },
                        nonce: d
                    }), (0, r.jsx)(o.default, {
                        id: "_next-gtm",
                        "data-ntpc": "GTM",
                        src: "".concat(n, "?id=").concat(t).concat(f).concat(l ? "&gtm_auth=".concat(l) : "").concat(u ? "&gtm_preview=".concat(u, "&gtm_cookies_win=x") : ""),
                        nonce: d
                    })]
                })
            };
            let r = n(5155),
                i = n(2115),
                o = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(8321)),
                a = "dataLayer";
            t.sendGTMEvent = (e, t) => {
                let n = t || a;
                window[n] = window[n] || [], window[n].push(e)
            }
        },
        8321: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => i.a
            });
            var r = n(1402),
                i = n.n(r),
                o = {};
            for (let e in r) "default" !== e && (o[e] = () => r[e]);
            n.d(t, o)
        },
        8332: (e, t, n) => {
            "use strict";
            let r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GoogleAnalytics = function(e) {
                let {
                    gaId: t,
                    debugMode: n,
                    dataLayerName: s = "dataLayer",
                    nonce: l
                } = e;
                return void 0 === r && (r = s), (0, o.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-ga"
                        }
                    })
                }, []), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(a.default, {
                        id: "_next-ga-init",
                        dangerouslySetInnerHTML: {
                            __html: "\n          window['".concat(s, "'] = window['").concat(s, "'] || [];\n          function gtag(){window['").concat(s, "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t, "' ").concat(n ? ",{ 'debug_mode': true }" : "", ");")
                        },
                        nonce: l
                    }), (0, i.jsx)(a.default, {
                        id: "_next-ga",
                        src: "https://www.googletagmanager.com/gtag/js?id=".concat(t),
                        nonce: l
                    })]
                })
            }, t.sendGAEvent = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (void 0 === r) return void console.warn("@next/third-parties: GA has not been initialized");
                window[r] ? window[r].push(arguments) : console.warn("@next/third-parties: GA dataLayer ".concat(r, " does not exist"))
            };
            let i = n(5155),
                o = n(2115),
                a = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(8321))
        },
        8567: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "workAsyncStorage", {
                enumerable: !0,
                get: function() {
                    return r.workAsyncStorageInstance
                }
            });
            let r = n(7828)
        },
        9740: (e, t, n) => {
            "use strict";
            n.d(t, {
                gc: () => nT
            });
            var r, i, o, a = n(2115);

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function l(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = v(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                    s = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        s = !0, o = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                }
            }

            function u(e, t, n) {
                return (t = h(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                        u(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function f(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o, a, s = [],
                            l = !0,
                            u = !1;
                        try {
                            if (o = (n = n.call(e)).next, 0 === t) {
                                if (Object(n) !== n) return;
                                l = !1
                            } else
                                for (; !(l = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                        } catch (e) {
                            u = !0, i = e
                        } finally {
                            try {
                                if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return s
                    }
                }(e, t) || v(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function p(e) {
                return function(e) {
                    if (Array.isArray(e)) return s(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || v(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function h(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r) return r;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }

            function g(e) {
                return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function v(e, t) {
                if (e) {
                    if ("string" == typeof e) return s(e, t);
                    var n = ({}).toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
                }
            }
            var m = function() {},
                y = {},
                b = {},
                w = null,
                S = {
                    mark: m,
                    measure: m
                };
            try {
                "undefined" != typeof window && (y = window), "undefined" != typeof document && (b = document), "undefined" != typeof MutationObserver && (w = MutationObserver), "undefined" != typeof performance && (S = performance)
            } catch (e) {}
            var E = (y.navigator || {}).userAgent,
                x = void 0 === E ? "" : E,
                T = y,
                k = b,
                P = w,
                C = S;
            T.document;
            var _ = !!k.documentElement && !!k.head && "function" == typeof k.addEventListener && "function" == typeof k.createElement,
                I = ~x.indexOf("MSIE") || ~x.indexOf("Trident/"),
                A = {
                    classic: {
                        fa: "solid",
                        fas: "solid",
                        "fa-solid": "solid",
                        far: "regular",
                        "fa-regular": "regular",
                        fal: "light",
                        "fa-light": "light",
                        fat: "thin",
                        "fa-thin": "thin",
                        fab: "brands",
                        "fa-brands": "brands"
                    },
                    duotone: {
                        fa: "solid",
                        fad: "solid",
                        "fa-solid": "solid",
                        "fa-duotone": "solid",
                        fadr: "regular",
                        "fa-regular": "regular",
                        fadl: "light",
                        "fa-light": "light",
                        fadt: "thin",
                        "fa-thin": "thin"
                    },
                    sharp: {
                        fa: "solid",
                        fass: "solid",
                        "fa-solid": "solid",
                        fasr: "regular",
                        "fa-regular": "regular",
                        fasl: "light",
                        "fa-light": "light",
                        fast: "thin",
                        "fa-thin": "thin"
                    },
                    "sharp-duotone": {
                        fa: "solid",
                        fasds: "solid",
                        "fa-solid": "solid",
                        fasdr: "regular",
                        "fa-regular": "regular",
                        fasdl: "light",
                        "fa-light": "light",
                        fasdt: "thin",
                        "fa-thin": "thin"
                    },
                    slab: {
                        "fa-regular": "regular",
                        faslr: "regular"
                    },
                    "slab-press": {
                        "fa-regular": "regular",
                        faslpr: "regular"
                    },
                    thumbprint: {
                        "fa-light": "light",
                        fatl: "light"
                    },
                    whiteboard: {
                        "fa-semibold": "semibold",
                        fawsb: "semibold"
                    },
                    notdog: {
                        "fa-solid": "solid",
                        fans: "solid"
                    },
                    "notdog-duo": {
                        "fa-solid": "solid",
                        fands: "solid"
                    },
                    etch: {
                        "fa-solid": "solid",
                        faes: "solid"
                    },
                    jelly: {
                        "fa-regular": "regular",
                        fajr: "regular"
                    },
                    "jelly-fill": {
                        "fa-regular": "regular",
                        fajfr: "regular"
                    },
                    "jelly-duo": {
                        "fa-regular": "regular",
                        fajdr: "regular"
                    },
                    chisel: {
                        "fa-regular": "regular",
                        facr: "regular"
                    },
                    utility: {
                        "fa-semibold": "semibold",
                        fausb: "semibold"
                    },
                    "utility-duo": {
                        "fa-semibold": "semibold",
                        faudsb: "semibold"
                    },
                    "utility-fill": {
                        "fa-semibold": "semibold",
                        faufsb: "semibold"
                    }
                },
                O = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
                M = "classic",
                L = "duotone",
                R = "sharp",
                N = "sharp-duotone",
                j = "chisel",
                D = "etch",
                F = "jelly",
                z = "jelly-duo",
                q = "jelly-fill",
                U = "notdog",
                $ = "notdog-duo",
                B = "slab",
                H = "slab-press",
                V = "thumbprint",
                G = "utility",
                W = "utility-duo",
                Y = "utility-fill",
                J = "whiteboard",
                K = [M, L, R, N, j, D, F, z, q, U, $, B, H, V, G, W, Y, J];
            u(u(u(u(u(u(u(u(u(u(i = {}, M, "Classic"), L, "Duotone"), R, "Sharp"), N, "Sharp Duotone"), j, "Chisel"), D, "Etch"), F, "Jelly"), z, "Jelly Duo"), q, "Jelly Fill"), U, "Notdog"), u(u(u(u(u(u(u(u(i, $, "Notdog Duo"), B, "Slab"), H, "Slab Press"), V, "Thumbprint"), G, "Utility"), W, "Utility Duo"), Y, "Utility Fill"), J, "Whiteboard");
            var X = new Map([
                    ["classic", {
                        defaultShortPrefixId: "fas",
                        defaultStyleId: "solid",
                        styleIds: ["solid", "regular", "light", "thin", "brands"],
                        futureStyleIds: [],
                        defaultFontWeight: 900
                    }],
                    ["duotone", {
                        defaultShortPrefixId: "fad",
                        defaultStyleId: "solid",
                        styleIds: ["solid", "regular", "light", "thin"],
                        futureStyleIds: [],
                        defaultFontWeight: 900
                    }],
                    ["sharp", {
                        defaultShortPrefixId: "fass",
                        defaultStyleId: "solid",
                        styleIds: ["solid", "regular", "light", "thin"],
                        futureStyleIds: [],
                        defaultFontWeight: 900
                    }],
                    ["sharp-duotone", {
                        defaultShortPrefixId: "fasds",
                        defaultStyleId: "solid",
                        styleIds: ["solid", "regular", "light", "thin"],
                        futureStyleIds: [],
                        defaultFontWeight: 900
                    }],
                    ["chisel", {
                        defaultShortPrefixId: "facr",
                        defaultStyleId: "regular",
                        styleIds: ["regular"],
                        futureStyleIds: [],
                        defaultFontWeight: 400
                    }],
                    ["etch", {
                        defaultShortPrefixId: "faes",
                        defaultStyleId: "solid",
                        styleIds: ["solid"],
                        futureStyleIds: [],
                        defaultFontWeight: 900
                    }],
                    ["jelly", {
                        defaultShortPrefixId: "fajr",
                        defaultStyleId: "regular",
                        styleIds: ["regular"],
                        futureStyleIds: [],
                        defaultFontWeight: 400
                    }],
                    ["jelly-duo", {
                        defaultShortPrefixId: "fajdr",
                        defaultStyleId: "regular",
                        styleIds: ["regular"],
                        futureStyleIds: [],
                        defaultFontWeight: 400
                    }],
                    ["jelly-fill", {
                        defaultShortPrefixId: "fajfr",
                        defaultStyleId: "regular",
                        styleIds: ["regular"],
                        futureStyleIds: [],
                        defaultFontWeight: 400
                    }],
                    ["notdog", {
                        defaultShortPrefixId: "fans",
                        defaultStyleId: "solid",
                        styleIds: ["solid"],
                        futureStyleIds: [],
                        defaultFontWeight: 900
                    }],
                    ["notdog-duo", {
                        defaultShortPrefixId: "fands",
                        defaultStyleId: "solid",
                        styleIds: ["solid"],
                        futureStyleIds: [],
                        defaultFontWeight: 900
                    }],
                    ["slab", {
                        defaultShortPrefixId: "faslr",
                        defaultStyleId: "regular",
                        styleIds: ["regular"],
                        futureStyleIds: [],
                        defaultFontWeight: 400
                    }],
                    ["slab-press", {
                        defaultShortPrefixId: "faslpr",
                        defaultStyleId: "regular",
                        styleIds: ["regular"],
                        futureStyleIds: [],
                        defaultFontWeight: 400
                    }],
                    ["thumbprint", {
                        defaultShortPrefixId: "fatl",
                        defaultStyleId: "light",
                        styleIds: ["light"],
                        futureStyleIds: [],
                        defaultFontWeight: 300
                    }],
                    ["utility", {
                        defaultShortPrefixId: "fausb",
                        defaultStyleId: "semibold",
                        styleIds: ["semibold"],
                        futureStyleIds: [],
                        defaultFontWeight: 600
                    }],
                    ["utility-duo", {
                        defaultShortPrefixId: "faudsb",
                        defaultStyleId: "semibold",
                        styleIds: ["semibold"],
                        futureStyleIds: [],
                        defaultFontWeight: 600
                    }],
                    ["utility-fill", {
                        defaultShortPrefixId: "faufsb",
                        defaultStyleId: "semibold",
                        styleIds: ["semibold"],
                        futureStyleIds: [],
                        defaultFontWeight: 600
                    }],
                    ["whiteboard", {
                        defaultShortPrefixId: "fawsb",
                        defaultStyleId: "semibold",
                        styleIds: ["semibold"],
                        futureStyleIds: [],
                        defaultFontWeight: 600
                    }]
                ]),
                Q = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
                Z = {
                    kit: {
                        fak: "kit",
                        "fa-kit": "kit"
                    },
                    "kit-duotone": {
                        fakd: "kit-duotone",
                        "fa-kit-duotone": "kit-duotone"
                    }
                };
            u(u({}, "kit", "Kit"), "kit-duotone", "Kit Duotone");
            var ee = {
                    kit: {
                        kit: "fak"
                    },
                    "kit-duotone": {
                        "kit-duotone": "fakd"
                    }
                },
                et = {
                    GROUP: "duotone-group",
                    SWAP_OPACITY: "swap-opacity",
                    PRIMARY: "primary",
                    SECONDARY: "secondary"
                };
            u(u(u(u(u(u(u(u(u(u(o = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), "notdog", "Notdog"), u(u(u(u(u(u(u(u(o, "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), u(u({}, "kit", "Kit"), "kit-duotone", "Kit Duotone");
            var en = {
                    classic: {
                        fab: "fa-brands",
                        fad: "fa-duotone",
                        fal: "fa-light",
                        far: "fa-regular",
                        fas: "fa-solid",
                        fat: "fa-thin"
                    },
                    duotone: {
                        fadr: "fa-regular",
                        fadl: "fa-light",
                        fadt: "fa-thin"
                    },
                    sharp: {
                        fass: "fa-solid",
                        fasr: "fa-regular",
                        fasl: "fa-light",
                        fast: "fa-thin"
                    },
                    "sharp-duotone": {
                        fasds: "fa-solid",
                        fasdr: "fa-regular",
                        fasdl: "fa-light",
                        fasdt: "fa-thin"
                    },
                    slab: {
                        faslr: "fa-regular"
                    },
                    "slab-press": {
                        faslpr: "fa-regular"
                    },
                    whiteboard: {
                        fawsb: "fa-semibold"
                    },
                    thumbprint: {
                        fatl: "fa-light"
                    },
                    notdog: {
                        fans: "fa-solid"
                    },
                    "notdog-duo": {
                        fands: "fa-solid"
                    },
                    etch: {
                        faes: "fa-solid"
                    },
                    jelly: {
                        fajr: "fa-regular"
                    },
                    "jelly-fill": {
                        fajfr: "fa-regular"
                    },
                    "jelly-duo": {
                        fajdr: "fa-regular"
                    },
                    chisel: {
                        facr: "fa-regular"
                    },
                    utility: {
                        fausb: "fa-semibold"
                    },
                    "utility-duo": {
                        faudsb: "fa-semibold"
                    },
                    "utility-fill": {
                        faufsb: "fa-semibold"
                    }
                },
                er = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
                ei = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                eo = ei.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
                ea = [].concat(p(["classic", "duotone", "sharp", "sharp-duotone", "slab", "slab-press", "whiteboard", "thumbprint", "notdog", "notdog-duo", "etch", "jelly", "jelly-fill", "jelly-duo", "chisel", "utility", "utility-duo", "utility-fill"]), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", et.GROUP, et.SWAP_OPACITY, et.PRIMARY, et.SECONDARY]).concat(ei.map(function(e) {
                    return "".concat(e, "x")
                })).concat(eo.map(function(e) {
                    return "w-".concat(e)
                })),
                es = "___FONT_AWESOME___",
                el = "svg-inline--fa",
                eu = "data-fa-i2svg",
                ec = "data-fa-pseudo-element",
                ed = "data-prefix",
                ef = "data-icon",
                ep = "fontawesome-i2svg",
                eh = ["HTML", "HEAD", "STYLE", "SCRIPT"],
                eg = ["::before", "::after", ":before", ":after"],
                ev = function() {
                    try {
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();

            function em(e) {
                return new Proxy(e, {
                    get: function(e, t) {
                        return t in e ? e[t] : e[M]
                    }
                })
            }
            var ey = d({}, A);
            ey[M] = d(d(d(d({}, {
                "fa-duotone": "duotone"
            }), A[M]), Z.kit), Z["kit-duotone"]);
            var eb = em(ey),
                ew = d({}, {
                    chisel: {
                        regular: "facr"
                    },
                    classic: {
                        brands: "fab",
                        light: "fal",
                        regular: "far",
                        solid: "fas",
                        thin: "fat"
                    },
                    duotone: {
                        light: "fadl",
                        regular: "fadr",
                        solid: "fad",
                        thin: "fadt"
                    },
                    etch: {
                        solid: "faes"
                    },
                    jelly: {
                        regular: "fajr"
                    },
                    "jelly-duo": {
                        regular: "fajdr"
                    },
                    "jelly-fill": {
                        regular: "fajfr"
                    },
                    notdog: {
                        solid: "fans"
                    },
                    "notdog-duo": {
                        solid: "fands"
                    },
                    sharp: {
                        light: "fasl",
                        regular: "fasr",
                        solid: "fass",
                        thin: "fast"
                    },
                    "sharp-duotone": {
                        light: "fasdl",
                        regular: "fasdr",
                        solid: "fasds",
                        thin: "fasdt"
                    },
                    slab: {
                        regular: "faslr"
                    },
                    "slab-press": {
                        regular: "faslpr"
                    },
                    thumbprint: {
                        light: "fatl"
                    },
                    utility: {
                        semibold: "fausb"
                    },
                    "utility-duo": {
                        semibold: "faudsb"
                    },
                    "utility-fill": {
                        semibold: "faufsb"
                    },
                    whiteboard: {
                        semibold: "fawsb"
                    }
                });
            ew[M] = d(d(d(d({}, {
                duotone: "fad"
            }), ew[M]), ee.kit), ee["kit-duotone"]);
            var eS = em(ew),
                eE = d({}, en);
            eE[M] = d(d({}, eE[M]), {
                fak: "fa-kit"
            });
            var ex = em(eE),
                eT = d({}, {
                    classic: {
                        "fa-brands": "fab",
                        "fa-duotone": "fad",
                        "fa-light": "fal",
                        "fa-regular": "far",
                        "fa-solid": "fas",
                        "fa-thin": "fat"
                    },
                    duotone: {
                        "fa-regular": "fadr",
                        "fa-light": "fadl",
                        "fa-thin": "fadt"
                    },
                    sharp: {
                        "fa-solid": "fass",
                        "fa-regular": "fasr",
                        "fa-light": "fasl",
                        "fa-thin": "fast"
                    },
                    "sharp-duotone": {
                        "fa-solid": "fasds",
                        "fa-regular": "fasdr",
                        "fa-light": "fasdl",
                        "fa-thin": "fasdt"
                    },
                    slab: {
                        "fa-regular": "faslr"
                    },
                    "slab-press": {
                        "fa-regular": "faslpr"
                    },
                    whiteboard: {
                        "fa-semibold": "fawsb"
                    },
                    thumbprint: {
                        "fa-light": "fatl"
                    },
                    notdog: {
                        "fa-solid": "fans"
                    },
                    "notdog-duo": {
                        "fa-solid": "fands"
                    },
                    etch: {
                        "fa-solid": "faes"
                    },
                    jelly: {
                        "fa-regular": "fajr"
                    },
                    "jelly-fill": {
                        "fa-regular": "fajfr"
                    },
                    "jelly-duo": {
                        "fa-regular": "fajdr"
                    },
                    chisel: {
                        "fa-regular": "facr"
                    },
                    utility: {
                        "fa-semibold": "fausb"
                    },
                    "utility-duo": {
                        "fa-semibold": "faudsb"
                    },
                    "utility-fill": {
                        "fa-semibold": "faufsb"
                    }
                });
            eT[M] = d(d({}, eT[M]), {
                "fa-kit": "fak"
            }), em(eT);
            var ek = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
                eP = "fa-layers-text",
                eC = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i;
            em(d({}, {
                classic: {
                    900: "fas",
                    400: "far",
                    normal: "far",
                    300: "fal",
                    100: "fat"
                },
                duotone: {
                    900: "fad",
                    400: "fadr",
                    300: "fadl",
                    100: "fadt"
                },
                sharp: {
                    900: "fass",
                    400: "fasr",
                    300: "fasl",
                    100: "fast"
                },
                "sharp-duotone": {
                    900: "fasds",
                    400: "fasdr",
                    300: "fasdl",
                    100: "fasdt"
                },
                slab: {
                    400: "faslr"
                },
                "slab-press": {
                    400: "faslpr"
                },
                whiteboard: {
                    600: "fawsb"
                },
                thumbprint: {
                    300: "fatl"
                },
                notdog: {
                    900: "fans"
                },
                "notdog-duo": {
                    900: "fands"
                },
                etch: {
                    900: "faes"
                },
                chisel: {
                    400: "facr"
                },
                jelly: {
                    400: "fajr"
                },
                "jelly-fill": {
                    400: "fajfr"
                },
                "jelly-duo": {
                    400: "fajdr"
                },
                utility: {
                    600: "fausb"
                },
                "utility-duo": {
                    600: "faudsb"
                },
                "utility-fill": {
                    600: "faufsb"
                }
            }));
            var e_ = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
                eI = {
                    GROUP: "duotone-group",
                    PRIMARY: "primary",
                    SECONDARY: "secondary"
                },
                eA = [].concat(p(["kit"]), p(ea)),
                eO = T.FontAwesomeConfig || {};
            k && "function" == typeof k.querySelector && [
                ["data-family-prefix", "familyPrefix"],
                ["data-css-prefix", "cssPrefix"],
                ["data-family-default", "familyDefault"],
                ["data-style-default", "styleDefault"],
                ["data-replacement-class", "replacementClass"],
                ["data-auto-replace-svg", "autoReplaceSvg"],
                ["data-auto-add-css", "autoAddCss"],
                ["data-search-pseudo-elements", "searchPseudoElements"],
                ["data-search-pseudo-elements-warnings", "searchPseudoElementsWarnings"],
                ["data-search-pseudo-elements-full-scan", "searchPseudoElementsFullScan"],
                ["data-observe-mutations", "observeMutations"],
                ["data-mutate-approach", "mutateApproach"],
                ["data-keep-original-source", "keepOriginalSource"],
                ["data-measure-performance", "measurePerformance"],
                ["data-show-missing-icons", "showMissingIcons"]
            ].forEach(function(e) {
                var t, n = f(e, 2),
                    r = n[0],
                    i = n[1],
                    o = "" === (t = function(e) {
                        var t = k.querySelector("script[" + e + "]");
                        if (t) return t.getAttribute(e)
                    }(r)) || "false" !== t && ("true" === t || t);
                null != o && (eO[i] = o)
            });
            var eM = {
                styleDefault: "solid",
                familyDefault: M,
                cssPrefix: "fa",
                replacementClass: el,
                autoReplaceSvg: !0,
                autoAddCss: !0,
                searchPseudoElements: !1,
                searchPseudoElementsWarnings: !0,
                searchPseudoElementsFullScan: !1,
                observeMutations: !0,
                mutateApproach: "async",
                keepOriginalSource: !0,
                measurePerformance: !1,
                showMissingIcons: !0
            };
            eO.familyPrefix && (eO.cssPrefix = eO.familyPrefix);
            var eL = d(d({}, eM), eO);
            eL.autoReplaceSvg || (eL.observeMutations = !1);
            var eR = {};
            Object.keys(eM).forEach(function(e) {
                Object.defineProperty(eR, e, {
                    enumerable: !0,
                    set: function(t) {
                        eL[e] = t, eN.forEach(function(e) {
                            return e(eR)
                        })
                    },
                    get: function() {
                        return eL[e]
                    }
                })
            }), Object.defineProperty(eR, "familyPrefix", {
                enumerable: !0,
                set: function(e) {
                    eL.cssPrefix = e, eN.forEach(function(e) {
                        return e(eR)
                    })
                },
                get: function() {
                    return eL.cssPrefix
                }
            }), T.FontAwesomeConfig = eR;
            var eN = [],
                ej = {
                    size: 16,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    flipX: !1,
                    flipY: !1
                };

            function eD() {
                for (var e = 12, t = ""; e-- > 0;) t += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
                return t
            }

            function eF(e) {
                for (var t = [], n = (e || []).length >>> 0; n--;) t[n] = e[n];
                return t
            }

            function ez(e) {
                return e.classList ? eF(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(e) {
                    return e
                })
            }

            function eq(e) {
                return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }

            function eU(e) {
                return Object.keys(e || {}).reduce(function(t, n) {
                    return t + "".concat(n, ": ").concat(e[n].trim(), ";")
                }, "")
            }

            function e$(e) {
                return e.size !== ej.size || e.x !== ej.x || e.y !== ej.y || e.rotate !== ej.rotate || e.flipX || e.flipY
            }

            function eB() {
                var e = eR.cssPrefix,
                    t = eR.replacementClass,
                    n = ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";\n  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";\n  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";\n  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";\n  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";\n  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";\n  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";\n  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";\n  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";\n  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";\n  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";\n  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";\n  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";\n  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it\'s vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}';
                if ("fa" !== e || t !== el) {
                    var r = RegExp("\\.".concat("fa", "\\-"), "g"),
                        i = RegExp("\\--".concat("fa", "\\-"), "g"),
                        o = RegExp("\\.".concat(el), "g");
                    n = n.replace(r, ".".concat(e, "-")).replace(i, "--".concat(e, "-")).replace(o, ".".concat(t))
                }
                return n
            }
            var eH = !1;

            function eV() {
                eR.autoAddCss && !eH && (! function(e) {
                    if (e && _) {
                        var t = k.createElement("style");
                        t.setAttribute("type", "text/css"), t.innerHTML = e;
                        for (var n = k.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
                            var o = n[i];
                            ["STYLE", "LINK"].indexOf((o.tagName || "").toUpperCase()) > -1 && (r = o)
                        }
                        k.head.insertBefore(t, r)
                    }
                }(eB()), eH = !0)
            }
            var eG = T || {};
            eG[es] || (eG[es] = {}), eG[es].styles || (eG[es].styles = {}), eG[es].hooks || (eG[es].hooks = {}), eG[es].shims || (eG[es].shims = []);
            var eW = eG[es],
                eY = [],
                eJ = function() {
                    k.removeEventListener("DOMContentLoaded", eJ), eK = 1, eY.map(function(e) {
                        return e()
                    })
                },
                eK = !1;

            function eX(e) {
                var t, n = e.tag,
                    r = e.attributes,
                    i = e.children;
                return "string" == typeof e ? eq(e) : "<".concat(n, " ").concat(Object.keys((t = void 0 === r ? {} : r) || {}).reduce(function(e, n) {
                    return e + "".concat(n, '="').concat(eq(t[n]), '" ')
                }, "").trim(), ">").concat((void 0 === i ? [] : i).map(eX).join(""), "</").concat(n, ">")
            }

            function eQ(e, t, n) {
                if (e && e[t] && e[t][n]) return {
                    prefix: t,
                    iconName: n,
                    icon: e[t][n]
                }
            }
            _ && ((eK = (k.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(k.readyState)) || k.addEventListener("DOMContentLoaded", eJ));
            var eZ = function(e, t, n, r) {
                var i, o, a, s = Object.keys(e),
                    l = s.length,
                    u = void 0 !== r ? function(e, n, i, o) {
                        return t.call(r, e, n, i, o)
                    } : t;
                for (void 0 === n ? (i = 1, a = e[s[0]]) : (i = 0, a = n); i < l; i++) a = u(a, e[o = s[i]], o, e);
                return a
            };

            function e0(e) {
                return 1 !== p(e).length ? null : e.codePointAt(0).toString(16)
            }

            function e1(e) {
                return Object.keys(e).reduce(function(t, n) {
                    var r = e[n];
                    return r.icon ? t[r.iconName] = r.icon : t[n] = r, t
                }, {})
            }

            function e2(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = n.skipHooks,
                    i = e1(t);
                "function" != typeof eW.hooks.addPack || void 0 !== r && r ? eW.styles[e] = d(d({}, eW.styles[e] || {}), i) : eW.hooks.addPack(e, e1(t)), "fas" === e && e2("fa", t)
            }
            var e4 = eW.styles,
                e3 = eW.shims,
                e5 = Object.keys(ex),
                e6 = e5.reduce(function(e, t) {
                    return e[t] = Object.keys(ex[t]), e
                }, {}),
                e7 = null,
                e8 = {},
                e9 = {},
                te = {},
                tt = {},
                tn = {},
                tr = function() {
                    var e = function(e) {
                        return eZ(e4, function(t, n, r) {
                            return t[r] = eZ(n, e, {}), t
                        }, {})
                    };
                    e8 = e(function(e, t, n) {
                        return t[3] && (e[t[3]] = n), t[2] && t[2].filter(function(e) {
                            return "number" == typeof e
                        }).forEach(function(t) {
                            e[t.toString(16)] = n
                        }), e
                    }), e9 = e(function(e, t, n) {
                        return e[n] = n, t[2] && t[2].filter(function(e) {
                            return "string" == typeof e
                        }).forEach(function(t) {
                            e[t] = n
                        }), e
                    }), tn = e(function(e, t, n) {
                        var r = t[2];
                        return e[n] = n, r.forEach(function(t) {
                            e[t] = n
                        }), e
                    });
                    var t = "far" in e4 || eR.autoFetchSvg,
                        n = eZ(e3, function(e, n) {
                            var r = n[0],
                                i = n[1],
                                o = n[2];
                            return "far" !== i || t || (i = "fas"), "string" == typeof r && (e.names[r] = {
                                prefix: i,
                                iconName: o
                            }), "number" == typeof r && (e.unicodes[r.toString(16)] = {
                                prefix: i,
                                iconName: o
                            }), e
                        }, {
                            names: {},
                            unicodes: {}
                        });
                    te = n.names, tt = n.unicodes, e7 = tl(eR.styleDefault, {
                        family: eR.familyDefault
                    })
                };

            function ti(e, t) {
                return (e8[e] || {})[t]
            }

            function to(e, t) {
                return (tn[e] || {})[t]
            }

            function ta(e) {
                return te[e] || {
                    prefix: null,
                    iconName: null
                }
            }
            r = function(e) {
                e7 = tl(e.styleDefault, {
                    family: eR.familyDefault
                })
            }, eN.push(r), tr();
            var ts = function() {
                return {
                    prefix: null,
                    iconName: null,
                    rest: []
                }
            };

            function tl(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.family,
                    r = void 0 === n ? M : n,
                    i = eb[r][e];
                if (r === L && !e) return "fad";
                var o = eS[r][e] || eS[r][i],
                    a = e in eW.styles ? e : null;
                return o || a || null
            }

            function tu(e) {
                return e.sort().filter(function(e, t, n) {
                    return n.indexOf(e) === t
                })
            }
            var tc = er.concat(Q);

            function td(e) {
                var t, n, r, i, o, a, s, l, u, c, p, h, g, v, m, y, b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    w = b.skipLookups,
                    S = null,
                    E = tu(e.filter(function(e) {
                        return tc.includes(e)
                    })),
                    x = tu(e.filter(function(e) {
                        return !tc.includes(e)
                    })),
                    T = f(E.filter(function(e) {
                        return S = e, !O.includes(e)
                    }), 1)[0],
                    k = (g = M, v = e5.reduce(function(e, t) {
                        return e[t] = "".concat(eR.cssPrefix, "-").concat(t), e
                    }, {}), K.forEach(function(e) {
                        (E.includes(v[e]) || E.some(function(t) {
                            return e6[e].includes(t)
                        })) && (g = e)
                    }), g),
                    P = d(d({}, (m = [], y = null, x.forEach(function(e) {
                        var t, n, r, i, o = (t = eR.cssPrefix, r = (n = e.split("-"))[0], i = n.slice(1).join("-"), r !== t || "" === i || ~eA.indexOf(i) ? null : i);
                        o ? y = o : e && m.push(e)
                    }), {
                        iconName: y,
                        rest: m
                    })), {}, {
                        prefix: tl(void 0 === T ? null : T, {
                            family: k
                        })
                    });
                return d(d(d({}, P), (n = (t = {
                    values: e,
                    family: k,
                    styles: e4,
                    config: eR,
                    canonical: P,
                    givenPrefix: S
                }).values, r = t.family, i = t.canonical, o = t.givenPrefix, a = t.styles, l = void 0 === (s = t.config) ? {} : s, u = r === L, c = n.includes("fa-duotone") || n.includes("fad"), p = "duotone" === l.familyDefault, h = "fad" === i.prefix || "fa-duotone" === i.prefix, !u && (c || p || h) && (i.prefix = "fad"), (n.includes("fa-brands") || n.includes("fab")) && (i.prefix = "fab"), !i.prefix && tf.includes(r) && (Object.keys(void 0 === a ? {} : a).find(function(e) {
                    return tp.includes(e)
                }) || l.autoFetchSvg) && (i.prefix = X.get(r).defaultShortPrefixId, i.iconName = to(i.prefix, i.iconName) || i.iconName), ("fa" === i.prefix || "fa" === (void 0 === o ? "" : o)) && (i.prefix = e7 || "fas"), i)), function(e, t, n) {
                    var r = n.prefix,
                        i = n.iconName;
                    if (e || !r || !i) return {
                        prefix: r,
                        iconName: i
                    };
                    var o = "fa" === t ? ta(i) : {},
                        a = to(r, i);
                    return i = o.iconName || a || i, "far" !== (r = o.prefix || r) || e4.far || !e4.fas || eR.autoFetchSvg || (r = "fas"), {
                        prefix: r,
                        iconName: i
                    }
                }(void 0 !== w && w, S, P))
            }
            var tf = K.filter(function(e) {
                    return e !== M || e !== L
                }),
                tp = Object.keys(en).filter(function(e) {
                    return e !== M
                }).map(function(e) {
                    return Object.keys(en[e])
                }).flat(),
                th = function() {
                    var e, t;
                    return e = function e() {
                            if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
                            this.definitions = {}
                        }, t = [{
                            key: "add",
                            value: function() {
                                for (var e = this, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                var i = n.reduce(this._pullDefinitions, {});
                                Object.keys(i).forEach(function(t) {
                                    e.definitions[t] = d(d({}, e.definitions[t] || {}), i[t]), e2(t, i[t]);
                                    var n = ex[M][t];
                                    n && e2(n, i[t]), tr()
                                })
                            }
                        }, {
                            key: "reset",
                            value: function() {
                                this.definitions = {}
                            }
                        }, {
                            key: "_pullDefinitions",
                            value: function(e, t) {
                                var n = t.prefix && t.iconName && t.icon ? {
                                    0: t
                                } : t;
                                return Object.keys(n).map(function(t) {
                                    var r = n[t],
                                        i = r.prefix,
                                        o = r.iconName,
                                        a = r.icon,
                                        s = a[2];
                                    e[i] || (e[i] = {}), s.length > 0 && s.forEach(function(t) {
                                        "string" == typeof t && (e[i][t] = a)
                                    }), e[i][o] = a
                                }), e
                            }
                        }],
                        function(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, h(r.key), r)
                            }
                        }(e.prototype, t), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), e
                }(),
                tg = [],
                tv = {},
                tm = {},
                ty = Object.keys(tm);

            function tb(e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
                return (tv[e] || []).forEach(function(e) {
                    t = e.apply(null, [t].concat(r))
                }), t
            }

            function tw(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                (tv[e] || []).forEach(function(e) {
                    e.apply(null, n)
                })
            }

            function tS() {
                var e = arguments[0],
                    t = Array.prototype.slice.call(arguments, 1);
                return tm[e] ? tm[e].apply(null, t) : void 0
            }

            function tE(e) {
                "fa" === e.prefix && (e.prefix = "fas");
                var t = e.iconName,
                    n = e.prefix || e7;
                if (t) return t = to(n, t) || t, eQ(tx.definitions, n, t) || eQ(eW.styles, n, t)
            }
            var tx = new th,
                tT = {
                    noAuto: function() {
                        eR.autoReplaceSvg = !1, eR.observeMutations = !1, tw("noAuto")
                    },
                    config: eR,
                    dom: {
                        i2svg: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return _ ? (tw("beforeI2svg", e), tS("pseudoElements2svg", e), tS("i2svg", e)) : Promise.reject(Error("Operation requires a DOM of some kind."))
                        },
                        watch: function() {
                            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = t.autoReplaceSvgRoot;
                            !1 === eR.autoReplaceSvg && (eR.autoReplaceSvg = !0), eR.observeMutations = !0, e = function() {
                                tk({
                                    autoReplaceSvgRoot: n
                                }), tw("watch", t)
                            }, _ && (eK ? setTimeout(e, 0) : eY.push(e))
                        }
                    },
                    parse: {
                        icon: function(e) {
                            if (null === e) return null;
                            if ("object" === g(e) && e.prefix && e.iconName) return {
                                prefix: e.prefix,
                                iconName: to(e.prefix, e.iconName) || e.iconName
                            };
                            if (Array.isArray(e) && 2 === e.length) {
                                var t = 0 === e[1].indexOf("fa-") ? e[1].slice(3) : e[1],
                                    n = tl(e[0]);
                                return {
                                    prefix: n,
                                    iconName: to(n, t) || t
                                }
                            }
                            if ("string" == typeof e && (e.indexOf("".concat(eR.cssPrefix, "-")) > -1 || e.match(ek))) {
                                var r = td(e.split(" "), {
                                    skipLookups: !0
                                });
                                return {
                                    prefix: r.prefix || e7,
                                    iconName: to(r.prefix, r.iconName) || r.iconName
                                }
                            }
                            if ("string" == typeof e) {
                                var i = e7;
                                return {
                                    prefix: i,
                                    iconName: to(i, e) || e
                                }
                            }
                        }
                    },
                    library: tx,
                    findIconDefinition: tE,
                    toHtml: eX
                },
                tk = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.autoReplaceSvgRoot,
                        n = void 0 === t ? k : t;
                    (Object.keys(eW.styles).length > 0 || eR.autoFetchSvg) && _ && eR.autoReplaceSvg && tT.dom.i2svg({
                        node: n
                    })
                };

            function tP(e, t) {
                return Object.defineProperty(e, "abstract", {
                    get: t
                }), Object.defineProperty(e, "html", {
                    get: function() {
                        return e.abstract.map(function(e) {
                            return eX(e)
                        })
                    }
                }), Object.defineProperty(e, "node", {
                    get: function() {
                        if (_) {
                            var t = k.createElement("div");
                            return t.innerHTML = e.html, t.children
                        }
                    }
                }), e
            }

            function tC(e) {
                var t, n, r, i, o, a, s, l = e.icons,
                    u = l.main,
                    c = l.mask,
                    f = e.prefix,
                    p = e.iconName,
                    h = e.transform,
                    g = e.symbol,
                    v = e.maskId,
                    m = e.extra,
                    y = e.watchable,
                    b = c.found ? c : u,
                    w = b.width,
                    S = b.height,
                    E = [eR.replacementClass, p ? "".concat(eR.cssPrefix, "-").concat(p) : ""].filter(function(e) {
                        return -1 === m.classes.indexOf(e)
                    }).filter(function(e) {
                        return "" !== e || !!e
                    }).concat(m.classes).join(" "),
                    x = {
                        children: [],
                        attributes: d(d({}, m.attributes), {}, {
                            "data-prefix": f,
                            "data-icon": p,
                            class: E,
                            role: m.attributes.role || "img",
                            viewBox: "0 0 ".concat(w, " ").concat(S)
                        })
                    };
                t = m.attributes, ["aria-label", "aria-labelledby", "title", "role"].some(function(e) {
                    return e in t
                }) || m.attributes["aria-hidden"] || (x.attributes["aria-hidden"] = "true"), void 0 !== y && y && (x.attributes[eu] = "");
                var T = d(d({}, x), {}, {
                        prefix: f,
                        iconName: p,
                        main: u,
                        mask: c,
                        maskId: v,
                        transform: h,
                        symbol: g,
                        styles: d({}, m.styles)
                    }),
                    k = c.found && u.found ? tS("generateAbstractMask", T) || {
                        children: [],
                        attributes: {}
                    } : tS("generateAbstractIcon", T) || {
                        children: [],
                        attributes: {}
                    },
                    P = k.children,
                    C = k.attributes;
                return (T.children = P, T.attributes = C, g) ? (n = T.prefix, r = T.iconName, i = T.children, o = T.attributes, s = !0 === (a = T.symbol) ? "".concat(n, "-").concat(eR.cssPrefix, "-").concat(r) : a, [{
                    tag: "svg",
                    attributes: {
                        style: "display: none;"
                    },
                    children: [{
                        tag: "symbol",
                        attributes: d(d({}, o), {}, {
                            id: s
                        }),
                        children: i
                    }]
                }]) : function(e) {
                    var t = e.children,
                        n = e.main,
                        r = e.mask,
                        i = e.attributes,
                        o = e.styles,
                        a = e.transform;
                    if (e$(a) && n.found && !r.found) {
                        var s = {
                            x: n.width / n.height / 2,
                            y: .5
                        };
                        i.style = eU(d(d({}, o), {}, {
                            "transform-origin": "".concat(s.x + a.x / 16, "em ").concat(s.y + a.y / 16, "em")
                        }))
                    }
                    return [{
                        tag: "svg",
                        attributes: i,
                        children: t
                    }]
                }(T)
            }

            function t_(e) {
                var t, n, r, i, o, a, s, l = e.content,
                    u = e.width,
                    c = e.height,
                    f = e.transform,
                    p = e.extra,
                    h = e.watchable,
                    g = d(d({}, p.attributes), {}, {
                        class: p.classes.join(" ")
                    });
                void 0 !== h && h && (g[eu] = "");
                var v = d({}, p.styles);
                e$(f) && (n = (t = {
                    transform: f,
                    startCentered: !0,
                    width: u,
                    height: c
                }).transform, r = t.width, i = t.height, a = void 0 !== (o = t.startCentered) && o, s = "", a && I ? s += "translate(".concat(n.x / 16 - (void 0 === r ? 16 : r) / 2, "em, ").concat(n.y / 16 - (void 0 === i ? 16 : i) / 2, "em) ") : a ? s += "translate(calc(-50% + ".concat(n.x / 16, "em), calc(-50% + ").concat(n.y / 16, "em)) ") : s += "translate(".concat(n.x / 16, "em, ").concat(n.y / 16, "em) "), s += "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "), v.transform = s += "rotate(".concat(n.rotate, "deg) "), v["-webkit-transform"] = v.transform);
                var m = eU(v);
                m.length > 0 && (g.style = m);
                var y = [];
                return y.push({
                    tag: "span",
                    attributes: g,
                    children: [l]
                }), y
            }
            var tI = eW.styles;

            function tA(e) {
                var t = e[0],
                    n = e[1],
                    r = f(e.slice(4), 1)[0];
                return {
                    found: !0,
                    width: t,
                    height: n,
                    icon: Array.isArray(r) ? {
                        tag: "g",
                        attributes: {
                            class: "".concat(eR.cssPrefix, "-").concat(eI.GROUP)
                        },
                        children: [{
                            tag: "path",
                            attributes: {
                                class: "".concat(eR.cssPrefix, "-").concat(eI.SECONDARY),
                                fill: "currentColor",
                                d: r[0]
                            }
                        }, {
                            tag: "path",
                            attributes: {
                                class: "".concat(eR.cssPrefix, "-").concat(eI.PRIMARY),
                                fill: "currentColor",
                                d: r[1]
                            }
                        }]
                    } : {
                        tag: "path",
                        attributes: {
                            fill: "currentColor",
                            d: r
                        }
                    }
                }
            }
            var tO = {
                found: !1,
                width: 512,
                height: 512
            };

            function tM(e, t) {
                var n = t;
                return "fa" === t && null !== eR.styleDefault && (t = e7), new Promise(function(r, i) {
                    if ("fa" === n) {
                        var o, a, s = ta(e) || {};
                        e = s.iconName || e, t = s.prefix || t
                    }
                    if (e && t && tI[t] && tI[t][e]) return r(tA(tI[t][e]));
                    o = e, a = t, ev || eR.showMissingIcons || !o || console.error('Icon with name "'.concat(o, '" and prefix "').concat(a, '" is missing.')), r(d(d({}, tO), {}, {
                        icon: eR.showMissingIcons && e && tS("missingIconAbstract") || {}
                    }))
                })
            }
            var tL = function() {},
                tR = eR.measurePerformance && C && C.mark && C.measure ? C : {
                    mark: tL,
                    measure: tL
                },
                tN = 'FA "7.1.0"',
                tj = function(e) {
                    tR.mark("".concat(tN, " ").concat(e, " ends")), tR.measure("".concat(tN, " ").concat(e), "".concat(tN, " ").concat(e, " begins"), "".concat(tN, " ").concat(e, " ends"))
                },
                tD = {
                    begin: function(e) {
                        return tR.mark("".concat(tN, " ").concat(e, " begins")),
                            function() {
                                return tj(e)
                            }
                    }
                },
                tF = function() {};

            function tz(e) {
                return "string" == typeof(e.getAttribute ? e.getAttribute(eu) : null)
            }

            function tq(e) {
                return k.createElementNS("http://www.w3.org/2000/svg", e)
            }

            function tU(e) {
                return k.createElement(e)
            }
            var t$ = {
                replace: function(e) {
                    var t = e[0];
                    if (t.parentNode)
                        if (e[1].forEach(function(e) {
                                t.parentNode.insertBefore(function e(t) {
                                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        r = n.ceFn,
                                        i = void 0 === r ? "svg" === t.tag ? tq : tU : r;
                                    if ("string" == typeof t) return k.createTextNode(t);
                                    var o = i(t.tag);
                                    return Object.keys(t.attributes || []).forEach(function(e) {
                                        o.setAttribute(e, t.attributes[e])
                                    }), (t.children || []).forEach(function(t) {
                                        o.appendChild(e(t, {
                                            ceFn: i
                                        }))
                                    }), o
                                }(e), t)
                            }), null === t.getAttribute(eu) && eR.keepOriginalSource) {
                            var n, r = k.createComment((n = " ".concat(t.outerHTML, " "), n = "".concat(n, "Font Awesome fontawesome.com ")));
                            t.parentNode.replaceChild(r, t)
                        } else t.remove()
                },
                nest: function(e) {
                    var t = e[0],
                        n = e[1];
                    if (~ez(t).indexOf(eR.replacementClass)) return t$.replace(e);
                    var r = new RegExp("".concat(eR.cssPrefix, "-.*"));
                    if (delete n[0].attributes.id, n[0].attributes.class) {
                        var i = n[0].attributes.class.split(" ").reduce(function(e, t) {
                            return t === eR.replacementClass || t.match(r) ? e.toSvg.push(t) : e.toNode.push(t), e
                        }, {
                            toNode: [],
                            toSvg: []
                        });
                        n[0].attributes.class = i.toSvg.join(" "), 0 === i.toNode.length ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "))
                    }
                    var o = n.map(function(e) {
                        return eX(e)
                    }).join("\n");
                    t.setAttribute(eu, ""), t.innerHTML = o
                }
            };

            function tB(e) {
                e()
            }

            function tH(e, t) {
                var n = "function" == typeof t ? t : tF;
                if (0 === e.length) n();
                else {
                    var r = tB;
                    "async" === eR.mutateApproach && (r = T.requestAnimationFrame || tB), r(function() {
                        var t = !0 === eR.autoReplaceSvg ? t$.replace : t$[eR.autoReplaceSvg] || t$.replace,
                            r = tD.begin("mutate");
                        e.map(t), r(), n()
                    })
                }
            }
            var tV = !1,
                tG = null;

            function tW(e) {
                if (P && eR.observeMutations) {
                    var t = e.treeCallback,
                        n = void 0 === t ? tF : t,
                        r = e.nodeCallback,
                        i = void 0 === r ? tF : r,
                        o = e.pseudoElementsCallback,
                        a = void 0 === o ? tF : o,
                        s = e.observeMutationsRoot,
                        l = void 0 === s ? k : s;
                    tG = new P(function(e) {
                        if (!tV) {
                            var t = e7;
                            eF(e).forEach(function(e) {
                                if ("childList" === e.type && e.addedNodes.length > 0 && !tz(e.addedNodes[0]) && (eR.searchPseudoElements && a(e.target), n(e.target)), "attributes" === e.type && e.target.parentNode && eR.searchPseudoElements && a([e.target], !0), "attributes" === e.type && tz(e.target) && ~e_.indexOf(e.attributeName))
                                    if ("class" === e.attributeName && (o = (r = e.target).getAttribute ? r.getAttribute(ed) : null, s = r.getAttribute ? r.getAttribute(ef) : null, o && s)) {
                                        var r, o, s, l, u = td(ez(e.target)),
                                            c = u.prefix,
                                            d = u.iconName;
                                        e.target.setAttribute(ed, c || t), d && e.target.setAttribute(ef, d)
                                    } else(l = e.target) && l.classList && l.classList.contains && l.classList.contains(eR.replacementClass) && i(e.target)
                            })
                        }
                    }), _ && tG.observe(l, {
                        childList: !0,
                        attributes: !0,
                        characterData: !0,
                        subtree: !0
                    })
                }
            }

            function tY(e) {
                var t, n, r, i, o, a, s, l, u, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        styleParser: !0
                    },
                    f = (i = (t = e).getAttribute("data-prefix"), o = t.getAttribute("data-icon"), a = void 0 !== t.innerText ? t.innerText.trim() : "", ((s = td(ez(t))).prefix || (s.prefix = e7), i && o && (s.prefix = i, s.iconName = o), s.iconName && s.prefix) ? s : (s.prefix && a.length > 0 && (n = s.prefix, r = t.innerText, s.iconName = (e9[n] || {})[r] || ti(s.prefix, e0(t.innerText))), !s.iconName && eR.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (s.iconName = t.firstChild.data), s)),
                    p = f.iconName,
                    h = f.prefix,
                    g = f.rest,
                    v = eF(e.attributes).reduce(function(e, t) {
                        return "class" !== e.name && "style" !== e.name && (e[t.name] = t.value), e
                    }, {}),
                    m = tb("parseNodeAttributes", {}, e);
                return d({
                    iconName: p,
                    prefix: h,
                    transform: ej,
                    mask: {
                        iconName: null,
                        prefix: null,
                        rest: []
                    },
                    maskId: null,
                    symbol: !1,
                    extra: {
                        classes: g,
                        styles: c.styleParser ? (l = e.getAttribute("style"), u = [], l && (u = l.split(";").reduce(function(e, t) {
                            var n = t.split(":"),
                                r = n[0],
                                i = n.slice(1);
                            return r && i.length > 0 && (e[r] = i.join(":").trim()), e
                        }, {})), u) : [],
                        attributes: v
                    }
                }, m)
            }
            var tJ = eW.styles;

            function tK(e) {
                var t = "nest" === eR.autoReplaceSvg ? tY(e, {
                    styleParser: !1
                }) : tY(e);
                return ~t.extra.classes.indexOf(eP) ? tS("generateLayersText", e, t) : tS("generateSvgReplacementMutation", e, t)
            }

            function tX(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (!_) return Promise.resolve();
                var n = k.documentElement.classList,
                    r = function(e) {
                        return n.add("".concat(ep, "-").concat(e))
                    },
                    i = function(e) {
                        return n.remove("".concat(ep, "-").concat(e))
                    },
                    o = eR.autoFetchSvg ? [].concat(p(Q), p(er)) : O.concat(Object.keys(tJ));
                o.includes("fa") || o.push("fa");
                var a = [".".concat(eP, ":not([").concat(eu, "])")].concat(o.map(function(e) {
                    return ".".concat(e, ":not([").concat(eu, "])")
                })).join(", ");
                if (0 === a.length) return Promise.resolve();
                var s = [];
                try {
                    s = eF(e.querySelectorAll(a))
                } catch (e) {}
                if (!(s.length > 0)) return Promise.resolve();
                r("pending"), i("complete");
                var l = tD.begin("onTree"),
                    u = s.reduce(function(e, t) {
                        try {
                            var n = tK(t);
                            n && e.push(n)
                        } catch (e) {
                            ev || "MissingIcon" !== e.name || console.error(e)
                        }
                        return e
                    }, []);
                return new Promise(function(e, n) {
                    Promise.all(u).then(function(n) {
                        tH(n, function() {
                            r("active"), r("complete"), i("pending"), "function" == typeof t && t(), l(), e()
                        })
                    }).catch(function(e) {
                        l(), n(e)
                    })
                })
            }

            function tQ(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                tK(e).then(function(e) {
                    e && tH([e], t)
                })
            }
            var tZ = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.transform,
                        r = void 0 === n ? ej : n,
                        i = t.symbol,
                        o = void 0 !== i && i,
                        a = t.mask,
                        s = void 0 === a ? null : a,
                        l = t.maskId,
                        u = void 0 === l ? null : l,
                        c = t.classes,
                        f = void 0 === c ? [] : c,
                        p = t.attributes,
                        h = void 0 === p ? {} : p,
                        g = t.styles,
                        v = void 0 === g ? {} : g;
                    if (e) {
                        var m = e.prefix,
                            y = e.iconName,
                            b = e.icon;
                        return tP(d({
                            type: "icon"
                        }, e), function() {
                            return tw("beforeDOMElementCreation", {
                                iconDefinition: e,
                                params: t
                            }), tC({
                                icons: {
                                    main: tA(b),
                                    mask: s ? tA(s.icon) : {
                                        found: !1,
                                        width: null,
                                        height: null,
                                        icon: {}
                                    }
                                },
                                prefix: m,
                                iconName: y,
                                transform: d(d({}, ej), r),
                                symbol: o,
                                maskId: u,
                                extra: {
                                    attributes: h,
                                    styles: v,
                                    classes: f
                                }
                            })
                        })
                    }
                },
                t0 = RegExp('"', "ug"),
                t1 = d(d(d(d({}, {
                    FontAwesome: {
                        normal: "fas",
                        400: "fas"
                    }
                }), {
                    "Font Awesome 7 Free": {
                        900: "fas",
                        400: "far"
                    },
                    "Font Awesome 7 Pro": {
                        900: "fas",
                        400: "far",
                        normal: "far",
                        300: "fal",
                        100: "fat"
                    },
                    "Font Awesome 7 Brands": {
                        400: "fab",
                        normal: "fab"
                    },
                    "Font Awesome 7 Duotone": {
                        900: "fad",
                        400: "fadr",
                        normal: "fadr",
                        300: "fadl",
                        100: "fadt"
                    },
                    "Font Awesome 7 Sharp": {
                        900: "fass",
                        400: "fasr",
                        normal: "fasr",
                        300: "fasl",
                        100: "fast"
                    },
                    "Font Awesome 7 Sharp Duotone": {
                        900: "fasds",
                        400: "fasdr",
                        normal: "fasdr",
                        300: "fasdl",
                        100: "fasdt"
                    },
                    "Font Awesome 7 Jelly": {
                        400: "fajr",
                        normal: "fajr"
                    },
                    "Font Awesome 7 Jelly Fill": {
                        400: "fajfr",
                        normal: "fajfr"
                    },
                    "Font Awesome 7 Jelly Duo": {
                        400: "fajdr",
                        normal: "fajdr"
                    },
                    "Font Awesome 7 Slab": {
                        400: "faslr",
                        normal: "faslr"
                    },
                    "Font Awesome 7 Slab Press": {
                        400: "faslpr",
                        normal: "faslpr"
                    },
                    "Font Awesome 7 Thumbprint": {
                        300: "fatl",
                        normal: "fatl"
                    },
                    "Font Awesome 7 Notdog": {
                        900: "fans",
                        normal: "fans"
                    },
                    "Font Awesome 7 Notdog Duo": {
                        900: "fands",
                        normal: "fands"
                    },
                    "Font Awesome 7 Etch": {
                        900: "faes",
                        normal: "faes"
                    },
                    "Font Awesome 7 Chisel": {
                        400: "facr",
                        normal: "facr"
                    },
                    "Font Awesome 7 Whiteboard": {
                        600: "fawsb",
                        normal: "fawsb"
                    },
                    "Font Awesome 7 Utility": {
                        600: "fausb",
                        normal: "fausb"
                    },
                    "Font Awesome 7 Utility Duo": {
                        600: "faudsb",
                        normal: "faudsb"
                    },
                    "Font Awesome 7 Utility Fill": {
                        600: "faufsb",
                        normal: "faufsb"
                    }
                }), {
                    "Font Awesome 5 Free": {
                        900: "fas",
                        400: "far"
                    },
                    "Font Awesome 5 Pro": {
                        900: "fas",
                        400: "far",
                        normal: "far",
                        300: "fal"
                    },
                    "Font Awesome 5 Brands": {
                        400: "fab",
                        normal: "fab"
                    },
                    "Font Awesome 5 Duotone": {
                        900: "fad"
                    }
                }), {
                    "Font Awesome Kit": {
                        400: "fak",
                        normal: "fak"
                    },
                    "Font Awesome Kit Duotone": {
                        400: "fakd",
                        normal: "fakd"
                    }
                }),
                t2 = Object.keys(t1).reduce(function(e, t) {
                    return e[t.toLowerCase()] = t1[t], e
                }, {}),
                t4 = Object.keys(t2).reduce(function(e, t) {
                    var n = t2[t];
                    return e[t] = n[900] || p(Object.entries(n))[0][1], e
                }, {});

            function t3(e, t) {
                var n = "".concat("data-fa-pseudo-element-pending").concat(t.replace(":", "-"));
                return new Promise(function(r, i) {
                    if (null !== e.getAttribute(n)) return r();
                    var o = eF(e.children).filter(function(e) {
                            return e.getAttribute(ec) === t
                        })[0],
                        a = T.getComputedStyle(e, t),
                        s = a.getPropertyValue("font-family"),
                        l = s.match(eC),
                        u = a.getPropertyValue("font-weight"),
                        c = a.getPropertyValue("content");
                    if (o && !l) return e.removeChild(o), r();
                    if (l && "none" !== c && "" !== c) {
                        var f = a.getPropertyValue("content"),
                            h = (w = s.replace(/^['"]|['"]$/g, "").toLowerCase(), E = isNaN(S = parseInt(u)) ? "normal" : S, (t2[w] || {})[E] || t4[w]),
                            g = e0(p(f.replace(t0, ""))[0] || ""),
                            v = l[0].startsWith("FontAwesome"),
                            m = (x = a.getPropertyValue("font-feature-settings").includes("ss01"), _ = (C = (P = a.getPropertyValue("content").replace(t0, "")).codePointAt(0)) >= 1105920 && C <= 1112319, I = 2 === P.length && P[0] === P[1], _ || I || x),
                            y = ti(h, g),
                            b = y;
                        if (v) {
                            var w, S, E, x, P, C, _, I, A, O, M = (A = tt[g], O = ti("fas", g), A || (O ? {
                                prefix: "fas",
                                iconName: O
                            } : null) || {
                                prefix: null,
                                iconName: null
                            });
                            M.iconName && M.prefix && (y = M.iconName, h = M.prefix)
                        }
                        if (!y || m || o && o.getAttribute(ed) === h && o.getAttribute(ef) === b) r();
                        else {
                            e.setAttribute(n, b), o && e.removeChild(o);
                            var L = {
                                    iconName: null,
                                    prefix: null,
                                    transform: ej,
                                    symbol: !1,
                                    mask: {
                                        iconName: null,
                                        prefix: null,
                                        rest: []
                                    },
                                    maskId: null,
                                    extra: {
                                        classes: [],
                                        styles: {},
                                        attributes: {}
                                    }
                                },
                                R = L.extra;
                            R.attributes[ec] = t, tM(y, h).then(function(i) {
                                var o = tC(d(d({}, L), {}, {
                                        icons: {
                                            main: i,
                                            mask: ts()
                                        },
                                        prefix: h,
                                        iconName: b,
                                        extra: R,
                                        watchable: !0
                                    })),
                                    a = k.createElementNS("http://www.w3.org/2000/svg", "svg");
                                "::before" === t ? e.insertBefore(a, e.firstChild) : e.appendChild(a), a.outerHTML = o.map(function(e) {
                                    return eX(e)
                                }).join("\n"), e.removeAttribute(n), r()
                            }).catch(i)
                        }
                    } else r()
                })
            }

            function t5(e) {
                return Promise.all([t3(e, "::before"), t3(e, "::after")])
            }

            function t6(e) {
                return e.parentNode !== document.head && !~eh.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(ec) && (!e.parentNode || "svg" !== e.parentNode.tagName)
            }
            var t7 = function(e) {
                    return !!e && eg.some(function(t) {
                        return e.includes(t)
                    })
                },
                t8 = function(e) {
                    if (!e) return [];
                    var t, n = new Set,
                        r = e.split(/,(?![^()]*\))/).map(function(e) {
                            return e.trim()
                        }),
                        i = l(r = r.flatMap(function(e) {
                            return e.includes("(") ? e : e.split(",").map(function(e) {
                                return e.trim()
                            })
                        }));
                    try {
                        for (i.s(); !(t = i.n()).done;) {
                            var o = t.value;
                            if (t7(o)) {
                                var a = eg.reduce(function(e, t) {
                                    return e.replace(t, "")
                                }, o);
                                "" !== a && "*" !== a && n.add(a)
                            }
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                    return n
                };

            function t9(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (_) {
                    if (t) n = e;
                    else if (eR.searchPseudoElementsFullScan) n = e.querySelectorAll("*");
                    else {
                        var n, r, i = new Set,
                            o = l(document.styleSheets);
                        try {
                            for (o.s(); !(r = o.n()).done;) {
                                var a = r.value;
                                try {
                                    var s, u = l(a.cssRules);
                                    try {
                                        for (u.s(); !(s = u.n()).done;) {
                                            var c, d = s.value,
                                                f = t8(d.selectorText),
                                                p = l(f);
                                            try {
                                                for (p.s(); !(c = p.n()).done;) {
                                                    var h = c.value;
                                                    i.add(h)
                                                }
                                            } catch (e) {
                                                p.e(e)
                                            } finally {
                                                p.f()
                                            }
                                        }
                                    } catch (e) {
                                        u.e(e)
                                    } finally {
                                        u.f()
                                    }
                                } catch (e) {
                                    eR.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(a.href, " (").concat(e.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
                                }
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        if (!i.size) return;
                        var g = Array.from(i).join(", ");
                        try {
                            n = e.querySelectorAll(g)
                        } catch (e) {}
                    }
                    return new Promise(function(e, t) {
                        var r = eF(n).filter(t6).map(t5),
                            i = tD.begin("searchPseudoElements");
                        tV = !0, Promise.all(r).then(function() {
                            i(), tV = !1, e()
                        }).catch(function() {
                            i(), tV = !1, t()
                        })
                    })
                }
            }
            var ne = !1,
                nt = function(e) {
                    return e.toLowerCase().split(" ").reduce(function(e, t) {
                        var n = t.toLowerCase().split("-"),
                            r = n[0],
                            i = n.slice(1).join("-");
                        if (r && "h" === i) return e.flipX = !0, e;
                        if (r && "v" === i) return e.flipY = !0, e;
                        if (isNaN(i = parseFloat(i))) return e;
                        switch (r) {
                            case "grow":
                                e.size = e.size + i;
                                break;
                            case "shrink":
                                e.size = e.size - i;
                                break;
                            case "left":
                                e.x = e.x - i;
                                break;
                            case "right":
                                e.x = e.x + i;
                                break;
                            case "up":
                                e.y = e.y - i;
                                break;
                            case "down":
                                e.y = e.y + i;
                                break;
                            case "rotate":
                                e.rotate = e.rotate + i
                        }
                        return e
                    }, {
                        size: 16,
                        x: 0,
                        y: 0,
                        flipX: !1,
                        flipY: !1,
                        rotate: 0
                    })
                },
                nn = {
                    x: 0,
                    y: 0,
                    width: "100%",
                    height: "100%"
                };

            function nr(e) {
                var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
            }! function(e, t) {
                var n = t.mixoutsTo;
                tg = e, tv = {}, Object.keys(tm).forEach(function(e) {
                    -1 === ty.indexOf(e) && delete tm[e]
                }), tg.forEach(function(e) {
                    var t = e.mixout ? e.mixout() : {};
                    if (Object.keys(t).forEach(function(e) {
                            "function" == typeof t[e] && (n[e] = t[e]), "object" === g(t[e]) && Object.keys(t[e]).forEach(function(r) {
                                n[e] || (n[e] = {}), n[e][r] = t[e][r]
                            })
                        }), e.hooks) {
                        var r = e.hooks();
                        Object.keys(r).forEach(function(e) {
                            tv[e] || (tv[e] = []), tv[e].push(r[e])
                        })
                    }
                    e.provides && e.provides(tm)
                })
            }([{
                mixout: function() {
                    return {
                        dom: {
                            css: eB,
                            insertCss: eV
                        }
                    }
                },
                hooks: function() {
                    return {
                        beforeDOMElementCreation: function() {
                            eV()
                        },
                        beforeI2svg: function() {
                            eV()
                        }
                    }
                }
            }, {
                mixout: function() {
                    return {
                        icon: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = (e || {}).icon ? e : tE(e || {}),
                                r = t.mask;
                            return r && (r = (r || {}).icon ? r : tE(r || {})), tZ(n, d(d({}, t), {}, {
                                mask: r
                            }))
                        }
                    }
                },
                hooks: function() {
                    return {
                        mutationObserverCallbacks: function(e) {
                            return e.treeCallback = tX, e.nodeCallback = tQ, e
                        }
                    }
                },
                provides: function(e) {
                    e.i2svg = function(e) {
                        var t = e.node,
                            n = void 0 === t ? k : t,
                            r = e.callback;
                        return tX(n, void 0 === r ? function() {} : r)
                    }, e.generateSvgReplacementMutation = function(e, t) {
                        var n = t.iconName,
                            r = t.prefix,
                            i = t.transform,
                            o = t.symbol,
                            a = t.mask,
                            s = t.maskId,
                            l = t.extra;
                        return new Promise(function(t, u) {
                            Promise.all([tM(n, r), a.iconName ? tM(a.iconName, a.prefix) : Promise.resolve({
                                found: !1,
                                width: 512,
                                height: 512,
                                icon: {}
                            })]).then(function(a) {
                                var u = f(a, 2);
                                t([e, tC({
                                    icons: {
                                        main: u[0],
                                        mask: u[1]
                                    },
                                    prefix: r,
                                    iconName: n,
                                    transform: i,
                                    symbol: o,
                                    maskId: s,
                                    extra: l,
                                    watchable: !0
                                })])
                            }).catch(u)
                        })
                    }, e.generateAbstractIcon = function(e) {
                        var t, n = e.children,
                            r = e.attributes,
                            i = e.main,
                            o = e.transform,
                            a = eU(e.styles);
                        return a.length > 0 && (r.style = a), e$(o) && (t = tS("generateAbstractTransformGrouping", {
                            main: i,
                            transform: o,
                            containerWidth: i.width,
                            iconWidth: i.width
                        })), n.push(t || i.icon), {
                            children: n,
                            attributes: r
                        }
                    }
                }
            }, {
                mixout: function() {
                    return {
                        layer: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = t.classes,
                                r = void 0 === n ? [] : n;
                            return tP({
                                type: "layer"
                            }, function() {
                                tw("beforeDOMElementCreation", {
                                    assembler: e,
                                    params: t
                                });
                                var n = [];
                                return e(function(e) {
                                    Array.isArray(e) ? e.map(function(e) {
                                        n = n.concat(e.abstract)
                                    }) : n = n.concat(e.abstract)
                                }), [{
                                    tag: "span",
                                    attributes: {
                                        class: ["".concat(eR.cssPrefix, "-layers")].concat(p(r)).join(" ")
                                    },
                                    children: n
                                }]
                            })
                        }
                    }
                }
            }, {
                mixout: function() {
                    return {
                        counter: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = t.title,
                                r = void 0 === n ? null : n,
                                i = t.classes,
                                o = void 0 === i ? [] : i,
                                a = t.attributes,
                                s = void 0 === a ? {} : a,
                                l = t.styles,
                                u = void 0 === l ? {} : l;
                            return tP({
                                type: "counter",
                                content: e
                            }, function() {
                                var n, i, a, l, c, f;
                                return tw("beforeDOMElementCreation", {
                                    content: e,
                                    params: t
                                }), i = (n = {
                                    content: e.toString(),
                                    title: r,
                                    extra: {
                                        attributes: s,
                                        styles: u,
                                        classes: ["".concat(eR.cssPrefix, "-layers-counter")].concat(p(o))
                                    }
                                }).content, l = d(d({}, (a = n.extra).attributes), {}, {
                                    class: a.classes.join(" ")
                                }), (c = eU(a.styles)).length > 0 && (l.style = c), (f = []).push({
                                    tag: "span",
                                    attributes: l,
                                    children: [i]
                                }), f
                            })
                        }
                    }
                }
            }, {
                mixout: function() {
                    return {
                        text: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = t.transform,
                                r = void 0 === n ? ej : n,
                                i = t.classes,
                                o = void 0 === i ? [] : i,
                                a = t.attributes,
                                s = void 0 === a ? {} : a,
                                l = t.styles,
                                u = void 0 === l ? {} : l;
                            return tP({
                                type: "text",
                                content: e
                            }, function() {
                                return tw("beforeDOMElementCreation", {
                                    content: e,
                                    params: t
                                }), t_({
                                    content: e,
                                    transform: d(d({}, ej), r),
                                    extra: {
                                        attributes: s,
                                        styles: u,
                                        classes: ["".concat(eR.cssPrefix, "-layers-text")].concat(p(o))
                                    }
                                })
                            })
                        }
                    }
                },
                provides: function(e) {
                    e.generateLayersText = function(e, t) {
                        var n = t.transform,
                            r = t.extra,
                            i = null,
                            o = null;
                        if (I) {
                            var a = parseInt(getComputedStyle(e).fontSize, 10),
                                s = e.getBoundingClientRect();
                            i = s.width / a, o = s.height / a
                        }
                        return Promise.resolve([e, t_({
                            content: e.innerHTML,
                            width: i,
                            height: o,
                            transform: n,
                            extra: r,
                            watchable: !0
                        })])
                    }
                }
            }, {
                hooks: function() {
                    return {
                        mutationObserverCallbacks: function(e) {
                            return e.pseudoElementsCallback = t9, e
                        }
                    }
                },
                provides: function(e) {
                    e.pseudoElements2svg = function(e) {
                        var t = e.node,
                            n = void 0 === t ? k : t;
                        eR.searchPseudoElements && t9(n)
                    }
                }
            }, {
                mixout: function() {
                    return {
                        dom: {
                            unwatch: function() {
                                tV = !0, ne = !0
                            }
                        }
                    }
                },
                hooks: function() {
                    return {
                        bootstrap: function() {
                            tW(tb("mutationObserverCallbacks", {}))
                        },
                        noAuto: function() {
                            tG && tG.disconnect()
                        },
                        watch: function(e) {
                            var t = e.observeMutationsRoot;
                            ne ? tV = !1 : tW(tb("mutationObserverCallbacks", {
                                observeMutationsRoot: t
                            }))
                        }
                    }
                }
            }, {
                mixout: function() {
                    return {
                        parse: {
                            transform: function(e) {
                                return nt(e)
                            }
                        }
                    }
                },
                hooks: function() {
                    return {
                        parseNodeAttributes: function(e, t) {
                            var n = t.getAttribute("data-fa-transform");
                            return n && (e.transform = nt(n)), e
                        }
                    }
                },
                provides: function(e) {
                    e.generateAbstractTransformGrouping = function(e) {
                        var t = e.main,
                            n = e.transform,
                            r = e.containerWidth,
                            i = e.iconWidth,
                            o = "translate(".concat(32 * n.x, ", ").concat(32 * n.y, ") "),
                            a = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "),
                            s = "rotate(".concat(n.rotate, " 0 0)"),
                            l = {
                                transform: "".concat(o, " ").concat(a, " ").concat(s)
                            },
                            u = {
                                outer: {
                                    transform: "translate(".concat(r / 2, " 256)")
                                },
                                inner: l,
                                path: {
                                    transform: "translate(".concat(-(i / 2 * 1), " -256)")
                                }
                            };
                        return {
                            tag: "g",
                            attributes: d({}, u.outer),
                            children: [{
                                tag: "g",
                                attributes: d({}, u.inner),
                                children: [{
                                    tag: t.icon.tag,
                                    children: t.icon.children,
                                    attributes: d(d({}, t.icon.attributes), u.path)
                                }]
                            }]
                        }
                    }
                }
            }, {
                hooks: function() {
                    return {
                        parseNodeAttributes: function(e, t) {
                            var n = t.getAttribute("data-fa-mask"),
                                r = n ? td(n.split(" ").map(function(e) {
                                    return e.trim()
                                })) : ts();
                            return r.prefix || (r.prefix = e7), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e
                        }
                    }
                },
                provides: function(e) {
                    e.generateAbstractMask = function(e) {
                        var t, n, r, i, o, a, s, l, u = e.children,
                            c = e.attributes,
                            f = e.main,
                            p = e.mask,
                            h = e.maskId,
                            g = e.transform,
                            v = f.width,
                            m = f.icon,
                            y = p.width,
                            b = p.icon,
                            w = (n = (t = {
                                transform: g,
                                containerWidth: y,
                                iconWidth: v
                            }).transform, r = t.containerWidth, i = t.iconWidth, o = "translate(".concat(32 * n.x, ", ").concat(32 * n.y, ") "), a = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "), s = "rotate(".concat(n.rotate, " 0 0)"), l = {
                                transform: "".concat(o, " ").concat(a, " ").concat(s)
                            }, {
                                outer: {
                                    transform: "translate(".concat(r / 2, " 256)")
                                },
                                inner: l,
                                path: {
                                    transform: "translate(".concat(-(i / 2 * 1), " -256)")
                                }
                            }),
                            S = {
                                tag: "rect",
                                attributes: d(d({}, nn), {}, {
                                    fill: "white"
                                })
                            },
                            E = m.children ? {
                                children: m.children.map(nr)
                            } : {},
                            x = {
                                tag: "g",
                                attributes: d({}, w.inner),
                                children: [nr(d({
                                    tag: m.tag,
                                    attributes: d(d({}, m.attributes), w.path)
                                }, E))]
                            },
                            T = {
                                tag: "g",
                                attributes: d({}, w.outer),
                                children: [x]
                            },
                            k = "mask-".concat(h || eD()),
                            P = "clip-".concat(h || eD()),
                            C = {
                                tag: "mask",
                                attributes: d(d({}, nn), {}, {
                                    id: k,
                                    maskUnits: "userSpaceOnUse",
                                    maskContentUnits: "userSpaceOnUse"
                                }),
                                children: [S, T]
                            },
                            _ = {
                                tag: "defs",
                                children: [{
                                    tag: "clipPath",
                                    attributes: {
                                        id: P
                                    },
                                    children: "g" === b.tag ? b.children : [b]
                                }, C]
                            };
                        return u.push(_, {
                            tag: "rect",
                            attributes: d({
                                fill: "currentColor",
                                "clip-path": "url(#".concat(P, ")"),
                                mask: "url(#".concat(k, ")")
                            }, nn)
                        }), {
                            children: u,
                            attributes: c
                        }
                    }
                }
            }, {
                provides: function(e) {
                    var t = !1;
                    T.matchMedia && (t = T.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
                        var e = [],
                            n = {
                                fill: "currentColor"
                            },
                            r = {
                                attributeType: "XML",
                                repeatCount: "indefinite",
                                dur: "2s"
                            };
                        e.push({
                            tag: "path",
                            attributes: d(d({}, n), {}, {
                                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                            })
                        });
                        var i = d(d({}, r), {}, {
                                attributeName: "opacity"
                            }),
                            o = {
                                tag: "circle",
                                attributes: d(d({}, n), {}, {
                                    cx: "256",
                                    cy: "364",
                                    r: "28"
                                }),
                                children: []
                            };
                        return t || o.children.push({
                            tag: "animate",
                            attributes: d(d({}, r), {}, {
                                attributeName: "r",
                                values: "28;14;28;28;14;28;"
                            })
                        }, {
                            tag: "animate",
                            attributes: d(d({}, i), {}, {
                                values: "1;0;1;1;0;1;"
                            })
                        }), e.push(o), e.push({
                            tag: "path",
                            attributes: d(d({}, n), {}, {
                                opacity: "1",
                                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                            }),
                            children: t ? [] : [{
                                tag: "animate",
                                attributes: d(d({}, i), {}, {
                                    values: "1;0;0;0;0;1;"
                                })
                            }]
                        }), t || e.push({
                            tag: "path",
                            attributes: d(d({}, n), {}, {
                                opacity: "0",
                                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                            }),
                            children: [{
                                tag: "animate",
                                attributes: d(d({}, i), {}, {
                                    values: "0;0;1;1;0;0;"
                                })
                            }]
                        }), {
                            tag: "g",
                            attributes: {
                                class: "missing"
                            },
                            children: e
                        }
                    }
                }
            }, {
                hooks: function() {
                    return {
                        parseNodeAttributes: function(e, t) {
                            var n = t.getAttribute("data-fa-symbol");
                            return e.symbol = null !== n && ("" === n || n), e
                        }
                    }
                }
            }], {
                mixoutsTo: tT
            }), tT.noAuto;
            var ni = tT.config;
            tT.library, tT.dom;
            var no = tT.parse;
            tT.findIconDefinition, tT.toHtml;
            var na = tT.icon;
            tT.layer, tT.text, tT.counter, n(5155);
            var ns = n(7358);

            function nl(e) {
                var t;
                return (t = e - 0) == t ? e : (e = e.replace(/[_-]+(.)?/g, (e, t) => t ? t.toUpperCase() : "")).charAt(0).toLowerCase() + e.slice(1)
            }
            var nu = new Map,
                nc = (function e(t, n, r = {}) {
                    if ("string" == typeof n) return n;
                    let i = (n.children || []).map(n => e(t, n)),
                        o = n.attributes || {},
                        a = {};
                    for (let [e, t] of Object.entries(o)) switch (!0) {
                        case "class" === e:
                            a.className = t;
                            break;
                        case "style" === e:
                            a.style = function(e) {
                                if (nu.has(e)) return nu.get(e);
                                let t = {},
                                    n = 0,
                                    r = e.length;
                                for (; n < r;) {
                                    let i = e.indexOf(";", n),
                                        o = -1 === i ? r : i,
                                        a = e.slice(n, o).trim();
                                    if (a) {
                                        let e = a.indexOf(":");
                                        if (e > 0) {
                                            let n = a.slice(0, e).trim(),
                                                r = a.slice(e + 1).trim();
                                            if (n && r) {
                                                let e = nl(n);
                                                t[e.startsWith("webkit") ? e.charAt(0).toUpperCase() + e.slice(1) : e] = r
                                            }
                                        }
                                    }
                                    n = o + 1
                                }
                                if (1e3 === nu.size) {
                                    let e = nu.keys().next().value;
                                    e && nu.delete(e)
                                }
                                return nu.set(e, t), t
                            }(String(t));
                            break;
                        case e.startsWith("aria-"):
                        case e.startsWith("data-"):
                            a[e.toLowerCase()] = t;
                            break;
                        default:
                            a[nl(e)] = t
                    }
                    let {
                        style: s,
                        role: l,
                        "aria-label": u,
                        ...c
                    } = r;
                    return s && (a.style = a.style ? { ...a.style,
                        ...s
                    } : s), l && (a.role = l), u && (a["aria-label"] = u, a["aria-hidden"] = "false"), t(n.tag, { ...c,
                        ...a
                    }, ...i)
                }).bind(null, a.createElement),
                nd = (e, t) => {
                    let n = (0, a.useId)();
                    return e || (t ? n : void 0)
                },
                nf = class {
                    constructor(e = "react-fontawesome") {
                        this.enabled = !1;
                        let t = !1;
                        try {
                            t = void 0 !== ns && !1
                        } catch {}
                        this.scope = e, this.enabled = t
                    }
                    log(...e) {
                        this.enabled && console.log(`[${this.scope}]`, ...e)
                    }
                    warn(...e) {
                        this.enabled && console.warn(`[${this.scope}]`, ...e)
                    }
                    error(...e) {
                        this.enabled && console.error(`[${this.scope}]`, ...e)
                    }
                };
            void 0 !== ns && ns.env.FA_VERSION;
            var np = Number.parseInt("searchPseudoElementsFullScan" in ni ? "7.0.0" : "6.0.0") >= 7,
                nh = {
                    beat: "fa-beat",
                    fade: "fa-fade",
                    beatFade: "fa-beat-fade",
                    bounce: "fa-bounce",
                    shake: "fa-shake",
                    spin: "fa-spin",
                    spinPulse: "fa-spin-pulse",
                    spinReverse: "fa-spin-reverse",
                    pulse: "fa-pulse"
                },
                ng = {
                    left: "fa-pull-left",
                    right: "fa-pull-right"
                },
                nv = {
                    90: "fa-rotate-90",
                    180: "fa-rotate-180",
                    270: "fa-rotate-270"
                },
                nm = {
                    "2xs": "fa-2xs",
                    xs: "fa-xs",
                    sm: "fa-sm",
                    lg: "fa-lg",
                    xl: "fa-xl",
                    "2xl": "fa-2xl",
                    "1x": "fa-1x",
                    "2x": "fa-2x",
                    "3x": "fa-3x",
                    "4x": "fa-4x",
                    "5x": "fa-5x",
                    "6x": "fa-6x",
                    "7x": "fa-7x",
                    "8x": "fa-8x",
                    "9x": "fa-9x",
                    "10x": "fa-10x"
                },
                ny = {
                    border: "fa-border",
                    fixedWidth: "fa-fw",
                    flip: "fa-flip",
                    flipHorizontal: "fa-flip-horizontal",
                    flipVertical: "fa-flip-vertical",
                    inverse: "fa-inverse",
                    rotateBy: "fa-rotate-by",
                    swapOpacity: "fa-swap-opacity",
                    widthAuto: "fa-width-auto"
                };

            function nb(e) {
                let t = ni.cssPrefix || ni.familyPrefix || "fa";
                return "fa" === t ? e : e.replace(RegExp(String.raw `(?<=^|\s)${"fa"}-`, "g"), `${t}-`)
            }

            function nw(e) {
                if (e) return "object" == typeof e && "icon" in e && e.icon ? e : no.icon(e)
            }
            var nS = new nf("FontAwesomeIcon"),
                nE = {
                    border: !1,
                    className: "",
                    mask: void 0,
                    maskId: void 0,
                    fixedWidth: !1,
                    inverse: !1,
                    flip: !1,
                    icon: void 0,
                    listItem: !1,
                    pull: void 0,
                    pulse: !1,
                    rotation: void 0,
                    rotateBy: !1,
                    size: void 0,
                    spin: !1,
                    spinPulse: !1,
                    spinReverse: !1,
                    beat: !1,
                    fade: !1,
                    beatFade: !1,
                    bounce: !1,
                    shake: !1,
                    symbol: !1,
                    title: "",
                    titleId: void 0,
                    transform: void 0,
                    swapOpacity: !1,
                    widthAuto: !1
                },
                nx = new Set(Object.keys(nE)),
                nT = a.forwardRef((e, t) => {
                    let n = { ...nE,
                            ...e
                        },
                        {
                            icon: r,
                            mask: i,
                            symbol: o,
                            title: a,
                            titleId: s,
                            maskId: l,
                            transform: u
                        } = n,
                        c = nd(l, !!i),
                        d = nd(s, !!a),
                        f = nw(r);
                    if (!f) return nS.error("Icon lookup is undefined", r), null;
                    let p = function(e) {
                            let {
                                beat: t,
                                fade: n,
                                beatFade: r,
                                bounce: i,
                                shake: o,
                                spin: a,
                                spinPulse: s,
                                spinReverse: l,
                                pulse: u,
                                fixedWidth: c,
                                inverse: d,
                                border: f,
                                flip: p,
                                size: h,
                                rotation: g,
                                pull: v,
                                swapOpacity: m,
                                rotateBy: y,
                                widthAuto: b,
                                className: w
                            } = e, S = [];
                            return (w && S.push(...w.split(" ")), t && S.push(nh.beat), n && S.push(nh.fade), r && S.push(nh.beatFade), i && S.push(nh.bounce), o && S.push(nh.shake), a && S.push(nh.spin), l && S.push(nh.spinReverse), s && S.push(nh.spinPulse), u && S.push(nh.pulse), c && S.push(ny.fixedWidth), d && S.push(ny.inverse), f && S.push(ny.border), !0 === p && S.push(ny.flip), ("horizontal" === p || "both" === p) && S.push(ny.flipHorizontal), ("vertical" === p || "both" === p) && S.push(ny.flipVertical), null != h && S.push(nm[h]), null != g && 0 !== g && S.push(nv[g]), null != v && S.push(ng[v]), m && S.push(ny.swapOpacity), np) ? (y && S.push(ny.rotateBy), b && S.push(ny.widthAuto), "fa" === (ni.cssPrefix || ni.familyPrefix || "fa") ? S : S.map(nb)) : S
                        }(n),
                        h = "string" == typeof u ? no.transform(u) : u,
                        g = nw(i),
                        v = na(f, { ...p.length > 0 && {
                                classes: p
                            },
                            ...h && {
                                transform: h
                            },
                            ...g && {
                                mask: g
                            },
                            symbol: o,
                            title: a,
                            titleId: d,
                            maskId: c
                        });
                    if (!v) return nS.error("Could not find icon", f), null;
                    let {
                        abstract: m
                    } = v, y = {
                        ref: t
                    };
                    for (let e of Object.keys(n)) nx.has(e) || (y[e] = n[e]);
                    return nc(m[0], y)
                });
            nT.displayName = "FontAwesomeIcon"
        }
    }
]);