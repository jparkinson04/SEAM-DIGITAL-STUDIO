// Shared project data for the Work listing and per-project detail pages.
// Add new projects here: they appear on /work and get a page at /work/<slug>.
// House rule: no personal client names anywhere — business names only.

export const PROJECTS = [
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
    gallery: [
      {
        src: '/jbe-projects.jpg',
        alt: 'JBE Interiors projects page showing recent restaurant fit-outs',
      },
      {
        src: '/jbe-project-detail.jpg',
        alt: 'JBE Interiors individual project page for a central London restaurant fit-out',
      },
    ],
  },
  {
    slug: 'teachecho',
    name: 'TeachEcho',
    tag: 'PLATFORM BUILD',
    title: 'A staff wellbeing platform for schools.',
    teaser:
      'Echo helps schools and trusts understand how their staff are really feeling. Branding, site and booking flow, all built from scratch.',
    scope: 'Website, branding + booking system',
    liveUrl: 'https://teachecho.co.uk/',
    image: '/teachecho-website.jpg',
    imageAlt: 'TeachEcho website hero reading staff wellbeing insight, built around real psychology',
    detail: [
      'Echo is a staff wellbeing platform for schools and multi-academy trusts. A monthly anonymous pulse survey turns staff voice into clear, board-ready insight, built around real psychology.',
      'We created the brand and built the site from scratch, with the UX and UI shaped around busy school leaders: one clear message, simple per-school pricing, and a booking system so schools can book a demo in a couple of clicks. Hosting is handled by us too.',
    ],
    role: [
      { title: 'Branding' },
      { title: 'UX and UI design' },
      { title: 'Website design and build' },
      { title: 'Website hosting' },
      { title: 'Booking system implementation' },
    ],
    gallery: [
      {
        src: '/teachecho-product.jpg',
        alt: 'TeachEcho product overview showing the monthly survey and its three outputs',
      },
      {
        src: '/teachecho-pricing.jpg',
        alt: 'TeachEcho pricing page with simple per-school pricing',
      },
    ],
  },
  {
    slug: 'expert-voice',
    name: 'Expert Voice',
    tag: 'BRAND + BUILD',
    title: 'A LinkedIn content service, built from the ground up.',
    teaser:
      'Brand, site and messaging for a LinkedIn content service for founders and consultants, with a clear next step for every visitor.',
    scope: 'Website, branding + messaging',
    liveUrl: 'https://expert-voice.co.uk/',
    image: '/expert-voice-website.jpg',
    imageAlt: 'Expert Voice website hero reading put a face in front of the logo',
    detail: [
      'Expert Voice is a LinkedIn content service for founders, consultants and teams, based in Doncaster. It turns a person\'s expertise into months of posts, so the people who buy from them already know and trust them by the time they need help.',
      'We created the brand and built the site from scratch. A bold, direct headline, a four-colour signature that runs through every page, and copy written in the first person so the founder is the face of the business, not the logo. A free content engine quiz, a guides library, a newsletter signup and a 15-minute intro call give visitors a clear next step at every level of commitment.',
    ],
    role: [
      { title: 'Branding' },
      { title: 'UX and UI design' },
      { title: 'Website design and build' },
      { title: 'Messaging and copy' },
      {
        title: 'Content engine quiz',
        note: 'A free, twelve-question quiz built into the site. Visitors find out which of four content engines suits them and leave with three posts to write that week, no email required.',
      },
      { title: 'Booking and newsletter setup' },
    ],
    gallery: [
      {
        src: '/expert-voice-how-it-works.jpg',
        alt: 'Expert Voice how it works page showing a month at a glance timeline',
      },
      {
        src: '/expert-voice-quiz.jpg',
        alt: 'Expert Voice content engine quiz landing page',
      },
    ],
  },
  {
    slug: 'emily-hipkiss-counselling',
    name: 'Emily Hipkiss Counselling & Therapy',
    tag: 'NEW BUILD',
    title: 'A counselling practice, made to feel safe before the first session.',
    teaser:
      'Brand and site for an integrative counselling practice, with a calm, natural look and a contact flow that feels gentle, not clinical.',
    scope: 'Website, branding + messaging',
    liveUrl: 'https://www.emilyhipkiss.com/',
    image: '/emily-hipkiss-website.jpg',
    imageAlt: 'Emily Hipkiss Counselling & Therapy website hero with the EH monogram over soft green hills',
    detail: [
      'Emily Hipkiss Counselling & Therapy is an integrative counselling and psychotherapy practice, BACP registered, with a particular focus on neurodivergent clients and outdoor Walk & Talk sessions.',
      'We created the brand and built the site from scratch. A soft, natural palette and a serif monogram set a calm tone from the first screen, and the copy is written to meet people where they are, with no pressure to have everything figured out. A dedicated Walk & Talk page, a blog and a simple contact form make the first step, a free 20-minute consultation, feel easy to take.',
    ],
    role: [
      { title: 'Branding' },
      { title: 'UX and UI design' },
      { title: 'Website design and build' },
      { title: 'Website hosting' },
      { title: 'Messaging and copy' },
      { title: 'Contact form setup' },
    ],
    gallery: [
      {
        src: '/emily-hipkiss-walk-and-talk.jpg',
        alt: 'Emily Hipkiss Counselling & Therapy Walk & Talk page explaining outdoor therapy',
      },
      {
        src: '/emily-hipkiss-contact.jpg',
        alt: 'Emily Hipkiss Counselling & Therapy contact page with a send a message form',
      },
    ],
  },
];

export function getProject(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}
