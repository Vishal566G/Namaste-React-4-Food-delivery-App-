import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenuItems from "../utils/useRestaurantMenuItems";
import ResMenuCat from "./ResMenuCat";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenuItems(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu max-w-[80%] m-auto block">
      <h1 className="font-bold my-8 text-2xl text-center">{name}</h1>
      <div className="menu-box border-[1px] border-solid border-black p-4 my-2 rounded-lg shadow-lg shadow-blue-300 font-semibold text-lg">
        <span>
          &#9733; {avgRating} &#8226; {costForTwoMessage}
        </span>
        <p>{cuisines.join(", ")}</p>
      </div>
      <div className="Accordion">
        {categories.map((categories, index) => (
          // Controlled component
          <ResMenuCat
            key={categories?.card?.card?.title}
            data={categories?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
