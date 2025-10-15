export interface LibraryLink {
  name: string;
  url: string;
}

export interface JournalCategory {
  category: string;
  journals: {
    name: string;
    url: string;
  }[];
}

export interface JournalResource {
  name: string;
  url: string;
}

export const libraryLinks: LibraryLink[] = [
  {
    name: "ASEAN Digital Library",
    url: "https://www.aseanlibrary.org/",
  },
  {
    name: "BCcampus",
    url: "https://bccampus.ca/?fbclid=IwAR2howKqQYAE1U88WtN8HNSvz7cZ4j-ZPaV5Vav3-jDuQVssLB_yczqvZBI",
  },
  {
    name: "CORE",
    url: "https://core.ac.uk/",
  },
  {
    name: "Directory of Open Access Books",
    url: "https://www.doabooks.org/?fbclid=IwAR3cYg7Y5aqfn1uht59tIXaToyNDEccEc97Uujq6yKjsWWEvR1j2sEfEfoI",
  },
  {
    name: "Directory of Open Access Journals (DOAJ)",
    url: "https://doaj.org/",
  },
  {
    name: "Ebooksz",
    url: "https://ebooksz.net/",
  },
  {
    name: "Encyclopedia",
    url: "https://www.encyclopedia.com/",
  },
  {
    name: "FreeBookCentre-Computer Books",
    url: "https://www.freebookcentre.net/CompuScience/compscCategory.html",
  },
  {
    name: "Business E-Books",
    url: "https://www.free-ebooks.net/business",
  },
  {
    name: "Criminology E-Books",
    url: "https://open.umn.edu/opentextbooks/textbooks?term=Criminology&commit=Go",
  },
  {
    name: "Computer E-Books",
    url: "https://freecomputerbooks.com/",
  },
  {
    name: "Economics E-Books",
    url: "https://www.freebookcentre.net/Business/Economics-Books.html",
  },
  {
    name: "Education E-Books",
    url: "https://open.umn.edu/opentextbooks/textbooks?term=Education&commit=Go",
  },
  {
    name: "Free Management E-Books",
    url: "http://www.free-management-ebooks.com/skills-coaching.htm",
  },
  {
    name: "Get Free Psychology E-Books",
    url: "https://www.getfreeebooks.com/27-sites-with-free-psychology-ebooks/",
  },
  {
    name: "JSTOR and Artstor",
    url: "https://about.jstor.org/oa-and-free/",
  },
  {
    name: "Library of Congress Digital Collections",
    url: "https://www.loc.gov/collections/?fbclid=IwAR0MGsJ6BQUXmPiBO_6ibJq7M1l6dCKCyAbnBW1SCJtbhtkAJjMxuSUiprc",
  },
  {
    name: "LibreCommons",
    url: "https://commons.libretexts.org/",
  },
  {
    name: "LibriVox – Free Public Domain Audiobooks",
    url: "https://librivox.org/",
  },
  {
    name: "Maryland Open Source Textbook (M.O.S.T.) Commons",
    url: "https://most.oercommons.org/search?f.search=Chemistry&f.general_subject=&f.sublevel=",
  },
  {
    name: "OAPEN Online Library and Publication Platform",
    url: "https://www.oapen.org/",
  },
  {
    name: "OASIS",
    url: "https://oasis.geneseo.edu/index.php?fbclid=IwAR1Z4u_5D0mWGA2EwRStDi9X5VHBvOfC82JuoDQ3ESIs_eRZdUn5-b_QmYI",
  },
  {
    name: "OER Commons",
    url: "https://www.oercommons.org/search?batch_size=20&sort_by=search&view_mode=summary&f.search=law&f.sublevel=college-upper-division&f.sublevel=community-college-lower-division&f.primary_user=student&f.primary_user=teacher&f.general_subject=law",
  },
  {
    name: "Open Education Global (OEG)",
    url: "http://open%20education%20global%20(oeg)/",
  },
  {
    name: "Open Library",
    url: "https://openlibrary.org/",
  },
  {
    name: "PDF Room",
    url: "https://pdfroom.com/",
  },
  {
    name: "OpenStax",
    url: "https://pdfroom.com/",
  },
  {
    name: "PDF Room",
    url: "https://openstax.org/?fbclid=IwAR1oZYB6FNNyPI7sbBI7Sd6BEAlXVA0QDHlouu5EGt1XNrJXM-ypKhBSBMY",
  },
  {
    name: "Open Research Library",
    url: "https://openresearchlibrary.org/",
  },
  {
    name: "Open Textbook Library-Social Sciences E-books",
    url: "https://open.umn.edu/opentextbooks/subjects/social-sciences",
  },
  {
    name: "Oxford Academic",
    url: "https://academic.oup.com/",
  },
  {
    name: "Project Gutenberg",
    url: "https://www.gutenberg.org/ebooks/search/?query=Natural+Science&submit_search=Go%21",
  },
  {
    name: "Springer Link",
    url: "https://link.springer.com/search?package=openaccess&facet-content-type=%22Book%22",
  },
  {
    name: "UNESDOC Digital Library",
    url: "https://unesdoc.unesco.org/",
  },
  {
    name: "World Bank Open Knowledge Repository",
    url: "https://openknowledge.worldbank.org/",
  },
  {
    name: "Zendy’s Online Library",
    url: "https://zendy.io/",
  },
];

