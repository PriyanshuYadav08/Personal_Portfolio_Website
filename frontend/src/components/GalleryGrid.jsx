export default function GalleryGrid({ items }) {
  return (
    <div className="gallery">
      {items.map((item, i) => (
        <img key={i} src={item.src} alt={item.title || ""} />
      ))}
    </div>
  )
}