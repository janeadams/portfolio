import React from 'react';
import { useParams } from 'react-router-dom';

function ExperiencePage({ experiences }) {
  const { urlEnd } = useParams();

  // Find the project that matches the URL ending
  const experience = experiences.find((p) => p.urlEnd === urlEnd);

  if (!experience) {
    // Handle cases where the project is not found
    return <div>Experience not found</div>;
  }

  return (
    <div>
      <h1>{experience.title}</h1>
      <p>{experience.description}</p>
      {/* Display experience details */}
    </div>
  );
}

export default ExperiencePage;
