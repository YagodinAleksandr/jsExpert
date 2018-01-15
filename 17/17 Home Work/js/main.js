var btn = document.getElementById("play");

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
  let newData = [];

    data.splice(5, 1);
    data.forEach(obj => {
      delete obj.id;
      newData.push(obj);
    })

  let productionData = newData.map((obj) => {
    let newObj = {};

    newObj.url = modifyUrl(obj.url);
    newObj.name = modifyName(obj.name);
    newObj.params = modifyParams(obj.params);
    newObj.description = modifyDescription(obj.description);
    newObj.date = modifyDate(obj.date);
    newObj.isVisible = obj.params.status;

    return newObj;
  })
showResult(productionData);
}

btn.addEventListener("click", transform);
