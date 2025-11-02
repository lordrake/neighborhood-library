"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButtons() {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <div className="flex items-center gap-2">
        <img
          src={session.user.image ?? ""}
          alt={session.user.name ?? ""}
          className="w-8 h-8 rounded-full"
        />
        <span>{session.user.name}</span>
        <button onClick={() => signOut()}>Logout</button>
      </div>
    );
  }

  return <button onClick={() => signIn("google")}>Login with Google</button>;
}
