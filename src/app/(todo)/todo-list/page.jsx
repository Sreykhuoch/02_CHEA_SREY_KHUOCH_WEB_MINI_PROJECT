import React from "react";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import TodolistListComponent from "@/components/TodolistListComponent";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";

export default function page() {
  return (
    <main className="mt-10 ml-2 flex flex-row w-full justify-normal">
      <div className="w-10/12">
        <div className="mr-3 w-8/12">
          <ListBoardComponentHeader />
        </div>
        <div>
          <TodolistListComponent />
        </div>
      </div>

      <MonthlyStatisticsComponent />
    </main>
  );
}
