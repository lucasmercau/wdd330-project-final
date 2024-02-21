import CardTemplate from "./CardTemplate.mjs";


document.getElementById("titleInput").addEventListener("input", processInput);
const books = document.querySelector(".books");

export function processInput() {
    // Get the input value
    let inputValue = document.getElementById("titleInput").value;
    // Call a function with the input value
    myFunction(inputValue);
}

async function myFunction(inputValue) {

    const list = await getBooksData(inputValue);
    const listBooks = new CardTemplate(list, books);
    // console.log("Input value:", inputValue);
    listBooks.init();
}

async function convertToJson(res) {
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      throw { name: "servicesError", message: data };
    }
}

export async function getBooksData(finder) {
  if (finder === "") {
    finder = "*";
  }
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${finder}&key=AIzaSyAu1aRXhxNC9Ui9gqSI8NrpxNlCC-92sfg`);
    const data = await convertToJson(response);
    return data.items;
}


