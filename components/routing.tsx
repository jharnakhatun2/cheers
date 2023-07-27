"use client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Routing() {
  const router = useRouter();
  const user = false;

  useEffect(() => {
    if (user) {
      router.replace("/login-code");
    } else {
      router.replace("/register");
    }
  }, [router]);

  return null;
}
