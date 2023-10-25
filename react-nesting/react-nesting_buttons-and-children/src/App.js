import React from "react";
import "./styles.css";
import Button from "./components/Button";

export default function App() {
  return (
    <main>
      <Button>click me</Button>
      <Button>dont click me</Button>
      <Button>maybe click me</Button>
      <Button>click me and its all over</Button>
    </main>
  );
}
