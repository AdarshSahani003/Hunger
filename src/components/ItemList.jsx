import { useDispatch } from "react-redux";
import { IMAGES_API } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        console.log(item);
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="border-b-2 text-left p-2 m-2 flex justify-between h-52">
                    <div>
                        <div className="py-2">
                            <span>{item.card.info.name} ₹-</span>
                            <span>{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    {item.card.info.imageId
                        ? <div className="w-24 m-2 relative">
                            <img className="absolute top-0 left-0 z-10 w-32 h-32 bg-blue-500" src={IMAGES_API + item.card.info.imageId} />
                            <button className="absolute left-1/4 bottom-1 z-10 w-12 h-8 bg-gray-800 text-white rounded-md" onClick={() => handleAddItem(item)}>Add</button>
                        </div>
                        : <div></div>}
                </div>
            )
            )
            }
        </div>
    )
}

export default ItemList;