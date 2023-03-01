const localStorageKey = 'to-do-list-lp'

function newTask() {
    let input = document.getElementById('input-new-task')

    // validation
    if(!input.value){
        alert('Digite algo para inserir em sua lista')
    }
    // else if()
    else{
        // increment to localStorage
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey, JSON.stringify(values))
    }    
}