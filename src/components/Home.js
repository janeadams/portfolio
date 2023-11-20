import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component
import ProjectCard from './ProjectCard'; // Import ProjectCard component
import ExperienceCard from './ExperienceCard'; // Import ExperienceCard component


function Home({ projects, experiences }) {

  const [selectedTags, setSelectedTags] = useState([]); // State for selected tags
  const [filteredProjects, setFilteredProjects] = useState(projects); // State for filtered projects

  // Handle tag changes
  const handleTagChange = (tag, checked) => {
    if (checked) {
      // If the tag is selected, add it to selectedTags
      setSelectedTags([...selectedTags, tag]);
    } else {
      // If the tag is deselected, remove it from selectedTags
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    }
  };

  // Update filteredProjects when selectedTags change
  useEffect(() => {
    if (selectedTags.length === 0) {
      // If no tags are selected, show all projects
      setFilteredProjects(projects);
    } else {
      // Filter projects based on selected tags
      const filtered = projects.filter((project) =>
        selectedTags.every((tag) => project.tags.includes(tag))
      );
      setFilteredProjects(filtered);
    }
  }, [selectedTags, projects]);

  const [selectedSortOption, setSelectedSortOption] = useState('most-recent'); // State for selected sorting option

  // Handle sorting changes
  const handleSortChange = (value) => {
    setSelectedSortOption(value);

    // Sort projects based on the selected option
    const sortedProjects = [...filteredProjects].sort((a, b) => {
      if (value === 'most-recent') {
        return new Date(b.year) - new Date(a.year);
      } else if (value === 'least-recent') {
        return new Date(a.year) - new Date(b.year);
      }
      return 0; // Default behavior
    });

    setFilteredProjects(sortedProjects);
  };

  return (
    <main>
      <Header />
      <div className="option-container">
        <div className="filter">
          <strong>Filter by Tags:</strong>
          <div className="tag-list">
            {Array.from(new Set(projects.flatMap((project) => project.tags))).map((tag) => (
              <label key={tag}>
                <input
                  type="checkbox"
                  value={tag}
                  checked={selectedTags.includes(tag)}
                  onChange={(e) => handleTagChange(e.target.value, e.target.checked)}
                />
                {tag}
              </label>
            ))}
          </div>
        </div>
      <div className="sorting-options">
        <strong><label htmlFor="sort-projects">Sort Projects:</label></strong>
        <select
          id="sort-projects"
          value={selectedSortOption}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="most-recent">Newest</option>
          <option value="least-recent">Oldest</option>
        </select>
      </div>
      </div>
      <div className="card-container">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} /> 
        ))}
      </div>
      <h2>Experiences</h2>
      <div className="card-container">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
      <Footer />
    </main>
  );
}

export default Home;
