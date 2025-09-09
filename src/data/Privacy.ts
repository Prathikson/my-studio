// data/privacy.ts
export interface PrivacySection {
  id: string;
  title: string;
  icon: string;
  color: string;
  content: {
    text: string;
    subsections?: {
      title: string;
      items: string[];
    }[];
    highlights?: {
      type: 'warning' | 'info' | 'success';
      title: string;
      content: string;
    }[];
    tables?: {
      title: string;
      headers: string[];
      rows: string[][];
    }[];
  };
}

export interface PrivacyVersion {
  version: string;
  effectiveDate: string;
  lastUpdated: string;
  changelog?: string[];
  sections: PrivacySection[];
}

export const privacyData: PrivacyVersion = {
  version: "3.2.0",
  effectiveDate: "2025-01-15",
  lastUpdated: "2025-01-15",
  changelog: [
    "Enhanced data retention policies",
    "Added cookie management preferences",
    "Updated third-party service integrations",
    "Strengthened security measures documentation",
    "Added AI/ML data processing disclosures"
  ],
  sections: [
    {
      id: 'introduction',
      title: 'Privacy Policy Overview',
      icon: 'Shield',
      color: 'appleBlue',
      content: {
        text: 'XTOIC STUDIO is committed to protecting your privacy and personal information in accordance with the Personal Information Protection Act (PIPA) of Alberta, the Personal Information Protection and Electronic Documents Act (PIPEDA) of Canada, and international privacy standards.',
        highlights: [
          {
            type: 'info',
            title: 'Our Commitment',
            content: 'We collect only the minimum information necessary to provide our services and never sell or share your personal data for commercial purposes.'
          },
          {
            type: 'success',
            title: 'Your Rights',
            content: 'You have the right to access, correct, delete, and control how your personal information is used. Contact us anytime to exercise these rights.'
          }
        ],
        subsections: [
          {
            title: 'Scope of This Policy',
            items: [
              'This policy applies to all XTOIC STUDIO services and interactions',
              'Covers information collected through our website, communications, and service delivery',
              'Applies to all clients, prospects, and website visitors',
              'Includes data processed on behalf of clients (as data processor)'
            ]
          }
        ]
      }
    },
    {
      id: 'collection',
      title: 'Information We Collect',
      icon: 'Database',
      color: 'zoroRed',
      content: {
        text: 'We collect information necessary to provide our creative and technical services. All collection is done with transparency and consent under Canadian privacy law.',
        subsections: [
          {
            title: 'Personal Information',
            items: [
              'Name, title, and contact information (email, phone, address)',
              'Company/organization details and business information',
              'Payment and billing information (processed securely)',
              'Communication preferences and consent records'
            ]
          },
          {
            title: 'Technical Information',
            items: [
              'Website usage data and analytics (anonymized when possible)',
              'Device and browser information for optimization',
              'IP addresses and location data (general geographic region)',
              'Cookies and similar tracking technologies'
            ]
          },
          {
            title: 'Project-Related Information',
            items: [
              'Creative briefs, project requirements, and specifications',
              'Feedback, revisions, and approval communications',
              'Brand assets, content, and materials provided by clients',
              'Performance metrics and project outcome data'
            ]
          }
        ],
        tables: [
          {
            title: 'Data Collection Summary',
            headers: ['Information Type', 'Purpose', 'Legal Basis', 'Retention Period'],
            rows: [
              ['Contact Details', 'Service delivery & communication', 'Contract performance', '7 years after project completion'],
              ['Payment Information', 'Billing and accounting', 'Legal obligation', '7 years per CRA requirements'],
              ['Project Files', 'Service delivery & portfolio', 'Contract performance', '3 years or as agreed'],
              ['Website Analytics', 'Service improvement', 'Legitimate interest', '2 years or until consent withdrawn']
            ]
          }
        ]
      }
    },
    {
      id: 'usage',
      title: 'How We Use Your Information',
      icon: 'Target',
      color: 'appleBlue',
      content: {
        text: 'Your information is used solely to provide exceptional creative services and maintain our business relationship. We never use your data for purposes beyond what you\'ve consented to.',
        subsections: [
          {
            title: 'Primary Uses',
            items: [
              'Delivering contracted creative and technical services',
              'Project communication, updates, and collaboration',
              'Billing, invoicing, and payment processing',
              'Customer support and relationship management'
            ]
          },
          {
            title: 'Secondary Uses (With Consent)',
            items: [
              'Portfolio showcases and case studies (with client approval)',
              'Marketing communications about our services',
              'Industry insights and trend analysis (anonymized)',
              'Service improvement and quality enhancement'
            ]
          },
          {
            title: 'Legal and Compliance Uses',
            items: [
              'Meeting legal and regulatory requirements',
              'Protecting against fraud and security threats',
              'Enforcing terms of service and contracts',
              'Responding to legal requests and court orders'
            ]
          }
        ],
        highlights: [
          {
            type: 'warning',
            title: 'Marketing Communications',
            content: 'We only send marketing emails to those who have explicitly opted in. You can unsubscribe at any time using the link in our emails.'
          }
        ]
      }
    },
    {
      id: 'sharing',
      title: 'Information Sharing & Disclosure',
      icon: 'Users',
      color: 'carbonGray',
      content: {
        text: 'XTOIC STUDIO does not sell, rent, or trade personal information. We share information only when necessary for service delivery or required by law.',
        subsections: [
          {
            title: 'Authorized Service Providers',
            items: [
              'Cloud hosting and storage providers (Canadian data centers preferred)',
              'Payment processors for secure billing transactions',
              'Professional consultants and subcontractors (under strict confidentiality)',
              'Legal and accounting professionals as required'
            ]
          },
          {
            title: 'Legal Disclosures',
            items: [
              'Court orders and legal proceedings in Alberta or Canadian federal courts',
              'Law enforcement requests with proper legal authority',
              'Protection of XTOIC STUDIO\'s legal rights and property',
              'Emergency situations involving safety or security threats'
            ]
          },
          {
            title: 'Business Transfers',
            items: [
              'In the event of merger, acquisition, or sale of business assets',
              'Client notification provided 30 days prior to transfer',
              'Same privacy protections maintained by acquiring entity',
              'Option to request data deletion rather than transfer'
            ]
          }
        ],
        highlights: [
          {
            type: 'info',
            title: 'Third-Party Services',
            content: 'We carefully vet all service providers and require them to maintain the same privacy standards through contractual agreements.'
          }
        ]
      }
    },
    {
      id: 'security',
      title: 'Data Security & Protection',
      icon: 'Lock',
      color: 'zoroRed',
      content: {
        text: 'We implement comprehensive security measures to protect your information against unauthorized access, alteration, disclosure, or destruction.',
        subsections: [
          {
            title: 'Technical Safeguards',
            items: [
              'TLS/SSL encryption for all data transmission',
              'AES-256 encryption for data at rest',
              'Multi-factor authentication for team access',
              'Regular security updates and patch management',
              'Automated backup systems with encryption',
              'Network security monitoring and intrusion detection'
            ]
          },
          {
            title: 'Administrative Safeguards',
            items: [
              'Strict access controls based on job requirements',
              'Regular privacy and security training for all staff',
              'Confidentiality agreements with all team members',
              'Annual security audits and assessments',
              'Incident response and breach notification procedures'
            ]
          },
          {
            title: 'Physical Safeguards',
            items: [
              'Secure office facilities with access controls',
              'Locked filing cabinets for physical documents',
              'Secure disposal of sensitive materials',
              'Device encryption and remote wipe capabilities'
            ]
          }
        ],
        highlights: [
          {
            type: 'warning',
            title: 'Data Breach Response',
            content: 'In the unlikely event of a data breach, we will notify affected individuals within 72 hours and relevant authorities as required by law.'
          }
        ]
      }
    },
    {
      id: 'cookies',
      title: 'Cookies & Tracking Technologies',
      icon: 'Globe',
      color: 'appleBlue',
      content: {
        text: 'We use cookies and similar technologies to improve website functionality and analyze usage patterns. You have control over these preferences.',
        tables: [
          {
            title: 'Cookie Types and Usage',
            headers: ['Cookie Type', 'Purpose', 'Duration', 'Can Opt Out'],
            rows: [
              ['Essential', 'Website functionality', 'Session', 'No (required for site operation)'],
              ['Analytics', 'Usage statistics (Google Analytics)', '2 years', 'Yes'],
              ['Preferences', 'Remember your settings', '1 year', 'Yes'],
              ['Marketing', 'Track conversion performance', '30 days', 'Yes']
            ]
          }
        ],
        subsections: [
          {
            title: 'Cookie Management',
            items: [
              'Use browser settings to control cookie preferences',
              'Opt-out links available in our cookie banner',
              'Google Analytics opt-out browser add-on available',
              'Contact us for assistance with privacy settings'
            ]
          },
          {
            title: 'Third-Party Analytics',
            items: [
              'Google Analytics (with IP anonymization enabled)',
              'Hotjar for user experience insights (anonymized)',
              'Social media pixels for conversion tracking',
              'All data collected in compliance with privacy laws'
            ]
          }
        ]
      }
    },
    {
      id: 'retention',
      title: 'Data Retention & Deletion',
      icon: 'Clock',
      color: 'carbonGray',
      content: {
        text: 'We retain personal information only as long as necessary for business purposes and legal requirements under Canadian law.',
        subsections: [
          {
            title: 'Retention Periods',
            items: [
              'Active client data: Duration of business relationship plus 3 years',
              'Financial records: 7 years as required by Canada Revenue Agency',
              'Project files and communications: 3 years after project completion',
              'Marketing data: Until consent is withdrawn or 2 years of inactivity',
              'Website analytics: 26 months (Google Analytics default)'
            ]
          },
          {
            title: 'Secure Deletion Process',
            items: [
              'Automated deletion systems for expired data',
              'Manual review process for sensitive information',
              'Secure wiping of electronic storage devices',
              'Certificate of destruction for physical documents',
              'Verification that third-party services delete data'
            ]
          },
          {
            title: 'Right to Deletion',
            items: [
              'Request deletion of your personal information at any time',
              'We will confirm identity before processing deletion requests',
              'Some information may be retained if required by law',
              'Response provided within 30 days of verified request'
            ]
          }
        ]
      }
    },
    {
      id: 'rights',
      title: 'Your Privacy Rights',
      icon: 'CheckCircle',
      color: 'appleBlue',
      content: {
        text: 'Under Canadian privacy law, you have specific rights regarding your personal information. We respect these rights and provide easy ways to exercise them.',
        subsections: [
          {
            title: 'Access Rights',
            items: [
              'Request a copy of all personal information we hold about you',
              'Understand how your information is being used',
              'Receive information in a commonly used electronic format',
              'No charge for reasonable requests (fees may apply for excessive requests)'
            ]
          },
          {
            title: 'Correction Rights',
            items: [
              'Update or correct inaccurate personal information',
              'Add missing information to your records',
              'Request verification of corrected information',
              'Notification to third parties of corrections when required'
            ]
          },
          {
            title: 'Control Rights',
            items: [
              'Withdraw consent for marketing communications',
              'Opt-out of data processing where consent is the legal basis',
              'Object to processing based on legitimate interests',
              'Request restriction of processing in certain circumstances'
            ]
          },
          {
            title: 'Portability Rights',
            items: [
              'Receive personal data in machine-readable format',
              'Transfer data directly to another service provider',
              'Applicable to data processed by automated means',
              'Does not apply to data processed for public interest tasks'
            ]
          }
        ],
        highlights: [
          {
            type: 'success',
            title: 'How to Exercise Rights',
            content: 'Contact us at privacy@xtoicstudio.com or through our contact form. We respond to all requests within 30 days and verify identity before processing.'
          }
        ]
      }
    },
    {
      id: 'international',
      title: 'International Data Transfers',
      icon: 'MapPin',
      color: 'zoroRed',
      content: {
        text: 'While we prioritize Canadian data storage, some services may involve international transfers. We ensure adequate protection through approved mechanisms.',
        subsections: [
          {
            title: 'Data Localization Preference',
            items: [
              'Primary data storage in Canadian data centers',
              'Backup systems located within Canada when possible',
              'Preference for Canadian service providers',
              'Regular audits of data location and processing'
            ]
          },
          {
            title: 'International Transfer Protections',
            items: [
              'Adequacy decisions by Privacy Commissioner of Canada',
              'Standard contractual clauses for EU transfers',
              'Binding corporate rules for multinational service providers',
              'Additional safeguards for sensitive personal information'
            ]
          },
          {
            title: 'Current International Services',
            items: [
              'Google Workspace (with Canadian data residency)',
              'Adobe Creative Cloud (global but privacy compliant)',
              'Zoom for client communications (Canadian data centers)',
              'GitHub for code repository (with privacy controls)'
            ]
          }
        ]
      }
    },
    {
      id: 'children',
      title: 'Children\'s Privacy Protection',
      icon: 'Baby',
      color: 'appleBlue',
      content: {
        text: 'XTOIC STUDIO does not knowingly collect personal information from children under 18 years of age without parental consent, in compliance with Canadian privacy laws.',
        subsections: [
          {
            title: 'Age Verification',
            items: [
              'We request age confirmation during account creation',
              'Parental consent required for users under 18',
              'Special protections for school and youth organization projects',
              'Enhanced security measures for any youth-related data'
            ]
          },
          {
            title: 'Parental Rights',
            items: [
              'Parents can request access to their child\'s information',
              'Right to correct or delete child\'s personal data',
              'Withdraw consent for child\'s data processing',
              'Receive notification of any changes to child\'s data handling'
            ]
          }
        ],
        highlights: [
          {
            type: 'warning',
            title: 'Child Data Discovery',
            content: 'If we discover we have collected information from a child without proper consent, we will delete it immediately and notify parents within 24 hours.'
          }
        ]
      }
    },
    {
      id: 'ai-processing',
      title: 'AI & Machine Learning Data Processing',
      icon: 'Brain',
      color: 'carbonGray',
      content: {
        text: 'XTOIC STUDIO may use artificial intelligence and machine learning tools to improve our services. All AI processing is conducted with privacy protection and transparency.',
        subsections: [
          {
            title: 'AI Tool Usage',
            items: [
              'Design assistance and creative enhancement tools',
              'Content optimization and SEO analysis',
              'Project management and workflow automation',
              'Quality assurance and error detection systems'
            ]
          },
          {
            title: 'Data Protection in AI Processing',
            items: [
              'Client data anonymization before AI processing when possible',
              'Contractual restrictions on AI provider data usage',
              'Regular audits of AI tool privacy compliance',
              'Option to opt-out of AI-assisted services'
            ]
          },
          {
            title: 'AI Transparency',
            items: [
              'Clear disclosure when AI tools are used in projects',
              'Explanation of AI\'s role in service delivery',
              'Human oversight and quality control for all AI outputs',
              'Client notification of any new AI tools before implementation'
            ]
          }
        ]
      }
    },
    {
      id: 'updates',
      title: 'Policy Updates & Changes',
      icon: 'RefreshCw',
      color: 'appleBlue',
      content: {
        text: 'We may update this privacy policy to reflect changes in our practices, technology, or legal requirements. We provide transparent notification of all changes.',
        subsections: [
          {
            title: 'Update Notification Process',
            items: [
              'Email notification to all active clients 30 days before changes take effect',
              'Website banner notification for all visitors',
              'Detailed changelog available on our privacy policy page',
              'Option to review previous versions through version control system'
            ]
          },
          {
            title: 'Types of Updates',
            items: [
              'Minor clarifications and corrections (immediate effect)',
              'New service offerings or technology implementations (30-day notice)',
              'Legal requirement changes (as required by law)',
              'Material changes to data processing (60-day notice with opt-out option)'
            ]
          }
        ],
        highlights: [
          {
            type: 'info',
            title: 'Continued Use Consent',
            content: 'Continued use of our services after policy updates constitutes acceptance of the changes. You may terminate services if you disagree with updates.'
          }
        ]
      }
    },
    {
      id: 'complaints',
      title: 'Privacy Complaints & Concerns',
      icon: 'AlertTriangle',
      color: 'zoroRed',
      content: {
        text: 'We take privacy concerns seriously and provide multiple channels for addressing any issues or complaints about our data handling practices.',
        subsections: [
          {
            title: 'Internal Complaint Process',
            items: [
              'Contact our Privacy Officer at privacy@xtoicstudio.com',
              'Phone consultation available during business hours',
              'Written complaints acknowledged within 3 business days',
              'Full investigation and response within 30 days'
            ]
          },
          {
            title: 'External Complaint Options',
            items: [
              'Office of the Information and Privacy Commissioner of Alberta',
              'Privacy Commissioner of Canada (for federal matters)',
              'Better Business Bureau of Alberta',
              'Alberta Law Society for legal practice complaints'
            ]
          },
          {
            title: 'Regulatory Authorities',
            items: [
              'Alberta: Office of the Information and Privacy Commissioner',
              'Address: Suite 2460, 801 - 6 Avenue SW, Calgary, AB T2P 3W2',
              'Phone: 403-297-2728',
              'Federal: Privacy Commissioner of Canada',
              'Address: 30 Victoria Street, Gatineau, QC K1A 1H3',
              'Phone: 1-800-282-1376'
            ]
          }
        ]
      }
    },
    {
      id: 'contact',
      title: 'Privacy Contact Information',
      icon: 'Mail',
      color: 'appleBlue',
      content: {
        text: 'For any privacy-related questions, concerns, or requests, please contact XTOIC STUDIO through the following channels:',
        subsections: [
          {
            title: 'Privacy Officer Contact',
            items: [
              'Email: privacy@xtoicstudio.com',
              'Subject Line: Privacy Request - [Type of Request]',
              'Mailing Address: XTOIC STUDIO Privacy Officer, Edmonton, AB, Canada',
              'Response Time: Within 30 days of verified request'
            ]
          },
          {
            title: 'General Contact Information',
            items: [
              'Business Email: hello@xtoicstudio.com',
              'Website: www.xtoicstudio.com',
              'Business Hours: Monday-Friday, 9:00 AM - 6:00 PM MST',
              'Emergency Privacy Concerns: Available 24/7 via email'
            ]
          },
          {
            title: 'Request Verification Process',
            items: [
              'Photo ID required for access requests',
              'Business email confirmation for corporate clients',
              'Two-factor authentication for sensitive requests',
              'Secure document exchange portal available'
            ]
          }
        ],
        highlights: [
          {
            type: 'success',
            title: 'Quick Response Guarantee',
            content: 'We acknowledge all privacy requests within 3 business days and provide complete responses within 30 days as required by Canadian law.'
          }
        ]
      }
    }
  ]
};

