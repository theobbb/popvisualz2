export const ARCHIVE_PATH = '/videos/archive-3.zip';

export const chars = [
	'___EMBRYO_________',
	// 'OBSESSION_________',
	'_BROKEN_____RECORD',
	'CINNAMON__________',
	'PA_LA_______ISLA__',
	'U_SAID____________',
	'FAN______SERVICE__',
	`BURNIN’___________`,
	`HOLDING__ME_DOWN__`,
	`CHROME____________`,
	`UNDER THERUG______`,
	`CHASE LESSTARS___ `

	// 'HERE_I_GO_AGAIN___',
];

export const char_map = [
	[5, 12, 8, 3, 16, 7],
	[9, 2, 14, 6, 11, 4],
	// [17, 5, 10, 13, 8, 1],
	// [3, 15, 9, 12, 7, 18],
	[14, 6, 2, 11, 4, 16],
	[10, 8, 17, 5, 13, 9],
	[7, 3, 15, 1, 12, 14],
	[16, 11, 4, 9, 18, 2],
	[8, 13, 6, 10, 5, 17],
	[12, 7, 9, 3, 15, 11],
	[5, 12, 8, 3, 16, 7],
	[9, 2, 14, 6, 11, 4],
	[17, 5, 10, 13, 8, 1],
	[3, 15, 9, 12, 7, 18],
	[14, 6, 2, 11, 4, 16],
	[10, 8, 17, 5, 13, 9],
	[7, 3, 15, 1, 12, 14],
	[16, 11, 4, 9, 18, 2]
];

export type Project = {
	name: string;
	artist: string;
	slug: string;
	video_playback_id: string;
	aspect_ratio: string;
	date: string;
	youtube_url: string;
	thumbnail?: number;
	timestamps?: [
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number,
		number
	];
};

