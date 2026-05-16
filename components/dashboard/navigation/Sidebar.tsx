import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r flex flex-col px-6 py-6">
      
      {/* Logo */}
      <div className="text-xl font-semibold tracking-tight">
        HOXXES
      </div>

      <div className="text-xs text-gray-400 mt-1">
        SaaS Platform
      </div>

      {/* Nav */}
      <nav className="mt-10 flex flex-col gap-3 text-sm">
        
        <Link className="hover:bg-gray-100 px-3 py-2 rounded-lg" href="/dashboard">
          Overview
        </Link>

        <Link className="hover:bg-gray-100 px-3 py-2 rounded-lg" href="/dashboard/modules">
          Modules
        </Link>

        <Link className="hover:bg-gray-100 px-3 py-2 rounded-lg" href="/dashboard/billing">
          Billing
        </Link>

        <Link className="hover:bg-gray-100 px-3 py-2 rounded-lg" href="/dashboard/licenses">
          Licenses
        </Link>

        <Link className="hover:bg-gray-100 px-3 py-2 rounded-lg" href="/dashboard/tickets">
          Support
        </Link>

        <Link className="hover:bg-gray-100 px-3 py-2 rounded-lg" href="/dashboard/settings">
          Settings
        </Link>

      </nav>

      {/* bottom */}
      <div className="mt-auto text-xs text-gray-400">
        © {new Date().getFullYear()} HOXXES
      </div>

    </div>
  );
}