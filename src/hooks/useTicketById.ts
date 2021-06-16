import { useQuery } from "react-query";

export const useTicketById = (id: number) => {
  const { data, error, isLoading } = useQuery("listTicket", () =>
    fetch("http://localhost:1337/tickets").then((res) => res.json())
  );

  if (isLoading) return { isLoading };

  const dataList = data as TTicketList;

  const findTicket = dataList.find((el) => el.id === id);
  if (findTicket) {
    return { findTicket, isLoading: false };
  } else {
    throw new Error("Ticket not found");
  }
};

type TTicketList = {
  name: string;
  basePrice: number;
  id: number;
}[];
