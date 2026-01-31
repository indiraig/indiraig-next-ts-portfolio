type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card project-card">
      <header className="project-card__header">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
      </header>

      <div className="chips project-card__chips">
        {project.tech?.map((t: string) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>

      <div className="project-card__actions">
        {project.github && (
          <a className="btn" href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {project.demo && (
          <a className="btn btn--primary" href={project.demo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
