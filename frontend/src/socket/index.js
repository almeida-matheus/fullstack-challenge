import openSocket from 'socket.io-client';
import constants from '../constants';

const socket = openSocket(constants.API.ROOT);

function subscribeToUpdateParticipations (cb) {
	socket.on('updateParticipations', params => cb(null, params));
}

export { subscribeToUpdateParticipations };
