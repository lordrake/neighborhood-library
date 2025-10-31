import Image from "next/image";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data: items } = await supabase.from("items").select("*");
  console.log(items);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="">
          <h1>Items:</h1>
          <br />
          {items?.map((item) => (
            <div key={item.id}>
              <h1>{item.title}</h1>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
