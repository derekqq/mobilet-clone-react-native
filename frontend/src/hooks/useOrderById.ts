import { useQuery } from "react-query";

export const useOrderById = (orderId: number) => {
  const { data, error, isLoading } = useQuery(["orderDetails", orderId], () =>
    fetch("http://localhost:1337/customer-order-mobilets/" + orderId).then(
      (res) => res.json()
    )
  );

  if (isLoading) return { isLoading };

  return { findOrder: data as TData, isLoading: false };
};

type TData = {
  id: number;
  quantity: number;
  discount: {
    id: number;
    name: string;
    value: number;
    published_at: string;
    created_at: string;
    updated_at: string;
  };
  ticket: {
    id: number;
    name: string;
    basePrice: number;
    published_at: string;
    created_at: string;
    updated_at: string;
  };
  published_at: string;
  created_at: string;
  updated_at: string;
};
