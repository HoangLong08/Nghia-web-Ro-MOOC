import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
      <p className="text-6xl font-bold text-amber-500">404</p>
      <h1 className="mt-4 text-2xl font-bold text-slate-900">
        Không tìm thấy trang
      </h1>
      <p className="mt-2 text-slate-600">
        Xe bạn tìm có thể đã bán hoặc đường dẫn không đúng.
      </p>
      <Link
        href="/san-pham"
        className="mt-6 rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
      >
        Xem xe đang có
      </Link>
    </div>
  );
}
