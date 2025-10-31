import prisma from "@/lib/prisma";

export default async function Home() {
  const items = await prisma.items.findMany();
  console.log(items);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="">
          <h1>Items:</h1>
          <br />
          {items.map((item: any) => (
            <div key={item.id}>
              <h1>{item.title}</h1>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
