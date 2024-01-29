import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { FaPencil } from "react-icons/fa6"
import { MdDelete } from "react-icons/md"
import { Link } from "react-router-dom"

const AdminRestaurantes = () => {
    return (
        <>
            <TableContainer component={Paper} className="mt-4">
                <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell className="w-10/12" sx={{fontWeight: "bold"}}>Restaurante</TableCell>
                        <TableCell className="w-1/12" sx={{fontWeight: "bold"}}>Editar</TableCell>
                        <TableCell className="w-1/12" sx={{fontWeight: "bold"}}>Excluir</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow>
                            <TableCell>Nilópolis</TableCell>
                            <TableCell>
                                    <Link to={"/admin/restaurantes"}>
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

export default AdminRestaurantes