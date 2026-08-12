"use server";

import { getProduct } from "@/data/catalog";

export type QuoteState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "phone" | "note", string>>;
};

const phonePattern = /^0\d{9,10}$/;

export async function submitQuote(
  _prev: QuoteState,
  formData: FormData,
): Promise<QuoteState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").replace(/[\s.]/g, "");
  const note = String(formData.get("note") ?? "").trim();
  const productSlug = String(formData.get("product") ?? "").trim();

  const errors: QuoteState["errors"] = {};
  if (name.length < 2) errors.name = "Vui lòng nhập họ tên.";
  if (!phonePattern.test(phone))
    errors.phone = "Số điện thoại không hợp lệ (ví dụ 0909123456).";
  if (note.length > 1000) errors.note = "Nội dung tối đa 1000 ký tự.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Vui lòng kiểm tra lại thông tin.", errors };
  }

  // TODO: nối vào CRM / gửi email / ghi database. Tạm thời ghi log phía server.
  console.info("[bao-gia]", {
    name,
    phone,
    note,
    product: productSlug ? getProduct(productSlug)?.name ?? productSlug : null,
  });

  return {
    status: "success",
    message: `Cảm ơn ${name}. Chúng tôi sẽ gọi lại số ${phone} trong giờ làm việc.`,
  };
}
