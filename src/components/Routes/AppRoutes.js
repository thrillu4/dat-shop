import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import AboutUs from "../AboutUs/AboutUs";
import Partners from "../AboutUs/Partners/Partners";
import Contacts from "../Contacts/Contacts";
import Delivery from "../Delivery/Delivery";
import Home from "../Home/Home";
import News from "../News/News";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.ABOUTUS} element={<AboutUs />} />
      <Route path={ROUTES.PARTNERS} element={<Partners />} />
      <Route path={ROUTES.NEWS} element={<News />} />
      <Route path={ROUTES.CONTACTS} element={<Contacts />} />
      <Route path={ROUTES.DELIVERY} element={<Delivery />} />
    </Routes>
  );
};

export default AppRoutes;
