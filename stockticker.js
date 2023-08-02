const fetchData = () => {
    const apiKey = "Adj2Hk_m_1i3ZpI3LvoI3tTXNWj5Lt33";
    const ticker = document.getElementById("tickerInput").value;
    const endPoint = `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=${apiKey}`;

    // Below is the link teseter, uncomment to show URL.
    //document.getElementById("displayEndPoint").innerHTML = endPoint;

    fetch(endPoint)
      .then(response => {
          if (!response.ok) {
              throw Error(response.statusText);
          }
          return response.json();
      })
      .then(data => {
          const ticker = data.results[0].T
          const price = data.results[0].c;

          let tickerValue = document.querySelector('#ticker');
          tickerValue.innerHTML = ticker;
          let priceValue = document.querySelector('#price');
          priceValue.innerHTML = price;
      })
      .catch(error => {
          console.log(error);
      });
  };


  function convertToCapitalLetters(event) {
    const inputElement = event.target;
    const inputValue = inputElement.value;
    inputElement.value = inputValue.toUpperCase();
}