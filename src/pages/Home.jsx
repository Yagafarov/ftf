import React from "react";

export default function Home() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-6 font-serif text-primary leading-relaxed">
        Добро пожаловать в Факультет Технической Физики
      </h1>
      <p className="text-lg max-w-3xl mb-6 leading-relaxed text-textPrimary font-serif">
        Наш факультет предоставляет высококачественное техническое образование
        и проводит активную научно-исследовательскую деятельность.
        Здесь вы найдете информацию о программах обучения, научных проектах и
        внеклассной работе.
      </p>

      <button className="bg-primary px-6 py-3 rounded shadow hover:bg-secondary transition-colors duration-300 font-semibold">
        Подробнее
      </button>
    </section>
  );
}
