import React from 'react';
import './MediaAndPublications.css';

// Example data (you would integrate this with actual data fetching/CMS)
const mediaData = {
  youtubeVideos: [
    {
      id: "youtube_gandhi",
      thumbnail: "https://img.youtube.com/vi/h2a_W7G7b-Q/mqdefault.jpg", // Placeholder - REPLACE with actual video ID/URL for thumbnail
      title: "गांधी जयंती पर स्वच्छता ही सेवा पखवाड़ा एवं(Indian, Swachhata,League)2•0",
      channel: "Sach Ki Khoj",
      views: "346 views",
      timeAgo: "1 yr ago",
      link: "https://www.youtube.com/watch?v=h2a_W7G7b-Q" // REPLACE with actual YouTube link
    },
    {
      id: "youtube_swachhata",
      thumbnail: "https://img.youtube.com/vi/s6u31py-example/mqdefault.jpg", // Placeholder - REPLACE with actual video ID/URL for thumbnail
      title: "स्वच्छता ही सेवा कार्यक्रम के तहत अररिया के सम्राट अशोक भवन में मेला",
      channel: "DD NEWS BIHAR",
      views: "93 views",
      timeAgo: "7 mo ago",
      link: "https://www.youtube.com/watch?v=s6u31py-example" // REPLACE with actual YouTube link
    },
    // Add more YouTube video objects here
  ],
  newsArticles: [
    {
      id: "news_puraskar",
      image: "https://via.placeholder.com/300x200?text=News+Article+Image+1",
      title: "स्वच्छता को लेकर पुरस्कार का आयोजन",
      snippet: "This is a generic text snippet showcasing a news article. This article...",
      publication: "Unknown Source", // From image, hard to tell
      date: "October 3, 2024",
      link: "#" // REPLACE with actual article link
    },
    {
      id: "news_jimmedari",
      image: "https://via.placeholder.com/300x200?text=News+Article+Image+2",
      title: "बड़ी जिम्मेदारी", // Based on visual cue "जिम्मेदारी"
      snippet: "This is another generic text snippet showcasing a news article. In this article...",
      publication: "Unknown Source",
      date: "October 3, 2024", // Assuming same date from image
      link: "#" // REPLACE with actual article link
    },
    // Add more news article objects here
  ],
  otherPublications: [
    {
      id: "publication_pdf_annual_report",
      type: "Document",
      icon: "https://cdn-icons-png.flaticon.com/512/337/337946.png", // PDF icon
      title: "Punchlight Foundation Annual Report 2024",
      description: "Download our latest annual report and learn about our progress.",
      date: "January 15, 2025",
      link: "/documents/Punchlight_Annual_Report_2024.pdf" // REPLACE with actual PDF path
    },
    {
      id: "publication_image_gallery",
      type: "Photo Gallery",
      icon: "https://cdn-icons-png.flaticon.com/512/1042/1042339.png", // Gallery icon
      title: "Community Program Photo Gallery",
      description: "Browse photos from our recent community outreach events.",
      date: "June 1, 2025",
      link: "/gallery/community_events" // Link to your photo gallery page
    }
  ]
};

const MediaAndPublications = () => {
  return (
    <div className="media-page-container">
      <h1 className="page-main-title">Publications & Media</h1>

      {/* YouTube Videos Section */}
      <section className="media-section youtube-section">
        <h2 className="section-title">Our YouTube Videos</h2>
        <div className="media-grid">
          {mediaData.youtubeVideos.map((video) => (
            <a href={video.link} target="_blank" rel="noopener noreferrer" className="media-card video-card" key={video.id}>
              <div className="video-thumbnail-wrapper">
                {/* For actual YouTube embeds, you might use an iframe here or a dedicated video player component */}
                <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
                <div className="play-overlay">▶</div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{video.title}</h3>
                <p className="card-meta">{video.channel} • {video.views} • {video.timeAgo}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* News Articles Section */}
      <section className="media-section news-section">
        <h2 className="section-title">News Articles</h2>
        <div className="media-grid">
          {mediaData.newsArticles.map((article) => (
            <a href={article.link} target="_blank" rel="noopener noreferrer" className="media-card article-card" key={article.id}>
              <img src={article.image} alt={article.title} className="article-image" />
              <div className="card-content">
                <h3 className="card-title">{article.title}</h3>
                <p className="card-snippet">{article.snippet}</p>
                <p className="card-meta">{article.publication} • {article.date}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Other Publications Section */}
      <section className="media-section other-publications-section">
        <h2 className="section-title">Other Publications & Documents</h2>
        <div className="media-grid">
          {mediaData.otherPublications.map((pub) => (
            <a href={pub.link} target="_blank" rel="noopener noreferrer" className="media-card publication-card" key={pub.id}>
              {pub.icon && <img src={pub.icon} alt={pub.type} className="publication-icon" />}
              <div className="card-content">
                <h3 className="card-title">{pub.title}</h3>
                <p className="card-description">{pub.description}</p>
                <p className="card-meta">{pub.type} • {pub.date}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MediaAndPublications;