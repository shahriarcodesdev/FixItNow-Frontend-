import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { TechnicianService } from "@/types/service";

import { DeleteServiceButton } from "./DeleteServiceButton";
import { EditServiceDialog } from "./EditServiceDialog";

type Props = {
  service: TechnicianService;
};

export function ServiceCard({
  service,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {service.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground">
          {service.description}
        </p>

        <div className="flex justify-between">
          <span className="text-muted-foreground">
            Price
          </span>

          <span className="font-semibold">
            ৳ {service.price}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">
            Category
          </span>

          <span className="font-medium">
            {service.category?.name}
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex gap-3">
        <EditServiceDialog
          service={service}
        />

        <DeleteServiceButton
          id={service.id}
        />
      </CardFooter>
    </Card>
  );
}