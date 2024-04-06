import Table from "@/components/table";
import Image from "next/image";

export default function Home() {
  return (

    <main className="bg-blue-secondary min-h-screen py-10 ">
      <div className="mx-auto px-4 pb-12 sm:px-6">
        <div className="rounded-lg bg-white px-5 py-6 shadow-sm sm:px-6">
          <Table />
        </div>
      </div>
    </main>
  );
}
