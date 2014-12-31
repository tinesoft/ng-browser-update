ng-browser-update
=====================

AngularJS directive for Browser-Update.org (http://browser-update.org): out-dated browsers notifier.

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

You should already have a bunch of scripts and CSS required for bootstrap-daterangepicker:

```
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="angular.min.js"></script>
```

to the list above, you should add:

```
<script type="text/javascript" src="ng-browser-update.js"></script>
```

Then, inject `ngBrowserUpdate` in your application module:

```
angular.module('myApp', ['ngBrowserUpdate']);
```

and then just add an `browser-updae`:

```
<browser-update></browser-update>
```


### Implemented features so far

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
 notification-text="'This is my custom notification message'">
</browser-update>
```

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





