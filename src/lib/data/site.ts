export const site = {
	name: "Laila's Foundation",
	motto: 'Nurturing Hope, Growing Care',
	taglines: ['We Speak', 'We Support', 'We Empower'],
	callToAction: 'Be the Hope. Save Lives. Build a Better Buea.',
	mission: 'Supporting IDPs, widows, orphans & vulnerable families in crisis',
	description:
		"Laila's Foundation is a community-based non-profit in Buea, Cameroon, supporting internally displaced people, widows, orphans and out-of-school children affected by the Anglophone crisis.",
	founder: 'Fanwong Melchior Laila',
	founderTitle: 'Founder & President',
	location: {
		short: 'Buea, Cameroon',
		full: 'Checkpoint, Muea, Buea, South West Region, Cameroon',
		locality: 'Buea',
		region: 'South West Region',
		country: 'CM'
	},
	contact: {
		phoneDisplay: '+237 672 520 445',
		phoneHref: 'tel:+237672520445',
		email: 'fanwonglaila@gmail.com',
		emailHref: 'mailto:fanwonglaila@gmail.com'
	}
} as const;

export type NavItem = { href: '/' | '/about' | '/programs' | '/impact' | '/get-involved'; label: string };

export const nav: readonly NavItem[] = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/programs', label: 'Programs' },
	{ href: '/impact', label: 'Impact' },
	{ href: '/get-involved', label: 'Get Involved' }
];
