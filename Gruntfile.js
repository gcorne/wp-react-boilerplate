module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
    '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
    '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
    '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
    ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    watch: {
      sync: {
        files: [
          '**',
          '!node_modules/**/*',
          '!.sass-cache',
          '!.git*',
          '!**/*.scss',
          '!.idea',
        ],
        tasks: 'sync',
      },
    },
    sync: {
      hotdeploy: {
        files: [
          {
            cwd: '.',
            src: [
              '**',
              '!node_modules/**/*',
              '!.sass-cache',
              '!.git*',
              '!**/*.scss',
              '!.idea',
            ],
            dest: '<%= pkg.sandbox.dir %>',
          },
        ],
        verbose: false,
        pretend: false,
        updateAndDelete: true,
      },
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            '<%= pkg.sandbox.dir %>/**/*',
          ],
        },
        options: {
          watchTask: true,
          debugInfo: false,
          logConnections: false,
          notify: true,
          proxy: 'localhost',
          ghostMode: {
            scroll: true,
            links: true,
            forms: true,
          },
        },
      },
    },
  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-sync');

  // Default task.
  grunt.registerTask('default', ['sync', 'browserSync', 'watch']);
};
