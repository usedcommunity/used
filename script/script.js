function openEmail() {
  var emailAddress = 'contact@used.community';
  var subject = 'Anfrage';
  var body = '';

  var mailtoLink = 'mailto:' + encodeURIComponent(emailAddress) +
                   '?subject=' + encodeURIComponent(subject) +
                   '&body=' + encodeURIComponent(body);
  window.location.href = mailtoLink;
}

function searchApps() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const apps = document.querySelectorAll('.tool');
  apps.forEach(app => {
      const tags = app.getAttribute('data-tags').toLowerCase();
      app.style.display = tags.includes(input) ? 'block' : 'none';
  });
}

function filterApps(tag) {
  const apps = document.querySelectorAll('.tool');
  apps.forEach(app => {
      const tags = app.getAttribute('data-tags').toLowerCase();
      app.style.display = tag === '' || tags.includes(tag.toLowerCase()) ? 'block' : 'none';
  });
}