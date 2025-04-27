import css from "./ImageCard.module.css";

export default function ImageCard({ image, getImages }) {
  const handleClick = () => {
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
