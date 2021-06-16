import React from "react";
//@ts-ignore
const SelectedValueContext = React.createContext<TContext>();

const { Provider, Consumer } = SelectedValueContext;

export { Provider, Consumer };
export default SelectedValueContext;

type TContext = {
  setSelectedTicketId: React.Dispatch<React.SetStateAction<number>>;
  setSelectedDiscountId: React.Dispatch<React.SetStateAction<number>>;
  setSelectedOrderId: React.Dispatch<React.SetStateAction<number>>;
  selectedValue: {
    selectedTicketId: number;
    selectedDiscountId: number;
    selectedOrderId: number;
  };
};
