import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  textStyles: string;
  href?: string;
  imgStyles?: string;
  isAuthor?: boolean;
}

const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  textStyles,
  href,
  imgStyles,
  isAuthor,
}: Props) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        width={36}
        height={36}
        className={`rounded-full object-contain ${imgStyles}`}
      />

      <p className={`${textStyles} flex items-center gap-1 `}>{value}</p>

      <span
        className={`small-regular line-clamp-1 ${isAuthor ? "max-sm:hidden" : ""}`}
      >
        {title}
      </span>
    </>
  );
  return href ? (
    <Link href={href} className="flex-center gap-1">
      {metricContent}
    </Link>
  ) : (
    <div className="flex-center gap-1">{metricContent}</div>
  );
};

export default Metric;
