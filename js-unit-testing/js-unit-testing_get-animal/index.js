export function getAnimal(animal = "I do not like animals at all!") {
  if (animal === "cats") {
    return "I totally love cats!";
  }
  if (animal === "dogs") {
    return "I like dogs!";
  }
  return animal;
}
