import { Box, Button, Container, FormControl, InputLabel, MenuItem, OutlinedInput, Paper, Select, TextField, Typography } from "@mui/material"
import categories from '../../../data/categoriesMenu.json';

const AdminFormSubCategories = () => {
    return (
        <>
            <Box>
                <Paper sx={{p: 2}}>
                    <Container maxWidth='lg' sx={{my: 2}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1}}>
                            <Typography variant="h6" component="h1">Formulário de SubCategorias</Typography>
                            <Box component="form" sx={{width: '100%', display: 'flex', flexDirection: 'column', gap: 2}}>
                                <TextField 
                                    label="Nome da SubCategoria"
                                    variant="standard"
                                    fullWidth
                                    margin="dense"
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