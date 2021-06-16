import { useQuery } from "react-query";

export const useDiscountById = (id: number) => {
  const { data, error } = useQuery("listTicket", () =>
    fetch("http://localhost:1337/discounts").then((res) => res.json())
  );

  const dataList = data as TTicketList;

  try {
    const findTicket = dataList.find((el) => el.id === id);
    return findTicket;
  } catch (err) {
    return error;
  }
};

type TTicketList = {
  name: string;
  basePrice: number;
  id: number;
}[];
