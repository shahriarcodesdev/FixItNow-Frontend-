"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


import { createServiceAction } from "../_actions/createServiceAction";


type Category = {
  id: string;
  name: string;
};


type Props = {
  categories: Category[];
};


export function ServiceForm({
  categories,
}: Props) {


  const [state, action, pending] =
    useActionState(
      createServiceAction,
      null
    );



  return (

    <Card>

      <CardHeader>

        <CardTitle>
          Add New Service
        </CardTitle>

      </CardHeader>



      <CardContent>


        <form
          action={action}
          className="space-y-5"
        >


          <div>

            <Label>
              Service Title
            </Label>


            <Input
              name="title"
              placeholder="Example: Plumbing Repair"
              required
            />

          </div>





          <div>

            <Label>
              Description
            </Label>


            <Textarea
              name="description"
              placeholder="Describe your service"
              rows={5}
              required
            />

          </div>





          <div>

            <Label>
              Price
            </Label>


            <Input
              type="number"
              name="price"
              placeholder="1000"
              required
            />

          </div>






          <div>

            <Label>
              Category
            </Label>


            <Select
              name="categoryId"
              required
            >

              <SelectTrigger>

                <SelectValue
                  placeholder="Select category"
                />

              </SelectTrigger>



              <SelectContent>

                {
                  categories.map((category)=>(
                    
                    <SelectItem
                      key={category.id}
                      value={category.id}
                    >
                      {category.name}
                    </SelectItem>

                  ))
                }

              </SelectContent>


            </Select>


          </div>







          <Button
            className="w-full"
            disabled={pending}
          >

            {
              pending
              ? "Creating..."
              : "Create Service"
            }


          </Button>







          {
            state?.message && (

              <p
                className={
                  state.success
                  ? "text-green-600"
                  : "text-red-600"
                }
              >
                {state.message}
              </p>

            )
          }




        </form>



      </CardContent>


    </Card>

  );

}