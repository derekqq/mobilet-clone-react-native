import { useQuery } from "react-query";

export const useDiscountById = (id: number) => {
  const { data, error, isLoading } = useQuery("discountList", () =>
    fetch("http://localhost:1337/discounts").then((res) => res.json())
  );

  if (isLoading) return { isLoading, findDiscount: null };

  const dataList = data as TDiscountList;
  const findDiscount = dataList.find((el) => el.id === id);
  if (findDiscount) {
    return { findDiscount, isLoading: false };
  } else {
    throw new Error("Discount not found");
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
