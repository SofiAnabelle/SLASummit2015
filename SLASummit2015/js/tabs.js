
$(document).ready(function() {
  // add a hash to the URL when the user clicks on a tab
  $('a[data-toggle="tab"]').on('click', function(e) {
    history.pushState(null, null, $(this).attr('href'));
    updateTabs();
  });

  function updateTabs() {
    var activeTab = $('[href=' + location.hash + ']');
    if (activeTab.length) {
      activeTab.tab('show');
      $(window).scrollTop(0);
    } else {
      $('.nav-pills a:first').tab('show');
    }
  }

  // navigate to a tab when the history changes
  window.addEventListener("popstate", updateTabs);

  // make sure the correct tab is set on pageload
  updateTabs();  
});