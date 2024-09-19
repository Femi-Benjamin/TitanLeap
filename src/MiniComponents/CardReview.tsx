import ReviewCard from "./ReviewCard";

const App = () => {
  const reviews = [
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "Loren",
      username: "tease",
      reviewText:
        "There's no other program that walks you through exactly what you need to know to start an online store fast.",
      date: "22.03.2021",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "Doe",
      username: "john_doe",
      reviewText:
        "This program helped me scale my business to 7 figures in under a year!",
      date: "15.07.2022",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "Doherty",
      username: "tease",
      reviewText:
        "There's no other program that walks you through exactly what you need to know to start an online store fast.There's no other program that walks you through exactly what you need to know to start an online store fastThere's no other program that walks you through exactly what you need to know to start an online store fast",
      date: "22.03.2021",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "Smith",
      username: "tease",
      reviewText:
        "There's no other program that walks you through exactly what you need to know to start an online store fast.",
      date: "22.03.2021",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "John",
      username: "john_doe",
      reviewText:
        "This program helped me scale my business to 7 figures in under a year!",
      date: "15.07.2022",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "Elizabeth",
      username: "tease",
      reviewText:
        "There's no other program that walks you through exactly what you need to know to start an online store fast.There's no other program that walks you through exactly what you need to know to start an online store fastThere's no other program that walks you through exactly what you need to know to start an online store fast",
      date: "22.03.2021",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default App;
