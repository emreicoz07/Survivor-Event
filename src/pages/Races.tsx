import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Races = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const races = [
    {
      id: 1,
      name: 'Elite Long Track Challenge',
      category: 'long',
      date: '2024-06-15',
      time: '08:00',
      distance: '15km',
      difficulty: 'Expert',
      minAge: 18,
      maxParticipants: 200,
      price: '€75',
      description:
        'Our flagship race featuring a challenging 15km course with various natural and artificial obstacles. Designed for experienced athletes looking to push their limits.',
      requirements: [
        'Previous trail running experience',
        'Medical certificate',
        'Minimum age of 18',
        'Proper trail running gear',
      ],
    },
    {
      id: 2,
      name: 'Sprint Adventure',
      category: 'short',
      date: '2024-06-15',
      time: '10:00',
      distance: '5km',
      difficulty: 'Intermediate',
      minAge: 16,
      maxParticipants: 300,
      price: '€45',
      description:
        'A fast-paced 5km race perfect for beginners and intermediate athletes. Features a mix of running and moderate obstacles.',
      requirements: [
        'Basic fitness level',
        'Medical certificate',
        'Minimum age of 16',
        'Sports attire',
      ],
    },
    {
      id: 3,
      name: 'Obstacle Master',
      category: 'obstacle',
      date: '2024-06-16',
      time: '09:00',
      distance: '3km',
      difficulty: 'Advanced',
      minAge: 18,
      maxParticipants: 150,
      price: '€60',
      description:
        'Pure obstacle course race with over 20 challenging obstacles. Test your strength, agility, and endurance.',
      requirements: [
        'Good upper body strength',
        'Medical certificate',
        'Minimum age of 18',
        'Proper grip gloves required',
      ],
    },
    {
      id: 4,
      name: 'Kids Adventure',
      category: 'kids',
      date: '2024-06-16',
      time: '11:00',
      distance: '2km',
      difficulty: 'Beginner',
      minAge: 8,
      maxAge: 14,
      maxParticipants: 100,
      price: '€25',
      description:
        'A fun and safe course designed specifically for young adventurers. Includes age-appropriate obstacles and challenges.',
      requirements: [
        'Parent/Guardian consent',
        'Age between 8-14',
        'Sports attire',
        'Enthusiasm for adventure!',
      ],
    },
  ];

  const categories = [
    { id: 'all', name: 'All Races' },
    { id: 'long', name: 'Long Track' },
    { id: 'short', name: 'Short Track' },
    { id: 'obstacle', name: 'Obstacle Course' },
    { id: 'kids', name: 'Kids Track' },
  ];

  const filteredRaces =
    selectedCategory === 'all'
      ? races
      : races.filter((race) => race.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Race Categories</h1>
          <p className="text-lg text-gray-600">
            Choose from our variety of challenging races suitable for all skill levels
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Race Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredRaces.map((race) => (
            <div
              key={race.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{race.name}</h2>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <span>📅 {race.date}</span>
                  <span>⏰ {race.time}</span>
                  <span>📏 {race.distance}</span>
                  <span>💪 {race.difficulty}</span>
                  <span>👥 Max {race.maxParticipants}</span>
                  <span>💰 {race.price}</span>
                </div>
                <p className="text-gray-600 mb-6">{race.description}</p>
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Requirements:</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {race.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/auth"
                  className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                >
                  Register Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Information</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              All participants must sign a waiver and provide a valid medical certificate before
              the race.
            </p>
            <p>
              Race packets can be picked up the day before the event or on race day morning,
              at least 1 hour before your scheduled start time.
            </p>
            <p>
              Each participant will receive a race kit including a t-shirt, timing chip, and
              race number.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Races; 