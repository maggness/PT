// Selecteer alles met het id verwijderButton uit het document en voeg aan elke een EventListener toe met click en de functie verwijderGame
document.querySelectorAll('#verwijderButton').forEach(button => button.addEventListener('click', verwijderGame))

function verwijderGame(clickevent) {
  // Hier haal je het id op en doe je het in de url, dan pas je de method DELETE toe
  fetch('/delete?id=' + clickevent.target.dataset.id, {
      method: 'DELETE'
    })
    .then(response => {
      return response.text()
    }).then(tekst => {
      // Als de tekst gelukt is reload hij de window om te laten zien dat iets weg is
      if (tekst === 'gelukt') window.location.reload()
    })
}
