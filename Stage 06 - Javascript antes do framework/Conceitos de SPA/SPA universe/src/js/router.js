export class Router {
    routes = {}

    create(pathname, page) {
        this.routes[pathname] = page
    }
    route(event) {
        event = event || window.event
        event.preventDefault()
        window.history.pushState({}, "", event.target.href)
        //gambiarra para desmarcar link de navegacao
        const elementLink = event.target
        const otherLinks = Array.from(document.querySelectorAll('a')).filter(link => link != elementLink);

        otherLinks.forEach((a) => a.classList.remove('ativado'))
        if (!elementLink.classList.contains('ativado'))
            elementLink.classList.add('ativado')
        //gambiarra para desmarcar link de navegacao
        this.onpopstate()
    }
    onpopstate() {
        const { pathname } = window.location
        const route = this.routes[pathname] === "/index.html" ? "/" : this.routes[pathname] || this.routes[404]
        fetch(route)
            .then(data => data.text())
            .then(html => {
                const root = document.querySelector('#root')
                root.innerHTML = html
            })
    }
}