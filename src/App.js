import Congrats from './components/Congrats';
import GuessWords from './components/GuessWords';

function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessWords guessedWords={[{
        guessedWord: 'train', letterMatchCount: 3
      }]} />
    </div>
  );
}

export default App;
