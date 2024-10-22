import { useState } from "react";
import "./App.css";
import Columns from "./components/Columns";

function App() {
  const [confirm, setConfirm] = useState(false);
  return (
    <div className="bg-gray-500 flex justify-between flex-col">
      <div className="flex  text-center justify-center mt-4">
        <button
          onClick={() => {
            setConfirm(true);
          }}
          className="bg-red-500 hover:bg-red-600 text-gray-200 hover:text-gray-400 rounded p-3  "
        >
          Reset Table
        </button>
      </div>
      <div>
        {confirm && (
          <div className="bg-black bg-opacity-75 w-full h-full top-0 left-0 absolute transition-transform">
            <div className="bg-blue-950    absolute z-50 p-4 w-1/2 top-1/3 left-1/2 flex justify-center -translate-x-1/2 -translate-y-1/2 text-2xl">
              <p className="text-white"> Are you sure?</p>
              <div className="flex justify-between gap-2">
                <button
                  className="bg-green-500 hover:bg-green-600 text-gray-200 hover:text-gray-400 ml-2"
                  onClick={() => {
                    localStorage.removeItem("trelloData");
                    window.location.reload();
                  }}
                >
                  Yes
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-gray-200 hover:text-gray-400"
                  onClick={() => {
                    setConfirm(false);
                  }}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={` min-h-screen flex justify-center items-start ${
          confirm == true ? "bg-opacity-50" : ""
        }`}
      >
        <Columns state="PLANNED" confirm={confirm} />
        <Columns state="ONGOING" confirm={confirm} />
        <Columns state="DONE" confirm={confirm} />
      </div>
    </div>
  );
}

export default App;
