Package.describe({
  name: 'whileoneloop:bootstrap-datepicker',
  version: '1.0.0',
  summary: 'A datepicker for bootstrap',
  git: 'https://github.com/whileoneloop/bootstrap-datepicker.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('jquery');
  api.addFiles([
    "dist/css/bootstrap-datepicker3.css",
    "dist/js/bootstrap-datepicker.js"
  ], 'client');
});
