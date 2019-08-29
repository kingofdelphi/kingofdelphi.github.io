/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by uttam on 3/18/18.
 */

const intersect = (a1, a2, b1, b2) => {
    const pq = sub(a1, b1);
    const r = sub(a1, a2);
    const s = sub(b1, b2);
    const d = r.x * s.y - r.y * s.x;
    if (d === 0) return -1;
    const u =  (pq.x * r.y - pq.y * r.x) / d;
    if (u < 0 || u > 1) return -1;
    const t =  (pq.x * s.y - pq.y * s.x) / d;
    return Math.abs(t) < 1e-4 ? 0 : t;
};
/* unused harmony export intersect */


const distance = (p1, p2) => {
    return Math.hypot(p1.x - p2.x, p1.y - p2.y);
};
/* unused harmony export distance */


const add = (p1, p2) => {
    return vec(p1.x + p2.x, p1.y + p2.y);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = add;


const sub = (p1, p2) => {
    return vec(p2.x - p1.x, p2.y - p1.y);
};
/* harmony export (immutable) */ __webpack_exports__["g"] = sub;


const dot = (p1, p2) => {
    return p1.x * p2.x + p1.y * p2.y;
};
/* harmony export (immutable) */ __webpack_exports__["c"] = dot;


const normalize = (p) => {
    let h = Math.hypot(p.x, p.y);
    if (h === 0) h = 1;
    return vec(p.x / h, p.y / h);
};
/* harmony export (immutable) */ __webpack_exports__["d"] = normalize;


const perpendicular = (p1, p2, p) => {
    const dist = distance(p1, p2);
    let v = sub(p1, p2);
    v = vec(v.x / dist, v.y / dist);
    let normal = vec(v.y, -v.x);
    const l = sub(p1, p);
    // if (dot(normal, l) < 0) {
    //     normal = { x: -normal.x, y: -normal.y };
    // }
    const dist2 = Math.abs(dot(l, normal));
    const proj = dot(v, l);
    const point = add(scale(v, proj), p1);
    return {
        distance: dist2,
        point,
        outOfBounds: proj < 0 || proj > dist,
    };
};
/* unused harmony export perpendicular */


const getDistance = (p1, p2, pt) => {
    let mind = distance(p1, pt);
    let np = p1;
    let d = distance(p2, pt);
    if (d < mind) {
        mind = d;
        np = p2;
    }
    d = perpendicular(p1, p2, pt);
    if (!d.outOfBounds && d.distance < mind) {
        mind = d.distance;
        np = d.point;
    }
    return {
        distance: mind,
        line: {
            p1: np,
            p2: pt,
        },
    };
};
/* unused harmony export getDistance */


const centroid = (points) => {
    let x = 0;
    let y = 0;
    points.forEach(d => {
        x += d.x;
        y += d.y;
    });
    return vec(x / points.length, y / points.length);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = centroid;


const scale = (v, f) => {
    return vec(v.x * f, v.y * f);
};
/* harmony export (immutable) */ __webpack_exports__["f"] = scale;


const vec = (x, y) => ({ x, y });
/* harmony export (immutable) */ __webpack_exports__["h"] = vec;


const rotateZ = (pt, angle) => {
	const cs = Math.cos(angle);
	const si = Math.sin(angle);
	return vec(pt.x * cs - pt.y * si, pt.x * si + pt.y * cs);
};
/* harmony export (immutable) */ __webpack_exports__["e"] = rotateZ;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keys__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shape__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collision__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_css__);









let ctr = 4;
const incr = () => {
    ctr += 1;
};

const decr = () => {
    ctr = Math.max(3, ctr - 1);
};

document.getElementById('incr').addEventListener('click', incr);
document.getElementById('decr').addEventListener('click', decr);

let polyRadius = 30;

const rsel = document.getElementById('radius');
rsel.value = polyRadius;
rsel.addEventListener('change', e => {
    polyRadius = +e.target.value;
});

const createRegularPolygon = (origin, n, r = 30) => {
    const ang = 2 * Math.PI / n;
    const pts = [];
    for (let i = 0; i < n; i += 1) {
        const d = i * ang;
        const c = Math.PI / 2;
        pts.push(Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* add */])(origin, Object(__WEBPACK_IMPORTED_MODULE_2__math__["f" /* scale */])(Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* vec */])(Math.cos(d - c), Math.sin(d - c)), r)));
    }
    return pts;
};

