"use client";

import dynamic from "next/dynamic";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constants/translations";

// react-pdf is heavy — keep it out of the initial bundle.
const CertificatesContent = dynamic(
  () => import("./CertificatesContent"),
  { ssr: false, loading: () => null }
);

export default function Certificates({ certificates = [] }) {
  const { language } = useLanguage();
  const t = translations[language].certificates;

  if (certificates.length === 0) return null;

  return <CertificatesContent certificatesData={certificates} t={t} viewAllLink="/archive?tab=certificates" />;
}