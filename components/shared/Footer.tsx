export default function Footer() {
  return (
    <footer className="border-t border-white/10 p-8 text-center text-slate-500 text-sm">
      <p>© 2026 AquaHash Intelligence. Built for Sustainable Groundwater Management.</p>
      <div className="mt-2 flex justify-center gap-4">
        <span>AI Engine: Groq Llama 3</span>
        <span>Geospatial: Leaflet</span>
      </div>
    </footer>
  );
}