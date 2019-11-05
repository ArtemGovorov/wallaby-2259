var path = require('path'); 
// var Prisma = require('@generated/photon'); 
 
process.env.NODE_PATH += path.delimiter + path.resolve('../../node_modules'); 
 
module.exports = function(wallaby) { 
  var path = require('path'); 
  process.env.NODE_PATH += path.delimiter + path.resolve(path.join(wallaby.projectCacheDir, 'src')); 
 
  return { 
    files: [ 
      // './mocha.js', 
      'src/setup.ts', 
      'src/**/*.ts', 
      'src/**/*.bpmn', 
      'src/**/*.html', 
      '!src/**/tests/*.test.ts' 
    ], 
    tests: ['src/**/*.test.ts'], 
    env: { 
      type: 'node', 
      NODE_ENV: 'test' 
    }, 
    testFramework: 'mocha', 
    workers: { 
      initial: 1, 
      regular: 1 
    }, 
    setup: function(wallaby) { 
      // require('./src/setup'); 
      // process.env.NODE_ENV = 'test'; 
      // var fs = require('fs'); 
      // if (fs.db && !fs.db.engine.exiting) { 
      //   console.log('We still got it!!!'); 
      //   return fs.db.connect().then(() => console.log('Connected!!!')); 
      // } 
      // var Prisma = require('@generated/photon'); 
      // var photon = new Prisma.Photon(); 
      // fs.db = photon; 
      console.log('starting setup'); 
      const mocha = wallaby.testFramework; 
      mocha.suite.on('pre-require', function() { 
        require(wallaby.projectCacheDir + '/src/setup'); 
      }); 
    }, 
    teardown: function(wallaby) { 
      // var fs = require('fs'); 
      // console.log('Cleanup ...'); 
      // return fs.db.disconnect(); 
    } 
  }; 
}; 