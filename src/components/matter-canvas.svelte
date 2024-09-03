<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import Matter from 'matter-js';

	let canvas;

	// Utility function to create a rounded rectangle
	function createRoundedRectangle(x, y, width, height, radius) {
		const path = `M 0 ${radius} Q 0 0 ${radius} 0 L ${width - radius} 0 Q ${width} 0 ${width} ${radius} L ${width} ${height - radius} Q ${width} ${height} ${width - radius} ${height} L ${radius} ${height} Q 0 ${height} 0 ${height - radius} Z`;
		const vertices = Matter.Svg.pathToVertices(Matter.Svg.createPath(path));
		return Matter.Bodies.fromVertices(x, y, vertices, { render: { fillStyle: 'blue' } }, true);
	}

	onMount(() => {
		const engine = Matter.Engine.create();
		const render = Matter.Render.create({
			element: canvas,
			engine: engine,
			options: {
				width: canvas.clientWidth,
				height: canvas.clientHeight,
				wireframes: false
			}
		});

		// Create boundaries
		const boundaries = [
			Matter.Bodies.rectangle(canvas.clientWidth / 2, canvas.clientHeight, canvas.clientWidth, 10, {
				isStatic: true
			}),
			Matter.Bodies.rectangle(canvas.clientWidth / 2, 0, canvas.clientWidth, 10, {
				isStatic: true
			}),
			Matter.Bodies.rectangle(0, canvas.clientHeight / 2, 10, canvas.clientHeight, {
				isStatic: true
			}),
			Matter.Bodies.rectangle(
				canvas.clientWidth,
				canvas.clientHeight / 2,
				10,
				canvas.clientHeight,
				{ isStatic: true }
			)
		];

		Matter.World.add(engine.world, boundaries);

		Matter.Engine.run(engine);
		Matter.Render.run(render);

		// Make shapes from divs
		const parentDiv = canvas.parentElement;
		const divs = parentDiv.querySelectorAll('.shape');
		divs.forEach((div) => {
			const { left, top, width, height } = div.getBoundingClientRect();
			const borderRadius = parseInt(window.getComputedStyle(div).borderRadius, 10);

			let shape;
			if (div.classList.contains('circle')) {
				shape = Matter.Bodies.circle(left + width / 2, top + height / 2, width / 2);
			} else if (borderRadius > 0) {
				shape = createRoundedRectangle(
					left + width / 2,
					top + height / 2,
					width,
					height,
					borderRadius
				);
			} else {
				shape = Matter.Bodies.rectangle(left + width / 2, top + height / 2, width, height);
			}
			Matter.World.add(engine.world, shape);
		});

		// Add mouse control
		const mouse = Matter.Mouse.create(render.canvas);
		const mouseConstraint = Matter.MouseConstraint.create(engine, {
			mouse: mouse,
			constraint: {
				stiffness: 0.2,
				render: {
					visible: false
				}
			}
		});
		Matter.World.add(engine.world, mouseConstraint);

		return () => {
			Matter.Render.stop(render);
			Matter.World.clear(engine.world);
			Matter.Engine.clear(engine);
			render.canvas.remove();
			render.textures = {};
		};
	});
</script>

<div bind:this={canvas}></div>

<style>
	:global(canvas) {
		width: 100%;
		height: 100%;
	}
</style>
