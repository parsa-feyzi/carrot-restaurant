export interface I_Children {
  children: React.ReactNode;
}

export interface I_Food {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
  score: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface I_Menu {
  menu_name: string;
  menu_image: string;
}
