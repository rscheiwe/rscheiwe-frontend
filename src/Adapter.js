import { proxyUrl, targetUrl } from './Variables/Variables.js'

const Adapter = {
  readArticles: function() {
    return fetch(proxyUrl + targetUrl, {
      method: "GET"
    }).then(res => res.json())
  }
}

export default Adapter
