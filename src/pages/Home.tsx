import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Home = () => {
  const { t } = useTranslation();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const tracks = [
    {
      name: t('home.tracks.long'),
      description: 'A challenging 15km track with various obstacles',
      coordinates: [41.0082, 28.9784],
    },
    {
      name: t('home.tracks.short'),
      description: '5km track perfect for beginners',
      coordinates: [41.0082, 28.9684],
    },
    {
      name: t('home.tracks.obstacle'),
      description: 'Intense obstacle course with 20+ challenges',
      coordinates: [41.0082, 28.9884],
    },
    {
      name: t('home.tracks.kids'),
      description: 'Safe and fun 2km track for young adventurers',
      coordinates: [41.0082, 28.9984],
    },
  ];

  const sponsors = [
    { name: 'Sponsor 1', logo: '/sponsors/sponsor1.png' },
    { name: 'Sponsor 2', logo: '/sponsors/sponsor2.png' },
    // Add more sponsors here
  ];

  const quickLinks = [
    { name: 'Races', href: '/races' },
    { name: 'Program', href: '/information#program' },
    { name: 'Weather', href: '/information#weather' },
    { name: 'Rules', href: '/information#rules' },
    { name: 'Requirements', href: '/information#requirements' },
    { name: 'Transportation', href: '/information#transportation' },
    { name: 'News', href: '/information#news' },
    { name: 'Results', href: '/results' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative h-[60vh] bg-gray-900">
        <Slider {...sliderSettings} className="h-full">
          {[1, 2, 3].map((index) => (
            <div key={index} className="h-[60vh] relative">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(/slides/slide${index}.jpg)` }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('home.slogan')}</h1>
                  <Link
                    to="/auth"
                    className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
                  >
                    {t('home.registerNow')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Quick Links Table */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block p-4 text-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks Section with Map */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Track Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {tracks.map((track) => (
                <div key={track.name} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-bold text-lg">{track.name}</h3>
                  <p className="text-gray-600">{track.description}</p>
                </div>
              ))}
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden">
              <MapContainer
                center={[41.0082, 28.9784]}
                zoom={13}
                className="h-full w-full"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {tracks.map((track) => (
                  <Marker key={track.name} position={track.coordinates}>
                    <Popup>{track.name}</Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </section>

      {/* News & Announcements */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">News & Announcements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Latest Update {index}</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to="/information#news" className="text-primary hover:text-primary-dark">
                  Read more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="bg-white p-4 rounded-lg shadow flex items-center justify-center"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 