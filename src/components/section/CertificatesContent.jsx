"use client";

import React, { useState, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { FaExternalLinkAlt, FaFilePdf, FaDownload, FaArrowLeft, FaEye, FaTimes } from "react-icons/fa";

import SectionHeading from "../shared/SectionHeading";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function CertificatesContent({ certificatesData, t, viewAllLink }) {
  const [flippedCards, setFlippedCards] = useState({});
  const [activePdfUrl, setActivePdfUrl] = useState(null);

  const toggleFlip = useCallback((index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  }, []);

  return (
    <section id="certificates" aria-label="Certifications" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/3 -right-64 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          index="03"
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
        />

        {viewAllLink && (
          <div className="flex justify-end -mt-10 mb-8">
            <Link
              href={viewAllLink}
              className="px-5 py-3 text-[9px] font-bold uppercase tracking-widest text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              {t.viewAll}
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificatesData.map((cert, index) => (
            <motion.div 
              key={cert.id}
              className="perspective-1000 h-[380px] w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className={`relative w-full h-full flip-card-inner preserve-3d transition-transform duration-700 ${flippedCards[index] ? 'rotate-x-180' : ''}`}>
                
                {/* FRONT SIDE */}
                <article className="absolute inset-0 backface-hidden bg-gray-950 border border-white/5 flex flex-col justify-between overflow-hidden">
                  <div className="relative w-full h-48 bg-gradient-to-br from-gray-900 to-black border-b border-white/5 overflow-hidden flex flex-col items-center justify-center text-gray-600 group">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                    <FaFilePdf size={40} className="opacity-20 mb-3 group-hover:scale-110 group-hover:text-cyan-500 group-hover:opacity-40 transition-all duration-300" />
                    <span className="text-[9px] font-mono tracking-[0.25em] text-gray-500">DIGITAL_CREDENTIAL</span>
                    
                    {cert.pdf && (
                      <button 
                        onClick={() => setActivePdfUrl(cert.pdf)}
                        className="absolute bottom-3 right-3 p-2 bg-gray-900/80 border border-white/10 rounded text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-[8px] font-mono tracking-wider"
                      >
                        <FaEye size={10} /> PREVIEW
                      </button>
                    )}
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
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
                      <button 
                        onClick={() => toggleFlip(index)}
                        className="inline-flex items-center gap-1.5 text-[9px] text-cyan-500/80 font-bold uppercase tracking-[0.15em] hover:text-cyan-400 transition-all"
                      >
                        <FaDownload size={9} /> Opsi Unduh
                      </button>

                      {cert.pdf && (
                        <button 
                          onClick={() => setActivePdfUrl(cert.pdf)}
                          className="inline-flex items-center gap-1.5 text-[9px] text-gray-400 font-bold uppercase tracking-[0.15em] hover:text-white transition-all"
                        >
                          Pratinjau <FaEye size={10} />
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
                </article>

                {/* BACK SIDE */}
                <article className="absolute inset-0 backface-hidden bg-gray-950 border border-cyan-500/20 p-6 flex flex-col justify-between rotate-x-180">
                  <div className="space-y-4 text-center pt-8">
                    <div className="w-12 h-12 mx-auto rounded-full border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <FaFilePdf size={22} />
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
                      className="w-full flex items-center justify-center gap-2 py-3 bg-cyan-600 hover:bg-cyan-500 text-white text-[10px] font-bold uppercase tracking-[0.2em] transition-all"
                    >
                      <FaDownload /> {t.download}
                    </a>
                    <button 
                      onClick={() => toggleFlip(index)}
                      className="w-full flex items-center justify-center gap-2 py-2 text-[8px] text-gray-500 hover:text-white uppercase tracking-widest transition-colors"
                    >
                      <FaArrowLeft size={7} /> {t.back}
                    </button>
                  </div>
                </article>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LAZY MODAL FOR PDF VIEW */}
      <AnimatePresence>
        {activePdfUrl && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-gray-950 border border-white/10 max-w-4xl w-full p-6 relative flex flex-col items-center"
            >
              <button 
                onClick={() => setActivePdfUrl(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors p-2"
                aria-label="Close Preview"
              >
                <FaTimes size={16} />
              </button>

              <div className="w-full text-center mb-4">
                <span className="text-[9px] font-mono tracking-widest text-cyan-500 block mb-1">SECURE_VIEWER_v1.0</span>
                <a href={activePdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-white font-mono">
                  Open in New Tab <FaExternalLinkAlt size={10} />
                </a>
              </div>

              <div className="w-full max-h-[70vh] overflow-y-auto border border-white/5 bg-black flex justify-center p-2 rounded">
                <Document 
                  file={activePdfUrl}
                  loading={<div className="py-20 text-gray-500 font-mono text-[10px] tracking-widest animate-pulse">PARSING_PDF...</div>}
                >
                  <Page 
                    pageNumber={1} 
                    width={Math.min(window.innerWidth - 60, 750)} 
                    renderTextLayer={false} 
                    renderAnnotationLayer={false} 
                  />
                </Document>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}