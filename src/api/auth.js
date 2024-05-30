//save users to db;

export const saveuser = user => {
    const currentUser = {
        email: user.email
    }

    fetch(`https://envoy-portfolio-server.onrender.com/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => console.log(data))
}