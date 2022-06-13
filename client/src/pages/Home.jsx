import React from "react";
import { AddClientModal, Clients, Projects } from "../components";

function Home() {
  return (
    <>
      <div className=" gap-3 mb-4">
        <AddClientModal />
        <hr />
        <Projects />
        <hr />
        <Clients />
      </div>
    </>
  );
}

export default Home;
