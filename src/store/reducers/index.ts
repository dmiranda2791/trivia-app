import game from "./game";
import { GameState } from "./game";

export interface RootState {
  game: GameState;
}

const rootReducer = {
  game,
};

export default rootReducer;
