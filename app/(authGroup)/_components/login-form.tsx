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
import {
  googleLoginAction,
  loginAction,
} from "../_actions/authAction";
import { GoogleLogin } from "@react-oauth/google";
import {
  useActionState,
  useEffect,
  useRef,
} from "react";
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
      toast.success(
        state.message || "Login successful",
      );
    } else {
      toast.error(
        state.message || "Login failed",
      );
    }
  }, [state]);

  const demoLogin = (
    email: string,
    password: string,
  ) => {
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

  const handleGoogleLogin = async (
    credential: string,
  ) => {
    try {
      const result =
        await googleLoginAction(credential);

      if (!result?.success) {
        toast.error(
          result?.message ||
            "Google login failed",
        );
      }
    } catch (error) {
      console.error(
        "Google login error:",
        error,
      );

      toast.success(
        "Google login successful.",
      );
    }
  };

  return (
  <div
    className={cn(
      "grid min-h-[calc(100vh-5rem)] items-center justify-center gap-6 px-4 py-6 lg:grid-cols-[420px_520px] lg:gap-8",
      className,
    )}
    {...props}
  >
    {/* Login */}
    <div className="flex w-full justify-center">
      <Card className="w-full rounded-2xl border border-border/60 bg-background shadow-lg shadow-black/5">
        <CardHeader className="space-y-1.5 px-7 pt-6 pb-4">
          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <ShieldCheck className="h-5 w-5 text-primary" />
          </div>

          <CardTitle className="text-2xl font-bold tracking-tight">
            Welcome back
          </CardTitle>

          <CardDescription className="text-sm">
            Sign in to continue with FixItNow.
          </CardDescription>
        </CardHeader>

        <CardContent className="px-7 pb-6">
          {/* Email / Password Login */}
          <form
            ref={formRef}
            action={action}
          >
            <FieldGroup className="gap-3.5">
              <Field className="gap-1.5">
                <FieldLabel className="text-xs font-medium">
                  Email
                </FieldLabel>

                <Input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="h-10 rounded-lg border-border/70 bg-muted/20 text-sm focus-visible:ring-1"
                />
              </Field>

              <Field className="gap-1.5">
                <FieldLabel className="text-xs font-medium">
                  Password
                </FieldLabel>

                <Input
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="h-10 rounded-lg border-border/70 bg-muted/20 text-sm focus-visible:ring-1"
                />
              </Field>

              <Button
                type="submit"
                disabled={pending}
                className="h-10 w-full rounded-lg text-sm font-semibold"
              >
                {pending
                  ? "Signing in..."
                  : "Sign In"}
              </Button>
            </FieldGroup>
          </form>

          {/* Divider */}
          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />

            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              OR
            </span>

            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Google Login */}
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={(
                credentialResponse,
              ) => {
                if (
                  !credentialResponse.credential
                ) {
                  toast.error(
                    "Google login failed.",
                  );
                  return;
                }

                handleGoogleLogin(
                  credentialResponse.credential,
                );
              }}
              onError={() => {
                toast.error(
                  "Google login failed.",
                );
              }}
            />
          </div>

          {/* Demo Login */}
          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />

            <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Demo Accounts
            </span>

            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="space-y-2">
            {/* Customer */}
            <Button
              type="button"
              variant="outline"
              className="h-9 w-full justify-start rounded-lg border-border/70 text-xs font-medium transition-colors hover:bg-primary/5"
              disabled={pending}
              onClick={() =>
                demoLogin(
                  demoAccounts.customer[0],
                  demoAccounts.customer[1],
                )
              }
            >
              <UserRound className="mr-2 h-3.5 w-3.5 text-blue-600" />
              Login as Customer
            </Button>

            {/* Technician */}
            <Button
              type="button"
              variant="outline"
              className="h-9 w-full justify-start rounded-lg border-border/70 text-xs font-medium transition-colors hover:bg-primary/5"
              disabled={pending}
              onClick={() =>
                demoLogin(
                  demoAccounts.technician[0],
                  demoAccounts.technician[1],
                )
              }
            >
              <Wrench className="mr-2 h-3.5 w-3.5 text-orange-600" />
              Login as Technician
            </Button>

            {/* Admin */}
            <Button
              type="button"
              variant="outline"
              className="h-9 w-full justify-start rounded-lg border-border/70 text-xs font-medium transition-colors hover:bg-primary/5"
              disabled={pending}
              onClick={() =>
                demoLogin(
                  demoAccounts.admin[0],
                  demoAccounts.admin[1],
                )
              }
            >
              <ShieldCheck className="mr-2 h-3.5 w-3.5 text-emerald-600" />
              Login as Admin
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>

    {/* Image */}
    <div className="relative hidden h-[520px] overflow-hidden rounded-2xl shadow-lg lg:block">
      <Image
        src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85"
        alt="FixItNow professional service"
        fill
        priority
        sizes="50vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

      <div className="absolute right-7 bottom-7 left-7 text-white">
        <div className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-sm">
          FixItNow Services
        </div>

        <h2 className="text-2xl font-bold tracking-tight">
          Trusted Home Services
        </h2>

        <p className="mt-2 max-w-sm text-sm leading-5 text-white/75">
          Find skilled professionals for repairs,
          maintenance, and installations.
        </p>
      </div>
    </div>
  </div>
);
}