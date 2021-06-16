import { useQuery } from "react-query";

export const useDiscountById = (id: number) => {
  const { data, error, isLoading } = useQuery(["discountList", id], () =>
    fetch("http://localhost:1337/discounts/" + id).then((res) => res.json())
  );

  if (isLoading) return { isLoading, findDiscount: null };

  const findDiscount = data as TDiscount;
  console.log(
    "🚀 ~ file: useDiscountById.ts ~ line 11 ~ useDiscountById ~ findDiscount",
    findDiscount
  );

  return { findDiscount, isLoading: false };
};

type TDiscount = {
  id: number;
  name: string;
  value: number;
  published_at: string;
  created_at: string;
  updated_at: string;
};
