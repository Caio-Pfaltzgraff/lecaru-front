import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import apiV1 from "../../../http";
import IError from "../../../interfaces/IError";
import IRestaurant from "../../../interfaces/IRestaurant";

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
    const params = useParams();
    const [lunchOpenWeekdays, setLunchOpenWeekdays] = useState<string>('');
    const [errorLunchOpenWeekdays, setErrorLunchOpenWeekdays] = useState<IError>({error: false, message: ''});
    const [lunchCloseWeekdays, setLunchCloseWeekdays] = useState<string>('');
    const [errorLunchCloseWeekdays, setErrorLunchCloseWeekdays] = useState<IError>({error: false, message: ''});
    const [dinnerOpenWeekdays, setDinnerOpenWeekdays] = useState<string>('');
    const [errorDinnerOpenWeekdays, setErrorDinnerOpenWeekdays] = useState<IError>({error: false, message: ''});
    const [dinnerCloseWeekdays, setDinnerCloseWeekdays] = useState<string>('');
    const [errorDinnerCloseWeekdays, setErrorDinnerCloseWeekdays] = useState<IError>({error: false, message: ''});
    const [lunchOpenWeekends, setLunchOpenWeekends] = useState<string>('');
    const [errorLunchOpenWeekends, setErrorLunchOpenWeekends] = useState<IError>({error: false, message: ''});
    const [lunchCloseWeekends, setLunchCloseWeekends] = useState<string>('');
    const [errorLunchCloseWeekends, setErrorLunchCloseWeekends] = useState<IError>({error: false, message: ''});
    const [dinnerOpenWeekends, setDinnerOpenWeekends] = useState<string>('');
    const [errorDinnerOpenWeekends, setErrorDinnerOpenWeekends] = useState<IError>({error: false, message: ''});
    const [dinnerCloseWeekends, setDinnerCloseWeekends] = useState<string>('');
    const [errorDinnerCloseWeekends, setErrorDinnerCloseWeekends] = useState<IError>({error: false, message: ''});
    const [cep, setCep] = useState<string>('');
    const [errorCep, setErrorCep] = useState<IError>({error: false, message: ''});
    const [logradouro, setLogradouro] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [errorNumber, setErrorNumber] = useState<IError>({error: false, message: ''});
    const [bairro, setBairro] = useState<string>('');
    const [localidade, setLocalidade] = useState<string>('');
    const [uf, setUf] = useState<string>('');
    const [ddd, setDdd] = useState<string>('');
    const [telephone, setTelephone] = useState<string>('');
    const [errorTelephone, setErrorTelephone] = useState<IError>({error: false, message: ''});

    useEffect(() => {
        if(params.id) {
            apiV1.get<IRestaurant>(`restaurants/${params.id}`).then((response) => {
                setLunchOpenWeekdays(response.data.lunchOpenWeekdays);
                setLunchCloseWeekdays(response.data.lunchCloseWeekdays);
                setLunchOpenWeekends(response.data.lunchOpenWeekends);
                setLunchCloseWeekends(response.data.lunchCloseWeekends);
                setDinnerOpenWeekdays(response.data.dinnerOpenWeekdays);
                setDinnerCloseWeekdays(response.data.dinnerCloseWeekdays);
                setDinnerOpenWeekends(response.data.dinnerOpenWeekends);
                setDinnerCloseWeekends(response.data.dinnerCloseWeekends);
                setTelephone(response.data.telephone);
                setCep(response.data.address.cep);
                setLogradouro(response.data.address.logradouro);
                setNumber(String(response.data.address.number));
                setBairro(response.data.address.bairro);
                setLocalidade(response.data.address.localidade);
                setUf(response.data.address.uf);
                setDdd(response.data.address.ddd);
            })
        } else {
            setLunchOpenWeekdays('');
            setLunchCloseWeekdays('');
            setDinnerOpenWeekdays('');
            setDinnerCloseWeekdays('');
            setLunchOpenWeekends('');
            setLunchCloseWeekends('');
            setDinnerOpenWeekends('');
            setDinnerCloseWeekends('');
            setCep('');
            setLogradouro('');
            setNumber('');
            setBairro('');
            setLocalidade('');
            setDdd('');
            setUf('');
            setTelephone('');
        }
    }, [params])

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

    function validateForm() {
        setErrorLunchOpenWeekdays({error: false, message: ''})
        setErrorLunchCloseWeekdays({error: false, message: ''})
        setErrorDinnerOpenWeekdays({error: false, message: ''})
        setErrorDinnerCloseWeekdays({error: false, message: ''})
        setErrorLunchOpenWeekends({error: false, message: ''})
        setErrorLunchCloseWeekends({error: false, message: ''})
        setErrorDinnerOpenWeekends({error: false, message: ''})
        setErrorDinnerCloseWeekends({error: false, message: ''})
        setErrorCep({error: false, message: ''})
        setErrorNumber({error: false, message: ''})
        setErrorTelephone({error: false, message: ''})

        if(lunchOpenWeekdays.length < 5) {
            setErrorLunchOpenWeekdays({error: true, message: 'Campo obrigatório!'});
            return false;
        }

        if (lunchCloseWeekdays.length < 5) {
            setErrorLunchCloseWeekdays({error: true, message: 'Campo obrigatório!'});
            return false;
        }
    
        if (dinnerOpenWeekdays.length < 5) {
            setErrorDinnerOpenWeekdays({error: true, message: 'Campo obrigatório!'});
            return false;
        }
    
        if (dinnerCloseWeekdays.length < 5) {
            setErrorDinnerCloseWeekdays({error: true, message: 'Campo obrigatório!'});
            return false;
        }
    
        if (lunchOpenWeekends.length < 5) {
            setErrorLunchOpenWeekends({error: true, message: 'Campo obrigatório!'});
            return false;
        }
    
        if (lunchCloseWeekends.length < 5) {
            setErrorLunchCloseWeekends({error: true, message: 'Campo obrigatório!'});
            return false;
        }
    
        if (dinnerOpenWeekends.length < 5) {
            setErrorDinnerOpenWeekends({error: true, message: 'Campo obrigatório!'});
            return false;
        }
    
        if (dinnerCloseWeekends.length < 5) {
            setErrorDinnerCloseWeekends({error: true, message: 'Campo obrigatório!'});
            return false;
        }

        if(cep.length === 0) {
            setErrorCep({error: true, message: 'Campo obrigatório!'});
            return false;
        } else if(cep.length < 8 || uf.length === 0) {
            setErrorCep({error: true, message: 'Digite um cep válido'});
            return false;
        }

        if(number.length === 0) {
            setErrorNumber({error: true, message: 'Campo obrigatório!'});
            return false;
        } else if(Number.isNaN(Number(number))) {
            setErrorNumber({error: true, message: 'Apenas números'});
            return false;
        }

        if(telephone.length === 0) {
            setErrorTelephone({error: true, message: 'Campo obrigatório!'});
            return false;
        } else if(telephone.length < 8 || Number.isNaN(Number(telephone))) {
            setErrorTelephone({error: true, message: 'Digite um número válido'});
            return false;
        }

        return true;
    }

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const cepReplaced = cep.replace("-", "")
        const cepFormated = cepReplaced.slice(0, 5) + '-' + cepReplaced.slice(5)
        const phoneFormated = `${telephone.replace("-", "").slice(0, 5)}-${telephone.replace("-", "").slice(5)}`
        const isLocalidadeRjOrSp = (localidade.toLowerCase() === 'rio de janeiro' || localidade.toLowerCase() === 'são paulo') ? true : false

        if(!validateForm()) {
            toast.error("Preencha o formulário corretamente!")
            return;
        }

        const formData = {
            "title": isLocalidadeRjOrSp ? bairro : localidade,
            "lunchOpenWeekdays": lunchOpenWeekdays,
            "lunchCloseWeekdays": lunchCloseWeekdays,
            "lunchOpenWeekends": lunchOpenWeekends,
            "lunchCloseWeekends": lunchCloseWeekends,
            "dinnerOpenWeekdays": dinnerOpenWeekdays,
            "dinnerCloseWeekdays": dinnerCloseWeekdays,
            "dinnerOpenWeekends": dinnerOpenWeekends,
            "dinnerCloseWeekends": dinnerCloseWeekends,
            "telephone": phoneFormated,
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
        
        if (params.id) {
            apiV1.put(`restaurants/${params.id}`, formData); // Bug spring boot
            apiV1.put(`restaurants/${params.id}`, formData).then(() => toast.success("Restaurante atualizado com sucesso!"));
        } else {
            apiV1.post('restaurants', formData).then(() => toast.success("Restaurante cadastrado com sucesso!"));
            setLunchOpenWeekdays('');
            setLunchCloseWeekdays('');
            setDinnerOpenWeekdays('');
            setDinnerCloseWeekdays('');
            setLunchOpenWeekends('');
            setLunchCloseWeekends('');
            setDinnerOpenWeekends('');
            setDinnerCloseWeekends('');
            setCep('');
            setLogradouro('');
            setNumber('');
            setBairro('');
            setLocalidade('');
            setDdd('');
            setUf('');
            setTelephone('');
        }
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
                                                <label htmlFor="lunchOpenWeekdays" className={`${errorLunchOpenWeekdays.error && 'text-red-500'}`}>
                                                    Abre
                                                </label>
                                                <input 
                                                    type="time"
                                                    name="lunchOpenWeekdays"
                                                    id="lunchOpenWeekdays"
                                                    value={lunchOpenWeekdays}
                                                    onChange={(e) => setLunchOpenWeekdays(e.target.value)}
                                                    className={`border h-10 p-1 rounded-lg sm:w-28 ${errorLunchOpenWeekdays.error && 'border-red-600'}`}
                                                />
                                                {errorLunchOpenWeekdays.error && 
                                                    <small className="text-red-500 text-[10px]">{errorLunchOpenWeekdays.message}</small>
                                                }
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="lunchCloseWeekdays" className={`${errorLunchCloseWeekdays.error && 'text-red-500'}`}>
                                                    Fecha
                                                </label>
                                                <input 
                                                    type="time"
                                                    name="lunchCloseWeekdays"
                                                    id="lunchCloseWeekdays"
                                                    value={lunchCloseWeekdays}
                                                    onChange={(e) => setLunchCloseWeekdays(e.target.value)}
                                                    className={`border h-10 p-1 rounded-lg sm:w-28 ${errorLunchCloseWeekdays.error && 'border-red-600'}`} 
                                                />
                                                {errorLunchCloseWeekdays.error && 
                                                    <small className="text-red-500 text-[10px]">{errorLunchCloseWeekdays.message}</small>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-center sm:text-start">Horario de Jantar nos dias de semana</p>
                                        <div className="flex items-center gap-3 sm:gap-6 justify-center sm:justify-normal">
                                            <div className="flex flex-col">
                                                <label htmlFor="dinnerOpenWeekdays" className={`${errorDinnerOpenWeekdays.error && 'text-red-500'}`}>
                                                    Abre
                                                </label>
                                                <input 
                                                    type="time"
                                                    name="dinnerOpenWeekdays"
                                                    id="dinnerOpenWeekdays"
                                                    value={dinnerOpenWeekdays}
                                                    onChange={(e) => setDinnerOpenWeekdays(e.target.value)}
                                                    className={`border h-10 p-1 rounded-lg sm:w-28 ${errorDinnerOpenWeekdays.error && 'border-red-600'}`} 
                                                />
                                                {errorDinnerOpenWeekdays.error && 
                                                    <small className="text-red-500 text-[10px]">{errorDinnerOpenWeekdays.message}</small>
                                                }
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="dinnerCloseWeekdays" className={`${errorDinnerCloseWeekdays.error && 'text-red-500'}`}>
                                                    Fecha
                                                </label>
                                                <input 
                                                    type="time"
                                                    name="dinnerCloseWeekdays"
                                                    id="dinnerCloseWeekdays"
                                                    value={dinnerCloseWeekdays}
                                                    onChange={(e) => setDinnerCloseWeekdays(e.target.value)}
                                                    className={`border h-10 p-1 rounded-lg sm:w-28 ${errorDinnerCloseWeekdays.error && 'border-red-600'}`} 
                                                />
                                                {errorDinnerCloseWeekdays.error && 
                                                    <small className="text-red-500 text-[10px]">{errorDinnerCloseWeekdays.message}</small>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-center sm:text-start">Horario de almoço nos finais de semana e feriados</p>
                                        <div className="flex items-center gap-3 sm:gap-6 justify-center sm:justify-normal">
                                            <div className="flex flex-col">
                                                <label htmlFor="lunchOpenWeekends" className={`${errorLunchOpenWeekends.error && 'text-red-500'}`}>
                                                    Abre
                                                </label>
                                                <input 
                                                    type="time"
                                                    name="lunchOpenWeekends"
                                                    id="lunchOpenWeekends"
                                                    value={lunchOpenWeekends}
                                                    onChange={(e) => setLunchOpenWeekends(e.target.value)}
                                                    className={`border h-10 p-1 rounded-lg sm:w-28 ${errorLunchOpenWeekends.error && 'border-red-600'}`} 
                                                />
                                                {errorLunchOpenWeekends.error && 
                                                    <small className="text-red-500 text-[10px]">{errorLunchOpenWeekends.message}</small>
                                                }
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="lunchCloseWeekends" className={`${errorLunchCloseWeekends.error && 'text-red-500'}`}>
                                                    Fecha
                                                </label>
                                                <input 
                                                    type="time"
                                                    name="lunchCloseWeekends"
                                                    id="lunchCloseWeekends"
                                                    value={lunchCloseWeekends}
                                                    onChange={(e) => setLunchCloseWeekends(e.target.value)}
                                                    className={`border h-10 p-1 rounded-lg sm:w-28 ${errorLunchCloseWeekends.error && 'border-red-600'}`} 
                                                />
                                                {errorLunchCloseWeekends.error && 
                                                    <small className="text-red-500 text-[10px]">{errorLunchCloseWeekends.message}</small>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-center sm:text-start">Horario de jantar nos finais de semana e feriados</p>
                                        <div className="flex items-center gap-3 sm:gap-6 justify-center sm:justify-normal">
                                            <div className="flex flex-col">
                                                <label htmlFor="dinnerOpenWeekends" className={`${errorDinnerOpenWeekends.error && 'text-red-500'}`}>
                                                    Abre
                                                </label>
                                                <input 
                                                    type="time"
                                                    name="dinnerOpenWeekends"
                                                    id="dinnerOpenWeekends"
                                                    value={dinnerOpenWeekends}
                                                    onChange={(e) => setDinnerOpenWeekends(e.target.value)}
                                                    className={`border h-10 p-1 rounded-lg sm:w-28 ${errorDinnerOpenWeekends.error && 'border-red-600'}`} 
                                                />
                                                {errorDinnerOpenWeekends.error && 
                                                    <small className="text-red-500 text-[10px]">{errorDinnerOpenWeekends.message}</small>
                                                }
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="dinnerCloseWeekends" className={`${errorDinnerCloseWeekends.error && 'text-red-500'}`}>
                                                    Fecha
                                                </label>
                                                <input 
                                                    type="time"
                                                    name="dinnerCloseWeekends"
                                                    id="dinnerCloseWeekends"
                                                    value={dinnerCloseWeekends}
                                                    onChange={(e) => setDinnerCloseWeekends(e.target.value)}
                                                    className={`border h-10 p-1 rounded-lg sm:w-28 ${errorDinnerCloseWeekends.error && 'border-red-600'}`} 
                                                />
                                                {errorDinnerCloseWeekends.error && 
                                                    <small className="text-red-500 text-[10px]">{errorDinnerCloseWeekends.message}</small>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-3 md:grid-cols-2">
                                    <TextField 
                                        label="Cep"
                                        value={cep}
                                        name="cep"
                                        onChange={findAddress}
                                        variant="standard"
                                        margin="dense"
                                        error={errorCep.error}
                                        helperText={errorCep.error && errorCep.message}
                                    />
                                   <div className="md:mt-2">
                                        <TextField 
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
                                        variant="standard"
                                        label="Número"
                                        name="number"
                                        type="number"
                                        value={number}
                                        onChange={(e) => setNumber(e.target.value)}
                                        error={errorNumber.error}
                                        helperText={errorNumber.error && errorNumber.message}
                                    />
                                    <TextField 
                                        variant="standard"
                                        label="Bairro"
                                        name="bairro"
                                        value={bairro}
                                        onChange={(e) => setBairro(e.target.value)}
                                        disabled={cep.length > 7}
                                    />
                                    <TextField 
                                        variant="standard"
                                        label="Cidade"
                                        name="localidade"
                                        value={localidade}
                                        onChange={(e) => setLocalidade(e.target.value)}
                                        disabled={cep.length > 7}
                                    />

                                    <TextField 
                                        variant="standard"
                                        label='Telefone'
                                        name="telephone"
                                        value={telephone}
                                        onChange={(e) => setTelephone(e.target.value)}
                                        id="telephone"
                                        error={errorTelephone.error}
                                        helperText={errorTelephone.error ? errorTelephone.message : '(Sem o ddd)'}
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