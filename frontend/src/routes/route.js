import MainRoot from '../components/MainRoot'
import Home from './../pages/Home';
import OurStory from './../pages/About/OurStory';
import TheEstate from './../pages/About/TheEstate';
import ShippingReturn from './../pages/About/ShippingReturn';
// blog
import BlogRoot from '../pages/BlogPages/BlogRoot';
import Blog from '../pages/BlogPages/Blog';
import ContactUs from './../pages/ContactUs';
import Winery from './../pages/BlogPages/Winery';
import WineFermantation from './../pages/BlogPages/WineFermantation';
// import Harvest from '../../pages/Harvest';
import AllShopWines from '../pages/ShopWines/AllShopWines'
import RedWines from '../pages/ShopWines/RedWines'
import RoseWines from '../pages/ShopWines/RoseWines'
import WhiteWines from '../pages/ShopWines/WhiteWines'
import Harvest from './../pages/BlogPages/Harvest';
import AddToBasket from '../pages/AddtoBasket';
import LoginRoot from './../pages/LoginPages/LoginRoot';
import Login from '../pages/LoginPages/Login';
import CreateAcc from './../pages/LoginPages/CreateAcc';
import ForgotPassword from './../pages/LoginPages/ForgotPassword';
import Add from '../pages/Add';
import SiteMap from './../pages/SiteMap';
import AdminRoot from '../pages/Admin/AdminRoot';
import FeaturedAdmin from './../pages/Admin/AdminPages/FeaturedAdmin';
import LatestAdmin from '../pages/Admin/AdminPages/LatestAdmin/LatestAdmin';
import LatestAdminRoot from '../pages/Admin/AdminPages/LatestAdmin/LatestAdminRoot';
import LatestAdminUpdate from '../pages/Admin/AdminPages/LatestAdmin/LatestAdminUpdate';
import Wishlist from '../pages/Wishlist/Wishlist';



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
                path: "blog/",
                element: <BlogRoot />,
                children: [
                    {
                        path: "",
                        element: <Blog />
                    },
                    {
                        path: "winefermantation",
                        element: <WineFermantation />
                    },
                    {
                        path: "harvest",
                        element: <Harvest />
                    },
                    {
                        path: "winery",
                        element: <Winery />
                    }

                ]

            },
            {
                path: "contact",
                element: <ContactUs />
            },
            {
                path: "wishlist",
                element: <Wishlist />
            },
            {
                path: "addtobasket",
                element: <AddToBasket />
            },
            {
                path: "login/",
                element: <LoginRoot />,
                children: [
                    {
                        path: "",
                        element: <Login />
                    },
                    {
                        path: "createaccount",
                        element: <CreateAcc />
                    },
                    {
                        path: "forgotpassword",
                        element: <ForgotPassword />
                    }
                ]

            },
            {
                path: "add",
                element: <Add />
            },
            {
                path: "sitemap",
                element: <SiteMap />
            },
        ]
    },
    {
        path: "admin",
        element: <AdminRoot />,
        children: [
            {
                path: "featuredadmin/",
                element: <FeaturedAdmin />,
            },
            {
                path: "latestadmin",
                element: <LatestAdminRoot />,
                children: [
                    {
                        path: "",
                        element: <LatestAdmin />
                    },
                    {
                        path: "latestupdate",
                        element: <LatestAdminUpdate />
                    }
                ]
            }
        ]
    },
]




export default ROUTES