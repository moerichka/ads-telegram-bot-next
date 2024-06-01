import React from "react";
import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";

import s from "./InputPart.module.scss";

const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL || "";

interface Props {
  email: string;
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (
    subscribe: (data: EmailFormFields) => void,
  ) => (e: React.FormEvent<HTMLFormElement>) => void;
}

function InputPart({ email, setEmail, onSubmit }: Props) {
  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={({ subscribe }) => {
        return (
          <form className={s.inputPart} onSubmit={onSubmit(subscribe)}>
            <div className={s.inputWrapper}>
              <input
                type="text"
                className={s.input}
                placeholder=" Enter your e-mail"
                value={email}
                onChange={setEmail}
              />
              <div className={s.shadow} />
              <div className={s.shape} />
            </div>
            <button type="submit" className={s.submit}>
              <div className={s.content}>Send</div>
              <div className={s.shadow} />
              <div className={s.shape} />
            </button>
          </form>
        );
      }}
    />
  );
}

export default InputPart;
