import React from "react";
import { render, waitFor, act } from "@testing-library/react-native";

import { Provider } from "~context";
import { PreviewTicket } from "./index";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
function sleep(period) {
  return new Promise((resolve) => setTimeout(resolve, period));
}
const queryClient = new QueryClient();

describe("<PreviewTicket />", () => {
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
            <PreviewTicket />
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
