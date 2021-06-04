import { useHistory } from "react-router-dom";

export default function ListCard() {
  const history = useHistory();
  return (
    <article className="is-clickable" onClick={() => history.push("/view")}>
      <figure class="image is-3by4">
        <img
          style={{ objectFit: "cover" }}
          src="https://images-na.ssl-images-amazon.com/images/I/41AvaBmddFL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
          alt="Placeholder image"
        />
      </figure>
      <div class="content">
        <p>
          <strong>John Smith</strong>
          <br />
          <small>$4</small>
        </p>
      </div>
    </article>
  );
}
