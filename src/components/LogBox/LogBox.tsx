import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";

interface ILog {
  action: string;
  timeStamp: string;
}

interface IProps {
  handHistory: ILog[];
}

const LogBoxSection = styled.section`
  background: var(--color-background);
  border: 1px solid var(--color-primary);
  bottom: 1.75rem;
  padding: 0.5rem;
  position: absolute;
  overflow: scroll;
  left: 1rem;
  height: 6rem;
  width: 18rem;
`;

const Log = styled.div`
  color: var(--color-primaryLight);
  font-family: var(--font-family-secondary);
  font-weight: 400;
  font-size: var(--font-size-s);
  margin: 0.125rem;
`;

export const LogBox: React.FunctionComponent<IProps> = ({ handHistory }) => {
  const logRef = useRef(null);

  useEffect(() => {
    handHistory.length > 0 && logRef.current.scrollIntoView();
  }, [handHistory]);

  return (
    <LogBoxSection>
      {handHistory.map(({ action, timeStamp }: ILog) => {
        return (
          <div ref={logRef} key={action + timeStamp}>
            <Log>{action}</Log>
          </div>
        );
      })}
    </LogBoxSection>
  );
};
