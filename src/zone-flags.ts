// Jasmine 7 freezes its Env, so zone.js can no longer wrap describe/it.
// Disable the zone.js Jasmine patch; this file must be imported before 'zone.js/testing'.
(globalThis as unknown as Record<string, unknown>)['__Zone_disable_jasmine'] = true;
