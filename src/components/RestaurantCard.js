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
        <h3>{name}</h3>
        <p>
          &#9733; {avgRating} &#x2022; {resData.info.sla.deliveryTime} mins
        </p>
        <p>{cuisines.join(", ")}</p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
