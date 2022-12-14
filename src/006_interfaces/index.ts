interface GameProps {
  title: string;
  description: string;
  price: number;
  readonly genre: string;
  platform: string[];
  getSimilar?: (title: string) => void;
}

interface DlcProps extends GameProps {
  originalGame: GameProps;
  newContent: string[];
}

const ark: GameProps = {
  title: "Ark Survival Evolved",
  description:
    "é um jogo eletrônico de ação-aventura e sobrevivência desenvolvido pela Studio Wildcard, em colaboração com" +
    "Instinct Games, Efecto Studios e Virtual Basement.",
  price: 60.0,
  genre: "Survival",
  platform: [
    "PlayStation 4",
    "Nintendo Switch",
    "Xbox One",
    "Android",
    "IOS",
    "Microsoft Windows",
    "Xbox Series X and Series S",
    "mac OS",
    "Linux",
    "Google Stadia",
  ],
  getSimilar: (title: string) => {
    console.log(`Similar games to ${title} The Isle, The Forest`);
  },
};

const aberration: DlcProps = {
  title: "ARK: Aberration - Expansion Pack",
  description:
    "Ao acordar na 'Aberração', um ARK abandonado e defeituoso, com um elaborado sistema de biomas" +
    "subterrâneos, os sobreviventes enfrentam novos e exóticos desafios diferentes de qualquer coisa jamais vista:" +
    "radiação solar extrema e seus riscos ambientais, tirolesas, trajes de BASE jumping primitivos, equipamentos de" +
    "escalada, habitações em cavernas, baterias recarregáveis e muito mais, em conjunto com um estábulo de novas" +
    "criaturas extraordinárias que o aguardam dentro das profundidades misteriosas. Mas cuidado com os implacáveis" +
    "'Desconhecidos', humanoides infundidos por Elemento que evoluíram para monstruosidades viciosas que odeiam a luz!" +
    "Em Aberração, os sobreviventes descobrirão os últimos segredos dos ARKs e descobrirão o que o futuro guarda para" +
    "aqueles que são fortes e inteligentes o suficiente para sobreviver!",
  genre: "Action, Adventure, Indie, Multiplayer, RPG",
  price: 51.51,
  platform: [
    "PlayStation 4",
    "Nintendo Switch",
    "Xbox One",
    "Android",
    "IOS",
    "Microsoft Windows",
    "Xbox Series X and Series S",
    "mac OS",
    "Linux",
    "Google Stadia",
  ],
  originalGame: ark,
  newContent: ["new creatures, new game style"],
};

class CreateGame implements GameProps {
  title: string;
  description: string;
  price: number;
  genre: string;
  platform: string[];

  constructor(
    title: string,
    description: string,
    price: number,
    platform: string[],
    genre: string
  ) {
    this.title = title;
    this.description = description;
    this.genre = genre;
    this.price = price;
    this.platform = platform;
  }
}

const theWitcher = new CreateGame(
  "The Witcher 3",
  "The best game of the world",
  50,
  ["Windows", "PS4"],
  "action"
);
