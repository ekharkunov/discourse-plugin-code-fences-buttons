import {withPluginApi} from 'discourse/lib/plugin-api';

function addButtons(api, siteSettings) {
  if (siteSettings.cfbtn_enabled) {
    //openHAB items syntax button
    if (siteSettings.cfbtn_openhab_items) {
      api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "cfbtn_openhab_items",
          group: "extras",
          icon: "far-file-alt",
          perform: e => e.applySurround('\n```csv\n', '\n```\n', 'cfbtn_code_default_text', { multiline: false } )
        });
      });
    }
    //openHAB rules syntax button
    if (siteSettings.cfbtn_openhab_rules) {
      api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "cfbtn_openhab_rules",
          group: "extras",
          icon: "far-file-code",
          perform: e => e.applySurround('\n```php\n', '\n```\n', 'cfbtn_code_default_text', { multiline: false } )
        });
      });
    }
    //openHAB sitemap syntax button
    if (siteSettings.cfbtn_openhab_sitemap) {
      api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "cfbtn_openhab_sitemap",
          group: "extras",
          icon: "far-file-image",
          perform: e => e.applySurround('\n```php\n', '\n```\n', 'cfbtn_code_default_text', { multiline: false } )
        });
      });
    }
    //javascript
    if (siteSettings.cfbtn_javascript) {
      api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "cfbtn_javascript",
          group: "extras",
          icon: "far-file-code",
          perform: e => e.applySurround('\n```javascript\n', '\n```\n', 'cfbtn_code_default_text', { multiline: false } )
        });
      });
    }
    //custom syntax, defined in discourse settings dialog
    if (siteSettings.cfbtn_custom1.length !== 0) {
      var syntax = siteSettings.cfbtn_custom1;
      api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: ("cfbtn_custom1"),
          group: "extras",
          icon: "far-file-code",
          perform: e => e.applySurround('\n```' + syntax + '\n', '\n```\n', 'cfbtn_code_default_text', { multiline: false } )
        });
      });
    }
  }
}

function initializePlugin(api) {
  const siteSettings = api.container.lookup('service:site-settings');
  addButtons(api, siteSettings);
}

export default {
  name: 'cfbtn',
  initialize(container) {
    withPluginApi(api => initializePlugin(api));
  }
};
