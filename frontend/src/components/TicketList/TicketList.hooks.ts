import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";

export const useQueryTickets = () => {
  const { isLoading, error, data, refetch } = useQuery("listTicket", () =>
    fetch("http://localhost:1337/tickets").then((res) => res.json())
  );

  return { isLoading, error, data, refetch };
};
