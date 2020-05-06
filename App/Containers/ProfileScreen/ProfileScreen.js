import React from 'react';
<<<<<<< HEAD
import { Text, View } from 'react-native';
=======
import { Text, View, Button } from 'react-native';
>>>>>>> 7a7f3d9e82d112bcb58c394a952b44f58c10a7aa
import { connect } from 'react-redux';
import AuthActionTypes from '../../Stores/Authentication/Actions';

class ProfileScreen extends React.Component {
	render() {
<<<<<<< HEAD
		return (
			<View>
				<Text>ProfileScreen</Text>
			</View>
		)
=======
		const { signOut, loading } = this.props;
		return (
			<View>
				<Text>ProfileScreen</Text>
				<Button title="Sign Out" onPress={signOut} disabled={loading} />
			</View>
		);
>>>>>>> 7a7f3d9e82d112bcb58c394a952b44f58c10a7aa
	}
}

const mapStateToProps = (state) => ({
	token: state.authentication.token,
	loading: state.authentication.loadingUserInfo
});

const mapDispatchToProps = (dispatch) => ({
	signOut: () => dispatch(AuthActionTypes.signOutUser())
});

<<<<<<< HEAD
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
=======
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
>>>>>>> 7a7f3d9e82d112bcb58c394a952b44f58c10a7aa
