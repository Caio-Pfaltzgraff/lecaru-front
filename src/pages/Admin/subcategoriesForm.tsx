import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { useForm } from "react-hook-form";
import { LuSaveAll } from "react-icons/lu";
import { z } from "zod";
import { Button } from "../../components/admin/button";
import { Title } from "../../components/title";
import categories from "../../data/categoriesMenu.json";

const schema = z.object({
  name: z
    .string()
    .min(1, "O nome é obrigatório.")
    .min(3, "O nome precisa ter no mínimo 3 caracteres."),
  categoryId: z
  .string()
  .refine((id) => !isNaN(parseInt(id)), "A categoria é obrigatória.")
  .transform((id) => Number(id))
});

type ProductSchema = z.infer<typeof schema>;

export function SubcategoriesForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductSchema>({
    resolver: zodResolver(schema),
  });

  function handleSaveProduct(data: ProductSchema) {
    console.log(data);
  }

  return (
    <div className="max-w-screen-xl mx-auto paddingPage py-6 h-screen">
      <div className="max-w-screen-lg mx-auto">
        <div className="w-full flex justify-center items-center">
          <div className="w-full bg-white shadow-lg border rounded-xl p-2 grid gap-6 my-6">
            <Title className="text-center">Formulário de Subcategoria</Title>
            <form
              onSubmit={handleSubmit(handleSaveProduct)}
              className="w-full grid gap-6"
            >
              <div>
                <Input
                  {...register("name")}
                  label="Nome da subcategoria"
                  isInvalid={errors.name && true}
                  errorMessage={errors.name?.message}
                  variant="underlined"
                />
              </div>
              
              <div>
                <Select
                  {...register("categoryId")}
                  label="Categoria"
                  isInvalid={errors.categoryId && true}
                  errorMessage={errors.categoryId?.message}
                  placeholder="Selecione uma categoria"
                  variant="underlined"
                  items={categories}
                >
                  {(categoryId) => (
                    <SelectItem key={categoryId.id} value={categoryId.id}>
                      {categoryId.name}
                    </SelectItem>
                  )}
                </Select>
              </div>

              <div className="flex justify-center">
                <Button className="bg-blue-600 text-white px-16">
                  <LuSaveAll className="size-5" /> Salvar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