export const libraryplatforms = [
  {
    name: "CvSU Integrated Library",
    link: "http://library.cvsu.edu.ph/landing/?view=campus&code=BACOORCITY",
  },
  {
    name: "Science Direct",
    link: "https://www.sciencedirect.com/",
  },
  {
    name: "Scopus",
    link: "https://www.scopus.com/home.uri",
  },
  {
    name: "TriTech Digital Media",
    link: "https://www.tdmebooks.com/",
  },
  {
    name: "CvSU Library iG Ebooks Platform",
    link: "https://portal.igpublish.com/iglibrary/?fbclid=IwAR2faJd9AboItj5czz2VpBQLpc_bZ_WUB6exVEs7wTL73Vab9CwBBxdQq4U",
  },
  {
    name: "CvSU Bacoor Campus Library OPAC",
    link: "https://cvsubccl.librarika.com/",
  },
  {
    name: "A Glance at CvSU Bacoor Campus Library",
    link: "https://www.youtube.com/watch?v=LG3kggGyPGo",
  },
  {
    name: "CvSU Online Library Tutorial Video",
    link: "https://www.facebook.com/cvsulibrary/videos/3678326855564842",
  },
  {
    name: "CvSU Bacoor Campus Library Website Tutorial",
    link: "https://www.youtube.com/watch?v=AMj0P1DKraQ&t=42s",
  },
  {
    name: "AACCUP 2nd Survey Visit 2022",
    link: "https://www.youtube.com/watch?v=xaRdCR6R4jw",
  },
  {
    name: "AACCUP 2nd Survey Visit 2021",
    link: "https://www.youtube.com/watch?v=Lo0IfEk3FUc",
  },
  {
    name: "CvSU-BCCL Compilation of Open Source Journals",
    link: "https://cvsubacoorcitycampuslibrary.wordpress.com/wp-content/uploads/2021/10/compilation-of-open-source-journalsa.pdf",
  },
];

export const filipinianalinks = [
  {
    name: "KWF Diksiyonaryo ng Wikang Filipino",
    link: "https://kwfdiksiyonaryo.ph/",
  },
  {
    name: "Bangko Sentral ng Pilipinas",
    link: "https://www.bsp.gov.ph/SitePages/Default.aspx",
  },
  {
    name: "HRep Secretariat Publications: Compendium of Laws and Executive Issuances",
    link: "https://cpbrd.congress.gov.ph/2012-06-30-13-06-51/hrep-secretariat-publications/compendium-of-laws-and-executive-issuances?fbclid=IwAR2q7CS7cSf3UX4x6OGzLoyk2a9jfalL6QamDZGA-DjP1Ve5cvI2WaefPrg",
  },
  {
    name: "Filipinas Heritage Library",
    link: "https://www.filipinaslibrary.org.ph/online-library/",
  },
  {
    name: "Freedom of Information",
    link: "https://www.foi.gov.ph/",
  },
  {
    name: "PCW Digital GAD Library",
    link: "https://library.pcw.gov.ph/",
  },
  {
    name: "Phil CHED Connect",
    link: "https://phlconnect.ched.gov.ph/home?fbclid=IwAR16VUBt21GGxesrztr4MvAWgUUuCE3Ra1sYbXxuY1SALUykKRErMdnCQik",
  },
  {
    name: "Philippine E-Book Hub",
    link: "https://ebookhub.ph/?fbclid=IwAR0M3RLr5r1Z_wsXUxnl99GjbAPGo0_rSiqdSDP-owDoCjntanoYCaPIPTk",
  },
  {
    name: "Philippine Journal of Science",
    link: "https://philjournalsci.dost.gov.ph/",
  },
];

