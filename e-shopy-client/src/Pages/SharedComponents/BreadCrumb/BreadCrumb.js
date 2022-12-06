import { Breadcrumbs } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ breadcrumbNavigation }) => {
  const { first, middle, last } = breadcrumbNavigation;
  return (
    <section className="breadCrumbContainer">
      <div className="breadCrumbArea">
        <div className="breadcrumbNavigation">
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              textAlign: "center",
              justifyContent: "center",
              padding: { xs: "0px 10px", md: "0px" },
            }}
          >
            <Link to={`/${first.toLowerCase()}`} className="breadCrumbLink">
              {first?.toUpperCase()}
            </Link>
            {middle && (
              <span className="breadCrumbLink">{middle?.toUpperCase()}</span>
            )}
            <span
              disabled={true}
              aria-current="page"
              className="breadCrumbLink"
              style={{ color: "#222" }}
            >
              {last?.toUpperCase()}
            </span>
          </Breadcrumbs>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
