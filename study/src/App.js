import React from "react";
import UseState from "./components/useState/UseState";
import UseEffect from "./components/useEffect/UseEffect";
import UseMemo from "./components/useMemo/UseMemo";
import UseCallback from "./components/useCallback/UseCallback";

function App() {
    return (
        <div className="App">
            <h1 style={{textAlign: 'center', color: "#8e85ff"}}>UseState...</h1>
            <hr/>
            <UseState />
            <h1 style={{textAlign: 'center', color: "#8e85ff"}}>useEffect...</h1>
            <hr/>
            <UseEffect />
            <h1 style={{textAlign: 'center', color: "#8e85ff"}}>UseMemo...</h1>
            <hr/>
            <UseMemo />
            <h1 style={{textAlign: 'center', color: "#8e85ff"}}>UseCallBack...</h1>
            <hr/>
            <UseCallback />
        </div>
    );
}

export default App;
