import React from "react";

const Additionalnfo = ({ sizes }) => {
  return (
    <div>
      <div className="div">
        <div className="sizes">
          <span className="titleOfInfo">Available Sizes</span>
          {sizes.map((size) => (
            <span className="sizeName">{size}</span>
          ))}
        </div>
        {/* <div className="sizes">
          <span className="titleOfInfo">Available Colors</span>
          <span className="sizeName">Red</span>
          <span className="sizeName">Blue</span>
          <span className="sizeName">Green</span>
          <span className="sizeName">Black</span>
          <span className="sizeName">Gray</span>
        </div> */}
      </div>
    </div>
  );
};

export default Additionalnfo;
