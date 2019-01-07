(function (l, k) {
  function J(a) {
    if (a) return a.replace(/^\s+|\s+$/g, '');
  }

  function z(a, d) {
    if (!a) return {};
    let c = d.logLevel === 'INFO';
    a.m && a.m[m] && (a = a.m);
    var b = d.m || d[m] || '',
      b = a.m && a.m[m] ? b + a.m[m] : a.m && a.m.target && a.m.target.tagName ? `${b }Error handler invoked by ${ a.m.target.tagName} tag` : a.m ? b + a.m : a[m] ? b + a[m] : `${b}Unknown error`,
      b = {
        m: b,
        name: a.name,
        type: a.type,
        csm: `${K } ${a.fromOnError ? 'onerror' : 'ueLogError'}`,
      },
      e,
      g,
      h = 0;
    e = 0;
    let f;
    g = k.location;
    b[n] = d[n] || u;
    d.adb && (b.adb = d.adb);
    (e = d[q]) && (b[q] = `${  e}`);
    if (!c) {
      b[A] = d[A] || g && g.href || 'missing';
      b.f = a.f || a.sourceURL || a.fileName || a.filename || a.m && a.m.target && a.m.target.src;
      b.l = a.l || a.line || a.lineno || a.lineNumber;
      b.c = a.c ? `${  a.c}` : a.c;
      b.s = [];
      b.t = l.ue.d();
      if ((c = a.stack || (a.err ? a.err.stack : '')) && c.split) {
        for (b.csm += ' stack', e = c.split('\n'); h < e.length && b.s.length < B;)(c = e[h++]) && b.s.push(J(c));
      } else {
        for (b.csm += ' callee', g = C(a.args || arguments, 'callee'), e = h = 0; g && h < B;) {
          f = x, g[s] || (c = g.toString()) && c.substr && (f = 0 === e ? 4 * x : f, f = 1 == e ? 2 * x : f, b.s.push(c.substr(0, f)), e++), g = C(g, "caller"),
            h++;
        }
      }!b.f && b.s.length > 0 && (h = b, c = (h || {}).s || [], e = c[1] || '', c = (c[0] || '').match(L) || e.match(M)) && (h.f = c[1], h.l = c[2]);
    }
    return b;
  }

  function C(a, d) {
    try {
      return a[d];
    } catch (c) {}
  }

  function D(a, d) {
    if (a && !(p.ec > p.mxe)) {
      p.ter.push(a);
      d = d || {};
      const c = a[n] || d[n];
      d[n] = c;
      d[q] = a[q] || d[q];
      c && c !== u && c !== N && c !== O && c !== P || l.ue_err.ec++;
      c && c != u || p.ecf++;
      y(a, d);
    }
  }

  function y(a, d) {
    if (a) {
      let c = z(a, d),
        b = d.channel || Q,
        e = window.ue_err ? window.ue_err.addContextInfo : null;
      e && e(c);
      if (ue.log.isStub && k[v] && k[v][w]) {
        e = {};
        e[b] = c;
        try {
          var g = k[v][w]({
              rid: ue.rid,
              sid: l.ue_sid,
              mid: l.ue_mid,
              sn: l.ue_sn,
              reqs: [e],
            }),
            h = k[R],
            f;
          if (f = !(h[E] && h[E](F, g))) {
            let m;
            if (k[G]) {
              const r = new k[G]();
              r.onerror = t;
              r.ontimeout = t;
              r.onprogress = t;
              r.onload = t;
              r.timeout = 0;
              m = r;
            } else {
              let n;
              if (k[H]) {
                const q = new k[H]();
                n = 'withCredentials' in q ? q : void 0;
              } else n = void 0;
              m = n;
            }
            f = m;
          }
          if (b = f) {
            b.open('POST', F, !0);
            if (b[I]) b[I]('Content-type', 'text/plain');
            b.send(g);
          }
        } catch (s) {}
      } else {
        l.ue.log(c, b, {
          nb: 1,
        });
      }
      typeof p.elh === 'function' && p.elh(a, d);
      if (!a.fromOnError) {
        g = k.console || {};
        b = g.error || g.log || t;
        h = k[v];
        f = 'Error logged with the Track&Report JS errors API(http://tiny/1covqr6l8/wamazindeClieUserJava): ';
        if (h && h[w]) {
          try {
            f += h[w](c);
          } catch (u) {
            f += 'no info provided; converting to string failed';
          }
        } else f += c.m;
        b.apply(g, [f, c]);
      }
    }
  }
  var H = 'XMLHttpRequest',
    G = 'XDomainRequest',
    R = 'navigator',
    E = 'sendBeacon',
    w = 'stringify',
    v = 'JSON',
    n = 'logLevel',
    q = 'attribution',
    A = 'pageURL',
    s = 'skipTrace',
    I = 'setRequestHeader',
    m = 'message',
    t = function () {},
    F = `//${  l.ue_furl  }/1/batch/1/OE/`,
    p = l.ue_err,
    Q = l.ue_err_chan || 'jserr',
    u = 'FATAL',
    N = 'ERROR',
    O = 'WARN',
    P = 'DOWNGRADED',
    K = 'v6',
    B = 20,
    x = 256,
    M = RegExp(' (?([^ s]*):( d+): d+ )?'.split(' ').join(String.fromCharCode(92))),
    L = /.*@(.*):(\d*)/;
  z[s] = 1;
  D[s] = 1;
  y[s] = 1;
  (function () {
    for (var a, d = 0; d < (p.erl || []).length; d++) a = p.erl[d], y(a.ex, a.info);
    p.erl = [];
  }());
  l.ueLogError = D;
}(ue_csm, window));