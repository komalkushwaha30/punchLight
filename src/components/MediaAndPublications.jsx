import React, { useState, useContext } from 'react';
import './MediaAndPublications.css';
import { assets } from '../assets/assets';
import { LanguageContext } from '../LanguageProvider';

const mediaData = {
  
  youtubeVideos: [
    {
      id: "video_g9FRlzB70ko",
      embedId: "g9FRlzB70ko",
      title: "सड़क सुरक्षा जागरूकता कार्यक्रम",
      channel: "Punchlight Foundation",
      views: "120 views",
      timeAgo: "2 weeks ago"
    },
    {
      id: "video_hUV9MtvLdRI",
      embedId: "hUV9MtvLdRI",
      title: "Punchlight Foundation – Community Awareness",
      channel: "Punchlight Foundation",
      views: "85 views",
      timeAgo: "1 week ago"
    },
    {
      id: "video_GleVf3irSXw",
      embedId: "GleVf3irSXw",
      title: "Punchlight Foundation: Awareness Documentary",
      channel: "Punchlight Foundation",
      views: "102 views",
      timeAgo: "5 days ago"
    },
    {
      id: "video_f7HUwfwklow",
      embedId: "f7HUwfwklow",
      title: "स्वस्थ जीवनशैली पर कार्यशाला",
      channel: "Punchlight Foundation",
      views: "76 views",
      timeAgo: "3 days ago"
    },
    {
      id: "video_w-5PcXrvd7Q",
      embedId: "w-5PcXrvd7Q",
      title: "Nukkad Natak – Social Awareness",
      channel: "Punchlight Foundation",
      views: "143 views",
      timeAgo: "1 day ago"
    },
    {
      id: "video_gXpJZanJV4Y",
      embedId: "gXpJZanJV4Y",
      title: "Women Empowerment Campaign",
      channel: "Punchlight Foundation",
      views: "94 views",
      timeAgo: "6 days ago"
    },
    {
      id: "video_TAzhEwMIfjE",
      embedId: "TAzhEwMIfjE",
      title: "Community Outreach Highlights",
      channel: "Punchlight Foundation",
      views: "110 views",
      timeAgo: "4 days ago"
    },
    {
      id: "video_wvwsGF1MZ5o",
      embedId: "wvwsGF1MZ5o",
      title: "स्वच्छ भारत अभियान पहल",
      channel: "Punchlight Foundation",
      views: "135 views",
      timeAgo: "2 days ago"
    }
  ],
  newsArticles: [
    {
      id: "news_nukkad_natak",
      image: assets.image53,
      title: "स्वच्छता को लेकर नुक्कड़ नाटक का आयोजन",
      snippet: "नगर परिषद क्षेत्र में स्वच्छता को लेकर नुक्कड़ नाटक का आयोजन किया गया। इस अवसर पर बच्चों और नागरिकों को स्वच्छता के प्रति जागरूक किया गया।",
      publication: "सिटी बाइट्स",
      date: "June 28, 2025",
      featured: true
    },
    
  ],
  otherPublications: [
    {
      id: "publication_pdf_annual_report",
      type: "Document",
      icon: "https://cdn.jsdelivr.net/npm/@mdi/svg/svg/file-pdf-box.svg", // Professional PDF icon
      title: "Punchlight Foundation Annual Report 2024",
      description: "Download our latest annual report and learn about our progress.",
      date: "January 15, 2025",
      link: "https://youtu.be/GleVf3irSXw?si=NKrRVKBxVWx1N7u_"
    },
    {
      id: "publication_image_gallery",
      type: "Photo Gallery",
      icon: "https://cdn.jsdelivr.net/npm/@mdi/svg/svg/camera.svg", // Professional Camera icon
      title: "Community Program Photo Gallery",
      description: "Browse photos from our recent community outreach events.",
      date: "June 1, 2025",
      link: "/#gallery"
    }
  ]
};

const MediaAndPublications = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { content } = useContext(LanguageContext)

  const openModal = (article) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="media-page-container">
      <h1 className="page-main-title">{content.mediaPublicationsTitle}</h1>

      <p className="intro-text">
        {content.mediaPublicationsIntro}
      </p>

      {/* Section 1 - YouTube */}
      {/* Section 1 - YouTube */}
<section className="media-section youtube-section">
  <h2 className="section-title"> {content.latestVideosTitle}</h2>
  <div className="media-grid video-grid">
    {mediaData.youtubeVideos.map((video) => (
      <div className="media-card video-card hover-lift" key={video.id}>
        <div className="video-embed-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${video.embedId}`}
            title={video.title}
            allowFullScreen
          ></iframe>
        </div>
        <div className="card-content">
          <h3 className="card-title">{video.title}</h3>
          <p className="card-meta">
            {video.channel} • {video.views} • {video.timeAgo}
          </p>
          <a
            href={`https://www.youtube.com/watch?v=${video.embedId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="card-button"
          >
            {content.watchOnYouTube}
          </a>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Section 2 - News */}
      <section className="media-section news-section">
        <h2 className="section-title">{content.newsArticlesTitle}</h2>
        <div className="media-grid">
          {mediaData.newsArticles.map((article) => (
            <div
              className={`media-card article-card hover-lift${article.featured ? " featured" : ""}`}
              key={article.id}
            >
              <img src={article.image} alt={article.title} className="article-image" />
              <div className="card-content">
                <h3 className="card-title">{article.title}</h3>
                <p className="card-snippet">{article.snippet}</p>
                <p className="card-meta">{article.publication} • {article.date}</p>
                <button className="card-button" onClick={() => openModal(article)}>
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 - Publications */}
      <section className="media-section other-publications-section">
        <h2 className="section-title"> {content.downloadsReportsTitle}</h2>
        <div className="media-grid">
          {mediaData.otherPublications.map((pub) => (
            <a
              href={pub.link}
              className="media-card publication-card hover-lift"
              key={pub.id}
            >
              <img src={pub.icon} alt={pub.type} className="publication-icon" />
              <div className="card-content">
                <h3 className="card-title">{pub.title}</h3>
                <p className="card-description">{pub.description}</p>
                <p className="card-meta">{pub.type} • {pub.date}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Modal for News */}
      {selectedArticle && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <img src={selectedArticle.image} alt={selectedArticle.title} className="modal-image" />
            <h3 className="modal-title">{selectedArticle.title}</h3>
            <p className="modal-snippet">{selectedArticle.snippet}</p>
            <p className="modal-meta">{selectedArticle.publication} • {selectedArticle.date}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaAndPublications;