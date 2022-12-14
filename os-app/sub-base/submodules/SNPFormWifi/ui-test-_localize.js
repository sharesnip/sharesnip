const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe('SNPFormWifi_Localize-' + OLSKRoutingLanguage, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
			});
		});

		it('localizes SNPFormWifiNetworkField', function () {
			browser.assert.attribute(SNPFormWifiNetworkField, 'placeholder', uLocalized('SNPFormWifiNetworkFieldText'));
		});

		it('localizes SNPFormWifiPasswordField', function () {
			browser.assert.attribute(SNPFormWifiPasswordField, 'placeholder', uLocalized('SNPFormWifiPasswordFieldText'));
		});

		it('localizes SNPFormWifiSecurityNoneOption', function () {
			browser.assert.text(SNPFormWifiSecurityNoneOption, uLocalized('SNPFormWifiSecurityNoneOptionText'));
		});

		it('localizes SNPFormWifiSecurityWPAOption', function () {
			browser.assert.text(SNPFormWifiSecurityWPAOption, 'WPA');
		});

		it('localizes SNPFormWifiSecurityWEPOption', function () {
			browser.assert.text(SNPFormWifiSecurityWEPOption, 'WEP');
		});

	});

});
