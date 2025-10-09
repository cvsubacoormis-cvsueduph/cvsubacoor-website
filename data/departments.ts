export interface Department {
  id: string;
  name: string;
  description: string;
  programs: string[];
  facultyCount: number;
  studentCount: number;
  chairperson: string;
  coordinator?: string[];
  email: string;
  phone: string;
  location: string;
  image: string;
}

export const departments: Department[] = [
  {
    id: "computer-studies",
    name: "Department of Computer Studies",
    description:
      "The Department of Computer Studies provides comprehensive programs designed to equip students with the knowledge and skills needed in today’s technology-driven world. Through a balanced blend of theory, hands-on learning, and innovative research, the department prepares students for careers in software development, information technology, systems analysis, and other computing professions. With a strong emphasis on problem-solving, innovation, and ethical computing, our graduates are ready to meet the challenges of the digital age and contribute meaningfully to the global tech industry.",
    programs: [
      "Bachelor of Science in Computer Science",
      "Bachelor of Science in Information Technology",
    ],
    facultyCount: 24,
    studentCount: 450,
    chairperson: "Jovelyn D. Ocampo, MIT",
    coordinator: [
      "Donnalyn B. Montallana, MIT, Information Technology Program",
      "Ely Rose L. Panganiban Briones, MIT, Computer Science Program",
    ],
    email: "cs-department@university.edu",
    phone: "(123) 456-7890",
    location: "Technology Building, 3rd Floor",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "arts-and-sciences",
    name: "Department of Arts and Sciences",
    description:
      "The Department of Arts and Sciences offers a diverse range of programs that foster critical thinking, creativity, and a deeper understanding of the human experience. By integrating the humanities, social sciences, and natural sciences, the department provides a well-rounded education that enhances communication, analytical, and problem-solving skills. Our curriculum prepares students to become adaptable, socially responsible, and globally aware individuals, ready to excel in various professional fields and contribute to the advancement of society.",
    programs: ["Bachelor of Science in Psychology"],
    facultyCount: 18,
    studentCount: 320,
    chairperson: "Kathy C. Jamero",
    coordinator: [
      "Janette E. Alagar, Psychology Program",
      "Regine U. Caltino, Physical Education",
    ],
    email: "math-department@university.edu",
    phone: "(123) 456-7891",
    location: "Science Building, 2nd Floor",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "department-of-teacher-education",
    name: "Department of Teacher Education",
    description:
      "The Department of Teacher Education is dedicated to developing competent, compassionate, and innovative educators who are committed to excellence in teaching and lifelong learning. Our programs emphasize pedagogical theory, practical training, and values formation to prepare future teachers for the diverse needs of learners. Through a strong foundation in educational principles and hands-on classroom experience, the department nurtures educators who inspire, lead, and contribute to the advancement of quality education in the nation and beyond.",
    programs: [
      "Bachelor of Science in Secondary Education Major in English",
      "Bachelor of Science in Secondary Education Major in Mathematics",
    ],
    facultyCount: 22,
    studentCount: 380,
    chairperson: "Jolina Razell M. Mindoro, LPT",
    coordinator: [
      "Jolina Razell M. Mindoro, LPT, Field Study Program",
      "Anarose M. Rupido, General Education",
      "Nezil Obiado, Secondary Education Program Major in Mathematics",
      "Jay Anne F. Salles-Villareal, Secondary Education Program Major in English",
      "Ronan M. Cajigal, Professional Education",
    ],
    email: "biology-department@university.edu",
    phone: "(123) 456-7892",
    location: "Life Sciences Building, 1st Floor",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "department-of-management-studies",
    name: "Department of Management Studies",
    description:
      "The Department of Management Studies offers programs in Hospitality Management, Marketing Management, and Human Resource Management, designed to cultivate future leaders in various business and service industries. The department provides a strong foundation in management principles, customer relations, business strategy, and organizational development. Through experiential learning, industry partnerships, and values-driven education, students gain practical skills and professional competencies that prepare them to excel in dynamic business environments and contribute to the growth of the hospitality, marketing, and human resource sectors.",
    programs: [
      "Bachelor of Science in Business Administration Major in Marketing Management",
      "Bachelor of Science in Business Administration Major in Human Resource Management",
      "Bachelor of Science in Hospitality Management",
    ],
    facultyCount: 30,
    studentCount: 520,
    chairperson: "Janice A. Nealega",
    coordinator: [
      "Maria Lourdez D. Lamanilao, Business Administration Program",
      "Ryan S. Acojedo, Hospitality Management Program",
    ],
    email: "engineering-department@university.edu",
    phone: "(123) 456-7893",
    location: "Engineering Complex, Main Building",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "department-of-criminology",
    name: "Department of Criminology",
    description:
      "The Department of Criminology is committed to producing disciplined, competent, and morally upright professionals in the field of law enforcement and criminal justice. The program provides a strong foundation in criminological theory, criminal law, forensic science, and investigative techniques. Through rigorous academic training and practical field experience, students develop the skills and values needed to uphold justice, maintain peace and order, and contribute to community and national security. The department prepares graduates to serve with integrity in various sectors such as law enforcement, corrections, and public safety.",
    programs: ["Bachelor of Science in Criminology"],
    facultyCount: 26,
    studentCount: 580,
    chairperson: "Jimmy M. Caltino",
    email: "business-department@university.edu",
    phone: "(123) 456-7894",
    location: "Business Building, 4th Floor",
    image: "/placeholder.svg?height=300&width=500",
  },
];
