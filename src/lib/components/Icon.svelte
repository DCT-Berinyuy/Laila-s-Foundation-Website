<script lang="ts">
	import { icons, type IconName } from './icons';

	type Props = {
		name: IconName;
		size?: number;
		strokeWidth?: number;
		class?: string;
	};

	let { name, size = 24, strokeWidth = 1.75, class: className = '' }: Props = $props();
</script>

<svg
	class={className}
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width={strokeWidth}
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
	focusable="false"
>
	<path d={icons[name]} />
</svg>
