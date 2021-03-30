import NotFound from '../views/NotFound'
import MainPage from '../views/MainPage'
import SectionInfo from '../views/SectionInfo'
import DetailedPage from '../views/DetailedPage'

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
    },
    {
        name: 'detailed',
        path: '/detailed',
        component: DetailedPage,
        meta: {
            title: "Detailed Info"
        }
    }
]