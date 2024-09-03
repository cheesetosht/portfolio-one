import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import {
    Bodies,
    Body,
    Composite,
    Engine,
    Events,
    Mouse,
    MouseConstraint,
    Render,
    Runner
} from 'matter-js'

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
class MatterRenderer {
    constructor(a, c) {
        ; (this.element = document.querySelector(a)),
            (this.canvas = document.querySelector(c)),
            (this.width = this.element.getBoundingClientRect().width),
            (this.height = this.element.getBoundingClientRect().height),
            (this.restitution = 0.6),
            (this.engine = Engine.create()),
            (this.engine.gravity.y = 0.3),
            (this.world = this.engine.world),
            (this.render = Render.create({
                element: this.element,
                canvas: this.canvas,
                engine: this.engine,
                options: {
                    width: this.width,
                    height: this.height,
                    wireframes: !1,
                    background: 'transparent'
                }
            })),
            this.setupMouse(),
            this.addWalls(),
            Render.run(this.render),
            (this.runner = Runner.create()),
            Runner.run(this.runner, this.engine),
            this.addButtons(),
            this.addInputs(),
            this.updateBodies(),
            this.updateCanvas()
        // this.addTooltip(),
        // this.addToggles(),
    }
    updateCanvas() {
        if (typeof window == 'undefined')
            window.addEventListener('resize', () => {
                this.render.canvas.width = this.element?.clientWidth
                this.render.canvas.height = element?.clientHeight
            })
    }
    addButtons() {
        let a = document.querySelectorAll('.bl-matter-btn'),
            b = []
        a.forEach((a) => {
            let c = a.offsetWidth,
                d = a.offsetHeight,
                // d =
                // 	a.getBoundingClientRect().height < 50
                // 		? a.getBoundingClientRect().height
                // 		: 45,
                e = window
                    .getComputedStyle(a)
                    .getPropertyValue('border-radius')
                    .split('px')
                    .join(''),
                f = Bodies.rectangle(-200, -200, c, d, {
                    isStatic: !0,
                    restitution: this.restitution,
                    label: a.getAttribute('data-target'),
                    render: {
                        fillStyle: 'transparent',
                        strokeStyle: 'transparent'
                    },
                    chamfer: { radius: d / 2 }
                })
            b.push(f),
                Events.on(this.runner, 'tick', (b) => {
                    ; (a.style.top = f.position.y + 'px'),
                        (a.style.left = f.position.x + 'px'),
                        (a.style.transform = `translate(-50%, -50%) rotate(${f.angle}rad)`)
                })
        }),
            Composite.add(this.world, b)
    }
    // addTooltip() {
    // 	let a = document.querySelectorAll('.js-matter-tooltip'),
    // 		b = []
    // 	a.forEach((a) => {
    // 		let c = a.getBoundingClientRect().width,
    // 			d = a.getBoundingClientRect().height,
    // 			e = window
    // 				.getComputedStyle(a)
    // 				.getPropertyValue('border-radius')
    // 				.split('px')
    // 				.join(''),
    // 			f = Bodies.rectangle(-200, -200, c, d, {
    // 				isStatic: !0,
    // 				restitution: this.restitution,
    // 				label: 'tooltip',
    // 				render: {
    // 					fillStyle: 'transparent',
    // 					strokeStyle: 'transparent'
    // 				},
    // 				chamfer: { radius: Number(e) }
    // 			})
    // 		b.push(f),
    // 			Events.on(this.runner, 'tick', (b) => {
    // 				;(a.style.top = f.position.y + 'px'),
    // 					(a.style.left = f.position.x + 'px'),
    // 					(a.style.transform = `translate(-50%, -50%) rotate(${f.angle}rad)`)
    // 			})
    // 	}),
    // 		Composite.add(this.world, b)
    // }
    addInputs() {
        let a = document.querySelectorAll('.js-matter-input'),
            b = []
        a.forEach((a) => {
            let c = a.getBoundingClientRect().width,
                d = a.getBoundingClientRect().height,
                e = window
                    .getComputedStyle(a.querySelector('.sv-input'))
                    .getPropertyValue('border-radius')
                    .split('px')
                    .join(''),
                f = Bodies.rectangle(-200, -200, c, d, {
                    restitution: this.restitution,
                    label: a.getAttribute('data-target'),
                    render: {
                        fillStyle: 'transparent',
                        strokeStyle: 'transparent'
                    },
                    chamfer: { radius: Number(e) }
                })
            b.push(f),
                Events.on(this.runner, 'tick', (b) => {
                    ; (a.style.top = f.position.y + 'px'),
                        (a.style.left = f.position.x + 'px'),
                        (a.style.transform = `translate(-50%, -50%) rotate(${f.angle}rad)`)
                })
        }),
            Composite.add(this.world, b)
    }
    // addToggles() {
    // 	let a = document.querySelectorAll('.js-matter-toggle'),
    // 		b = []
    // 	a.forEach((a) => {
    // 		let c = a.getBoundingClientRect().width,
    // 			d = a.getBoundingClientRect().height,
    // 			e = window
    // 				.getComputedStyle(a.querySelector('.slider'))
    // 				.getPropertyValue('border-radius')
    // 				.split('px')
    // 				.join(''),
    // 			f = Bodies.rectangle(-200, -200, c, d, {
    // 				restitution: this.restitution,
    // 				label: a.getAttribute('data-target'),
    // 				render: {
    // 					fillStyle: 'transparent',
    // 					strokeStyle: 'transparent'
    // 				},
    // 				chamfer: { radius: Number(e) }
    // 			})
    // 		b.push(f),
    // 			Events.on(this.runner, 'tick', (b) => {
    // 				;(a.style.top = f.position.y + 'px'),
    // 					(a.style.left = f.position.x + 'px'),
    // 					(a.style.transform = `translate(-50%, -50%) rotate(${f.angle}rad)`)
    // 			})
    // 	}),
    // 		Composite.add(this.world, b)
    // }
    addWalls() {
        let a = Bodies.rectangle(0, -150, 2 * this.width, 300, {
            isStatic: !0,
            label: 'wall',
            render: { fillStyle: 'transparent', strokeStyle: 'transparent' }
        }),
            b = Bodies.rectangle(0, this.height + 25, 2 * this.width, 60, {
                label: 'wall',
                isStatic: !0,
                render: { fillStyle: 'transparent', strokeStyle: 'transparent' }
            }),
            c = Bodies.rectangle(-150, 0, 300, 2 * this.height, {
                label: 'wall',
                isStatic: !0,
                render: { fillStyle: 'transparent', strokeStyle: 'transparent' }
            }),
            d = Bodies.rectangle(this.width + 148, 0, 300, 2 * this.height, {
                label: 'wall',
                isStatic: !0,
                render: { fillStyle: 'transparent', strokeStyle: 'transparent' }
            })
        Composite.add(this.world, [b, a, c, d])
    }
    setupMouse() {
        // if (window.innerWidth < 1024) return
        let a = Mouse.create(this.render.canvas)
        let b = MouseConstraint.create(this.engine, {
            mouse: a,
            constraint: { stiffness: 0.2, render: { visible: false } }
        })
        Composite.add(this.world, b)
        this.render.mouse = a
        a.element.removeEventListener('mousewheel', a.mousewheel)
        a.element.removeEventListener('DOMMouseScroll', a.mousewheel)
        // this.interactWithElements(b)
    }
    // interactWithElements(a) {
    // 	Events.on(a, 'mousedown', function (h) {
    // 		if (a.body) {
    // 			let c = a.body.label
    // 			if (c.includes('toggle')) {
    // 				let d = document.querySelector(
    // 						`[data-target='${a.body.label}']`
    // 					),
    // 					e = d.querySelector("[type='checkbox']"),
    // 					f = d.querySelector('.toggle-on'),
    // 					g = d.querySelector('.toggle-off')
    // 				if (!e.checked) {
    // 					;(e.checked = !0),
    // 						g.classList.remove('opacity-1'),
    // 						f.classList.add('opacity-1')
    // 					return
    // 				}
    // 				;(e.checked = !1),
    // 					g.classList.add('opacity-1'),
    // 					f.classList.remove('opacity-1')
    // 				return
    // 			}
    // 			if (
    // 				(c.includes('input-1') &&
    // 					document
    // 						.querySelector(
    // 							`[data-target='${a.body.label}'] input`
    // 						)
    // 						.focus(),
    // 				c.includes('button'))
    // 			) {
    // 				let b = document.querySelector(`[data-target='${c}']`)
    // 				if (b.classList.contains('btn--swap-color-1')) {
    // 					b.classList.remove('btn--swap-color-1'),
    // 						b.classList.add('btn--swap-color-2')
    // 					return
    // 				}
    // 				if (b.classList.contains('btn--swap-color-2')) {
    // 					b.classList.remove('btn--swap-color-2'),
    // 						b.classList.add('btn--swap-color-3')
    // 					return
    // 				}
    // 				if (b.classList.contains('btn--swap-color-3')) {
    // 					b.classList.remove('btn--swap-color-3'),
    // 						b.classList.add('btn--swap-color-4')
    // 					return
    // 				}
    // 				if (b.classList.contains('btn--swap-color-4')) {
    // 					b.classList.remove('btn--swap-color-4'),
    // 						b.classList.add('btn--swap-color-5')
    // 					return
    // 				}
    // 				if (b.classList.contains('btn--swap-color-5')) {
    // 					b.classList.remove('btn--swap-color-5'),
    // 						b.classList.add('btn--swap-color-6')
    // 					return
    // 				}
    // 				if (b.classList.contains('btn--swap-color-6')) {
    // 					b.classList.remove('btn--swap-color-6'),
    // 						b.classList.add('btn--swap-color-7')
    // 					return
    // 				}
    // 				if (b.classList.contains('btn--swap-color-7')) {
    // 					b.classList.remove('btn--swap-color-7'),
    // 						b.classList.add('btn--swap-color-8')
    // 					return
    // 				}
    // 				if (b.classList.contains('btn--swap-color-8')) {
    // 					b.classList.remove('btn--swap-color-8'),
    // 						b.classList.add('btn--swap-color-9')
    // 					return
    // 				}
    // 				if (b.classList.contains('btn--swap-color-9')) {
    // 					b.classList.remove('btn--swap-color-9'),
    // 						b.classList.add('btn--swap-color-1')
    // 					return
    // 				}
    // 			}
    // 			c.includes('input-2') &&
    // 				document
    // 					.querySelector(`[data-target='${c}']`)
    // 					.classList.toggle('is-open')
    // 		}
    // 	})
    // }
    updateBodies() {
        this.st = ScrollTrigger.create({
            trigger: '#matter-renderer-wrapper',
            start: 'top bottom',
            once: !0,
            onEnter: () => {
                let a = Composite.allBodies(this.engine.world),
                    b = this.width.toFixed(0),
                    c = 1,
                    d = setInterval(function() {
                        c += 1
                        let e = randomNumber(0, b - 50)
                        a[c]?.label !== 'wall' &&
                            a[c] &&
                            (Body.setStatic(a[c], !1),
                                Body.setPosition(a[c], { x: e, y: 0 }),
                                Body.setVelocity(a[c], {
                                    x: randomNumber(0, 2.4),
                                    y: randomNumber(0, 1.2)
                                })),
                            c === a.length && clearInterval(d)
                    }, 100)
            }
        })
    }
    unmountSt() {
        this.st.kill()
    }
}
