import { Box, Button, Container, FormControl, Input, InputAdornment, InputLabel, MenuItem, OutlinedInput, Paper, Select, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import categories from '../../../data/categoriesMenu.json';
import subcategories from '../../../data/subcategoriesMenu.json';
import ISubCategory from "../../../interfaces/ISubCategory";
import apiV1 from "../../../http";

const AdminFormProdutos = () => {
    const [filteredOptions, setFilteredOptions] = useState<ISubCategory[]>([])
    const [category, setCategory] = useState<string>('');  
    const [title, setTitle] = useState<string>('');  
    const [description, setDescription] = useState<string>('');  
    const [photo, setPhoto] = useState<string>('');  
    const [size, setSize] = useState<string>('');  
    const [serving, setServing] = useState<string>('');  
    const [price, setPrice] = useState<string>('');  
    const [subCategory, setSubCategory] = useState<string>('');  

    useEffect(() => {
        const subCategoriesFiltered = subcategories.filter(subcategory => subcategory.category === Number(category))
        setFilteredOptions(subCategoriesFiltered);
    }, [category])

    const submitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = {
            "title": title,
            "description": description,
            "photo": photo,
            "size": Number(size),
            "serving": Number(serving),
            "price": Number(price),
            "category": category,
            "subCategoryId": Number(subCategory)
        }

        apiV1.post('products', formData).then(() => alert("Produto cadastrado com Sucesso!"));
        setTitle('');
        setDescription('');
        setPhoto('');
        setSize('');
        setServing('');
        setPrice('');
        setCategory('');
        setSubCategory('');
    }


    return (
        <>
            <Box>
                <Container maxWidth='lg' sx={{my: 2}}>
                    <Paper sx={{p: 2}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1}}>
                            <Typography variant="h6" component="h1">Formulário de Produtos</Typography>
                            <Box 
                                component="form" 
                                sx={{width: '100%', display: 'flex', flexDirection: 'column', gap: 2}}
                                onSubmit={submitForm}
                            >
                                <TextField 
                                    label="Nome do Produto"
                                    variant="standard"
                                    fullWidth
                                    margin="dense"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />

                                <TextField 
                                    label="Descrição do Produto"
                                    variant="standard"
                                    fullWidth
                                    margin="dense"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />

                                <TextField 
                                    label="Link da Imagem"
                                    variant="standard"
                                    fullWidth
                                    margin="dense"
                                    value={photo}
                                    onChange={(e) => setPhoto(e.target.value)}
                                    required
                                />

                                <TextField 
                                    label="Peso"
                                    variant="standard"
                                    fullWidth
                                    margin="dense"
                                    type="number"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">g</InputAdornment>,
                                      }}
                                    helperText="(Apenas números)"
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}
                                />
                                
                                <TextField 
                                    label="Serve"
                                    variant="standard"
                                    fullWidth
                                    margin="dense"
                                    type="number"
                                    helperText="(Quantidade de pessoas, apenas números)"
                                    inputProps={{min: "1", max: "10"}}
                                    value={serving}
                                    onChange={(e) => setServing(e.target.value)}
                                />

                                <FormControl 
                                    fullWidth 
                                    variant="standard" 
                                    required
                                >
                                    <InputLabel>Preço</InputLabel>
                                    <Input
                                        type="number"
                                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </FormControl>

                                <FormControl
                                    fullWidth
                                    variant="standard"
                                    required
                                >
                                    <InputLabel className="ml-3">Categoria</InputLabel>
                                    <Select
                                        defaultValue=""
                                        input={<OutlinedInput label="Categoria" />}
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        {categories.map(category => (
                                            <MenuItem 
                                                key={category.id}
                                                value={category.id}
                                            >
                                                {category.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl
                                    fullWidth
                                    variant="standard"
                                    required
                                >
                                    <InputLabel className="ml-3">Subcategoria</InputLabel>
                                    <Select
                                        defaultValue=""
                                        input={<OutlinedInput label="Subcategoria" />}
                                        value={subCategory}
                                        onChange={(e) => setSubCategory(e.target.value)}
                                    >
                                        {filteredOptions.map(subcategory => (
                                            <MenuItem 
                                                key={subcategory.id}
                                                value={subcategory.id}
                                            >
                                                {subcategory.title}
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
                    </Paper>
                </Container>
            </Box>
        </>
    )
}

export default AdminFormProdutos