import React from "react";

import useWindowSizeIsBigger from "hooks/useWindowSizeIsBigger";

import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

function HeaderSection() {
  const isDesktopHeader = useWindowSizeIsBigger({ biggerThen: 850 });

  if (isDesktopHeader) return <HeaderDesktop />;
  return <HeaderMobile />;
}

export default HeaderSection;
