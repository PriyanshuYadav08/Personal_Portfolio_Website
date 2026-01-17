import img1 from "../assets/1.JPG";
import img2 from "../assets/2.JPG";
import "../styles/Gallery.css";

export default function Photography() {
	return (
		<div className="container">
			<h2 className="section-title">Photography</h2>
			<div className="gallery">
				<img src={img1} alt="Photography sample"/>
        <img src={img2} alt="Photography sample"/>
			</div>
		</div>
	);
}
