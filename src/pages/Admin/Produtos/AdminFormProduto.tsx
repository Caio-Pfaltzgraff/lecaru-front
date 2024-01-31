import { Box, Button, Container, FormControl, Input, InputAdornment, InputLabel, MenuItem, OutlinedInput, Paper, Select, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import categories from '../../../data/categoriesMenu.json';
import subcategories from '../../../data/subcategoriesMenu.json';
import ISubCategory from "../../../interfaces/ISubCategory";

const AdminFormProdutos = () => {
    const [filteredOptions, setFilteredOptions] = useState<ISubCategory[]>([])
    const [category, setCategory] = useState<string>('');    

    useEffect(() => {
        const subCategoriesFiltered = subcategories.filter(subcategory => subcategory.category === Number(category))
        setFilteredOptions(subCategoriesFiltered);
    }, [category])


    return (
        <>
            <Box>
                <Container maxWidth='lg' sx={{my: 2}}>
                    <Paper sx={{p: 2}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1}}>
                            <Typography variant="h6" component="h1">Formulário de Produtos</Typography>
                            <Box component="form" sx={{width: '100%', display: 'flex', flexDirection: 'column', gap: 2}}>
                                <TextField 
                                    label="Nome do Produto"
                                    variant="standard"
                                    fullWidth
                                    margin="dense"
                                    required
                                />

                                <TextField 
                                    label="Descrição do Produto"
                                    variant="standard"
                                    fullWidth
                                    margin="dense"
                                />

                                <TextField 
                                    label="Link da Imagem"
                                    variant="standard"
                                    fullWidth
                                    margin="dense"
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
                                />
                                
                                <TextField 
                                    label="Serve"
                                    variant="standard"
                                    fullWidth
                                    margin="dense"
                                    type="number"
                                    helperText="(Quantidade de pessoas, apenas números)"
                                    inputProps={{min: "1", max: "10"}}
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
                                    >
                                        {filteredOptions.map(subcategory => (
                                            <MenuItem 
                                                key={subcategory.id}
                                                value={subcategory.id}
                                            >
                                                {subcategory.name}
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