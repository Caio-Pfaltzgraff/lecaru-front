import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useState } from "react"
import { FaPencil } from "react-icons/fa6"
import { MdDelete, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"
import { Link } from "react-router-dom"
import filtros from '../../../data/categoriesMenu.json';

const AdminSubCategories = () => {
    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState('');
    const filterName = filter && filtros.find(filtro => filtro.name === filter)?.name;

    return (
        <>
            <div className="hidden md:flex gap-5 justify-center">
                {filtros.map(filtro => (
                    <button 
                        className="btn-admin"
                        key={filtro.id}
                    >
                        {filtro.name}
                    </button>
                ))}
            </div>

            <div className="flex md:hidden justify-center">
                <button
                    className={`mobile-filter rounded-b-md ${open && "rounded-b-none text-white bg-azul-escuro"}`}
                    onClick={() => setOpen(!open)}
                    onBlur={() => setOpen(false)}
                >
                    <span>{filterName || "Filtrar Por Categoria"}</span>
                    {open ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
                    <div className={`absolute left-0 flex-col top-full w-full gap-3 py-3 bg-dourado rounded-b-md ${open ? "flex" : "hidden"}`}>
                        <div 
                            className="items-center text-black box-border flex h-10 justify-center hover:bg-azul-escuro"
                            onClick={() => setFilter('')}
                        ></div>
                        {filtros.map((filtro) => (
                            <div 
                                key={filtro.id} 
                                className={`items-center box-border flex h-10 justify-center hover:bg-azul-escuro ${filtro.name === filter && "bg-azul-escuro"}`}
                                onClick={() => setFilter(filtro.name)}
                            >
                                {filtro.name}
                            </div>
                        ))}
                    </div>
                </button>
            </div>

            <TableContainer component={Paper} className="mt-4">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="w-10/12" sx={{fontWeight: "bold"}}>Nome da SubCategoria</TableCell>
                            <TableCell className="w-1/12" sx={{fontWeight: "bold"}}>Editar</TableCell>
                            <TableCell className="w-1/12" sx={{fontWeight: "bold"}}>Excluir</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                Bovinas
                            </TableCell>
                            <TableCell>
                                <Link to={"/admin/produtos"}>
                                    <button className="text-lg text-blue-500 hover:bg-blue-50 p-2 rounded-full border-none">
                                        <FaPencil />
                                    </button>
                                </Link>
                            </TableCell>
                            <TableCell>
                                <button className="text-xl text-red-500 hover:bg-red-50 p-2 rounded-full border-none">
                                    <MdDelete />
                                </button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Suinas
                            </TableCell>
                            <TableCell>
                                <Link to={"/admin/produtos"}>
                                    <button className="text-lg text-blue-500 hover:bg-blue-50 p-2 rounded-full border-none">
                                        <FaPencil />
                                    </button>
                                </Link>
                            </TableCell>
                            <TableCell>
                                <button className="text-xl text-red-500 hover:bg-red-50 p-2 rounded-full border-none">
                                    <MdDelete />
                                </button>
                            </TableCell>
                        </TableRow>
                        
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default AdminSubCategories