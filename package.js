Package.describe({
  summary: "Reaction Braintree - Braintree Payment Module for Reaction commerce"
});

Npm.depends({'braintree': '1.15.0'});

Package.on_use(function (api, where) {
  api.use([
    "templating",
    "coffeescript",
    "iron-router",
    "simple-schema",
    "autoform",
    "underscore-string-latest",
    "less",
    "reaction-core"
  ], ["client", "server"]);

  api.add_files([
    "common/collections.coffee",
    "common/register.coffee"
    ],["client","server"]);

  api.add_files("server/braintree.coffee",["server"]);
  api.add_files([
    "client/routing.coffee",
    "client/templates/braintree.html",
    "client/templates/braintree.coffee",
    "client/templates/braintreePaymentForm/braintreePaymentForm.html",
    "client/templates/braintreePaymentForm/braintreePaymentForm.coffee"
  ], ["client"]);  
});