const bearerToken = "Adj2Hk_m_1i3ZpI3LvoI3tTXNWj5Lt33"

const { restClient } = require('@polygon.io/client-js');
const rest = restClient(bearerToken);

fetch('https://api.polygon.io/v2/', {
  headers: {Authentication: 'Bearer {bearerToken}'}
})
   .then(resp => resp.json())
   .then(json => console.log(JSON.stringify(json)))











// Path: js/stockticker.js
const stockTicker = document.querySelector('.stock-ticker')
const stockTickerItems = stockTicker.querySelectorAll('.stock-ticker__item')
const stockTickerItemsLength = stockTickerItems.length
const stockTickerHeight = stockTicker.offsetHeight
const stockTickerDuration = stockTickerItemsLength * 2
const stockTickerDelay = stockTickerItemsLength * 0.5

stockTicker.style.setProperty('--stock-ticker-height', `${stockTickerHeight}px`)
stockTicker.style.setProperty('--stock-ticker-duration', `${stockTickerDuration}s`)
stockTicker.style.setProperty('--stock-ticker-delay', `${stockTickerDelay}s`)
stockTicker.style.setProperty('--stock-ticker-items-length', stockTickerItemsLength)
