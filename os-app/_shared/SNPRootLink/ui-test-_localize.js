const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	describe.skip(`SNPRootLink_Localize-${ kDefaultRoute.OLSKRouteSignature }-${ OLSKRoutingLanguage }`, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
			});
		});

		it('localizes OLSKRootLink', function() {
			browser.assert.attribute('.OLSKRootLink', 'href', OLSKTestingCanonical(require('../../open-vitrine/controller.js').OLSKControllerRoutes().shift(), {
				OLSKRoutingLanguage,
			}));
		});

	});

});
