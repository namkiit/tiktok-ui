import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PublicRoutes } from '~/routes'
import { DefaultLayout } from '~/components/Layout'
import { Fragment } from 'react'

function App() {
  return (
    <Router>
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

            return <Route index={index} path={route.path} element={<Layout><Page /></Layout>}></Route>
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App
