import { Box, Button, Container, FormControl, FormHelperText, InputLabel, MenuItem, OutlinedInput, Paper, Select, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import categories from '../../../data/categoriesMenu.json';
import apiV1 from "../../../http";
import IError from "../../../interfaces/IError";
import ISubCategory from "../../../interfaces/ISubCategory";

const AdminFormSubCategories = () => {
    const params = useParams();
    const [title, setTitle] = useState<string>('');
    const [errorTitle, setErrorTitle] = useState<IError>({error: false, message: ''});
    const [categoryId, setCategoryId] = useState<string>('');
    const [errorCategoryId, setErrorCategoryId] = useState<IError>({error: false, message: ''});

    useEffect(() => {
        if(params.id) {
            apiV1.get<ISubCategory>(`subcategories/${params.id}`).then((response) => {
                setTitle(response.data.title);
                setCategoryId(String(response.data.categoryId));
            })
        } else {
            setTitle('');
            setCategoryId('');
        }
    }, [params])

    function validateForm() {
        setErrorTitle({error: false, message: ''})
        setErrorCategoryId({error: false, message: ''})

        if(title.length === 0) {
            setErrorTitle({error: true, message: 'O campo é obrigatório'})
            return false;
        } else if(title.length < 3) {
            setErrorTitle({error: true, message: 'O nome deve possuir 3 caracteres ou mais'})
            return false;
        }

        if(categoryId.length === 0) {
            setErrorCategoryId({error: true, message: 'O campo é obrigatório'});
            return false;
        }
        return true;
    }

    const submitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!validateForm()) {
            toast.error("Preencha o formulário corretamente!");
            return;
        }

        if(params.id) {
            apiV1.put(`subcategories/${params.id}`, {
                "title": title,
                "categoryId": categoryId
            }).then(() => toast.success("Subcategoria atualizada com sucesso!"));
        } else {
            apiV1.post('subcategories', {
                "title": title,
                "categoryId": categoryId
            }).then(() => toast.success("Subcategoria cadastrada com sucesso!"));
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
                                    label="Nome da SubCategoria *"
                                    variant="standard"
                                    fullWidth
                                    margin="dense"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    error={errorTitle.error}
                                    helperText={errorTitle.error && errorTitle.message}
                                />
                                <FormControl
                                    fullWidth
                                    variant="standard"
                                    error={errorCategoryId.error}
                                >
                                    <InputLabel className="ml-4">Categoria *</InputLabel>
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
                                    {errorCategoryId.error && <FormHelperText>{errorCategoryId.message}</FormHelperText>}
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