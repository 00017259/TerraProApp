let deleteBtn = document.getElementById('deleteBtn')
let id = document.getElementById('updatedItemID').innerText

console.log('delete button cick')

deleteBtn.addEventListener('click', e => {
    e.preventDefault()
    fetch(`/items/delete/${id}`, {
        method: "DELETE"
    })
    .then(row => row.json())
    .then(e => window.location = '/items')
})