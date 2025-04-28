import { Image } from "../../fetchApi";
import css from "./ImageCard.module.css";

type ImageCardProps = {
  image: Image;
  getImages: (img: Image) => void;
};

export default function ImageCard({ image, getImages }: ImageCardProps) {
  const handleClick = (): void => {
    getImages(image);
  };

  return (
    <div className={css.imgDiv}>
      <img
        className={css.img}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={handleClick}
      />
    </div>
  );
}
