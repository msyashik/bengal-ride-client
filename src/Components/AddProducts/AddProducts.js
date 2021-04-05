import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import axios from "axios";
import { UserContext } from "../../App";

const AddProducts = () => {
  const { logInUser } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = logInUser;
  const [imageURL, setImageURL] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const eventData = {
      productName: data.productName,
      productWeight: data.productWeight,
      productPrice: data.price,
      productImage: imageURL,
    };
    const url = `https://hidden-garden-85563.herokuapp.com/addEvent`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server side response"));
  };
  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "14be1ccd6d462335fd17232a0b3a89fd");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="col-md-9 col-sm-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                name="productName"
                className="form-control mt-2"
                placeholder="Toyota"
                ref={register({
                  required: "*Product Name is required",
                })}
              />
            </div>
            <div style={{ color: "red", fontSize: "15px" }}>
              {errors.productName && <p>{errors.productName.message}</p>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="productWeight">Weight</label>
              <input
                type="number"
                name="productWeight"
                className="form-control mt-2"
                placeholder="50"
                ref={register({
                  required: "*Product Weight is required",
                })}
              />
            </div>
            <div style={{ color: "red", fontSize: "15px" }}>
              {errors.productWeight && <p>{errors.productWeight.message}</p>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="price" className="mt-2">
                Price
              </label>
              <input
                name="price"
                type="number"
                className="form-control mt-2"
                placeholder="100"
                ref={register({
                  required: "*Price is required",
                })}
              />
            </div>
            <div style={{ color: "red", fontSize: "15px" }}>
              {errors.price && <p>{errors.price.message}</p>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="productPhoto" className="mt-2">
                Add Photo
              </label>
              <input
                type="file"
                name="productPhoto"
                className="form-control mt-2"
                placeholder=""
                ref={register({
                  required: "*Product Photo is required",
                })}
                onChange={handleImageUpload}
              />
            </div>
            <div style={{ color: "red", fontSize: "15px" }}>
              {errors.productPhoto && <p>{errors.productPhoto.message}</p>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Button type="Submit" className="btn btn-success mt-2 w-50">
              Save
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
