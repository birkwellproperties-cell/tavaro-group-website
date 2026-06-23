import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-amber-500/20 bg-[#020817] px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <img
            src="/brand/tavaro-logo.png"
            alt="Tavaro Group"
            className="h-20 w-auto"
          />
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
            Software systems for modern agriculture.
          </p>
        </div>

        <FooterGroup
          title="Products"
          links={[
            ["FarmOS Livestock", "/farmos"],
            ["FarmOS Mobile App", "/farmos"],
            ["FarmOS Apiary", "/farmos"],
            ["FarmOS Poultry", "/farmos"],
          ]}
        />

        <FooterGroup
          title="Company"
          links={[
            ["About Us", "/about"],
            ["Contact", "/contact"],
            ["Request Demo", "/demo"],
          ]}
        />

        <FooterGroup
          title="Legal"
          links={[
            ["Privacy Policy", "/privacy"],
            ["Terms & Conditions", "/terms"],
          ]}
        />
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Tavaro Group. All rights reserved.</p>
        <p className="text-amber-400">Building systems. Empowering farms.</p>
      </div>
    </footer>
  );
}

function FooterGroup({ title, links }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-amber-400">
        {title}
      </h3>

      <div className="grid gap-3 text-sm font-bold text-slate-300">
        {links.map(([label, href]) => (
          <Link key={label} to={href} className="hover:text-amber-400">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}