import ConfigService from './ConfigService'

export function onInstall(e) {
  onOpen(e);
}

export function onOpen(e) {
  FormApp.getUi()
    .createAddonMenu()
    .addItem('設定', 'onShowConfig')
    .addToUi();
}

export function onShowConfig() {
  var ui = HtmlService.createHtmlOutputFromFile('index').setTitle('自動返信通知');
  FormApp.getUi().showSidebar(ui);
}

export { loadConfig, saveConfig } from './ConfigService'

export class MailgunProvider {
  send(options) {
    var token = Utilities.base64Encode("api:" + options.apikey);
    var url = this.buildUrl(options.fromEmail);
    var param = this.buildParam(options, token);
    return UrlFetchApp.fetch(url, param);
  }

  buildUrl(fromEmail) {
    var domain = fromEmail.replace(/.*@/, "");
    return "https://api.mailgun.net/v3/" + domain + "/messages";
  }

  buildParam(options, token) {
    return {
      method: 'post',
      headers: {
        "Authorization": "Basic " + token,
      },
      payload: {
        "from": options.fromName + " <" + options.fromEmail + ">",
        "to": options.toName + " <" + options.toEmail + ">",
        "h:Reply-To": options.replyToName + " <" + options.replyToEmail + ">",
        "subject": options.subject,
        "text": options.text,
      },
    };
  }
}
