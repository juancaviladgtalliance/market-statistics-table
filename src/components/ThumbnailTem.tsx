import { useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ItemProps } from "../types";
import { Styles } from "../lib";

export default function ThumbnailItem({
  images,
  record,
  imageStyle,
}: {
  images: string[];
  record: ItemProps;
  imageStyle?: { width: string; height: string };
}) {
  const [showGallery, setShowGallery] = useState<boolean>(false);

  const gallery = useMemo(() => {
    return images.map((image: string) => ({ src: image }));
  }, [images]);
  // console.log(gallery);
  return (
    <Styles.StylesList.thumbnailImage>
      <img
        src={images[0]}
        alt={record.full_address || ""}
        style={imageStyle}
        className="thumbnail"
        title={record.full_address || ""}
        onClick={() => setShowGallery((showGallery) => !showGallery)}
      />
      <Lightbox
        open={showGallery}
        className="thumnail-lightbox"
        close={() => setShowGallery(false)}
        slides={gallery}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.9)" } }}
      />
    </Styles.StylesList.thumbnailImage>
  );
}
