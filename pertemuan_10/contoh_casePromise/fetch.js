const getUser = async () =>{
    const container = document.querySelector(".result");

    const result = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await result.json();

    users.forEach((user) => container.innerHTML += `<p>${user.name}<p>`);

        // .then(function(result){
        //     return result.json();
        // })
        // .then(function(users){
        //     users.forEach((user) => (container.innerHTML += `<p>${user.name}</p>`));
        // })
        // .catch(function(err){
        //     console.log(err);
        // });
    };
getUser();