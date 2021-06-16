import { useQuery } from "react-query";

export const useUserInfo = () => {
  const { isLoading, error, data, refetch } = useQuery("userAccount", () =>
    fetch("http://localhost:1337/users/1").then((res) => res.json())
  );

  return { isLoading, error, data, refetch };
};
