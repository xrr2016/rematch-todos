import React, { Component } from 'react'

import { ALL, COMPLETED, ACTIVE, DELETED } from '../models/type'
import SidebarItem from './SidebarItem'

class Sidebar extends Component {
  state = {
    tags: [
      { label: ALL, active: false, type: ALL },
      { label: ACTIVE, active: true, type: ACTIVE },
      { label: COMPLETED, active: false, type: COMPLETED },
      { label: DELETED, active: false, type: DELETED }
    ]
  }
  toggleTagActive = type => {
    const { tags } = this.state
    const copyTags = [...tags]
    copyTags.forEach((tag, idx) => {
      tag.active = false
      if (tag.type === type) {
        tag.active = true
      }
    })
    this.setState({ tags: copyTags })
  }

  render() {
    const { tags } = this.state
    return (
      <nav className="sidebar">
        <h1 className="sidebar-title">Todos</h1>
        <ul className="sidebar-list">
          {tags.map((tag, index) => (
            <SidebarItem toggleTagActive={this.toggleTagActive} key={index} {...tag} />
          ))}
        </ul>
      </nav>
    )
  }
}

export default Sidebar
