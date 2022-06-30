import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";
import {
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const Home = () => {
  return (
    <>
      <div className="jumbotron text-danger h1 font-weight-bold text-center container">
        <Jumbotron text={["Disclaimer!", "This website is for entertainment purpose only"]} />
      </div>

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron container">
        New Arrivals
      </h4>
      <NewArrivals />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron container">
        Best Sellers
      </h4>
      <BestSellers />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron container">
        Categories
      </h4>
      <CategoryList />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron container">
        Sub Categories
      </h4>
      <SubList />

      <br />
      <br />
      <div className="jumbotron container text-center">
        <div className="col display-4 mb-4 mt-1">
            Creator: Marin G. Vasilciu
        </div>
        <div className="display-5">
          Contact: &nbsp;&nbsp; <MailOutlined /> vasilciumarin@yahoo.com &nbsp;&nbsp; 
                   &nbsp;&nbsp; <PhoneOutlined /> (+44)07711870636
        </div>
      </div>
    </>
  );
};

export default Home;
