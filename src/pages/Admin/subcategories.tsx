import { LuChevronDown, LuChevronLeft, LuChevronRight, LuChevronsLeft, LuChevronsRight, LuListPlus, LuPencil, LuSlidersHorizontal, LuTrash2 } from "react-icons/lu";
import { Button } from "../../components/admin/button";
import { IconButton } from "../../components/admin/iconButton";
import { LinkButton } from "../../components/admin/linkButton";
import { Table } from "../../components/admin/table";
import { TableCell } from "../../components/admin/table-cell";
import { TableHeader } from "../../components/admin/table-header";
import { TableRow } from "../../components/admin/table-row";
import { Search } from "../../components/search";
import { Title } from "../../components/title";

export function Subcategories() {
   return (
    <div className="max-w-screen-xl mx-auto paddingPage space-y-6 h-screen">
      <div className="my-6 space-y-6">
        <div className="w-full flex flex-col justify-center md:flex-row md:justify-between gap-4">
          <Title className="text-center md:text-start">Subcategorias</Title>
          <Search />
        </div>
        <div className="flex justify-between items-center gap-y-3 flex-wrap">
          <div className="hidden md:flex gap-2 flex-wrap">
            <Button className="bg-lecaru-blue-dark text-white text-sm">Todos</Button>
            <Button className="bg-lecaru-blue-dark text-white text-sm">Carnes</Button>
            <Button className="bg-lecaru-blue-dark text-white text-sm">Petiscos</Button>
            <Button className="bg-lecaru-blue-dark text-white text-sm">Massas</Button>
            <Button className="bg-lecaru-blue-dark text-white text-sm">Guarnições</Button>
            <Button className="bg-lecaru-blue-dark text-white text-sm">Bebidas</Button>
            <Button className="bg-lecaru-blue-dark text-white text-sm">Sobremesas</Button>
          </div>
          <Button className="bg-lecaru-blue-dark text-white md:hidden">
            <LuSlidersHorizontal className="size-5"/> Filtrar <LuChevronDown className="Size-5"/>
          </Button>
          <LinkButton to="/admin/subcategorias/novo" className="bg-green-600 text-white md:text-sm">
            <LuListPlus className="size-5" />Nova Subcategoria
          </LinkButton>
        </div>
        <Table>
          <thead>
            <tr className="border-b">
              <TableHeader>
                Nome
              </TableHeader>
              <TableHeader>
                Data Inserção
              </TableHeader>
              <TableHeader>
                Data Modificação
              </TableHeader>
              <TableHeader>
                Ação
              </TableHeader>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <TableRow key={index + 1}>
                <TableCell>Bovinas</TableCell>
                <TableCell>23/08/2023</TableCell>
                <TableCell>04/04/2024</TableCell>
                <TableCell>
                  <div className="flex gap-4 items-center">
                    <span className="cursor-pointer p-1.5 md:hover:bg-blue-100 rounded-full">
                      <LuPencil className="size-4 md:size-5 text-blue-600"/>
                    </span>
                    <span className="cursor-pointer p-1.5 md:hover:bg-red-100 rounded-full">
                      <LuTrash2 className="size-4 md:size-5 text-red-600"/>
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <TableCell colSpan={2} >
                Mostrando 10 de 100 itens
              </TableCell>
              <TableCell colSpan={2} className="text-right">
                <div className="inline-flex items-center gap-6">
                  <span>Página 1 de 10</span>
                  
                  <div className="flex gap-1.5">
                    <IconButton>
                      <LuChevronsLeft className="size-4"/>
                    </IconButton>
                    <IconButton>
                      <LuChevronLeft className="size-4"/>
                    </IconButton>
                    <IconButton>
                      <LuChevronRight className="size-4"/>
                    </IconButton>
                    <IconButton>
                      <LuChevronsRight className="size-4"/>
                    </IconButton>
                  </div>
                </div>
              </TableCell>
            </tr>
          </tfoot>
        </Table>
      </div>
    </div>
   )
}