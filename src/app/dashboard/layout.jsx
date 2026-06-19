"use client";

import { useEffect, useState } from "react";
import { auth } from "../../constants/firebase_init";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter, usePathname } from "next/navigation";
import { FaSignOutAlt, FaSync } from "react-icons/fa";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser || currentUser.email !== "subastianhambali@gmail.com") {
        router.push("/portal-admin");
      } else {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/portal-admin");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center font-orbitron text-cyan-400 space-y-4">
        <FaSync className="animate-spin text-3xl" />
        <div className="animate-pulse tracking-[0.3em] text-sm">SYNCING_NEURAL_NETWORK...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const tabs = [
    { id: "projects", label: "Projects", path: "/dashboard/projects" },
    { id: "skills", label: "Skills", path: "/dashboard/skills" },
    { id: "tech_stack", label: "Tech Stack", path: "/dashboard/tech-stack" },
    { id: "certificates", label: "Certificates", path: "/dashboard/certificates" },
    { id: "cv", label: "CV", path: "/dashboard/cv" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-orbitron flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-white/5 p-6 flex flex-col fixed h-full z-20">
        <div className="mb-12">
          <Link href="/dashboard" className="block hover:opacity-80 transition-opacity">
            <h2 className="text-xl font-bold tracking-widest uppercase">
              CMS <span className="text-cyan-400">Dash</span>
            </h2>
          </Link>
          <p className="text-[10px] text-gray-500 mt-2">ADMIN INTERFACE v2.0</p>
        </div>

        <nav className="flex-1 space-y-2">
          {tabs.map((tab) => {
            const isActive = pathname === tab.path;
            return (
              <Link
                key={tab.id}
                href={tab.path}
                className={`w-full block text-left px-4 py-3 text-[10px] uppercase tracking-widest transition-all border-l-2 ${
                  isActive
                    ? "bg-cyan-500/10 text-cyan-400 font-bold border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.1)]"
                    : "text-gray-400 border-transparent hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={handleLogout}
          className="mt-auto flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-red-500 hover:text-red-400 p-4 border border-red-500/10 hover:border-red-500/30 transition-all"
        >
          <FaSignOutAlt /> Terminate Session
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-12 min-h-screen bg-gray-950">
        {children}
      </main>
    </div>
  );
}
