import './App.css';

function App() {
  const title = 'Welcome to the Kazee\'s blog';
  const likes = 50; //numbers strings arrays work. Booleans do not.
  const person = {name: 'yoshi',age: 30}
  const link = "https://github.com/Kazee0105"

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked { likes }</p>

        <p>{10}</p>
        <p>{'Hello ninjas'}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{ Math.random() * 10 }</p>

        <a href={link}>Kazee</a>
      </div>
    </div>
  );
}

export default App;
