"use client";

import Link from "next/link";
import { FaLink } from "react-icons/fa";
import { useState, useEffect } from "react";

type CopyUrlButtonProps = {
  slug: string;
};

const CopyUrlButton = ({ slug }: CopyUrlButtonProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return;
  }

  return (
    <Link
      onClick={() => {
        navigator.clipboard.writeText(`https://blogs.astroverse.in/${slug}`);
      }}
      href=""
      target="_self"
      title="Copy Link"
    >
      <FaLink />
    </Link>
  );
};

export default CopyUrlButton;
