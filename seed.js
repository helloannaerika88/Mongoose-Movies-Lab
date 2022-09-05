require("dotenv/config");
const mongoose = require('mongoose')
const mongoURI = process.env.MONGODB_URI
mongoose.connect(mongoURI)
	.then(db => console.log(`connected to database`))
	.catch(err => console.log(err))

const Celebrity = require('./models/Celebrity')

const celebrities = [
    {
        name: 'Ashley Olsen',
        occupation: 'Actor',
        catchPhrase: `If I ever do go back in [the film industry], it's not going to be as an actress.`
    },
    {
        name: 'Mary-Kate Olsen',
        occupation: 'Actor',
        catchPhrase: `I've never really had much consistency in my life.`
    },
    {
        name: 'Camila Cabello',
        occupation: 'Singer',
        catchPhrase: `Believe in everything, just in case.`
    }
]

// insert the array into the db
Celebrity.insertMany(celebrities)
	.then(celebrities => {
		console.log(`Success - added ${celebrities.length} celebrities to the db`)
		mongoose.connection.close()
	})
	.catch(err => console.log(err))