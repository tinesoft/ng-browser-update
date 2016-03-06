ng-browser-update [![Build Status](https://travis-ci.org/tinesoft/ng-browser-update.svg)](https://travis-ci.org/tinesoft/ng-browser-update)[![devDependency Status](https://david-dm.org/tinesoft/ng-browser-update/dev-status.svg)](https://david-dm.org/tinesoft/ng-browser-update#info=devDependencies)
===========================================================================================================================================

AngularJS directive for [Browser-Update.org](http://browser-update.org): out-dated browsers notifier.

Demo: http://tinesoft.github.io/ng-browser-update

Installation
------------

Using bower:

```
bower install ng-browser-update
```

Using npm:

```
npm install ng-browser-update
```


How to use it
-------------

You should already angular script referenced. If not, add it:

```
<script type="text/javascript" src="angular.min.js"></script>
```

Then add the library:

```
<script type="text/javascript" src="ng-browser-update.min.js"></script>
```

Next, inject `ngBrowserUpdate` in your application module:

```
angular.module('myApp', ['ngBrowserUpdate']);
```

and then just add an `browser-update` tag in your main file (index.html for example):

```
<browser-update></browser-update>
```


### Implemented features so far:

* `versions` : browser versions to notify
* `language` : set a language for the message, e.g. "en", overrides the default detection
* `reminder` : atfer how many hours should the message reappear: 0 = show all the time
* `new-window`: open link in new window/tab
* `always-show-bar`:  always show the bar (for testing)
* `notification-text` : custom notification html text (takes precedence over the 'language' option)
* `on-notification-bar-shown`: callback function after the bar has appeared
* `on-notificationBar-clicked`: callback function if bar was clicked

Example with some above features:

```
<browser-update  
 versions="{i:8,f:8,o:9.63,s:2,c:8}" reminder="1"
 always-show-bar="false" new-window="false" 
 notification-text="This is my custom notification message">
</browser-update>
```

### Easy i18n support for custom notification message

Version [v1.1](http://github.com/tinesoft/ng-browser-update/blob/v1.1/CHANGELOG.md) of **ng-browser-update** makes it possible to use angular's expressions as value for the `notification-text` attribute.
This allows you to use, for example, [angular-translate](https://angular-translate.github.io/)'s `translate` filter, to easily translate the custom message that appears in the notification bar.

Here is an example:

```
<browser-update  
 versions="{i:8,f:8,o:9.63,s:2,c:8}" reminder="1"
 always-show-bar="false" new-window="false" 
 notification-text="{{ 'CUSTOM_NOTIFICATION_MESSAGE_ID' | translate }}">
</browser-update>
```
> where **CUSTOM_NOTIFICATION_MESSAGE_ID** is the key of the message.

More information on how to use [angular-translate](https://angular-translate.github.io/)'s `translate` filter can be found [here](http://angular-translate.github.io/docs/#/guide/04_using-translate-filter).


### Features to be implemented:

* `onNotificationClosed` : callback when user closes the notification bar

### Build

You can run the tests by cloning the repo and then (inside the project folder) running

```
npm install
bower install
grunt watch
```

assuming you already have `grunt` installed, otherwise you also need to do:

```
npm install -g grunt-cli
```

### License

Copyright (c) 2015 Tine Kondo. Licensed under the MIT License (MIT)


### Thanks To

Credits and thanks go to the team behind [Browser-Update.org](http://browser-update.org) for this awesome initiative!




