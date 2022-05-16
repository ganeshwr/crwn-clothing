import "./sign-in-form.styles.scss";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useState } from "react";

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithAuthUser,
  converErrorMessage,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleField = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const triggerSignInPopup = async () => {
    const response = await signInWithGooglePopup();

    if (response) {
      await createUserDocumentFromAuth(response.user);
    }
  };

  const triggerSignIn = async (event) => {
    event.preventDefault();

    try {
      const response = await signInWithAuthUser(email, password);

      if (response) {
        setFormFields(defaultFormFields);
      }
    } catch (error) {
      if (
        error.code.includes("auth/wrong-password") ||
        error.code.includes("auth/user-not-found")
      ) {
        alert("Email or password is incorrect!");
      } else {
        alert(converErrorMessage(error));
      }

      console.error("user creation error", error);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={triggerSignIn}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleField}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleField}
          required
        />

        <div className="buttons-container">
          <Button type="submit">SIGN IN</Button>
          <Button
            type="button"
            buttonType="google"
            onClick={triggerSignInPopup}
          >
            SIGN IN WITH GOOGLE
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
