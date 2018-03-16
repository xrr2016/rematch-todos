import React from 'react'
// import { connect } from '@rematch/core'
import SearchBar from '../SearchBar'

const tags = [
  { label: 'ALL', active: true },
  { label: 'COMPLETED', active: false },
  { label: 'UNCOMPLETED', active: false },
  { label: 'DELETED', active: false }
]

export default () => {
  return (
    <nav className="sidebar">
      <h1 className="sidebar-title">Todos</h1>
      <ul className="sidebar-list">
        {tags.map((tag, index) => (
          <li className={`sidebar-list-item ${tag.active ? 'active' : ''}`} key={index}>
            {tag.label}
          </li>
        ))}
      </ul>
    </nav>
  )
}
