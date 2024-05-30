

//save express project to db;

export const saveExpressData = express => {
    const expressitems = {
        title: express.title,
        description: express.description,
        livelink: express.livelink,
        codelink: express.codelink,
        expressimage: express.expressimage
    }

    fetch('https://envoy-portfolio-server.onrender.com/express', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(expressitems)
    })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Projects has been saved')
            }
            console.log(data)
        })
}

//delete express data from db;


export const handleDeleteExdata = id => {

    fetch(`https://envoy-portfolio-server.onrender.com/express/${id}`, {
        method: 'DELETE'
    }).then(res => res.json())
        .then(data => {
            if (data.deletedCount) {
                alert('Data has been deleted')
            }
            console.log(data)
        })
}

// update express data to db;

export const handleUpdateExdata = updateeex => {
    const updateExpressTtems = {
        projectId: updateeex.projectId,
        title: updateeex.title,
        description: updateeex.description,
        livelink: updateeex.livelink,
        codelink: updateeex.codelink,
        expressimage: updateeex.expressimage
    }

    fetch(`https://envoy-portfolio-server.onrender.com/express/${updateeex.projectId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateExpressTtems)
    })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                alert('Projects has been Updated')
            }
            console.log(data)
        })
}


