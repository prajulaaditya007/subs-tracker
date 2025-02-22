import {Router} from 'express';

const subscriptionRouter = new Router();

subscriptionRouter.get('/', (req, res) =>
    res.send({title: 'GET all subscriptions'}));
subscriptionRouter.get('/:id', (req, res) =>
    res.send({title: 'GET subscription details by id'}));
subscriptionRouter.post('/', (req, res) =>
    res.send({title: 'CREATE subscription'}));
subscriptionRouter.put('/:id', (req, res) =>
    res.send({title: 'UPDATE subscription'}));
subscriptionRouter.delete('/:id', (req, res) =>
    res.send({title: 'DELETE all subscriptions'}));
subscriptionRouter.get('/user/:id', (req, res) =>
    res.send({title: 'GET all user subscriptions'}));
subscriptionRouter.put('/:id/cancel', (req, res) =>
    res.send({title: 'CANCEL subscriptions'}));
subscriptionRouter.get('/upcoming-renewals', (req, res) =>
    res.send({title: 'GET upcoming renewals'}));

export default subscriptionRouter;