export const projects: Project[] = [
	{
		name: 'Embryo',
		artist: 'Brothel in Belize',
		slug: 'embryo',
		video_playback_id: 'qrJUcy00hpC501b9BUPPfPNYZ015lzD1gKDn7s3cEzBdSE',
		aspect_ratio: '16/9',
		date: '23-07-2026',
		youtube_url: 'https://www.youtube.com/watch?v=3oNcmc_zwcI',
		thumbnail: 64,
		timestamps: [1, 5, 9, 12, 16, 19, 24, 32, 36, 40, 44, 47, 52, 58, 64, 69, 72, 79]
	},
	// {
	// 	name: 'Obsession',
	// 	artist: 'Brothel in Belize',
	// 	slug: 'obsession',
	// 	video_playback_id: 'Vc80101SEYfQR00tGiK00H02H02UiSQ7vCvunwc00zmmxI1JGs',
	// 	aspect_ratio: '16/9',
	// 	date: '10-06-2026',
	// 	youtube_url: 'https://www.youtube.com/watch?v=ZCvE3qFcqpU'
	// },
	{
		name: 'Broken Record',
		artist: 'Aniquila',
		slug: 'broken-record',
		video_playback_id: 'jgd3U02hjB18Z3oImtM01s34VRYl1uB015YVGK6IlSsisQ',
		aspect_ratio: '16/9',
		date: '27-06-2026',
		youtube_url: 'https://www.youtube.com/watch?v=78tiwZglLBY',
		timestamps: [8, 12, 32, 36, 40, 44, 47, 52, 58, 64, 69, 72, 79, 88, 95, 111, 120, 130]
	},
	{
		name: 'Cinnamon',
		artist: 'Aniquila',
		slug: 'cinnamon',
		video_playback_id: 'Vc80101SEYfQR00tGiK00H02H02UiSQ7vCvunwc00zmmxI1JGs',
		aspect_ratio: '1920/1013',
		date: '23-09-2025',
		youtube_url: 'https://www.youtube.com/watch?v=5N_2rJ-Jgpc',
		thumbnail: 63,
		timestamps: [4, 8, 12, 16, 17, 24, 32, 36, 40, 48, 54, 60, 68, 74, 80, 86, 96, 112]
	},

	{
		name: 'Pa La Isla',
		artist: 'Ozcar',
		slug: 'pa-la-isla',
		video_playback_id: 'CzsEldGvvHDOCede9TwflnIeC6OI02W00hWpSScncFW700',
		aspect_ratio: '16/9',
		date: '25-07-2025',
		youtube_url: 'https://www.youtube.com/watch?v=IqfonY2Ksu0',
		timestamps: [0, 3, 10, 16, 24, 28, 32, 36, 42, 46, 52, 56, 73, 80, 92, 96, 102, 114]
	},
	{
		name: 'U said',
		artist: 'Kid J',
		slug: 'u-said',
		video_playback_id: '2TDgOgIR3qc004l43LlxagYMQ02LVR7U2nC01RsJXd1EJ8',
		aspect_ratio: '16/9',
		date: '30-12-2025',
		youtube_url: 'https://www.youtube.com/watch?v=XOls34w7_v4',
		timestamps: [8, 12, 17, 22, 26, 32, 36, 44, 50, 56, 62, 84, 90, 95, 100, 107, 117, 130]
	},
	{
		name: 'Fan Service',
		artist: 'Shy Smith',
		slug: 'fan-service',
		video_playback_id: 'MWhqMkri7np02U8ZFxWHxTKK4oygJ6vLi4ab3ogUEcw8',
		aspect_ratio: '4/3',
		date: '04-07-2025',
		youtube_url: 'https://www.youtube.com/watch?v=Ktto1YlSymQ',
		timestamps: [8, 12, 17, 22, 26, 32, 36, 44, 50, 56, 62, 84, 90, 95, 100, 107, 50, 17]
	},

	{
		name: `Burnin'`,
		artist: 'Bonza',
		slug: 'burnin',
		video_playback_id: 'JmpT1uLuVyx00eOvjZHPBas9SRiiE6JU9WNWPe6Ff1WE',
		aspect_ratio: '16/9',
		date: '25-10-2024',
		youtube_url: 'https://www.youtube.com/watch?v=5gMgIqD0Cd4',
		timestamps: [1, 16, 19, 30, 40.5, 50, 56, 74, 79, 93, 100, 84.8, 116, 137, 149, 30, 74, 16]
	},
	{
		name: 'Holding Me Down',
		artist: 'Matt OX',
		slug: 'holding-me-down',
		video_playback_id: 'KtM9OWgLpcZMPJpzkgM24zKyv83J6ghHz3uoyGIA5hI',
		aspect_ratio: '16/9',
		date: '08-03-2024',
		youtube_url: 'https://www.youtube.com/watch?v=4PFbE2lteAI',
		timestamps: [7, 11, 14, 19, 30, 38, 42, 47, 61, 65, 89, 95, 99, 51, 56, 19, 61, 115]
	},
	{
		name: 'Chrome',
		artist: 'Serane',
		slug: 'chrome',
		video_playback_id: '023R7Pm01fM2F982LDqBEhnVRYIzN00HLAjL1aAal4ikOw',
		aspect_ratio: '16/9',
		date: '30-04-2025',
		youtube_url: 'https://www.youtube.com/watch?v=9GWy2Ri_Otw',
		timestamps: [0, 4, 9, 12, 17, 20, 29, 36, 41, 44, 59, 81, 53, 24, 70, 100, 36, 12]
	},
	{
		name: 'Under the Rug',
		artist: 'Mike Shabb x Paydro 66',
		slug: 'under-the-rug',
		video_playback_id: '00TYf01pMkuHhaK00rU00i4Smskq1IbaFR6M6lMTGR8t1wg',
		aspect_ratio: '3/2',
		date: '11-10-2024',
		youtube_url: 'https://www.youtube.com/watch?v=8IRQNIsdaEE',
		timestamps: [1, 9, 11, 14, 26, 32, 39, 44, 50, 56, 68, 72, 78, 85, 92, 26, 9, 56]
	},
	{
		name: 'Chase les stars',
		artist: 'Eternl Kuru',
		slug: 'chase-les-stars',
		video_playback_id: 'le5JYJ8LLaRz3fLbLF8a6vL2Rgq7kia2XdiMtW8Cw5s',
		aspect_ratio: '16/9',
		date: '15-06-2024',
		youtube_url: 'https://www.youtube.com/watch?v=Da1wknoIVdo',
		timestamps: [8, 12, 15, 18, 21, 29, 39, 45, 51, 55, 62, 65, 68, 73, 88, 93, 21, 62]
	}

	// {
	// 	name: 'Here I Go Again',
	// 	artist: 'Mulan',
	// 	slug: 'here-i-go-again',
	// 	video_playback_id: 'S7uWEBdjR901mwh7kLAiD9LWOQPllBjZaRPVRj00MBLNw',
	// 	aspect_ratio: '1920/817',
	// 	date: '19-09-2025',
	// 	youtube_url: 'https://www.youtube.com/watch?v=WUWEnD7bzdM',
	// 	timestamps: [0, 4, 8, 12, 26, 32, 36, 44, 49, 54, 60, 65, 66, 72, 86, 96, 167, 184]
	// },
];
