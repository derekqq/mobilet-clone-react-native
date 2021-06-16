import { useQuery } from "react-query";

export const useTicketById = (id: number) => {
  const { data, error, isLoading } = useQuery(["listTicket", id], () =>
    fetch("http://localhost:1337/tickets/" + id).then((res) => res.json())
  );

  if (isLoading) return { isLoading };

  const findTicket = data as TTicketList;
  return { findTicket, isLoading: false };
};

type TTicketList = {
  name: string;
  basePrice: number;
  id: number;
};
