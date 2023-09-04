import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import AppForm from "./appForm/AppForm";
import AppZero from "./appZero/AppZero";
import AppTable from "./appTable/AppTable";
import AppGetAllActors from "./appGetAllActors/AppGetAllActors";
import AppGetActor from "./appGetActor/AppGetActor";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppZero />
    <AppForm />
    <App />
    <AppGetAllActors/>
    {/* <AppTable /> */}
    <AppGetActor/>
  </StrictMode>
);
