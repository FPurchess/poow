exports.config =
  paths:
    'watched': ['app', 'vendors',]
    'public': 'public'

  sourceMaps: no
  optimize: yes

  modules:
    wrapper: false
    definition: false

  plugins:
    uglify:
      mangle: yes
      compress:
        global_defs:
          DEBUG: no

    coffeelint:
      pattern: /.*\.coffee$/
      options:
        max_line_length:
          level: 'ignore'

  files:
    javascripts:
      defaultExtension: 'coffee'
      joinTo:
        'js/game.js': /^app/
        'js/vendors.js': /^vendors/

      order:
        before: [
          'app/main.js'
          '^app/components/'
          '^app/scenes/'
        ]