import { api } from "~/trpc/server";
import DataTable from "./data-table";
import Heading from "../_components/ui/heading";

export default async function Page() {
  const stuffILike = await api.stuffILike.getAll.query();

  return (
    <div className="min-h-fill px-6 py-4">
      <div className="grid-cols-main grid">
        <div>
          <Heading>Stuff I Like</Heading>
        </div>
        <div></div>
      </div>
      <DataTable stuffILike={stuffILike} />
    </div>
  );
}

export const dynamic = "force-dynamic";
