"use client";

import AuthButtons from "./AuthButtons";

export default function Header() {
  return (
    <div className="w-full bg-gray-900 text-white py-3 px-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Neighborhood Library</h1>
      <AuthButtons />
    </div>
  );
}
