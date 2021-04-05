import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const ShowManageProducts = (props) => {
  const { productName, productPrice, productWeight, _id } = props.event;
  const handleDelete = (id) => {
    fetch(`https://hidden-garden-85563.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          console.log(res);
        }
      });
  };
  return (
    <div>
      <li className=" list-group-item liStyle">
        <span className="listStyle nameStyle">{productName}</span>
        <span className="listStyle ms-2">{productWeight}</span>
        <span className="listStyle ms-2 text-center">{productPrice}</span>
        <span className="listStyle  ">
          <FontAwesomeIcon
            style={{ fontSize: "25px" }}
            className="iconSize text-danger "
            icon={faTrashAlt}
            onClick={() => handleDelete(_id)}
          />
        </span>
      </li>
    </div>
  );
};

export default ShowManageProducts;
