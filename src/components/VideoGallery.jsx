import React from 'react';

const VideoGallery = () => {
  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/K4upDOEe4e4",
      title: "Shrimad Bhagwat Katha Mumbai 1",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/dkRPS8NL_Bw",
      title: "Shrimad Bhagwat Katha Mumbai 2",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/Wpy8rtB4AZs",
      title: "Shrimad Bhagwat Katha Mumbai 3",
    },
    {
      id: 4,
      src: "https://www.youtube.com/embed/VoUnTJiHTSE",
      title: "Shrimad Bhagwat Katha Mumbai 4",
    },
    {
      id: 5,
      src: "https://www.youtube.com/embed/d3p32fA2Fyo",
      title: "Shrimad Bhagwat Katha Mumbai 5",
    },
    {
      id: 6,
      src: "https://www.youtube.com/embed/c58zXxl2mWc",
      title: "Shrimad Bhagwat Katha Mumbai 6",
    },
    {
        id: 7,
        src: "https://www.youtube.com/embed/QZyP-Dv-KpM",
        title: "Shrimad Bhagwat Katha Mumbai 6",
      },
      {
        id: 8,
        src: "https://www.youtube.com/embed/0VrbcIMqBps",
        title: "Shrimad Bhagwat Katha Mumbai 6",
      },
      {
        id: 9,
        src: "https://www.youtube.com/embed/0VrbcIMqBps",
        title: "Shrimad Bhagwat Katha Mumbai 6",
      },
      {
        id: 10,
        src: "https://www.youtube.com/embed/ANBNwMhdVOw",
        title: "Shrimad Bhagwat Katha Mumbai 6",
      },
      {
        id: 11,
        src: "https://www.youtube.com/embed/4j4-vBvhk2M",
        title: "Shrimad Bhagwat Katha Mumbai 6",
      },
      {
        id: 12,
        src: "https://www.youtube.com/embed/nV9fB6YY-IU",
        title: "Shrimad Bhagwat Katha Mumbai 6",
      },
      {
        id: 13,
        src: "https://www.youtube.com/embed/8R5KRr1Upng",
        title: "Shrimad Bhagwat Katha Mumbai 6",
      },
      {
        id: 14,
        src: "https://www.youtube.com/embed/biLgirnpQ-U",
        title: "Shrimad Bhagwat Katha Mumbai 6",
      },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 m-auto">
      <h2 className="text-2xl font-bold mb-6 mt-3  ">VIDEOS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="relative rounded-lg shadow-lg overflow-hidden">
            <iframe
              className="w-full h-[200px] sm:h-[240px] lg:h-[280px]"
              src={`${video.src}?rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
