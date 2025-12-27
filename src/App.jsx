

import styles from "./App.module.css";

import Calculator from "./components/Calculator/Calculator";
import DataGrid from "./components/DataGrid/DataGrid";
import DebouncedSearch from "./components/DebouncedSearch/DebouncedSearch";
import DisplayWindowSize from "./components/DisplayWindowSize/DisplayWindowSize";

function App() {
  return (
    <div className={styles.app}>
      <div className="container">
        <Calculator />
        <DataGrid />
        <DisplayWindowSize />
        <DebouncedSearch />
      </div>
    </div>
  );
}

export default App;
