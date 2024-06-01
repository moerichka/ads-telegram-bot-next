import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { EmailFormFields } from "react-mailchimp-subscribe";
import { enqueueSnackbar } from "notistack";

import { modalFadeIn } from "utils/motion";
import { links } from "constants/links";

import Checkbox from "components/Checkbox";
import ModalContainer from "../ModalContainer";
import WindowPart from "./WindowPart";
import InputPart from "./InputPart";

import s from "./EmailModal.module.scss";

interface Props {
  isOpen: boolean;
  close: () => void;
}

const regexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function EmailModal({ isOpen, close }: Props) {
  const [emailText, setEmailText] = useState("");
  const [isAgreedCheck, setIsAgreedCheck] = useState(false);
  const modalBackground = useMemo(() => <div className={s.background} />, []);

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailText(e.target.value);
  };

  const onCheckBoxChange = () => {
    setIsAgreedCheck((prev) => !prev);
  };

  const onSubmit =
    (subscribe: (data: EmailFormFields) => void) =>
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!isAgreedCheck) {
        enqueueSnackbar({
          variant: "error",
          message: "No agreement with terms of use",
        });
        return;
      }
      if (!emailText.match(regexp)) {
        enqueueSnackbar({
          variant: "error",
          message: "E-mail is not valid",
        });
        return;
      }
      subscribe({ EMAIL: emailText });

      enqueueSnackbar({
        variant: "success",
        message: "Successfully subscribed!",
      });
      close();
    };

  return (
    <ModalContainer isOpen={isOpen} close={close} background={modalBackground}>
      <div className={s.modal}>
        <motion.div
          variants={modalFadeIn()}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className={s.content}
        >
          <div className={s.innerContent}>
            <WindowPart />
            <div className={s.bottomWrapper}>
              <InputPart
                onSubmit={onSubmit}
                email={emailText}
                setEmail={onEmailChange}
              />
              <Checkbox
                checked={isAgreedCheck}
                onChange={onCheckBoxChange}
                label={`By leaving your email address, you agree to our service's <a href="${links.privacyPolicy}">Privacy policy</a> and <a href="${links.termsOfUse}">Terms of use</a>`}
              />
            </div>
          </div>
          <button type="button" className={s.close} onClick={close}>
            <Image
              src="/images/leaderBoard/close.svg"
              alt="close"
              fill
              style={{ objectFit: "contain" }}
            />
          </button>
          <div className={s.backgroundShadow} />
          <div className={s.backgroundBorder} />
          <div className={s.backgroundShape} />
        </motion.div>
      </div>
    </ModalContainer>
  );
}

export default EmailModal;
