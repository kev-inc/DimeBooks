export default function CartItem() {
  return (
    <div>
      <div className="is-flex is-flex-direction-row">
        <figure class="image is-64x64 my-2 mx-4" style={{ overflow: "hidden" }}>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/41AvaBmddFL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
            alt="Placeholder"
          />
        </figure>
        <div className="is-size-5 has-text-weight-bold is-flex-grow-1">
          <div>Ariadne: A Novel</div>
          <button className="button is-ghost is-small">Remove</button>
        </div>
        <div className="is-align-self-center p-4 is-size-5">$4</div>
      </div>
      <hr />
    </div>
  );
}
