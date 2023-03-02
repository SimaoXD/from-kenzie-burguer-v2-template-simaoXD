import {ReactNode} from "react"


export interface IDefaultProviderProps {
  children:ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IRegisterFormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirmed: string;
}

export interface ILoginFormValues {
  email: string;
  password: string;
}

export interface IUserContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
  userLogin: (formData: ILoginFormValues) => Promise<void>;
  userLogout: () => void;
}


export interface iProducts {
 id: number;
 name: string;
 category: string;
 price: number;
 img: string;

}

export interface ICartContext{
  products: iProducts[];
  setProducts: (products: iProducts[]) => void;
}

export interface iProductsProps{
  product: iProducts
}


export interface iCartModal{
  onClose:() => any;
}