import React from "react";
import Image from "next/image";

import s from "./TeamItem.module.scss";

interface TeamItemProps {
  member: {
    id: number;
    fullName: string;
    status: string;
    description: string;
    avatar: string;
  };
}

function TeamItem({ member }: TeamItemProps) {
  const { avatar, description, fullName, status } = member;
  return (
    <div className={s.member}>
      <div className={s.avatar}>
        <div className={s.avatarWrapper}>
          <div className={s.beams}>
            <Image src="/images/team/beams.png" fill alt="" />
          </div>
          <Image src={avatar} fill alt="" />
        </div>
        <div className={s.shadow} />
      </div>
      <div className={s.info}>
        <div className={s.infoWrapper}>
          <div className={s.bio}>
            <div className={s.bio__fullName}>{fullName}</div>
            <div className={s.bio__status}>{status}</div>
          </div>
          <div className={s.about}>{description}</div>
        </div>
        <div className={s.shadow} />
      </div>
    </div>
  );
}

export default TeamItem;
