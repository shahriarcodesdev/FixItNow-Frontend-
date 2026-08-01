import { Skeleton } from "@/components/ui/skeleton";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";


export default function TechnicianDashboardLoading() {

  return (

    <div className="mx-auto max-w-7xl space-y-10">


      {/* Header Skeleton */}

      <Card
        className="
        border-none
        bg-gradient-to-r
        from-primary/10
        via-primary/5
        to-background
        "
      >

        <CardContent
          className="
          flex
          flex-col
          gap-6
          p-8
          lg:flex-row
          lg:items-center
          lg:justify-between
          "
        >

          <div className="space-y-3">

            <Skeleton
              className="
              h-10
              w-80
              "
            />


            <Skeleton
              className="
              h-4
              w-[450px]
              "
            />

          </div>



          <div className="flex gap-3">

            <Skeleton
              className="
              h-11
              w-36
              "
            />


            <Skeleton
              className="
              h-11
              w-44
              "
            />


          </div>


        </CardContent>


      </Card>





      {/* Stats Skeleton */}

      <div
        className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-4
        "
      >


        {[1,2,3,4].map((item)=>(

          <Card key={item}>


            <CardHeader
              className="
              flex
              flex-row
              items-center
              justify-between
              "
            >

              <Skeleton
                className="
                h-5
                w-32
                "
              />


              <Skeleton
                className="
                h-8
                w-8
                rounded-full
                "
              />

            </CardHeader>



            <CardContent>

              <Skeleton
                className="
                h-10
                w-20
                "
              />

            </CardContent>


          </Card>

        ))}


      </div>






      {/* Recent Bookings Skeleton */}

      <Card>


        <CardHeader>

          <Skeleton
            className="
            h-7
            w-48
            "
          />

        </CardHeader>



        <CardContent
          className="
          space-y-5
          "
        >


          {[1,2,3,4].map((item)=>(

            <div
              key={item}
              className="
              flex
              items-center
              justify-between
              rounded-lg
              border
              p-4
              "
            >


              <div className="space-y-2">

                <Skeleton
                  className="
                  h-5
                  w-48
                  "
                />


                <Skeleton
                  className="
                  h-4
                  w-64
                  "
                />

              </div>




              <Skeleton
                className="
                h-8
                w-24
                "
              />


            </div>


          ))}


        </CardContent>


      </Card>



    </div>

  );
}