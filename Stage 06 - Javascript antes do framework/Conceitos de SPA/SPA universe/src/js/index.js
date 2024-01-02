import { Router } from './router.js'

const router = new Router()
router.create(404, 'src/pages/404.html')
router.create('/', 'src/pages/home.html')
router.create('/exploracao', 'src/pages/exploracao.html')
router.create('/o-universo', 'src/pages/o-universo.html')
router.onpopstate()
window.onpopstate = () => router.onpopstate()
window.route = () => router.route()