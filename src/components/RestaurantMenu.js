import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <div className="menu-box">
        <span>
          &#9733; {avgRating} &#8226; {costForTwoMessage}
        </span>
        <p>{cuisines.join(", ")}</p>
      </div>
      <div className="menu-items">
        <h1>Recommeded</h1>
        <div className="menu-item-description">
          <ul>
            {itemCards.map((item) => (
              <li key={item.card.info.id}>
                <p>{item.card.info.name}</p>
                <p>Rs. {item.card.info.price / 100}/-</p>
                <p>{item.card.info.description}</p>
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
