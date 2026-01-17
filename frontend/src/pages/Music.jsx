import { albums } from "../data/music"
import "../styles/Gallery.css"

export default function Music() {
  return (
    <div className="container">
      <h2 className="section-title">Music I Listen To</h2>

      <div className="gallery">
        {albums.map((a, i) => (
          <div key={i}>
            <img src={a.cover} alt={a.name} />
            <p>{a.name}</p>
            <small>{a.artist}</small>
          </div>
        ))}
      </div>
    </div>
  )
}