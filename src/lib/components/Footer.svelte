<script>
	import { socialMedia } from '$lib';
	import MagicButton from './ui/MagicButton.svelte';
	import { Navigation, Download } from 'lucide-svelte';
</script>

<footer class="w-full pb-10 pt-20" id="contact">
	<div class="absolute -bottom-72 left-0 min-h-96 w-full">
		<img src="/footer-grid.svg" alt="grid" class="h-full w-full opacity-50" />
	</div>

	<div class="flex flex-col items-center">
		<h1 class="heading text-white lg:max-w-[45vw]">
			Ready to take <span class="text-purple">your</span> digital presence to the next level?
		</h1>
		<p class="my-5 text-center text-white-200 md:mt-10">
			Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
		</p>
		<div class="flex space-x-1">
			<a href="mailto:anuragsaud05@gmail.com">
				<MagicButton
					title="Let's get in touch"
					position="right"
					handleClick={() => {}}
					otherClasses=""
				>
					<Navigation slot="icon" />
				</MagicButton>
			</a>
			<a href=" " download="Anurag Saud's resume">
				<MagicButton
					title={'Download my resume'}
					position="right"
					handleClick={() => {}}
					otherClasses=""
				>
					<Download slot="icon" />
				</MagicButton>
			</a>
		</div>
	</div>
	<div class="mt-16 flex flex-col items-center justify-between md:flex-row">
		<p class="text-sm font-light md:text-base md:font-normal">Copyright © 2024 Nwabuisi chike</p>

		<div class="flex items-center gap-6 md:gap-3">
			{#each socialMedia as info}
				<a href={info.link} target="_blank"
					><div
						class="saturate-180 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
					>
						<img src={info.img} alt="icons" width={20} height={20} />
					</div>
				</a>
			{/each}
		</div>
	</div>
</footer>
