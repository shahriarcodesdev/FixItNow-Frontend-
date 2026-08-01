import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { TechnicianService } from "@/types/service";
import { DeleteServiceButton } from "./DeleteServiceButton";




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



      <CardContent className="space-y-3">


        <p className="text-muted-foreground">
          {service.description}
        </p>



        <div className="flex justify-between">

          <span>
            Price
          </span>


          <span className="font-semibold">
            ৳ {service.price}
          </span>

        </div>




        <div className="flex justify-between">

          <span>
            Category
          </span>


          <span>
            {service.category?.name}
          </span>

        </div>



      </CardContent>





      <CardFooter className="flex gap-3">


        <Button
          variant="outline"
          className="flex-1"
        >
          Edit
        </Button>




        <DeleteServiceButton
          id={service.id}
        />


      </CardFooter>



    </Card>

  );

}