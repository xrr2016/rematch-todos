import React, { Component } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { saveGame } from '../actions/actions'

class GameForm extends Component {
  state = {
    title: '',
    cover: '',
    errors: {},
    done: false,
    loading: false
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
    const isValid = Object.keys(errors).length === 0

    if (isValid) {
      this.setState({ loading: true })
      this.props.saveGame({ title, cover }).then(
        () => {
          this.setState({ done: true })
        },
        (err) => err.response.json().then(({ errors }) => {
          this.setState({
            errors,
            loading: false
          })
        })
      )
    }
  }

  render() {
    const { title, cover, errors, loading, done } = this.state
    const form = (
      <form className={classnames('ui', 'form', { loading: loading })}
        onSubmit={this.handleSubmit}>
        <h2>Add New Game</h2>
        {!!errors.global &&
          <div className="ui negative message">
            <p>{errors.global}</p>
          </div>
        }
        <div className={classnames('field', { error: !!errors.title })}>
          <label htmlFor="title">Title</label>
          <input type="text"
            id="title"
            name="title"
            value={title}
            onChange={this.handleChange} />
          <span>{errors.title}</span>
        </div>
        <div className={classnames('field', { error: !!errors.cover })}>
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
    return (
      <div>
        {done ? <Redirect to="/games" /> : form}
      </div>
    )
  }
}

export default connect(null, { saveGame })(GameForm)