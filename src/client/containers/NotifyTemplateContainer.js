import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FormControl } from 'react-bootstrap'
import Mustache from 'mustache'

import * as Actions from '../actions'
import FormControlWithLabel from '../components/FormControlWithLabel'

class TemplateContainer extends React.Component {
  componentWillMount() {
    this.props.changeLoading({ isContentReady: false })
    this.props.loadConfig()
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.saveConfig(this.props.settings)
    this.props.history.goBack()
  }

  renderTemplate() {
    try {
      return Mustache.render(this.props.settings.get('notifyTemplate'), { name: 124 })
    } catch (e) {
      return e.toString()
    }
  }

  render() {
    const { updateSettings } = this.props
    return this.props.isContentReady ? (
      <form action='#'>
        <FormControlWithLabel
          label='テンプレート'
          componentClass='textarea'
          onChange={e => this.props.updateSettings({ notifyTemplate: e.target.value })}
          onBlur={e => this.props.saveConfig(this.props.settings)}
          value={this.props.settings.get('notifyTemplate')}
        />
        <pre>
          {this.renderTemplate()}
        </pre>
        <FormControl
          type='submit'
          value='戻る'
          onClick={this.onSubmit.bind(this)}
        />
      </form>
    ) : null
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings,
    isContentReady: state.loading.get('isContentReady'),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateContainer)
