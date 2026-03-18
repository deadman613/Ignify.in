import {
  Target,
  Eye,
  Award,
  Users,
  Lightbulb,
  Shield,
  TrendingUp,
  Heart,
} from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.',
    },
    {
      icon: Shield,
      title: 'Reliability',
      description:
        'Our commitment to quality and consistency ensures your systems run smoothly and securely.',
    },
    {
      icon: Heart,
      title: 'Client-Focused',
      description:
        'Your success is our success. We build lasting partnerships based on trust and mutual growth.',
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description:
        'We pursue excellence in everything we do, from initial consultation to ongoing support.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  const expertise = [
    'Cloud Infrastructure',
    'Cybersecurity',
    'DevOps & Automation',
    'Data Analytics',
    'Mobile Development',
    'AI & Machine Learning',
    'IoT Solutions',
    'Blockchain Technology',
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About Ignify
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in digital transformation and technology excellence
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Ignify is a leading technology services provider specializing in comprehensive
                  hardware and software solutions. Founded with a vision to empower businesses
                  through innovative technology, we have grown into a trusted partner for
                  organizations of all sizes.
                </p>
                <p>
                  Our team of experienced professionals brings together expertise in software
                  development, hardware infrastructure, web technologies, and IT consulting. We
                  pride ourselves on delivering solutions that not only meet current needs but also
                  scale with your business growth.
                </p>
                <p>
                  With a client-first approach, we take the time to understand your unique
                  challenges and objectives. This allows us to craft customized solutions that
                  deliver real value and measurable results.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-xl text-center hover:shadow-lg transition-all"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 w-14 h-14 rounded-lg flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To empower businesses with reliable, innovative technology solutions that drive
                growth, efficiency, and competitive advantage. We are committed to delivering
                exceptional service and building long-term partnerships based on trust, expertise,
                and results.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 w-14 h-14 rounded-lg flex items-center justify-center">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To be the most trusted technology partner for businesses worldwide, recognized for
                our innovation, reliability, and unwavering commitment to client success. We
                envision a future where technology seamlessly enables business transformation and
                sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 w-14 h-14 rounded-lg flex items-center justify-center">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Our Expertise
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology capabilities across multiple domains
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-white dark:bg-gray-900 rounded-lg text-center hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-12 text-center">
            <Users className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              What Makes Us Different
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 text-blue-50 leading-relaxed">
              <p>
                Unlike traditional IT service providers, we combine deep technical expertise with a
                genuine understanding of business challenges. Our holistic approach ensures that
                every solution we deliver aligns with your strategic objectives.
              </p>
              <p>
                We don't just implement technology—we partner with you to transform your business.
                Our dedicated team works as an extension of your organization, committed to your
                long-term success.
              </p>
              <p>
                With transparent communication, proactive support, and a track record of delivering
                results, Ignify is the partner you can trust to navigate the complexities of modern
                technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
