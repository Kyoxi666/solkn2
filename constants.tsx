import { Shield, Globe, TrendingUp, Cpu, Server } from 'lucide-react';
import { ServiceItem, CaseStudy, TeamMember } from './types';

export const NAV_ITEMS = [
  { label: 'Services', id: 'SERVICES' },
  { label: 'Case Studies', id: 'CASE_STUDIES' },
  { label: 'Company', id: 'COMPANY' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'managed-it',
    title: 'Managed IT & Support',
    shortDescription: '24/7 monitoring and helpdesk services that keep your business running smoothly.',
    fullDescription: "Technology problems don't wait for business hours. Our managed IT services ensure your systems are monitored, maintained, and protected around the clock. We leverage industry-leading tools to provide proactive support and rapid resolution.",
    features: [
      {
        title: '24/7 Helpdesk Support',
        description: 'Round-the-clock access to our certified technicians who resolve issues remotely or on-site.'
      },
      {
        title: 'Network Operations Center (NOC)',
        description: 'Continuous monitoring of your infrastructure health, proactively identifying and fixing bottlenecks.'
      },
      {
        title: 'Security Operations Center (SOC)',
        description: 'Real-time threat detection and response capabilities that monitor your digital environment.'
      },
      {
        title: 'Remote Support',
        description: 'Instant remote troubleshooting capabilities allow our technicians to diagnose and fix software issues.'
      },
      {
        title: 'IT Consulting & Strategy',
        description: 'Strategic technology planning to align your IT infrastructure with your long-term business goals.'
      },
      {
        title: 'System Integration',
        description: 'Seamlessly connecting disparate software and hardware systems to improve data flow.'
      }
    ],
    idealFor: 'Businesses that need reliable, proactive IT management without the overhead of an in-house team.',
    icon: Server,
    partners: [
      { name: 'SolarWinds', logoUrl: 'https://logo.clearbit.com/solarwinds.com' },
      { name: 'Google Cloud', logoUrl: 'https://logo.clearbit.com/cloud.google.com' },
      { name: 'Microsoft Azure', logoUrl: 'https://logo.clearbit.com/azure.microsoft.com' },
      { name: 'AWS', logoUrl: 'https://logo.clearbit.com/aws.amazon.com' }
    ],
    approach: {
      description: "We move beyond 'break-fix' support to a model of continuous optimization. Our three-stage approach ensures your infrastructure is not just running, but propelling your business forward.",
      items: [
        {
          label: "ASSESSMENT",
          title: "Infrastructure Audit",
          description: "We map your entire digital estate to identify silent failures before they disrupt operations."
        },
        {
          label: "DEPLOYMENT",
          title: "Proactive Monitoring",
          description: "Installing enterprise-grade RMM sensors that detect anomalies and heal systems automatically."
        },
        {
          label: "OPTIMIZATION",
          title: "Strategic Roadmap",
          description: "Quarterly reviews to ensure your technology stack scales efficiently with your revenue growth."
        }
      ]
    },
    strategicFocus: {
      suffix: "Resilience",
      description: "We build systems that are resilient by design, minimizing downtime and ensuring your business is always open for customers.",
      items: [
        {
          title: "Uptime Guarantee",
          description: "Targeting 99.99% availability through redundant failover capacities."
        },
        {
          title: "Legacy Modernization",
          description: "Systematically replacing outdated hardware to reduce technical debt."
        },
        {
          title: "Scalability Framework",
          description: "Architecting networks that can expand instantly as you add new employees."
        }
      ]
    }
  },
  {
    id: 'web-solutions',
    title: 'Web Solutions',
    shortDescription: 'Beautiful, high-performing websites with secure hosting and ongoing maintenance.',
    fullDescription: 'First impressions matter. We design and develop websites that captivate visitors, drive conversions, and represent your brand with excellence. Our robust hosting and CDN solutions ensure your site is always fast and secure.',
    features: [
      {
        title: 'Custom Web Design',
        description: 'Tailor-made websites built from the ground up to reflect your brand identity.'
      },
      {
        title: 'UI/UX Design',
        description: 'User-centric design principles that create intuitive, engaging digital experiences.'
      },
      {
        title: 'Secure Web Hosting',
        description: 'High-performance hosting infrastructure with robust security measures and daily backups.'
      },
      {
        title: 'Ongoing Maintenance',
        description: 'Regular software updates and security patches to keep your website running smoothly.'
      },
      {
        title: 'Domain & SSL',
        description: 'Complete handling of domain registration and SSL certificate installation.'
      },
      {
        title: 'E-commerce Solutions',
        description: 'Scalable online store development with secure payment gateways.'
      }
    ],
    idealFor: 'Businesses ready to launch, refresh, or optimize their online presence.',
    icon: Globe,
    subServices: ['Web Design', 'SEO Optimization', 'Managed Hosting', 'E-commerce Development'],
    partners: [
      { name: 'Hostinger', logoUrl: 'https://logo.clearbit.com/hostinger.com' },
      { name: 'Cloudflare', logoUrl: 'https://logo.clearbit.com/cloudflare.com' },
      { name: 'WordPress', logoUrl: 'https://logo.clearbit.com/wordpress.org' },
      { name: 'Shopify', logoUrl: 'https://logo.clearbit.com/shopify.com' }
    ],
    approach: {
      description: "A great website is the intersection of art and engineering. Our process blends aesthetic excellence with technical rigor to build platforms that perform.",
      items: [
        {
          label: "DISCOVERY",
          title: "User Journey Mapping",
          description: "We define specific pathways to guide users from landing page to conversion."
        },
        {
          label: "BUILD",
          title: "Performance First",
          description: "Coding with modern frameworks that prioritize load speed and accessibility."
        },
        {
          label: "GROW",
          title: "Conversion Optimization",
          description: "Post-launch A/B testing to iteratively refine the user experience."
        }
      ]
    },
    strategicFocus: {
      suffix: "Experience",
      description: "We don't just build pages; we build digital experiences that serve as the primary engine for your brand's credibility.",
      items: [
        {
          title: "Speed & Core Vitals",
          description: "Ensuring sub-second load times to reduce bounce rates."
        },
        {
          title: "Security & Trust",
          description: "Implementing SSL and DDoS protection to protect user data."
        },
        {
          title: "Brand Consistency",
          description: "Translating your visual identity perfectly across all devices."
        }
      ]
    }
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    shortDescription: 'Multi-layered protection against evolving threats, ensuring compliance and peace of mind.',
    fullDescription: 'Cyber threats are constantly evolving. Our multi-layered security approach safeguards your data, reputation, and customer trust with enterprise-grade protection.',
    features: [
      {
        title: 'Network Security',
        description: 'Comprehensive firewall management and intrusion prevention systems.'
      },
      {
        title: 'Cloud Security',
        description: 'Securing your cloud infrastructure with advanced configurations and access controls.'
      },
      {
        title: 'Email Security',
        description: 'Advanced filtering against phishing, malware, and business email compromise.'
      },
      {
        title: 'Endpoint Protection',
        description: 'Securing devices with next-generation antivirus and EDR tools.'
      },
      {
        title: 'Compliance Assistance',
        description: 'Guiding your organization through GDPR and HIPAA complexities.'
      },
      {
        title: 'Vulnerability Assessments',
        description: 'Regular scanning to identify and remediate security weaknesses.'
      }
    ],
    idealFor: 'Organizations handling sensitive data or facing regulatory compliance requirements.',
    icon: Shield,
    partners: [
      { name: 'Fortinet', logoUrl: 'https://logo.clearbit.com/fortinet.com' },
      { name: 'Palo Alto Networks', logoUrl: 'https://logo.clearbit.com/paloaltonetworks.com' },
      { name: 'Zscaler', logoUrl: 'https://logo.clearbit.com/zscaler.com' },
      { name: 'Proofpoint', logoUrl: 'https://logo.clearbit.com/proofpoint.com' }
    ],
    approach: {
      description: "Security is not a product; it's a process. We employ a defense-in-depth strategy that assumes breach attempts are inevitable.",
      items: [
        {
          label: "IDENTIFY",
          title: "Threat Modeling",
          description: "Simulating sophisticated attacks to uncover where your digital armor is weakest."
        },
        {
          label: "PROTECT",
          title: "Zero Trust Architecture",
          description: "Implementing strict identity verification for every person and device."
        },
        {
          label: "DETECT",
          title: "24/7 Threat Hunting",
          description: "AI-driven SOC analysts continuously watching for anomalies."
        }
      ]
    },
    strategicFocus: {
      suffix: "Risk Elimination",
      description: "Our goal is to reduce your attack surface to near-zero, protecting your reputation and your bottom line.",
      items: [
        {
          title: "Data Sovereignty",
          description: "Ensuring your sensitive data remains encrypted and controlled."
        },
        {
          title: "Business Continuity",
          description: "Robust disaster recovery plans that ensure you can operate after an attack."
        },
        {
          title: "Human Firewalls",
          description: "Training your staff to recognize phishing and social engineering."
        }
      ]
    }
  },
  {
    id: 'digital-growth',
    title: 'Digital Growth',
    shortDescription: 'Data-driven marketing strategies that amplify your brand and drive measurable results.',
    fullDescription: 'Great products and services need great marketing. We help you reach the right audience using advanced analytics and targeted campaigns.',
    features: [
      {
        title: 'SEO',
        description: 'Technical and on-page optimization to improve website visibility.'
      },
      {
        title: 'PPC',
        description: 'Targeted advertising campaigns on Google and social media.'
      },
      {
        title: 'Social Media Management',
        description: 'Strategic content creation to build brand awareness.'
      },
      {
        title: 'Content Marketing',
        description: 'Creating valuable content that attracts and retains a clearly defined audience.'
      },
      {
        title: 'Email Marketing',
        description: 'Automated workflows to nurture leads and maximize value.'
      },
      {
        title: 'Analytics & Reporting',
        description: 'Detailed analysis to track ROI and inform decisions.'
      }
    ],
    idealFor: 'Businesses looking to increase visibility and generate leads.',
    icon: TrendingUp,
    partners: [
      { name: 'Google Ads', logoUrl: 'https://logo.clearbit.com/ads.google.com' },
      { name: 'HubSpot', logoUrl: 'https://logo.clearbit.com/hubspot.com' },
      { name: 'Meta', logoUrl: 'https://logo.clearbit.com/meta.com' },
      { name: 'SEMrush', logoUrl: 'https://logo.clearbit.com/semrush.com' }
    ],
    approach: {
      description: "We replace guesswork with data. Our methodology uses rapid experimentation to find the channels that convert.",
      items: [
        {
          label: "AUDIT",
          title: "Market Analysis",
          description: "Deep-diving into competitor strategies to identify growth opportunities."
        },
        {
          label: "EXECUTE",
          title: "Omnichannel Campaigns",
          description: "Synchronizing messaging across all platforms for a cohesive brand presence."
        },
        {
          label: "REFINE",
          title: "ROI Analytics",
          description: "Tracking every dollar spent to maximize profit."
        }
      ]
    },
    strategicFocus: {
      suffix: "Authority",
      description: "We help you stop chasing leads and start attracting them by establishing your brand as the authority.",
      items: [
        { title: "Lead Quality", description: "Optimizing campaigns to attract high-intent buyers." },
        { title: "LTV Optimization", description: "Strategies focused on retention and upsell." },
        { title: "Brand Voice", description: "Developing a consistent narrative that resonates." }
      ]
    }
  },
  {
    id: 'ai-transformation',
    title: 'AI Transformation',
    shortDescription: 'Harness artificial intelligence to automate processes and unlock new opportunities.',
    fullDescription: "Artificial intelligence isn't just for tech giants. We help businesses integrate AI to automate processes and create new value.",
    features: [
      {
        title: 'AI Strategy',
        description: 'Identifying high-impact use cases and developing a roadmap.'
      },
      {
        title: 'Predictive Analytics',
        description: 'Using data to forecast trends and customer behaviors.'
      },
      {
        title: 'NLP Solutions',
        description: 'Implementing chatbots and text analysis tools.'
      },
      {
        title: 'Process Automation',
        description: 'Deploying RPA to handle repetitive tasks with speed.'
      },
      {
        title: 'Blockchain Consulting',
        description: 'Exploring decentralized ledgers for security and transparency.'
      },
      {
        title: 'Network Automation',
        description: 'Automating network management to improve agility.'
      }
    ],
    idealFor: 'Forward-thinking businesses ready to gain a competitive edge.',
    icon: Cpu,
    partners: [
      { name: 'OpenAI', logoUrl: 'https://logo.clearbit.com/openai.com' },
      { name: 'TensorFlow', logoUrl: 'https://logo.clearbit.com/tensorflow.org' },
      { name: 'IBM Watson', logoUrl: 'https://logo.clearbit.com/ibm.com' },
      { name: 'Hugging Face', logoUrl: 'https://logo.clearbit.com/huggingface.co' }
    ],
    approach: {
      description: "We demystify AI, turning hype into utility. Our approach ensures your AI investment solves real problems.",
      items: [
        {
          label: "DATA",
          title: "Data Readiness",
          description: "Structuring and cleaning your data for intelligent models."
        },
        {
          label: "MODEL",
          title: "Custom Integration",
          description: "Selecting and fine-tuning the right models for your workflow."
        },
        {
          label: "SCALE",
          title: "Feedback Loops",
          description: "Building systems that learn and improve over time."
        }
      ]
    },
    strategicFocus: {
      suffix: "Cognitive Advantage",
      description: "We aim to give your business a 'second brain'—automated systems that handle complexity.",
      items: [
        {
          title: "Decision Support",
          description: "Providing leaders with predictive insights."
        },
        {
          title: "Operational Velocity",
          description: "Removing manual bottlenecks to increase speed."
        },
        {
          title: "Ethical AI",
          description: "Ensuring systems are transparent and unbiased."
        }
      ]
    }
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'legal-firm-downtime',
    title: 'Secure Cloud Infrastructure for Legal Practice',
    industry: 'Legal Services',
    category: 'Case Study',
    date: 'September 4, 2025',
    challenge: 'A 25-person legal practice was losing billable hours to constant tech issues and security concerns.',
    solution: 'SOLKN implemented 24/7 monitoring, cloud migration, and endpoint protection.',
    results: '80% fewer IT incidents and full GDPR compliance.',
    image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 'retail-black-friday',
    title: 'Scaling Architecture for High-Volume Retail',
    industry: 'Retail',
    category: 'Case Study',
    date: 'December 18, 2025',
    challenge: 'An online fashion retailer\'s website crashed during their biggest sales period.',
    solution: 'Rebuilt platform with high-performance hosting and CDN integration.',
    results: 'Processed 250,000+ transactions with 0 downtime.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 'manufacturing-ransomware',
    title: 'Rapid Response to Industrial Cyber Threat',
    industry: 'Manufacturing',
    category: 'Case Study',
    date: 'December 2, 2025',
    challenge: 'A sophisticated ransomware attack targeted a UK manufacturer.',
    solution: 'SOLKN\'s SOC detected and neutralized the threat within 12 minutes.',
    results: 'Attack stopped before any data encryption or exfiltration.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 'healthcare-seo',
    title: 'Digital Visibility for Telemedicine Startup',
    industry: 'Healthcare Tech',
    category: 'Case Study',
    date: 'November 21, 2025',
    challenge: 'A telemedicine startup had virtually no online presence.',
    solution: 'Implemented comprehensive SEO strategy and content marketing.',
    results: 'Ranked on page 1 for 47 keywords, 520% organic traffic growth.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop'
  }
];

export const TEAM: TeamMember[] = [
  { name: 'Arjun Patel', role: 'Chief Technology Officer', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2000' },
  { name: 'Sarah Jenkins', role: 'Head of Strategy', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2000' },
  { name: 'David Okafor', role: 'Lead Security Architect', image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2000' },
];

export const WHY_CHOOSE_ITEMS = [
  { title: "Certified Excellence", desc: "Cyber Essentials Certified, JOSCAR Registered, and Good Business Charter Accredited." },
  { title: "Global Expertise", desc: "Headquartered in Harrow, London, with operations in India—delivering round-the-clock support." },
  { title: "Trusted Partnerships", desc: "We work with industry leaders: Fortinet, Palo Alto Networks, Microsoft Azure, AWS." },
  { title: "Values-Driven", desc: "Committed to sustainability, equality, and ethical business practices." }
];
