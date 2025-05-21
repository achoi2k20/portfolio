import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";


const pages = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
];

const Navigation = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav className="space-x-4">
          {pages.map((page) => (
            <Link key={page.path} href={page.path}>
              <span
                className={`cursor-pointer hover:underline transition ${
                  router.pathname === page.path ? "font-semibold text-blue-600" : ""
                }`}
              >
                {page.name}
              </span>
            </Link>
          ))}
        </nav>
      </header>
      <main className="p-8 max-w-4xl mx-auto">{children}</main>
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </footer>
    </div>
  );
};

export default Navigation;
