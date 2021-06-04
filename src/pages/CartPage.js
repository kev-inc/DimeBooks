import CartItem from "../components/CartItem";
import PaymentDetails from "../components/PaymentDetails";

export default function CartPage() {
  return (
    <div className="container">
      <div className="is-size-3 py-4 has-text-centered has-text-weight-bold">
        My Cart
      </div>

      <div className="columns">
        <div className="column">
          <CartItem />
          <CartItem />
          <CartItem />
          <div class="block is-flex is-flex-direction-row is-justify-content-space-between">
            <div className="is-align-self-center p-4 is-size-5 has-text-weight-bold">
              Grand Total
            </div>
            <div className="is-align-self-center p-4 is-size-5">$12</div>
          </div>
          <hr />
        </div>

        <div className="column is-one-quarter">
          <PaymentDetails />
        </div>
      </div>
    </div>
  );
}
