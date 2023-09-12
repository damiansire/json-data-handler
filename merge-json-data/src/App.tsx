import "./App.css";
import Companies from "../public/data-dummy/companies.json";
import Venues from "../public/data-dummy/venues.json";
import JsonEntryPreview from "./components/JsonEntryPreview";
function App() {
  return (
    <div className="flex justify-between gap-20 py-5 px-10">
      <section className="flex-1">
        {Venues.map((venue) => {
          return (
            <div className="pb-4">
              <JsonEntryPreview jsonEntry={venue} />
            </div>
          );
        })}
      </section>

      <section className="flex-1">
        {Companies.slice(0, 10).map((company) => {
          return (
            <div className="pb-4">
              <JsonEntryPreview jsonEntry={company} />
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
