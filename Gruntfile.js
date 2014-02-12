module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-compass');
  //http://kyohei8.hatenablog.com/entry/2013/11/17/145316
  //http://www.d-wood.com/blog/2013/11/11_5021.html
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  //http://www.riaxdnp.jp/?p=4736
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),        
    compass: {
      dist: {
        options: {
          sassDir:'src/scss',
          cssDir:'build/css'
        }
      }
    },
    bower: {
      install: {
        options: {
          //just run 'product bower:install' and you'll see files from your Bower packages in lib directory
          targetDir: "./src/js/vender",
          layout: 'byType',
          install: true,
          verbose: true,
          cleanTargetDir: true,
          cleanBowerDir: true,
          bowerOptions: {}
        }
      }
    },
    watch: {
      sass: {
        files: ['src/scss/*.scss'],
        tasks: ['compass']
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'build',
          open: true
          // keepalive: true
        }
      }
    },
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['index.html', 'js/**', 'img/**'],
          dest: 'build/'
        }]
      }
    }
  });

  grunt.registerTask('default', ['bower', 'compass', 'copy', 'connect', 'watch']);

};