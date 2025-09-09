// data/terms.ts
export interface TermsSection {
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
  };
}

export interface TermsVersion {
  version: string;
  effectiveDate: string;
  lastUpdated: string;
  changelog?: string[];
  sections: TermsSection[];
}

export const termsData: TermsVersion = {
  version: "2.1.0",
  effectiveDate: "2025-01-15",
  lastUpdated: "2025-01-15",
  changelog: [
    "Updated intellectual property clauses for enhanced client protection",
    "Added new social media management service terms",
    "Clarified payment terms and late fee structure",
    "Updated liability limitations in accordance with Alberta law"
  ],
  sections: [
    {
      id: 'introduction',
      title: 'Introduction & Acceptance',
      icon: 'FileText',
      color: 'appleBlue',
      content: {
        text: 'Welcome to XTOIC STUDIO, a premier creative agency headquartered in Edmonton, Alberta, Canada. By accessing or using our services, you agree to be bound by these Terms of Service.',
        subsections: [
          {
            title: 'Our Services Include',
            items: [
              'Web Development & Custom Applications',
              'Graphic Design & Brand Identity',
              'Video Editing & Motion Graphics',
              'Marketing Strategy & Implementation',
              'Branding & Visual Identity Systems',
              'Social Media Management & Content Creation',
              'Digital Marketing & SEO Services'
            ]
          }
        ],
        highlights: [
          {
            type: 'info',
            title: 'Legal Jurisdiction',
            content: 'These terms are governed by Canadian federal law and Alberta provincial regulations, with jurisdiction in Edmonton, Alberta.'
          }
        ]
      }
    },
    {
      id: 'services',
      title: 'Services & Scope',
      icon: 'Zap',
      color: 'zoroRed',
      content: {
        text: 'XTOIC STUDIO provides comprehensive creative and digital services under Canadian federal law and Alberta provincial regulations. All services are subject to project agreements and detailed scope definitions.',
        subsections: [
          {
            title: 'Service Categories',
            items: [
              'Creative Services: Custom design solutions, brand identity, visual content creation',
              'Technical Services: Web development, digital platforms, technical implementation',
              'Marketing Services: Strategy development, campaign management, performance analytics',
              'Maintenance Services: Ongoing support, updates, and optimization'
            ]
          },
          {
            title: 'Project Scope',
            items: [
              'All projects require a signed Statement of Work (SOW)',
              'Scope changes must be approved in writing with revised estimates',
              'Timeline estimates are based on client feedback and approval cycles',
              'Rush orders may incur additional fees (minimum 25% surcharge)'
            ]
          }
        ]
      }
    },
    {
      id: 'payment',
      title: 'Payment Terms & Billing',
      icon: 'Scale',
      color: 'appleBlue',
      content: {
        text: 'Payment terms are governed by Canadian commercial law and Alberta\'s Fair Trading Act. All amounts are in Canadian Dollars (CAD) unless otherwise specified in writing.',
        subsections: [
          {
            title: 'Payment Schedule',
            items: [
              '50% deposit required to commence work on all projects',
              'Remaining balance due upon project completion and delivery',
              'Net 30 payment terms for pre-approved corporate clients',
              'Monthly retainer clients billed on the 1st of each month'
            ]
          },
          {
            title: 'Late Payment Policy',
            items: [
              'Late payment fee: 2% per month (24% annually) on overdue amounts',
              'Collection costs and legal fees may be added to outstanding balances',
              'Work may be suspended on accounts 30+ days overdue',
              'Domain/hosting services may be suspended for non-payment'
            ]
          }
        ],
        highlights: [
          {
            type: 'warning',
            title: 'GST/HST Notice',
            content: 'All prices are subject to applicable GST (5%) as required by the Canada Revenue Agency. GST registration number available upon request.'
          }
        ]
      }
    },
    {
      id: 'intellectual',
      title: 'Intellectual Property Rights',
      icon: 'Lock',
      color: 'carbonGray',
      content: {
        text: 'Intellectual property rights are protected under the Canadian Copyright Act, Patent Act, and Alberta\'s intellectual property laws. Rights transfer occurs upon full payment completion.',
        subsections: [
          {
            title: 'Client Rights',
            items: [
              'Full ownership of final deliverables upon complete payment',
              'Rights to modify, reproduce, and distribute completed work',
              'Access to source files and working documents (when applicable)',
              'Unlimited usage rights for intended business purposes'
            ]
          },
          {
            title: 'XTOIC STUDIO Rights',
            items: [
              'Portfolio and case study usage rights with client attribution',
              'Retention of working methods, processes, and general techniques',
              'Right to create derivative works for portfolio demonstration',
              'Usage in marketing materials and award submissions'
            ]
          },
          {
            title: 'Third-Party Assets',
            items: [
              'Stock photos, fonts, and assets require separate licensing',
              'Client responsible for obtaining necessary usage rights',
              'XTOIC STUDIO provides guidance on licensing requirements',
              'Premium assets costs passed through at cost plus 15% handling'
            ]
          }
        ]
      }
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      icon: 'Shield',
      color: 'zoroRed',
      content: {
        text: 'Liability limitations are established under Alberta\'s Limitations Act and Canadian contract law. XTOIC STUDIO\'s total liability is limited to the total project value or $10,000 CAD, whichever is lesser.',
        subsections: [
          {
            title: 'Liability Exclusions',
            items: [
              'No liability for indirect, consequential, or punitive damages',
              'No responsibility for third-party service outages or failures',
              'No liability for client-provided content or materials',
              'No responsibility for results of client modifications post-delivery'
            ]
          },
          {
            title: 'Professional Indemnity',
            items: [
              'XTOIC STUDIO maintains professional liability insurance',
              'Coverage amount: $2,000,000 CAD per occurrence',
              'Policy details available upon written request',
              'Claims must be reported within limitation periods per Alberta law'
            ]
          }
        ],
        highlights: [
          {
            type: 'warning',
            title: 'Time Limitations',
            content: 'Under Alberta\'s Limitations Act, legal action must be commenced within 2 years of discovery of the claim or 10 years from the act or omission, whichever comes first.'
          }
        ]
      }
    },
    {
      id: 'privacy',
      title: 'Privacy & Data Protection',
      icon: 'Eye',
      color: 'appleBlue',
      content: {
        text: 'XTOIC STUDIO complies with the Personal Information Protection Act (PIPA) of Alberta and the Personal Information Protection and Electronic Documents Act (PIPEDA) of Canada.',
        subsections: [
          {
            title: 'Data Collection',
            items: [
              'We collect only necessary information for service delivery',
              'Client data is stored securely in Canadian data centers',
              'Access limited to authorized personnel on need-to-know basis',
              'Regular security audits and compliance reviews conducted'
            ]
          },
          {
            title: 'Data Usage',
            items: [
              'Information used solely for contracted services',
              'No sale or sharing of client data with third parties',
              'Analytics data anonymized and aggregated',
              'Marketing communications only with explicit consent'
            ]
          }
        ]
      }
    },
    {
      id: 'termination',
      title: 'Contract Termination',
      icon: 'AlertTriangle',
      color: 'zoroRed',
      content: {
        text: 'Either party may terminate services with proper notice as outlined in individual project agreements. Termination procedures comply with Alberta\'s commercial contract law.',
        subsections: [
          {
            title: 'Client Termination',
            items: [
              '14 days written notice required for ongoing projects',
              'Payment due for all completed work and expenses incurred',
              'Partial deliverables provided based on completion percentage',
              'Final invoice due within 30 days of termination notice'
            ]
          },
          {
            title: 'XTOIC STUDIO Termination',
            items: [
              'May terminate for non-payment after 30 days notice',
              'Immediate termination for breach of contract or illegal activity',
              '14 days notice for termination without cause',
              'Reasonable transition period provided when possible'
            ]
          }
        ]
      }
    },
    {
      id: 'disputes',
      title: 'Dispute Resolution',
      icon: 'Users',
      color: 'carbonGray',
      content: {
        text: 'Disputes will be resolved through negotiation, mediation, or arbitration in Edmonton, Alberta, under Alberta\'s Arbitration Act and Alternative Dispute Resolution procedures.',
        subsections: [
          {
            title: 'Resolution Process',
            items: [
              'Initial attempt at direct negotiation within 30 days',
              'Mediation through Alberta Arbitration and Mediation Society',
              'Binding arbitration if mediation fails',
              'Court proceedings as final resort in Alberta Court of Queen\'s Bench'
            ]
          }
        ],
        highlights: [
          {
            type: 'info',
            title: 'Legal Costs',
            content: 'Prevailing party may recover reasonable legal costs and attorney fees as permitted under Alberta law.'
          }
        ]
      }
    },
    {
      id: 'modifications',
      title: 'Terms Modifications',
      icon: 'Clock',
      color: 'appleBlue',
      content: {
        text: 'XTOIC STUDIO reserves the right to modify these terms with 30 days written notice. Continued use of services constitutes acceptance of modified terms.',
        subsections: [
          {
            title: 'Update Process',
            items: [
              'Email notification to all active clients',
              'Posted updates on company website with version control',
              'Grace period for existing projects under previous terms',
              'Option to terminate services if changes are unacceptable'
            ]
          }
        ]
      }
    },
    {
      id: 'contact',
      title: 'Contact Information',
      icon: 'MapPin',
      color: 'zoroRed',
      content: {
        text: 'For questions about these terms or to report issues, please contact XTOIC STUDIO through the following methods:',
        subsections: [
          {
            title: 'Business Information',
            items: [
              'XTOIC STUDIO',
              'Edmonton, Alberta, Canada',
              'Email: legal@xtoicstudio.com',
              'Phone: Available upon client onboarding',
              'Business Hours: Monday-Friday 9:00 AM - 6:00 PM MST'
            ]
          }
        ]
      }
    }
  ]
};

