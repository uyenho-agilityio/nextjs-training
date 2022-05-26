import './App.css';
import Welcome from './components/welcome';
import Comment from './components/comment';

function App() {
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64',
    },
  };

  return (
    <div>
      <div className="Name">
        <Welcome name="Uyen" />
        <Welcome name="Ka" />
        <Welcome name="Gin" />
      </div>

      <div className="Kitty">
        <Comment date={comment.date} text={comment.text} author={comment.author} />
      </div>
    </div>
  );
}

export default App;
