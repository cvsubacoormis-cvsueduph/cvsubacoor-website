export type NavSection = {
  id: string,
  label: string,
  links: NavLink[],
};

export type NavLink = {
  id?: string;
  label: string;
  href?: string;
  external?: boolean;
  children?: NavLink[];
};

export const NAV_SECTIONS: NavSection[] = [
  {
    id: "about",
    label: "About Us",
    links: [
      {
        id: "about-university",
        label: "The University",
        children: [
          { label: "History", href: "/about/university/history" },
          {
            label: "Mission, Vision and Objectives",
            href: "/about/university/mission-vision",
          },
          { label: "University Seal", href: "/about/university/seal" },
          { label: "University Hymn", href: "/about/university/hymn" },
        ],
      },
      { label: "Campus History", href: "/about/campus-history" },
      { label: "Campus Officials", href: "/about/campus-officials" },
      { label: "Offices", href: "/about/offices" },
      { label: "Faculty and Staffs", href: "/about/faculty-staff" },
      { label: "Campus Map", href: "/about/campus-map" },
      { label: "Careers", href: "/about/careers" },
      { label: "Citizens Charter", href: "/about/citizens-charter" },
    ],
  },
  {
    id: "admission",
    label: "Admission",
    links: [
      {
        label: "Requirements and Procedures",
        href: "/admission/requirements-procedures",
      },
      {
        label: "Academic Programs",
        href: "/admission/academic-programs",
      },
      {
        label: "Admission Portal",
        href: "https://admission.cvsu.edu.ph/",
        external: true,
      },
    ],
  },
  {
    id: "academics",
    label: "Academics",
    links: [
      { label: "Departments", href: "/academics/departments" },
      { label: "Library Services", href: "/academics/library-services" },
      { label: "Academic Calendar", href: "/academics/academic-calendar" },
    ],
  },
  {
    id: "research",
    label: "Research",
    links: [
      {
        label: "Research and Development",
        href: "/research/research-development",
      },
      {
        label: "Extension Services",
        href: "/research/extension-services",
      },
    ],
  },
  {
    id: "students",
    label: "Students",
    links: [
      {
        label: "Student Organizations",
        href: "/students/student-organizations",
      },
      { label: "Job Placement", href: "/students/job-placement" },
      {
        label: "Student Portal",
        href: "https://studentportal.cvsu-bacoor.com/",
        external: true,
      },
    ],
  },
  {
    id: "services",
    label: "Services",
    links: [
      {
        label: "Student Portal",
        href: "https://studentportal.cvsu-bacoor.com/",
        external: true,
      },
      {
        label: "Integrated Library System",
        href: "https://library.cvsu.edu.ph/landing/?view=campus&code=BACOORCITY",
        external: true,
      },
      {
        label: "Open Distance eLearning",
        href: "https://elearning.cvsu.edu.ph/",
        external: true,
      },
      {
        label: "Downloadable Forms",
        href: "/services/downloadable-forms",
      },
    ],
  },
];
