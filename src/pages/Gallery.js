import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Using your actual photos
  const photos = [
    {
      url: "/images/photo1.jpg",
      title: "Our First Meeting",
      description: "The day our story began...",
      side: "left",
    },
    {
      url: "/images/photo2.jpg",
      title: "Beautiful Moments",
      description: "Every moment with you is special",
      side: "right",
    },
    {
      url: "/images/photo3.jpg",
      title: "Growing Together",
      description: "Our love grows stronger every day",
      side: "left",
    },
    {
      url: "/images/photo4.jpg",
      title: "Cherished Memories",
      description: "Creating memories that last forever",
      side: "right",
    },
    {
      url: "/images/couple.png",
      title: "Our Love Story",
      description: "Together in every chapter of life",
      side: "left",
    },
  ];

  const PhotoItem = ({ photo, index }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });

    return (
      <motion.div
        ref={ref}
        className={`photo-story-item ${photo.side}`}
        initial={{
          x: photo.side === "left" ? -100 : 100,
          opacity: 0,
        }}
        animate={
          inView
            ? {
                x: 0,
                opacity: 1,
              }
            : {}
        }
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: index * 0.2,
        }}
        onClick={() => setSelectedImage(index)}
      >
        <div className="photo-container">
          <img
            src={photo.url}
            alt={photo.title}
            className="story-photo"
            onError={(e) => {
              e.target.src = `https://picsum.photos/400/300?random=${index}`;
            }}
          />
          <div className="photo-content">
            <h3 className="photo-title">{photo.title}</h3>
            <p className="photo-description">{photo.description}</p>
          </div>
        </div>

        {/* Connection line */}
        {index < photos.length - 1 && <div className="story-connector"></div>}
      </motion.div>
    );
  };

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Love Story
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          A visual journey of our beautiful moments together
        </motion.p>
      </div>

      <div className="story-timeline">
        {photos.map((photo, index) => (
          <PhotoItem key={index} photo={photo} index={index} />
        ))}
      </div>

      {/* Simple Lightbox */}
      {selectedImage !== null && (
        <div className="simple-lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content">
            <img
              src={photos[selectedImage].url}
              alt={photos[selectedImage].title}
              onError={(e) => {
                e.target.src = `https://picsum.photos/600/400?random=${selectedImage}`;
              }}
            />
            <div className="lightbox-text">
              <h3>{photos[selectedImage].title}</h3>
              <p>{photos[selectedImage].description}</p>
            </div>
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
