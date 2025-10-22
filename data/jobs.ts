export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Part-time" | "Internship" | "Contract";
  salary: string;
  postedDate: string;
  deadline: string;
  image: string;
  description: string;
  requirements: string[];
  qualifications: string[];
  benefits: string[];
  contactEmail: string;
  contactPhone: string;
  featured: boolean;
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
];
