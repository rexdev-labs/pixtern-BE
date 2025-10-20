/**
 *  global controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::global.global",
    ({ strapi }) => ({
        async find(ctx) {
            await this.validateQuery(ctx);

            const entity = await strapi
                .documents("api::global.global")
                .findFirst({
                    populate: {
                        favicon: true,
                        footer: {
                            populate: {
                                logo: true,
                                socialMedia: {
                                    populate: {
                                        icon: true
                                    }
                                },
                                groups: {
                                    populate: {
                                        links: true
                                    }
                                }
                            },
                        },
                        navbar: {
                            populate: {
                                darkIcon: true,
                                lightIcon: true,
                                navigations: true,
                            },
                        },

                    },
                });

            const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

            return this.transformResponse(sanitizedEntity);
        },
    })
);
