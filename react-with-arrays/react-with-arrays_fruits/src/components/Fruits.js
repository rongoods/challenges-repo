import { Fragment } from "react";
import { fruits } from "../lib/fruits";
import Card from "./Card";

export default function Fruits() {
  return (
    <main>
      <h1>List of Nice Fruits</h1>
      {fruits.map((fruit) => {
        return (
          <Fragment key={fruit.id} className="app">
            <Card id={fruit.id} name={fruit.name} color={fruit.color} />
          </Fragment>
        );
      })}
    </main>
  );
}
