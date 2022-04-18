import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { CounterWithCustomHooks } from "./components/01-useState/CounterWithCustomHooks";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<CounterWithCustomHooks />);
