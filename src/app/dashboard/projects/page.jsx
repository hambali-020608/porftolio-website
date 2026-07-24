"use client";

import { useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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
import { FaEdit, FaTrash, FaPlus, FaSync, FaUpload, FaTimes } from "react-icons/fa";
import Input from "../components/Input";
import Select from "../components/select";

import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitServerError,
  ImageKitUploadNetworkError,
  upload,
} from "@imagekit/next";

// --- API FUNCTIONS FOR FIRESTORE ---
const fetchProjects = async () => {
  const q = query(collection(db, "projects"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const createProject = async (newProject) => {
  return await addDoc(collection(db, "projects"), newProject);
};

const updateProject = async ({ id, data }) => {
  return await updateDoc(doc(db, "projects", id), data);
};

const deleteProject = async (id) => {
  return await deleteDoc(doc(db, "projects", id));
};

export default function ProjectsDashboard() {
  const queryClient = useQueryClient();

  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);
  const abortControllerRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    github: "",
    live: "",
    tags: "",
    desc: "",
    status: "active",
  });

  // --- TANSTACK QUERY & MUTATIONS ---
  const { data: items = [], isLoading, isFetching } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  const createMutation = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      resetForm();
    },
    onError: (err) => {
      console.error("Error creating project:", err);
      alert("Failed to save project.");
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      resetForm();
    },
    onError: (err) => {
      console.error("Error updating project:", err);
      alert("Failed to update project.");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    onError: (err) => {
      console.error("Error deleting project:", err);
      alert("Failed to delete project.");
    },
  });

  const isSubmitting = createMutation.isPending || updateMutation.isPending;

  // --- FORM HANDLERS ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const authenticator = async () => {
    try {
      const response = await fetch("/api/upload-auth");
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Request failed with status ${response.status}: ${errorText}`);
      }
      const data = await response.json();
      return { 
        signature: data.signature, 
        expire: data.expire, 
        token: data.token, 
        publicKey: data.publicKey 
      };
    } catch (error) {
      console.error("Authentication error:", error);
      throw new Error("Authentication request failed");
    }
  };

  const handleFileUpload = async () => {
    const fileInput = fileInputRef.current;
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      alert("Please select a file to upload");
      return;
    }

    const file = fileInput.files[0];
    abortControllerRef.current = new AbortController();

    setUploading(true);
    setUploadProgress(0);

    try {
      const authParams = await authenticator();
      const { signature, expire, token, publicKey } = authParams;

      const uploadResponse = await upload({
        expire,
        token,
        signature,
        publicKey,
        file,
        folder:'/web_portfolio/project',
        fileName: file.name,
        onProgress: (event) => {
          const percent = Math.round((event.loaded / event.total) * 100);
          setUploadProgress(percent);
        },
        abortSignal: abortControllerRef.current.signal,
      });

      setFormData((prev) => ({
        ...prev,
        image: uploadResponse.url,
      }));

      alert("Image uploaded successfully!");
    } catch (error) {
      if (error instanceof ImageKitAbortError) {
        console.error("Upload aborted:", error.reason);
      } else if (error instanceof ImageKitInvalidRequestError) {
        console.error("Invalid request:", error.message);
      } else if (error instanceof ImageKitUploadNetworkError) {
        console.error("Network error:", error.message);
      } else if (error instanceof ImageKitServerError) {
        console.error("Server error:", error.message);
      } else {
        console.error("Upload error:", error);
      }
      alert("Failed to upload image.");
    } finally {
      setUploading(false);
    }
  };

  const handleCancelUpload = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort("User cancelled upload.");
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let dataToSave = { ...formData };
    if (typeof dataToSave.tags === "string") {
      dataToSave.tags = dataToSave.tags.split(",").map((tag) => tag.trim()).filter(Boolean);
    }

    if (editingId) {
      updateMutation.mutate({ id: editingId, data: dataToSave });
    } else {
      createMutation.mutate(dataToSave);
    }
  };

  const resetForm = () => {
    setIsAdding(false);
    setEditingId(null);
    setFormData({ title: "", image: "", github: "", live: "", tags: "", desc: "", status: "active" });
    setUploadProgress(0);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleEdit = (item) => {
    let editData = { ...item };
    if (Array.isArray(editData.tags)) {
      editData.tags = editData.tags.join(", ");
    } else {
      editData.tags = editData.tags || "";
    }
    setFormData({
      title: editData.title || "",
      image: editData.image || "",
      github: editData.github || "",
      live: editData.live || "",
      tags: editData.tags,
      desc: editData.desc || "",
      status: editData.status || "active",
    });
    setEditingId(item.id);
    setIsAdding(true);
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this project?")) {
      deleteMutation.mutate(id);
    }
  };

  return (
    <div className="space-y-8">
      <header className="flex justify-between items-center border-b border-white/5 pb-8">
        <div>
          <h1 className="text-2xl font-bold uppercase tracking-[0.2em]">Projects</h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-ping"></span>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest">
              {isFetching ? "Syncing..." : "Active Module Synchronized"}
            </p>
          </div>
        </div>
        <button 
          onClick={() => {
            if (isAdding) {
              resetForm();
            } else {
              setIsAdding(true);
            }
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
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold">
                Project Image
              </label>
              <div className="flex items-center gap-2">
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  accept="image/*"
                  className="text-xs text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-[10px] file:uppercase file:font-semibold file:bg-cyan-500/10 file:text-cyan-400 hover:file:bg-cyan-500/20 cursor-pointer"
                />
                {!uploading ? (
                  <button
                    type="button"
                    onClick={handleFileUpload}
                    className="flex items-center gap-1 bg-cyan-500/20 border border-cyan-500 text-cyan-400 px-4 py-2 text-[10px] uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all rounded"
                  >
                    <FaUpload /> Upload
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleCancelUpload}
                    className="flex items-center gap-1 bg-red-500/20 border border-red-500 text-red-400 px-4 py-2 text-[10px] uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all rounded"
                  >
                    <FaTimes /> Cancel
                  </button>
                )}
              </div>

              {uploading && (
                <div className="space-y-1 mt-1">
                  <div className="w-full bg-gray-800 h-2 rounded overflow-hidden">
                    <div 
                      className="bg-cyan-500 h-full transition-all duration-300" 
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                  <span className="text-[9px] text-gray-400 font-mono">
                    UPLOADING: {uploadProgress}%
                  </span>
                </div>
              )}

              <Input 
                label="Image URL" 
                name="image" 
                value={formData.image} 
                onChange={handleInputChange} 
                placeholder="Uploaded URL will appear here"
              />
            </div>

            <Input label="Github Link" name="github" value={formData.github} onChange={handleInputChange} />
            <Input label="Live Demo URL" name="live" value={formData.live} onChange={handleInputChange} />
            <Input label="Tags (comma separated)" name="tags" value={formData.tags} onChange={handleInputChange} className="col-span-2" />
            <Select label="Project Status" name="status" value={formData.status} onChange={handleInputChange} className="col-span-2">
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </Select>
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
              disabled={isSubmitting || uploading}
              className="col-span-2 bg-cyan-500 text-black font-bold py-4 text-[10px] uppercase tracking-widest hover:bg-cyan-400 transition-all mt-4 rounded disabled:opacity-50"
            >
              {isSubmitting ? "PROCESSING..." : "COMMIT CHANGES TO DATABASE"}
            </button>
          </form>
        </div>
      )}

      {isLoading ? (
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
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-cyan-400">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-4">
                    <div className="text-xs font-bold text-white">{item.title}</div>
                    <div className="text-[9px] text-gray-500 truncate max-w-[200px]">{item.desc}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {Array.isArray(item.tags) ? item.tags.map(tag => (
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
                        disabled={deleteMutation.isPending}
                      >
                        <FaEdit size={14} />
                      </button>
                      <button 
                        onClick={() => handleDelete(item.id)}
                        className="text-gray-500 hover:text-red-500 transition-colors"
                        title="Delete"
                        disabled={deleteMutation.isPending}
                      >
                        <FaTrash size={14} />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[10px] text-gray-400 truncate max-w-[150px]">
                    {item.status}
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