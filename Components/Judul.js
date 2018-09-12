import React from 'react';
import {Text} from 'react-native';

class Judul extends React.Component
{
	render()
	{
		return(
			<Text style={salon.judul}>
				BioData
			</Text>
		)
	}
}

const salon = {
	judul:{
		color: "#00008B",
		fontSize: 60,
		fontWeight: 'bold'
	}
}

export default Judul;