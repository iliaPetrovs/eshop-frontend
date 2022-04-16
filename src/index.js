import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </QueryClientProvider>,
  document.getElementById("root")
);
