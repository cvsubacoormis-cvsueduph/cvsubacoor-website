export interface Department {
  id: string
  name: string
  description: string
  programs: string[]
  facultyCount: number
  studentCount: number
  chairperson: string
  email: string
  phone: string
  location: string
  image: string
}

export const departments: Department[] = [
  {
    id: "computer-science",
    name: "Computer Science",
    description:
      "The Department of Computer Science offers programs that prepare students for careers in software development, data science, artificial intelligence, and other computing fields. Our curriculum combines theoretical foundations with practical applications, ensuring graduates are well-equipped for the rapidly evolving tech industry.",
    programs: [
      "Bachelor of Science in Computer Science",
      "Master of Science in Computer Science",
      "PhD in Computer Science",
      "Certificate in Data Science",
    ],
    facultyCount: 24,
    studentCount: 450,
    chairperson: "Dr. Maria Santos",
    email: "cs-department@university.edu",
    phone: "(123) 456-7890",
    location: "Technology Building, 3rd Floor",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "mathematics",
    name: "Mathematics",
    description:
      "The Mathematics Department provides comprehensive education in pure and applied mathematics. Our programs develop students' analytical thinking and problem-solving skills, preparing them for careers in research, education, finance, and technology sectors where mathematical expertise is highly valued.",
    programs: [
      "Bachelor of Science in Mathematics",
      "Master of Science in Applied Mathematics",
      "PhD in Mathematics",
      "Minor in Statistics",
    ],
    facultyCount: 18,
    studentCount: 320,
    chairperson: "Dr. James Wilson",
    email: "math-department@university.edu",
    phone: "(123) 456-7891",
    location: "Science Building, 2nd Floor",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "biology",
    name: "Biology",
    description:
      "The Biology Department offers cutting-edge education in life sciences, from molecular biology to ecology. Our programs combine classroom learning with extensive laboratory experience and field work, preparing students for careers in healthcare, research, environmental conservation, and biotechnology.",
    programs: [
      "Bachelor of Science in Biology",
      "Master of Science in Molecular Biology",
      "PhD in Biological Sciences",
      "Certificate in Biotechnology",
    ],
    facultyCount: 22,
    studentCount: 380,
    chairperson: "Dr. Elena Rodriguez",
    email: "biology-department@university.edu",
    phone: "(123) 456-7892",
    location: "Life Sciences Building, 1st Floor",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "engineering",
    name: "Engineering",
    description:
      "The Engineering Department provides comprehensive education across various engineering disciplines. Our programs emphasize both theoretical knowledge and practical applications, preparing students to solve complex problems and innovate in fields such as civil, mechanical, electrical, and environmental engineering.",
    programs: [
      "Bachelor of Science in Civil Engineering",
      "Bachelor of Science in Mechanical Engineering",
      "Master of Engineering",
      "PhD in Engineering Sciences",
    ],
    facultyCount: 30,
    studentCount: 520,
    chairperson: "Dr. Robert Chen",
    email: "engineering-department@university.edu",
    phone: "(123) 456-7893",
    location: "Engineering Complex, Main Building",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "business",
    name: "Business Administration",
    description:
      "The Business Administration Department offers programs that develop students' understanding of business principles, management strategies, and economic concepts. Our curriculum combines theoretical frameworks with case studies and practical experiences, preparing graduates for leadership roles in various industries.",
    programs: [
      "Bachelor of Business Administration",
      "Master of Business Administration (MBA)",
      "PhD in Business Management",
      "Certificate in Entrepreneurship",
    ],
    facultyCount: 26,
    studentCount: 580,
    chairperson: "Dr. Sarah Johnson",
    email: "business-department@university.edu",
    phone: "(123) 456-7894",
    location: "Business Building, 4th Floor",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "psychology",
    name: "Psychology",
    description:
      "The Psychology Department offers programs that explore human behavior, mental processes, and psychological development. Our curriculum combines theoretical foundations with research methods and practical applications, preparing students for careers in clinical psychology, counseling, research, and related fields.",
    programs: [
      "Bachelor of Arts in Psychology",
      "Master of Science in Clinical Psychology",
      "PhD in Psychology",
      "Certificate in Counseling",
    ],
    facultyCount: 20,
    studentCount: 410,
    chairperson: "Dr. Michael Thompson",
    email: "psychology-department@university.edu",
    phone: "(123) 456-7895",
    location: "Social Sciences Building, 3rd Floor",
    image: "/placeholder.svg?height=300&width=500",
  },
]

