import Card from "./Card";

function CardPage() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <>
      <h3>Card Component</h3>

      <div className="d-flex gap-3 flex-wrap">
        <Card
          title="Card 1"
          description="This is a simple card component."
          buttonText="Click Me"
          onButtonClick={handleClick}
        />
        <Card
          title="Card 2"
          description="Another card with no button."
        />
        <Card
          title="Card 3"
          description="Bootstrap makes styling easy."
          buttonText="Press"
          onButtonClick={handleClick}
        />
      </div>
    </>
  );
}

export default CardPage;
