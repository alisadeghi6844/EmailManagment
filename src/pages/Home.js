import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DeleteStudent } from './../redux/actions/DeleteStudent';

const Home = () => {
  const student = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(DeleteStudent(id));
  }
  return (
    <div className="container mt-5 text-end">
      <div className="button-wrapper">
        <Link to="/add" className="btn btn-outline-dark">
          اضافه کردن دانشجو
        </Link>
      </div>
      <ul className="mt-5">
        {student.map((item) => (
          <li key={item.id} className="mt-2">
            name:{item.name}
            email:{item.email}
            phoneNumber:{item.number}
            <button onClick={()=>handleDelete(item.id)} className="btn btn-danger ms-4">delete</button>
            <Link to={`/edit/${item.id}`} className="btn btn-primary ms-4">edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
