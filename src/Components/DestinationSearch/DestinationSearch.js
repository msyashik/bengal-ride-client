import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const DestinationSearch = () => {
  const { register, errors, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <label htmlFor="from">From</label>
                  <input
                    className="form-control"
                    type="text"
                    name="from"
                    placeholder="Chittagong"
                    ref={register({ required: true })}
                  ></input>
                </div>
                <div style={{ color: "red", fontSize: "15px" }}>
                  {errors.from && "*This is required"}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <label htmlFor="to">To</label>
                  <input
                    className="form-control"
                    type="text"
                    name="to"
                    placeholder="Dhaka"
                    ref={register({ required: true })}
                  ></input>
                </div>
                <div style={{ color: "red", fontSize: "15px" }}>
                  {errors.to && "*This is required"}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Button type="Submit" className="btn btn-success mt-2 w-50">
                  Go
                </Button>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <p>
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236207.01563627113!2d91.67977892126882!3d22.325874169683196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sDhaka!5e0!3m2!1sen!2sbd!4v1616173292991!5m2!1sen!2sbd"
                width="600"
                height="450"
                style={{ border: "0" }}
                loading="lazy"
              ></iframe>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DestinationSearch;
