const jsdom = require('jsdom')
const { JSDOM } = jsdom

const dom = new JSDOM(``, {})

var document = dom.window.document

function parseURL(url) {
    var parser = document.createElement('a'),
        searchObject = {},
        queries,
        split,
        i
        // Let the browser do the work
    parser.href = url
        // Convert query string to object
    queries = parser.search.replace(/^\?/, '').split('&')
    for (i = 0; i < queries.length; i++) {
        split = queries[i].split('=')
        searchObject[split[0]] = split[1]
    }
    return {
        protocol: parser.protocol,
        host: parser.host,
        hostname: parser.hostname,
        port: parser.port,
        pathname: parser.pathname,
        search: parser.search,
        searchObject: searchObject,
        hash: parser.hash
    }
}

var urldata = parseURL('http://60.251.125.208:26000/#/list?ssssss=sssss')
    //console.log('urldata', urldata)
console.log('hash', urldata)
