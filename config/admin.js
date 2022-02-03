module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c60acda3b9cb3572b8db92b8b70c1e90'),
  },
});
