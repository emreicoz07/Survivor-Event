import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Information = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('program');

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const sections = [
    {
      id: 'program',
      title: 'Event Program',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Day 1 - June 15, 2024</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>07:00 - Registration Opens</li>
            <li>08:00 - Elite Long Track Challenge Starts</li>
            <li>10:00 - Sprint Adventure Starts</li>
            <li>14:00 - Awards Ceremony (Long Track & Sprint)</li>
          </ul>

          <h3 className="text-lg font-semibold">Day 2 - June 16, 2024</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>08:00 - Registration Opens</li>
            <li>09:00 - Obstacle Master Challenge Starts</li>
            <li>11:00 - Kids Adventure Starts</li>
            <li>15:00 - Awards Ceremony (Obstacle & Kids)</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'weather',
      title: 'Weather Conditions',
      content: (
        <div className="space-y-4">
          <p>
            The event will take place rain or shine. Here's what to expect:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Average temperature: 20-25°C (68-77°F)</li>
            <li>Humidity: 60-70%</li>
            <li>Chance of rain: 20%</li>
          </ul>
          <p className="text-sm text-gray-600">
            Weather updates will be posted 24 hours before the event.
          </p>
        </div>
      ),
    },
    {
      id: 'rules',
      title: 'Race Rules',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">General Rules</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Participants must wear their race number visibly at all times</li>
            <li>No external assistance is allowed during the race</li>
            <li>Follow marked routes and course officials' instructions</li>
            <li>Respect other participants and the environment</li>
          </ul>

          <h3 className="text-lg font-semibold">Safety Rules</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Wear appropriate footwear and clothing</li>
            <li>Stay hydrated - water stations available every 3km</li>
            <li>Report any injuries to course officials immediately</li>
            <li>Follow all safety instructions at obstacles</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'requirements',
      title: 'Registration Requirements',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Required Documents</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Valid ID or passport</li>
            <li>Medical certificate (not older than 6 months)</li>
            <li>Signed waiver form</li>
            <li>Proof of insurance</li>
          </ul>

          <h3 className="text-lg font-semibold">Age Requirements</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Long Track: 18+ years</li>
            <li>Short Track: 16+ years</li>
            <li>Obstacle Course: 18+ years</li>
            <li>Kids Track: 8-14 years</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'transportation',
      title: 'Transportation',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Shuttle Service</h3>
          <p>Free shuttle service available from designated parking areas to the event site.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Shuttle runs every 15 minutes</li>
            <li>First shuttle: 6:00 AM</li>
            <li>Last shuttle: 6:00 PM</li>
          </ul>

          <h3 className="text-lg font-semibold">Parking</h3>
          <p>Free parking available at designated areas:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Main Parking Area (P1) - 500 spots</li>
            <li>Overflow Parking (P2) - 300 spots</li>
            <li>VIP Parking - Pre-registration required</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'news',
      title: 'News & Announcements',
      content: (
        <div className="space-y-6">
          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-lg font-semibold">Early Bird Registration Now Open!</h3>
            <p className="text-sm text-gray-600">Posted on March 1, 2024</p>
            <p className="mt-2">
              Take advantage of our early bird pricing with up to 20% discount on all race
              categories.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-lg font-semibold">New Obstacle Course Features Revealed</h3>
            <p className="text-sm text-gray-600">Posted on February 15, 2024</p>
            <p className="mt-2">
              This year's obstacle course will feature three new challenging elements designed
              by professional parkour athletes.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4">
            <h3 className="text-lg font-semibold">Training Camp Dates Announced</h3>
            <p className="text-sm text-gray-600">Posted on February 1, 2024</p>
            <p className="mt-2">
              Prepare for the event with our professional training camps. Dates and
              registration details now available.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <nav className="sticky top-6 space-y-1" aria-label="Sidebar">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeSection === section.id
                      ? 'bg-primary text-white'
                      : 'text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Main content */}
          <main className="lg:col-span-9">
            <div className="space-y-16">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-16"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {section.title}
                  </h2>
                  <div className="prose prose-blue max-w-none">{section.content}</div>
                </section>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Information; 