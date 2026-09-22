export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  category: 'Social Media' | 'Paid Ads & PPC' | 'Analytics & GTM' | 'Landing Pages' | 'Data & SQL';
  tags: string[];
  image: string;
  fallbackGradient: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  highlight?: string;
}

export const projectCategories = [
  'All',
  'Social Media',
  'Paid Ads & PPC',
  'Analytics & GTM',
  'Landing Pages',
  'Data & SQL'
] as const;

export type ProjectCategory = typeof projectCategories[number];

export const projectsData: Project[] = [
  {
    id: 'social-media-designs',
    title: 'Social Media Creative & Brand Designs',
    subtitle: 'High-Engagement Visuals, Post Carousels & Brand Identity',
    description: 'A curated showcase of commercial social media graphic designs created for multi-channel brand campaigns, product promotions, and audience engagement.',
    fullDescription: 'Visual content is the cornerstone of social media success. These design samples demonstrate brand storytelling, color harmony, typography hierarchy, and attention-grabbing layouts tailored for Instagram, Facebook, and LinkedIn. Each graphic is designed to stop the scroll, reinforce brand identity, and drive organic likes, shares, and clicks.',
    features: [
      'Crafted using Canva and modern design tools with rigorous brand consistency',
      'Multi-format layouts tailored for 1:1 feed posts, stories, and promo banners',
      'High-contrast visual hierarchy optimized for mobile feed consumption',
      'Direct commercial samples from Jerry Valera’s official social media portfolio',
      'Cohesive color palettes and modern graphic elements that elevate brand prestige'
    ],
    technologies: ['Canva', 'Social Media Management', 'Graphic Design', 'Brand Strategy', 'Content Curation'],
    category: 'Social Media',
    tags: ['Social Media', 'Canva', 'Branding', 'Content Creation', 'Visual Design'],
    image: '/portfolio_assets/social-design-1.jpg',
    fallbackGradient: 'from-cyan-900/60 via-slate-900 to-blue-950/80',
    liveUrl: '/Jerry_Valera_Portfolio.pdf',
    featured: true,
    highlight: 'Official Portfolio Sample'
  },
  {
    id: 'facebook-reels-video',
    title: 'Facebook Reels & Short-Form Video Production',
    subtitle: 'Viral Pacing, Motion Captions & Engaging Social Video Content',
    description: 'Dynamic short-form video editing for Facebook Reels and mobile audiences, engineered to maximize watch time, reach, and user engagement.',
    fullDescription: 'Short-form video is the highest-reach format across modern social algorithms. This portfolio project highlights video curation and editing techniques for Facebook Reels. By combining compelling 3-second hooks, dynamic pacing, synchronized sound effects, and clean on-screen captions, these videos drive higher completion rates and organic algorithm distribution.',
    features: [
      'Engineered for maximum 3-second hook retention and full-watch duration',
      'Integrated dynamic animated captions and subtitles for sound-off viewers',
      'Carefully selected trending audio cues and sound design synchronization',
      'Compelling on-screen call-to-actions directing viewers to follow and convert',
      'Optimized 9:16 aspect ratio suitable for Facebook Reels, IG Reels, and TikTok'
    ],
    technologies: ['Facebook Reels', 'Short-form Video', 'CapCut / Canva', 'Content Strategy', 'Social Video'],
    category: 'Social Media',
    tags: ['Facebook Reels', 'Video Editing', 'Short-form', 'Social Media', 'Content Creation'],
    image: '/portfolio_assets/social-design-3.png',
    fallbackGradient: 'from-amber-950/60 via-slate-900 to-indigo-950/80',
    liveUrl: '/Jerry_Valera_Portfolio.pdf',
    featured: true,
    highlight: 'Viral Video Content'
  },
  {
    id: 'paid-search-ppc',
    title: 'PropertyManagersWebsite PPC & Lead Acquisition',
    subtitle: 'Google & Bing Ads Campaign Architecture for US Real Estate',
    description: 'Managed search and remarketing ad campaigns for PropertyManagersWebsite (Florida, US), capturing high-intent commercial and residential client leads.',
    fullDescription: 'As a Paid Search Analyst, I architected and optimized paid acquisition funnels across Google Ads and Microsoft/Bing Advertising. The engagement involved meticulous negative keyword mining, landing page conversion rate optimization, remarketing audiences, and budget allocation to ensure maximum return on ad spend (ROAS).',
    features: [
      'Built targeted search campaigns targeting property management decision makers',
      'Deployed strategic remarketing funnels to re-engage site visitors and abandoned prospects',
      'Expanded reach via Bing Ads network capturing high-intent desktop enterprise users',
      'Continuous A/B testing of ad headlines, descriptions, and sitelink extensions',
      'Maintained low cost-per-lead (CPL) while scaling monthly qualified lead volume'
    ],
    technologies: ['Google Ads', 'Bing Ads', 'PPC Management', 'Remarketing', 'A/B Testing', 'Lead Generation'],
    category: 'Paid Ads & PPC',
    tags: ['Google Ads', 'Bing Ads', 'PPC', 'Remarketing', 'Paid Search', 'Lead Generation'],
    image: '/portfolio_assets/social-design-banner.png',
    fallbackGradient: 'from-indigo-950/60 via-slate-900 to-purple-950/80',
    liveUrl: 'https://propertymanagerswebsite.com',
    featured: true,
    highlight: 'US Client Ad Campaign'
  },
  {
    id: 'analytics-gtm-tracking',
    title: 'End-to-End Analytics & CallRail Attribution',
    subtitle: 'Flawless Lead Tracking with GTM, GA4, CallRail & Search Console',
    description: 'Complete web tracking and analytics ecosystem deployment ensuring every telephone call, form submission, and click is accurately attributed.',
    fullDescription: 'Accurate data is the backbone of profitable marketing. In this project, I configured and audited an omnichannel tracking pipeline using Google Tag Manager and Google Analytics 4. Implementing CallRail Dynamic Number Insertion (DNI) enabled telephone calls to be attributed directly to the specific ad campaign and keyword that produced them.',
    features: [
      'Comprehensive Google Tag Manager (GTM) deployment with custom event triggers',
      'Google Analytics 4 (GA4) conversion setup and event stream debugging',
      'CallRail Dynamic Number Insertion (DNI) tracking inbound calls by marketing channel',
      'Google Search Console organic indexing audits and local citation tracking with Yext',
      'Monthly performance dashboards delivering transparent marketing ROI to clients'
    ],
    technologies: ['GA4', 'Google Tag Manager', 'CallRail', 'Search Console', 'Yext', 'Gradeus'],
    category: 'Analytics & GTM',
    tags: ['GA4', 'GTM', 'CallRail', 'Search Console', 'Tracking', 'Reporting'],
    image: '/portfolio_assets/social-design-5.jpg',
    fallbackGradient: 'from-cyan-950/60 via-slate-900 to-emerald-950/80',
    featured: true,
    highlight: 'Attribution Tracking'
  },
  {
    id: 'landing-pages-hubspot',
    title: 'High-Converting Landing Pages & HubSpot Modules',
    subtitle: 'Responsive Web Pages & Modular Components for International Clients',
    description: 'Designed, customized, and published conversion-focused landing pages and modular components for clients across the US, Australia, and Europe.',
    fullDescription: 'Working as a front-end web developer and digital specialist with clients including The Bina School, INTRICITY (New York City), and Zeller (Melbourne, Australia), I translated design wireframes from Figma into responsive, accessible web pages and modular templates inside HubSpot CMS.',
    features: [
      'Translated high-fidelity Figma mockups into responsive, accessible web interfaces',
      'Engineered reusable modules and landing page templates in HubSpot CMS',
      'Created marketing graphics and visual assets using Canva to support new page launches',
      'Optimized mobile responsiveness and layout rendering speeds across major browsers',
      'Assisted marketing teams with scheduled blog publishing and content management'
    ],
    technologies: ['Figma', 'HubSpot CMS', 'Canva', 'HTML5', 'CSS3', 'Responsive Web'],
    category: 'Landing Pages',
    tags: ['Figma', 'HubSpot', 'Landing Pages', 'Front-end', 'HTML5', 'CSS3'],
    image: '/portfolio_assets/social-design-4.png',
    fallbackGradient: 'from-blue-950/60 via-slate-900 to-indigo-950/80',
    featured: true,
    highlight: 'Global Client Web Projects'
  },
  {
    id: 'sales-analytics-cpsu',
    title: 'CPSU Mushroom Farm Sales & Market Dashboard',
    subtitle: 'SQL Querying, Excel Statistical Modeling & Regional Demand Forecasting',
    description: 'Processed and normalized commercial sales figures, uncovering seasonal buying patterns and forecasting high-demand regional markets on a monthly basis.',
    fullDescription: 'At CPSU Mushroom Farm, I served as Junior Data Analyst, leveraging SQL database queries and advanced Excel statistical modeling to convert disorganized transactional records into actionable commercial insights. The resulting dashboards helped leadership predict peak market demand months in advance.',
    features: [
      'Extracted, cleaned, and normalized sales transaction data using SQL queries',
      'Engineered multi-dimensional Excel pivot tables and statistical trend formulas',
      'Forecasted high-demand regional markets month-by-month to assist harvest planning',
      'Provided strategic insights that optimized sales pricing and reduced product spoilage',
      'Generated comprehensive monthly visual dashboards and management reports'
    ],
    technologies: ['SQL', 'Excel', 'Pivot Tables', 'Data Cleaning', 'Statistical Analysis', 'Dashboards'],
    category: 'Data & SQL',
    tags: ['SQL', 'Excel', 'Pivot Tables', 'Data Cleaning', 'Forecasting', 'Dashboard'],
    image: '/portfolio_assets/social-design-2.jpg',
    fallbackGradient: 'from-emerald-950/60 via-slate-900 to-cyan-950/80',
    featured: true,
    highlight: 'Data Analyst Project'
  }
];
