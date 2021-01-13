const cats = [
  {
    name: "Kandy",
    imgUrl: "https://images-cdn.9gag.com/photo/3630193_700b.jpg",
  },
  {
    name: "Sir John II",
    imgUrl:
      "https://kittybloger.files.wordpress.com/2012/05/cat-king.jpg?w=584",
  },
];

const dogs = [
  {
    name: "Bill",
    imgUrl: "https://live.staticflickr.com/8534/8622367912_cfe27bf5ef.jpg",
  },
  {
    name: "Shawna",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-bi-Tq3VTy8AL_fGBoLIwdnvY5RfG8wJNr1xW5_tWzQ8TOGx",
  },
];

const animalSelect = document.getElementById("animalSelect");
const animalList = document.getElementById("animalList");

// listen to change event on select
animalSelect.addEventListener("change", (event) => {
  // reset list everytime we change the selector
  animalList.innerHTML = "";

  // check if value is equals to 'dogs'
  if (event.target.value === "dogs" || event.target.value === "cats") {
    // define the base

    const baseForAnimals = event.target.value === "dogs" ? dogs : cats;
    // iterate over dogs array
    baseForAnimals.map((animal) => {
      // to each element (object) of the array, we will create a li(will contain a paragraph), p(will contain the dog name), img(will contain the url of the image)
      const li = document.createElement("li");
      const p = document.createElement("p");
      const img = document.createElement("img");

      // assigning values to the elements we just created
      p.innerHTML = animal.name;
      img.src = animal.imgUrl;
      img.alt = `One from ${event.target.value} with the name ${animal.name}`;

      // p.style.color = 'yellow'
      // p.setAttribute('class', 'doesItWork');
      // if (animal.name === 'Bill') {
      //     p.id = 'idName'
      // }

      // adding attaching created elements to our page
      animalList.appendChild(li);
      li.appendChild(p);
      li.appendChild(img);
    });
  } else {
    const animalsArray = dogs.concat(cats);
    // const animalsArray = [...dogs, ...cats];

    // iterate over array
    animalsArray.map((animal) => {
      // to each one of the elements we create the items
      const p = document.createElement("p");
      const img = document.createElement("img");
      const li = document.createElement("li");

      // assign values to created elements
      p.innerHTML = animal.name;
      img.src = animal.imgUrl;

      // attach it to our HTML
      animalList.appendChild(li);
      li.appendChild(p);
      li.appendChild(img);
    });
  }
});

const renderAnimal = (animalArray) => {
  animalArray.map((animal) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const img = document.createElement("img");

    p.innerHTML = animal.name;
    img.src = animal.imgUrl;

    animalList.appendChild(li);
    li.appendChild(p);
    li.appendChild(img);
  });
};

renderAnimal([...dogs, ...cats]);