// Version history for audit trail
export const termsVersionHistory: Omit<TermsVersion, 'sections'>[] = [
  {
    version: "2.1.0",
    effectiveDate: "2025-01-15",
    lastUpdated: "2025-01-15",
    changelog: [
      "Updated intellectual property clauses for enhanced client protection",
      "Added new social media management service terms",
      "Clarified payment terms and late fee structure",
      "Updated liability limitations in accordance with Alberta law"
    ]
  },
  {
    version: "2.0.1",
    effectiveDate: "2024-10-01",
    lastUpdated: "2024-10-01",
    changelog: [
      "Minor corrections to contact information",
      "Updated GST registration details",
      "Clarified dispute resolution process"
    ]
  },
  {
    version: "2.0.0",
    effectiveDate: "2024-07-01",
    lastUpdated: "2024-07-01",
    changelog: [
      "Major revision for compliance with updated PIPA regulations",
      "Added comprehensive social media management terms",
      "Updated payment processing and billing procedures",
      "Enhanced intellectual property protection clauses"
    ]
  },
  {
    version: "1.5.0",
    effectiveDate: "2024-03-01",
    lastUpdated: "2024-03-01",
    changelog: [
      "Initial comprehensive terms of service",
      "Established baseline legal framework",
      "Added Alberta provincial law compliance"
    ]
  }
];

export default termsData;