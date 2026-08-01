export type TechnicianService = {
  id:string;
  title:string;
  description:string;
  price:number;

  category:{
    id:string;
    name:string;
  };

  createdAt:string;
};