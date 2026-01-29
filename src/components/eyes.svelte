<script lang="ts">
	import { debounce } from '../lib/js-utils.js';
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	let pupils: SVGGElement;
	let eyes: SVGGElement;
	let container: HTMLDivElement;

	const eyeMovementFactorX: number = 0.05;
	const eyeMovementFactorY: number = 0.05;
	const maxPupilMovement: number = 20;
	let containerRect: DOMRect;

	const eyePosition = spring({ x: 0, y: 0 }, { stiffness: 0.05, damping: 0.3 });
	const pupilPosition = spring({ x: 0, y: 0 }, { stiffness: 0.05, damping: 0.3 });

	function calculateEyeMovement(mouseX: number, mouseY: number) {
		const containerCenterX: number = containerRect.left + containerRect.width / 2;
		const containerCenterY: number = containerRect.top + containerRect.height / 2;

		const normalizedX: number = (mouseX - containerCenterX) / (containerRect.width / 2);
		const normalizedY: number = (mouseY - containerCenterY) / (containerRect.height / 2);

		const angle: number = Math.atan2(mouseY - containerCenterY, mouseX - containerCenterX);

		const pupilX: number = Math.cos(angle) * maxPupilMovement;
		const pupilY: number = Math.sin(angle) * maxPupilMovement;

		const eyeX: number = normalizedX * containerRect.width * eyeMovementFactorX;
		const eyeY: number = normalizedY * containerRect.height * eyeMovementFactorY;

		return { pupilX, pupilY, eyeX, eyeY };
	}

	function handleMouseMove(event: MouseEvent) {
		if (!pupils || !eyes || !containerRect) return;

		const { clientX: mouseX, clientY: mouseY } = event;
		const { pupilX, pupilY, eyeX, eyeY } = calculateEyeMovement(mouseX, mouseY);

		// eyes.style.transform = `translate3d(${eyeX}px, ${eyeY}px, 0)`;
		// pupils.style.transform = `translate3d(${pupilX}px, ${pupilY}px, 0)`;
		eyePosition.set({ x: eyeX, y: eyeY });
		pupilPosition.set({ x: pupilX, y: pupilY });
	}

	const debouncedMouseMove = debounce(handleMouseMove, 5);

	onMount(() => {
		containerRect = container.getBoundingClientRect();
	});
</script>

<svelte:window on:mousemove={debouncedMouseMove} />

<div bind:this={container} id="eyes" class="text-foreground">
	<svg
		class="overflow-visible size-8 sm:size-10"
		viewBox="0 0 351 282"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g bind:this={eyes} style="transform: translate3d({$eyePosition.x}px, {$eyePosition.y}px, 0)">
			<path
				d="M91.274 274.414C137.782 274.414 175.484 214.688 175.484 141.012C175.484 67.3366 137.782 7.61035 91.274 7.61035C44.7661 7.61035 7.06396 67.3366 7.06396 141.012C7.06396 214.688 44.7661 274.414 91.274 274.414Z"
				stroke="currentColor"
				stroke-width="8"
				stroke-miterlimit="10"
			/>
			<path
				d="M259.694 274.414C306.202 274.414 343.904 214.688 343.904 141.012C343.904 67.3366 306.202 7.61035 259.694 7.61035C213.186 7.61035 175.484 67.3366 175.484 141.012C175.484 214.688 213.186 274.414 259.694 274.414Z"
				stroke="currentColor"
				stroke-width="8"
				stroke-miterlimit="10"
			/>
			<g
				bind:this={pupils}
				style="transform: translate3d({$pupilPosition.x}px, {$pupilPosition.y}px, 0)"
			>
				<path
					d="M132.074 146.91C132.074 193.342 113.779 231.009 91.206 231.009C69.762 231.009 52.169 197.003 50.475 153.785L68.119 146.911L50.663 136.315C53.196 94.8646 70.378 62.8125 91.206 62.8125C113.779 62.8105 132.074 100.457 132.074 146.91Z"
					fill="currentColor"
				/>
				<path
					d="M218.894 146.91C218.894 193.342 237.189 231.009 259.762 231.009C281.206 231.009 298.799 197.003 300.493 153.785L282.848 146.911L300.304 136.315C297.771 94.8656 280.589 62.8125 259.761 62.8125C237.189 62.8105 218.894 100.457 218.894 146.91Z"
					fill="currentColor"
				/>
			</g>
		</g>
	</svg>
</div>
