// import ISubCategory from "./ISubCategory";

export default interface IProduto {
  id: string;
  title: string;
  description: string;
  photo: string;
  size: number;
  serving: number;
  price: number;
  category: string;
  // subCategory: ISubCategory
}
