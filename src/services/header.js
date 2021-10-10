export const Links = [
  {
    name: "Página inicial",
    isSubmenu: false,
    to: "/",
  },
  {
    name: "Para você",
    isSubmenu: true,
    to: [
      {
        title: "Nubank",
        to: [
          {
            title: "Cartão de crédito",
            to: "/cartao",
          },
          {
            title: "Conta do Nubank",
            to: "/conta",
          },
          {
            title: "Tudo sobre Pix",
            to: "/pix",
          },
        ],
      },
      {
        title: "Nubank Ultravioleta",
        to: [
          {
            title: "Cartão de crédito",
            to: "/cartao",
          },
        ],
      },
      {
        title: "Outros produtos",
        to: [
          {
            title: "Empréstimo Pessoal",
            to: "/emprestimo",
          },
          {
            title: "Seguro de Vida",
            to: "/seguro",
          },
        ],
      },
    ],
  },
  {
    name: "Para seu negócio",
    isSubmenu: true,
    to: [
      {
        title: "Nubank",
        to: [
          {
            title: "Cartão de crédito",
            to: "/cartao",
          },
          {
            title: "Conta do Nubank",
            to: "/conta",
          },
          {
            title: "Tudo sobre Pix",
            to: "/pix",
          },
        ],
      },
    ],
  },
  {
    name: "O Nubank",
    isSubmenu: false,
    to: "/nubank",
  },
  {
    name: "Perguntas",
    isSubmenu: false,
    to: "/perguntas",
  },
];
