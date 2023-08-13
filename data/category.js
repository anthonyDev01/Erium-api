const categorias = [
  {
    roupas: [
      {
        nome: "Calça",
        imagem: "calcas.png",
        tipos: [
          {
            nome: "Calça Jeans",
            imagem: "",
            peso: 500,
          },
          {
            nome: "Calça Legging",
            imagem: "",
            peso: 300,
          },
          {
            nome: "Calça Social",
            imagem: "",
            peso: 600,
          },
          {
            nome: "Calça Cargo",
            imagem: "",
            peso: 700,
          },
          {
            nome: "Calça de Moletom",
            imagem: "",
            peso: 400,
          },
        ],
      },
      {
        nome: "Meias",
        imagem: "meias.png",
        tipos: [
          {
            nome: "Meias Curtas",
            imagem: "",
            peso: 50,
          },
          {
            nome: "Meias Longas",
            imagem: "",
            peso: 80,
          },
          {
            nome: "Meias Esportivas",
            imagem: "",
            peso: 70,
          },
          {
            nome: "Meias de Algodão",
            imagem: "",
            peso: 60,
          },
          {
            nome: "Meias de Lã",
            imagem: "",
            peso: 100,
          },
        ],
      },
      {
        nome: "Blusa",
        imagem: "moletom.png",
        tipos: [
          {
            nome: "Blusa de Manga Comprida",
            imagem: "",
            peso: 250,
          },
          {
            nome: "Blusa de Alça",
            imagem: "",
            peso: 150,
          },
          {
            nome: "Blusa de Tricô",
            imagem: "",
            peso: 350,
          },
          {
            nome: "Blusa de Moletom",
            imagem: "",
            peso: 400,
          },
          {
            nome: "Blusa Peplum",
            imagem: "",
            peso: 200,
          },
        ],
      },
      {
        nome: "Bermuda",
        imagem: "shorts.png",
        tipos: [
          {
            nome: "Bermuda Jeans",
            imagem: "",
            peso: 400,
          },
          {
            nome: "Bermuda Cargo",
            imagem: "",
            peso: 300,
          },
          {
            nome: "Bermuda de Praia",
            imagem: "",
            peso: 200,
          },
          {
            nome: "Bermuda de Tecido",
            imagem: "",
            peso: 250,
          },
          {
            nome: "Bermuda Ciclista",
            imagem: "",
            peso: 350,
          },
        ],
      },
      {
        nome: "Tênis",
        imagem: "tenis.png",
        tipos: [
          {
            nome: "Tênis Esportivo",
            imagem: "",
            peso: 700,
          },
          {
            nome: "Tênis Casual",
            imagem: "",
            peso: 600,
          },
          {
            nome: "Tênis de Corrida",
            imagem: "",
            peso: 800,
          },
          {
            nome: "Tênis de Skate",
            imagem: "",
            peso: 750,
          },
          {
            nome: "Tênis de Couro",
            imagem: "",
            peso: 900,
          },
        ],
      },
      {
        nome: "Roupas íntimas",
        imagem: "roupas-intimas.png",
        tipos: [
          {
            nome: "Sutiã",
            imagem: "",
            peso: 100,
          },
          {
            nome: "Cueca Boxer",
            imagem: "",
            peso: 80,
          },
          {
            nome: "Calcinha",
            imagem: "",
            peso: 50,
          },
          {
            nome: "Cueca Slip",
            imagem: "",
            peso: 70,
          },
          {
            nome: "Camisola",
            imagem: "",
            peso: 150,
          },
        ],
      },
      {
        nome: "Boné",
        imagem: "bone.png",
        peso: 100,
      },
      {
        nome: "Sandalias",
        imagem: "sandalias.png",
        tipos: [
          {
            nome: "Chinelo de Dedo",
            imagem: "",
            peso: 200,
          },
          {
            nome: "Chinelo Slide",
            imagem: "",
            peso: 250,
          },
          {
            nome: "Chinelo de Pano",
            imagem: "",
            peso: 150,
          },
          {
            nome: "Chinelo de Borracha",
            imagem: "",
            peso: 180,
          },
          {
            nome: "Chinelo de Couro",
            imagem: "",
            peso: 300,
          },
        ],
      },
      {
        nome: "Touca",
        imagem: "touca.png",
        peso: 50,
      },
      {
        nome: "Vestido",
        imagem: "vestido.png",
        peso: 400,
      },
      {
        nome: "Saia",
        imagem: "saia.png",
        peso: 300,
      },
      {
        nome: "Meia Calça",
        imagem: "meias-calcas.png",
        peso: 150,
      },
      {
        nome: "Camiseta",
        imagem: "camiseta.png",
        peso: 200,
      },
      {
        nome: "Sutiã",
        imagem: "sutia.png",
        peso: 100,
      },
      {
        nome: "Body",
        imagem: "body.png",
        peso: 250,
      },
      {
        nome: "Botas",
        imagem: "botas.png",
        peso: 900,
      },
      {
        nome: "Cachecol",
        imagem: "cachecol.png",
        peso: 150,
      },
    ],

    eletronicos: [
      {
        nome: "Laptop",
        imagem: "laptop.png",
        tipos: [
          {
            nome: "Laptop Ultrabook",
            imagem: "",
            peso: 1200,
          },
          {
            nome: "Laptop Gaming",
            imagem: "",
            peso: 2500,
          },
          {
            nome: "Laptop Conversível",
            imagem: "",
            peso: 1500,
          },
          {
            nome: "Laptop de Uso Geral",
            imagem: "",
            peso: 1800,
          },
          {
            nome: "Laptop 2 em 1",
            imagem: "",
            peso: 1700,
          },
        ],
      },
      {
        nome: "Tablet",
        imagem: "tablet.png",
        tipos: [
          {
            nome: "Tablet iPad",
            imagem: "",
            peso: 600,
          },
          {
            nome: "Tablet Android",
            imagem: "",
            peso: 800,
          },
          {
            nome: "Tablet Windows",
            imagem: "",
            peso: 900,
          },
          {
            nome: "Tablet com Caneta Stylus",
            imagem: "",
            peso: 700,
          },
        ],
      },
      {
        nome: "Smartphone",
        imagem: "smartphone.png",
        tipos: [
          {
            nome: "Smartphone iPhone",
            imagem: "",
            peso: 200,
          },
          {
            nome: "Smartphone Android Top de Linha",
            imagem: "",
            peso: 180,
          },
          {
            nome: "Smartphone Android de Médio Porte",
            imagem: "",
            peso: 150,
          },
          {
            nome: "Smartphone com Bateria de Longa Duração",
            imagem: "",
            peso: 170,
          },
        ],
      },
      {
        nome: "Fones de Ouvido",
        imagem: "fones-de-ouvido.png",
        tipos: [
          {
            nome: "Fones de Ouvido Over-Ear",
            imagem: "",
            peso: 300,
          },
          {
            nome: "Fones de Ouvido In-Ear",
            imagem: "",
            peso: 50,
          },
          {
            nome: "Fones de Ouvido Bluetooth",
            imagem: "",
            peso: 100,
          },
          {
            nome: "Fones de Ouvido com Cancelamento de Ruído",
            imagem: "",
            peso: 250,
          },
        ],
      },
      {
        nome: "Câmera",
        imagem: "camera.png",
        tipos: [
          {
            nome: "Câmera DSLR",
            imagem: "",
            peso: 1200,
          },
          {
            nome: "Câmera Mirrorless",
            imagem: "",
            peso: 1000,
          },
          {
            nome: "Câmera Compacta",
            imagem: "",
            peso: 500,
          },
          {
            nome: "Câmera de Ação",
            imagem: "",
            peso: 150,
          },
        ],
      },
      {
        nome: "Power Bank",
        imagem: "power-bank.png",
        peso: 300,
      },
      
      {
        nome: "Adaptadores de Tomada",
        imagem: "adaptadores-tomada.png",
        peso: 50,
      },
      {
        nome: "Relógio",
        imagem: "relogio.png",
        tipos: [
          {
            nome: "Smartwatch",
            imagem: "",
            peso: 100,
          },
          {
            nome: "Relógio Esportivo",
            imagem: "",
            peso: 120,
          },
          {
            nome: "Relógio Elegante",
            imagem: "",
            peso: 80,
          },
        ],
      },
      {
        nome: "Câmera de Vídeo",
        imagem: "camera-video.png",
        tipos: [
          {
            nome: "Câmera de Vídeo Profissional",
            imagem: "",
            peso: 2500,
          },
          {
            nome: "Câmera de Vídeo Portátil",
            imagem: "",
            peso: 1200,
          },
          {
            nome: "Câmera de Vídeo de Ação",
            imagem: "",
            peso: 150,
          },
        ],
      },
      {
        nome: "Caixa de Som Portátil",
        imagem: "caixa-som-portatil.png",
        tipos: [
          {
            nome: "Caixa de Som Bluetooth",
            imagem: "",
            peso: 400,
          },
          {
            nome: "Caixa de Som à Prova d'Água",
            imagem: "",
            peso: 450,
          },
          {
            nome: "Caixa de Som com Luzes LED",
            imagem: "",
            peso: 500,
          },
        ],
      },
    ],
  },
];

module.exports = categorias;
