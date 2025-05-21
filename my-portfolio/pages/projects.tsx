function Projects() {
  const projects = [
    { title: "Project One", description: "A web app for task management." },
    { title: "Project Two", description: "An e-commerce platform." },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="space-y-4">
        {projects.map((project, i) => (
          <div key={i} className="p-4 bg-white rounded shadow-md">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Projects;