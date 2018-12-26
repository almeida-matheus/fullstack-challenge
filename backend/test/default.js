describe('DEFAULT \n', function () {
	it('Should return status 200 and welcome JSON', function (done) {
		request('http://' + constants.GENERAL.SERVER_HTTP_IP + ':' + constants.GENERAL.SERVER_HTTP_PORT)
			.get('/')
			.end(function (err, res) {
				expect(res).to.have.status(200);
				expect(res.body).to.include({ success: true, message: 'Welcome to the cervocast :D' });
				done();
			})
	 });
});
