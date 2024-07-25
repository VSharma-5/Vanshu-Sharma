document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "Mental Fitness Tracker",
      description: "Developed a Mental Fitness Tracker to help users monitor and improve their mental well-being.",
      link: "#"
    },
    {
      title: "Optical Communication",
      description: "Worked on an Optical Communication project focused on enhancing data transmission over optical fibers.",
      link: "#"
    }
  ];

  

  const education = [
    {
      institution: "Panjab University",
      degree: "Bachelor of Engineering (B.E.)",
      field: "Electronics and Communication Engineering",
      duration: "2021-2025",
      achievements: [
        "Scholar throughout the 4 years of Engineering",
        "Ranked 1st in IPD (Industrial Product Design)"
      ]
    },
    {
      institution: "SP Smart Senior Secondary School",
      degree: "PCM",
      field: "Physics, Chemistry, Mathematics",
      duration: "2019-2021",
      grade: "Grade - A+ (97.6%)",
      achievements: [
        "Secured 2nd position in Science Exhibition conducted by the Directorate of Education",
        "Activities: Science Exhibitions, Speaker, Cultural Programs"
      ]
    },
    {
      institution: "B.S.K. Hr. Sec. School",
      degree: "Nur-10th",
      field: "General Education",
      duration: "2008-2018",
      grade: "Grade - A+ (91%) in 10th",
      achievements: [
        "Secured 1st Position till class 10th",
        "Ranked 2nd in The Global Cultural Fiesta (Talent Scoutz)",
        "Secured position of leader for 4 years from class 6-10th"
      ]
    }
  ];

  const languages = [
    "English",
    "Hindi",
    "Punjabi"
  ];

  const projectList = document.getElementById("project-list");
  const experienceList = document.getElementById("experience-list");
  const educationList = document.getElementById("education-list");
  const languageList = document.getElementById("language-list");

  projects.forEach(project => {
    const projectItem = document.createElement("div");
    projectItem.className = "bg-blue-50 shadow-lg p-4 rounded mb-4 border border-blue-200";
    
    const projectTitle = document.createElement("h3");
    projectTitle.className = "text-xl font-semibold text-blue-700";
    projectTitle.textContent = project.title;
    
    const projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;
    
    const projectLink = document.createElement("a");
    projectLink.className
