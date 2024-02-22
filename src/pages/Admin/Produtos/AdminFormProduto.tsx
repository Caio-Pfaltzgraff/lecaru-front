import { Box, Button, Container, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Paper, Select, TextField, Typography } from "@mui/material";
import FormHelperText from '@mui/material/FormHelperText';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import categories from '../../../data/categoriesMenu.json';
import apiV1 from "../../../http";
import IError from "../../../interfaces/IError";
import IProduct from "../../../interfaces/IProduct";
import ISubCategory from "../../../interfaces/ISubCategory";

const AdminFormProdutos = () => {
    const [filteredOptions, setFilteredOptions] = useState<ISubCategory[]>([]);
    const params = useParams();
    const [category, setCategory] = useState<string>('');  
    const [errorsCategory, setErrorsCategory] = useState<IError>({error: false, message: ''});
    const [title, setTitle] = useState<string>('');  
    const [errorsTitle, setErrorsTitle] = useState<IError>({error: false, message: ''});
    const [description, setDescription] = useState<string>('');  
    const [photo, setPhoto] = useState<string>('');  
    const [errorsPhoto, setErrorsPhoto] = useState<IError>({error: false, message: ''});
    const [size, setSize] = useState<string>('');  
    const [serving, setServing] = useState<string>('');  
    const [price, setPrice] = useState<string>('');  
    const [errorsPrice, setErrorsPrice] = useState<IError>({error: false, message: ''});
    const [subCategory, setSubCategory] = useState<string>('');
    const [errorsSubCategory, setErrorsSubCategory] = useState<IError>({error: false, message: ''});
    const [listSubcategories, setListSubcategories] = useState<ISubCategory[]>([]);

    useEffect(() => {
        apiV1.get<ISubCategory[]>('subcategories').then((response) => setListSubcategories(response.data));
    }, [])

    useEffect(() => {
        if(params.id) {
            apiV1.get<IProduct>(`products/${params.id}`).then((response) => {
                setTitle(response.data.title);
                setDescription(response.data.description);
                setPhoto(response.data.photo);
                setSize(String(response.data.size));
                setServing(String(response.data.serving));
                setPrice(String(response.data.price));
                setCategory(String(response.data.subCategory.categoryId));
                setSubCategory(String(response.data.subCategory.id));
            })
        } else {
            setTitle('');
            setDescription('');
            setPhoto('');
            setSize('');
            setServing('');
            setPrice('');
            setCategory('');
            setSubCategory('');
        }
    }, [params])

    useEffect(() => {
        const subCategoriesFiltered = listSubcategories.filter(subcategory => subcategory.categoryId === Number(category))
        setFilteredOptions(subCategoriesFiltered);
    }, [category, listSubcategories])

    function validateForm() {
        // resetar caso já tenha tido erros
        setErrorsTitle({error: false, message: ''})
        setErrorsPhoto({error: false, message: ''})
        setErrorsPrice({error: false, message: ''})
        setErrorsCategory({error: false, message: ''})
        setErrorsSubCategory({error: false, message: ''})
        
        // validar title
        if(title.length === 0) {
            setErrorsTitle({error: true, message: 'O campo é obrigatório'})
            return false;
        } else if(title.length < 3) {
            setErrorsTitle({error: true, message: 'O nome deve possuir 3 caracteres ou mais'})
            return false;
        }

        //validar photo
        if(photo.length === 0) {
            setErrorsPhoto({error: true, message: 'O campo é obrigatório'})
            return false;
        }

        // validar preço
        if(price.length === 0) {
            setErrorsPrice({error: true, message: 'O campo é obrigatório'})
            return false;
        }

        // validar category
        if(category.length === 0) {
            setErrorsCategory({error: true, message: 'O campo é obrigatório'});
            return false;
        }
        
        //validar subcategory
        if(subCategory.length === 0) {
            setErrorsSubCategory({error: true, message: 'O campo é obrigatório'});
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
        const categoryName = categories.find(c => c.id === Number(category))?.name;
        console.log(categoryName)

        const formData = {
            "title": title,
            "description": description,
            "photo": photo,
            "size": Number(size),
            "serving": Number(serving),
            "price": Number(price),
            "category": categoryName,
            "subCategoryId": Number(subCategory)
        }
        console.log(formData)
        console.log(params.id)
        if(params.id) {
            apiV1.put(`products/${params.id}`, formData) // Bug spring boot
            apiV1.put(`products/${params.id}`, formData).then(() => toast.success("Produto atualizado com Sucesso!"));
        } else {
            apiV1.post('products', formData).then(() => toast.success("Produto cadastrado com Sucesso!"));
            setTitle('');
            setDescription('');
            setPhoto('');
            setSize('');
            setServing('');
            setPrice('');
            setCategory('');
            setSubCategory('');
        }
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
                                    label="Nome do Produto *"
                                    variant="standard"
                                    fullWidth
                                    margin="dense"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    error={errorsTitle.error}
                                    helperText={errorsTitle.error && errorsTitle.message}
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
                                    label="Link da Imagem *"
                                    variant="standard"
                                    fullWidth
                                    margin="dense"
                                    value={photo}
                                    onChange={(e) => setPhoto(e.target.value)}
                                    error={errorsPhoto.error}
                                    helperText={errorsPhoto.error && errorsPhoto.message}
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

                                <TextField 
                                    fullWidth 
                                    label="Preço *"
                                    variant="standard"
                                    type="number"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                                    }}
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    error={errorsPrice.error}
                                    helperText={errorsPrice.error && errorsPrice.message}
                                />

                                <FormControl
                                    fullWidth
                                    variant="standard"
                                    error={errorsCategory.error}
                                >
                                    <InputLabel className="ml-3">Categoria *</InputLabel>
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
                                    {errorsCategory.error && <FormHelperText>{errorsCategory.message}</FormHelperText>}
                                </FormControl>

                                <FormControl
                                    fullWidth
                                    variant="standard"
                                    error={errorsSubCategory.error}
                                >
                                    <InputLabel className="ml-3">Subcategoria *</InputLabel>
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
                                    {errorsSubCategory.error && <FormHelperText>{errorsSubCategory.message}</FormHelperText>}
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