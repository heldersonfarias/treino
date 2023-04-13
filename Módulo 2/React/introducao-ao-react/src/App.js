import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  function getHelloWorlds(){
    const words = "Hello World"
     return  [
      words,
      words.toLowerCase(),
      words.toUpperCase(),
      words.split('').reverse().join(''),
      words.split('').join(' '),
      words.split(' ').reverse().join(' '),
      '#' + words.split(' ').join(''),
    ]
  }

  const helloWorlds = getHelloWorlds();

  function toBase(words, base){
    return words.split('').map(function (char) {
      return char.charCodeAt(0).toString(base);
    }).join(' ')
  }

  return (
    <div className="App">
      <ul>
        {helloWorlds.map((helloWorld, index) => 
          <HelloWorld key={index} helloWorld={helloWorld}/>
        )}
      </ul>
    </div>
  );
}

export default App;
