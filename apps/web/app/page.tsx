import Image from "next/image";
import { trpc } from "./trpc";

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: "douglas" });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">{greeting}</h1>
    </main>
  );
}
