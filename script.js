fetch("dog_facts.json")
.then(res =>{
    return res.json();
})
.then(data => {
    data.forEach(user => {
       const fact  = `<p>Fact: ${user.fact}</p>`;
       document.querySelector('.container').insertAdjacentHTML('beforeend', fact);
    
    });
})


.catch(error => console.log (error));
