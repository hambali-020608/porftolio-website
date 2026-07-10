"use client";
import { Document,Page,pdfjs } from 'react-pdf'
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import React, { useState, useEffect } from "react";
import SectionHeading from "../shared/SectionHeading";
import { db } from "../../constants/firebase_init";
import { collection, getDocs, query } from "firebase/firestore";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constants/translations";
import { motion } from "motion/react";
import { FaExternalLinkAlt, FaAward, FaFilePdf, FaDownload, FaArrowLeft, FaEye } from "react-icons/fa";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
export default function Certificates() {
  const { language } = useLanguage();
  const t = translations[language].certificates;
  const [flippedCards, setFlippedCards] = useState({});
  const [certificatesData, setCertificatesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const q = query(collection(db, "certificates"));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCertificatesData(data);
      } catch (err) {
        console.error("Error fetching certificates:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCertificates();
  }, []);

  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (loading) return null;

  return (
    <section id="certificates" aria-label="Certifications" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          index="03"
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
        />
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificatesData.map((cert, index) => (
            <motion.div 
              key={cert.id}
              className="perspective-1000 h-[420px] w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className={`relative w-full h-full flip-card-inner preserve-3d transition-transform duration-700 ${flippedCards[index] ? 'rotate-x-180' : ''}`}
              >
                {/* FRONT SIDE (Langsung Live Preview PDF Iframe) */}
                <article className="absolute inset-0 backface-hidden bg-gray-950 border border-white/5 flex flex-col justify-between overflow-hidden">
                  
                  {/* PDF Viewer Container */}
                  <div className="relative w-full h-56 bg-black border-b border-white/5 overflow-hidden">
                    {cert.pdf ? (
                       <Document file={cert.pdf}>
        <Page pageNumber={1} width={300} />
      </Document>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-gray-700">
                        <FaFilePdf size={32} className="opacity-30 mb-2" />
                        <span className="text-[9px] font-mono tracking-widest">PDF_NOT_FOUND</span>
                      </div>
                    )}
                    
                    {/* Pelindung Klik: Mencegah user tidak sengaja scroll/klik di dalam iframe saat mau scroll web */}
                    <div className="absolute inset-0 bg-transparent z-10"></div>
                  </div>

                  {/* Keterangan & Konten bawah */}
                  <div className="p-5 flex-1 flex flex-col justify-between relative z-20">
                    <div className="space-y-1.5">
                      <h3 className="text-sm font-bold text-white font-orbitron tracking-wide line-clamp-1">
                        {cert.title}
                      </h3>
                      
                      <div className="flex items-center justify-between text-gray-500 font-mono text-[9px]">
                        <span className="text-gray-400 truncate max-w-[150px]">{cert.issuer}</span>
                        <span className="text-gray-600">{cert.date}</span>
                      </div>
                    </div>

                    <div className="pt-3 flex items-center justify-between border-t border-white/5">
                      {/* Tombol Balik Kartu untuk Opsi Unduh */}
                      <button 
                        onClick={() => toggleFlip(index)}
                        className="inline-flex items-center gap-1.5 text-[9px] text-cyan-500/80 font-bold uppercase tracking-[0.15em] hover:text-cyan-400 transition-all"
                      >
                        <FaDownload className="text-[9px]" /> Opsi Unduh
                      </button>

                      {/* Buka PDF Tab Baru */}
                      <a 
                        href={cert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[9px] text-gray-500 font-bold uppercase tracking-[0.15em] hover:text-white transition-all"
                      >
                        Fullscreen <FaExternalLinkAlt className="text-[8px]" />
                      </a>
                    </div>
                  </div>

                  {/* Aesthetic Tech Line */}
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
                </article>

                {/* BACK SIDE (Opsi Full Unduh) */}
                <article className="absolute inset-0 backface-hidden bg-gray-950 border border-cyan-500/20 p-6 flex flex-col justify-between rotate-x-180">
                  <div className="space-y-4 text-center pt-10">
                    <div className="w-14 h-14 mx-auto rounded-full border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                      <FaFilePdf size={28} />
                    </div>
                    <div className="space-y-1">
                      <p className="font-mono text-[8px] text-cyan-500/60 tracking-[0.2em] uppercase">Ready_to_Fetch</p>
                      <h4 className="text-xs font-bold text-white uppercase tracking-widest truncate px-4">
                        {cert.title}.pdf
                      </h4>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a 
                      href={cert.pdf}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 bg-cyan-600 hover:bg-cyan-500 text-white text-[10px] font-bold uppercase tracking-[0.2em] transition-all shadow-[0_0_15px_rgba(8,145,178,0.3)]"
                    >
                      <FaDownload /> {t.download}
                    </a>
                    
                    <button 
                      onClick={() => toggleFlip(index)}
                      className="w-full flex items-center justify-center gap-2 py-2 text-[8px] text-gray-500 hover:text-white uppercase tracking-widest transition-colors"
                    >
                      <FaArrowLeft className="text-[7px]" /> {t.back}
                    </button>
                  </div>
                </article>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}