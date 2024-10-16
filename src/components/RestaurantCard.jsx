import { IMAGES_API } from "../utils/constants";

const RestaurantCard = (data) => {

    if(data == null) return <Shimmer />

    const { name, avgRating, costForTwo, cloudinaryImageId, cuisines } = data.props?.info;

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-60 h-90 m-4">
            <div className="h-48 overflow-hidden">
                <img
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    src={IMAGES_API + cloudinaryImageId}
                    alt={name}
                />
            </div>

            <div className="p-4">
                <div className="font-bold text-lg mb-2 text-gray-800">{name}</div>

                <div className="text-m text-gray-600 mb-2">
                    {cuisines.join(", ")}
                </div>

                <div className="text-gray-700 text-m mb-2">
                    Cost for Two: <span className="font-semibold">{costForTwo}</span>
                </div>

                <div className="flex items-center">
                    <span className="text-yellow-500 text-m">&#9733;</span>
                    <span className="ml-2 text-gray-700 font-semibold">{avgRating || data.props?.info?.avgRatingString}</span>
                </div>
            </div>
        </div>
    );
};



export const PromotedRestaurant = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <div className="p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
                    <label className="block text-yellow-700 font-bold">Promoted</label>
                    <RestaurantCard {...props} />
                </div>
            </div>
        );
    };
};



export default RestaurantCard;