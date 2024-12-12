<script lang="ts">
	import MagicButton from '$lib/components/ui/MagicButton.svelte';
	import { cn } from '$lib/utils';
	import { Copy } from 'lucide-svelte';
	import lottie from 'lottie-web';
	import GradientBg from '$lib/components/ui/GradientBg.svelte';
	import animationData from '$lib/confetti.json';
	export let className: string | undefined = undefined;
	export let title: string | HTMLElement | undefined = undefined;
	export let description: string | HTMLElement | undefined = undefined;
	export let imgClassName;
	export let titleClassName;
	export let id;
	export let spareImg;
	export let img;
	const leftLists = ['Svelte', 'Tailwind', 'Typescript'];
	const rightLists = ['Sveltekit', 'Firebase', 'JavaScript'];
	let copied = false;

	function handleCopy() {
		const text = 'anuragsaud05@gmail.com';
		navigator.clipboard.writeText(text);
		copied = true;
		lottie.loadAnimation({
			container: copyContainer,

			loop: false,
			autoplay: copied,
			animationData: animationData,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice'
			}
		});
	}

	let copyContainer: HTMLDivElement;
</script>

<div
	class={cn(
		'group/bento bento-grid-item relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none',
		className
	)}
>
	<div class={`${id === 6 && 'flex justify-center'} h-full`}>
		<div class="absolute h-full w-full">
			{#if img}
				<img src={img} alt={img} class={cn(imgClassName, 'object-cover object-center ')} />
			{/if}
		</div>
		<div class={`absolute -bottom-5 right-0 ${id === 5 && 'w-full opacity-80'} `}>
			{#if spareImg}
				<img
					src={spareImg}
					alt={spareImg}
					width={220}
					class="h-full w-full object-cover object-center"
				/>
			{/if}
		</div>

		{#if id === 6}
			<GradientBg>
				<div
					class="pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl"
				></div>
			</GradientBg>
		{/if}

		<div
			class={cn(
				titleClassName,
				'relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10'
			)}
		>
			<div
				class="z-10 font-sans text-sm font-extralight text-[#C1C2D3] md:max-w-32 md:text-xs lg:text-base"
			>
				{description}
			</div>
			<div class={`z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl`}>
				{title}
			</div>

			{#if id === 3}
				<div class="absolute -right-3 flex w-fit gap-1 lg:-right-2 lg:gap-5">
					<div class="flex flex-col gap-3 md:gap-3 lg:gap-8">
						{#each leftLists as item}
							<span
								class="rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-50
            lg:px-3 lg:py-4 lg:text-base lg:opacity-100"
							>
								{item}
							</span>
						{/each}

						<span class="rounded-lg bg-[#10132E] px-3 py-4 text-center lg:px-3 lg:py-4"></span>
					</div>
					<div class="flex flex-col gap-3 md:gap-3 lg:gap-8">
						<span class="rounded-lg bg-[#10132E] px-3 py-4 text-center lg:px-3 lg:py-4"></span>
						{#each rightLists as item}
							<span
								class="rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-50
          lg:px-3 lg:py-4 lg:text-base lg:opacity-100"
							>
								{item}
							</span>
						{/each}
					</div>
				</div>
			{/if}
			{#if id === 6}
				<div class="relative mt-5">
					<div
						bind:this={copyContainer}
						class={`w-400px absolute -bottom-5 right-0 h-[200px] ${copied ? 'block' : 'block'}`}
					></div>

					<MagicButton
						title={copied ? 'Email is Copied!' : 'Copy my email address'}
						position="left"
						handleClick={handleCopy}
						otherClasses="!bg-[#161A31]"><Copy slot="icon" /></MagicButton
					>
				</div>
			{/if}
		</div>
	</div>
</div>
