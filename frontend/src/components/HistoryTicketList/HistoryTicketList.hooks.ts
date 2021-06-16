import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";
import { useUserInfo } from "~hooks";

export const useQueryTickets = () => {
  const userInfo = useUserInfo();

  return {};
};

type TData = {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  role: {
    id: number;
    name: string;
    description: string;
    type: string;
  };
  balanceAccount: number;
  created_at: string;
  updated_at: string;
};
