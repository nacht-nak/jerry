export interface Skill {
  name: string;
  category: 'Social Media' | 'Paid Search' | 'Analytics' | 'Data & SQL' | 'Web & Design' | 'Customer Support';
  proficiency: number; // 0 to 100
  level: 'Advanced' | 'Proficient' | 'Experienced';
  experienceYears: string;
  iconName: string;
  description: string;
}

export const skillsData: Skill[] = [
  // Social Media
  {
    name: 'Social Media Management',
    category: 'Social Media',
    proficiency: 95,
    level: 'Advanced',
    experienceYears: '2+ yrs',
    iconName: 'Share2',
    description: 'End-to-end account management, content scheduling, audience growth, and multi-platform presence'
  },
  {
    name: 'Content Curation & Creation',
    category: 'Social Media',
    proficiency: 92,
    level: 'Advanced',
    experienceYears: '2+ yrs',
    iconName: 'Sparkles',
    description: 'Crafting engaging social media copy, visual carousels, and high-impact branded graphics'
  },
  {
    name: 'Short-Form Video & Reels',
    category: 'Social Media',
<<<<<<< HEAD
    proficiency: 98,
=======
    proficiency: 90,
>>>>>>> 884248561d217239184c3d1f04129fcab9aa5c17
    level: 'Advanced',
    experienceYears: '2+ yrs',
    iconName: 'Video',
    description: 'Facebook Reels and short-form video editing with viral pacing, captions, and trendy audio'
  },
  {
    name: 'Social Media Outreach & Engagement',
    category: 'Social Media',
    proficiency: 92,
    level: 'Advanced',
    experienceYears: '2+ yrs',
    iconName: 'Megaphone',
    description: 'Community moderation, active comments response, organic DM outreach, and brand loyalty cultivation'
  },
  {
    name: 'Brand Awareness & Positioning',
    category: 'Social Media',
    proficiency: 88,
    level: 'Proficient',
    experienceYears: '2+ yrs',
    iconName: 'Palette',
    description: 'Establishing brand identity, visual guidelines, tone of voice, and consistent market recognition'
  },

  // Paid Search
  {
    name: 'Google Ads Campaigns',
    category: 'Paid Search',
<<<<<<< HEAD
    proficiency: 98,
=======
    proficiency: 90,
>>>>>>> 884248561d217239184c3d1f04129fcab9aa5c17
    level: 'Advanced',
    experienceYears: '2+ yrs',
    iconName: 'Zap',
    description: 'Building high-intent Google Search, Display, and Performance Max campaigns that drive qualified leads'
  },
  {
    name: 'Bing Ads & Microsoft Advertising',
    category: 'Paid Search',
<<<<<<< HEAD
    proficiency: 92,
    level: 'Advanced',
=======
    proficiency: 86,
    level: 'Proficient',
>>>>>>> 884248561d217239184c3d1f04129fcab9aa5c17
    experienceYears: '2+ yrs',
    iconName: 'Search',
    description: 'Configuring Bing search network campaigns, keyword bidding strategies, and audience demographic targeting'
  },
  {
    name: 'Remarketing & Retargeting Ads',
    category: 'Paid Search',
<<<<<<< HEAD
    proficiency: 95,
=======
    proficiency: 88,
>>>>>>> 884248561d217239184c3d1f04129fcab9aa5c17
    level: 'Advanced',
    experienceYears: '2+ yrs',
    iconName: 'Layers',
    description: 'Re-engaging website visitors and abandoned prospects to maximize advertising return on ad spend (ROAS)'
  },
  {
    name: 'Landing Page Lead Optimization',
    category: 'Paid Search',
<<<<<<< HEAD
    proficiency: 95,
=======
    proficiency: 90,
>>>>>>> 884248561d217239184c3d1f04129fcab9aa5c17
    level: 'Advanced',
    experienceYears: '2+ yrs',
    iconName: 'Layout',
    description: 'Structuring headline hooks, clear CTAs, form placements, and A/B test variations to boost conversion rates'
  },

  // Analytics
  {
    name: 'Google Analytics 4 (GA4)',
    category: 'Analytics',
    proficiency: 92,
    level: 'Advanced',
    experienceYears: '2+ yrs',
    iconName: 'BarChart3',
    description: 'Setting up GA4 properties, custom event streams, conversion funnels, and user path exploration'
  },
  {
    name: 'Google Tag Manager (GTM)',
    category: 'Analytics',
    proficiency: 90,
    level: 'Advanced',
    experienceYears: '2+ yrs',
    iconName: 'Terminal',
    description: 'Deploying custom tags, triggers, data layer variables, click trackers, and form submission listeners'
  },
  {
    name: 'CallRail & Conversion Tracking',
    category: 'Analytics',
    proficiency: 88,
    level: 'Proficient',
    experienceYears: '2+ yrs',
    iconName: 'PhoneCall',
    description: 'Dynamic number insertion, inbound call tracking, lead source attribution, and recording analysis'
  },
  {
    name: 'Google Search Console, Yext & Gradeus',
    category: 'Analytics',
    proficiency: 85,
    level: 'Proficient',
    experienceYears: '2+ yrs',
    iconName: 'SearchCheck',
    description: 'Monitoring search indexation, organic clicks, local citations, and website performance grading'
  },

  // Data & SQL
  {
    name: 'SQL Querying',
    category: 'Data & SQL',
    proficiency: 88,
    level: 'Advanced',
    experienceYears: '2+ yrs',
    iconName: 'Database',
    description: 'Writing complex SELECT queries, joins, aggregations, and filtering data directly from relational databases'
  },
  {
    name: 'Microsoft Excel (Pivot Tables & Formulas)',
    category: 'Data & SQL',
    proficiency: 94,
    level: 'Advanced',
    experienceYears: '3+ yrs',
    iconName: 'Table',
    description: 'Advanced pivot tables, VLOOKUP/XLOOKUP, conditional calculations, data cleansing, and trend analysis'
  },
  {
    name: 'Statistical Analysis & Reporting',
    category: 'Data & SQL',
    proficiency: 86,
    level: 'Proficient',
    experienceYears: '2+ yrs',
    iconName: 'FileSpreadsheet',
    description: 'Conducting statistical evaluations, month-over-month comparisons, and predictive market forecasting'
  },
  {
    name: 'Interactive Business Dashboards',
    category: 'Data & SQL',
    proficiency: 90,
    level: 'Advanced',
    experienceYears: '2+ yrs',
    iconName: 'LineChart',
    description: 'Transforming raw tabular figures into clear, visual executive dashboards with key performance indicators'
  },

  // Web & Design
  {
    name: 'Canva Graphic & Layout Design',
    category: 'Web & Design',
    proficiency: 95,
    level: 'Advanced',
    experienceYears: '3+ yrs',
    iconName: 'Palette',
    description: 'Creating professional brand assets, marketing banners, infographics, social carousels, and promos'
  },
  {
    name: 'Figma to Web Implementation',
    category: 'Web & Design',
    proficiency: 86,
    level: 'Proficient',
    experienceYears: '2+ yrs',
    iconName: 'FileCode2',
    description: 'Translating design mockups into functional, clean, and responsive web components'
  },
  {
    name: 'HubSpot CMS & Modules',
    category: 'Web & Design',
    proficiency: 85,
    level: 'Proficient',
    experienceYears: '2+ yrs',
    iconName: 'Boxes',
    description: 'Building custom HubSpot landing pages, modular content blocks, and automated email layouts'
  },
  {
    name: 'Front-end Web Development (HTML/CSS/JS)',
    category: 'Web & Design',
    proficiency: 85,
    level: 'Proficient',
    experienceYears: '2+ yrs',
    iconName: 'Code2',
    description: 'Semantic HTML5 markup, responsive CSS3 styling, and JavaScript logic for web interfaces'
  },

  // Customer Support & VA
  {
    name: 'Tier 2 Customer Support & Dispute Handling',
    category: 'Customer Support',
    proficiency: 94,
    level: 'Advanced',
    experienceYears: '3+ yrs',
    iconName: 'Headset',
    description: 'Expert customer conflict resolution, supervisor escalations, refund evaluations, and customer retention'
  },
  {
    name: 'Email, Chat & Ticket Management',
    category: 'Customer Support',
    proficiency: 92,
    level: 'Advanced',
    experienceYears: '3+ yrs',
    iconName: 'MessageSquare',
    description: 'Rapid omnichannel customer support, professional written communication, and CRM ticket workflows'
  },
  {
    name: 'Stakeholder Communication & Time Management',
    category: 'Customer Support',
    proficiency: 92,
    level: 'Advanced',
    experienceYears: '3+ yrs',
    iconName: 'UserCheck',
    description: 'Communicating with business owners and cross-functional teams to deliver timely and accurate information'
  }
];

export const skillCategories = [
  'Social Media',
  'Paid Search',
  'Analytics',
  'Data & SQL',
  'Web & Design',
  'Customer Support'
] as const;

export type SkillCategory = typeof skillCategories[number];
