import Tweet from "./components/Tweet";

const props = {
  author : {
    name: 'Joao Costeira',
    avatarUrl: '/profile.jpeg'
  },
  text: 'Consequat ipsum est labore duis voluptate nisi tempor. Reprehenderit ad velit nulla in et officia. Labore pariatur eiusmod labore in cillum anim consectetur. Ea tempor eu elit ex ad occaecat aliquip laboris ut cupidatat nostrud magna.',
  image: {
    imageUrl: '/cover.jpg',
    description: 'Officia dolor velit exercitation dolore. Labore aliqua aliqua laboris minim tempor cillum. Adipisicing qui quis proident fugiat reprehenderit dolore elit eiusmod proident commodo. Ipsum Lorem anim dolor culpa fugiat. In sunt ex consequat et magna ex ad do voluptate reprehenderit ad nostrud. Reprehenderit commodo exercitation minim pariatur laborum.'
  },
  date: new Date()
}

const App = () => (
  <div className="App">
    <Tweet {...props}/>
  </div>
);


export default App;
