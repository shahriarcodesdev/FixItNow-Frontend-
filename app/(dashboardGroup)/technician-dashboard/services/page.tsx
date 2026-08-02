export const dynamic = "force-dynamic";
import { getMyServices } from "@/service/getMyServices";
import { getCategories } from "@/service/getCategories";

import { ServiceForm } from "./_components/ServiceForm";
import { ServiceList } from "./_components/ServiceList";


export default async function TechnicianServicesPage() {


  const services =
    await getMyServices();


  const categories =
    await getCategories();



  return (

    <div className="max-w-7xl mx-auto space-y-8">


      <div>

        <h1 className="text-3xl font-bold">
          My Services
        </h1>


        <p className="text-muted-foreground">
          Manage your offered services
        </p>

      </div>



      <ServiceForm
        categories={
          categories?.data || []
        }
      />



      <ServiceList
        services={
          services?.data || []
        }
      />


    </div>

  );

}