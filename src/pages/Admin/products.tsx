import { Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from "@mui/material";
import { LuChevronLeft, LuChevronRight, LuChevronsLeft, LuChevronsRight, LuListPlus, LuPencil, LuSlidersHorizontal, LuTrash2 } from "react-icons/lu";
import { PaginationButton } from "../../components/admin/paginationButton";
import { Search } from './../../components/search';

export function Products() {
  return (
    <div className="max-w-screen-xl mx-auto paddingPage space-y-6">
      <div className="mt-6 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <h4 className="text-2xl font-title font-semibold">Produtos</h4>
          <Search />
          <div className="w-full flex justify-between md:hidden">
            <button className="flex items-center gap-2 text-white bg-lecaru-blue-dark py-3 px-6 rounded-lg tracking-wide">
              <LuSlidersHorizontal className="size-5"/> Filtrar
            </button>
            <button className="flex items-center text-white bg-green-700 rounded-md p-2 gap-2 outline-none">
              <LuListPlus className="size-5"/> Novo Produto
            </button>
          </div>
        </div>
        <div className="hidden md:inline-flex justify-between flex-wrap gap-y-3 w-full">
          <div className="flex items-center flex-wrap gap-2">
            <button className="flex items-center justify-center outline-none gap-2 py-2 px-3 bg-lecaru-blue-dark rounded-xl text-white tracking-wide">
              Todos
            </button>
            <button className="flex items-center justify-center outline-none gap-2 py-2 px-3 bg-lecaru-blue-dark rounded-xl text-white tracking-wide">
              Carnes
            </button>
            <button className="flex items-center justify-center outline-none gap-2 py-2 px-3 bg-lecaru-blue-dark rounded-xl text-white tracking-wide">
              Petiscos
            </button>
            <button className="flex items-center justify-center outline-none gap-2 py-2 px-3 bg-lecaru-blue-dark rounded-xl text-white tracking-wide">
              Massas
            </button>
            <button className="flex items-center justify-center outline-none gap-2 py-2 px-3 bg-lecaru-blue-dark rounded-xl text-white tracking-wide">
              Guarnições
            </button>
            <button className="flex items-center justify-center outline-none gap-2 py-2 px-3 bg-lecaru-blue-dark rounded-xl text-white tracking-wide">
              Bebidas
            </button>
            <button className="flex items-center justify-center outline-none gap-2 py-2 px-3 bg-lecaru-blue-dark rounded-xl text-white tracking-wide">
              Sobremesas
            </button>
          </div>

          <div className="flex justify-end">
            <button className="flex items-center text-white bg-green-700 rounded-md p-2 gap-2 outline-none">
              <LuListPlus className="size-6"/> Novo Produto
            </button>
          </div>
        </div>
      </div>

      <TableContainer component={Paper} className="mt-6">
        <Table sx={{ minWidth: '640px' }}>
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{fontWeight: 'bold', fontFamily: 'Inter'}}>Nome</TableCell>
              <TableCell align="left" sx={{fontWeight: 'bold', fontFamily: 'Inter'}}>Data de inserção</TableCell>
              <TableCell align="left" sx={{fontWeight: 'bold', fontFamily: 'Inter'}}>Data de atualização</TableCell>
              <TableCell align="left" sx={{fontWeight: 'bold', fontFamily: 'Inter'}}>Editar</TableCell>
              <TableCell align="left" sx={{fontWeight: 'bold', fontFamily: 'Inter'}}>Excluir</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {Array.from({ length: 10 }).map((_, index) => (
              <TableRow key={index + 1} className="md:hover:bg-zinc-100">
                <TableCell sx={{ fontFamily: 'Inter' }} className="md:w-1/2">Filé Mignon com fritas, arroz a piemontese e molho</TableCell>
                <TableCell sx={{ fontFamily: 'Inter' }}>12/02/2023</TableCell>
                <TableCell sx={{ fontFamily: 'Inter' }}>03/04/2024</TableCell>
                <TableCell sx={{ fontFamily: 'Inter' }}>
                  <button className="flex justify-center items-center outline-none text-blue-700 md:hover:bg-blue-100 p-2 rounded-full">
                    <LuPencil className="size-5"/>
                  </button>
                </TableCell>
                <TableCell sx={{ fontFamily: 'Inter' }}>
                  <button className="flex justify-center items-center outline-none text-red-700 md:hover:bg-red-100 p-2 rounded-full">
                    <LuTrash2 className="size-5"/>
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>
                Mostrando 10 de 100 itens
              </TableCell>
              <TableCell colSpan={3} align="right">
                <div className="inline-flex items-center gap-8">
                  <span>Página 1 de 10</span>

                  <div className="flex gap-1.5">
                    <PaginationButton>
                      <LuChevronsLeft className="size-4" />
                    </PaginationButton>
                    <PaginationButton>
                      <LuChevronLeft className="size-4" />
                    </PaginationButton>
                    <PaginationButton>
                      <LuChevronRight className="size-4" />
                    </PaginationButton>
                    <PaginationButton>
                      <LuChevronsRight className="size-4" />
                    </PaginationButton>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      
    </div>
  )
}