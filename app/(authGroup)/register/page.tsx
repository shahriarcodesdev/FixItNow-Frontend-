import { RegisterForm } from "../_components/register-form";


export default function RegisterPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="">
        <RegisterForm />
      </div>
    </div>
  );
}