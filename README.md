A test server for b2g identity/marketplace integration

Add the following to `gaia/custom-prefs.js`:

```javascript
pref("dom.payment.provider.1.name", "firefoxmarketdev");
pref("dom.payment.provider.1.description", "marketplace-dev.allizom.org");
pref("dom.payment.provider.1.type", "mozilla/payments/pay/v1");
pref("dom.payment.provider.1.uri", "https://b2g2pac.org/?");
pref("dom.payment.provider.1.requestMethod", "GET");

pref("dom.identity.enabled", true);
pref("toolkit.identity.debug", true);
```

Then his this url from b2g:

- http://people.mozilla.com/~kmcmillan/pay.html

The *Pay* button will open to the test server.

