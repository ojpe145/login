import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Navbar = (props) => {
  const navigate = useNavigate();
  const cerrarSesion = () => {
    auth.signOut().then(() => {
      navigate("/login");
    });
  };
  return (
    <div className="navbar navbar-dark bg-dark">
      <div>
        <div className="d-flex">
          <Link to="/" className="btn btn-success mx-3">
            Inicio
          </Link>
          {props.firebaseUser !== null ? (
            <Link to="/admin" className="btn btn-success mx-3">
              Admin
            </Link>
          ) : null}
          {props.firebaseUser !== null ? (
            <button
              className="btn btn-success mx-3"
              onClick={() => cerrarSesion()}
            >
              Cerrar Sesion
            </button>
          ) : (
            <Link to="/login" className="btn btn-success mx-3">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
