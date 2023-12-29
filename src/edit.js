import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	MediaPlaceholder,
	BlockControls,
	InspectorControls,
	MediaReplaceFlow,
} from '@wordpress/block-editor';
import './editor.scss';
import {
	PanelBody,
} from '@wordpress/components';

export default function Edit( { attributes, setAttributes }) {
	const {
		imageUrl,
		imageId,
		imageAlt,
	} = attributes;


	const setImageAttributes = (media) => {
		if (!media || !media.url) {
			setAttributes({
				imageUrl: null,
				imageId: null,
				imageAlt: null,
			});
			return;
		}
		setAttributes({
			imageUrl: media.url,
			imageId: media.id,
			imageAlt: media?.alt,
		});
	};

	const inspectorControls = (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Image Selection', 'slideshow-mgarcia' ) } initialOpen={ true }>
			<div className="editor-post-featured-image">
				
			</div>
			</PanelBody>
        </InspectorControls>
	);

	const blockControls = (
		<BlockControls>
			<MediaReplaceFlow
				mediaId={imageId}
				mediaUrl={imageUrl}
				allowedTypes={['image']}
				accept="image/*"
				onSelect={setImageAttributes}
				name={!imageUrl ? __('Add Image', 'image-comparison-mgarcia') : __('Replace Image', 'image-comparison-mgarcia')}
			/>
		</BlockControls>
	);

	return (
		<div { ...useBlockProps() }>
			{ inspectorControls }
			{ blockControls }

			{ imageUrl ? (
			<div><h1>Has Image: {imageUrl}</h1>
				{imageUrl && <img src={imageUrl} alt={imageAlt} />}
			</div>
			) : (
				<MediaPlaceholder
    			accept="image/*"
   				allowedTypes={['image']}
    			onSelect={setImageAttributes}
   				 multiple={false}
    			handleUpload={true}
			/>
			)
		}
		</div>
	);

}
