import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AddStudent } from "./../redux/actions/AddStudent";
import { useNavigate } from "react-router";

const Add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const student = useSelector((state) => state.students);
  const navigate = useNavigate();

  const handleSubmitForm = (e) => {
    const emailCheck =
      student.length && student.find((item) => item.email === email && item);
    const numberCheck =
      student.length && student.find((item) => item.number === number && item);
    e.preventDefault();
    if (!email || !name || !number) {
      toast.warn("لطفا اطلاعات خود را کامل کنید");
    } else if (emailCheck) {
      toast.error("این ایمیل قبلا استفاده شده!!!");
    } else if (numberCheck) {
      toast.error("این شماره تلفن از قبل موجود می");
    } else {
      const data = {
        email,
        name,
        number,
        id: student.length + 1,
      };
      dispatch(AddStudent(data));
      toast.success("دانشجو با موفقیت اضافه شد!!");
      navigate("/");
    }
  };
  return (
    <div className="container text-end">
      <div className="title text-center mt-5">
        <h1> اضافه کردن دانشجو </h1>{" "}
      </div>{" "}
      <form onSubmit={(e) => handleSubmitForm(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="نام دانشجو"
            className="form-control mt-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
        </div>{" "}
        <div className="form-group">
          <input
            type="email"
            placeholder="ایمیل دانشجو"
            className="form-control mt-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
        </div>{" "}
        <div className="form-group">
          <input
            type="number"
            placeholder="شماره موبایل دانشجو"
            className="form-control mt-2"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />{" "}
        </div>{" "}
        <div className="form-group">
          <input
            type="submit"
            value="اضافه کردن دانشجو"
            className="btn btn-outline-success mt-2"
          />
        </div>{" "}
      </form>{" "}
    </div>
  );
};

export default Add;
