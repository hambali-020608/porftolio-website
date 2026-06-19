export default function Select({ 
  label, 
  name, 
  value = "", 
  onChange, 
  className = "", 
  required = false, 
  children // 1. Diubah menjadi huruf kecil
}) {
  return (
    <div className={`space-y-2 ${className}`}>
      <label className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">
        {label}
      </label>
      
        <select 
        name={name} 
        id={name} 
        value={value} 
        onChange={onChange}
        required={required}
        className="w-full bg-black/50 border border-white/10 px-4 py-3 text-[10px] uppercase tracking-widest text-white focus:border-cyan-500 outline-none transition-all rounded" // Opsional: Tambahan styling agar lebih rapi
      >
        {children}
      </select>
    </div>
  );
}