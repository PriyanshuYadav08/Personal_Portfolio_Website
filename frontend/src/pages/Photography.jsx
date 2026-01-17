import "../styles/Gallery.css"

export default function Photography() {
  return (
    <div className="container">
      <h2 className="section-title">Photography</h2>

      <div className="gallery">
        <img src="/photos/photo1.jpg" alt="1" />
        <img src="/photos/photo2.jpg" alt="2" />
        <img src="/photos/photo3.jpg" alt="3" />
      </div>
    </div>
  )
}