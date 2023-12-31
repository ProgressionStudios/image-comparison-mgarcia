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
	ResponsiveWrapper,
	ToggleControl,
	TextControl
} from '@wordpress/components';

export default function Edit( { attributes, setAttributes }) {
	
	const {
		imageUrl,
		imageId,
		imageAlt,
		afterimageUrl,
		afterimageId,
		afterimageAlt,
		displaylabels,
		beforeLabel,
		afterLabel,
		displayVertical,
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

	const setAfterImageAttributes = (aftermedia) => {
		if (!aftermedia || !aftermedia.url) {
			setAttributes({
				afterimageUrl: null,
				afterimageId: null,
				afterimageAlt: null,
			});
			return;
		}
		setAttributes({
			afterimageUrl: aftermedia.url,
			afterimageId: aftermedia.id,
			afterimageAlt: aftermedia?.alt,
		});
	};

	const removeAfterMedia = () => {
		setAttributes({
			afterimageId: 0,
			afterimageUrl: ''
		});
	}

	const inspectorControls = (
		<InspectorControls key="inspector">
			<PanelBody title={ __( 'Image Selection', 'image-comparison-mgarcia' ) } initialOpen={ true }>
				<div className="editor-post-image-before-mgarcia">
					<h2 class="title-compare-mgarcia">{ __( 'Before Image', 'image-comparison-mgarcia' ) }</h2>
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
									{ !imageUrl && __('Choose Before Image', 'image-comparison-mgarcia') }
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
							<div className="remove-image-mgarcia"><Button onClick={removeMedia} isLink isDestructive>{__('Remove image', 'image-comparison-mgarcia')}</Button></div>
							<MediaUpload
								title={__('Replace image', 'awp')}
								value={imageId}
								onSelect={setImageAttributes}
								allowedTypes={['image']}
								render={({open}) => (
									<div className="replace-image-mgarcia"><Button onClick={open} isSecondary isLarge>{__('Replace image', 'image-comparison-mgarcia')}</Button></div>
								)}
							/>
						</MediaUploadCheck>
					}
				</div>

				<div className="editor-post-image-after-mgarcia">
					<h2 className="title-compare-mgarcia">{ __( 'After Image', 'image-comparison-mgarcia' ) }</h2>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={setAfterImageAttributes}
							value={afterimageId}
							allowedTypes={ ['image'] }
							render={({open}) => (
								<div class="editor-image-mgarcia">
								<Button 
									className={ !afterimageUrl ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
									onClick={open}
								>
									{ !afterimageUrl && __('Choose After Image', 'image-comparison-mgarcia') }
									{afterimageId != undefined && 
										<ResponsiveWrapper>
											<div><img src={afterimageUrl} /></div>
										</ResponsiveWrapper>
									}
								</Button>
								</div>
							)}
						/>
					</MediaUploadCheck>
					{afterimageId != 0 && 
						<MediaUploadCheck>
							<div class="remove-image-mgarcia"><Button onClick={removeAfterMedia} isLink isDestructive>{__('Remove image', 'image-comparison-mgarcia')}</Button></div>
							<MediaUpload
								title={__('Replace image', 'awp')}
								value={afterimageId}
								onSelect={setAfterImageAttributes}
								allowedTypes={['image']}
								render={({open}) => (
									<div class="replace-image-mgarcia"><Button onClick={open} isSecondary isLarge>{__('Replace image', 'image-comparison-mgarcia')}</Button></div>
								)}
							/>
						</MediaUploadCheck>
					}
					</div>
			</PanelBody>
			<PanelBody title={ __( 'Comparison Options', 'image-comparison-mgarcia' ) } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Display labels', 'image-comparison-mgarcia' ) }
					checked={ displaylabels }
					onChange={ ( value ) =>
						setAttributes( { displaylabels: value } )
					}
				/>
				{ displaylabels == 1 && (
					<TextControl
						label="Before Label"
						value={ beforeLabel }
						onChange={ ( nextValue ) => {
							setAttributes( {
								beforeLabel: nextValue,
							} );
						} }
					/>
				) }
				{ displaylabels == 1 && (
					<TextControl
						label="After Label"
						value={ afterLabel }
						onChange={ ( nextValue ) => {
							setAttributes( {
								afterLabel: nextValue,
							} );
						} }
					/>
				) }
				<ToggleControl
					label={ __( 'Display Vertical', 'image-comparison-mgarcia' ) }
					checked={ displayVertical }
					onChange={ ( value ) =>
						setAttributes( { displayVertical: value } )
					}
				/>
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
				name={!imageUrl ? __('Before Image', 'image-comparison-mgarcia') : __('Replace Before', 'image-comparison-mgarcia')}
			/>
			<MediaReplaceFlow
				mediaId={imageId}
				mediaUrl={imageUrl}
				allowedTypes={['image']}
				accept="image/*"
				onSelect={setAfterImageAttributes}
				name={!imageUrl ? __('After Image', 'image-comparison-mgarcia') : __('Replace After', 'image-comparison-mgarcia')}
			/>
		</BlockControls>
	);

	return (
		<div { ...useBlockProps() }>
			{ inspectorControls }
			{ blockControls }

			{ imageUrl && afterimageUrl ? (
			<div>
				{ imageUrl || afterimageUrl  ? (
					<div class={ ( displayVertical == 1 ) ? ( 'vertical-compare-mgarcia' ) : ( 'horizontal-compare-mgarcia' )  }>
						<img-comparison-slider direction={ ( displayVertical == 1 ) ? ( 'vertical' ) : ( 'horizontal' )  }>
							<figure slot="first" class="before-compare-mgarcia">
								<img slot="first" width="100%" src={imageUrl} alt={imageAlt} />
								{ displaylabels && <figcaption>{ beforeLabel }</figcaption> }
							</figure>
							<figure slot="second" class="after-compare-mgarcia">
								<img slot="second" width="100%" src={afterimageUrl} alt={afterimageAlt} />
								{ displaylabels && <figcaption>{ afterLabel }</figcaption> }
							</figure>
						</img-comparison-slider>
					</div>
				) : null
				}
			</div>
			) : null
			}
			
			<div class={ ( imageUrl &&  afterimageUrl ) ? ( 'hide-uploader-img-mgarcia' ) : ( 'before-image-container' )  }>
				{ imageUrl ? (
					<div>
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
			<div class={ ( imageUrl &&  afterimageUrl ) ? ( 'hide-uploader-img-mgarcia' ) : ( 'after-image-container' )  }>
				{ afterimageUrl ? (
					<div>
						{ afterimageUrl && <img src={afterimageUrl} alt={afterimageAlt} /> }
					</div>
					) : (
					<MediaPlaceholder
						accept="image/*"
						labels = { { title: 'After Image', instructions: '' } }
						allowedTypes={['image']}
						icon="format-image"
						onSelect={setAfterImageAttributes}
						multiple={false}
						handleUpload={true}
					/>
					)
				}
			</div>
		</div>
	);

}
