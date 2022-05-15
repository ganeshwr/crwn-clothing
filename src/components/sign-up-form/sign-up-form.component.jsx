import { useState } from "react";

import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const onFieldChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={() => {}}>
        <label htmlFor="display-name">Display Name</label>
        <input
          id="display-name"
          type="text"
          onChange={onFieldChange}
          value={displayName}
          name="displayName"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          onChange={onFieldChange}
          value={email}
          name="email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={onFieldChange}
          value={password}
          name="password"
          required
        />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          id="confirm-password"
          type="password"
          onChange={onFieldChange}
          value={confirmPassword}
          name="confirmPassword"
          required
        />
      </form>
    </div>
  );
};

export default SignUpForm;
