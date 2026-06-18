import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 font-black text-slate-950">
            T
          </div>
          <div>
            <h1 className="text-xl font-black">Tavaro Group</h1>
            <p className="text-xs text-slate-400">Software Systems</p>
          </div>
        </Link>

        <nav className="flex gap-6 text-sm font-bold text-slate-300">
          <Link to="/farmos" className="hover:text-emerald-400">FarmOS</Link>
          <Link to="/about" className="hover:text-emerald-400">About</Link>
          <Link to="/contact" className="hover:text-emerald-400">Contact</Link>
        </nav>
      </div>
    </header>
  );
}