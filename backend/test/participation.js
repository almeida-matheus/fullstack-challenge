describe('PARTICIPATION \n', () => {
	it('GET ALL - Should return \n STATUS 200 \n SUCCESS FIELD TRUE \n RESULT LIST WITH firstName, lastName and participation fields', (done) => {
		request(`http://${constants.GENERAL.SERVER_HTTP_IP}:${constants.GENERAL.SERVER_HTTP_PORT}`)
			.get(constants.ENDPOINTS.PARTICIPATION)
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.have.property('success').eql(true);

				res.body.result.should.be.a('array');
				res.body.result.should.all.have.property('firstName');
				res.body.result.should.all.have.property('lastName');
				res.body.result.should.all.have.property('participation');
				res.body.result.should.all.have.property('color');
				res.body.result.should.all.have.property('id');

				done();
			});
	});

	it('ADD PARTICIPATION - Should return \n STATUS 200 \n SUCCESS FIELD TRUE \n RESULT LIST WITH firstName, lastName and participation fields', (done) => {
		request(`http://${constants.GENERAL.SERVER_HTTP_IP}:${constants.GENERAL.SERVER_HTTP_PORT}`)
			.post(constants.ENDPOINTS.PARTICIPATION)

			.type('form')
			.send({
				firstName: 'Matheus',
				lastName: 'Almeida',
				participation: 1
			})
			.end((err, res) => {
				if (res.status === 200) {
					res.body.should.have.property('success').eql(true);

					res.body.result.should.be.a('array');
					res.body.result.should.all.have.property('firstName');
					res.body.result.should.all.have.property('lastName');
					res.body.result.should.all.have.property('participation');
					res.body.result.should.all.have.property('color');
					res.body.result.should.all.have.property('id');
					res.should.have.status(200);
				} else if (res.status === 400) {
					res.body.should.have.property('success').eql(false);
					res.should.have.status(400);
				}

				done();
			});
	});

	it('DELETE PARTICIPATION - Should return \n STATUS 200 \n SUCCESS FIELD TRUE \n RESULT LIST WITH firstName, lastName and participation fields', (done) => {
		request(`http://${constants.GENERAL.SERVER_HTTP_IP}:${constants.GENERAL.SERVER_HTTP_PORT}`)
			.delete(constants.ENDPOINTS.PARTICIPATION)

			.type('form')
			.send({
				id: 'bae939f0-0aeb-11e9-be00-076a2761c2b7'
			})
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.have.property('success').eql(true);

				res.body.result.should.be.a('array');
				res.body.result.should.all.have.property('firstName');
				res.body.result.should.all.have.property('lastName');
				res.body.result.should.all.have.property('participation');
				res.body.result.should.all.have.property('color');
				res.body.result.should.all.have.property('id');

				done();
			});
	});
});
