import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import AboutUs from "../AboutUs/AboutUs";
import Partners from "../AboutUs/Partners/Partners";
import Team from "../AboutUs/Team/Team";
import Catalog from "../Catalog/Catalog";
import SingleProduct from "../Catalog/SingleProduct/SingleProduct";
import Contacts from "../Contacts/Contacts";
import Delivery from "../Delivery/Delivery";
import Home from "../Home/Home";
import News from "../News/News";
import Profile from "../Registration/Profile/Profile";
import Registration from "../Registration/Registration";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.ABOUTUS} element={<AboutUs />} />
      <Route path={ROUTES.PARTNERS} element={<Partners />} />
      <Route path={ROUTES.NEWS} element={<News />} />
      <Route path={ROUTES.CONTACTS} element={<Contacts />} />
      <Route path={ROUTES.DELIVERY} element={<Delivery />} />
      <Route path={ROUTES.CATALOG} element={<Catalog />} />
      <Route path={ROUTES.REGISTRATION} element={<Registration />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
      <Route path={ROUTES.TEAM} element={<Team />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
    </Routes>
  );
};

export default AppRoutes;
