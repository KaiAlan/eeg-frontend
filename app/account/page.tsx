"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUserStore } from "@/stores/user-store";
import Image from "next/image";
import React from "react";
import Person from "@/public/icons/person-gray.svg";

const AccountPage = () => {
  const { user } = useUserStore();
  return (
    <div className="w-full flex flex-col justify-start items-start gap-8">
      <div className="w-full flex justify-between items-end">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={Person}
            alt="profile icon"
            width={0}
            height={0}
            className="w-40 text-black"
          />
          <p>
            Hello, <span>{user?.name}</span>
          </p>
        </div>
        <Button>Chat with Doc Intl.</Button>
      </div>
      <div className="w-full flex justify-start items-start gap-20">
        <Card className="flex-1 bg-transparent shadow-none">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle className="font-medium text-lg">
              Personal Information
            </CardTitle>
            <Button
              variant="outline"
              className="rounded-full gap-1 text-muted-foreground cursor-not-allowed"
            >
              <span>Edit</span>
              <Image
                src="/icons/edit.svg"
                alt="profile icon"
                width={0}
                height={0}
                className="w-4"
              />
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col justify-start items-start gap-4">
            <div className="flex flex-col justify-start items-start">
              <span className="text-sm text-muted-foreground">First Name</span>
              <span>John</span>
            </div>
            <div className="flex flex-col justify-start items-start">
              <span className="text-sm text-muted-foreground">Last Name</span>
              <span>Doe</span>
            </div>
            <div className="flex flex-col justify-start items-start">
              <span className="text-sm text-muted-foreground">
                Phone Number
              </span>
              <span>+09 534 645 53</span>
            </div>
            <div className="flex flex-col justify-start items-start">
              <span className="text-sm text-muted-foreground">
                Email Address
              </span>
              <span>johndoe@example.com</span>
            </div>
            {/* <div className="flex flex-col justify-start items-start">
              <span className="text-sm text-muted-foreground">Bio</span>
              <span className=" text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                recusandae dicta illo atque optio temporibus consequuntur
                accusantium natus quaerat, voluptatum saepe quos tenetur iure
                itaque laudantium quasi eos pariatur incidunt.
              </span>
            </div> */}
          </CardContent>
        </Card>
        <Card className="flex-1 bg-transparent shadow-none">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle className="font-medium text-lg">Address</CardTitle>
            <Button
              variant="outline"
              className="rounded-full gap-1 text-muted-foreground cursor-not-allowed"
            >
              <span>Edit</span>
              <Image
                src="/icons/edit.svg"
                alt="profile icon"
                width={0}
                height={0}
                className="w-4"
              />
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col justify-start items-start gap-4">
            <div className="flex flex-col justify-start items-start">
              <span className="text-sm text-muted-foreground">Country</span>
              <span>United Kingdom</span>
            </div>
            <div className="flex flex-col justify-start items-start">
              <span className="text-sm text-muted-foreground">City, State</span>
              <span>Leeds, East London</span>
            </div>
            <div className="flex flex-col justify-start items-start">
              <span className="text-sm text-muted-foreground">Postal Code</span>
              <span>ERT 2367</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AccountPage;
