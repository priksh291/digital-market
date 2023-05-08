google.maps.__gjsload__('search_impl', function(_) {
    var Fib = function(a) {
            _.F.call(this, a)
        },
        Hib = function(a) {
            var b = _.vj.Ia;
            a = a.toArray();
            Gib || (Gib = {
                K: "sssM",
                N: ["ss"]
            });
            return b.call(_.vj, a, Gib)
        },
        Iib = function(a, b) {
            _.D(a.m, 3, b)
        },
        Jib = function(a) {
            _.F.call(this, a)
        },
        Kib = function() {
            var a = _.Nk,
                b = _.Tj;
            this.h = _.sd;
            this.g = _.Nl(_.mv, a, _.aw + "/maps/api/js/LayersService.GetFeature", b)
        },
        Nib = function(a, b, c) {
            var d = _.iG(new Kib);
            c.Fi = (0, _.Pa)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.nHa(c, _.QN(b));
            var e = [];
            e.push(_.M(c, "click", (0, _.Pa)(Lib, null, a)));
            _.lb(["mouseover",
                "mouseout", "mousemove"
            ], function(f) {
                e.push(_.M(c, f, (0, _.Pa)(Mib, null, a, f)))
            });
            e.push(_.M(a, "clickable_changed", function() {
                a.g.clickable = 0 != a.get("clickable")
            }));
            a.h = e
        },
        Lib = function(a, b, c, d, e) {
            var f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.S(e.m, 2) ? new _.ve(_.Hm(_.I(e.m, 2, _.Xm).m, 1), _.Hm(_.I(e.m, 2, _.Xm).m, 2)) : null;
                f.fields = {};
                for (var g = _.E(e.m, 3), h = 0; h < g; ++h) {
                    var k = _.hm(e.m, 3, _.WN, h);
                    f.fields[k.getKey()] = k.Da()
                }
            }
            _.N(a, "click", b, c, d, f)
        },
        Mib = function(a, b, c, d, e, f, g) {
            var h =
                null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.N(a, b, c, d, e, h, g)
        },
        Oib = function() {};
    _.B(Fib, _.F);
    Fib.prototype.Wb = function() {
        return _.L(this.m, 2)
    };
    var Gib;
    _.B(Jib, _.F);
    Jib.prototype.getStatus = function() {
        return _.H(this.m, 1, -1)
    };
    Kib.prototype.load = function(a, b) {
        function c(g) {
            g = new Jib(g);
            b(g)
        }
        var d = new Fib;
        _.D(d.m, 1, a.layerId.split("|")[0]);
        _.D(d.m, 2, a.featureId);
        Iib(d, _.pd(_.rd(this.h)));
        for (var e in a.parameters) {
            var f = _.md(d.m, 4, _.WN);
            _.D(f.m, 1, e);
            _.D(f.m, 2, a.parameters[e])
        }
        a = Hib(d);
        this.g(a, c, c);
        return a
    };
    Kib.prototype.cancel = function() {
        throw Error("Not implemented");
    };
    Oib.prototype.ey = function(a) {
        if (_.ej[15]) {
            var b = a.o,
                c = a.o = a.getMap();
            b && a.g && (a.j ? (b = b.__gm.j, b.set(b.get().Ef(a.g))) : a.g && _.JHa(a.g, b) && (_.lb(a.h || [], _.ef), a.h = null));
            if (c) {
                var d = a.get("layerId"),
                    e = a.get("spotlightDescription"),
                    f = a.get("paintExperimentIds"),
                    g = a.get("styler"),
                    h = a.get("mapsApiLayer"),
                    k = a.get("darkLaunch"),
                    l = a.get("mapFeatures"),
                    m = a.get("travelMapRequest"),
                    p = a.get("searchPipeMetadata"),
                    q = a.get("overlayLayer"),
                    r = a.get("caseExperimentIds"),
                    t = a.get("airQualityPipeMetadata");
                b = new _.Cn;
                d = d.split("|");
                b.layerId = d[0];
                for (var u = 1; u < d.length; ++u) {
                    var x = _.A(d[u].split(":")),
                        y = x.next().value;
                    x = _.na(x);
                    b.parameters[y] = x.join(":")
                }
                e && (b.spotlightDescription = new _.yt(e));
                f && (b.paintExperimentIds = f.slice(0));
                g && (b.styler = new _.Gn(g));
                m && (b.travelMapRequest = new _.Ru(m));
                h && (b.mapsApiLayer = new _.gm(h));
                l && (b.mapFeatures = l);
                p && (b.searchPipeMetadata = new _.Jp(p));
                q && (b.overlayLayer = new _.gs(q));
                r && (b.caseExperimentIds = r.slice(0));
                t && (b.airQualityPipeMetadata = new _.Wt(t));
                b.darkLaunch = !!k;
                a.g =
                    b;
                a.j = a.get("renderOnBaseMap");
                a.j ? (a = c.__gm.j, a.set(a.get().Rd(b))) : Nib(a, c, b);
                _.Q(c, "Lg");
                _.P(c, 148282)
            }
        }
    };
    _.Te("search_impl", new Oib);
});