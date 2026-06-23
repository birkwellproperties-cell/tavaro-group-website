import { useState } from "react";
import { Link } from "react-router-dom";

const FARMOS_APP_URL = "https://systems.allianz-holdings.com";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "/"],
    ["FarmOS", "/farmos"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-amber-500/20 bg-[#020817]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center">
          <img
            src="/brand/tavaro-logo.png"
            alt="Tavaro Group"
            className="h-14 w-auto md:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-black uppercase tracking-wide text-slate-200 md:flex">
          {links.map(([label, href]) => (
            <Link key={label} to={href} className="hover:text-amber-400">
              {label}
            </Link>
          ))}

          <a
            href={FARMOS_APP_URL}
            className="hover:text-amber-400"
          >
            Sign In
          </a>

          <Link
            to="/demo"
            className="rounded-xl border border-amber-500/40 px-5 py-3 font-black text-amber-300 hover:bg-amber-500/10"
          >
            Request Demo
          </Link>

          <a
            href={FARMOS_APP_URL}
            className="rounded-xl bg-amber-500 px-5 py-3 font-black text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400"
          >
            Start Free
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="rounded-xl border border-amber-500/30 px-4 py-2 text-sm font-black uppercase tracking-wide text-amber-400 md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-amber-500/20 bg-[#020817] px-6 py-6 md:hidden">
          <div className="grid gap-4 text-sm font-black uppercase tracking-wide text-slate-200">
            {links.map(([label, href]) => (
              <Link
                key={label}
                to={href}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-amber-500/20 bg-white/[0.04] px-4 py-3 hover:text-amber-400"
              >
                {label}
              </Link>
            ))}

            <a
              href={FARMOS_APP_URL}
              onClick={() => setOpen(false)}
              className="rounded-xl border border-amber-500/20 bg-white/[0.04] px-4 py-3 text-center hover:text-amber-400"
            >
              Sign In
            </a>

            <Link
              to="/demo"
              onClick={() => setOpen(false)}
              className="rounded-xl border border-amber-500/40 px-4 py-3 text-center text-amber-300"
            >
              Request Demo
            </Link>

            <a
              href={FARMOS_APP_URL}
              onClick={() => setOpen(false)}
              className="rounded-xl bg-amber-500 px-4 py-3 text-center font-black text-slate-950"
            >
              Start Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}