import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenuItems from "../utils/useRestaurantMenuItems";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenuItems(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu max-w-[70%] m-auto block">
      <h1 className="font-bold my-8 text-lg">{name}</h1>
      <div className="menu-box border-[1px] border-solid border-black p-4 my-2 rounded-lg shadow-lg shadow-blue-300 font-semibold">
        <span>
          &#9733; {avgRating} &#8226; {costForTwoMessage}
        </span>
        <p>{cuisines.join(", ")}</p>
      </div>
      <div className="menu-items">
        <h1 className="font-bold text-lg">Recommeded</h1>
        <div className="menu-item-description font-medium">
          <ul>
            {itemCards.map((item) => (
              <li key={item.card.info.id} className="py-3">
                <p>{item.card.info.name}</p>
                <p className="py-2">Rs. {item.card.info.price / 100}/-</p>
                <p>{item.card.info.description}</p>
                <p className="h-[1px] bg-black"></p>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu-item-image"></div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
