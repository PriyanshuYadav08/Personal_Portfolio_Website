import { useState } from "react"
import { albums } from "../data/music"
import "./Music.css"

const ARTISTS = ["All", ...Array.from(new Set(albums.map(a => a.artist))).sort()]

export default function Music() {
  const [filter, setFilter] = useState("All")

  const filtered = filter === "All" ? albums : albums.filter(a => a.artist === filter)

  return (
    <div className="page music-page">
      <div className="fade-up">
        <p className="section-title">// top_picks</p>
        <h1 className="section-heading">My Top Albums</h1>
        <p className="music-subtitle">
          The records I keep coming back to — TOOL, The Beatles, Led Zeppelin, Opeth, Pink Floyd and more.
        </p>
      </div>

      <div className="music-filters fade-up">
        {ARTISTS.map(artist => (
          <button
            key={artist}
            className={`filter-btn${filter === artist ? " filter-btn--active" : ""}`}
            onClick={() => setFilter(artist)}
          >
            {artist}
          </button>
        ))}
      </div>

      <div className="music-grid">
        {filtered.map((album, index) => (
          <div key={`${album.name}-${index}`} className="album-card fade-up" style={{ animationDelay: `${(index % 20) * 0.03}s` }}>
            <div className="album-img-wrap">
              <img src={album.cover} alt={album.name} loading="lazy" />
              <div className="album-shine" />
            </div>
            <div className="album-info">
              <p className="album-name">{album.name}</p>
              <p className="album-artist">{album.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}