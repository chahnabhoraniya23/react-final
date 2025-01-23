function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}


const reactElement = {
    type: 'a',
    children: 'click me',
    props: {
        href: "https://www.google.co.in/?client=safari&channel=mac_bm",
        target: "_blank"
    },
    
    

}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)