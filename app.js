const div=React.createElement('div',{},
    [React.createElement('h1',{},'sibling1'),
    React.createElement('h1',{},'sibling2')])

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(div)

