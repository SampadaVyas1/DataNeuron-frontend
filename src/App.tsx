import { useEffect } from "react";
import "./App.scss";
import { Resizable } from "re-resizable";
import Component1 from "./component/Component1/Component1";

function App(): JSX.Element {
  const getData = async () => {
    try {
      const resoponse = await fetch("http://localhost:4000/api/count");
      const data = resoponse.json();
      console.log(data);
    } catch (e) {}
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app-container">
      <div style={{ display: "flex", flexDirection: "row", gap: "1em" }}>
        <Resizable
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "solid 1px #ddd",
            background: "#f0f0f0",
          }}
          defaultSize={{
            width: "50%",
            height: 300,
          }}
        >
          <Component1 id={1} />
        </Resizable>

        <Resizable
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "solid 1px #ddd",
            background: "#f0f0f0",
          }}
          defaultSize={{
            width: "50%",
            height: 300,
          }}
        >
          <Component1 id={2} />
        </Resizable>
      </div>
      <Resizable
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "solid 1px #ddd",
          background: "#f0f0f0",
        }}
        defaultSize={{
          width: "100%",
          height: 300,
        }}
      >
        <Component1 id={3} />
      </Resizable>
    </div>
  );
}

export default App;
