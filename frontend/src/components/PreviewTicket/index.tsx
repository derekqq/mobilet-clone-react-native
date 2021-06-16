import React, { useState } from "react";
import * as SH from "~shared";
import * as S from "./PreviewTicket.styles";
import { useSelectedTicket } from "~hooks";
import { PreviewTicketOne } from "./PreviewTicketOne";
import { PreviewTicketTwo } from "./PreviewTicketTwo";
import { PreviewTicketThree } from "./PreviewTicketThree";
import GestureRecognizer from "react-native-swipe-gestures";

export const PreviewTicket = () => {
  const { selectedOrder } = useSelectedTicket();
  const [currentTab, setCurrentTab] = useState(1);

  if (selectedOrder.isLoading) {
    return (
      <SH.Text.Text16 data-testid="preview-ticket" white>
        Ładowanie...
      </SH.Text.Text16>
    );
  }

  const setTab = (value: number) => {
    const tabInRange = currentTab + value;
    if (tabInRange >= 1 && tabInRange <= 3) {
      setCurrentTab(tabInRange);
    }
  };

  return (
    <GestureRecognizer
      onSwipeLeft={() => setTab(1)}
      onSwipeRight={() => setTab(-1)}
      style={{
        flex: 1,
      }}
    >
      <SH.Container.ContainerWhite data-testid="preview-ticket">
        {currentTab === 1 && <PreviewTicketOne />}
        {currentTab === 2 && <PreviewTicketTwo />}
        {currentTab === 3 && <PreviewTicketThree />}
        <S.CircleWrapper>
          {[...Array(3)].map((x, index) => (
            <S.Circle active={currentTab === index + 1} />
          ))}
        </S.CircleWrapper>
      </SH.Container.ContainerWhite>
    </GestureRecognizer>
  );
};