const root = document.getElementById('rem');
const w = root.clientWidth;
const h = root.clientHeight;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = w;
canvas.height = h;

const drawLine = (a, b, color = 'black', width = 1) => {
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
};

const drawRect = (rect, color) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    const pts = rect.points;
    for (let i = 0; i <= pts.length; i += 1) {
        const d = pts[i % pts.length];
        if (i === 0) {
            ctx.moveTo(d.x, d.y);
        } else {
            ctx.lineTo(d.x, d.y);
        }
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
    ctx.fill();
};

const drawCircle = (c, color) => {
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.ellipse(c.center.x, c.center.y, c.radius, c.radius, 0, 0, 2 * Math.PI);
    ctx.fill();
};

const getRect = (sx, sy, W, H, imass) => {
    const a = Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* vec */])(sx - W / 2, sy - H / 2);
    const b = Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* vec */])(sx + W / 2, sy - H / 2);
    const c = Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* vec */])(sx + W / 2, sy + H / 2);
    const d = Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* vec */])(sx - W / 2, sy + H / 2);
	const rc = new __WEBPACK_IMPORTED_MODULE_1__shape__["c" /* Rect */](a, b, c, d, imass);
	rc.color = 'rgba(0, 0, 0, 0.3)';
    return rc;
};

const getPoly = (sx, sy, radius, imass) => {
    return new __WEBPACK_IMPORTED_MODULE_1__shape__["b" /* Poly */](createRegularPolygon(Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* vec */])(sx, sy), ctr, radius), imass);
};

const fh = 30;
const objects = [
    getRect(w / 2, h - fh / 2, w, fh, 0),
];

const main = document.getElementById('rem');
let down, cur;
main.addEventListener('mousedown', function (e) {
    cur = down = Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* vec */])(e.clientX - this.offsetLeft, e.clientY - this.offsetTop);
});

const getSelectedRadio = () =>
	document.querySelector('input[name="a"]:checked').value;

const isFixed = () =>
	document.getElementById('fixed').checked;

