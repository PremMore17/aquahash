export default function MineralQualityCard({ minerals }: { minerals: any }) {
  return (
    <div className="glass-card p-4 rounded-xl border border-cyan-500/20">
      <h3 className="text-sm text-slate-400 mb-2">Mineral Quality</h3>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(minerals).map(([key, val]) => (
          <div key={key}>
            <div className="text-xs uppercase">{key}</div>
            <div className="text-lg font-bold">{val as string}</div>
          </div>
        ))}
      </div>
    </div>
  );
}