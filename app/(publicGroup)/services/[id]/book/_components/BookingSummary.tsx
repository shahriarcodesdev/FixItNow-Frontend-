import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star, User, Wrench } from "lucide-react";

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
  service: Service;
};

export function BookingSummary({ service }: Props) {
  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle>Booking Summary</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="flex h-32 items-center justify-center rounded-lg bg-muted">
          <Wrench className="h-14 w-14 text-primary" />
        </div>

        <div>
          <Badge>{service.category.name}</Badge>

          <h2 className="mt-2 text-xl font-bold">
            {service.title}
          </h2>

          <p className="mt-1 text-sm text-muted-foreground line-clamp-3">
            {service.description}
          </p>
        </div>

        <Separator />

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">
              Technician
            </span>

            <span className="font-medium">
              {service.technician.user.name}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">
              Experience
            </span>

            <span>
              {service.technician.experience} Years
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">
              Rating
            </span>

            <span className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              {service.technician.averageRating}
            </span>
          </div>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-lg">
          <span className="font-semibold">
            Total
          </span>

          <span className="text-2xl font-bold text-primary">
            ৳ {service.price}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}