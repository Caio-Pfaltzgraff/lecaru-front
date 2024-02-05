import { Box, Button, Container, FormControl, InputLabel, MenuItem, OutlinedInput, Paper, Select, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import categories from '../../../data/categoriesMenu.json';
import apiV1 from "../../../http";
import ISubCategory from "../../../interfaces/ISubCategory";

const AdminFormSubCategories = () => {
    const params = useParams();
    const [title, setTitle] = useState<string>('');
    const [categoryId, setCategoryId] = useState<string>('');

    useEffect(() => {
        if(params.id) {
            apiV1.get<ISubCategory>(`subcategories/${params.id}`).then((response) => {
                setTitle(response.data.title);
                setCategoryId(String(response.data.categoryId));
            })
        }
    }, [params])

    const submitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(params.id) {
            apiV1.put(`subcategories/${params.id}`, {
                "title": title,
                "categoryId": categoryId
            }).then(() => alert("Subcategoria atualizada com sucesso!"));
        } else {
            apiV1.post('subcategories', {
                "title": title,
                "categoryId": categoryId
            }).then(() => alert("Subcategoria cadastrada com sucesso!"));
            setTitle('');
            setCategoryId('');
        }
    }

    return (
        <>
            <Box>
                <Paper sx={{p: 2}}>
                    <Container maxWidth='lg' sx={{my: 2}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1}}>
                            <Typography variant="h6" component="h1">Formulário de SubCategorias</Typography>
                            <Box 
                                component="form" 
                                sx={{width: '100%', display: 'flex', flexDirection: 'column', gap: 2}}
                                onSubmit={submitForm}
                            >
                                <TextField 
                                    label="Nome da SubCategoria"
                                    variant="standard"
                                    fullWidth
                                    margin="dense"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                                <FormControl
                                    fullWidth
                                    variant="standard"
                                    required
                                >
                                    <InputLabel className="ml-4">Categoria</InputLabel>
                                    <Select
                                        defaultValue=""
                                        input={<OutlinedInput label="Categoria" />}
                                        value={categoryId}
                                        onChange={(e) => setCategoryId(e.target.value)}
                                    >
                                        {categories.map(category => (
                                            <MenuItem key={category.id} value={category.id}>
                                                {category.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                    
                                <Button
                                    sx={{mt: 2}}
                                    type="submit" 
                                    variant="outlined"
                                    fullWidth 
                                >
                                    Salvar
                                </Button>
                            </Box>
                        </Box>
                    </Container>
                </Paper>
            </Box>
        </>
    )
}

export default AdminFormSubCategories