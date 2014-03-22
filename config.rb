
require 'ceaser-easing'
require 'compass-normalize'

#sass_options = {:quiet => true}

http_path = '/'

css_dir = 'public/css'
images_dir = 'public/images'
javascripts_dir = 'public/js'
fonts_dir = 'public/fonts'

sass_dir = 'sass'

http_stylesheets_path = 'public/css'
http_images_path = 'public/images'
http_generated_images_path = 'public/images'
http_javascripts_path = 'public/js'
http_fonts_path = 'public/fonts'

sprite_load_path = %w(./sprites)

#if environment != :production
#sass_options = { :debug_info => true }
#end

# set encodings
Encoding.default_external = 'utf-8'
Encoding.default_internal = 'utf-8'

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
