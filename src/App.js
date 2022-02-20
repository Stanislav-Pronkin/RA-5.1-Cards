import './App.css';
import CardList from './Components/CardList';


const data = [
  {
    img: "https://via.placeholder.com/300x200",
    title: "Card title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btn: "Go somewhere"
  },
  {
    title: "Special title treatment",
    text: "With supporting text below as a natural lead-in to additional content.",
    btn: "Go somewhere"
  }
];


// const CardsList = data.map((item) => {
//   const id = shortid.generate();
//   return (
//     <Card key={id} prop={item} />
//   )

// });




// function App() {
//   return (
//     <div className="App">
//       <CardList data={data} />
//     </div>
//   );
// }


function App() {
  return (
    <div className='App'>
      <CardList className='card-list' cards={data} />
    </div>
  )
}
export default App;
