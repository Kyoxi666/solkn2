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
        description: 'Round-the-clock access to our certified technicians who resolve issues remotely or on-site, ensuring your team never faces downtime.'
      },
      {
        title: 'Network Operations Center (NOC)',
        description: 'Continuous monitoring of your infrastructure health, proactively identifying and fixing bottlenecks before they impact operations.'
      },
      {
        title: 'Security Operations Center (SOC)',
        description: 'Real-time threat detection and response capabilities that monitor your digital environment for suspicious activity and potential breaches.'
      },
      {
        title: 'Remote Support',
        description: 'Instant remote troubleshooting capabilities allow our technicians to diagnose and fix software issues on user devices without site visits.'
      },
      {
        title: 'IT Consulting & Strategy',
        description: 'Strategic technology planning to align your IT infrastructure with your long-term business goals and budget requirements.'
      },
      {
        title: 'System Integration',
        description: 'Seamlessly connecting disparate software and hardware systems to improve data flow and operational efficiency across your organization.'
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
          description: "We map your entire digital estate to identify silent failures, legacy bottlenecks, and security gaps before they disrupt operations."
        },
        {
          label: "DEPLOYMENT",
          title: "Proactive Monitoring",
          description: "Installing enterprise-grade RMM sensors that detect anomalies and heal systems automatically, often before users even notice an issue."
        },
        {
          label: "OPTIMIZATION",
          title: "Strategic Roadmap",
          description: "Quarterly reviews and long-term planning to ensure your technology stack scales efficiently with your revenue growth."
        }
      ]
    },
    strategicFocus: {
      suffix: "Resilience",
      description: "We build systems that are resilient by design, minimizing downtime and ensuring your business is always open for customers.",
      items: [
        {
          title: "Uptime Guarantee",
          description: "Targeting 99.99% availability through redundant failover capacities and rigorous maintenance schedules."
        },
        {
          title: "Legacy Modernization",
          description: "Systematically replacing outdated hardware and software to reduce technical debt and maintenance costs."
        },
        {
          title: "Scalability Framework",
          description: "Architecting networks that can expand instantly as you add new employees, locations, or services."
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
        title: 'Custom Web Design & Development',
        description: 'Tailor-made websites built from the ground up to reflect your brand identity and meet specific business requirements.'
      },
      {
        title: 'UI/UX Design',
        description: 'User-centric design principles that create intuitive, engaging, and accessible digital experiences for your customers.'
      },
      {
        title: 'Secure Web Hosting',
        description: 'High-performance hosting infrastructure with robust security measures, daily backups, and guaranteed uptime.'
      },
      {
        title: 'Ongoing Maintenance',
        description: 'Regular software updates, security patches, and performance optimizations to keep your website running smoothly and securely.'
      },
      {
        title: 'Domain & SSL Management',
        description: 'Complete handling of domain registration, renewals, and SSL certificate installation for established trust and security.'
      },
      {
        title: 'E-commerce Solutions',
        description: 'Scalable online store development with secure payment gateways, inventory management, and seamless checkout experiences.'
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
          description: "We define exactly who your users are and design specific pathways to guide them from landing page to conversion."
        },
        {
          label: "BUILD",
          title: "Performance First",
          description: "Coding with modern frameworks that prioritize load speed, accessibility, and mobile-responsiveness to satisfy Core Web Vitals."
        },
        {
          label: "GROW",
          title: "Conversion Optimization",
          description: "Post-launch A/B testing and heat-mapping to iteratively refine the user experience and maximize ROI."
        }
      ]
    },
    strategicFocus: {
      suffix: "Experience",
      description: "We don't just build pages; we build digital experiences that serve as the primary engine for your brand's credibility and growth.",
      items: [
        {
          title: "Speed & Core Vitals",
          description: "Ensuring sub-second load times to reduce bounce rates and improve organic search rankings."
        },
        {
          title: "Security & Trust",
          description: "Implementing SSL, DDoS protection, and secure payment gateways to protect user data and build trust."
        },
        {
          title: "Brand Consistency",
          description: "Translating your visual identity perfectly across all devices, from 4K desktops to smartphones."
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
        title: 'Network Security & Threat Prevention',
        description: 'Comprehensive firewall management and intrusion prevention systems to block unauthorized access and malicious traffic.'
      },
      {
        title: 'Cloud Security',
        description: 'Securing your cloud infrastructure and applications with advanced configurations and access controls tailored for AWS, Azure, and Google Cloud.'
      },
      {
        title: 'Email Security',
        description: 'Advanced filtering and protection against phishing, spear-phishing, malware, and business email compromise attacks.'
      },
      {
        title: 'Endpoint Protection',
        description: 'Securing desktops, laptops, and mobile devices with next-generation antivirus and endpoint detection and response (EDR) tools.'
      },
      {
        title: 'Compliance Assistance (GDPR, HIPAA)',
        description: 'Guiding your organization through the complexities of data privacy regulations to ensure full legal and industry compliance.'
      },
      {
        title: 'Vulnerability Assessments',
        description: 'Regular scanning and testing of your IT environment to identify and remediate security weaknesses before attackers can exploit them.'
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
      description: "Security is not a product; it's a process. We employ a defense-in-depth strategy that assumes breach attempts are inevitable and prepares your defenses accordingly.",
      items: [
        {
          label: "IDENTIFY",
          title: "Threat Modeling",
          description: "Simulating sophisticated attacks to uncover where your digital armor is weakest before an adversary does."
        },
        {
          label: "PROTECT",
          title: "Zero Trust Architecture",
          description: "Implementing strict identity verification for every person and device trying to access resources on your private network."
        },
        {
          label: "DETECT",
          title: "24/7 Threat Hunting",
          description: "AI-driven SOC analysts continuously watching for anomalies in network traffic to neutralize threats in real-time."
        }
      ]
    },
    strategicFocus: {
      suffix: "Risk Elimination",
      description: "Our goal is to reduce your attack surface to near-zero, protecting your reputation and your bottom line from the devastation of a breach.",
      items: [
        {
          title: "Data Sovereignty",
          description: "Ensuring your sensitive data remains encrypted, controlled, and compliant with all regional regulations."
        },
        {
          title: "Business Continuity",
          description: "Robust disaster recovery plans that ensure you can operate even in the face of a successful attack."
        },
        {
          title: "Human Firewalls",
          description: "Training your staff to recognize phishing and social engineering, turning your biggest weakness into a strength."
        }
      ]
    }
  },
  {
    id: 'digital-growth',
    title: 'Digital Growth',
    shortDescription: 'Data-driven marketing strategies that amplify your brand and drive measurable results.',
    fullDescription: 'Great products and services need great marketing. We help you reach the right audience, at the right time, with the right message using advanced analytics and targeted campaigns.',
    features: [
      {
        title: 'Search Engine Optimization (SEO)',
        description: 'Technical and on-page optimization strategies to improve your website visibility and organic ranking on search engines.'
      },
      {
        title: 'Pay-Per-Click (PPC)',
        description: 'Targeted advertising campaigns on Google and social media platforms designed to drive immediate traffic and high-quality leads.'
      },
      {
        title: 'Social Media Management',
        description: 'Strategic content creation and community engagement to build brand awareness and loyalty across relevant social channels.'
      },
      {
        title: 'Content Marketing',
        description: 'Creating valuable, relevant content that attracts and retains a clearly defined audience, driving profitable customer action.'
      },
      {
        title: 'Email Marketing',
        description: 'Automated email workflows and personalized newsletters to nurture leads and maximize customer lifetime value.'
      },
      {
        title: 'Analytics & Reporting',
        description: 'Detailed performance analysis and custom reporting to track ROI and inform data-driven marketing decisions.'
      }
    ],
    idealFor: 'Businesses looking to increase visibility, generate leads, and grow revenue online.',
    icon: TrendingUp,
    partners: [
        { name: 'Google Ads', logoUrl: 'https://logo.clearbit.com/ads.google.com' },
        { name: 'HubSpot', logoUrl: 'https://logo.clearbit.com/hubspot.com' },
        { name: 'Meta', logoUrl: 'https://logo.clearbit.com/meta.com' },
        { name: 'SEMrush', logoUrl: 'https://logo.clearbit.com/semrush.com' }
    ],
    approach: {
      description: "We replace guesswork with data. Our growth methodology uses rapid experimentation to find the exact channels and messages that convert for your unique audience.",
      items: [
        {
          label: "AUDIT",
          title: "Market Analysis",
          description: "Deep-diving into competitor strategies and keyword gaps to identify low-hanging fruit for immediate growth."
        },
        {
          label: "EXECUTE",
          title: "Omnichannel Campaigns",
          description: "Synchronizing your messaging across Search, Social, and Email to create a cohesive brand presence that follows your customer."
        },
        {
          label: "REFINE",
          title: "ROI Analytics",
          description: "Tracking every click and dollar spent to mercilessly cut waste and double down on the channels that drive profit."
        }
      ]
    },
    strategicFocus: {
      suffix: "Authority",
      description: "We help you stop chasing leads and start attracting them by establishing your brand as the undeniable authority in your space.",
      items: [
        {
          title: "Lead Quality",
          description: "Optimizing campaigns to attract high-intent buyers rather than just high volumes of traffic."
        },
        {
          title: "Customer Lifetime Value",
          description: "Strategies focused on retention and upsell, maximizing the revenue from every customer you acquire."
        },
        {
          title: "Brand Voice",
          description: "Developing a distinct, consistent narrative that resonates emotionally with your target demographic."
        }
      ]
    }
  },
  {
    id: 'ai-transformation',
    title: 'AI Transformation',
    shortDescription: 'Harness artificial intelligence to automate processes and unlock new opportunities.',
    fullDescription: "Artificial intelligence isn't just for tech giants. We help businesses of all sizes integrate AI to automate processes, enhance decision making, and create new value.",
    features: [
      {
        title: 'AI Strategy & Consulting',
        description: 'Identifying high-impact use cases for artificial intelligence within your business and developing a roadmap for implementation.'
      },
      {
        title: 'Predictive Analytics',
        description: 'Using historical data and machine learning algorithms to forecast future trends, customer behaviors, and market shifts.'
      },
      {
        title: 'Natural Language Processing (NLP)',
        description: 'Implementing intelligent chatbots and text analysis tools to automate customer support and extract insights from unstructured data.'
      },
      {
        title: 'Process Automation',
        description: 'Deploying intelligent robotic process automation (RPA) to handle repetitive, rule-based tasks with speed and accuracy.'
      },
      {
        title: 'Blockchain Consulting',
        description: 'Exploring and implementing decentralized ledger technologies for enhanced security, transparency, and traceability.'
      },
      {
        title: 'Network Automation',
        description: 'Using code to automate the provisioning, configuration, and management of network devices to improve agility and reduce errors.'
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
      description: "We demystify AI, turning hype into practical utility. Our approach ensures that your AI investment solves real business problems and delivers tangible ROI.",
      items: [
        {
          label: "DATA",
          title: "Data Readiness",
          description: "Structuring, cleaning, and securing your proprietary data to create a high-quality fuel source for intelligent models."
        },
        {
          label: "MODEL",
          title: "Custom Integration",
          description: "Selecting and fine-tuning the right models—whether LLMs or predictive engines—to fit your specific operational workflow."
        },
        {
          label: "SCALE",
          title: "Feedback Loops",
          description: "Building systems that learn from user interaction, continuously improving accuracy and utility over time."
        }
      ]
    },
    strategicFocus: {
      suffix: "Cognitive Advantage",
      description: "We aim to give your business a 'second brain'—automated systems that handle complexity so your team can focus on creativity and strategy.",
      items: [
        {
          title: "Decision Support",
          description: "Providing leaders with predictive insights that make strategic planning faster and more accurate."
        },
        {
          title: "Operational Velocity",
          description: "Removing manual bottlenecks to dramatically increase the speed at which your business delivers value."
        },
        {
          title: "Ethical AI",
          description: "Ensuring all automated systems are transparent, unbiased, and compliant with privacy standards."
        }
      ]
    }
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'legal-firm-downtime',
    title: 'Optogenetics-enabled discovery of integrated stress response modulators',
    industry: 'Legal Services',
    category: 'Publications',
    date: 'September 4, 2025',
    challenge: 'A 25-person legal practice was losing billable hours to constant tech issues and security concerns with client data.',
    solution: 'SOLKN implemented 24/7 monitoring, cloud migration, and endpoint protection.',
    results: '80% fewer IT incidents and full GDPR compliance.',
    image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 'retail-black-friday',
    title: 'Blog: Scaling Computer Vision to Solve Aging',
    industry: 'Retail',
    category: 'News',
    date: 'December 18, 2025',
    challenge: 'An online fashion retailer\'s website crashed during their biggest sales period.',
    solution: 'Rebuilt platform with high-performance hosting and CDN integration.',
    results: 'Processed 250,000+ transactions with 0 downtime.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 'manufacturing-ransomware',
    title: 'Blog: Aging as an Engineering Problem',
    industry: 'Manufacturing',
    category: 'News',
    date: 'December 2, 2025',
    challenge: 'A sophisticated ransomware attack targeted a UK manufacturer.',
    solution: 'SOLKN\'s SOC detected and neutralized the threat within 12 minutes.',
    results: 'Attack stopped before any data encryption or exfiltration.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 'healthcare-seo',
    title: 'Inside Our Science: Nobel Laureate Sir David MacMillan on Our Collaboration',
    industry: 'Healthcare Tech',
    category: 'News',
    date: 'November 21, 2025',
    challenge: 'A telemedicine startup had virtually no online presence.',
    solution: 'Implemented comprehensive SEO strategy and content marketing.',
    results: 'Ranked on page 1 for 47 keywords, 520% organic traffic growth.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 'fintech-chatbot',
    title: 'AI Chatbot Reduces Costs',
    industry: 'Financial Services',
    category: 'Case Study',
    date: 'October 15, 2025',
    challenge: 'A fintech company was overwhelmed by routine customer inquiries.',
    solution: 'Deployed an NLP-powered chatbot for tier-1 support.',
    results: '75% of queries handled autonomously, saving £180,000 annually.',
    image: 'https://picsum.photos/seed/fintech1/800/600'
  },
  {
    id: 'defense-joscar',
    title: 'JOSCAR Compliance in Record Time',
    industry: 'Defense & Aerospace',
    category: 'Case Study',
    date: 'October 01, 2025',
    challenge: 'A defense supplier needed JOSCAR registration to bid on MOD contracts.',
    solution: 'Conducted security audits and implemented required controls.',
    results: 'Certification achieved in 8 weeks vs industry average of 6 months.',
    image: 'https://picsum.photos/seed/defense1/800/600'
  },
  {
    id: 'pro-services-rebrand',
    title: 'Digital Rebrand Drives Conversions',
    industry: 'Professional Services',
    category: 'Case Study',
    date: 'September 28, 2025',
    challenge: 'An established consultancy had an outdated website that didn\'t reflect expertise.',
    solution: 'Full redesign with conversion-optimized UX and marketing automation.',
    results: '340% increase in conversions and tripled lead generation.',
    image: 'https://picsum.photos/seed/office1/800/600'
  },
  {
    id: 'accounting-cloud',
    title: 'Seamless Cloud Migration',
    industry: 'Accounting',
    category: 'Case Study',
    date: 'September 15, 2025',
    challenge: 'A 40-person firm needed to modernize on-prem infrastructure before hardware EOL.',
    solution: 'Executed a phased Azure migration entirely outside business hours.',
    results: 'Zero downtime and 40% reduction in IT costs.',
    image: 'https://picsum.photos/seed/accounting1/800/600'
  },
  {
    id: 'retail-ai-inventory',
    title: 'Predictive Analytics Efficiency',
    industry: 'Retail Supply Chain',
    category: 'Case Study',
    date: 'August 30, 2025',
    challenge: 'Multi-location retailer struggled with overstocking and stockouts.',
    solution: 'Implemented machine learning models to forecast demand patterns.',
    results: 'Optimized inventory levels, reducing carrying costs by £420,000/yr.',
    image: 'https://picsum.photos/seed/inventory1/800/600'
  },
  {
    id: 'startup-infrastructure',
    title: 'Startup to Scale-Up in 30 Days',
    industry: 'Technology Startup',
    category: 'Case Study',
    date: 'August 12, 2025',
    challenge: 'Rapidly funded startup needed enterprise-grade infrastructure immediately.',
    solution: 'Delivered full network setup, cloud arch, and professional website.',
    results: 'Enabled onboarding of 50 employees in the first month.',
    image: 'https://picsum.photos/seed/startup1/800/600'
  },
  {
    id: 'logistics-security',
    title: 'Global Multi-Site Protection',
    industry: 'Logistics',
    category: 'Case Study',
    date: 'July 25, 2025',
    challenge: 'International logistics company faced increasing cyber threats across 12 countries.',
    solution: 'Deployed unified threat management with centralized monitoring.',
    results: 'Blocked 15,000+ attack attempts monthly.',
    image: 'https://picsum.photos/seed/logistics1/800/600'
  },
  {
    id: 'saas-marketing',
    title: 'Marketing ROI Jumps 280%',
    industry: 'B2B SaaS',
    category: 'Case Study',
    date: 'July 10, 2025',
    challenge: 'Software company spending heavily on Google Ads with poor returns.',
    solution: 'Restructured campaigns with advanced targeting and conversion tracking.',
    results: 'Reduced CPA by 65% while tripling demo bookings.',
    image: 'https://picsum.photos/seed/saas1/800/600'
  }
];

export const TEAM: TeamMember[] = [
  { name: 'Arjun Patel', role: 'Chief Technology Officer', image: 'https://picsum.photos/seed/arjun/400/400' },
  { name: 'Sarah Jenkins', role: 'Head of Strategy', image: 'https://picsum.photos/seed/sarah/400/400' },
  { name: 'David Okafor', role: 'Lead Security Architect', image: 'https://picsum.photos/seed/david/400/400' },
];