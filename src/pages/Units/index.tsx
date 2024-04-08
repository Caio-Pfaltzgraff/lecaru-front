import { Title } from "../../components/title";

export function Units() {
  return (
    <div className="space-y-6 lg:space-y-8 mt-4">
      <section className="max-w-screen-xl mx-auto paddingPage">
        <Title>Rio de Janeiro</Title>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="border rounded-lg p-3 shadow-lg space-y-1" key={index}>
              <h3 className="text-xl text-lecaru-gold font-semibold font-title">Barra da Tijuca</h3>
              <div className="space-y-4">
                <p>Av. das Américas, 4666 - Barra da Tijuca, Rio de Janeiro - RJ, 22640-102</p>
                <p>(21) 99090-9090</p>

                <div className="space-y-2">
                  <p>Horário de funcionamento:</p>

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
          ))}
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto paddingPage">
        <Title>São Paulo</Title>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3  mt-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="border rounded-lg p-3 shadow-lg space-y-1" key={index}>
              <h3 className="text-xl text-lecaru-gold font-semibold font-title">Bela Vista</h3>
              <div className="space-y-4">
                <p>Av. Paulista, 1230 - Bela Vista, São Paulo - SP, 01310-100</p>
                <p>(11) 99393-9393</p>

                <div className="space-y-2">
                  <p>Horário de funcionamento:</p>

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
          ))}
        </div>
      </section>
    </div>
  )
}