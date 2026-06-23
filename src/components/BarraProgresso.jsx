export default function BarraProgresso({ indice, totale }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: totale }).map((_, i) => (
        <div
          key={i}
          className={[
            'h-1.5 rounded-full transition-all',
            i < indice ? 'w-8 bg-cyan-400' : i === indice ? 'w-12 bg-cyan-300' : 'w-8 bg-slate-700',
          ].join(' ')}
        />
      ))}
    </div>
  )
}
