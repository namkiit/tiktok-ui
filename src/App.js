import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PublicRoutes } from '~/routes'
import { DefaultLayout } from '~/layouts'
import { Fragment } from 'react'

function App() {
  return (
    <Router basename="tiktok-ui">
      <div className="App">
        <Routes>
          {PublicRoutes.map((route, index) => {
            const Page = route.component

            let Layout = DefaultLayout

            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }

            return <Route exact key={index} path={route.path} element={<Layout><Page /></Layout>}></Route>
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App
