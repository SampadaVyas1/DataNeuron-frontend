import { useState } from "react";
import classes from "./Component.module.scss";

const Component1 = (props: any) => {
  const { id } = props;
  const [data, setData] = useState<any>({
    1: [],
    2: [],
    3: [],
  });
  const [inputdata, setInputData] = useState<string>();
  const handleChange = (e: any) => {
    setInputData(e.target.value);
  };
  const handleClickOnAddButton = async () => {
    setData((prev: any) => ({ ...prev, [id]: [...prev[id], inputdata] }));
    sendDataToBackend(data);

    setInputData("");
  };
  const handleClickOnEditButton = () => {};

  const sendDataToBackend = async (data: any) => {
    console.log(data);
    try {
      const response = await fetch("http://localhost:4000/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "sam",
          age: "12",
        }),
      });
      if (response.ok) {
        console.log("Data sent successfully to backend.");
      } else {
        console.error("Failed to send data to backend.");
      }
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.inputContainer}>
        <input
          type="text"
          value={inputdata}
          className={classes.input}
          onChange={handleChange}
        />
        <button className={classes.addButton} onClick={handleClickOnAddButton}>
          add
        </button>
      </div>
      <div className={classes.userDetails}>
        {data[id] &&
          data[id]?.map((userDetails: any) => (
            <div className={classes.userDetailsContainer}>
              <p>{userDetails}</p>
              <button
                className={classes.editButton}
                onClick={handleClickOnEditButton}
              >
                edit
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Component1;
