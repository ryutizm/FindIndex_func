// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


// findIndex() 該当する要素は何番目にあるのか

const objectArray = [
  { id: "hoge", text: "fuga" },
  { id: "foo", text: "bar" },
  { id: "fiz", text: "buzz" },
];

const index = objectArray.findIndex(object => {
return object.id === "hoge"
})

console.log(index, objectArray[index].text)