import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Parcel from "single-spa-react/parcel";

import { store, Card } from "@roam/demo-dashboard-utilities";

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 20px;
  padding: 20px;
`;

const CounterPanel = styled(Card)`
  grid-column: 1 / span 2;
`;

const PanelTitle = styled.h2`
  margin: 0;
  margin-bottom: 10px;
`;

const CounterValue = styled.p`
  margin: 0;
  font-size: 3em;
`;

const CounterComp = styled.div`
  grid-column: 3 / span 10;
`;

export default function Root(props) {
  const [counter, setCounter] = useState(store.count);

  useEffect(() => {
    store.subscribe(() => {
      setCounter(store.counter);
    });
  }, []);

  return (
    <section data-testid="rootSection">
      <Parcel config={() => System.import("@roam/demo-dashboard-header")} />

      <Content>
        <CounterPanel>
          <PanelTitle>Current Counter</PanelTitle>
          <CounterValue>{counter}</CounterValue>
        </CounterPanel>

        <CounterComp>
          <Parcel
            config={() => System.import("@roam/demo-dashboard-counter")}
          />
        </CounterComp>
      </Content>
    </section>
  );
}
