"use client";

import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constants/translations";

const CertificatesContent = dynamic(
  () => import("./CertificatesContent"),
  { ssr: false }
);

const fetchCertificates = async () => {
  const res = await fetch("/api/certificates");
  if (!res.ok) throw new Error("Failed to fetch certificates data");
  return res.json();
};

export default function Certificates() {
  const { language } = useLanguage();
  const t = translations[language].certificates;

  const { data: certificatesData = [], isLoading } = useQuery({
    queryKey: ["certificatesData"],
    queryFn: fetchCertificates,
    staleTime: 1000 * 60 * 15, 
  });

  // Tampilkan null atau skeleton saat fetching data dari API internal
  if (isLoading || certificatesData.length === 0) return null;

  // Render sub-komponen yang dijamin 100% aman mengeksekusi window/DOMMatrix
  return <CertificatesContent certificatesData={certificatesData} t={t} />;
}