import { calc } from "./util.js";

// console.log(a, s, v, u, t);
let btn = document.querySelector('#btn');

btn.addEventListener('click', (e) => {
    e.preventDefault()
    let a = parseFloat(document.querySelector('#a').value);
    let s = parseFloat(document.querySelector('#s').value);
    let v = parseFloat(document.querySelector('#v').value);
    let u = parseFloat(document.querySelector('#u').value);
    let t = parseFloat(document.querySelector('#t').value);

    let hold = [];
    hold.push(a);
    hold.push(s);
    hold.push(v);
    hold.push(u);
    hold.push(t);
    let check = [];

    hold.forEach((el, i) => {
        if (isNaN(el)) {
            check.push(i);
        }
    })
    const output = calc(check, a, s, v, u, t);
    if (output.hasOwnProperty('a')) {
        document.querySelector('#a').value = output.a;
    }
    if (output.hasOwnProperty('s')) {
        document.querySelector('#s').value = output.s;
    }
    if (output.hasOwnProperty('u')) {
        document.querySelector('#u').value = output.u;
    }
    if (output.hasOwnProperty('t')) {
        if (output.t.length == 1) {
            document.querySelector('#t').value = output.t;
        } else {
            document.querySelector('#t').value = `${t[0]} or ${t[1]}`
        }
    }
    if (output.hasOwnProperty('v')) {
        if (output.t.length == 1) {
            document.querySelector('#v').value = output.v;
        } else {
            document.querySelector('#v').value = `${v[0]} or ${v[1]}`
        }
    }
});