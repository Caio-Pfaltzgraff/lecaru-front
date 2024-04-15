import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { useForm } from "react-hook-form";
import { LuSaveAll } from "react-icons/lu";
import { Toaster, toast } from "sonner";
import { z } from "zod";
import { Button } from "../../components/admin/button";
import { Title } from "../../components/title";
import categories from "../../data/categoriesMenu.json";

const schema = z.object({
  name: z
    .string()
    .min(1, "O nome é obrigatório.")
    .min(3, "O nome precisa ter no mínimo 3 caracteres."),
  description: z.string(),
  image: z
    .string()
    .min(1, "O link da imagem é obrigatório.")
    .min(5, "O link da imagem precisa ter no mínimo 5 caracteres."),
  weight: z
    .string()
    .transform((weight) => (Number(weight) > 0 ? Number(weight) : null)),
  serving: z
    .string()
    .transform((serving) => (Number(serving) > 0 ? Number(serving) : null)),
  price: z
    .string()
    .refine((price) => !isNaN(parseFloat(price)), "O preço é obrigatório.")
    .transform((price) => Number(price)),
  category: z
    .string()
    .min(1, "A categoria é obrigatória.")
    .transform((category) => Number(category)),
});

type ProductSchema = z.infer<typeof schema>;

export function ProductsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductSchema>({
    resolver: zodResolver(schema),
  });

  function handleSaveProduct(data: ProductSchema) {
    console.log(data);
    toast.success("Produto salvo com sucesso!")
  }

  return (
    <div className="max-w-screen-xl mx-auto paddingPage py-6 h-screen">
      <div className="max-w-screen-lg mx-auto">
        <div className="w-full flex justify-center items-center">
          <div className="w-full bg-white border shadow-lg rounded-xl p-2 grid gap-6 my-6">
            <Title className="text-center">Formulário de Produto</Title>
            <form
              onSubmit={handleSubmit(handleSaveProduct)}
              className="w-full grid gap-6"
            >
              <div>
                <Input
                  {...register("name")}
                  label="Nome"
                  isInvalid={errors.name && true}
                  errorMessage={errors.name?.message}
                  variant="underlined"
                />
              </div>
              <div>
                <Input
                  {...register("description")}
                  label="Descrição"
                  isInvalid={errors.description && true}
                  errorMessage={errors.description?.message}
                  variant="underlined"
                />
              </div>
              <div>
                <Input
                  {...register("image")}
                  label="Link da imagem"
                  isInvalid={errors.image && true}
                  errorMessage={errors.image?.message}
                  variant="underlined"
                />
              </div>
              <div>
                <Input
                  {...register("weight")}
                  label="Peso"
                  type="number"
                  isInvalid={errors.weight && true}
                  errorMessage={errors.weight?.message}
                  variant="underlined"
                />
              </div>
              <div>
                <Input
                  {...register("serving")}
                  label="Serve quantas pessoas"
                  type="number"
                  isInvalid={errors.serving && true}
                  errorMessage={errors.serving?.message}
                  variant="underlined"
                />
              </div>
              <div>
                <Input
                  {...register("price")}
                  label="Preço"
                  type="number"
                  isInvalid={errors.price && true}
                  errorMessage={errors.price?.message}
                  variant="underlined"
                />
              </div>
              <div>
                <Select
                  {...register("category")}
                  label="Categoria"
                  isInvalid={errors.category && true}
                  errorMessage={errors.category?.message}
                  placeholder="Selecione uma categoria"
                  variant="underlined"
                  items={categories}
                >
                  {(category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
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
      <Toaster richColors />
    </div>
  );
}
