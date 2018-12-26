var chai = require("chai");
var chaiHttp = require('chai-http');
var chaiThings = require('chai-things');
var constants = require('../app/modules/constants');
chai.should();
chai.use(chaiThings);
chai.use(chaiHttp);

global.expect = chai.expect;
global.request = chai.request;
global.constants = constants;
