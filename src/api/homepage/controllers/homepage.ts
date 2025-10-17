/**
 * homepage controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::homepage.homepage",
    ({ strapi }) => ({
        async find(ctx) {
            await this.validateQuery(ctx);

            const entity = await strapi
                .documents("api::homepage.homepage")
                .findFirst({
                    status: "published",
                    populate: {
                        heroSection: {
                            populate: {
                                button: true,
                            },
                        },
                        aboutSection: true,
                        profileSection: {
                            populate: {
                                teamSection: {
                                    populate: {
                                        section: true,
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
                                    },
                                },
                                internSection: {
                                    populate: {
                                        section: true,
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
                            },
                        },
                        whatWeDoSection: {
                            populate: {
                                section: true,
                                jobs: {
                                    populate: {
                                        illustration: true,
                                    },
                                },
                            },
                        },
                        projectSection: {
                            populate: {
                                section: true,
                                projects: {
                                    populate: {
                                        preview: true,
                                    },
                                },
                            },
                        },
                        testimonialSection: {
                            populate: {
                                testimonials: {
                                    populate: {
                                        avatar: true,
                                    },
                                },
                            },
                        },
                    },
                });

            const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

            return this.transformResponse(sanitizedEntity);
        },
    })
);
