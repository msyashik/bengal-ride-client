import React, { useState } from "react";
import AddProducts from "../AddProducts/AddProducts";
import Header from "../Header/Header";
import ManageProducts from "../ManageProducts/ManageProducts";
import "./Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faBars } from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  const [currProduct, setCurrProduct] = useState(false);

  const manageProduct = () => {
    setCurrProduct(true);
  };
  const addOrEditProduct = () => {
    setCurrProduct(false);
  };
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-3">
            <div className="row bg-product text-center">
              <div className="col-sm-12">
                <button
                  className="p-2 hover-style"
                  onClick={addOrEditProduct}
                  style={{ border: "none", backgroundColor: "tomato" }}
                >
                  <FontAwesomeIcon icon={faPlus} /> Add Products
                </button>
              </div>
              <div className="col-sm-12">
                <button
                  className="p-2 hover-style"
                  onClick={manageProduct}
                  style={{ border: "none", backgroundColor: "tomato" }}
                >
                  <FontAwesomeIcon icon={faBars} /> Manage Products
                </button>
              </div>
              <div className="col-sm-12 pb-3">
                <button
                  className="p-2 hover-style"
                  onClick={addOrEditProduct}
                  style={{ border: "none", backgroundColor: "tomato" }}
                >
                  <FontAwesomeIcon icon={faEdit} /> Edit Products
                </button>
              </div>
            </div>
          </div>
          {currProduct === true && <ManageProducts></ManageProducts>}
          {currProduct === false && <AddProducts></AddProducts>}
        </div>
      </div>
    </div>
  );
};

export default Admin;
