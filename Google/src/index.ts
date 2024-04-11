import express, {Request, Response} from 'express';
import { config } from 'dotenv';
config();
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import session from 'express-session';

const app = express();
const port = process.env.PORT ||3000;

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true
}));    
app.use(passport.initialize());
app.use(passport.session());


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    //User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //return cb(err, user);
    //validar token,
    return cb(null, profile);
  }
));

app.get('/', (req, res) => {
    res.send('API jalando en casa!');
    console.log('User: ', req.user)
})

app.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('/logout', (req, res) => {
    console.log('Cerraste Session PA!');
})

app.get('/google/callback', passport.authenticate('google', {failureRedirect: '/login' }), (req, res) => {
    console.log('Aqui me mando don google!');
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});