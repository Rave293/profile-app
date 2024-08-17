import logo from './logo.svg';
import  'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import Name from './Name';
import Image from './Image'
import { Card } from 'react-bootstrap'
import Description from './Description';
import Price from './Price';
import productList from './Product';



function App() {
  const firstName = "chile justus"
  return (
    <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {productList.image}/>
      <Card.Body>
        <Card.Title><Name /></Card.Title>
        <Card.Text>
        < Description />
        </Card.Text>
          < Price />
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    <div className="mt-3">
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img src={productList.image} alt="Placeholder" />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </>
  );
}

export default App;
