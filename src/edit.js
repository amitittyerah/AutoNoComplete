
chrome.storage.sync.get({
    autonocomplete: false
  }, function(items) {
  	if(items.autonocomplete)
  	{
  		var inputs = $('input[type="text"]').prop('autocomplete', 'off');
  	}
  });