export const journalCategories: JournalCategory[] = [
  {
    category: "Psychology",
    journals: [
      {
        name: "Archives of Scientific Psychology",
        url: "https://www.apa.org/pubs/journals/arc/",
      },
      { name: "ARETE", url: "https://ejournals.ph/issue.php?id=1121" },
      {
        name: "Europe’s Journal of Psychology",
        url: "https://ejop.psychopen.eu/index.php/ejop",
      },
      {
        name: "Frontiers in Psychology",
        url: "https://www.frontiersin.org/journals/psychology#about",
      },
      {
        name: "Philippine E-Journal",
        url: "https://ejournals.ph/issue.php?id=376",
      },
      {
        name: "The Open Psychology Journal",
        url: "https://www.benthamopen.com/TOPSYJ/",
      },
      {
        name: "The Philippine Journal of Psychology (PJP)",
        url: "https://www.pap.ph/pjp",
      },
    ],
  },
  {
    category: "Information Technology / Computer Science",
    journals: [
      {
        name: "Applied Network Science",
        url: "https://appliednetsci.springeropen.com/",
      },
      { name: "Cybersecurity", url: "https://cybersecurity.springeropen.com/" },
      {
        name: "EPJ Data Science",
        url: "https://epjdatascience.springeropen.com/",
      },
      { name: "ICT Express", url: "https://epjdatascience.springeropen.com/" },
      {
        name: "Journal of Big Data",
        url: "https://journalofbigdata.springeropen.com/",
      },
      {
        name: "Journal of Cloud Computing",
        url: "https://journalofcloudcomputing.springeropen.com/",
      },
      {
        name: "Journal of Computer Engineering & Information Technology",
        url: "https://www.scitechnol.com/peer-review/artificial-intelligence-with-quantum-computing-bAEr.php?article_id=12818",
      },
      {
        name: "Journal of Internet Services and Applications (JISA)",
        url: "https://jisajournal.springeropen.com/",
      },
      {
        name: "Journal of Information Technology",
        url: "https://journals.sagepub.com/description/jin",
      },
      {
        name: "Open Access E-Resources – Journals – Computer Sciences",
        url: "https://library.apiit.edu.my/open-access-e-resources-journals-computer-sciences/",
      },
      {
        name: "Philippine E-Journals",
        url: "https://ejournals.ph/search.php?%20searchStr=Information+Technology#journal",
      },
    ],
  },
  {
    category: "Hotel Management",
    journals: [
      {
        name: "Arabian Journal of Business and Management Review",
        url: "https://www.hilarispublisher.com/arabian-journal-business-management-review.html",
      },
      {
        name: "International Journal of Hospitality Management",
        url: "https://www.journals.elsevier.com/international-journal-of-hospitality-management",
      },
      {
        name: "Journal of Hotel and Business Management",
        url: "https://www.longdom.org/peer-reviewed-journals/hotel-management-journals-list-1321.html",
      },
      {
        name: "Journal of Hospitality Management and Tourism",
        url: "https://academicjournals.org/journal/JHMT",
      },
      {
        name: "Journal of Hospitality & Tourism Research",
        url: "https://journals.sagepub.com/loi/jhtd",
      },
      {
        name: "Tourism Management",
        url: "https://www.sciencedirect.com/journal/tourism-management",
      },
    ],
  },
  {
    category: "Business Management",
    journals: [
      {
        name: "Business & Society",
        url: "https://journals.sagepub.com/home/bas",
      },
      {
        name: "Journal of Business Research",
        url: "https://www.journals.elsevier.com/journal-of-business-research",
      },
      {
        name: "Journal of International Business Studies",
        url: "https://www.palgrave.com/gp/journal/41267",
      },
      {
        name: "Journal of Management",
        url: "https://journals.sagepub.com/home/jom",
      },
      {
        name: "Journal of Management Studies",
        url: "https://onlinelibrary.wiley.com/journal/14676486",
      },
      {
        name: "Journal of Small Business Management",
        url: "https://www.tandfonline.com/toc/ujbm20/current",
      },
      {
        name: "Management Journals List of Philippines",
        url: "https://www.openacessjournal.com/country-journals/philippines/list-of-management-journals",
      },
      {
        name: "Production and Operations Management",
        url: "https://onlinelibrary.wiley.com/journal/19375956",
      },
      {
        name: "Economic",
        url: "http://www.sciencepublishinggroup.com/journal/index?journalid=177",
      },
    ],
  },
  {
    category: "Education",
    journals: [
      {
        name: "Education Sciences",
        url: "https://www.mdpi.com/journal/education",
      },
      {
        name: "Educational Studies in Mathematics: An International Journal",
        url: "https://www.springer.com/journal/10649/",
      },
      {
        name: "International Electronic Journal of Mathematics Education",
        url: "https://www.iejme.com/",
      },
      {
        name: "International Journal of Education in Mathematics, Science and Technology",
        url: "https://www.ijemst.net/index.php/ijemst/index",
      },
      {
        name: "International Journal of Education Research for Higher Learning",
        url: "https://ejournals.ph/issue.php?id=1103",
      },
      {
        name: "Journal of Teacher Education",
        url: "https://journals.sagepub.com/home/jte",
      },
      {
        name: "Open Education Studies",
        url: "https://www.degruyter.com/journal/key/EDU/html",
      },
      {
        name: "Philippine Innovative Education Journal (PIEJ)",
        url: "https://cpsujournals.com/?journal=piej",
      },
      {
        name: "Teaching and Teacher Education Open Access Articles",
        url: "https://www.journals.elsevier.com/teaching-and-teacher-education",
      },
      {
        name: "The Journal of Educational Research",
        url: "https://www.tandfonline.com/toc/vjer20/current",
      },
    ],
  },
  {
    category: "Criminology",
    journals: [
      {
        name: "Crime Science",
        url: "https://crimesciencejournal.biomedcentral.com/",
      },
      {
        name: "Health & Justice",
        url: "https://healthandjusticejournal.biomedcentral.com/",
      },
      {
        name: "Journal of Criminal Justice",
        url: "https://www.sciencedirect.com/journal/journal-of-criminal-justice/vol/30/issue/6",
      },
      {
        name: "Journal of International Humanitarian Action",
        url: "https://jhumanitarianaction.springeropen.com/",
      },
      {
        name: "International Journal for Crime, Justice and Social Democracy",
        url: "https://www.crimejusticejournal.com/",
      },
      {
        name: "International Journal on Criminology",
        url: "https://www.sciencedirect.com/journal/journal-of-criminal-justice",
      },
      {
        name: "Journal of Criminal Justice",
        url: "https://www.sciencedirect.com/journal/journal-of-criminal-justice",
      },
      {
        name: "Research and Publications Criminology and Criminal Justice",
        url: "https://cola.siu.edu/ccj/faculty-staff/research-and-publications/",
      },
      {
        name: "SMCC Higher Education Research Journal (Criminal Justice)",
        url: "https://ejournals.ph/issue.php?id=1177",
      },
      {
        name: "Sociology and Criminology - Open Access",
        url: "https://www.longdom.org/sociology-and-criminology/current-issue.html",
      },
    ],
  },
];

