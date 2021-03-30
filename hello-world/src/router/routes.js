import NotFound from '../views/NotFound'
import MainPage from '../views/MainPage'
import SectionInfo from '../views/SectionInfo'

export default [{
        path: '*',
        component: NotFound
    },
    {
        name: 'Main Page',
        path: '/',
        component: MainPage,
        meta: {
            title: "Main Page"
        }
    },
    {
        name: 'sections',
        path: '/sections',
        component: SectionInfo,
        meta: {
            title: "Section Info"
        }
    }
]