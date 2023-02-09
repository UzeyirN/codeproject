import MainRoot from '../components/MainRoot'
import Home from './../pages/Home';
import AllShopWines from './../pages/ShopWines/AllShopWines';
import RedWines from './../pages/ShopWines/RedWines';
import WhiteWines from './../pages/ShopWines/WhiteWines';
import RoseWines from './../pages/ShopWines/RoseWines';
import OurStory from './../pages/About/OurStory';
import TheEstate from './../pages/About/TheEstate';
import ShippingReturn from './../pages/About/ShippingReturn';
import Blog from './../pages/Blog';
import ContactUs from './../pages/ContactUs';
import Winery from './../pages/BlogPages/Winery';
import WineFermantation from './../pages/BlogPages/WineFermantation';
import Harvest from './../pages/BlogPages/Harvest';


const ROUTES = [
    {
        path: "",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "allshopwines",
                element: <AllShopWines />
            },
            {
                path: "redwines",
                element: <RedWines />
            },
            {
                path: "whitewines",
                element: <WhiteWines />
            },
            {
                path: "rosewines",
                element: <RoseWines />
            },
            {
                path: "ourstory",
                element: <OurStory />
            },
            {
                path: "theestate",
                element: <TheEstate />
            },
            {
                path: "shippingreturn",
                element: <ShippingReturn />
            },
            {
                path: "blog",
                element: <Blog />

            },
            {
                path: "contact",
                element: <ContactUs />
            },
            {
                path: "winery",
                element: <Winery />
            },
            {
                path: "winefermantation",
                element: <WineFermantation />
            },
            {
                path: "harvest",
                element: <Harvest />
            }


        ]
    }
]

export default ROUTES