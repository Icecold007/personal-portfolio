// place files you want to import through the `$lib` alias in this folder.
export const navItems = [
	{ name: 'About', link: '#about' },
	{ name: 'Projects', link: '#projects' },
	//{ name: 'Testimonials', link: '#testimonials' },
	{ name: 'Contact', link: '#contact' }
];

export const gridItems = [
	{
		id: 1,
		title: 'I prioritize client collaboration, fostering open communication ',
		description: '',
		class: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
		imgClass: 'w-full h-full',
		titleClass: 'justify-end',
		img: '/b1.svg',
		spareImg: ''
	},
	{
		id: 2,
		title: "I'm very flexible with time zone communications",
		description: '',
		class: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClass: '',
		titleClass: 'justify-start',
		img: '/b2.jpg',
		spareImg: ''
	},
	{
		id: 3,
		title: 'My tech stack',
		description: 'I constantly try to improve',
		class: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClass: '',
		titleClass: 'justify-center',
		img: '',
		spareImg: ''
	},
	{
		id: 4,
		title: 'Tech enthusiast with a passion for development.',
		description: '',
		class: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClass: '',
		titleClass: 'justify-start',
		img: '/grid.svg',
		spareImg: '/b4.svg'
	},

	{
		id: 5,
		title: 'Currently building something cool',
		description: 'The Inside Scoop',
		class: 'md:col-span-3 md:row-span-2',
		imgClass: 'absolute right-0 bottom-0 md:w-96 w-60',
		titleClass: 'justify-center md:justify-start lg:justify-center',
		img: '/b5.svg',
		spareImg: '/grid.svg'
	},
	{
		id: 6,
		title: 'Do you want to start a project together?',
		description: '',
		class: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClass: '',
		titleClass: 'justify-center md:max-w-full max-w-60 text-center',
		img: '',
		spareImg: ''
	}
];

export const projects = [
	{
		id: 1,
		title: 'To-do list',
		des: ' This project is based on html,css,js where i used local storage to save the data and CRUD (create, react, update, delete) applies here',
		img: '/p1.png',
		technologies: ['HTML', 'CSS', 'JAVASCRIPT'],

		link: 'https://icecold007.github.io/to-do-list/',
		github_link: 'https://github.com/Icecold007/to-do-list'
	},
	{
		id: 2,
		title: 'Chrome Extension',
		des: 'An extension that saves the current tab or any link we enter using local storage',
		img: '/p2.png',
		technologies: ['HTML', 'CSS', 'JAVASCRIPT'],

		link: '',
		github_link: 'https://github.com/Icecold007/tab-saver-extension'
	},
	{
		id: 3,
		title: 'Black Jack Game',
		des: ' This project is a simple black jack game',
		img: '/p3.png',
		technologies: ['HTML', 'CSS', 'JAVASCRIPT'],

		link: 'https://icecold007.github.io/blackjack-/',
		github_link: 'https://github.com/Icecold007/blackjack-'
	},
	{
		id: 4,
		title: 'People Counter',
		des: 'A counting tool which comes in handy',
		img: 'p4.png',
		technologies: ['HTML', 'CSS', 'JAVASCRIPT'],

		link: 'https://icecold007.github.io/people-counter/',
		github_link: 'https://github.com/Icecold007/people-counter'
	}
];
//{

//	//}
//];
//
////export const testimonials = [
//	{
//		quote:
//			".",
//		name: '',
//		title: ''
//	},
//	{
//		quote:
//			"",
//		name: '',
//		title: ''
//	},
//	{
//		quote:
//			"",
//		name: '',
//		title: ''
//	},
//	{
//		quote:
//			"",
//		name: '',
//		title: ''
//	},
//	{
//		quote:
//			"",
//		name: '',
//		title: ''
//	}
//];
//
//export const companies = [
//	{
//		id: 1,
//		name: 'cloudinary',
//		img: '/cloud.svg',
//		nameImg: '/cloudName.svg'
//	},
//	{
//		id: 2,
//		name: 'appwrite',
//		img: '/app.svg',
//		nameImg: '/appName.svg'
//	},
//	{
//		id: 3,
//		name: 'HOSTINGER',
//		img: '/host.svg',
//		nameImg: '/hostName.svg'
//	},
//	{
//		id: 4,
//		name: 'stream',
//		img: '/s.svg',
//		nameImg: '/streamName.svg'
//	},
//	{
//		id: 5,
//		name: 'docker.',
//		img: '/dock.svg',
//		nameImg: '/dockerName.svg'
//	}
//];
//
//export const workExperience = [
//	{
//		id: 1,
//		title: 'Frontend Engineer Intern',
//		desc: 'Assisted in the development of a web-based platform using React.js, in lagos state university',
//		class: 'md:col-span-2',
//		thumbnail: '/exp1.svg'
//	},
//	{
//		id: 2,
//		title: 'Frontend Dev - PorteVest',
//		desc: 'Collaborated with a team to designed and develop a web based platform using svelte',
//		class: 'md:col-span-2', // change to md:col-span-2
//		thumbnail: '/exp2.svg'
//	},
//	{
//		id: 3,
//		title: 'Freelance ',
//		desc: 'Have worked on a ton of full stack gigs to create web sites from concept to product',
//		class: 'md:col-span-2', // change to md:col-span-2
//		thumbnail: '/exp3.svg'
//	},
//	{
//		id: 4,
//		title: 'Fullstack Dev - Beautwelt Technologies',
//		desc: 'Implemented user authentication flows and database management',
//		class: 'md:col-span-2',
//		thumbnail: '/exp4.svg'
//	}
//];
//
export const socialMedia = [
	{
		id: 1,
		link: 'https://github.com/Icecold007',
		img: '/git.svg'
	},
	{
		id: 2,
		link: 'https://x.com/anurag_saud',
		img: '/twit.svg'
	},
	{
		id: 3,
		link: 'https://www.linkedin.com/in/anuragsaud/',
		img: '/link.svg'
	}
	//{
	//id: 4,
	//link: '',
	//img: '/youtube.svg'
	//}
];
