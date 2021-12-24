document.writeln('<script src="/javascripts/jquery.js" type="text/javascript"></script>');

var myPrefetchedPage;
$.ajax({
  url: "index.html",
  cache: false,
  success: function(html){
    myPrefetchedPage = html;
  }
})