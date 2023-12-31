(()=>{"use strict";var e,a={840:()=>{const e=window.wp.blocks,a=window.React,l=window.wp.i18n,t=window.wp.blockEditor,r=(window.wp.element,window.wp.components),i=JSON.parse('{"u2":"create-block/image-comparison-mgarcia"}');(0,e.registerBlockType)(i.u2,{edit:function({attributes:e,setAttributes:i}){const{imageUrl:m,imageId:c,imageAlt:o,afterimageUrl:n,afterimageId:s,afterimageAlt:g,displaylabels:p,beforeLabel:d,afterLabel:u,displayVertical:f}=e,E=e=>{e&&e.url?i({imageUrl:e.url,imageId:e.id,imageAlt:e?.alt}):i({imageUrl:null,imageId:null,imageAlt:null})},v=e=>{e&&e.url?i({afterimageUrl:e.url,afterimageId:e.id,afterimageAlt:e?.alt}):i({afterimageUrl:null,afterimageId:null,afterimageAlt:null})},_=(0,a.createElement)(t.InspectorControls,{key:"inspector"},(0,a.createElement)(r.PanelBody,{title:(0,l.__)("Image Selection","image-comparison-mgarcia"),initialOpen:!0},(0,a.createElement)("div",{className:"editor-post-image-before-mgarcia"},(0,a.createElement)("h2",{class:"title-compare-mgarcia"},(0,l.__)("Before Image","image-comparison-mgarcia")),(0,a.createElement)(t.MediaUploadCheck,null,(0,a.createElement)(t.MediaUpload,{onSelect:E,value:c,allowedTypes:["image"],render:({open:e})=>(0,a.createElement)("div",{class:"editor-image-mgarcia"},(0,a.createElement)(r.Button,{className:m?"editor-post-featured-image__preview":"editor-post-featured-image__toggle",onClick:e},!m&&(0,l.__)("Choose Before Image","image-comparison-mgarcia"),null!=c&&(0,a.createElement)(r.ResponsiveWrapper,null,(0,a.createElement)("div",null,(0,a.createElement)("img",{src:m})))))})),0!=c&&(0,a.createElement)(t.MediaUploadCheck,null,(0,a.createElement)("div",{className:"remove-image-mgarcia"},(0,a.createElement)(r.Button,{onClick:()=>{i({imageId:0,imageUrl:""})},isLink:!0,isDestructive:!0},(0,l.__)("Remove image","image-comparison-mgarcia"))),(0,a.createElement)(t.MediaUpload,{title:(0,l.__)("Replace image","awp"),value:c,onSelect:E,allowedTypes:["image"],render:({open:e})=>(0,a.createElement)("div",{className:"replace-image-mgarcia"},(0,a.createElement)(r.Button,{onClick:e,isSecondary:!0,isLarge:!0},(0,l.__)("Replace image","image-comparison-mgarcia")))}))),(0,a.createElement)("div",{className:"editor-post-image-after-mgarcia"},(0,a.createElement)("h2",{className:"title-compare-mgarcia"},(0,l.__)("After Image","image-comparison-mgarcia")),(0,a.createElement)(t.MediaUploadCheck,null,(0,a.createElement)(t.MediaUpload,{onSelect:v,value:s,allowedTypes:["image"],render:({open:e})=>(0,a.createElement)("div",{class:"editor-image-mgarcia"},(0,a.createElement)(r.Button,{className:n?"editor-post-featured-image__preview":"editor-post-featured-image__toggle",onClick:e},!n&&(0,l.__)("Choose After Image","image-comparison-mgarcia"),null!=s&&(0,a.createElement)(r.ResponsiveWrapper,null,(0,a.createElement)("div",null,(0,a.createElement)("img",{src:n})))))})),0!=s&&(0,a.createElement)(t.MediaUploadCheck,null,(0,a.createElement)("div",{class:"remove-image-mgarcia"},(0,a.createElement)(r.Button,{onClick:()=>{i({afterimageId:0,afterimageUrl:""})},isLink:!0,isDestructive:!0},(0,l.__)("Remove image","image-comparison-mgarcia"))),(0,a.createElement)(t.MediaUpload,{title:(0,l.__)("Replace image","awp"),value:s,onSelect:v,allowedTypes:["image"],render:({open:e})=>(0,a.createElement)("div",{class:"replace-image-mgarcia"},(0,a.createElement)(r.Button,{onClick:e,isSecondary:!0,isLarge:!0},(0,l.__)("Replace image","image-comparison-mgarcia")))})))),(0,a.createElement)(r.PanelBody,{title:(0,l.__)("Comparison Options","image-comparison-mgarcia"),initialOpen:!1},(0,a.createElement)(r.ToggleControl,{label:(0,l.__)("Display labels","image-comparison-mgarcia"),checked:p,onChange:e=>i({displaylabels:e})}),1==p&&(0,a.createElement)(r.TextControl,{label:"Before Label",value:d,onChange:e=>{i({beforeLabel:e})}}),1==p&&(0,a.createElement)(r.TextControl,{label:"After Label",value:u,onChange:e=>{i({afterLabel:e})}}),(0,a.createElement)(r.ToggleControl,{label:(0,l.__)("Display Vertical","image-comparison-mgarcia"),checked:f,onChange:e=>i({displayVertical:e})}))),b=(0,a.createElement)(t.BlockControls,null,(0,a.createElement)(t.MediaReplaceFlow,{mediaId:c,mediaUrl:m,allowedTypes:["image"],accept:"image/*",onSelect:E,name:m?(0,l.__)("Replace Before","image-comparison-mgarcia"):(0,l.__)("Before Image","image-comparison-mgarcia")}),(0,a.createElement)(t.MediaReplaceFlow,{mediaId:c,mediaUrl:m,allowedTypes:["image"],accept:"image/*",onSelect:v,name:m?(0,l.__)("Replace After","image-comparison-mgarcia"):(0,l.__)("After Image","image-comparison-mgarcia")}));return(0,a.createElement)("div",{...(0,t.useBlockProps)()},_,b,m&&n?(0,a.createElement)("div",null,m||n?(0,a.createElement)("div",{class:1==f?"vertical-compare-mgarcia":"horizontal-compare-mgarcia"},(0,a.createElement)("img-comparison-slider",{direction:1==f?"vertical":"horizontal"},(0,a.createElement)("figure",{slot:"first",class:"before-compare-mgarcia"},(0,a.createElement)("img",{slot:"first",width:"100%",src:m,alt:o}),p&&(0,a.createElement)("figcaption",null,d)),(0,a.createElement)("figure",{slot:"second",class:"after-compare-mgarcia"},(0,a.createElement)("img",{slot:"second",width:"100%",src:n,alt:g}),p&&(0,a.createElement)("figcaption",null,u)))):null):null,(0,a.createElement)("div",{class:m&&n?"hide-uploader-img-mgarcia":"before-image-container"},m?(0,a.createElement)("div",null,m&&(0,a.createElement)("img",{src:m,alt:o})):(0,a.createElement)(t.MediaPlaceholder,{accept:"image/*",labels:{title:"Before Image",instructions:""},allowedTypes:["image"],icon:"format-image",onSelect:E,multiple:!1,handleUpload:!0})),(0,a.createElement)("div",{class:m&&n?"hide-uploader-img-mgarcia":"after-image-container"},n?(0,a.createElement)("div",null,n&&(0,a.createElement)("img",{src:n,alt:g})):(0,a.createElement)(t.MediaPlaceholder,{accept:"image/*",labels:{title:"After Image",instructions:""},allowedTypes:["image"],icon:"format-image",onSelect:v,multiple:!1,handleUpload:!0})))},save:function({attributes:e}){const{imageUrl:l,imageAlt:r,afterimageUrl:i,afterimageAlt:m,displaylabels:c,beforeLabel:o,afterLabel:n,displayVertical:s}=e;return(0,a.createElement)("div",{...t.useBlockProps.save()},l||i?(0,a.createElement)("div",{className:1==s?"vertical-compare-mgarcia":"horizontal-compare-mgarcia"},(0,a.createElement)("img-comparison-slider",{direction:1==s?"vertical":"horizontal"},(0,a.createElement)("figure",{slot:"first",className:"before-compare-mgarcia"},(0,a.createElement)("img",{slot:"first",width:"100%",src:l,alt:r}),c&&(0,a.createElement)("figcaption",null,o)),(0,a.createElement)("figure",{slot:"second",className:"after-compare-mgarcia"},(0,a.createElement)("img",{slot:"second",width:"100%",src:i,alt:m}),c&&(0,a.createElement)("figcaption",null,n)))):null)}})}},l={};function t(e){var r=l[e];if(void 0!==r)return r.exports;var i=l[e]={exports:{}};return a[e](i,i.exports,t),i.exports}t.m=a,e=[],t.O=(a,l,r,i)=>{if(!l){var m=1/0;for(s=0;s<e.length;s++){for(var[l,r,i]=e[s],c=!0,o=0;o<l.length;o++)(!1&i||m>=i)&&Object.keys(t.O).every((e=>t.O[e](l[o])))?l.splice(o--,1):(c=!1,i<m&&(m=i));if(c){e.splice(s--,1);var n=r();void 0!==n&&(a=n)}}return a}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[l,r,i]},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={826:0,431:0};t.O.j=a=>0===e[a];var a=(a,l)=>{var r,i,[m,c,o]=l,n=0;if(m.some((a=>0!==e[a]))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(o)var s=o(t)}for(a&&a(l);n<m.length;n++)i=m[n],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},l=globalThis.webpackChunkimage_comparison_mgarcia=globalThis.webpackChunkimage_comparison_mgarcia||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))})();var r=t.O(void 0,[431],(()=>t(840)));r=t.O(r)})();