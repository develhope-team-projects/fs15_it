import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>
      Hello, {firstName}! thanks for joining the revolution! Welcome in our
      family.
    </h1>
    <h1> Team SoundBridge</h1>
  </div>
);
