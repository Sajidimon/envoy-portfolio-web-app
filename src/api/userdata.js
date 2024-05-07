
//save users data from headers to db;

export const saveHeaderUser = headerdata => {
    const HeaderUserData = {
        logo: headerdata.logo,
        facebook: headerdata.facebook,
        linkedin: headerdata.linkedin,
        github: headerdata.github,
        youtube: headerdata.youtube,
        userName: headerdata.name,
        userProfession: headerdata.profession,
        userResume: headerdata.resume
    }

    fetch(`http://localhost:5000/headersbio/${headerdata.userName}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(HeaderUserData)
    }).then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                alert('Data has been saved')
            }
            console.log(data)
        })
}