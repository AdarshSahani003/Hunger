import ItemList from "./ItemList";

const RestaurantCategory = ({categories, show, setShow, setNull}) => {

    const handleClick = () => {
        show ? setNull() : setShow()
    };

    return(
        <div>
            <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg cursor-pointer">
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="font-bold text-lg">{categories.title} ({categories.itemCards.length})</span>
                    {show ? <span>⬇️</span> : <span>⬆️</span>}
                </div>
                {show && <ItemList items={categories.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;