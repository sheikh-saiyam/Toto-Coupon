import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import TopBrands from "../components/Brand/TopBrands";

const HomeLayout = () => {
    const couponData = useLoaderData();
    const {isSaleOn} = couponData
    console.log(couponData);
    return (
        <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl pt-12 pb-24">
            <Banner></Banner>
            <TopBrands></TopBrands>
            {
                // isSaleOn && 
                    couponData.map(coupon => (
                        <h1 key={coupon._id}>{coupon.brand_name}</h1>
                    ))
                
            }
        </div>
    );
};

export default HomeLayout;