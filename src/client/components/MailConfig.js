import React from 'react'
import { Panel, Collapse } from 'react-bootstrap'
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
            value={this.props.backend}
            required={this.props.isEnabled}
            onChange={this.props.onChangeBackend}
          >
            <option disabled></option>
            <option>GMail</option>
            <option>Mailgun</option>
            <option>SendGrid</option>
          </FormControlWithLabel>
          <Collapse in={this.props.backend != 'GMail'}>
            <div>
              <FormControlWithLabel
                label='APIキー'
                value={this.props.sgApiKey}
                required={this.props.backend != 'GMail'}
                onChange={this.props.onChangeSgApiKey}
              />
              <FormControlWithLabel
                label='送信元メールアドレス'
                type='email'
                value={this.props.fromEmail}
                required={this.props.backend != 'GMail'}
                onChange={this.props.onChangeFromEmail}
              />
              <FormControlWithLabel
                label='送信元名'
                value={this.props.fromName}
                required={this.props.backend != 'GMail'}
                onChange={this.props.onChangeFromName}
              />
            </div>
          </Collapse>
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
