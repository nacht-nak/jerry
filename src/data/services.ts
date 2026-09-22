export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  features: string[];
  gradient: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'social-media-management',
    title: 'Social Media Management & Growth',
    shortDesc: 'End-to-end content curation, viral short videos, and organic community engagement.',
    fullDesc: 'Helping brands excel in their social media presence by crafting engaging visual content, curating Facebook Reels & TikToks, fostering audience engagement, and executing targeted organic outreach.',
    icon: 'Share2',
    features: [
      'Strategic content calendar & scheduled multi-platform posting',
      'High-impact graphic creation & photo editing using Canva',
      'Short-form video editing for Facebook Reels & viral formats',
      'Active community engagement, DM outreach & comment moderation'
    ],
    gradient: 'from-cyan-500/20 to-blue-500/10'
  },
  {
    id: 'paid-search-ads',
    title: 'Paid Search & Ad Campaigns (PPC)',
    shortDesc: 'Google Ads & Bing Ads management engineered for high-intent customer conversion.',
    fullDesc: 'Building, managing, and scaling paid search campaigns on Google and Bing. Specializing in high-intent keyword targeting, negative keyword sculpting, ad copywriting, remarketing, and maximizing ROAS.',
    icon: 'Target',
    features: [
      'Google Search & Performance Max campaign architecture',
      'Bing Ads & Microsoft Advertising expansion',
      'Audience remarketing & retargeting funnel setups',
      'Continuous bid management, A/B ad testing & cost reduction'
    ],
    gradient: 'from-blue-500/20 to-indigo-500/10'
  },
  {
    id: 'tracking-analytics',
    title: 'Tracking, GA4 & Web Analytics',
    shortDesc: 'Flawless attribution tracking with Google Tag Manager, GA4, and CallRail.',
    fullDesc: 'Eliminating marketing blind spots. I configure robust conversion tracking across Google Tag Manager and GA4, implement CallRail dynamic call tracking, and deliver crystal-clear monthly executive dashboards.',
    icon: 'BarChart3',
    features: [
      'Google Analytics 4 (GA4) property & event stream setup',
      'Google Tag Manager (GTM) tag, trigger & dataLayer deployment',
      'CallRail dynamic number insertion & telephone lead attribution',
      'Google Search Console, Yext, and Gradeus performance monitoring'
    ],
    gradient: 'from-indigo-500/20 to-purple-500/10'
  },
  {
    id: 'landing-pages-web',
    title: 'Landing Pages & Content Management',
    shortDesc: 'High-converting landing pages, blog posting, and CMS module implementation.',
    fullDesc: 'Designing and updating responsive landing pages that turn ad clicks into paying clients. Experienced in translating Figma prototypes to responsive web, building HubSpot modules, and publishing SEO blog posts.',
    icon: 'Layout',
    features: [
      'High-conversion landing page design & copywriting',
      'HubSpot CMS module creation & page maintenance',
      'Figma wireframe to responsive web implementation',
      'Blog publishing, image optimization & on-page SEO formatting'
    ],
    gradient: 'from-amber-500/20 to-orange-500/10'
  },
  {
    id: 'data-analytics-sql',
    title: 'Data Cleaning, SQL & Excel Modeling',
    shortDesc: 'Actionable business intelligence, sales forecasting, and interactive dashboards.',
    fullDesc: 'As a Certified Data Analyst, I transform disorganized spreadsheets and relational databases into actionable commercial insights, predictive monthly sales forecasts, and visual stakeholder dashboards.',
    icon: 'Database',
    features: [
      'Relational database querying & data extraction using SQL',
      'Advanced Microsoft Excel modeling, pivot tables & statistical analysis',
      'Sales trend analysis & regional market demand forecasting',
      'Automated visual dashboards & monthly stakeholder reports'
    ],
    gradient: 'from-emerald-500/20 to-cyan-500/10'
  },
  {
    id: 'va-customer-support',
    title: 'Virtual Assistance & Customer Support',
    shortDesc: 'Tier 2 dispute resolution, supervisor escalation, and dedicated client support.',
    fullDesc: 'Providing world-class virtual assistance, email & chat customer service, and sales support. Backed by Tier 2 telecom experience handling supervisor calls, billing disputes, refunds, and CRM operations.',
    icon: 'Headset',
    features: [
      'Tier 2 customer support, dispute mediation & refund processing',
      'Omnichannel email, live chat, and CRM ticket management',
      'Executive administrative assistance, task prioritization & scheduling',
      'Dedicated sales support & customer relationship nurturing'
    ],
    gradient: 'from-purple-500/20 to-pink-500/10'
  }
];
