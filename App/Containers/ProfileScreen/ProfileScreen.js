import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import AuthActionTypes from '../../Stores/Authentication/Actions';

class ProfileScreen extends React.Component {
	render() {
		return (
			<View>
				<Text>ProfileScreen</Text>
			</View>
		)
	}
}

const mapStateToProps = (state) => ({
	token: state.authentication.token,
	loading: state.authentication.loadingUserInfo
});

const mapDispatchToProps = (dispatch) => ({
	signOut: () => dispatch(AuthActionTypes.signOutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);