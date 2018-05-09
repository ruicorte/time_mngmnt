module.exports = function (app, db) {
    app.get('/item/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('items').findOne(details, (err, item) => {
            if(err) {
                res.send({ 'error': 'an error has ocurred' });
            } else {
                res.send(item);
            }
        });
    });

    app.post('/item', (req, res) => {
        const item = {
            text: req.body.body,
            title: req.body.title
        };
        db.collection('notes').insert(item, (err, result) => {
            if(err) {
                res.send({ 'error': 'an error has ocurred'})
            } else {
                res.send(result.ops[0])
            }
        });
        console.log(req.body);
        res.send('HELLO!');
    });

    app.delete('/items/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('items').remove(details, (err, item) => {
            if(err) {
                res.send({ 'error': 'an error has ocurred' });
            } else {
                res.send(`item ${id} deleted`);
            }
        });
    });

    app.put('/items/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const item = {
            text: req.body.body,
            title: req.body.title
        };
        db.collection('items').update(details, item, (err, item) => {
            if(err) {
                res.send({ 'error': 'an error has ocurred' });
            } else {
                res.send(item);
            }
        })
    });
};