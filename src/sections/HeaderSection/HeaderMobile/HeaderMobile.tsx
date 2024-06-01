import React, { useState } from "react";
import Image from "next/image";

import HeaderModal from "components/modals/HeaderModal";

import s from "./HeaderMobile.module.scss";

function HeaderMobile() {
  const [headerIsOpen, setHeaderIsOpen] = useState(false);

  const openHeader = () => {
    setHeaderIsOpen(true);
  };
  const closeHeader = () => {
    setHeaderIsOpen(false);
  };
  return (
    <>
      <div className={s.mobileHeader}>
        <button type="button" className={s.mobileHeader__eggWrapper}>
          <Image
            src="/images/headerModal/headerEgg.png"
            alt=""
            fill
            style={{ objectFit: "contain" }}
          />
        </button>
        <button
          type="button"
          className={s.mobileHeader__menuWrapper}
          onClick={openHeader}
        >
          <Image
            src="/images/headerModal/menu.png"
            alt=""
            fill
            style={{ objectFit: "contain" }}
          />
        </button>
      </div>
      <HeaderModal close={closeHeader} isOpen={headerIsOpen} />
    </>
  );
}

export default HeaderMobile;
