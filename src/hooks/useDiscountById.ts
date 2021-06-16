import { useQuery } from "react-query";

export const useDiscountById = (id: number) => {
  const { data, error } = useQuery("discountList", () =>
    fetch("http://localhost:1337/discounts").then((res) => res.json())
  );

  const dataList = data as TDiscountList;

  try {
    const findDiscount = dataList.find((el) => el.id === id);
    return findDiscount;
  } catch (err) {
    return error;
  }
};

type TDiscountList = {
  id: number;
  name: string;
  value: number;
  published_at: string;
  created_at: string;
  updated_at: string;
}[];
