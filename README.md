HeadStart
========

HeadStart is a simple web/mobile project template. It may not be to everyone's taste, I like to keep things simple.

#### Project features

- Compiled using [Grunt](http://gruntjs.com/)
- Perfectly organised Javascript, automatically minimized and concatenated
- [Sass](http://sass-lang.com/) compiled using [Compass](http://compass-style.org/)
- Automatic notifications when Grunt tasks fail.
- [LiveReload](http://livereload.com/) of the browser when compiled ([Get the chrome extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en))

#### Javascript features

- [jQuery](http://jquery.com/) is a fast, small, and feature-rich JavaScript library.
- [headjs](http://headjs.com/) loads scripts in parallel but execute in order.
- [transparency](http://leonidas.github.io/transparency/) is a minimal template engine. It maps JSON objects to DOM elements.
- Touch events ready to go e.g. `.on(event_down, function(){...});`


#### What it doesn't have

- A grid layout framework e.g. Bootstrap
- A precompiling template engine e.g. handlebars, mustache
- JS or HTML shorthand e.g. Jade, Coffeescript


Installation
========
 
1. Create a project directory, run Terminal and go to the directory

	`$ cd path/to/my/project`

2. Clone [this project](https://github.com/mulhoon/HeadStart.git) into it

	`$ git clone https://github.com/mulhoon/HeadStart.git`

3. Install grunt (if you don't already have it)

	`$ npm install -g grunt-cli`

4. Install project dependencies (grunt, modules, etc...)

	`$ npm install` (sudo might be required)

5. run Grunt

	`$ grunt`

6. Get coding

	:)

Guide
========

- Keep code separate in their uses. e.g App.view.js only contains script for changing the view, App.api.js only controls script for talking to an API etc..
- Keep all script settings at the top of your code
- Use Compass mixins where possible
- Add plugins and to public/js/vendor/ and reference them in App.tools.js (no need to put them in your head tag) 
- use `$(".mydiv").render(data);` to populate html with data from an object (as long as the obj keys match the id/class in .mydiv)
- Don't edit public/js or public/css

Disclaimer
========

There are many approaches to building web projects. This is intended as a SIMPLE boilerplate and is a great way to get started if you are new to Grunt and Sass. It can easily be extended for bigger projects.

If you need help with Git via Terminal [try this](http://shaun.boyblack.co.za/blog/2009/03/14/getting-started-with-git-on-mac-os-x/)
