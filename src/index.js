const express= require('express');
const morgan= require('morgan');
const app=express();
//settings
app.set('port', process.env.PORT||3000);
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//routes
app.use(require('./routes'));
app.use('/api/movies', require('./routes/movies'));
// app.use('/api/user', require('./routes/users'));
app.listen(
    app.get('port'), ()=>{
        console.log(`Server on port ${app.get('port')}`)
    }
)