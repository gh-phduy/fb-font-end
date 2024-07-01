"use client";

import { FC } from "react";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { UserType } from "../types";

interface AvatarUserProps {
  className?: string;
  img?: string;
  link?: string;
}

const AvatarUser: FC<AvatarUserProps> = ({ className, img, link }) => {
  if (link) {
    return (
      <Link className="cursor-pointer" href={`/profile/${link}`}>
        <Avatar className={cn(className)}>
          <AvatarImage src={img ? img : "/avatar-placeholder.png"} />
          <AvatarFallback>
            <Image
              src="/avatar-placeholder.png"
              fill={true}
              className="object-cover"
              priority
              alt="Avatar placeholder"
            />
          </AvatarFallback>
        </Avatar>
      </Link>
    );
  } else {
    return (
      <Avatar className={cn(className)}>
        <AvatarImage src={img ? img : "/avatar-placeholder.png"} />
        <AvatarFallback>
          <Image
            src="/avatar-placeholder.png"
            fill={true}
            className="object-cover"
            priority
            alt="Avatar placeholder"
          />
        </AvatarFallback>
      </Avatar>
    );
  }
};

export default AvatarUser;
