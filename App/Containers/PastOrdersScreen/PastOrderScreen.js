import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class PastOrdersScreen extends React.Component {
	render() {
		return (
			<View>
				<Text>PastOrdersScreen</Text>
			</View>
<<<<<<< HEAD
		)
=======
		);
>>>>>>> 7a7f3d9e82d112bcb58c394a952b44f58c10a7aa
	}
}

const mapStateToProps = (state) => ({
	token: state.authentication.token
});

<<<<<<< HEAD
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PastOrdersScreen);
=======
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PastOrdersScreen);
>>>>>>> 7a7f3d9e82d112bcb58c394a952b44f58c10a7aa
