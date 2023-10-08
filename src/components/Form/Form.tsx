"use client";
import { useFormik } from "formik";
import styles from "./Form.module.scss";

export default function Form() {
  const formik = useFormik({
    initialValues: {
      tel: "",
      car: " ",
      comment: " ",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <label className={styles.label} htmlFor="tel">
        Tel number
      </label>
      <input
        className={styles.input}
        id="tel"
        name="tel"
        type="tel"
        onChange={formik.handleChange}
        value={formik.values.tel}
      />

      <label className={styles.label} htmlFor="car">
        Car model
      </label>
      <input
        className={styles.input}
        id="car"
        name="car"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.car}
      />

      <label className={styles.label} htmlFor="comment">
        Comment
      </label>
      <input
        className={styles.input}
        id="comment"
        name="comment"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.comment}
      />

      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
}
