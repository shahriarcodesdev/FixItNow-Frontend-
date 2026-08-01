"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


type Category = {
  id: string;
  name: string;
};


type Props = {
  categories: Category[];
};


export function CategorySelect({
  categories,
}: Props) {

  return (
    <Select name="categoryId">

      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select Category" />
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
  );
}