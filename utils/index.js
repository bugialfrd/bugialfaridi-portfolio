import { useLayoutEffect, useEffect } from "react";
import { sql } from "@vercel/postgres";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function ISOToDate(date) {
  if (date) {
    let convertDate = new Date(date);
    return (
      convertDate.getFullYear() +
      "-" +
      (convertDate.getMonth() + 1) +
      "-" +
      convertDate.getDate()
    );
  }
}

export function getRandomImage() {
  const randomImageUrl = [
    "/public/images/myportfolio.png"
  ];
  return randomImageUrl[Math.floor(Math.random() * randomImageUrl.length)];
}
