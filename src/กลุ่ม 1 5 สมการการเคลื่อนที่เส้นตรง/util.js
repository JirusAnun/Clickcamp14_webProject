const calc = (check, a, s, v, u, t) => {
    if (check.length !== 2) {
        return alert('Please check input');
    } else {
        {
            switch (check[0]) {
                case 0: // a
                    switch (check[1]) {
                        case 1: // a & s, vut
                            return ({
                                arr: check,
                                a: ((v - u) / t),
                                s: (0.5 * (v + u) * t)
                            });
                        case 2: // a & v, sut
                            return ({
                                arr: check,
                                a: ((2 / (Math.pow(t, 2))) * (s - (u * t))),
                                v: [((2 * s) / t - u)]
                            });
                        case 3: // a & u, svt
                            return ({
                                arr: check,
                                a: ((-2 / (Math.pow(t, 2))) * (s - (v * t))),
                                u: ((2 * s) / t - v)
                            });
                        case 4: // a & t, svu
                            return ({
                                arr: check,
                                a: (Math.pow(v, 2) - Math.pow(u, 2)) / (2 * s),
                                t: [((2 * s) / (v + u))]
                            });
                    }
                    break;
                case 1: // s
                    switch (check[1]) {
                        case 2: // s & v, aut
                            return ({
                                arr: check,
                                s: (u * t) + (0.5 + a * Math.pow(t, 2)),
                                v: [u + (a * t)]
                            });
                        case 3: // s & u, avt
                            return ({
                                arr: check,
                                s: (v * t) - (0.5 * a * Math.pow(t, 2)),
                                u: v - (a * t)
                            });
                        case 4: // s & t, avu
                            return ({
                                arr: check,
                                s: (Math.pow(v, 2) - Math.pow(u, 2)) / (2 * a),
                                t: [(v - u) / a]
                            });
                    }
                    break;
                case 2: // v
                    switch (check[1]) {
                        case 3: // v & u, ast
                            return ({
                                arr: check,
                                v: [(s + (0.5 * a * Math.pow(t, 2))) * (1 / t)],
                                u: (s - (0.5 * a * Math.pow(t, 2))) * (1 / t)
                            });
                        case 4: // v & t, asu
                            return ({
                                arr: check,
                                v: [Math.sqrt(Math.pow(u, 2) + (2 * a * s)), -1 * Math.sqrt(Math.pow(u, 2) + (2 * a * s))],
                                t: [(-u + Math.sqrt(Math.pow(u, 2) + (2 * a * s))) / a, -1 * (-u + Math.sqrt(Math.pow(u, 2) + (2 * a * s)))]
                            });
                    }
                case 3: // u เหลือแค่ u & t, asv
                    return ({
                        arr: check,
                        u: [Math.sqrt(Math.pow(v, 2) - (2 * a * s)), -1 * Math.sqrt(Math.pow(v, 2) - (2 * a * s))],
                        t: [(v + Math.sqrt(Math.pow(v, 2) - (2 * a * s))) / a, -1 * (v + Math.sqrt(Math.pow(v, 2) - (2 * a * s)))]
                    })
            }
        }
    }
}

export { calc };