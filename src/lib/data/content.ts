import type { IconName } from '$lib/components/icons';

import team1 from '$lib/assets/team/team-1.webp';
import team2 from '$lib/assets/team/team-2.webp';
import team3 from '$lib/assets/team/team-3.webp';
import team4 from '$lib/assets/team/team-4.webp';
import team5 from '$lib/assets/team/team-5.webp';
import team6 from '$lib/assets/team/team-6.webp';

export type Pillar = { title: string; icon: IconName; points: readonly string[] };

/** Home page three-column block (from the foundation's appeal poster). */
export const pillars: readonly Pillar[] = [
	{
		title: 'Why Support Us',
		icon: 'heart',
		points: [
			'We address urgent humanitarian needs',
			'We restore dignity to people who have lost everything',
			'We provide rehabilitation and reintegration support for IDPs and survivors'
		]
	},
	{
		title: 'Our Appeal',
		icon: 'hands',
		points: [
			'Provide shelter, food and healthcare',
			'Offer psychosocial support',
			'Educate and empower'
		]
	},
	{
		title: 'What We Do',
		icon: 'sprout',
		points: ['Distribute relief supplies', 'Support widows', 'Protect orphans']
	}
];

export type Program = {
	slug: string;
	title: string;
	icon: IconName;
	summary: string;
	includes: readonly string[];
	goal: string;
};

/** Core programs (proposal section 5), with yearly goals from section 4. */
export const programs: readonly Program[] = [
	{
		slug: 'education',
		title: 'Education Support',
		icon: 'book',
		summary:
			'The crisis and the cost of schooling have pushed many children, from primary school through to higher education, out of the classroom. We help them get back in and stay there.',
		includes: ['School supplies', 'Scholarships', 'Learning materials'],
		goal: 'School supplies and scholarships for 100 vulnerable children every year'
	},
	{
		slug: 'widows-orphans',
		title: 'Widows & Orphans Care',
		icon: 'heart',
		summary:
			'The conflict has taken the lives of many men, leaving widows struggling to provide for their families. We offer immediate relief and a path back to earning a living.',
		includes: ['Food relief', 'Care', 'Livelihood support and small business start-up'],
		goal: 'Food relief and small business start-up support for 50 widows and orphans'
	},
	{
		slug: 'idps',
		title: 'IDPs Support',
		icon: 'home',
		summary:
			'Thousands of internally displaced people (IDPs) in and around Buea live without adequate shelter, food or protection. We bring essentials and help families rebuild.',
		includes: ['Shelter', 'Essential aid', 'Community support'],
		goal: 'Shelter kits and essential aid for 100 IDP families'
	},
	{
		slug: 'legal',
		title: 'Legal Assistance',
		icon: 'scale',
		summary:
			'Displaced and vulnerable people often have no one to defend their rights. We offer free counselling and speak up for people who are abused or neglected.',
		includes: ['Rights awareness', 'Advocacy', 'Counselling'],
		goal: 'Free legal counselling and advocacy for abused and neglected persons'
	}
];

/** Further commitments from the proposal's objectives (section 4). */
export const additionalCommitments: readonly { title: string; icon: IconName; text: string }[] = [
	{
		title: 'Youth Rehabilitation',
		icon: 'sprout',
		text: 'Since the crisis began, more of our young people have turned to drugs and struggle to pursue their dreams. We aim to rehabilitate at least 50 young people who abuse drugs every year.'
	},
	{
		title: 'Human Rights, Justice & Peace',
		icon: 'shield',
		text: 'We fight human rights violations in the South West Region and promote justice and peace in the communities we serve.'
	}
];

export const objectives: readonly string[] = [
	'Provide school supplies and scholarships to 100 vulnerable children per year',
	'Support 50 widows and orphans with food relief and small business start-up',
	'Provide shelter kits and essential aid to 100 IDP families',
	'Offer free legal counselling and advocacy for abused and neglected persons',
	'Rehabilitate at least 50 young people who abuse drugs every year',
	'Fight against human rights violations in the South West Region',
	'Promote justice and peace among the population'
];

export const beneficiaries: readonly { title: string; icon: IconName; text: string }[] = [
	{ title: 'Children', icon: 'book', text: 'Aged 6 to 18, especially those out of school' },
	{ title: 'Widows & orphans', icon: 'heart', text: 'Families who lost their provider to the conflict' },
	{
		title: 'IDP families',
		icon: 'home',
		text: 'Displaced families in Buea, Tole, Muea and Bokwaongo'
	},
	{ title: 'Young people', icon: 'sprout', text: 'Abused youths and those struggling with drug abuse' }
];

export type Stat = { value: number; label: string };

/** Yearly targets (proposal sections 4 & 9). These are goals, not results achieved. */
export const yearlyGoals: readonly Stat[] = [
	{ value: 100, label: 'children back in school' },
	{ value: 50, label: 'widows supported towards self-reliance' },
	{ value: 100, label: 'IDP families supported' },
	{ value: 50, label: 'young people in drug rehabilitation' }
];

export const expectedImpact: readonly string[] = [
	'100 children back in school',
	'50 widows self-reliant',
	'100 IDP families supported',
	'Fewer abuse cases through legal awareness',
	'Over 50 young people rehabilitated from drug abuse every year'
];

export const sustainability: readonly { title: string; icon: IconName; text: string }[] = [
	{
		title: 'Local partnerships',
		icon: 'hands',
		text: 'Working alongside organizations and leaders in the community'
	},
	{
		title: 'Volunteer network',
		icon: 'users',
		text: 'Neighbours helping neighbours, on the ground every day'
	},
	{
		title: 'Income-generating activities',
		icon: 'sprout',
		text: 'Small projects that fund the work over the long term'
	},
	{
		title: 'Community contributions',
		icon: 'heart',
		text: 'Every gift, big or small, from people who care'
	}
];

export const timeline: readonly { months: string; activity: string }[] = [
	{ months: 'Months 1–2', activity: 'Identify and register beneficiaries in the community' },
	{ months: 'Months 3–4', activity: 'Distribute school kits and food relief' },
	{ months: 'Months 5–8', activity: 'Livelihood training for widows' },
	{ months: 'Months 9–10', activity: 'Legal awareness campaign in communities' },
	{ months: 'Months 11–12', activity: 'Evaluation and reporting' }
];

/** Annual funding goal (proposal section 8). Line items intentionally not published. */
export const fundingGoal = { fcfa: '5,500,000 FCFA', usd: 'about $9,000 USD' } as const;

export type GalleryImage = { src: string; alt: string };

export const gallery: readonly GalleryImage[] = [
	{
		src: team1,
		alt: 'A team member in a green foundation shirt hands out supplies to a group of smiling children'
	},
	{
		src: team2,
		alt: 'Three team members unpack boxes of relief supplies together'
	},
	{
		src: team3,
		alt: 'A team member sits with an elderly woman, his arm around her shoulders'
	},
	{
		src: team4,
		alt: 'A team member carries a box of school supplies'
	},
	{
		src: team5,
		alt: 'The foundation team stands together on a hillside overlooking Buea'
	},
	{
		src: team6,
		alt: 'A team member talks with a group of children gathered around her'
	}
];
