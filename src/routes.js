const express = require('express');

const User = require('./controllers/UserController');
const Group = require('./controllers/GroupController'); 
const WishList = require('./controllers/WishListController');
const Login = require('./controllers/LoginController');
const GroupProfile = require('./controllers/GroupProfileController');

const auth = require('./middleware/auth');

const routes = express.Router();

routes.post('/users',User.create);
routes.get('/users',auth,User.index);

routes.post('/login',Login.login);

routes.post('/wishlist',auth,WishList.store);
routes.get('/wishlist',auth,WishList.index);
routes.put('/wishlist/:id',auth,WishList.update);
routes.delete('/wishlist/:id',auth,WishList.delete);

routes.get('/allgroups',auth,Group.show);
routes.get('/groups',auth,Group.index);
routes.post('/groups',auth,Group.create);
routes.put('/groups/:id',auth,Group.update);
routes.delete('/groups/:id',auth,Group.delete);

routes.put('/addtogroups/:id', GroupProfile.addToGroup);
routes.get('/group/:id',GroupProfile.groupProfile);

module.exports = routes;