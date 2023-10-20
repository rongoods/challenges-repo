console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("this is bad");
    }
  } catch (error) {
    console.log("this is an error");
  }
}
console.log(fetchData());
fetchData();
