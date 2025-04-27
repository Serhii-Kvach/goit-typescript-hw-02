import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, getImage }) {
  return (
    <>
      <ul className={css.imageList}>
        {images.map((image) => (
          <li className={css.imageItem} key={image.id}>
            <ImageCard image={image} getImages={getImage} />
          </li>
        ))}
      </ul>
    </>
  );
}
