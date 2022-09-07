import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import { HeaderOnly } from '~/components/Layout/'

//Public routes (no need login)
const PublicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/following', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
]

const PrivateRoutes = [
]

export { PublicRoutes, PrivateRoutes }