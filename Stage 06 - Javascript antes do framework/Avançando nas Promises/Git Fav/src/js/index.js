import { Router } from './router.js'

const router = new Router()
router.create(404, 'src/pages/404.html')
router.create('/', 'src/pages/home.html')
router.onpopstate()
window.onpopstate = () => router.onpopstate()
window.route = () => router.route()