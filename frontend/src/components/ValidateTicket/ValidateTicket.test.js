import React from "react";
import { render, waitFor, act } from "@testing-library/react-native";
import * as Screen from "~screens";
import { Provider } from "~context";
import { ValidateTicket } from "./index";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import { useNavigation } from "@react-navigation/native";

function sleep(period) {
  return new Promise((resolve) => setTimeout(resolve, period));
}
const queryClient = new QueryClient();

describe("<ValidateTicket />", () => {
  it("komp 1 child", async () => {
    const root = await waitFor(() =>
      render(
        <QueryClientProvider client={queryClient}>
          <Provider
            value={{
              setSelectedTicketId: () => {},
              setSelectedDiscountId: () => {},
              setSelectedOrderId: () => {},
              selectedValue: {
                selectedTicketId: 1,
                selectedDiscountId: 1,
                selectedOrderId: 1,
              },
            }}
          >
            <ValidateTicket />
          </Provider>
        </QueryClientProvider>
      )
    );
    await act(async () => {
      await sleep(1100);
    });
    const element = root.getAllByText("Ładowanie...");
    expect(element).toHaveLength(1);
  });
});
