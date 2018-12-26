var chaiHttp = require('chai-http');
var constants = require('../app/modules/constants');
var chai = require('chai');

chai.use(chaiHttp);

global.expect = chai.expect;
global.request = chai.request;
global.constants = constants;
