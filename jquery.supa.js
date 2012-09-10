Object.getOwnPropertyNames(jQuery.fn).forEach(function(n) {
  var supaName = n.substring(0,1).toUpperCase() + n.slice(1);
  jQuery.fn['supa' + supaName] = jQuery.fn[n];
});

