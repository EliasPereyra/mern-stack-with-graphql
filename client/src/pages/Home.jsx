import React from "react";
import {
  AddClientModal,
  AddProjectModal,
  Clients,
  Projects,
} from "../components";

function Home() {
  return (
    <>
      <div className=" gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
        <hr />
        <Projects />
        <hr />
        <Clients />
      </div>
    </>
  );
}

export default Home;
