"use client";

import { useState } from "react";
import { auth } from "../../constants/firebase_init";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    if (email !== "subastianhambali@gmail.com") {
      setError("Akses ditolak. Anda bukan admin.");
      setLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err) {
      setError("Login gagal. Pastikan password benar.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6 font-orbitron">
      <div className="w-full max-w-md space-y-8 bg-gray-900/50 p-10 border border-white/5 backdrop-blur-xl">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-white tracking-[0.2em] uppercase">
            Admin <span className="text-cyan-400">Portal</span>
          </h1>
          <p className="text-gray-500 text-xs tracking-widest uppercase">
            Authorized Personnel Only
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] text-gray-400 uppercase tracking-widest">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white text-sm focus:border-cyan-500 outline-none transition-all"
              placeholder="admin@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] text-gray-400 uppercase tracking-widest">Passphrase</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white text-sm focus:border-cyan-500 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="text-red-500 text-[10px] uppercase tracking-widest text-center animate-pulse">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 text-xs uppercase tracking-[0.2em] transition-all disabled:opacity-50"
          >
            {loading ? "Decrypting..." : "Access Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
}
