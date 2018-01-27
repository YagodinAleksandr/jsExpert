(function(){

let btn = document.getElementById("play");
let parent = document.getElementById('galeryBlock');

let createConfig = () => {
    let getMethod = () => {
        let result = document.getElementById("type-selector");
        return result.options[result.selectedIndex].value;
    }
    let getUnitsQuantity = () => {
        let result = document.getElementById("line-selector");
        return result.options[result.selectedIndex].value;
    }
    let config = {
        method: getMethod(),
        quantity: getUnitsQuantity()
    }
    if(config.method == 0) {
        alert('Выберите метод построения галереи')
        return null;
    };
    return config;
};

let modifyData = (quantity) => {
    let modifyUrl = (string) => (string.slice(0, 7) == 'http://') ? string : `http://${string}`
    let modifyDescription = (string) => (string.length >= 15) ? `${string.substring(0, 14)}...` : string
    let modifyName = (string) => `${string[0].toUpperCase()}${string.substring(1).toLowerCase()}`
    let modifyDate = (data) => {
        let option = {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'};
        let date = new Date(data);
        return date.toLocaleDateString('en-GB', option);
    };
    let cloneDate = [...data];
    if (quantity > 0) {cloneDate.splice(quantity)};
    let productionData = cloneDate.map((obj) => {
        return {
            url : modifyUrl(obj.url),
            name : modifyName(obj.name),
            description : modifyDescription(obj.description),
            date : modifyDate(obj.date)
        }
    })
    return productionData;
};

let replaceMethod = (array) => {
  let replaceMethodTemplate = '<h3>Галлерея построенная с помощью replace</h3>';
  for (let i = 0; array.length > i; i++) {
    let replaceItemTemplate =
        '<div class="col-sm-3 col-xs-6 card-list">\
            <img src="$url" alt="$name" class="img-thumbnail">\
            <div class="info-wrapper">\
            <div class="text-muted">$name</div>\
            <div class="text-muted top-padding">$description</div>\
            <div class="text-muted">$date</div>\
            </div>\
        </div>';
    replaceMethodTemplate += replaceItemTemplate
    .replace(/\$name/gi, array[i].name)
    .replace("$url", array[i].url)
    .replace("$description", array[i].description)
    .replace("$date", array[i].date);
  }
  return replaceMethodTemplate;
};

let templatesStringsMethod = (array) => {
    let resultString = '<h3>Галлерея построенная с помощью шаблонных строк</h3>';
    for (let i = 0; array.length > i; i++) {
        resultString +=
        `<div class="col-sm-3 col-xs-6 card-list">\
          <img src="${array[i].url}" alt="${array[i].name}" class="img-thumbnail">\
          <div class="info-wrapper">\
              <div class="text-muted">${array[i].name}</div>\
              <div class="text-muted top-padding">${array[i].description}</div>\
              <div class="text-muted">${array[i].date}</div>\
              </div>\
        </div>`;
    }
    return resultString;
};

let createElementsMethod = (array) => {
    parent.innerHTML = '';

    let nameWay = document.createElement('h3');
    nameWay.innerText = 'Галлерея построенная с помощью createElement';
    parent.appendChild(nameWay);

    for (let i = 0; array.length > i; i++) {
        let templateUnit = document.createElement('div'),
            image = document.createElement('img'),
            wrapper = document.createElement('div'),
            pointName = document.createElement('div'),
            pointDescription = document.createElement('div'),
            pointDate = document.createElement('div'),
            templateUnitClasses = templateUnit.classList;

        templateUnitClasses.add('col-sm-3', 'col-xs-6', 'card-list');
        image.setAttribute('src', array[i].url);
        image.setAttribute('alt', array[i].name);
        image.setAttribute('class', 'img-thumbnail');
        wrapper.setAttribute('class', 'info-wrapper');
        pointName.setAttribute('class', 'text-muted');
        pointName.innerText = array[i].name;
        pointDescription.setAttribute('class', 'text-muted top-padding');
        pointDescription.innerText = array[i].description;
        pointDate.setAttribute('class', 'text-muted');
        pointDate.innerText = array[i].date;
        templateUnit.appendChild(image);
        templateUnit.appendChild(wrapper);
        wrapper.appendChild(pointName);
        wrapper.appendChild(pointDescription);
        wrapper.appendChild(pointDate);
        parent.appendChild(templateUnit);
    }
    return null;
};

let createTemplate = (way, array) => {
    let template;
        switch (way) {
          case 'replaceMethod':
              template = replaceMethod(array);
              break;
          case 'templateMethod':
              template = templatesStringsMethod(array);
              break;
          case 'createElementsMethod':
              template = createElementsMethod(array);
              break;
          default: template = 'no one result available';
        }
    return template;
};

let setTemplate = (template) => {
    if(template !== null){
        parent.innerHTML = template;
    }
};

let createGalery = (configObj) => {
    if(configObj) {
        let way = configObj.method;
        let units = modifyData(configObj.quantity);
        setTemplate(createTemplate(way, units));
    }
};

function init() {
    let user = createConfig();
    createGalery(user);
};

btn.addEventListener("click", init);

})()
