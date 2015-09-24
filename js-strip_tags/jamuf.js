/**
* @file jamuf.js
* @brief jamuf - JAvascript Missing Useful Functions
* @desc A colletion of useful missing functions in javascript
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

/**
* @name varDump()
* Like the var_dump function in PHP
**/
Object.prototype.varDump = function () {
  var output = '<pre>';
  var obj = this;

  for (var i in obj) {
    if (typeof obj[i] === 'object' && obj[i] !== null && 0) {
      output += "\t{\n\t\t" + obj[i].varDump() + "},\n";
    } else {
      output += "\t" + i + ": '" + obj[i] + "',\n";
    }
  }

  return output + '</pre>';
}
