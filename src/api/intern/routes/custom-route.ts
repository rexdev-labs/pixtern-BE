export default {
    routes: [
        {
            method: 'GET',
            path: '/interns/:slug',
            handler: 'intern.findOne',
            config: {
                auth: false
            }
        },
    ]
}