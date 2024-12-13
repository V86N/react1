import './Home.css'

const Home = ({ dishes }) => {
    return (
      <div>
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id}>
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <p>Precio: ${dish.price}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };






export default Home