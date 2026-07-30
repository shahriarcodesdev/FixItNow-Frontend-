import Link from "next/link";
import { Home, SearchX } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-lg shadow-xl">
        <CardHeader className="items-center text-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <SearchX className="h-10 w-10 text-primary" />
          </div>

          <h1 className="text-7xl font-extrabold text-primary">404</h1>

          <CardTitle className="text-3xl">Oops! Page Not Found</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-3">
          <Button asChild className="w-full">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <Button asChild variant="outline" className="w-full">
            <Link href="/services">Browse Services</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
