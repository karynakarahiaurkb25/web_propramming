export default function Header() {
  return (
    <header className="p-6">
      <h1 className="text-3xl font-bold text-[#2c2214] mb-1">
        Карагяур Карина
      </h1>
      <p className="text-[#6d5b45] text-base">
        Студентка кафедри кібербезпеки та захисту інформації
      </p>

      <section 
        id="contacts" 
        className="mt-4 bg-[#f2e5c7]/60 p-4 rounded-xs"
      >
        <h2 className="text-lg font-semibold text-[#2c2214] mb-2">
          Контактна інформація
        </h2>
        <ul className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6 text-sm text-[#3d2e1e]">
          <li>
            <strong>Місто:</strong> Львів
          </li>
          <li>
            <strong>Ел. пошта:</strong>{" "}
            <a
              href="mailto:karyna.karahiaur.kb.2025@lpnu.ua"
              className="text-[#965518] hover:underline"
            >
              karyna.karahiaur.kb.2025@lpnu.ua
            </a>
          </li>
          <li>
            <strong>Телефон:</strong>{" "}
            <a
              href="tel:+380685594071"
              className="text-[#965518] hover:underline"
            >
              +38 (068) 559-40-71
            </a>
          </li>
        </ul>
      </section>
    </header>
  );
}