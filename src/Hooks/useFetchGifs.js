import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGif";

export const useFetchGifs = (category) => {
  const [images, setimages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImagenes = async () => {
    const newImages = await getGifs({ category });
    setimages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    // getGifs({category});
    getImagenes();
  }, []);

    return {
      images,
      isLoading,
    };
  };
