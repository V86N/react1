import './App.css'
import Person from './components/Person/Person'
//import Header from './components/Header/Header'
import Home from './components/Home/Home'



function App() {

  const dishes = [
    {
      id: 1,
      name: 'plato 1',
      description: 'Este es el plato 1',
      price: 10
    },
    {
      id: 2,
      name: 'plato 2',
      description: 'Este es el plato 2',
      price: 20
    },
    {
      id: 3,
      name: 'plato 3',
      description: 'Este es el plato 3',
      price: 15
    }
  ]


  return (
    <div>
      <Home dishes={dishes} />


      <Person name="Victor" surname="Navarro" age="38" />
      <Person name="Marianico" surname="El corto" age="80" />
      <Person name="Sylvester" surname="Stallone" age="78" />
    </div>

  )
}

export default App
