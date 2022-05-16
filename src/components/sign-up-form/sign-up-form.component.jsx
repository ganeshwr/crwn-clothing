import { useState } from "react";

import "./sign-up-form.styles.scss";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  converErrorMessage
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleField = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) return alert("Password do not match!");

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      user.displayName = displayName;
      await createUserDocumentFromAuth(user);

      alert("Successfully registered new user");
      setFormFields(defaultFormFields);
    } catch (error) {
      if(error.code.includes("auth/email-already-in-use")) {
        alert("Email is already in use.")
      } else {
        alert(converErrorMessage(error));
      }

      console.error("user creation error", error);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="display-name">Display Name</label>
        <input
          id="display-name"
          type="text"
          onChange={handleField}
          value={displayName}
          name="displayName"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          onChange={handleField}
          value={email}
          name="email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={handleField}
          value={password}
          name="password"
          required
        />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          id="confirm-password"
          type="password"
          onChange={handleField}
          value={confirmPassword}
          name="confirmPassword"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
