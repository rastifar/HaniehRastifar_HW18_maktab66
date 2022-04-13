import React, { useContext, useEffect, useState } from "react";
import { Formik } from "formik";
import styles from "./Signup.module.css";
import Modal from "./Modal";


import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import axios from "axios";
import {isAuthenticatedContext} from './AuthContextProvider'

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState();
  const {addToUser} = useContext(isAuthenticatedContext)
  
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  useEffect(() => {
    axios.get("http://localhost:3001/users").then((res) => setData(res.data));
  }, []);
  const checkLogin = (values) => {
    data.map(item => {
      if (item.email === values.email && item.password === values.password) {       
        addToUser(`${item.firstName} ${item.lastName}`);
        return;
      }
      
    })
   
  };
  return (
    <div className={styles.container}>
      <p> خوش آمدید</p>

      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "ایمیل فیلد ضروری است";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "ایمیل وارد شده معتبر نمی باشد";
          }
          if (!values.password) {
            errors.password = "پسورد فیلد ضروری است";
          }

          return errors;
        }}
        // onSubmit={(values, { setSubmitting }) => {
        //   alert(JSON.stringify(values, "null", 2));

        //   // setTimeout(() => {
        //   //   setMessage(true);
        //   //   setIsOpen(true);
        //   //   setSubmitting(false);
        //   // }, 400);
        // }}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, "null", 2));

          checkLogin(values);
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => {
          return (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formField}>
                <input
                  className={styles.inputField}
                  placeholder="پست الکترونیکی"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <span>{errors.email && touched.email && errors.email}</span>
              </div>
              <div className={styles.formField}>
                <div className={styles.dflex}>
                  <input
                    type={passwordShown ? "text" : "password"}
                    className={styles.inputField}
                    placeholder="کلمه عبور"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <div onClick={togglePassword} style={{ background: "red" }}>
                    {passwordShown ? (
                      <FaRegEye className={styles.icon} />
                    ) : (
                      <FaRegEyeSlash className={styles.icon} />
                    )}
                  </div>
                </div>
                <span>
                  {errors.password && touched.password && errors.password}{" "}
                </span>
              </div>
              <button
                type="submit"
                className={styles.btnField}
                disabled={isSubmitting}
              >
                ورود
              </button>
              <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                message={message}
              />
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
export default Login;
// export default WithFetching(Login,"get");
