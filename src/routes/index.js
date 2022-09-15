import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Live from '~/pages/Live'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Setting from '~/pages/Setting'
import Feedback from '~/pages/Feedback'
import { HeaderOnly } from '~/components/Layouts/'

//Public routes (no need login)
const PublicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/live', component: Live },
    { path: '/profile', component: Profile },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/setting', component: Setting },
    { path: '/feedback', component: Feedback, layout: HeaderOnly }
]

const PrivateRoutes = [
]

export { PublicRoutes, PrivateRoutes }