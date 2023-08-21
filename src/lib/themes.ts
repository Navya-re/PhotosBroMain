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
		name: 'pixar character',
		instance_classes: [InstanceClass.man, InstanceClass.woman, InstanceClass.youngmale],
		prompt:
			'@me as a character from pixar, au naturel, PS2, PS1, hyper detailed, digital art, trending in artstation, cinematic lighting, studio quality, smooth render, unreal engine 5 rendered, octane rendered, art style by klimt and nixeu and ian sprigger and wlop and krenz cushart.'
	}
];

export const getThemes = (instanceClass: string | null) =>
	prompts.filter((item) => !item.instance_classes.includes(instanceClass as InstanceClass));

export const getTheme = (theme: string) => prompts.find((item) => item.name == theme);

export const getPrompt = (name: string) => prompts.find((prompt) => prompt.name == name)?.prompt;
