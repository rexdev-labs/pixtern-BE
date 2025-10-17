export default {
    routes: [
        {
            method: 'GET',
            path: '/teams/:slug',
            handler: 'team.findOne',
            config: {
                auth: false
            }
        },
    ]
}