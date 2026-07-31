import Image from "next/image";
import Link from "next/link";
import { Wrench, Star, MapPin } from "lucide-react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Service = {
  id: string;
  title: string;
  description: string;
  price: number;

  category: {
    id: string;
    name: string;
  };

  technician: {
    id: string;
    bio: string;
    experience: number;
    averageRating: number;

    user: {
      name: string;
      email: string;
      phone: string | null;
    };
  };
};

type Props = {
  services: Service[];
};

export function ServiceGrid({ services }: Props) {
  return (
    <section className="space-y-6 ">
      <div>
        <h2 className="text-2xl font-bold">
          Available Services
        </h2>

        <p className="text-muted-foreground">
          Choose a service and book trusted professionals.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Card
  key={service.id}
  className="overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
>
  <div className="h-48 bg-muted flex items-center justify-center">
    <Wrench className="h-16 w-16 text-primary" />
  </div>

  <CardContent className="space-y-4 pt-6">
    <Badge>{service.category.name}</Badge>

    <h3 className="text-xl font-semibold">
      {service.title}
    </h3>

    <p className="line-clamp-2 text-muted-foreground">
      {service.description}
    </p>

    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm text-muted-foreground">
          Technician
        </span>

        <span className="font-medium">
          {service.technician.user.name}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-sm text-muted-foreground">
          Experience
        </span>

        <span>{service.technician.experience} Years</span>
      </div>

      <div className="flex justify-between">
        <span className="text-sm text-muted-foreground">
          Rating
        </span>

        <span>
          ⭐ {service.technician.averageRating}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-sm text-muted-foreground">
          Starting From
        </span>

        <span className="font-bold text-primary">
          ৳{service.price}
        </span>
      </div>
    </div>
  </CardContent>

  <CardFooter>
    <Button
      className="w-full"
      asChild
    >
      <Link href={`/services/${service.id}`}>
        Book Service
      </Link>
    </Button>
  </CardFooter>
</Card>
        ))}
      </div>
    </section>
  );
}