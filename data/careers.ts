export interface Career {
  id: number;
  title: string;
  department: string;
  type: string;
  location: string;
  posted: string;
  deadline: string;
  description: string;
}

export const careersData: Career[] = [
  {
    id: 1,
    title: "Assistant Professor of Computer Science",
    department: "Department of Computer Science",
    type: "Faculty",
    location: "Main Campus",
    posted: "March 10, 2025",
    deadline: "April 30, 2025",
    description:
      "The Department of Computer Science invites applications for a tenure-track position at the Assistant Professor level. The successful candidate will teach undergraduate and graduate courses, conduct research, and participate in departmental and university service.",
  },
  {
    id: 2,
    title: "Student Affairs Coordinator",
    department: "Office of Student Life",
    type: "Administrative",
    location: "Main Campus",
    posted: "March 8, 2025",
    deadline: "March 31, 2025",
    description:
      "The Office of Student Life seeks a Student Affairs Coordinator to develop and implement programs that enhance student engagement, leadership development, and campus community. The position involves advising student organizations and coordinating campus events.",
  },
  {
    id: 3,
    title: "Research Scientist",
    department: "Center for Environmental Studies",
    type: "Research",
    location: "Research Park",
    posted: "March 5, 2025",
    deadline: "April 15, 2025",
    description:
      "The Center for Environmental Studies is seeking a Research Scientist to conduct research on climate change impacts on regional ecosystems. The position involves field work, data analysis, grant writing, and publication in peer-reviewed journals.",
  },
  {
    id: 4,
    title: "IT Support Specialist",
    department: "Information Technology Services",
    type: "Technical",
    location: "Main Campus",
    posted: "March 3, 2025",
    deadline: "March 24, 2025",
    description:
      "Information Technology Services is looking for an IT Support Specialist to provide technical support to faculty, staff, and students. Responsibilities include troubleshooting hardware and software issues, maintaining computer labs, and assisting with technology implementations.",
  },
 
];
