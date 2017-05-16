import React, { Component } from 'react'
import classnames from 'classnames'

class GameForm extends Component {
  state = {
    title: '',
    cover: '',
    errors: {}
  }

  handleChange = (event) => {
    if (!!this.state.errors[event.target.name]) {
      let errors = Object.assign({}, this.state.errors)
      delete errors[event.target.name]
      this.setState({
        [event.target.name]: event.target.value,
        errors
      })
    } else {
      this.setState({ [event.target.name]: event.target.value })
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const { title, cover } = this.state
    let errors = {}
    if (title === '') {
      errors.title = "Title can't be empty."
    }
    if (cover === '') {
      errors.cover = "Cover can't be empty."
    }
    this.setState({ errors })
  }

  render() {
    const { title, cover, errors } = this.state
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <h2>Add New Game</h2>

        <div className={classNames('field', { error: !!errors.title })}>
          <label htmlFor="title">Title</label>
          <input type="text"
            id="title"
            name="title"
            value={title}
            onChange={this.handleChange} />
          <span>{errors.title}</span>
        </div>
        <div className={classNames('field', { error: !!errors.cover })}>
          <label htmlFor="cover">Cover URL</label>
          <input type="text"
            id="cover"
            name="cover"
            value={cover}
            onChange={this.handleChange} />
          <span>{errors.cover}</span>
        </div>
        <div className="field">
          {cover !== '' && <img src={cover} alt="cover" className="ui small bordered image" />}
        </div>
        <div className="field">
          <button className="ui primary button">Save</button>
        </div>
      </form>
    )
  }
}

export default GameForm