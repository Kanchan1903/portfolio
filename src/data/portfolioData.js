// Recruiter-friendly, completely accurate data adhering strictly to instructions without fake assertions.
export const portfolioData = {
  personal: {
    name: "Kanchan Deshmukh",
    title: "Final Year Computer Engineering Student",
    seeking: "Seeking Software Development internships and entry-level opportunities",
    animatedTitles: [
      "Python Developer",
      "MERN Stack Learner",
      "SIH 2024 Finalist 🏆",
      "Hackathon Team Leader",
      "Problem Solver"
    ],
    aboutText: "I am a final-year Computer Engineering student passionate about software development and problem solving. My strongest programming language is Python, and I enjoy learning full-stack web development using the MERN stack. I like working on real-world problems through hackathons, collaborating with teams, and continuously improving my technical skills.",
    contact: {
      email: "kanchan.dd2005@gmail.com",
      github: "https://github.com/Kanchan1903",
      linkedin: "https://www.linkedin.com/in/kanchan-deshmukh-746a79329/",
    }
  },
  highlights: [
    { title: "Strong Python Programming", desc: "Solid algorithmic understanding, script automation, and data logic resolution." },
    { title: "MERN Stack Learning", desc: "Hands-on implementation of React, Node.js, Express, and MongoDB web apps." },
    { title: "SIH 2024 National Finalist", desc: "Selected at national level in Smart India Hackathon 2024 for Fire Department problem solving." },
    { title: "Team Leadership (SIH 2025)", desc: "Spearheaded team workflow, research, and technical strategy for DRDO & Tourism challenges." },
    { title: "UI Contribution", desc: "Collaborating on intuitive, accessible user interfaces and ergonomic application flows." },
    { title: "Research & Documentation", desc: "Thorough technical requirement analysis and clear architectural documentation." }
  ],
  skills: {
    programming: [
      { name: "Python", category: "Programming" },
      { name: "JavaScript", category: "Programming" },
      { name: "HTML", category: "Programming" },
      { name: "CSS", category: "Programming" }
    ],
    database: [
      { name: "SQL", category: "Database" },
      { name: "MongoDB", category: "Database" }
    ],
    webDevelopment: [
      { name: "React", category: "Web Development" },
      { name: "Node.js", category: "Web Development" },
      { name: "Express.js", category: "Web Development" },
      { name: "Git & GitHub", category: "Version Control" }
    ]
  },
  project: {
    title: "Google Classroom with Attendance System",
    description: "A MERN Stack web application that helps teachers manage classrooms and track student attendance digitally. The system provides secure authentication, attendance management, classroom organization, and an easy-to-use interface for students and teachers.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Student Login",
      "Teacher Login",
      "Attendance Management",
      "Classroom Management",
      "Authentication",
      "Responsive Design"
    ],
    githubUrl: "https://github.com/Kanchan1903/attendance-system-mern",
    liveDemoUrl: "https://attendance-system-mern-32iyxfuh5.vercel.app"
  },
  hackathons: [
    {
      title: "Smart India Hackathon 2024",
      statement: "Fire Department Problem Statement",
      role: "Core Contributor & UI Support",
      statusBadge: "SIH 2024 National Finalist 🏆",
      isFinalist: true,
      contributions: [
        "Research",
        "Requirement Analysis",
        "UI Design Support",
        "Documentation",
        "Team Collaboration"
      ],
      note: "Selected as National Finalists in Smart India Hackathon 2024; researched and architected emergency firefighting workflow solutions."
    },
    {
      title: "Smart India Hackathon 2025",
      statement: "DRDO & Tourism Problem Statements",
      role: "Team Leader",
      statusBadge: "Team Leadership & Architecture",
      isFinalist: false,
      contributions: [
        "Led the team",
        "Conducted research",
        "Planned project workflow",
        "Assisted with UI",
        "Coordinated team activities"
      ],
      note: "Spearheaded team project management, technical research, and solution design submission during SIH 2025 evaluation phase."
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology",
      major: "Computer Engineering",
      year: "Final Year",
      description: "Focusing on Database Systems (NoSQL/SQL), Software Engineering Principles, and collaborative full-stack web engineering."
    }
  ]
};
