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

      <section className="project-detail">
        <RevealOnScroll className="container">
          <div
            className="project-detail-image"
            role="img"
            aria-label={project.imageAlt}
          >
            <Image
              src={project.image}
              alt=""
              fill
              sizes="(max-width: 1000px) 100vw, 1200px"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
            />
            <span className="case-study-soon-badge">PREVIEW · LIVE SOON</span>
          </div>

          <div className="project-detail-grid">
            <div className="about-body">
              {project.detail.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>

            <dl className="case-study-meta-list project-detail-facts">
              <div>
                <dt>CLIENT</dt>
                <dd>{project.client}</dd>
              </div>
              <div>
                <dt>STATUS</dt>
                <dd>{project.status}</dd>
              </div>
            </dl>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="container">
          <div className="project-role">
            <p className="section-label">OUR ROLE</p>
            <ul className="project-role-list">
              {project.role.map((r) => (
                <li key={r.title}>
                  <strong>{r.title}</strong>
                  {r.note && <p>{r.note}</p>}
                </li>
              ))}
            </ul>
          </div>

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
