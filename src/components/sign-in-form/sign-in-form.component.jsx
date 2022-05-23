import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  signInWithGooglePopup,
  signInWithAuthUser,
  converErrorMessage,
} from "../../utils/firebase/firebase.utils";
import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles";

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
    await signInWithGooglePopup();
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
        error.code &&
        (error.code.includes("auth/wrong-password") ||
          error.code.includes("auth/user-not-found"))
      ) {
        alert("Email or password is incorrect!");
      } else {
        alert(converErrorMessage(error));
      }

      console.error("user creation error", error);
    }
  };

  return (
    <SignInContainer>
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

        <ButtonsContainer>
          <Button type="submit">SIGN IN</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={triggerSignInPopup}
          >
            SIGN IN WITH GOOGLE
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
