
function save_options() {
  var enabled = document.getElementById('enabled').checked;
  
  chrome.storage.sync.set({
    autonocomplete: enabled,
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    autonocomplete: false
  }, function(items) {
    console.log(items);
    document.getElementById('enabled').checked = items.autonocomplete;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);