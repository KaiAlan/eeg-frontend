import Link from "next/link";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const description = "A Sign Up page with one column for email input and two buttons for auth signup from google and apple.";

  export const metadata: Metadata = {
    title: "Sign Up - EEG",
    description: description,
  };

const SignUp = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-balance text-muted-foreground">
            Enter your email below to create an account
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
          <Link href='/'> 
          <Button type="submit" className="w-full bg-black font-semibold">
            Continue
          </Button>
          </Link>
          <Button variant='ghost' className="w-full text-muted-foreground pointer-events-none">
            <Separator className="w-1/3 mx-1" />
            or continue with
            <Separator className="w-1/3 mx-1" />
          </Button>

          <Button
            variant="outline"
            className="w-full font-semibold hover:bg-primary hover:text-white"
          >
            Google
          </Button>
          <Button
            variant="outline"
            className="w-full font-semibold hover:bg-primary hover:text-white"
          >
            Apple
          </Button>
          <div className="text-sm text-muted-foreground text-center">
            By clicking continue, you agree to our{" "}
            <Link href="#" className="underline underline-offset-2 hover:text-black">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline underline-offset-2 hover:text-black">
              Privacy Policy.
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/auth/login">
            <Button variant="link" className="px-0 text-black underline">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
