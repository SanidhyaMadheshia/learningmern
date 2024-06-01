export function Animal(){
    const arr=["cow ","sheep","bat","lion"];
    const listOfAnimal=arr.map((e)=> <li key={e}>{e} </li>);
    return (
        <div>
            <h1>Animal</h1>
            <ul>
                {listOfAnimal}

            </ul>
        </div>
    );
}
function ListItem(props) {
    return <li>{props.animal}</li>
  }
  
  function List(props) {
    return (
      <ul>
        {props.animals.map((animal) => {
          return <ListItem key={animal} animal={animal} />;
        })}
      </ul>
    );
  }
  
  function App1() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
  
    return (
      <div>
        <h1>Animals: </h1>
        <List animals={animals} />
      </div>
    );
  }
  
  