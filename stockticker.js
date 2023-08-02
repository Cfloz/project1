


const fetchData = () => {
    const enterData = () => {
        userInput = document.querySelector('#formTicker').value;
        return userInput;


    }

    const endPoint = "https://api.polygon.io/v2/aggs/ticker/MSFT/prev?adjusted=true&apiKey=Adj2Hk_m_1i3ZpI3LvoI3tTXNWj5Lt33";

    fetch(endPoint)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const ticker = data.results[0].T
            console.log(ticker);
            const price = data.results[0].c;
            console.log(price)
            

            let tickerValue = document.querySelector('#ticker');
            tickerValue.innerHTML = ticker;
            let priceValue = document.querySelector('#price');
            priceValue.innerHTML = price;


        })
        .catch(error => {
            console.log(error);
        });
};
fetchData();
