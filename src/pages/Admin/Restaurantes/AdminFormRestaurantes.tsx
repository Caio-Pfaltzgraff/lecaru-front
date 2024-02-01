import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

type AddresApi = {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}

const AdminFormRestaurantes = () => {
    const [lunchOpenWeekdays, setLunchOpenWeekdays] = useState<string>('');
    const [lunchCloseWeekdays, setLunchCloseWeekdays] = useState<string>('');
    const [dinnerOpenWeekdays, setDinnerOpenWeekdays] = useState<string>('');
    const [dinnerCloseWeekdays, setDinnerCloseWeekdays] = useState<string>('');
    const [lunchOpenWeekends, setLunchOpenWeekends] = useState<string>('');
    const [lunchCloseWeekends, setLunchCloseWeekends] = useState<string>('');
    const [dinnerOpenWeekends, setDinnerOpenWeekends] = useState<string>('');
    const [dinnerCloseWeekends, setDinnerCloseWeekends] = useState<string>('');
    const [cep, setCep] = useState<string>('');
    const [logradouro, setLogradouro] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [bairro, setBairro] = useState<string>('');
    const [localidade, setLocalidade] = useState<string>('');
    const [uf, setUf] = useState<string>('');
    const [ddd, setDdd] = useState<string>('');
    const [telephone, setTelephone] = useState<string>('');


    const findAddress = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const cepFormated = event.target.value.replace('-', '')
        setCep(event.target.value);

        if(cepFormated.length === 8) {
            const response = await axios.get<AddresApi>(`https://viacep.com.br/ws/${cepFormated}/json/`);
            setLogradouro(response.data.logradouro)
            setBairro(response.data.bairro)
            setLocalidade(response.data.localidade)
            setDdd(response.data.ddd)
            setUf(response.data.uf)
        }
    }

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const cepReplaced = cep.replace("-", "")
        const cepFormated = cepReplaced.slice(0, 5) + '-' + cepReplaced.slice(5)
        const phoneWithAreaCode = `(${ddd}) ${telephone.replace("-", "").slice(0, 5)}-${telephone.replace("-", "").slice(5)}`

        const formData = {
            "title": localidade,
            "lunchOpenWeekdays": lunchOpenWeekdays,
            "lunchCloseWeekdays": lunchCloseWeekdays,
            "lunchOpenWeekends": lunchOpenWeekends,
            "lunchCloseWeekends": lunchCloseWeekends,
            "dinnerOpenWeekdays": dinnerOpenWeekdays,
            "dinnerCloseWeekdays": dinnerCloseWeekdays,
            "dinnerOpenWeekends": dinnerOpenWeekends,
            "dinnerCloseWeekends": dinnerCloseWeekends,
            "telephone": phoneWithAreaCode,
            "address": {
                "cep": cepFormated,
                "logradouro": logradouro,
                "bairro": bairro,
                "localidade": localidade,
                "uf": uf,
                "ddd": ddd,
                "number": Number(number)
            }
        }
        console.log(formData)
        setLunchOpenWeekdays('')
        setLunchCloseWeekdays('')
        setDinnerOpenWeekdays('')
        setDinnerCloseWeekdays('')
        setLunchOpenWeekends('')
        setLunchCloseWeekends('')
        setDinnerOpenWeekends('')
        setDinnerCloseWeekends('')
        setCep('')
        setLogradouro('')
        setNumber('')
        setBairro('')
        setLocalidade('')
        setDdd('')
        setUf('')
        setTelephone('')
    }

    return (
        <>
            <Box>
                <Container maxWidth='lg' sx={{my: 2}} >
                    <Paper sx={{p: 2}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1}}>
                            <Typography variant="h6" component="h1">Formulário de Restaurante</Typography>
                            <Box 
                                component="form" 
                                onSubmit={submitForm}
                                sx={{width: '100%', display: 'flex', flexDirection: 'column', gap: 2, mt: 2}}
                            >
                                <div className="grid sm:grid-cols-2  gap-4">
                                    <div>
                                        <p className="text-center sm:text-start">Horario de almoço nos dias de semana</p>
                                        <div className="flex items-center gap-3 sm:gap-6 justify-center sm:justify-normal">
                                            <div className="flex flex-col">
                                                <label htmlFor="lunchOpenWeekdays">
                                                    Abre
                                                </label>
                                                <input
                                                    required 
                                                    type="time"
                                                    name="lunchOpenWeekdays"
                                                    id="lunchOpenWeekdays"
                                                    value={lunchOpenWeekdays}
                                                    onChange={(e) => setLunchOpenWeekdays(e.target.value)}
                                                    className="border h-10 p-1 rounded-lg sm:w-28" 
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="lunchCloseWeekdays">
                                                    Fecha
                                                </label>
                                                <input
                                                    required 
                                                    type="time"
                                                    name="lunchCloseWeekdays"
                                                    id="lunchCloseWeekdays"
                                                    value={lunchCloseWeekdays}
                                                    onChange={(e) => setLunchCloseWeekdays(e.target.value)}
                                                    className="border h-10 p-1 rounded-lg sm:w-28" 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-center sm:text-start">Horario de Jantar nos dias de semana</p>
                                        <div className="flex items-center gap-3 sm:gap-6 justify-center sm:justify-normal">
                                            <div className="flex flex-col">
                                                <label htmlFor="dinnerOpenWeekdays">
                                                    Abre
                                                </label>
                                                <input
                                                    required 
                                                    type="time"
                                                    name="dinnerOpenWeekdays"
                                                    id="dinnerOpenWeekdays"
                                                    value={dinnerOpenWeekdays}
                                                    onChange={(e) => setDinnerOpenWeekdays(e.target.value)}
                                                    className="border h-10 p-1 rounded-lg sm:w-28" 
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="dinnerCloseWeekdays">
                                                    Fecha
                                                </label>
                                                <input
                                                    required 
                                                    type="time"
                                                    name="dinnerCloseWeekdays"
                                                    id="dinnerCloseWeekdays"
                                                    value={dinnerCloseWeekdays}
                                                    onChange={(e) => setDinnerCloseWeekdays(e.target.value)}
                                                    className="border h-10 p-1 rounded-lg sm:w-28" 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-center sm:text-start">Horario de almoço nos finais de semana e feriados</p>
                                        <div className="flex items-center gap-3 sm:gap-6 justify-center sm:justify-normal">
                                            <div className="flex flex-col">
                                                <label htmlFor="lunchOpenWeekends">
                                                    Abre
                                                </label>
                                                <input
                                                    required 
                                                    type="time"
                                                    name="lunchOpenWeekends"
                                                    id="lunchOpenWeekends"
                                                    value={lunchOpenWeekends}
                                                    onChange={(e) => setLunchOpenWeekends(e.target.value)}
                                                    className="border h-10 p-1 rounded-lg sm:w-28" 
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="lunchCloseWeekends">
                                                    Fecha
                                                </label>
                                                <input
                                                    required 
                                                    type="time"
                                                    name="lunchCloseWeekends"
                                                    id="lunchCloseWeekends"
                                                    value={lunchCloseWeekends}
                                                    onChange={(e) => setLunchCloseWeekends(e.target.value)}
                                                    className="border h-10 p-1 rounded-lg sm:w-28" 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-center sm:text-start">Horario de jantar nos finais de semana e feriados</p>
                                        <div className="flex items-center gap-3 sm:gap-6 justify-center sm:justify-normal">
                                            <div className="flex flex-col">
                                                <label htmlFor="dinnerOpenWeekends">
                                                    Abre
                                                </label>
                                                <input
                                                    required 
                                                    type="time"
                                                    name="dinnerOpenWeekends"
                                                    id="dinnerOpenWeekends"
                                                    value={dinnerOpenWeekends}
                                                    onChange={(e) => setDinnerOpenWeekends(e.target.value)}
                                                    className="border h-10 p-1 rounded-lg sm:w-28" 
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="dinnerCloseWeekends">
                                                    Fecha
                                                </label>
                                                <input
                                                    required 
                                                    type="time"
                                                    name="dinnerCloseWeekends"
                                                    id="dinnerCloseWeekends"
                                                    value={dinnerCloseWeekends}
                                                    onChange={(e) => setDinnerCloseWeekends(e.target.value)}
                                                    className="border h-10 p-1 rounded-lg sm:w-28" 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-3 md:grid-cols-2">
                                    <TextField 
                                        required
                                        label="Cep"
                                        value={cep}
                                        name="cep"
                                        onChange={findAddress}
                                        variant="standard"
                                        margin="dense"
                                    />
                                   <div className="md:mt-2">
                                        <TextField 
                                            required
                                            fullWidth
                                            variant="standard"
                                            label="Logradouro"
                                            name="logradouro"
                                            value={logradouro}
                                            onChange={(e) => setLogradouro(e.target.value)}
                                            disabled={cep.length > 7}
                                        />
                                   </div>
                                    <TextField 
                                        required
                                        variant="standard"
                                        label="Número"
                                        name="number"
                                        type="number"
                                        value={number}
                                        onChange={(e) => setNumber(e.target.value)}
                                    />
                                    <TextField 
                                        required
                                        variant="standard"
                                        label="Bairro"
                                        name="bairro"
                                        value={bairro}
                                        onChange={(e) => setBairro(e.target.value)}
                                        disabled={cep.length > 7}
                                    />
                                    <TextField 
                                        required
                                        variant="standard"
                                        label="Cidade"
                                        name="localidade"
                                        value={localidade}
                                        onChange={(e) => setLocalidade(e.target.value)}
                                        disabled={cep.length > 7}
                                    />

                                    <TextField 
                                        required
                                        variant="standard"
                                        label='Telefone'
                                        name="telephone"
                                        value={telephone}
                                        onChange={(e) => setTelephone(e.target.value)}
                                        id="telephone"
                                        helperText="(apenas números, sem o ddd)"
                                    />
                                    <input 
                                        className="hidden" 
                                        name="uf" 
                                        value={uf}
                                        onChange={(e) => setUf(e.target.value)}
                                    />
                                    <input 
                                        className="hidden" 
                                        name="ddd" 
                                        value={ddd}
                                        onChange={(e) => setDdd(e.target.value)}
                                    />
                                    
                                </div>

                                <Button 
                                    sx={{mt: 2}}
                                    variant="outlined"
                                    type="submit"
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

export default AdminFormRestaurantes