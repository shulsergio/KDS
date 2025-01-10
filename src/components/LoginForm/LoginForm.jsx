import { ErrorMessage, Form, Formik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiHide, BiShow } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at maximum 64 characters")
    .required("Password is required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success("Hello! You are logged in Water Tracker");
        navigate("/home");
      })
      .catch(() => {
        toast.error("Email or pass error!");
      })
      .finally(() => {
        actions.resetForm();
      });
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <p className={css.text}>Sign In</p>

            <label className={css.label}>
              Enter your email
              <Field
                type="email"
                name="email"
                className={`${css.input} ${
                  touched.email && errors.email ? css.inputError : ""
                }`}
                placeholder="E-mail"
              />
            </label>
            <ErrorMessage
              name="email"
              component="div"
              className={css.errorMessage}
            />

            <label className={css.label}>
              Enter your password
              <div className={css.passwordWrapper}>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className={
                    touched.password && errors.password
                      ? `${css.input} ${css.inputError}`
                      : css.input
                  }
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className={css.eyeButton}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <BiShow className={css.eye} />
                  ) : (
                    <BiHide className={css.eye} />
                  )}
                </button>
              </div>
            </label>
            <ErrorMessage
              name="password"
              component="div"
              className={css.errorMessage}
            />
            <Button type="submit" className={css.signinButton}>
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
