import { ComponentDocsProps } from "src/design-system/ComponentDocs"
import { AuthenticationForm } from "./AuthenticationForm/AuthenticationForm"
import { AuthenticationTitle } from "./AuthenticationTitle/AuthenticationTitle"
import { ForgotPassword } from "./ForgotPassword/ForgotPassword"

export const authenticationComponentDocsProps: Omit<ComponentDocsProps, "preview"> = {
  title: "Authentication",
  description: "The authentication component description",
  examples: [
    {
      descriptive: false,
      children: <AuthenticationForm />,
    },
    {
      descriptive: false,
      children: <AuthenticationTitle />,
    },
    {
      descriptive: false,
      children: <ForgotPassword />,
    },
  ],
}