let freeform = [];
const randomColor = () => Math.floor(Math.random() * 255);
main.addEventListener('mouseup', function (e) {
	const downPos = down;
	down = false;
	const up = Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* vec */])(e.clientX - this.offsetLeft, e.clientY - this.offsetTop);
	const sel = getSelectedRadio();
	if (sel === 'freeform') {
		freeform.push(up);
		return;
	}
	let body;
	const imass = isFixed() ? 0.0 : 10;
	if (sel === 'circle') {
		body = new __WEBPACK_IMPORTED_MODULE_1__shape__["a" /* Ball */](downPos.x, downPos.y, polyRadius, imass);
	} else if (sel === 'rect') {
		body = getRect(downPos.x, downPos.y, polyRadius, polyRadius, imass);
	} else {
		body = getPoly(downPos.x, downPos.y, polyRadius, imass);
	}
	body.color = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 0.5)`;
	body.vel = Object(__WEBPACK_IMPORTED_MODULE_2__math__["f" /* scale */])(Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* sub */])(downPos, up), 0.05);
	//body.angularVel = Math.random() * 2;
	objects.push(body);
});

main.addEventListener('mousemove', function (e) {
	cur = Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* vec */])(e.clientX - this.offsetLeft, e.clientY - this.offsetTop);
});

const update = () => {
	const [____, rc] = objects;
	let dx = 0, dy = 0;
	const k = 1;
	if (__WEBPACK_IMPORTED_MODULE_0__keys__["a" /* default */]['p']) {
		if (freeform.length >= 3) {
			const obj = new __WEBPACK_IMPORTED_MODULE_1__shape__["b" /* Poly */](freeform, isFixed() ? 0 : 10);
			obj.color = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 0.5)`;
			objects.push(obj);
		}
		freeform = [];
	}
	if (__WEBPACK_IMPORTED_MODULE_0__keys__["a" /* default */]['P']) {
		freeform = [];
	}
	if (__WEBPACK_IMPORTED_MODULE_0__keys__["a" /* default */]['ArrowLeft']) {
		dx -= k;
	}
	if (__WEBPACK_IMPORTED_MODULE_0__keys__["a" /* default */]['ArrowRight']) {
		dx += k;
	}
	if (__WEBPACK_IMPORTED_MODULE_0__keys__["a" /* default */]['ArrowUp']) {
		dy -= k;
	}
	if (__WEBPACK_IMPORTED_MODULE_0__keys__["a" /* default */]['ArrowDown']) {
		dy += k;
	}
	objects.forEach(d => {
		if (d.imass === 0) return;
		const del = d === rc ? Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* vec */])(dx, dy) : Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* vec */])(0, 0);
		d.vel = Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* add */])(d.vel, Object(__WEBPACK_IMPORTED_MODULE_2__math__["f" /* scale */])(Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* vec */])(0, 1), 0.08));
		d.vel = Object(__WEBPACK_IMPORTED_MODULE_2__math__["f" /* scale */])(d.vel, 0.99);
		d.angularVel *= 0.99;
		d.translate(Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* add */])(d.vel, del));
		if (!d.circle) {
			const cent = d.getCenter();
			d.points = d.points.map(p => Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* add */])(Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* rotateZ */])(Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* sub */])(cent, p), d.angularVel), cent));
		}
	});
	const touches = [];
	for (let i = 0; i < objects.length; i += 1) {
		for (let j = i + 1; j < objects.length; j += 1) {
			const a = objects[i];
			const b = objects[j];
			const collisionInfo = Object(__WEBPACK_IMPORTED_MODULE_3__collision__["b" /* collision */])(a, b);
			if (!collisionInfo) continue;
			const { axis, penetration } = collisionInfo;
			// make the colliding objects just touching or remove penetration
			const s = 1;
			if (a.imass > 0) {
				const magA = a.imass === 0 ? 0 : (b.fixed ? 1 : 0.5);
				a.translate(Object(__WEBPACK_IMPORTED_MODULE_2__math__["f" /* scale */])(axis.axis, -magA * penetration * s));
			}
			if (b.imass > 0) {
				const magB = b.imass === 0 ? 0 : (a.fixed ? 1 : 0.5);
				b.translate(Object(__WEBPACK_IMPORTED_MODULE_2__math__["f" /* scale */])(axis.axis, magB * penetration * s));
			}
			const contactPoints = Object(__WEBPACK_IMPORTED_MODULE_3__collision__["c" /* getContactPoints */])(a, b, axis.axis);
			const impulse = Object(__WEBPACK_IMPORTED_MODULE_3__collision__["d" /* getLinearImpulse */])(a, b, contactPoints, axis.axis);
			if (impulse < 0) {
				if (a.imass > 0) {
					Object(__WEBPACK_IMPORTED_MODULE_3__collision__["a" /* applyImpulse */])(a, contactPoints, impulse, axis.axis);
				}
				if (b.imass > 0) {
					Object(__WEBPACK_IMPORTED_MODULE_3__collision__["a" /* applyImpulse */])(b, contactPoints, impulse, Object(__WEBPACK_IMPORTED_MODULE_2__math__["f" /* scale */])(axis.axis, -1));
				}

				// ***for drawing***
				touches.push(contactPoints);
			}
		}
	}

	// render
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, w, h);
	objects.forEach(d => {
		if (d.circle) {
			drawCircle(d, d.color);
		} else {
			drawRect(d, d.color);
		}
	});
	if (down) {
		drawLine(down, cur, 'green', 3);
	}
	if (freeform.length > 0) {
		for (let i = 1; i <= freeform.length; i += 1) {
			const d = i === freeform.length ? cur : freeform[i];
			drawLine(freeform[i - 1], d, i < freeform.length ? 'green' : 'red', 3);
		}
	}
	touches.forEach(touch => {
		if (touch.length === 1) {
			drawCircle({ center: touch[0], radius: 2 }, 'blue');
		} else {
			drawLine(touch[0], touch[1], 'rgba(0, 0, 0, 0.5)', 4);
		}
	});
};

const callback = () => {
	update();
	window.requestAnimationFrame(callback);
}

callback();


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const keys = {};

document.addEventListener('keydown', (e) => {
        keys[e.key] = true;
});

document.addEventListener('keyup', (e) => {
        keys[e.key] = false;
});

/* harmony default export */ __webpack_exports__["a"] = (keys);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Poly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Rect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ball; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);


class Ball {
    constructor(x, y, radius, imass) {
		this.circle = true;
        this.center = Object(__WEBPACK_IMPORTED_MODULE_0__math__["h" /* vec */])(x, y);
        this.radius = radius;
		this.imass = imass;
		this.angularVel = 0;
        this.vel = Object(__WEBPACK_IMPORTED_MODULE_0__math__["h" /* vec */])(0, 0);
    }

