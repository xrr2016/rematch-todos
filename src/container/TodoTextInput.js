import React, { Component } from 'react'

export default class TodoTextInput extends Component {
  state = { text: this.props.text }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { text } = this.state
    if (!text.length) return
    this.props.saveEdit(text)
    this.setState({ text: '' })
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.text}
        onBlur={this.handleSubmit}
        onChange={this.handleChange}
        className="todo-text-input"
      />
    )
  }
}
