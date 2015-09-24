/**
* @file strip_tags.js
* @brief A colletion of useful missing functions in javascript
* @author Francesco Salamone
* @version 0.1
* @date 2015-09-24
*/

/**
* @name stripTags()
* Stip all HTML tags from the passed string
* TODO: I would like to choose the tags to strip and, if possible, what tags to allow
**/
String.prototype.stripTags = function () {
  var reStr = '(<\\/?\\w+(?:[\\s\\w="\':;_\\/\\.\\-&#]*)\\/?>)';
  var re = new RegExp(reStr,'ig');

  return this.replace(re,"");
}
