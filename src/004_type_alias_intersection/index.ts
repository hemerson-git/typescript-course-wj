type AccountInfo = {
  id: string;
  name: string;
  email?: string;
  created_at: Date;
};

const account: AccountInfo = {
  id: "123",
  email: "123@example.com",
  name: "John Doe",
  created_at: new Date(),
};

type CharInfo = {
  nickname: string;
  level: number;
};

// Intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: "123",
  name: "Player",
  created_at: new Date(),
  level: 100,
  nickname: "player",
  email: "player@example.com",
};
