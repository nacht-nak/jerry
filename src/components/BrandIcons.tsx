import React from 'react';
import { Code2 } from 'lucide-react';

interface BrandIconProps {
  name: string;
  className?: string;
  fallbackIcon?: React.FC<{ className?: string }>;
}

export const BrandIcon: React.FC<BrandIconProps> = ({ name, className = 'w-6 h-6', fallbackIcon: Fallback = Code2 }) => {
  const norm = name.toLowerCase().trim();

  // 1. Zoom (Exact match to user's uploaded image - blue circle with white camera)
  if (
    norm.includes('zoom') ||
    norm.includes('tier 2') ||
    norm.includes('customer support') ||
    norm.includes('virtual assist') ||
    norm.includes('va & customer') ||
    norm.includes('dispute') ||
    norm === 'headset'
  ) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <circle cx="12" cy="12" r="11" fill="#2D8CFF" />
        <rect x="5.5" y="8" width="8.5" height="8" rx="2.2" fill="white" />
        <path d="M14 10.6L18.5 7.6V16.4L14 13.4V10.6Z" fill="white" />
      </svg>
    );
  }

  // 2. Google Ads
  if (
    norm.includes('google ads') ||
    norm.includes('paid search') ||
    norm.includes('ppc') ||
    norm === 'zap' ||
    norm === 'target'
  ) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path
          d="M4.8 15.6L10.2 6.2C11 4.8 12.8 4.3 14.2 5.1C15.6 5.9 16.1 7.7 15.3 9.1L9.9 18.5C9.1 19.9 7.3 20.4 5.9 19.6C4.5 18.8 4 17 4.8 15.6Z"
          fill="#FBBC04"
        />
        <path
          d="M19.2 15.6L13.8 6.2C13 4.8 11.2 4.3 9.8 5.1L15.2 14.5C16 15.9 17.8 16.4 19.2 15.6Z"
          fill="#4285F4"
        />
        <circle cx="6.5" cy="17.5" r="2.5" fill="#34A853" />
      </svg>
    );
  }

  // 3. Microsoft Advertising / Bing Ads
  if (norm.includes('bing') || norm.includes('microsoft')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect x="3" y="3" width="8.5" height="8.5" rx="1.5" fill="#F25022" />
        <rect x="12.5" y="3" width="8.5" height="8.5" rx="1.5" fill="#7FBA00" />
        <rect x="3" y="12.5" width="8.5" height="8.5" rx="1.5" fill="#00A4EF" />
        <rect x="12.5" y="12.5" width="8.5" height="8.5" rx="1.5" fill="#FFB900" />
      </svg>
    );
  }

  // 4. Meta / Instagram (Social Media Management)
  if (norm.includes('social media management') || norm === 'share2') {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <defs>
          <radialGradient id="ig-grad-real" cx="30%" cy="107%" r="150%">
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="5%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" />
            <stop offset="60%" stopColor="#d6249f" />
            <stop offset="90%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#ig-grad-real)" />
        <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" fill="none" stroke="white" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3.2" fill="none" stroke="white" strokeWidth="1.6" />
        <circle cx="15.8" cy="8.2" r="0.9" fill="white" />
      </svg>
    );
  }

  // 5. TikTok (Short-Form Video & Reels)
  if (norm.includes('short-form video') || norm.includes('reels') || norm === 'video') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <circle cx="12" cy="12" r="11" fill="#010101" />
        {/* Cyan displacement */}
        <path
          d="M12.8 4v9.8a3.2 3.2 0 1 1-3.2-3.2c.4 0 .8.1 1.1.2V7.8a6.5 6.5 0 0 0-1.1-.1 6.2 6.2 0 1 0 6.2 6.2V9.3a7 7 0 0 0 3.8 1.1V7.4a4 4 0 0 1-3.8-3.4h-3z"
          fill="#00F2FE"
        />
        {/* Red displacement */}
        <path
          d="M12 4.4v9.8a3.2 3.2 0 1 1-3.2-3.2c.4 0 .8.1 1.1.2V8.2a6.5 6.5 0 0 0-1.1-.1 6.2 6.2 0 1 0 6.2 6.2V9.7a7 7 0 0 0 3.8 1.1V7.8a4 4 0 0 1-3.8-3.4h-3z"
          fill="#FE2C55"
        />
        {/* Main white note */}
        <path
          d="M12.4 4.2v9.8a3.2 3.2 0 1 1-3.2-3.2c.4 0 .8.1 1.1.2V8a6.5 6.5 0 0 0-1.1-.1 6.2 6.2 0 1 0 6.2 6.2V9.5a7 7 0 0 0 3.8 1.1V7.6a4 4 0 0 1-3.8-3.4h-3z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 6. Canva (Content Curation & Creation / Canva Design)
  if (norm.includes('canva') || norm.includes('content curation') || (norm.includes('curation') && norm.includes('creation'))) {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <defs>
          <linearGradient id="canva-real-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C4CC" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#7D2AE8" />
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="11" fill="url(#canva-real-grad)" />
        <path
          d="M15.5 9C14.4 7.8 12.8 7.2 11.2 7.2C8.2 7.2 6.2 9.5 6.2 12.4C6.2 15.3 8.3 17.6 11.6 17.6C13.8 17.6 15.3 16.5 16.2 15.2L14.5 14C13.8 14.8 12.8 15.4 11.6 15.4C9.6 15.4 8.4 14 8.4 12.4C8.4 10.7 9.6 9.4 11.3 9.4C12.5 9.4 13.5 9.9 14.2 10.7L15.5 9Z"
          fill="white"
        />
      </svg>
    );
  }

  // 7. Meta Messenger (Social Media Outreach & Engagement)
  if (norm.includes('outreach') || norm.includes('engagement') || norm === 'megaphone') {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <defs>
          <linearGradient id="msg-real-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00B2FF" />
            <stop offset="50%" stopColor="#006AFF" />
            <stop offset="100%" stopColor="#9E3CFF" />
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="11" fill="url(#msg-real-grad)" />
        <path d="M6.5 13.5L10.2 9.5L12.5 11.8L17.5 9.5L13.8 13.8L11.5 11.5L6.5 13.5Z" fill="white" />
      </svg>
    );
  }

  // 8. Adobe Illustrator / Brand Awareness & Positioning
  if (norm.includes('brand awareness') || norm.includes('positioning')) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4.5" fill="#260000" />
        <rect x="2" y="2" width="20" height="20" rx="4.5" stroke="#FF9A00" strokeWidth="1.5" />
        <text x="6" y="15.5" fill="#FF9A00" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">
          Ai
        </text>
      </svg>
    );
  }

  // 9. Meta Ads / Remarketing & Retargeting
  if (norm.includes('remarketing') || norm.includes('retargeting') || norm === 'layers') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#0866FF" />
        <path
          d="M12 14.5C10.5 12.2 9.4 10.2 8 8.8C6.6 7.4 5.1 7 3.8 7.8C2.2 8.8 1.8 10.8 2.7 12.8C3.6 14.8 5.4 16.2 7.5 16.2C9.2 16.2 10.8 15.3 12 14.5ZM12 14.5C13.5 12.2 14.6 10.2 16 8.8C17.4 7.4 18.9 7 20.2 7.8C21.8 8.8 22.2 10.8 21.3 12.8C20.4 14.8 18.6 16.2 16.5 16.2C14.8 16.2 13.2 15.3 12 14.5Z"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // 10. Landing Page Lead Optimization (WordPress / Webflow)
  if (norm.includes('landing page') || norm === 'layout') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <circle cx="12" cy="12" r="10.5" fill="#21759B" />
        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.2" fill="none" />
        <path
          d="M12 21C13.5 21 14.9 20.4 16 19.5L13.7 12.8L12 17.8L9.9 11.8L7.2 19.3C8.6 20.3 10.2 21 12 21Z"
          fill="white"
        />
        <path
          d="M4.5 12C4.5 13.8 5.1 15.4 6 16.8L9.8 6.5C9.5 6.3 9.1 6.2 8.6 6.2H8.3V5.8H11.5V6.2C11 6.2 10.6 6.3 10.3 6.5L12.5 12.8L14.4 7.5C14 7.3 13.6 7.2 13.2 7.1V6.7H16.2V7.1C15.8 7.2 15.4 7.3 15.1 7.5L17.7 14.8C18.8 13.4 19.5 11.8 19.5 10C19.5 8.2 18.8 6.8 17.6 5.8"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    );
  }

  // 11. Google Analytics 4 (GA4)
  if (norm.includes('analytics') || norm.includes('ga4') || norm === 'barchart3') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect x="3" y="14" width="4.5" height="7" rx="2.25" fill="#F9AB00" />
        <rect x="9.75" y="8" width="4.5" height="13" rx="2.25" fill="#E37400" />
        <rect x="16.5" y="3" width="4.5" height="18" rx="2.25" fill="#F9AB00" />
        <circle cx="5.25" cy="9.5" r="2.25" fill="#F9AB00" />
      </svg>
    );
  }

  // 12. Google Tag Manager (GTM)
  if (norm.includes('tag manager') || norm.includes('gtm') || norm === 'terminal') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M12 2L4 10L12 18L20 10L12 2Z" fill="#246FDB" />
        <path d="M12 6L7 11L12 16L17 11L12 6Z" fill="#FFFFFF" />
        <circle cx="12" cy="11" r="2.5" fill="#1A73E8" />
      </svg>
    );
  }

  // 13. CallRail
  if (norm.includes('callrail') || norm.includes('phonecall') || norm === 'phonecall') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#00A4E4" />
        <path
          d="M8.5 7.5C8 7.5 7.5 8 7.5 8.5C7.5 13 11 16.5 15.5 16.5C16 16.5 16.5 16 16.5 15.5V14.2C16.5 13.7 16.1 13.3 15.6 13.2L14 12.8C13.6 12.7 13.2 12.9 12.9 13.2L12.4 13.7C11.2 13 10.2 12 9.5 10.8L10 10.3C10.3 10 10.5 9.6 10.4 9.2L10 7.6C9.9 7.1 9.5 6.7 9 6.7H8.5V7.5Z"
          fill="white"
        />
        <path d="M13.5 6.5C15 7 16 8 16.5 9.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M13.5 8.8C14.2 9.1 14.7 9.6 15 10.3" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  // 14. Google Search Console
  if (norm.includes('search console') || norm.includes('yext') || norm === 'searchcheck') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#4285F4" />
        <circle cx="10" cy="10" r="4" stroke="white" strokeWidth="2" fill="none" />
        <path d="M13 13L17.5 17.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M8 11.5V10M10 11.5V8.5M12 11.5V7.5" stroke="#34A853" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // 15. SQL Querying (PostgreSQL)
  if (norm.includes('sql') || norm === 'database') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <ellipse cx="12" cy="5.5" rx="8" ry="3" fill="#336791" />
        <path d="M4 5.5V10.5C4 12 7.6 13.5 12 13.5C16.4 13.5 20 12 20 10.5V5.5" fill="#336791" opacity="0.8" />
        <ellipse cx="12" cy="10.5" rx="8" ry="3" fill="#4B89BF" />
        <path d="M4 10.5V15.5C4 17 7.6 18.5 12 18.5C16.4 18.5 20 17 20 15.5V10.5" fill="#336791" />
        <ellipse cx="12" cy="15.5" rx="8" ry="3" fill="#62A9E5" />
      </svg>
    );
  }

  // 16. Microsoft Excel
  if (norm.includes('excel') || norm === 'table') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4.5" fill="#107C41" />
        <rect x="4" y="4" width="16" height="16" rx="2" fill="#107C41" />
        <path d="M7 6.5L17 17.5M17 6.5L7 17.5" stroke="white" strokeWidth="2.8" strokeLinecap="round" />
      </svg>
    );
  }

  // 17. PowerBI / Statistical Analysis
  if (norm.includes('statistical') || norm === 'filespreadsheet') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect x="3" y="13" width="4" height="8" rx="1.5" fill="#E6AD10" />
        <rect x="8.5" y="9" width="4" height="12" rx="1.5" fill="#F2C811" />
        <rect x="14" y="4" width="4" height="17" rx="1.5" fill="#F9DE69" />
        <rect x="19.5" y="7" width="2.5" height="14" rx="1.25" fill="#DDA006" />
      </svg>
    );
  }

  // 18. Tableau / Business Dashboards
  if (norm.includes('dashboards') || norm === 'linechart') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect x="10.5" y="2.5" width="3" height="19" rx="1.5" fill="#E97627" />
        <rect x="2.5" y="10.5" width="19" height="3" rx="1.5" fill="#E97627" />
        <rect x="5.5" y="5.5" width="2.5" height="13" rx="1" fill="#2B5B84" />
        <rect x="5.5" y="5.5" width="13" height="2.5" rx="1" fill="#2B5B84" />
        <rect x="16" y="5.5" width="2.5" height="13" rx="1" fill="#D34727" />
        <rect x="5.5" y="16" width="13" height="2.5" rx="1" fill="#499894" />
      </svg>
    );
  }

  // 19. Figma
  if (norm.includes('figma') || norm === 'filecode2') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M8 2h4v4H8a2 2 0 1 1 0-4z" fill="#F24E1E" />
        <path d="M12 2h4a2 2 0 1 1 0 4h-4V2z" fill="#FF7262" />
        <path d="M8 6h4v4H8a2 2 0 1 1 0-4z" fill="#A259FF" />
        <circle cx="14" cy="8" r="2" fill="#1ABCFE" />
        <path d="M8 10h4v2a2 2 0 1 1-4 0v-2z" fill="#0ACF83" />
      </svg>
    );
  }

  // 20. HubSpot
  if (norm.includes('hubspot') || norm === 'boxes') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <circle cx="12" cy="12" r="4.2" stroke="#FF7A59" strokeWidth="2.8" fill="none" />
        <circle cx="17.8" cy="7.2" r="2.2" fill="#FF7A59" />
        <path d="M15 9.5L16.8 8" stroke="#FF7A59" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="6.2" cy="12" r="1.8" fill="#FF7A59" />
        <path d="M7.6 12H9.5" stroke="#FF7A59" strokeWidth="2.4" />
        <circle cx="12" cy="4.2" r="1.8" fill="#FF7A59" />
        <path d="M12 6V8" stroke="#FF7A59" strokeWidth="2.4" />
      </svg>
    );
  }

  // 21. React / Front-End Web
  if (norm.includes('front-end') || norm.includes('web development') || norm === 'code2') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="9" ry="3.4" stroke="#61DAFB" strokeWidth="1.4" />
        <ellipse cx="12" cy="12" rx="9" ry="3.4" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.4" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 12 12)" />
      </svg>
    );
  }

  // 22. Zendesk (Customer Support)
  if (norm.includes('support') || norm === 'headset') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#03363D" />
        <path d="M6.5 7.5h11l-11 9h11" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // 23. Slack (Email, Chat & Ticket Management)
  if (norm.includes('chat') || norm.includes('ticket') || norm === 'messagesquare') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect x="3" y="10" width="3.5" height="7" rx="1.75" fill="#E01E5A" />
        <circle cx="4.75" cy="7.5" r="1.75" fill="#E01E5A" />
        <rect x="10" y="3" width="7" height="3.5" rx="1.75" fill="#36C5F0" />
        <circle cx="8.5" cy="4.75" r="1.75" fill="#36C5F0" />
        <rect x="17.5" y="7" width="3.5" height="7" rx="1.75" fill="#2EB67D" />
        <circle cx="19.25" cy="16.5" r="1.75" fill="#2EB67D" />
        <rect x="7" y="17.5" width="7" height="3.5" rx="1.75" fill="#ECB22E" />
        <circle cx="15.5" cy="19.25" r="1.75" fill="#ECB22E" />
      </svg>
    );
  }

  // 24. Stakeholder Communication (Google Meet / Zoom)
  if (norm.includes('stakeholder') || norm.includes('time management') || norm === 'usercheck') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect x="2" y="4" width="13" height="16" rx="3" fill="#00AC47" />
        <path d="M15 9.5L20.5 5.5V18.5L15 14.5V9.5Z" fill="#00832D" />
        <circle cx="8.5" cy="12" r="3" fill="white" />
      </svg>
    );
  }

  // Default fallback to Lucide
  return <Fallback className={className} />;
};
