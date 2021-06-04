import ListCard from "./ListCard";

export default function Carousel(props) {
  const { list, title } = props;
  if (list) {
    return (
      <div className="py-4">
        <div className="is-size-3 py-4 has-text-centered has-text-weight-bold">
          {title}
        </div>
        <div class="columns is-multiline is-centered">
          {list.map((item, index) => (
            <div class="column is-one-fifth">
              <ListCard />
            </div>
          ))}
        </div>
        <div className="has-text-centered">
          <button className="button is-white is-small has-text-grey-light">
            View All
          </button>
        </div>
      </div>
    );
  } else return null;
}
