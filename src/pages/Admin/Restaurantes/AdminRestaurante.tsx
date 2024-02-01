import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useEffect, useState } from "react"
import { FaPencil } from "react-icons/fa6"
import { MdDelete } from "react-icons/md"
import { Link } from "react-router-dom"
import apiV1 from "../../../http"

const AdminRestaurantes = () => {
    const [restaurants, setRestaurants] = useState<{id: string, title: string}[]>([]);

    useEffect(() => {
        apiV1.get<{id: string, title: string}[]>('restaurants').then(response => setRestaurants(response.data))
    }, [])

    const deleteRestaurant = (restaurantToBeDeleted: {id: string, title: string}) => {
        apiV1.delete(`restaurants/${restaurantToBeDeleted.id}`)
            .then(() => {
                const restaurantsList = restaurants.filter(restaurant => restaurant.id !== restaurantToBeDeleted.id)
                setRestaurants([...restaurantsList]);
            })
    }

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
                        {restaurants.map((restaurant) => (
                            <TableRow key={restaurant.id}>
                                <TableCell>{restaurant.title}</TableCell>
                                <TableCell>
                                    <Link to={`/admin/restaurantes/${restaurant.id}`}>
                                        <button className="text-lg text-blue-500 hover:bg-blue-50 p-2 rounded-full border-none">
                                            <FaPencil />
                                        </button>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <button 
                                        className="text-xl text-red-500 hover:bg-red-50 p-2 rounded-full border-none"
                                        onClick={() => deleteRestaurant(restaurant)}
                                    >
                                        <MdDelete />
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default AdminRestaurantes