// Version history for audit trail
export const privacyVersionHistory: Omit<PrivacyVersion, 'sections'>[] = [
  {
    version: "3.2.0",
    effectiveDate: "2025-01-15",
    lastUpdated: "2025-01-15",
    changelog: [
      "Enhanced data retention policies",
      "Added cookie management preferences",
      "Updated third-party service integrations",
      "Strengthened security measures documentation",
      "Added AI/ML data processing disclosures"
    ]
  },
  {
    version: "3.1.1",
    effectiveDate: "2024-11-01",
    lastUpdated: "2024-11-01",
    changelog: [
      "Minor corrections to contact information",
      "Updated regulatory authority addresses",
      "Clarified international transfer mechanisms"
    ]
  },
  {
    version: "3.1.0",
    effectiveDate: "2024-08-15",
    lastUpdated: "2024-08-15",
    changelog: [
      "Added children's privacy protection section",
      "Enhanced cookie policy details",
      "Updated data security measures",
      "Added complaint process information"
    ]
  },
  {
    version: "3.0.0",
    effectiveDate: "2024-05-01",
    lastUpdated: "2024-05-01",
    changelog: [
      "Major revision for enhanced PIPA compliance",
      "Added comprehensive data mapping",
      "Enhanced user rights documentation",
      "Added AI processing disclosure section"
    ]
  },
  {
    version: "2.5.0",
    effectiveDate: "2024-01-01",
    lastUpdated: "2024-01-01",
    changelog: [
      "Updated for new Alberta privacy regulations",
      "Enhanced international transfer protections",
      "Added data breach notification procedures"
    ]
  },
  {
    version: "2.0.0",
    effectiveDate: "2023-07-01",
    lastUpdated: "2023-07-01",
    changelog: [
      "Initial comprehensive privacy policy",
      "Baseline PIPEDA and PIPA compliance",
      "Established privacy rights framework"
    ]
  }
];

export default privacyData;