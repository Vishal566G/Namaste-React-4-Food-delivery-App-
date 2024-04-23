import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    deliveryTime,
    cuisines,
    areaName,
  } = resData?.info;

  return (
    <div className="res-card w-48 hover:scale-95 transition-all">
      <div className="">
        <img
          className="res-logo rounded-lg h-[200px]"
          alt="reslogo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="res-description px-2">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="font-semibold text-base">
          &#9733; {avgRating} &#x2022; {resData.info.sla.deliveryTime} mins
        </p>
        <p className="text-base">{cuisines.join(", ")}</p>
        <p className="text-base">{areaName}</p>
      </div>
    </div>
  );
};

// Higher order component

// input - RestrauntCard => RestrauntCardIsOpen

export const isOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="hover:cursor-pointer hover:scale-95 transition-all">
        <label className="absolute bg-green-700 text-white z-10 p-1 rounded-md">
          We're Open!!
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
