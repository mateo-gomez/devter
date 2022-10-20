import Image from "next/image";
import { shape } from "styles/theme";
import styles from "./styles";

export default function Avatar({ src, text, alt, height = 50, width = 50 }) {
  return (
    <div>
      <Image
        style={{
          borderRadius: shape.rounded,
        }}
        layout="fixed"
        src={src}
        alt={alt}
        height={height}
        width={width}
      />
      <strong>{text}</strong>

      <style jsx>{styles}</style>
    </div>
  );
}
