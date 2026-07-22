export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-40 bg-[#020617]/80 backdrop-blur-md border-b border-white/10 p-6 flex justify-between">
      <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">AQUAHASH</h1>
      <div className="flex gap-6 text-sm font-medium">
        <a href="/map">Intelligence Map</a>
        <a href="/rewards">Community</a>
        <a href="/dashboard">Analytics</a>
      </div>
    </nav>
  );
}
