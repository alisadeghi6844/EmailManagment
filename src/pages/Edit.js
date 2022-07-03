import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import { EditStudent } from './../redux/actions/EditStudent';
const Edit = () => {
    const dispatch = useDispatch();
  const { id } = useParams();
  const student = useSelector((state) => state.students);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  useEffect(() => {
    if (student) {
      setEmail(student[id - 1].email);
      setName(student[id - 1].name);
      setNumber(student[id - 1].number);
    }
  }, [student]);
  const handleSubmitForm = (e) => {
    const emailCheck = student.find(
      (item) => item.id != id && item.email === email && item
    );
    const numberCheck = student.find(
      (item) => item.id != id && item.number === number && item
    );
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
        id: parseInt(id),
        };
        dispatch(EditStudent(data));
      toast.success("دانشجو با موفقیت ویرایش شد!!");
      navigate("/");
    }
  };
  return (
    <div className="container text-end">
      <div className="title text-center mt-5">
        <h1>{id} ویرایش کردن دانشجو </h1>{" "}
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
            value="ادیت دانشجو"
            className="btn btn-success mt-2"
          />
          <Link to="/" className="btn btn-danger mt-2 ms-2">
            انصراف
          </Link>
        </div>{" "}
      </form>{" "}
    </div>
  );
};

export default Edit;
