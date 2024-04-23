import RestaurantCard, { isOpenLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const IsOpen = isOpenLabel(RestaurantCard);

  // console.log("Body Rendered ",listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.753111&lng=77.108764&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Looks like you're offline, turn on the internet!!</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body max-w-[90%] block m-auto">
      <div className="filter-box flex justify-between py-6">
        <div className="search">
          <input
            type="text"
            className="search-box border-solid border-[1px] border-black rounded-lg mx-4 py-1 px-4"
            placeholder="Search for any food..."
            value={searchText.toLowerCase()}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restaurants cards and update the UI
              // searchText

              const filteredRestaurants = listOfRestaurants.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText);
              });

              setFilteredRestaurant(filteredRestaurants);
            }}
            className="searchBtn border-solid divide-solid border-1 py-1 px-4 bg-green-400 rounded-lg hover:cursor-pointer"
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="filter-btn border-solid divide-solid border-1 py-1 px-4 bg-green-400 rounded-lg hover:cursor-pointer"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap gap-9 justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <IsOpen resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
