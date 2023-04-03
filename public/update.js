let fm3 = document.getElementById('form_3')
let id = document.getElementById('updatedItemID').innerText


fm3.addEventListener('submit', e => {
    e.preventDefault()
    const o = {}
    new FormData(fm3).forEach((value, key) => o[key] = value)
    fetch(`/items/update/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(o)
    })
    .then(row => row.json())
    .then(e => window.location = '/items')
    .catch(err => console.log(err))
})