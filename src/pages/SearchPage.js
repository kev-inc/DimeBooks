import ListCard from "../components/ListCard";
import Sidebar from "../components/Sidebar";

export default function SearchPage() {
  return (
    <div className="container">
      <div className="is-size-3 py-4 has-text-centered has-text-weight-bold">
        Viewing All Books
      </div>
      <div className="columns">
        <div className="column is-one-fifth">
          <Sidebar />
        </div>
        <div className="column">
          <div className="columns is-multiline">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
              (item, index) => (
                <div className="column is-one-fifth">
                  <ListCard />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
