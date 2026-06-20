import { useState } from "react"
import { photos } from "../data/photography"
import "./Photography.css"

export default function Photography() {
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (index) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const prevPhoto = () => setLightbox(i => (i - 1 + photos.length) % photos.length)
  const nextPhoto = () => setLightbox(i => (i + 1) % photos.length)

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowLeft") prevPhoto()
    if (e.key === "ArrowRight") nextPhoto()
  }

  return (
    <div className="page photo-page">
      <div className="fade-up">
        <p className="section-title">// photography</p>
        <h1 className="section-heading">Through the Lens</h1>
        <p className="photo-subtitle">
          Shooting across India — architecture, flora, street, people.
        </p>
      </div>

      <div className="photo-masonry">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="photo-item"
            onClick={() => openLightbox(index)}
          >
            <img src={photo.src} alt={`Photo ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          <button className="lb-close" onClick={closeLightbox} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          <button className="lb-prev" onClick={e => { e.stopPropagation(); prevPhoto() }} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <div className="lb-img-wrap" onClick={e => e.stopPropagation()}>
            <img src={photos[lightbox].src} alt={`Photo ${lightbox + 1}`} />
          </div>

          <button className="lb-next" onClick={e => { e.stopPropagation(); nextPhoto() }} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}