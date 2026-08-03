// Shared project data for the Work listing and per-project detail pages.
// Add new projects here: they appear on /work and get a page at /work/<slug>.
// House rule: no personal client names anywhere — business names only.

export const PROJECTS = [
  {
    slug: 'bohemia-wellness',
    name: 'Bohemia Wellness',
    tag: 'RECENT BUILD',
    title: 'A wellness studio, fully set up online.',
    teaser:
      'A custom site for a wellness sanctuary 25 years in the making, designed and written around its clients.',
    scope: 'Website, branding + ongoing care',
    badge: 'PREVIEW · LIVE SOON',
    image: '/bohemia-website.jpg',
    imageAlt: 'Bohemia Wellness website hero screenshot',
    detail: [
      'Bohemia is a wellness sanctuary, 25 years in the making. Its website needed to feel just as warm and considered as the studio itself.',
      'The site was designed and written around its clients, with the look and the words shaped to match the warmth of the studio. Online bookings, Google reviews and ongoing content support sit on top of the core build.',
      'The site is in its final stages and will be linked here as soon as it goes live.',
    ],
    role: [
      { title: 'Branding' },
      { title: 'UX and UI design' },
      { title: 'Website design and build' },
      { title: 'Website hosting' },
      { title: 'Booking system implementation' },
      {
        title: 'AI chatbot',
        note: 'An on-site assistant that helps visitors learn more about the business. Wellness is a newer industry for many people, so the chatbot answers questions and helps customers understand the benefits before they book.',
      },
    ],
    gallery: [
      {
        src: '/bohemia-booking.jpg',
        alt: 'Bohemia Wellness booking page with upcoming sessions and the AI assistant open',
      },
      {
        src: '/bohemia-testimonials.jpg',
        alt: 'Bohemia Wellness reviews page showing client testimonials',
      },
      {
        src: '/bohemia-instagram.jpg',
        alt: 'Bohemia Wellness Instagram feed embedded on the site',
      },
    ],
  },
  {
    slug: 'jbe-interiors',
    name: 'JBE Interiors',
    tag: 'REDESIGN',
    title: 'An interiors specialist, redesigned around the work.',
    teaser:
      'A from-scratch redesign for a hospitality fit-out company, with a modern, sleek look and their best work front and centre.',
    scope: 'Website, branding + ongoing maintenance',
    liveUrl: 'https://www.jbeinteriors.com/',
    image: '/jbe-website.jpg',
    imageAlt: 'JBE Interiors website homepage',
    detail: [
      'JBE Interiors fit out restaurants and retail spaces across the UK. We redesigned their website from scratch, with a more modern, sleek look that lets the work speak for itself.',
      'The site is built to showcase the previous work they are proud of. Their most recent and relevant projects are integrated throughout, with a new contact page so enquiries land in one place.',
    ],
    role: [
      { title: 'Branding' },
      { title: 'UX and UI design' },
      { title: 'Website design and build' },
      { title: 'Website hosting' },
      { title: 'Website maintenance' },
    ],
  },
];

export function getProject(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}
