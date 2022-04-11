import { Container, Typography } from "@mui/material";
import React, { useState } from "react";
import AllProducts from "./TabsProducts/Products/AllProducts";

const Products = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [apiDestination, setApiDestination] = useState("products");

  return (
    <section>
      <Container>
        <div className="productsTabsWrapper">
          <div className="areaTitle">
            <Typography
              sx={{
                fontSize: 40,
                fontWeight: "bold",
                fontFamily: "Poppins",
                textAlign: "center",
              }}
            >
              DAILY DEALS!
            </Typography>
          </div>
          <div className="tabBtnsArea">
            <button
              onClick={() => {
                setTimeout(() => {
                  setApiDestination("products");
                  setActiveTab(1);
                }, 200);
              }}
              className={activeTab === 1 ? "tabBtnActive" : "tabBtn"}
            >
              New Arrival
            </button>
            <button
              onClick={() => {
                setTimeout(() => {
                  setApiDestination("newArrivalproducts");
                  setActiveTab(2);
                }, 200);
              }}
              className={activeTab === 2 ? "tabBtnActive" : "tabBtn"}
            >
              Fixed Products
            </button>
            <button
              onClick={() => {
                setTimeout(() => {
                  setApiDestination("saleProducts");
                  setActiveTab(3);
                }, 200);
              }}
              className={activeTab === 3 ? "tabBtnActive" : "tabBtn"}
            >
              Sale Products
            </button>
          </div>
          <div className="productsArea">
            <AllProducts apiDestination={apiDestination} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Products;
