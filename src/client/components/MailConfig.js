import React from 'react'
import { Panel } from 'react-bootstrap'
import TextBox from './TextBox'
import FormControlWithLabel from './FormControlWithLabel'

export default class MailConfig extends React.Component {
  render() {
    return (
      <div>
        <Panel
          header='メール設定'
          collapsible
          expanded={this.props.isEnabled}
        >
          <FormControlWithLabel
            label='バックエンド'
            componentClass='select'
          >
            <option>GMail</option>
            <option>Mailgun</option>
            <option>SendGrid</option>
          </FormControlWithLabel>
          <FormControlWithLabel
            label='APIキー'
            value={this.props.sgApiKey}
            required={this.props.isEnabled}
            onChange={this.props.onChangeSgApiKey}
          />
          <FormControlWithLabel
            label='送信元メールアドレス'
            type='email'
            value={this.props.fromEmail}
            required={this.props.isEnabled}
            onChange={this.props.onChangeFromEmail}
          />
          <FormControlWithLabel
            label='送信元名'
            value={this.props.fromName}
            required={this.props.isEnabled}
            onChange={this.props.onChangeFromName}
          />
          <FormControlWithLabel
            label='返信先メールアドレス'
            type='email'
            value={this.props.replyToEmail}
            onChange={this.props.onChangeReplyToEmail}
          />
          <FormControlWithLabel
            label='返信先名'
            value={this.props.replyToName}
            onChange={this.props.onChangeReplyToName}
          />
        </Panel>
      </div>
    )
  }
}
