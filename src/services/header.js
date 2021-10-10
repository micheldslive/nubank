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
    isSubmenu: true,
    to: [
      {
        title: "Sobre nós",
        to: [
          {
            title: "O Nu",
            to: "/nu",
          },
          {
            title: "Sala de imprensa",
            to: "/impressa",
          },
          {
            title: "Carreiras",
            to: "/carreiras",
          },
          {
            title: "Nu Impacto",
            to: "/impacto",
          },
        ],
      },
      {
        title: "Outros canais",
        to: [
          {
            title: "Blog",
            to: "/blog",
          },
          {
            title: "Newsletter",
            to: "/newsletter",
          },
          {
            title: "Comunidade",
            to: "/comunidade",
          },
          {
            title: "InvestNews",
            to: "/invest",
          },
        ],
      },
      {
        title: "Nubank pelo mundo",
        to: [
          {
            title: "México",
            to: "/mexico",
          },
          {
            title: "Colômbia",
            to: "/colombia",
          },
          {
            title: "Argentina",
            to: "/argentina",
          },
        ],
      },
    ],
  },
  {
    name: "Perguntas",
    isSubmenu: false,
    to: "/perguntas",
  },
];
