import { getAllCategories } from "@/service/getAllCategories";

import { CategoryForm } from "./_components/CategoryForm";
import { CategoryList } from "./_components/CategoryList";

export default async function CategoriesPage() {
  const categories =
    await getAllCategories();

  return (
    <div className="mx-auto max-w-7xl space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Category Management
        </h1>

        <p className="text-muted-foreground">
          Create and manage service categories.
        </p>
      </div>

      <CategoryForm />

      <CategoryList
        categories={categories.data}
      />

    </div>
  );
}