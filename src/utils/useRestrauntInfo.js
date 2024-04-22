import { useEffect, useState } from "react";
import { RESTRAUNT_MENU_API } from "./constants";

const useRestrauntInfo = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTRAUNT_MENU_API);
    const json = await data.json();
    console.log(json.data)
    setListOfRestraunts(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return listOfRestraunts;
};

export default useRestrauntInfo;
