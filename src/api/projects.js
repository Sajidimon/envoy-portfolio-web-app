

//save express project to db;

export const saveExpressData = express => {
    const expressitems = {
        title: express.title,
        description: express.description,
        livelink: express.livelink,
        codelink: express.codelink,
        expressimage: express.expressimage
    }

    fetch('http://localhost:5000/express', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
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