import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import fetchMarkdownContent from '../utils/markdownUtils';

function ProjectPage({ projects }) {
  console.log(projects);
  const { urlEnd } = useParams();
  console.log(urlEnd);
  const [project, setProject] = useState(null); // Initialize project as null
  const [markdownContent, setMarkdownContent] = useState(null); // Initialize markdownContent as null

  // Initialize project outside of the useEffect
  const matchingProject = projects.find((p) => p.urlEnd === urlEnd);
  console.log(matchingProject);
  
  useEffect(() => {
    // Check if the project is not found
    if (!matchingProject) {
      // Handle cases where the project is not found
      setProject({ title: 'Project not found', description: '' }); // Set a placeholder project
      return; // Exit early to avoid making a fetch request
    }
    else {
      setProject(matchingProject); // Set the project
      // Fetch Markdown content when the component mounts
      async function fetchAndSetMarkdownContent() {
        const content = await fetchMarkdownContent(matchingProject.markdown);
        setMarkdownContent(content);
      }

      fetchAndSetMarkdownContent();
    }
  }, [matchingProject]); // Use matchingProject as the dependency

  return (
    <div>
      {project ? (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <ReactMarkdown escapeHtml={false}>{markdownContent}</ReactMarkdown>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ProjectPage;
