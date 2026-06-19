export default function Input({ label, name, value = "", onChange, className = "", required = false }) {
  return (
    <div className={`space-y-2 ${className}`}>
      <label className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-black/50 border border-white/10 px-4 py-3 text-[10px] uppercase tracking-widest text-white focus:border-cyan-500 outline-none transition-all rounded"
        autoComplete="off"
        placeholder={`ENTER ${label.toUpperCase()}`}
        required={required}
      />
    </div>
  );
}
