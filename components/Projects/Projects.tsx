import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <h2 className="section-title">Flagship Projects</h2>
        <p className="muted projects__intro">
          Selected work highlighting design systems, performance and delightful interactions.
        </p>
        <div className="grid projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
