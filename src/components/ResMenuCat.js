import { useState } from "react";
import ItemList from "./ItemList";

const ResMenuCat = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      {/*Accordion Header */}
      <div className="bg-gray-100 rounded-2xl shadow-lg">
        <h1
          className="my-5 p-3 flex justify-between cursor-pointer hover:bg-gray-200 hover:rounded-lg"
          onClick={handleClick}
        >
          <span className="font-bold text-xl">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>{" "}
        </h1>
        <div>
          {/* Accordion Body */}
          {showItems && <ItemList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default ResMenuCat;
