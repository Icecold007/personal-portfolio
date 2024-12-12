<script>
	import { Navigation } from 'lucide-svelte';
	import { projects } from '$lib';
	import PinContainer from './ui/pin/PinContainer.svelte';
	import Github from 'lucide-svelte/icons/github';
</script>

<div class="py-20">
	<h1 class="heading text-white">
		A small selection of{' '}
		<span class="text-purple">recent projects</span>
	</h1>
	<div class="mt-10 flex flex-wrap items-center justify-center gap-16 p-4">
		{#each projects as item}
			<div
				class="relative flex h-[25rem] w-[80vw] items-center justify-center sm:w-96 lg:min-h-[32.5rem]"
			>
				<PinContainer title={item.title} href={item.github_link}>
					<div
						class="relative mb-10 flex h-[20vh] w-[80vw] items-center justify-center overflow-hidden sm:w-96 lg:h-[30vh]"
					>
						<a
							href={item.github_link}
							target="_blank"
							class=" absolute right-3 top-3 z-20 flex aspect-square w-[7%] items-center justify-center rounded-full bg-gray-600"
						>
							<img src="/git.svg" alt="git" class=" " />
						</a>
						<div
							class="relative h-full w-full overflow-hidden lg:rounded-3xl"
							style="backgroundColor: #13162D"
						></div>
						<img src={item.img} alt="cover" class="absolute bottom-0 z-10" />
					</div>

					<h1 class="line-clamp-1 text-base font-bold text-white md:text-xl lg:text-2xl">
						{item.title}
					</h1>

					<p class="mx-[1vh] my-[0] text-sm font-light text-[#BEC1DD] lg:text-xl lg:font-normal">
						{item.des}
					</p>

					<div class="mb-3 mt-7 flex items-center justify-between">
						<!---<div class="flex items-center">
							{#each item.iconLists as icon, index}
								<div
									class="flex h-8 w-8 items-center justify-center rounded-full border border-white/[.2] bg-black lg:h-10 lg:w-10"
									style={`  transform: translateX(-${5 * index + 2}px)`}
								>
									<img src={icon} alt="icon5" class="p-2" />
								</div>
							{/each}
						</div>--->

						<a class="flex items-center justify-center" href={item.link} target="_blank">
							<p class="flex text-sm text-purple md:text-xs lg:text-xl">Check Live Site</p>
							<Navigation class="ms-3" color="#CBACF9" />
						</a>
					</div>
				</PinContainer>
			</div>
		{/each}
	</div>
</div>
