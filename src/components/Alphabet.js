import React from 'react'

import Hiragana from './Hiragana'

export default function Alphabet(props) {

	if (props.language === 'japanese') {

		return <Hiragana />
	}

	return null
}
