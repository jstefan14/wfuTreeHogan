var express = require('express');
var router = express.Router();

// Require controller modules.
var tree_controller = require('../controllers/treeController');
var species_controller = require('../controllers/speciesController');
var user_controller = require('../controllers/userController');
var user_group_controller = require('../controllers/userGroupController');
var edit_history_controller = require('../controllers/editHistoryController');

/// tree ROUTES ///

// GET data home page.
// router.get('/', tree_controller.index);

// GET request for creating a tree. NOTE This must come before routes that display tree (uses id).
router.get('/tree/create', tree_controller.tree_create_get);

// POST request for creating tree.
router.post('/tree/create', tree_controller.tree_create_post);

// GET request to delete tree.
router.get('/tree/:id/delete', tree_controller.tree_delete_get);

// POST request to delete tree.
router.post('/tree/:id/delete', tree_controller.tree_delete_post);

// GET request to update tree.
router.get('/tree/:id/update', tree_controller.tree_update_get);

// POST request to update tree.
router.post('/tree/:id/update', tree_controller.tree_update_post);

// GET request for one tree.
router.get('/tree/:id', tree_controller.tree_detail);

// GET request for one tree info.
router.get('/tree/:id/info', tree_controller.tree_info);

// GET request for list of all tree items.
router.get('/tree', tree_controller.tree_list);

/// species ROUTES ///

// GET request for creating species. NOTE This must come before route for id (i.e. display species).
router.get('/species/create', species_controller.species_create_get);

// POST request for creating species.
router.post('/species/create', species_controller.species_create_post);

// GET request to delete species.
router.get('/species/:id/delete', species_controller.species_delete_get);

// POST request to delete species.
router.post('/species/:id/delete', species_controller.species_delete_post);

// GET request to update species.
router.get('/species/:id/update', species_controller.species_update_get);

// POST request to update species.
router.post('/species/:id/update', species_controller.species_update_post);

// GET request for one species.
router.get('/species/:id', species_controller.species_detail);

// GET request for list of all speciess.
router.get('/species', species_controller.species_list);

/// user ROUTES ///

// GET request for creating a user. NOTE This must come before route that displays user (uses id).
router.get('/user/create', user_controller.user_create_get);

//POST request for creating user.
router.post('/user/create', user_controller.user_create_post);

// GET request to delete user.
router.get('/user/:id/delete', user_controller.user_delete_get);

// POST request to delete user.
router.post('/user/:id/delete', user_controller.user_delete_post);

// GET request to update user.
router.get('/user/:id/update', user_controller.user_update_get);

// POST request to update user.
router.post('/user/:id/update', user_controller.user_update_post);

// GET request for one user.
router.get('/user/:id', user_controller.user_detail);

// GET request for list of all user.
router.get('/user', user_controller.user_list);

/// userGroup ROUTES ///

// GET request for creating a userGroup. NOTE This must come before route that displays userGroup (uses id).
router.get('/userGroup/create', user_group_controller.user_group_create_get);

// POST request for creating userGroup.
router.post('/userGroup/create', user_group_controller.user_group_create_post);

// GET request to delete userGroup.
router.get('/userGroup/:id/delete', user_group_controller.user_group_delete_get);

// POST request to delete userGroup.
router.post('/userGroup/:id/delete', user_group_controller.user_group_delete_post);

// GET request to update userGroup.
router.get('/userGroup/:id/update', user_group_controller.user_group_update_get);

// POST request to update userGroup.
router.post('/userGroup/:id/update', user_group_controller.user_group_update_post);

// GET request for one userGroup.
router.get('/userGroup/:id', user_group_controller.user_group_detail);

// GET request for list of all userGroup.
router.get('/userGroup', user_group_controller.user_group_list);

/// edit_history ROUTES ///

// GET request for creating a edit_history. NOTE This must come before routes that display edit_history (uses id).
router.get('/editHistory/create', edit_history_controller.edit_history_create_get);

// POST request for creating edit_history.
router.post('/editHistory/create', edit_history_controller.edit_history_create_post);

// GET request to delete edit_history.
router.get('/editHistory/:id/delete', edit_history_controller.edit_history_delete_get);

// POST request to delete edit_history.
router.post('/editHistory/:id/delete', edit_history_controller.edit_history_delete_post);

// GET request to update edit_history.
router.get('/editHistory/:id/update', edit_history_controller.edit_history_update_get);

// POST request to update edit_history.
router.post('/editHistory/:id/update', edit_history_controller.edit_history_update_post);

// GET request for one edit_history.
router.get('/editHistory/:id', edit_history_controller.edit_history_detail);

// GET request for list of all edit_history items.
router.get('/editHistory', edit_history_controller.edit_history_list);

module.exports = router;
