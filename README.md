# Shoken-web
Great web client for shoken app

# Installation
Install ruby and gem  __bundler__. Then install ruby gems: `bundle`

## Windows
Use http://rubyinstaller.org/downloads/.
1. Install ruby (ruby installer). Add PATH variable and check `ruby -v`.
2. Install Development kit.
3. Use trick to avoid SSL problem on WINDOWS:
`gem source -a http://rubygems.org/`
4. `gem install sass`

Install nodejs with npm included

Install Grunt CLI and Bower:
`npm install -g grunt-cli bower`

Install NodeJS packages:
`npm install`

Install Bower packages:
`bower install`

Run server:
`grunt serve`

# Deploy

Check that Heroku server has ruby buildpack: `heroku buildpacks`. If there aren't add it: `heroku buildpacks:add --index 1 heroku/ruby`

`git push heroku master`

#### Install Allow-Control-Allow-Origin extension for Chrome if get an error
