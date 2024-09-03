<script>
	// @ts-nocheck
	import { onMount, onDestroy } from 'svelte';
	import Matter from 'matter-js';

	export let type = 'rectangle';
	export let options = {};
	export let position = { x: 0, y: 0 };
	export let size = { width: 50, height: 50 };
	export let onMountCallback;

	let body;
	let engine;
	let render;
	let element;
	let mouseConstraint;

	onMount(() => {
		try {
			// Create an engine
			engine = Matter.Engine.create();

			// Create a renderer
			render = Matter.Render.create({
				element: element, // Ensure element is defined
				engine: engine,
				options: {
					width: 800,
					height: 600,
					wireframes: false
				}
			});

			// Create the body
			if (type === 'rectangle') {
				body = Matter.Bodies.rectangle(position.x, position.y, size.width, size.height, {
					...options,
					isStatic: false
				});
			} else if (type === 'circle') {
				body = Matter.Bodies.circle(position.x, position.y, size.width / 2, {
					...options,
					isStatic: false
				});
			} else {
				console.error(`Unsupported body type: ${type}`);
				return;
			}

			// Add the body to the world
			Matter.World.add(engine.world, body);

			// Create mouse constraint
			const mouse = Matter.Mouse.create(render.canvas);
			mouseConstraint = Matter.MouseConstraint.create(engine, {
				mouse: mouse,
				constraint: {
					stiffness: 0.2,
					render: {
						visible: false
					}
				}
			});

			// Add mouse constraint to the world
			Matter.World.add(engine.world, mouseConstraint);

			// Run the engine
			Matter.Engine.run(engine);

			// Run the renderer
			Matter.Render.run(render);

			// Callback with body instance
			if (onMountCallback) {
				onMountCallback(body);
			}
		} catch (error) {
			console.error('Error initializing Matter.js:', error);
		}

		return () => {
			// Clean up on destroy
			if (engine) {
				Matter.World.remove(engine.world, body);
				Matter.Engine.clear(engine);
			}
			if (render) {
				Matter.Render.stop(render);
				if (render.canvas) render.canvas.remove();
				render.textures = {};
			}
			if (mouseConstraint) {
				Matter.World.remove(engine.world, mouseConstraint);
			}
		};
	});

	onDestroy(() => {
		// Clean up on destroy
		if (engine) {
			Matter.World.remove(engine.world, body);
			Matter.Engine.clear(engine);
		}
		if (render) {
			Matter.Render.stop(render);
			if (render.canvas) render.canvas.remove();
			render.textures = {};
		}
		if (mouseConstraint) {
			Matter.World.remove(engine.world, mouseConstraint);
		}
	});
</script>

<div class="matter-container" bind:this={element}></div>

<style>
	.matter-container {
		display: block;
		margin: 0 auto;
	}
</style>
