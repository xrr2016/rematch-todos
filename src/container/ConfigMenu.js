import React, { Component } from 'react'
import { dispatch } from '@rematch/core'
import { connect } from 'react-redux'
import { LIGHT, DARK } from '../models/theme'

const mapState = state => ({
  theme: state.currentTheme
})

class ConfigMenu extends Component {
  handleClickIcon = e => {
    this.iconRef.classList.toggle('rotate')
    this.menuRef.classList.toggle('show')
  }

  handleClickClearBth = () => {
    const res = window.confirm('Are you sure to delete all todos?')
    this.iconRef.classList.toggle('rotate')
    this.menuRef.classList.toggle('show')
    if (!res) return
    dispatch.todos.clearTodos()
  }

  handleClickChangeTheme = () => {
    const newTheme = this.props.theme === LIGHT ? DARK : LIGHT
    this.iconRef.classList.toggle('rotate')
    this.menuRef.classList.toggle('show')
    dispatch.currentTheme.changeTheme(newTheme)
  }

  handleClickCloseToggleSideBar = () => {
    this.iconRef.classList.toggle('rotate')
    this.menuRef.classList.toggle('show')
    this.props.toggleSideBar()
  }

  render() {
    return (
      <div className="config-container">
        <ul ref={menu => (this.menuRef = menu)} className="config-menu">
          <li className="menu-item" onClick={this.handleClickCloseToggleSideBar}>
            Toggle sidebar
          </li>
          <li className="menu-item" onClick={this.handleClickClearBth}>
            Clear todos
          </li>
          <li className="menu-item" onClick={this.handleClickChangeTheme}>
            Change theme
          </li>
        </ul>
        <svg
          onClick={this.handleClickIcon}
          className="config-icon"
          width="32"
          height="32"
          ref={icon => (this.iconRef = icon)}
          viewBox="0 0 1024 1024"
        >
          <path
            fill="#fff"
            d="M844.8 883.2h-256c-19.2 0-38.4-19.2-38.4-38.4v-256c0-19.2 19.2-38.4 38.4-38.4h256c19.2 0 38.4 19.2 38.4 38.4v256c0 19.2-19.2 38.4-38.4 38.4zm0-403.2h-256c-19.2 0-38.4-19.2-38.4-38.4v-256c0-19.2 19.2-38.4 38.4-38.4h256c19.2 0 38.4 19.2 38.4 38.4v256c0 19.2-19.2 38.4-38.4 38.4zM435.2 883.2h-256c-19.2 0-38.4-19.2-38.4-38.4v-256c0-19.2 19.2-38.4 38.4-38.4h256c19.2 0 38.4 19.2 38.4 38.4v256c6.4 19.2-12.8 38.4-38.4 38.4zm0-403.2h-256c-19.2 0-38.4-19.2-38.4-38.4v-256c0-19.2 19.2-38.4 38.4-38.4h256c19.2 0 38.4 19.2 38.4 38.4v256c6.4 19.2-12.8 38.4-38.4 38.4z"
          />
        </svg>
      </div>
    )
  }
}

export default connect(mapState)(ConfigMenu)
