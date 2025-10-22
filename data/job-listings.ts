export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  category: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  salary: string;
  postedDate: string;
  deadline: string;
  contactEmail: string;
  contactPhone: string;
  image: string;
}

export const jobListings: JobListing[] = [
  {
    id: "job1",
    title: "Software Engineer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    category: "Technology",
    description:
      "Tech Innovations Inc. is seeking a talented Software Engineer to join our growing team. You will be responsible for developing and maintaining high-quality software applications, collaborating with cross-functional teams, and contributing to the full software development lifecycle.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in software development",
      "Proficiency in JavaScript, TypeScript, and React",
      "Experience with Node.js and RESTful APIs",
      "Strong problem-solving skills and attention to detail",
    ],
    responsibilities: [
      "Design, develop, and maintain software applications",
      "Collaborate with product managers and designers to implement new features",
      "Write clean, maintainable, and efficient code",
      "Perform code reviews and mentor junior developers",
      "Troubleshoot and debug issues in existing applications",
    ],
    salary: "$120,000 - $150,000 per year",
    postedDate: "2025-03-01",
    deadline: "2025-04-15",
    contactEmail: "careers@techinnovations.com",
    contactPhone: "(555) 123-4567",
    image: "/placeholder.svg?height=300&width=500",
  },
];
