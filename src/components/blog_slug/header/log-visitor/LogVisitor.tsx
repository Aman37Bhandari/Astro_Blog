"use client";

import { useEffect } from "react";

import globalConfig from "@/config/globalConfig";

type LogVisitorProps = {
  slug: string;
};

const LogVisitor = ({ slug }: LogVisitorProps) => {
  useEffect(() => {
    const logVisitor = async () => {
      await fetch(`${globalConfig.apiUrl}/info/blog/${slug}/log-visitor`, {
        method: "GET",
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
        },
        credentials: "include",
      });
    };

    logVisitor();
  }, []);
  return null;
};

export default LogVisitor;
