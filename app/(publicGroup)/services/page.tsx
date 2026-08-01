import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Wrench,
  ShieldCheck,
  Clock,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";


const services = [
  {
    title:"Home Repair",
    description:"Professional repair services for your home appliances and systems.",
    icon:Wrench
  },
  {
    title:"Verified Technicians",
    description:"Hire experienced and trusted technicians.",
    icon:ShieldCheck
  },
  {
    title:"Fast Service",
    description:"Quick booking and reliable service delivery.",
    icon:Clock
  },
  {
    title:"Quality Work",
    description:"Highly rated professionals with guaranteed quality.",
    icon:Star
  }
]


export default function ServicesPage(){

return (

<div className="mx-auto max-w-7xl space-y-12">


<section className="
rounded-3xl
bg-gradient-to-r
from-primary/10
via-primary/5
to-background
p-10
">


<h1 className="
text-5xl
font-bold
tracking-tight
">

Professional Home Services

</h1>


<p className="
mt-4
max-w-2xl
text-muted-foreground
text-lg
">

Book skilled technicians for repair,
maintenance and installation services.

</p>


<Button
className="mt-6"
asChild
>

<Link href="/technicians">
Find Technician
</Link>


</Button>


</section>





<div className="
grid
gap-6
md:grid-cols-2
lg:grid-cols-4
">


{
services.map((service)=>{

const Icon=service.icon;


return (

<Card
key={service.title}
className="
hover:shadow-lg
transition
"
>

<CardHeader>


<div className="
h-12
w-12
rounded-xl
bg-primary/10
flex
items-center
justify-center
">


<Icon
className="text-primary"
/>


</div>


<CardTitle className="mt-4">

{service.title}

</CardTitle>


</CardHeader>


<CardContent>

<p className="text-muted-foreground">
{service.description}
</p>


</CardContent>


</Card>


)


})

}


</div>


</div>


)

}