import React from "react";
import SideBar from "../../components/backoffice/SideBar";
import Table from "../../components/backoffice/Table";

function AdminDash() {
  return (
    <div className="flex jusify-center">
      <SideBar />

      <div className=" w-full p-20 bg-gray-50 pl-80 ">
        <Table />
      </div>
    </div>
  );
}

export default AdminDash;
