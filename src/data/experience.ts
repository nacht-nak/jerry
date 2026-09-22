export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Work' | 'Freelance' | 'Leadership';
  description: string;
  responsibilities: string[];
  technologies: string[];
  current?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  focus: string;
  honors?: string;
  highlights: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'paid-search-analyst',
    role: 'Paid Search Analyst',
    company: 'PropertyManagersWebsite',
    location: 'Estero, FL, USA (Remote)',
    period: '2023 – Present',
    type: 'Work',
    current: true,
    description: 'Leading end-to-end paid advertising, SEO content publishing, analytics tracking, and conversion optimization for US property management clients.',
    responsibilities: [
      'Engineered and scaled targeted search and remarketing ad campaigns across Google Ads and Bing Ads.',
      'Configured and maintained Google Tag Manager (GTM), Google Analytics 4 (GA4), CallRail call tracking, Google Search Console, Yext, and Gradeus.',
      'Designed, customized, and published high-converting landing pages tailored for property management lead acquisition.',
      'Authored and published industry-relevant blog posts and directed social media account management and scheduled posting.',
      'Synthesized monthly performance dashboards and detailed KPI reports for executive stakeholders.'
    ],
    technologies: ['Google Ads', 'Bing Ads', 'GA4', 'Google Tag Manager', 'CallRail', 'Search Console', 'Yext', 'Landing Pages']
  },
  {
    id: 'junior-data-analyst',
    role: 'Junior Data Analyst',
    company: 'CPSU Mushroom Farm',
    location: 'Hinoba-an, Negros Occidental',
    period: '2022 – 2023',
    type: 'Work',
    description: 'Spearheaded agricultural product data processing, market trend identification, and performance dashboard creation to drive sales and operational decisions.',
    responsibilities: [
      'Cleaned, normalized, and analyzed complex commercial sales datasets using Excel and SQL queries.',
      'Identified cyclical buying patterns to forecast high-demand regional markets on a month-by-month basis.',
      'Built automated tracking dashboards and pivot reports for operational and farm management teams.',
      'Delivered data-driven strategic recommendations to optimize harvest volume, reduce spoilage, and enhance product quality.',
      'Formulated and presented monthly analytics and revenue variance reports.'
    ],
    technologies: ['SQL', 'Excel', 'Pivot Tables', 'Data Cleaning', 'Statistical Analysis', 'Dashboards', 'Forecasting']
  },
  {
    id: 'junior-frontend-dev',
    role: 'Junior Front-end Web Developer',
    company: 'The Bina School | INTRICITY (NYC) | Zeller (Melbourne)',
    location: 'Remote / Internship & Freelance',
    period: '2021 – 2022',
    type: 'Freelance',
    description: 'Collaborated with international teams across the US, Australia, and Europe on responsive web pages, HubSpot CMS components, and brand visual assets.',
    responsibilities: [
      'Translated wireframes and high-fidelity Figma designs into responsive, accessible web pages.',
      'Built and maintained reusable modules, email templates, and landing pages inside HubSpot CMS.',
      'Updated website content, published marketing assets, and performed image editing using Canva.',
      'Ensured cross-browser compatibility and optimized page layout load speeds for diverse global traffic.'
    ],
    technologies: ['Figma', 'HubSpot CMS', 'Canva', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Web']
  },
  {
    id: 'tier-2-customer-service',
    role: 'Tier 2 Customer Service & Sales Representative',
    company: 'PanAsiatic Solutions',
    location: 'Bacolod City, Philippines',
    period: '2017 – 2018',
    type: 'Work',
    description: 'Delivered high-tier customer advocacy, technical troubleshooting, dispute mediation, and sales conversion for leading US telecommunications carriers.',
    responsibilities: [
      'Handled Tier 2 escalations, supervisor calls, complex billing disputes, and refund authorizations.',
      'Supported major telecom accounts including Verizon, AT&T, Tracfone Wireless, and Straight Talk Wireless.',
      'Maintained exceptional First Call Resolution (FCR) and Customer Satisfaction (CSAT) metrics.',
      'Coordinated with Workforce Management (WFM) to optimize queue handle times and team productivity.'
    ],
    technologies: ['Tier 2 Support', 'Dispute Handling', 'Supervisor Calls', 'Refund Processing', 'WFM', 'Telecom CRM']
  }
];

export const educationData: EducationItem[] = [
  {
    id: 'cert-data-analyst',
    degree: 'Certified Data Analyst',
    institution: 'Refocus Digital Academy',
    period: '2023',
    focus: 'Data Analytics, SQL Querying, Advanced Excel, Data Visualization & Statistical Modeling',
    honors: 'Professional Certification Completed',
    highlights: [
      'Mastered relational database manipulation using SQL to extract actionable business insights',
      'Advanced Excel modeling, automated pivot tables, and commercial statistical analysis',
      'End-to-end data pipeline cleaning, data transformation, and executive visual reporting'
    ]
  },
  {
    id: 'bs-agribusiness',
    degree: 'Bachelor of Science in Agribusiness',
    institution: 'Central Philippines State University (CPSU)',
    period: 'Graduated 2021',
    focus: 'Enterprise Management, Agricultural Economics, Supply Chain Operations & Market Analysis',
    honors: 'Bachelor Graduate',
    highlights: [
      'Comprehensive study of commercial supply chain management, economic forecasting, and business modeling',
      'Applied quantitative data analysis to real-world agricultural distribution and farm operations'
    ]
  },
  {
    id: 'bs-it',
    degree: 'BS Information Technology (Undergraduate Studies)',
    institution: 'Central Philippines State University (CPSU)',
    period: '2014',
    focus: 'Foundations of Computer Science, Software Programming, Web Systems & Database Concepts',
    highlights: [
      'Completed foundational coursework in computer programming, database principles, and system logic',
      'Provided the technical bedrock for modern front-end web development, CMS design, and SQL querying'
    ]
  }
];
