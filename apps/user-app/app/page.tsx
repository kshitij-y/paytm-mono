import { PrismaClient } from "@repo/db/client"
const client = new PrismaClient();
export default function Page(): JSX.Element {
  return (
    <div className="bg-red-800 text-2xl" >
      hi there
    </div>
  )
}