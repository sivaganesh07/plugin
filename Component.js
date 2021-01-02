jQuery.sap.declare("costco.plugin.Component");
sap.ui.define([
	"sap/ui/core/Component",
	"sap/m/Button",
	"sap/m/ActionSheet"
], function(Component, Button, ActionSheet) {

	return Component.extend("costco.plugin.Component", {

		init: function() {
			var renderer = sap.ushell.Container.getRenderer("fiori2");
renderer.addHeaderEndItem("sap.ushell.ui.shell.ShellHeadItem", {
	id: "headerEnd",
	icon: "sap-icon://TNTIcons/Verify API",
	press: this._showLanguageMenu.bind(this)
}, true, false);
//test3
sap.ushell.Container.getRenderer("fiori2").addFloatingButton("sap.ushell.ui.shell.ShellFloatingAction", {id: "testBtn"}, true, true);

 //var oRenderer = sap.ushell.Container.getRenderer("fiori2");
 //oRenderer.setFooterControl("sap.m.Bar", {id: "testBar", contentLeft: [new sap.m.Button({text: "Test Footer Button",
 //      press: function () {
 //          this._showLanguageMenu.bind(this);
 //      }
 //    })
 //    ]});


		},
		_showLanguageMenu: function(oEvent) {
			var oButton = oEvent.getSource();
			if (!this._oMenu) {
				this._oMenu = this._createMenu();
			}
			// var oDock = sap.ui.core.Popup.Dock;
			// this._oMenu.open(false, oButton, oDock.BeginTop, oDock.BeginBottom, oButton);
			this._oMenu.openBy(oButton);
		},

		_createMenu: function() {
			var oMenu = new ActionSheet({
				showCancelButton: false,
				buttons: [
					// new Button({
					// 	text: "English",
					// 	press: function() {
					// 		window.location.search = "sap-language=EN";
					// 	}
					// }),
					new Button({
						text: "German",
						press: function() {
							window.location.search = "sap-language=DE";
						}
					})
				]
			});
			return oMenu;
		}
	});
});