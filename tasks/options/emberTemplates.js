module.exports = {
  options: {
    templateName: function (sourceFile) {
                    var templatePath = '<%= paths.app %>/templates/';
                    return sourceFile.replace(templatePath, '');
    }
  },
  dist: {
    files: {
      '.tmp/scripts/compiled-templates.js': '<%= paths.app %>/templates/{,*/}*.hbs'
    }
  }
};