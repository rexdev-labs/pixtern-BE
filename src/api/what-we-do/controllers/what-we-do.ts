/**
 * what-we-do controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::what-we-do.what-we-do',
    ({ strapi }) => ({
        async find(ctx) {
            await this.validateQuery(ctx);

            const entity = await strapi
                .documents("api::what-we-do.what-we-do")
                .findFirst({
                    status: "published",
                    populate: {
                        jobs: {
                            populate: {
                                illustration: true
                            }
                        },
                        documentation: true
                    }
                });

            const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

            return this.transformResponse(sanitizedEntity);
        },
    }));
