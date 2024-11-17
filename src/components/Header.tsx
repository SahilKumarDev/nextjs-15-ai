"use client";

import Image from "next/image";
import React from "react";
import { NavItem } from "./NavItem";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { useAuth } from "@/hook/useAuth";
import LogoutButton from "./LogoutButton";

const Header = () => {
  const { user } = useAuth();

  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <div className="max-w-screen-2xl mx-auto backdrop-blur-sm border-bottom px-12 py-4 ">
        <div className="flex-between">
          <Image src={"/logo.svg"} width={100} height={100} alt={"logo"} />

          <NavItem />

          {user ? (
            <>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@dreamcots"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <LogoutButton className="text-sm" />
            </>
          ) : (
            <Link href={"/login"}>
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
