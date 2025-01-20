import React from "react";
import './App.css'

import DownloadExcel from "./components/DownloadExcel";
import QueryBaseArray from "./components/QueryBaseArray";
import TypicalActivity from "./components/TypicalActivity";

function App() {
    return (
      <>
        <DownloadExcel/>
        <QueryBaseArray/>
        <TypicalActivity/>
      </>
    );
}

export default App
