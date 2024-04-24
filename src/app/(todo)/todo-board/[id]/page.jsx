import React from "react";

import ListBoardComponentHeader from "../../../../components/ListBoardComponentHeader";
import TodoCardComponent from "../../../../components/TodoCardComponent";
import AddNewTaskComponent from "../../../../components/AddNewTaskComponent";

export default function BoardComponent({params:{id}}) {
  console.log(id)
  return (
    <>
        <div  className="flex flex-col w-11/12 m-12">
          <ListBoardComponentHeader />
          <div className="w-full">
            <TodoCardComponent />
          </div>
        </div>
      <div className="mb-10 flex justify-end">
        <AddNewTaskComponent id={id}/>
      </div>
    </>
  );
}
