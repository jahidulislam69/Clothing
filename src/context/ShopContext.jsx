import { createContext } from "react"
import { allProductData } from "../assets/assets";


export const ShopContext = createContext();

const ShopContextProvider = ({children}) => {
    const bestsellers = allProductData.filter(product => product.bestseller === true);
    const trending = allProductData.filter(product => product.trending === true);


    const value = {
        allProductData,
        bestsellers,
        trending
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;


