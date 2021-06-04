import { useHistory } from "react-router-dom";

export default function ViewBookPage() {
  const history = useHistory();

  const addToCart = () => {
    alert("Added to cart!");
    history.push("/search");
  };

  const buyNow = () => {
    history.push("/cart");
  };
  return (
    <div className="container">
      <button class="button is-ghost my-2" onClick={() => history.goBack()}>
        ‹ Back to results
      </button>

      <div className="columns">
        <div className="column is-one-fifth">
          <figure class="image is-3by4">
            <img
              style={{ objectFit: "cover" }}
              src="https://images-na.ssl-images-amazon.com/images/I/41AvaBmddFL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
              alt="Placeholder"
            />
          </figure>
        </div>

        <div className="column">
          <p className="title">Ariadne: A Novel</p>
          <p className="subtitle">
            A mesmerizing debut novel for fans of Madeline Miller's Circe.
          </p>
          <p>
            Ariadne, Princess of Crete, grows up greeting the dawn from her
            beautiful dancing floor and listening to her nursemaid’s stories of
            gods and heroes. But beneath her golden palace echo the ever-present
            hoofbeats of her brother, the Minotaur, a monster who demands blood
            sacrifice. When Theseus, Prince of Athens, arrives to vanquish the
            beast, Ariadne sees in his green eyes not a threat but an escape.
            Defying the gods, betraying her family and country, and risking
            everything for love, Ariadne helps Theseus kill the Minotaur. But
            will Ariadne’s decision ensure her happy ending? And what of
            Phaedra, the beloved younger sister she leaves behind? Hypnotic,
            propulsive, and utterly transporting, Jennifer Saint's Ariadne
            forges a new epic, one that puts the forgotten women of Greek
            mythology back at the heart of the story, as they strive for a
            better world.
          </p>
          <p className="is-size-4">$4</p>
          <div className="py-4">
            <button className="button is-warning mr-3" onClick={buyNow}>
              Buy now
            </button>
            <button className="button is-light" onClick={addToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
