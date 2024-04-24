import ItemList from "./ItemList";

const ResMenuCat = ({ data }) => {
  // console.log(data);

  return (
    <div>
      {/*Accordion Header */}
      <div className="bg-gray-100 rounded-2xl shadow-lg">
        <h1 className="my-5 p-3 flex justify-between">
          <span className="font-bold text-xl">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>{" "}
        </h1>
        <div>
          {/* Accordion Body */}
          <ItemList items={data.itemCards} />
        </div>
      </div>
    </div>
  );
};

export default ResMenuCat;
