import { Image } from "../../fetchApi";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

type ImageGalleryProps = {
  images: Image[];
  getImage: (img: Image) => void;
};

export default function ImageGallery({ images, getImage }: ImageGalleryProps) {
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
