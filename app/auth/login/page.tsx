
import Link from "next/link";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image.";

  export const metadata: Metadata = {
    title: "Login - EEG",
    description: description,
  };


const Login = () => {
  return (
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" placeholder="* * * * * *" required />
            </div>
            <Button type="submit" className="w-full bg-black font-semibold">
              Login
            </Button>
            <Button variant='ghost' className="w-full text-muted-foreground pointer-events-none">
            <Separator className="w-1/3 mx-1" />
            or continue with
            <Separator className="w-1/3 mx-1" />
          </Button>
            <Button variant="outline" className="w-full hover:bg-primary hover:text-white font-semibold">
              Google
            </Button>
            <Button variant="outline" className="w-full hover:bg-primary hover:text-white font-semibold">
              Apple
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#">
            <Button variant='link' className="px-0 text-black underline">Sign up</Button>
              
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Login;
