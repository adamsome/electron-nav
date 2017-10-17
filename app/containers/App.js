import React from 'react'
import type { Children } from 'react'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'

type AppType = {
  children: Children
}

const App = ({ children }: AppType) => (
  <Layout sidebar={<Sidebar />}>
    {children}
  </Layout>
)

export default App
