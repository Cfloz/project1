//array to store the input values
let inputArray = [];
let inputLimit = 5; // specify the input limit

const fetchData = () => {
    // api key for polygon.io
    const apiKey = "Adj2Hk_m_1i3ZpI3LvoI3tTXNWj5Lt33";
    // get the ticker value from the input field
    const ticker = document.getElementById("tickerInput").value;
    // endpoint url to fetch the data
    const endPoint = `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=${apiKey}`;

    fetch(endPoint)
    
      .then(response => {
          if (!response.ok) {
              throw Error(response.statusText);
          }
          return response.json();
      })
      .then(data => {
        //code block to execute when the promise is resolved
        //variables to store the ticker and price values
          const ticker = data.results[0].T
          const price = data.results[0].c;
        //   DOM manipulation to display the ticker and price values
          let tickerValue = document.querySelector('#ticker');
          tickerValue.innerHTML = ticker;
          let priceValue = document.querySelector('#price');
          // price 
          priceValue.innerHTML = `$${price}`;
          let logData = `Stock: ${ticker}, Price: $${price}`;
          // console.log(logData);
          inputArray.unshift(logData);
        //   If statement to check the input limit to display to 5
          if (inputArray.length > inputLimit) {
            inputArray.pop();
          }
          // DOM manipulation to display the input values
          let div = document.getElementById('input-log');
          div.innerHTML = inputArray.join('<br>');
      })
      .catch(error => {
          console.log(error);
      });
      // clear the input field
      document.getElementById("tickerInput").value = '';
};

function convertToCapitalLetters(event) {
    const inputElement = event.target;
    const inputValue = inputElement.value;
    inputElement.value = inputValue.toUpperCase();
}