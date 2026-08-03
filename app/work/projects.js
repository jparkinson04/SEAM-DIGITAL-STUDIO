// Shared project data for the Work listing and per-project detail pages.
// Add new projects here: they appear on /work and get a page at /work/<slug>.

export const PROJECTS = [
  {
    slug: 'bohemia-wellness',
    name: 'Bohemia Wellness',
    tag: 'RECENT BUILD',
    title: 'A wellness studio, fully set up online.',
    teaser:
      'A custom site for a wellness sanctuary 25 years in the making, designed and written around her clients.',
    client: 'Claire Whitfield',
    scope: 'Website, branding + ongoing care',
    status: 'Going live soon',
    image: '/bohemia-website.jpg',
    imageAlt: 'Bohemia Wellness website hero screenshot',
    detail: [
      'Bohemia is Claire Whitfield’s wellness sanctuary, 25 years in the making. Her website needed to feel just as warm and considered as the studio itself.',
      'The site was designed and written around her clients, with the look and the words shaped to match the warmth of the studio. Online bookings, Google reviews and ongoing content support sit on top of the core build.',
      'The site is in its final stages and will be linked here as soon as it goes live.',
    ],
  },
];

export function getProject(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}
