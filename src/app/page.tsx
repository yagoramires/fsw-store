"use client";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();

  return <main>{data?.user?.name || "Nenhum usuario"}</main>;
}
