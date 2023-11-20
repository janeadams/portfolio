import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ProjectPage from './components/ProjectPage';
import ExperiencePage from './components/ExperiencePage';
import projectsData from './data/projects.json'; // Import the projects data
import experiencesData from './data/experiences.json'; // Import the experience data

function App() {
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    // Load the project data when the component mounts
    setProjects(projectsData.projects);
    //console.log(projectsData.projects);
    // Load the experience data when the component mounts
    setExperiences(experiencesData.experiences);
    //console.log(experiencesData.experiences);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home projects={projects} experiences={experiences} />}
        />
        <Route
          path="/projects/:urlEnd"
          element={<ProjectPage projects={projects} />}
        />
        <Route
          path="/experiences/:urlEnd"
          element={<ExperiencePage experiences={experiences} />}
        />
      </Routes>
    </Router>
  );
}

export default App;