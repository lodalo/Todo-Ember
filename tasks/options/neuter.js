module.exports = {
  app: {
    options: {
      filepathTransform: function (filepath) {
        var pp= '<%= paths.app %>' + '/' + filepath;
          console.log('******** path is ' + pp);
          return pp;
      }
    },
    src: '<%= paths.app %>/scripts/app.js',
    dest: '.tmp/scripts/combined-scripts.js'
  }
};