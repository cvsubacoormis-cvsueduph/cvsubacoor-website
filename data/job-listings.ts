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

export const jobListings: JobListing[] = [];
