import React, { useEffect, useState } from "react";

function ImageSlider({ url, limit = 4 }) {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = usestate(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getImage(getUrl) {
    try {
      loading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data) {
        setImages(data);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    if (url !== "") getImage(url);
  }, [url]);

  return <div></div>;
}

export default ImageSlider;
