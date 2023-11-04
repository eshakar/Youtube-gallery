import React from 'react';
import './App.css';

const videoData = [
  {
    id: 1,
    title: 'Video 1',
    views: 10000,
    likes: 500,
    channel: 'Channel 1',
    channelLogo: 'channel1-logo.png',
    thumbnail: 'video1-thumbnail.jpg',
  },
  {
    id: 2,
    title: 'Video 2',
    views: 20000,
    likes: 1000,
    channel: 'Channel 2',
    channelLogo: 'channel2-logo.png',
    thumbnail: 'video2-thumbnail.jpg',
  },
  // Add more video data as needed
];

function VideoCard({ video }) {
  return (
    <div className="video-card">
      <img src={video.thumbnail} alt={video.title} />
      <div className="video-info">
        <h3>{video.title}</h3>
        <div className="channel-info">
          <img src={video.channelLogo} alt={video.channel} />
          <span>{video.channel}</span>
        </div>
        <div className="video-stats">
          <span>{video.views} views</span>
          <span>{video.likes} likes</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>YouTube-Inspired Video Gallery</h1>
      <div className="video-gallery">
        {videoData.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default App;
