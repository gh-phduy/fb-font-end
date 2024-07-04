import { SignUpForm } from "@/components/forms/SignUpForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className=" -translate-y-12 h-screen flex flex-col justify-center items-center 900:flex-row ">
      <div className="max-w-[500px] w-full 900:block flex flex-col items-center">
        <div>
          <Image
            className="900:-translate-x-[10%] w-[326px] h-[106px]"
            src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
            alt="Facebook"
            width={100}
            height={100}
          />
        </div>
        <h2 className="text-[#1c1e21] text-center 900:text-start text-[5vw] 600:text-[28px] font-medium">
          Facebook helps you connect and share with the people in your life.
        </h2>
      </div>
      <div className="flex flex-col  items-center">
        <SignUpForm />
        <Button className="text-black hover:underline rounded-lg mt-2" asChild>
          <Link href="/login">Already have a account</Link>
        </Button>
      </div>
    </div>
  );
};

export default SignUpPage;
