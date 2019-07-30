const express = require('express')
const React = require('react')
const { renderToString } = require('react-dom/server')
const MyComponent = require('./dist/App')

const app = express()

const htmlfy = rootComponent => (
    `
    <html>
        <div id="app">${rootComponent}</div>
    </html>
    `
)

app.get('/', (req, res) => {
    // サーバサイドレンダリング
    const prerenderedContent = renderToString(React.createElement(MyComponent))
    const prerenderedHtml = htmlfy(prerenderedContent)

    res.send(prerenderedHtml)
})

app.listen(3000)
