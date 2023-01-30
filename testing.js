const myCountryInfo = {
    country: 'India',
    capital: 'New Delhi'
  }
  
  // stringifying the myCountryInfo object and 
  // storing it in the localStorage
  localStorage.setItem('myCountryInfo', JSON.stringify(myCountryInfo))
  
  // retrieving localStorage data in HTML
  var a = document.getElementById("content").innerHTML = localStorage.getItem("myCountryInfo");

  console.log(a)


  const array = [2, 5, 9];

console.log(array);

const index = array.indexOf(5);
if (index > -1) { // only splice array when item is found
  array.splice(index, 1); // 2nd parameter means remove one item only
}

// array = [2, 9]
console.log(array); 