const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const server = require('../server');
const should = chai.should();
const expect = chai.expect;
const assert = require('chai').assert;


// Movie List
describe('Movie List', () => {
    it('should return movie list', () => {
        return chai.request(server)
                    .get('/movies')
                    .then((data) => {
                        data.should.have.status(200);
                        data.body.should.be.a('array');
                        data.body.length.should.be.eql(77);
                    });
    });

});