import { TechnicianService } from "@/types/service";
import { ServiceCard } from "./ServiceCard";


type Props = {
  services: TechnicianService[];
};


export function ServiceList({
  services,
}: Props) {


  if (!services.length) {

    return (

      <div className="rounded-lg border p-10 text-center">

        <h2 className="text-xl font-semibold">
          No Services Found
        </h2>

        <p className="text-muted-foreground">
          Add your first service.
        </p>

      </div>

    );

  }



  return (

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {
        services.map((service)=>(

          <ServiceCard
            key={service.id}
            service={service}
          />

        ))
      }

    </div>

  );

}