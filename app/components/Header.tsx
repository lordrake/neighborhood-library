"use client";

import AuthButtons from "./AuthButtons";

export default function Header() {
  return (
    <div className="w-full bg-gray-900 text-white py-3 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <a href="/" className="text-2xl font-bold">
          Neighborhood Library
        </a>
        <nav className="flex items-center gap-4">
          <a
            href="/items"
            className="text-sm font-medium text-white hover:text-gray-300"
          >
            Items
          </a>
          <a
            href="/items/new"
            className="text-sm font-medium text-white hover:text-gray-300"
          >
            Add Item
          </a>
        </nav>
      </div>
      <AuthButtons />
    </div>
  );
}
