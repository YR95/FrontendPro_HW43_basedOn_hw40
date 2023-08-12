let category = [];
let subcategory = [];
let infos = [];
let items = [
  {
    idCategory: 0,
    category: "Food",
    subCategory:
        [{
          idSubCategory: 0,
          title: "potato",
          info: "info potato",
          isBought: false,
        },
          {
            idSubCategory: 1,
            title: "carrot",
            info: "info carrot",
            isBought: false,
          },
          {
            idSubCategory: 2,
            title: "orange",
            info: "info orange",
            isBought: false,
          },

        ]

  },
  {
    idCategory: 1,
    category: "Toys",
    subCategory:
        [{
          idSubCategory: 0,
          title: "car",
          info: "info car",
          isBought: false,
        },
          {
            idSubCategory: 1,
            title: "ball",
            info: "info ball",
            isBought: false,
          },
          {
            idSubCategory: 2,
            title: "doll",
            info: "info doll",
            isBought: false,
          },

        ]

  }

];
let selectedItemInCart = "";
let resultObject = {};

function addItemsToCategory(item, items) {
  items.push(item);
}

function createElementDom(tag, id) {
  let a = document.createElement(tag);
  a.setAttribute("id", id);
  document.body.append(a);
  return a;
}

function parseData(elements) {

  for (let i = 0; i < elements.length; i++) {
    let el = elements[i].category;
    let indexCategory = i;
    category.push({indexCategory: i, category: el});
    for (let j = 0; j < elements[i].subCategory.length; j++) {
      let sub = elements[i].subCategory[j];
      let info = elements[i].subCategory[j].info;

      subcategory.push(
          {indexCategory: i, indexSubCategory: j, title: sub.title});

      infos.push(
          {indexCategory: i, indexSubCategory: j, title: info});

    }
  }
  console.log('_____Category_____');
  console.log(category);
  console.log('_____SubCategory_____');
  console.log(subcategory);
  console.log('_____Info_____');
  console.log(infos);
}

function renderElemnts(elemts, div, section) {
  let arrOfPCategory = [];
  for (let i = 0; i < elemts.length; i++) {
    let p = createElementDom("p", `${elemts[i][section]}` + i);
    p.innerText = elemts[i][section];
    p.style.background = "lightgreen";
    p.style.padding = '40px';
    p.style.margin = '10px';
    arrOfPCategory.push(p);
  }
  for (let i = 0; i < arrOfPCategory.length; i++) {
    div.appendChild(arrOfPCategory[i]);
    arrOfPCategory[i].addEventListener("click", e => {
      clearBox(divSecond.id);
      clearBox(divThird.id);
      console.log(arrOfPCategory[i]);
      renderSubElemnts(elemts[i].indexCategory, subcategory, "title",
          divSecond);

    });

  }
}

function renderSubElemnts(indexCategory, elementsSubcategory, field, div) {
  console.log(`clicked indexCategory:  ${indexCategory}`);
  console.log(`category to filter: ` + elementsSubcategory.forEach(
      x => console.log(x))
  );
  let filteredele = getArrbyIndexCategory(elementsSubcategory, indexCategory,
      "indexCategory");
  console.log(filteredele);
  let arrOfSubPCategory = [];
  for (let i = 0; i < filteredele.length; i++) {
    let p = createElementDom("p", `${filteredele[i][field]}` + i);
    p.innerText = filteredele[i][field];
    p.style.background = "yellow";
    p.style.padding = '40px';
    p.style.margin = '10px';
    arrOfSubPCategory.push(p);
  }
  for (let i = 0; i < arrOfSubPCategory.length; i++) {
    div.appendChild(arrOfSubPCategory[i]);

    arrOfSubPCategory[i].addEventListener("click", e => {

      clearBox(divThird.id);
      renderSubElemntsInfos(indexCategory, filteredele[i].indexSubCategory,
          infos, "title");

    });

  }

}

function renderSubElemntsInfos(indexCategory, indexSubcategory,
    elementsSubcategory) {
  console.log("____INfo____");
  console.log(`clicked indexCategory:  ${indexCategory}`);
  console.log(`clicked indexSubcategory:  ${indexSubcategory}`);
  console.log(`category to filter: ` + elementsSubcategory.forEach(
      x => console.log(x)));

  let infoTitile = getArrbyIndexCategorySubCategory(elementsSubcategory,
      indexCategory,
      indexSubcategory);
  console.log(infoTitile);

  let p = createElementDom("p",
      indexCategory + indexSubcategory);
  p.innerText = infoTitile;
  p.style.padding = '40px';
  p.style.margin = '10px';

  let button = createElementDom("input", indexCategory + indexSubcategory);
  button.type = "button";
  button.value = "CLICK ME";
  button.style.margin = '10px';
  let div = createElementDom("div", indexCategory + indexSubcategory);
  div.append(p);
  div.append(button);
  div.style.background = "pink";
  divThird.append(div);

  button.addEventListener("click", e => {
    alert("Item is added");
    clearBox(divSecond.id);
    clearBox(divThird.id);
    clearBox(divFirst.id);
    createModalWindow();
    document.querySelector("#form").classList.toggle("classtoggle");
  });

}

