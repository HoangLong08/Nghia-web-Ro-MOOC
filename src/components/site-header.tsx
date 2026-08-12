"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site, type NavItem } from "@/data/site";

function isActive(pathname: string, item: NavItem) {
  if (item.href === "/") return pathname === "/";
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

function DesktopItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const wrapper = useRef<HTMLDivElement>(null);
  const active = isActive(pathname, item);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!wrapper.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const linkClass = `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
    active
      ? "bg-slate-100 text-slate-900"
      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
  }`;

  if (!item.children) {
    return (
      <Link href={item.href} className={linkClass}>
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={wrapper}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        className={`${linkClass} inline-flex items-center gap-1`}
      >
        {item.label}
        <svg viewBox="0 0 20 20" className="size-4" fill="currentColor" aria-hidden>
          <path d="M5.5 7.5L10 12l4.5-4.5H5.5z" />
        </svg>
      </Link>

      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full w-56 rounded-lg border border-slate-200 bg-white p-1 shadow-lg"
        >
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                pathname.startsWith(child.href)
                  ? "bg-amber-50 font-medium text-amber-800"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setMobileOpen(false)}
        >
          <span className="grid size-9 place-items-center rounded-md bg-slate-900 text-sm font-bold text-white">
            TL
          </span>
          <span className="text-base font-semibold text-slate-900">{site.name}</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <DesktopItem key={item.href} item={item} pathname={pathname} />
          ))}
        </nav>

        <a
          href={site.hotlineHref}
          className="ml-auto rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-400 lg:ml-2"
        >
          {site.hotline}
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="Mở menu"
          className="rounded-md border border-slate-200 p-2 text-slate-700 lg:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-2 lg:hidden">
          {nav.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md py-2 pl-7 pr-3 text-sm text-slate-600 hover:bg-slate-50"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
