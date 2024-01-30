// Using normal Fetch
/*const fetchUsers = ()=> {
    fetch ('https://reqres.in/api/users?page=1')
    .then(response =>response.json())
    .then(data => console.log(data.data))
}

fetchUsers()*/

// Using Async function

const ul = document.querySelector('ul')
const fetchUsers = async ()=> {
    const response = await fetch ('https://reqres.in/api/users?page=1');
    const result = await response.json()
    renderData(result.data)
}
fetchUsers()

const renderData = (users)=>{
    users.forEach((element) => {
        //Creating Elements
        const li = document.createElement('li');
        const firstname = document.createElement('span');
        const lastname = document.createElement('span');
        const id = document.createElement('span');
        const email = document.createElement('span');
        const avatar = document.createElement('span');
        const image = document.createElement('img')

        //Appending Elements
        ul.append(li);
        li.append(id, firstname, lastname, email, avatar);
        avatar.append(image)

        //Adding the class
        li.classList.add('userItem')
        id.classList.add('userID');
        firstname.classList.add('userFirstname');
        lastname.classList.add('userLastname');
        email.classList.add('userEmail');
        avatar.classList.add('userAvatar');
        image.classList.add('userImage')

        

        //Adding Content
        id.textContent = element.id;
        firstname.textContent = element.first_name;
        lastname.textContent = element.last_name;
        email.textContent = element.email;
        image.src = element.avatar
    });
};