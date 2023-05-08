import Image from "next/image";

type Props = {
  onClick: () => void;
  src: string;
  alt: string;
  width: number;
  height: number;
  padding: string;
};

const IconButton = ({ onClick, src, alt, width, height, padding }: Props) => {
  return (
    <button
      style={{
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        outline: "0",
        padding: `${padding}`,
      }}
      onClick={onClick}>
      <Image src={src} alt={alt} width={width} height={height} />
    </button>
  );
};
export default IconButton;
