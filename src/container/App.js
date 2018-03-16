import React, { Component } from 'react'
import { connect } from 'react-redux'

import Sidebar from './Sidebar'
import MainContent from '../components/MainContent'
import ConfigMenu from './ConfigMenu'
import { DARK } from '../models/theme'

const mapState = state => ({
  theme: state.currentTheme
})

class App extends Component {
  componentDidMount = () => {
    const { theme } = this.props
    if (theme === DARK) {
      this.mainRef.classList.add('theme-dark')
    }
  }

  componentWillReceiveProps = ({ theme }) => {
    this.mainRef.classList.toggle('theme-dark')
  }

  toggleSideBar = () => {
    this.mainRef.classList.toggle('sidebar-close')
  }

  render() {
    return (
      <main ref={main => (this.mainRef = main)} className="main">
        <Sidebar />
        <MainContent />
        <ConfigMenu toggleSideBar={this.toggleSideBar} />
      </main>
    )
  }
}

export default connect(mapState)(App)
