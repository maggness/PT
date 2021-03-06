document.querySelectorAll('#verwijderButton').forEach(button => button.addEventListener('click', verwijderGame))

function verwijderGame(clickevent) {
  fetch('/delete?id=' + clickevent.target.dataset.id, {
      method: "DELETE"
    })
    .then(response => {
      return response.text()
    }).then(tekst => {
      if (tekst === "Gelukt :)") window.location.reload()
    })
}
