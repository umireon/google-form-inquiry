function onInstall(e) {
  App.onInstall(e);
}

function onOpen(e) {
  App.onOpen(e);
}

function onShowConfig() {
  App.onShowConfig();
}

function getSettings() {
  return {};
}

function loadConfig() {
  return App.loadConfig();
}

function saveConfig(settings) {
  return App.saveConfig(settings);
}

function sendNotify({}) {

}

function onFormSubmit(e) {
  var props = PropertiesService.getDocumentProperties();
  var data = {
    formResponse: {
      id: e.response.getId(),
      itemResponse: e.response.getItemResponse().map(function(itemResponse) {
        var item = itemResponse.getItem();
        return {
          id: item.getId(),
          title: item.getTitle(),
          response: itemResponse.getResponse(),
        };
      })
    }
  };
}

function doGet(e) {
  QUnit.urlParams(e.parameter);
  QUnit.load(Test.run);
  return QUnit.getHtml();
}
