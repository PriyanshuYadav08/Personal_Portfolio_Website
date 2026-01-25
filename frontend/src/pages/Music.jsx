import { albums } from "../data/music"
import "../styles/Gallery.css"

export default function Music() {
	const columns = 5;
	const rows = [];
	for (let i = 0; i < albums.length; i += columns) {
		rows.push(albums.slice(i, i + columns));
	}

	return (
		<div className="container">
      {/* <h2>My Top Picks</h2> */}
      <div className="gallery-grid">
				{rows.map((row, rowIndex) => (
					<div className="gallery-row" key={rowIndex}>
						{row.map((album, colIndex) => (
							<div className="album-container" key={colIndex}>
								<img
									src={album.cover}
									alt={album.name || `Album ${colIndex + 1}`}
									className="gallery-img"
								/>
								<div className="album-overlay">
									<div className="album-info">
										<h3>{album.name}</h3>
										<p>{album.artist}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	)
}