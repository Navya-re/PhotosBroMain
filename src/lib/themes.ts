export enum InstanceClass {
	man = 'Man',
	woman = 'Woman',
	youngmale = 'youngmale',
	youngfemale = 'youngfemale',
	cat = 'Cat'
}

export interface Theme {
	name: string;
	prompt: string;
	instance_classes: InstanceClass[];
}

export const prompts: Theme[] = [
	{
		name: 'Stylish',
		instance_classes: [],
		prompt:
			'realistic closeup portrait of @me as a stylish fashion designer. Rich ethnic fashion heritage, looking straight into camera, centred, creative dark background, dark lighting, intricate textiles, fusion styles. Art by Marko Djurdjevic, Greg Rutkowski, Wlop, Fred Perry, Digital Painting, Rossdraws.'
	},
	{
		name: 'Gamer',
		instance_classes: [],
		prompt:
			'realistic closeup portrait of @me as a gamer. Detailed facial features, looking straight into camera, creative retro background, gaming headphones. Art by Marko Djurdjevic, Greg Rutkowski, Wlop, Fred Perry, Digital Painting, Rossdraws'
	},
	{
		name: 'Cowboy',
		instance_classes: [],
		prompt:
			'realistic highly detailed illustration closeup portrait of @me as a cowboy wearing black cowboy hat, looking straight into camera, dramatic wielding gun pose, original face, intricate, elegant, highly detailed, centered, digital painting, artstation, concept art, smooth, sharp focus, league of legends concept art, wlop'
	},
	{
		name: 'Jedi',
		instance_classes: [],
		prompt:
			'realistic closeup portrait of @me as a jedi , highly detailed, science fiction, star wars concept art, intricate details, bright colors, golden hour, art by marko djurdjevic, greg rutkowski, wlop, fredperry, digital painting, rossdraws.'
	},
	{
		name: 'Anime',
		instance_classes: [],
		prompt:
			'realistic closeup portrait of @me as a anime, wearing iconic outfit, looking straight into camera, centred, original face, behance hd by jesper ejsing, by rhads, makoto shinkai and lois van baarle, ilya kuvshinov, rossdraws global illumination'
	},
	{
		name: 'Cyberpunk',
		instance_classes: [],
		prompt:
			'closeup portrait of @me as a handsome cyberpunk, dark and gritty, highly detailed, looking straight to camera, retro-futuristic style, neon lighting, cyberpunk city in the background, Art by Marko Djurdjevic, Greg Rutkowski, Wlop, Fred Perry, Digital Painting, Rossdraws.'
	},
	{
		name: 'Superhero',
		instance_classes: [],
		prompt:
			'closeup portrait of @me as a handsome cyberpunk, dark and gritty, highly detailed, looking straight to camera, retro-futuristic style, neon lighting, cyberpunk city in the background, Art by Marko Djurdjevic, Greg Rutkowski, Wlop, Fred Perry, Digital Painting, Rossdraws.'
	},
	{
		name: 'Cricket',
		instance_classes: [],
		prompt:
			'realistic closeup portrait of @me as a young indian cricket player, highly detailed, looking straight into camera, cricket background, intricate details,wearing the iconic blue jersey of the Indian cricket team, art by marko djurdjevic,greg rutkowski,wlop, fredperry,digital painting,rossdraws.'
	},
	{
		name: 'Wedding',
		instance_classes: [],
		prompt:
			'realistic closeup face portrait of @me as a Indian wedding groom, highly detailed, looking straight into camera, wedding background, intricate details, wearing indian wedding dress, art by marko djurdjevic, greg rutkowski, wlop, fredperry, digital painting, rossdraws.'
	}
	
];

export const getThemes = (instanceClass: string | null) =>
	prompts.filter((item) => !item.instance_classes.includes(instanceClass as InstanceClass));

export const getTheme = (theme: string) => prompts.find((item) => item.name == theme);

export const getPrompt = (name: string) => prompts.find((prompt) => prompt.name == name)?.prompt;
