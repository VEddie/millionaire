import { useState } from 'react';
import GameGrid from './components/GameGrid';
import GameContainer from './components/GameContainer';

type GameAction = 'MAIN' | 'RULES' | 'REWARDS' | 'QUESTION'; 

function App() {
    const [action, setAction] = useState<GameAction>('MAIN');

    return (
        <GameContainer>
            {action === 'MAIN' && <GameGrid />}
        </GameContainer>
    );
}

export default App;
