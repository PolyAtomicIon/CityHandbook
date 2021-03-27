import NotFound from '../views/NotFound';
import MainPage from '../views/MainPage'

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
]