function createModalWindow() {

  let form = document.createElement("form");
  form.id = "form";
  form.classList.add("classtoggle");
  let hader = document.createElement("h1");
  hader.innerText = `Selected item: ${items[selectedItemInCart.indexCategory]
      .subCategory[selectedItemInCart.indexSubCategory].title} `;
  form.append(hader);

  let name = addElementinDom(form, "text", "Name");
  let surname = addElementinDom(form, "text", "Surname");
  let nameAfterFather = addElementinDom(form, "text", "Name after father");
  const cities = [
    "Dnipro",
    "Lutsk",
  ];

  const select = document.createElement("select");
  for (let key in cities) {
    let option = document.createElement("option");
    option.setAttribute('value', cities[key]);

    let optionText = document.createTextNode(cities[key]);
    option.appendChild(optionText);
    select.appendChild(option);

  }

  const post = [
    "New Post 1",
    "New Post 2",
    "New Post 3",
  ];
  const selectPost = document.createElement("select");
  selectPost.id = "selectPost";
  for (let key in post) {
    let option = document.createElement("option");
    option.setAttribute('value', post[key]);

    let optionText = document.createTextNode(post[key]);
    option.appendChild(optionText);

    selectPost.appendChild(option);

  }

  let afterPay = addElementinDom(form, "radio", "After pay");
  let beforePay = addElementinDom(form, "radio", "Before pay");

  let extraInfo = document.createElement("textarea");
  extraInfo.id = "extraInfo";
  extraInfo.rows = 4;
  extraInfo.cols = 30;
  extraInfo.name = "extraInfo";
  extraInfo.placeholder = "Input your wish....";
  let number = addElementinDom(form, "number",
      "Number of elements in the cart");
  form.append(select, selectPost, extraInfo);
  let button = document.createElement("button");
  button.id = "submitButton";
  button.innerText = "Submit data";
  form.append(button);

  document.body.append(form);

  let formelems =
      document.querySelectorAll('input,select');
  formelems.forEach((formelem) => {
    formelem.required = true;

  });

  button.addEventListener("click", (e) => {
    completeInfoAbotItemInCartShipment();
  });
}

function completeInfoAbotItemInCartShipment() {
  resultObject.item = document.querySelector("h1").innerText.slice(15);
  resultObject.name = document.querySelector("#Name").value;
  resultObject.surname = document.querySelector("#Surname").value;
  resultObject.city = document.querySelector("select").value;
  resultObject.quontityOfItem = document.querySelector(
      "input[name=number]").value;
  resultObject.postOffice = document.querySelector("#selectPost").value;
  resultObject.payFormat = document.querySelector(
      "input[name=radio]:checked").value;
  resultObject.extraInfo = document.querySelector("textarea").value;
  console.log(resultObject);

  document.body.innerHTML = " ";
  let divres = document.createElement("div");

  for (let x in resultObject) {
    let p = document.createElement("p");
    p.innerText = `${x}: ${resultObject[x]} `;
    divres.append(p);
  }
  
  document.body.append(divres);
}

function renderDivsBlocks() {
  document.body.append(divFirst);
  document.body.append(divSecond);
  document.body.append(divThird);
}

function getArrbyIndexCategory(elements, index, indexCat) {
  let res = [];
  elements.map(function (value) {
    if (value[indexCat] === index) {
      res.push(value);
    }
  });
  return res;
}

function getArrbyIndexCategorySubCategory(elements, indexCat,
    indexSubcat) {
  let res = [];
  elements.map(function (value) {
    if (value.indexCategory === indexCat && value.indexSubCategory
        === indexSubcat) {
      res.push(value.title);
      selectedItemInCart = value;

    }
  });
  return res;
}

function clearBox(elementID) {
  document.getElementById(elementID).innerHTML = "";
}

function addElementinDom(form, type, text) {
  var label = document.createElement("label");

  var element = document.createElement("input");
  element.setAttribute("type", type);
  element.setAttribute("value", text);
  element.setAttribute("name", type);
  element.setAttribute("id", text);

  if (text === "Name" || text === "Surname" || text === "Name after father") {
    element.setAttribute("value", "");
  } else if (type === "number") {
    element.setAttribute("value", "1");

  }

  label.appendChild(element);
  label.innerHTML += text;

  form.appendChild(label);

  return element;
}

addItemsToCategory({
  idCategory: 2,
  category: "Sports",
  subCategory:
      [{
        idSubCategory: 0,
        title: "weight",
        info: "info weight",
        isBought: false,
      },
        {
          idSubCategory: 1,
          title: "mat",
          info: "info mat",
          isBought: false,
        },
        {
          idSubCategory: 2,
          title: "rod",
          info: "info rod",
          isBought: false,
        },

      ]

}, items);
console.log(items);
let divFirst = createElementDom("div", "divFirst");
let divSecond = createElementDom("div", "divSecond");
let divThird = createElementDom("div", "divThird");
parseData(items);
renderDivsBlocks();
renderElemnts(category, divFirst, "category");

