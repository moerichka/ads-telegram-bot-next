import React from "react";

import s from "./WhatIsThis.module.scss";

interface WhatIsThisProps {
  title: string;
  description: string;
  color: string;
  className?: string;
}

function WhatIsThis({
  color,
  description,
  title,
  className = undefined,
}: WhatIsThisProps) {
  return (
    <div className={`${s.whatIsThis} ${className}`} style={{ color }}>
      <div className={s.whatIsThis__title}>{title}</div>
      <div
        className={s.whatIsThis__description}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}

export default WhatIsThis;
