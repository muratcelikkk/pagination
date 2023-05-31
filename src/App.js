import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [items, seItems] = useState([]);
  const [visible,setVisible] =useState(3);

  function showMoreMeals(){
    setVisible(item=>item += 3)
  }
    
  

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=british")
    .then((res)=>res.json())
    .then((data)=>seItems(data.meals))
  }, [])
  

  return (
    <div className="App">
      <h1 className="header">British Meals <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" alt="img" /></h1>
      <div className="container">
        {items.slice(0,visible).map(item=>(
          <div className='card'>
            <div className="image">
              <img src={item.strMealThumb} alt="img" />
            </div>
            <p>{item.strMeal}</p>
          </div>
        ))}
        <button onClick={showMoreMeals}>Click for More Meals</button>
      </div>
    </div>
  );
}

export default App;
