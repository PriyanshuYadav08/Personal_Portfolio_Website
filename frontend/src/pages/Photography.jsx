import { photos } from "../data/photography";
import "../styles/Gallery.css";

export default function Photography() {
	const columns = 5;
	const rows = [];
	for (let i = 0; i < photos.length; i += columns) {
		rows.push(photos.slice(i, i + columns));
	}

	return (
		<div className="container">
			<div className="gallery-grid">
				{rows.map((row, rowIndex) => (
					<div className="gallery-row" key={rowIndex}>
						{row.map((photo, colIndex) => (
							<img
								key={colIndex}
								src={photo.src}
								alt={photo.title}
								className="gallery-img"
							/>
						))}
					</div>
				))}
			</div>
		</div>
	);
}