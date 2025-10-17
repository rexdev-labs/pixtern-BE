/**
 * intern controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::intern.intern",
    ({ strapi }) => ({
        async findOne(ctx) {
            const { slug } = ctx.params;

            const entity = await strapi
                .documents("api::intern.intern")
                .findFirst({
                    status: "published",
                    where: { slug },
                    populate: {
                        detail: {
                            populate: {
                                avatarImage: true,
                                originalImage: true,
                                skills: true,
                                portofolio: true,
                            },
                        },
                        decoration: {
                            populate: {
                                photoOrnament: true,
                                aboutUsFirstOrnament: true,
                                aboutUsSecondOrnament: true,
                            },
                        },
                        educations: true,
                        socialMedia: {
                            populate: {
                                icon: true,
                            },
                        },
                        quotes: true,
                    },
                });

            const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

            const seeOthers = await strapi
                .documents("api::intern.intern")
                .findMany({
                    status: "published",
                    where: {
                        id: { $ne: entity.id },
                    },
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
                    select: ["id", "slug"],
                    limit: 5,
                });

            sanitizedEntity["seeOthers"] = seeOthers;

            return this.transformResponse(sanitizedEntity);
        },
    })
);
