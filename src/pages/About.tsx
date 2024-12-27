import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: 'John Smith',
      role: 'Event Director',
      image: '/team/john-smith.jpg',
      bio: 'Former professional athlete with 15 years of experience in organizing sports events.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Course Designer',
      image: '/team/sarah-johnson.jpg',
      bio: 'Certified parkour instructor and international competition judge.',
    },
    {
      name: 'Mike Wilson',
      role: 'Safety Coordinator',
      image: '/team/mike-wilson.jpg',
      bio: 'Emergency response specialist with expertise in outdoor event safety.',
    },
    // Add more team members...
  ];

  const milestones = [
    {
      year: 2018,
      title: 'The Beginning',
      description:
        'Survivor Parkur was founded with a vision to create challenging and exciting obstacle courses for all skill levels.',
    },
    {
      year: 2019,
      title: 'First Major Event',
      description:
        'Successfully hosted our first major event with over 500 participants from 10 different countries.',
    },
    {
      year: 2020,
      title: 'Virtual Challenge',
      description:
        'Adapted to global challenges by launching our first virtual event series.',
    },
    {
      year: 2021,
      title: 'International Recognition',
      description:
        'Received certification from international obstacle course racing federation.',
    },
    {
      year: 2022,
      title: 'Community Impact',
      description:
        'Launched youth development program and established partnerships with local schools.',
    },
    {
      year: 2023,
      title: 'Record Breaking',
      description:
        'Hosted largest event to date with 2,000+ participants and introduced new race categories.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0">
          <img
            src="/about/hero-image.jpg"
            alt="Survivor Parkur Event"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Survivor Parkur</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Pushing boundaries and creating unforgettable experiences through challenging
            obstacle courses and community engagement.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To create challenging and inclusive obstacle course events that inspire people
              to push their limits, build confidence, and foster a supportive community of
              athletes and enthusiasts.
            </p>
          </div>
        </div>
      </div>

      {/* History Timeline */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex items-center justify-center md:justify-end md:w-1/2">
                    <div
                      className={`bg-white p-6 rounded-lg shadow-md max-w-md ${
                        index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                      }`}
                    >
                      <div className="flex items-center mb-2">
                        <span className="text-primary font-bold text-xl">
                          {milestone.year}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 ml-4">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary text-4xl mb-4">💪</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenge</h3>
              <p className="text-gray-600">
                We believe in pushing boundaries and helping people discover their true
                potential through physical and mental challenges.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                Building a supportive and inclusive community where everyone can thrive and
                achieve their goals together.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                Striving for excellence in event organization, safety standards, and
                participant experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 