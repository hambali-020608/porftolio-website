"use client";

import { useEffect, useState } from "react";
import { db } from "../../../constants/firebase_init";
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query
} from "firebase/firestore";
import { FaEdit, FaTrash, FaPlus, FaSync } from "react-icons/fa";
import Input from "../components/Input";

export default function ProjectsDashboard() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    github: "",
    live: "",
    tags: "",
    desc: ""
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "projects"));
      console.log("q",q)
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log("data",data)
      setItems(data);
    } catch (err) {
      console.error("Error fetching projects:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let dataToSave = { ...formData };
      if (typeof dataToSave.tags === 'string') {
        dataToSave.tags = dataToSave.tags.split(',').map(tag => tag.trim()).filter(Boolean);
      }

      if (editingId) {
        await updateDoc(doc(db, "projects", editingId), dataToSave);
      } else {
        await addDoc(collection(db, "projects"), dataToSave);
      }
      setIsAdding(false);
      setEditingId(null);
      setFormData({ title: "", image: "", github: "", live: "", tags: "", desc: "" });
      fetchData();
    } catch (err) {
      console.error("Error saving project:", err);
      alert("Failed to save project. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    let editData = { ...item };
    if (Array.isArray(editData.tags)) {
      editData.tags = editData.tags.join(', ');
    } else {
      editData.tags = editData.tags || "";
    }
    setFormData({
      title: editData.title || "",
      image: editData.image || "",
      github: editData.github || "",
      live: editData.live || "",
      tags: editData.tags,
      desc: editData.desc || ""
    });
    setEditingId(item.id);
    setIsAdding(true);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setLoading(true);
      try {
        await deleteDoc(doc(db, "projects", id));
        fetchData();
      } catch (err) {
        console.error("Error deleting project:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="space-y-8">
      <header className="flex justify-between items-center border-b border-white/5 pb-8">
        <div>
          <h1 className="text-2xl font-bold uppercase tracking-[0.2em]">Projects</h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-ping"></span>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest">Active Module Synchronized</p>
          </div>
        </div>
        <button 
          onClick={() => {
            setIsAdding(!isAdding);
            setEditingId(null);
            setFormData({ title: "", image: "", github: "", live: "", tags: "", desc: "" });
          }}
          className={`flex items-center gap-2 px-6 py-2 text-[10px] uppercase tracking-widest transition-all border ${
            isAdding 
            ? "bg-red-500/10 border-red-500 text-red-500 hover:bg-red-500 hover:text-white" 
            : "bg-cyan-500/10 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black"
          }`}
        >
          {isAdding ? "Cancel Action" : <><FaPlus /> New Deployment</>}
        </button>
      </header>

      {isAdding && (
        <div className="bg-gray-900/50 border border-cyan-500/30 p-8 space-y-6 animate-in fade-in slide-in-from-top-4 duration-500 rounded-lg">
          <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            {editingId ? "Modify Configuration" : "Initialize New Entity"}
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
            <Input label="Title" name="title" value={formData.title} onChange={handleInputChange} required />
            <Input label="Image Path (e.g. /music.png)" name="image" value={formData.image} onChange={handleInputChange} />
            <Input label="Github Link" name="github" value={formData.github} onChange={handleInputChange} />
            <Input label="Live Demo URL" name="live" value={formData.live} onChange={handleInputChange} />
            <Input label="Tags (comma separated)" name="tags" value={formData.tags} onChange={handleInputChange} className="col-span-2" />
            <textarea 
              name="desc" 
              placeholder="DESCRIPTION"
              value={formData.desc}
              onChange={handleInputChange}
              className="col-span-2 bg-black/50 border border-white/10 p-4 text-xs uppercase tracking-widest text-white h-32 focus:border-cyan-500 outline-none transition-all rounded"
              required
            />
            <button 
              type="submit" 
              disabled={loading}
              className="col-span-2 bg-cyan-500 text-black font-bold py-4 text-[10px] uppercase tracking-widest hover:bg-cyan-400 transition-all mt-4 rounded disabled:opacity-50"
            >
              {loading ? "PROCESSING..." : "COMMIT CHANGES TO DATABASE"}
            </button>
          </form>
        </div>
      )}

      {loading && !items.length ? (
        <div className="flex flex-col items-center justify-center py-20 font-orbitron text-cyan-400 space-y-4">
          <FaSync className="animate-spin text-3xl" />
          <div className="animate-pulse tracking-[0.3em] text-sm">SYNCING_NEURAL_NETWORK...</div>
        </div>
      ) : items.length === 0 ? (
        <div className="py-20 text-center border border-dashed border-white/10 rounded-lg">
          <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em]">No projects found</p>
        </div>
      ) : (
        <div className="overflow-x-auto border border-white/5 rounded-lg bg-gray-900/20 backdrop-blur-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-cyan-400">Title</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-cyan-400">Tags</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-cyan-400">Live Link</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-cyan-400">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-fwhite/[0.02] transition-colors group">
                  <td className="px-6 py-4">
                    <div className="text-xs font-bold text-white">{item.title}</div>
                    <div className="text-[9px] text-gray-500 truncate max-w-[200px]">{item.desc}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {Array.isArray(item.tags) ? item.tags .map(tag => (
                        <span key={tag} className="px-1.5 py-0.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-[8px] uppercase">{tag}</span>
                      )) : <span className="text-[8px] text-gray-500">No Tags</span>}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[10px] text-gray-400 truncate max-w-[150px]">
                    {item.live}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-3">
                      <button 
                        onClick={() => handleEdit(item)}
                        className="text-gray-500 hover:text-cyan-400 transition-colors"
                        title="Edit"
                      >
                        <FaEdit size={14} />
                      </button>
                      <button 
                        onClick={() => handleDelete(item.id)}
                        className="text-gray-500 hover:text-red-500 transition-colors"
                        title="Delete"
                      >
                        <FaTrash size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
