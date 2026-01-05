import Image from "next/image";

const transformImgToNextImage = (node: {
  type: string;
  name: string;
  attribs: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  };
}) => {
  if (node.type === "tag" && node.name === "img") {
    const { src, alt, width, height } = node.attribs;

    return (
      <Image
        src={src}
        alt={alt || "Image"}
        width={width || 600}
        height={height || 400}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcuHFhPQAGogKEuYfwoAAAAABJRU5ErkJggg=="
      />
    );
  }
};

export default transformImgToNextImage;
