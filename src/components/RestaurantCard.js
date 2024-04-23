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

export default RestaurantCard;
