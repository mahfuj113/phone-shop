import { useEffect, useState } from "react";
import FavouritesCard from "./FavouritesCard";

const Favourites = () => {
    const [favourites, setFavorites] = useState([]);
  const [noFound, setNofound] = useState(false);
  const [isShow,setIsShow] = useState(false)

  const [totalPrice,setTotalPrice] = useState(0)

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

    if (favoriteItems) {
      setFavorites(favoriteItems);

      const total = favoriteItems.reduce((preValue,currentItem)=> preValue + currentItem.price,0)

      console.log(total);

      setTotalPrice(total)


    } else {
      setNofound("No Data Found");
    }
  }, []);

  const handleRemove = () => {
    localStorage.clear();
    setFavorites([]);
    setNofound("No Data Found");
  };
    return (
        <div>
            {noFound ? (
                <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
            ) : (
                <div>
                    {favourites.length > 0 && (
                        <div>
                            <button
                                onClick={handleRemove}
                                className="px-5 bg-green-200 block mx-auto"
                            >
                                Deleted All favorites
                            </button>

                            <h1>Total price : {totalPrice}</h1>
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-5">
                        {
                            isShow ? favourites.map((phone) => (
                                <FavouritesCard key={phone.id} phone={phone}></FavouritesCard>
                            ))

                                : favourites.slice(0, 2).map((phone) => (
                                    <FavouritesCard key={phone.id} phone={phone}></FavouritesCard>
                                ))
                        }
                    </div>

                    {favourites.length > 2 && <button onClick={() => setIsShow(!isShow)} className="px-5 bg-green-200 block mx-auto">
                        {isShow ? "See less" : "See more"}
                    </button>}
                </div>
            )}
        </div>
    );
};

export default Favourites;