export const oerData: JournalResource[] = [
  {
    name: "Daluyan: Journal ng Wikang Filipino",
    url: "https://journals.upd.edu.ph/index.php/djwf",
  },
  {
    name: "Journal of English Studies and Comparative Literature",
    url: "https://journals.upd.edu.ph/index.php/jescl",
  },
  {
    name: "Kasarinlan: Philippine Journal of Third World Studies",
    url: "https://journals.upd.edu.ph/index.php/kasarinlan/index",
  },
  {
    name: "Likhaan: The Journal of Contemporary Philippine Literature",
    url: "https://www.journals.upd.edu.ph/index.php/lik",
  },
  {
    name: "Philippine E-Journals (PEJ)",
    url: "https://ejournals.ph/",
  },
  {
    name: "Philippine eLib",
    url: "http://www.elib.gov.ph/",
  },
  {
    name: "Philippine Geographic Journal",
    url: "https://phgeographicalsociety.org/contact-us/",
  },
  {
    name: "Philippine Review of Economics",
    url: "https://pre.econ.upd.edu.ph/index.php/pre",
  },
  {
    name: "PISIKA – Samahang Pisika ng Pilipinas (SPP)",
    url: "https://paperview.spp-online.org/pisika",
  },
  {
    name: "The Index to Philippine Newspapers (IPN)",
    url: "https://periodicals.upd.edu.ph/",
  },
  {
    name: "The Official Gazette is the official journal of the Republic of the Philippines",
    url: "https://www.officialgazette.gov.ph/",
  },
];