    project(axis) {
        const mid = Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* dot */])(axis, this.center);
        return {
            min: mid - this.radius,
            max: mid + this.radius,
        };
    }
	translate(axis) {
		this.center = Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* add */])(this.center, axis);
	}
	getCenter() {
		return this.center;
	}
}

class Poly {
    constructor(points, imass) {
        this.points = points;
        this.vel = Object(__WEBPACK_IMPORTED_MODULE_0__math__["h" /* vec */])(0, 0);
		this.angularVel = 0;
        this.imass = imass;
    }

    project(axis) {
        let l = 10000000;
        let r = -10000000;
        this.points.forEach((d) => {
            const p = Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* dot */])(axis, d);
            l = Math.min(l, p);
            r = Math.max(r, p);
        });
        return {
            min: l,
            max: r,
        };
    }
	translate(axis) {
		this.points = this.points.map(pt => Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* add */])(pt, axis));
	}
	getCenter() {
		return Object(__WEBPACK_IMPORTED_MODULE_0__math__["b" /* centroid */])(this.points);
	}
}



class Rect extends Poly {
    constructor(a, b, c, d, imass) {
        super([a, b, c, d], imass);
    }
}




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);


const penetration = (axis, bodyA, bodyB) => {
	const a = bodyA.project(axis);
	const b = bodyB.project(axis);
	const l = Math.max(a.min, b.min);
	const r = Math.min(a.max, b.max);
	return l <= r ? r - l : 0;
};
/* unused harmony export penetration */


const checkCollision = (bodyA, bodyB, axes) => {
	if (axes.length === 0) return false;
	let minp = 9999999;
	let paxis;
	let coll = true;
	axes.forEach(axis => {
		if (!coll) return;
		const p = penetration(axis.axis, bodyA, bodyB);
		if (p === 0) {
			coll = false;
		}
		if (p < minp) {
			minp = p;
			paxis = axis;
		}
	});
	if (!coll) return false;
	return { axis: paxis, penetration: minp };
};
/* unused harmony export checkCollision */


const getPolyAxes = (body, v) => {
	const pts = body.points;
	const axes = [];
	for (let i = 0; i < pts.length; i += 1) {
		const n = (i + 1) % pts.length;
		const a = Object(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* normalize */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* sub */])(pts[i], pts[n]));
		let normal = Object(__WEBPACK_IMPORTED_MODULE_0__math__["h" /* vec */])(a.y, -a.x);
		if (Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* dot */])(normal, v) < 0) {
			normal = Object(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* scale */])(normal, -1);
		}
		axes.push({ axis: normal });
	}
	return axes;
};
/* unused harmony export getPolyAxes */


const collision = (bodyA, bodyB) => {
	const axes = [];
	if (bodyA.circle || bodyB.circle) {
		if (bodyA.circle && bodyB.circle) {
			const axis = Object(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* normalize */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* sub */])(bodyA.getCenter(), bodyB.getCenter()));
			axes.push({ axis });
		} else {
			const [nonCircle, circle] = bodyA.circle ? [bodyB, bodyA] : [bodyA, bodyB];
			const naxes = nonCircle.points.map(pt => {
				return { axis : Object(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* scale */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* normalize */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* sub */])(circle.getCenter(), pt)), bodyA.circle ? 1 : -1) };
			});
			axes.push(...naxes);
			const v = Object(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* normalize */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* sub */])(bodyA.getCenter(), bodyB.getCenter()));
			axes.push(...getPolyAxes(nonCircle, v));
		}
	} else {
		const v = Object(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* normalize */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* sub */])(bodyA.getCenter(), bodyB.getCenter()));
		axes.push(...getPolyAxes(bodyA, v));
		axes.push(...getPolyAxes(bodyB, v));
	}
	return checkCollision(bodyA, bodyB, axes);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = collision;


