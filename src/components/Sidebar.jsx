import React from "react";

const sidebarSections = [
  {
    title: "ИНФОРМАЦИЯ",
    items: ["АБИТУРИЕНТАМ", "СТУДЕНТАМ", "АСПИРАНТАМ"],
  },
  {
    title: "СЕРВИСЫ",
    items: ["РАСПИСАНИЕ", "MOODLE", "ПОЧТА ФТФ"],
  },
  {
    title: "СОЦИАЛЬНЫЕ СЕТИ",
    items: ["Telegram", "Instagram", "Facebook"],
  },
];

export default function Sidebar({ isOpen }) {
  return (
    <aside
      className={`
        bg-sidebarBg border-r border-borderGray
        transition-all duration-300
        ${isOpen ? "w-64" : "w-0"}
        overflow-hidden
        md:w-64
        md:block
        font-serif text-textPrimary
      `}
    >
      <div className="p-6">
        {sidebarSections.map(({ title, items }, idx) => (
          <div key={idx} className="mb-10">
            <h3 className="font-semibold text-xl text-primary mb-4">{title}</h3>
            <ul className="space-y-3 text-base text-textSecondary leading-relaxed">
              {items.map((item, i) => (
                <li
                  key={i}
                  className="hover:text-primary cursor-pointer transition-colors duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
