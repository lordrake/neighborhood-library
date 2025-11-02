"use client";

import { signIn } from "next-auth/react";

export default function StarterScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] w-full text-center">
      <h1 className="text-3xl font-semibold mb-4">
        Welcome to Neighborhood Library
      </h1>
      <p className="text-gray-600 max-w-md mb-8">
        Borrow and lend tools, board games, and books with your neighbours. Sign
        in to get started!
      </p>
      <button
        onClick={() => signIn("google")}
        className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer px-4 py-2 rounded-lg"
      >
        Sign in with Google
      </button>
    </div>
  );
}
