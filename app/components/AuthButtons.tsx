"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButtons() {
  const { data: session, status } = useSession();

  // While loading session
  if (status === "loading") {
    return (
      <button
        disabled
        className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      </button>
    );
  }

  if (session?.user) {
    return (
      <div className="flex items-center gap-2">
        <img
          src={session.user.image ?? ""}
          alt={session.user.name ?? ""}
          className="w-8 h-8 rounded-full"
        />
        <span>{session.user.name}</span>
        <button
          onClick={() => signOut()}
          className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-1.5 rounded-lg text-sm cursor-pointer"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-sm cursor-pointer"
    >
      Login with Google
    </button>
  );
}
