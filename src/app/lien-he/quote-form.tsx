"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { getProductsByLine, lines } from "@/data/catalog";
import { submitQuote, type QuoteState } from "./actions";

const initialState: QuoteState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:opacity-60"
    >
      {pending ? "Đang gửi..." : "Gửi yêu cầu báo giá"}
    </button>
  );
}

export function QuoteForm({ defaultProduct }: { defaultProduct?: string }) {
  const [state, formAction] = useActionState(submitQuote, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <p className="font-semibold text-emerald-800">Đã nhận yêu cầu</p>
        <p className="mt-2 text-sm text-emerald-700">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700">
          Họ và tên <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-amber-500"
          placeholder="Nguyễn Văn A"
        />
        {state.errors?.name && (
          <p className="mt-1 text-xs text-red-600">{state.errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
          Số điện thoại <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          inputMode="tel"
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-amber-500"
          placeholder="0909123456"
        />
        {state.errors?.phone && (
          <p className="mt-1 text-xs text-red-600">{state.errors.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="product" className="block text-sm font-medium text-slate-700">
          Xe quan tâm
        </label>
        <select
          id="product"
          name="product"
          defaultValue={defaultProduct ?? ""}
          className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-amber-500"
        >
          <option value="">Chưa xác định / cần tư vấn</option>
          {lines.map((line) => (
            <optgroup key={line.slug} label={line.name}>
              {getProductsByLine(line.slug).map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="note" className="block text-sm font-medium text-slate-700">
          Nội dung
        </label>
        <textarea
          id="note"
          name="note"
          rows={4}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-amber-500"
          placeholder="Loại hàng cần chở, tuyến chạy, số lượng xe, hình thức thanh toán..."
        />
        {state.errors?.note && (
          <p className="mt-1 text-xs text-red-600">{state.errors.note}</p>
        )}
      </div>

      {state.status === "error" && (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
          {state.message}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
