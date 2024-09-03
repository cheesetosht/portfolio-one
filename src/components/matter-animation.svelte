<script>
	import Canvas from './matter-canvas.svelte';
</script>

<div style="position: relative; width: 100%; height: 100vh;">
	<Canvas />
	<div class="shape rectangle" style="left: 50px; top: 50px;"></div>
	<div class="shape rounded-rectangle" style="left: 200px; top: 50px;"></div>
	<div class="shape circle" style="left: 350px; top: 50px;"></div>
</div>

<style>
	.shape {
		position: absolute;
	}
	.rectangle {
		width: 100px;
		height: 50px;
		background-color: blue;
	}
	.rounded-rectangle {
		width: 100px;
		height: 50px;
		background-color: green;
		border-radius: 15px;
	}
	.circle {
		width: 50px;
		height: 50px;
		background-color: red;
		border-radius: 50%;
	}
</style>
