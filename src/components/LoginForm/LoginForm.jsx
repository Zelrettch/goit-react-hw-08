import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./LoginForm.module.css";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const innitials = {
  email: "",
  password: "",
};

const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const emailId = useId();
  const passId = useId();
  const navigate = useNavigate();

  function handleSubmit(data) {
    dispatch(login(data));
    navigate("/");
  }
  return (
    <Formik
      initialValues={innitials}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <label htmlFor={emailId} className={css.caption}>
          Email
        </label>
        <Field
          type="text"
          name="email"
          id={emailId}
          className={css.field}
        ></Field>
        <ErrorMessage className={css.error} name="email" component="span" />

        <label htmlFor={passId} className={css.caption}>
          Password
        </label>
        <Field
          type="password"
          name="password"
          id={passId}
          className={css.field}
        ></Field>
        <ErrorMessage className={css.error} name="password" component="span" />
        <button type="submit" className={css.addBtn}>
          Login
        </button>
      </Form>
    </Formik>
  );
}
