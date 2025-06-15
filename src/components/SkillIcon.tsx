
import React from 'react';
import {
  SiGooglesheets,
  SiMake,
  SiN8N,
  SiNotion,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiPython,
  SiSelenium,
  SiTableau,
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
      return <img src="/lovable-uploads/e9225aa9-d2f4-4550-8d1a-6ff2ffd8b892.png" alt="Python" className={iconProps.className} />;
    case 'pandas':
      return <img src="/lovable-uploads/2ac801c1-a8fe-466d-af77-72d08cf52dd2.png" alt="Pandas" className={iconProps.className} />;
    case 'numpy':
      return <img src="/lovable-uploads/602ec0ae-15ed-426a-9413-24f2bfab5dc1.png" alt="NumPy" className={iconProps.className} />;
    case 'scikit-learn':
      return <img src="/lovable-uploads/76a90a9a-9e88-40a0-bc05-618bc28b7bf2.png" alt="Scikit-learn" className={iconProps.className} />;
    case 'tensorflow':
      return <img src="/lovable-uploads/575963b6-76af-4b76-b13a-dafe5cdc2358.png" alt="TensorFlow" className={iconProps.className} />;
    case 'keras':
      return <img src="/lovable-uploads/7ee7e781-8f24-46e0-890d-802388c7d934.png" alt="Keras" className={iconProps.className} />;
    case 'sql':
      return <img src="/lovable-uploads/48ea64ef-e583-4a22-9cf4-aa80c8d767d8.png" alt="SQL" className={iconProps.className} />;

    // Data Visualization & Analysis
    case 'power bi':
      return <img src="/lovable-uploads/0a15da81-7c63-4e4b-ae38-7db8806dcb08.png" alt="Power BI" className={iconProps.className} />;
    case 'plotly':
      return <img src="/lovable-uploads/426afe14-be04-4609-8035-7b97176eb1f7.png" alt="Plotly" className={iconProps.className} />;
    case 'seaborn':
      return <SiPython {...iconProps} />;
    case 'matplotlib':
      return <SiPython {...iconProps} />;

    // Automation & Low-Code Platforms
    case 'n8n':
      return <img src="/lovable-uploads/654aa2a2-e3d9-47e7-a2f8-8be6c4f2f6c9.png" alt="n8n" className={iconProps.className} />;
    case 'make.com':
      return <img src="/lovable-uploads/2ec6b24e-3cc1-49f0-8767-04f528b0161f.png" alt="Make.com" className={iconProps.className} />;
    case 'zapier':
      return <img src="/lovable-uploads/87678276-0f3d-4e88-bb5e-586a87ff1814.png" alt="Zapier" className={iconProps.className} />;
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
      return <img src="/lovable-uploads/fb379029-ff01-4436-8654-69505a202c1c.png" alt="Voice Automation" className={iconProps.className} />;
    case 'ai-powered call agents':
      return <img src="/lovable-uploads/e288e924-880d-4cd8-bf8b-d4c5cb547654.png" alt="AI-powered Call Agents" className={iconProps.className} />;
    case 'customer support automation':
      return <img src="/lovable-uploads/38b1fe26-eb65-4dd3-90c6-2ee08ae63330.png" alt="Customer Support Automation" className={iconProps.className} />;
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
