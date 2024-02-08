import { api } from "~/trpc/server";
import DataTable from "./data-table";

export default async function Page() {
  const stuffILike = await api.stuffILike.getAll.query();

  return (
    <div className="min-h-fill px-6 py-4">
      <div className="grid-cols-main grid">
        <div>
          <h1 className="text-6xl font-medium uppercase leading-none tracking-tight">
            Stuff I Like
          </h1>
        </div>
        <div></div>
      </div>
      <DataTable stuffILike={stuffILike} />
    </div>
  );
}

export const dynamic = "force-dynamic";
