import { createServer } from "miragejs";

const allRestaurants = [
  {
    id: 1,
    title: "Макдоналдс — Газетный",
    imgSrc: "https://i.postimg.cc/Bvfy2r6q/mac.png",
    coast: "₽₽",
    typeKitchen: ["Бургеры"],
    dileveryTime: "25 - 35 мин",
  },
  {
    id: 2,
    title: "DimSum & Co — ЦДМ",
    imgSrc: "https://i.postimg.cc/HxphhbXR/DimSum.png",
    coast: "₽",
    typeKitchen: ["Японская", "Китайская", "Азиатская"],
    dileveryTime: "40 - 50 мин",
  },
  {
    id: 3,
    title: "ДвижОК — Манежная",
    imgSrc: "https://i.postimg.cc/sxx0VynJ/dvijok.png",
    coast: "₽",
    typeKitchen: ["Американская", "Европейская"],
    dileveryTime: "35 - 45 мин",
  },
  {
    id: 4,
    title: "НЯ — NHA",
    imgSrc: "https://i.postimg.cc/gj7tj5Qb/NHA.png",
    coast: "₽₽",
    typeKitchen: ["Вьетнамская"],
    dileveryTime: "30 - 40 мин",
  },
  {
    id: 5,
    title: "Точка Дзы — Цветной",
    imgSrc: "https://i.postimg.cc/G2q5w9j2/pointdzi.png",
    coast: "₽₽",
    typeKitchen: ["Вьетнамская"],
    dileveryTime: "40 - 50 мин",
  },
  {
    id: 6,
    title: "Cinnabon",
    imgSrc: "https://i.postimg.cc/g0y7sgX3/Cinnabon.png",
    coast: "₽",
    typeKitchen: ["Выпечка", "Десерты", "Капкейки"],
    dileveryTime: "25 - 35 мин",
  },
  {
    id: 7,
    title: "PIZZELOVE",
    imgSrc: "https://i.postimg.cc/yYJrt131/PIZZELOVE.png",
    coast: "₽₽",
    typeKitchen: ["Пицца"],
    dileveryTime: "15 - 25 мин",
  },
  {
    id: 8,
    title: "Zю кафе — Тверская",
    imgSrc: "https://i.postimg.cc/y6pbLgdp/zucafe.png",
    coast: "₽₽",
    typeKitchen: ["Японская"],
    dileveryTime: "25 - 35 мин",
  },
  {
    id: 9,
    title: "Bar BQ Cafe — Манежная",
    imgSrc: "https://i.postimg.cc/cLn2gxd9/Bar-BQCafe.png",
    coast: "₽₽₽",
    typeKitchen: ["Европейская"],
    dileveryTime: "30 - 40 минн",
  },
];

createServer({
  routes() {
    this.namespace = "api";

    this.get(
      "/restaurants",
      () => {
        return allRestaurants;
      },
      {
        timing: 4000,
      }
    );
  },
});
