import participationActions from '../../redux-constants/participation';

export function getParticipations () {
	return {
		type: participationActions.GET_PARTICIPATIONS
	};
}
