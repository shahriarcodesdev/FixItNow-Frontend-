"use client";


import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { deleteServiceAction } from "../_actions/deleteServiceAction";


type Props = {
  id:string;
};


export function DeleteServiceButton({
  id,
}:Props){


  const router = useRouter();


  const [pending,startTransition] =
    useTransition();



  function handleDelete(){


    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this service?"
      );


    if(!confirmDelete) return;



    startTransition(async()=>{


      await deleteServiceAction(id);


      router.refresh();


    });


  }



  return (

    <Button

      variant="destructive"

      className="flex-1"

      onClick={handleDelete}

      disabled={pending}

    >

      {
        pending
        ? "Deleting..."
        : "Delete"
      }


    </Button>

  );

}