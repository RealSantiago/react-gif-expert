import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (dato) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImagenes = async () => {
    const newImages = await getGifs(dato);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImagenes();
  }, []);

  return {
    images: images,
    isLoading: isLoading,
  };
};
