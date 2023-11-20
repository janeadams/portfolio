import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <div className="card">
        <Link to={`/projects/${project.urlEnd}`} className="card-link">
      <h2>{project.title}</h2>
        {project.thumbnail && (
            <img src={project.thumbnail} />
        )}
      <p>{project.description}</p>
      <div className="tag-list">
        <strong>Tags:</strong>
        <ul>
          {project.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
