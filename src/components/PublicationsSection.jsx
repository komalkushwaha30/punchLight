import React, { useState, useContext } from 'react';
import { LanguageContext } from '../LanguageProvider'; // Import LanguageContext
import './MediaAndPublications.css';
import { assets } from '../assets/assets'; // Assuming assets object is structured like assets.image53 etc.

const MediaAndPublications = () => {
  const { content } = useContext(LanguageContext);

  // Directly access mediaData from the content object
  const { youtubeVideos, newsArticles, otherPublications } = content.mediaData;

  const [selectedArticle, setSelectedArticle] = useState(null);

  const openModal = (article) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="media-page-container">
      <h1 className="page-main-title">{content.mediaPublicationsTitle}</h1> {/* Translated */}

      <p className="intro-text">
        {content.mediaPublicationsIntro} {/* Translated */}
      </p>

      {/* Section 1 - YouTube */}
      <section className="media-section youtube-section">
        <h2 className="section-title">{content.latestVideosTitle}</h2> {/* Translated */}
        <div className="media-grid">
          {youtubeVideos.map((video) => (
            <div className="media-card video-card hover-lift" key={video.id}>
              <div className="video-embed-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title} // This title is part of the translatable data
                  allowFullScreen
                ></iframe>
              </div>
              <div className="card-content">
                <h3 className="card-title">{video.title}</h3> {/* Translated from mediaData */}
                <p className="card-meta">
                  {video.channel} • {video.views} • {video.timeAgo} {/* Translated from mediaData */}
                </p>
                <a
                  href={`https://www.youtube.com/watch?v=${video.embedId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-button"
                >
                  {content.watchOnYouTube} {/* Translated */}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 - News Articles */}
      <section className="media-section news-section">
        <h2 className="section-title">{content.newsArticlesTitle}</h2> {/* Translated */}
        <div className="media-grid">
          {newsArticles.map((article) => (
            <div
              className={`media-card article-card hover-lift ${article.featured ? "featured" : ""}`}
              key={article.id}
            >
              {/* Image path resolved dynamically from assets */}
              <img src={assets[article.image]} alt={article.title} className="article-image" />
              <div className="card-content">
                <h3 className="card-title">{article.title}</h3> {/* Translated from mediaData */}
                <p className="card-snippet">{article.snippet}</p> {/* Translated from mediaData */}
                <p className="card-meta">{article.publication} • {article.date}</p> {/* Translated from mediaData */}
                <button className="card-button" onClick={() => openModal(article)}>
                  {content.readMore} {/* Translated */}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 - Other Publications */}
      <section className="media-section other-publications-section">
        <h2 className="section-title">{content.downloadsReportsTitle}</h2> {/* Translated */}
        <div className="media-grid">
          {otherPublications.map((pub) => (
            <a
              href={pub.link}
              className="media-card publication-card hover-lift"
              key={pub.id}
              target="_blank" // Added target_blank for external links
              rel="noopener noreferrer" // Added rel for security
            >
              <img src={pub.icon} alt={pub.type} className="publication-icon" />
              <div className="card-content">
                <h3 className="card-title">{pub.title}</h3> {/* Translated from mediaData */}
                <p className="card-description">{pub.description}</p> {/* Translated from mediaData */}
                <p className="card-meta">{pub.type} • {pub.date}</p> {/* Translated from mediaData */}
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
            {/* Image path resolved dynamically from assets */}
            <img src={assets[selectedArticle.image]} alt={selectedArticle.title} className="modal-image" />
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
