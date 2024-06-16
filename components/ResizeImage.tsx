import React, { useEffect, useState } from "react";
import { Image, Dimensions } from "react-native";

interface ResizeImageProps {
  uri: string;
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const SHOW_WIDTH = (SCREEN_WIDTH - 18) >> 1;

export default function ResizeImage({ uri }: ResizeImageProps) {
  const [height, setHeight] = useState(200);

  useEffect(() => {
    Image.getSize(uri, (width: number, height: number) => {
      const showHeight = (SHOW_WIDTH * height) / width;
      setHeight(showHeight);
    });
  }, [uri]);

  return (
    <Image
      style={{
        width: SHOW_WIDTH,
        height,
        resizeMode: "cover",
      }}
      source={{ uri }}
    />
  );
}
