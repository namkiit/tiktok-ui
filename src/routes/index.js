import config from '~/config'

//Layout
import { HeaderOnly } from '~/layouts'

//Pages
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Live from '~/pages/Live'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Coin from '~/pages/Upload'
import Setting from '~/pages/Setting'
import Feedback from '~/pages/Feedback'

//Public routes (no need login)
const PublicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.coin, component: Coin, layout: HeaderOnly },
    { path: config.routes.setting, component: Setting },
    { path: config.routes.feedback, component: Feedback, layout: HeaderOnly }
]

const PrivateRoutes = [
]

export { PublicRoutes, PrivateRoutes }