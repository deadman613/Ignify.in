import {
  Server,
  Code,
  Globe,
  Settings,
  Search,
  Headphones,
  Network,
  Wrench,
  CheckCircle,
} from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export const Services = ({ onNavigate }: ServicesProps) => {
  const services = [
    {
      icon: Server,
      title: 'Hardware Services',
      description:
        'Comprehensive hardware solutions including server infrastructure, networking equipment, and enterprise-grade workstations. We provide installation, configuration, and maintenance services to ensure optimal performance.',
      features: [
        'Server deployment and configuration',
        'Network infrastructure setup',
        'Hardware upgrades and maintenance',
        'Performance optimization',
      ],
    },
    {
      icon: Code,
      title: 'Software Development',
      description:
        'Custom software solutions tailored to your specific business needs. Our expert developers create scalable, secure, and efficient applications using the latest technologies and best practices.',
      features: [
        'Custom application development',
        'API development and integration',
        'Database design and optimization',
        'Legacy system modernization',
      ],
    },
    {
      icon: Globe,
      title: 'Website Development',
      description:
        'Modern, responsive websites that engage your audience and drive conversions. We build fast, secure, and SEO-friendly websites that reflect your brand and meet your business objectives.',
      features: [
        'Responsive web design',
        'E-commerce solutions',
        'Content management systems',
        'Progressive web applications',
      ],
    },
    {
      icon: Settings,
      title: 'Website Maintenance',
      description:
        'Ongoing support and maintenance to keep your website running smoothly. Regular updates, security patches, performance monitoring, and content updates ensure your site stays current and secure.',
      features: [
        'Regular security updates',
        'Performance monitoring',
        'Content updates',
        'Backup and recovery',
      ],
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description:
        'Improve your online visibility and drive organic traffic to your website. Our SEO experts implement proven strategies to boost your search engine rankings and increase qualified leads.',
      features: [
        'Keyword research and analysis',
        'On-page optimization',
        'Technical SEO audits',
        'Content strategy development',
      ],
    },
    {
      icon: Headphones,
      title: 'IT Consulting',
      description:
        'Strategic technology guidance to align IT infrastructure with your business goals. We help you make informed decisions about technology investments and digital transformation initiatives.',
      features: [
        'Technology strategy planning',
        'Digital transformation consulting',
        'IT infrastructure assessment',
        'Vendor selection and management',
      ],
    },
    {
      icon: Network,
      title: 'System Integration',
      description:
        'Seamlessly connect your business systems and applications to improve efficiency and data flow. We integrate disparate systems to create a unified technology ecosystem.',
      features: [
        'Third-party API integration',
        'Enterprise system integration',
        'Data migration services',
        'Workflow automation',
      ],
    },
    {
      icon: Wrench,
      title: 'Technical Support',
      description:
        '24/7 technical support to keep your business running without interruption. Our experienced support team is always ready to resolve issues quickly and efficiently.',
      features: [
        '24/7 helpdesk support',
        'Remote troubleshooting',
        'On-site technical assistance',
        'System monitoring and alerts',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to meet your business needs and drive
            digital transformation
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-2xl transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-500 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto leading-relaxed">
            Every business is unique. Let's discuss how we can tailor our services to meet your
            specific requirements.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
          >
            Contact Our Team
          </button>
        </div>
      </section>
    </div>
  );
};
