import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { createWorkSpace } from "@/services/workspaceService";
import { revalidatePath } from "next/cache";

// export const createNewWorkSpace  = async (request) => {
//   const session = await getServerSession(authOptions)
//   const token = session?.user?.token;
//   const results = await fetch(`${process.env.NEXTAUTH_URL}/workspaces}`, {
//     method: "POST",
//     body: JSON.stringify(request),
//     headers: {
//       Authorization: `Bearer${token}`,
//       "Content-Type": "application/json",
//     }
//   }).then((data) => data.json())
//     return results; 
// }


export const createWorkSpaceAction =  async(req) => {
  const res = await createWorkSpace(req)
  revalidatePath("/todo-list")
  return res
}

