import { createNewTasks } from "@/services/taskService"
import { revalidatePath } from "next/cache";

export const createTaskAction = async(data)=>{
  const res = await createNewTasks(data)
  revalidatePath("/todo-board")
  console.log("res: ", res)
  return res;
}