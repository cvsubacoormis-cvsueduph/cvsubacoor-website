export interface Job {
  id: string
  title: string
  company: string
  location: string
  type: "Full-time" | "Part-time" | "Internship" | "Contract"
  salary: string
  postedDate: string
  deadline: string
  image: string
  description: string
  requirements: string[]
  qualifications: string[]
  benefits: string[]
  contactEmail: string
  contactPhone: string
  featured: boolean
}

export const jobs: Job[] = [
  {
    id: "job-1",
    title: "Software Engineer",
    company: "TechCorp Solutions",
    location: "Manila, Philippines",
    type: "Full-time",
    salary: "₱50,000 - ₱70,000 per month",
    postedDate: "2025-03-01",
    deadline: "2025-04-15",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "TechCorp Solutions is looking for a talented Software Engineer to join our growing team. You will be responsible for developing and maintaining web applications, collaborating with cross-functional teams, and implementing new features.",
    requirements: [
      "Bachelor's degree in Computer Science, Information Technology, or related field",
      "At least 2 years of experience in web development",
      "Proficiency in JavaScript, TypeScript, React, and Node.js",
      "Experience with database systems like MySQL or MongoDB",
      "Strong problem-solving skills and attention to detail",
    ],
    qualifications: [
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Knowledge of CI/CD pipelines",
      "Familiarity with Agile methodologies",
      "Open source contributions",
    ],
    benefits: [
      "Competitive salary package",
      "Health insurance",
      "13th month pay",
      "Professional development opportunities",
      "Flexible work arrangements",
    ],
    contactEmail: "careers@techcorp.com",
    contactPhone: "+63 (2) 8123-4567",
    featured: true,
  },
  {
    id: "job-2",
    title: "Marketing Specialist",
    company: "Global Marketing Philippines",
    location: "Cebu City, Philippines",
    type: "Full-time",
    salary: "₱35,000 - ₱45,000 per month",
    postedDate: "2025-03-05",
    deadline: "2025-04-10",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Global Marketing Philippines is seeking a creative and data-driven Marketing Specialist to help develop and implement marketing strategies. The ideal candidate will have experience in digital marketing, content creation, and campaign analysis.",
    requirements: [
      "Bachelor's degree in Marketing, Communications, or related field",
      "At least 2 years of experience in marketing",
      "Proficiency in digital marketing tools and platforms",
      "Strong analytical and communication skills",
      "Experience with social media management",
    ],
    qualifications: [
      "Experience with SEO/SEM",
      "Graphic design skills",
      "Knowledge of marketing automation tools",
      "Experience with CRM systems",
    ],
    benefits: [
      "Competitive salary package",
      "Health insurance",
      "Performance bonuses",
      "Professional development budget",
      "Team building activities",
    ],
    contactEmail: "hr@globalmarketingph.com",
    contactPhone: "+63 (32) 234-5678",
    featured: true,
  },
  {
    id: "job-3",
    title: "Accounting Assistant",
    company: "Financial Solutions Inc.",
    location: "Davao City, Philippines",
    type: "Full-time",
    salary: "₱25,000 - ₱30,000 per month",
    postedDate: "2025-03-10",
    deadline: "2025-04-05",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Financial Solutions Inc. is looking for an Accounting Assistant to support our accounting department. Responsibilities include processing financial transactions, maintaining records, assisting with monthly closings, and preparing financial reports.",
    requirements: [
      "Bachelor's degree in Accounting or related field",
      "At least 1 year of experience in accounting or bookkeeping",
      "Proficiency in MS Excel and accounting software",
      "Strong attention to detail and organizational skills",
      "Knowledge of basic accounting principles",
    ],
    qualifications: [
      "Experience with QuickBooks or SAP",
      "Knowledge of tax regulations",
      "Experience in accounts payable/receivable",
      "Certification in accounting (CPA)",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "13th month pay",
      "Transportation allowance",
      "Professional development opportunities",
    ],
    contactEmail: "careers@financialsolutions.ph",
    contactPhone: "+63 (82) 345-6789",
    featured: false,
  },
  {
    id: "job-4",
    title: "English Teacher",
    company: "International Language Academy",
    location: "Baguio City, Philippines",
    type: "Full-time",
    salary: "₱30,000 - ₱40,000 per month",
    postedDate: "2025-03-12",
    deadline: "2025-04-20",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "International Language Academy is seeking passionate English Teachers to join our team. You will be responsible for teaching English to students of various ages and proficiency levels, developing lesson plans, and assessing student progress.",
    requirements: [
      "Bachelor's degree in Education, English, or related field",
      "TESOL/TEFL certification",
      "At least 1 year of teaching experience",
      "Excellent communication and interpersonal skills",
      "Patience and adaptability",
    ],
    qualifications: [
      "Experience teaching in an international environment",
      "Knowledge of different teaching methodologies",
      "Familiarity with language assessment tools",
      "Multilingual abilities",
    ],
    benefits: [
      "Competitive salary",
      "Housing allowance",
      "Health insurance",
      "Paid holidays",
      "Professional development opportunities",
    ],
    contactEmail: "hr@ila.edu.ph",
    contactPhone: "+63 (74) 456-7890",
    featured: false,
  },
  {
    id: "job-5",
    title: "Civil Engineer",
    company: "BuildRight Construction",
    location: "Iloilo City, Philippines",
    type: "Full-time",
    salary: "₱45,000 - ₱60,000 per month",
    postedDate: "2025-03-15",
    deadline: "2025-04-30",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "BuildRight Construction is looking for a Civil Engineer to join our team. You will be responsible for designing, planning, and overseeing construction projects, ensuring compliance with safety regulations, and coordinating with contractors and stakeholders.",
    requirements: [
      "Bachelor's degree in Civil Engineering",
      "Licensed Civil Engineer",
      "At least 3 years of experience in construction or related field",
      "Proficiency in AutoCAD and other engineering software",
      "Strong problem-solving and project management skills",
    ],
    qualifications: [
      "Master's degree in Civil Engineering or related field",
      "Experience with BIM software",
      "Knowledge of green building practices",
      "Project management certification",
    ],
    benefits: [
      "Competitive salary package",
      "Health insurance",
      "Project completion bonuses",
      "Transportation allowance",
      "Professional development opportunities",
    ],
    contactEmail: "careers@buildright.com.ph",
    contactPhone: "+63 (33) 567-8901",
    featured: true,
  },
  {
    id: "job-6",
    title: "Nurse",
    company: "Metro Medical Center",
    location: "Quezon City, Philippines",
    type: "Full-time",
    salary: "₱30,000 - ₱40,000 per month",
    postedDate: "2025-03-18",
    deadline: "2025-04-25",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Metro Medical Center is seeking dedicated Nurses to join our healthcare team. You will be responsible for providing patient care, administering medications, assisting doctors, and maintaining medical records.",
    requirements: [
      "Bachelor of Science in Nursing",
      "Registered Nurse license",
      "At least 1 year of clinical experience",
      "Strong communication and interpersonal skills",
      "Compassion and attention to detail",
    ],
    qualifications: [
      "Specialty certifications",
      "Experience in critical care or emergency nursing",
      "BLS/ACLS certification",
      "Knowledge of electronic health records systems",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Night differential pay",
      "Continuing education support",
      "Career advancement opportunities",
    ],
    contactEmail: "recruitment@metromedical.com.ph",
    contactPhone: "+63 (2) 678-9012",
    featured: false,
  },
]

