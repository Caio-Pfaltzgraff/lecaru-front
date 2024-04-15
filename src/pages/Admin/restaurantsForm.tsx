import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@nextui-org/input";
import { ChangeEvent } from "react";
import { Controller, useForm } from "react-hook-form";
import { LuSaveAll } from "react-icons/lu";
import { z } from "zod";
import { Button } from "../../components/admin/button";
import { Title } from "../../components/title";
import { viacepAPI } from "../../http";

const schema = z.object({
  zipCode: z.string().min(1, "O cep é obrigatório.").min(8, 'O cep deve conter no mínimo 8 dígitos.').max(9, 'Cep inválido.'),
  publicPlace: z.string().min(1,"O logradouro é obrigatório."),
  neighborhood: z.string().min(1,"O bairro é obrigatório."),
  locality: z.string().min(1,"A cidade é obrigatória."),
  number: z.string().min(1,"O número é obrigatório."),
  uf: z.string().optional(),
  ddd: z.string().optional(),
  telephone: z.string().min(1,"O telefone é obrigatório."),
});

type ProductSchema = z.infer<typeof schema>;

export function RestaurantsForm() {
  const {
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    setValue,
    control,
    reset,
  } = useForm<ProductSchema>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(schema),
    defaultValues: {
      zipCode: '',
      ddd: '',
      locality: '',
      neighborhood: '',
      number: '',
      publicPlace: '',
      telephone: '',
      uf: ''
    }
  });

  function handleSaveRestaurant(data: ProductSchema) {
    console.log(data);
    reset();
  }

  async function fetchCepData(cep : string) {
    try {
      const response = await viacepAPI.get(`${cep}/json/`);
      if(response.data.erro === true) {
        throw new Error('Cep inválido.')
      }
      clearErrors('zipCode');
      clearErrors('publicPlace');
      clearErrors('neighborhood');
      clearErrors('locality');
      setValue("publicPlace", response.data.logradouro);
      setValue("neighborhood", response.data.bairro);
      setValue("locality", response.data.localidade);
      setValue("ddd", response.data.ddd)
      setValue("uf", response.data.uf)
    } catch(error) {
      setError("zipCode", {
        type: "manual",
        message: "Cep inválido."
      })
    }
  }

  function handleCepChange(event: ChangeEvent<HTMLInputElement>) {
    const cep = event.target.value.replace(/\D/g, '');
    if(cep.length === 8) {
      fetchCepData(cep)
    }
  }

  return (
    <div className="max-w-screen-xl mx-auto paddingPage py-6 h-screen">
      <div className="max-w-screen-lg mx-auto">
        <div className="w-full flex justify-center items-center">
          <div className="w-full bg-white border shadow-lg rounded-xl p-2 grid gap-6 my-6">
            <Title className="text-center">Formulário de Restaurante</Title>
            <form
              onSubmit={handleSubmit(handleSaveRestaurant)}
              className="w-full grid gap-6"
            >
              <div className="grid gap-4 lg:grid-cols-2">
                <Controller 
                  name="zipCode"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label="Cep"
                      isInvalid={errors.zipCode && true}
                      errorMessage={errors.zipCode?.message}
                      variant="underlined"
                      onChange={(e) => {
                        field.onChange(e);
                        handleCepChange(e)
                      }}
                    />
                  )}
                />
                <Controller 
                  name="locality"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label="Cidade"
                      isInvalid={errors.locality && true}
                      errorMessage={errors.locality?.message}
                      variant="underlined"
                    />
                  )}
                />
              </div>
              <div className="grid gap-4 lg:grid-cols-2">
              <Controller 
                  name="publicPlace"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label="Logradouro"
                      isInvalid={errors.publicPlace && true}
                      errorMessage={errors.publicPlace?.message}
                      variant="underlined"
                    />
                  )}
                />
                <Controller 
                  name="neighborhood"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label="Bairro"
                      isInvalid={errors.neighborhood && true}
                      errorMessage={errors.neighborhood?.message}
                      variant="underlined"
                    />
                  )}
                />
              </div>
              
              <div className="grid gap-4 lg:grid-cols-2">
              <Controller 
                  name="number"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label="Número"
                      type="number"
                      isInvalid={errors.number && true}
                      errorMessage={errors.number?.message}
                      variant="underlined"
                    />
                  )}
                />
                <Controller 
                  name="telephone"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      label="Telefone"
                      isInvalid={errors.telephone && true}
                      errorMessage={errors.telephone?.message}
                      variant="underlined"
                    />
                  )}
                />
              </div>

              <div className="flex justify-center mt-4">
                <Button type="submit" className="bg-blue-600 text-white px-16">
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
