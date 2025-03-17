function openEmail() {
  var emailAddress = 'contact@usedcommunity.de';
  var subject = 'Anfrage landing page';
  var body = '';

  var mailtoLink = 'mailto:' + encodeURIComponent(emailAddress) +
                   '?subject=' + encodeURIComponent(subject) +
                   '&body=' + encodeURIComponent(body);
  window.location.href = mailtoLink;
}

document.addEventListener("DOMContentLoaded", function () {
    // Funktion, um die angegebene Seite anzuzeigen
    function showPage(pageId) {
        let contents = document.querySelectorAll('.contentshow');
        contents.forEach(content => {
            content.classList.remove('active'); // Entfernt die 'active' Klasse, um die Inhalte auszublenden
        });
  
        let page = document.getElementById(pageId);
        if (page) {
            page.classList.add('active'); // Fügt die 'active' Klasse hinzu, um den Inhalt anzuzeigen
        }
    }

    // Event-Listener für alle Links mit der Klasse 'menu-link' (Menü und Footer)
    let links = document.querySelectorAll('.menu-link');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Verhindert das Standardverhalten (Springen)
            
            // Ermittelt die Zielseite aus dem data-page-Attribut
            let pageId = this.getAttribute('data-page');
            
            if (pageId) {
                showPage(pageId); // Schaltet die Seite um
            }
        });
    });
  
    // Beim Laden der Seite eine Standard-Seite anzeigen (optional)
    showPage('used'); // Zeigt beim Laden die 'used'-Seite an (falls gewünscht)
});