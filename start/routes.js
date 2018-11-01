'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

/*Rotas com auth*/
Route.resource('properties', 'PropertyController')
  .apiOnly()
  .middleware('auth')

Route.post('properties/:id/images', 'ImageController.store')
  .middleware('auth')
Route.get('images/:path', 'ImageController.show')
