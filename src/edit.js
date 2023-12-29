import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	MediaPlaceholder,
	BlockControls,
	InspectorControls,
	MediaReplaceFlow,
	MediaUpload,
	MediaUploadCheck
} from '@wordpress/block-editor';
import {withSelect} from '@wordpress/element';
import './editor.scss';
import {
	PanelBody,
	Button,
	ResponsiveWrapper
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

	const removeMedia = () => {
		setAttributes({
			imageId: 0,
			imageUrl: ''
		});
	}

	const inspectorControls = (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Image Selection', 'slideshow-mgarcia' ) } initialOpen={ true }>
			<div className="editor-post-featured-image">
			<h2 class="title-compare-mgarcia">{ __( 'Before Image', 'slideshow-mgarcia' ) }</h2>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={setImageAttributes}
					value={imageId}
					allowedTypes={ ['image'] }
					render={({open}) => (
						<div class="editor-image-mgarcia">
						<Button 
							className={ !imageUrl ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
							onClick={open}
						>
							{ !imageUrl && __('Choose Before Image', 'image-comparison-mgarcia')}
							{imageId != undefined && 
								<ResponsiveWrapper>
									<div><img src={imageUrl} /></div>
								</ResponsiveWrapper>
							}
						</Button>
						</div>
					)}
				/>
			</MediaUploadCheck>
			{imageId != 0 && 
				<MediaUploadCheck>
					<div class="remove-image-mgarcia"><Button onClick={removeMedia} isLink isDestructive>{__('Remove image', 'image-comparison-mgarcia')}</Button></div>
					<MediaUpload
						title={__('Replace image', 'awp')}
						value={imageId}
						onSelect={setImageAttributes}
						allowedTypes={['image']}
						render={({open}) => (
							<div class="replace-image-mgarcia"><Button onClick={open} isDefault isLarge>{__('Replace image', 'image-comparison-mgarcia')}</Button></div>
						)}
					/>
				</MediaUploadCheck>
			}
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
				name={!imageUrl ? __('Add Image', 'image-comparison-mgarcia') : __('Replace Before', 'image-comparison-mgarcia')}
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
					labels = { { title: 'Before Image', instructions: '' } }
					allowedTypes={['image']}
					icon="format-image"
					onSelect={setImageAttributes}
					multiple={false}
					handleUpload={true}
				/>

			)
		}
		</div>
	);

}
