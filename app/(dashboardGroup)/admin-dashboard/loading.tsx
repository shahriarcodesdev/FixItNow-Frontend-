import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

export default function AdminDashboardLoading() {
  return (
    <div className="mx-auto max-w-7xl space-y-10">

      {/* Header Skeleton */}
      <Card className="border-none">
        <CardContent className="flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">

          <div className="space-y-3">
            <Skeleton className="h-10 w-72" />

            <Skeleton className="h-4 w-96" />
          </div>


          <Skeleton className="h-10 w-36" />

        </CardContent>
      </Card>




      {/* Stats Skeleton */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[1,2,3,4].map((item)=>(
          <Card key={item}>

            <CardHeader className="flex flex-row items-center justify-between">

              <Skeleton className="h-5 w-32" />

              <Skeleton className="h-6 w-6 rounded-full" />

            </CardHeader>


            <CardContent>

              <Skeleton className="h-10 w-20" />

            </CardContent>

          </Card>
        ))}

      </div>





      {/* Management Section Skeleton */}
      <div className="grid gap-6 md:grid-cols-3">


        {[1,2,3].map((item)=>(
          <Card
            key={item}
            className="p-6"
          >

            <div className="space-y-5">


              <Skeleton
                className="
                h-12
                w-12
                rounded-xl
                "
              />


              <Skeleton
                className="
                h-6
                w-40
                "
              />


              <div className="space-y-2">

                <Skeleton className="h-4 w-full" />

                <Skeleton className="h-4 w-3/4" />

              </div>



              <Skeleton
                className="
                h-10
                w-full
                "
              />


            </div>


          </Card>
        ))}


      </div>



    </div>
  );
}