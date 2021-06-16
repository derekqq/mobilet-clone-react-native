import React, { useContext } from "react";
import Context from "~context";
import { useDiscountById } from "./useDiscountById";
import { useTicketById } from "./useTicketById";
import { useOrderById } from "./useOrderById";

export const useSelectedTicket = () => {
  const {
    setSelectedDiscountId,
    setSelectedTicketId,
    setSelectedOrderId,
    selectedValue,
  } = useContext(Context);

  const selectedDiscount = useDiscountById(selectedValue.selectedDiscountId);
  const selectedTicket = useTicketById(selectedValue.selectedTicketId);
  const selectedOrder = useOrderById(selectedValue.selectedOrderId);

  return {
    setSelectedDiscountId,
    setSelectedTicketId,
    setSelectedOrderId,
    selectedDiscount,
    selectedTicket,
    selectedOrder,
  };
};
