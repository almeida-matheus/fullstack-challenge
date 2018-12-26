describe('PARTICIPATION \n', function () {
	it('Should return \n STATUS 200 \n SUCCESS FIELD TRUE \n RESULT LIST WITH firstName, lastName and participation fields' , function (done) {
		request('http://' + constants.GENERAL.SERVER_HTTP_IP + ':' + constants.GENERAL.SERVER_HTTP_PORT)
			.get(constants.ENDPOINTS.PARTICIPATION)
			.end(function (err, res) {
				res.should.have.status(200);
				res.body.should.have.property('success').eql(true);

				res.body.result.should.be.a('array');
				res.body.result.should.all.have.property('firstName');
				res.body.result.should.all.have.property('lastName');
				res.body.result.should.all.have.property('participation');

				done();
			});
	});
});
