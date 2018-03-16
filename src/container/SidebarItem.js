import React, { Component } from 'react'
import { dispatch } from '@rematch/core'

export default class SidebarItem extends Component {
  handleClickTag = () => {
    this.props.toggleTagActive(this.props.type)
    dispatch.currentType.changeType(this.props.type)
  }

  render() {
    const { active, label } = this.props
    return (
      <li
        onClick={this.handleClickTag}
        className={`sidebar-list-item ${active ? 'active' : ''}`}
      >
        {label}
      </li>
    )
  }
}
