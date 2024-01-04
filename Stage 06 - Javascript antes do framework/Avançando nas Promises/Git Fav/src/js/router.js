export class Router {
    routes = {}

    create(pathname, page) {
        this.routes[pathname] = page
    }
    route(event) {
        event = event || window.event
        event.preventDefault()
        window.history.pushState({}, "", event.target.href)
        this.onpopstate()
    }
    onpopstate() {
        const { pathname } = window.location
        const route = this.routes[pathname] === "/index.html" ? "/" : (this.routes[pathname] || this.routes[404])
        console.log(route)
        fetch(route)
            .then(data => data.text())
            .then(html => {
                const root = document.querySelector('#root')
                root.innerHTML = html
            })
    }
}