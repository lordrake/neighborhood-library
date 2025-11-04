"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function NewItemPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { data: session, status } = useSession();
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <p className="text-xl mb-4">Please sign in to post an item.</p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(title, description);
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/items", {
        method: "POST",
        body: JSON.stringify({ title, description }),
      });
      if (!response.ok) {
        throw new Error("Failed to post item");
      }
      router.push("/items");
    } catch (error) {
      setError("Failed to post item");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <div className="w-full mb-4">
        <label className="block text-sm font-medium text-gray-300">Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 py-4 mt-1 border border-gray-300 text-gray-700 bg-gray-50 rounded-lg"
        />
      </div>

      <div className="w-full mb-4">
        <label className="block text-sm font-medium text-gray-300">
          Description
        </label>
        <textarea
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 py-4 mt-1 border border-gray-300 text-gray-700 bg-gray-100 rounded-lg"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
      >
        {loading ? "Posting..." : "Post Item"}
      </button>
    </form>
  );
}
