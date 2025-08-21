export interface JobListing {
  id: string
  title: string
  company: string
  location: string
  type: string
  category: string
  description: string
  requirements: string[]
  responsibilities: string[]
  salary: string
  postedDate: string
  deadline: string
  contactEmail: string
  contactPhone: string
  image: string
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
  {
    id: "job2",
    title: "Marketing Specialist",
    company: "Global Marketing Solutions",
    location: "New York, NY",
    type: "Full-time",
    category: "Marketing",
    description:
      "Global Marketing Solutions is looking for a creative and data-driven Marketing Specialist to help develop and implement marketing strategies for our clients. The ideal candidate will have experience in digital marketing, content creation, and campaign analysis.",
    requirements: [
      "Bachelor's degree in Marketing, Communications, or related field",
      "2+ years of experience in marketing",
      "Proficiency in digital marketing tools and platforms",
      "Strong analytical and creative skills",
      "Excellent written and verbal communication",
    ],
    responsibilities: [
      "Develop and implement marketing strategies and campaigns",
      "Create engaging content for various platforms",
      "Analyze campaign performance and provide recommendations",
      "Collaborate with clients to understand their marketing needs",
      "Stay updated on industry trends and best practices",
    ],
    salary: "$70,000 - $90,000 per year",
    postedDate: "2025-03-05",
    deadline: "2025-04-10",
    contactEmail: "jobs@globalmarketing.com",
    contactPhone: "(555) 234-5678",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "job3",
    title: "Financial Analyst",
    company: "Capital Finance Group",
    location: "Chicago, IL",
    type: "Full-time",
    category: "Finance",
    description:
      "Capital Finance Group is seeking a detail-oriented Financial Analyst to join our team. The successful candidate will be responsible for analyzing financial data, preparing reports, and providing insights to support business decisions.",
    requirements: [
      "Bachelor's degree in Finance, Accounting, or related field",
      "2+ years of experience in financial analysis",
      "Proficiency in Excel and financial modeling",
      "Knowledge of financial reporting and analysis",
      "Strong analytical and problem-solving skills",
    ],
    responsibilities: [
      "Analyze financial data and prepare reports",
      "Develop financial models and forecasts",
      "Monitor and analyze budget variances",
      "Support the budgeting and planning process",
      "Provide financial insights to management",
    ],
    salary: "$80,000 - $100,000 per year",
    postedDate: "2025-03-10",
    deadline: "2025-04-20",
    contactEmail: "careers@capitalfinance.com",
    contactPhone: "(555) 345-6789",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "job4",
    title: "Human Resources Manager",
    company: "People First HR",
    location: "Remote",
    type: "Full-time",
    category: "Human Resources",
    description:
      "People First HR is looking for an experienced Human Resources Manager to oversee our HR operations. The ideal candidate will have a strong background in HR management, employee relations, and talent acquisition.",
    requirements: [
      "Bachelor's degree in Human Resources, Business Administration, or related field",
      "5+ years of experience in HR management",
      "Knowledge of HR best practices and employment laws",
      "Experience with HRIS and applicant tracking systems",
      "Strong leadership and communication skills",
    ],
    responsibilities: [
      "Oversee HR operations and ensure compliance with policies and regulations",
      "Manage recruitment and onboarding processes",
      "Develop and implement HR strategies and initiatives",
      "Address employee relations issues and concerns",
      "Collaborate with department managers on HR-related matters",
    ],
    salary: "$90,000 - $120,000 per year",
    postedDate: "2025-03-12",
    deadline: "2025-04-25",
    contactEmail: "careers@peoplefirsthr.com",
    contactPhone: "(555) 456-7890",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "job5",
    title: "Data Scientist",
    company: "Data Insights Analytics",
    location: "Boston, MA",
    type: "Full-time",
    category: "Technology",
    description:
      "Data Insights Analytics is seeking a skilled Data Scientist to join our team. You will be responsible for analyzing complex data sets, developing predictive models, and providing actionable insights to drive business decisions.",
    requirements: [
      "Master's degree in Data Science, Statistics, Computer Science, or related field",
      "3+ years of experience in data science or analytics",
      "Proficiency in Python, R, and SQL",
      "Experience with machine learning algorithms and statistical analysis",
      "Strong problem-solving and communication skills",
    ],
    responsibilities: [
      "Analyze large and complex data sets to extract insights",
      "Develop and implement machine learning models",
      "Create data visualizations and reports",
      "Collaborate with cross-functional teams to solve business problems",
      "Stay updated on the latest data science techniques and technologies",
    ],
    salary: "$130,000 - $160,000 per year",
    postedDate: "2025-03-15",
    deadline: "2025-04-30",
    contactEmail: "jobs@datainsights.com",
    contactPhone: "(555) 567-8901",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "job6",
    title: "Graphic Designer",
    company: "Creative Designs Studio",
    location: "Los Angeles, CA",
    type: "Full-time",
    category: "Creative",
    description:
      "Creative Designs Studio is looking for a talented Graphic Designer to create visually appealing designs for various media. The ideal candidate will have a strong portfolio demonstrating creativity, attention to detail, and proficiency in design software.",
    requirements: [
      "Bachelor's degree in Graphic Design, Visual Arts, or related field",
      "2+ years of experience in graphic design",
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
      "Strong portfolio showcasing design skills",
      "Knowledge of design principles and typography",
    ],
    responsibilities: [
      "Create visually appealing designs for print and digital media",
      "Develop brand identities and visual assets",
      "Collaborate with clients to understand design requirements",
      "Ensure designs meet brand guidelines and specifications",
      "Stay updated on design trends and techniques",
    ],
    salary: "$60,000 - $80,000 per year",
    postedDate: "2025-03-18",
    deadline: "2025-05-05",
    contactEmail: "careers@creativedesigns.com",
    contactPhone: "(555) 678-9012",
    image: "/placeholder.svg?height=300&width=500",
  },
]

