var mozmill = {}; Components.utils.import('resource://mozmill/modules/mozmill.js', mozmill);
var elementslib = {}; Components.utils.import('resource://mozmill/modules/elementslib.js', elementslib);

var setupModule = function(module) {
  module.controller = mozmill.getBrowserController();
}

var testKnowRightsClick = function(){
  controller.sleep(1000)
  controller.waitForPageLoad(2000)
  controller.sleep(2000)
  var e = new elementslib.Lookup(controller.window.document, '/id("main-window")/id("browser")/id("appcontent")/id("content")/anon({"anonid":"tabbox"})/anon({"anonid":"panelcontainer"})/[0]/{"label":"Mozilla Firefox is free and open software from the non-profit Mozilla Foundation.","value":"about-rights"}/{"accesskey":"K"}');
  controller.waitForElement(e);
  controller.click(e);
  controller.sleep(500);
  if (controller.window.document.title != "about:rights") {
    throw "Did not go to the about:rights page."
  }
}