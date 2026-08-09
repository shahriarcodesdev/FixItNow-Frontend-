"use client";

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
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { registerAction } from "../_actions/authAction";

import {
  CheckCircle2,
  ShieldCheck,
  UserRound,
  Wrench,
} from "lucide-react";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [state, action, pending] = useActionState(
    registerAction,
    null,
  );

  const [role, setRole] = useState("CUSTOMER");

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message || "Registration successful");
    } else {
      toast.error(state.message || "Registration failed");
    }
  }, [state]);

  return (
    <div
      className={cn(
        "flex min-h-[calc(100vh-5rem)] items-start justify-center px-4 pt-4 pb-8 ",
        className,
      )}
      {...props}
    >
      <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border bg-background shadow-lg lg:grid-cols-2">

        {/* Registration Form */}
        <Card className="rounded-none border-0 shadow-none">
          <CardHeader className="px-6 pb-4 pt-6 sm:px-8">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Wrench className="h-5 w-5 text-primary-foreground" />
              </div>

              <span className="text-lg font-bold">
                FixIt<span className="text-primary">Now</span>
              </span>
            </div>

            <CardTitle className="text-2xl font-bold">
              Create your account
            </CardTitle>

            <CardDescription>
              Join FixItNow for reliable home services.
            </CardDescription>
          </CardHeader>

          <CardContent className="px-6 pb-6 sm:px-8">
            <form action={action}>
              <FieldGroup className="gap-4">

                {/* Name */}
                <Field>
                  <FieldLabel htmlFor="name">
                    Full Name
                  </FieldLabel>

                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="h-10 rounded-lg"
                  />
                </Field>

                {/* Email */}
                <Field>
                  <FieldLabel htmlFor="email">
                    Email Address
                  </FieldLabel>

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="h-10 rounded-lg"
                  />
                </Field>

                {/* Password */}
                <Field>
                  <FieldLabel htmlFor="password">
                    Password
                  </FieldLabel>

                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    className="h-10 rounded-lg"
                  />
                </Field>

                {/* Role */}
                <Field>
                  <FieldLabel>Register As</FieldLabel>

                  <input
                    type="hidden"
                    name="role"
                    value={role}
                  />

                  <Select
                    value={role}
                    onValueChange={setRole}
                  >
                    <SelectTrigger className="h-10 rounded-lg">
                      <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="CUSTOMER">
                        Customer
                      </SelectItem>

                      <SelectItem value="TECHNICIAN">
                        Technician
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </Field>

                {/* Submit */}
                <Field className="pt-1">
                  <Button
                    type="submit"
                    disabled={pending}
                    className="h-10 w-full rounded-lg font-semibold"
                  >
                    {pending
                      ? "Creating account..."
                      : "Create Account"}
                  </Button>

                  <FieldDescription className="text-center text-xs">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="font-semibold text-primary hover:underline"
                    >
                      Sign in
                    </Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>

        {/* Right Side */}
        <div className="relative hidden overflow-hidden bg-primary/5 lg:block">
          <div className="flex h-full min-h-[500px] flex-col justify-center px-10">

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary shadow-md">
              <Wrench className="h-7 w-7 text-primary-foreground" />
            </div>

            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Welcome to FixItNow
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Reliable home services,
              <br />
              whenever you need them.
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              Connect with trusted professionals for repairs,
              maintenance, installation, and more.
            </p>

            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-3 rounded-lg border bg-background/80 p-3">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span className="text-sm">
                  Verified professionals
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-lg border bg-background/80 p-3">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span className="text-sm">
                  Safe and trusted service
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-lg border bg-background/80 p-3">
                <UserRound className="h-4 w-4 text-primary" />
                <span className="text-sm">
                  Easy booking experience
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}