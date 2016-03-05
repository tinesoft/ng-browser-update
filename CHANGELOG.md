<a name="1.1.0"></a>
## 1.1.0 (2016-03-05)


#### Bug Fixes

* **demo:** Fixed several issues with the demo application + Improvements ([68c38efc](http://github.com/tinesoft/ng-browser-update/commit/68c38efcbde1acb19bd731c3ee047b92fb1d7859))


#### Features

* **demo:** replace version in demo  css & js assets by 'demo' to ease migrations ([bdb8898b](http://github.com/tinesoft/ng-browser-update/commit/bdb8898b3205c0ba695a6c611f1c4e17a86964a4))
* **jquery:** remove jQuery dependency ([cc8c875c](http://github.com/tinesoft/ng-browser-update/commit/cc8c875c6ce607f8f51ace4058dbd0e26d872cd5))
* **translate:** add support for expressions in notification-text attribute to ease i18n ([d7a68ca4](http://github.com/tinesoft/ng-browser-update/commit/d7a68ca4575cb584651779dd2b4dc7597ce8c77b))


#### Breaking Changes

* isolate scope binding definition of attribute 'notification-text' has changed from two-way binding to one-way binding

  To migrate the code follow the example below:

  **Before:**

  (with hardcoded value)
  ```
  <browser-update
    notification-text="'This is my custom notification message'">
  </browser-update>
  ```
  (with scope value)

  ```
  <browser-update
    notification-text="valueFromScope">
  </browser-update>
  ```

  **After:**

  (with hardcoded value)
  ```
  <browser-update
    notification-text="This is my custom notification message">
  </browser-update>
  ```
  (with scope value)

  ```
	<browser-update
	  notification-text="{{valueFromScope}}">
	</browser-update>
  ```

  This allows you to use, for example, angular-translate's translate filter, to easily translate the custom message that appears in the notification bar, as such:

  ```
  <browser-update
    notification-text="{{ 'CUSTOM_NOTIFICATION_MESSAGE_ID' | translate }}">
  </browser-update>
  ```
closes #1
 ([d7a68ca4](http://github.com/tinesoft/ng-browser-update/commit/d7a68ca4575cb584651779dd2b4dc7597ce8c77b))


<a name="1.0.1"></a>
### 1.0.1 (2015-01-02)


#### Features

* **bower:** remove Gruntfile.js from distributed package ([0b89830d](http://github.com/tinesoft/ng-browser-update/commit/0b89830d6b377dbb7591dfdeec6b6960ea10c667))
* **demo:** replace version in demo  css & js assets by 'demo' to ease migrations ([bdb8898b](http://github.com/tinesoft/ng-browser-update/commit/bdb8898b3205c0ba695a6c611f1c4e17a86964a4))


<a name="1.0.0"></a>
## 1.0.0 (2015-01-01)


#### Bug Fixes

* **demo:** fixed several issues with the demo application + Improvements ([68c38efc](http://github.com/tinesoft/ng-browser-update/commit/68c38efcbde1acb19bd731c3ee047b92fb1d7859))


<a name="0.1.0"></a>
## 0.1.0 (2015-01-01)


#### Features

* **all:** initial commit ([b5e1868e](http://github.com/tinesoft/ng-browser-update/commit/b5e1868e11cb2d4a207d388c98f9ea076f27936e))