// axis is the minimum penetration axis, makes finding contact points easier
const getContactPoints = (bodyA, bodyB, axis) => {
	if (bodyA.circle || bodyB.circle) {
		if (bodyA.circle) {
			return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* add */])(bodyA.getCenter(), Object(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* scale */])(axis, bodyA.radius))];
		}
		return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* add */])(bodyB.getCenter(), Object(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* scale */])(axis, -bodyB.radius))];
	}
	// find the contacts between a and b
	const projA = bodyA.points.map(d => Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* dot */])(d, axis));
	const projB = bodyB.points.map(d => Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* dot */])(d, axis));
	const aInfo = { min: Math.min(...projA), max: Math.max(...projA) };
	const bInfo = { min: Math.min(...projB), max: Math.max(...projB) };
	// a is on the left as per convention as axis points from A's centroid to B's centroid
	const pA = projA.map((d, i) => ({ d, i }))
		.filter(d => Math.abs(d.d - aInfo.max) < 1e-3);
	const pB = projB.map((d, i) => ({ d, i }))
		.filter(d => Math.abs(d.d - bInfo.min) < 1e-3);

	const contactPoints = [];
	// here we find if there was a point contact or an edge contact
	if (pA.length !== 2 || pB.length !== 2) {
		contactPoints.push(pA.length < pB.length ? bodyA.points[pA[0].i] : bodyB.points[pB[0].i]);
	} else {
		const per = Object(__WEBPACK_IMPORTED_MODULE_0__math__["h" /* vec */])(-axis.y, axis.x);
		const F = (obj, pts) => obj.map(d => ({ pt: pts[d.i], dot: Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* dot */])(pts[d.i], per) })).sort((a, b) => a.dot - b.dot);
		let edgeA = F(pA, bodyA.points);
		let edgeB = F(pB, bodyB.points);
		if (edgeB[0].dot < edgeA[0].dot) {
			[edgeA, edgeB] = [edgeB, edgeA];
		}
		const start = edgeB[0].pt;
		const end = edgeA[1].dot < edgeB[1].dot ? edgeA[1].pt : edgeB[1].pt; 
		contactPoints.push(start);
		contactPoints.push(end);
	}
	return contactPoints;
};
/* harmony export (immutable) */ __webpack_exports__["c"] = getContactPoints;


const applyAngularImpulse = (body, contactPoints, impulseVector) => {
	if (body.imass === 0) return;
	const center = body.getCenter();
	// TODO: distribute impulse uniformly across contact points
	contactPoints.map(contactPoint => {
		const r = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* sub */])(center, contactPoint);
		// T = r * F = iW
		const dw = (r.x * impulseVector.y - r.y * impulseVector.x) / Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* dot */])(r, r);
		body.angularVel += dw;
	});
};
/* unused harmony export applyAngularImpulse */


const applyImpulse = (body, contactPoints, impulse, impulseDir) => {
	const paxis = Object(__WEBPACK_IMPORTED_MODULE_0__math__["h" /* vec */])(impulseDir.y, -impulseDir.x);
	applyAngularImpulse(body, contactPoints, Object(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* scale */])(impulseDir, impulse));
	// dynamic friction
	const dt = Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* dot */])(body.vel, paxis);
	const small = Math.abs(dt) < 1e-3;
	body.vel = Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* add */])(body.vel, Object(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* scale */])(paxis, -dt + dt * (small ? 0 : 0.98)));
	// add impulse
	body.vel = Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* add */])(body.vel, Object(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* scale */])(impulseDir, impulse * body.imass));
};
/* harmony export (immutable) */ __webpack_exports__["a"] = applyImpulse;


const getLinearImpulse = (bodyA, bodyB, contactPoints, axis) => {
	if (contactPoints.length === 0) return 0;
	const adt = Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* dot */])(bodyA.vel, axis);
	const bdt = Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* dot */])(bodyB.vel, axis);
	const vab = adt - bdt;
	if (vab <= 0) return 0; // objects are already separating
	const R = v => Object(__WEBPACK_IMPORTED_MODULE_0__math__["h" /* vec */])(v.y, -v.x);
	const p = contactPoints.length === 1 ? contactPoints[0] : Object(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* scale */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* add */])(...contactPoints), 0.5);
	const centerA = bodyA.getCenter();
	const centerB = bodyB.getCenter();
	const ra = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* sub */])(centerA, p);
	const rb = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* sub */])(centerB, p);
	const da = Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* dot */])(R(ra), axis);
	const db = Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* dot */])(R(rb), axis);
	const den = bodyA.imass + bodyB.imass + da * da / Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* dot */])(ra, ra) + db * db / Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* dot */])(rb, rb);
	const e = 0.55;
	const impulse = -(1 + e) * vab / den;
	return impulse;
};
/* harmony export (immutable) */ __webpack_exports__["d"] = getLinearImpulse;



/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "* {\n    margin: 0;\n    padding: 0;\n}\n\n#root {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n}\n\nbutton {\n    padding: 10px;\n}\n\n#rem {\n    flex: 1;\n}\n\n.header {\n\tbackground: silver;\n}\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);