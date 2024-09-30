import type { Metadata } from "next";
import { description } from "./register/page";

export const metadata: Metadata = {
  title: "Authentication",
  description: description,
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="hidden lg:block h-full w-1/2">
        <span className="h-full w-1/2 bg-primary absolute left-0 top-0" />
        <p className=" w-[700px] absolute bottom-0 left-0 px-10 py-10 text-2xl text-white text-wrap">
          "Connecting Quality Products with the Right Deals"
        </p>
      </div>
      {children}
    </div>
  );
}
