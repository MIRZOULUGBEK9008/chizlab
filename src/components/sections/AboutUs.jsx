import { AboutUsPatternImg } from "@/assets";

const cardData = [
  {
    title: "Biz kimmiz?",
    body: [
      "Chizlab — bu chizmachilik va dizaynni sevuvchilar uchun onlayn maydon. O‘zbekistondagi ilk chizmachilik va dizayn sohasidagi materiallarto‘plangan vertual makon. Biz ijodkorlarni birlashtiramiz!",
    ],
  },
  {
    title: "Chizlabning hikoyasi",
    body: [
      "Oddiy g‘oyadan boshlanib, butun o‘zbek ijodkorlariga yordam beruvchi platforma tuzishni niyat qildik.",
    ],
  },
  {
    title: "Nega aynan Chizlab",
    body: [
      "Texnik bilimlarni mukammallashtirish uchun interaktiv resurslar va o'quv materiallarini taklif etamiz.",
      "Biz bilan barchasi oson va kreativ.",
    ],
  },
  {
    title: "Jamoamiz haqida",
    body: [
      "Chizlab ortida bilimdon va ijodkor jamoa turibdi. Siz uchun eng yaxshi vositalarni taqdim etishga intilamiz.",
    ],
  },
  {
    title: "Bizning missiyamiz",
    body: [
      "Ijod va ta'limni birlashtirish. O‘zbekistonda ijodkorlik madaniyati yuksalishiga hissa qo‘shish.",
      "Har bir qalam harakati yangi imkoniyatlar ochishi uchun xizmat qiladi.",
    ],
  },
  {
    title: "Ta’riflar",
    body: [
      "Saytda standart ta’rifda bepul materiallardan foydalana olasiz.",
      "Pro ta’rifida yillik to‘lov qilganingizdan so‘ng, saytdagi materiallarning barchasidan foydalana olasiz.",
    ],
  },
];

export default function AboutUs() {
  return (
    <section className="py-24">
      <div className="base-container">
        <h2 className="mb-10 font-semibold text-center text-4xl">
          Biz haqimizda
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cardData.map(({ title, body }, index) => {
            return (
              <li
                className="border border-black bg-white rounded-xl pt-12 pb-16 pl-10 pr-16 relative overflow-hidden md:min-h-[370px]"
                key={index}
              >
                <h3 className="mb-5 font-medium text-2xl">{title}</h3>
                <div className="flex flex-col gap-3">
                  {body.map((text) => {
                    return <p key={text}>{text}</p>;
                  })}
                </div>
                <img
                  className="absolute -bottom-2 -right-2 rotate-180 select-none pointer-events-none"
                  src={AboutUsPatternImg.src}
                  alt=""
                  aria-hidden={true}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
