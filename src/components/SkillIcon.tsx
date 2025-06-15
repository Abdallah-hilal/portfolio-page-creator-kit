import React from 'react';
import {
  SiAirtable,
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
  SiScrapy,
  SiSelenium,
  SiTableau,
  SiTensorflow,
  SiZapier,
} from 'react-icons/si';
import { DiDatabase, DiGit } from 'react-icons/di';
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
      return <SiN8N {...iconProps} />;
    case 'make.com':
      return <SiMake {...iconProps} />;
    case 'zapier':
      return <SiZapier {...iconProps} />;
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
      return <SiScrapy {...iconProps} />;
    case 'api-based scraping':
      return <Link {...iconProps} />;

    // AI Voice Agent
    case 'voice automation':
      return <Mic {...iconProps} />;
    case 'ai-powered call agents':
      return <Bot {...iconProps} />;
    case 'customer support automation':
      return <Bot {...iconProps} />;

    // Other Tools & Platforms
    case 'git':
      return <DiGit {...iconProps} />;
    case 'notion':
      return <SiNotion {...iconProps} />;
    case 'google sheets automation':
      return <SiGooglesheets {...iconProps} />;
    case 'airtable':
      return <SiAirtable {...iconProps} />;

    default:
      return <CheckCircle2 {...iconProps} />;
  }
};

export default SkillIcon;
