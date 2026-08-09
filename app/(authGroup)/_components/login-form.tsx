"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginAction } from "../_actions/authAction";
import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";
import {
  ShieldCheck,
  UserRound,
  Wrench,
} from "lucide-react";

const demoAccounts = {
  customer: ["babul@gmail.com", "123456"],
  technician: ["mannan@gmail.com", "123456"],
  admin: ["admin@gmail.com", "123456"],
};

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const formRef = useRef<HTMLFormElement>(null);

  const [state, action, pending] = useActionState(
    loginAction,
    false,
  );

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message || "Login successful");
    } else {
      toast.error(state.message || "Login failed");
    }
  }, [state]);

  const demoLogin = (email: string, password: string) => {
    const form = formRef.current;

    if (!form) return;

    const emailInput = form.elements.namedItem(
      "email",
    ) as HTMLInputElement;

    const passwordInput = form.elements.namedItem(
      "password",
    ) as HTMLInputElement;

    emailInput.value = email;
    passwordInput.value = password;

    form.requestSubmit();
  };

  return (
    <div
      className={cn(
        "flex min-h-[calc(100vh-5rem)] items-start justify-center px-4 pt-6 pb-10",
        className,
      )}
      {...props}
    >
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border bg-card shadow-xl lg:grid-cols-2">
        {/* Login */}
        <div className="p-6 sm:p-10">
          <Card className="border-0 shadow-none">
            <CardHeader className="px-0">
              <CardTitle className="text-3xl">
                Welcome back
              </CardTitle>

              <CardDescription>
                Sign in to continue with FixItNow.
              </CardDescription>
            </CardHeader>

            <CardContent className="px-0">
              <form ref={formRef} action={action}>
                <FieldGroup>
                  <Field>
                    <FieldLabel>Email</FieldLabel>

                    <Input
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="h-11 rounded-xl"
                    />
                  </Field>

                  <Field>
                    <FieldLabel>Password</FieldLabel>

                    <Input
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      required
                      className="h-11 rounded-xl"
                    />
                  </Field>

                  <Button
                    type="submit"
                    disabled={pending}
                    className="h-11 w-full rounded-xl"
                  >
                    {pending ? "Signing in..." : "Sign In"}
                  </Button>
                </FieldGroup>
              </form>

              <div className="my-6 text-center text-xs text-muted-foreground">
                Quick Demo Login
              </div>

              <div className="space-y-2">
                {/* Customer */}
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  disabled={pending}
                  onClick={() =>
                    demoLogin(
                      demoAccounts.customer[0],
                      demoAccounts.customer[1],
                    )
                  }
                >
                  <UserRound className="mr-2 h-4 w-4" />
                  Login as Customer
                </Button>

                {/* Technician */}
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  disabled={pending}
                  onClick={() =>
                    demoLogin(
                      demoAccounts.technician[0],
                      demoAccounts.technician[1],
                    )
                  }
                >
                  <Wrench className="mr-2 h-4 w-4" />
                  Login as Technician
                </Button>

                {/* Admin */}
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  disabled={pending}
                  onClick={() =>
                    demoLogin(
                      demoAccounts.admin[0],
                      demoAccounts.admin[1],
                    )
                  }
                >
                  <ShieldCheck className="mr-2 h-4 w-4" />
                  Login as Admin
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Image */}
        <div className="relative hidden min-h-[550px] lg:block">
          <Image
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85"
            alt="FixItNow professional service"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />

          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h2 className="text-3xl font-bold">
              Trusted Home Services
            </h2>

            <p className="mt-2 max-w-md text-sm text-white/80">
              Find skilled professionals for repairs,
              maintenance, and installations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}