"use client";
import AuthButtons from "./components/AuthButtons";
import { useSession } from "next-auth/react";
import StarterScreen from "./components/StarterScreen";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <span className="w-6 h-6 border-4 border-gray-400 border-t-transparent rounded-full animate-spin"></span>
      </div>
    );
  }

  if (!session) {
    return <StarterScreen />;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Welcome back, {session.user?.name}!
      </h1>
      <p>Your main app content goes here.</p>
      {/* You can render your map, items list, etc. here */}
    </div>
  );
}
