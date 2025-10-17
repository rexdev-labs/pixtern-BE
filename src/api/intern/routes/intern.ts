/**
 * intern router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::intern.intern', {
    except: ['findOne']
});
