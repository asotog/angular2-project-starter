
module.exports = function(grunt) {
  
  require('load-grunt-tasks')(grunt);
  var serveStatic = require('serve-static');
  
  var config = {
    app: 'app',
    dist: 'dist'
  };
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    config: config,
    
    /* clean  */
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    
    /* typescript transpiler */
    ts: {
      default : {
        tsconfig: true
      }
    },
    
    /* systemjs builder for dist phase - this task not running on dev mode */
    systemjs: {
      options: {
        sfx: true,
        baseURL: "./",
        configFile: "<%= config.app %>/config.js",
      	minify: true,
        sourceMaps: false,
        build: {
          mangle: false
        }
      },
      dist: {
        files: [{
          "src":  "<%= config.app %>/scripts/main.js",
          "dest": "<%= config.dist %>/scripts/main.js"
        }]
      }
    },
    
    /* watch  */
    watch: {
      /* do browser reload */
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.app %>/{,*/}*.js',
          '<%= config.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= config.app %>/static-assets/images/{,*/}*'
        ]
      },
      /* transpile typescript files */
      typescript: {
        files: ['<%= config.app %>/scripts/{,*/}*.ts'],
        tasks: ['ts'],
        options: {
          livereload: true
        }
      }
    },
    
    /* http server */
    connect: {
      options: {
        port: 9000,
        open: true,
        livereload: 35729,
        // Change this to '0.0.0.0' to access the server from outside
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          middleware: function(connect) {
            return [
              serveStatic('.tmp'),
              //connect().use('/bower_components', connect.static('./bower_components')),
              connect().use('/node_modules', serveStatic('./node_modules')), // serve node_modules folder
              serveStatic(config.app)
            ];
          }
        }
      },
      dist: {
        options: {
          base: '<%= config.dist %>',
          livereload: false
        }
      }
    },
  });
  
  /* custom tasks */
  grunt.registerTask('server', 'start the server and preview your app, --allow-remote for remote access', function (target) {
    var target = target ? ('server:' + target) : 'server';
    if (grunt.option('allow-remote')) {
      grunt.config.set('connect.options.hostname', '0.0.0.0');
    }
    // if (target === 'dist') {
    //   return grunt.task.run(['build', 'connect:dist:keepalive']);
    // }
    grunt.task.run([
      'clean:server',
      'ts',
      'connect:livereload',
      'watch'
    ]);
  });
  
  // Default task(s).
  grunt.registerTask('default', ['server']);
};
