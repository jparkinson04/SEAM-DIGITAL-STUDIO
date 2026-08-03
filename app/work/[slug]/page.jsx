import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import RevealOnScroll from '@/components/RevealOnScroll';
import { PROJECTS, getProject } from '../projects';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name}, Seam Digital Studio`,
    description: project.teaser,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <section className="page-hero">
        <RevealOnScroll className="container">
          <p className="section-label">WORK · CASE STUDY</p>
          <h1 className="page-hero-title">{project.name}.</h1>
          <p className="page-hero-sub">{project.title}</p>
        </RevealOnScroll>
      </section>

      <section className="selected-work">
        <RevealOnScroll className="container">
          <article className="case-study-card">
            <div
              className="case-study-cover case-study-cover--image"
              role="img"
              aria-label={project.imageAlt}
            >
              <Image
                src={project.image}
                alt=""
                fill
                sizes="(max-width: 1000px) 100vw, 620px"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                priority
              />
              <span className="case-study-soon-badge">PREVIEW · LIVE SOON</span>
            </div>

            <div className="case-study-meta">
              <p className="case-study-tag">{project.tag}</p>
              {project.detail.map((para) => (
                <p key={para} className="case-study-body">
                  {para}
                </p>
              ))}

              <dl className="case-study-meta-list">
                <div>
                  <dt>CLIENT</dt>
                  <dd>{project.client}</dd>
                </div>
                <div>
                  <dt>SCOPE</dt>
                  <dd>{project.scope}</dd>
                </div>
                <div>
                  <dt>STATUS</dt>
                  <dd>{project.status}</dd>
                </div>
              </dl>

              <p className="link-arrow link-arrow--soon">LIVE SITE COMING SOON</p>
            </div>
          </article>

          <p className="back-to-work">
            <Link href="/work" className="link-arrow">
              <span aria-hidden="true">←</span> ALL WORK
            </Link>
          </p>
        </RevealOnScroll>
      </section>
    </>
  );
}