export const newspaperlinksData = [
  {
    name: "Manila Bulletin",
    url: "https://mb.com.ph/",
  },
  {
    name: "Philippine Daily Inquirer",
    url: "https://www.inquirer.net/",
  },
  {
    name: "The Philippine Star",
    url: "https://www.philstar.com/",
  },
  {
    name: "Business World",
    url: "https://www.bworldonline.com/",
  },
];

export const acquiredBooksData = [
  {
    name: "New Acquired EBooks July 2022",
    url: "https://cvsubacoorcitycampuslibrary.wordpress.com/wp-content/uploads/2022/09/purchased-library-ebooks-tritech.pdf",
  },
  {
    name: "New Acquired EBooks March 2022",
    url: "https://cvsubacoorcitycampuslibrary.wordpress.com/wp-content/uploads/2022/09/purchased-library-ebooks-tritech-march-2022.pdf",
  },
  {
    name: "The Philippine Journal of Third World Studies",
    url: "https://journals.upd.edu.ph/index.php/kasarinlan/index",
  },
  {
    name: "Newly Acquired Ebooks as of March 2022-6",
    url: "https://cvsubacoorcitycampuslibrary.wordpress.com/wp-content/uploads/2022/04/newly-acquired-ebooks-as-of-march-2022-6.pdf",
  },
];

export const otherlinksData = [
  {
    name: "List of Theses: Click this link to view:",
    url: " https://bit.ly/Lib_Theses_List",
  },
  {
    name: "Curated List of Open Access Databases",
    url: "https://www.longdom.org/sociology-and-criminology/current-issue.html",
  },
  {
    name: "Open Source eBook’s Links",
    url: "https://journals.upd.edu.ph/index.php/kasarinlan/index",
  },
  {
    name: "Open Access Ebooks",
    url: "https://journals.upd.edu.ph/index.php/kasarinlan/index",
  },
];

export const formsData = [
  {
    name: "Request for E-Resources Password",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfVLKwvfpY4ScN4VBT5QVaJJjcD_PdktY7999P1HN7sZJG8Xw/viewform",
  },
  {
    name: "Request for Thesis Abstract",
    url: "https://docs.google.com/forms/d/e/1FAIpQLScEq8WjUI1QhhcMTeIbKaoayKwcNd99thFxOYEeRUKXmmaGCg/viewform",
  },
  {
    name: "Request for Borrowing of Books",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfm9uHp1b58918lYL0G9vte0YWhMoBJlPjWgUKWnw7bVOQLjA/viewform",
  },
  {
    name: "Request for On-Site Library Use",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeThd6TRBrtlWPxpXKvvX2vYsBFppTgXv8xWTY_luGBHAw1gw/viewform",
  },
  {
    name: "Library Clientele Satisfaction Survey",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfaF06opgDXtBTGM8mkcl1eaxNStf5wt2zc9vo6xPsfrbgZeg/viewform?fbclid=IwAR1O7PteJNqkk4ljO0NzzcQgSOZzRrca4zSvvhLOZN8M0cNcfSdPHEL8Pd8",
  },
  {
    name: "Online Manuscript/Thesis Submission",
    url: "https://bit.ly/40ouFtz",
  },
];
