import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-center border-b-2"
        >
          <div className="min-h-40 my-10 mx-6 max-w-[80%]">
            <p className="font-bold text-xl">{item.card.info.name} </p>
            <p className="my-2 font-semibold">
              ₹
              {item.card.info.defaultPrice / 100 ||
                item.card.info.finalPrice / 100 ||
                item.card.info.price / 100}
            </p>
            <p className="my-3">
              Rating
              {item.card.info.ratings.aggregatedRating.rating == null
                ? ""
                : " " + item.card.info.ratings.aggregatedRating.rating}
            </p>
            <p className="text-md">{item.card.info.description}</p>
            {/* <p className="border-[1px] bg-gray-300"></p> */}
          </div>
          <div className="">
            <img
              className="w-[140px] h-[140px] object-cover rounded-lg mx-3"
              src={CDN_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
