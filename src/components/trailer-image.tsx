import type { CategorySlug } from "@/lib/types";

const bodyByCategory: Record<CategorySlug, (x: number, w: number) => React.ReactNode> = {
  san: (x, w) => <rect x={x} y={54} width={w} height={10} rx={2} />,
  xuong: (x, w) => (
    <>
      <rect x={x} y={58} width={w} height={6} rx={2} />
      <rect x={x + 6} y={40} width={w - 12} height={18} rx={2} opacity={0.45} />
    </>
  ),
  lung: (x, w) => (
    <>
      <rect x={x} y={54} width={w} height={10} rx={2} />
      <rect x={x} y={40} width={w} height={14} rx={2} opacity={0.5} />
    </>
  ),
  ben: (x, w) => (
    <>
      <rect x={x} y={58} width={w} height={6} rx={2} />
      <path d={`M${x + 4} 56 L${x + w - 2} 34 L${x + w - 2} 56 Z`} opacity={0.75} />
    </>
  ),
  "bon-xi-mang": (x, w) => (
    <>
      <rect x={x} y={58} width={w} height={6} rx={2} />
      <ellipse cx={x + w / 2} cy={46} rx={w / 2 - 4} ry={14} opacity={0.75} />
    </>
  ),
  "bon-xang-dau": (x, w) => (
    <>
      <rect x={x} y={58} width={w} height={6} rx={2} />
      <rect x={x + 4} y={36} width={w - 8} height={22} rx={11} opacity={0.75} />
    </>
  ),
};

type Props = {
  category: CategorySlug;
  axles: number;
  className?: string;
};

/** Hình minh hoạ dạng SVG, dùng tạm cho tới khi có ảnh chụp thực tế của từng xe. */
export function TrailerImage({ category, axles, className }: Props) {
  const deckX = 24;
  const deckW = 176;
  const wheelStart = 150;

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-600 ${className ?? ""}`}
    >
      <svg
        viewBox="0 0 220 90"
        role="img"
        aria-hidden
        className="size-full text-amber-400"
      >
        <g fill="currentColor">{bodyByCategory[category](deckX, deckW)}</g>
        {/* Chốt kéo và chân chống */}
        <g fill="#e2e8f0">
          <rect x={deckX + 6} y={64} width={4} height={8} rx={1} />
          <rect x={deckX + 22} y={64} width={4} height={8} rx={1} />
        </g>
        {/* Bánh xe */}
        <g fill="#0f172a">
          {Array.from({ length: axles }, (_, i) => (
            <circle key={i} cx={wheelStart + i * 20} cy={70} r={9} />
          ))}
        </g>
        <g fill="#94a3b8">
          {Array.from({ length: axles }, (_, i) => (
            <circle key={i} cx={wheelStart + i * 20} cy={70} r={3.5} />
          ))}
        </g>
        <line x1={0} y1={79} x2={220} y2={79} stroke="#334155" strokeWidth={2} />
      </svg>
    </div>
  );
}
