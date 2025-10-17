/**
 * staff-profile controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::staff-profile.staff-profile",
    ({ strapi }) => ({
        async find(ctx) {
            await this.validateQuery(ctx);

            const entity = await strapi
                .documents("api::staff-profile.staff-profile")
                .findFirst({
                    status: "published",
                    populate: {
                        teams: {
                            fields: ["id", "slug"],
                            populate: {
                                detail: {
                                    fields: ["backgroundColor"],
                                    populate: {
                                        avatarImage: true,
                                        backgroundImage: true,
                                        personImage: true,
                                    },
                                },
                            },
                        },
                        interns: {
                            populate: {
                                interns: {
                                    fields: ["id", "slug"],
                                    populate: {
                                        detail: {
                                            fields: ["backgroundColor"],
                                            populate: {
                                                avatarImage: true,
                                                backgroundImage: true,
                                                personImage: true,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        quotes: true,
                    },
                });

            const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

            return this.transformResponse(sanitizedEntity);
        },
    })
);
