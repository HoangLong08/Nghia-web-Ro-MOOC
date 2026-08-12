import type { Product } from "@/lib/types";

type BodyRenderer = (x: number, w: number) => React.ReactNode;

const trailerBodies: Record<string, BodyRenderer> = {
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

function TrailerBody({ category, axles }: { category: string; axles: number }) {
  const render = trailerBodies[category] ?? trailerBodies.san;
  const wheels = Array.from({ length: axles }, (_, i) => 150 + i * 20);

  return (
    <>
      <g fill="currentColor">{render(24, 176)}</g>
      {/* Chốt kéo và chân chống */}
      <g fill="#e2e8f0">
        <rect x={30} y={64} width={4} height={8} rx={1} />
        <rect x={46} y={64} width={4} height={8} rx={1} />
      </g>
      <Wheels positions={wheels} />
    </>
  );
}

function TractorBody() {
  return (
    <>
      <g fill="currentColor">
        {/* Cabin và giường nằm */}
        <path d="M40 26 h52 a4 4 0 0 1 4 4 v34 h-60 v-30 a8 8 0 0 1 4 -8 z" />
        {/* Kính chắn gió */}
        <path d="M84 32 h8 v14 h-8 z" fill="#0f172a" opacity={0.35} />
        {/* Khung gầm kéo dài về sau */}
        <rect x={92} y={56} width={92} height={8} rx={2} opacity={0.85} />
        {/* Mâm kéo */}
        <rect x={140} y={48} width={34} height={8} rx={2} opacity={0.6} />
      </g>
      {/* Ống pô và bình nhiên liệu */}
      <g fill="#94a3b8">
        <rect x={96} y={30} width={5} height={34} rx={2} />
        <rect x={108} y={58} width={26} height={12} rx={3} />
      </g>
      <Wheels positions={[62, 150, 170]} />
    </>
  );
}

function Wheels({ positions }: { positions: number[] }) {
  return (
    <>
      <g fill="#0f172a">
        {positions.map((cx) => (
          <circle key={cx} cx={cx} cy={70} r={9} />
        ))}
      </g>
      <g fill="#94a3b8">
        {positions.map((cx) => (
          <circle key={cx} cx={cx} cy={70} r={3.5} />
        ))}
      </g>
    </>
  );
}

type Props = {
  product: Pick<Product, "line" | "category" | "axles">;
  className?: string;
};

/** Hình minh hoạ dạng SVG, dùng tạm cho tới khi có ảnh chụp thực tế của từng xe. */
export function ProductImage({ product, className }: Props) {
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
        {product.line === "xe-dau-keo" ? (
          <TractorBody />
        ) : (
          <TrailerBody category={product.category} axles={product.axles} />
        )}
        <line x1={0} y1={79} x2={220} y2={79} stroke="#334155" strokeWidth={2} />
      </svg>
    </div>
  );
}
