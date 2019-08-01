/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { Button } from "../Controls";
import {
  devStart,
  nextTurn,
  sendMessage,
  setActivePlayer,
  setUserSeat,
  toggleControls
} from "../store/actions";
import { DispatchContext, StateContext } from "../store/context";

const DeveloperMode = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);

  const nextPlayer = () => {
    const nextPlayer = state.activePlayer === "player1" ? "player2" : "player1";
    setUserSeat(nextPlayer, dispatch);
    setActivePlayer(nextPlayer, dispatch);
    toggleControls(dispatch);
  };

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr;
        position: absolute;
        top: 5rem;
        z-index: 999;
      `}
    >
      <Button label="Pre-Flop" onClick={() => devStart(dispatch)} />
      <Button label="Flop" onClick={() => nextTurn(1, state, dispatch)} />
      <Button label="Turn" onClick={() => nextTurn(2, state, dispatch)} />
      <Button label="River" onClick={() => nextTurn(3, state, dispatch)} />
      <Button label="Next Player" onClick={() => nextPlayer()} />
      <Button
        label="Reset"
        onClick={() => {
          sendMessage({ method: "reset" }, "dcv", state, dispatch);
        }}
      />
    </div>
  );
};

export default DeveloperMode;