import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";

export const useUserInfo = () => {
  const { isLoading, error, data, refetch } = useQuery("userAccount", () =>
    fetch("http://localhost:1337/users/1").then((res) => res.json())
  );

  return { isLoading, error, data, refetch };
};
