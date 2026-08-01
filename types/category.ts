export type Category = {
  id: string;
  name: string;
};

export type CategoryResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: Category[];
};