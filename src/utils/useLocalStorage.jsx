import { useState } from "react";

const useLocalStorage = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("trelloData")) || []
  );

  const addItem = (toAdd) => {
    let newData;

    newData = [...data, toAdd];

    localStorage.setItem("trelloData", JSON.stringify(newData));
    console.log(`newData ${"trelloData"}:`, newData);
    setData(newData);
  };

  return { data, addItem };
};

export default useLocalStorage;
