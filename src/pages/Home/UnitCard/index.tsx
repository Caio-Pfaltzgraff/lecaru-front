interface Props {
  id: string
  title: string
  address: string
}

export function UnitCard({address, title} : Props) {
  return (
    <div className="border p-3 rounded-xl shadow-md space-y-1">
      <h5 className="font-title font-bold text-lecaru-gold text-lg">
        {title}
      </h5>
      <p>
        <b>Endereço:</b> {address}
      </p>
    </div>
  )
}