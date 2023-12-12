import { useState } from 'react';
import Button from '../../components/Button';
import history from '../../data/history.json'
import Title from '../../components/Title';
import values from '../../data/restaurantValues.json'
import Values from './Values';
import ItemDifferences from './ItemDifferences';

const Sobre = () => {
    const [exibeTudo, setExibeTudo] = useState(false)

    const toggleExibeTudo = () => {
        setExibeTudo(!exibeTudo)
    }
    const conteudo = exibeTudo ? history : history.slice(0, 2)
    return (
        <>
            <section className='mt-8'>
                <Title>Como Tudo Começou ?</Title>
                <div className='md:hidden'>
                    <div className='space-y-4'>
                        {conteudo.map((paragraph) => (
                            <p className='lg:text-lg border-l-4 pl-2 border-l-dourado' key={paragraph.id}>{paragraph.content}</p>
                        ))}
                    </div>
                    <div className='mt-4 flex justify-center'>
                        <Button component='button' aoClicar={toggleExibeTudo}>
                            {exibeTudo ? 'Fechar' : 'Mais'}
                        </Button>
                    </div>
                </div>

                <div className='hidden md:block'>
                    <div className='space-y-4'>
                        {history.map((paragraph) => (
                            <p className='text-sm md:text-base lg:text-lg md:border-l-4 md:pl-2 border-l-dourado' key={paragraph.id}>{paragraph.content}</p>
                        ))}
                    </div>
                </div>
            </section>
            <section className='mt-8'>
                <Title>Nossos valores e atitudes vão conquistar você:</Title>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5'>
                    {values.map((value) => (
                        <Values 
                            key={value.id}
                            title={value.title}
                            content={value.content}
                        />
                    ))}
                </div>
            </section>
            <section className='my-8'>
                <Title>Diferenciais</Title>
                
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5'>
                    <ItemDifferences>
                        Solução personalizada de serviços e cardápios para restaurantes empresariais.
                    </ItemDifferences>
                    <ItemDifferences>
                        Agilidade e adaptabilidade para mudanças e ajustes.
                    </ItemDifferences>
                    <ItemDifferences>
                        Processos de melhoria contínua com resultados efetivos e cases de sucesso.
                    </ItemDifferences>
                    <ItemDifferences>
                        Total responsabilidade sobre gestão da equipe e de todo o funcionamento do restaurante.
                    </ItemDifferences>
                    <ItemDifferences>
                        Alimentação saborosa, sem multiprocessados e preparada a partir de insumos saudáveis, com procedência confiável, garantindo bem-estar, saúde e produtividade após a refeição.
                    </ItemDifferences>
                    <ItemDifferences>
                        Foco em gestão de pessoas e processos, resultando em um ambiente de trabalho agradável e com equipe engajada.
                    </ItemDifferences>
                    <ItemDifferences>
                        Tabela de responsabilidades para trazer clareza e transparência à parceria.
                    </ItemDifferences>
                </div>
            </section>
        </>
    )
}

export default Sobre