import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import GuestService from "../../services/guestService";
import { alertService } from "../../services/alertService";

export const Guest = ({ history }) => {
  let params = useParams(); //fetch parameters from url
  const id = params.id;
  const isAddMode = !id;

  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    surname: Yup.string().required("Surname  is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    mobile: Yup.string()
      .min(10, "Too Short")
      .max(15, "Too Long")
      .required("Mobile is required"),
  });

  // functions to build form returned by useForm() hook
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  function onSubmit(data) {
    return isAddMode ? createGuest(data) : updateGuest(id, data);
  }

  function createGuest(data) {
    return GuestService.create(data)
      .then(() => {
        alertService.success("Guest added", { keepAfterRouteChange: true });
        //history.push('.');
      })
      .catch(alertService.error);
  }

  function updateGuest(id, data) {
    return GuestService.update(id, data)
      .then(() => {
        alertService.success("GUest updated", { keepAfterRouteChange: true });
        history.push("..");
      })
      .catch(alertService.error);
  }

  useEffect(() => {
    if (!isAddMode) {
      // get guest and set form fields
      GuestService.getById(id).then((guest) => {
        const fields = ["firstName", "surname", "email", "mobile"];
        fields.forEach((field) => setValue(field, guest[field]));
      });
    }
  }, [id, isAddMode, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
      <h4>{isAddMode ? "Add Guest" : "Edit Guest"}</h4>
      <hr></hr>
      <div className="form-row">
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">First Name</label>
          <div className="col-sm-4">
            <input
              {...register("firstName", { required: true })}
              type="text"
              className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.firstName?.message}</div>
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Surname</label>
          <div className="col-sm-4">
            <input
              {...register("surname", { required: true })}
              type="text"
              className={`form-control ${errors.surname ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.surname?.message}</div>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-4">
          <input
            {...register("email", { required: true })}
            type="text"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Mobile</label>
        <div className="col-sm-4">
          <input
            {...register("mobile", { required: true })}
            type="text"
            className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.mobile?.message}</div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-10 offset-sm-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-dark"
          >
            {isSubmitting && (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            )}
            Save
          </button>
            <Link to={isAddMode ? "." : ".."} className="btn btn-link">
             Cancel
            </Link>
        </div>
      </div>
    </form>
  );
};

export default Guest;
