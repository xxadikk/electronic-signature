import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./page/HomePage";
import AboutUsPage from "./page/AboutUsPage";
import AdvantagesPage from "./page/AdvantagesPage";
import Contacts from "./page/Contacts";
import ProductsPage from "./page/ProductsPage";
import VerificationCenterPage from "./page/VerificationCenterPage";
import DocumentsPage from "./page/DocumentsPage";

const Routing = () => {
  const PUBLIC_PAGES = [
    {
      link: "/",
      page: <HomePage />,
      id: 1,
    },
    {
      link: "/about-us",
      page: <AboutUsPage />,
      id: 2,
    },
    {
      link: "/advantages",
      page: <AdvantagesPage />,
      id: 3,
    },
    {
      link: "/contacts",
      page: <Contacts />,
      id: 4,
    },
    {
      link: "/products",
      page: <ProductsPage />,
      id: 5,
    },
    {
      link: "/verification-center",
      page: <VerificationCenterPage />,
      id: 6,
    },
    {
      link: "/documents",
      page: <DocumentsPage />,
      id: 7,
    },
  ];

  return (
    <Routes>
      {PUBLIC_PAGES.map((page) => (
        <Route path={page.link} element={page.page} id={page.id} />
      ))}
    </Routes>
  );
};

export default Routing;
