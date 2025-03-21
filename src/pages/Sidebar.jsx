import React from "react";

function Sidebar({ sidebarOpen, toggleSidebar, setCurrentQuestion }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-200 text-white w-64 p-4 transition-transform duration-300 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        className="mb-4 p-2 bg-gray-600 text-white rounded w-full"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? "X" : "E"}
      </button>

      <div className="flex flex-wrap gap-4 justify-center">
        <button className="p-2 bg-white rounded text-black w-8" onClick={() => setCurrentQuestion(0)}>1</button>
        <button className="p-2 bg-white rounded text-black W-8" onClick={() => setCurrentQuestion(1)}>2</button>
        <button className="p-2 bg-white rounded text-black W-8" onClick={() => setCurrentQuestion(2)}>3</button>
        <button className="p-2 bg-white rounded text-black W-8" onClick={() => setCurrentQuestion(3)}>4</button>
        <button className="p-2 bg-white rounded text-black W-8" onClick={() => setCurrentQuestion(4)}>5</button>
        <button className="p-2 bg-white rounded text-black W-8" onClick={() => setCurrentQuestion(5)}>6</button>
        <button className="p-2 bg-white rounded text-black W-8" onClick={() => setCurrentQuestion(6)}>7</button>
        <button className="p-2 bg-white rounded text-black W-8" onClick={() => setCurrentQuestion(7)}>8</button>
        <button className="p-2 bg-white rounded text-black W-8" onClick={() => setCurrentQuestion(8)}>9</button>
        <button className="p-2 bg-white rounded text-black W-8" onClick={() => setCurrentQuestion(9)}>10</button>
      </div>
    </div>
  );
}

export default Sidebar;
