!(function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? (module.exports = t()) : 'function' == typeof define && define.amd ? define(t) : ((e = e || self).rdate = t())
})(this, function() {
    'use strict'
    function t(t, e) {
        var n,
            r = Object.keys(t)
        return (
            Object.getOwnPropertySymbols &&
                ((n = Object.getOwnPropertySymbols(t)),
                e &&
                    (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })),
                r.push.apply(r, n)),
            r
        )
    }
    function e(r) {
        for (var e = 1; e < arguments.length; e++) {
            var s = null != arguments[e] ? arguments[e] : {}
            e % 2
                ? t(Object(s), !0).forEach(function(e) {
                      var t, n
                      ;(t = r), (e = s[(n = e)]), n in t ? Object.defineProperty(t, n, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = e)
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s))
                : t(Object(s)).forEach(function(e) {
                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e))
                  })
        }
        return r
    }
    function o(e, t) {
        return (
            (function(e) {
                if (Array.isArray(e)) return e
            })(e) ||
            (function(e, t) {
                if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e))) return
                var n = [],
                    r = !0,
                    s = !1,
                    a = void 0
                try {
                    for (var o, c = e[Symbol.iterator](); !(r = (o = c.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    ;(s = !0), (a = e)
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (s) throw a
                    }
                }
                return n
            })(e, t) ||
            (function(e, t) {
                if (!e) return
                if ('string' == typeof e) return r(e, t)
                var n = Object.prototype.toString.call(e).slice(8, -1)
                'Object' === n && e.constructor && (n = e.constructor.name)
                if ('Map' === n || 'Set' === n) return Array.from(e)
                if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
            })(e, t) ||
            (function() {
                throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
            })()
        )
    }
    function r(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
    }
    function c(e) {
        return 'string' == typeof e && e.includes('-') && !e.includes('T') ? e.replace(/-/g, '/') : e
    }
    function n(e) {
        return e ? new Date(c(e)) : new Date()
    }
    function i(e, t, n) {
        var r = String(e)
        return !r || r.length >= t ? e : ''.concat(Array(t + 1 - r.length).join(n)).concat(e)
    }
    function a() {
        try {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
            var r = (function(e, t) {
                    var n = 1 < arguments.length && void 0 !== t ? t : M,
                        r = o(e, 2),
                        s = r[0],
                        t = r[1],
                        r = e.length,
                        e = new Date(),
                        n = n
                    return 1 == r ? (isNaN(new Date(s).valueOf()) ? (n = s) : (e = new Date(c(s)))) : 2 == r && ((e = new Date(c(s))), (n = t)), { dt: e, ft: n }
                })(t, M),
                s = r.dt,
                r = r.ft,
                a = {
                    Y: String(s.getFullYear()),
                    M: i(s.getMonth() + 1, 2, 0),
                    D: i(s.getDate(), 2, 0),
                    H: i(s.getHours(), 2, 0),
                    m: i(s.getMinutes(), 2, 0),
                    s: i(s.getSeconds(), 2, 0),
                    S: i(s.getMilliseconds(), 3, 0) + '',
                    Q: Math.floor((s.getMonth() + 3) / 3) + ''
                }
            return r.replace(/\[([^\]]+)]|y{1,4}|Y{1,4}|M{1,2}|d{1,2}|D{1,2}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|q|t|w|W|S{1,3}/g, function(e) {
                var t = e[0],
                    n = e.length
                switch (t) {
                    case 'y':
                    case 'Y':
                        return e.replace(new RegExp('((' + t + ')+)', 'g'), function(e) {
                            return a.Y.substr(4 - e.length)
                        })
                    case 'M':
                        return 1 == n ? Number(a.M) : a.M
                    case 'D':
                    case 'd':
                        return 1 == n ? Number(a.D) : a.D
                    case 'H':
                    case 'h':
                        return 1 == n ? Number(a.H) : a.H
                    case 'm':
                        return 1 == n ? Number(a.m) : a.m
                    case 's':
                        return 1 == n ? Number(a.s) : a.s
                    case 'S':
                        return e.replace(new RegExp('((' + t + ')+)', 'g'), function(e) {
                            return a.S.substr(3 - e.length)
                        })
                    case '[':
                        return e.replace(/\[|\]/g, '')
                    case 'q':
                        return a.Q
                    case 'W':
                        return week(s, '周')
                    case 'w':
                        return week(s)
                    default:
                        return e
                }
            })
        } catch (e) {
            return console.log(e), new Date('')
        }
    }
    function s(e, t, n) {
        var e = 0 < arguments.length && void 0 !== e ? e : 'd',
            t = 1 < arguments.length && void 0 !== t ? t : new Date(),
            n = 2 < arguments.length && void 0 !== n ? n : 'YYYY-MM-DD HH:mm:ss',
            r = new Date(t)
        switch ((e = 'string' == typeof e && 1 < e.length ? e.toLowerCase() : e)) {
            case 'year':
            case 'y':
                r.setMonth(0), r.setDate(1), r.setFullYear(r.getFullYear() + 1), r.setDate(r.getDate() - 1), r.setHours(23), r.setSeconds(59), r.setMinutes(59), r.setMilliseconds(999)
                break
            case 'month':
            case 'M':
                r.setMonth(r.getMonth() + 1), r.setDate(1), r.setDate(0), r.setHours(23), r.setSeconds(59), r.setMinutes(59), r.setMilliseconds(999)
                break
            case 'date':
            case 'day':
            case 'D':
            case 'd':
                r.setHours(23), r.setSeconds(59), r.setMinutes(59), r.setMilliseconds(999)
                break
            case 'hour':
            case 'h':
                r.setHours(0), r.setSeconds(59), r.setMinutes(59), r.setMilliseconds(999)
                break
            case 'minute':
            case 'm':
                r.setMinutes(0), r.setMilliseconds(999)
                break
            case 'second':
            case 's':
                r.setHours(23), r.setSeconds(59), r.setMinutes(59), r.setMilliseconds(999)
                break
            case 'week':
            case 'w':
                var s = 0 == (s = r.getDay()) ? 7 : s
                r.setDate(r.getDate() + (7 - s)), r.setHours(23), r.setSeconds(59), r.setMinutes(59), r.setMilliseconds(999)
                break
            case 'quarter':
            case 'Q':
                s = Math.floor((r.getMonth() + 3) / 3)
                r.setMonth(3 * s), r.setDate(1), r.setDate(0), r.setHours(23), r.setSeconds(59), r.setMinutes(59), r.setMilliseconds(999)
        }
        return a(r, n)
    }
    function u(e, t) {
        return (t = new Date(t)).setMonth(t.getMonth() + +e), t
    }
    function l(e, t) {
        if (((e = new Date(e)), (t = new Date(t)), e.getDate() < t.getDate())) return -l(t, e)
        var n = 12 * (t.getFullYear() - e.getFullYear()) + (t.getMonth() - e.getMonth()),
            r = u(n, e),
            s = t - r < 0,
            e = u(n + (s ? -1 : 1), e)
        return +(-(n + (t - r) / (s ? r - e : e - r)) || 0)
    }
    function d(e, t, n, r) {
        var n = 2 < arguments.length && void 0 !== n ? n : new Date(),
            r = 3 < arguments.length && void 0 !== r ? r : M,
            s = new Date(n)
        switch ((t = 'string' == typeof t && 1 < t.length ? t.toLowerCase() : t)) {
            case 'day':
            case 'd':
                s.setDate(s.getDate() + e)
                break
            case 'week':
            case 'w':
                s.setDate(s.getDate() + 7 * e)
                break
            case 'month':
            case 'M':
                s.setMonth(s.getMonth() + e)
                break
            case 'quarter':
            case 'Q':
                s.setMonth(s.getMonth() + 3 * e)
                break
            case 'year':
            case 'y':
                s.setFullYear(s.getFullYear() + e)
                break
            case 'hour':
            case 'h':
                s.setHours(s.getHours() + e)
                break
            case 'minute':
            case 'm':
                s.setMinutes(s.getMinutes() + e)
                break
            case 'second':
            case 's':
                s.setSeconds(s.getSeconds() + e)
                break
            case 'millisecond':
            case 'ms':
                s.setMilliseconds(s.getMilliseconds() + e)
        }
        return a(s, r)
    }
    function g(e, t, n, r) {
        return (n = 2 < arguments.length && void 0 !== n ? n : new Date()), d(-e, t, n, 3 < arguments.length && void 0 !== r ? r : M)
    }
    function h(e, t, n, r) {
        var s = 2 < arguments.length && void 0 !== n ? n : new Date(),
            n = 3 < arguments.length && void 0 !== r ? r : M,
            r = 0 === t || t,
            s = new Date(s)
        return r
            ? (8 === e
                  ? ((r = s.getDay()), s.setDate(s.getDate() - ((0 === r ? 7 : r) - t)))
                  : 6 === e
                  ? s.setMonth(t - 1)
                  : s[1 == e ? 'setMilliseconds' : 2 == e ? 'setSeconds' : 3 == e ? 'setMinutes' : 4 == e ? 'setHours' : 5 == e ? 'setDate' : 'setFullYear'](t),
              a(s, n))
            : s[1 == e ? 'getMilliseconds' : 2 == e ? 'getSeconds' : 3 == e ? 'getMinutes' : 4 == e ? 'getHours' : 5 == e ? 'getDate' : 6 == e ? 'getMonth' : 7 == e ? 'getFullYear' : 'getDay']()
    }
    function D(e, t) {
        return (t = 1 < arguments.length && void 0 !== t ? t : new Date()), new Date(t) < new Date(a(e))
    }
    function f(e, t) {
        return (t = 1 < arguments.length && void 0 !== t ? t : new Date()), !D(e, t)
    }
    var M = 'YYYY-MM-DD HH:mm:ss',
        w = Object.freeze({
            __proto__: null,
            daysInMonth: function(e) {
                e = 0 < arguments.length && void 0 !== e ? e : new Date()
                return s('M', new Date(e), 'D')
            },
            diff: function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 'millisecond',
                    r = 3 < arguments.length ? arguments[3] : void 0,
                    s = new Date(e) - new Date(t),
                    a = l(e, t)
                switch ((n = 1 < n.length ? n.toLowerCase() : n)) {
                    case 'year':
                    case 'y':
                        a /= 12
                        break
                    case 'month':
                    case 'M':
                        break
                    case 'day':
                    case 'd':
                        a = s / 864e5
                        break
                    case 'hour':
                    case 'h':
                        a = s / 36e5
                        break
                    case 'minute':
                    case 'm':
                        a = s / 6e4
                        break
                    case 'second':
                    case 's':
                        a = s / 1e3
                        break
                    case 'millisecond':
                    case 'ms':
                        a = s
                        break
                    case 'week':
                    case 'w':
                        a = s / 6048e5
                        break
                    case 'quarter':
                    case 'Q':
                        a /= 3
                        break
                    default:
                        a = s
                }
                return r ? a : (r = a) < 0 ? Math.ceil(r) || 0 : Math.floor(r)
            },
            format: a
        }),
        m = Object.freeze({
            __proto__: null,
            add: d,
            subtract: g,
            startOf: function(e, t, n) {
                var t = 1 < arguments.length && void 0 !== t ? t : new Date(),
                    n = 2 < arguments.length && void 0 !== n ? n : 'YYYY-MM-dd HH:mm:ss',
                    r = new Date(t)
                switch ((e = 'string' == typeof e && 1 < e.length ? e.toLowerCase() : e)) {
                    case 'year':
                    case 'y':
                        r.setMonth(0), r.setDate(1), r.setHours(0), r.setSeconds(0), r.setMinutes(0), r.setMilliseconds(0)
                        break
                    case 'month':
                    case 'M':
                        r.setDate(1), r.setHours(0), r.setSeconds(0), r.setMinutes(0), r.setMilliseconds(0)
                        break
                    case 'date':
                    case 'day':
                    case 'D':
                    case 'd':
                        r.setHours(0), r.setSeconds(0), r.setMinutes(0), r.setMilliseconds(0)
                        break
                    case 'hour':
                    case 'h':
                        r.setSeconds(0), r.setMinutes(0), r.setMilliseconds(0)
                        break
                    case 'minute':
                    case 'm':
                        r.setMinutes(0), r.setMilliseconds(0)
                        break
                    case 'second':
                    case 's':
                        r.setMilliseconds(0)
                        break
                    case 'week':
                    case 'w':
                        var s = 0 == (s = r.getDay()) ? 7 : s
                        r.setDate(r.getDate() - (s - 1)), r.setHours(0), r.setSeconds(0), r.setMinutes(0), r.setMilliseconds(0)
                        break
                    case 'quarter':
                    case 'Q':
                        s = Math.floor((r.getMonth() + 3) / 3)
                        r.setMonth(3 * s - 3), r.setDate(1), r.setHours(0), r.setSeconds(0), r.setMinutes(0), r.setMilliseconds(0)
                }
                return a(r, n)
            },
            endOf: s
        }),
        v = Object.freeze({
            __proto__: null,
            year: function(e, t, n) {
                return h(7, e, t, n)
            },
            month: function(e, t, n) {
                return h(6, e, t, n)
            },
            date: function(e, t, n) {
                return h(5, e, t, n)
            },
            hour: function(e, t, n) {
                return h(4, e, t, n)
            },
            minute: function(e, t, n) {
                return h(3, e, t, n)
            },
            second: function(e, t, n) {
                return h(2, e, t, n)
            },
            millisecond: function(e, t, n) {
                return h(1, e, t, n)
            },
            day: function(e, t, n) {
                return h(8, e, t, n)
            },
            quarter: function(e, t, n) {
                var r = 1 < arguments.length && void 0 !== t ? t : new Date(),
                    t = 2 < arguments.length && void 0 !== n ? n : M,
                    n = new Date(r),
                    r = Math.floor((n.getMonth() + 3) / 3)
                return arguments.length ? (e === r || n.setMonth(n.getMonth() + 3 * e - 3 * r), a(n, t)) : r
            },
            get: function(e, t) {
                var t = 1 < arguments.length && void 0 !== t ? t : new Date(),
                    n = new Date(t)
                switch (e) {
                    case 'date':
                    case 'D':
                        return n.getDate()
                    case 'day':
                    case 'd':
                        return n.getDay()
                    case 'month':
                    case 'M':
                        return n.getMonth()
                    case 'year':
                    case 'y':
                        return n.getFullYear()
                    case 'hour':
                    case 'h':
                        return n.getHours()
                    case 'minute':
                    case 'm':
                        return n.getMinutes()
                    case 'second':
                    case 's':
                        return n.getSeconds()
                    case 'millisecond':
                    case 'ms':
                        return n.getMinutes()
                }
            },
            set: function(e, t, n) {
                var n = 2 < arguments.length && void 0 !== n ? n : new Date(),
                    r = new Date(n)
                switch ((e = 'string' == typeof e && 1 < e.length ? e.toLowerCase() : e)) {
                    case 'date':
                    case 'D':
                        r.setDate(t)
                        break
                    case 'day':
                    case 'd':
                        var s = r.getDay()
                        r.setDate(r.getDate() - ((0 === s ? 7 : s) - t))
                        break
                    case 'month':
                    case 'M':
                        r.setMonth(t)
                        break
                    case 'year':
                    case 'y':
                        r.setFullYear(t)
                        break
                    case 'hour':
                    case 'h':
                        r.setHours(t)
                        break
                    case 'minute':
                    case 'm':
                        r.setMinutes(t)
                        break
                    case 'second':
                    case 's':
                        r.setSeconds(t)
                        break
                    case 'millisecond':
                    case 'ms':
                        r.setMilliseconds(t)
                }
                return a(r)
            },
            max: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
                for (var r = t[0], s = 1; s < t.length; s++) new Date(t[s]) > new Date(r) && (r = t[s])
                return r
            },
            min: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
                for (var r = t[0], s = 1; s < t.length; s++) new Date(t[s]) < new Date(r) && (r = t[s])
                return r
            }
        }),
        b = Object.freeze({
            __proto__: null,
            toArray: function(e) {
                e = n(e)
                return [e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()]
            },
            toObject: function(e) {
                ;(e = 0 < arguments.length && void 0 !== e ? e : new Date()), (e = n(e))
                return { year: e.getFullYear(), month: e.getMonth(), date: e.getDate(), hour: e.getHours(), minute: e.getMinutes(), second: e.getSeconds(), millisecond: e.getMilliseconds() }
            }
        }),
        y = Object.freeze({
            __proto__: null,
            isAfter: f,
            isBefore: D,
            isBetween: function(e, t, n) {
                n = 2 < arguments.length && void 0 !== n ? n : new Date()
                return (e = new Date(a(e, 'YYYY/MM/DD HH:mm:ss'))), (t = new Date(a(t, 'YYYY/MM/DD HH:mm:ss'))), e <= (n = new Date(a(n, 'YYYY/MM/DD HH:mm:ss'))) && n <= t
            },
            isDate: function(e) {
                if (!arguments.length) return !1
                var t = e.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/)
                if (null == t) return !1
                e = new Date(t[1], t[3] - 1, t[4])
                return e.getFullYear() == t[1] && e.getMonth() + 1 == t[3] && e.getDate() == t[4]
            },
            isDateTime: function(e) {
                if (!arguments.length) return !1
                var t = e.match(/^(\d{4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/)
                if (null == t) return !1
                e = new Date(t[1], t[3] - 1, t[4], t[5], t[6], t[7])
                return e.getFullYear() == t[1] && e.getMonth() + 1 == t[3] && e.getDate() == t[4] && e.getHours() == t[5] && e.getMinutes() == t[6] && e.getSeconds() == t[7]
            },
            isLeapYear: function(e) {
                ;(e = 0 < arguments.length && void 0 !== e ? e : new Date()), (e = new Date(e).getFullYear())
                return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0
            },
            isSame: function(e, t, n) {
                ;(t = 1 < arguments.length && void 0 !== t ? t : ''),
                    (n = 2 < arguments.length && void 0 !== n ? n : new Date()),
                    (e = new Date(e)),
                    (n = new Date(n)),
                    (t = ['y', 'year'].includes(t)
                        ? 'getFullYear'
                        : ['M', 'month'].includes(t)
                        ? 'getMonth'
                        : ['D', 'date'].includes(t)
                        ? 'getDate'
                        : ['h', 'hour'].includes(t)
                        ? 'getHours'
                        : ['m', 'minute'].includes(t)
                        ? 'getMinutes'
                        : ['s', 'second'].includes(t)
                        ? 'getSeconds'
                        : ['d', 'day'].includes(t)
                        ? 'getDay'
                        : ['ms', 'milliseconds'].includes(t)
                        ? 'getMilliseconds'
                        : '')
                return t ? e[t]() === n[t]() : +e == +n
            },
            isSameOrAfter: function(e, t) {
                t = 1 < arguments.length && void 0 !== t ? t : new Date()
                return f(e, t) || +new Date(n(e)) == +new Date(n(t))
            },
            isSameOrBefore: function(e, t) {
                t = 1 < arguments.length && void 0 !== t ? t : new Date()
                return D(e, t) || +new Date(n(e)) == +new Date(n(t))
            },
            isThisYear: function(e) {
                e = 0 < arguments.length && void 0 !== e ? e : new Date()
                return a(e, 'YYYY') === a(new Date(), 'YYYY')
            },
            isTime: function(e) {
                if (!arguments.length) return !1
                e = e.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/)
                return null != e && !(24 <= e[1] || 60 <= e[3] || 60 <= e[4])
            },
            isToday: function(e) {
                var t = 0 < arguments.length && void 0 !== e ? e : new Date(),
                    e = new Date(),
                    t = new Date(t)
                return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()
            },
            isTomorrow: function(e) {
                var t = 0 < arguments.length && void 0 !== e ? e : new Date(),
                    e = 'YYYY-MM-DD'
                return (t = new Date(t)).setDate(t.getDate() - 1), a(t, e) === a(new Date(), e)
            },
            isValid: function(e) {
                return 'Invalid Date' !== new Date(e).toString()
            },
            isYesterday: function(e) {
                var t = 'YYYY-MM-DD',
                    n = g(1, 'day')
                return a(new Date(n), t) === a(new Date(e), t)
            }
        }),
        Y = Object.freeze({
            __proto__: null,
            getWeek: function(e, t) {
                e = 0 < arguments.length && void 0 !== e ? e : new Date()
                return (1 < arguments.length && void 0 !== t ? t : '星期') + ['日', '一', '二', '三', '四', '五', '六'][n(e).getDay()]
            },
            getMonth: function(e, t) {
                ;(e = 0 < arguments.length && void 0 !== e ? e : new Date()), (t = 1 < arguments.length && void 0 !== t ? t : '月')
                return ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'][n(e).getMonth()] + t
            },
            previewMonth: function(e, t) {
                return 0 < e && e < 13 ? ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'][e - 1] + '月' : void 0 === t ? 'Invalid month' : t
            },
            previewWeek: function(e, t, n) {
                n = 2 < arguments.length ? n : void 0
                return 0 === e && (e = 7), 0 < e && e < 8 ? (1 < arguments.length && void 0 !== t ? t : '周') + ['一', '二', '三', '四', '五', '六', '日'][e - 1] : void 0 === n ? 'Invalid week' : n
            }
        })
    return e(e(e(e(e(e({}, w), m), v), b), y), Y)
})
