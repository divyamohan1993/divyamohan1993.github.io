# [Bootstrap](//getbootstrap.com)
[![Slack](//bootstrap-slack.herokuapp.com/badge.svg)](//bootstrap-slack.herokuapp.com)
![Bower version](//img.shields.io/bower/v/bootstrap.svg)
[![npm version](//img.shields.io/npm/v/bootstrap.svg)](//www.npmjs.com/package/bootstrap)
[![Build Status](//img.shields.io/travis/twbs/bootstrap/master.svg)](//travis-ci.org/twbs/bootstrap)
[![devDependency Status](//img.shields.io/david/dev/twbs/bootstrap.svg)](//david-dm.org/twbs/bootstrap#info=devDependencies)
[![Selenium Test Status](//saucelabs.com/browser-matrix/bootstrap.svg)](//saucelabs.com/u/bootstrap)

Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development, created by [Mark Otto](//twitter.com/mdo) and [Jacob Thornton](//twitter.com/fat), and maintained by the [core team](//github.com/orgs/twbs/people) with the massive support and involvement of the community.

To get started, check out <//getbootstrap.com>!

## Table of contents

- [Quick start](#quick-start)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Community](#community)
- [Versioning](#versioning)
- [Creators](#creators)
- [Copyright and license](#copyright-and-license)

## Quick start

Several quick start options are available:

- [Download the latest release](//github.com/twbs/bootstrap/archive/v3.3.5.zip).
- Clone the repo: `git clone //github.com/twbs/bootstrap.git`.
- Install with [Bower](//bower.io): `bower install bootstrap`.
- Install with [npm](//www.npmjs.com): `npm install bootstrap`.
- Install with [Meteor](//www.meteor.com): `meteor add twbs:bootstrap`.
- Install with [Composer](//getcomposer.org): `composer require twbs/bootstrap`.

Read the [Getting started page](//getbootstrap.com/getting-started/) for information on the framework contents, templates and examples, and more.

### What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
bootstrap/
├── css/
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── bootstrap.min.css
│   ├── bootstrap-theme.css
│   ├── bootstrap-theme.css.map
│   └── bootstrap-theme.min.css
├── js/
│   ├── bootstrap.js
│   └── bootstrap.min.js
└── fonts/
    ├── glyphicons-halflings-regular.eot
    ├── glyphicons-halflings-regular.svg
    ├── glyphicons-halflings-regular.ttf
    ├── glyphicons-halflings-regular.woff
    └── glyphicons-halflings-regular.woff2
```

We provide compiled CSS and JS (`bootstrap.*`), as well as compiled and minified CSS and JS (`bootstrap.min.*`). CSS [source maps](//developer.chrome.com/devtools/docs/css-preprocessors) (`bootstrap.*.map`) are available for use with certain browsers' developer tools. Fonts from Glyphicons are included, as is the optional Bootstrap theme.



## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](//github.com/twbs/bootstrap/blob/master/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](//github.com/twbs/bootstrap/issues/new).


## Documentation

Bootstrap's documentation, included in this repo in the root directory, is built with [Jekyll](//jekyllrb.com) and publicly hosted on GitHub Pages at <//getbootstrap.com>. The docs may also be run locally.

### Running documentation locally

1. If necessary, [install Jekyll](//jekyllrb.com/docs/installation) (requires v2.5.x).
  - **Windows users:** Read [this unofficial guide](//jekyll-windows.juthilo.com/) to get Jekyll up and running without problems.
2. Install the Ruby-based syntax highlighter, [Rouge](//github.com/jneen/rouge), with `gem install rouge`.
3. From the root `/bootstrap` directory, run `jekyll serve` in the command line.
4. Open <//localhost:9001> in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](//jekyllrb.com/docs/home/).

### Documentation for previous releases

Documentation for v2.3.2 has been made available for the time being at <//getbootstrap.com/2.3.2/> while folks transition to Bootstrap 3.

[Previous releases](//github.com/twbs/bootstrap/releases) and their documentation are also available for download.



## Contributing

Please read through our [contributing guidelines](//github.com/twbs/bootstrap/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you must include [relevant unit tests](//github.com/twbs/bootstrap/tree/master/js/tests). All HTML and CSS should conform to the [Code Guide](//github.com/mdo/code-guide), maintained by [Mark Otto](//github.com/mdo).

Editor preferences are available in the [editor config](//github.com/twbs/bootstrap/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <//editorconfig.org>.



## Community

Get updates on Bootstrap's development and chat with the project maintainers and community members.

- Follow [@getbootstrap on Twitter](//twitter.com/getbootstrap).
- Read and subscribe to [The Official Bootstrap Blog](//blog.getbootstrap.com).
- Join [the official Slack room](//bootstrap-slack.herokuapp.com).
- Chat with fellow Bootstrappers in IRC. On the `irc.freenode.net` server, in the `##bootstrap` channel.
- Implementation help may be found at Stack Overflow (tagged [`twitter-bootstrap-3`](//stackoverflow.com/questions/tagged/twitter-bootstrap-3)).
- Developers should use the keyword `bootstrap` on packages which modify or add to the functionality of Bootstrap when distributing through [npm](//www.npmjs.com/browse/keyword/bootstrap) or similar delivery mechanisms for maximum discoverability.



## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Bootstrap is maintained under [the Semantic Versioning guidelines](//semver.org/). Sometimes we screw up, but we'll adhere to those rules whenever possible.



## Creators

**Mark Otto**

- <//twitter.com/mdo>
- <//github.com/mdo>

**Jacob Thornton**

- <//twitter.com/fat>
- <//github.com/fat>



## Copyright and license

Code and documentation copyright 2011-2015 Twitter, Inc. Code released under [the MIT license](//github.com/twbs/bootstrap/blob/master/LICENSE). Docs released under [Creative Commons](//github.com/twbs/bootstrap/blob/master/docs/LICENSE).
