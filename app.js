// alert('connected')

const button = document.querySelector('button');
const searchText = document.querySelector('.form-control');
const list = document.querySelector('.list');

 function sendRequest(){
     fetch(`https://jsonplaceholder.typicode.com/posts?search=${searchText.value}`, {
        method: 'GET',
        })
        .then(response=>{
        return response.json()
        })
        .then(responseData=>{
        console.log(responseData)
        addItems(responseData);
    })
    
}

function addItems(response){
const respDiv = document.createElement('div')
respDiv.classList.add('response');
respDiv.innerHTML = response;
//append to parent
list.appendChild(respDiv)
}

button.addEventListener('click',sendRequest);