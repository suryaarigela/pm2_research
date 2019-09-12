module.exports = {
  apps : [{
    name: 'node-easy-notes-app',
    script: 'server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'serve --host [10.31.252.51] --disable-host-check',
    instances: 4,
    exec_mode  : "cluster",
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    user : 'node',
    host : '10.31.252.51',
    path : '/var/www/development',
    ref  : 'origin/master',
    repo : 'https://github.com/suryaarigela/pm2_research.git',
    'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env development'

  }
};
