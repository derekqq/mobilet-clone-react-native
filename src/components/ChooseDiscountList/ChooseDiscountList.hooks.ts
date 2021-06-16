import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export const useQueryDiscount = () => {
  const { data, error, isLoading } = useQuery("discountList", () =>
    fetch("http://localhost:1337/discounts").then((res) => res.json())
  );

  return { isLoading, error, data };
};
