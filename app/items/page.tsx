import prisma from "@/lib/prisma";
import Link from "next/link";
import Map from "../components/MapClient";

export default async function ItemsPage() {
  const items = await prisma.item.findMany({
    include: {
      user: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });

  return (
    <div className="w-full h-full">
      <div className="fixed inset-0" style={{ top: "57px" }}>
        <Map pins={[]} />
      </div>
      {items.length === 0 ? (
        <p className="text-gray-500">No items yet.</p>
      ) : (
        <>
          <ul className="space-y-4 w-full flex flex-row gap-4 align-stretch m-0">
            {items.map((item) => (
              <li
                key={item.id}
                className="border border-gray-200 bg-white rounded-xl p-4 shadow-sm hover:shadow transition m-0"
              >
                <h2 className="text-lg font-medium text-gray-800">
                  {item.title}
                </h2>
                {item.description && (
                  <p className="text-gray-600 text-sm mt-1">
                    {item.description}
                  </p>
                )}
                {item.user && (
                  <p className="text-gray-400 text-xs mt-2">
                    Posted by {item.user.name || "Anonymous"}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
