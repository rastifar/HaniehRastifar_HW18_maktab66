import React, { useEffect, useState } from "react";

import styles from "./Signup.module.css";
import Modal from "./Modal";
import { useFormik } from "formik";
import * as yup from "yup";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import WithFetching from "./withFetching";
import axios from "axios";

const validationSchema = yup.object().shape({
  firstName: yup.string().required(" فیلد ضروری است"),
  lastName: yup.string().required(" فیلد ضروری است"),
  password: yup.string().required(" فیلد ضروری است"),
  education: yup.string().required(" فیلد ضروری است"),
  institute: yup.string().required("فیلد ضروری است"),
  province: yup.string().required(" فیلد ضروری است"),
  city: yup.string().required(" فیلد ضروری است"),
  email: yup
    .string()
    .email("پست الکترونیکی معتبر نمی باشد")
    .required("فیلد ضروری است"),
});

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      education: "",
      institute: "",
      province: "",
      city: "",
    },
    onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
        axios.post(' http://localhost:3001/users',values)
      // setTimeout(() => {
      //   console.log(JSON.stringify(values, null, 2));
      //   alert(JSON.stringify(values, null, 2));
      //   setMessage(true);
      //   setIsOpen(true)

      // }, 1000);
    },
    validationSchema,
  });

  const [provinces, setProvinces] = useState("");
  const [message, setMessage] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  useEffect(() => {
    axios
      .get(" http://localhost:3001/province")
      .then((res) => setProvinces(res.data));
  }, []);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  
  };
  // Object.keys(provinces).map((item, index) => (console.log(item,index)))
  return (
    <div className={styles.container}>
      <p>رایگان ثبت نام کنید</p>

      <form onSubmit={formik.handleSubmit} className={styles.form}>
        {/* name */}
        <div className={styles.formField}>
          <input
            className={styles.inputField}
            placeholder="نام"
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <span>
            {formik.errors.firstName &&
              formik.touched.firstName &&
              formik.errors.firstName}
          </span>
        </div>
        {/* lastname */}
        <div className={styles.formField}>
          <input
            className={styles.inputField}
            placeholder="نام خانوادگی"
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <span>
            {formik.errors.lastName &&
              formik.touched.lastName &&
              formik.errors.lastName}
          </span>
        </div>
        {/* email */}
        <div className={styles.formField}>
          <input
            className={styles.inputField}
            placeholder="پست الکترونیکی"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <span>
            {formik.errors.email && formik.touched.email && formik.errors.email}
          </span>
        </div>
        {/* password */}
        <div className={styles.formField}>
          <div>
            <input
              className={styles.inputField}
              placeholder="کلمه عبور"
              id="password"
              name="password"
              type={passwordShown ? "text" : "password"}
              onChange={formik.handleChange}
              value={formik.values.password}
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
            {formik.errors.password &&
              formik.touched.password &&
              formik.errors.password}
          </span>
        </div>
        {/* educatoin */}
        <div className={styles.formField}>
          <input
            className={styles.inputField}
            placeholder="آخرین مدرک تحصیلی"
            id="education"
            name="education"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.education}
          />
          <span>
            {formik.errors.education &&
              formik.touched.education &&
              formik.errors.education}
          </span>
        </div>
        {/* institute */}
        <div className={styles.formField}>
          <input
            className={styles.inputField}
            placeholder="محل تحصیلی"
            id="institute"
            name="institute"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.institute}
          />
          <span>
            {formik.errors.institute &&
              formik.touched.institute &&
              formik.errors.institute}
          </span>
        </div>
        {/* province */}
        <div className={styles.formField}>
          <select
            
            type="text"
            name="province"
            onChange={formik.handleChange}
            className={styles.formSelectField}
            value={formik.values.province}
          >
            <option defaultValue="DEFAULT">استان</option>
            {Object.keys(provinces).map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
          <span>
            {formik.errors.province &&
              formik.touched.province &&
              formik.errors.province}
          </span>
        </div>
        {/* city */}
        <div className={styles.formField}>
          <select
            
            type="text"
            name="city"
            onChange={formik.handleChange}
            className={styles.formSelectField}
          >
            {formik.values.province ? (
              <>
                <option defaultValue="DEFAULT">شهر</option>
                {provinces[formik.values.province].map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </>
            ) : (
              <option defaultValue="DEFAULT">شهر</option>
            )}
          </select>
          <span>
            {formik.errors.city && formik.touched.city && formik.errors.city}
          </span>
        </div>
        <button
          type="submit"
          className={styles.btnField}

          // onClick={() => setIsOpen(true)}
        >
          ثبت نام
        </button>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          message={message}
        />
      </form>
    </div>
  );
};
export default Signup;
// export default WithFetching(Signup,"put");
