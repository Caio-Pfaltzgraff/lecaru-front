const Quality = () => {
  return (
        <section className="flex justify-between gap-2 m-3 lg:m-5">
            <div className="flex flex-col lg:flex-row gap-3 justify-center items-center">
                <div>
                    <img className="w-18 lg:w-20 xl:w-24" src="/src/assets/restaurant_icon.png" alt="Icone de restaurante"/>
                </div>
                <div className="text-center text-sm md:text-base xl:text-lg font-titulo font-semibold box-border">
                    <p>A Melhor Atmosfera</p>
                </div>
            </div>
            <div className="flex flex-col gap-3 lg:flex-row justify-center items-center">
                <div>
                    <img className="w-18 lg:w-20 xl:w-24" src="/src/assets/restaurant_icon2.png" alt="Icone de restaurante"/>
                </div>
                <div className="text-center text-sm md:text-base xl:text-lg font-titulo font-semibold box-border">
                    <p>Ingredientes de Alta Qualidade</p>
                </div>
            </div>
            <div className="flex flex-col gap-3 lg:flex-row justify-center items-center">
                <div>
                    <img className="w-18 lg:w-20 xl:w-24" src="/src/assets/restaurant_icon3.png" alt="Icone de restaurante"/>
                </div>
                <div className="text-center text-sm md:text-base xl:text-lg font-titulo font-semibold box-border">
                    <p>Sabor Incomparável</p>
                </div>
            </div>
        </section>
  )
}

export default Quality
