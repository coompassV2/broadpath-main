
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    // A/B testing - randomly select one of the seven videos
    const videoUrls = [
      'https://videos.pexels.com/video-files/9882072/9882072-uhd_2560_1440_30fps.mp4',
      'https://videos.pexels.com/video-files/1448735/1448735-uhd_2732_1440_24fps.mp4',
      'https://videos.pexels.com/video-files/1550080/1550080-uhd_2560_1440_30fps.mp4',
      'https://videos.pexels.com/video-files/31468494/13417888_2560_1440_30fps.mp4',
      'https://videos.pexels.com/video-files/10343918/10343918-hd_1920_1080_24fps.mp4',
      'https://videos.pexels.com/video-files/19348567/19348567-uhd_2560_1440_25fps.mp4',
      'https://cdn.midjourney.com/video/afd83605-65e5-4c85-87b6-36a0d3cf019a/0.mp4'
    ];
    
    const randomIndex = Math.floor(Math.random() * videoUrls.length);
    const selectedVideo = videoUrls[randomIndex];
    
    setVideoUrl(selectedVideo);
    
    // Log which variant is being shown for analytics
    console.log(`A/B Test - Video variant ${randomIndex + 1} selected:`, selectedVideo);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Video Background */}
      {videoUrl && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          onError={(e) => {
            console.log('Video failed to load:', e);
            // Fallback: replace with dark gradient background
            const target = e.target as HTMLVideoElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.style.background = 'linear-gradient(135deg, #0f172a 0%, #000000 100%)';
            }
          }}
        >
          <source
            src={videoUrl}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Main Content Area */}
      <div className="relative z-20 flex-1 flex items-end pt-32 pb-8 px-8 lg:pb-12 lg:px-12">
        <div className="max-w-4xl">
          {/* Tagline */}
          <p className="text-white/60 text-sm font-light tracking-wide mb-6">
            The tech is evolving — but purpose sets us apart.
          </p>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-none mb-8">
            <div className="text-white">Build Fast.</div>
            <div className="text-white/90">Scale with Purpose.</div>
          </h1>

          {/* Paragraph */}
          <p className="lg:max-w-md text-white/70 font-light leading-relaxed text-lg">
            When the pressure is high and timelines are tight, only the most agile solutions survive. At Broadpath, we don't just build fast — we build with meaning. In a world of noise, we help purpose-led teams launch tech that matters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
