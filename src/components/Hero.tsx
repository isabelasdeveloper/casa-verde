import { Newsletter } from "./Newsletter";

export function Hero() {
  return (
    <section className="flex flex-col max-w-146.25 gap-6">
      <h3 className="font-text text-gray-400 text-[22px]">Sua casa com as</h3>
      <h1 className="font-title font-extrabold text-[82px] leading-none">
        melhores plantas
      </h1>
      <h4 className="font-text text-gray-400 text-[16px] max-w-120.25">
        Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
        torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e
        assine nossa newsletter para saber das novidades da marca.
      </h4>

      <Newsletter />
    </section>
  );
}
