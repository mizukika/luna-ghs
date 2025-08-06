document.addEventListener('DOMContentLoaded', function() {
  if(typeof(Storage) !== "undefined") {
    let count = localStorage.getItem('visitCount') || 0;
    count = parseInt(count) + 1;
    localStorage.setItem('visitCount', count);
    document.getElementById('visitorCount').textContent = count;
  } else {
    document.getElementById('visitorCount').textContent = 'много';
  }
});
