String.prototype.stripTags = function (allowed_tags) {
  var allow = '';
  if (allowed_tags != undefined && allowed_tags.length > 0) {
    allow = "(!" + allowed_tags.join("|") + ")";
  }
  var reStr = '(<\/?([^' + allow + '>]+)\/?>)';
  console.log(reStr);
  var re = new RegExp(reStr,'ig');

  return this.replace(re,"");
}
