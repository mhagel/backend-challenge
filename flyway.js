module.exports = function() {
  return {
    flywayArgs: {
      url: process.env.FLYWAY_URL || 'jdbc:postgresql:regen_backend_challenge',
      locations: 'filesystem:sql',
      user: 'postgres',
      password: 'postgres',
    },
  };
};
