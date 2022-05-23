import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import { FormsContainer } from "./authentication.styles";

const Authentication = () => {
  return (
    <FormsContainer>
      <SignInForm />
      <SignUpForm />
    </FormsContainer>
  );
};

export default Authentication;
