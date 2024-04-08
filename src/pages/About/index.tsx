import { FaCheck } from "react-icons/fa";
import { Title } from "../../components/title";
import about from '../../data/about.json';
import differences from '../../data/differences.json';
import values from "../../data/restaurantValues.json";

export function About() {
  return (
    <div className="space-y-6 lg:space-y-8 mt-4">
      <section className="max-w-screen-xl mx-auto paddingPage">
        <Title>Como tudo começou?</Title>
        <div className="space-y-4 mt-4">
          {about.map((paragraph) => (
            <p key={paragraph.id} className="border-l-4 border-l-lecaru-gold pl-2">
              {paragraph.content}
            </p>
          ))}
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto paddingPage">
        <Title>Nossos valores e atitudes vão conquistar você:</Title>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-y-6 mt-4">
          {values.map((value) => (
            <div className="space-y-1" key={value.id}>
              <p className="text-lecaru-gold text-lg font-semibold">{value.title}</p>
              <p>{value.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto paddingPage">
        <Title>Diferenciais</Title>
        <div className="grid md:grid-cols-2  gap-6 mt-4">
          {differences.map((difference) => (
            <div className="flex gap-4 items-center" key={difference.id}>
              <i><FaCheck className="size-5 text-green-600"/></i>
              <p>{difference.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}