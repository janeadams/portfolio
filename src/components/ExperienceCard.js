import React from 'react';
import { Link } from 'react-router-dom';

function ExperienceCard({ experience }) {
  return (
    <div className="card">
      <h2>{experience.title}</h2>
      <p>{experience.company}</p>
      <p>{experience.year}</p>
      <Link to={`/experiences/${experience.id}`}>View Details</Link>
    </div>
  );
}

export default ExperienceCard;
