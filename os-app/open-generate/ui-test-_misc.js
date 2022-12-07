const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

const kManifestRoute = require('./controller.js').OLSKControllerRoutes().pop();

describe('SNPGenerate_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('sets meta:viewport', function () {
		browser.assert.attribute('meta[name=viewport]', 'content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
	});
	
	it('sets meta:mobile-web-app-capable', function () {
		browser.assert.attribute('meta[name=mobile-web-app-capable]', 'content', 'yes');
	});
	
	it('sets meta:apple-mobile-web-app-capable', function () {
		browser.assert.attribute('meta[name=apple-mobile-web-app-capable]', 'content', 'yes');
	});

	it('sets manifest', function () {
		browser.assert.attribute('link[rel="manifest"]', 'href', kManifestRoute.OLSKRoutePath);
	});

	describe('SNPGenerate', function test_SNPGenerate () {
		
		it('classes OLSKViewport', function () {
			browser.assert.hasClass(SNPGenerate, 'OLSKViewport');
		});

	});

});
