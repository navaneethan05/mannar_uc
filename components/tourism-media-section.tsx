'use client';

import { useState } from 'react';
import { useTranslation } from 'next-i18next';

export function TourismMediaSection() {
  const { t } = useTranslation('common');
  const [currentVideo, setCurrentVideo] = useState(0);
  
  const videos = [
    { 
      id: "YWCMA2G22A8", 
      title: "Mannar Sri Lanka - Exploring the Hidden Gem",
      description: "Discover the untouched beauty of Mannar with its pristine beaches, historic sites, and unique wildlife in this comprehensive tour."
    },
    { 
      id: "qRcIv8PJTG8", 
      title: "Discover Mannar - Sri Lanka's Untouched Paradise",
      description: "Experience the serene landscapes and rich cultural heritage that make Mannar a truly special destination in Sri Lanka."
    },
    { 
      id: "tL2qrDNBLzQ", 
      title: "Mannar Island - Cultural Heritage & Natural Beauty",
      description: "Explore the fascinating blend of Tamil and colonial influences alongside breathtaking natural attractions on Mannar Island."
    },
    { 
      id: "LRAL62axdmE", 
      title: "Mannar Tourism - Beaches, History & Wildlife",
      description: "From the famous Baobab trees to migratory bird watching, Mannar offers diverse experiences for every type of traveler."
    },
  ];

  const handleVideoSelect = (index) => {
    setCurrentVideo(index);
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('tourism.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('tourism.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main video player */}
          <div className="lg:col-span-3">
            <div className="rounded-xl overflow-hidden shadow-xl bg-black aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videos[currentVideo].id}?rel=0&autoplay=1`}
                title={videos[currentVideo].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
            
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {videos[currentVideo].title}
              </h3>
              <p className="text-gray-600 mt-2">
                {videos[currentVideo].description}
              </p>
            </div>
            
            {/* About Mannar section */}
            <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">{t('tourism.aboutMannar')}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('tourism.aboutDescription1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('tourism.aboutDescription2')}
              </p>
            </div>
          </div>
          
          {/* Video suggestions sidebar */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('tourism.moreVideos')}</h3>
            <div className="space-y-4">
              {videos.map((video, index) => (
                <div 
                  key={video.id}
                  className={`flex gap-3 bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg ${currentVideo === index ? 'ring-2 ring-primary' : ''}`}
                  onClick={() => handleVideoSelect(index)}
                >
                  <div className="relative w-1/3 min-w-[120px]">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center opacity-90">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 flex-1">
                    <h4 className="text-sm font-medium text-gray-800 line-clamp-2">
                      {video.title}
                    </h4>
                    <div className="flex items-center mt-1 text-xs text-gray-500">
                      <span>YouTube</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional info */}
            <div className="mt-8 p-5 bg-primary/5 rounded-xl border border-primary/10">
              <h3 className="text-lg font-semibold text-primary mb-3">{t('tourism.travelTips')}</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {t('tourism.tip1')}
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {t('tourism.tip2')}
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {t('tourism.tip3')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}