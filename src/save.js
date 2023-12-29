import { useBlockProps } from '@wordpress/block-editor';

export default function save( {attributes} ) {

	const {
		imageUrl,
		imageAlt,
	} = attributes;

	return (
		<div { ...useBlockProps.save() }>
			{ 'Image Comparison Mgarcia – hello from the saved content!' }
			<h1>Has Image: {imageUrl}</h1>
			{imageUrl && <img src={imageUrl} alt={imageAlt} />}
		</div>
	);
}
