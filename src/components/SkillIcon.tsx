import React from 'react';
import {
  SiGooglesheets,
  SiKeras,
  SiMake,
  SiN8N,
  SiNotion,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiPython,
  SiScikitlearn,
  SiSelenium,
  SiTableau,
  SiTensorflow,
  SiZapier,
} from 'react-icons/si';
import { DiDatabase } from 'react-icons/di';
import { Bot, BrainCircuit, CheckCircle2, Cpu, Link, Mic, Search, Workflow } from 'lucide-react';

interface SkillIconProps {
  skill: string;
  className?: string;
}

const SkillIcon = ({ skill, className }: SkillIconProps) => {
  const iconProps = { className: className || 'w-4 h-4 shrink-0' };

  switch (skill.toLowerCase()) {
    // Programming & Data Science
    case 'python':
      return <SiPython {...iconProps} />;
    case 'pandas':
      return <SiPandas {...iconProps} />;
    case 'numpy':
      return <SiNumpy {...iconProps} />;
    case 'scikit-learn':
      return <SiScikitlearn {...iconProps} />;
    case 'tensorflow':
      return <SiTensorflow {...iconProps} />;
    case 'keras':
      return <SiKeras {...iconProps} />;
    case 'sql':
      return <DiDatabase {...iconProps} />;

    // Data Visualization & Analysis
    case 'tableau':
      return <SiTableau {...iconProps} />;
    case 'seaborn':
      return <SiPython {...iconProps} />;
    case 'matplotlib':
      return <SiPython {...iconProps} />;
    case 'plotly':
      return <SiPlotly {...iconProps} />;

    // Automation & Low-Code Platforms
    case 'n8n':
      return <img src="/lovable-uploads/654aa2a2-e3d9-47e7-a2f8-8be6c4f2f6c9.png" alt="n8n" className={iconProps.className} />;
    case 'make.com':
      return <img src="/lovable-uploads/2ec6b24e-3cc1-49f0-8767-04f528b0161f.png" alt="Make.com" className={iconProps.className} />;
    case 'zapier':
      return <SiZapier {...iconProps} />;
    case 'gohighlevel':
      return <img src="/lovable-uploads/04712556-9998-4af7-b87b-babed2b948f3.png" alt="GoHighLevel" className={iconProps.className} />;
    case 'api integration':
      return <Link {...iconProps} />;
    case 'workflow automation':
      return <Workflow {...iconProps} />;

    // Machine Learning & AI
    case 'supervised & unsupervised learning':
      return <BrainCircuit {...iconProps} />;
    case 'predictive modeling':
      return <Cpu {...iconProps} />;
    case 'ai-powered automation':
      return <Bot {...iconProps} />;
    case 'llms':
      return <Bot {...iconProps} />;

    // Web Scraping & Data Extraction
    case 'beautifulsoup':
      return <Search {...iconProps} />;
    case 'selenium':
      return <SiSelenium {...iconProps} />;
    case 'scrapy':
      return <img src="/lovable-uploads/ccf7ffef-9213-48d9-b9c2-1c7e68520013.png" alt="Scrapy" className={iconProps.className} />;
    case 'api-based scraping':
      return <img src="/lovable-uploads/55ba76c7-c28c-4ce4-8c8c-48ce8a895152.png" alt="API-based Scraping" className={iconProps.className} />;

    // AI Voice Agent
    case 'voice automation':
      return <Mic {...iconProps} />;
    case 'ai-powered call agents':
      return <Bot {...iconProps} />;
    case 'customer support automation':
      return <Bot {...iconProps} />;
    case 'twilio':
      return <img src="/lovable-uploads/f0f40f93-e965-4b9f-bd5c-232d1573df81.png" alt="Twilio" className={iconProps.className} />;

    // Other Tools & Platforms
    case 'git':
      return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png" alt="Git" className={iconProps.className} />;
    case 'notion':
      return <SiNotion {...iconProps} />;
    case 'google sheets automation':
      return <img src="/lovable-uploads/27b26e72-2ddf-4938-9e56-c425fdb3ea07.png" alt="Google Sheets" className={iconProps.className} />;
    case 'airtable':
      return <img src="https://static-00.iconduck.com/assets.00/airtable-icon-512x428-olxouyvv.png" alt="Airtable" className={iconProps.className} />;
    case 'apify':
      return <img src="/lovable-uploads/62fe8dde-f8b4-4716-a00e-843acb5a46a4.png" alt="Apify" className={iconProps.className} />;
    case 'trello':
      return <img src="/lovable-uploads/94cb4e46-6f4f-479d-a78a-3f4e1cdcedc2.png" alt="Trello" className={iconProps.className} />;

    default:
      return <CheckCircle2 {...iconProps} />;
  }
};

export default SkillIcon;
