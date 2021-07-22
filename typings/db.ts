export interface IUser {
  token: string | null;
  isLogin: boolean;
}

export interface IPostObject {
  content: string;
  createdAt: string;
  done: boolean;
  id: string;
}

export interface IPost {
  items: IPostObject[];
  numberOfItems: number;
  numberOfPages: number;
  page: null;
}