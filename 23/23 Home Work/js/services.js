var galleryService = (function(){

    let counter = {
        showed : 0,
        quantity : 0
    };

    function setCounter(arrayConfig) {
        counter.showed = 0;
        arrayConfig.forEach(function(obj) {
            if (obj.display == true) {counter.showed++};
        });
        counter.quantity = arrayConfig.length;
    };

    function checkUnitQuantity() {
        let btn = document.getElementById('addUnit');
        if (counter.showed == counter.quantity) {
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-default');
        } else {
            btn.classList.remove('btn-default');
            btn.classList.add('btn-primary');
        };
    };

    function showModal(modalWindow) {
        modalWindow.classList.remove('fade');
        modalWindow.classList.add('show');
    };

    function getGalaryData () {
        let modifyUrl = (string) => (string.slice(0, 7) == 'http://') ? string : `http://${string}`
        let modifyDescription = (string) => (string.length >= 15) ? `${string.substring(0, 14)}...` : string
        let modifyName = (string) => `${string[0].toUpperCase()}${string.substring(1).toLowerCase()}`
        let modifyDate = (data) => {
            let option = {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'};
            let date = new Date(data);
            return date.toLocaleDateString('en-GB', option);
        };
        return data.map((obj) => {
            return {
                url : modifyUrl(obj.url),
                name : modifyName(obj.name),
                description : modifyDescription(obj.description),
                date : modifyDate(obj.date),
                dateSort : obj.date,
                id : obj.id,
                display : false,
            }
        })
    };

    function createDisplayArrayConfig (array) {
        return array.map(function(obj){
            return {
                id : obj.id,
                display : obj.display
            }
        })
    };

    function getDisplayConfig(array) {
        let checkArrayConfig = (array) => {
            let inbox = JSON.parse(localStorage.getItem('arrayConfig'));
            if (Array.isArray(inbox)) {
                return inbox;
            };
            return createDisplayArrayConfig (array);
        };
        return {
            sortMethod : localStorage.sortMethod || '0',
            arrayConfig : checkArrayConfig (array)
        };
    };

    function showUnit (arrayConfig, modalWindow) {
        let array = arrayConfig;
        for(let i = 0 ; i < array.length ; i++) {
            if (!array[i].display) {
                array[i].display = true;
                break;
            } else if (i == array.length - 1) {
                showModal(modalWindow);
            }
        };
        return array
    };

    function hideUnit (event, arrayConfig) {
        let element = event.target;
        for(let i = 0 ; i < arrayConfig.length ; i++) {
            if(arrayConfig[i].id == element.id) {
                arrayConfig[i].display = false;
                let targetElement = arrayConfig.splice(i, 1);
                arrayConfig.push(targetElement[0]);
                break;
            };
        };
        return arrayConfig
    };

    function modifyDisplayArrayConfig (configArray, galleryArray) {
        let newArray = [];
        let element;
            configArray.forEach(function(obj){
                element = galleryArray.filter(item => item.id == obj.id);
                element[0].display = obj.display;
                newArray.push(element[0]);
            })
        return newArray;
    };

    function sortGalery(event, config, data) {
      let sortData = (event, data) => {
          let array = data;
          switch (event.target.value) {
            case '0':
                array.sort((a, b) => a.dateSort < b.dateSort ? 1 : -1);
                break;
            case '1':
                array.sort((a, b) => a.dateSort > b.dateSort ? 1 : -1);
                break;
            case '2':
                array.sort((a, b) => a.name > b.name ? 1 : -1);
                break;
            case '3':
                array.sort((a, b) => a.name < b.name ? 1 : -1);
                break;
          };
          return array;
      };
      return {
          sortMethod : event.target.value,
          arrayConfig : createDisplayArrayConfig (sortData(event, data))
      };
    };

    function setLocalStorage (obj) {
        localStorage.setItem('sortMethod', `${obj.sortMethod}`);
        localStorage.setItem('arrayConfig', `${JSON.stringify(obj.arrayConfig)}`);
    };

    function printResult (array) {
        let resultString = `<div class="counter"><div>Показано ${counter.showed} из ${counter.quantity}</div></div>`;
        array.forEach(function (obj) {
            if (obj.display) {
                resultString +=
                `<div class="col-sm-3 col-xs-6 card-list">\
                  <img src="${obj.url}" alt="${obj.name}" class="img-thumbnail">\
                  <div class="info-wrapper">\
                      <div class="text-muted">${obj.name}</div>\
                      <div class="text-muted top-padding">${obj.description}</div>\
                      <div class="text-muted">${obj.date}</div>\
                      <button id="${obj.id}" class="btn btn-danger">Удалить</button>
                      </div>\
                </div>`;
            }
        });
        return resultString;
    };

    return {
        getGalaryData : getGalaryData,
        getDisplayConfig : getDisplayConfig,
        showUnit : showUnit,
        hideUnit : hideUnit,
        modifyDisplayArrayConfig : modifyDisplayArrayConfig,
        setLocalStorage : setLocalStorage,
        printResult : printResult,
        sortGalery : sortGalery,
        setCounter : setCounter,
        checkUnitQuantity : checkUnitQuantity
    };
}());
