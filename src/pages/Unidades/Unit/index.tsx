interface Props {
    title: string
    adress: string
    tell: string
}

const Unit = ({adress, tell, title} : Props) => {
    return (
            <div className="border rounded-lg p-2 shadow-lg">
                <h4 className="text-xl font-titulo font-bold text-dourado">{title}</h4>
                <div className="flex flex-col gap-4">
                    <p>
                        {adress}
                    </p>
                    <p>
                        {tell}
                    </p>
                    <div className="flex flex-col gap-2">
                        <p>
                            Horário de funcionamento:
                        </p>
                        <div>
                        <p><strong>Almoço</strong></p>
                        <p>Segunda a quinta-feira, das 11h às 15h</p>
                        <p>Sexta a Domingo e feriadaos, 11h às 16</p>
                        </div>

                        <div>
                        <p><strong>Jantar</strong></p>
                        <p>Segunda a quinta-feira, das 18h às 23h</p>
                        <p>Sexta a Domingo e feriadaos, 18h às 00h</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Unit