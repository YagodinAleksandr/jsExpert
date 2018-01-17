var btn = document.getElementById("play");

let createNewArray = (array) => {
  let newArray = [];
    array.forEach(obj => {
      let result = {
        name : obj.name,
        url : obj.url,
        params : obj.params,
        description : obj.description,
        date : obj.date
      }
      newArray.push(result);
    })
  return newArray;
}

let modifyUrl = (string) => "http://" + string;

let modifyName = (string) => {
  let firstLetter = string.substring(0, 1).toUpperCase();
  let otherText = string.substring(1).toLowerCase();
  return firstLetter + otherText
};

let modifyParams = (obj) => obj.status + "=>" + obj.progress;

let modifyDescription = (string) =>
(string.length >= 15) ? string.substring(0, 14) + "..." : string;

let modifyDate = (date) => {
  var tmpDate = new Date(date);
  return tmpDate.getFullYear() + "/" +
         tmpDate.getMonth() + "/" +
         tmpDate.getDate() + " " +
         tmpDate.getHours() + ":" +
         tmpDate.getMinutes();
};

let showResult = (array) =>
console.log(array.filter((obj) => obj.isVisible == true));

function transform() {
  let newData = createNewArray(data);
  newData.splice(5, 1);

  let productionData = newData.map((obj) => {
    return {
      url : modifyUrl(obj.url),
      name : modifyName(obj.name),
      params : modifyParams(obj.params),
      description : modifyDescription(obj.description),
      date : modifyDate(obj.date),
      isVisible : obj.params.status
    }
  })
showResult(productionData);
}

btn.addEventListener("click", transform);
