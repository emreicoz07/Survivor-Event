import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  thumbnail: string;
  url: string;
  title: string;
  description: string;
  year: number;
  category: string;
}

const Media = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'all' | 'images' | 'videos'>('all');
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  // Sample media data - in a real app, this would come from an API
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: 'image',
      thumbnail: '/media/thumbnails/image1.jpg',
      url: '/media/images/image1.jpg',
      title: 'Elite Athletes in Action',
      description: 'Participants tackling the challenging obstacles in the Long Track',
      year: 2023,
      category: 'Long Track',
    },
    {
      id: 2,
      type: 'video',
      thumbnail: '/media/thumbnails/video1.jpg',
      url: 'https://www.youtube.com/embed/example1',
      title: 'Event Highlights 2023',
      description: 'Best moments from last year\'s Survivor Parkur event',
      year: 2023,
      category: 'Highlights',
    },
    // Add more media items...
  ];

  const years = [2023, 2022, 2021];
  const categories = ['Long Track', 'Short Track', 'Obstacle Course', 'Kids Track', 'Highlights'];

  const filteredMedia = mediaItems.filter((item) => {
    const matchesType =
      activeTab === 'all' ||
      (activeTab === 'images' && item.type === 'image') ||
      (activeTab === 'videos' && item.type === 'video');
    const matchesYear = selectedYear === 'all' || item.year === selectedYear;
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

    return matchesType && matchesYear && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Media Gallery</h1>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Media Type
              </label>
              <div className="flex rounded-md shadow-sm">
                <button
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-l-md ${
                    activeTab === 'all'
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveTab('all')}
                >
                  All
                </button>
                <button
                  className={`flex-1 px-4 py-2 text-sm font-medium ${
                    activeTab === 'images'
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveTab('images')}
                >
                  Images
                </button>
                <button
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-r-md ${
                    activeTab === 'videos'
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveTab('videos')}
                >
                  Videos
                </button>
              </div>
            </div>

            {/* Year Filter */}
            <div>
              <label
                htmlFor="year"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Year
              </label>
              <select
                id="year"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                value={selectedYear}
                onChange={(e) =>
                  setSelectedYear(e.target.value === 'all' ? 'all' : Number(e.target.value))
                }
              >
                <option value="all">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category
              </label>
              <select
                id="category"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            <div className="flex items-end">
              <button
                onClick={() => {
                  setActiveTab('all');
                  setSelectedYear('all');
                  setSelectedCategory('all');
                }}
                className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => setSelectedMedia(item)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary bg-opacity-75 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                  <span>{item.year}</span>
                  <span>{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Media Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                onClick={() => setSelectedMedia(null)}
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  {selectedMedia.type === 'image' ? (
                    <img
                      src={selectedMedia.url}
                      alt={selectedMedia.title}
                      className="w-full h-auto"
                    />
                  ) : (
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={selectedMedia.url}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  )}
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">{selectedMedia.title}</h3>
                    <p className="mt-2 text-gray-600">{selectedMedia.description}</p>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setSelectedMedia(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {filteredMedia.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No media found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Media; 