import ReviewCard from '../components/ReviewCard';

const App = () => {
  return (
    <div className="flex flex-col space-y-4">
      <ReviewCard 
        imageUrl="https://via.placeholder.com/150"
        name="Loren Doherty"
        username="tease"
        reviewText="There’s no other program that walks you through exactly what you need to know to start an online store fast."
        date="22.03.2021"
      />
      <ReviewCard 
        imageUrl="https://via.placeholder.com/150"
        name="John Doe"
        username="john_doe"
        reviewText="This program helped me scale my business to 7 figures in under a year!"
        date="15.07.2022"
      />
    </div>
  );
}

export default App;
